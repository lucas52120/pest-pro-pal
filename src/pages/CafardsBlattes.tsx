import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Bug,
  Building2,
  ClipboardCheck,
  Coffee,
  Droplets,
  FileText,
  Hourglass,
  Info,
  MapPin,
  Moon,
  Package,
  Phone,
  Refrigerator,
  Search,
  ShowerHead,
  SprayCan,
  Stethoscope,
  Thermometer,
  Trash2,
  Utensils,
  Warehouse,
} from "lucide-react";
import heroImage from "@/assets/blatte-hero.jpg";
import closeUpImage from "@/assets/blatte-gros-plan.jpg";
import kitchenImage from "@/assets/blatte-cuisine.jpg";
import crackImage from "@/assets/blatte-fissure.jpg";
import Navbar from "@/components/Navbar";
import Reassurance from "@/components/Reassurance";
import Footer from "@/components/Footer";
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
  StepRow,
  photoClass,
  textLink,
} from "@/components/ServiceBlocks";
import { LOCAL_BUSINESS } from "@/data/business";

const TITLE = "Traitement Cafards et Blattes Haute-Marne (52) | GF Nuisibles";
const DESCRIPTION =
  "Des cafards ou blattes chez vous ? N'attendez pas qu'ils se multiplient : intervention discrète en Haute-Marne, 7j/7. Devis gratuit : 07 65 25 67 92.";
const URL = "https://gf-nuisibles.fr/cafards-blattes";

const STEPS: ServiceStep[] = [
  { step: 1, icon: Phone, title: "Prise de contact", text: "Vous appelez et vous racontez ce que vous avez vu. On fixe une date, en toute discrétion." },
  { step: 2, icon: Search, title: "Diagnostic", text: "Sur place, je cherche quelle blatte c'est, où elle se cache et jusqu'où elle s'est étendue." },
  { step: 3, icon: FileText, title: "Devis", text: "Vous connaissez le prix avant de vous engager." },
  { step: 4, icon: SprayCan, title: "Traitement", text: "Je dépose un gel dans les cachettes, hors de portée des enfants et des animaux." },
  { step: 5, icon: ClipboardCheck, title: "Contrôle", text: "Je repasse vérifier et traiter les jeunes blattes nées entre-temps." },
];

const PRICE_FACTORS = [
  { title: "L'infestation", text: "quelques blattes repérées tôt ne demandent pas le même travail qu'une colonie installée depuis des mois." },
  { title: "La surface", text: "une cuisine seule, un appartement, une maison ou plusieurs logements." },
  { title: "L'espèce", text: "les cachettes et le traitement ne sont pas les mêmes d'une blatte à l'autre." },
  { title: "Le nombre de passages", text: "il dépend de l'évolution et des éclosions entre deux visites." },
];

const PLACES = [
  { icon: Refrigerator, title: "Réfrigérateur et four", text: "derrière et dessous, près des moteurs, là où il fait chaud." },
  { icon: Droplets, title: "Sous l'évier", text: "autour des tuyaux, dans l'humidité et l'obscurité." },
  { icon: Coffee, title: "Petits appareils", text: "cafetière, micro-ondes, grille-pain : de la chaleur et des miettes." },
  { icon: Utensils, title: "Placards de cuisine", text: "charnières, fonds de tiroirs, dessous d'étagères et plinthes." },
  { icon: ShowerHead, title: "Salle de bain", text: "derrière la baignoire, le lavabo et dans les gaines." },
  { icon: Warehouse, title: "Cave et local poubelles", text: "le domaine de la blatte orientale, noire et plus grosse." },
];

const SIGNS = [
  { title: "Les insectes", text: "bruns ou noirs, ils fuient la lumière quand vous allumez la cuisine la nuit." },
  { title: "Les crottes", text: "de petits points noirs, comme du poivre moulu, dans les tiroirs, les placards et derrière l'électroménager." },
  { title: "Les oothèques", text: "de petites capsules brunes allongées qui contiennent les œufs." },
  { title: "Les mues", text: "des enveloppes vides et des cadavres près des plinthes ou sous l'évier." },
  { title: "L'odeur", text: "rance et persistante quand les blattes sont nombreuses." },
  { title: "Les emballages", text: "grignotés dans les placards ou les réserves." },
];

