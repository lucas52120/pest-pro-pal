import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Cable,
  CalendarCheck,
  CarFront,
  ClipboardCheck,
  ClipboardList,
  Coffee,
  FileSignature,
  FileText,
  Layers,
  LucideIcon,
  PackageX,
  Phone,
  Plug,
  Search,
  ShieldCheck,
  Store,
  Trash2,
  Truck,
  Users,
  Warehouse,
  Wrench,
} from "lucide-react";
import warehouseImage from "@/assets/pro-entrepot.jpg";
import shopImage from "@/assets/pro-magasin.jpg";
import storeShelvesImage from "@/assets/pro-entrepot-2.jpg";
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

const SLUG = "/deratisation-entreprises";
const PAGE_URL = `https://gf-nuisibles.fr${SLUG}`;
const TITLE = "Dératisation entreprise, entrepôt, commerce | Haute-Marne";
const DESCRIPTION =
  "Dératiseur pour entreprises, entrepôts et commerces en Haute-Marne ✓ Stocks protégés ✓ Contrat à l'année ✓ Rapports pour vos audits. Devis gratuit.";

const FACTS = [
  { value: "3 à 4", label: "passages par an sur votre site" },
  { value: "7j/7", label: "de 7h à 23h, en dehors de vos horaires d'activité" },
  { value: "1 rapport", label: "après chaque passage, prêt pour vos audits" },
];

const RISKS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: PackageX,
    title: "Des stocks perdus",
    text: "Emballages rongés, marchandises souillées par l'urine ou les déjections : ce qui a été touché ne se vend plus.",
  },
  {
    icon: Plug,
    title: "Des installations abîmées",
    text: "Câbles, gaines et isolants rongés : pannes de machines, de chambres froides ou d'éclairage, et un risque de court-circuit.",
  },
  {
    icon: Users,
    title: "Vos équipes",
    text: "Personne n'aime travailler là où passent des rats. Et leurs déjections présentent un vrai risque pour la santé.",
  },
  {
    icon: ClipboardCheck,
    title: "Vos clients et vos audits",
    text: "Une souris vue en rayon, un client qui refuse une livraison, un audit qualité qui bloque : l'image de l'entreprise en pâtit.",
  },
];

const PLACES: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Truck, title: "Quais de livraison", text: "portes sectionnelles, bas de portes usés, zones de réception." },
  { icon: Warehouse, title: "Stockage et palettiers", text: "palettes au sol, cartons, allées peu fréquentées." },
  { icon: Store, title: "Réserves de magasin", text: "étagères basses, chambres froides, arrière-boutique." },
  { icon: Cable, title: "Locaux techniques", text: "armoires électriques, chaufferie, gaines et passages de câbles." },
  { icon: Coffee, title: "Salles de pause et cuisines", text: "distributeurs, réfrigérateurs, poubelles du personnel." },
  { icon: Trash2, title: "Bennes et compacteurs", text: "zones de déchets à l'extérieur, d'où partent souvent les rats." },
  { icon: Layers, title: "Faux plafonds et cloisons", text: "les passages cachés des souris d'une pièce à l'autre." },
  { icon: Wrench, title: "Ateliers et garages", text: "stocks de pièces, locaux chauffés, recoins encombrés." },
];

const PROGRAM = [
  {
    title: "Prévenir",
    intro: "Fermer les accès du site.",
    points: ["État des lieux de vos bâtiments et de leurs abords", "Repérage des entrées : quais, portes, gaines, réseaux", "Conseils de stockage : palettes décollées des murs, zones dégagées"],
  },
  {
    title: "Surveiller",
    intro: "Voir la moindre activité, zone par zone.",
    points: ["Des postes verrouillés, ancrés au sol ou au mur, chacun avec son numéro", "Placés loin des marchandises et des denrées", "Un contrôle complet du site 3 à 4 fois par an, et vous m'appelez si besoin entre-temps"],
  },
  {
    title: "Rendre compte",
    intro: "Des documents pour vos audits et vos clients.",
    points: ["Le plan du site, poste par poste", "Un compte rendu écrit à chaque visite", "L'historique daté des interventions, prêt pour l'auditeur"],
  },
];

const TRADES = [
  {
    title: "Commerces et supérettes",
    image: shopImage,
    imageAlt: "Rayon de fruits et légumes frais dans un magasin d'alimentation",
    zones: "Réserve, rayons du bas, chambres froides, local poubelles, arrière-boutique.",
    when: "Avant l'ouverture ou après la fermeture du magasin.",
  },
  {
    title: "Grandes surfaces et entrepôts",
    image: storeShelvesImage,
    imageAlt: "Allée d'un magasin entrepôt avec des rayonnages chargés jusqu'au plafond",
    zones: "Quais, palettiers, zones de réception, périmètre extérieur et bennes.",
    when: "Selon vos horaires d'équipes, y compris tôt le matin ou le week-end.",
  },
];

