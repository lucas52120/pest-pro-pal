import { Link } from "react-router-dom";
import { Anchor, Apple, Church, Factory, FileText, Fence, Home, Leaf, Shovel, Sprout, TreeDeciduous, Waves } from "lucide-react";
import heroImage from "@/assets/guepes-nid-bois.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "wasps",
  city: "Bologne",
  postalCode: "52310",
  region: "Haute-Marne",
  slug: "/guepes-frelons-bologne",
  title: "Destruction nid de guêpes et frelons à Bologne (52)",
  description:
    "Un nid de guêpes ou de frelons à Bologne ? On s'en débarrasse pour vous, 7j/7. À partir de 80 €, devis gratuit. Appelez le 07 65 25 67 92.",
  hero: {
    eyebrow: "Maisons, jardins et bords de Marne",
    text: "Un nid au fond du jardin, dans l'abri ou sous le toit ? À dix kilomètres de Chaumont, je viens le détruire.",
    highlight: "À une dizaine de kilomètres de Chaumont",
    signsLabel: "Trou dans la pelouse ou boule dans un arbre ? Les repérer",
    image: heroImage,
    imageAlt: "Nid ouvert couvert de guêpes contre une planche",
    imageClassName: "max-lg:brightness-50",
  },
  reviews: ["moock", "genest", "patricia"],
  why: {
    title: "Pourquoi les guêpes ont-elles choisi votre jardin ?",
    intro: "Un jardin au bord de l'eau, avec un potager et des arbres fruitiers, c'est tout ce qu'une colonie demande.",
    items: [
      { icon: Apple, title: "Les fruitiers", text: "prunes et poires tombées en août : un festin pour les ouvrières." },
      { icon: Waves, title: "L'eau toute proche", text: "la Marne et le canal leur permettent de boire et de mouiller la pâte du nid." },
      { icon: Fence, title: "L'abri de jardin", text: "un plafond en planches, jamais dérangé, abrite parfaitement un nid." },
      { icon: Sprout, title: "Le potager", text: "des insectes en quantité pour nourrir les larves." },
    ],
  },
  how: {
    title: "Comment se débarrasser d'un nid de guêpes au jardin ?",
    intro: "Au jardin, le nid peut être dans le sol, dans une haie, dans l'abri ou en haut d'un arbre. Chaque cas demande une approche différente.",
    steps: [
      { title: "Je cherche par où elles passent", text: "Je suis les allers-retours jusqu'au nid, même s'il est caché sous l'herbe ou dans le feuillage." },
      { title: "J'adapte le matériel", text: "Au sol, dans une haie ou à huit mètres de haut : la méthode change, le produit professionnel aussi." },
      { title: "Je vous rends le jardin", text: "Je vous dis quand tondre, tailler ou récolter à nouveau près de l'endroit traité." },
    ],
    after: (
      <>
        Ne cueillez pas les fruits juste au-dessus d'un nid traité avant mon feu vert. Méthodes et espèces sur la page{" "}
        <Link to="/guepes-frelons" className={textLink}>guêpes et frelons en Haute-Marne</Link>.
      </>
    ),
  },
  where: {
    intro: "Entre le bourg, le canal et les deux villages rattachés, voici les endroits où je trouve les nids.",
    items: [
      { icon: Church, title: "Le bourg", text: "maisons anciennes près de l'église : tuiles, génoises et volets." },
      { icon: Waves, title: "La boucle de la Marne", text: "saules et peupliers des berges, terrain du frelon asiatique." },
      { icon: Anchor, title: "Le canal et le chemin de halage", text: "murets et talus, où les guêpes nichent dans les creux." },
      { icon: Factory, title: "Le secteur industriel", text: "auvents, bardages et poutres des ateliers." },
      { icon: TreeDeciduous, title: "Marault", text: "grands arbres, granges et propriétés à l'écart du bourg." },
      { icon: Home, title: "Roôcourt-la-Côte", text: "maisons de pierre et vergers sur la hauteur." },
    ],
  },
  price: {
    paragraphs: [
      <>Prévoyez <strong className="whitespace-nowrap text-primary">80 €</strong> minimum pour un nid de guêpes, et <strong className="whitespace-nowrap text-primary">110 €</strong> minimum pour un nid de frelons asiatiques.</>,
      "Un nid dans l'herbe se traite plus simplement qu'un nid en haut d'un peuplier. Un supplément est possible le dimanche et les jours fériés, et vous le savez avant.",
    ],
    aside: { icon: FileText, title: "Tout près de chez moi", text: "Bologne est à deux pas de ma base : le déplacement reste léger, et je vous l'annonce au téléphone." },
  },
  local: [
    {
      kind: "cards",
      target: true,
      columns: "lg:grid-cols-3",
      title: "Trou dans la pelouse ou boule dans un arbre : comment les repérer ?",
      intro: "Au jardin, le nid se trahit par le va-et-vient. Encore faut-il savoir où regarder.",
      items: [
        { icon: Shovel, title: "Dans le sol", text: "un trou de la taille d'une pièce, d'où sortent des guêpes à ras de l'herbe. Le plus dangereux pour la tondeuse." },
        { icon: Leaf, title: "Dans une haie", text: "des guêpes qui plongent toujours au même endroit dans le feuillage." },
        { icon: TreeDeciduous, title: "En haut d'un arbre", text: "une grosse boule grise, souvent repérée à l'automne quand les feuilles tombent : pensez au frelon asiatique." },
      ],
      after: "Une photo prise de loin, envoyée au 07 65 25 67 92, me suffit souvent pour vous dire de quoi il s'agit.",
    },
    {
      kind: "text",
      title: "Chemin de halage, pêche, balade : prudence près de l'eau",
      paragraphs: [
        "Les berges sont un endroit idéal pour les frelons asiatiques : ils chassent au-dessus de l'eau et nichent dans les grands arbres voisins.",
        "Si vous voyez un nid sur un terrain public ou au bord du chemin, ne vous en approchez pas et signalez-le à la mairie. S'il est sur votre terrain, appelez-moi.",
      ],
    },
  ],
  call: {
    title: "Un nid de guêpes à Bologne ?",
    text: "Dites-moi s'il est au sol, dans une haie ou en hauteur : je vous propose une date.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "Combien coûte la destruction d'un nid à Bologne ?", answer: "80 € minimum pour un nid de guêpes, 110 € minimum pour un nid de frelons asiatiques, selon l'emplacement. Le prix est fixé avant l'intervention et payé après." },
    { question: "Un nid dans la haie, faut-il couper la haie ?", answer: "Non. Le nid se traite sur place, sans tailler. Attendez simplement mon feu vert avant de reprendre la taille." },
    { question: "Le frelon asiatique est-il présent à Bologne ?", answer: "Il est présent en Haute-Marne et apprécie les bords de rivière. Un gros nid haut dans un arbre à l'automne doit vous faire penser à lui." },
    { question: "Un nid de guêpes dans le sol peut-il être noyé ?", answer: "Non, c'est rarement efficace et les guêpes sortent en colère. Le nid se traite par son entrée, avec un produit professionnel." },
    { question: "Peut-on manger les fruits de l'arbre où était le nid ?", answer: "Oui, en suivant les consignes que je vous donne : on évite de cueillir juste au-dessus du nid tant qu'il n'a pas été retiré." },
    { question: "Intervenez-vous autour de Bologne ?", answer: "Oui : Lamancine, Vraincourt, Viéville, Riaucourt, Brethenay, Meures, Soncourt-sur-Marne, Vignory et les autres communes voisines. Un appel au 07 65 25 67 92 suffit." },
  ],
  nearby: {
    intro: "Bologne est à deux pas de ma base, entre Chaumont et la vallée.",
    links: [
      { label: "Guêpes et frelons Chaumont", to: "/guepes-frelons-chaumont" },
      { label: "Guêpes et frelons Froncles", to: "/guepes-frelons-froncles" },
      { label: "Guêpes et frelons Semoutiers-Montsaon", to: "/guepes-frelons-semoutiers-montsaon" },
    ],
    also: "Je viens aussi à Bologne pour :",
    note: (
      <>
        Tout sur la saison des nids sur la page{" "}
        <Link to="/guepes-frelons" className={textLink}>destruction de nids de guêpes et frelons</Link>.
      </>
    ),
  },
};

const GuepesFrelonsBologne = () => <RodentTownPage town={town} />;

export default GuepesFrelonsBologne;
