import { Link } from "react-router-dom";
import { Church, Droplets, FileText, Fence, Hammer, Home, Layers, Tractor, Warehouse, Waves, Wheat, Wind } from "lucide-react";
import heroImage from "@/assets/service-guepes.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "wasps",
  city: "Montier-en-Der",
  postalCode: "52220",
  region: "Haute-Marne",
  slug: "/guepes-frelons-montier-en-der",
  title: "Destruction nid de guêpes et frelons à Montier-en-Der (52)",
  description:
    "Un nid de guêpes ou de frelons à Montier-en-Der ? Protégez votre famille, on s'en occupe. À partir de 80 €, devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Pans de bois, granges et étangs",
    text: "Un nid dans une poutre, sous un bardage ou dans la grange ? Je le traite sans abîmer votre bâtiment.",
    highlight: "Sans percer le bois ni le torchis",
    signsLabel: "Un nid dans une maison à pans de bois ? À lire",
    image: heroImage,
    imageAlt: "Nid de guêpes suspendu à une branche",
    imageClassName: "max-lg:brightness-75",
  },
  reviews: ["buke", "babinski", "petitfourt"],
  why: {
    title: "Pourquoi les guêpes aiment-elles les maisons du Der ?",
    intro: "Bois, torchis, granges : les bâtiments du Der offrent tout ce qu'il faut pour construire un nid, et même la matière première.",
    items: [
      { icon: Hammer, title: "Du vieux bois", text: "les guêpes grattent les poutres et les bardages pour fabriquer la pâte de leur nid." },
      { icon: Layers, title: "Des bardages", text: "entre les planches et le mur, un espace sec et caché court jusqu'au toit." },
      { icon: Warehouse, title: "Des granges ouvertes", text: "charpentes hautes et coins sombres où personne ne monte." },
      { icon: Waves, title: "Les étangs et le lac", text: "de l'eau et des insectes en abondance pour nourrir la colonie." },
    ],
  },
  how: {
    title: "Comment détruire un nid de guêpes ou de frelons sans abîmer la maison ?",
    intro: "Dans une maison à pans de bois, on ne démonte rien. Le nid se traite par l'ouverture qu'utilisent les insectes.",
    steps: [
      { title: "Je trouve l'ouverture", text: "Fente entre poutre et torchis, planche décollée, trou d'aération : je suis le va-et-vient." },
      { title: "Je traite par ce passage", text: "Le produit professionnel est glissé dans l'ouverture et atteint le nid caché derrière." },
      { title: "Je vous dis quand reboucher", text: "Une fois l'activité terminée, avec un matériau adapté au bois ou au torchis." },
    ],
    after: (
      <>
        Ne colmatez pas l'ouverture avec de la mousse expansive avant le traitement : les guêpes ressortiraient ailleurs. Plus d'informations sur la page{" "}
        <Link to="/guepes-frelons" className={textLink}>guêpes et frelons</Link>.
      </>
    ),
  },
  where: {
    intro: "De l'abbatiale aux étangs, voici les endroits où je trouve le plus de nids dans le secteur.",
    items: [
      { icon: Church, title: "Autour de l'abbatiale", text: "maisons de bourg : génoises, volets et combles." },
      { icon: Home, title: "La halle au blé et le centre", text: "toits anciens, corniches et coffres de volets." },
      { icon: Tractor, title: "Le secteur du haras", text: "écuries, selleries et granges à foin." },
      { icon: Droplets, title: "Les abords de la Voire", text: "saules et frênes, où s'accrochent les nids de frelons asiatiques." },
      { icon: Fence, title: "Robert-Magny", text: "maisons de village et dépendances." },
      { icon: Waves, title: "Vers le lac du Der", text: "chalets, gîtes et résidences de week-end souvent fermés." },
    ],
  },
  price: {
    paragraphs: [
      <>Un nid de guêpes se traite <strong className="whitespace-nowrap text-primary">à partir de 80 €</strong>, un nid de frelons asiatiques <strong className="whitespace-nowrap text-primary">à partir de 110 €</strong>.</>,
      "La hauteur, l'accès et le type de bâtiment font varier le prix. Un dimanche ou un jour férié, un supplément peut s'ajouter : il est annoncé avant.",
    ],
    aside: { icon: FileText, title: "Le Der, c'est loin ?", text: "Un peu : c'est pour cela que le déplacement vous est annoncé au téléphone, avant de prendre rendez-vous." },
  },
  local: [
    {
      kind: "list",
      target: true,
      title: "Un nid dans une maison à pans de bois : les bons réflexes",
      intro: "Le bourdonnement vient du mur et vous ne voyez rien ? Le nid est sans doute dans le remplissage.",
      items: [
        { title: "Écoutez", text: "un bruit sourd et continu derrière le torchis ou le doublage indique la place du nid." },
        { title: "Repérez la fente", text: "des guêpes qui entrent toujours au même endroit, entre une poutre et le mur." },
        { title: "Ne cassez rien", text: "ouvrir le mur libérerait la colonie dans la pièce." },
        { title: "Fermez la pièce", text: "si des guêpes apparaissent à l'intérieur, gardez la porte close jusqu'au traitement." },
      ],
      aside: { icon: Wind, title: "Après le traitement", text: "Attendez quelques jours sans activité avant de reboucher, avec un mortier de chaux ou un matériau adapté." },
    },
    {
      kind: "text",
      title: "Haras, granges et fenaison : attention en été",
      paragraphs: [
        "C'est souvent en rentrant le foin ou en déplaçant du matériel qu'on tombe sur un nid caché depuis des semaines. Les chevaux, eux, peuvent réagir très fort à quelques piqûres.",
        "Jetez un œil aux poutres et aux recoins des granges dès le mois de mai. Si vous repérez un nid, éloignez les animaux de cette zone et appelez-moi avant de commencer les travaux.",
      ],
      aside: { icon: Wheat, title: "Des chevaux à proximité ?", text: "Dites-le-moi à l'appel : on choisit le moment et la méthode pour ne pas les stresser." },
    },
  ],
  call: {
    title: "Un nid de guêpes dans le Der ?",
    text: "Dites-moi s'il est dans un mur, une grange ou un arbre : je vous propose une date.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "Quel est le prix d'un nid de guêpes à Montier-en-Der ?", answer: "À partir de 80 € pour des guêpes et de 110 € pour des frelons asiatiques, selon la hauteur et l'accès. Le déplacement est annoncé au téléphone et le paiement se fait après." },
    { question: "Le traitement abîme-t-il les poutres ?", answer: "Non. Le produit est appliqué par l'ouverture existante, sans percer ni démonter. Seul le rebouchage, après coup, demande un peu de soin." },
    { question: "Un nid dans le foin est-il dangereux pour les chevaux ?", answer: "Oui, s'ils le dérangent. Éloignez-les de la zone et faites traiter le nid avant de manipuler le foin." },
    { question: "Les frelons asiatiques sont-ils nombreux près du lac ?", answer: "Les zones humides et boisées leur conviennent. Un gros nid haut dans un arbre près de l'eau doit vous faire penser à eux." },
    { question: "Mon gîte est fermé, puis-je faire intervenir sans être là ?", answer: "Oui, si quelqu'un peut m'ouvrir l'accès au jardin ou au bâtiment. Je vous appelle ensuite pour vous dire comment ça s'est passé." },
    { question: "Vous venez jusqu'où autour de Montier-en-Der ?", answer: "Planrupt, Frampas, Ceffonds, Thilleux, Sommevoire, Laneuville-à-Rémy, Rives Dervoises, Voillecomte, Éclaron-Braucourt-Sainte-Livière et les villages autour. Appelez le 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Je viens depuis Chaumont dans tout le nord-ouest du département.",
    links: [
      { label: "Guêpes et frelons Wassy", to: "/guepes-frelons-wassy" },
      { label: "Guêpes et frelons Saint-Dizier", to: "/guepes-frelons-saint-dizier" },
      { label: "Guêpes et frelons Joinville", to: "/guepes-frelons-joinville" },
    ],
    also: "D'autres soucis à Montier-en-Der ?",
    note: (
      <>
        Les espèces et la saison des nids sont expliquées sur la page{" "}
        <Link to="/guepes-frelons" className={textLink}>nids de guêpes en Haute-Marne</Link>.
      </>
    ),
  },
};

const GuepesFrelonsMontierEnDer = () => <RodentTownPage town={town} />;

export default GuepesFrelonsMontierEnDer;
