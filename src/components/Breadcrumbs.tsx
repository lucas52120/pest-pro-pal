import { Fragment } from "react";
import { Link } from "react-router-dom";

export interface Crumb {
  label: string;
  to: string;
}

const SITE_URL = "https://gf-nuisibles.fr";

type BreadcrumbListItem = { "@type"?: string; itemListElement?: { name: string; item: string }[] };

/** Reads a page's BreadcrumbList JSON-LD, so the visible trail cannot drift from it. */
export const breadcrumbsFrom = (jsonLd: { "@graph"?: unknown[] }): Crumb[] => {
  const blocks = (jsonLd["@graph"] ?? [jsonLd]) as BreadcrumbListItem[];
  const list = blocks.find((block) => block["@type"] === "BreadcrumbList");
  return (list?.itemListElement ?? []).map(({ name, item }) => ({
    label: name,
    to: item.replace(SITE_URL, "") || "/",
  }));
};

const Breadcrumbs = ({ items }: { items: Crumb[] }) => (
  <nav aria-label="Fil d'Ariane" className="mb-4">
    <ol className="flex flex-wrap items-center gap-x-1.5 text-sm text-primary-foreground/70">
      {items.map((item, i) => (
        <Fragment key={item.to}>
          {i > 0 && <li aria-hidden="true">›</li>}
          <li>
            {i < items.length - 1 ? (
              <Link to={item.to} className="transition-colors hover:text-accent">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        </Fragment>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
