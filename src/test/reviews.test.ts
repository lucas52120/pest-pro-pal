import { describe, expect, it } from "vitest";
import { cleanComment } from "../../supabase/functions/_shared/reviews";

describe("Google review comments", () => {
  it("keep the original text, wherever Google puts its translation", () => {
    expect(cleanComment("Très sérieux.")).toBe("Très sérieux.");
    expect(cleanComment("Très sérieux.\n\n(Translated by Google)\nVery serious.")).toBe("Très sérieux.");
    expect(cleanComment("(Translated by Google) Very serious.\n\n(Original)\nTrès sérieux.")).toBe("Très sérieux.");
    expect(cleanComment(undefined)).toBe("");
  });
});
