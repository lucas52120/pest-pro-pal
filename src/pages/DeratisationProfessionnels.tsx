import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Box,
  CalendarCheck,
  CalendarClock,
  ClipboardList,
  FileSignature,
  FileText,
  FolderOpen,
  LucideIcon,
  Map as MapIcon,
  Phone,
  Receipt,
  Search,
  ShieldCheck,
} from "lucide-react";
import bakeryImage from "@/assets/pro-boulangerie.jpg";
import townHallImage from "@/assets/pro-mairie.jpg";
import buildingImage from "@/assets/pro-immeuble.jpg";
import warehouseImage from "@/assets/pro-entrepot.jpg";
import Navbar from "@/components/Navbar";
import Reassurance from "@/components/Reassurance";
import Footer from "@/components/Footer";
import ClientReviews from "@/components/ClientReviews";
import SEO from "@/components/SEO";
import { breadcrumbsFrom } from "@/components/Breadcrumbs";
import ProHero from "@/components/ProHero";
import { CallBand, Callout, CardGrid, CheckList, CityPills, FaqList, Section, ServiceStep, StepRow, callButton, textLink } from "@/components/ServiceBlocks";
import { LOCAL_BUSINESS } from "@/data/business";

const SLUG = "/deratisation-professionnels";
const PAGE_URL = `https://gf-nuisibles.fr${SLUG}`;
const TITLE = "Dératisation professionnels Haute-Marne : contrat annuel";
const DESCRIPTION =
  "Restaurants, boulangeries, communes, syndics : contrat de dératisation à l'année en Haute-Marne, 3 à 4 passages, classeur sanitaire HACCP. Sur devis : 07 65 25 67 92.";

/** The short arguments right under the hero. */
const HIGHLIGHTS: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: CalendarCheck, title: "Contrat à l'année", text: "3 à 4 passages par an" },
  { icon: FolderOpen, title: "Classeur sanitaire", text: "plan, registre, rapports" },
  { icon: CalendarClock, title: "7 jours sur 7", text: "tôt le matin, le soir, le dimanche" },
  { icon: FileSignature, title: "Sur devis", text: "après visite de vos locaux" },
  { icon: Receipt, title: "Chorus Pro", text: "pour les collectivités" },
  { icon: ShieldCheck, title: "Certibiocide", text: "dératiseur certifié" },
];

type Audience = {
  id: string;
  /** The tile label in the hero. */
  short: string;
  label: string;
  title: string;
  text: string;
  points: { text: string }[];
  cta: string;
  /** The page of this kind of client, when it exists. */
  page?: { to: string; label: string };
  image: string;
  imageAlt: string;
};

