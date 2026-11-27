import { Link } from "react-router-dom";
import { BedDouble, Building2, Castle, Droplet, FileText, Hotel, Layers, Luggage, Map as MapIcon, Shirt, Tent, Trees } from "lucide-react";
import heroImage from "@/assets/punaise-larve.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "bedbugs",
  city: "Langres",
  postalCode: "52200",
  region: "Haute-Marne",
  slug: "/punaises-de-lit-langres",
  title: "Punaises de lit à Langres (52) : traitement discret",
  description:
    "Piqûres au réveil à Langres ? Particuliers, gîtes et hôtels : diagnostic sur place puis traitement en plusieurs passages, en toute discrétion. 07 65 25 67 92.",
  hero: {
    eyebrow: "Particuliers, gîtes et hôtels",
    text: "Vous vous réveillez avec des boutons, ou un client s'en plaint ? Je viens trouver d'où elles viennent et je traite, sans bruit et sans jugement.",
    highlight: "Discret pour vos voisins comme pour vos clients",
    signsLabel: "Quels signes doivent vous alerter ?",
    image: heroImage,
    imageAlt: "Jeune punaise de lit translucide, gorgée de sang, sur une peau humaine",
    imageClassName: "object-[70%_50%] max-lg:brightness-75",
  },
  reviews: ["jc", "fontanive", "mathieu"],
  why: {
    title: "Pourquoi des punaises de lit chez vous ?",
    intro: "Langres accueille des visiteurs toute l'année. Les punaises voyagent avec eux, puis avec nous, sans que personne n'ait rien fait de mal.",
    items: [
      { icon: Hotel, title: "Une nuit à l'extérieur", text: "un hôtel sur la route, une location de vacances, un internat : il suffit d'une valise ouverte près du lit." },
      { icon: Luggage, title: "Des bagages posés au sol", text: "elles grimpent dans les coutures et les poches, puis descendent une fois à la maison." },
      { icon: BedDouble, title: "Une literie récupérée", text: "un lit d'appoint, un matelas prêté ou acheté d'occasion pour la chambre d'amis." },
      { icon: Castle, title: "Des maisons anciennes", text: "boiseries, parquets et murs de pierre leur offrent des fentes à l'abri de la lumière." },
    ],
  },
  how: {
    title: "Comment venir à bout des punaises de lit ?",
    intro: "Elles se cachent le jour et sortent la nuit, en pondant chaque jour. Le traitement doit donc être minutieux, et répété jusqu'à ce que plus aucune ne sorte des œufs.",
    steps: [
      { title: "Je fais le tour de la chambre", text: "Matelas, sommier, cadre du lit, rideaux, prises et boiseries : je repère les traces pour savoir quoi traiter." },
      { title: "Je traite partout où elles vivent", text: "Je combine produit professionnel, vapeur sèche si besoin et pièges de contrôle, jusque dans les fentes les plus fines." },
      { title: "Je reviens pour les nouvelles", text: "Les jeunes sortent des œufs après le premier passage : 2, 3 ou 4 visites selon l'infestation, à 10 à 15 jours d'écart." },
    ],
    after: (
      <>
        Les consignes de préparation vous sont données avant le premier passage. Pour comprendre leur cycle de vie, voyez la page{" "}
        <Link to="/punaises-de-lit" className={textLink}>traitement des punaises de lit en Haute-Marne</Link>.
      </>
    ),
  },
  where: {
    intro: "Dans les remparts ou en bas de la ville, chaque logement a ses cachettes. Voici où je regarde d'abord.",
    items: [
      { icon: Castle, title: "Dans les remparts", text: "maisons anciennes : boiseries, parquets disjoints, alcôves et lits en bois massif." },
      { icon: Hotel, title: "Hôtels, gîtes et chambres d'hôtes", text: "têtes de lit fixées au mur, porte-bagages, canapés-lits des suites." },
      { icon: Building2, title: "Les Franchises et Les Fourches", text: "appartements : plinthes, prises électriques et gaines partagées avec les voisins." },
      { icon: MapIcon, title: "La Citadelle et Saint-Gilles", text: "maisons et logements loués : chambres d'enfants, lits superposés, armoires." },
      { icon: Tent, title: "Corlée et le lac de la Liez", text: "locations de saison et mobil-homes : banquettes, matelas et rangements sous les lits." },
      { icon: Trees, title: "Les villages du Pays de Langres", text: "maisons de famille : chambres d'amis où l'on ne dort que quelques nuits par an." },
    ],
  },
  price: {
    paragraphs: [
      "Une seule chambre traitée tôt ou toute une maison touchée depuis l'été : le travail n'est pas le même, et le prix non plus. Il dépend des pièces à traiter, de l'encombrement et du nombre de passages.",
      <>
        Pour vous donner un ordre d'idée, une petite infestation commence autour de <strong className="whitespace-nowrap text-primary">250 €</strong>, et un logement très touché peut dépasser <strong className="whitespace-nowrap text-primary">900 €</strong>. Le montant exact est fixé après le diagnostic.
      </>,
    ],
    aside: {
      icon: FileText,
      title: "Un devis clair",
      text: "Il indique le nombre de passages prévus et ce que comprend chacun. Vous décidez ensuite, sans pression.",
    },
  },
  local: [
    {
      kind: "cards",
      target: true,
      title: "Quels signes doivent vous alerter ?",
      intro: "Les boutons ne suffisent pas à conclure. Prenez une lampe et regardez le lit, surtout les coutures et le dessous du matelas.",
      items: [
        { icon: Droplet, title: "Des petites taches de sang", text: "sur le drap ou la taie, le matin, là où une punaise a été écrasée pendant la nuit." },
        { icon: Layers, title: "Des points noirs", text: "comme des traits de feutre fin dans les coutures, sur les lattes ou derrière la tête de lit." },
        { icon: Shirt, title: "Des mues claires", text: "petites enveloppes vides, couleur paille, laissées par les jeunes en grandissant." },
        { icon: BedDouble, title: "Des piqûres groupées", text: "par trois ou quatre, souvent alignées, sur les parties découvertes pendant la nuit." },
      ],
      after: "Vous avez trouvé quelque chose ? Prenez une photo nette et envoyez-la au 07 65 25 67 92 : je vous dis ce que c'est.",
    },
    {
      kind: "levels",
      title: "Hébergeur à Langres : un client se plaint de piqûres",
      intro: "Ça arrive aux meilleures maisons, même très bien tenues. Ce qui compte, c'est de réagir vite pour ne pas toucher les autres chambres.",
      items: [
        { title: "Tout de suite", text: "Mettez les affaires du client dans des sacs fermés avant de lui proposer une autre chambre, et fermez celle concernée." },
        { title: "Le jour même", text: "Laissez la literie en place et appelez-moi : je vous dis quoi faire en attendant mon passage." },
        { title: "Le diagnostic", text: "Je vérifie la chambre touchée et celles qui l'entourent, pour savoir jusqu'où aller." },
        { title: "Avant de relouer", text: "Je vous dis quand la chambre peut accueillir de nouveau des clients, et comment surveiller ensuite." },
      ],
    },
    {
      kind: "text",
      title: "Maisons anciennes : pourquoi il faut parfois plus de passages",
      paragraphs: [
        "Dans les maisons de la ville haute, les punaises ont l'embarras du choix : planchers qui ont joué, boiseries, moulures, papiers peints anciens, meubles de famille pleins de fentes.",
        "Chaque recoin est une cachette de plus à traiter. C'est pour cela que le nombre de passages se décide sur place, après avoir vu les lieux, et pas au téléphone.",
      ],
      aside: {
        icon: Luggage,
        title: "Vous rentrez d'un séjour ?",
        text: "Défaites la valise dans la baignoire ou sur le carrelage, lavez tout à 60 °C, et passez l'aspirateur dans la valise avant de la ranger.",
      },
    },
  ],
  call: {
    title: "Des punaises de lit à Langres ?",
    text: "Dites-moi ce que vous avez vu et dans quelle pièce : on convient d'une date pour le diagnostic.",
    contactLabel: "Demander un diagnostic",
  },
  faq: [
    {
      question: "Quel est le prix d'un traitement contre les punaises de lit à Langres ?",
      answer: "Il dépend du nombre de pièces, de l'encombrement et du nombre de passages. Une petite infestation commence autour de 250 €. Le prix exact est fixé après le diagnostic, et vous le connaissez avant le traitement.",
    },
    {
      question: "Je tiens un gîte : dois-je fermer pendant le traitement ?",
      answer: "Pas forcément tout le gîte. La chambre traitée reste fermée le temps que je vous indique ; les autres peuvent souvent rester ouvertes si le diagnostic montre qu'elles ne sont pas touchées.",
    },
    {
      question: "Pourquoi faut-il plusieurs passages ?",
      answer: "Les œufs résistent aux produits. Je reviens 10 à 15 jours plus tard pour traiter les jeunes qui en sont sortis. Selon l'infestation, cela fait 2, 3 ou 4 passages au total.",
    },
    {
      question: "Les punaises de lit sautent-elles ou volent-elles ?",
      answer: "Ni l'un ni l'autre. Elles marchent, et c'est pour cela qu'elles voyagent dans les sacs, les vêtements et les meubles plutôt que d'une personne à l'autre.",
    },
    {
      question: "Combien de temps une punaise de lit vit-elle sans manger ?",
      answer: "Plusieurs mois. Une chambre d'amis restée vide tout l'hiver peut donc encore en abriter au printemps.",
    },
    {
      question: "Puis-je faire le traitement moi-même ?",
      answer: "Laver à 60 °C et passer l'aspirateur aident beaucoup au début. Les insecticides du commerce, eux, les font fuir dans les autres pièces sans toucher les œufs : mieux vaut appeler rapidement.",
    },
    {
      question: "Venez-vous autour de Langres ?",
      answer: "Oui : Saints-Geosmes, Humes-Jorquenay, Peigney, Champigny-lès-Langres, Rolampont, Chalindrey et les autres communes du Pays de Langres. Appelez le 07 65 25 67 92, 7j/7 de 7h à 23h.",
    },
  ],
  nearby: {
    intro: "De Langres, je rayonne dans tout le sud de la Haute-Marne.",
    links: [
      { label: "Punaises de lit Chaumont", to: "/punaises-de-lit-chaumont" },
      { label: "Punaises de lit Bourbonne-les-Bains", to: "/punaises-de-lit-bourbonne-les-bains" },
      { label: "Punaises de lit Saint-Dizier", to: "/punaises-de-lit-saint-dizier" },
    ],
    also: "Autres services à Langres :",
    note: (
      <>
        Des insectes dans la cuisine plutôt que dans le lit ? Ce sont sans doute des cafards : voyez la page{" "}
        <Link to="/cafards-blattes-langres" className={textLink}>cafards à Langres</Link>.
      </>
    ),
  },
};

const PunaisesDeLitLangres = () => <RodentTownPage town={town} />;

export default PunaisesDeLitLangres;
