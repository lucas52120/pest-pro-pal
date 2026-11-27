import { Link } from "react-router-dom";
import { CheckCircle2, LucideIcon, Phone } from "lucide-react";
import { callButton } from "@/components/ServiceBlocks";

/** Blocks shared by the professional pages, so they all look alike and unlike the pages for individuals. */

/** Hero photo with a white checklist card on top of it. */
export const HeroPhotoCard = ({ image, alt, cardTitle, items }: { image: string; alt: string; cardTitle: string; items: string[] }) => (
  <div className="relative sm:pb-10 lg:pb-0">
    <img src={image} alt={alt} className="h-72 w-full rounded-3xl object-cover shadow-xl sm:h-96 lg:h-[30rem]" />
    <div className="relative mx-4 -mt-16 rounded-2xl bg-card p-5 shadow-xl sm:absolute sm:-bottom-2 sm:right-6 sm:mx-0 sm:mt-0 sm:w-72 lg:-left-10 lg:bottom-8 lg:right-auto">
      <p className="mb-3 font-heading font-bold text-primary">{cardTitle}</p>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

/** Dark band of big figures right under the hero. */
export const FactsBand = ({ facts }: { facts: { value: string; label: string }[] }) => (
  <section className="bg-primary px-4 py-12 md:px-8 lg:px-16">
    <ul className={`container-narrow grid gap-x-6 gap-y-8 ${facts.length === 4 ? "grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}`}>
      {facts.map((fact) => (
        <li key={fact.value}>
          <span className="block font-heading text-4xl font-extrabold text-accent md:text-5xl">{fact.value}</span>
          <span className="mt-2 block text-sm leading-snug text-primary-foreground/80">{fact.label}</span>
        </li>
      ))}
    </ul>
  </section>
);

/** Cards with an orange top border: the stakes for the client. */
export const RiskCards = ({ items }: { items: { icon: LucideIcon; title: string; text: string }[] }) => (
  <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {items.map(({ icon: Icon, title, text }) => (
      <li key={title} className="rounded-2xl border-t-4 border-accent bg-card p-6 shadow-sm">
        <Icon className="mb-4 h-8 w-8 text-accent" aria-hidden="true" />
        <h3 className="mb-2 font-heading text-lg font-bold text-primary">{title}</h3>
        <p className="leading-relaxed text-muted-foreground">{text}</p>
      </li>
    ))}
  </ul>
);

/** The contract in numbered parts (01, 02, 03). */
export const ProgramCards = ({ parts }: { parts: { title: string; intro: string; points: string[] }[] }) => (
  <ol className="grid gap-6 lg:grid-cols-3">
    {parts.map((part, i) => (
      <li key={part.title} className="rounded-2xl bg-card p-7 shadow-sm">
        <span className="font-heading text-5xl font-extrabold text-accent/30">0{i + 1}</span>
        <h3 className="mt-2 font-heading text-2xl font-bold text-primary">{part.title}</h3>
        <p className="mb-5 mt-1 text-muted-foreground">{part.intro}</p>
        <ul className="space-y-3">
          {part.points.map((point) => (
            <li key={point} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <span className="leading-relaxed text-muted-foreground">{point}</span>
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ol>
);

/** Small cards on a grey background: what the client can count on. */
export const PromiseCards = ({ items }: { items: { icon: LucideIcon; title: string; text: string }[] }) => (
  <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {items.map(({ icon: Icon, title, text }) => (
      <li key={title} className="rounded-2xl bg-secondary p-6">
        <Icon className="mb-3 h-7 w-7 text-accent" aria-hidden="true" />
        <h3 className="mb-1 font-heading text-lg font-bold text-primary">{title}</h3>
        <p className="leading-relaxed text-muted-foreground">{text}</p>
      </li>
    ))}
  </ul>
);

/** Two columns: what the rules ask, and what the contract brings. */
export const RulesCompare = ({ asks, brings }: { asks: { title: string; items: string[] }; brings: { title: string; items: string[] } }) => (
  <div className="grid gap-6 lg:grid-cols-2">
    <div className="rounded-2xl bg-card p-7 shadow-sm">
      <h3 className="mb-4 font-heading text-xl font-bold text-primary">{asks.title}</h3>
      <ul className="space-y-3 leading-relaxed text-muted-foreground">
        {asks.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
    <div className="rounded-2xl bg-primary p-7 text-primary-foreground shadow-sm">
      <h3 className="mb-4 font-heading text-xl font-bold">{brings.title}</h3>
      <ul className="space-y-3 leading-relaxed text-primary-foreground/85">
        {brings.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

/** Big dark call to action at the end of the page. */
export const FinalCta = ({ title, text, checks }: { title: string; text: string; checks: string[] }) => (
  <section className="px-4 py-16 md:px-8 lg:px-16 lg:py-24">
    <div className="container-narrow relative overflow-hidden rounded-3xl bg-primary p-8 md:p-12">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
      <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-heading text-2xl font-extrabold text-primary-foreground md:text-4xl">{title}</p>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-primary-foreground/80">{text}</p>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-primary-foreground/85">
            {checks.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <a href="tel:0765256792" className={callButton}>
            <Phone className="h-5 w-5" aria-hidden="true" />
            Appeler le 07 65 25 67 92
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/40 px-6 py-4 font-heading font-bold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            Demander un devis pro
          </Link>
        </div>
      </div>
    </div>
  </section>
);
