import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import App from "./App";

/**
 * Renders one route to static HTML for the SSG pass.
 * Never throws: a component or data failure degrades to head-only output
 * (the client bundle then hydrates the page) instead of aborting the build
 * or shipping a broken/5xx page.
 */
export function render(url: string): { html: string; head: string; ok: boolean } {
  // Normalise: no trailing slash except the homepage, no query/hash.
  let location = (url || "/").split(/[?#]/)[0];
  if (location !== "/" ) location = location.replace(/\/+$/, "") || "/";
  if (!location.startsWith("/")) location = `/${location}`;

  const helmetContext: { helmet?: HelmetServerState } = {};

  let html = "";
  let ok = true;
  try {
    html = renderToString(
      <HelmetProvider context={helmetContext}>
        <App Router={StaticRouter} routerProps={{ location }} />
      </HelmetProvider>
    );
  } catch (err) {
    ok = false;
    html = "";
    console.warn(
      `SSG: renderToString failed for ${location} — falling back to client render:`,
      err instanceof Error ? err.message : err
    );
  }

  let head = "";
  try {
    const h = helmetContext.helmet;
    head = h
      ? [h.title, h.meta, h.link, h.script]
          .map((t) => (t ? t.toString() : ""))
          .filter(Boolean)
          .join("\n    ")
      : "";
  } catch {
    head = "";
  }

  return { html, head, ok };
}
