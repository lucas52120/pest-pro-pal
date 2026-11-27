import { Link } from "react-router-dom";
import {
  Apple,
  Blinds,
  Bug,
  Fence,
  FileText,
  Flower2,
  House,
  Leaf,
  Stethoscope,
  Sun,
  TreeDeciduous,
  Warehouse,
} from "lucide-react";
import heroImage from "@/assets/service-guepes.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "wasps",
  city: "Semoutiers-Montsaon",
  postalCode: "52000",
  region: "Haute-Marne",
  slug: "/guepes-frelons-semoutiers-montsaon",
  title: "Nid de guêpes et frelons à Semoutiers-Montsaon (52)",
  description:
    "Guêpes ou frelons à Semoutiers-Montsaon ? Votre voisin s'en occupe : on est sur place, 7j/7, à partir de 80 €. Appelez le 07 65 25 67 92.",
  hero: {
    eyebrow: "Votre voisin à Montsaon",
    text: "Je suis installé à Montsaon : nid sous le toit, dans la grange ou dans une haie, j'ai peu de route pour venir.",
    highlight: "Paiement après l'intervention",
    signsLabel: "Guêpe ou frelon asiatique ? Les reconnaître",
    image: heroImage,
    imageAlt: "Guêpes sur un nid accroché à une branche",
    imageClassName: "max-lg:brightness-75",
  },
  reviews: ["genest", "babinski", "buke"],
  why: {
    title: "Pourquoi les guêpes font-elles leur nid chez vous ?",
    intro: "Au printemps, chaque reine cherche un endroit sec, abrité et tranquille. Une maison de village ou une grange en offre beaucoup.",
    items: [
      { icon: House, title: "Un abri au sec", text: "sous les tuiles, dans un coffre de volet ou sous une avancée de toit." },
      { icon: Warehouse, title: "Un endroit calme", text: "grange, hangar, appentis ou grenier où personne ne passe pendant des semaines." },
      { icon: TreeDeciduous, title: "Du bois à mâcher", text: "vieux bardages, piquets et poutres : elles en font la pâte de leur nid." },
      { icon: Apple, title: "De quoi se nourrir", text: "fruits tombés, poubelles, insectes du jardin et, pour le frelon asiatique, les abeilles." },
    ],
  },
  how: {
    title: "Comment se débarrasser d'un nid de guêpes ou de frelons ?",
    intro: "Il ne suffit pas de tuer les insectes que l'on voit : il faut atteindre le nid lui-même, là où se trouvent la reine et les larves.",
    steps: [
      { title: "Je repère l'entrée du nid", text: "De loin, j'observe le va-et-vient pour savoir où il se trouve et quel insecte l'a construit." },
      { title: "Je traite le nid", text: "En combinaison, avec une perche qui monte à 8 mètres, je dépose un produit professionnel au cœur du nid, même sous un faîtage." },
      { title: "Je vous laisse les consignes", text: "Quand l'activité cesse, quand vous pouvez approcher, et quoi faire du nid ensuite." },
    ],
    after: (
      <>
        Le soir même, vous verrez encore quelques guêpes tourner : ce sont celles qui étaient dehors, elles rentrent au nid et sont touchées à leur tour. Tout est détaillé sur la page{" "}
        <Link to="/guepes-frelons" className={textLink}>guêpes et frelons en Haute-Marne</Link>.
      </>
    ),
  },
  where: {
    intro: "Entre les deux villages, les maisons, les fermes et les jardins, voici les endroits où je trouve le plus souvent des nids.",
    items: [
      { icon: House, title: "Sous la toiture", text: "des allers-retours réguliers entre deux tuiles ou au ras de la gouttière." },
      { icon: Blinds, title: "Derrière un volet roulant", text: "un bourdonnement dans le caisson, et des guêpes dès qu'on remonte le tablier." },
      { icon: Warehouse, title: "Granges et hangars", text: "une boule de papier pendue à la charpente, que l'on remarque souvent au moment des foins." },
      { icon: Fence, title: "Dans les murets et les haies", text: "un nid au ras du sol, que l'on dérange en taillant ou en débroussaillant." },
      { icon: Leaf, title: "Dans la pelouse", text: "un trou d'où sortent des guêpes : attention à la tondeuse." },
      { icon: TreeDeciduous, title: "En haut des arbres", text: "une grosse boule grise, souvent repérée à l'automne quand les feuilles tombent : c'est souvent le frelon asiatique." },
    ],
  },
  price: {
    paragraphs: [
      <>Comptez <strong className="whitespace-nowrap text-primary">80 € minimum</strong> pour des guêpes et <strong className="whitespace-nowrap text-primary">110 € minimum</strong> pour des frelons asiatiques.</>,
      "Ce qui fait varier le montant : l'espèce, la hauteur et la facilité d'accès. Le dimanche et les jours fériés, une majoration est possible, et vous la connaissez avant de dire oui.",
    ],
    aside: { icon: FileText, title: "Le prix avant, le paiement après", text: "Vous connaissez le prix avant que je vienne, souvent dès le téléphone. Vous payez une fois l'intervention faite." },
  },
  local: [
    {
      kind: "cards",
      target: true,
      title: "Comment savoir si c'est une guêpe ou un frelon ?",
      intro: "Regardez de loin, sans vous approcher. La couleur et la taille donnent déjà une bonne idée.",
      items: [
        { icon: Bug, title: "La guêpe", text: "1 à 2 cm, jaune vif et noire. Nid gris en papier, sous un toit, dans un mur ou dans le sol." },
        { icon: Flower2, title: "La guêpe poliste", text: "silhouette élancée, pattes qui pendent quand elle vole. Son petit nid laisse voir ses cellules, accroché sous un rebord." },
        { icon: Sun, title: "Le frelon européen", text: "2,5 à 3,5 cm, roux, noir et jaune. Nid dans un arbre creux, un grenier ou une grange." },
        { icon: TreeDeciduous, title: "Le frelon asiatique", text: "presque noir, tête orange, extrémité des pattes jaune. Son nid finit souvent tout en haut d'un grand arbre." },
      ],
      after: "Prenez une photo de loin et envoyez-la au 07 65 25 67 92 : je vous dis de quel insecte il s'agit et combien ça coûtera.",
    },
    {
      kind: "list",
      title: "En attendant mon passage : les bons réflexes",
      intro: "Un nid n'est pas dangereux tant qu'on ne le dérange pas. Quelques précautions suffisent.",
      items: [
        { title: "Gardez vos distances", text: "enfants, chiens et chats restent loin, et l'on évite de passer dans l'axe du trou d'entrée." },
        { title: "Laissez le trou ouvert", text: "en le colmatant, vous risquez de les voir ressortir par le plafond ou une prise." },
        { title: "Coupez les moteurs", text: "le bruit et les vibrations d'une tondeuse ou d'un tracteur les rendent agressives." },
        { title: "Pas de bombe ni de feu", text: "sur un gros nid, une bombe du commerce suffit rarement, et le feu peut tout embraser dans une grange." },
      ],
      aside: {
        icon: Stethoscope,
        title: "Quelqu'un est allergique ?",
        text: "Dites-le-moi dès l'appel, l'intervention passe en priorité. Si une piqûre provoque un gonflement du visage, une difficulté à respirer ou un malaise : le 15, tout de suite.",
      },
    },
    {
      kind: "text",
      title: "Ferme, rucher, grange : à la campagne",
      paragraphs: [
        "Dans une grange ou un hangar, un nid peut grossir tout l'été sans que personne ne le voie, jusqu'au jour où l'on déplace le foin ou le matériel. Jetez un œil aux poutres et aux coins sombres dès le printemps : un petit nid se traite bien plus simplement.",
        "Vous avez des ruches ? Le frelon asiatique se poste devant pour capturer les abeilles au vol. Si vous en voyez voler en stationnaire devant le rucher, son nid n'est sans doute pas loin : signalez-le à la mairie, puis appelez-moi.",
      ],
    },
  ],
  call: {
    title: "Un nid à Semoutiers ou à Montsaon ?",
    text: "Dites-moi où il est et à quelle hauteur : je suis à côté, je vous donne une date tout de suite.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "Quel est le tarif pour enlever un nid de guêpes à Semoutiers-Montsaon ?", answer: "80 € minimum pour des guêpes, 110 € minimum pour des frelons asiatiques, selon la hauteur et l'accès. Je vous donne le montant avant de venir, et vous réglez une fois le travail fait." },
    { question: "Les pompiers peuvent-ils venir détruire un nid ?", answer: "Non. En Haute-Marne, ils ne se déplacent plus pour un nid chez un particulier : c'est le rôle d'un professionnel certifié. Gardez le 18 et le 15 pour une personne en danger." },
    { question: "Peut-on faire enlever un nid gratuitement ?", answer: "Pour un nid de guêpes, non. Pour le frelon asiatique, certaines communes participent au coût : renseignez-vous auprès de la mairie avant l'intervention." },
    { question: "Combien de temps dure l'intervention ?", answer: "Moins d'une heure dans la grande majorité des cas, repérage compris. Un nid très haut ou très gros prend un peu plus de temps." },
    { question: "Le nid peut-il être réutilisé l'année suivante ?", answer: "Non. Les guêpes meurent avec le froid et personne ne revient dans l'ancien nid. Une nouvelle reine peut en revanche construire un autre nid tout près : surveillez les mêmes endroits au printemps." },
    { question: "Venez-vous dans les villages voisins ?", answer: "Oui : Blessonville, Villiers-le-Sec, Buxières-lès-Villiers, Richebourg, Bricon, Neuilly-sur-Suize, Euffigneix, Orges, Jonchery, Foulain et Chaumont. Un seul numéro, tous les jours : 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Depuis Montsaon, je rayonne dans toute la Haute-Marne.",
    links: [
      { label: "Guêpes et frelons Chaumont", to: "/guepes-frelons-chaumont" },
      { label: "Guêpes et frelons Châteauvillain", to: "/guepes-frelons-chateauvillain" },
      { label: "Guêpes et frelons Arc-en-Barrois", to: "/guepes-frelons-arc-en-barrois" },
      { label: "Guêpes et frelons Bologne", to: "/guepes-frelons-bologne" },
    ],
    also: "Mes autres services à Semoutiers-Montsaon :",
    note: (
      <>
        Un frelon asiatique à signaler ? Votre mairie ou la FREDON Grand Est peuvent recenser le nid. Plus d'informations sur la page{" "}
        <Link to="/guepes-frelons" className={textLink}>destruction de nids en Haute-Marne</Link>.
      </>
    ),
  },
};

const GuepesFrelonsSemoutiersMontsaon = () => <RodentTownPage town={town} />;

export default GuepesFrelonsSemoutiersMontsaon;
