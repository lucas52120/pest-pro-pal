import { Link } from "react-router-dom";
import { Church, Droplets, FileText, Grape, Home, Landmark, Mountain, Route, Store, Sun, Utensils, Wine } from "lucide-react";
import heroImage from "@/assets/guepes-nid-bois.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "wasps",
  city: "Bar-sur-Aube",
  postalCode: "10200",
  region: "Aube",
  slug: "/guepes-frelons-bar-sur-aube",
  title: "Destruction nid de guêpes et frelons à Bar-sur-Aube (10)",
  description:
    "Un nid de guêpes ou de frelons à Bar-sur-Aube ? N'y touchez pas, appelez un pro : 7j/7 de 7h à 23h, devis gratuit au 07 65 25 67 92.",
  hero: {
    eyebrow: "Maisons, vignes et commerces",
    text: "Un nid sous le toit, dans une cave ou près des vignes ? N'y touchez pas : je viens de la Haute-Marne voisine.",
    highlight: "Vignerons et commerçants aussi",
    signsLabel: "Les vendanges approchent ? Les précautions",
    image: heroImage,
    imageAlt: "Guêpes sur un nid aux alvéoles visibles",
    imageClassName: "max-lg:brightness-50",
    area: "Entreprise de la Haute-Marne voisine, à une quarantaine de kilomètres",
  },
  reviews: ["genest", "patricia", "buke"],
  why: {
    title: "Pourquoi les guêpes s'installent-elles chez vous ?",
    intro: "Entre la vieille ville et les coteaux, elles trouvent des abris, du sucre et de l'eau. De quoi passer l'été.",
    items: [
      { icon: Grape, title: "Le raisin mûr", text: "en fin d'été, les grappes attirent les guêpes par centaines." },
      { icon: Home, title: "Les toits anciens", text: "tuiles, génoises et cheminées de la vieille ville offrent des abris secs." },
      { icon: Utensils, title: "Les terrasses", text: "cafés et restaurants les attirent avec le sucré et la viande." },
      { icon: Droplets, title: "L'Aube toute proche", text: "de l'eau pour boire et humidifier le nid." },
    ],
  },
  how: {
    title: "Comment éliminer un nid de guêpes efficacement ?",
    intro: "Le piège à vin ou à sirop ne fait pas disparaître le nid. Pour arrêter les allers-retours, il faut traiter la colonie entière.",
    steps: [
      { title: "Je localise le nid", text: "Dans un toit, un mur, une cave ou un arbre : je suis le va-et-vient jusqu'à l'entrée." },
      { title: "Je le traite", text: "Avec une tenue de protection et un produit professionnel, à la perche si le nid est haut." },
      { title: "Je vous conseille", text: "Quand reprendre le travail à côté, et comment éviter un nouveau nid au même endroit." },
    ],
    after: (
      <>
        Le déplacement depuis la Haute-Marne vous est annoncé au téléphone, avant tout rendez-vous. Plus d'infos sur la page{" "}
        <Link to="/guepes-frelons" className={textLink}>guêpes et frelons</Link>.
      </>
    ),
  },
  where: {
    intro: "Du centre historique aux villages de vignes, voici où je trouve le plus de nids.",
    items: [
      { icon: Church, title: "Autour de Saint-Pierre", text: "toits anciens, génoises et cheminées du vieux centre." },
      { icon: Landmark, title: "Vers Saint-Maclou", text: "immeubles étroits : volets, corniches et balcons." },
      { icon: Store, title: "Les commerces", text: "enseignes, stores et arrière-cours." },
      { icon: Droplets, title: "La Gravière et les bords de l'Aube", text: "grands arbres, terrain du frelon asiatique." },
      { icon: Mountain, title: "Vers la colline Sainte-Germaine", text: "pavillons et jardins boisés." },
      { icon: Wine, title: "Les villages de vignes", text: "Baroville, Colombé-le-Sec, Couvignon : cuveries, abris et haies." },
    ],
  },
  price: {
    paragraphs: [
      <>Le tarif de base est de <strong className="whitespace-nowrap text-primary">80 €</strong> pour les guêpes et de <strong className="whitespace-nowrap text-primary">110 €</strong> pour les frelons asiatiques.</>,
      "Je viens de la Haute-Marne : le déplacement s'ajoute et vous est annoncé à l'appel. Un supplément peut aussi s'appliquer le dimanche et les jours fériés.",
    ],
    aside: { icon: FileText, title: "Devis gratuit", text: "Le montant total est connu avant que je prenne la route. Paiement après l'intervention." },
  },
  local: [
    {
      kind: "list",
      target: true,
      title: "Les vendanges approchent : les précautions à prendre",
      intro: "En septembre, les guêpes sont nombreuses et attirées par le raisin. Un nid près des rangs ou du pressoir peut gâcher la récolte.",
      items: [
        { title: "Repérez les nids avant", text: "faites le tour des rangs, des cabanes et des cuveries quelques semaines avant." },
        { title: "Prévenez les équipes", text: "signalez les allergiques et gardez une trousse de secours à portée de main." },
        { title: "Balisez les nids", text: "un piquet ou un ruban évite qu'un vendangeur tombe dessus." },
        { title: "Faites traiter tôt", text: "un nid détruit avant la récolte, c'est une journée sereine pour tout le monde." },
      ],
      aside: { icon: Sun, title: "Un vendangeur piqué ?", text: "Si le visage gonfle, s'il a du mal à respirer ou fait un malaise, appelez le 15 immédiatement." },
    },
    {
      kind: "text",
      title: "Terrasses et commerces de la vieille ville",
      paragraphs: [
        "Un nid au-dessus d'une terrasse ou d'une vitrine fait fuir les clients. Je peux intervenir tôt le matin, avant l'ouverture, et je délimite la zone le temps du traitement.",
        "Débarrassez vite les verres sucrés, fermez les poubelles et regardez sous les stores dès le mois de mai : un petit nid se traite bien plus simplement.",
      ],
      aside: { icon: Route, title: "Plusieurs nids dans le secteur ?", text: "Voisins, collègues, vignerons : prévenez-moi, je peux regrouper les passages dans la même journée." },
    },
  ],
  call: {
    title: "Un nid de guêpes à Bar-sur-Aube ?",
    text: "Dites-moi où il est : je vous donne le prix, le déplacement et une date.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "Combien coûte un nid de guêpes à Bar-sur-Aube ?", answer: "80 € minimum pour des guêpes, 110 € pour des frelons asiatiques, plus le déplacement depuis la Haute-Marne, annoncé au téléphone. Paiement après." },
    { question: "Venez-vous vraiment dans l'Aube ?", answer: "Oui, Bar-sur-Aube est à une quarantaine de kilomètres de ma base. On fixe la date ensemble au téléphone." },
    { question: "Les guêpes abîment-elles le raisin ?", answer: "Elles profitent surtout des grains déjà fendus ou éclatés, et gênent la cueillette. Un nid près des rangs est surtout un risque de piqûres pour les vendangeurs." },
    { question: "Un nid dans une cave, est-ce possible ?", answer: "Oui, près d'un soupirail ou d'une ouverture. Ne bouchez pas l'ouverture et appelez : le nid se traite par là." },
    { question: "Qui appeler pour un nid de guêpes ?", answer: "Un professionnel certifié pour les produits utilisés. Ne tentez pas de le détruire seul avec une bombe ou du feu." },
    { question: "Quelles communes autour de Bar-sur-Aube ?", answer: "Proverville, Fontaine, Bayel, Arsonval, Baroville, Couvignon, Colombé-le-Sec, Ailleville et, côté Haute-Marne, Colombey-les-Deux-Églises ou Châteauvillain. Mon numéro : 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Bar-sur-Aube est à la limite de mon secteur haut-marnais.",
    links: [
      { label: "Guêpes et frelons Châteauvillain", to: "/guepes-frelons-chateauvillain" },
      { label: "Guêpes et frelons Chaumont", to: "/guepes-frelons-chaumont" },
    ],
    also: "À Bar-sur-Aube, on m'appelle aussi pour :",
    note: (
      <>
        Pour reconnaître les espèces, voyez la page{" "}
        <Link to="/guepes-frelons" className={textLink}>guêpes et frelons en Haute-Marne et alentours</Link>.
      </>
    ),
  },
};

const GuepesFrelonsBarSurAube = () => <RodentTownPage town={town} />;

export default GuepesFrelonsBarSurAube;
