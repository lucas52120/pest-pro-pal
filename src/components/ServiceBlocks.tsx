import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, CheckCircle2, ChevronDown, Clock, LucideIcon, MapPin, Phone, Tag } from "lucide-react";
import Breadcrumbs, { Crumb } from "@/components/Breadcrumbs";
import GoogleRating from "@/components/GoogleRating";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const callButton =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 font-heading font-bold text-accent-foreground transition-colors hover:bg-orange-hover";
export const outlineButton =
  "inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/40 px-6 py-4 font-heading font-bold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary";

export const photoClass = "h-64 w-full rounded-2xl object-cover shadow-sm md:h-80";
export const textLink = "font-semibold text-primary underline underline-offset-4 hover:text-accent";

export const Section = ({ title, intro, muted, children }: { title: string; intro?: string; muted?: boolean; children: ReactNode }) => (
  <section className={`section-padding ${muted ? "bg-secondary" : "bg-background"}`}>
    <div className="container-narrow">
      <h2 className="font-heading text-3xl font-extrabold text-primary md:text-4xl">{title}</h2>
      <span className="mb-6 mt-4 block h-1 w-14 rounded-full bg-accent" aria-hidden="true" />
      {intro && <p className="mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground">{intro}</p>}
      {children}
    </div>
  </section>
);

export const IconBadge = ({ icon: Icon }: { icon: LucideIcon }) => (
  <span className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
    <Icon className="h-6 w-6" aria-hidden="true" />
  </span>
);

export const InfoCard = ({ icon, title, text }: { icon: LucideIcon; title: string; text: string }) => (
  <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
    <IconBadge icon={icon} />
    <h3 className="mb-2 font-heading text-lg font-bold text-primary">{title}</h3>
    <p className="leading-relaxed text-muted-foreground first-letter:uppercase">{text}</p>
  </article>
);

export const CardGrid = ({ items, columns = "lg:grid-cols-4" }: { items: { icon: LucideIcon; title: string; text: string }[]; columns?: string }) => (
  <div className={`grid gap-6 sm:grid-cols-2 ${columns}`}>
    {items.map((item) => (
      <InfoCard key={item.title} {...item} />
    ))}
  </div>
);

export const Callout = ({ icon: Icon, title, children }: { icon: LucideIcon; title?: string; children: ReactNode }) => (
  <aside className="flex h-full gap-4 rounded-2xl border-l-4 border-accent bg-accent/5 p-6">
    <Icon className="mt-1 h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
    <div>
      {title && <h3 className="mb-2 font-heading text-lg font-bold text-primary">{title}</h3>}
      <p className="leading-relaxed text-foreground/80">{children}</p>
    </div>
  </aside>
);

export const CheckList = ({ items }: { items: { title?: string; text: string }[] }) => (
  <ul className="space-y-4">
    {items.map((item) => (
      <li key={item.text} className="flex gap-3">
        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
        <span className="leading-relaxed text-muted-foreground">
          {item.title && <strong className="text-primary">{item.title} : </strong>}
          {item.text}
        </span>
      </li>
    ))}
  </ul>
);

export const Sources = ({ children }: { children: ReactNode }) => (
  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{children}</p>
);

/** Arrow between two steps of a timeline: downwards when stacked, sideways from lg up. */
export const TimelineArrow = () => (
  <>
    <ArrowDown className="h-6 w-6 text-accent lg:hidden" aria-hidden="true" />
    <ArrowRight className="hidden h-6 w-6 text-accent lg:block" aria-hidden="true" />
  </>
);

/** Background information kept in the HTML but folded, so the page stays short to scan. */
export const GuideBlock = ({ id, title, intro, summary, open, children }: { id?: string; title: string; intro?: string; summary: string; open?: boolean; children: ReactNode }) => (
  <article id={id} className="scroll-mt-28 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
    <h2 className="font-heading text-2xl font-extrabold text-primary">{title}</h2>
    {intro && <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{intro}</p>}
    <details open={open} className="group mt-4">
      <summary className="flex cursor-pointer list-none items-center gap-2 py-2 font-heading font-semibold text-primary hover:text-accent [&::-webkit-details-marker]:hidden">
        <ChevronDown className="h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-180" aria-hidden="true" />
        {summary}
      </summary>
      <div className="mt-6">{children}</div>
    </details>
  </article>
);

export const ContactButtons = ({ callLabel, contactLabel }: { callLabel: string; contactLabel: string }) => (
  <>
    <a href="tel:0765256792" className={callButton}>
      <Phone className="h-5 w-5" aria-hidden="true" />
      {callLabel}
    </a>
    <Link to="/contact" className={outlineButton}>
      {contactLabel}
    </Link>
  </>
);

export const CallBand = ({ title, text, contactLabel }: { title: string; text: string; contactLabel: string }) => (
  <section className="bg-background px-4 pb-16 md:px-8 lg:px-16 lg:pb-24">
    <div className="container-narrow flex flex-col gap-6 rounded-3xl bg-primary p-8 md:p-10 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="font-heading text-xl font-extrabold text-primary-foreground md:text-2xl">{title}</p>
        <p className="mt-2 max-w-xl leading-relaxed text-primary-foreground/80">{text}</p>
      </div>
      <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
        <ContactButtons callLabel="Appeler le 07 65 25 67 92" contactLabel={contactLabel} />
      </div>
    </div>
  </section>
);

export interface ServiceStep {
  step: number;
  icon: LucideIcon;
  title: string;
  text: string;
}

export const StepCard = ({ item }: { item: ServiceStep }) => (
  <div className="flex h-full gap-4 lg:flex-col lg:items-center lg:text-center">
    <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent font-heading text-2xl font-extrabold text-accent-foreground shadow-md">
      {item.step}
    </span>
    <div>
      <h3 className="font-heading text-2xl font-extrabold text-primary lg:text-xl xl:text-[1.375rem]">
        {item.title}
      </h3>
      <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
    </div>
  </div>
);