const SPECIES = [
  { icon: Bug, title: "La blatte germanique", text: "la plus fréquente dans les logements et les cuisines. Environ 1,5 cm, brun clair avec deux bandes sombres derrière la tête. Elle aime la chaleur des moteurs de réfrigérateur, des fours, des lave-vaisselle et des machines à café." },
  { icon: Bug, title: "La blatte orientale", text: "plus grosse (2 à 3 cm), brun foncé à noire. Elle préfère les lieux frais et humides : caves, sous-sols, vides sanitaires, regards et canalisations. On la trouve dans les maisons anciennes à caves voûtées, comme à Langres, Joinville ou Bourbonne-les-Bains." },
  { icon: Bug, title: "La blatte rayée", text: "plus rare, elle se cache dans les pièces sèches : chambres, meubles, appareils électroniques." },
  { icon: Bug, title: "La blatte américaine", text: "plus rare aussi et nettement plus grande, elle vit surtout dans les locaux techniques chauds." },
];

const GET_RID = [
  { title: "Identifier l'espèce", text: "une blatte de cuisine et une blatte de cave ne se traitent pas au même endroit." },
  { title: "Poser le gel au bon endroit", text: "en petites gouttes dans les fissures, les charnières et derrière les appareils. Les blattes le mangent et le ramènent dans leurs cachettes." },
  { title: "Compléter si nécessaire", text: "par une pulvérisation localisée, ou une nébulisation dans les locaux techniques." },
  { title: "Repasser", text: "les œufs sont protégés dans les oothèques : un second passage permet de traiter les jeunes blattes." },
  { title: "Supprimer ce qui les attire", text: "eau, nourriture, cartons et fissures, sinon elles peuvent se réinstaller." },
];

const PREPARE = [
  { text: "N'utilisez pas d'insecticide du commerce dans les jours précédents : il peut repousser les blattes et gêner l'action du gel." },
  { text: "Dégagez l'accès sous l'évier, derrière le réfrigérateur et la cuisinière si possible." },
  { text: "Rangez la nourriture dans des boîtes fermées." },
  { text: "Signalez la présence d'enfants, de femmes enceintes, d'animaux ou d'un aquarium." },
  { text: "Après le traitement, ne nettoyez pas à grande eau les endroits où le gel a été déposé." },
];

const ATTRACT = [
  { icon: Thermometer, title: "La chaleur", text: "moteurs d'appareils, chaufferies, canalisations chaudes. Dans un logement chauffé, elles restent actives même en hiver." },
  { icon: Droplets, title: "L'humidité", text: "une fuite sous l'évier, un siphon, une cave voûtée, un vide sanitaire." },
  { icon: Utensils, title: "La nourriture", text: "miettes, graisse derrière la cuisinière, poubelles, gamelles des animaux." },
  { icon: Package, title: "Les transports", text: "cartons de déménagement, sacs de courses, livraisons, électroménager d'occasion, valises." },
];

const MISTAKES = [
  { icon: SprayCan, title: "Vider des bombes insecticides", text: "elles tuent celles qu'on voit et peuvent disperser les autres dans d'autres pièces." },
  { icon: Building2, title: "Traiter seul dans un immeuble", text: "les blattes passent par les gaines : il faut prévenir le bailleur ou le syndic." },
  { icon: Trash2, title: "Garder les cartons au sol", text: "ils leur offrent un abri et de quoi manger." },
  { icon: Hourglass, title: "Attendre", text: "chaque oothèque de blatte germanique contient des dizaines d'œufs." },
];

