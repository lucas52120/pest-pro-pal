import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Bug, CircleCheck, CircleX, LucideIcon, Rat, Zap } from "lucide-react";
import openStation from "@/assets/poste-appat-ouvert.jpg";
import gnawedBait from "@/assets/appat-entame.jpg";
import facadeStation from "@/assets/poste-appat-facade.jpg";
import gravelStation from "@/assets/poste-appat-gravier.jpg";
import wallStation from "@/assets/poste-appat-mur-pierre.jpg";
import jointsStation from "@/assets/mur-pierre-joints.jpg";
import Navbar from "@/components/Navbar";
import Reassurance from "@/components/Reassurance";
import RodentSteps from "@/components/RodentSteps";
import CockroachSteps from "@/components/CockroachSteps";
import WaspSteps from "@/components/WaspSteps";
import BedbugSteps from "@/components/BedbugSteps";
import bugTraces from "@/assets/punaise-traces.jpg";
import bugBackpack from "@/assets/punaise-bagage.jpg";
import bugNymph from "@/assets/punaise-larve.jpg";
import nestEntrance from "@/assets/nid-papier.jpg";
import nestTreated from "@/assets/nid-frelons-chaumont.jpg";
import nestTree from "@/assets/nid-arbre.jpg";
import roachKitchen from "@/assets/blatte-cuisine.jpg";
import roachCrack from "@/assets/blatte-fissure.jpg";
import roachCloseUp from "@/assets/blatte-gros-plan.jpg";
import Footer from "@/components/Footer";
import ClientReviews from "@/components/ClientReviews";
import SEO from "@/components/SEO";
import { breadcrumbsFrom } from "@/components/Breadcrumbs";
import { CallBand, Callout, CardGrid, CheckList, CityPills, FaqList, PlaceGrid, Section, ServiceHero, textLink } from "@/components/ServiceBlocks";
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

/** `credit`: the author and license some photos require; shown once at the bottom of the page. */
type KindPhoto = { src: string; alt: string; className?: string; credit?: ReactNode };
const creditLink = "underline underline-offset-2 hover:text-accent";
const where = (what: string) => (city: string) => `${what} à ${city} ?`;

