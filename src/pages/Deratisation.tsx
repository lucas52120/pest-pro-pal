import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Building2,
  CalendarDays,
  DoorOpen,
  Droplets,
  ClipboardCheck,
  FileText,
  Flame,
  Hourglass,
  House,
  Hammer,
  MapPin,
  PawPrint,
  Phone,
  Rat,
  Search,
  ShieldCheck,
  Snowflake,
  SprayCan,
  Sprout,
  Stethoscope,
  Sun,
  Utensils,
  Volume2,
  Warehouse,
  Leaf,
} from "lucide-react";
import heroImage from "@/assets/souris-hero.jpg";
import ratImage from "@/assets/rat-gros-plan.jpg";
import eatingImage from "@/assets/rat-qui-mange.jpg";
import plankImage from "@/assets/rat-planche.jpg";
import beamImage from "@/assets/accueil-rat.jpg";
import Navbar from "@/components/Navbar";
import Reassurance from "@/components/Reassurance";
import Footer from "@/components/Footer";
import ClientReviews from "@/components/ClientReviews";
import SEO from "@/components/SEO";
import { breadcrumbsFrom } from "@/components/Breadcrumbs";
import {
  CallBand,
  Callout,
  CardGrid,
  CheckList,
  CityPills,
  FaqList,
  GuideBlock,
  PlaceGrid,
  Section,
  ServiceHero,
  ServiceStep,
  StepCard,
  photoClass,
  textLink,
} from "@/components/ServiceBlocks";
import { LOCAL_BUSINESS } from "@/data/business";
import { CALL_DELAY, RODENT_PRICE } from "@/data/rodentOffer";

const TITLE = "Entreprise de dératisation Haute-Marne (52) | GF Nuisibles";
const DESCRIPTION =
  "Rats ou souris en Haute-Marne (52) ? Entreprise locale pour particuliers et professionnels, joignable 7j/7 de 7h à 23h. Devis gratuit : 07 65 25 67 92.";
const URL = "https://gf-nuisibles.fr/deratisation";

const FIRST_STEP: ServiceStep = {
  step: 1,
  icon: Phone,
  title: "Prise de contact",
  text: "Vous me dites ce que vous avez vu ou entendu, et je vous donne ma première date disponible.",
};

const VISIT_STEPS: ServiceStep[] = [
  { step: 2, icon: Search, title: "Diagnostic", text: "Sur place, je cherche quel rongeur c'est, par où il entre et où il passe." },
  { step: 3, icon: FileText, title: "Devis", text: "Vous connaissez le prix avant de vous engager." },
  { step: 4, icon: ShieldCheck, title: "Intervention", text: "Je pose les pièges ou les appâts sécurisés, et je repère les accès à boucher." },
];

const LAST_STEP: ServiceStep = {
  step: 5,
  icon: ClipboardCheck,
  title: "Contrôle",
  text: "Je repasse vérifier le résultat et je complète si besoin.",
};

const PRICE_FACTORS = [
  { title: "L'infestation", text: "quelques souris repérées tôt ne demandent pas le même travail qu'une colonie de rats installée." },
  { title: "La surface", text: "un appartement, une maison entière ou une maison avec dépendances." },
  { title: "Les accès", text: "combles, caves, faux plafonds ou vides sanitaires plus ou moins faciles à atteindre." },
  { title: "Le nombre de passages", text: "il dépend du rongeur et de l'évolution entre deux visites." },
];

const PLACES = [
  { icon: House, title: "Combles et greniers", text: "des bruits au-dessus de la chambre la nuit, de l'isolant abîmé." },
  { icon: Utensils, title: "Cuisine", text: "des souris derrière les meubles, des emballages grignotés, des crottes dans les placards." },
  { icon: Warehouse, title: "Garage et dépendances", text: "souris et mulots s'y abritent dès les premiers froids." },
  { icon: Droplets, title: "Cave et sous-sol", text: "les rats y entrent souvent par les canalisations." },
  { icon: Building2, title: "Appartement", text: "les rongeurs circulent par les gaines, les cloisons et les parties communes." },
  { icon: Sprout, title: "Jardin et abords", text: "des rats près du compost, du poulailler ou des réserves de grain." },
];

