import { describe, expect, it } from "vitest";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { retiredServiceRedirects } from "@/data/retiredServiceRedirects";

const app = readFileSync("src/App.tsx", "utf8");
const routes = Array.from(app.matchAll(/<Route\s+path="([^"]+)"/g), (match) => match[1]).filter((path) => path !== "*");

const sourceFiles = readdirSync("src", { recursive: true, encoding: "utf8" })
  .filter((file) => /\.tsx?$/.test(file) && !file.startsWith("test"))
  .map((file) => join("src", file));

describe("internal links", () => {
  it("only point to routes that exist", () => {
    const known = new Set([...routes, ...Object.keys(retiredServiceRedirects)]);
    const broken: string[] = [];
    for (const file of sourceFiles) {
      const source = readFileSync(file, "utf8");
      for (const [, target] of source.matchAll(/\b(?:to|href)(?:=|:\s*)"(\/[^"]*)"/g)) {
        const path = target.split(/[?#]/)[0];
        if (!known.has(path)) broken.push(`${file}: ${target}`);
      }
    }
    expect(broken).toEqual([]);
  });
});

describe("404 handling", () => {
  it("prerenders every route, since unknown URLs now answer with a 404 status", () => {
    const sitemap = readFileSync("public/sitemap.xml", "utf8");
    const prerendered = new Set(
      Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g), (match) => {
        const path = new URL(match[1]).pathname;
        return path === "/" ? path : path.replace(/\/+$/, "");
      }),
    );
    expect(routes.filter((route) => !prerendered.has(route))).toEqual([]);
  });

  it("ends the hosting rules with the 404 page", () => {
    const rules = readFileSync("public/_redirects", "utf8").trim().split("\n");
    expect(rules.at(-1)?.split(/\s+/)).toEqual(["/*", "/404.html", "404"]);
  });
});
