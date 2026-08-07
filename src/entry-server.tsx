import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import App from "./App";

export function render(url: string): { html: string; head: string } {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <App Router={StaticRouter} routerProps={{ location: url }} />
    </HelmetProvider>
  );

  const h = helmetContext.helmet;
  const head = h
    ? [h.title, h.meta, h.link, h.script]
        .map((t) => t.toString())
        .filter(Boolean)
        .join("\n    ")
    : "";

  return { html, head };
}