const SIGNS = [
  { title: "Les bruits", text: "grattements la nuit dans les cloisons, les plafonds ou les faux plafonds." },
  { title: "Les crottes", text: "noires, en forme de grain de riz pour les souris, plus grosses pour les rats." },
  { title: "Le grignotage", text: "câbles, emballages, plinthes et isolants rongés." },
  { title: "L'odeur", text: "une odeur d'urine forte et persistante." },
  { title: "Les traces", text: "marques de gras le long des plinthes, laissées par les rats." },
  { title: "Les nids", text: "papier, tissu ou laine de verre déchiquetés." },
];

const WHO_IS_IT = [
  { icon: Rat, title: "Plutôt un rat", text: "bruits lourds, crottes de 1 à 2 cm, traces de gras le long des murs, gros trous rongés." },
  { icon: Rat, title: "Plutôt une souris", text: "grattements légers et rapides, petites crottes comme des grains de riz, emballages percés." },
  { icon: PawPrint, title: "Peut-être une fouine", text: "course et sauts sous le toit, isolant arraché, crottes longues et torsadées, souvent au même endroit." },
];

const GET_RID = [
  { title: "Trouver les passages", text: "suivre les crottes, les traces de gras et les trous, de la cave aux combles." },
  { title: "Couper la nourriture", text: "boîtes fermées, poubelles closes, croquettes et graines rangées le soir." },
  { title: "Piéger au bon endroit", text: "le long des murs et sur les passages, là où les rongeurs circulent vraiment." },
  { title: "Traiter si nécessaire", text: "des appâts placés dans des postes sécurisés, hors de portée des enfants et des animaux." },
  { title: "Fermer les accès", text: "une fois l'activité retombée, pour ne pas enfermer de rongeurs à l'intérieur." },
];

const ATTIC = [
  { title: "Comment ils montent", text: "par les murs, le lierre, les branches qui touchent le toit, les gouttières, les gaines ou l'intérieur des doubles cloisons." },
  { title: "Pourquoi ils s'y installent", text: "il y fait chaud, l'isolant sert de nid et personne ne les dérange. C'est le terrain préféré du rat noir." },
  { title: "Ce qu'il faut regarder", text: "les crottes sur l'isolant, les galeries dans la laine de verre, les câbles rongés et les jours sous les tuiles." },
  { title: "Ce que je fais", text: "je recherche l'animal et ses passages, je pose le dispositif adapté, puis je repasse vérifier." },
];

const WHY_HERE = [
  { icon: Utensils, title: "Ils ont trouvé à manger", text: "poubelles, graines, compost, poulailler ou croquettes laissées dehors la nuit." },
  { icon: House, title: "Ils ont trouvé où se cacher", text: "combles, cloison, cave, abri de jardin, tas de bois : un endroit calme et sec leur suffit." },
  { icon: DoorOpen, title: "Ils ont trouvé une entrée", text: "bas de porte, aération, passage de tuyau : une souris passe dans un trou de 6 mm." },
  { icon: Droplets, title: "Ils sont venus par les canalisations", text: "un regard cassé ou un tuyau mal raccordé ouvre la porte à un rat." },
];

const PREVENTION = [
  { text: "Bouchez les trous avec un matériau qu'ils ne rongent pas : mortier, grillage fin, tôle." },
  { text: "Posez une grille sur les aérations et un bas de porte sur le garage et la cave." },
  { text: "Rangez graines, farine et croquettes dans des bacs en métal ou en plastique épais." },
  { text: "Éloignez le bois et le compost des murs, et taillez les branches qui touchent le toit." },
  { text: "Faites vérifier les regards et les évacuations abîmés." },
];

