import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Bird,
  CalendarCheck,
  ClipboardList,
  Clock,
  Crosshair,
  FileText,
  FileSignature,
  Flame,
  Grape,
  Home,
  LucideIcon,
  Milk,
  Moon,
  PackageX,
  Phone,
  PiggyBank,
  Search,
  ShieldCheck,
  Stethoscope,
  Tractor,
  Trees,
  Warehouse,
  Wheat,
} from "lucide-react";
import barnImage from "@/assets/pro-etable.jpg";
import siloImage from "@/assets/pro-silo.jpg";
import hangarImage from "@/assets/pro-hangar.jpg";
import Navbar from "@/components/Navbar";
import Reassurance from "@/components/Reassurance";
import Footer from "@/components/Footer";
import ClientReviews from "@/components/ClientReviews";
import SEO from "@/components/SEO";
import ProHero from "@/components/ProHero";
import { FactsBand, FinalCta, HeroPhotoCard, ProgramCards, PromiseCards, RiskCards, RulesCompare } from "@/components/ProBlocks";
import { breadcrumbsFrom } from "@/components/Breadcrumbs";
import { Callout, CheckList, CityPills, FaqList, PlaceGrid, Section, ServiceStep, StepRow, textLink } from "@/components/ServiceBlocks";
import { LOCAL_BUSINESS } from "@/data/business";

const SLUG = "/deratisation-agricole";
const PAGE_URL = `https://gf-nuisibles.fr${SLUG}`;
const TITLE = "Dératisation agricole, viticole Haute-Marne | Fermes, chais";
const DESCRIPTION =
  "Dératiseur pour exploitations agricoles et viticoles en Haute-Marne ✓ Élevages, silos, chais ✓ Tir de nuit ✓ Suivi biosécurité. Devis gratuit.";

const FACTS = [
  { value: "3 à 4", label: "passages par an sur votre exploitation" },
  { value: "De nuit", label: "tir à la carabine avec vision nocturne, quand les rats sortent" },
  { value: "7j/7", label: "de 7h à 23h, au rythme de la traite et des soins" },
];

const RISKS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Wheat,
    title: "Céréales et aliment perdus",
    text: "Les rats préfèrent le grain à tout le reste. Ce qu'ils ne mangent pas, ils le souillent avec leur urine et leurs déjections.",
  },
  {
    icon: Stethoscope,
    title: "La santé du troupeau",
    text: "Les rongeurs transportent des maladies comme la salmonellose ou la leptospirose, d'un bâtiment à l'autre.",
  },
  {
    icon: Flame,
    title: "Bâtiments et matériel",
    text: "Câbles rongés dans les bâtiments et les machines, isolants arrachés : des pannes, et un vrai risque d'incendie.",
  },
  {
    icon: PackageX,
    title: "Contrôles et cahiers des charges",
    text: "En volailles et en porcs, le plan de biosécurité doit prévoir la lutte contre les nuisibles, avec un suivi écrit.",
  },
];

const NIGHT_SHOOTING = [
  { text: "De nuit, quand les rats sortent manger, repérés dans l'obscurité grâce à une lunette de vision nocturne." },
  { text: "À la carabine à air comprimé : un tir précis et discret, qui ne dérange pas les animaux." },
  { text: "Sans aucun poison : pas de risque pour le bétail, les chiens, les chats ou les rapaces." },
  { text: "Un résultat immédiat, pour faire baisser vite une forte population là où les appâts sont difficiles à placer." },
  { text: "En toute sécurité : bâtiment fermé ou zone dégagée, sans personne à proximité, et toujours avec votre accord." },
];

const PLACES: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Milk, title: "Étables et stabulations", text: "auges, couloirs d'alimentation, nurserie à veaux." },
  { icon: Bird, title: "Poulaillers", text: "parois, litière, chaînes d'alimentation et abords." },
  { icon: PiggyBank, title: "Porcheries", text: "caillebotis, préfosses, salles d'aliment." },
  { icon: Warehouse, title: "Silos et cellules à grains", text: "pieds de silos, vis, fosses de réception." },
  { icon: Wheat, title: "Stockage d'aliment", text: "sacs, mélangeuse, aire de stockage des concentrés." },
  { icon: Tractor, title: "Hangars et ateliers", text: "foin, paille, machines et câbles électriques." },
  { icon: Grape, title: "Chais et caves", text: "cuverie, caves de stockage, bouchons, cartons et étiquettes." },
  { icon: Trees, title: "Abords de la ferme", text: "fumière, haies, fossés et tas de bois." },
];

