import { Link } from "react-router-dom";
import { Beef, Cable, HandCoins, House, Milk, Route, School, Tractor, Warehouse, Wheat } from "lucide-react";
import heroImage from "@/assets/poste-appat-gravier.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  city: "Semoutiers-Montsaon",
  postalCode: "52000",
  region: "Haute-Marne",
  slug: "/deratisation-semoutiers-montsaon",
  title: "Entreprise de dératisation à Semoutiers-Montsaon (52)",
  description:
    "Rats ou souris à Semoutiers-Montsaon (52000) ? GF Nuisibles est installé sur la commune : maisons, granges et dépendances. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Votre dératiseur est installé sur la commune",
    text: "Je suis installé à Montsaon : ferme, hangar ou maison, j'ai peu de route pour venir voir.",
    highlight: "Le plus proche de ma base : passage facile à caler",
    signsLabel: "Vous êtes agriculteur ? Voir les zones à contrôler",
    image: heroImage,
    imageAlt: "Poste d'appâtage fermé sur des graviers, devant un mur",
    imageClassName: "max-lg:brightness-50",
  },
  reviews: ["yerli", "jc", "buke"],
  why: {
    title: "Pourquoi y a-t-il des rats ou des souris chez vous ?",
    intro: "Près des champs et des fermes, la nourriture et les cachettes ne manquent pas. Une maison bien tenue peut en avoir aussi.",
    items: [
      { icon: Wheat, title: "Du grain au sol", text: "une poignée tombée chaque jour suffit à nourrir plusieurs rats." },
      { icon: Milk, title: "L'aliment des animaux", text: "auges, sacs et silos : le repas est servi toute l'année." },
      { icon: Warehouse, title: "Un hangar plein", text: "derrière le matériel, il y a cent cachettes où le chat ne va pas." },
      { icon: Tractor, title: "Les grands travaux", text: "moisson, ensilage ou tas déplacé : ils changent d'adresse, parfois pour la vôtre." },
    ],
  },
  where: {
    intro: "Deux villages, des exploitations et des maisons rénovées : je connais ce type de bâtiments et j'y regarde ceci.",
    items: [
      { icon: House, title: "Montsaon", text: "mon point de départ. Maisons de pierre, granges et jardins le long de la rue Principale." },
      { icon: School, title: "Semoutiers", text: "autour de la mairie : pavillons, anciennes fermes et dépendances transformées en logement." },
      { icon: Beef, title: "Les exploitations", text: "bâtiments d'élevage, stockage et maisons d'habitation traités comme un seul ensemble." },
      { icon: Route, title: "Vers Chaumont et Châteauvillain", text: "Villiers-le-Sec, Buxières-lès-Villiers, Blessonville, Bricon et Richebourg." },
    ],
  },
  how: {
    title: "Comment se débarrasser des rats et des souris efficacement ?",
    intro: "Je pars de ce qu'ils mangent pour remonter jusqu'à leur nid. Les postes se placent entre les deux, et je passe les relever.",
    photo: "facade",
    steps: [
      { title: "Entre le nid et le repas", text: "Le boîtier se met sur le trajet, le long d'un mur ou d'une dalle." },
      { title: "Hors de portée des bêtes", text: "Couvercle verrouillé et blocs fixés : ni museau, ni patte n'y accèdent." },
      { title: "Le relevé", text: "Je note ce qui a été mangé dans chaque poste, et je déplace ceux qui ne servent pas." },
    ],
    after: "À la fin du traitement, les restes d'appât sont repris : n'en gardez pas dans un coin du hangar.",
  },
  price: {
    paragraphs: [
      <>À Semoutiers-Montsaon comme ailleurs, une dératisation débute à <strong className="whitespace-nowrap text-primary">100 €</strong>. La route est courte, ce qui compte sur le déplacement. Pour une exploitation, je propose un devis gratuit, bâtiment par bâtiment.</>,
    ],
    aside: { icon: HandCoins, title: "Suivi à l'année", text: <>Besoin de contrôles réguliers et d'un relevé écrit ? <Link to="/contact" className={textLink}>Parlons-en</Link>, on fixe le rythme ensemble.</> },
  },
  local: [
    {
      kind: "levels",
      target: true,
      title: "Ferme et hangar : les quatre zones à contrôler",
      intro: "Je commence toujours par là où ils mangent, puis je cherche où ils dorment.",
      items: [
        { title: "Le stockage", text: "Cellules, big bags, paille : traces de passage dans la poussière, sacs percés par le bas." },
        { title: "Les animaux", text: "Autour des auges, sous les caillebotis, derrière les abreuvoirs. Pas d'appât à portée d'un museau." },
        { title: "L'atelier", text: "Caisses à outils, vieux pneus, moteurs remisés. Les souris y nichent plus que les rats." },
        { title: "Le tour du bâtiment", text: "Talus, fumière, tas de pierres, dalle fissurée : la plupart des terriers sont dehors." },
      ],
    },
    {
      kind: "list",
      title: "Comment protéger tracteurs et matériel ?",
      intro: "Une gaine mordue sur une machine, et c'est une journée perdue au plus mauvais moment.",
      items: [
        { title: "Avant de remiser", text: "soufflez la machine, videz la trémie et nettoyez la cabine, siège compris." },
        { title: "Pendant l'arrêt", text: "ouvrez les capots une fois par mois : la lumière et le dérangement les gênent." },
        { title: "Autour", text: "laissez un sol nu sous la machine, sans paille ni bâche traînante." },
        { title: "À la reprise", text: "regardez filtres et faisceaux avant de tourner la clé." },
      ],
      aside: {
        icon: Cable,
        title: "Le prix d'une nuit",
        text: "Un faisceau électrique coûte bien plus qu'un suivi. Quelques postes placés avant l'arrêt du matériel valent mieux qu'un dépannage en pleine saison.",
      },
    },
  ],
  call: {
    title: "Vous êtes à côté, profitez-en",
    text: "Un doute sur un trou ou une trace ? Je peux passer voir et vous dire ce qu'il en est.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "Combien coûte une dératisation à Semoutiers-Montsaon ?", answer: "Le départ est à 100 €. Pour une ferme, le devis gratuit dépend du nombre de bâtiments et du suivi souhaité. Le déplacement, réduit par la proximité, vous est confirmé au téléphone." },
    { question: "Puis-je vous rencontrer à Montsaon ?", answer: "Appelez d'abord le 07 65 25 67 92 : je suis le plus souvent sur la route. Il est plus simple que je vienne directement voir votre bâtiment." },
    { question: "Les chats de ferme suffisent-ils ?", answer: "Ils limitent les souris et les jeunes rats. Face à des rats adultes installés dans un tas de paille, ils ne font pas le poids." },
    { question: "Les appâts sont-ils sans risque pour mes vaches ou mes brebis ?", answer: "Un appât reste toxique. C'est pourquoi il est enfermé dans un poste, hors des couloirs et des aires paillées. Vous savez où est chaque poste, et les restes sont repris à la fin." },
    { question: "Faut-il traiter avant ou après la moisson ?", answer: "Les deux moments comptent. Avant, on protège un stockage vide et propre. Après, on surveille ceux qui quittent les champs." },
    { question: "Venez-vous dans les villages proches ?", answer: "Bien sûr : Blessonville, Villiers-le-Sec, Buxières-lès-Villiers, Richebourg, Bricon, Neuilly-sur-Suize, Euffigneix, Orges, Jonchery et Foulain sont sur ma route." },
  ],
  nearby: {
    intro: "D'ici, je rayonne dans toute la Haute-Marne.",
    links: [
      { label: "Dératisation Chaumont", to: "/deratisation-chaumont" },
      { label: "Dératisation Châteauvillain", to: "/deratisation-chateauvillain" },
      { label: "Dératisation Arc-en-Barrois", to: "/deratisation-arc-en-barrois" },
      { label: "Dératisation Bologne", to: "/deratisation-bologne" },
    ],
    also: "Mes autres services à deux pas de chez vous :",
    note: (
      <>
        Découvrez aussi la présentation complète :{" "}
        <Link to="/deratisation" className={textLink}>dératisation pour particuliers et professionnels</Link>.
      </>
    ),
  },
};

const DeratisationSemoutiersMontsaon = () => <RodentTownPage town={town} />;

export default DeratisationSemoutiersMontsaon;
