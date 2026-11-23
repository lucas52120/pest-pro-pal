import { Fragment, ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  Armchair,
  BedDouble,
  Bug,
  Building2,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock,
  Droplets,
  Egg,
  FileText,
  Hand,
  Hotel,
  Hourglass,
  House,
  Info,
  KeyRound,
  Landmark,
  Layers,
  Lightbulb,
  Luggage,
  LucideIcon,
  MapPin,
  Moon,
  PackageOpen,
  Phone,
  Repeat,
  Search,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  Snowflake,
  SprayCan,
  Stethoscope,
  Trash2,
  Truck,
  WashingMachine,
} from "lucide-react";
import photoAdulte from "@/assets/punaise-adulte.jpg";
import photoLarve from "@/assets/punaise-larve.jpg";
import photoTraces from "@/assets/punaise-traces.jpg";
import photoBagage from "@/assets/punaise-bagage.jpg";
import photoPiqures from "@/assets/punaise-piqures.jpg";
import Navbar from "@/components/Navbar";
import Reassurance from "@/components/Reassurance";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import GoogleRating from "@/components/GoogleRating";
import Breadcrumbs, { breadcrumbsFrom } from "@/components/Breadcrumbs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LOCAL_BUSINESS } from "@/data/business";

const PAGE_URL = "https://gf-nuisibles.fr/punaises-de-lit";
const TITLE = "Punaises de lit Haute-Marne (52) : entreprise de traitement";
const DESCRIPTION =
  "Punaises de lit en Haute-Marne : inspection sur place, traitement en plusieurs passages, sans jugement et en toute discrétion. Appelez GF Nuisibles 7j/7.";

const SIGNS = [
  { icon: Bug, title: "L'insecte adulte", text: "4 à 7 mm, ovale et plat, brun-rouge après un repas de sang. Il ne vole pas et ne saute pas." },
  { icon: Egg, title: "Les œufs", text: "blanchâtres, environ 1 mm, souvent groupés dans les coutures du matelas, les fentes du sommier ou derrière les plinthes." },
  { icon: Droplets, title: "Les traces", text: "petits points noirs (déjections) sur le matelas et le sommier, traces de sang sur les draps, mues vides." },
  { icon: Hand, title: "Les piqûres", text: "souvent groupées ou alignées par 3 à 5, sur les bras, les jambes, le dos ou le cou, avec des démangeaisons. Environ 30 % des personnes ne réagissent pas aux piqûres : une infestation peut passer inaperçue plusieurs semaines." },
];

const ORIGINS = [
  { icon: Luggage, title: "Les voyages et les séjours", text: "hôtels, gîtes, locations de vacances, Airbnb, tous les lieux où beaucoup de personnes dorment se succèdent." },
  { icon: Armchair, title: "Les achats d'occasion", text: "meuble, matelas, sommier, canapé ou vêtements de seconde main achetés sans vérification." },
  { icon: Truck, title: "Les déménagements", text: "cartons, meubles démontés, camions partagés." },
  { icon: Building2, title: "Les logements voisins", text: "dans un immeuble, elles peuvent passer d'un appartement à l'autre par les fissures, les gaines et les passages de canalisations." },
];

const MISTAKES = [
  { icon: SprayCan, title: "Les insecticides et fumigènes du commerce", text: "les punaises y résistent souvent, et ils peuvent les disperser dans d'autres pièces." },
  { icon: BedDouble, title: "Changer de chambre pour dormir", text: "les punaises vous suivent et l'infestation s'étend." },
  { icon: Trash2, title: "Jeter un matelas sans l'emballer", text: "il contamine l'escalier, les parties communes ou le prochain qui le récupère. Rendez-le inutilisable et emballez-le avant de le sortir." },
  { icon: Hourglass, title: "Attendre", text: "quelques punaises deviennent vite des centaines." },
];

const CLIENTS = [
  { icon: House, title: "Particuliers", text: "maisons et appartements." },
  { icon: KeyRound, title: "Propriétaires bailleurs et syndics", text: "logements loués, parties communes, immeubles." },
  { icon: Hotel, title: "Hébergements", text: "hôtels, gîtes, chambres d'hôtes, locations saisonnières, meublés de curistes. Intervention discrète, organisée pour limiter le temps d'immobilisation des chambres." },
  { icon: Landmark, title: "Établissements", text: "EHPAD, foyers, internats." },
];

const TIPS = [
  { icon: Luggage, title: "En voyage", text: "inspectez le matelas, le sommier et la tête de lit. Ne posez pas votre valise sur le lit ni au sol près du lit." },
  { icon: ShoppingBag, title: "Au retour", text: "vérifiez vos bagages, lavez vos vêtements à 60 °C ou passez-les 30 minutes au sèche-linge chaud." },
  { icon: Snowflake, title: "Objets d'occasion", text: "inspectez-les avant de les faire entrer chez vous. Les petits objets non lavables peuvent passer 72 heures au congélateur à -20 °C." },
];

