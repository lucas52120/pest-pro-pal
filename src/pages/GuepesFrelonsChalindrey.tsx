import { Link } from "react-router-dom";
import { Blinds, Building2, Car, FileText, Fence, Home, Package, Sun, TrainFront, Trees, Warehouse, Wrench } from "lucide-react";
import heroImage from "@/assets/frelon-hero.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "wasps",
  city: "Chalindrey",
  postalCode: "52600",
  region: "Haute-Marne",
  slug: "/guepes-frelons-chalindrey",
  title: "Destruction nid de guêpes et frelons à Chalindrey (52)",
  description:
    "Guêpes ou frelons à Chalindrey ? Un appel, un prix clair avant d'intervenir : à partir de 80 €, devis gratuit, 7j/7. Appelez le 07 65 25 67 92.",
  hero: {
    eyebrow: "Maisons, garages et dépôts",
    text: "Un nid dans le garage, un volet ou sous le toit ? Un appel, un prix clair, et je viens le détruire.",
    highlight: "Un prix clair dès l'appel",
    signsLabel: "Un nid dans le garage ? Les précautions",
    image: heroImage,
    imageAlt: "Gros plan sur la tête d'un frelon européen",
    imageClassName: "max-lg:brightness-75",
  },
  reviews: ["patricia", "buke", "petitfourt"],
  why: {
    title: "Pourquoi y a-t-il un nid de guêpes chez vous ?",
    intro: "Une maison mitoyenne avec garage et jardin à l'arrière offre plusieurs abris. La reine n'en a besoin que d'un.",
    items: [
      { icon: Car, title: "Un garage entrouvert", text: "la porte reste levée l'été, et les poutres du plafond sont tranquilles." },
      { icon: Blinds, title: "Un volet roulant", text: "le caisson est un abri sec, à l'abri du vent et de la pluie." },
      { icon: Package, title: "Un débarras", text: "cartons, pots et vieux meubles stockés dans un abri qu'on ouvre rarement." },
      { icon: Sun, title: "Un mur exposé", text: "façades plein sud et toits chauds font démarrer la colonie plus tôt." },
    ],
  },
  how: {
    title: "Comment se débarrasser d'un nid de guêpes ou de frelons ?",
    intro: "Que le nid soit dans le garage ou en haut d'un arbre, la règle est la même : on traite la colonie, pas seulement les insectes qui volent.",
    steps: [
      { title: "Je prépare au téléphone", text: "Vous me décrivez l'endroit, je vous donne le prix et une date." },
      { title: "Je traite sur place", text: "En tenue de protection, j'applique le produit professionnel au cœur du nid, à la perche si besoin." },
      { title: "Je vous laisse tranquille", text: "Avec des consignes claires : quand rouvrir le garage, quand remonter le volet." },
    ],
    after: (
      <>
        Si votre voiture dort dans le garage, sortez-la avant mon passage si vous le pouvez, sans vous approcher du nid. En savoir plus :{" "}
        <Link to="/guepes-frelons" className={textLink}>guêpes et frelons en Haute-Marne</Link>.
      </>
    ),
  },
  where: {
    intro: "Du quartier de la gare aux écarts, voici où je trouve le plus de nids.",
    items: [
      { icon: TrainFront, title: "Le quartier de la gare", text: "maisons proches des voies, entrepôts et bâtiments techniques." },
      { icon: Warehouse, title: "Près de la rotonde", text: "grands volumes et charpentes hautes." },
      { icon: Building2, title: "La mairie et la rue de Langres", text: "maisons accolées : génoises, volets et cours." },
      { icon: Home, title: "L'avenue Gambetta", text: "pavillons : garages, abris et dessous de terrasses." },
      { icon: Fence, title: "Les écarts", text: "maisons isolées, haies et vergers." },
      { icon: Trees, title: "Culmont, Torcenay, Le Pailly", text: "villages voisins, granges et grands arbres." },
    ],
  },
  price: {
    paragraphs: [
      <>Le prix de départ est de <strong className="whitespace-nowrap text-primary">80 €</strong> pour un nid de guêpes et de <strong className="whitespace-nowrap text-primary">110 €</strong> pour un nid de frelons asiatiques.</>,
      "La hauteur et l'accès font bouger le montant. Si l'intervention a lieu un dimanche ou un jour férié, un supplément est possible, toujours précisé avant.",
    ],
    aside: { icon: FileText, title: "Devis gratuit", text: "Souvent donné dès votre appel. Vous payez une fois le nid traité." },
  },
  local: [
    {
      kind: "list",
      target: true,
      title: "Un nid dans le garage : comment faire ?",
      intro: "Le garage est l'un des endroits les plus fréquents, et les plus gênants : on y passe tous les jours.",
      items: [
        { title: "Laissez la porte comme elle est", text: "la fermer brusquement ou la secouer peut énerver la colonie." },
        { title: "Passez par une autre entrée", text: "et prévenez toute la famille de ne pas y aller." },
        { title: "Ne vaporisez rien", text: "une bombe dans un local fermé disperse les guêpes partout." },
        { title: "Notez où est le nid", text: "poutre, angle, étagère : cela m'aide à préparer l'intervention." },
      ],
      aside: { icon: Wrench, title: "Un atelier ou un dépôt ?", text: "Je peux passer avant ou après vos horaires, pour ne pas arrêter le travail." },
    },
    {
      kind: "text",
      title: "Nid chez le voisin, guêpes chez vous : que faire ?",
      paragraphs: [
        "Dans une rangée de maisons, le nid peut être sous le toit du voisin et les guêpes tourner dans votre cour. Parlez-en simplement : c'est souvent lui qui ne l'a pas remarqué.",
        "Je ne peux traiter un nid que sur le terrain dont le propriétaire est d'accord. Si les deux maisons sont concernées, on peut s'organiser le même jour.",
      ],
    },
  ],
  call: {
    title: "Un nid de guêpes à Chalindrey ?",
    text: "Dites-moi où il est : je vous donne le prix et une date dès l'appel.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "Quel tarif pour un nid de guêpes à Chalindrey ?", answer: "À partir de 80 € pour un nid de guêpes et de 110 € pour un nid de frelons asiatiques. Le prix dépend de la hauteur et de l'accès, et il est annoncé avant l'intervention." },
    { question: "Un nid dans un caisson de volet, faut-il le démonter ?", answer: "Non. Le traitement se fait par l'ouverture du caisson. Ne remontez pas le volet en attendant." },
    { question: "Puis-je utiliser mon garage pendant le traitement ?", answer: "Non, gardez-le fermé le temps que je vous indique. Ensuite, vous pourrez le réutiliser normalement." },
    { question: "Les guêpes sont-elles plus agressives en fin d'été ?", answer: "Oui. En août et septembre, les colonies sont nombreuses et les guêpes cherchent du sucre : elles s'approchent davantage des gens." },
    { question: "Mon voisin a un nid, que puis-je faire ?", answer: "En parler avec lui. Je n'interviens que sur un terrain dont le propriétaire est d'accord, mais on peut traiter les deux maisons le même jour." },
    { question: "Intervenez-vous autour de Chalindrey ?", answer: "Oui : Culmont, Torcenay, Le Pailly, Noidant-Chatenoy, Violot, Les Loges, Chaudenay, Heuilley-le-Grand et le reste du secteur. Joignable au 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Je circule sur tout le plateau de Langres.",
    links: [
      { label: "Guêpes et frelons Langres", to: "/guepes-frelons-langres" },
      { label: "Guêpes et frelons Bourbonne-les-Bains", to: "/guepes-frelons-bourbonne-les-bains" },
      { label: "Guêpes et frelons Nogent", to: "/guepes-frelons-nogent" },
    ],
    also: "Pour votre maison de Chalindrey :",
    note: (
      <>
        Reconnaître les espèces et comprendre les risques :{" "}
        <Link to="/guepes-frelons" className={textLink}>tout sur les guêpes et les frelons</Link>.
      </>
    ),
  },
};

const GuepesFrelonsChalindrey = () => <RodentTownPage town={town} />;

export default GuepesFrelonsChalindrey;
