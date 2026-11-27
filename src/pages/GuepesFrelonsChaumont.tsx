import { Link } from "react-router-dom";
import { Blinds, Briefcase, Building2, Droplets, FileText, House, Landmark, Leaf, School, Store, TreeDeciduous, Utensils } from "lucide-react";
import heroImage from "@/assets/frelon-hero.jpg";
import brottesNest from "@/assets/nid-frelons-chaumont.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "wasps",
  city: "Chaumont",
  postalCode: "52000",
  region: "Haute-Marne",
  slug: "/guepes-frelons-chaumont",
  title: "Destruction nid de guêpes et frelons à Chaumont (52)",
  description:
    "Un nid de guêpes ou de frelons à Chaumont ? N'y touchez pas, on s'en occupe 7j/7 ! À partir de 80 €, devis gratuit. Appelez le 07 65 25 67 92.",
  hero: {
    eyebrow: "Votre spécialiste des nids à Chaumont",
    text: "Sous le toit, dans un volet ou dans le jardin : n'y touchez pas, je viens le détruire en sécurité.",
    highlight: "Paiement après l'intervention",
    signsLabel: "Guêpe, frelon ou frelon asiatique ? Faire la différence",
    image: heroImage,
    imageAlt: "Frelon européen en gros plan, tête jaune et antennes",
    imageClassName: "max-lg:brightness-75",
  },
  reviews: ["hanuszekChaumont", "moockBrethenay", "babinski"],
  why: {
    title: "Pourquoi avez-vous un nid de guêpes chez vous ?",
    intro: "Au printemps, une seule reine suffit. Elle cherche un abri sec et tranquille, et votre maison en offre souvent plusieurs.",
    items: [
      { icon: House, title: "Un toit qui laisse passer", text: "une tuile décalée ou une rive mal fermée, et la reine s'installe sous la couverture." },
      { icon: Blinds, title: "Un volet qu'on ouvre peu", text: "le coffre d'un volet roulant reste sombre et sec toute la saison." },
      { icon: Utensils, title: "De quoi manger", text: "fruits tombés, poubelles, restes de barbecue : les guêpes adorent le sucré en fin d'été." },
      { icon: Leaf, title: "Un jardin tranquille", text: "un trou dans la pelouse ou une haie épaisse que l'on taille rarement." },
    ],
  },
  how: {
    title: "Comment se débarrasser d'un nid de guêpes efficacement ?",
    intro: "Une bombe du commerce vide sur l'entrée tue quelques guêpes et énerve les autres. Ce qui compte, c'est d'atteindre la reine et les larves, au cœur du nid.",
    steps: [
      { title: "Je trouve l'entrée", text: "Je regarde de loin où les guêpes entrent et sortent, pour viser juste sans les provoquer." },
      { title: "Je traite au cœur du nid", text: "Protégé, j'injecte un produit professionnel dans le nid, avec une perche si le nid est en hauteur." },
      { title: "Je vous explique la suite", text: "Quand l'activité retombe, quand vous pouvez repasser à côté, et s'il faut retirer le nid." },
    ],
    after: (
      <>
        Les guêpes qui étaient dehors reviennent au nid dans la soirée et sont touchées à leur tour : c'est voulu. Plus d'explications sur la page{" "}
        <Link to="/guepes-frelons" className={textLink}>nids de guêpes et frelons en Haute-Marne</Link>.
      </>
    ),
  },
  where: {
    intro: "Maison de ville, pavillon ou immeuble : chaque quartier a ses emplacements préférés.",
    items: [
      { icon: Landmark, title: "Centre historique", text: "toits anciens près de la basilique et du donjon : nids sous les tuiles, dans les corniches et les volets." },
      { icon: House, title: "Brottes", text: "pavillons et jardins : abris, haies, coffres de volets et pelouses." },
      { icon: Building2, title: "Le Cavalier et La Rochotte", text: "immeubles : balcons, coffres de volets roulants et bouches d'aération." },
      { icon: Briefcase, title: "Quartier Foch", text: "bureaux et maisons : avant-toits, gouttières et faux plafonds extérieurs." },
      { icon: Store, title: "La Vendue", text: "bâtiments d'activités : bardages, auvents et quais de livraison." },
      { icon: Droplets, title: "Vallées de la Suize et de la Marne", text: "arbres et talus, où le frelon asiatique accroche ses gros nids." },
    ],
  },
  price: {
    paragraphs: [
      <>Le tarif commence à <strong className="whitespace-nowrap text-primary">80 €</strong> pour un nid de guêpes et à <strong className="whitespace-nowrap text-primary">110 €</strong> pour un nid de frelons asiatiques.</>,
      "Hauteur, accès et espèce font évoluer le prix. Le dimanche et les jours fériés, un supplément peut s'ajouter : je vous le dis toujours avant de venir.",
    ],
    aside: { icon: FileText, title: "Un prix ferme, sans surprise", text: "On le fixe ensemble, souvent dès votre appel. Vous ne réglez qu'une fois le nid traité." },
  },
  local: [
    {
      kind: "cards",
      target: true,
      title: "Guêpe, frelon ou frelon asiatique : comment les reconnaître ?",
      intro: "Inutile de vous approcher : la couleur et la taille, vues de loin, suffisent souvent.",
      items: [
        { icon: Leaf, title: "La guêpe commune", text: "petite, jaune et noire, elle tourne autour des repas. Nid gris dans un toit, un mur ou le sol." },
        { icon: Blinds, title: "La guêpe poliste", text: "élancée, pattes pendantes. Petit nid ouvert, alvéoles visibles, sous un rebord ou un volet." },
        { icon: TreeDeciduous, title: "Le frelon européen", text: "gros, roux et jaune, il vole aussi la nuit. Nid dans un grenier, une cheminée ou un arbre creux." },
        { icon: Droplets, title: "Le frelon asiatique", text: "sombre, tête orange, pattes au bout jaune. Nid souvent très haut dans un arbre, parfois sous un toit." },
      ],
      after: "Gardez au moins cinq mètres entre vous et le nid. Une photo prise de loin, envoyée au 07 65 25 67 92, me permet de vous répondre vite.",
    },
    {
      kind: "list",
      title: "Un nid de frelons asiatiques à Brottes",
      intro: "Un exemple réel : un nid de frelons asiatiques installé sous une toiture, dans le quartier de Brottes.",
      items: [
        { title: "L'emplacement", text: "sous le toit, au-dessus d'un passage : impossible de le laisser grossir." },
        { title: "Le risque", text: "le frelon asiatique défend son nid à plusieurs dès qu'on s'en approche." },
        { title: "L'intervention", text: "combinaison, perche et produit professionnel, sans monter sur la toiture." },
        { title: "La leçon", text: "un nid au-dessus d'un passage se traite dès qu'on le repère, sans attendre qu'il grossisse." },
      ],
      photo: { src: brottesNest, alt: "Nid de frelons asiatiques sous une toiture à Brottes, Chaumont, pendant l'intervention", caption: "Le nid de Brottes, au moment du traitement.", className: "object-[50%_30%]" },
    },
    {
      kind: "text",
      title: "Commerces, écoles, copropriétés : on s'organise",
      paragraphs: [
        "Un nid près d'une terrasse de café, d'une cour d'école ou d'une entrée d'immeuble ne peut pas attendre. On choisit ensemble un moment où il y a le moins de monde, et je sécurise la zone le temps de l'intervention.",
        <>
          Je vous remets une facture et un compte rendu, utiles pour votre syndic ou votre direction.{" "}
          <Link to="/contact" className={textLink}>Demandez un devis professionnel</Link>.
        </>,
      ],
      aside: {
        icon: School,
        title: "Locataire ?",
        text: "Prévenez votre propriétaire ou votre syndic avant l'intervention : selon la situation, c'est à l'un ou à l'autre de la prendre en charge.",
      },
    },
  ],
  call: {
    title: "Un nid de guêpes à Chaumont ?",
    text: "Dites-moi où il est et à quelle hauteur : je vous donne une date tout de suite.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "Quel est le prix pour détruire un nid à Chaumont ?", answer: "À partir de 80 € pour un nid de guêpes, et de 110 € pour un nid de frelons asiatiques. Le montant dépend de la hauteur et de l'accès ; il est fixé avec vous avant l'intervention, et vous payez une fois le nid traité." },
    { question: "Est-ce dangereux de détruire un nid soi-même ?", answer: "Oui. Une bombe du commerce ou un coup de bâton peut déclencher une attaque de toute la colonie, et l'échelle ajoute le risque de chute. Mieux vaut s'éloigner et appeler." },
    { question: "Les pompiers de Chaumont viennent-ils pour un nid ?", answer: "Non, ils n'interviennent plus pour les nids chez les particuliers en Haute-Marne. En cas de danger immédiat pour une personne, appelez le 18 ou le 15." },
    { question: "Qui paie : le locataire ou le propriétaire ?", answer: "Cela dépend du bail et de l'endroit du nid. Prévenez votre propriétaire ou votre syndic avant l'intervention, et vérifiez auprès de la mairie si une aide existe pour le frelon asiatique." },
    { question: "Faut-il détruire un vieux nid en hiver ?", answer: "Pas un nid de guêpes ou de frelons européens : la colonie meurt avec les gelées et le nid n'est pas réutilisé. Seul un nid de frelons asiatiques encore actif mérite d'être traité." },
    { question: "Venez-vous autour de Chaumont ?", answer: "Oui : Chamarandes-Choignes, Brethenay, Condes, Treix, Riaucourt, Jonchery, Euffigneix, Luzy-sur-Marne, Verbiesles, Semoutiers-Montsaon et toutes les communes voisines. Joignable 7j/7 de 7h à 23h au 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Basé aux portes de Chaumont, j'interviens partout en Haute-Marne.",
    links: [
      { label: "Guêpes et frelons Semoutiers-Montsaon", to: "/guepes-frelons-semoutiers-montsaon" },
      { label: "Guêpes et frelons Bologne", to: "/guepes-frelons-bologne" },
      { label: "Guêpes et frelons Nogent", to: "/guepes-frelons-nogent" },
      { label: "Guêpes et frelons Langres", to: "/guepes-frelons-langres" },
    ],
    also: "Un autre nuisible à Chaumont ?",
    note: (
      <>
        Un nid de frelons asiatiques peut être signalé à la mairie ou à la FREDON Grand Est. Tout savoir sur la page{" "}
        <Link to="/guepes-frelons" className={textLink}>guêpes et frelons</Link>.
      </>
    ),
  },
};

const GuepesFrelonsChaumont = () => <RodentTownPage town={town} />;

export default GuepesFrelonsChaumont;
