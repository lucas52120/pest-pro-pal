import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  CalendarCheck,
  CarFront,
  ClipboardList,
  Clock,
  Eye,
  FileSignature,
  LucideIcon,
  MessageCircleWarning,
  PackageX,
  Phone,
  Search,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import chefImage from "@/assets/pro-chef.jpg";
import kitchenImage from "@/assets/pro-cuisine.jpg";
import bakeryOvenImage from "@/assets/pro-fournil.jpg";
import Navbar from "@/components/Navbar";
import Reassurance from "@/components/Reassurance";
import Footer from "@/components/Footer";
import ClientReviews from "@/components/ClientReviews";
import SEO from "@/components/SEO";
import ProHero from "@/components/ProHero";
import { FactsBand, FinalCta, HeroPhotoCard, ProgramCards, PromiseCards, RiskCards, RulesCompare } from "@/components/ProBlocks";
import { breadcrumbsFrom } from "@/components/Breadcrumbs";
import { CityPills, FaqList, Section, ServiceStep, StepRow, textLink } from "@/components/ServiceBlocks";
import { LOCAL_BUSINESS } from "@/data/business";

const SLUG = "/deratisation-restaurants";
const PAGE_URL = `https://gf-nuisibles.fr${SLUG}`;
const TITLE = "Dératisation restaurant, boulangerie Haute-Marne | HACCP";
const DESCRIPTION =
  "Dératisation des restaurants et boulangeries en Haute-Marne ✓ Contrat à l'année ✓ Classeur sanitaire HACCP ✓ Prêt pour la DDPP. Devis gratuit après visite.";

/** The figures in the dark band: only what the contract really contains. */
const FACTS = [
  { value: "3 à 4", label: "passages par an, pour casser le cycle des rats et des souris" },
  { value: "7j/7", label: "de 7h à 23h, avant l'ouverture ou après le service" },
  { value: "100 %", label: "des passages notés au registre, avec un rapport" },
];

const RISKS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: AlertTriangle,
    title: "Un contrôle qui tourne mal",
    text: "Des déjections dans une réserve suffisent pour une mise en demeure. Dans les cas graves, le préfet peut ordonner une fermeture administrative.",
  },
  {
    icon: Eye,
    title: "Une note publique",
    text: "Le résultat des contrôles d'hygiène est publié sur Alim'confiance, consultable par tous vos clients.",
  },
  {
    icon: PackageX,
    title: "Des stocks perdus",
    text: "Sacs de farine percés, denrées souillées, câbles rongés derrière les frigos : tout ce qui a été touché est à jeter ou à réparer.",
  },
  {
    icon: MessageCircleWarning,
    title: "Votre réputation",
    text: "Une souris aperçue en salle, une photo sur les réseaux sociaux : un avis négatif reste en ligne longtemps.",
  },
];

/** The contract as three parts: prevent, watch, prove. */
const PROGRAM = [
  {
    title: "Prévenir",
    intro: "Empêcher les rongeurs d'entrer.",
    points: ["État des lieux complet de vos locaux à la première visite", "Repérage des entrées : bas de portes, gaines, soupiraux", "Conseils de rangement et de stockage pour vos équipes"],
  },
  {
    title: "Surveiller",
    intro: "Voir la moindre activité, avant qu'elle se voie.",
    points: ["Postes sécurisés, fixés et numérotés", "Toujours à l'écart des aliments : extérieur, réserves, caves, local poubelles", "3 à 4 passages par an, et un appel suffit entre deux passages"],
  },
  {
    title: "Prouver",
    intro: "Avoir les bons documents le jour du contrôle.",
    points: ["Plan des postes tenu à jour", "Registre et rapport à chaque passage", "Fiches des produits utilisés, dans le classeur"],
  },
];

/** The tabs of the binder handed over at set-up. */
const BINDER = [
  { title: "Le contrat", text: "nombre de postes, rythme des passages, zones couvertes." },
  { title: "Le plan des postes", text: "le plan de vos locaux, chaque poste numéroté et situé." },
  { title: "Le registre", text: "la liste datée de toutes les interventions." },
  { title: "Les rapports", text: "à chaque passage : activité relevée, appâts consommés, actions conseillées." },
  { title: "Les fiches produits", text: "fiches techniques et de sécurité des appâts utilisés." },
];

