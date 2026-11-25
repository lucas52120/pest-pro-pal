import { Link } from "react-router-dom";
import { Church, Dog, DoorOpen, Droplets, Egg, Factory, Hammer, House, PawPrint, Tag, Trees, Wheat } from "lucide-react";
import heroImage from "@/assets/rat-qui-mange.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  city: "Wassy",
  postalCode: "52130",
  region: "Haute-Marne",
  slug: "/deratisation-wassy",
  title: "Entreprise de dératisation à Wassy (52) | Devis gratuit",
  description:
    "Rats ou souris à Wassy (52130), dans la maison ou une dépendance ? GF Nuisibles recherche les accès et traite, 7j/7. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Maison, poulailler, bûcher",
    text: "Maison, remise ou poulailler : je trouve par où ils passent, je traite et je reviens vérifier.",
    highlight: "Vos animaux pris en compte dès l'appel",
    signsLabel: "Poules, chien, lapins ? Les bons réflexes",
    image: heroImage,
    imageAlt: "Rat brun en train de manger, tenu sur ses pattes arrière",
  },
  reviews: ["yerli", "jc", "duverne"],
  why: {
    title: "Pourquoi les rats et les souris rentrent-ils chez vous ?",
    intro: "Le plus souvent, c'est un repas facile qui les attire. Le reste vient ensuite.",
    items: [
      { icon: Egg, title: "Le grain des poules", text: "ce qui tombe au sol et les œufs oubliés les nourrissent tous les soirs." },
      { icon: Dog, title: "La gamelle dehors", text: "quelques croquettes sous l'auvent suffisent à les faire revenir." },
      { icon: Hammer, title: "Un tas de bois", text: "collé à la maison, il sert de logement tout près du repas." },
      { icon: DoorOpen, title: "Une porte qui ferme mal", text: "remise, cave ou garage : le jour sous la porte leur suffit pour passer." },
    ],
  },
  where: {
    intro: "Du centre aux bords de la Blaise, voici les coins où ils aiment se tenir, et où je regarde.",
    items: [
      { icon: Church, title: "Le centre, près de la collégiale Notre-Dame", text: "maisons anciennes collées les unes aux autres, greniers et petites cours." },
      { icon: Droplets, title: "Le long de la Blaise", text: "jardins, berges et anciens ouvrages d'eau : je regarde les évacuations et les murs bas." },
      { icon: Factory, title: "Les anciens ateliers", text: "grands volumes, sols percés, gaines abandonnées : ils demandent une visite complète." },
      { icon: House, title: "Les quartiers pavillonnaires", text: "garage, vide sanitaire et terrasse en bois sur plots." },
      { icon: Wheat, title: "Brousseval, Attancourt, Montreuil-sur-Blaise", text: "fermes et corps de bâtiments des villages les plus proches." },
      { icon: Trees, title: "Vers Voillecomte et les bois", text: "maisons isolées, où mulots et rats profitent des dépendances." },
    ],
  },
  how: {
    title: "Comment se débarrasser des rats et des souris ?",
    intro: "Un bon traitement tient en trois temps : comprendre par où ils circulent, poser sans risque pour vos bêtes, puis revenir compter ce qui a été pris.",
    photo: "gravier",
    steps: [
      { title: "Dehors, un poste fermé", text: "Il est lourd, verrouillé et calé contre un mur, loin de l'enclos des poules." },
      { title: "Dedans, rien ne bouge", text: "La tige garde l'appât au fond du boîtier : ni le chien ni les enfants ne l'atteignent." },
      { title: "Au contrôle, on compte", text: "Ce qui manque m'indique si les rats sont encore là et par où ils arrivent." },
    ],
    after: "Un rongeur mort dans le jardin ? Mettez des gants, emballez-le et gardez vos animaux à l'écart.",
  },
  price: {
    paragraphs: [
      <>Il faut partir de <strong className="whitespace-nowrap text-primary">100 €</strong>. Une souris dans une cuisine se règle plus simplement qu'une famille de rats entre le poulailler et la remise. Après ma visite, vous recevez un devis gratuit, et rien n'est posé sans votre accord.</>,
    ],
    aside: { icon: Tag, title: "Ce qui change le prix", text: "Le nombre de bâtiments, la quantité de nourriture qu'on ne peut pas retirer et le nombre de retours nécessaires." },
  },
  local: [
    {
      kind: "levels",
      target: true,
      columns: "lg:grid-cols-3",
      title: "Comment nourrir vos animaux sans nourrir les rats ?",
      intro: "Trois habitudes suffisent à changer les choses, même avant le premier traitement.",
      items: [
        { title: "Servir, puis rentrer", text: "Donnez la ration du jour, attendez qu'elle soit mangée, et rentrez ce qui reste avant la nuit." },
        { title: "Stocker en dur", text: "Un bidon en métal avec couvercle vaut mieux qu'un sac en papier. Un rat perce le plastique fin en quelques minutes." },
        { title: "Surélever", text: "Posez le poulailler et le clapier sur des pieds ou une dalle : on voit tout de suite si quelqu'un creuse dessous." },
      ],
      after: "Si un rat est déjà sous le poulailler, ne l'inondez pas : il ressortira plus loin. Laissez le trou comme il est, il me montrera le passage.",
    },
    {
      kind: "list",
      title: "Chien, chat, poules : est-ce dangereux pour eux ?",
      intro: "Un appât reste un produit toxique, même dans un boîtier. Voici comment on limite le risque ensemble.",
      items: [
        { text: "Vous me dites quels animaux vivent chez vous, et lesquels viennent en visite." },
        { text: "Je choisis des pièges plutôt que des appâts quand l'endroit s'y prête." },
        { text: "Chaque boîtier ferme avec une clé et vous savez où il se trouve." },
        { text: "Vous ramassez les rongeurs morts avec des gants, dans un sac fermé, sans les laisser au chat." },
      ],
      aside: {
        icon: PawPrint,
        title: "Un animal a mangé quelque chose de suspect ?",
        text: "N'attendez pas les signes : appelez votre vétérinaire, et gardez l'emballage ou le nom du produit sous la main.",
      },
    },
  ],
  call: {
    title: "Des œufs qui disparaissent ? Un trou sous la remise ?",
    text: "Appelez avant de boucher ou d'inonder : le trou me montre par où ils passent.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "À partir de quel prix intervenez-vous à Wassy ?", answer: "100 € est le point de départ. Je regarde la maison et les dépendances, puis je vous remets un devis gratuit. Les frais de route vous sont indiqués quand vous appelez." },
    { question: "Les rats attaquent-ils les poules ?", answer: "Ils s'en prennent surtout au grain, aux œufs et parfois aux poussins. Une poule adulte tuée fait plutôt penser à une fouine ou à un renard : dites-le-moi, la réponse n'est pas la même." },
    { question: "Dois-je enlever mes poules pendant le traitement ?", answer: "Non, dans la plupart des cas. Les postes sont mis à l'extérieur de l'enclos, là où elles ne peuvent ni gratter ni picorer." },
    { question: "Combien de rats y a-t-il quand on en voit un ?", answer: "Impossible à dire d'avance. Un rat vu de jour, plusieurs soirs de suite, laisse penser qu'ils sont nombreux ou que la nourriture manque. Les traces au sol donnent une meilleure idée." },
    { question: "Le compost est-il responsable ?", answer: "Seulement s'il contient du pain, de la viande, des restes cuits ou s'il n'est jamais remué. Un bac fermé, posé sur un grillage fin, pose rarement problème." },
    { question: "Quelles communes autour de Wassy ?", answer: "Brousseval, Vaux-sur-Blaise, Montreuil-sur-Blaise, Attancourt, Louvemont, Voillecomte, Bailly-aux-Forges, Magneux, Valleret, Rachecourt-Suzémont et leurs voisines. Le plus simple : 07 65 25 67 92, 7j/7." },
  ],
  nearby: {
    intro: "Je me déplace dans tout le nord du département, jusque dans les hameaux.",
    links: [
      { label: "Dératisation Saint-Dizier", to: "/deratisation-saint-dizier" },
      { label: "Dératisation Montier-en-Der", to: "/deratisation-montier-en-der" },
      { label: "Dératisation Joinville", to: "/deratisation-joinville" },
    ],
    also: "Autres services à Wassy :",
    note: (
      <>
        Pour comprendre comment vivent ces animaux, parcourez notre guide de la{" "}
        <Link to="/deratisation" className={textLink}>dératisation en Haute-Marne</Link>.
      </>
    ),
  },
};

const DeratisationWassy = () => <RodentTownPage town={town} />;

export default DeratisationWassy;