/** One big block per kind of client, photo on alternating sides. */
const AUDIENCES: Audience[] = [
  {
    id: "restaurants",
    short: "Restaurant ou boulangerie",
    label: "Restaurants, boulangeries, métiers de bouche",
    title: "Une cuisine sans rats ni souris, un classeur prêt pour la DDPP",
    text: "Farine, stocks, chaleur des fours : un commerce alimentaire attire les rongeurs toute l'année. Le contrat vous protège et vous donne les preuves demandées par votre plan HACCP.",
    points: [
      { text: "Postes sécurisés à l'écart des aliments : dehors, réserves, caves, local poubelles." },
      { text: "Passages avant l'ouverture, après le service ou votre jour de fermeture." },
      { text: "Plan des postes, registre et rapports à présenter lors d'un contrôle." },
    ],
    cta: "Un devis pour votre restaurant ou votre boulangerie",
    page: { to: "/deratisation-restaurants", label: "Découvrir l'offre restaurants et boulangeries" },
    image: bakeryImage,
    imageAlt: "Comptoir de boulangerie avec pains et viennoiseries, deux employés en tablier",
  },
  {
    id: "collectivites",
    short: "Commune ou collectivité",
    label: "Communes et collectivités",
    title: "Des bâtiments communaux protégés, des habitants rassurés",
    text: "École, cantine, salle des fêtes, atelier municipal : je mets en place un suivi adapté à chaque bâtiment, sans gêner le public. Je travaille déjà avec des communes de Haute-Marne.",
    points: [
      { text: "Postes fermés et fixés, hors de portée des enfants." },
      { text: "Passages hors présence du public, ou pendant les vacances scolaires." },
      { text: "Devis pour engager la dépense, facture déposée sur Chorus Pro." },
    ],
    cta: "Un devis pour votre commune",
    page: { to: "/deratisation-collectivites", label: "Découvrir l'offre communes et collectivités" },
    image: townHallImage,
    imageAlt: "Mairie de village en Haute-Marne, façade fleurie au bout d'une allée",
  },
  {
    id: "syndics",
    short: "Syndic ou bailleur",
    label: "Syndics, bailleurs, copropriétés",
    title: "Des parties communes saines pour tous les résidents",
    text: "Un rat dans le local poubelles, et c'est tout l'immeuble qui s'inquiète. Le contrat traite les parties communes en continu et vous donne de quoi informer le conseil syndical.",
    points: [
      { text: "Caves, locaux poubelles, vide-ordures, locaux techniques et abords." },
      { text: "Un devis clair, à présenter en assemblée générale." },
      { text: "Un rapport après chaque passage, à transmettre aux copropriétaires." },
    ],
    cta: "Un devis pour votre immeuble",
    page: { to: "/deratisation-coproprietes", label: "Découvrir l'offre copropriétés et syndics" },
    image: buildingImage,
    imageAlt: "Façade d'immeuble ancien aux volets blancs et balcons fleuris",
  },
  {
    id: "entreprises",
    short: "Commerce ou entreprise",
    label: "Commerces, entrepôts, entreprises",
    title: "Vos stocks et vos locaux à l'abri des rongeurs",
    text: "Cartons, marchandises, câbles : un rongeur dans un entrepôt ou un magasin coûte vite cher. Je protège vos bâtiments sans arrêter votre activité.",
    points: [
      { text: "Quais de livraison, réserves, rayonnages et locaux techniques." },
      { text: "Passages en dehors de vos horaires d'ouverture." },
      { text: "Conseils pour fermer les accès : bas de portes, gaines, trous dans les murs." },
    ],
    cta: "Un devis pour votre entreprise",
    image: warehouseImage,
    imageAlt: "Entrepôt avec rayonnages et palettes de marchandises",
  },
];

const STEPS: ServiceStep[] = [
  { step: 1, icon: Phone, title: "Votre appel", text: "Vous me dites votre activité, vos locaux et ce que vous avez remarqué." },
  { step: 2, icon: Search, title: "Visite des locaux", text: "Je cherche les traces, les entrées possibles et les zones à risque, dedans comme dehors." },
  { step: 3, icon: FileSignature, title: "Devis et contrat", text: "Nombre de postes, nombre de passages, documents remis : tout est écrit." },
  { step: 4, icon: ClipboardList, title: "Mise en place", text: "Je pose les postes, je les numérote et je vous remets le plan et le classeur." },
  { step: 5, icon: CalendarCheck, title: "Passages réguliers", text: "3 à 4 par an en général, avec un rapport à chaque visite." },
];

const CONTRACT: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Box, title: "Des postes sécurisés", text: "fermés, fixés et numérotés : les appâts restent hors de portée du public et des animaux." },
  { icon: MapIcon, title: "Le plan des postes", text: "l'emplacement de chaque poste, mis à jour dès qu'on en ajoute ou en déplace un." },
  { icon: CalendarCheck, title: "3 à 4 passages par an", text: "pour casser le cycle de reproduction des rats et des souris." },
  { icon: FileText, title: "Un rapport à chaque visite", text: "ce que j'ai vu, ce que j'ai fait, et ce que je conseille pour fermer les accès." },
  { icon: BookOpen, title: "Le registre", text: "toutes les interventions datées, dans l'ordre, prêtes à être montrées." },
  { icon: FolderOpen, title: "Le classeur sanitaire", text: "contrat, plan, registre, rapports et fiches des produits, réunis au même endroit." },
];

