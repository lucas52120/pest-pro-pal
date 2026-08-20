// Generates public/sitemap.xml from the real routes declared in src/App.tsx.
// Guarantees: no trailing slash (except root), no www, no legacy /services/* paths,
// one entry per route that the SSG prerenders to a 200 OK static HTML file.

import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://gf-nuisibles.fr";

const app = readFileSync(resolve("src/App.tsx"), "utf-8");

const routes = Array.from(app.matchAll(/<Route\s+path="([^"]+)"/g))
  .map((m) => m[1])
  .filter((p) => p !== "*" && !p.includes(":") && p.startsWith("/"))
  .map((p) => (p !== "/" ? p.replace(/\/+$/, "") : p));

const unique = Array.from(new Set(routes));

const priorityFor = (p: string) => {
  if (p === "/") return "1.0";
  if (!p.includes("-")) return "0.9";
  return /-(chaumont|saint-dizier|langres)$/.test(p) ? "0.8" : "0.7";
};

const urls = unique.map((p) =>
  [
    "  <url>",
    `    <loc>${BASE_URL}${p}</loc>`,
    `    <changefreq>${p === "/" ? "weekly" : "monthly"}</changefreq>`,
    `    <priority>${priorityFor(p)}</priority>`,
    "  </url>",
  ].join("\n"),
);

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls,
  "</urlset>",
  "",
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${unique.length} entries)`);
