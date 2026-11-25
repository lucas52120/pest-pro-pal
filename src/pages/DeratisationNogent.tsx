import { Link } from "react-router-dom";
import { Church, DoorOpen, Factory, House, Landmark, Moon, Mountain, Receipt, Tractor, Truck, Utensils } from "lucide-react";
import heroImage from "@/assets/poste-appat-facade.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  city: "Nogent",
  postalCode: "52800",
  region: "Haute-Marne",
  slug: "/deratisation-nogent",
  title: "Entreprise de dératisation à Nogent (52) | Devis gratuit",
  description:
    "Rats ou souris à Nogent (52800), Nogent-le-Haut ou Nogent-le-Bas ? Particuliers et professionnels : traitement adapté. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Maisons, ateliers et commerces",
    text: "À la maison ou à l'atelier, je cherche par où passent les rongeurs, je traite et je repasse.",
    highlight: "Passage possible hors production pour les ateliers",
    signsLabel: "Rat ou souris ? Comparer les traces",
    image: heroImage,
    imageAlt: "Boîtier d'appâtage noir placé au pied d'un mur clair",
    imageClassName: "max-lg:brightness-75",
  },
  reviews: ["yerli", "jc", "genest"],
  why: {
    title: "Pourquoi les rats et les souris s'installent-ils chez vous ?",
    intro: "Maison ou atelier, propre ou en désordre : un rongeur reste là où il a un repas, un abri et un passage.",
    items: [
      { icon: Utensils, title: "De quoi se nourrir", text: "croquettes, pommes stockées, mangeoire à oiseaux ou coin café de l'atelier." },
      { icon: Moon, title: "Un endroit sans bruit", text: "une remise oubliée, un double plafond, l'arrière d'un vieux meuble." },
      { icon: DoorOpen, title: "Une entrée mal fermée", text: "porte de garage, gaine mal rebouchée, grille de cave descellée." },
      { icon: Mountain, title: "Un sous-sol ouvert d'un côté", text: "sur un terrain en pente, la façade basse leur donne un accès direct." },
    ],
  },
  where: {
    intro: "Entre le plateau et la vallée de la Traire, les bâtiments ne se ressemblent pas. Voici les endroits que j'inspecte d'abord.",
    items: [
      { icon: Landmark, title: "Nogent-le-Haut", text: "le centre autour de la place Charles-de-Gaulle : commerces, logements à l'étage, arrière-cours étroites." },
      { icon: Church, title: "Nogent-le-Bas", text: "vers l'église Saint-Germain et la Traire : caves, murs de soutènement et petits jardins en pente." },
      { icon: Factory, title: "La zone industrielle", text: "ateliers, dépôts et bureaux, avec de longues façades à contrôler une par une." },
      { icon: House, title: "Les lotissements", text: "garages accolés, coffres de volets, abris de jardin et bacs à compost." },
      { icon: Tractor, title: "Odival, Donnemarie, Essey-les-Eaux", text: "granges, anciennes étables et réserves de bois dans les villages rattachés à Nogent." },
      { icon: Truck, title: "Les bords de route", text: "garages, entrepôts et points de vente où les livraisons se succèdent." },
    ],
  },
  how: {
    title: "Comment se débarrasser des rats et des souris efficacement ?",
    intro: "Je repère leur trajet, j'y place le bon dispositif, puis je reviens voir. Pour les rats, je me sers surtout de boîtiers fermés ; pour quelques souris, des pièges peuvent suffire.",
    photo: "mur",
    steps: [
      { title: "Un boîtier contre le mur", text: "Les rats longent les parois. Je place donc le poste sur leur route, jamais au milieu d'une cour." },
      { title: "Un appât qui reste dedans", text: "Les blocs sont fixés à l'intérieur : rien ne traîne dans l'atelier ni dans le jardin." },
      { title: "Une visite de contrôle", text: "Je regarde ce qui a été mangé, poste par poste, et je change ce qui doit l'être." },
    ],
    after: "Ne déplacez pas un boîtier, même pour nettoyer : prévenez-moi, je viens le remettre au bon endroit.",
  },
  price: {
    paragraphs: [
      <>Le premier prix est de <strong className="whitespace-nowrap text-primary">100 €</strong>. Pour un pavillon, le nombre de pièces touchées fait surtout la différence. Pour un atelier, c'est la longueur des murs à protéger et le rythme des contrôles.</>,
      "Je ne chiffre pas à l'aveugle : je viens voir, je vous explique, et vous décidez.",
    ],
    aside: { icon: Receipt, title: "Le déplacement", text: "Je vous en donne le montant au téléphone, dès que je connais votre adresse." },
  },
  local: [
    {
      kind: "compare",
      target: true,
      title: "Rat ou souris : comment faire la différence ?",
      intro: "Pas besoin de voir l'animal. Ses traces suffisent le plus souvent.",
      heads: ["Plutôt une souris", "Plutôt un rat"],
      rows: [
        { label: "Les crottes", left: "De la taille d'un grain de riz, éparpillées un peu partout.", right: "De 1 à 2 cm, plus épaisses, souvent regroupées." },
        { label: "Le trou", left: "Aussi petit qu'un crayon. On passe dix fois devant sans le voir.", right: "Le diamètre d'une pièce de 2 € au moins, avec des bords gras ou usés." },
        { label: "Le bruit", left: "Grattements fins dans une cloison ou sous l'évier.", right: "Pas plus lourds, chocs, rongement bien net." },
        { label: "Les dégâts", left: "Paquets de pâtes, papier, isolant réduit en miettes.", right: "Bois, plastique, tuyaux, parfois gros trous dans la terre dehors." },
      ],
      after: "Un doute ? Envoyez une photo par SMS ou WhatsApp au 07 65 25 67 92, avec une pièce de monnaie à côté pour donner l'échelle.",
    },
    {
      kind: "levels",
      title: "Des rongeurs dans un atelier ou une usine : où regarder ?",
      intro: "Nogent vit de la coutellerie et de la mécanique. Dans ces locaux, la nourriture est rare, mais les cachettes ne manquent pas.",
      items: [
        { title: "Les quais", text: "Portes levées toute la journée, brosses usées, palettes et cartons qui arrivent de l'extérieur." },
        { title: "Le stock", text: "Les rayonnages du fond, là où les emballages dorment longtemps et où personne ne balaie." },
        { title: "La salle de pause", text: "Miettes, distributeur, casiers et poubelle du soir : le vrai garde-manger du bâtiment." },
        { title: "Les armoires électriques", text: "De la chaleur et des câbles à ronger : une panne peut commencer là." },
      ],
      after: (
        <>
          Pour un suivi régulier avec relevé des passages, voyez comment fonctionne la{" "}
          <Link to="/deratisation" className={textLink}>dératisation des locaux professionnels</Link>.
        </>
      ),
    },
  ],
  call: {
    title: "Une crotte, un bruit, un carton percé ?",
    text: "Un appel de cinq minutes permet déjà de savoir si cela presse ou non.",
    contactLabel: "Demander un devis",
  },
  faq: [
    { question: "Quel prix pour une dératisation à Nogent ?", answer: "À partir de 100 €. Le devis est gratuit et tient compte du bâtiment, du type de rongeur et du nombre de visites. Vous avez le montant avant que je pose le premier dispositif." },
    { question: "Pouvez-vous venir pendant que l'atelier tourne ?", answer: "C'est possible pour l'inspection. Pour la pose, on choisit ensemble un moment calme : tôt le matin, en fin de journée ou pendant une coupure. Les dispositifs sont placés hors des zones de passage." },
    { question: "Faut-il prévenir les salariés ?", answer: "Oui, simplement. Je vous indique où se trouvent les postes pour que personne ne les déplace ou ne les ouvre par curiosité." },
    { question: "Les ultrasons marchent-ils contre les souris ?", answer: "Je n'y compte pas. Les rongeurs s'habituent vite à un bruit et il suffit d'un meuble pour l'arrêter. Mieux vaut trouver le passage et le fermer une fois le problème réglé." },
    { question: "J'ai attrapé deux souris, est-ce terminé ?", answer: "Peut-être, mais pas sûr. Laissez les pièges une dizaine de jours et regardez si de nouvelles crottes apparaissent. Si oui, il en reste." },
    { question: "Dans quels villages venez-vous autour de Nogent ?", answer: "Mandres-la-Côte, Lanques-sur-Rognon, Sarcey, Poinson-lès-Nogent, Is-en-Bassigny, Vitry-lès-Nogent, Ageville, Poulangy, Thivet, Biesles et les autres communes du secteur. Appelez le 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Nogent est entre Chaumont et Langres : c'est un secteur où je passe facilement.",
    links: [
      { label: "Dératisation Chaumont", to: "/deratisation-chaumont" },
      { label: "Dératisation Langres", to: "/deratisation-langres" },
      { label: "Dératisation Bourbonne-les-Bains", to: "/deratisation-bourbonne-les-bains" },
    ],
    also: "Un autre visiteur vous embête à Nogent ?",
    note: (
      <>
        Envie d'en savoir plus sur leur mode de vie ? Tout est expliqué sur notre page{" "}
        <Link to="/deratisation" className={textLink}>rats et souris en Haute-Marne</Link>.
      </>
    ),
  },
};

const DeratisationNogent = () => <RodentTownPage town={town} />;

export default DeratisationNogent;