const FAQ = [
  {
    question: "Combien coûte un contrat de dératisation pour un professionnel ?",
    answer: "Il est établi sur devis, après une visite de vos locaux. Le prix dépend de la surface, du nombre de postes et du nombre de passages, et le devis dit exactement ce qui est compris.",
  },
  {
    question: "Combien de passages par an faut-il prévoir ?",
    answer: "En général 3 à 4, pour casser le cycle de reproduction des rats et des souris. Le rythme est adapté à vos locaux et fixé dans le contrat.",
  },
  {
    question: "Un contrat de dératisation est-il obligatoire pour un restaurant ?",
    answer: "Aucun texte n'oblige à signer un contrat. En revanche, un commerce alimentaire doit lutter contre les nuisibles dans le cadre de son plan HACCP et pouvoir le prouver lors d'un contrôle de la DDPP. Un contrat avec registre et rapports est la façon la plus simple de le faire.",
  },
  {
    question: "Les appâts sont-ils dangereux pour le public ou les aliments ?",
    answer: "Ils sont enfermés dans des postes sécurisés, fixés et numérotés, hors de portée des enfants et des animaux, et placés à l'écart des aliments. Leur emplacement figure sur le plan des postes.",
  },
  {
    question: "Que faire si je vois un rat entre deux passages ?",
    answer: "Appelez-moi. Selon ce que vous avez vu, on avance un passage ou on ajoute des postes à l'endroit concerné.",
  },
  {
    question: "Pouvez-vous facturer une commune par Chorus Pro ?",
    answer: "Oui. Je fournis le devis pour engager la dépense, puis la facture est déposée sur Chorus Pro.",
  },
  {
    question: "Où intervenez-vous ?",
    answer: "Dans toute la Haute-Marne : Chaumont, Langres, Saint-Dizier, Joinville, Nogent, Bourbonne-les-Bains et les autres communes du département. Pour un site plus éloigné, appelez le 07 65 25 67 92.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    LOCAL_BUSINESS,
    {
      "@type": "Service",
      name: "Dératisation pour les professionnels en Haute-Marne",
      serviceType: "Dératisation",
      url: PAGE_URL,
      description: DESCRIPTION,
      provider: { "@id": "https://gf-nuisibles.fr/#organization" },
      areaServed: { "@type": "AdministrativeArea", name: "Haute-Marne" },
      audience: ["Restaurants", "Boulangeries", "Collectivités", "Syndics de copropriété", "Commerces et entreprises"].map((audienceType) => ({
        "@type": "BusinessAudience",
        audienceType,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", position: 2, name: "Dératisation", item: "https://gf-nuisibles.fr/deratisation" },
        { "@type": "ListItem", position: 3, name: "Professionnels", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
    },
  ],
};

const AudienceBlock = ({ audience, flip }: { audience: Audience; flip: boolean }) => (
  <article id={audience.id} className="grid scroll-mt-24 items-center gap-6 lg:grid-cols-2 lg:gap-12">
    <img
      src={audience.image}
      alt={audience.imageAlt}
      loading="lazy"
      className={`h-56 w-full rounded-2xl object-cover shadow-sm sm:h-72 lg:h-96 ${flip ? "lg:order-last" : ""}`}
    />
    <div>
      <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-wide text-accent">{audience.label}</p>
      <h3 className="mb-3 font-heading text-2xl font-bold text-primary md:text-3xl">{audience.title}</h3>
      <p className="mb-5 text-lg leading-relaxed text-muted-foreground">{audience.text}</p>
      <CheckList items={audience.points} />
      {audience.page && (
        <Link to={audience.page.to} className={`${callButton} mt-6 w-full sm:w-auto`}>
          {audience.page.label}
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      )}
      <Link to="/contact" className="mt-5 flex w-full items-center sm:w-fit gap-2 font-heading font-bold text-primary underline-offset-4 hover:text-accent hover:underline">
        {audience.cta}
        <ArrowRight className="h-5 w-5 text-accent" aria-hidden="true" />
      </Link>
    </div>
  </article>
);

/** The four kinds of clients, as the way into the page. */
const AudienceMosaic = () => (
  <>
    <p className="mb-3 font-heading text-lg font-bold text-primary">Vous êtes…</p>
    <div className="grid grid-cols-2 gap-3 md:gap-4">
      {AUDIENCES.map((audience) => (
        <a key={audience.id} href={`#${audience.id}`} className="group relative block h-36 overflow-hidden rounded-2xl shadow-md sm:h-44 lg:h-56">
          <img src={audience.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <span className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
          <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 font-heading text-sm font-bold leading-tight text-primary-foreground md:p-4 md:text-base">
            {audience.short}
            <ArrowDown className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </span>
        </a>
      ))}
    </div>
  </>
);

const DeratisationProfessionnels = () => (
  <>
    <SEO title={TITLE} description={DESCRIPTION} path={SLUG} />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <Navbar />

    <ProHero
      breadcrumbs={breadcrumbsFrom(jsonLd)}
      badge="Contrats professionnels en Haute-Marne"
      title="Dératisation pour les professionnels"
      accent="en Haute-Marne"
      text="Restaurants, boulangeries, communes, syndics, entreprises : vos locaux protégés des rats et des souris toute l'année, un classeur sanitaire à jour, et un dératiseur local qui passe quand ça vous arrange."
      checks={["Sur devis, après visite", "7j/7, de 7h à 23h", "Facturation Chorus Pro"]}
      aside={<AudienceMosaic />}
    />

    <main>
      <section className="bg-secondary px-4 py-10 md:px-8 lg:px-16">
        <ul className="container-narrow grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 lg:grid-cols-6">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex flex-col items-start gap-2">
              <Icon className="h-7 w-7 text-accent" aria-hidden="true" />
              <span className="font-heading font-bold text-primary">{title}</span>
              <span className="text-sm leading-snug text-muted-foreground">{text}</span>
            </li>
          ))}
        </ul>
      </section>

      <div id="reconnaitre" className="scroll-mt-20">
        <Section
          title="Une solution pour chaque activité"
          intro="Restaurant, commune, immeuble ou entrepôt : les rongeurs n'y entrent pas par les mêmes endroits, et vos contraintes ne sont pas les mêmes."
        >
          <div className="space-y-16 lg:space-y-24">
            {AUDIENCES.map((audience, i) => (
              <AudienceBlock key={audience.id} audience={audience} flip={i % 2 === 1} />
            ))}
          </div>
        </Section>
      </div>

      <CallBand
        title="Un devis pour vos locaux ?"
        text="Dites-moi votre activité et l'adresse : je passe voir les lieux quand ça vous arrange."
        contactLabel="Demander un devis pro"
      />

      <Section muted title="Comment se passe un contrat de dératisation ?" intro="Un seul interlocuteur, de la première visite à chaque passage de contrôle.">
        <StepRow steps={STEPS} />
      </Section>

      <Section title="Ce que comprend le contrat" intro="Chaque contrat est fait sur mesure, mais on y retrouve toujours ces éléments.">
        <CardGrid items={CONTRACT} columns="lg:grid-cols-3" />
        <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">
          Entre deux passages, vous voyez des traces ou un rongeur ? Appelez-moi : on regarde ensemble s'il faut avancer un passage ou ajouter des postes.
        </p>
        <ClientReviews keys={["yerli", "jc", "mathieu"]} />
      </Section>

      <Section muted title="Ils me font déjà confiance">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Je travaille déjà avec des restaurants, des syndics et des communes de Haute-Marne, dont la commune de Lefond et le syndic Square Habitat.
            </p>
            <p>
              Entreprise locale installée près de Chaumont, j'interviens à Chaumont, Langres, Saint-Dizier, Joinville et dans tout le département. Vous avez un seul interlocuteur, joignable 7 jours sur 7.
            </p>
            <p>
              <Link to="/contact" className={textLink}>Demandez un devis</Link> ou appelez le 07 65 25 67 92.
            </p>
          </div>
          <Callout icon={ShieldCheck} title="Certibiocide">
            Je suis titulaire du Certibiocide, le certificat obligatoire pour acheter et utiliser des rodenticides professionnels.
          </Callout>
        </div>
      </Section>

      <Section title="Vos questions sur la dératisation professionnelle">
        <FaqList items={FAQ} />
      </Section>

      <Section muted title="La dératisation près de chez vous" intro="Pour un particulier ou pour en savoir plus sur votre ville.">
        <CityPills
          links={[
            { label: "Dératisation en Haute-Marne", to: "/deratisation" },
            { label: "Dératisation Chaumont", to: "/deratisation-chaumont" },
            { label: "Dératisation Saint-Dizier", to: "/deratisation-saint-dizier" },
            { label: "Dératisation Langres", to: "/deratisation-langres" },
            { label: "Dératisation Joinville", to: "/deratisation-joinville" },
            { label: "Cafards et blattes", to: "/cafards-blattes" },
          ]}
        />
      </Section>
    </main>

    <Reassurance />
    <Footer />
  </>
);

export default DeratisationProfessionnels;
