import { defineConfig, Plugin, PluginOption, build as viteBuild } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { pathToFileURL } from "url";

/* ─────────────────────────────────────────────
   SSG / Prerender
   Renders every URL listed in public/sitemap.xml
   to real static HTML (head + body) so Googlebot
   receives fully-formed pages, not an empty
   <div id="root"></div>.
   ───────────────────────────────────────────── */
function prerenderSsgPlugin(): Plugin {
  return {
    name: "prerender-ssg",
    apply: "build",
    enforce: "post",
    closeBundle: async () => {
      if (process.env.__GF_SSR_BUILD__) return; // avoid recursion in the SSR pass

      const root = __dirname;
      const distDir = path.resolve(root, "dist");
      const templatePath = path.join(distDir, "index.html");
      if (!fs.existsSync(templatePath)) return;
      const template = fs.readFileSync(templatePath, "utf-8");

      // 1. Collect routes from the sitemap (single source of truth).
      const sitemapPath = path.resolve(root, "public/sitemap.xml");
      if (!fs.existsSync(sitemapPath)) {
        console.warn("⚠️  SSG: public/sitemap.xml missing — skipping prerender");
        return;
      }
      const sitemap = fs.readFileSync(sitemapPath, "utf-8");
      const routes = Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g))
        .map((m) => {
          try {
            const p = new URL(m[1]).pathname;
            return p !== "/" ? p.replace(/\/+$/, "") : p;
          } catch {
            return null;
          }
        })
        .filter((p): p is string => !!p);

      // 2. Build the SSR bundle.
      const ssrOutDir = path.resolve(root, ".ssr-build");
      process.env.__GF_SSR_BUILD__ = "1";
      try {
        await viteBuild({
          configFile: false,
          root,
          logLevel: "warn",
          plugins: [react()],
          resolve: { alias: { "@": path.resolve(root, "./src") } },
          build: {
            ssr: path.resolve(root, "src/entry-server.tsx"),
            outDir: ssrOutDir,
            emptyOutDir: true,
            rollupOptions: { output: { format: "esm", entryFileNames: "entry-server.mjs" } },
          },
        });
      } finally {
        delete process.env.__GF_SSR_BUILD__;
      }

      const { render } = await import(
        pathToFileURL(path.join(ssrOutDir, "entry-server.mjs")).href
      );

      // 3. Render each route to static HTML.
      let count = 0;
      let failed: string[] = [];
      for (const route of routes) {
        let rendered: { html: string; head: string; ok?: boolean };
        try {
          rendered = render(route);
        } catch (err) {
          console.warn(`⚠️  SSG: failed to render ${route}:`, err);
          failed.push(route);
          continue;
        }
        if (rendered.ok === false) failed.push(route);

        let html = template
          .replace("<!--ssr-head-->", rendered.head)
          .replace('<div id="root"></div>', `<div id="root">${rendered.html}</div>`);

        // Drop the static fallback head tags that Helmet already replaced.
        html = dedupeHead(html);

        // Align the social tags with this page's real title/description/URL.
        html = syncSocialTags(html);

        if (route === "/") {
          fs.writeFileSync(path.join(distDir, "index.html"), html);
        } else {
          const segments = route.split("/").filter(Boolean);
          // a) /foo.html  → served by Netlify at /foo with no redirect
          const flatPath = path.join(distDir, ...segments) + ".html";
          fs.mkdirSync(path.dirname(flatPath), { recursive: true });
          fs.writeFileSync(flatPath, html);
          // b) /foo/index.html → covers direct hits on /foo/
          const dirPath = path.join(distDir, ...segments);
          fs.mkdirSync(dirPath, { recursive: true });
          fs.writeFileSync(path.join(dirPath, "index.html"), html);
        }
        count++;
      }

      fs.rmSync(ssrOutDir, { recursive: true, force: true });
      console.log(`✅ SSG: prerendered ${count}/${routes.length} static HTML pages`);
      if (failed.length) {
        console.warn(`⚠️  SSG: ${failed.length} route(s) rendered without server HTML: ${failed.join(", ")}`);
      }
    },
  };
}

/** Keeps the first <title> and the first of each meta/link and removes later duplicates. */
function syncSocialTags(html: string): string {
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1];
  const description = html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/)?.[1];
  const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/)?.[1];

  const set = (attr: "property" | "name", key: string, value?: string) => {
    if (!value) return;
    const re = new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`);
    html = html.replace(re, `$1${value}$2`);
  };

  set("property", "og:title", title);
  set("name", "twitter:title", title);
  set("property", "og:description", description);
  set("name", "twitter:description", description);
  set("property", "og:url", canonical);

  return html;
}

function dedupeHead(html: string): string {
  const headMatch = html.match(/<head>([\s\S]*?)<\/head>/);
  if (!headMatch) return html;
  const seen = new Set<string>();
  const head = headMatch[1].replace(
    /<title[^>]*>[\s\S]*?<\/title>|<meta\s[^>]*>|<link\s[^>]*rel="canonical"[^>]*>/g,
    (tag) => {
      const key = tag.startsWith("<title")
        ? "title"
        : tag.startsWith("<link")
          ? "canonical"
          : (tag.match(/(?:name|property)="([^"]+)"/)?.[1] ?? tag);
      if (key === "viewport" || key === "charset" || tag.includes("charset")) return tag;
      if (seen.has(key)) return "";
      seen.add(key);
      return tag;
    },
  );
  return html.replace(headMatch[0], `<head>${head}</head>`);
}

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const plugins: PluginOption[] = [react()];
  if (mode === "development") {
    const { componentTagger } = await import("lovable-tagger");
    plugins.push(componentTagger() as PluginOption);
  }
  plugins.push(prerenderSsgPlugin());

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: { overlay: false },
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