const MISTAKES = [
  { icon: SprayCan, title: "Mettre du poison n'importe où", text: "un enfant, un chien ou un chat peut y toucher, et un rongeur peut mourir dans une cloison." },
  { icon: DoorOpen, title: "Tout boucher trop vite", text: "les rongeurs restés à l'intérieur rongent ailleurs pour sortir." },
  { icon: Volume2, title: "Compter sur les ultrasons", text: "les rongeurs s'y habituent souvent : cela ne remplace pas un traitement." },
  { icon: Hourglass, title: "Attendre", text: "une souris peut avoir jusqu'à 8 portées par an." },
];

const RISKS = [
  { icon: Stethoscope, title: "Les maladies", text: "leptospirose (urine de rat, parfois mortelle), salmonellose et hantavirus." },
  { icon: Utensils, title: "Les aliments", text: "les rongeurs contaminent les denrées et les surfaces de travail." },
  { icon: Flame, title: "L'incendie", text: "des câbles électriques rongés peuvent provoquer un départ de feu." },
  { icon: Hammer, title: "Les dégâts", text: "isolants, plomberie et structure abîmés, sans compter les allergies et l'asthme liés aux déjections." },
];

const RODENTS = [
  { icon: Rat, title: "Le rat brun (Rattus norvegicus)", text: "aussi appelé rat d'égout, c'est le plus fréquent en Haute-Marne. De grande taille (20 à 25 cm sans la queue), il vit dans les égouts, caves, sous-sols, granges et zones humides. Excellent nageur, il colonise facilement les bâtiments par les canalisations." },
  { icon: Rat, title: "Le rat noir (Rattus rattus)", text: "plus petit et plus agile, il préfère les hauteurs : combles, greniers, toitures, faux plafonds. Présent surtout dans les centres anciens de Chaumont, Langres et Saint-Dizier." },
  { icon: Rat, title: "La souris domestique (Mus musculus)", text: "petite (7 à 10 cm), elle s'introduit par des ouvertures de seulement 6 mm. Très prolifique (jusqu'à 8 portées par an), elle colonise rapidement cuisines, garages, dépendances et exploitations agricoles haut-marnaises." },
  { icon: Sprout, title: "Le mulot et le campagnol", text: "rongeurs des champs, ils s'invitent dans les habitations rurales et causent des dégâts dans les jardins, granges et silos agricoles." },
];

const METHOD = [
  { title: "Le diagnostic", text: "inspection complète du site : identification de l'espèce, des points d'entrée, des zones de nidification et de passage, évaluation du niveau d'infestation." },
  { title: "Le traitement ciblé", text: "pose de postes d'appâtage sécurisés et inviolables aux endroits stratégiques, pièges mécaniques selon le contexte, produits homologués." },
  { title: "La sécurisation", text: "identification et rebouchage des points d'entrée (canalisations, fissures, grilles), conseils sur l'étanchéité, le stockage des denrées et l'hygiène." },
  { title: "Le suivi", text: "passage de contrôle 10 à 15 jours après, pour évaluer l'efficacité et recharger les postes si nécessaire." },
];

const SEASONS = [
  { icon: Leaf, title: "Automne (septembre à novembre)", text: "le pic d'intrusion : les premières gelées poussent les rongeurs à chercher un abri chaud dans les habitations, granges et hangars." },
  { icon: Snowflake, title: "Hiver (décembre à février)", text: "forte présence dans les bâtiments chauffés. Les colonies se développent à l'abri du froid, souvent dans les combles, caves et faux plafonds." },
  { icon: Sprout, title: "Printemps (mars à mai)", text: "reproduction intense. Une femelle souris peut avoir jusqu'à 8 portées de 6 à 8 petits : une infestation négligée explose rapidement." },
  { icon: Sun, title: "Été (juin à août)", text: "présence accrue à l'extérieur (granges, silos, exploitations agricoles). Période idéale pour les contrats de prévention en agroalimentaire et collectivités." },
];

