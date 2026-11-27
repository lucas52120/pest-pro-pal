import { Link } from "react-router-dom";
import { Armchair, Building, Building2, FileText, Home, KeyRound, Landmark, Package, Route, Train, Truck, Users } from "lucide-react";
import heroImage from "@/assets/punaise-adulte.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "bedbugs",
  city: "Saint-Dizier",
  postalCode: "52100",
  region: "Haute-Marne",
  slug: "/punaises-de-lit-saint-dizier",
  title: "Punaises de lit à Saint-Dizier (52) : traitement",
  description:
    "Des punaises de lit à Saint-Dizier ? Maison ou appartement : diagnostic sur place, traitement adapté à l'infestation, sans jugement. Appelez le 07 65 25 67 92.",
  hero: {
    eyebrow: "Maisons, appartements et immeubles",
    text: "Des boutons qui grattent chaque matin et des taches sur les draps ? Je viens voir, je vous explique ce qu'il en est, et je traite discrètement.",
    highlight: "Sans jugement : tout reste entre nous",
    signsLabel: "Débutante ou installée ? Où en est votre infestation",
    image: heroImage,
    imageAlt: "Punaise de lit adulte, brun-rouge, vue de profil sur une peau humaine",
    imageClassName: "object-[92%_50%] max-lg:brightness-75",
  },
  reviews: ["soucelier", "bromann", "coustillet"],
  why: {
    title: "Comment les punaises de lit arrivent-elles chez vous ?",
    intro: "Personne ne les attire : elles ne cherchent qu'un endroit où l'on dort. Dans une ville comme Saint-Dizier, elles circulent surtout de trois ou quatre façons.",
    items: [
      { icon: Truck, title: "Un déménagement", text: "cartons, meubles démontés, camion de location : elles changent de logement avec vous." },
      { icon: Building2, title: "Un appartement voisin", text: "par les gaines, les prises et les passages de tuyaux, d'un palier ou d'un étage à l'autre." },
      { icon: Armchair, title: "Une bonne affaire", text: "un canapé, un sommier ou une tête de lit achetés d'occasion, sans être inspectés." },
      { icon: Users, title: "Un séjour ou une visite", text: "un voyage, un enfant qui rentre de colonie, des amis qui dorment chez vous." },
    ],
  },
  how: {
    title: "Comment éliminer les punaises de lit ?",
    intro: "Une seule application ne suffit jamais, car les œufs résistent aux produits. Le travail se fait donc en plusieurs fois, en partant d'un repérage précis.",
    steps: [
      { title: "Je mesure l'ampleur", text: "Une chambre ou tout le logement ? Je contrôle les lits, les canapés, les plinthes et les prises de chaque pièce." },
      { title: "J'adapte les méthodes", text: "Produit professionnel dans les fentes, vapeur sèche quand il le faut, pièges pour suivre l'activité." },
      { title: "Je reviens les fois nécessaires", text: "À 10 à 15 jours d'écart, pour toucher les jeunes nés des œufs : 2, 3 ou 4 passages selon la situation." },
    ],
    after: (
      <>
        Je vous dis à chaque fois ce qu'il faut préparer et combien de temps laisser la pièce fermée. Plus de détails sur la page{" "}
        <Link to="/punaises-de-lit" className={textLink}>punaises de lit en Haute-Marne</Link>.
      </>
    ),
  },
  where: {
    intro: "Maison ou immeuble, ancien ou récent : à Saint-Dizier, voici ce que je contrôle selon votre quartier.",
    items: [
      { icon: Building, title: "Le Vert-Bois", text: "grands immeubles : prises, plinthes, gaines techniques et logements du même palier." },
      { icon: Landmark, title: "Le centre-ville", text: "appartements anciens : parquets, moulures et meubles en bois autour du lit." },
      { icon: Home, title: "La Noue", text: "maisons et petits collectifs : chambres, canapés du salon, lits d'enfants." },
      { icon: KeyRound, title: "Gigny et Marnaval", text: "logements loués et pavillons : literie, armoires et cartons stockés près du lit." },
      { icon: Train, title: "Vers la gare", text: "logements de passage et chambres meublées, où les locataires changent souvent." },
      { icon: Route, title: "Le long de la RN4", text: "hôtels et chambres de passage, où les voyageurs se succèdent." },
    ],
  },
  price: {
    paragraphs: [
      "Le prix suit l'ampleur du problème : nombre de pièces, quantité de meubles, nombre de passages. Un studio pris à temps ne se traite pas comme une maison touchée de la cave au grenier.",
      <>
        Pour situer, comptez autour de <strong className="whitespace-nowrap text-primary">250 €</strong> pour une petite infestation repérée tôt. Pour plusieurs pièces, le prix peut dépasser <strong className="whitespace-nowrap text-primary">900 €</strong>. Le prix exact vous est donné après le diagnostic.
      </>,
    ],
    aside: {
      icon: FileText,
      title: "Locataire ?",
      text: "Gardez le devis et la facture : ils servent à votre bailleur ou à votre assurance pour savoir qui prend en charge.",
    },
  },
  local: [
    {
      kind: "levels",
      target: true,
      columns: "lg:grid-cols-3",
      title: "Débutante ou installée : où en est votre infestation ?",
      intro: "C'est ce qui décide du nombre de passages. Je le confirme au diagnostic, mais voici les repères.",
      items: [
        { title: "Débutante", text: "Quelques piqûres depuis peu, une ou deux punaises vues, des traces sur un seul lit. Souvent 2 passages." },
        { title: "Installée", text: "Des points noirs sur plusieurs côtés du lit, des mues, des piqûres chaque nuit depuis des semaines. Souvent 3 passages." },
        { title: "Étendue", text: "Plusieurs pièces touchées, le canapé aussi, des punaises visibles le jour. Il faut parfois 4 passages." },
      ],
      after: "Plus on appelle tôt, plus c'est simple et moins c'est cher. N'attendez pas d'en voir beaucoup.",
    },
    {
      kind: "list",
      title: "Préparer le logement avant le premier passage",
      intro: "Une bonne préparation rend chaque passage plus efficace. Je vous donne la liste exacte au diagnostic ; voici l'essentiel.",
      items: [
        { title: "Le linge", text: "draps, couettes, pyjamas et vêtements autour du lit lavés à 60 °C, puis gardés dans des sacs fermés." },
        { title: "Le sol", text: "rien par terre autour du lit et le long des murs : je dois pouvoir accéder aux plinthes." },
        { title: "Les meubles", text: "décollez le lit et les meubles du mur de quelques centimètres, videz les tables de nuit." },
        { title: "Les animaux", text: "prévoyez de les garder hors des pièces traitées le temps que je vous indique." },
      ],
      aside: {
        icon: Package,
        title: "Les petits objets",
        text: "Livres, jouets, réveil : ne les emportez pas dans une autre pièce sans les avoir vérifiés. Mettez-les dans un sac fermé, je vous dis quoi en faire.",
      },
    },
    {
      kind: "text",
      title: "En immeuble : agir avec le bailleur et les voisins",
      paragraphs: [
        "Dans un immeuble, traiter un seul appartement ne règle pas toujours le problème : les punaises peuvent revenir par les gaines ou les prises depuis un logement voisin.",
        "Prévenez votre bailleur ou votre syndic par écrit, avec des photos. Depuis la loi ELAN, le propriétaire doit fournir un logement sans nuisibles ; l'ADIL de la Haute-Marne peut vous aider si vous ne savez pas qui doit payer.",
        <>
          Bailleur, syndic ou gestionnaire de résidence à Saint-Dizier ? Je peux traiter plusieurs logements dans la même période.{" "}
          <Link to="/contact" className={textLink}>Demandez un devis professionnel</Link>.
        </>,
      ],
    },
  ],
  call: {
    title: "Des punaises de lit à Saint-Dizier ?",
    text: "Dites-moi depuis combien de temps et dans quelles pièces : on fixe le diagnostic ensemble.",
    contactLabel: "Demander un diagnostic",
  },
  faq: [
    {
      question: "Combien coûte un traitement contre les punaises de lit à Saint-Dizier ?",
      answer: "Autour de 250 € pour une petite infestation repérée tôt, davantage quand plusieurs pièces sont touchées. Le prix exact dépend du nombre de passages ; il est fixé après le diagnostic, avant le traitement.",
    },
    {
      question: "Mon voisin a des punaises de lit : que faire ?",
      answer: "Inspectez votre lit et vos plinthes, surtout le long du mur commun. Si vous ne voyez rien, surveillez quelques semaines. Au moindre doute, une photo envoyée au 07 65 25 67 92 permet de savoir ce qu'il en est.",
    },
    {
      question: "Qui paie le traitement quand on est locataire ?",
      answer: "Le propriétaire doit louer un logement sans nuisibles. En cours de bail, cela dépend de la situation : prévenez-le par écrit dès les premiers signes, et renseignez-vous auprès de l'ADIL en cas de désaccord.",
    },
    {
      question: "Est-ce que les punaises de lit transmettent des maladies ?",
      answer: "Aucune maladie transmise à l'homme n'a été démontrée. Elles provoquent surtout des démangeaisons, parfois des réactions allergiques, et beaucoup de fatigue à cause des nuits agitées.",
    },
    {
      question: "Le canapé peut-il être traité ?",
      answer: "Oui. Les coutures, le dessous des coussins et le cadre font partie des endroits que je traite, au même titre que le lit.",
    },
    {
      question: "Combien de temps dure le traitement en tout ?",
      answer: "Avec des passages tous les 10 à 15 jours, il faut compter de 2 à 6 semaines entre le premier et le dernier passage, selon que 2, 3 ou 4 passages sont nécessaires.",
    },
    {
      question: "Intervenez-vous autour de Saint-Dizier ?",
      answer: "Oui : Bettancourt-la-Ferrée, Chancenay, Valcourt, Hallignicourt, Perthes, Eurville-Bienville, Chamouilley, Roches-sur-Marne et les autres villages du nord haut-marnais. Appelez le 07 65 25 67 92.",
    },
  ],
  nearby: {
    intro: "Je viens depuis Chaumont dans tout le nord de la Haute-Marne.",
    links: [
      { label: "Punaises de lit Joinville", to: "/punaises-de-lit-joinville" },
      { label: "Punaises de lit Chaumont", to: "/punaises-de-lit-chaumont" },
      { label: "Punaises de lit Langres", to: "/punaises-de-lit-langres" },
    ],
    also: "Un autre nuisible à Saint-Dizier ?",
    note: (
      <>
        Des boutons sur les chevilles et un chien ou un chat à la maison ? Pensez aussi aux puces. Toutes les infos punaises sur la page{" "}
        <Link to="/punaises-de-lit" className={textLink}>punaises de lit</Link>.
      </>
    ),
  },
};

const PunaisesDeLitSaintDizier = () => <RodentTownPage town={town} />;

export default PunaisesDeLitSaintDizier;
