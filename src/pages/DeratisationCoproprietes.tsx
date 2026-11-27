import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Cable,
  CalendarCheck,
  Car,
  CarFront,
  ClipboardList,
  FileSignature,
  FileText,
  Flame,
  Home,
  KeyRound,
  Layers,
  LucideIcon,
  MessageCircleWarning,
  Phone,
  Plug,
  Search,
  ShieldCheck,
  Stethoscope,
  Trash2,
  Trees,
  Warehouse,
} from "lucide-react";
import buildingImage from "@/assets/pro-immeuble.jpg";
import Navbar from "@/components/Navbar";
import Reassurance from "@/components/Reassurance";
import Footer from "@/components/Footer";
import ClientReviews from "@/components/ClientReviews";
import SEO from "@/components/SEO";
import ProHero from "@/components/ProHero";
import { FactsBand, FinalCta, HeroPhotoCard, ProgramCards, PromiseCards, RiskCards, RulesCompare } from "@/components/ProBlocks";
import { breadcrumbsFrom } from "@/components/Breadcrumbs";
import { CityPills, FaqList, PlaceGrid, Section, ServiceStep, StepRow, textLink } from "@/components/ServiceBlocks";
import { LOCAL_BUSINESS } from "@/data/business";

const SLUG = "/deratisation-coproprietes";
const PAGE_URL = `https://gf-nuisibles.fr${SLUG}`;
const TITLE = "Dératisation copropriété et syndic Haute-Marne | Immeubles";
const DESCRIPTION =
  "Dératiseur pour syndics et copropriétés en Haute-Marne ✓ Caves, locaux poubelles, vide-ordures ✓ Contrat à l'année ✓ Rapports pour l'AG. Devis gratuit.";

const FACTS = [
  { value: "3 à 4", label: "passages par an dans les parties communes" },
  { value: "7j/7", label: "de 7h à 23h, accès organisé avec le gardien ou le syndic" },
  { value: "1 rapport", label: "après chaque passage, à transmettre aux copropriétaires" },
];

const RISKS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: MessageCircleWarning,
    title: "Des résidents qui appellent",
    text: "Un rat vu dans le local poubelles, et ce sont le syndic et le conseil syndical que l'on interpelle.",
  },
  {
    icon: Home,
    title: "Des logements touchés",
    text: "Par les gaines et les colonnes, les souris montent dans les appartements. Les locataires se tournent alors vers leur bailleur.",
  },
  {
    icon: Plug,
    title: "Des dégâts dans l'immeuble",
    text: "Câbles rongés dans les caves, isolants arrachés, sacs poubelles éventrés : des réparations à la charge de tous.",
  },
  {
    icon: Stethoscope,
    title: "La santé des résidents",
    text: "Les rats peuvent transmettre des maladies comme la leptospirose, et leurs déjections salissent caves et locaux communs.",
  },
];

const PLACES: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Warehouse, title: "Caves et sous-sols", text: "couloirs de caves, soupiraux, passages de canalisations." },
  { icon: Trash2, title: "Local poubelles", text: "bacs, sol, recoins derrière les conteneurs et grille d'évacuation." },
  { icon: Layers, title: "Vide-ordures", text: "colonnes, trappes et local de réception en pied d'immeuble." },
  { icon: Flame, title: "Chaufferie et locaux techniques", text: "endroits chauds et peu fréquentés, très recherchés l'hiver." },
  { icon: Car, title: "Parkings et garages", text: "boxes, rampes et locaux de rangement." },
  { icon: Trees, title: "Espaces verts et abords", text: "haies, massifs et pieds de façade, d'où partent les terriers." },
  { icon: Cable, title: "Gaines et colonnes", text: "les passages par lesquels les rongeurs montent d'un étage à l'autre." },
  { icon: KeyRound, title: "Logements", text: "à la demande du copropriétaire ou du bailleur, quand un appartement est touché." },
];

