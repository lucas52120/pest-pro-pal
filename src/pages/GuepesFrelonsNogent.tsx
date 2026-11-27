import { Link } from "react-router-dom";
import { Blinds, Church, Factory, FileText, HardHat, Home, Landmark, Mountain, Package, Sun, TreeDeciduous, Warehouse } from "lucide-react";
import heroImage from "@/assets/frelon-hero.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "wasps",
  city: "Nogent",
  postalCode: "52800",
  region: "Haute-Marne",
  slug: "/guepes-frelons-nogent",
  title: "Destruction nid de guêpes et frelons à Nogent (52)",
  description:
    "Des guêpes sous les tuiles ou dans un volet à Nogent ? On s'en charge, frelons compris. À partir de 80 €, devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Maisons, ateliers et jardins",
    text: "Des guêpes sous les tuiles ou dans un volet ? Je détruis le nid, frelons compris, sans que vous vous approchiez.",
    highlight: "Passage possible hors des heures de travail",
    signsLabel: "Un nid dans un atelier ? Les bons réflexes",
    image: heroImage,
    imageAlt: "Tête d'un frelon européen en gros plan",
    imageClassName: "max-lg:brightness-75",
  },
  reviews: ["blanrue", "buke", "babinski"],
  why: {
    title: "Pourquoi les guêpes font-elles leur nid chez vous ?",
    intro: "Entre le plateau et la vallée, les maisons ont souvent un garage, un atelier ou un abri. Autant de coins calmes pour une reine.",
    items: [
      { icon: Blinds, title: "Un volet roulant", text: "le caisson reste sec et à l'abri du vent tout l'été." },
      { icon: Warehouse, title: "Un atelier ou un garage", text: "portes ouvertes l'été, poutres hautes, et personne qui lève les yeux." },
      { icon: Home, title: "Des tuiles soulevées", text: "après un coup de vent, une petite ouverture suffit pour accéder au dessous du toit." },
      { icon: Sun, title: "Un pignon ensoleillé", text: "la chaleur fait grossir la colonie plus vite." },
    ],
  },
  how: {
    title: "Comment éliminer un nid de guêpes ou de frelons ?",
    intro: "Je ne me contente pas des guêpes qui volent : je vise le nid. C'est là que se trouvent la reine et les futures ouvrières.",
    steps: [
      { title: "J'observe avant tout", text: "Quelques minutes à distance pour voir où elles entrent et savoir s'il s'agit de guêpes ou de frelons." },
      { title: "J'interviens protégé", text: "Combinaison complète, perche si besoin, produit professionnel appliqué directement dans le nid." },
      { title: "Je vous donne les consignes", text: "Quand reprendre le travail à côté, quand rouvrir le volet, et que faire de l'ancien nid." },
    ],
    after: (
      <>
        Pendant quelques heures, des guêpes reviennent encore au nid : laissez-les, elles sont touchées en rentrant. Toutes les étapes sur la page{" "}
        <Link to="/guepes-frelons" className={textLink}>destruction de nids de guêpes</Link>.
      </>
    ),
  },
  where: {
    intro: "Sur le plateau, dans la vallée de la Traire ou dans la zone industrielle, les nids ne se cachent pas au même endroit.",
    items: [
      { icon: Landmark, title: "Autour de la place Charles-de-Gaulle", text: "toits anciens, corniches et coffres de volets au-dessus des commerces." },
      { icon: Church, title: "Nogent-le-Bas", text: "vers l'église Saint-Germain : murs de soutènement, jardins en pente et abris." },
      { icon: Mountain, title: "Nogent-le-Haut", text: "pavillons exposés au vent : nids sous les rives de toit et dans les volets." },
      { icon: Factory, title: "La zone industrielle", text: "bardages, auvents, bennes et poutres des ateliers." },
      { icon: TreeDeciduous, title: "Les vergers et les haies", text: "frelons européens dans les arbres creux, guêpes dans les haies basses." },
      { icon: Home, title: "Donnemarie, Odival, Essey-les-Eaux", text: "maisons de village, granges et dépendances." },
    ],
  },
  price: {
    paragraphs: [
      <>Le traitement d'un nid de guêpes débute à <strong className="whitespace-nowrap text-primary">80 €</strong>. Pour un nid de frelons asiatiques, comptez <strong className="whitespace-nowrap text-primary">110 €</strong> minimum.</>,
      "L'accès et la hauteur font la différence : un nid dans un volet ne demande pas le même matériel qu'un nid sous un faîtage. Le dimanche ou un jour férié, un supplément est possible, annoncé avant.",
    ],
    aside: { icon: FileText, title: "Pour une entreprise", text: "Je vous remets une facture et un compte rendu. Le prix est fixé avant l'intervention." },
  },
  local: [
    {
      kind: "list",
      target: true,
      title: "Un nid dans un atelier ou une usine : que faire ?",
      intro: "Un nid près d'une porte de quai ou d'un poste de travail met les salariés en danger. Quelques réflexes en attendant mon passage.",
      items: [
        { title: "Balisez la zone", text: "un ruban ou des barrières suffisent à éloigner tout le monde de l'entrée du nid." },
        { title: "Coupez ce qui vibre", text: "compresseur, chariot ou machine trop proches peuvent exciter la colonie." },
        { title: "Signalez les allergies", text: "un salarié allergique doit rester loin et avoir son traitement à portée de main." },
        { title: "Laissez le nid tranquille", text: "pas de jet d'eau, pas de bombe, pas de balai." },
      ],
      aside: { icon: HardHat, title: "Hors des heures de travail", text: "Je peux passer tôt le matin ou en fin de journée, quand l'atelier est vide." },
    },
    {
      kind: "text",
      title: "Frelon européen ou frelon asiatique : la différence compte",
      paragraphs: [
        "Le frelon européen est gros, roux et jaune. Il niche souvent dans un arbre creux, un grenier ou un coffre, et vole aussi le soir autour des lampes.",
        "Le frelon asiatique est plus sombre, avec la tête orangée et le bout des pattes jaune. Son nid finit souvent très haut dans un arbre, et il défend les abords à plusieurs. Les deux se traitent, mais pas avec les mêmes précautions.",
      ],
      aside: { icon: Package, title: "Une photo aide", text: "Envoyez une photo prise de loin au 07 65 25 67 92 : je vous dis de quel insecte il s'agit." },
    },
  ],
  call: {
    title: "Un nid de guêpes à Nogent ?",
    text: "Maison ou atelier, dites-moi où il est : je vous dis quand je peux passer.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "Combien coûte un nid de guêpes à Nogent ?", answer: "Le minimum est de 80 € pour des guêpes et de 110 € pour des frelons asiatiques. La hauteur et l'accès peuvent faire varier le prix, toujours annoncé avant. Le règlement se fait après." },
    { question: "Les frelons sont-ils plus dangereux que les guêpes ?", answer: "Une piqûre de frelon est plus douloureuse, mais pas plus toxique. Le frelon asiatique, en revanche, défend son nid en groupe : ne vous en approchez pas." },
    { question: "Un nid dans un volet roulant, que faire ?", answer: "Ne remontez plus le volet et fermez la fenêtre. Le nid se traite par l'ouverture du caisson, sans démonter le volet." },
    { question: "Peut-on détruire un nid la nuit soi-même ?", answer: "C'est déconseillé. Les guêpes sont moins actives la nuit, mais une bombe ou une lampe suffit à les faire sortir, et l'échelle dans le noir est un vrai danger." },
    { question: "Le vieux nid doit-il être retiré ?", answer: "Ce n'est pas obligatoire : il ne sera pas réoccupé. Le retirer évite seulement de se demander l'année suivante s'il est encore actif." },
    { question: "Intervenez-vous autour de Nogent ?", answer: "Oui : Biesles, Mandres-la-Côte, Poulangy, Sarcey, Ageville, Lanques-sur-Rognon, Is-en-Bassigny, Vitry-lès-Nogent et les villages voisins. Joignable au 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Entre Chaumont et Langres, Nogent est au cœur de mon secteur.",
    links: [
      { label: "Guêpes et frelons Chaumont", to: "/guepes-frelons-chaumont" },
      { label: "Guêpes et frelons Langres", to: "/guepes-frelons-langres" },
      { label: "Guêpes et frelons Bourbonne-les-Bains", to: "/guepes-frelons-bourbonne-les-bains" },
    ],
    also: "Je viens aussi à Nogent pour :",
    note: (
      <>
        Les espèces, les risques et la saison sont expliqués sur la page{" "}
        <Link to="/guepes-frelons" className={textLink}>guêpes et frelons en Haute-Marne</Link>.
      </>
    ),
  },
};

const GuepesFrelonsNogent = () => <RodentTownPage town={town} />;

export default GuepesFrelonsNogent;
