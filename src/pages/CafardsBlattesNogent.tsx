import { Link } from "react-router-dom";
import { Coffee, Factory, FileText, House, Landmark, Mountain, Package, Shirt, ThermometerSun, Truck, Utensils, Wheat } from "lucide-react";
import heroImage from "@/assets/blatte-cuisine.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "cockroaches",
  city: "Nogent",
  postalCode: "52800",
  region: "Haute-Marne",
  slug: "/cafards-blattes-nogent",
  title: "Traitement cafards et blattes à Nogent (52) | Devis gratuit",
  description:
    "Des traces noires dans vos placards à Nogent ? Ce sont peut-être des blattes. On s'en charge discrètement, 7j/7. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Logements, ateliers et salles de pause",
    text: "Dans une cuisine ou un vestiaire d'atelier, je trouve les cachettes des blattes et je traite sans arrêter votre activité.",
    highlight: "Passage possible hors des heures de travail",
    signsLabel: "Des traces dans les placards ? Les reconnaître",
    image: heroImage,
    imageAlt: "Cuisine avec placards en bois et évier sous une fenêtre",
    imageClassName: "max-lg:brightness-50",
  },
  reviews: ["jc", "muller", "duverne"],
  why: {
    title: "Pourquoi les cafards rentrent-ils chez vous ?",
    intro: "Il leur faut peu de chose : un coin chaud, un peu d'eau, quelques restes. Et souvent, ils sont arrivés tout seuls, dans un carton.",
    items: [
      { icon: Package, title: "Un carton ou un sac", text: "courses, colis, matériel livré : la blatte germanique voyage très bien." },
      { icon: ThermometerSun, title: "Un recoin chaud", text: "derrière le frigo, sous le four ou près du chauffe-eau." },
      { icon: Utensils, title: "Des restes", text: "miettes, gamelle, poubelle de la cuisine, coin café des bureaux." },
      { icon: Coffee, title: "Une salle de pause", text: "micro-ondes, machine à café et casiers : un garde-manger idéal dans un atelier." },
    ],
  },
  how: {
    title: "Comment éliminer les cafards efficacement ?",
    intro: "Pas de recette unique : je choisis le traitement selon l'espèce et les lieux, et je combine plusieurs méthodes quand c'est utile.",
    steps: [
      { title: "Je repère les foyers", text: "Je fais le tour des points chauds et humides : cuisine, salle de bains, vestiaires, chaufferie." },
      { title: "Je traite chaque zone à sa façon", text: "Gel là où l'on mange, pulvérisation ciblée dans les locaux techniques : on reste efficace sans gêner le quotidien." },
      { title: "Je reviens vérifier", text: "Un second passage s'occupe des jeunes sortis des œufs, et je vous dis si un troisième est utile." },
    ],
    after: (
      <>
        Avant de commencer, je vous dis s'il faut libérer une pièce ou un local, et pour combien de temps. Toutes les explications sont sur la page{" "}
        <Link to="/cafards-blattes" className={textLink}>blattes et cafards dans le 52</Link>.
      </>
    ),
  },
  where: {
    intro: "Entre le plateau, la vallée et les ateliers, voici les endroits que je vérifie en premier à Nogent.",
    items: [
      { icon: Landmark, title: "Autour de la place Charles-de-Gaulle", text: "logements au-dessus des commerces, cuisines anciennes et colonnes d'eau partagées." },
      { icon: Mountain, title: "Nogent-le-Bas", text: "vers l'église Saint-Germain : sous-sols humides, chaufferies et buanderies." },
      { icon: Factory, title: "La zone industrielle", text: "réfectoires, vestiaires, locaux sociaux et distributeurs de boissons." },
      { icon: Shirt, title: "Les vestiaires d'atelier", text: "casiers chauds, sacs de repas oubliés, douches et lavabos." },
      { icon: House, title: "Les lotissements", text: "dessous d'évier, lave-vaisselle et garage où l'on stocke les courses." },
      { icon: Wheat, title: "Donnemarie et Odival", text: "maisons de village, caves et cuisines d'été." },
    ],
  },
  price: {
    paragraphs: [
      "Pour une maison, le prix dépend surtout des pièces touchées. Pour une entreprise, de la surface, du nombre de locaux et du rythme de suivi.",
      "Je vous donne le prix exact après avoir vu les lieux.",
    ],
    aside: { icon: FileText, title: "Sans engagement", text: "Le devis est gratuit et précise les passages prévus. Le déplacement est indiqué dès votre appel." },
  },
  local: [
    {
      kind: "levels",
      target: true,
      title: "Comment reconnaître une invasion de blattes ?",
      intro: "Les blattes sortent la nuit. Le jour, ce sont leurs traces qui parlent.",
      items: [
        { title: "Allumez la lumière la nuit", text: "Si quelque chose file sous un meuble en quelques secondes, il y en a sans doute d'autres." },
        { title: "Regardez les charnières", text: "De petits points noirs comme du poivre dans les placards : ce sont leurs déjections." },
        { title: "Soulevez les appareils", text: "Sous le micro-ondes ou la cafetière, on trouve souvent des mues ou des capsules d'œufs." },
        { title: "Sentez le placard", text: "Une odeur rance et tenace signale une colonie installée depuis un moment." },
      ],
    },
    {
      kind: "list",
      title: "Atelier ou entreprise : comment garder les locaux propres ?",
      intro: "Dans un site de production, les blattes s'installent là où les salariés mangent. Quelques règles simples changent beaucoup.",
      items: [
        { text: "Pas de nourriture dans les casiers ni dans les vestiaires." },
        { text: "Une poubelle fermée vidée chaque soir en salle de pause." },
        { text: "Le dessous du micro-ondes, du frigo et de la machine à café nettoyé chaque semaine." },
        { text: "Les cartons de livraison sortis rapidement des locaux." },
      ],
      aside: {
        icon: Truck,
        title: "Un suivi pour votre entreprise",
        text: <>Je peux passer régulièrement et vous laisser un compte rendu écrit après chaque visite. <Link to="/contact" className={textLink}>Parlons-en</Link>.</>,
      },
    },
  ],
  call: {
    title: "Des cafards à Nogent ?",
    text: "Maison ou atelier, dites-moi où vous les voyez : je vous dis quand je passe.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "Quel prix pour un traitement contre les cafards à Nogent ?", answer: "Il dépend de la surface, de l'espèce et du nombre de passages. Après ma visite, vous recevez un devis gratuit avec le prix exact. Le déplacement est annoncé au téléphone." },
    { question: "Pouvez-vous traiter un atelier sans arrêter la production ?", answer: "Oui, dans la plupart des cas. On choisit ensemble un moment calme, et je traite d'abord les zones où l'on mange et se change, qui sont les plus touchées." },
    { question: "D'où viennent les cafards dans une maison propre ?", answer: "Souvent d'un carton, d'un sac de courses ou d'un appareil d'occasion. Une fois installés près d'une source de chaleur et d'eau, ils se multiplient même si tout est propre." },
    { question: "Faut-il jeter la nourriture après le traitement ?", answer: "Jetez ce qui était ouvert ou souillé. Les aliments dans des boîtes ou bocaux bien fermés peuvent être gardés. Rangez-les avant mon passage pour plus de simplicité." },
    { question: "Les huiles essentielles suffisent-elles ?", answer: "Elles peuvent gêner les blattes un moment, mais ne touchent ni celles qui sont cachées ni leurs œufs. Le problème revient vite." },
    { question: "Intervenez-vous autour de Nogent ?", answer: "Oui : Biesles, Mandres-la-Côte, Poulangy, Marnay-sur-Marne, Vesaignes-sur-Marne, Ageville, Sarcey et les autres villages du secteur. Un appel au 07 65 25 67 92 suffit." },
  ],
  nearby: {
    intro: "Entre Chaumont et Langres, Nogent est au cœur de mon secteur.",
    links: [
      { label: "Cafards Chaumont", to: "/cafards-blattes-chaumont" },
      { label: "Cafards Langres", to: "/cafards-blattes-langres" },
      { label: "Cafards Bourbonne-les-Bains", to: "/cafards-blattes-bourbonne-les-bains" },
    ],
    also: "Je viens aussi à Nogent pour :",
    note: (
      <>
        Pour en savoir plus sur les espèces de blattes, consultez la page{" "}
        <Link to="/cafards-blattes" className={textLink}>cafards en Haute-Marne</Link>.
      </>
    ),
  },
};

const CafardsBlattesNogent = () => <RodentTownPage town={town} />;

export default CafardsBlattesNogent;
