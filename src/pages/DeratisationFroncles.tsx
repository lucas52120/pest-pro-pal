import { Link } from "react-router-dom";
import { Anchor, CircleDot, DoorOpen, Droplets, Factory, House, Moon, TrainFront, Trees, Utensils, WalletCards, Wheat } from "lucide-react";
import heroImage from "@/assets/poste-appat-gravier.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  city: "Froncles",
  postalCode: "52320",
  region: "Haute-Marne",
  slug: "/deratisation-froncles",
  title: "Entreprise de dératisation à Froncles (52) | Devis gratuit",
  description:
    "Rats ou souris à Froncles (52320), Buxières ou Provenchères-sur-Marne ? Recherche des accès et traitement adapté. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Sous-sols, buanderies et évacuations",
    text: "Sous-sol, buanderie ou canalisation : je trouve d'où ils viennent avant de poser quoi que ce soit.",
    highlight: "Les canalisations regardées en même temps que la maison",
    signsLabel: "Faire le tour de votre sous-sol en dix minutes",
    image: heroImage,
    imageAlt: "Boîtier noir d'appâtage sur des graviers, contre une façade",
    imageClassName: "max-lg:brightness-50",
  },
  reviews: ["rigny", "jc", "buke"],
  why: {
    title: "Pourquoi les rats et les souris rentrent-ils chez vous ?",
    intro: "Un sous-sol sombre et tiède, une évacuation mal fermée : pour un rat, c'est une entrée de service.",
    items: [
      { icon: CircleDot, title: "Une évacuation ouverte", text: "siphon à sec, regard fendu ou grille absente : il remonte par là." },
      { icon: Utensils, title: "Des réserves au sous-sol", text: "pommes de terre, conserves ouvertes, sacs pour animaux, bougies." },
      { icon: Moon, title: "Une pièce où l'on va peu", text: "buanderie, chaufferie, vide sanitaire : ils y sont tranquilles." },
      { icon: DoorOpen, title: "Un bas de porte usé", text: "la rampe du garage abîme le joint, surtout dans les coins." },
    ],
  },
  where: {
    intro: "Du canal aux anciens villages, les habitations changent mais les cachettes se répètent.",
    items: [
      { icon: House, title: "Le centre de Froncles", text: "pavillons, maisons jumelées et logements avec cave ou sous-sol." },
      { icon: TrainFront, title: "Le secteur de la gare", text: "maisons proches des voies, jardins en bande, abris alignés." },
      { icon: Factory, title: "Les anciens sites métallurgiques", text: "bâtiments hauts, fosses et galeries techniques qui méritent une vraie inspection." },
      { icon: Anchor, title: "Le canal et la halte fluviale", text: "berges maçonnées et talus, à surveiller en bordure de terrain." },
      { icon: Wheat, title: "Buxières-lès-Froncles", text: "ancien village, granges et maisons de pierre." },
      { icon: Trees, title: "Provenchères-sur-Marne", text: "jardins, vergers et dépendances près de la rivière." },
    ],
  },
  how: {
    title: "Comment se débarrasser des rats et des souris ?",
    intro: "Avant tout, je regarde d'où ils viennent : du réseau, du jardin ou du garage. Ensuite je pose les dispositifs adaptés, et je contrôle.",
    photo: "facade",
    steps: [
      { title: "Près du sous-sol", text: "Un boîtier à côté de la rampe ou du soupirail intercepte ceux qui entrent et sortent." },
      { title: "Un appât au sec", text: "Le boîtier protège les blocs de l'humidité, qui les rendrait moins attirants." },
      { title: "Un bilan à la visite suivante", text: "S'ils reviennent toujours au même endroit, je soupçonne un tuyau à réparer." },
    ],
    after: "Ne mettez rien vous-même dans un regard ou un siphon : le produit partirait dans l'eau.",
  },
  price: {
    paragraphs: [
      <>Le minimum est fixé à <strong className="whitespace-nowrap text-primary">100 €</strong>. J'ajoute au devis ce que le bâtiment réclame : niveaux à traiter, longueur de façade, visites. Le devis ne coûte rien et ne vous oblige à rien.</>,
    ],
    aside: { icon: WalletCards, title: "Ce qui n'est pas compris", text: "La réparation des tuyaux revient à un plombier. Je vous montre où se trouve le défaut pour qu'il aille droit au but." },
  },
  local: [
    {
      kind: "levels",
      target: true,
      title: "Comment vérifier votre sous-sol en dix minutes ?",
      intro: "Une lampe, des gants, un téléphone pour les photos. Suivez le mur dans un seul sens.",
      items: [
        { title: "Minutes 1 à 3", text: "Les évacuations : regards, siphons, pompe de relevage, passages de tuyaux. Un couvercle qui bouge est une porte." },
        { title: "Minutes 4 à 6", text: "Le bas des murs : crottes, sable, petits tas de laine de verre, taches sombres et grasses." },
        { title: "Minutes 7 et 8", text: "Les réserves : pommes de terre, conserves, sacs pour animaux, bougies et savons." },
        { title: "Minutes 9 et 10", text: "L'extérieur : soupiraux, grilles, bas de porte, trous au ras du sol." },
      ],
    },
    {
      kind: "text",
      title: "Rat dans les canalisations : comment en être sûr ?",
      paragraphs: [
        "Des bruits de griffes dans un tuyau, un clapot dans les toilettes, une mauvaise odeur après un orage : ces indices vont dans le même sens.",
        "Si c'est le cas, piéger ne suffira pas. Il faut aussi trouver la casse : un tuyau fendu, un ancien branchement jamais fermé, un regard effondré. Un plombier peut passer une caméra, et je vous dis à quel endroit il doit chercher.",
      ],
      aside: {
        icon: Droplets,
        title: "Le clapet anti-retour",
        text: "Posé sur l'évacuation, il laisse sortir l'eau et bloque l'animal. C'est un travail de plombier, à prévoir une fois la casse réparée.",
      },
    },
  ],
  call: {
    title: "Un bruit dans un tuyau, une odeur à la cave ?",
    text: "Dites-moi quand cela a commencé et s'il a beaucoup plu : c'est une information précieuse.",
    contactLabel: "Être rappelé",
  },
  faq: [
    { question: "Combien coûte le passage d'un dératiseur à Froncles ?", answer: "À partir de 100 €, plus le déplacement que je vous précise au téléphone. Le devis gratuit fixe le total avant l'intervention." },
    { question: "L'eau de Javel dans les toilettes chasse-t-elle les rats ?", answer: "Non. Elle est diluée aussitôt et ne change rien dans le réseau. Elle peut en plus dégager des vapeurs irritantes si on la mélange à un autre produit." },
    { question: "Le rat vient de l'égout public : qui s'en occupe ?", answer: "Le réseau sous la rue relève de la collectivité : prévenez la mairie. La partie qui va de votre maison à la limite du terrain est à votre charge." },
    { question: "Peut-on mettre un appât dans un regard ?", answer: "C'est un cas particulier, qui demande un matériel adapté pour que le produit ne parte pas dans l'eau. Ne le faites pas vous-même." },
    { question: "J'ai une fosse septique, est-ce différent ?", answer: "Un peu. Je vérifie le couvercle, la ventilation et l'arrivée. Un tuyau d'aération sans grille, en toiture ou au sol, est une entrée connue." },
    { question: "Et autour de Froncles ?", answer: "Vouécourt, Vignory, Gudmont-Villiers, Cerisières, Donjeux, Rouvroy-sur-Marne, Doulaincourt-Saucourt, Soncourt-sur-Marne, La Genevroye, Rouécourt : je m'y rends aussi. Un seul numéro, le 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Froncles est à mi-chemin entre Chaumont et Joinville.",
    links: [
      { label: "Dératisation Bologne", to: "/deratisation-bologne" },
      { label: "Dératisation Joinville", to: "/deratisation-joinville" },
      { label: "Dératisation Chaumont", to: "/deratisation-chaumont" },
    ],
    also: "Autres demandes possibles à Froncles :",
    note: (
      <>
        Un tour d'horizon complet vous attend sur la page{" "}
        <Link to="/deratisation" className={textLink}>rongeurs en Haute-Marne : reconnaître et traiter</Link>.
      </>
    ),
  },
};

const DeratisationFroncles = () => <RodentTownPage town={town} />;

export default DeratisationFroncles;
