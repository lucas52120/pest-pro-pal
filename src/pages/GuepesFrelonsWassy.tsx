import { Link } from "react-router-dom";
import { Apple, Church, Dog, Droplets, Egg, Factory, FileText, Hammer, Home, Trees, Warehouse, Wheat } from "lucide-react";
import heroImage from "@/assets/service-guepes.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "wasps",
  city: "Wassy",
  postalCode: "52130",
  region: "Haute-Marne",
  slug: "/guepes-frelons-wassy",
  title: "Destruction nid de guêpes et frelons à Wassy (52)",
  description:
    "Guêpes ou frelons à Wassy ? Ne laissez pas le nid grossir : destruction à partir de 80 €, devis gratuit, 7j/7. Appelez le 07 65 25 67 92.",
  hero: {
    eyebrow: "Maison, jardin, poulailler",
    text: "Un nid près du poulailler, dans l'abri à bois ou sous le toit ? Ne le laissez pas grossir : je viens le traiter.",
    highlight: "Vos animaux pris en compte",
    signsLabel: "Un nid dans la pelouse ? Attention à la tondeuse",
    image: heroImage,
    imageAlt: "Guêpes sur un nid accroché à une branche",
    imageClassName: "max-lg:brightness-75",
  },
  reviews: ["babinski", "genest", "petitfourt"],
  why: {
    title: "Pourquoi les guêpes s'installent-elles près de chez vous ?",
    intro: "Au jardin, tout leur plaît : de quoi construire, de quoi manger et des coins où personne ne passe.",
    items: [
      { icon: Hammer, title: "Le tas de bois", text: "les vieilles bûches et les piquets fournissent la fibre du nid, et parfois l'abri lui-même." },
      { icon: Apple, title: "Les fruits tombés", text: "prunes, poires et pommes au sol attirent les guêpes en fin d'été." },
      { icon: Egg, title: "Le poulailler", text: "la nourriture des poules et les insectes autour en font un garde-manger." },
      { icon: Trees, title: "Un talus ou une haie", text: "un vieux terrier de rongeur devient vite un nid de guêpes dans le sol." },
    ],
  },
  how: {
    title: "Comment se débarrasser d'un nid de guêpes ou de frelons ?",
    intro: "Le plus tôt est le mieux : un nid de printemps se traite en quelques minutes, un nid de fin d'été compte des milliers d'insectes.",
    steps: [
      { title: "Je repère le nid", text: "Arbre, sol, abri, toit : je trouve l'entrée sans vous demander de vous approcher." },
      { title: "J'éloigne vos animaux", text: "Chiens, chats et poules sont mis à l'écart avant que je traite le nid avec un produit professionnel." },
      { title: "Je vous dis quand revenir", text: "Combien de temps garder les animaux à distance, et que faire du nid ensuite." },
    ],
    after: (
      <>
        Dans un sol ou une haie, attendez mon feu vert avant de tondre ou de tailler à côté. Toutes les infos sur la page{" "}
        <Link to="/guepes-frelons" className={textLink}>destruction de nids en Haute-Marne</Link>.
      </>
    ),
  },
  where: {
    intro: "Du centre aux bords de la Blaise, voici où les nids apparaissent le plus souvent.",
    items: [
      { icon: Church, title: "Le centre ancien", text: "près de l'église Notre-Dame : greniers, génoises et volets battants." },
      { icon: Droplets, title: "Le long de la Blaise", text: "saules et frênes des berges, où le frelon asiatique accroche son nid." },
      { icon: Home, title: "Les quartiers pavillonnaires", text: "coffres de volets roulants, abris et dessous de terrasses." },
      { icon: Factory, title: "Les anciens ateliers", text: "grands volumes, charpentes métalliques et poutres hautes." },
      { icon: Wheat, title: "Brousseval, Attancourt, Montreuil-sur-Blaise", text: "fermes, granges et vergers des villages voisins." },
      { icon: Warehouse, title: "Les dépendances", text: "remises, bûchers et poulaillers au fond des jardins." },
    ],
  },
  price: {
    paragraphs: [
      <>Un nid de guêpes coûte <strong className="whitespace-nowrap text-primary">80 € minimum</strong>, un nid de frelons asiatiques <strong className="whitespace-nowrap text-primary">110 € minimum</strong>.</>,
      "Le prix dépend de l'espèce et de l'endroit : un nid au sol est plus simple qu'un nid en haut d'un arbre. Le dimanche et les jours fériés, un supplément peut s'ajouter, toujours annoncé.",
    ],
    aside: { icon: FileText, title: "Pas de surprise", text: "Je vous donne le prix avant de venir, et vous payez une fois le nid traité." },
  },
  local: [
    {
      kind: "list",
      target: true,
      title: "Un nid dans la pelouse : attention à la tondeuse",
      intro: "Les guêpes qui nichent dans le sol sont les plus traîtres : on les découvre en passant dessus.",
      items: [
        { title: "Le signe", text: "un petit trou dans l'herbe ou un talus, avec des guêpes qui entrent et sortent à ras du sol." },
        { title: "Le danger", text: "les vibrations de la tondeuse ou du rotofil déclenchent une sortie en masse." },
        { title: "Le bon geste", text: "balisez l'endroit avec un piquet, et faites un détour en tondant." },
        { title: "À éviter", text: "verser de l'eau, de l'essence ou boucher le trou : dangereux et rarement efficace." },
      ],
      aside: { icon: Dog, title: "Votre chien gratte le sol ?", text: "Rentrez-le jusqu'au traitement : un chien qui fouille un nid de guêpes peut être piqué de nombreuses fois." },
    },
    {
      kind: "text",
      title: "Poulailler, ruches, potager : la vie à la campagne",
      paragraphs: [
        "Un nid près du poulailler n'est pas dangereux pour les poules tant qu'il reste tranquille. Mais l'endroit où vous passez chaque jour pour les nourrir doit rester sûr.",
        "Si vous avez des abeilles, surveillez les frelons qui volent sur place devant les ruches : c'est le signe d'un nid de frelons asiatiques dans le secteur. Signalez-le à la mairie, puis appelez-moi.",
      ],
    },
  ],
  call: {
    title: "Un nid de guêpes à Wassy ?",
    text: "Dites-moi où il est et quels animaux vivent chez vous : je vous propose une date.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "Combien coûte la destruction d'un nid à Wassy ?", answer: "À partir de 80 € pour des guêpes, et de 110 € pour des frelons asiatiques. Le montant est fixé avant ma venue, et réglé après l'intervention." },
    { question: "Le produit est-il dangereux pour mes poules ou mon chien ?", answer: "Il est appliqué dans le nid, pas autour. Gardez simplement vos animaux à l'écart le temps que je vous indique, et ne les laissez pas fouiller le nid ensuite." },
    { question: "Un nid dans le sol peut-il être traité ?", answer: "Oui, par le trou d'entrée. C'est même un nid qu'il vaut mieux faire traiter vite, car on peut marcher dessus sans le voir." },
    { question: "Faut-il attendre le soir pour l'intervention ?", answer: "Pas forcément. J'adapte l'heure à l'emplacement du nid et à votre emploi du temps." },
    { question: "Les guêpes vont-elles revenir l'an prochain ?", answer: "L'ancien nid reste vide. Mais un endroit attirant peut accueillir une nouvelle reine : surveillez-le au printemps suivant." },
    { question: "Intervenez-vous autour de Wassy ?", answer: "Oui : Brousseval, Vaux-sur-Blaise, Montreuil-sur-Blaise, Attancourt, Louvemont, Voillecomte, Bailly-aux-Forges, Magneux et les villages voisins. Appelez le 07 65 25 67 92, 7j/7." },
  ],
  nearby: {
    intro: "Je me déplace dans tout le nord de la Haute-Marne.",
    links: [
      { label: "Guêpes et frelons Saint-Dizier", to: "/guepes-frelons-saint-dizier" },
      { label: "Guêpes et frelons Montier-en-Der", to: "/guepes-frelons-montier-en-der" },
      { label: "Guêpes et frelons Joinville", to: "/guepes-frelons-joinville" },
    ],
    also: "Autres services à Wassy :",
    note: (
      <>
        Reconnaître les espèces et choisir le bon moment :{" "}
        <Link to="/guepes-frelons" className={textLink}>guêpes et frelons en Haute-Marne</Link>.
      </>
    ),
  },
};

const GuepesFrelonsWassy = () => <RodentTownPage town={town} />;

export default GuepesFrelonsWassy;
