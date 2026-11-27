import { Link } from "react-router-dom";
import { Castle, CalendarDays, Droplets, FileText, Home, Hotel, Luggage, Sun, Trees, Utensils, Waves } from "lucide-react";
import heroImage from "@/assets/frelon-hero.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "wasps",
  city: "Bourbonne-les-Bains",
  postalCode: "52400",
  region: "Haute-Marne",
  slug: "/guepes-frelons-bourbonne-les-bains",
  title: "Nid de guêpes et frelons à Bourbonne-les-Bains (52)",
  description:
    "Un nid de guêpes ou de frelons à Bourbonne-les-Bains ? On vient le détruire 7j/7, à partir de 80 €. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Meublés, hôtels et maisons",
    text: "Un nid au-dessus de la terrasse ou près d'une fenêtre de location ? Je le traite vite, en toute discrétion.",
    highlight: "Véhicule non logoté sur demande",
    signsLabel: "Vous louez à des curistes ? Comment s'organiser",
    image: heroImage,
    imageAlt: "Frelon européen vu de près, tête jaune",
    imageClassName: "max-lg:brightness-75",
  },
  reviews: ["genest", "moock", "buke"],
  why: {
    title: "Pourquoi un nid de guêpes près de chez vous ?",
    intro: "Dans une ville thermale, beaucoup de logements sont vides une partie de l'année. Une reine y trouve le calme qu'elle cherche.",
    items: [
      { icon: Luggage, title: "Des logements fermés", text: "volets clos tout l'hiver, puis personne au printemps : le nid démarre sans être vu." },
      { icon: Sun, title: "Des façades au soleil", text: "le centre est abrité, et les murs chauds font grossir la colonie plus vite." },
      { icon: Utensils, title: "Les terrasses", text: "restaurants et cafés offrent du sucre et de la viande en fin d'été." },
      { icon: Trees, title: "Les parcs et les grands arbres", text: "le frelon asiatique y installe ses gros nids, bien au-dessus des promeneurs." },
    ],
  },
  how: {
    title: "Comment se débarrasser d'un nid de guêpes efficacement ?",
    intro: "Pour un hébergement, il faut faire vite et sans déranger les clients. Je m'adapte à vos horaires et à vos arrivées.",
    steps: [
      { title: "Je trouve le nid", text: "Souvent dans un coffre de volet, sous une génoise ou derrière une gouttière, au-dessus d'une fenêtre." },
      { title: "Je le traite discrètement", text: "Protégé, avec un produit professionnel et une perche si besoin, à l'heure qui gêne le moins." },
      { title: "Je vous dis quand relouer", text: "Combien de temps garder la fenêtre fermée et quand la chambre peut être réoccupée." },
    ],
    after: (
      <>
        Prévenez les occupants de ne pas ouvrir la fenêtre côté nid le temps indiqué. Plus d'informations sur la page{" "}
        <Link to="/guepes-frelons" className={textLink}>guêpes et frelons</Link>.
      </>
    ),
  },
  where: {
    intro: "Côté thermes ou côté campagne, voici les endroits où je trouve le plus de nids.",
    items: [
      { icon: Waves, title: "Autour des Thermes", text: "meublés et résidences : coffres de volets, balcons et génoises." },
      { icon: Hotel, title: "Hôtels et pensions", text: "avant-toits, auvents de terrasse et combles." },
      { icon: Castle, title: "Vers la Porte-Galon", text: "maisons anciennes, murs en pierre et cheminées." },
      { icon: Trees, title: "Le parc et les grands arbres", text: "frelons asiatiques en hauteur, visibles quand les feuilles tombent." },
      { icon: Droplets, title: "Le long de l'Apance", text: "jardins et talus, où les guêpes nichent dans le sol." },
      { icon: Home, title: "Villars-Saint-Marcellin et Genrupt", text: "maisons de village, granges et vergers." },
    ],
  },
  price: {
    paragraphs: [
      <>Destruction d'un nid de guêpes : <strong className="whitespace-nowrap text-primary">à partir de 80 €</strong>. Nid de frelons asiatiques : <strong className="whitespace-nowrap text-primary">à partir de 110 €</strong>.</>,
      "Le prix varie avec la hauteur et l'accès. Un dimanche ou un jour férié, un supplément peut s'appliquer : vous le connaissez avant de confirmer.",
    ],
    aside: { icon: FileText, title: "Plusieurs nids ?", text: "Dites-le-moi au téléphone : on les traite dans la même visite. Le déplacement est annoncé à l'appel." },
  },
  local: [
    {
      kind: "levels",
      target: true,
      title: "Un nid repéré dans un logement loué : que faire ?",
      intro: "Un curiste qui vous signale des guêpes près de sa fenêtre ? Voici l'ordre que je conseille.",
      items: [
        { title: "Tout de suite", text: "Demandez-lui de garder la fenêtre fermée et de ne pas toucher au volet." },
        { title: "Dans l'heure", text: "Appelez-moi avec l'adresse, l'étage et une photo prise de loin si possible." },
        { title: "Le jour même ou le lendemain", text: "On fixe le passage à un moment où la chambre peut rester fermée." },
        { title: "Après", text: "Je vous dis quand la fenêtre peut être rouverte et la chambre louée normalement." },
      ],
    },
    {
      kind: "list",
      title: "Avant la saison : prévenir plutôt que guérir",
      intro: "En avril et mai, un nid fait la taille d'une balle. Un tour rapide de vos logements évite les mauvaises surprises en plein été.",
      items: [
        { text: "Ouvrez et refermez chaque volet roulant : un bourdonnement dans le caisson ne trompe pas." },
        { text: "Regardez sous les avant-toits, les balcons et les auvents de terrasse." },
        { text: "Vérifiez les cabanons et abris de jardin restés fermés l'hiver." },
        { text: "Notez les endroits à surveiller et appelez dès qu'un va-et-vient apparaît." },
      ],
      aside: { icon: CalendarDays, title: "Un passage en début de saison", text: <>On peut prévoir une visite de contrôle avant l'arrivée des curistes. <Link to="/contact" className={textLink}>Demandez-la ici</Link>.</> },
    },
  ],
  call: {
    title: "Un nid de guêpes à Bourbonne ?",
    text: "Dites-moi où il est et quand le logement est libre : on s'organise.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "Quel est le prix d'un nid de guêpes à Bourbonne-les-Bains ?", answer: "Le tarif commence à 80 € pour des guêpes et à 110 € pour des frelons asiatiques, selon la hauteur et l'accès. Vous le connaissez avant mon passage, et vous payez après." },
    { question: "Peut-on laisser les clients dans le logement pendant l'intervention ?", answer: "Oui, s'ils restent à l'intérieur fenêtres fermées du côté du nid. Je leur indique quand ils peuvent rouvrir." },
    { question: "Un nid de frelons dans le parc, qui s'en occupe ?", answer: "Sur l'espace public, prévenez la mairie. Sur un terrain privé, c'est au propriétaire de faire intervenir un professionnel." },
    { question: "Que faire en cas de piqûre d'un client ?", answer: "Retirez les bagues et appliquez du froid. Si le visage gonfle, si la personne a du mal à respirer ou fait un malaise, appelez le 15 immédiatement." },
    { question: "Le vieux nid doit-il être retiré en hiver ?", answer: "Ce n'est pas indispensable : il ne sera pas réutilisé. Le retirer évite simplement que vos clients s'inquiètent en le voyant." },
    { question: "Intervenez-vous autour de Bourbonne-les-Bains ?", answer: "Oui : Serqueux, Coiffy-le-Haut, Coiffy-le-Bas, Montcharvot, Laneuvelle, Fresnes-sur-Apance, Damrémont, Melay, Voisey et les villages du secteur. Appelez le 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Je couvre Bourbonne et tout l'est de la Haute-Marne.",
    links: [
      { label: "Guêpes et frelons Langres", to: "/guepes-frelons-langres" },
      { label: "Guêpes et frelons Chalindrey", to: "/guepes-frelons-chalindrey" },
      { label: "Guêpes et frelons Nogent", to: "/guepes-frelons-nogent" },
    ],
    also: "Aussi à Bourbonne-les-Bains :",
    note: (
      <>
        Des piqûres signalées la nuit dans un lit ? Ce ne sont pas des guêpes : voyez les{" "}
        <Link to="/punaises-de-lit" className={textLink}>punaises de lit</Link>.
      </>
    ),
  },
};

const GuepesFrelonsBourbonne = () => <RodentTownPage town={town} />;

export default GuepesFrelonsBourbonne;
