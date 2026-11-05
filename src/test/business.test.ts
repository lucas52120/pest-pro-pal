import { describe, expect, it } from "vitest";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const sources = readdirSync("src", { recursive: true, encoding: "utf8" })
  .filter((file) => /\.tsx?$/.test(file) && !file.startsWith("test") && file !== join("data", "business.ts"))
  .map((file) => join("src", file))
  .concat("index.html");

const filesMatching = (pattern: RegExp) => sources.filter((file) => pattern.test(readFileSync(file, "utf8")));

describe("single business record", () => {
  it("declares the business only in src/data/business.ts", () => {
    expect(filesMatching(/"?@type"?:\s*"(LocalBusiness|PestControlService)"/)).toEqual([]);
    expect(filesMatching(/GeoCoordinates|openingHours/)).toEqual([]);
  });

  it("keeps G&F only as an alternate name, outside the logo", () => {
    expect(filesMatching(/G&(amp;)?F/)).toEqual([]);
  });

  it("uses one phone format", () => {
    expect(filesMatching(/\+33[ .]?7[ .]?65|07\.65/)).toEqual([]);
  });

  it("uses one Facebook page", () => {
    expect(filesMatching(/facebook\.com\/(?!gfnuisibles\b)/)).toEqual([]);
  });

  it("states the same opening hours in the visible text", () => {
    expect(filesMatching(/Lun–Ven|8h–19h/)).toEqual([]);
  });
});