const FAQ_ITEMS = [
  {
    question: "Quand faire appel à un dératiseur ?",
    answer:
      "Dès les premiers signes : bruits la nuit, crottes, emballages ou câbles grignotés. Une souris visible en plein jour ou des traces dans plusieurs pièces indiquent souvent que les rongeurs sont déjà installés. Plus on agit tôt, plus le traitement est simple. Si vos pièges ne donnent rien après quelques jours, mieux vaut appeler.",
  },
  {
    question: "Comment choisir un bon dératiseur ?",
    answer:
      "Vérifiez qu'il est titulaire du Certibiocide, indispensable pour utiliser des produits professionnels. Demandez un devis écrit avant l'intervention, des explications claires sur la méthode et les précautions prises pour les enfants et les animaux, et un passage de contrôle. Les avis Google et une adresse locale sont aussi de bons repères. GF Nuisibles est basé à Semoutiers-Montsaon, près de Chaumont.",
  },
  {
    question: "Combien coûte une dératisation en Haute-Marne ?",
    answer:
      "Le prix dépend surtout de l'importance de l'infestation et de la surface à traiter. Pour un appartement ou une maison, la dératisation débute à 100 €. Le devis est gratuit et sans engagement : il fixe le prix exact avant l'intervention. Chaque intervention comprend le rapport, la traçabilité des produits, un plan de prévention et un passage de contrôle.",
  },
  {
    question: "Combien de temps dure une intervention de dératisation ?",
    answer:
      "Le premier passage dure entre 45 minutes et 2 heures selon la surface et l'accessibilité. Le diagnostic, le devis et l'intervention se font souvent le même jour. Une infestation bien installée demande généralement 2 à 3 passages espacés de 10 à 15 jours, le temps que les rongeurs consomment les appâts. Le dernier passage sert à vérifier le résultat.",
  },
  {
    question: "Les produits utilisés sont-ils dangereux pour les enfants et animaux ?",
    answer:
      "GF Nuisibles est titulaire du Certibiocide. Tous les appâts sont disposés dans des postes d'appâtage sécurisés et inviolables, fixés au sol, inaccessibles aux enfants et animaux domestiques. Les solutions mécaniques (pièges) sont privilégiées lorsque c'est pertinent. Chaque intervention fait l'objet d'un plan d'implantation et d'une fiche de sécurité.",
  },
  {
    question: "Que faire en attendant votre passage ?",
    answer:
      "Rangez la nourriture, y compris celle des animaux, dans des boîtes fermées et videz les poubelles le soir. Ne touchez pas les crottes ni un rongeur mort à mains nues. Ne bouchez pas les trous tout de suite : ils aident à comprendre par où passent les rongeurs. Vous pouvez en revanche prendre des photos des traces.",
  },
  {
    question: "Je suis locataire : qui doit payer la dératisation ?",
    answer:
      "Le bailleur doit fournir un logement exempt de toute infestation d'espèces nuisibles et parasites. En cours de bail, la prise en charge dépend de la situation : prévenez votre propriétaire ou votre agence au plus vite, de préférence par écrit, et renseignez-vous auprès de l'ADIL en cas de doute.",
  },
  {
    question: "Les rats et les souris peuvent-ils revenir ?",
    answer:
      "Oui, si les accès restent ouverts ou si de la nourriture reste à leur portée. C'est pour cela que l'intervention ne se limite pas aux pièges et aux appâts : on repère aussi les points d'entrée, et vous recevez des conseils de prévention.",
  },
  {
    question: "Intervenez-vous le week-end et en urgence ?",
    answer:
      "Oui. GF Nuisibles intervient 7j/7 sur toute la Haute-Marne (52) et les départements limitrophes (Vosges 88, Meuse 55, Côte-d'Or 21, Marne 51, Aube 10). Urgences possibles le week-end : appelez le 07 65 25 67 92, joignable de 7h à 23h, et nous fixons le rendez-vous ensemble.",
  },
];

