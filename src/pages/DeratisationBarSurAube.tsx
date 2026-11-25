import { Link } from "react-router-dom";
import { Boxes, Church, DoorOpen, Droplets, Grape, Landmark, Mountain, Route, ShoppingBag, Utensils, Wine, Wrench } from "lucide-react";
import heroImage from "@/assets/rat-gros-plan.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  city: "Bar-sur-Aube",
  postalCode: "10200",
  region: "Aube",
  slug: "/deratisation-bar-sur-aube",
  title: "Entreprise de dératisation à Bar-sur-Aube (10)",
  description:
    "Rats ou souris à Bar-sur-Aube (10200), dans une cave ou une réserve ? GF Nuisibles recherche les accès et traite. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Maisons, celliers et caves de la Côte des Bar",
    text: "Cellier, maison ou cave de vigneron : je viens de la Haute-Marne voisine pour traiter et contrôler.",
    highlight: "Des dispositifs tenus à distance du vin et des emballages",
    signsLabel: "Vigneron ou commerçant ? Ce qu'un rongeur abîme",
    image: heroImage,
    imageAlt: "Gros plan d'un rat brun à l'entrée d'une cachette en bois",
    imageClassName: "object-left",
    area: "Entreprise de la Haute-Marne voisine, à une quarantaine de kilomètres",
  },
  reviews: ["rigny", "genest", "babinski"],
  why: {
    title: "Pourquoi avez-vous des rats ou des souris chez vous ?",
    intro: "Dans une rue ancienne, ils n'arrivent pas toujours de la rue. Souvent, ils viennent d'en dessous.",
    items: [
      { icon: Wine, title: "Un cellier relié aux autres", text: "voûtes qui communiquent, soupiraux et anciens puits forment un réseau." },
      { icon: Utensils, title: "De la nourriture à l'étage", text: "cuisine, arrière-boutique ou coin dégustation : ils montent pour manger." },
      { icon: DoorOpen, title: "Un trou autour d'un tuyau", text: "on change la conduite, et l'ancien passage reste ouvert à côté." },
      { icon: Boxes, title: "Des cartons livrés", text: "palettes et emballages entrent chaque semaine, parfois avec un passager." },
    ],
  },
  where: {
    intro: "Des vieux celliers aux villages de vignes, voici comment je lis la ville.",
    items: [
      { icon: Church, title: "Saint-Pierre et son halloy", text: "maisons anciennes, celliers et commerces du vieux centre." },
      { icon: Landmark, title: "Saint-Maclou", text: "immeubles étroits, cours et bâtiments longtemps inoccupés." },
      { icon: Droplets, title: "La Gravière, Mathaux et les Chevillottes", text: "habitations proches de l'Aube : regards, grilles et murs de jardin." },
      { icon: Mountain, title: "Vers la colline Sainte-Germaine", text: "maisons en hauteur, remises et terrains boisés." },
      { icon: Wine, title: "Les villages de vignes", text: "Baroville, Urville, Colombé-le-Sec, Couvignon : caves, cuveries et stocks." },
      { icon: Route, title: "Proverville, Fontaine, Ailleville", text: "pavillons et fermes aux portes de la ville." },
    ],
  },
  how: {
    title: "Comment éliminer les rats et les souris efficacement ?",
    intro: "Dans un cellier, on ne pose pas n'importe quoi. Je cherche la jonction entre les caves, je place les pièges dedans, les postes dehors, et je contrôle.",
    photo: "gravier",
    steps: [
      { title: "Un poste dans la cour", text: "Il coupe la route entre l'extérieur et le cellier." },
      { title: "Loin de vos bouteilles", text: "L'appât est tenu dans le boîtier : rien ne touche le vin ni les emballages." },
      { title: "Un contrôle à date fixe", text: "On convient du jour à l'avance, en dehors de vos périodes chargées." },
    ],
    after: "Gardez vos cartons neufs en hauteur le temps du traitement.",
  },
  price: {
    paragraphs: [
      <>Un logement se traite à partir de <strong className="whitespace-nowrap text-primary">100 €</strong>. Pour une exploitation ou un magasin, le nombre de locaux décide du prix. Je traverse la limite du département, donc le déplacement compte : il vous est donné par téléphone, et le devis est gratuit.</>,
    ],
    aside: { icon: Route, title: "Plusieurs demandes au même endroit ?", text: "Voisins, locataires, collègues : prévenez-moi, je peux vous voir dans la même journée si les horaires s'accordent." },
  },
  local: [
    {
      kind: "cards",
      target: true,
      title: "Vignerons, cavistes, épiciers : qu'est-ce qui attire les rongeurs ?",
      intro: "Le liquide est à l'abri dans le verre. Le reste, beaucoup moins.",
      items: [
        { icon: Boxes, title: "Cartons et coiffes", text: "un carton plat est un nid prêt à l'emploi, et un lot souillé ne se vend plus." },
        { icon: Wrench, title: "Câbles et automates", text: "pressoir, groupe de froid, chaîne d'habillage : une morsure arrête tout." },
        { icon: Grape, title: "Marcs et bourbes", text: "pendant la vendange, l'odeur porte loin et les bacs restent ouverts." },
        { icon: ShoppingBag, title: "Le coin dégustation", text: "gressins, fromage et biscuits font rester ceux qui ne faisaient que passer." },
      ],
    },
    {
      kind: "levels",
      title: "Quand s'en occuper dans l'année viticole ?",
      intro: "Les rongeurs ne prennent pas de vacances. Votre travail, lui, a des moments plus favorables.",
      items: [
        { title: "Avant vendange", text: "Contrôle du vendangeoir, des logements et des abords. Les bâtiments vides sont faciles à inspecter." },
        { title: "Pendant", text: "On ne pose rien près de la récolte. Poubelles fermées, sols lavés chaque soir." },
        { title: "Juste après", text: "Nettoyage des bacs et relevé des postes : c'est le moment où ils cherchent de nouvelles ressources." },
        { title: "Le reste du temps", text: "Une visite programmée au stock et à l'habillage, au rythme que l'on décide ensemble." },
      ],
    },
  ],
  call: {
    title: "Des cartons grignotés, des souris au cellier ?",
    text: "Expliquez-moi l'usage du local : on n'intervient pas de la même façon dans une cave privée et dans un stock.",
    contactLabel: "Demander un devis",
  },
  faq: [
    { question: "Quel est le prix de base à Bar-sur-Aube ?", answer: "100 € pour une habitation, hors déplacement communiqué à l'appel. Le devis gratuit tient compte des caves, des étages et du nombre de contrôles." },
    { question: "Vous êtes en Haute-Marne : venez-vous vraiment dans l'Aube ?", answer: "Oui, Bar-sur-Aube est à une quarantaine de kilomètres de ma base. Je fixe avec vous le jour de la pose et celui du contrôle." },
    { question: "Peut-on utiliser des appâts dans une cave à vin ?", answer: "Je privilégie les pièges à l'intérieur et les postes fermés à l'extérieur. Rien n'est posé sur les bouteilles, les fûts ou les emballages." },
    { question: "Mon cellier communique avec celui du voisin, comment faire ?", answer: "Repérez la jonction sans la déboucher. Si le voisin est d'accord, on traite de chaque côté puis on ferme, par exemple avec une grille fine qui laisse passer l'air." },
    { question: "Les vendangeurs logés chez moi ont vu une souris, est-ce urgent ?", answer: "Appelez rapidement. En attendant, fermez la nourriture dans des boîtes, sortez les poubelles le soir et gardez les sacs de couchage en hauteur." },
    { question: "Quelles communes autour de Bar-sur-Aube ?", answer: "Proverville, Fontaine, Ailleville, Voigny, Arrentières, Couvignon, Baroville, Bayel, Jaucourt, Arsonval, Colombé-le-Sec, Lignol-le-Château et Rouvres-les-Vignes. Le bon réflexe : 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Les deux départements se touchent : voici les pages les plus proches de chez vous.",
    links: [
      { label: "Dératisation Châteauvillain", to: "/deratisation-chateauvillain" },
      { label: "Dératisation Chaumont", to: "/deratisation-chaumont" },
      { label: "Dératisation Troyes", to: "/deratisation-troyes" },
    ],
    also: "À Bar-sur-Aube, on m'appelle également pour :",
    note: (
      <>
        La page principale explique les espèces et la méthode :{" "}
        <Link to="/deratisation" className={textLink}>notre service contre les rats et souris</Link>.
      </>
    ),
  },
};

const DeratisationBarSurAube = () => <RodentTownPage town={town} />;

export default DeratisationBarSurAube;