const PROGRAM = [
  {
    title: "Prévenir",
    intro: "Fermer les accès de l'immeuble.",
    points: ["État des lieux des parties communes à la première visite", "Repérage des entrées : soupiraux, portes de caves, réseaux", "Conseils pour le local poubelles et la gestion des déchets"],
  },
  {
    title: "Surveiller",
    intro: "Voir la moindre activité, cave par cave.",
    points: ["Postes sécurisés, fermés, fixés et numérotés", "Hors de portée des enfants et des animaux des résidents", "3 à 4 passages par an, et un appel suffit entre deux passages"],
  },
  {
    title: "Rendre compte",
    intro: "Des documents pour le syndic et le conseil syndical.",
    points: ["Un plan des postes par bâtiment", "Un rapport après chaque passage", "Un registre de toutes les interventions"],
  },
];

/** Who pays, depending on where the rodents are. */
const WHO = [
  { title: "Dans les parties communes", text: "C'est à la copropriété : le syndic fait intervenir, et le coût entre dans les charges communes." },
  { title: "Dans un logement loué", text: "Le bailleur doit louer un logement décent, sans nuisibles. Le locataire le prévient par écrit dès les premiers signes." },
  { title: "Dans un logement occupé par son propriétaire", text: "C'est à lui d'agir chez lui. Si les rongeurs viennent des caves, il prévient le syndic." },
  { title: "Dans tout l'immeuble", text: "Le syndic coordonne : on traite les parties communes et les logements touchés dans la même période." },
];

const STEPS: ServiceStep[] = [
  { step: 1, icon: Phone, title: "Votre appel", text: "Le syndic, le bailleur ou le conseil syndical me décrit l'immeuble et ce qui a été constaté." },
  { step: 2, icon: Search, title: "Visite de l'immeuble", text: "Je fais le tour des parties communes avec le gardien ou un membre du conseil syndical." },
  { step: 3, icon: FileSignature, title: "Devis", text: "Un devis détaillé, à présenter en assemblée générale ou à inscrire au budget." },
  { step: 4, icon: ClipboardList, title: "Mise en place", text: "Pose des postes, plan par bâtiment et classeur remis au syndic." },
  { step: 5, icon: CalendarCheck, title: "Suivi", text: "3 à 4 passages par an, avec un rapport à chaque visite." },
];

const PROMISES: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: KeyRound, title: "Un accès organisé", text: "clés, badges ou présence du gardien : on s'organise avec vous." },
  { icon: FileText, title: "Des rapports clairs", text: "faciles à transmettre aux copropriétaires et au conseil syndical." },
  { icon: CarFront, title: "La discrétion", text: "un véhicule non logoté sur demande, pour ne pas inquiéter les résidents." },
  { icon: ShieldCheck, title: "Certibiocide", text: "le certificat obligatoire pour utiliser des rodenticides professionnels." },
];