const CITY_LINKS = [
  { label: "Dératisation Chaumont", to: "/deratisation-chaumont" },
  { label: "Dératisation Langres", to: "/deratisation-langres" },
  { label: "Dératisation Saint-Dizier", to: "/deratisation-saint-dizier" },
  { label: "Dératisation Joinville", to: "/deratisation-joinville" },
  { label: "Dératisation Bar-sur-Aube", to: "/deratisation-bar-sur-aube" },
  { label: "Dératisation Bourbonne-les-Bains", to: "/deratisation-bourbonne-les-bains" },
  { label: "Dératisation Wassy", to: "/deratisation-wassy" },
  { label: "Dératisation Bologne", to: "/deratisation-bologne" },
  { label: "Dératisation Froncles", to: "/deratisation-froncles" },
  { label: "Dératisation Nogent", to: "/deratisation-nogent" },
  { label: "Dératisation Chalindrey", to: "/deratisation-chalindrey" },
  { label: "Dératisation Arc-en-Barrois", to: "/deratisation-arc-en-barrois" },
  { label: "Dératisation Châteauvillain", to: "/deratisation-chateauvillain" },
  { label: "Dératisation Montier-en-Der", to: "/deratisation-montier-en-der" },
  { label: "Dératisation Semoutiers-Montsaon", to: "/deratisation-semoutiers-montsaon" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    LOCAL_BUSINESS,
    {
      "@type": "Service",
      url: URL,
      name: "Dératisation en Haute-Marne (52) – Rats & Souris",
      serviceType: "Dératisation",
      provider: { "@id": "https://gf-nuisibles.fr/#organization" },
      description: DESCRIPTION,
      areaServed: LOCAL_BUSINESS.areaServed,
      offers: {
        "@type": "Offer",
        priceSpecification: { "@type": "PriceSpecification", minPrice: 100, priceCurrency: "EUR" },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", position: 2, name: "Nos services", item: "https://gf-nuisibles.fr/#services" },
        { "@type": "ListItem", position: 3, name: "Dératisation", item: URL },
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

const Deratisation = () => (
  <>
    <SEO title={TITLE} description={DESCRIPTION} path="/deratisation" />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <Navbar />

    <ServiceHero
      breadcrumbs={breadcrumbsFrom(jsonLd)}
      eyebrow="Votre dératiseur en Haute-Marne"
      title={"Dératisation en Haute-Marne (52)\u00a0: élimination rats & souris"}
      text="Du bruit dans les murs, des crottes ? Je traite rats, souris et mulots, enfants et animaux pris en compte."
      highlight="Diagnostic, devis et intervention souvent le même jour"
      price={RODENT_PRICE}
      delay={CALL_DELAY}
      signsLabel="Pas sûr que ce soit des rongeurs ? Voir les signes à repérer"
      image={heroImage}
      imageAlt="Souris vue de face sur une planche en bois, la nuit"
      icon={Rat}
    />

    <main>
      <Section muted title="Comment se passe une dératisation ?" intro="De votre appel au dernier contrôle, vous savez à chaque fois ce qui va se passer.">
        <div className="grid gap-5 lg:grid-cols-[1fr_3.2fr_1fr] lg:items-stretch">
          <ol className="list-none rounded-2xl bg-card p-6 shadow-sm lg:px-4 lg:pt-10">
            <li className="h-full">
              <StepCard item={FIRST_STEP} />
            </li>
          </ol>
          <div className="relative rounded-2xl border-2 border-accent bg-card p-6 pt-10 shadow-sm">
            <p className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 font-heading text-sm font-bold text-primary-foreground">
              <CalendarDays className="h-4 w-4 text-accent" aria-hidden="true" />
              Souvent le même jour
            </p>
            <ol start={2} className="grid list-none gap-8 lg:grid-cols-3 lg:gap-6">
              {VISIT_STEPS.map((item, i) => (
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
          </div>
          <ol start={5} className="list-none rounded-2xl bg-card p-6 shadow-sm lg:px-4 lg:pt-10">
            <li className="h-full">
              <StepCard item={LAST_STEP} />
            </li>
          </ol>
        </div>
      </Section>

      <Section title="Pourquoi les rats et les souris rentrent-ils chez vous ?" intro="Même une maison bien tenue peut en avoir, été comme hiver. S'ils sont là, c'est presque toujours pour l'une de ces raisons.">
        <CardGrid items={WHY_HERE} />
      </Section>

      <Section muted title="Comment se débarrasser des rats et des souris ?" intro="Pièges seuls ou appâts seuls suffisent rarement. Ce qui marche, c'est d'agir dans le bon ordre.">
        <CheckList items={GET_RID} />
        <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
          Une seule souris, repérée tôt, se piège parfois soi-même. Pour des rats, un nid ou des traces dans plusieurs pièces, l'aide d'un dératiseur évite de perdre du temps.
        </p>
        <ClientReviews keys={["yerli", "jc", "genest"]} />
      </Section>

      <Section title="Quel est le prix d'une dératisation ?">
        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-foreground/80">
          <strong className="text-primary">Il n'y a pas de tarif unique : tout dépend de l'infestation et de la surface.</strong> Une dératisation débute à{" "}
          <strong className="whitespace-nowrap text-primary">100 €</strong>, et le devis vous donne le prix exact pour votre logement.
        </p>
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <CheckList items={PRICE_FACTORS} />
          <Callout icon={FileText} title="Un devis gratuit, avant de vous engager">
            Je regarde d'abord la situation, puis vous recevez le prix exact et ce qu'il comprend. Si une majoration s'applique le soir ou le week-end, elle est annoncée avant l'intervention.
          </Callout>
        </div>
      </Section>

      <CallBand
        title="Des rats ou des souris chez vous ?"
        text="Appelez et décrivez ce que vous avez remarqué : on voit ensemble ce qu'il faut faire."
        contactLabel="Devis gratuit"
      />

      <Section
        muted
        title="Où se cachent les rats et les souris dans une maison ?"
        intro="J'interviens en toute discrétion dans les maisons et les appartements de Haute-Marne et des départements limitrophes, avec un véhicule non logoté sur demande."
      >
        <PlaceGrid items={PLACES} />
        <Link
          to="/zone-intervention"
          className="mt-8 inline-flex items-center gap-2 font-heading font-semibold text-primary underline underline-offset-4 hover:text-accent"
        >
          <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
          Voir notre zone d'intervention
        </Link>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          <strong className="text-primary">Vous êtes professionnel ?</strong> Restaurant, commerce, collectivité, bailleur, exploitation agricole :{" "}
          <Link to="/contact" className={textLink}>
            demandez un devis adapté
          </Link>
          .
        </p>
      </Section>

      <Section title="Un dératiseur près de chez vous">
        <div className="grid items-start gap-8 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Basé aux portes de Chaumont, j'interviens partout en Haute-Marne : comme{" "}
              <Link to="/deratisation-chaumont" className={textLink}>dératiseur à Chaumont</Link> et dans les villages autour, mais aussi pour la{" "}
              <Link to="/deratisation-langres" className={textLink}>dératisation à Langres</Link>, la{" "}
              <Link to="/deratisation-saint-dizier" className={textLink}>dératisation à Saint-Dizier</Link> et contre les{" "}
              <Link to="/deratisation-nogent" className={textLink}>rats et souris à Nogent</Link>.
            </p>
            <p>
              En Haute-Marne, beaucoup de maisons ont une grange, un grenier ou un jardin près des champs. À l'automne, souris et mulots y cherchent la chaleur. En ville, les rats profitent plutôt des caves, des réseaux et des cours d'immeubles.
            </p>
          </div>
          <div className="space-y-6">
            <img src={beamImage} alt="Rat sur une poutre en bois" loading="lazy" className={photoClass} />
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-4 font-heading text-lg font-bold text-primary">Ils ont fait appel à GF Nuisibles</h3>
            <CheckList
              items={[
                { title: "Des particuliers", text: "à Chaumont et dans les environs." },
                { title: "Des communes de Haute-Marne", text: "dont Leffonds." },
                { title: "Square Habitat", text: "agence immobilière." },
              ]}
            />
          </div>
          </div>
        </div>
      </Section>

      <section className="section-padding bg-secondary">
        <div className="container-narrow space-y-6">
          <GuideBlock
            id="reconnaitre"
            title="Comment savoir si vous avez des rats ou des souris ?"
            intro="On voit rarement les rongeurs eux-mêmes : ce sont surtout leurs traces qui alertent."
            summary="Voir les signes à repérer"
            open
          >
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <CheckList items={SIGNS} />
              <img src={ratImage} alt="Rat brun au ras du sol, entouré de graines" loading="lazy" className={photoClass} />
            </div>
          </GuideBlock>
          <GuideBlock
            title="Rat, souris ou fouine : comment savoir ?"
            intro="Le bruit, la taille des crottes et les traces donnent déjà une bonne idée."
            summary="Voir les différences"
          >
            <CardGrid items={WHO_IS_IT} columns="lg:grid-cols-3" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Pour une fouine, le cadre n'est pas le même : voyez notre page sur la{" "}
              <Link to="/regulation-esod" className={textLink}>régulation des espèces ESOD</Link>.
            </p>
          </GuideBlock>
          <GuideBlock
            title="Rats dans les combles : que faire ?"
            intro="Des bruits au-dessus du plafond la nuit ? Ne montez pas sans protection et ne mettez pas de poison au hasard."
            summary="Voir quoi faire"
          >
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <CheckList items={ATTIC} />
              <img src={plankImage} alt="Rat sur une planche en bois" loading="lazy" className={photoClass} />
            </div>
          </GuideBlock>
          <GuideBlock
            title="Comment empêcher les rats et les souris de revenir ?"
            intro="Une fois le traitement terminé, quelques gestes simples les gardent dehors."
            summary="Voir les conseils"
          >
            <CheckList items={PREVENTION} />
          </GuideBlock>
          <GuideBlock title="Rats et souris : les erreurs à ne pas faire" intro="Elles partent d'une bonne intention, mais compliquent souvent la suite." summary="Voir les erreurs les plus courantes">
            <CardGrid items={MISTAKES} />
          </GuideBlock>
          <GuideBlock
            title="Les rats et les souris sont-ils dangereux ?"
            intro="La présence de rongeurs est un risque sanitaire et peut causer des dégâts importants."
            summary="Voir les risques"
          >
            <CardGrid items={RISKS} />
          </GuideBlock>
          <GuideBlock
            title="Quels rats et souris trouve-t-on en Haute-Marne ?"
            intro="Rat brun, rat noir, souris, mulot : chacun a ses habitudes, et le traitement s'y adapte."
            summary="Voir les espèces"
          >
            <div className="grid items-start gap-8 lg:grid-cols-[2fr_1fr]">
              <CardGrid items={RODENTS} columns="" />
              <img src={eatingImage} alt="Rat en train de manger, tenant sa nourriture entre ses pattes" loading="lazy" className={photoClass} />
            </div>
          </GuideBlock>
          <GuideBlock
            title="Comment je traite les rats et les souris chez vous"
            intro="Des pièges mécaniques quand c'est possible, produits en dernier recours, toujours dans des postes sécurisés."
            summary="Voir le détail de la méthode"
          >
            <CheckList items={METHOD} />
          </GuideBlock>
          <GuideBlock
            title="Quand y a-t-il le plus de rats et de souris ?"
            intro="Contrairement aux idées reçues, les rats et souris sont actifs toute l'année, avec des pics selon les saisons."
            summary="Voir le calendrier"
          >
            <CardGrid items={SEASONS} columns="" />
          </GuideBlock>
          <GuideBlock
            title="Restaurant, commerce, collectivité : la dératisation pour les professionnels"
            intro="Un suivi adapté aux professionnels de Haute-Marne, dans le cadre de leur démarche HACCP."
            summary="Voir les prestations pour les professionnels"
          >
            <CheckList
              items={[
                { title: "Restaurants, brasseries, hôtels", text: "contrats annuels avec passages réguliers, plans d'implantation, traçabilité des produits, rapports d'intervention pour vos audits." },
                { title: "Industries agroalimentaires", text: "protocoles stricts, traçabilité des produits et documents pour vos audits." },
                { title: "Collectivités, EHPAD, écoles, mairies", text: "interventions discrètes, hors présence du public, produits adaptés aux établissements sensibles." },
                { title: "Bailleurs sociaux, syndics, copropriétés", text: "gestion des parties communes, vide-ordures, locaux techniques." },
                { title: "Exploitations agricoles", text: "silos, granges, étables, stockages de céréales." },
              ]}
            />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Chaque contrat inclut un classeur sanitaire à jour, les fiches de données de sécurité, le plan d'implantation des postes et le registre des interventions : des éléments indispensables lors d'un contrôle DDPP.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Pour les établissements alimentaires, la lutte contre les nuisibles est <strong>obligatoire</strong> (Règlement CE 852/2004 et Paquet Hygiène). L'absence de plan de lutte est sanctionnée lors des contrôles DDPP.
            </p>
          </GuideBlock>
          <GuideBlock
            title="Réglementation et certifications"
            intro="GF Nuisibles est titulaire du Certibiocide et assuré en responsabilité civile professionnelle."
            summary="Voir la réglementation"
          >
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                L'usage de produits rodenticides est strictement encadré par la <strong>réglementation européenne biocide (BPR n°528/2012)</strong> et l'<strong>arrêté du 9 octobre 2013</strong>. Seuls les professionnels titulaires du certificat <strong>Certibiocide</strong> (catégorie TP14, rodenticides) sont habilités à acheter et appliquer ces produits.
              </p>
              <p>
                GF Nuisibles applique l'ensemble des règles relatives à la lutte intégrée contre les nuisibles (IPM, Integrated Pest Management) : diagnostic, action mécanique privilégiée, produit en dernier recours, dosage minimal efficace, traçabilité complète.
              </p>
            </div>
          </GuideBlock>
        </div>
      </section>

      <Section title="Questions fréquentes sur la dératisation">
        <FaqList items={FAQ_ITEMS} />
      </Section>

      <Section
        muted
        title="Dératisation par ville en Haute-Marne"
        intro="GF Nuisibles intervient pour la dératisation dans toute la Haute-Marne (52) et les départements limitrophes. Cliquez sur votre ville :"
      >
        <CityPills links={CITY_LINKS} />
        <p className="mt-8 leading-relaxed text-muted-foreground">
          <strong className="text-primary">Un autre nuisible chez vous ?</strong> Voyez aussi le{" "}
          <Link to="/cafards-blattes" className={textLink}>traitement des cafards et blattes</Link>, les{" "}
          <Link to="/punaises-de-lit" className={textLink}>punaises de lit</Link>, les{" "}
          <Link to="/guepes-frelons" className={textLink}>nids de guêpes et frelons</Link> ou le{" "}
          <Link to="/taupes" className={textLink}>piégeage des taupes</Link>. Des oiseaux sous le toit ? Voyez le{" "}
          <Link to="/depigeonnage" className={textLink}>dépigeonnage</Link>.
        </p>
      </Section>
    </main>

    <Reassurance />
    <Footer />
  </>
);

export default Deratisation;
