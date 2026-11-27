import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  CalendarCheck,
  CarFront,
  ClipboardList,
  Droplets,
  Clock,
  FileSignature,
  Home,
  Landmark,
  LucideIcon,
  MessageCircleWarning,
  Music,
  Phone,
  Plug,
  Receipt,
  School,
  Search,
  ShieldCheck,
  Stethoscope,
  Trash2,
  UtensilsCrossed,
  Wrench,
} from "lucide-react";
import townHallImage from "@/assets/pro-mairie.jpg";
import canteenImage from "@/assets/pro-cantine.jpg";
import Navbar from "@/components/Navbar";
import Reassurance from "@/components/Reassurance";
import Footer from "@/components/Footer";
import ClientReviews from "@/components/ClientReviews";
import SEO from "@/components/SEO";
import ProHero from "@/components/ProHero";
import { FactsBand, FinalCta, HeroPhotoCard, ProgramCards, PromiseCards, RiskCards, RulesCompare } from "@/components/ProBlocks";
import { breadcrumbsFrom } from "@/components/Breadcrumbs";
import { CheckList, CityPills, FaqList, PlaceGrid, Section, ServiceStep, StepRow, textLink } from "@/components/ServiceBlocks";
import { LOCAL_BUSINESS } from "@/data/business";

const SLUG = "/deratisation-collectivites";
const PAGE_URL = `https://gf-nuisibles.fr${SLUG}`;
const TITLE = "Dératisation commune et collectivité Haute-Marne | Mairies";
const DESCRIPTION =
  "Dératiseur pour mairies et collectivités en Haute-Marne ✓ Égouts, écoles, cantines ✓ Contrat à l'année ✓ Chorus Pro. Devis gratuit.";

const FACTS = [
  { value: "3 à 4", label: "passages par an dans vos bâtiments communaux" },
  { value: "7j/7", label: "de 7h à 23h, en dehors de la présence du public" },
  { value: "Chorus Pro", label: "facture déposée directement sur la plateforme" },
];

const RISKS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: UtensilsCrossed,
    title: "Une cantine contrôlée",
    text: "La DDPP inspecte la restauration scolaire et vérifie le plan de lutte contre les nuisibles. Le résultat est publié sur Alim'confiance.",
  },
  {
    icon: Stethoscope,
    title: "La santé publique",
    text: "Les rats peuvent transmettre des maladies comme la leptospirose, et leurs déjections souillent les locaux fréquentés par les enfants.",
  },
  {
    icon: Plug,
    title: "Des bâtiments abîmés",
    text: "Câbles et gaines rongés, isolants arrachés : des réparations coûteuses, et un risque de panne ou de court-circuit.",
  },
  {
    icon: MessageCircleWarning,
    title: "Des habitants inquiets",
    text: "Un rat vu près de l'école ou de la salle des fêtes, et c'est la mairie que l'on appelle en premier.",
  },
];

const PLACES: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Droplets, title: "Réseaux d'égouts et regards", text: "la première source de rats dans une commune, traitée regard par regard." },
  { icon: School, title: "Écoles et crèches", text: "salles de classe, préaux, réserves, sous-sols et cours." },
  { icon: UtensilsCrossed, title: "Cantines et cuisines", text: "réserves, chambres froides, local poubelles, offices de réchauffage." },
  { icon: Music, title: "Salles des fêtes", text: "cuisines, bars, réserves et locaux de rangement, souvent fermés en semaine." },
  { icon: Landmark, title: "Mairie et bâtiments administratifs", text: "archives, combles, caves et locaux techniques." },
  { icon: Wrench, title: "Ateliers et services techniques", text: "garages, stocks, sel de déneigement, abords des bâtiments." },
  { icon: Home, title: "Logements communaux", text: "caves, parties communes et locaux poubelles des logements loués par la commune." },
  { icon: Trash2, title: "Abords des points de collecte", text: "autour des conteneurs et des points d'apport volontaire, où les rats trouvent à manger." },
];

const PROGRAM = [
  {
    title: "Prévenir",
    intro: "Repérer les points faibles de chaque bâtiment.",
    points: ["État des lieux de vos bâtiments à la première visite", "Repérage des entrées : bas de portes, gaines, soupiraux, réseaux", "Conseils simples pour vos agents d'entretien"],
  },
  {
    title: "Surveiller",
    intro: "Voir la moindre activité, bâtiment par bâtiment.",
    points: ["Postes sécurisés, fermés, fixés et numérotés", "Hors de portée des enfants et du public", "3 à 4 passages par an, et un appel suffit entre deux passages"],
  },
  {
    title: "Rendre compte",
    intro: "Des documents clairs pour les élus et les services.",
    points: ["Un plan des postes par bâtiment", "Un rapport après chaque passage", "Un registre à présenter lors d'un contrôle de la cantine"],
  },
];

