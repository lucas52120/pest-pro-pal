import { Link } from "react-router-dom";
import { BrickWall, Castle, Droplets, FileText, Flame, Home, Moon, TowerControl, TreeDeciduous, Trees, Wind } from "lucide-react";
import heroImage from "@/assets/service-guepes.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "wasps",
  city: "Châteauvillain",
  postalCode: "52120",
  region: "Haute-Marne",
  slug: "/guepes-frelons-chateauvillain",
  title: "Destruction nid de guêpes et frelons à Châteauvillain (52)",
  description:
    "Un nid de guêpes ou de frelons à Châteauvillain ? Gardez vos distances, on s'en occupe ! À partir de 80 €, devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Remparts, vieilles maisons et forêt",
    text: "Un nid dans un vieux mur, sous un toit ou en lisière de forêt ? Gardez vos distances, je m'en occupe.",
    highlight: "À une vingtaine de minutes de Chaumont",
    signsLabel: "Un frelon qui vole la nuit ? Le frelon européen",
    image: heroImage,
    imageAlt: "Guêpes sur un nid accroché à une branche",
    imageClassName: "max-lg:brightness-75",
  },
  reviews: ["petitfourt", "genest", "babinski"],
  why: {
    title: "Pourquoi un nid de guêpes dans votre maison ?",
    intro: "Une cité ancienne entourée de forêt : les vieilles pierres et les grands arbres offrent des abris partout.",
    items: [
      { icon: BrickWall, title: "Les murs en pierre", text: "un joint vide entre deux pierres suffit pour qu'un nid grossisse dans l'épaisseur." },
      { icon: Flame, title: "Les cheminées", text: "un conduit inutilisé est un refuge sec et tranquille pour une colonie." },
      { icon: TreeDeciduous, title: "Les arbres creux", text: "en lisière de forêt, le frelon européen adore les troncs creux." },
      { icon: Moon, title: "Les greniers", text: "charpentes anciennes, jamais visitées en été." },
    ],
  },
  how: {
    title: "Comment se débarrasser d'un nid de frelons ou de guêpes ?",
    intro: "Dans les vieilles maisons, le nid est rarement visible : on n'en voit que l'entrée. C'est par là que je le traite.",
    steps: [
      { title: "Je suis les allers-retours", text: "Joint de pierre, tuile ou conduit : je trouve où entrent les insectes." },
      { title: "Je traite sans abîmer", text: "Le produit professionnel passe par l'entrée et atteint le nid, sans démonter le mur ni le toit." },
      { title: "Je vous dis quand reboucher", text: "Une fois que plus rien ne bouge, avec un mortier adapté à la pierre." },
    ],
    after: (
      <>
        Le frelon européen vole aussi la nuit, attiré par la lumière : gardez les fenêtres fermées côté nid le soir. Tout savoir sur la page{" "}
        <Link to="/guepes-frelons" className={textLink}>frelons et guêpes en Haute-Marne</Link>.
      </>
    ),
  },
  where: {
    intro: "Derrière les remparts comme en lisière de forêt, voici où je trouve le plus de nids.",
    items: [
      { icon: Castle, title: "Les remparts", text: "maisons adossées à la muraille : joints creux et toits anciens." },
      { icon: TowerControl, title: "La tour Saint-Marc et l'Auditoire", text: "cœur ancien : génoises, volets battants et combles." },
      { icon: Trees, title: "La Porte Madame et le Parc aux Daims", text: "grands arbres et jardins en lisière." },
      { icon: Droplets, title: "La boucle de l'Aujon", text: "berges et lavoirs, où le frelon asiatique accroche ses nids." },
      { icon: Home, title: "Les pavillons de l'entrée du bourg", text: "volets roulants, abris et pelouses." },
      { icon: TreeDeciduous, title: "La forêt d'Arc-Châteauvillain", text: "maisons isolées, troncs creux et bûchers." },
    ],
  },
  price: {
    paragraphs: [
      <>Un nid de guêpes : <strong className="whitespace-nowrap text-primary">à partir de 80 €</strong>. Un nid de frelons asiatiques : <strong className="whitespace-nowrap text-primary">à partir de 110 €</strong>.</>,
      "Mur épais, toit haut ou arbre creux : l'accès fait varier le prix. Un supplément peut s'appliquer le dimanche et les jours fériés, annoncé dès l'appel.",
    ],
    aside: { icon: FileText, title: "Pas loin de ma base", text: "Le déplacement reste raisonnable, et le prix total vous est donné avant." },
  },
  local: [
    {
      kind: "text",
      target: true,
      title: "Un frelon qui vole la nuit ? C'est le frelon européen",
      paragraphs: [
        "Gros, roux et jaune, il est attiré par les lampes et peut entrer dans la maison le soir. C'est impressionnant, mais il est plutôt calme loin de son nid.",
        "Son nid est souvent dans un arbre creux, un grenier, une cheminée ou un coffre de volet. S'il est près d'une porte ou d'une fenêtre, mieux vaut le faire traiter : une piqûre de frelon est très douloureuse.",
      ],
      aside: { icon: Moon, title: "Le soir, en attendant", text: "Éteignez les lumières côté nid, fermez les fenêtres et ne cherchez pas à l'écraser." },
    },
    {
      kind: "list",
      title: "Un nid dans un mur ancien : les bons réflexes",
      intro: "Le bourdonnement vient de la pierre ? Voici ce qu'il faut faire, et ne pas faire.",
      items: [
        { title: "Repérez l'entrée", text: "de loin, sans vous mettre dans l'axe des allers-retours." },
        { title: "Ne bouchez pas", text: "les guêpes chercheraient une autre sortie, parfois à l'intérieur." },
        { title: "Ne percez pas", text: "un trou dans le mur libérerait la colonie dans la pièce." },
        { title: "Fermez la pièce", text: "si des insectes apparaissent à l'intérieur, gardez la porte close." },
      ],
      aside: { icon: Wind, title: "Après le traitement", text: "Attendez quelques jours sans activité avant de reboucher le joint." },
    },
  ],
  call: {
    title: "Un nid à Châteauvillain ?",
    text: "Dites-moi s'il est dans un mur, un toit ou un arbre : je vous propose une date.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "Combien coûte un nid de frelons à Châteauvillain ?", answer: "À partir de 110 € pour un nid de frelons asiatiques, et de 80 € pour un nid de guêpes. Le prix dépend de l'accès, il est fixé avant ma venue et payé après." },
    { question: "Le frelon européen est-il protégé ?", answer: "Non, mais il n'est pas agressif loin de son nid. On ne traite un nid que lorsqu'il gêne ou présente un risque, près d'une habitation par exemple." },
    { question: "Un nid dans un arbre de la forêt, faut-il le détruire ?", answer: "S'il est loin des maisons et des chemins, pas forcément. S'il s'agit d'un frelon asiatique, signalez-le à la mairie." },
    { question: "Peut-on traiter un nid sans abîmer un vieux mur ?", answer: "Oui, en passant par l'entrée utilisée par les insectes. Pas besoin de démonter ou de percer." },
    { question: "Qui appeler pour un nid de guêpes ?", answer: "Un professionnel certifié pour les produits utilisés. Les pompiers ne se déplacent plus pour les nids chez les particuliers en Haute-Marne." },
    { question: "Jusqu'où allez-vous autour de Châteauvillain ?", answer: "Orges, Pont-la-Ville, Cour-l'Évêque, Coupray, Latrecey-Ormoy-sur-Aube, Bricon, Blessonville, Braux-le-Châtel, Dinteville et tout l'ouest du département. Mon numéro : 07 65 25 67 92." },
  ],
  nearby: {
    intro: "De Châteauvillain à la forêt, je me rends dans chaque village.",
    links: [
      { label: "Guêpes et frelons Arc-en-Barrois", to: "/guepes-frelons-arc-en-barrois" },
      { label: "Guêpes et frelons Semoutiers-Montsaon", to: "/guepes-frelons-semoutiers-montsaon" },
      { label: "Guêpes et frelons Chaumont", to: "/guepes-frelons-chaumont" },
      { label: "Guêpes et frelons Bar-sur-Aube", to: "/guepes-frelons-bar-sur-aube" },
    ],
    also: "Châteauvillain, c'est aussi :",
    note: (
      <>
        Pour reconnaître chaque espèce, lisez la page{" "}
        <Link to="/guepes-frelons" className={textLink}>guêpes, frelons et frelons asiatiques</Link>.
      </>
    ),
  },
};

const GuepesFrelonsChateauvillain = () => <RodentTownPage town={town} />;

export default GuepesFrelonsChateauvillain;
