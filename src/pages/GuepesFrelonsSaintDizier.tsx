import { Link } from "react-router-dom";
import { Blinds, Building2, CookingPot, Droplets, FileText, Home, Landmark, Sun, TrainFront, Trash2, Trees, Users } from "lucide-react";
import heroImage from "@/assets/service-guepes.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "wasps",
  city: "Saint-Dizier",
  postalCode: "52100",
  region: "Haute-Marne",
  slug: "/guepes-frelons-saint-dizier",
  title: "Destruction nid de guêpes et frelons à Saint-Dizier (52)",
  description:
    "Des guêpes ou des frelons gâchent vos repas dehors à Saint-Dizier ? On s'en occupe 7j/7, à partir de 80 €. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Maisons, balcons et immeubles",
    text: "Des guêpes qui gâchent vos repas dehors ? Je trouve le nid et je le détruis, même en hauteur.",
    highlight: "Intervention possible en immeuble",
    signsLabel: "Un nid sur un balcon ? Que faire en immeuble",
    image: heroImage,
    imageAlt: "Guêpes sur un nid suspendu à une branche",
    imageClassName: "max-lg:brightness-75",
  },
  reviews: ["babinski", "genest", "patricia"],
  why: {
    title: "Pourquoi y a-t-il des guêpes autour de chez vous ?",
    intro: "Quand elles tournent autour de la table, c'est qu'un nid n'est pas loin. Elles cherchent à manger, et elles ont trouvé où vivre.",
    items: [
      { icon: CookingPot, title: "Les repas en extérieur", text: "jus de fruits, viande, desserts : en août, elles sont attirées par tout ce qui est sucré ou carné." },
      { icon: Trash2, title: "Les poubelles", text: "un bac mal fermé près de la terrasse devient leur cantine." },
      { icon: Blinds, title: "Un volet ou une aération", text: "un caisson de volet roulant ou une grille d'aération ouverte suffit à abriter un nid." },
      { icon: Sun, title: "Un mur au soleil", text: "façades chaudes et toits exposés plein sud accélèrent la croissance de la colonie." },
    ],
  },
  how: {
    title: "Comment détruire un nid de guêpes efficacement ?",
    intro: "Le piège à guêpes du jardin attrape les ouvrières, pas la reine. Pour arrêter le va-et-vient, il faut traiter le nid lui-même.",
    steps: [
      { title: "Je localise le nid", text: "Je suis le trajet des guêpes depuis votre terrasse jusqu'à leur entrée : souvent plus près qu'on ne croit." },
      { title: "Je le neutralise", text: "Équipé, j'applique un produit professionnel dans le nid, depuis le sol ou un balcon grâce à la perche." },
      { title: "Je sécurise les lieux", text: "Je vous dis combien de temps éviter la zone et quoi faire du nid ensuite." },
    ],
    after: (
      <>
        Évitez les pièges à base de sucre près de la maison pendant l'été : ils attirent plus de guêpes qu'ils n'en capturent. En savoir plus :{" "}
        <Link to="/guepes-frelons" className={textLink}>guêpes et frelons, la méthode</Link>.
      </>
    ),
  },
  where: {
    intro: "Grand ensemble, maison de quartier ou bord de Marne : voici où je trouve les nids le plus souvent.",
    items: [
      { icon: Building2, title: "Le Vert-Bois", text: "balcons, coffres de volets roulants et bouches de ventilation des immeubles." },
      { icon: Landmark, title: "Le centre-ville", text: "toits anciens et corniches autour de l'église Notre-Dame." },
      { icon: Home, title: "La Noue et Gigny", text: "maisons avec jardin : abris, haies, pelouses et dessous de terrasses." },
      { icon: Trees, title: "Marnaval", text: "grands terrains et arbres où le frelon asiatique accroche son nid en hauteur." },
      { icon: Droplets, title: "Le long de la Marne et du canal", text: "berges boisées, saules et peupliers." },
      { icon: TrainFront, title: "Vers la gare", text: "bâtiments anciens, auvents et entrepôts." },
    ],
  },
  price: {
    paragraphs: [
      <>Le prix part de <strong className="whitespace-nowrap text-primary">80 €</strong> pour les guêpes et de <strong className="whitespace-nowrap text-primary">110 €</strong> pour les frelons asiatiques.</>,
      "Un nid au 4e étage ou en haut d'un peuplier n'a pas le même coût qu'un nid dans une haie. Un supplément peut s'appliquer le dimanche ou un jour férié : vous le savez au téléphone.",
    ],
    aside: { icon: FileText, title: "Devis gratuit", text: "Le prix est fixé avant que je me déplace. Vous payez seulement une fois le nid traité." },
  },
  local: [
    {
      kind: "cards",
      target: true,
      columns: "lg:grid-cols-3",
      title: "Un nid sur un balcon : comment faire en immeuble ?",
      intro: "En immeuble, un nid concerne souvent plusieurs logements. Quelques étapes simples évitent les mauvaises surprises.",
      items: [
        { icon: Users, title: "Prévenez les voisins", text: "ceux du dessus et du dessous, qui voient peut-être l'entrée du nid mieux que vous." },
        { icon: Building2, title: "Avertissez le bailleur ou le syndic", text: "si le nid est dans une façade, une toiture ou une partie commune, c'est à eux d'organiser l'intervention." },
        { icon: Blinds, title: "Fermez fenêtres et volets", text: "sans toucher au caisson s'il est habité, et gardez les enfants à l'intérieur." },
      ],
      after: "Je peux intervenir depuis votre balcon avec la perche, sans nacelle, dans la plupart des cas.",
    },
    {
      kind: "levels",
      title: "La saison des nids, mois par mois",
      intro: "Savoir où en est la colonie aide à agir au bon moment.",
      items: [
        { title: "Avril et mai", text: "La reine construit seule un petit nid, de la taille d'une balle de ping-pong. C'est le moment le plus simple pour agir." },
        { title: "Juin et juillet", text: "Les ouvrières se multiplient. Le nid grossit chaque semaine." },
        { title: "Août et septembre", text: "Pic d'activité : les guêpes sont nombreuses et plus nerveuses autour des repas." },
        { title: "Octobre et novembre", text: "La colonie s'éteint avec le froid. Le frelon asiatique reste actif plus longtemps." },
      ],
    },
  ],
  call: {
    title: "Un nid de guêpes à Saint-Dizier ?",
    text: "Maison ou appartement, dites-moi où il est : je vous propose une date tout de suite.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "Quel tarif pour un nid de guêpes à Saint-Dizier ?", answer: "Il commence à 80 € pour un nid de guêpes et à 110 € pour un nid de frelons asiatiques, selon la hauteur et l'accès. Le montant est connu avant l'intervention, et réglé après." },
    { question: "Le nid est dans la façade de l'immeuble, qui s'en occupe ?", answer: "Une façade ou une toiture fait en général partie des parties communes : prévenez le bailleur ou le syndic. Je peux leur adresser un devis directement." },
    { question: "Les pièges à guêpes suffisent-ils ?", answer: "Non. Ils capturent quelques ouvrières, mais la reine continue de pondre au nid. Ils peuvent même attirer davantage de guêpes près de la maison." },
    { question: "Peut-on rester chez soi pendant l'intervention ?", answer: "Oui, en gardant portes et fenêtres fermées du côté du nid. Je vous dis quand vous pouvez ressortir sur le balcon ou dans le jardin." },
    { question: "Les pompiers peuvent-ils intervenir ?", answer: "Non, plus pour les nids chez les particuliers en Haute-Marne. Le 18 et le 15 restent à appeler si quelqu'un fait un malaise après une piqûre." },
    { question: "Venez-vous autour de Saint-Dizier ?", answer: "Oui : Bettancourt-la-Ferrée, Chancenay, Valcourt, Hallignicourt, Perthes, Eurville-Bienville, Chamouilley, Roches-sur-Marne et les autres villages du nord haut-marnais. Appelez le 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Basé aux portes de Chaumont, je me déplace dans tout le nord de la Haute-Marne.",
    links: [
      { label: "Guêpes et frelons Wassy", to: "/guepes-frelons-wassy" },
      { label: "Guêpes et frelons Joinville", to: "/guepes-frelons-joinville" },
      { label: "Guêpes et frelons Montier-en-Der", to: "/guepes-frelons-montier-en-der" },
    ],
    also: "À Saint-Dizier, je traite aussi :",
    note: (
      <>
        Pour reconnaître les espèces et comprendre les risques, lisez la page{" "}
        <Link to="/guepes-frelons" className={textLink}>nids de guêpes et de frelons</Link>.
      </>
    ),
  },
};

const GuepesFrelonsSaintDizier = () => <RodentTownPage town={town} />;

export default GuepesFrelonsSaintDizier;
