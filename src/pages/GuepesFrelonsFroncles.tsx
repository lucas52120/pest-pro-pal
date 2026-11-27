import { Link } from "react-router-dom";
import { Anchor, Blinds, Factory, FileText, Home, KeyRound, Sun, TrainFront, Trees, Waves, Wheat, Wind } from "lucide-react";
import heroImage from "@/assets/guepes-nid-bois.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "wasps",
  city: "Froncles",
  postalCode: "52320",
  region: "Haute-Marne",
  slug: "/guepes-frelons-froncles",
  title: "Destruction nid de guêpes et frelons à Froncles (52)",
  description:
    "Des guêpes ou des frelons à Froncles ? On détruit le nid en sécurité, 7j/7. À partir de 80 €, devis gratuit. Appelez le 07 65 25 67 92.",
  hero: {
    eyebrow: "Maisons, jardins et bords de Marne",
    text: "Un nid dans un volet, sous le toit ou au bord du canal ? Je le détruis en sécurité, à mi-chemin entre Chaumont et Joinville.",
    highlight: "Le prix au téléphone, le paiement après",
    signsLabel: "Une maison fermée ou à vendre ? Le tour à faire",
    image: heroImage,
    imageAlt: "Guêpes sur les alvéoles d'un nid posé contre du bois",
    imageClassName: "max-lg:brightness-50",
  },
  reviews: ["genest", "moock", "patricia"],
  why: {
    title: "Pourquoi les guêpes font-elles leur nid chez vous ?",
    intro: "Une reine choisit l'endroit au printemps, seule. Il lui faut un abri sec, calme, pas trop loin de l'eau et de la nourriture.",
    items: [
      { icon: Blinds, title: "Un volet peu utilisé", text: "une chambre d'amis ou une pièce fermée : le caisson reste tranquille des semaines." },
      { icon: Home, title: "Un dessous de toit", text: "rives, gouttières et tuiles décalées ouvrent l'accès aux combles." },
      { icon: Waves, title: "L'eau à proximité", text: "la Marne et le canal leur fournissent de quoi boire et humidifier le nid." },
      { icon: Sun, title: "Un été chaud", text: "plus il fait chaud, plus la colonie grossit vite." },
    ],
  },
  how: {
    title: "Comment se débarrasser d'un nid de guêpes ou de frelons ?",
    intro: "Le nid ne s'arrête pas de grossir avant l'automne. Le plus simple, c'est de le traiter dès qu'on le repère.",
    steps: [
      { title: "Je regarde de loin", text: "Je repère l'entrée et je reconnais l'insecte, sans m'approcher plus qu'il ne faut." },
      { title: "Je traite le nid", text: "Avec ma tenue de protection et un produit professionnel, directement dans le nid, même en hauteur." },
      { title: "Je vous conseille", text: "Quand rouvrir le volet, quand reboucher l'accès, et si le nid doit être retiré." },
    ],
    after: (
      <>
        Quelques guêpes peuvent encore tourner autour du nid le soir même : elles reviennent et sont touchées à leur tour. Plus d'infos sur la page{" "}
        <Link to="/guepes-frelons" className={textLink}>guêpes et frelons en Haute-Marne</Link>.
      </>
    ),
  },
  where: {
    intro: "Entre Froncles et les anciens villages rattachés, voici où je trouve le plus de nids.",
    items: [
      { icon: Home, title: "Le centre de Froncles", text: "pavillons : coffres de volets, gouttières et abris de jardin." },
      { icon: TrainFront, title: "Vers la gare", text: "maisons proches des voies, jardins en bande et cabanons." },
      { icon: Factory, title: "Les anciens sites industriels", text: "bâtiments hauts, poutres métalliques et bardages." },
      { icon: Anchor, title: "Le canal et la halte fluviale", text: "arbres des berges et murets, où nichent guêpes et frelons." },
      { icon: Wheat, title: "Buxières-lès-Froncles", text: "maisons de pierre, granges et vergers." },
      { icon: Trees, title: "Provenchères-sur-Marne", text: "jardins, haies et grands arbres près de la rivière." },
    ],
  },
  price: {
    paragraphs: [
      <>Pour un nid de guêpes, le tarif est de <strong className="whitespace-nowrap text-primary">80 €</strong> minimum. Pour des frelons asiatiques, <strong className="whitespace-nowrap text-primary">110 €</strong> minimum.</>,
      "Le prix monte avec la hauteur et la difficulté d'accès. Le dimanche et les jours fériés, un supplément peut s'ajouter : vous le savez avant de confirmer.",
    ],
    aside: { icon: FileText, title: "Sans engagement", text: "Le prix est donné au téléphone. Vous ne réglez qu'une fois l'intervention terminée." },
  },
  local: [
    {
      kind: "list",
      target: true,
      title: "Une maison fermée ou à vendre : le tour à faire au printemps",
      intro: "Une maison inoccupée est idéale pour une reine : personne n'ouvre les volets, personne ne passe au jardin.",
      items: [
        { text: "Ouvrez et fermez chaque volet roulant : écoutez s'il bourdonne dans le caisson." },
        { text: "Regardez les avant-toits et les gouttières, côté soleil." },
        { text: "Jetez un œil dans l'abri de jardin, au plafond et derrière la porte." },
        { text: "Repérez les trous dans la pelouse avant de tondre pour la première fois." },
      ],
      aside: { icon: KeyRound, title: "Avant une visite", text: "Un nid près de l'entrée fait fuir les acheteurs. Je peux passer avant les visites, si quelqu'un m'ouvre." },
    },
    {
      kind: "text",
      title: "Au bord du canal : les frelons asiatiques",
      paragraphs: [
        "Les berges boisées de la Marne et du canal plaisent au frelon asiatique. Il y chasse les insectes et accroche son nid très haut dans les arbres.",
        "Au printemps, son premier nid est petit et souvent bas, sous un abri ou un rebord. Repéré à ce moment-là, il est bien plus simple à traiter que la grosse boule de l'automne.",
      ],
      aside: { icon: Wind, title: "Sur un terrain public ?", text: "Ne vous en approchez pas et signalez-le à la mairie, qui fera le nécessaire." },
    },
  ],
  call: {
    title: "Un nid de guêpes à Froncles ?",
    text: "Dites-moi où il est et à quelle hauteur : je vous donne une date tout de suite.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "Quel est le prix d'un nid de guêpes à Froncles ?", answer: "80 € minimum pour des guêpes, 110 € minimum pour des frelons asiatiques, selon la hauteur et l'accès. Vous le connaissez avant mon passage, et vous payez après." },
    { question: "Peut-on détruire un nid le soir pour être plus tranquille ?", answer: "J'adapte l'heure à la situation. Le plus important est d'intervenir avec la bonne protection, pas forcément la nuit." },
    { question: "Le frelon asiatique fait-il son nid près des maisons ?", answer: "Au printemps, oui : son premier nid est souvent sous un abri ou un rebord. Ensuite, la colonie déménage souvent plus haut, dans un arbre." },
    { question: "Les guêpes reviennent-elles dans le même volet ?", answer: "Pas dans l'ancien nid. Mais un caisson attirant peut accueillir une nouvelle reine l'année suivante : faites-le vérifier au printemps." },
    { question: "Les pompiers peuvent-ils venir ?", answer: "Non, ils n'interviennent plus pour les nids chez les particuliers en Haute-Marne. Il faut appeler un professionnel." },
    { question: "Intervenez-vous autour de Froncles ?", answer: "Oui : Vouécourt, Vignory, Gudmont-Villiers, Cerisières, Donjeux, Rouvroy-sur-Marne, Doulaincourt-Saucourt et les villages voisins. Appelez le 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Froncles est sur la route de la Marne, entre Chaumont et Joinville.",
    links: [
      { label: "Guêpes et frelons Bologne", to: "/guepes-frelons-bologne" },
      { label: "Guêpes et frelons Joinville", to: "/guepes-frelons-joinville" },
      { label: "Guêpes et frelons Chaumont", to: "/guepes-frelons-chaumont" },
    ],
    also: "Autres demandes possibles à Froncles :",
    note: (
      <>
        Les espèces et la saison des nids sur la page{" "}
        <Link to="/guepes-frelons" className={textLink}>guêpes et frelons</Link>.
      </>
    ),
  },
};

const GuepesFrelonsFroncles = () => <RodentTownPage town={town} />;

export default GuepesFrelonsFroncles;
