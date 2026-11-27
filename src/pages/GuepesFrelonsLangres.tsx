import { Link } from "react-router-dom";
import { BedDouble, BrickWall, Castle, Church, FileText, Flame, Home, Landmark, Trees, Waves, Wind, Wine } from "lucide-react";
import heroImage from "@/assets/guepes-nid-bois.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "wasps",
  city: "Langres",
  postalCode: "52200",
  region: "Haute-Marne",
  slug: "/guepes-frelons-langres",
  title: "Destruction nid de guêpes et frelons à Langres (52)",
  description:
    "Guêpes ou frelons à Langres ? Ne risquez pas la piqûre, on détruit le nid pour vous, 7j/7. À partir de 80 €, devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Vieille ville, remparts et villages",
    text: "Dans un mur épais, une cheminée ou sous un toit haut : je traite le nid sans que vous preniez de risque.",
    highlight: "Matériel adapté aux toits hauts",
    signsLabel: "Un nid dans un mur ou une cheminée ? Ce qu'il faut savoir",
    image: heroImage,
    imageAlt: "Guêpes sur un nid ouvert aux alvéoles visibles, contre une planche",
    imageClassName: "max-lg:brightness-50",
  },
  reviews: ["genest", "patricia", "petitfourt"],
  why: {
    title: "Pourquoi les guêpes s'installent-elles chez vous ?",
    intro: "Les vieilles maisons ont des milliers de petits creux. Pour une reine qui cherche un abri au printemps, c'est l'embarras du choix.",
    items: [
      { icon: BrickWall, title: "Des joints creusés", text: "entre deux pierres, un trou de quelques millimètres mène à un vide où le nid grossit à l'abri." },
      { icon: Flame, title: "Une cheminée inutilisée", text: "un conduit fermé en bas mais ouvert en haut est un refuge sec et tranquille." },
      { icon: Home, title: "Des combles peu visités", text: "greniers et charpentes anciennes, où l'on ne monte qu'une fois par an." },
      { icon: Wine, title: "Des terrasses gourmandes", text: "verres sucrés et assiettes en fin d'été : les guêpes suivent l'odeur jusqu'au nid voisin." },
    ],
  },
  how: {
    title: "Comment se débarrasser d'un nid de guêpes ou de frelons ?",
    intro: "Dans une maison de pierre, le nid est souvent invisible : on n'en voit que l'entrée. Le traitement passe par là, sans démonter le mur.",
    steps: [
      { title: "Je suis le va-et-vient", text: "Joint, fissure, tuile ou bouche d'aération : l'entrée me dit où se trouve le nid, même derrière la pierre." },
      { title: "Je traite par l'entrée", text: "Un produit professionnel glissé dans le passage atteint la colonie sans casser votre mur." },
      { title: "Je vous dis quand reboucher", text: "Une fois l'activité terminée, et seulement là, vous pourrez fermer le trou." },
    ],
    after: (
      <>
        Ne bouchez jamais l'entrée avant le traitement : les guêpes chercheraient une autre sortie, parfois vers l'intérieur. Méthodes détaillées sur la page{" "}
        <Link to="/guepes-frelons" className={textLink}>destruction de nids en Haute-Marne</Link>.
      </>
    ),
  },
  where: {
    intro: "Entre les remparts et les quartiers plus récents, les nids ne se cachent pas aux mêmes endroits.",
    items: [
      { icon: Castle, title: "Dans les remparts", text: "maisons hautes autour de la place Diderot : nids dans les joints, sous les tuiles et dans les combles." },
      { icon: Church, title: "Vers la cathédrale Saint-Mammès", text: "corniches, avancées de toit et cheminées anciennes." },
      { icon: Landmark, title: "La Citadelle et Saint-Gilles", text: "immeubles : balcons, coffres de volets et bouches d'aération." },
      { icon: Home, title: "Les Franchises et Les Fourches", text: "pavillons : abris de jardin, haies et pelouses." },
      { icon: Waves, title: "Corlée et le lac de la Liez", text: "maisons de bord de lac et arbres où le frelon asiatique s'installe." },
      { icon: Trees, title: "Les villages du Pays de Langres", text: "granges, hangars et vergers des communes voisines." },
    ],
  },
  price: {
    paragraphs: [
      <>Comptez <strong className="whitespace-nowrap text-primary">à partir de 80 €</strong> pour des guêpes, et <strong className="whitespace-nowrap text-primary">à partir de 110 €</strong> pour des frelons asiatiques.</>,
      "Un nid sous un toit de trois étages ou dans une cheminée demande plus de matériel qu'un nid au ras du sol. Si l'intervention tombe un dimanche ou un jour férié, un supplément peut s'appliquer, toujours annoncé avant.",
    ],
    aside: { icon: FileText, title: "Vous savez avant", text: "Le montant est fixé avant ma venue, la plupart du temps au téléphone. Le paiement se fait après." },
  },
  local: [
    {
      kind: "list",
      target: true,
      title: "Un nid dans un mur ou une cheminée : que faire ?",
      intro: "C'est fréquent dans les maisons anciennes de Langres, et souvent impressionnant. Voici les bons réflexes.",
      items: [
        { title: "Repérez le trou d'entrée", text: "de loin, sans vous mettre dans l'axe des allers-retours." },
        { title: "Fermez la pièce", text: "si vous entendez bourdonner derrière une cloison ou dans le conduit, gardez la porte close." },
        { title: "N'allumez pas de feu", text: "dans une cheminée habitée, la fumée affole la colonie et peut l'envoyer dans la maison." },
        { title: "Ne percez pas", text: "un trou dans le mur ou le plafond libérerait les guêpes dans la pièce." },
      ],
      aside: {
        icon: Wind,
        title: "Après le traitement",
        text: "Attendez que plus rien ne bouge pendant quelques jours avant de reboucher. Le vieux nid, lui, ne sera pas réoccupé.",
      },
    },
    {
      kind: "text",
      title: "Gîtes, restaurants, chambres d'hôtes : ne pas gâcher la saison",
      paragraphs: [
        "Un nid au-dessus d'une terrasse ou d'une fenêtre de chambre, et ce sont des clients qui se plaignent. Je passe tôt le matin ou entre deux arrivées, et je délimite la zone le temps du traitement.",
        "Jetez un œil aux avant-toits dès le mois de mai : un nid de la taille d'une orange se traite vite et facilement, bien avant les grosses chaleurs.",
      ],
      aside: { icon: BedDouble, title: "Un client a été piqué ?", text: "En cas de gonflement du visage, de gêne pour respirer ou de malaise, appelez le 15 sans attendre." },
    },
  ],
  call: {
    title: "Un nid de guêpes à Langres ?",
    text: "Dites-moi où vous voyez le va-et-vient : je vous donne une date dès l'appel.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "Combien coûte la destruction d'un nid à Langres ?", answer: "80 € au minimum pour des guêpes, 110 € pour des frelons asiatiques. Le prix tient compte de la hauteur et de l'accès, et il est fixé avant l'intervention. Vous payez après." },
    { question: "Peut-on traiter un nid caché dans un mur en pierre ?", answer: "Oui, en passant par l'entrée que les guêpes utilisent. Pas besoin de démonter le mur : le produit atteint la colonie par ce passage." },
    { question: "Un nid dans la cheminée est-il dangereux ?", answer: "Il peut l'être si les guêpes trouvent un chemin vers la pièce. N'allumez pas de feu, fermez le trappon si vous en avez un, et faites traiter le nid." },
    { question: "Qui appeler pour un nid de guêpes à Langres ?", answer: "Une entreprise certifiée pour les produits professionnels. Les pompiers ne se déplacent plus pour les nids chez les particuliers en Haute-Marne." },
    { question: "Les guêpes reviendront-elles au même endroit ?", answer: "Pas dans l'ancien nid. Mais l'endroit reste attirant : une nouvelle reine peut s'installer à côté au printemps suivant. Faites reboucher les trous une fois l'activité terminée." },
    { question: "Intervenez-vous autour de Langres ?", answer: "Oui : Saints-Geosmes, Humes-Jorquenay, Peigney, Champigny-lès-Langres, Rolampont, Chalindrey et les autres villages du Pays de Langres. Appelez le 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Basé aux portes de Chaumont, j'interviens dans tout le sud de la Haute-Marne.",
    links: [
      { label: "Guêpes et frelons Chalindrey", to: "/guepes-frelons-chalindrey" },
      { label: "Guêpes et frelons Nogent", to: "/guepes-frelons-nogent" },
      { label: "Guêpes et frelons Bourbonne-les-Bains", to: "/guepes-frelons-bourbonne-les-bains" },
      { label: "Guêpes et frelons Chaumont", to: "/guepes-frelons-chaumont" },
    ],
    also: "À Langres, je m'occupe aussi de :",
    note: (
      <>
        Tout sur les espèces et la saison des nids :{" "}
        <Link to="/guepes-frelons" className={textLink}>guêpes et frelons en Haute-Marne</Link>.
      </>
    ),
  },
};

const GuepesFrelonsLangres = () => <RodentTownPage town={town} />;

export default GuepesFrelonsLangres;
