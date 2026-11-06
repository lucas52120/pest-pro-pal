import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinksSectionProps {
  title: string;
  intro: ReactNode;
  links: { label: string; to: string }[];
  children?: ReactNode;
}

/** Internal-linking section: an H2, an intro and links shown as pills. */
const LinksSection = ({ title, intro, links, children }: LinksSectionProps) => (
  <section className="section-padding">
    <div className="container-narrow">
      <h2 className="mb-6 font-heading text-3xl font-extrabold text-primary md:text-4xl">{title}</h2>
      <p className="mb-6 leading-relaxed text-muted-foreground">{intro}</p>
      <ul className="flex flex-wrap gap-2">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="inline-block rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  </section>
);

export default LinksSection;