const RISKS = [
  { icon: Utensils, title: "Les aliments", text: "les blattes passent des poubelles et des canalisations aux plans de travail et à la vaisselle : elles peuvent transporter des bactéries." },
  { icon: Stethoscope, title: "Les allergies", text: "leurs déjections et leurs mues peuvent provoquer des réactions allergiques et aggraver l'asthme, en particulier chez les enfants." },
  { icon: Moon, title: "Le moral", text: "ne plus oser allumer la lumière ou recevoir du monde pèse vite au quotidien." },
];

const PREVENTION = [
  { text: "Bouchez les fissures et les passages de tuyaux." },
  { text: "Réparez les fuites et évitez l'eau stagnante." },
  { text: "Rangez les aliments dans des boîtes fermées." },
  { text: "Sortez les poubelles chaque soir." },
  { text: "Videz et jetez vite les cartons, et vérifiez les appareils d'occasion avant de les rentrer." },
];

const PROS = [
  { title: "Qui", text: "restaurants, boulangeries, cuisines collectives, hôtels, EHPAD, écoles, commerces, bailleurs et syndics." },
  { title: "Quand", text: "à des horaires adaptés pour ne pas gêner votre activité, avec un véhicule non logoté sur demande." },
  { title: "Comment", text: "des contrats de suivi avec passages réguliers et compte rendu écrit, utiles pour votre plan de maîtrise sanitaire (HACCP)." },
];

const FAQ_ITEMS = [
  {
    question: "Quel est le prix d'un traitement contre les cafards ?",
    answer:
      "Le prix dépend de l'infestation, de la surface, de l'espèce de blatte et du nombre de passages. Après le diagnostic, vous recevez un devis gratuit et détaillé, sans engagement.",
  },
  {
    question: "Quel est le traitement le plus efficace contre les cafards ?",
    answer:
      "Dans un logement, le gel appâtant professionnel est le plus souvent la base du traitement : les blattes le mangent et le ramènent dans leurs cachettes, ce qui touche aussi celles qui ne sortent pas. Selon la situation, il est complété par une pulvérisation localisée. Le choix se fait après avoir identifié l'espèce.",
  },
  {
    question: "Est-ce grave d'avoir des cafards chez soi ?",
    answer:
      "Ce n'est pas une urgence vitale, mais il ne faut pas laisser traîner. Les blattes peuvent contaminer les aliments, et leurs déjections peuvent provoquer des allergies ou aggraver l'asthme. Surtout, elles se multiplient vite : plus on agit tôt, plus c'est simple.",
  },
  {
    question: "Est-ce que les cafards viennent d'un manque de propreté ?",
    answer:
      "Non, pas forcément. Ils arrivent souvent avec des cartons, des courses, un appareil d'occasion, ou depuis un logement voisin par les gaines. Un logement très propre peut être touché. L'eau, les miettes et les cachettes les aident ensuite à rester.",
  },
  {
    question: "Cafard et blatte, est-ce la même chose ?",
    answer:
      "Oui. « Cafard » est le nom courant, « blatte » le nom employé par les professionnels. En Haute-Marne, on rencontre surtout la blatte germanique (petite, brun clair, dans les cuisines), la blatte orientale (plus grosse, noire, dans les caves et sous-sols humides) et parfois la blatte rayée.",
  },
  {
    question: "Combien de passages faut-il pour éliminer les cafards ?",
    answer:
      "Cela dépend de l'espèce, de l'étendue de l'infestation et de la configuration des lieux. Les œufs protégés dans les oothèques résistent à de nombreux traitements : un passage de contrôle est donc souvent nécessaire. Le nombre de passages est précisé dans le devis.",
  },
  {
    question: "Dois-je quitter mon logement pendant le traitement ?",
    answer:
      "Le plus souvent non lorsqu'un traitement par gel est utilisé. Si une pulvérisation ou une nébulisation est nécessaire, vous savez à l'avance combien de temps la pièce ne doit pas être occupée et quelles précautions prendre pour les enfants et les animaux.",
  },
  {
    question: "Les produits du commerce suffisent-ils contre les blattes ?",
    answer:
      "Ils peuvent ralentir une petite présence, mais ils agissent rarement sur les nids cachés et les œufs. Un mauvais usage peut même disperser les blattes dans d'autres pièces ou appartements. Un traitement professionnel cible les zones de refuge.",
  },
  {
    question: "Je suis locataire : qui paie le traitement contre les cafards ?",
    answer:
      "Le bailleur doit fournir un logement exempt de toute infestation d'espèces nuisibles et parasites. En cours de bail, la prise en charge dépend de la situation : prévenez votre propriétaire ou votre agence au plus vite, de préférence par écrit, et renseignez-vous auprès de l'ADIL en cas de doute.",
  },
  {
    question: "Intervenez-vous dans les restaurants et commerces alimentaires ?",
    answer:
      "Oui, dans les restaurants, boulangeries, cantines, hôtels et commerces. Un contrat de suivi avec passages réguliers et compte rendu écrit peut être proposé, utile dans le cadre de votre plan de maîtrise sanitaire (HACCP).",
  },
  {
    question: "Dans quelles communes de Haute-Marne intervenez-vous ?",
    answer:
      "Dans toute la Haute-Marne, notamment à Chaumont, Langres, Saint-Dizier, Nogent, Joinville, Wassy, Bourbonne-les-Bains, Bologne, Froncles, Chalindrey, Châteauvillain, Arc-en-Barrois, Montier-en-Der et Semoutiers-Montsaon, ainsi que dans les villages alentour.",
  },
];