const TRADES = [
  {
    title: "Restaurants et brasseries",
    image: kitchenImage,
    imageAlt: "Cuisine professionnelle de restaurant, chef en veste blanche au passe",
    zones: "Réserve sèche, chambre froide, local poubelles, dessous des fours et des plonges, cave.",
    when: "Le matin avant la mise en place, ou après le service du soir.",
  },
  {
    title: "Boulangeries et pâtisseries",
    image: bakeryOvenImage,
    imageAlt: "Boulanger sortant des pains dorés du four",
    zones: "Sacs de farine, fournil, pétrin, recoins chauds près du four, réserve de sucre.",
    when: "Selon les horaires du fournil, ou votre jour de fermeture.",
  },
];

const OTHER_TRADES = [
  { title: "Boucheries et charcuteries", text: "chambres froides, laboratoire, déchets de découpe et local poubelles." },
  { title: "Traiteurs et restauration rapide", text: "livraisons fréquentes, cartons, poubelles du soir et réserves pleines." },
];

const STEPS: ServiceStep[] = [
  { step: 1, icon: Phone, title: "Votre appel", text: "Vous me présentez votre établissement, vos horaires et ce que vous avez remarqué." },
  { step: 2, icon: Search, title: "État des lieux", text: "Je visite vos locaux, dedans et dehors, et je repère les zones à risque." },
  { step: 3, icon: FileSignature, title: "Devis et contrat", text: "Nombre de postes, rythme des passages, documents : tout est écrit." },
  { step: 4, icon: ClipboardList, title: "Mise en place", text: "Pose des postes, plan des postes et classeur sanitaire remis." },
  { step: 5, icon: CalendarCheck, title: "Suivi", text: "3 à 4 passages par an, avec un rapport à chaque visite." },
];

const PROMISES: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: UserRound, title: "Un seul interlocuteur", text: "c'est moi qui fais le devis, la mise en place et chaque passage." },
  { icon: Clock, title: "Vos horaires, pas les miens", text: "7j/7, tôt le matin, le soir ou votre jour de fermeture." },
  { icon: CarFront, title: "La discrétion", text: "un véhicule non logoté sur demande, et des passages en dehors du service." },
  { icon: ShieldCheck, title: "Certibiocide", text: "le certificat obligatoire pour utiliser des rodenticides professionnels." },
];

