import { Link } from "react-router-dom";
import { Building2, Car, DoorOpen, Droplets, Factory, House, MessageSquare, ShoppingBasket } from "lucide-react";
import heroImage from "@/assets/poste-appat-gravier.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  city: "Saint-Dizier",
  postalCode: "52100",
  region: "Haute-Marne",
  slug: "/deratisation-saint-dizier",
  title: "Entreprise de dératisation à Saint-Dizier (52)",
  description:
    "Rats ou souris à Saint-Dizier (52100), au Vert-Bois, à La Noue ou Marnaval ? Traitement adapté à votre logement ou local. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Maisons, appartements et commerces",
    text: "Maison, appartement ou commerce : je trouve leur passage, je traite et je reviens à date fixée.",
    highlight: "Une date de contrôle prévue dès le départ",
    signsLabel: "Déjà un traitement en cours ? Voir ce qu'il faut faire ou éviter",
    image: heroImage,
    imageAlt: "Poste d'appâtage fermé posé sur du gravier, le long d'un mur",
    imageClassName: "max-lg:brightness-50",
  },
  reviews: ["rigny", "duverne", "buke"],
  why: {
    title: "Pourquoi les rats et les souris s'installent-ils chez vous ?",
    intro: "Un logement bien tenu peut en avoir : il suffit d'un repas, d'un coin calme et d'un chemin pour y venir.",
    items: [
      { icon: ShoppingBasket, title: "De quoi manger", text: "poubelles, croquettes, réserve d'un commerce ou restes au pied de l'immeuble." },
      { icon: Building2, title: "Un autre logement", text: "gaines, caves et faux plafonds relient les appartements entre eux." },
      { icon: Car, title: "Un garage ouvert", text: "une porte laissée levée, ou un joint usé en bas, et ils sont dedans." },
      { icon: Droplets, title: "Une évacuation cassée", text: "un tuyau abandonné ou un regard fendu ouvre un chemin depuis le réseau." },
    ],
  },
  where: {
    intro: "Appartement, pavillon, atelier ou commerce : quatre situations, et des cachettes différentes.",
    items: [
      { icon: Building2, title: "Un appartement au Vert-Bois", text: "Les souris suivent les tuyaux de chauffage et d'eau d'un logement à l'autre. Je contrôle derrière les meubles de cuisine, la baignoire et les gaines, puis je vous dis s'il faut aussi traiter les voisins ou les caves." },
      { icon: House, title: "Une maison à La Noue ou à Gigny", text: "Garage, buanderie et abri de jardin sont les premières portes d'entrée. Je vérifie les bas de porte, les aérations et les évacuations, et je place les dispositifs à l'extérieur quand c'est possible." },
      { icon: Factory, title: "Un bien à Marnaval ou au Clos-Mortier", text: "Grands terrains, vieux bâtiments et stockage offrent de bons abris aux rats. Je fais le tour complet des abords pour repérer les terriers et les passages avant d'entrer dans les locaux." },
      { icon: ShoppingBasket, title: "Un commerce du centre-ville", text: "Cartons, livraisons et poubelles du soir attirent les rongeurs jusque dans la réserve. Je passe quand vous êtes fermé si possible, et je vous indique où stocker et quoi surveiller." },
    ],
  },
  how: {
    title: "Comment se débarrasser des rats et des souris ?",
    intro: "On ne gagne rien à poser au hasard. Je cherche leur passage, j'installe ce qu'il faut et je reviens à la date fixée ensemble.",
    photo: "facade",
    steps: [
      { title: "Un poste le long du mur", text: "Derrière un garage, près d'un local poubelles ou au pied d'un immeuble." },
      { title: "Un appât verrouillé", text: "Dans une cour partagée, c'est essentiel : ni enfant ni chien ne peut l'attraper." },
      { title: "Un contrôle daté", text: "Généralement 10 à 15 jours après la pose, je regarde ce qui a été mangé." },
    ],
    after: "Une gardienne ou un gardien d'immeuble peut me signaler un poste abîmé : un simple message suffit.",
  },
  price: {
    paragraphs: [
      <>La dératisation débute à <strong className="whitespace-nowrap text-primary">100 €</strong>. Je tiens compte du type de bien, de l'activité des rongeurs et des visites à prévoir. Vous recevez un montant clair, sans engagement, avant toute pose.</>,
    ],
    aside: { icon: Car, title: "Et le déplacement ?", text: "Il vous est annoncé au téléphone, avant que je prenne la route. Pas de surprise sur la facture." },
  },
  local: [
    {
      kind: "dos",
      target: true,
      title: "Que faire pendant une dératisation, et que faut-il éviter ?",
      intro: "Un traitement se joue aussi entre mes visites. Ces quelques habitudes font gagner du temps.",
      yes: [
        { text: "Laisser les pièges et les boîtiers exactement où ils sont." },
        { text: "Noter les jours où vous entendez encore du bruit." },
        { text: "Fermer les poubelles et ramasser les croquettes le soir." },
        { text: "M'appeler si un animal capturé doit être retiré." },
      ],
      no: [
        { text: "Ajouter du poison du commerce à côté de mes dispositifs." },
        { text: "Nettoyer au jet ou déplacer des meubles près des passages repérés." },
        { text: "Boucher un trou sans me prévenir." },
        { text: "Croire que c'est fini dès le premier soir calme." },
      ],
    },
    {
      kind: "cards",
      columns: "lg:grid-cols-3",
      title: "Des souris dans l'immeuble : comment s'organiser ?",
      intro: "Bailleurs, syndics, gardiens : quand plusieurs logements sont touchés, la méthode compte autant que le produit.",
      items: [
        { icon: MessageSquare, title: "Faire remonter l'information", text: "un mot à chaque palier permet de savoir quels logements entendent ou voient quelque chose." },
        { icon: DoorOpen, title: "Ouvrir les bons locaux", text: "caves, gaines, local poubelles et chaufferie doivent être accessibles le même jour." },
        { icon: Building2, title: "Traiter ensemble", text: "un seul passage organisé vaut mieux que cinq interventions chacun de son côté." },
      ],
    },
    {
      kind: "text",
      title: "Marne, canal et réseaux : surveiller l'eau",
      paragraphs: [
        "Saint-Dizier est traversée par la Marne et par le canal entre Champagne et Bourgogne. Habiter près de l'eau ne veut pas dire avoir des rats, mais le rat brun y trouve des berges pour creuser.",
        "Chez vous, regardez surtout les regards cassés, les grilles descellées et les évacuations qui ne servent plus. Ce sont des défauts simples à corriger, et souvent la vraie cause du problème.",
      ],
      aside: {
        icon: Droplets,
        title: "Un rat dans les toilettes ?",
        text: "C'est rare, mais possible : il remonte par la canalisation. Fermez l'abattant, posez un poids dessus, fermez la porte et appelez. Il faudra ensuite faire contrôler l'évacuation.",
      },
    },
  ],
  call: {
    title: "Un rat dehors, une souris dans la cuisine ?",
    text: "Dites-moi ce que vous savez, même si ce n'est qu'un bruit. On fixe une date pour Saint-Dizier.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "À combien revient une dératisation à Saint-Dizier ?", answer: "Elle commence à 100 €. Pour un logement, c'est surtout l'étendue du problème qui fait varier le prix ; pour un local ou un immeuble, la surface et le nombre de dispositifs. Le coût du déplacement est dit dès le premier appel et le devis ne vous engage à rien." },
    { question: "Vous venez de loin, pouvez-vous assurer le suivi ?", answer: "Oui. Je suis basé près de Chaumont et je travaille dans tout le département. La date du contrôle est fixée à l'avance, généralement 10 à 15 jours après la pose, pour que vous sachiez quand je reviens." },
    { question: "Mon logement est géré par un bailleur : puis-je vous appeler directement ?", answer: "Vous pouvez m'appeler pour un conseil, mais prévenez d'abord votre bailleur : c'est lui qui donne accès aux parties communes et qui peut prendre l'intervention en charge selon la situation. Je peux ensuite lui adresser un devis." },
    { question: "Il y a eu de fortes pluies et je vois des rats, est-ce lié ?", answer: "Cela arrive. Quand l'eau monte dans les réseaux ou sur les berges de la Marne, des rats peuvent chercher un endroit sec. Vérifiez vos regards, vos grilles et votre sous-sol, et surveillez si les traces continuent une fois l'eau redescendue." },
    { question: "Comment savoir si c'est une souris ou un jeune rat ?", answer: "Le jeune rat a une grosse tête et de grands pieds par rapport à son corps, avec une queue épaisse. La souris adulte est fine, avec de grandes oreilles. Une photo, même floue, m'aide à vous répondre." },
    { question: "Pouvez-vous intervenir dans un garage ou un box fermé ?", answer: "Oui, si vous pouvez m'ouvrir et dégager le bas des murs. Les box en rangée se touchent souvent : demandez à vos voisins s'ils ont, eux aussi, remarqué des traces." },
    { question: "Quelles communes couvrez-vous autour de Saint-Dizier ?", answer: "Bettancourt-la-Ferrée, Chancenay, Villiers-en-Lieu, Valcourt, Moëslains, Humbécourt, Éclaron, Roches-sur-Marne, Eurville-Bienville, et les autres villages du nord de la Haute-Marne. Un doute ? Appelez le 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Basé aux portes de Chaumont, je me déplace jusqu'au Perthois et au pays du Der haut-marnais.",
    links: [
      { label: "Dératisation Wassy", to: "/deratisation-wassy" },
      { label: "Dératisation Joinville", to: "/deratisation-joinville" },
      { label: "Dératisation Montier-en-Der", to: "/deratisation-montier-en-der" },
      { label: "Dératisation Chaumont", to: "/deratisation-chaumont" },
    ],
    also: "À Saint-Dizier, je m'occupe aussi d'autres nuisibles :",
    note: (
      <>
        Pour tout savoir sur les rongeurs et les méthodes, consultez la page{" "}
        <Link to="/deratisation" className={textLink}>dératiseur en Haute-Marne</Link>.
      </>
    ),
  },
};

const DeratisationSaintDizier = () => <RodentTownPage town={town} />;

export default DeratisationSaintDizier;