const TREATMENT_STEPS = [
  { step: 2, icon: SprayCan, title: "Premier passage de traitement", text: "application de biocides professionnels sur les zones de cachette, piégeage, et vapeur sèche haute température si nécessaire." },
  { step: 3, icon: Repeat, title: "Deuxième passage, 10 à 15 jours plus tard", text: "nouveau traitement pour atteindre les punaises sorties des œufs depuis le premier passage." },
  { step: 4, icon: ClipboardCheck, title: "Troisième passage de vérification", text: "contrôle de l'efficacité, avec un traitement complémentaire si des punaises sont encore présentes." },
];

const AMELI_SIGNS_URL = "https://www.ameli.fr/assure/sante/themes/punaises-lit/definition-symptomes-signes-infestation";
const AMELI_ADVICE_URL = "https://www.ameli.fr/assure/sante/themes/punaises-lit/que-faire-quand-consulter";
const ANSES_QUESTIONS_URL = "https://www.anses.fr/en/article/bed-bugs-13-questions";

/** License-required credits: the source page and license of each photo stay visible next to it. */
const PHOTOS = {
  adulte: {
    src: photoAdulte,
    alt: "Punaise de lit adulte, brun-rouge, vue de profil sur une peau humaine",
    caption: "Une punaise de lit adulte pendant un repas de sang.",
    credit: "CDC / Piotr Naskrecki",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Adult_bed_bug,_Cimex_lectularius.jpg",
    license: "domaine public",
  },
  larve: {
    src: photoLarve,
    alt: "Jeune punaise de lit translucide, gorgée de sang, sur une peau humaine",
    caption: "Une jeune punaise, plus claire et bien plus petite qu'un adulte.",
    credit: "CDC / Piotr Naskrecki",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bed_bug_nymph,_Cimex_lectularius.jpg",
    license: "domaine public",
  },
  traces: {
    src: photoTraces,
    alt: "Nombreux points noirs de déjections sur une latte de sommier en bois",
    caption: "Les points noirs laissés sur une latte de sommier : un signe typique.",
    credit: "NY State IPM Program, Cornell University",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bed_Bug_Evidence.jpg",
    license: "CC BY 2.0, redimensionnée",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/deed.fr",
  },
  bagage: {
    src: photoBagage,
    alt: "Punaises de lit et œufs cachés sous les bretelles d'un sac à dos",
    caption: "Des punaises et leurs œufs à l'abri sous les bretelles d'un sac à dos.",
    credit: "Ventriloquist",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bed_Bug_Infestation.jpg",
    license: "CC BY-SA 4.0, redimensionnée",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/deed.fr",
  },
  piqures: {
    src: photoPiqures,
    alt: "Traînée de piqûres rouges de punaises de lit le long de l'avant-bras et du poignet",
    caption: "Des piqûres d'environ quatre jours, le long de l'avant-bras et du poignet.",
    credit: "Oliver Arend",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bed_bug_bites_around_left_wrist.jpg",
    license: "CC BY-SA 3.0, recadrée",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/deed.fr",
  },
};

const CHECK_ZONES = [
  { title: "Le lit", text: "coutures et plis du matelas, oreillers, lattes et fentes du sommier, cadre du lit, dos de la tête de lit." },
  { title: "Les murs", text: "plinthes, angles, fissures, papier peint qui se décolle, arrière des tableaux." },
  { title: "Le mobilier", text: "canapés et fauteuils, rideaux, placards, encadrements des portes et des fenêtres." },
  { title: "Ce qui voyage", text: "valises, sacs à dos, sacs de couchage, vêtements et tapis." },
];

const HEALTH = [
  { icon: Hand, title: "Les démangeaisons", text: "les piqûres forment des taches rouges en relief, de 5 mm à 2 cm, qui grattent surtout le matin. Elles disparaissent en général d'elles-mêmes en une dizaine de jours." },
  { icon: ShieldAlert, title: "Le risque de surinfection", text: "se gratter entretient les démangeaisons et peut infecter la peau (impétigo). Votre pharmacien peut vous conseiller une crème ou un gel adapté." },
  { icon: Stethoscope, title: "Les réactions allergiques", text: "certaines personnes font de l'urticaire. Consultez un médecin en cas de réaction allergique ou si les démangeaisons persistent." },
  { icon: Moon, title: "Le sommeil et le moral", text: "nuits agitées, anxiété, peur d'être jugé : l'impact peut être réel. N'hésitez pas à en parler tôt, cela permet d'agir avant que le problème ne s'étende." },
];

const DURATION_FACTORS = [
  { icon: Bug, title: "L'ampleur de l'infestation", text: "quelques punaises repérées tôt ne demandent pas le même travail qu'une colonie installée depuis des mois." },
  { icon: Layers, title: "Le nombre de pièces touchées", text: "une seule chambre ou tout un logement : plus la zone est étendue, plus l'intervention est longue." },
  { icon: PackageOpen, title: "L'encombrement", text: "chaque objet accumulé offre une cachette de plus et rend certaines zones difficiles à atteindre." },
  { icon: ClipboardCheck, title: "Le respect des consignes", text: "linge, rangement, délais avant de réoccuper les lieux : tous les occupants ont un rôle à jouer." },
];

