import { Link } from "react-router-dom";
import { Castle, Church, Droplets, Flame, House, Leaf, Moon, Rat, Squirrel, TreePine, Trees, Utensils } from "lucide-react";
import heroImage from "@/assets/souris-hero.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  city: "Arc-en-Barrois",
  postalCode: "52210",
  region: "Haute-Marne",
  slug: "/deratisation-arc-en-barrois",
  title: "Entreprise de dératisation à Arc-en-Barrois (52)",
  description:
    "Rats ou souris à Arc-en-Barrois (52210) ? Particuliers, agriculteurs et professionnels : recherche des accès et traitement. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Maisons en forêt, gîtes et dépendances",
    text: "Souris, rat, mulot ou lérot ? J'identifie d'abord l'animal, puis je choisis le bon traitement.",
    highlight: "On identifie d'abord, on traite ensuite",
    signsLabel: "Quel animal avez-vous vu ? Les quatre profils",
    image: heroImage,
    imageAlt: "Souris de face sur une planche, dans la pénombre",
  },
  reviews: ["rigny", "moock", "duverne"],
  why: {
    title: "Pourquoi les rats et les souris rentrent-ils chez vous ?",
    intro: "La forêt leur donne presque tout. Votre maison ajoute un repas régulier et un toit sec.",
    items: [
      { icon: Utensils, title: "Vos provisions", text: "noix, graines de tournesol, farine et croquettes valent mieux que des glands." },
      { icon: Moon, title: "Un volet toujours fermé", text: "derrière, un nid peut rester caché pendant des mois." },
      { icon: TreePine, title: "Une branche sur le toit", text: "elle sert de pont, et le lierre du mur sert d'échelle." },
      { icon: Flame, title: "Le bois que l'on rentre", text: "dans un panier de bûches, il y a parfois un passager." },
    ],
  },
  where: {
    intro: "Du bourg jusqu'à la lisière, chaque bâtiment a ses points faibles. Je les passe en revue.",
    items: [
      { icon: Church, title: "Le bourg, près de l'église Saint-Martin", text: "maisons en pierre calcaire, caves et commerces." },
      { icon: House, title: "Autour de la Maison Renaissance", text: "ruelles serrées, murs partagés et greniers anciens." },
      { icon: Castle, title: "Le château et son parc", text: "communs, ateliers et serres où les outils restent longtemps sans bouger." },
      { icon: Droplets, title: "Les bords de l'Aujon", text: "jardins humides, murets et vieux conduits d'eau." },
      { icon: TreePine, title: "La lisière de la forêt domaniale", text: "maisons isolées, appentis et abris à bois." },
      { icon: Trees, title: "Cour-l'Évêque, Giey, Aubepierre", text: "villages de vallée, fermes et résidences secondaires." },
    ],
  },
  how: {
    title: "Comment se débarrasser des rats efficacement ?",
    intro: "Je commence par reconnaître l'animal, car un lérot ne se traite pas comme un rat. Ensuite seulement, je choisis le dispositif et je programme le contrôle.",
    photo: "mur",
    steps: [
      { title: "Un poste contre le bâtiment", text: "Je reste près des murs, pour ne pas toucher la faune de la forêt." },
      { title: "Une ouverture à leur taille", text: "Le boîtier ne laisse entrer que les petits rongeurs, et l'appât y reste fixé." },
      { title: "Un contrôle, puis on retire", text: "Quand il n'y a plus d'activité, les postes ne restent pas sur place pour rien." },
    ],
    after: "Une chouette dans la grange ? Dites-le-moi : dans ce cas, je préfère les pièges.",
  },
  price: {
    paragraphs: [
      <>Le traitement commence à <strong className="whitespace-nowrap text-primary">100 €</strong>. Et si ce n'est ni un rat ni une souris, je vous le dis franchement : inutile de payer un traitement dont vous n'avez pas besoin.</>,
    ],
    aside: { icon: Flame, title: "Gîte ou exploitation ?", text: <>Le devis est gratuit et couvre tous les bâtiments que vous voulez protéger. <Link to="/contact" className={textLink}>Décrivez-les ici</Link>.</> },
  },
  local: [
    {
      kind: "cards",
      target: true,
      title: "Souris, mulot, rat ou lérot : qui est chez vous ?",
      intro: "Quatre animaux, quatre allures. Une photo floue suffit généralement à trancher.",
      items: [
        { icon: Rat, title: "La souris grise", text: "pelage uni, odeur forte, crottes fines. Elle vit avec nous et reste toute l'année." },
        { icon: Leaf, title: "Le mulot", text: "ventre blanc, grands yeux, longues pattes arrière. Il saute, stocke des graines et dort volontiers dehors." },
        { icon: Moon, title: "Le lérot", text: "masque noir autour des yeux, queue à pinceau. Il dort l'hiver et fait un bruit fou l'été." },
        { icon: Squirrel, title: "Le rat", text: "lourd, méfiant, queue épaisse et nue. Cherchez-le au sol pour le rat brun, sous le toit pour le rat noir." },
      ],
      after: "Pour un lérot, on ne parle pas de dératisation : on attend qu'il sorte, puis on ferme son accès. Je vous explique comment faire, sans produit.",
    },
    {
      kind: "levels",
      columns: "lg:grid-cols-3",
      title: "Comment stocker le bois de chauffage sans loger des souris ?",
      intro: "Le tas de bois est leur auberge préférée. Trois règles le rendent bien moins confortable.",
      items: [
        { title: "Loin du mur", text: "Un mètre au minimum, et jamais sous une fenêtre de cave ni contre une porte." },
        { title: "Sur des chevrons", text: "Dix à quinze centimètres d'air dessous : le bois sèche mieux et on voit ce qui s'y passe." },
        { title: "Au fur et à mesure", text: "Rentrez la provision du jour, pas celle du mois, et secouez les bûches dehors." },
      ],
    },
  ],
  call: {
    title: "Vous ne savez pas ce que c'est ?",
    text: "Photo, crotte, bruit, coquille de noix : envoyez ce que vous avez au 07 65 25 67 92.",
    contactLabel: "Décrire la situation",
  },
  faq: [
    { question: "Quel prix minimum à Arc-en-Barrois ?", answer: "100 € pour une dératisation. Le devis est offert, le déplacement est annoncé à l'avance, et le montant dépend du nombre de bâtiments à voir." },
    { question: "Le mulot est-il dangereux ?", answer: "Il peut porter des maladies, comme d'autres rongeurs sauvages. On évite de respirer la poussière de ses crottes et on se lave les mains. Dans une maison, il se traite comme une souris." },
    { question: "Peut-on traiter à l'intérieur du Parc national ?", answer: "Dans votre maison et ses dépendances, oui. Pour les extérieurs, je limite les postes au strict nécessaire, contre les bâtiments, afin de protéger la faune qui n'a rien demandé." },
    { question: "Un hibou ou une chouette vit dans ma grange, cela change-t-il quelque chose ?", answer: "Oui, dites-le-moi : c'est un excellent chasseur de rongeurs. Dans ce cas, je préfère les pièges, pour ne pas l'exposer à une proie empoisonnée." },
    { question: "Le bruit s'est arrêté tout seul, dois-je quand même appeler ?", answer: "Pas tout de suite. Guettez de nouvelles traces pendant deux semaines. Un lérot qui s'endort ou un mulot reparti expliquent souvent ce silence." },
    { question: "Quels villages desservez-vous par ici ?", answer: "Cour-l'Évêque, Coupray, Aubepierre-sur-Aube, Dancevoir, Rouvres-sur-Aube, Giey-sur-Aujon, Saint-Loup-sur-Aujon, Bugnières, Richebourg, Leffonds et Ternat. Pour un autre lieu, composez le 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Arc-en-Barrois se trouve entre Chaumont, Langres et Châteauvillain : trois secteurs que je couvre.",
    links: [
      { label: "Dératisation Châteauvillain", to: "/deratisation-chateauvillain" },
      { label: "Dératisation Semoutiers-Montsaon", to: "/deratisation-semoutiers-montsaon" },
      { label: "Dératisation Langres", to: "/deratisation-langres" },
      { label: "Dératisation Chaumont", to: "/deratisation-chaumont" },
    ],
    also: "Pour d'autres animaux à Arc-en-Barrois :",
    note: (
      <>
        Le fonctionnement général du service est présenté ici :{" "}
        <Link to="/deratisation" className={textLink}>dératisation, du premier appel au contrôle</Link>.
      </>
    ),
  },
};

const DeratisationArcEnBarrois = () => <RodentTownPage town={town} />;

export default DeratisationArcEnBarrois;
