import { Link } from "react-router-dom";
import { Boxes, Church, Droplets, FileText, Grape, House, Landmark, Mountain, Route, Store, ThermometerSun, Wine } from "lucide-react";
import heroImage from "@/assets/blatte-fissure.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "cockroaches",
  city: "Bar-sur-Aube",
  postalCode: "10200",
  region: "Aube",
  slug: "/cafards-blattes-bar-sur-aube",
  title: "Traitement cafards et blattes à Bar-sur-Aube (10)",
  description:
    "Des cafards chez vous à Bar-sur-Aube ? Ne les laissez pas s'installer : un pro intervient discrètement, 7j/7. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Maisons, caves et commerces",
    text: "Caves humides, maisons mitoyennes, réserves de commerce : je trouve où se cachent les blattes et je traite.",
    highlight: "Les vignerons et commerçants aussi",
    signsLabel: "Une blatte noire à la cave ? Ce qu'il faut savoir",
    image: heroImage,
    imageAlt: "Blatte brune près d'une fissure dans le béton",
    imageClassName: "max-lg:brightness-50",
    area: "Entreprise de la Haute-Marne voisine, à une quarantaine de kilomètres",
  },
  reviews: ["coustillet", "soucelier", "bromann"],
  why: {
    title: "Pourquoi y a-t-il des cafards dans votre maison ?",
    intro: "Dans une vieille rue, ils arrivent souvent par le bas : la cave, les tuyaux, le mur du voisin. Puis ils montent vers ce qui les intéresse.",
    items: [
      { icon: Wine, title: "Une cave humide", text: "voûtes, sol en terre battue, évacuation ancienne : le refuge idéal de la blatte orientale." },
      { icon: ThermometerSun, title: "Une cuisine chaude", text: "four, frigo et chaudière gardent une chaleur constante, été comme hiver." },
      { icon: House, title: "Un mur mitoyen", text: "les maisons collées partagent tuyaux et vides techniques." },
      { icon: Boxes, title: "Des cartons stockés", text: "emballages de bouteilles, cartons de livraison, vieux journaux en cave." },
    ],
  },
  how: {
    title: "Comment éliminer les cafards efficacement ?",
    intro: "La cave et la cuisine ne se traitent pas de la même façon. Je repère d'abord les deux, puis j'associe les méthodes qui conviennent à chacune.",
    steps: [
      { title: "Je descends à la cave", text: "C'est souvent là que tout commence : je suis les murs, les tuyaux et les évacuations jusqu'au foyer." },
      { title: "Deux traitements, deux endroits", text: "Pulvérisation ciblée dans la cave humide, gel discret dans la cuisine : chaque pièce reçoit la bonne méthode." },
      { title: "Je reviens contrôler", text: "Pour toucher les jeunes sortis des capsules d'œufs et vérifier qu'il ne reste rien." },
    ],
    after: (
      <>
        Je vous dis toujours avant s'il faut sortir d'une pièce et pendant combien de temps. Plus de détails sur la page{" "}
        <Link to="/cafards-blattes" className={textLink}>cafards et blattes : notre méthode</Link>.
      </>
    ),
  },
  where: {
    intro: "Du centre historique aux villages de vignes, voici où je regarde en arrivant.",
    items: [
      { icon: Church, title: "Autour de Saint-Pierre", text: "maisons anciennes, caves voûtées et cuisines au rez-de-chaussée." },
      { icon: Landmark, title: "Vers Saint-Maclou", text: "immeubles étroits, logements au-dessus des commerces, colonnes d'eau communes." },
      { icon: Store, title: "Les commerces de bouche", text: "réserves, chambres froides, dessous des vitrines et local poubelles." },
      { icon: Droplets, title: "La Gravière et les bords de l'Aube", text: "sous-sols et garages où l'humidité attire la blatte orientale." },
      { icon: Mountain, title: "Vers la colline Sainte-Germaine", text: "pavillons : buanderie, chaufferie et dessous d'évier." },
      { icon: Grape, title: "Les villages de vignes", text: "Baroville, Colombé-le-Sec, Couvignon : cuveries, salles de pause et vestiaires." },
    ],
  },
  price: {
    paragraphs: [
      "Le prix dépend de l'espèce, des pièces touchées et du nombre de passages. Pour une exploitation ou un commerce, du nombre de locaux.",
      "Je traverse la limite du département : le déplacement compte, et je vous l'annonce dès l'appel.",
    ],
    aside: { icon: FileText, title: "Devis gratuit", text: "Vous connaissez le montant exact avant le traitement, sans engagement." },
  },
  local: [
    {
      kind: "text",
      target: true,
      title: "Une blatte noire à la cave : faut-il s'inquiéter ?",
      paragraphs: [
        "Grande, presque noire et lente : c'est probablement la blatte orientale. Elle vit dans les endroits humides et frais, et remonte parfois par les évacuations jusqu'à la salle de bains.",
        "Elle se reproduit moins vite que la petite blatte de cuisine, mais elle revient tant que l'humidité reste. Le traitement va donc de pair avec quelques travaux simples : ventiler la cave, réparer une fuite, poser une grille sur une évacuation.",
      ],
      aside: {
        icon: Droplets,
        title: "Un geste qui aide tout de suite",
        text: "Laissez la porte de la cave ouverte quelques heures par jour quand il fait sec, et retirez les cartons posés au sol.",
      },
    },
    {
      kind: "list",
      title: "Viticulteur ou commerçant : comment protéger vos locaux ?",
      intro: "Les salles de pause, vestiaires et réserves attirent les blattes plus que les cuveries elles-mêmes.",
      items: [
        { text: "Pas de nourriture dans les vestiaires ni dans les casiers des saisonniers." },
        { text: "Les cartons d'emballage rangés en hauteur, loin des murs." },
        { text: "Le coin repas nettoyé et la poubelle vidée chaque soir." },
        { text: "Les fuites et les condensations signalées rapidement." },
      ],
      aside: {
        icon: Route,
        title: "Avant les vendanges",
        text: <>Un contrôle des logements et des salles de pause avant l'arrivée des équipes évite les mauvaises surprises. <Link to="/contact" className={textLink}>Prévoyons-le ensemble</Link>.</>,
      },
    },
  ],
  call: {
    title: "Des cafards à Bar-sur-Aube ?",
    text: "Dites-moi si vous les voyez à la cave ou à la cuisine : je vous donne une date dès l'appel.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "Quel est le prix d'un traitement contre les cafards à Bar-sur-Aube ?", answer: "Il dépend de l'espèce, des pièces et des passages, et le déplacement depuis la Haute-Marne s'y ajoute : je vous l'annonce au téléphone. Le devis est gratuit." },
    { question: "Venez-vous vraiment dans l'Aube ?", answer: "Oui, Bar-sur-Aube est à une quarantaine de kilomètres de ma base. On fixe ensemble la date du traitement et celle du contrôle." },
    { question: "Les cafards peuvent-ils abîmer le vin ou les bouteilles ?", answer: "Non, pas le vin lui-même. Ils salissent en revanche les cartons, les étiquettes et les zones de stockage, ce qui pose un problème d'hygiène dans un local professionnel." },
    { question: "Pourquoi en vois-je plus après le traitement ?", answer: "C'est fréquent les premiers jours : le traitement les fait sortir de leurs cachettes. N'ajoutez pas de produit et ne lavez pas les endroits traités ; l'activité baisse ensuite." },
    { question: "Faut-il traiter la cave et la cuisine ?", answer: "Souvent oui, si les deux sont touchées. La blatte de cave et celle de la cuisine ne sont pas toujours la même espèce, et ne se traitent pas de la même façon." },
    { question: "Quelles communes autour de Bar-sur-Aube ?", answer: "Proverville, Fontaine, Bayel, Arsonval, Baroville, Couvignon, Colombé-le-Sec, Ailleville, et côté Haute-Marne Colombey-les-Deux-Églises ou Châteauvillain. Mon numéro : 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Bar-sur-Aube est à la limite de mon secteur haut-marnais.",
    links: [
      { label: "Cafards Chaumont", to: "/cafards-blattes-chaumont" },
      { label: "Cafards Langres", to: "/cafards-blattes-langres" },
    ],
    also: "À Bar-sur-Aube, je m'occupe aussi de :",
    note: (
      <>
        Pour tout savoir sur les blattes et les traitements, voyez la page{" "}
        <Link to="/cafards-blattes" className={textLink}>cafards en Haute-Marne et alentours</Link>.
      </>
    ),
  },
};

const CafardsBlattesBarSurAube = () => <RodentTownPage town={town} />;

export default CafardsBlattesBarSurAube;