const FAQ = [
  {
    question: "Qui paie la dératisation des parties communes d'une copropriété ?",
    answer: "La copropriété. Le syndic fait intervenir le dératiseur, et le coût entre dans les charges communes, réparties entre les copropriétaires selon le règlement de copropriété.",
  },
  {
    question: "Le syndic peut-il faire dératiser sans attendre l'assemblée générale ?",
    answer: "Un contrat à l'année se vote en assemblée générale ou s'inscrit au budget. Mais en cas d'urgence pour la sauvegarde de l'immeuble, la loi du 10 juillet 1965 (article 18) permet au syndic de faire intervenir de sa propre initiative, puis d'en informer les copropriétaires.",
  },
  {
    question: "Un locataire a des souris : est-ce au bailleur ou au syndic d'agir ?",
    answer: "Dans le logement, c'est au bailleur : il doit louer un logement décent, exempt de nuisibles. Si les souris viennent des caves ou des gaines, le bailleur prévient le syndic, qui fait traiter les parties communes.",
  },
  {
    question: "Combien de passages par an pour un immeuble ?",
    answer: "En général 3 à 4, pour casser le cycle de reproduction des rats et des souris. Si des rongeurs sont déjà installés, on peut prévoir des passages plus rapprochés au début.",
  },
  {
    question: "Combien coûte un contrat de dératisation pour une copropriété ?",
    answer: "C'est sur devis, après une visite. Le prix dépend du nombre de bâtiments, de caves et de postes, et du nombre de passages. Le devis est détaillé pour être présenté en assemblée générale.",
  },
  {
    question: "Les appâts sont-ils dangereux pour les enfants et les animaux des résidents ?",
    answer: "Ils sont enfermés dans des postes sécurisés, fermés et fixés, placés dans les caves, les locaux techniques et les abords. Il suffit de demander aux résidents de ne pas les déplacer.",
  },
  {
    question: "Faut-il prévenir les résidents ?",
    answer: "C'est conseillé : une simple note dans le hall suffit, pour qu'ils sachent à quoi servent les postes et qu'ils signalent ce qu'ils voient.",
  },
  {
    question: "Intervenez-vous dans toute la Haute-Marne ?",
    answer: "Oui : Chaumont, Saint-Dizier, Langres, Joinville et toutes les communes du département. Je travaille déjà avec des syndics, dont Square Habitat. Appelez le 07 65 25 67 92.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    LOCAL_BUSINESS,
    {
      "@type": "Service",
      name: "Dératisation pour copropriétés et syndics en Haute-Marne",
      serviceType: "Dératisation",
      url: PAGE_URL,
      description: DESCRIPTION,
      provider: { "@id": "https://gf-nuisibles.fr/#organization" },
      areaServed: { "@type": "AdministrativeArea", name: "Haute-Marne" },
      audience: ["Syndics de copropriété", "Copropriétés", "Bailleurs", "Conseils syndicaux"].map((audienceType) => ({ "@type": "BusinessAudience", audienceType })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", position: 2, name: "Dératisation", item: "https://gf-nuisibles.fr/deratisation" },
        { "@type": "ListItem", position: 3, name: "Professionnels", item: "https://gf-nuisibles.fr/deratisation-professionnels" },
        { "@type": "ListItem", position: 4, name: "Copropriétés et syndics", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
    },
  ],
};

const DeratisationCoproprietes = () => (
  <>
    <SEO title={TITLE} description={DESCRIPTION} path={SLUG} />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <Navbar />

    <ProHero
      breadcrumbs={breadcrumbsFrom(jsonLd)}
      badge="Syndics, bailleurs, copropriétés"
      title="Dératisation pour copropriétés et syndics"
      accent="en Haute-Marne"
      text="Caves, locaux poubelles, vide-ordures, parties communes : un dératiseur local protège votre immeuble des rats et des souris toute l'année, avec un rapport après chaque passage à transmettre aux copropriétaires."
      checks={["Devis présentable en AG", "Rapport à chaque passage", "Passages 7j/7"]}
      aside={
        <HeroPhotoCard
          image={buildingImage}
          alt="Façade d'immeuble ancien aux volets blancs et balcons fleuris"
          cardTitle="Pour votre immeuble"
          items={["Postes sécurisés et numérotés", "Plan des postes par bâtiment", "Rapport pour le conseil syndical", "Registre des interventions"]}
        />
      }
    />

    <main>
      <FactsBand facts={FACTS} />

      <Section
        title="Pourquoi dératiser une copropriété"
        intro="Dans un immeuble, un rat n'est jamais le problème d'un seul résident. Il circule des caves aux étages, et tout le monde finit par se tourner vers le syndic."
      >
        <RiskCards items={RISKS} />
      </Section>

      <Section muted title="Dératisation en copropriété : les obligations du syndic et du bailleur">
        <RulesCompare
          asks={{
            title: "Ce que disent les textes",
            items: [
              "Le syndic administre l'immeuble et veille à l'entretien des parties communes, caves et locaux poubelles compris.",
              "Le règlement sanitaire départemental impose aux propriétaires de prendre des mesures contre les rongeurs.",
              "Un bailleur doit louer un logement décent, exempt de toute infestation de nuisibles (loi du 6 juillet 1989, complétée par la loi ELAN de 2018).",
              "En cas d'urgence, le syndic peut faire intervenir de sa propre initiative, puis en informe les copropriétaires (article 18 de la loi du 10 juillet 1965).",
            ],
          }}
          brings={{
            title: "Ce que le contrat apporte à la copropriété",
            items: [
              "Un dératiseur certifié pour toutes les parties communes.",
              "Un montant connu à l'avance, à inscrire au budget prévisionnel.",
              "Un suivi régulier plutôt que des interventions dans l'urgence.",
              "Des rapports pour répondre aux résidents et au conseil syndical.",
            ],
          }}
        />
      </Section>

      <Section title="Les parties communes que je prends en charge" intro="Le contrat de dératisation couvre les endroits de l'immeuble où les rats et les souris entrent, se cachent et se nourrissent.">
        <PlaceGrid items={PLACES} columns="lg:grid-cols-4" />
      </Section>

      <Section muted title="Un plan de lutte contre les rongeurs en trois volets" intro="Le contrat couvre tout ce qu'on attend d'un plan de lutte contre les rats et les souris dans un immeuble.">
        <ProgramCards parts={PROGRAM} />
      </Section>

      <Section title="Parties communes, logement, locataire : qui paie quoi ?" intro="La question revient à chaque fois. La réponse dépend de l'endroit où les rongeurs ont été vus.">
        <ol className="grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHO.map((item) => (
            <li key={item.title} className="rounded-2xl border-t-4 border-accent bg-card p-6 shadow-sm">
              <h3 className="mb-2 font-heading text-lg font-bold text-primary">{item.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">
          En cas de doute sur la prise en charge, l'ADIL de la Haute-Marne renseigne gratuitement propriétaires et locataires.
        </p>
      </Section>

      <Section muted title="Comment démarre le contrat avec votre copropriété ?" intro="De l'appel du syndic au premier passage de suivi, tout est cadré et écrit.">
        <StepRow steps={STEPS} />
      </Section>

      <Section title="Un dératiseur local, au service des syndics">
        <PromiseCards items={PROMISES} />
        <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">
          Je travaille déjà avec des syndics de Haute-Marne, dont Square Habitat, ainsi qu'avec des communes et des restaurants. Des punaises de lit ou des cafards dans un logement de la résidence ? Voyez aussi les pages{" "}
          <Link to="/punaises-de-lit" className={textLink}>punaises de lit</Link> et{" "}
          <Link to="/cafards-blattes" className={textLink}>cafards et blattes</Link>.
        </p>
        <ClientReviews keys={["soucelier", "yerli", "muller"]} />
      </Section>

      <Section muted title="Vos questions sur la dératisation en copropriété">
        <FaqList items={FAQ} />
      </Section>

      <FinalCta
        title="Faites le point sur votre immeuble"
        text="Je viens visiter les parties communes avec le gardien ou un membre du conseil syndical, et je vous remets un devis détaillé, prêt pour l'assemblée générale."
        checks={["Devis gratuit", "Rapports pour le conseil syndical", "Toute la Haute-Marne"]}
      />

      <Section muted title="Les autres professionnels">
        <CityPills
          links={[
            { label: "Toutes les offres professionnelles", to: "/deratisation-professionnels" },
            { label: "Restaurants et boulangeries", to: "/deratisation-restaurants" },
            { label: "Communes et collectivités", to: "/deratisation-collectivites" },
            { label: "Dératisation Chaumont", to: "/deratisation-chaumont" },
            { label: "Dératisation Saint-Dizier", to: "/deratisation-saint-dizier" },
          ]}
        />
      </Section>
    </main>

    <Reassurance />
    <Footer />
  </>
);

export default DeratisationCoproprietes;
