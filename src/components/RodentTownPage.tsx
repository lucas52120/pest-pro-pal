import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { CircleCheck, CircleX, LucideIcon, Rat } from "lucide-react";
import openStation from "@/assets/poste-appat-ouvert.jpg";
import gnawedBait from "@/assets/appat-entame.jpg";
import facadeStation from "@/assets/poste-appat-facade.jpg";
import gravelStation from "@/assets/poste-appat-gravier.jpg";
import wallStation from "@/assets/poste-appat-mur-pierre.jpg";
import jointsStation from "@/assets/mur-pierre-joints.jpg";
import Navbar from "@/components/Navbar";
import Reassurance from "@/components/Reassurance";
import RodentSteps from "@/components/RodentSteps";
import Footer from "@/components/Footer";
import ClientReviews from "@/components/ClientReviews";
import SEO from "@/components/SEO";
import { breadcrumbsFrom } from "@/components/Breadcrumbs";
import { CallBand, Callout, CardGrid, CheckList, CityPills, FaqList, PlaceGrid, Section, ServiceHero } from "@/components/ServiceBlocks";
import { LOCAL_BUSINESS } from "@/data/business";
import { ClientReviewKey } from "@/data/clientReviews";
import { CALL_DELAY, RODENT_PRICE } from "@/data/rodentOffer";
import { CITIES } from "@/data/cities";

type IconItem = { icon: LucideIcon; title: string; text: string };
type ListItem = { title?: string; text: string };
type Photo = { src: string; alt: string; caption: string; className?: string };
type Aside = { icon: LucideIcon; title: string; text: ReactNode };

/** First photo of the "how" section; the two others are the same everywhere. */
const STATIONS = {
  facade: { src: facadeStation, alt: "Poste d'appâtage noir fermé, au pied d'une façade" },
  gravier: { src: gravelStation, alt: "Poste d'appâtage fermé sur des graviers, le long d'un mur" },
  mur: { src: wallStation, alt: "Poste d'appâtage fermé contre un vieux mur de pierre" },
  joints: { src: jointsStation, alt: "Poste d'appâtage sous un mur de pierre aux joints creusés", className: "object-bottom" },
};

/** One section of a town page. `target` marks the section the hero link jumps to. */
export type TownBlock = { title: string; intro?: string; target?: boolean; after?: ReactNode } & (
  | { kind: "cards" | "places"; items: IconItem[]; columns?: string }
  | { kind: "list"; items: ListItem[]; aside?: Aside; photo?: Photo }
  | { kind: "levels"; items: { title: string; text: string }[]; columns?: string }
  | { kind: "compare"; heads: [string, string]; rows: { label: string; left: string; right: string }[]; photo?: Photo }
  | { kind: "dos"; yes: ListItem[]; no: ListItem[] }
  | { kind: "text"; paragraphs: ReactNode[]; aside?: Aside }
);

export interface RodentTown {
  city: string;
  postalCode: string;
  region: string;
  slug: string;
  title: string;
  description: string;
  hero: { eyebrow: string; text: string; highlight: string; signsLabel: string; image: string; imageAlt: string; imageClassName?: string; area?: string };
  reviews: ClientReviewKey[];
  why: { title: string; intro: string; items: IconItem[] };
  where: { intro: string; items: IconItem[] };
  how: { title: string; intro: string; photo: keyof typeof STATIONS; steps: { title: string; text: string }[]; after: ReactNode };
  price: { paragraphs: ReactNode[]; aside: Aside };
  /** The sections only this town has, after the shared base. */
  local: TownBlock[];
  call: { title: string; text: string; contactLabel: string };
  faq: { question: string; answer: string }[];
  nearby: { intro: string; links: { label: string; to: string }[]; also: string; note: ReactNode };
}