/** The steps of an intervention in one row, stacked on small screens. */
export const StepRow = ({ steps }: { steps: ServiceStep[] }) => (
  <ol className="grid list-none gap-8 rounded-2xl bg-card p-6 shadow-sm lg:grid-cols-5 lg:gap-6 lg:px-4 lg:py-10">
    {steps.map((item, i) => (
      <li key={item.step} className="relative">
        {i > 0 && (
          <span
            className="absolute left-[calc(-50%+0.75rem)] top-7 hidden h-0.5 w-[calc(100%-3rem)] bg-accent/30 lg:block"
            aria-hidden="true"
          />
        )}
        <StepCard item={item} />
      </li>
    ))}
  </ol>
);

export const CityPills = ({ links }: { links: { label: string; to: string }[] }) => (
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
);

interface ServiceHeroProps {
  breadcrumbs: Crumb[];
  eyebrow: string;
  title: string;
  text: string;
  highlight: string;
  signsLabel: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
  icon: LucideIcon;
  contactLabel?: string;
  area?: string;
  /** With a delay, the photo also shows behind the text on phones. */
  price?: string;
  delay?: string;
}

export const ServiceHero = ({ breadcrumbs, eyebrow, title, text, highlight, signsLabel, image, imageAlt, imageClassName = "", icon: Icon, contactLabel = "Devis gratuit", area = "Entreprise locale, près de Chaumont, intervention dans toute la Haute-Marne", price, delay }: ServiceHeroProps) => (
  <section className="relative overflow-hidden bg-primary px-4 pb-16 pt-32 md:px-8 md:pb-24 md:pt-36 lg:px-16">
    <div className={`absolute right-0 top-0 lg:block lg:h-full lg:w-1/2 ${delay ? "h-[32rem] w-full" : "hidden"}`}>
      <img src={image} alt={imageAlt} className={`h-full w-full object-cover ${delay ? "opacity-80" : "opacity-80"} ${imageClassName}`} />
      <div className={`absolute inset-0 ${delay ? "bg-gradient-to-t from-primary via-primary/60 to-primary/40 lg:bg-gradient-to-r lg:from-primary lg:via-primary/50 lg:to-primary/10" : "bg-gradient-to-r from-primary via-primary/50 to-primary/10"}`} />
    </div>
    {!delay && (
      <Icon
        className="pointer-events-none absolute -right-16 top-24 h-72 w-72 text-primary-foreground/5 lg:hidden"
        aria-hidden="true"
      />
    )}
    <div className="container-narrow relative z-10">
      <Breadcrumbs items={breadcrumbs} />
      <p className="mb-3 font-heading font-semibold text-accent">{eyebrow}</p>
      <h1 className="mb-5 max-w-3xl font-heading text-4xl font-extrabold text-primary-foreground md:text-5xl">
        {title}
      </h1>
      <GoogleRating className="mb-6" />
      <p className={`max-w-2xl text-lg leading-relaxed ${price ? "mb-4 text-primary-foreground/90" : "mb-8 text-primary-foreground/80"}`}>
        {text}
      </p>
      {price && (
        <p className="mb-6 flex items-center gap-2 font-heading text-lg font-bold text-primary-foreground">
          <Tag className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
          {price}
        </p>
      )}
      <div className="flex flex-col gap-3 sm:flex-row">
        <ContactButtons callLabel="Appeler le 07 65 25 67 92" contactLabel={contactLabel} />
      </div>
      <ul className="mt-8 grid gap-3 text-sm text-primary-foreground/90 sm:grid-cols-2 lg:max-w-3xl">
        <li className="flex items-center gap-2">
          <MapPin className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
          {area}
        </li>
        <li className={`flex items-center gap-2 ${delay ? "order-first" : ""}`}>
          <Clock className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
          {delay ?? "Joignable 7j/7, de 7h à 23h"}
        </li>
        <li className="flex items-center gap-2 sm:col-span-2">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
          {highlight}
        </li>
      </ul>
      <a href="#reconnaitre" className="mt-6 inline-block text-sm font-semibold text-primary-foreground underline underline-offset-4 hover:text-accent">
        {signsLabel}
      </a>
    </div>
  </section>
);

export const PlaceGrid = ({ items, columns = "lg:grid-cols-3" }: { items: { icon: LucideIcon; title: string; text: string }[]; columns?: string }) => (
  <ul className={`grid gap-4 sm:grid-cols-2 ${columns}`}>
    {items.map((item) => (
      <li key={item.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
        <item.icon className="mt-0.5 h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
        <div>
          <h3 className="font-heading text-lg font-bold text-primary">{item.title}</h3>
          <p className="mt-1 leading-relaxed text-muted-foreground first-letter:uppercase">{item.text}</p>
        </div>
      </li>
    ))}
  </ul>
);

/** forceMount keeps every answer in the prerendered HTML; closed ones are hidden with CSS. */
export const FaqList = ({ items }: { items: { question: string; answer: string }[] }) => (
  <Accordion type="single" collapsible className="space-y-3">
    {items.map((item, i) => (
      <AccordionItem
        key={item.question}
        value={`q${i}`}
        className="rounded-xl border border-border bg-card px-5 shadow-sm [&>[role=region][data-state=closed]]:hidden"
      >
        <AccordionTrigger className="gap-3 text-left font-heading text-base font-semibold text-primary hover:no-underline">
          {item.question}
        </AccordionTrigger>
        <AccordionContent forceMount className="text-base leading-relaxed text-muted-foreground">
          {item.answer}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);
