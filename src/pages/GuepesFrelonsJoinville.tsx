import { Link } from "react-router-dom";
import { Castle, Church, FileText, Flower2, Home, Store, Sun, Trees, Umbrella, Waves, Wind, Wrench } from "lucide-react";
import heroImage from "@/assets/guepes-nid-bois.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "wasps",
  city: "Joinville",
  postalCode: "52300",
  region: "Haute-Marne",
  slug: "/guepes-frelons-joinville",
  title: "Destruction nid de guêpes et frelons à Joinville (52)",
  description:
    "Un nid de guêpes ou de frelons à Joinville ? Laissez faire un pro équipé, 7j/7 : à partir de 80 €, devis gratuit. Appelez le 07 65 25 67 92.",
  hero: {
    eyebrow: "Vieille ville, quais et villages",
    text: "Un nid sous un toit, dans une cour ou au bord de la Marne ? Laissez faire un professionnel équipé.",
    highlight: "Le prix connu avant, le paiement après",
    signsLabel: "Une petite guêpe aux pattes pendantes ? La poliste",
    image: heroImage,
    imageAlt: "Guêpes sur un nid ouvert contre une planche de bois",
    imageClassName: "max-lg:brightness-50",
  },
  reviews: ["buke", "petitfourt", "moock"],
  why: {
    title: "Pourquoi un nid de guêpes chez vous ?",
    intro: "Dans une ville ancienne au bord de l'eau, les recoins abrités ne manquent pas. Une reine n'a qu'à choisir.",
    items: [
      { icon: Home, title: "Des toits anciens", text: "tuiles mécaniques, rives en bois et génoises offrent mille entrées." },
      { icon: Umbrella, title: "Des auvents et des volets", text: "sous un auvent de porte ou derrière un volet battant, le nid est à l'abri de la pluie." },
      { icon: Flower2, title: "Des cours fleuries", text: "les polistes adorent les murs chauds couverts de plantes grimpantes." },
      { icon: Waves, title: "L'eau toute proche", text: "les guêpes boivent beaucoup : la Marne et la Blaise ne sont jamais loin." },
    ],
  },
  how: {
    title: "Comment se débarrasser d'un nid de guêpes efficacement ?",
    intro: "Le nid ne disparaît pas tout seul avant l'automne. Pour arrêter les allers-retours, il faut traiter la colonie entière.",
    steps: [
      { title: "J'identifie l'insecte", text: "Guêpe commune, poliste ou frelon : le comportement et l'emplacement du nid ne sont pas les mêmes." },
      { title: "Je traite la colonie", text: "Produit professionnel appliqué dans le nid, avec la perche s'il est sous un toit ou dans un arbre." },
      { title: "Je reste joignable", text: "Si vous avez un doute les jours suivants, un appel suffit pour savoir si c'est normal." },
    ],
    after: (
      <>
        Une activité résiduelle dans les heures qui suivent est normale. Pour comprendre chaque espèce, voyez la page{" "}
        <Link to="/guepes-frelons" className={textLink}>guêpes et frelons en Haute-Marne</Link>.
      </>
    ),
  },
  where: {
    intro: "Des quais à la vieille ville, voici les endroits où je trouve le plus de nids à Joinville.",
    items: [
      { icon: Church, title: "La vieille ville", text: "autour de l'église Notre-Dame : toits serrés, génoises et coffres de volets." },
      { icon: Waves, title: "Le quai des Peceaux et le quai des Mailles", text: "façades au bord de l'eau, auvents et balcons." },
      { icon: Castle, title: "Vers le château du Grand Jardin", text: "grands arbres et murs de jardin, où le frelon s'installe." },
      { icon: Store, title: "Les rues commerçantes", text: "enseignes, stores et arrière-cours des commerces." },
      { icon: Trees, title: "Au pied de la colline du château", text: "talus boisés et haies, propices aux nids dans le sol." },
      { icon: Wrench, title: "Les zones d'activités", text: "bardages métalliques, poutres et bennes." },
    ],
  },
  price: {
    paragraphs: [
      <>À Joinville, le tarif démarre à <strong className="whitespace-nowrap text-primary">80 €</strong> pour un nid de guêpes et à <strong className="whitespace-nowrap text-primary">110 €</strong> pour un nid de frelons asiatiques.</>,
      "Le prix final dépend de la hauteur, de l'accès et de l'espèce. Un supplément peut être appliqué le dimanche ou un jour férié : il est annoncé au moment de l'appel.",
    ],
    aside: { icon: FileText, title: "Devis gratuit", text: "Prix connu avant, paiement après l'intervention. Pas de mauvaise surprise." },
  },
  local: [
    {
      kind: "text",
      target: true,
      title: "La guêpe poliste : petite, mais mieux vaut ne pas la déranger",
      paragraphs: [
        "On la reconnaît à sa silhouette fine et à ses longues pattes qui pendent en vol. Son nid est petit, ouvert, en forme de parapluie, et l'on voit ses alvéoles.",
        "Elle s'installe sous un rebord de fenêtre, un volet ou une tuile, souvent à hauteur d'homme. Moins nombreuse que la guêpe commune, elle pique quand même si l'on secoue le volet ou la branche.",
      ],
      aside: { icon: Wind, title: "Un tout petit nid ?", text: "Même petit, ne le décrochez pas à la main : quelques piqûres suffisent à gâcher une journée, et c'est risqué pour une personne allergique." },
    },
    {
      kind: "list",
      title: "Commerces et terrasses : protéger vos clients",
      intro: "En été, une terrasse au bord de la Marne attire autant les guêpes que les clients.",
      items: [
        { text: "Débarrassez vite les verres et les assiettes, surtout les boissons sucrées." },
        { text: "Fermez les poubelles et videz-les plus souvent en août et septembre." },
        { text: "Regardez sous les stores et les enseignes dès le mois de mai." },
        { text: "Appelez dès qu'un va-et-vient régulier apparaît : un petit nid se traite vite." },
      ],
      aside: { icon: Sun, title: "Avant l'ouverture", text: "Je peux intervenir tôt le matin, avant l'arrivée des premiers clients." },
    },
  ],
  call: {
    title: "Un nid de guêpes à Joinville ?",
    text: "Dites-moi où il se trouve et à quelle hauteur : je vous donne une date au téléphone.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "Quel est le prix d'un nid de guêpes à Joinville ?", answer: "À partir de 80 € pour des guêpes, 110 € pour des frelons asiatiques. Le montant dépend de la hauteur et de l'accès, et il est fixé avant l'intervention." },
    { question: "Un nid au-dessus de l'eau, sous un balcon des quais, est-il traitable ?", answer: "Oui. La perche permet d'atteindre la plupart des nids depuis le balcon ou le quai, sans bateau ni nacelle." },
    { question: "Faut-il prévenir les voisins ?", answer: "C'est une bonne idée dans la vieille ville, où les maisons se touchent : ils fermeront leurs fenêtres du côté du nid pendant l'intervention." },
    { question: "Les guêpes sont-elles utiles ?", answer: "Oui, elles mangent beaucoup d'insectes au jardin. Un nid loin des passages peut être laissé tranquille ; c'est près de la maison qu'il pose problème." },
    { question: "Les pompiers se déplacent-ils encore ?", answer: "Non, plus pour les nids chez les particuliers en Haute-Marne. Il faut faire appel à un professionnel certifié." },
    { question: "Intervenez-vous autour de Joinville ?", answer: "Oui : Thonnance-lès-Joinville, Vecqueville, Rupt, Suzannecourt, Fronville, Nomécourt, Mussey-sur-Marne, Donjeux et les autres villages de la vallée. Mon numéro : 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Depuis Chaumont, j'interviens dans toute la vallée de la Marne.",
    links: [
      { label: "Guêpes et frelons Saint-Dizier", to: "/guepes-frelons-saint-dizier" },
      { label: "Guêpes et frelons Froncles", to: "/guepes-frelons-froncles" },
      { label: "Guêpes et frelons Wassy", to: "/guepes-frelons-wassy" },
    ],
    also: "Autres nuisibles à Joinville :",
    note: (
      <>
        Un frelon asiatique à signaler ? La mairie ou la FREDON Grand Est recensent les nids. Plus d'infos :{" "}
        <Link to="/guepes-frelons" className={textLink}>nids de frelons</Link>.
      </>
    ),
  },
};

const GuepesFrelonsJoinville = () => <RodentTownPage town={town} />;

export default GuepesFrelonsJoinville;