/** What changes from one service to another; the page layout stays the same. */
const KINDS = {
  rodents: {
    service: "Dératisation",
    serviceType: "Dératisation",
    parent: { name: "Dératisation", url: "https://gf-nuisibles.fr/deratisation" },
    h1: (city: string, cp: string) => `Dératisation à ${city} (${cp})\u00a0: rats et souris`,
    pests: "les rats et les souris",
    whereTitle: where("Où se cachent les rats et les souris"),
    faqTitle: (city: string) => `Vos questions sur les rats et souris à ${city}`,
    priceTitle: (city: string) => `Quel est le prix d'une dératisation à ${city} ?`,
    expert: "Un dératiseur",
    price: RODENT_PRICE,
    minPrice: 100 as number | undefined,
    icon: Rat,
    Steps: RodentSteps,
    photos: null as KindPhoto[] | null,
    howFirst: false,
  },
  cockroaches: {
    service: "Traitement des cafards",
    serviceType: "Désinsectisation : cafards et blattes",
    parent: { name: "Cafards & Blattes", url: "https://gf-nuisibles.fr/cafards-blattes" },
    h1: (city: string, cp: string) => `Cafards et blattes à ${city} (${cp})\u00a0: traitement`,
    pests: "les cafards",
    whereTitle: where("Où se cachent les cafards"),
    faqTitle: (city: string) => `Vos questions sur les cafards à ${city}`,
    priceTitle: (city: string) => `Quel est le prix d'un traitement contre les cafards à ${city} ?`,
    expert: "Un spécialiste des cafards",
    price: "Devis gratuit, prix annoncé avant le traitement",
    minPrice: undefined as number | undefined,
    icon: Bug,
    Steps: CockroachSteps,
    photos: [
      { src: roachKitchen, alt: "Cuisine avec évier et placards en bois, là où les blattes se cachent le plus souvent" },
      { src: roachCrack, alt: "Blatte brune au bord d'une fissure dans le béton" },
      { src: roachCloseUp, alt: "Blatte vue de dessus sur un fond clair" },
    ] as KindPhoto[] | null,
    /** People want the method before the hiding places. */
    howFirst: true,
  },
  wasps: {
    service: "Destruction de nids de guêpes et de frelons",
    serviceType: "Destruction de nids de guêpes et de frelons",
    parent: { name: "Guêpes et frelons", url: "https://gf-nuisibles.fr/guepes-frelons" },
    h1: (city: string, cp: string) => `Nid de guêpes ou de frelons à ${city} (${cp})`,
    pests: "les guêpes et les frelons",
    whereTitle: where("Où les guêpes et les frelons font-ils leur nid"),
    faqTitle: (city: string) => `Vos questions sur les nids de guêpes à ${city}`,
    priceTitle: (city: string) => `Quel est le prix pour détruire un nid à ${city} ?`,
    expert: "Un spécialiste des nids",
    price: "Nid de guêpes dès 80 €, frelon asiatique dès 110 €",
    minPrice: 80 as number | undefined,
    icon: Zap,
    Steps: WaspSteps,
    photos: [
      { src: nestEntrance, alt: "Nid de guêpes en papier gris avec son trou d'entrée" },
      { src: nestTreated, alt: "Nid de frelons sous une toiture, traité avec une perche", className: "object-[50%_35%]" },
      { src: nestTree, alt: "Gros nid de frelons accroché dans un arbre sans feuilles" },
    ] as KindPhoto[] | null,
    howFirst: true,
  },
  bedbugs: {
    service: "Traitement des punaises de lit",
    serviceType: "Désinsectisation : punaises de lit",
    parent: { name: "Punaises de lit", url: "https://gf-nuisibles.fr/punaises-de-lit" },
    h1: (city: string, cp: string) => `Punaises de lit à ${city} (${cp})\u00a0: traitement`,
    pests: "les punaises de lit",
    whereTitle: where("Où se cachent les punaises de lit"),
    faqTitle: (city: string) => `Vos questions sur les punaises de lit à ${city}`,
    priceTitle: (city: string) => `Quel est le prix d'un traitement contre les punaises de lit à ${city} ?`,
    expert: "Un spécialiste des punaises de lit",
    /** No price at the top: it depends too much on the infestation. */
    price: undefined as string | undefined,
    minPrice: undefined as number | undefined,
    icon: Bug,
    Steps: BedbugSteps,
    photos: [
      {
        src: bugTraces,
        alt: "Nombreux points noirs de déjections sur une latte de sommier en bois",
        credit: (
          <>
            <a href="https://commons.wikimedia.org/wiki/File:Bed_Bug_Evidence.jpg" target="_blank" rel="noopener noreferrer" className={creditLink}>NY State IPM Program, Cornell University</a>,{" "}
            <a href="https://creativecommons.org/licenses/by/2.0/deed.fr" target="_blank" rel="noopener noreferrer" className={creditLink}>CC BY 2.0</a>, redimensionnée
          </>
        ),
      },
      {
        src: bugBackpack,
        alt: "Punaises de lit et œufs cachés sous les bretelles d'un sac à dos",
        credit: (
          <>
            <a href="https://commons.wikimedia.org/wiki/File:Bed_Bug_Infestation.jpg" target="_blank" rel="noopener noreferrer" className={creditLink}>Ventriloquist</a>,{" "}
            <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.fr" target="_blank" rel="noopener noreferrer" className={creditLink}>CC BY-SA 4.0</a>, redimensionnée
          </>
        ),
      },
      { src: bugNymph, alt: "Jeune punaise de lit translucide, gorgée de sang, sur une peau humaine" },
    ] as KindPhoto[] | null,
    howFirst: true,
    contactLabel: "Demander un diagnostic",
  },
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
  /** Service of the page; rodents when left out. */
  kind?: keyof typeof KINDS;
  slug: string;
  title: string;
  description: string;
  hero: { eyebrow: string; text: string; highlight: string; signsLabel: string; image: string; imageAlt: string; imageClassName?: string; area?: string };
  reviews: ClientReviewKey[];
  why: { title: string; intro: string; items: IconItem[] };
  where: { intro: string; items: IconItem[] };
  how: { title: string; intro: string; photo?: keyof typeof STATIONS; steps: { title: string; text: string }[]; after: ReactNode };
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
  const kind = KINDS[town.kind ?? "rodents"];
  const photos: KindPhoto[] = kind.photos ?? [
    STATIONS[town.how.photo ?? "facade"],
    { src: openStation, alt: "Intérieur d'un poste d'appâtage avec trois blocs verts sur une tige" },
    { src: gnawedBait, alt: "Appât bleu rongé, vu lors d'un contrôle" },
  ];
  const around = /^[AEIOUYÉ]/.test(city) ? `d'${city}` : `de ${city}`;
  const url = `https://gf-nuisibles.fr${town.slug}`;
  const cityLinks = CITIES.find((entry) => entry.name === city)?.links ?? [];
  // The general bed bug page only when the town has no bed bug page of its own.
  const bedbugLink = cityLinks.some((link) => link.to.startsWith("/punaises-de-lit")) ? [] : [{ label: "Punaises de lit", to: "/punaises-de-lit" }];
  const otherServices = cityLinks
    .filter((link) => link.to !== town.slug)
    .map((link) => ({ label: `${link.label} ${city}`, to: link.to }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      LOCAL_BUSINESS,
      {
        "@type": "Service",
        name: `${kind.service} à ${city}`,
        serviceType: kind.serviceType,
        url,
        description: town.description,
        provider: { "@id": "https://gf-nuisibles.fr/#organization" },
        areaServed: {
          "@type": "City",
          name: city,
          address: { "@type": "PostalAddress", postalCode: town.postalCode, addressLocality: city, addressRegion: town.region, addressCountry: "FR" },
        },
        ...(kind.minPrice && { offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", minPrice: kind.minPrice, priceCurrency: "EUR" } } }),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://gf-nuisibles.fr/" },
          { "@type": "ListItem", position: 2, name: kind.parent.name, item: kind.parent.url },
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
        title={kind.h1(city, town.postalCode)}
        text={hero.text}
        highlight={hero.highlight}
        signsLabel={hero.signsLabel}
        image={hero.image}
        imageAlt={hero.imageAlt}
        imageClassName={hero.imageClassName}
        area={hero.area}
        contactLabel={"contactLabel" in kind ? kind.contactLabel : undefined}
        price={kind.price}
        delay={CALL_DELAY}
        icon={kind.icon}
      />

      <main>
        <kind.Steps city={city} />

        <Section title={town.why.title} intro={town.why.intro}>
          <CardGrid items={town.why.items} />
        </Section>

        {kind.howFirst ? (
          <>
        <Section muted={kind.howFirst} title={town.how.title} intro={town.how.intro}>
          <div className="grid gap-6 md:grid-cols-3">
            {town.how.steps.map((step, i) => (
              <figure key={step.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <img src={photos[i].src} alt={photos[i].alt} loading="lazy" className={`h-56 w-full object-cover ${photos[i].className ?? ""}`} />
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
        <CallBand {...town.call} muted />

        <Section muted={!kind.howFirst} title={kind.whereTitle(city)} intro={town.where.intro}>
          <PlaceGrid items={town.where.items} columns={town.where.items.length === 4 ? "lg:grid-cols-2" : undefined} />
        </Section>
          </>
        ) : (
          <>
        <Section muted={!kind.howFirst} title={kind.whereTitle(city)} intro={town.where.intro}>
          <PlaceGrid items={town.where.items} columns={town.where.items.length === 4 ? "lg:grid-cols-2" : undefined} />
        </Section>
        <Section muted={kind.howFirst} title={town.how.title} intro={town.how.intro}>
          <div className="grid gap-6 md:grid-cols-3">
            {town.how.steps.map((step, i) => (
              <figure key={step.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <img src={photos[i].src} alt={photos[i].alt} loading="lazy" className={`h-56 w-full object-cover ${photos[i].className ?? ""}`} />
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
          </>
        )}


        <Section muted title={kind.priceTitle(city)}>
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

        <Section title={kind.faqTitle(city)} muted={town.local.length % 2 === 1}>
          <FaqList items={town.faq} />
        </Section>

        <Section title={`${kind.expert} autour ${around}`} intro={town.nearby.intro} muted={town.local.length % 2 === 0}>
          <CityPills links={town.nearby.links} />
          <p className="mb-4 mt-8 leading-relaxed text-muted-foreground">{town.nearby.also}</p>
          <CityPills links={[...otherServices, ...bedbugLink]} />
          <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">{town.nearby.note}</p>
          {kind === KINDS.rodents && (
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              Restaurant, boulangerie, commune ou syndic à {city} ? Voyez le{" "}
              <Link to="/deratisation-professionnels" className={textLink}>contrat de dératisation pour les professionnels</Link>, et les offres pour les{" "}
              <Link to="/deratisation-restaurants" className={textLink}>restaurants et boulangeries</Link>, les{" "}
              <Link to="/deratisation-collectivites" className={textLink}>communes</Link> et les{" "}
              <Link to="/deratisation-coproprietes" className={textLink}>copropriétés</Link>.
            </p>
          )}
          {photos.some((photo) => photo.credit) && (
            <p className="mt-10 text-xs text-muted-foreground">
              Crédits photos :{" "}
              {photos
                .filter((photo) => photo.credit)
                .map((photo, i) => (
                  <span key={photo.src}>
                    {i > 0 && " ; "}
                    {photo.credit}
                  </span>
                ))}
              .
            </p>
          )}
        </Section>
      </main>

      <Reassurance />
      <Footer />
    </>
  );
};

export default RodentTownPage;