const CITY_LINKS = [
  { label: "Cafards & Blattes Chaumont", to: "/cafards-blattes-chaumont" },
  { label: "Cafards & Blattes Langres", to: "/cafards-blattes-langres" },
  { label: "Cafards & Blattes Saint-Dizier", to: "/cafards-blattes-saint-dizier" },
  { label: "Cafards & Blattes Nogent", to: "/cafards-blattes-nogent" },
  { label: "Cafards & Blattes Joinville", to: "/cafards-blattes-joinville" },
  { label: "Cafards & Blattes Bourbonne-les-Bains", to: "/cafards-blattes-bourbonne-les-bains" },
  { label: "Cafards & Blattes Bar-sur-Aube", to: "/cafards-blattes-bar-sur-aube" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    LOCAL_BUSINESS,
    {
      "@type": "Service",
      url: URL,
      name: "Traitement des cafards et blattes en Haute-Marne (52)",
      serviceType: "Traitement contre les cafards et blattes",
      description: DESCRIPTION,
      provider: { "@id": LOCAL_BUSINESS["@id"] },
      areaServed: LOCAL_BUSINESS.areaServed,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", position: 2, name: "Nos services", item: "https://gf-nuisibles.fr/#services" },
        { "@type": "ListItem", position: 3, name: "Cafards et blattes", item: URL },
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

const CafardsBlattes = () => (
  <>
    <SEO title={TITLE} description={DESCRIPTION} path="/cafards-blattes" />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <Navbar />

    <ServiceHero
      breadcrumbs={breadcrumbsFrom(jsonLd)}
      eyebrow="Sans jugement et en toute discrétion"
      title="Traitement des cafards et blattes en Haute-Marne (52)"
      text="Des insectes bruns qui filent quand vous allumez la cuisine ? J'interviens chez vous contre les cafards et les blattes, avec un traitement ciblé et des explications claires."
      highlight="Titulaire du Certibiocide, véhicule non logoté sur demande"
      signsLabel="Pas sûr que ce soit des cafards ? Voir les signes à repérer"
      image={heroImage}
      imageAlt="Jeune blatte vue de profil sur une surface claire"
      icon={Bug}
    />

    <main>
      <Section muted title="Comment se passe un traitement contre les cafards ?" intro="De votre appel au dernier contrôle, vous savez à chaque fois ce qui va se passer.">
        <StepRow steps={STEPS} />
        <div className="mt-8">
          <Callout icon={Info} title="Vous n'y êtes pour rien">
            Un logement très propre peut avoir des cafards : ils arrivent avec un carton, un appareil d'occasion, ou depuis le logement d'à côté. L'important est d'agir tôt.
          </Callout>
        </div>
      </Section>

      <Section title="Quel est le prix d'un traitement contre les cafards ?">
        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-foreground/80">
          <strong className="text-primary">Il n'y a pas de tarif unique : tout dépend de l'infestation et de la surface.</strong> Le devis est gratuit et vous donne le prix exact pour votre logement.
        </p>
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <CheckList items={PRICE_FACTORS} />
          <Callout icon={FileText} title="Un devis gratuit, avant de vous engager">
            Je regarde d'abord la situation, puis vous recevez le prix exact, le nombre de passages prévu et ce qui est compris.
          </Callout>
        </div>
      </Section>

      <CallBand
        title="Des cafards ou des blattes chez vous ?"
        text="Appelez et décrivez ce que vous avez remarqué : on voit ensemble ce qu'il faut faire."
        contactLabel="Devis gratuit"
      />

      <Section
        muted
        title="Où se cachent les cafards chez vous ?"
        intro="Ils cherchent la chaleur, l'humidité et l'obscurité. La cuisine est presque toujours le premier endroit à vérifier."
      >
        <PlaceGrid items={PLACES} />
        <p className="mt-8 leading-relaxed text-muted-foreground">
          <strong className="text-primary">Vous êtes professionnel ?</strong> Restaurant, boulangerie, hôtel, collectivité, bailleur :{" "}
          <Link to="/contact" className={textLink}>demandez un devis adapté</Link>.
        </p>
      </Section>

      <Section title="Contre les cafards, un professionnel près de chez vous">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Basé aux portes de Chaumont, j'interviens partout en Haute-Marne : contre les{" "}
              <Link to="/cafards-blattes-chaumont" className={textLink}>cafards à Chaumont</Link>, les{" "}
              <Link to="/cafards-blattes-saint-dizier" className={textLink}>blattes à Saint-Dizier</Link>, et pour le{" "}
              <Link to="/cafards-blattes-langres" className={textLink}>traitement des cafards à Langres</Link>,{" "}
              <Link to="/cafards-blattes-nogent" className={textLink}>Nogent</Link> et{" "}
              <Link to="/cafards-blattes-joinville" className={textLink}>Joinville</Link>.
            </p>
            <p>
              Dans les immeubles, les blattes circulent d'un logement à l'autre par les gaines, les colonnes d'eau et les vide-ordures. Dans un quartier comme La Rochotte à Chaumont ou le Vert-Bois à Saint-Dizier, il faut souvent s'organiser avec les voisins et le bailleur.
            </p>
            <p>
              Dans les maisons anciennes, ce sont plutôt les caves et les canalisations qu'il faut surveiller.
            </p>
            <Link to="/zone-intervention" className={`inline-flex items-center gap-2 ${textLink}`}>
              <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
              Voir notre zone d'intervention
            </Link>
          </div>
          <img src={kitchenImage} alt="Cuisine ancienne avec évier et placards en bois, un lieu où les cafards se cachent volontiers" loading="lazy" className={photoClass} />
        </div>
      </Section>

      <section className="section-padding bg-secondary">
        <div className="container-narrow space-y-6">
          <GuideBlock
            id="reconnaitre"
            title="Reconnaître la présence de cafards ou de blattes"
            intro="Ils sortent la nuit : on voit surtout leurs traces. En voir un en plein jour est souvent le signe qu'ils sont déjà nombreux."
            summary="Voir les signes à repérer"
            open
          >
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <CheckList items={SIGNS} />
              <img src={closeUpImage} alt="Jeune blatte brune vue de dessus sur un fond blanc" loading="lazy" className={photoClass} />
            </div>
          </GuideBlock>
          <GuideBlock
            title="Comment se débarrasser des cafards et des blattes ?"
            intro="Tuer ceux qu'on voit ne suffit pas : il faut atteindre les cachettes et les œufs."
            summary="Voir la méthode de traitement"
          >
            <CheckList items={GET_RID} />
          </GuideBlock>
          <GuideBlock
            title="Comment préparer votre logement avant l'intervention ?"
            intro="Quelques gestes simples aident le traitement à bien fonctionner."
            summary="Voir comment préparer le passage"
          >
            <CheckList items={PREPARE} />
          </GuideBlock>
          <GuideBlock
            title="Les espèces de blattes en Haute-Marne"
            intro="Germanique, orientale, rayée ou américaine : chacune a ses cachettes."
            summary="Voir les espèces"
          >
            <CardGrid items={SPECIES} columns="" />
          </GuideBlock>
          <GuideBlock
            title="D'où viennent les cafards et qu'est-ce qui les attire ?"
            intro="Ils arrivent rarement par hasard, et restent quand ils trouvent chaleur, eau et nourriture."
            summary="Voir les causes"
          >
            <div className="grid items-start gap-8 lg:grid-cols-[2fr_1fr]">
              <CardGrid items={ATTRACT} columns="" />
              <img src={crackImage} alt="Blatte près d'une fissure dans du béton" loading="lazy" className={photoClass} />
            </div>
          </GuideBlock>
          <GuideBlock title="Les erreurs à éviter" intro="Elles partent d'une bonne intention, mais compliquent souvent la suite." summary="Voir les erreurs les plus courantes">
            <CardGrid items={MISTAKES} />
          </GuideBlock>
          <GuideBlock
            title="Quels risques avec les cafards ?"
            intro="Mieux vaut traiter tôt : c'est plus simple et cela demande moins de passages."
            summary="Voir les risques"
          >
            <CardGrid items={RISKS} columns="lg:grid-cols-3" />
          </GuideBlock>
          <GuideBlock
            title="Éviter le retour des cafards"
            intro="Les bons réflexes à garder après le traitement."
            summary="Voir les conseils"
          >
            <CheckList items={PREVENTION} />
          </GuideBlock>
          <GuideBlock
            title="Cafards en restaurant, commerce ou collectivité"
            intro="La présence de cafards constatée lors d'un contrôle sanitaire peut avoir des conséquences sérieuses."
            summary="Voir les prestations pour les professionnels"
          >
            <CheckList items={PROS} />
          </GuideBlock>
        </div>
      </section>

      <Section title="Questions fréquentes sur les cafards et les blattes">
        <FaqList items={FAQ_ITEMS} />
      </Section>

      <Section
        muted
        title="Traitement des cafards par ville en Haute-Marne"
        intro="GF Nuisibles intervient à Chaumont, Langres, Saint-Dizier et dans toutes les communes du département, comme Biesles, Rolampont, Vignory, Doulaincourt, Fayl-Billot, Eurville-Bienville, Chevillon, Andelot-Blancheville, Prauthoy ou Val-de-Meuse. Cliquez sur votre ville :"
      >
        <CityPills links={CITY_LINKS} />
        <p className="mt-8 leading-relaxed text-muted-foreground">
          <strong className="text-primary">Un autre nuisible chez vous ?</strong> Voyez aussi la{" "}
          <Link to="/deratisation" className={textLink}>dératisation en Haute-Marne</Link>, les{" "}
          <Link to="/punaises-de-lit" className={textLink}>punaises de lit</Link>, les{" "}
          <Link to="/guepes-frelons" className={textLink}>nids de guêpes et frelons</Link>, le{" "}
          <Link to="/depigeonnage" className={textLink}>dépigeonnage</Link> ou le{" "}
          <Link to="/taupes" className={textLink}>piégeage des taupes</Link>.
        </p>
      </Section>
    </main>

    <Reassurance />
    <Footer />
  </>
);

export default CafardsBlattes;