const PROGRAM = [
  {
    title: "Prévenir",
    intro: "Couper l'accès à l'aliment et aux bâtiments.",
    points: ["État des lieux de l'exploitation à la première visite", "Repérage des entrées et des terriers autour des bâtiments", "Conseils pour le stockage du grain et de l'aliment"],
  },
  {
    title: "Éliminer",
    intro: "Combiner les méthodes selon les bâtiments.",
    points: ["Postes sécurisés, fixés, hors de portée des animaux", "Tir de nuit à la carabine là où les appâts ne conviennent pas", "3 à 4 passages par an, et un appel suffit entre deux passages"],
  },
  {
    title: "Prouver",
    intro: "Des documents pour vos contrôles.",
    points: ["Un plan des postes par bâtiment", "Un rapport après chaque passage", "Un registre utilisable dans votre plan de biosécurité"],
  },
];

const TRADES = [
  {
    title: "Élevages laitiers et allaitants",
    image: barnImage,
    imageAlt: "Trois veaux blancs et roux dans une étable, avec leurs boucles d'oreille",
    zones: "Étables, nurserie, couloirs d'alimentation, stocks d'aliment et de paille.",
    when: "Entre deux traites, ou de nuit pour le tir, sans déranger le troupeau.",
  },
  {
    title: "Cultures et stockage de céréales",
    image: siloImage,
    imageAlt: "Deux silos à grains métalliques et un tracteur rouge dans une cour de ferme",
    zones: "Silos, cellules, fosses de réception, hangars et ateliers.",
    when: "Avant la moisson et pendant le stockage, quand le grain attire le plus.",
  },
];

const OTHER_TRADES = [
  { icon: Bird, title: "Volailles et porcs", text: "un plan de lutte suivi et écrit, pour votre plan de biosécurité." },
  { icon: Home, title: "Centres équestres et haras", text: "écuries, selleries, réserves de grain et de foin." },
  { icon: Grape, title: "Domaines viticoles et caves", text: "chais, cuverie, caves de stockage, bouchons, cartons et étiquettes, avec des passages en dehors des vendanges." },
];

const STEPS: ServiceStep[] = [
  { step: 1, icon: Phone, title: "Votre appel", text: "Vous me décrivez l'exploitation, les animaux et ce que vous avez remarqué." },
  { step: 2, icon: Search, title: "Tour de la ferme", text: "Je visite les bâtiments et leurs abords, et je repère les passages des rats." },
  { step: 3, icon: FileSignature, title: "Devis", text: "Postes, tir de nuit si besoin, nombre de passages : tout est écrit." },
  { step: 4, icon: ClipboardList, title: "Mise en place", text: "Pose des postes, premier tir si nécessaire, plan et registre remis." },
  { step: 5, icon: CalendarCheck, title: "Suivi", text: "3 à 4 passages par an, avec un rapport à chaque visite." },
];

const PROMISES: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Clock, title: "Au rythme de la ferme", text: "je m'organise avec vos horaires de traite et de soins." },
  { icon: Crosshair, title: "Sans poison si besoin", text: "le tir de nuit là où les appâts posent problème." },
  { icon: FileText, title: "Un suivi écrit", text: "plan, registre et rapports pour vos contrôles." },
  { icon: ShieldCheck, title: "Certibiocide", text: "le certificat obligatoire pour utiliser des rodenticides professionnels." },
];

