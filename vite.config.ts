import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";
import { cities, serviceDefinitionsData } from "./seo-data";

/* ─── SSG Prerender Plugin ─── */
function prerenderSsgPlugin(): Plugin {
  return {
    name: "prerender-ssg",
    apply: "build",
    closeBundle: async () => {
      const distDir = path.resolve(__dirname, "dist");
      const templatePath = path.join(distDir, "index.html");
      if (!fs.existsSync(templatePath)) return;
      const template = fs.readFileSync(templatePath, "utf-8");

      let count = 0;

      for (const city of cities) {
        for (const svcSlug of city.services) {
          const svcDef = serviceDefinitionsData.find((s) => s.slug === svcSlug);
          if (!svcDef) continue;

          const content = svcDef.getContent(city.name, city.department, city.variation);

          // Build static HTML
          let html = template;

          // Replace <title>
          html = html.replace(/<title>[^<]*<\/title>/, `<title>${escHtml(content.seoTitle)}</title>`);

          // Replace meta tags
          html = replaceMeta(html, 'meta[name="description"]', 'name="description"', content.metaDescription);
          html = replaceMeta(html, 'meta[property="og:title"]', 'property="og:title"', content.seoTitle);
          html = replaceMeta(html, 'meta[name="twitter:title"]', 'name="twitter:title"', content.seoTitle);
          html = replaceMeta(html, 'meta[property="og:description"]', 'property="og:description"', content.metaDescription);
          html = replaceMeta(html, 'meta[name="twitter:description"]', 'name="twitter:description"', content.metaDescription);

          // Inject semantic HTML content into #root for SSG
          const staticBody = buildStaticBody(content, city.name, city.department);
          html = html.replace(
            '<div id="root"></div>',
            `<div id="root">${staticBody}</div>`
          );

          const dir = path.join(distDir, city.slug, svcSlug);
          fs.mkdirSync(dir, { recursive: true });
          fs.writeFileSync(path.join(dir, "index.html"), html);
          count++;
        }
      }
      console.log(`✅ SSG: generated ${count} static HTML pages with full semantic content`);
    },
  };
}

function escHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function replaceMeta(html: string, _selector: string, attr: string, value: string): string {
  const regex = new RegExp(`(<meta\\s+${attr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s+content=")[^"]*(")`);
  return html.replace(regex, `$1${escHtml(value)}$2`);
}

function buildStaticBody(content: {
  seoTitle: string;
  serviceCallTitle: string;
  serviceCallSubtitle: string;
  intro: string;
  expertise: string;
  method: string;
  cta: string;
}, city: string, department: string): string {
  return `
    <header>
      <nav aria-label="Navigation principale">
        <a href="/">G&amp;F Nuisibles</a>
      </nav>
    </header>
    <main>
      <section>
        <h1>${escHtml(content.seoTitle)}</h1>
        <p>G&amp;F Nuisibles — Votre expert à ${escHtml(city)}, ${escHtml(department)}.</p>
      </section>
      <section>
        <h2>${escHtml(content.serviceCallTitle)}</h2>
        <p>${escHtml(content.serviceCallSubtitle)}</p>
      </section>
      <article>
        <section>
          <h3>${escHtml(content.seoTitle)}</h3>
          <p>${escHtml(content.intro)}</p>
        </section>
        <section>
          <h3>L&apos;expertise G&amp;F Nuisibles</h3>
          <p>${escHtml(content.expertise)}</p>
        </section>
        <section>
          <h3>Notre méthode d&apos;intervention</h3>
          <p>${escHtml(content.method)}</p>
        </section>
        <p><strong>${escHtml(content.cta)}</strong></p>
      </article>
      <aside>
        <h4>Intervention à ${escHtml(city)}</h4>
        <p>${escHtml(city)} et environs — ${escHtml(department)}</p>
        <p>Lun–Ven : 8h–19h | Urgence week-end</p>
        <a href="tel:0765256792">07.65.25.67.92</a>
        <a href="/contact">Devis gratuit</a>
      </aside>
    </main>
    <footer>
      <p>&copy; G&amp;F Nuisibles — Tous droits réservés</p>
    </footer>`;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    prerenderSsgPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