/** What the mayor can do, depending on where the rats are. */
const WHO = [
  { title: "Sur le domaine public", text: "Voirie, parcs, abords des bâtiments : c'est à la commune d'agir. Je peux traiter ces zones avec des postes sécurisés." },
  { title: "Dans les bâtiments communaux", text: "Écoles, cantines, salles : la commune est propriétaire, elle protège ses bâtiments comme n'importe quel propriétaire." },
  { title: "Chez un particulier", text: "C'est au propriétaire ou à l'occupant d'agir. Le maire, chargé de la salubrité publique, peut lui rappeler ses obligations et, si besoin, le mettre en demeure." },
  { title: "Chez un commerçant", text: "Un restaurant ou une boulangerie doit avoir son propre plan de lutte contre les nuisibles, contrôlé par la DDPP." },
];

const STEPS: ServiceStep[] = [
  { step: 1, icon: Phone, title: "Votre appel", text: "La mairie ou le service technique me présente les bâtiments concernés et ce qui a été constaté." },
  { step: 2, icon: Search, title: "Visite des bâtiments", text: "Je fais le tour des lieux avec un élu ou un agent, à l'heure qui vous convient." },
  { step: 3, icon: FileSignature, title: "Devis", text: "Un devis détaillé par bâtiment, pour engager la dépense." },
  { step: 4, icon: ClipboardList, title: "Mise en place", text: "Pose des postes, plans et classeur remis à la mairie." },
  { step: 5, icon: CalendarCheck, title: "Suivi", text: "3 à 4 passages par an, un rapport à chaque visite, facture sur Chorus Pro." },
];

const PROMISES: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Clock, title: "Hors présence du public", text: "tôt le matin, le soir, le mercredi ou pendant les vacances scolaires." },
  { icon: Receipt, title: "Facturation Chorus Pro", text: "une facture déposée sur la plateforme, comme l'exige la comptabilité publique." },
  { icon: CarFront, title: "La discrétion", text: "un véhicule non logoté sur demande, pour ne pas inquiéter les parents." },
  { icon: ShieldCheck, title: "Certibiocide", text: "le certificat obligatoire pour utiliser des rodenticides professionnels." },
];

