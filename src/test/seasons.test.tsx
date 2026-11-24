import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act } from "react";
import { hydrateRoot } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { getSeason, seasonContent, useSeason } from "@/data/seasons";

describe("seasons", () => {
  it("follows the calendar", () => {
    const byMonth = Array.from({ length: 12 }, (_, month) => getSeason(new Date(2027, month, 15)));
    expect(byMonth).toEqual([
      "hiver", "hiver", "printemps", "printemps", "ete", "ete", "ete", "ete", "ete", "ete", "hiver", "hiver",
    ]);
  });

  it("shows the seven services in every season, with a different lead", () => {
    const lists = (["hiver", "printemps", "ete"] as const).map((season) => seasonContent(season).services.map((s) => s.path));
    for (const paths of lists) expect(new Set(paths).size).toBe(7);
    expect(lists.map((paths) => paths[0])).toEqual(["/deratisation", "/taupes", "/guepes-frelons"]);
  });

  describe("on a page prerendered in another season", () => {
    beforeEach(() => void vi.useFakeTimers({ toFake: ["Date"] }));
    afterEach(() => {
      vi.useRealTimers();
      vi.restoreAllMocks();
      document.body.innerHTML = "";
    });

    it("hydrates without mismatch, then switches to the visitor's season", async () => {
      const Page = () => <p data-season={useSeason()}>{seasonContent(useSeason()).services[0].title}</p>;
      const errors = vi.spyOn(console, "error").mockImplementation(() => undefined);

      vi.setSystemTime(new Date(2026, 11, 1));
      document.body.innerHTML = `<div id="root">${renderToString(<Page />)}</div>`;
      expect(document.body.textContent).toBe("Rats et souris");

      vi.setSystemTime(new Date(2027, 6, 1));
      await act(async () => void hydrateRoot(document.getElementById("root")!, <Page />));
      expect(document.body.textContent).toBe("Guêpes et frelons");
      expect(errors.mock.calls.filter((call) => /hydrat|did not match/i.test(String(call[0])))).toEqual([]);
    });
  });
});
