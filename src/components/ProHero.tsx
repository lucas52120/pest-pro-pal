import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Briefcase, CheckCircle2, Phone } from "lucide-react";
import Breadcrumbs, { Crumb } from "@/components/Breadcrumbs";
import GoogleRating from "@/components/GoogleRating";
import { callButton } from "@/components/ServiceBlocks";

/** Light hero of the professional pages, so they look different from the pages for individuals. */
const ProHero = ({
  breadcrumbs,
  badge,
  title,
  accent,
  text,
  checks,
  aside,
}: {
  breadcrumbs: Crumb[];
  badge: string;
  title: string;
  /** End of the title, in orange. */
  accent: string;
  text: string;
  checks: string[];
  /** The right-hand side on a computer, below the text on a phone. */
  aside: ReactNode;
}) => (
  <section className="relative overflow-hidden bg-background px-4 pb-14 pt-28 md:px-8 md:pb-20 md:pt-36 lg:px-16">
    <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-24 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-3xl" />
    <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 -left-40 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
    <div className="container-narrow relative grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
      <div>
        <Breadcrumbs items={breadcrumbs} light />
        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 font-heading text-sm font-semibold text-accent">
          <Briefcase className="h-4 w-4" aria-hidden="true" />
          {badge}
        </p>
        <h1 className="mb-5 font-heading text-4xl font-extrabold leading-tight text-primary md:text-5xl lg:text-6xl">
          {title} <span className="text-accent">{accent}</span>
        </h1>
        <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">{text}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="tel:0765256792" className={callButton}>
            <Phone className="h-5 w-5" aria-hidden="true" />
            Appeler le 07 65 25 67 92
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-6 py-4 font-heading font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Demander un devis pro
          </Link>
        </div>
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {checks.map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <GoogleRating className="mt-6" />
      </div>
      <div>{aside}</div>
    </div>
  </section>
);

export default ProHero;
