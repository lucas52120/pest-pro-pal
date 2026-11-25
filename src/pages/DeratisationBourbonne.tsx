import { Link } from "react-router-dom";
import { BedDouble, Briefcase, Castle, DoorOpen, Droplets, Hotel, House, Luggage, Trash2, Trees, Utensils, Waves } from "lucide-react";
import heroImage from "@/assets/service-deratisation.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  city: "Bourbonne-les-Bains",
  postalCode: "52400",
  region: "Haute-Marne",
  slug: "/deratisation-bourbonne-les-bains",
  title: "Entreprise de dératisation à Bourbonne-les-Bains (52)",
  description:
    "Rats ou souris à Bourbonne-les-Bains (52400), en maison, commerce ou près des Thermes ? Traitement adapté. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Logements, meublés et hébergements",
    text: "Maison, meublé ou hôtel : j'interviens discrètement, dès les premières traces.",
    highlight: "Intervention discrète, véhicule non logoté sur demande",
    signsLabel: "Vous louez à des curistes ? Que faire entre deux séjours",
    image: heroImage,
    imageAlt: "Souris qui sort d'une ouverture ronde dans un mur",
    imageClassName: "max-lg:object-[65%_50%]",
  },
  reviews: ["rigny", "babinski", "jc"],
  why: {
    title: "Pourquoi y a-t-il des rats ou des souris chez vous ?",
    intro: "Même un logement impeccable peut en avoir, surtout quand il reste vide entre deux séjours.",
    items: [
      { icon: Utensils, title: "Des restes dans les placards", text: "un paquet de biscuits oublié par le dernier occupant dure plusieurs jours." },
      { icon: Luggage, title: "Des semaines sans personne", text: "sans bruit ni lumière, une souris visite toutes les pièces." },
      { icon: DoorOpen, title: "Une entrée souvent ouverte", text: "arrivées, départs et livraisons : la porte de l'immeuble reste rarement close." },
      { icon: Trash2, title: "Un local poubelles plein", text: "en pleine saison, les sacs qui débordent font venir les rats." },
    ],
  },
  where: {
    intro: "Meublé, hôtel, maison de village : voilà par où je commence quand on m'appelle à Bourbonne.",
    items: [
      { icon: Waves, title: "Autour des Thermes", text: "meublés, pensions et petites copropriétés : gaines, caves et locaux communs en priorité." },
      { icon: Castle, title: "La Porte-Galon et le vieux centre", text: "maisons mitoyennes, vieux murs et sous-sols partagés." },
      { icon: Droplets, title: "L'Apance et le ruisseau de Borne", text: "je contrôle les grilles, les regards et les murs bas des jardins voisins de l'eau." },
      { icon: BedDouble, title: "Les rues du casino et des hôtels", text: "cuisines, terrasses, quais de livraison et cours de service." },
      { icon: House, title: "Villars-Saint-Marcellin et Genrupt", text: "maisons de village, granges et jardins des deux communes rattachées." },
      { icon: Trees, title: "Vers Serqueux et les Coiffy", text: "fermes, vignes, chalets et résidences secondaires." },
    ],
  },
  how: {
    title: "Comment éliminer les rats et les souris efficacement ?",
    intro: "Je cherche l'entrée, je pose à l'abri des regards et je repasse. Dans les pièces habitées, je choisis plutôt des pièges ; à l'extérieur, des postes fermés.",
    photo: "facade",
    steps: [
      { title: "À l'extérieur, en retrait", text: "Le boîtier se fait oublier contre un mur de service, loin de l'entrée des clients." },
      { title: "Un système fermé", text: "Il faut une clé pour l'ouvrir et l'appât est accroché : rien ne peut être ramassé." },
      { title: "Un passage de contrôle", text: "Je vérifie les boîtiers et les pièges, entre deux locations si cela vous arrange." },
    ],
    after: "Prévenez la personne qui fait le ménage : un dispositif déplacé ne sert plus à rien.",
  },
  price: {
    paragraphs: [
      <>Le prix minimum est de <strong className="whitespace-nowrap text-primary">100 €</strong>. Pour plusieurs logements dans le même immeuble, on voit tout en une fois : c'est plus logique que de traiter porte par porte. Le devis est gratuit.</>,
    ],
    aside: { icon: Briefcase, title: "Et les frais de déplacement ?", text: "Bourbonne est à une bonne distance de Chaumont : ils sont annoncés clairement lors de votre appel, pas découverts ensuite." },
  },
  local: [
    {
      kind: "levels",
      target: true,
      title: "Une souris signalée entre deux locations : que faire ?",
      intro: "Le prochain client arrive samedi ? Voici l'ordre que je conseille.",
      items: [
        { title: "Le jour même", text: "Demandez une photo et l'endroit précis au locataire. Remerciez-le : mieux vaut un message qu'un mauvais avis." },
        { title: "Le lendemain", text: "Videz les placards, passez l'éponge humide, jetez tout ce qui est ouvert. N'achetez pas de poison en vrac." },
        { title: "Avant le ménage", text: "Faites-moi venir avant le grand nettoyage : les traces disent par où elle est entrée." },
        { title: "Après ma visite", text: "Les pièges restent dans des coins cachés, hors de vue et hors de portée du prochain occupant." },
      ],
    },
    {
      kind: "text",
      title: "Hôtel, résidence, restaurant : la discrétion d'abord",
      paragraphs: [
        "Je passe quand vos clients sont aux soins ou sortis, et je peux venir avec un véhicule sans logo. Aucun dispositif n'est laissé dans un lieu de passage.",
        "On commence par les cuisines, la lingerie, la chaufferie et les réserves, puis les gaines qui montent vers les chambres. Une seule chambre touchée cache souvent une cause commune à tout l'étage.",
        <>Besoin d'un contrôle programmé toute l'année ? <Link to="/contact" className={textLink}>Demandez une proposition</Link>, elle tient compte de vos périodes d'ouverture.</>,
      ],
      aside: {
        icon: Hotel,
        title: "Un registre simple",
        text: "Pour chaque passage, notez la date, les postes vérifiés et ce qui a été trouvé. C'est utile si l'on vous pose des questions.",
      },
    },
  ],
  call: {
    title: "Un locataire vient de vous écrire ?",
    text: "Transférez-moi sa photo par SMS ou WhatsApp : je vous dis ce que j'en pense avant l'arrivée suivante.",
    contactLabel: "Prendre contact",
  },
  faq: [
    { question: "Quel est le coût d'une dératisation à Bourbonne-les-Bains ?", answer: "Elle commence à 100 €, hors déplacement annoncé au téléphone. Le devis gratuit dépend du nombre de logements ou de pièces, du rongeur et des visites de contrôle." },
    { question: "Peut-on louer le logement pendant le traitement ?", answer: "Cela dépend de ce que je trouve. Avec quelques pièges bien cachés, oui, le plus souvent. Si l'activité est forte, mieux vaut décaler une arrivée que de rembourser un séjour." },
    { question: "Qui paie, le propriétaire ou le locataire ?", answer: "Pour un meublé de courte durée, c'est le loueur. Pour une location à l'année, cela dépend de l'origine du problème : échangez par écrit avec votre propriétaire ou votre agence." },
    { question: "Une souris peut-elle monter au deuxième étage ?", answer: "Très facilement. Elle grimpe le long des tuyaux, des câbles et des murs rugueux. L'étage ne protège pas, seuls les passages fermés le font." },
    { question: "Les draps et la vaisselle sont-ils perdus ?", answer: "Non. Lavez le linge à haute température quand c'est possible et la vaisselle à l'eau très chaude. Jetez en revanche tout aliment entamé." },
    { question: "Venez-vous dans les villages voisins ?", answer: "Oui : Serqueux, Coiffy-le-Haut, Coiffy-le-Bas, Montcharvot, Laneuvelle, Fresnes-sur-Apance, Damrémont, Larivière-Arnoncourt, Melay, Voisey, Enfonvelle et Vicq, entre autres. Téléphone : 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Je couvre Bourbonne et tout le Bassigny, jusqu'à la limite des Vosges.",
    links: [
      { label: "Dératisation Langres", to: "/deratisation-langres" },
      { label: "Dératisation Chalindrey", to: "/deratisation-chalindrey" },
      { label: "Dératisation Nogent", to: "/deratisation-nogent" },
    ],
    also: "Également à Bourbonne-les-Bains :",
    note: (
      <>
        Vous cherchez des explications plus générales ? Elles sont sur la page{" "}
        <Link to="/deratisation" className={textLink}>se débarrasser des rats et des souris</Link>.
      </>
    ),
  },
};

const DeratisationBourbonne = () => <RodentTownPage town={town} />;

export default DeratisationBourbonne;