const TownPhoto = ({ photo }: { photo: Photo }) => (
  <figure>
    <img
      src={photo.src}
      alt={photo.alt}
      loading="lazy"
      className={`h-72 w-full rounded-2xl object-cover shadow-sm md:h-80 ${photo.className ?? ""}`}
    />
    <figcaption className="mt-3 text-sm text-muted-foreground">{photo.caption}</figcaption>
  </figure>
);

const BlockBody = ({ block }: { block: TownBlock }) => {
  switch (block.kind) {
    case "cards":
      return <CardGrid items={block.items} columns={block.columns} />;
    case "places":
      return <PlaceGrid items={block.items} columns={block.columns} />;
    case "list":
      return (
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <CheckList items={block.items} />
          {block.photo && <TownPhoto photo={block.photo} />}
          {block.aside && <Callout icon={block.aside.icon} title={block.aside.title}>{block.aside.text}</Callout>}
        </div>
      );
    case "levels":
      return (
        <ol className={`grid list-none gap-4 sm:grid-cols-2 ${block.columns ?? "lg:grid-cols-4"}`}>
          {block.items.map((item) => (
            <li key={item.title} className="rounded-2xl border-t-4 border-accent bg-card p-6 shadow-sm">
              <h3 className="mb-2 font-heading text-lg font-bold text-primary">{item.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ol>
      );
    case "compare":
      // On small screens each row wraps: its label takes the full width above the two answers.
      return (
        <div className={block.photo ? "grid items-center gap-8 lg:grid-cols-[3fr_2fr]" : undefined}>
          <table className="block w-full overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm sm:table">
            <thead className="block bg-primary text-primary-foreground sm:table-header-group">
              <tr className="flex sm:table-row">
                <th scope="col" className="hidden p-4 sm:table-cell"><span className="sr-only">Critère</span></th>
                {block.heads.map((head) => (
                  <th key={head} scope="col" className="w-1/2 p-4 font-heading font-bold sm:w-auto">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody className="block sm:table-row-group">
              {block.rows.map((row) => (
                <tr key={row.label} className="flex flex-wrap border-t border-border align-top sm:table-row">
                  <th scope="row" className="w-full px-4 pt-4 font-heading font-bold text-primary sm:w-auto sm:p-4">{row.label}</th>
                  <td className="w-1/2 p-4 pt-2 leading-relaxed text-muted-foreground sm:w-auto sm:pt-4">{row.left}</td>
                  <td className="w-1/2 p-4 pt-2 leading-relaxed text-muted-foreground sm:w-auto sm:pt-4">{row.right}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {block.photo && <TownPhoto photo={block.photo} />}
        </div>
      );
    case "dos":
      return (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-primary">
              <CircleCheck className="h-5 w-5 text-accent" aria-hidden="true" />À faire
            </h3>
            <CheckList items={block.yes} />
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-primary">
              <CircleX className="h-5 w-5 text-destructive" aria-hidden="true" />À éviter
            </h3>
            <ul className="space-y-4">
              {block.no.map((item) => (
                <li key={item.text} className="flex gap-3">
                  <CircleX className="mt-1 h-5 w-5 shrink-0 text-destructive" aria-hidden="true" />
                  <span className="leading-relaxed text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    case "text":
      return (
        <div className={`grid items-start gap-8 ${block.aside ? "lg:grid-cols-2" : "max-w-3xl"}`}>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            {block.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          {block.aside && <Callout icon={block.aside.icon} title={block.aside.title}>{block.aside.text}</Callout>}
        </div>
      );
  }
};

/** Rodent page of a town: same base as Chaumont (steps, why, where, how, price), then the town's own sections. */
const RodentTownPage = ({ town }: { town: RodentTown }) => {
  const { city, hero } = town;
  const photos = [
    STATIONS[town.how.photo],
    { src: openStation, alt: "Intérieur d'un poste d'appâtage avec trois blocs verts sur une tige" },
    { src: gnawedBait, alt: "Appât bleu rongé, vu lors d'un contrôle" },
  ];
  const around = /^[AEIOUYÉ]/.test(city) ? `d'${city}` : `de ${city}`;
  const url = `https://gf-nuisibles.fr${town.slug}`;
  const otherServices = (CITIES.find((entry) => entry.name === city)?.links ?? [])
    .filter((link) => link.to !== town.slug)
    .map((link) => ({ label: `${link.label} ${city}`, to: link.to }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      LOCAL_BUSINESS,
      {
        "@type": "Service",
        name: `Dératisation à ${city}`,
        serviceType: "Dératisation",
        url,
        description: town.description,
        provider: { "@id": "https://gf-nuisibles.fr/#organization" },
        areaServed: {
          "@type": "City",
          name: city,
          address: { "@type": "PostalAddress", postalCode: town.postalCode, addressLocality: city, addressRegion: town.region, addressCountry: "FR" },
        },
        offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", minPrice: 100, priceCurrency: "EUR" } },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://gf-nuisibles.fr/" },
          { "@type": "ListItem", position: 2, name: "Dératisation", item: "https://gf-nuisibles.fr/deratisation" },
          { "@type": "ListItem", position: 3, name: city, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: town.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <SEO title={town.title} description={town.description} path={town.slug} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />

      <ServiceHero
        breadcrumbs={breadcrumbsFrom(jsonLd)}
        eyebrow={hero.eyebrow}
        title={`Dératisation à ${city} (${town.postalCode})\u00a0: rats et souris`}
        text={hero.text}
        highlight={hero.highlight}
        signsLabel={hero.signsLabel}
        image={hero.image}
        imageAlt={hero.imageAlt}
        imageClassName={hero.imageClassName}
        area={hero.area}
        price={RODENT_PRICE}
        delay={CALL_DELAY}
        icon={Rat}
      />

      <main>
        <RodentSteps city={city} />

        <Section title={town.why.title} intro={town.why.intro}>
          <CardGrid items={town.why.items} />
        </Section>

        <Section muted title={`Où se cachent les rats et les souris à ${city} ?`} intro={town.where.intro}>
          <PlaceGrid items={town.where.items} columns={town.where.items.length === 4 ? "lg:grid-cols-2" : undefined} />
        </Section>

        <Section title={town.how.title} intro={town.how.intro}>
          <div className="grid gap-6 md:grid-cols-3">
            {town.how.steps.map((step, i) => (
              <figure key={step.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <img src={photos[i].src} alt={photos[i].alt} loading="lazy" className={`h-56 w-full object-cover ${"className" in photos[i] ? "object-bottom" : ""}`} />
                <figcaption className="p-5">
                  <h3 className="mb-1 font-heading text-lg font-bold text-primary">{step.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{step.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">{town.how.after}</p>
          <ClientReviews keys={town.reviews} />
        </Section>

        <CallBand {...town.call} />

        <Section muted title={`Quel est le prix d'une dératisation à ${city} ?`}>
          <BlockBody block={{ kind: "text", title: "", ...town.price }} />
        </Section>

        {town.local.map((block, i) => (
          <div key={block.title} id={block.target ? "reconnaitre" : undefined} className={block.target ? "scroll-mt-20" : undefined}>
            <Section title={block.title} intro={block.intro} muted={i % 2 === 1}>
              <BlockBody block={block} />
              {block.after && <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">{block.after}</p>}
            </Section>
          </div>
        ))}

        <Section title={`Vos questions sur les rats et souris à ${city}`} muted={town.local.length % 2 === 1}>
          <FaqList items={town.faq} />
        </Section>

        <Section title={`Un dératiseur autour ${around}`} intro={town.nearby.intro} muted={town.local.length % 2 === 0}>
          <CityPills links={town.nearby.links} />
          <p className="mb-4 mt-8 leading-relaxed text-muted-foreground">{town.nearby.also}</p>
          <CityPills links={[...otherServices, { label: "Punaises de lit", to: "/punaises-de-lit" }]} />
          <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">{town.nearby.note}</p>
        </Section>
      </main>

      <Reassurance />
      <Footer />
    </>
  );
};

export default RodentTownPage;