const OTHER_TRADES = [
  { icon: Briefcase, title: "Bureaux et sociétés de services", text: "salles de pause, faux plafonds, archives et locaux techniques." },
  { icon: Wrench, title: "Ateliers, garages et artisans", text: "stocks de pièces, déchets, locaux chauffés et dépendances." },
];

const STEPS: ServiceStep[] = [
  { step: 1, icon: Phone, title: "Votre appel", text: "Vous me présentez votre activité, vos bâtiments et ce que vous avez remarqué." },
  { step: 2, icon: Search, title: "Visite du site", text: "Je fais le tour des bâtiments et des abords, à l'heure qui vous convient." },
  { step: 3, icon: FileSignature, title: "Devis", text: "Un devis détaillé : postes, passages, documents remis." },
  { step: 4, icon: ClipboardList, title: "Mise en place", text: "Pose des postes, plan par bâtiment et classeur remis." },
  { step: 5, icon: CalendarCheck, title: "Suivi", text: "3 à 4 passages par an, avec un rapport à chaque visite." },
];

const PROMISES: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: CalendarCheck, title: "Sans arrêter votre activité", text: "des passages en dehors de vos horaires, 7 jours sur 7." },
  { icon: FileText, title: "Des rapports clairs", text: "plan, registre et rapports, à présenter à un auditeur ou à un client." },
  { icon: CarFront, title: "La discrétion", text: "un véhicule non logoté sur demande, devant vos clients." },
  { icon: ShieldCheck, title: "Certibiocide", text: "un dératiseur certifié, seul habilité à poser des rodenticides professionnels sur votre site." },
];