const PRICE_FACTORS = [
  { text: "la surface à traiter et le nombre de pièces ;" },
  { text: "l'importance de l'infestation et le nombre de passages nécessaires ;" },
  { text: "l'accès aux zones de cachette et l'encombrement des lieux ;" },
  { text: "le type de lieu : logement, immeuble, hébergement ou établissement ;" },
  { text: "la distance à parcourir pour venir jusqu'à vous." },
];

const PREP_STEPS = [
  { title: "Le transport du linge", text: "gardez-le dans un sac fermé jusqu'à la machine, pour ne pas semer de punaises en chemin." },
  { title: "L'aspirateur", text: "passez l'embout fin sur le matelas, le sommier et les recoins autour du lit. Enfermez ensuite le sac dans un plastique bien clos, à jeter dans une poubelle extérieure." },
  { title: "Le rangement", text: "dégagez le tour du lit et le sol de la pièce : moins il y a d'objets, moins il reste de cachettes." },
];

const PRO_CHECKS = [
  { icon: ShieldCheck, title: "Le Certibiocide", text: "ce certificat est indispensable pour appliquer des biocides professionnels. GF Nuisibles en est titulaire : demandez à le voir." },
  { icon: Search, title: "Une inspection avant le prix", text: "sans avoir vu les lieux, difficile d'évaluer une infestation. Un devis précis repose sur ce qui a été constaté sur place." },
  { icon: FileText, title: "Un protocole expliqué", text: "demandez ce qui sera fait, à quels moments et avec quels produits, ainsi que les consignes à suivre avant et après chaque passage." },
];

const COMMITMENTS = [
  { title: "Sans jugement", text: "beaucoup de personnes n'osent pas en parler. On regarde votre situation telle qu'elle est et on cherche la solution adaptée." },
  { title: "En toute discrétion", text: "l'intervention est discrète, chez les particuliers comme dans les établissements." },
  { title: "Avec des explications claires", text: "vous savez ce qui sera fait, à quel moment, et quelles consignes suivre." },
];

