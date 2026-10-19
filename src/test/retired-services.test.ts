import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { CITIES } from "@/data/cities";
import { retiredServiceRedirects } from "@/data/retiredServiceRedirects";

describe("retired Désinsectisation service", () => {
  it("is absent from active city services and the sitemap", () => {
    expect(CITIES.flatMap((city) => city.links).filter((link) => link.to.startsWith("/desinsectisation"))).toEqual([]);
    expect(readFileSync("public/sitemap.xml", "utf8")).not.toContain("/desinsectisation");
  });

  it("preserves the seven local Cafards & Blattes services", () => {
    expect(CITIES.flatMap((city) => city.links).filter((link) => link.to.startsWith("/cafards-blattes-")).length).toBe(7);
    expect(retiredServiceRedirects["/desinsectisation-chaumont"]).toBe("/cafards-blattes-chaumont");
    expect(retiredServiceRedirects["/desinsectisation-wassy"]).toBe("/cafards-blattes");
  });

  it("redirects every retired URL to an active route with a matching permanent hosting redirect", () => {
    const app = readFileSync("src/App.tsx", "utf8");
    const active = Array.from(app.matchAll(/<Route\s+path="([^"]+)"/g), (match) => match[1]);
    const hosting = readFileSync("public/_redirects", "utf8");
    expect(Object.keys(retiredServiceRedirects)).toHaveLength(19);
    for (const [from, to] of Object.entries(retiredServiceRedirects)) {
      expect(active).toContain(to);
      expect(active).not.toContain(from);
      expect(hosting).toContain(`${from} ${to} 301!`);
    }
  });
});