const FAQ = [
  {
    question: "Un contrat de dératisation est-il obligatoire pour un restaurant ou une boulangerie ?",
    answer: "Aucun texte n'impose de signer un contrat. En revanche, le règlement européen sur l'hygiène demande des procédures de lutte contre les nuisibles, intégrées à votre plan de maîtrise sanitaire (HACCP). Vous devez pouvoir le prouver lors d'un contrôle de la DDPP : un contrat avec registre et rapports est la façon la plus simple de le faire.",
  },
  {
    question: "Combien de passages par an pour un restaurant ?",
    answer: "En général 3 à 4, pour casser le cycle de reproduction des rats et des souris. Si des rongeurs sont déjà présents, on peut prévoir des passages plus rapprochés au début.",
  },
  {
    question: "Combien coûte la dératisation d'un restaurant ou d'une boulangerie ?",
    answer: "C'est sur devis, après une visite de vos locaux. Le prix dépend de la surface, du nombre de postes et du nombre de passages, et le devis détaille tout ce qui est compris.",
  },
  {
    question: "Les appâts sont-ils posés en cuisine ?",
    answer: "Pas au contact des aliments. Les postes sont placés en priorité à l'extérieur, dans les réserves, les caves et le local poubelles. Ils sont fermés, fixés, numérotés et reportés sur le plan des postes.",
  },
  {
    question: "Un client a vu une souris : que faire ?",
    answer: "Appelez-moi sans attendre le prochain passage. Je vous dis tout de suite quand je peux venir, je contrôle les postes et j'en ajoute si besoin, et le passage est noté au registre.",
  },
  {
    question: "J'ai un contrôle bientôt et aucun suivi : que faire ?",
    answer: "Appelez-moi : je viens faire l'état des lieux, je mets en place les postes et le classeur sanitaire, et le suivi commence. Vous aurez un plan de lutte documenté à présenter.",
  },
  {
    question: "Traitez-vous aussi les cafards en cuisine ?",
    answer: "Oui. Les blattes sont fréquentes dans les cuisines professionnelles et se traitent avec des produits adaptés. On peut prévoir les deux dans le même suivi.",
  },
  {
    question: "Intervenez-vous dans toute la Haute-Marne ?",
    answer: "Oui : Chaumont, Langres, Saint-Dizier, Joinville, Nogent, Bourbonne-les-Bains et toutes les communes du département. Appelez le 07 65 25 67 92.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    LOCAL_BUSINESS,
    {
      "@type": "Service",
      name: "Dératisation pour restaurants et boulangeries en Haute-Marne",
      serviceType: "Dératisation",
      url: PAGE_URL,
      description: DESCRIPTION,
      provider: { "@id": "https://gf-nuisibles.fr/#organization" },
      areaServed: { "@type": "AdministrativeArea", name: "Haute-Marne" },
      audience: ["Restaurants", "Boulangeries", "Pâtisseries", "Boucheries", "Traiteurs"].map((audienceType) => ({ "@type": "BusinessAudience", audienceType })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", position: 2, name: "Dératisation", item: "https://gf-nuisibles.fr/deratisation" },
        { "@type": "ListItem", position: 3, name: "Professionnels", item: "https://gf-nuisibles.fr/deratisation-professionnels" },
        { "@type": "ListItem", position: 4, name: "Restaurants et boulangeries", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
    },
  ],
};

const DeratisationRestaurants = () => (
  <>
    <SEO title={TITLE} description={DESCRIPTION} path={SLUG} />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <Navbar />

    <ProHero
      breadcrumbs={breadcrumbsFrom(jsonLd)}
      badge="Restaurants, boulangeries, métiers de bouche"
      title="Dératisation pour restaurants et boulangeries"
      accent="en Haute-Marne"
      text="Un plan de lutte contre les rats et les souris intégré à votre démarche HACCP, suivi toute l'année et documenté pour vos contrôles. Je passe avant l'ouverture ou après le service."
      checks={["Sur devis, après visite", "Classeur sanitaire fourni", "Passages 7j/7"]}
      aside={
        <HeroPhotoCard
          image={chefImage}
          alt="Chef en cuisine professionnelle, poêle à la main, assiette dressée au premier plan"
          cardTitle="Prêt pour le contrôle DDPP"
          items={["Plan de lutte", "Plan des postes à jour", "Registre des passages", "Rapports d'intervention"]}
        />
      }
    />

    <main>
      <FactsBand facts={FACTS} />

      <Section title="Ce qu'un rat ou une souris peut coûter à votre restaurant" intro="Pour un restaurant ou une boulangerie, une souris dans la réserve n'est jamais un détail. Les conséquences vont bien au-delà de quelques sacs abîmés.">
        <RiskCards items={RISKS} />
      </Section>

      <Section muted title="Un plan de lutte contre les rongeurs en trois volets" intro="Un contrat de dératisation ne se limite pas à poser des appâts. Il couvre tout ce que l'on attend d'un plan de lutte contre les rats, les souris et les autres nuisibles.">
        <ProgramCards parts={PROGRAM} />
      </Section>

      <Section title="Votre classeur sanitaire, prêt à présenter">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Lors d'une inspection, la DDPP vérifie votre plan de maîtrise sanitaire. Pour les nuisibles, on vous demandera qui s'en occupe, avec quels dispositifs, et ce qui a été constaté aux derniers passages.
            </p>
            <p>
              Je vous remets le classeur à la mise en place du contrat de dératisation, et il se complète à chaque visite. Rangez-le avec vos documents HACCP : tout y est, dans l'ordre.
            </p>
          </div>
          <ol className="rounded-3xl bg-secondary p-4 shadow-inner sm:p-6">
            {BINDER.map((tab, i) => (
              <li key={tab.title} className="mb-3 flex items-start gap-4 rounded-xl border-l-4 border-accent bg-card p-4 shadow-sm last:mb-0">
                <span className="font-heading text-sm font-bold text-accent">0{i + 1}</span>
                <span>
                  <strong className="block font-heading text-primary">{tab.title}</strong>
                  <span className="text-sm leading-relaxed text-muted-foreground">{tab.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section muted title="Ce que dit la réglementation">
        <RulesCompare
          asks={{
            title: "Ce que la réglementation demande",
            items: [
              "Le règlement européen sur l'hygiène des aliments (CE n° 852/2004) impose des procédures pour lutter contre les nuisibles.",
              "Ces procédures font partie de votre plan de maîtrise sanitaire, contrôlé par la DDPP.",
              "Les rodenticides professionnels ne peuvent être achetés et utilisés que par un titulaire du Certibiocide.",
            ],
          }}
          brings={{
            title: "Ce que le contrat vous apporte",
            items: [
              "Un plan de lutte écrit, avec un prestataire certifié.",
              "Des postes suivis toute l'année et une activité relevée à chaque passage.",
              "Toutes les preuves réunies dans un classeur, prêtes le jour du contrôle.",
            ],
          }}
        />
        <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">
          Aucun texte n'oblige à passer par un professionnel : vous pouvez gérer la lutte vous-même, à condition de la documenter. Le contrat vous évite simplement d'y penser.
        </p>
      </Section>

      <Section title="Une dératisation adaptée à votre métier" intro="Les rats et les souris n'entrent pas au même endroit dans une brasserie et dans un fournil. Pour chaque métier de bouche, le plan des postes s'adapte à vos locaux et à vos horaires.">
        <div className="grid gap-6 lg:grid-cols-2">
          {TRADES.map((trade) => (
            <article key={trade.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <img src={trade.image} alt={trade.imageAlt} loading="lazy" className="h-56 w-full object-cover md:h-64" />
              <div className="p-6">
                <h3 className="mb-4 font-heading text-xl font-bold text-primary">{trade.title}</h3>
                <p className="mb-2 leading-relaxed text-muted-foreground">
                  <strong className="text-primary">Zones surveillées : </strong>
                  {trade.zones}
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  <strong className="text-primary">Mes passages : </strong>
                  {trade.when}
                </p>
              </div>
            </article>
          ))}
        </div>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {OTHER_TRADES.map((trade) => (
            <li key={trade.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-2 font-heading text-lg font-bold text-primary">{trade.title}</h3>
              <p className="leading-relaxed text-muted-foreground">
                <strong className="text-primary">Zones surveillées : </strong>
                {trade.text}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section muted title="Comment démarre votre contrat ?" intro="De votre premier appel au premier passage de suivi, tout est cadré et écrit.">
        <StepRow steps={STEPS} />
      </Section>

      <Section title="Un dératiseur local, pas une plateforme">
        <PromiseCards items={PROMISES} />
        <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">
          Je travaille déjà avec des restaurants, des syndics et des communes de Haute-Marne. Vous traitez aussi des{" "}
          <Link to="/cafards-blattes" className={textLink}>cafards en cuisine</Link> ? On peut prévoir les deux dans le même suivi.
        </p>
        <ClientReviews keys={["soucelier", "fontanive", "bromann"]} />
      </Section>

      <Section muted title="Vos questions sur la dératisation des restaurants et boulangeries">
        <FaqList items={FAQ} />
      </Section>

      <FinalCta
        title="Faites le point sur votre établissement"
        text="Je viens visiter vos locaux à l'heure qui vous arrange, et je vous remets un devis détaillé : postes, passages, documents."
        checks={["Sur devis", "Chaumont, Langres, Saint-Dizier et toute la Haute-Marne", "7j/7 de 7h à 23h"]}
      />

      <Section muted title="Les autres professionnels">
        <CityPills
          links={[
            { label: "Toutes les offres professionnelles", to: "/deratisation-professionnels" },
            { label: "Cafards et blattes", to: "/cafards-blattes" },
            { label: "Dératisation Chaumont", to: "/deratisation-chaumont" },
            { label: "Dératisation Langres", to: "/deratisation-langres" },
            { label: "Dératisation Saint-Dizier", to: "/deratisation-saint-dizier" },
          ]}
        />
      </Section>
    </main>

    <Reassurance />
    <Footer />
  </>
);

export default DeratisationRestaurants;