const FAQ_ITEMS = [
  {
    question: "Combien de passages faut-il pour se débarrasser des punaises de lit ?",
    answer: "Je conseille au minimum deux passages de traitement espacés de 10 à 15 jours, puis un passage de vérification, avec un traitement complémentaire si nécessaire. Pour une infestation faible ou débutante, le protocole peut être allégé : il est défini lors de l'inspection.",
  },
  {
    question: "Pourquoi ne pas tout traiter en un seul passage ?",
    answer: "Les biocides n'agissent pas sur les œufs. Le deuxième passage atteint les punaises nées après le premier, avant qu'elles ne pondent à leur tour.",
  },
  {
    question: "L'inspection est-elle payante ?",
    answer: "Oui. Elle permet d'établir un devis précis. Son montant est déduit du traitement si vous acceptez le devis.",
  },
  {
    question: "Quelles méthodes utilisez-vous ?",
    answer: "Des biocides professionnels, du piégeage, et de la vapeur sèche haute température si nécessaire. La méthode est adaptée à chaque logement.",
  },
  {
    question: "Dois-je quitter mon logement pendant le traitement ?",
    answer: "Les consignes dépendent de l'ampleur de l'infestation et des produits utilisés. Elles vous sont données lors de l'inspection.",
  },
  {
    question: "Que dois-je préparer avant votre passage ?",
    answer: "Au minimum, laver le linge de lit et les vêtements à 60 °C, puis les ranger dans des sacs fermés. Pour une infestation importante, des consignes détaillées vous sont remises.",
  },
  {
    question: "Les punaises de lit transmettent-elles des maladies ?",
    answer: "Aucune transmission de maladie à l'homme n'a été démontrée. Elles provoquent en revanche des démangeaisons, parfois des réactions allergiques, et perturbent le sommeil.",
  },
  {
    question: "Je suis locataire : qui doit payer le traitement ?",
    answer: "Depuis la loi ELAN de 2018, le bailleur doit fournir un logement exempt de toute infestation d'espèces nuisibles et parasites. En cours de bail, la prise en charge dépend de la situation : prévenez votre propriétaire au plus vite et, en cas de doute, renseignez-vous auprès de l'ADIL.",
  },
  {
    question: "Comment savoir si ce sont bien des punaises de lit ?",
    answer: "Cherchez des points noirs sur le matelas et le sommier, des traînées de sang sur les draps, des mues ou des insectes dans les coutures. Des piqûres seules ne suffisent pas à conclure, car elles ressemblent à celles d'autres insectes. L'inspection sur place permet de lever le doute.",
  },
  {
    question: "Combien de temps dure le traitement ?",
    answer: "Avec des passages espacés de 10 à 15 jours, il faut compter environ 3 à 4 semaines entre le premier traitement et le passage de vérification. Cette durée dépend de l'infestation et elle est précisée lors de l'inspection.",
  },
  {
    question: "Combien coûte un traitement contre les punaises de lit ?",
    answer: "Le prix dépend notamment de la surface, du nombre de pièces, de l'importance de l'infestation et du nombre de passages. Il est fixé dans le devis établi après l'inspection. L'inspection est payante, et son montant est déduit du traitement si vous acceptez ce devis.",
  },
  {
    question: "Puis-je m'en débarrasser moi-même ?",
    answer: "Le lavage à 60 °C, le séchage à chaud et l'aspirateur sont de bons réflexes, surtout au tout début. Évitez en revanche d'appliquer vous-même des insecticides : ils atteignent mal les cachettes et leur usage répété favorise les résistances. Si le problème persiste, faites appel à un professionnel.",
  },
  {
    question: "Que faire contre les démangeaisons ?",
    answer: "Évitez de vous gratter, et demandez conseil à votre pharmacien pour une crème ou un gel adapté. Consultez un médecin si les démangeaisons persistent ou en cas de réaction allergique.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    LOCAL_BUSINESS,
    {
      "@type": "Service",
      url: PAGE_URL,
      name: "Traitement des punaises de lit en Haute-Marne",
      description: DESCRIPTION,
      provider: { "@id": LOCAL_BUSINESS["@id"] },
      areaServed: { "@type": "AdministrativeArea", name: "Haute-Marne (52)" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", position: 2, name: "Nos services", item: "https://gf-nuisibles.fr/#services" },
        { "@type": "ListItem", position: 3, name: "Punaises de lit", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

const callButton =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 font-heading font-bold text-accent-foreground transition-colors hover:bg-orange-hover";
const inspectionButton =
  "inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/40 px-6 py-4 font-heading font-bold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary";

const Section = ({ title, intro, muted, children }: { title: string; intro?: string; muted?: boolean; children: ReactNode }) => (
  <section className={`section-padding ${muted ? "bg-secondary" : "bg-background"}`}>
    <div className="container-narrow">
      <h2 className="font-heading text-3xl font-extrabold text-primary md:text-4xl">{title}</h2>
      <span className="mb-6 mt-4 block h-1 w-14 rounded-full bg-accent" aria-hidden="true" />
      {intro && <p className="mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground">{intro}</p>}
      {children}
    </div>
  </section>
);

const IconBadge = ({ icon: Icon }: { icon: LucideIcon }) => (
  <span className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
    <Icon className="h-6 w-6" aria-hidden="true" />
  </span>
);

const InfoCard = ({ icon, title, text }: { icon: LucideIcon; title: string; text: string }) => (
  <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
    <IconBadge icon={icon} />
    <h3 className="mb-2 font-heading text-lg font-bold text-primary">{title}</h3>
    <p className="leading-relaxed text-muted-foreground first-letter:uppercase">{text}</p>
  </article>
);

const CardGrid = ({ items, columns = "lg:grid-cols-4" }: { items: { icon: LucideIcon; title: string; text: string }[]; columns?: string }) => (
  <div className={`grid gap-6 sm:grid-cols-2 ${columns}`}>
    {items.map((item) => (
      <InfoCard key={item.title} {...item} />
    ))}
  </div>
);

const Callout = ({ icon: Icon, title, children }: { icon: LucideIcon; title?: string; children: ReactNode }) => (
  <aside className="flex h-full gap-4 rounded-2xl border-l-4 border-accent bg-accent/5 p-6">
    <Icon className="mt-1 h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
    <div>
      {title && <h3 className="mb-2 font-heading text-lg font-bold text-primary">{title}</h3>}
      <p className="leading-relaxed text-foreground/80">{children}</p>
    </div>
  </aside>
);

const externalLink = "underline underline-offset-2 hover:text-accent";

const Photo = ({ photo }: { photo: (typeof PHOTOS)[keyof typeof PHOTOS] }) => (
  <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
    <img src={photo.src} alt={photo.alt} loading="lazy" className="h-64 w-full object-cover md:h-80" />
    <figcaption className="p-4 text-sm leading-relaxed text-muted-foreground">
      {photo.caption}
      <span className="mt-1 block text-xs">
        Photo :{" "}
        <a href={photo.sourceUrl} target="_blank" rel="noopener noreferrer" className={externalLink}>
          {photo.credit}
        </a>
        ,{" "}
        {"licenseUrl" in photo ? (
          <a href={photo.licenseUrl} target="_blank" rel="noopener noreferrer" className={externalLink}>
            {photo.license}
          </a>
        ) : (
          photo.license
        )}
        .
      </span>
    </figcaption>
  </figure>
);

const CheckList = ({ items }: { items: { title?: string; text: string }[] }) => (
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

const Sources = ({ children }: { children: ReactNode }) => (
  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{children}</p>
);

/** Arrow between two steps of a timeline: downwards when stacked, sideways from lg up. */
const TimelineArrow = () => (
  <>
    <ArrowDown className="h-6 w-6 text-accent lg:hidden" aria-hidden="true" />
    <ArrowRight className="hidden h-6 w-6 text-accent lg:block" aria-hidden="true" />
  </>
);

/** Background information kept in the HTML but folded, so the page stays short to scan. */
const GuideBlock = ({ id, title, intro, summary, open, children }: { id?: string; title: string; intro?: string; summary: string; open?: boolean; children: ReactNode }) => (
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

const ContactButtons = ({ callLabel }: { callLabel: string }) => (
  <>
    <a href="tel:0765256792" className={callButton}>
      <Phone className="h-5 w-5" aria-hidden="true" />
      {callLabel}
    </a>
    <Link to="/contact" className={inspectionButton}>
      Demander une inspection
    </Link>
  </>
);

const CallBand = ({ title, text }: { title: string; text: string }) => (
  <section className="bg-background px-4 pb-16 md:px-8 lg:px-16 lg:pb-24">
    <div className="container-narrow flex flex-col gap-6 rounded-3xl bg-primary p-8 md:p-10 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="font-heading text-xl font-extrabold text-primary-foreground md:text-2xl">{title}</p>
        <p className="mt-2 max-w-xl leading-relaxed text-primary-foreground/80">{text}</p>
      </div>
      <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
        <ContactButtons callLabel="Appeler le 07 65 25 67 92" />
      </div>
    </div>
  </section>
);

const PunaisesDeLit = () => (
  <>
    <SEO title={TITLE} description={DESCRIPTION} path="/punaises-de-lit" />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <Navbar />

    <section className="relative overflow-hidden bg-primary px-4 pb-16 pt-32 md:px-8 md:pb-24 md:pt-36 lg:px-16">
      <Bug
        className="pointer-events-none absolute -right-16 top-24 h-72 w-72 text-primary-foreground/5 md:right-8 md:h-[26rem] md:w-[26rem]"
        aria-hidden="true"
      />
      <div className="container-narrow relative z-10">
        <Breadcrumbs items={breadcrumbsFrom(jsonLd)} />
        <p className="mb-3 font-heading font-semibold text-accent">Sans jugement et en toute discrétion</p>
        <h1 className="mb-5 max-w-3xl font-heading text-4xl font-extrabold text-primary-foreground md:text-5xl">
          Traitement des punaises de lit en Haute-Marne (52)
        </h1>
        <GoogleRating className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground underline-offset-4 hover:underline" />
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          Piqûres au réveil, petites taches noires sur le matelas ? GF Nuisibles inspecte votre logement, identifie l'ampleur de l'infestation et met en place un traitement en plusieurs passages, pour les particuliers comme pour les professionnels.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ContactButtons callLabel="Appeler le 07 65 25 67 92" />
        </div>
        <ul className="mt-8 grid gap-3 text-sm text-primary-foreground/90 sm:grid-cols-2 lg:max-w-3xl">
          <li className="flex items-center gap-2">
            <MapPin className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            Entreprise locale, près de Chaumont, intervention dans toute la Haute-Marne
          </li>
          <li className="flex items-center gap-2">
            <Clock className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            Joignable 7j/7, de 7h à 23h
          </li>
          <li className="flex items-center gap-2 sm:col-span-2">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            Inspection déduite du traitement si vous acceptez le devis
          </li>
        </ul>
        <a href="#reconnaitre" className="mt-6 inline-block text-sm font-semibold text-primary-foreground underline underline-offset-4 hover:text-accent">
          Pas sûr que ce soit des punaises ? Voir les signes à repérer
        </a>
      </div>
    </section>

    <main>
      <Section title="Vous n'y êtes pour rien">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <Callout icon={Info}>
            Les punaises de lit ne transmettent pas de maladie connue, mais elles provoquent démangeaisons, troubles du sommeil et beaucoup de stress. Et leur présence n'a rien à voir avec un manque d'hygiène : un logement très propre peut être touché.
          </Callout>
          <CheckList items={COMMITMENTS} />
        </div>
        <Sources>
          En France, plus d'un foyer sur dix a été touché entre 2017 et 2022. Source : <a href={ANSES_QUESTIONS_URL} target="_blank" rel="noopener noreferrer" className={externalLink}>ANSES</a>.
        </Sources>
      </Section>

      <Section
        muted
        title="Notre protocole de traitement"
        intro="Pour un devis clair, chaque intervention commence par une inspection sur place."
      >
        <article className="flex flex-col gap-4 rounded-2xl bg-primary p-6 text-primary-foreground shadow-sm sm:flex-row md:p-8">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent font-heading text-lg font-bold text-accent-foreground">
            1
          </span>
          <div>
            <h3 className="mb-2 flex items-center gap-2 font-heading text-xl font-bold">
              <Search className="h-5 w-5 text-accent" aria-hidden="true" />
              Inspection sur place
            </h3>
            <p className="leading-relaxed text-primary-foreground/80 first-letter:uppercase">
              je vérifie les pièces concernées, les zones de cachette et l'ampleur de l'infestation, puis j'établis un devis précis. L'inspection est payante ; son montant est déduit du traitement si vous acceptez le devis.
            </p>
          </div>
        </article>
        <ArrowDown className="mx-auto my-4 h-6 w-6 text-accent" aria-hidden="true" />
        <ol className="grid items-stretch justify-items-center gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {TREATMENT_STEPS.map((item, i) => (
            <Fragment key={item.step}>
              {i > 0 && (
                <li className="flex flex-col items-center gap-2 self-center" aria-label="10 à 15 jours plus tard">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1.5 text-sm font-semibold text-primary lg:max-w-[5.5rem] lg:flex-col lg:gap-1 lg:rounded-2xl lg:text-center">
                    <CalendarClock className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    10 à 15 jours
                  </span>
                  <TimelineArrow />
                </li>
              )}
              <li className="w-full">
                <article className="h-full rounded-2xl bg-card p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-heading font-bold text-accent-foreground">
                      {item.step}
                    </span>
                    <item.icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-bold text-primary">{item.title}</h3>
                  <p className="leading-relaxed text-muted-foreground first-letter:uppercase">{item.text}</p>
                </article>
              </li>
            </Fragment>
          ))}
        </ol>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Callout icon={Lightbulb} title="Pourquoi 10 à 15 jours entre chaque passage ?">
            Les œufs ne sont pas sensibles aux biocides. Il faut donc laisser aux œufs le temps d'éclore, puis traiter les jeunes punaises avant qu'elles ne deviennent adultes et ne pondent à leur tour.
          </Callout>
          <Callout icon={Info} title="Infestation faible ou débutante">
            Pour une petite infestation détectée tôt, le protocole peut être allégé. Le nombre de passages est défini lors de l'inspection.
          </Callout>
        </div>
      </Section>

      <Section title="Combien coûte un traitement ?">
        <p className="mb-6 max-w-3xl text-lg leading-relaxed text-foreground/80">
          <strong className="text-primary">Le prix dépend surtout de l'ampleur de l'infestation.</strong> Comptez environ{" "}
          <strong className="whitespace-nowrap text-primary">250 €</strong> pour une petite infestation repérée tôt, et jusqu'à{" "}
          <strong className="whitespace-nowrap text-primary">900 €</strong> ou plus quand plusieurs pièces sont touchées. À titre de repère, l'ANSES estime la dépense moyenne à environ 866 € par foyer.
        </p>
        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Il n'existe pas de tarif unique valable pour tous les logements. Le prix tient compte de plusieurs éléments :
        </p>
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <CheckList items={PRICE_FACTORS} />
          <Callout icon={Search} title="Un prix fixé après l'inspection">
            L'inspection est payante, et son montant est déduit du traitement si vous acceptez le devis. Le devis indique le prix exact et ce qu'il comprend, avant que vous ne vous engagiez.
          </Callout>
        </div>
      </Section>

      <CallBand
        title="Vous hésitez encore ?"
        text="Appelez et décrivez ce que vous avez remarqué : nous voyons ensemble s'il faut organiser une inspection."
      />

      <Section
        muted
        title="Bien choisir son professionnel"
        intro="Face à une infestation, on veut agir vite. Quelques vérifications simples permettent de faire appel à la bonne personne :"
      >
        <CardGrid items={PRO_CHECKS} columns="lg:grid-cols-3" />
      </Section>

      <Section
        title="Particuliers et professionnels"
        intro="J'interviens dans toute la Haute-Marne et les départements limitrophes, pour :"
      >
        <CardGrid items={CLIENTS} />
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          Les documents remis après l'intervention sont adaptés à chaque client, particulier ou professionnel.
        </p>
        <Link
          to="/zone-intervention"
          className="mt-4 inline-flex items-center gap-2 font-heading font-semibold text-primary underline underline-offset-4 hover:text-accent"
        >
          <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
          Voir notre zone d'intervention
        </Link>
      </Section>

      <Section
        muted
        title="Combien de temps pour s'en débarrasser ?"
        intro="Avec des passages espacés de 10 à 15 jours, il faut compter environ 3 à 4 semaines entre le premier traitement et le passage de vérification. Cette durée varie selon chaque situation et elle est précisée lors de l'inspection."
      >
        <CardGrid items={DURATION_FACTORS} />
        <div className="mt-8">
          <Callout icon={CalendarClock} title="Et après le dernier passage ?">
            Restez attentif pendant 1 à 2 mois et signalez toute nouvelle piqûre ou trace. D'après l'ANSES, deux tiers des personnes touchées se débarrassent des punaises de lit en moins de deux mois.
          </Callout>
        </div>
        <Sources>
          Sources :{" "}
          <a href={AMELI_ADVICE_URL} target="_blank" rel="noopener noreferrer" className={externalLink}>Assurance maladie (ameli.fr)</a>
          {" "}et{" "}
          <a href={ANSES_QUESTIONS_URL} target="_blank" rel="noopener noreferrer" className={externalLink}>ANSES</a>.
        </Sources>
      </Section>

      <section className="section-padding bg-background">
        <div className="container-narrow space-y-6">
          <GuideBlock
            id="reconnaitre"
            title="Reconnaître les punaises de lit"
            intro="Les punaises de lit se cachent le jour et se nourrissent la nuit. On les voit rarement : ce sont surtout leurs traces qui alertent."
            summary="Voir les signes à repérer"
            open
          >
            <div className="mb-10 grid items-center gap-8 lg:grid-cols-2">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Une punaise adulte a à peu près la taille d'un pépin de pomme. Elle reste donc visible à l'œil nu, mais elle fuit la lumière et ne sort de sa cachette que pour se nourrir. Les jeunes punaises, plus claires, ne mesurent que 1 à 2 mm : sur un drap ou un matelas, elles passent facilement inaperçues.
              </p>
              <Photo photo={PHOTOS.adulte} />
            </div>
            <CardGrid items={SIGNS} />
          </GuideBlock>
          <GuideBlock
            title="Comment vérifier chez vous ?"
            intro="Prenez une lampe de poche et commencez par la chambre : ces insectes s'installent au plus près de l'endroit où vous dormez, dans les recoins sombres et calmes."
            summary="Voir les endroits à inspecter"
          >
            <div className="grid items-start gap-8 lg:grid-cols-2">
              <div>
                <CheckList items={CHECK_ZONES} />
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  Pour explorer une couture ou une fente, glissez-y le bord d'une carte rigide. Et ne vous fiez pas au fait qu'une seule personne du foyer soit piquée : c'est souvent le cas au début d'une infestation.
                </p>
              </div>
              <Photo photo={PHOTOS.traces} />
            </div>
            <Sources>
              Sources :{" "}
              <a href={AMELI_SIGNS_URL} target="_blank" rel="noopener noreferrer" className={externalLink}>Assurance maladie (ameli.fr)</a>
              {" "}et{" "}
              <a href={ANSES_QUESTIONS_URL} target="_blank" rel="noopener noreferrer" className={externalLink}>ANSES</a>.
            </Sources>
          </GuideBlock>
          <GuideBlock
            title="Les erreurs à éviter"
            summary="Voir les erreurs les plus courantes"
          >
            <CardGrid items={MISTAKES} />
            <div className="mt-8">
              <Callout icon={ShieldAlert} title="Attention aux insecticides vendus sur internet ou sur les marchés">
                Certains sont interdits en France, comme le dichlorvos, et ont provoqué des intoxications parfois mortelles. Évitez aussi d'appliquer vous-même des produits autorisés : ils atteignent mal les cachettes, et leur usage répété favorise les résistances.
              </Callout>
            </div>
            <Sources>
              Source :{" "}
              <a href={AMELI_ADVICE_URL} target="_blank" rel="noopener noreferrer" className={externalLink}>Assurance maladie (ameli.fr)</a>.
            </Sources>
          </GuideBlock>
          <GuideBlock
            title="Préparer votre logement"
            summary="Voir comment préparer le passage"
          >
            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:flex-row md:p-8">
              <IconBadge icon={WashingMachine} />
              <p className="text-lg leading-relaxed text-muted-foreground">
                Avant le traitement, lavez à 60 °C minimum les draps, housses et vêtements qui le supportent, puis séchez-les au sèche-linge et rangez-les dans des sacs fermés jusqu'à la fin du traitement. Pour une infestation importante, je vous indique précisément quoi faire lors de l'inspection. Une fiche de consignes vous est remise.
              </p>
            </div>
            <h3 className="mb-4 mt-8 font-heading text-xl font-bold text-primary">Les bons réflexes avant mon passage</h3>
            <CheckList items={PREP_STEPS} />
            <Sources>
              Source :{" "}
              <a href={AMELI_ADVICE_URL} target="_blank" rel="noopener noreferrer" className={externalLink}>Assurance maladie (ameli.fr)</a>.
            </Sources>
          </GuideBlock>
          <GuideBlock
            title="Comment elles se multiplient"
            intro="Comprendre leur cycle de vie explique pourquoi un seul passage suffit rarement."
            summary="Voir leur cycle de vie"
          >
            <ol className="grid items-stretch justify-items-center gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
              <li className="w-full">
                <article className="h-full rounded-2xl bg-card p-6 text-center shadow-sm">
                  <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Egg className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <h3 className="mb-2 font-heading text-lg font-bold text-primary">Œuf</h3>
                  <p className="leading-relaxed text-muted-foreground first-letter:uppercase">
                    une femelle pond 1 à 7 œufs par jour, soit 200 à 500 œufs au cours de sa vie. Ils éclosent en moins d'une semaine.
                  </p>
                </article>
              </li>
              <li className="self-center" aria-hidden="true"><TimelineArrow /></li>
              <li className="w-full">
                <article className="h-full rounded-2xl bg-card p-6 text-center shadow-sm">
                  <div className="mb-4 flex h-16 items-end justify-center gap-1.5" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((stage) => (
                      <span
                        key={stage}
                        className="flex items-center justify-center rounded-full bg-accent font-heading text-xs font-bold text-accent-foreground"
                        style={{ height: `${20 + stage * 5}px`, width: `${20 + stage * 5}px` }}
                      >
                        {stage}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-bold text-primary">5 stades larvaires</h3>
                  <p className="leading-relaxed text-muted-foreground first-letter:uppercase">
                    la jeune punaise mue 5 fois, et chaque mue demande un repas de sang.
                  </p>
                </article>
              </li>
              <li className="self-center" aria-hidden="true"><TimelineArrow /></li>
              <li className="w-full">
                <article className="h-full rounded-2xl bg-card p-6 text-center shadow-sm">
                  <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Bug className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <h3 className="mb-2 font-heading text-lg font-bold text-primary">Adulte</h3>
                  <p className="leading-relaxed text-muted-foreground first-letter:uppercase">
                    il vit de 3 à 10 mois et peut survivre plusieurs mois sans se nourrir.
                  </p>
                </article>
              </li>
            </ol>
            <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
              <p className="text-lg leading-relaxed text-foreground/80">
                Avec des repas réguliers, il faut environ 40 à 70 jours pour passer d'un œuf à un adulte qui pond à son tour. C'est pourquoi une infestation négligée s'étend vite d'une pièce à l'autre.
              </p>
              <Photo photo={PHOTOS.larve} />
            </div>
          </GuideBlock>
          <GuideBlock
            title="D'où viennent les punaises de lit ?"
            intro="Elles voyagent avec nous, cachées dans les bagages, les vêtements et les meubles."
            summary="Voir les origines possibles"
          >
            <CardGrid items={ORIGINS} />
            <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
              <div>
                <Callout icon={Info} title="Un problème plus courant qu'on ne le croit">
                  Selon l'ANSES, 11 % des foyers français ont été touchés entre 2017 et 2022, sans lien avec leur niveau de revenus. Près de 40 % des infestations font suite à un séjour à l'hôtel ou en location de vacances, et près de 20 % à un achat d'occasion. Dans 16 % des cas, le logement était déjà infesté à l'arrivée des occupants.
                </Callout>
                <Sources>
                  Source :{" "}
                  <a href={ANSES_QUESTIONS_URL} target="_blank" rel="noopener noreferrer" className={externalLink}>ANSES</a>.
                </Sources>
              </div>
              <Photo photo={PHOTOS.bagage} />
            </div>
          </GuideBlock>
          <GuideBlock
            title="Quels risques pour la santé ?"
            intro="Ces insectes ne transmettent pas de maladie, mais une infestation peut peser lourd au quotidien, sur la peau comme sur le moral."
            summary="Voir les effets possibles"
          >
            <div className="grid items-start gap-8 lg:grid-cols-[2fr_1fr]">
              <div className="grid gap-6 sm:grid-cols-2">
                {HEALTH.map((item) => (
                  <InfoCard key={item.title} {...item} />
                ))}
              </div>
              <Photo photo={PHOTOS.piqures} />
            </div>
            <Sources>
              Ces informations générales ne remplacent pas l'avis d'un professionnel de santé. Sources :{" "}
              <a href={AMELI_ADVICE_URL} target="_blank" rel="noopener noreferrer" className={externalLink}>Assurance maladie (ameli.fr)</a>
              {" "}et{" "}
              <a href="https://www.anses.fr/en/news/bed-bugs-are-financial-burden-and-reduce-quality-life-many-people-france" target="_blank" rel="noopener noreferrer" className={externalLink}>ANSES</a>.
            </Sources>
          </GuideBlock>
          <GuideBlock
            title="Conseils pour éviter une nouvelle infestation"
            summary="Voir les conseils"
          >
            <CardGrid items={TIPS} columns="lg:grid-cols-3" />
          </GuideBlock>
        </div>
      </section>

      <Section muted title="Questions fréquentes">
        {/* forceMount keeps every answer in the prerendered HTML; closed ones are hidden with CSS. */}
        <Accordion type="single" collapsible className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
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
      </Section>

      <section className="section-padding bg-background">
        <div className="container-narrow rounded-3xl bg-primary p-8 text-center md:p-12">
          <h2 className="mb-4 font-heading text-2xl font-extrabold text-primary-foreground md:text-3xl">
            Des punaises de lit chez vous ou dans votre établissement ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Appelez GF Nuisibles au 07 65 25 67 92, joignable 7j/7 de 7h à 23h, pour organiser une inspection sur place.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a href="tel:0765256792" className={callButton}>
              <Phone className="h-5 w-5" aria-hidden="true" />
              Appeler
            </a>
            <Link to="/contact" className={inspectionButton}>
              Demander une inspection
            </Link>
          </div>
        </div>
      </section>
    </main>

    <Reassurance />
    <Footer />
  </>
);

export default PunaisesDeLit;