const FAQ = [
  {
    question: "Une entreprise est-elle obligée de dératiser ?",
    answer: "Aucun texte n'impose un contrat à toutes les entreprises. Mais l'employeur doit garder des locaux de travail entretenus et propres, et une entreprise qui stocke ou vend des denrées alimentaires doit disposer d'un plan de lutte contre les nuisibles, contrôlé par la DDPP.",
  },
  {
    question: "Combien de passages par an pour un entrepôt ou un commerce ?",
    answer: "En général 3 à 4, pour casser le cycle de reproduction des rats et des souris. Un site déjà touché peut demander des passages plus rapprochés au début.",
  },
  {
    question: "Combien coûte la dératisation d'une entreprise ?",
    answer: "C'est sur devis, après une visite. Le prix dépend de la surface, du nombre de bâtiments et de postes, et du nombre de passages.",
  },
  {
    question: "Faut-il arrêter l'activité pendant les passages ?",
    answer: "Non. Je passe en dehors de vos horaires, ou dans les zones où vos équipes ne travaillent pas à ce moment-là.",
  },
  {
    question: "Les appâts sont-ils posés près des marchandises ?",
    answer: "Non. Les postes sont fermés, fixés et placés à l'écart des marchandises, en priorité le long des murs, aux entrées et à l'extérieur. Leur emplacement est noté sur le plan des postes.",
  },
  {
    question: "Vos rapports conviennent-ils pour un audit qualité ?",
    answer: "Le plan des postes, le registre et les rapports de passage sont les documents qu'on demande le plus souvent. Dites-moi quel référentiel vous suivez lors de la visite, pour que le suivi y corresponde.",
  },
  {
    question: "Que faire si un employé voit un rat entre deux passages ?",
    answer: "Prévenez-moi le jour même : je vous dis quand je peux venir. Je contrôle les postes de la zone, j'en ajoute si besoin, et l'intervention est notée au registre.",
  },
  {
    question: "Intervenez-vous dans les zones d'activités de Haute-Marne ?",
    answer: "Oui : à Chaumont, Saint-Dizier, Langres, Joinville et dans toutes les zones d'activités du département. Appelez le 07 65 25 67 92.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    LOCAL_BUSINESS,
    {
      "@type": "Service",
      name: "Dératisation pour entreprises, entrepôts et commerces en Haute-Marne",
      serviceType: "Dératisation",
      url: PAGE_URL,
      description: DESCRIPTION,
      provider: { "@id": "https://gf-nuisibles.fr/#organization" },
      areaServed: { "@type": "AdministrativeArea", name: "Haute-Marne" },
      audience: ["Entreprises", "Entrepôts et logistique", "Commerces", "Grandes surfaces", "Bureaux"].map((audienceType) => ({ "@type": "BusinessAudience", audienceType })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", position: 2, name: "Dératisation", item: "https://gf-nuisibles.fr/deratisation" },
        { "@type": "ListItem", position: 3, name: "Professionnels", item: "https://gf-nuisibles.fr/deratisation-professionnels" },
        { "@type": "ListItem", position: 4, name: "Entreprises, entrepôts et commerces", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
    },
  ],
};

const DeratisationEntreprises = () => (
  <>
    <SEO title={TITLE} description={DESCRIPTION} path={SLUG} />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <Navbar />

    <ProHero
      breadcrumbs={breadcrumbsFrom(jsonLd)}
      badge="Commerces, entrepôts, entreprises"
      title="Dératisation pour entreprises, entrepôts et commerces"
      accent="en Haute-Marne"
      text="Magasins, entrepôts, ateliers, bureaux : un dératiseur local protège vos stocks, vos installations et vos équipes des rats et des souris toute l'année, sans arrêter votre activité."
      checks={["Sur devis, après visite", "Passages hors de vos horaires", "Rapport à chaque passage"]}
      aside={
        <HeroPhotoCard
          image={warehouseImage}
          alt="Entrepôt avec rayonnages et palettes de marchandises"
          cardTitle="Pour votre entreprise"
          items={["Postes sécurisés et numérotés", "Plan des postes par bâtiment", "Rapport après chaque passage", "Registre pour vos audits"]}
        />
      }
    />

    <main>
      <FactsBand facts={FACTS} />

      <Section
        title="Ce qu'un rat ou une souris coûte à une entreprise"
        intro="Dans un entrepôt ou un magasin, les rongeurs trouvent à manger, de la chaleur et des cachettes. Les dégâts vont bien au-delà de quelques cartons."
      >
        <RiskCards items={RISKS} />
      </Section>

      <Section muted title="Dératisation en entreprise : ce que disent les textes">
        <RulesCompare
          asks={{
            title: "Ce que la réglementation demande",
            items: [
              "Le Code du travail impose des locaux de travail régulièrement entretenus et nettoyés (article R. 4224-18).",
              "Stocker ou vendre des denrées alimentaires impose un plan de lutte contre les nuisibles, contrôlé par la DDPP (règlement CE n° 852/2004).",
              "Les référentiels qualité de la logistique alimentaire, comme IFS ou BRCGS, demandent une surveillance des nuisibles propre au site.",
              "Seul un titulaire du Certibiocide peut acheter et utiliser des rodenticides professionnels.",
            ],
          }}
          brings={{
            title: "Ce que le contrat apporte à l'entreprise",
            items: [
              "Un dératiseur certifié pour tout le site, bâtiments et abords.",
              "Un suivi régulier, sans arrêter votre activité.",
              "Un plan, un registre et des rapports pour vos audits et vos clients.",
              "Un budget annuel connu à l'avance.",
            ],
          }}
        />
      </Section>

      <Section title="Les zones de votre site que je prends en charge" intro="Le contrat de dératisation couvre les endroits où les rats et les souris entrent, se cachent et se nourrissent.">
        <PlaceGrid items={PLACES} columns="lg:grid-cols-4" />
      </Section>

      <Section muted title="Un plan de lutte contre les rongeurs en trois volets" intro="Le contrat de dératisation s'organise autour de trois objectifs, pour un site protégé et des preuves à jour.">
        <ProgramCards parts={PROGRAM} />
      </Section>

      <Section title="Une dératisation adaptée à votre activité" intro="Un magasin, un entrepôt et un bureau ne se protègent pas de la même façon. Le plan des postes s'adapte à vos locaux et à vos horaires.">
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
          {OTHER_TRADES.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <Icon className="h-7 w-7 shrink-0 text-accent" aria-hidden="true" />
              <span>
                <strong className="mb-1 block font-heading text-lg text-primary">{title}</strong>
                <span className="leading-relaxed text-muted-foreground">
                  <strong className="text-primary">Zones surveillées : </strong>
                  {text}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section muted title="Comment démarre le contrat avec votre entreprise ?" intro="Cinq étapes, du premier contact jusqu'au suivi de votre site.">
        <StepRow steps={STEPS} />
      </Section>

      <Section title="Un dératiseur local, au service des entreprises">
        <PromiseCards items={PROMISES} />
        <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">
          Je travaille déjà avec des restaurants, des syndics et des communes de Haute-Marne. Vous vendez de l'alimentaire ? Voyez aussi la page{" "}
          <Link to="/deratisation-restaurants" className={textLink}>dératisation des restaurants et boulangeries</Link>, et pour les insectes, la page{" "}
          <Link to="/cafards-blattes" className={textLink}>cafards et blattes</Link>.
        </p>
        <ClientReviews keys={["bromann", "fontanive", "yerli"]} />
      </Section>

      <Section muted title="Vos questions sur la dératisation des entreprises">
        <FaqList items={FAQ} />
      </Section>

      <FinalCta
        title="Faites le point sur votre site"
        text="Je viens visiter vos bâtiments et leurs abords à l'heure qui vous arrange, et je vous remets un devis détaillé : postes, passages, documents."
        checks={["Devis gratuit", "Sans arrêter votre activité", "Toute la Haute-Marne"]}
      />

      <Section muted title="Les autres professionnels">
        <CityPills
          links={[
            { label: "Toutes les offres professionnelles", to: "/deratisation-professionnels" },
            { label: "Restaurants et boulangeries", to: "/deratisation-restaurants" },
            { label: "Communes et collectivités", to: "/deratisation-collectivites" },
            { label: "Copropriétés et syndics", to: "/deratisation-coproprietes" },
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

export default DeratisationEntreprises;