const FAQ = [
  {
    question: "Comment se passe le tir de nuit des rats ?",
    answer: "Je viens à la tombée de la nuit, quand les rats sortent pour manger. Je les repère avec une lunette de vision nocturne et je les tire à la carabine à air comprimé, dans un bâtiment fermé ou une zone dégagée, sans personne à proximité.",
  },
  {
    question: "Le tir de nuit est-il dangereux pour mes animaux ?",
    answer: "Non. Le tir est précis et se fait à courte distance, dans des zones choisies avec vous. Et comme il n'y a aucun poison, il n'y a aucun risque d'intoxication pour le bétail, les chiens, les chats ou les rapaces.",
  },
  {
    question: "Le tir de nuit suffit-il à se débarrasser des rats ?",
    answer: "Il fait baisser vite une forte population, mais il ne remplace pas les postes. Les postes sécurisés empêchent les rats de revenir : les deux méthodes se combinent dans le même contrat.",
  },
  {
    question: "Les appâts sont-ils dangereux pour le bétail ?",
    answer: "Ils sont enfermés dans des postes sécurisés et fixés, hors de portée des animaux, et leur emplacement est noté sur un plan. Là où ce n'est pas possible, le tir de nuit prend le relais.",
  },
  {
    question: "Combien de passages par an pour une exploitation agricole ?",
    answer: "En général 3 à 4, pour casser le cycle de reproduction des rats et des souris. Au début, ou avant la moisson, on peut rapprocher les passages.",
  },
  {
    question: "Combien coûte la dératisation d'une ferme ?",
    answer: "C'est sur devis, après le tour de l'exploitation. Le prix dépend du nombre de bâtiments, de postes et de passages, et du tir de nuit si vous le choisissez.",
  },
  {
    question: "Vos documents conviennent-ils pour mon plan de biosécurité ?",
    answer: "Le plan des postes, le registre et les rapports de passage montrent que la lutte contre les nuisibles est suivie. Ils se rangent avec votre plan de biosécurité.",
  },
  {
    question: "Faut-il dératiser un chai ou une cave ?",
    answer: "Oui. Le vin est une denrée alimentaire : les règles d'hygiène s'appliquent aussi au chai et aux caves de stockage. Et les souris s'attaquent aux cartons, aux étiquettes et aux stocks de bouchons. Je passe en dehors des vendanges et des mises en bouteille.",
  },
  {
    question: "Intervenez-vous dans toute la Haute-Marne ?",
    answer: "Oui, dans toutes les exploitations du département : Bassigny, Pays de Langres, Der, vallée de la Marne, et jusqu'au vignoble de la Côte des Bar, autour de Bar-sur-Aube. Appelez le 07 65 25 67 92.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    LOCAL_BUSINESS,
    {
      "@type": "Service",
      name: "Dératisation agricole et viticole pour fermes, élevages et domaines en Haute-Marne",
      serviceType: "Dératisation",
      url: PAGE_URL,
      description: DESCRIPTION,
      provider: { "@id": "https://gf-nuisibles.fr/#organization" },
      areaServed: { "@type": "AdministrativeArea", name: "Haute-Marne" },
      audience: ["Exploitations agricoles", "Éleveurs", "Céréaliers", "Domaines viticoles", "Centres équestres"].map((audienceType) => ({ "@type": "BusinessAudience", audienceType })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", position: 2, name: "Dératisation", item: "https://gf-nuisibles.fr/deratisation" },
        { "@type": "ListItem", position: 3, name: "Professionnels", item: "https://gf-nuisibles.fr/deratisation-professionnels" },
        { "@type": "ListItem", position: 4, name: "Exploitations agricoles et viticoles", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
    },
  ],
};

const DeratisationAgricole = () => (
  <>
    <SEO title={TITLE} description={DESCRIPTION} path={SLUG} />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <Navbar />

    <ProHero
      breadcrumbs={breadcrumbsFrom(jsonLd)}
      badge="Exploitations agricoles et viticoles"
      title="Dératisation agricole et viticole pour fermes, élevages et domaines"
      accent="en Haute-Marne"
      text="Bâtiments d'élevage, silos, granges, chais et caves : un dératiseur local protège votre exploitation agricole ou viticole des rats et des souris toute l'année, avec des postes sécurisés et, si besoin, le tir de nuit à la carabine."
      checks={["Sur devis, après visite", "Tir de nuit possible", "Suivi pour la biosécurité"]}
      aside={
        <HeroPhotoCard
          image={hangarImage}
          alt="Bottes de foin rondes stockées sous un hangar agricole"
          cardTitle="Pour votre exploitation"
          items={["Postes hors de portée des animaux", "Tir de nuit en vision nocturne", "Plan des postes par bâtiment", "Registre pour vos contrôles"]}
        />
      }
    />

    <main>
      <FactsBand facts={FACTS} />

      <Section
        title="Ce que les rats coûtent à une exploitation agricole"
        intro="Du grain, de l'eau, de la chaleur et des cachettes partout : une ferme offre aux rats et aux souris tout ce qu'il leur faut. Une colonie installée coûte cher, chaque jour."
      >
        <RiskCards items={RISKS} />
      </Section>

      <Section muted title="Le tir de nuit à la carabine : une dératisation sans poison" intro="Dans une étable, un poulailler ou près du stock d'aliment, les appâts ne sont pas toujours la meilleure solution. Le tir de nuit les complète : les rats sont éliminés directement, sans produit.">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <CheckList items={NIGHT_SHOOTING} />
          <Callout icon={Moon} title="Les postes restent la base">
            Le tir fait vite baisser la population ; les postes sécurisés empêchent qu'elle revienne. Les deux se combinent dans le même contrat de dératisation, selon vos bâtiments.
          </Callout>
        </div>
      </Section>

      <Section title="Dératisation agricole : ce que disent les textes">
        <RulesCompare
          asks={{
            title: "Ce que la réglementation demande",
            items: [
              "Les élevages de volailles doivent tenir un plan de biosécurité qui inclut la lutte contre les nuisibles, avec un suivi des opérations.",
              "Les élevages de porcs aussi : leur plan de biosécurité comprend un plan de lutte contre les nuisibles (arrêté du 16 octobre 2018).",
              "Le règlement sanitaire départemental impose aux propriétaires de prendre des mesures contre les rongeurs.",
              "Seul un titulaire du Certibiocide peut acheter et utiliser les rodenticides professionnels.",
            ],
          }}
          brings={{
            title: "Ce que le contrat apporte à l'exploitation",
            items: [
              "Un plan de lutte écrit et un registre pour vos contrôles.",
              "Des méthodes adaptées à la présence des animaux, avec ou sans appâts.",
              "Un suivi régulier, au lieu d'agir quand le grain est déjà mangé.",
              "Un budget annuel connu à l'avance.",
            ],
          }}
        />
      </Section>

      <Section muted title="Les bâtiments agricoles et viticoles que je prends en charge" intro="Le contrat de dératisation couvre les endroits de la ferme où les rats et les souris mangent, se cachent et se reproduisent.">
        <PlaceGrid items={PLACES} columns="lg:grid-cols-4" />
      </Section>

      <Section title="Un plan de lutte contre les rongeurs en trois volets" intro="Prévenir, éliminer, prouver : la dératisation d'une exploitation agricole se pense dans la durée.">
        <ProgramCards parts={PROGRAM} />
      </Section>

      <Section muted title="Une dératisation adaptée à votre production" intro="Une étable, un silo et un chai ne se protègent pas de la même façon. Les méthodes et les passages s'adaptent à votre exploitation.">
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
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OTHER_TRADES.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <Icon className="h-7 w-7 shrink-0 text-accent" aria-hidden="true" />
              <span>
                <strong className="mb-1 block font-heading text-lg text-primary">{title}</strong>
                <span className="leading-relaxed text-muted-foreground">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Comment démarre le contrat avec votre exploitation ?" intro="Du premier appel au suivi de la ferme, en cinq étapes.">
        <StepRow steps={STEPS} />
      </Section>

      <Section muted title="Un dératiseur local, au service des agriculteurs">
        <PromiseCards items={PROMISES} />
        <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">
          Installé près de Chaumont, je connais les exploitations de Haute-Marne. Des pigeons dans les bâtiments ? Voyez aussi la page{" "}
          <Link to="/depigeonnage" className={textLink}>dépigeonnage</Link>.
        </p>
        <ClientReviews keys={["rigny", "coustillet", "muller"]} />
      </Section>

      <Section title="Vos questions sur la dératisation agricole">
        <FaqList items={FAQ} />
      </Section>

      <FinalCta
        title="Faites le point sur votre exploitation"
        text="Je viens faire le tour de la ferme à l'heure qui vous arrange, et je vous propose la bonne combinaison : postes, tir de nuit, rythme des passages."
        checks={["Devis gratuit", "Tir de nuit possible", "Toute la Haute-Marne"]}
      />

      <Section muted title="Les autres professionnels">
        <CityPills
          links={[
            { label: "Toutes les offres professionnelles", to: "/deratisation-professionnels" },
            { label: "Entreprises et entrepôts", to: "/deratisation-entreprises" },
            { label: "Communes et collectivités", to: "/deratisation-collectivites" },
            { label: "Restaurants et boulangeries", to: "/deratisation-restaurants" },
            { label: "Dératisation Chaumont", to: "/deratisation-chaumont" },
            { label: "Dératisation Langres", to: "/deratisation-langres" },
          ]}
        />
      </Section>
    </main>

    <Reassurance />
    <Footer />
  </>
);

export default DeratisationAgricole;