const FAQ = [
  {
    question: "Qui doit s'occuper de la dératisation dans une commune ?",
    answer: "La commune agit sur son domaine public et dans ses propres bâtiments : écoles, cantines, salles, ateliers. Sur un terrain privé, c'est au propriétaire ou à l'occupant d'agir. Le maire, chargé de la salubrité publique, veille à ce que chacun respecte ses obligations.",
  },
  {
    question: "Une commune est-elle obligée de dératiser ?",
    answer: "Aucun texte n'impose un nombre de passages. Mais le maire doit veiller à la salubrité publique, et une cantine scolaire doit disposer d'un plan de lutte contre les nuisibles, vérifié par la DDPP. Un contrat de dératisation à l'année est la façon la plus simple de répondre aux deux.",
  },
  {
    question: "Qui doit dératiser les égouts de la commune ?",
    answer: "La collectivité qui gère l'assainissement : la commune, ou la communauté de communes ou le syndicat à qui elle l'a confié. Le tuyau qui relie une maison au réseau public reste, lui, à la charge du propriétaire.",
  },
  {
    question: "Un habitant se plaint de rats chez son voisin : que peut faire la mairie ?",
    answer: "Le traitement revient au propriétaire du terrain. Le maire peut lui rappeler ses obligations, puis le mettre en demeure si rien n'est fait. Si les rats viennent du domaine public, c'est en revanche à la commune d'intervenir.",
  },
  {
    question: "Peut-on poser des raticides dans une école ?",
    answer: "Oui, à condition qu'ils soient enfermés dans des postes sécurisés, fixés et hors de portée des enfants. Les postes sont placés en priorité à l'extérieur et dans les locaux non accessibles aux élèves, et je passe en dehors de leur présence.",
  },
  {
    question: "Combien coûte la dératisation des bâtiments d'une commune ?",
    answer: "C'est sur devis, après une visite. Le prix dépend du nombre de bâtiments, du nombre de postes et du nombre de passages. Le devis est détaillé pour que vous puissiez engager la dépense.",
  },
  {
    question: "Pouvez-vous facturer par Chorus Pro ?",
    answer: "Oui. La facture est déposée sur Chorus Pro, avec les références que vous m'indiquez (bon de commande, service destinataire).",
  },
  {
    question: "Intervenez-vous pendant les vacances scolaires ?",
    answer: "Oui, c'est même le meilleur moment pour un passage complet dans les écoles et les cantines. J'interviens aussi tôt le matin, le soir ou le mercredi, 7 jours sur 7.",
  },
  {
    question: "Intervenez-vous dans toutes les communes de Haute-Marne ?",
    answer: "Oui : des villages aux villes comme Chaumont, Langres, Saint-Dizier, Joinville ou Nogent. Je travaille déjà avec des communes du département. Appelez le 07 65 25 67 92.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    LOCAL_BUSINESS,
    {
      "@type": "Service",
      name: "Dératisation pour communes et collectivités en Haute-Marne",
      serviceType: "Dératisation",
      url: PAGE_URL,
      description: DESCRIPTION,
      provider: { "@id": "https://gf-nuisibles.fr/#organization" },
      areaServed: { "@type": "AdministrativeArea", name: "Haute-Marne" },
      audience: ["Communes", "Mairies", "Collectivités territoriales", "Écoles et cantines", "Établissements publics"].map((audienceType) => ({
        "@type": "BusinessAudience",
        audienceType,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", position: 2, name: "Dératisation", item: "https://gf-nuisibles.fr/deratisation" },
        { "@type": "ListItem", position: 3, name: "Professionnels", item: "https://gf-nuisibles.fr/deratisation-professionnels" },
        { "@type": "ListItem", position: 4, name: "Communes et collectivités", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
    },
  ],
};

const DeratisationCollectivites = () => (
  <>
    <SEO title={TITLE} description={DESCRIPTION} path={SLUG} />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <Navbar />

    <ProHero
      breadcrumbs={breadcrumbsFrom(jsonLd)}
      badge="Communes, mairies, collectivités"
      title="Dératisation pour communes et collectivités"
      accent="en Haute-Marne"
      text="Réseaux d'égouts, écoles, cantines, salles des fêtes : un dératiseur local protège votre commune et ses bâtiments des rats et des souris toute l'année, en dehors de la présence du public, avec des rapports clairs pour les élus."
      checks={["Devis pour engager la dépense", "Facturation Chorus Pro", "Passages 7j/7"]}
      aside={
        <HeroPhotoCard
          image={townHallImage}
          alt="Mairie de village en Haute-Marne, façade fleurie au bout d'une allée"
          cardTitle="Pour votre commune"
          items={["Postes hors de portée des enfants", "Rapport après chaque passage", "Plan des postes par bâtiment", "Facture sur Chorus Pro"]}
        />
      }
    />

    <main>
      <FactsBand facts={FACTS} />

      <Section
        title="Pourquoi la dératisation compte pour une commune"
        intro="Un rat dans une école ou une cantine, ce n'est pas qu'une affaire de propreté. C'est la santé des enfants, l'état des bâtiments et la confiance des habitants."
      >
        <RiskCards items={RISKS} />
      </Section>

      <Section
        muted
        title="Les réseaux d'égouts, première source de rats dans une commune"
        intro="Les rats trouvent dans les égouts de l'eau, de la chaleur et de la nourriture. Quand le réseau est très peuplé ou abîmé, ils remontent par les regards, les canalisations cassées et les branchements des maisons : c'est souvent de là que viennent les plaintes des habitants."
      >
        <CheckList
          items={[
            { text: "Repérage des regards et des rues où les rats sont signalés." },
            { text: "Appâts autorisés pour les égouts, fixés dans les regards, hors de l'eau, et notés sur un plan du réseau." },
            { text: "Contrôle et renouvellement tant que les appâts sont consommés, puis retrait." },
            { text: "Une ou deux campagnes par an, au printemps et à l'automne, en même temps que le suivi des bâtiments." },
          ]}
        />
        <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">
          Si l'assainissement est géré par votre communauté de communes ou un syndicat, le devis peut lui être adressé directement.
        </p>
      </Section>

      <Section title="Dératisation des collectivités : les obligations de la commune et du maire">
        <RulesCompare
          asks={{
            title: "Ce que disent les textes",
            items: [
              "Le maire est chargé de la salubrité publique sur le territoire de la commune (article L. 2212-2 du Code général des collectivités territoriales).",
              "Le règlement sanitaire départemental impose aux propriétaires de prendre des mesures contre les rongeurs, et c'est le maire qui le fait respecter.",
              "Une cantine scolaire doit disposer d'un plan de lutte contre les nuisibles, vérifié par la DDPP lors de ses contrôles.",
              "Seul un titulaire du Certibiocide peut acheter et utiliser des rodenticides professionnels.",
            ],
          }}
          brings={{
            title: "Ce que le contrat apporte à la commune",
            items: [
              "Un dératiseur certifié pour l'ensemble de vos bâtiments.",
              "Un suivi régulier, au lieu d'interventions décidées dans l'urgence.",
              "Un plan, un registre et des rapports, prêts pour un contrôle ou un conseil municipal.",
              "Une dépense prévue à l'avance dans votre budget.",
            ],
          }}
        />
      </Section>

      <Section muted title="Les bâtiments de la collectivité que je prends en charge" intro="Chaque bâtiment a ses points faibles. Le contrat de dératisation peut tous les regrouper, ou ne concerner que ceux qui en ont besoin.">
        <PlaceGrid items={PLACES} columns="lg:grid-cols-4" />
      </Section>

      <Section title="Un plan de lutte contre les rongeurs en trois volets" intro="Le contrat de dératisation couvre tout ce qu'on attend d'un plan de lutte contre les rats et les souris dans des bâtiments publics.">
        <ProgramCards parts={PROGRAM} />
      </Section>

      <Section muted title="Écoles et cantines : une attention particulière">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img src={canteenImage} alt="Agente de restauration scolaire servant des légumes au self d'une cantine" loading="lazy" className="h-64 w-full rounded-3xl object-cover shadow-md md:h-80" />
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              La restauration scolaire est contrôlée par la DDPP, comme un restaurant. Les inspecteurs vérifient que la cuisine dispose d'un plan de lutte contre les nuisibles, appliqué et suivi, et le résultat est publié sur Alim'confiance.
            </p>
            <p>
              Dans une école, les postes sont fermés, fixés et placés hors de portée des élèves, en priorité dehors et dans les locaux qui leur sont fermés. Je passe le matin avant l'arrivée des enfants, le mercredi ou pendant les vacances.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Des rats dans la commune : qui fait quoi ?" intro="Quand un habitant appelle la mairie, la réponse dépend de l'endroit où les rats ont été vus.">
        <ol className="grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHO.map((item) => (
            <li key={item.title} className="rounded-2xl border-t-4 border-accent bg-card p-6 shadow-sm">
              <h3 className="mb-2 font-heading text-lg font-bold text-primary">{item.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section muted title="Comment démarre le contrat avec votre commune ?" intro="De l'appel de la mairie au premier passage de suivi, tout est cadré et écrit.">
        <StepRow steps={STEPS} />
      </Section>

      <Section title="Un dératiseur local, au service des communes">
        <PromiseCards items={PROMISES} />
        <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">
          Je travaille déjà avec des communes de Haute-Marne, dont la commune de Lefond, ainsi qu'avec des syndics et des restaurants. Pour une cantine gérée par un prestataire ou un commerce de votre commune, voyez aussi la page{" "}
          <Link to="/deratisation-restaurants" className={textLink}>dératisation des restaurants et boulangeries</Link>.
        </p>
        <ClientReviews keys={["jc", "mathieu", "coustillet"]} />
      </Section>

      <Section muted title="Vos questions sur la dératisation des communes">
        <FaqList items={FAQ} />
      </Section>

      <FinalCta
        title="Faites le point sur vos bâtiments communaux"
        text="Je viens visiter vos bâtiments avec un élu ou un agent, et je vous remets un devis détaillé pour engager la dépense."
        checks={["Devis gratuit", "Facturation Chorus Pro", "Toutes les communes de Haute-Marne"]}
      />

      <Section muted title="Les autres professionnels">
        <CityPills
          links={[
            { label: "Toutes les offres professionnelles", to: "/deratisation-professionnels" },
            { label: "Restaurants et boulangeries", to: "/deratisation-restaurants" },
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

export default DeratisationCollectivites;
