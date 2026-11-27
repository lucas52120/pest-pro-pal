import { Link } from "react-router-dom";
import { Castle, Church, Droplets, FileText, Flame, Flower2, Home, Leaf, Tent, TreePine, Trees } from "lucide-react";
import heroImage from "@/assets/frelon-hero.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "wasps",
  city: "Arc-en-Barrois",
  postalCode: "52210",
  region: "Haute-Marne",
  slug: "/guepes-frelons-arc-en-barrois",
  title: "Destruction nid de guêpes et frelons à Arc-en-Barrois (52)",
  description:
    "Guêpes ou frelons à Arc-en-Barrois ? Ne montez pas sur l'échelle, appelez un pro : à partir de 80 €, devis gratuit, 7j/7 au 07 65 25 67 92.",
  hero: {
    eyebrow: "Maisons en forêt, gîtes et chalets",
    text: "Un nid sous le toit du gîte ou dans un arbre du jardin ? Ne montez pas sur l'échelle : je m'en occupe.",
    highlight: "Le prix au téléphone, le paiement après",
    signsLabel: "Un chalet fermé tout l'hiver ? Le tour à faire",
    image: heroImage,
    imageAlt: "Frelon européen en gros plan",
    imageClassName: "max-lg:brightness-75",
  },
  reviews: ["buke", "moock", "petitfourt"],
  why: {
    title: "Pourquoi les guêpes et les frelons s'installent-ils chez vous ?",
    intro: "En plein Parc national de forêts, les frelons et les guêpes sont chez eux. Votre maison leur offre simplement un abri de plus.",
    items: [
      { icon: TreePine, title: "La forêt toute proche", text: "troncs creux, souches et lisières : le frelon européen y vit naturellement." },
      { icon: Tent, title: "Les chalets fermés", text: "une cabane ou un gîte vide au printemps laisse le nid démarrer tranquillement." },
      { icon: Flame, title: "Le bois de chauffage", text: "un tas de bûches contre le mur est un abri pour les guêpes qui nichent bas." },
      { icon: Flower2, title: "Les jardins fleuris", text: "fleurs, fruits et insectes nourrissent les colonies tout l'été." },
    ],
  },
  how: {
    title: "Comment se débarrasser d'un nid de guêpes ou de frelons en sécurité ?",
    intro: "Je ne monte pas sur une échelle face au nid : la perche et la protection permettent de traiter à distance, sans risque de chute.",
    steps: [
      { title: "Je reconnais l'insecte", text: "Guêpe, frelon européen ou frelon asiatique : la méthode et les précautions changent." },
      { title: "Je traite à distance", text: "Perche jusqu'à 8 mètres et produit professionnel : le nid est atteint sans approcher." },
      { title: "Je vous dis la suite", text: "Quand reprendre les activités autour, et si le nid doit être retiré." },
    ],
    after: (
      <>
        Un nid loin des maisons et des chemins, en pleine forêt, n'a pas besoin d'être détruit. Plus d'infos sur la page{" "}
        <Link to="/guepes-frelons" className={textLink}>guêpes et frelons en Haute-Marne</Link>.
      </>
    ),
  },
  where: {
    intro: "Du bourg à la lisière de la forêt, voici où je trouve le plus de nids.",
    items: [
      { icon: Church, title: "Le bourg, près de l'église Saint-Martin", text: "toits en pierre, génoises et volets battants." },
      { icon: Home, title: "Autour de la Maison Renaissance", text: "maisons serrées, greniers et cheminées anciennes." },
      { icon: Castle, title: "Le château et son parc", text: "grands arbres, communs et dépendances." },
      { icon: Droplets, title: "Les bords de l'Aujon", text: "saules et jardins humides, terrain du frelon asiatique." },
      { icon: TreePine, title: "La lisière de la forêt domaniale", text: "chalets, bûchers et troncs creux." },
      { icon: Trees, title: "Cour-l'Évêque, Giey, Aubepierre", text: "villages de vallée, granges et vergers." },
    ],
  },
  price: {
    paragraphs: [
      <>La destruction d'un nid de guêpes commence à <strong className="whitespace-nowrap text-primary">80 €</strong>, celle d'un nid de frelons asiatiques à <strong className="whitespace-nowrap text-primary">110 €</strong>.</>,
      "La hauteur et l'accès font varier le prix, surtout pour un nid en haut d'un arbre. Un supplément est possible le dimanche et les jours fériés, toujours précisé avant.",
    ],
    aside: { icon: FileText, title: "Gîte ou résidence secondaire", text: "Je peux intervenir en votre absence si quelqu'un m'ouvre. Le prix est fixé avant." },
  },
  local: [
    {
      kind: "list",
      target: true,
      title: "Un chalet ou un gîte fermé tout l'hiver : le tour à faire",
      intro: "Au printemps, la reine cherche un abri calme. Un bâtiment vide est parfait pour elle.",
      items: [
        { text: "Ouvrez les volets un à un, doucement, et écoutez s'il y a un bourdonnement." },
        { text: "Regardez sous l'avant-toit, autour des aérations et sous la terrasse." },
        { text: "Vérifiez le tas de bois, l'abri et la cabane de jardin." },
        { text: "Repérez un va-et-vient régulier : c'est le signe d'un nid tout proche." },
      ],
      aside: { icon: Leaf, title: "Avant vos premiers hôtes", text: "Un petit nid repéré en mai se traite vite. Mieux vaut le faire avant l'arrivée des vacanciers." },
    },
    {
      kind: "text",
      title: "En forêt : laisser vivre ou faire détruire ?",
      paragraphs: [
        "Les guêpes et les frelons ont leur place dans la forêt : ils mangent beaucoup d'autres insectes. Un nid loin de toute habitation et de tout chemin peut être laissé tranquille.",
        "En revanche, un nid près d'une maison, d'une aire de jeux, d'un sentier ou d'une ruche mérite d'être traité. Pour le frelon asiatique, le mieux est de le signaler à la mairie dans tous les cas.",
      ],
    },
  ],
  call: {
    title: "Un nid à Arc-en-Barrois ?",
    text: "Dites-moi s'il est sur la maison ou dans un arbre : je vous donne une date.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "Quel est le prix d'un nid de guêpes à Arc-en-Barrois ?", answer: "À partir de 80 € pour des guêpes, et de 110 € pour des frelons asiatiques. Le montant dépend de la hauteur, il est fixé avant l'intervention et réglé après." },
    { question: "Peut-on détruire un nid dans le Parc national ?", answer: "Sur votre propriété, oui, quand il présente un risque. Un nid isolé en pleine forêt, loin des passages, peut être laissé." },
    { question: "Un nid dans le tas de bois, que faire ?", answer: "Ne prenez plus de bûches de ce côté et éloignez les enfants. Le nid se traite sur place, puis vous pourrez reprendre le bois." },
    { question: "Les frelons européens sont-ils agressifs ?", answer: "Pas loin de leur nid. Ils deviennent dangereux si on s'approche trop ou si l'on secoue l'endroit où ils vivent." },
    { question: "Pouvez-vous intervenir quand je ne suis pas là ?", answer: "Oui, si le nid est accessible de l'extérieur ou si quelqu'un peut m'ouvrir. Je vous appelle après pour vous dire comment ça s'est passé." },
    { question: "Quels villages autour d'Arc-en-Barrois ?", answer: "Cour-l'Évêque, Coupray, Aubepierre-sur-Aube, Dancevoir, Giey-sur-Aujon, Saint-Loup-sur-Aujon, Bugnières, Richebourg, Leffonds et Ternat. Composez le 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Arc-en-Barrois se trouve entre Chaumont, Langres et Châteauvillain.",
    links: [
      { label: "Guêpes et frelons Châteauvillain", to: "/guepes-frelons-chateauvillain" },
      { label: "Guêpes et frelons Semoutiers-Montsaon", to: "/guepes-frelons-semoutiers-montsaon" },
      { label: "Guêpes et frelons Langres", to: "/guepes-frelons-langres" },
    ],
    also: "Pour d'autres animaux à Arc-en-Barrois :",
    note: (
      <>
        La saison des nids et les espèces sont expliquées sur la page{" "}
        <Link to="/guepes-frelons" className={textLink}>destruction de nids en Haute-Marne</Link>.
      </>
    ),
  },
};

const GuepesFrelonsArcEnBarrois = () => <RodentTownPage town={town} />;

export default GuepesFrelonsArcEnBarrois;
