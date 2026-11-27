import { Link } from "react-router-dom";
import { Baby, Castle, Church, FileText, Flashlight, Home, KeyRound, Snowflake, Sofa, Store, Tent, Waves } from "lucide-react";
import heroImage from "@/assets/punaise-larve.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "bedbugs",
  city: "Joinville",
  postalCode: "52300",
  region: "Haute-Marne",
  slug: "/punaises-de-lit-joinville",
  title: "Punaises de lit Joinville (52) : diagnostic et traitement",
  description:
    "Vous pensez avoir des punaises de lit à Joinville ? Je viens vérifier, puis je traite en plusieurs passages, discrètement et sans jugement. 07 65 25 67 92.",
  hero: {
    eyebrow: "Vallée de la Marne, en toute discrétion",
    text: "Des boutons au réveil et un doute sur le matelas ? Je viens vérifier si ce sont bien des punaises, puis je m'en occupe, discrètement.",
    highlight: "Véhicule non logoté sur demande",
    signsLabel: "Vérifier votre lit vous-même en 5 minutes",
    image: heroImage,
    imageAlt: "Jeune punaise de lit translucide, gorgée de sang, sur une peau humaine",
    imageClassName: "object-[70%_50%] max-lg:brightness-75",
  },
  reviews: ["mathieu", "muller", "fontanive"],
  why: {
    title: "D'où viennent les punaises de lit ?",
    intro: "Elles ne naissent pas dans une maison sale : elles y entrent, presque toujours cachées dans quelque chose que l'on rapporte.",
    items: [
      { icon: Store, title: "Une brocante", text: "un fauteuil, un cadre de lit ou une malle achetés sur un vide-greniers de la vallée." },
      { icon: Tent, title: "Des vacances", text: "camping, location ou hôtel : elles montent dans les sacs posés au pied du lit." },
      { icon: Baby, title: "Les enfants", text: "colonie, internat, soirée pyjama : un sac de couchage suffit à les ramener." },
      { icon: KeyRound, title: "Un logement loué", text: "un appartement ou une maison où l'ancien occupant en avait sans le savoir." },
    ],
  },
  how: {
    title: "Comment se débarrasser des punaises de lit dans toute la maison ?",
    intro: "L'erreur la plus courante, c'est de traiter seulement le matelas. Les punaises vivent aussi autour du lit, et leurs œufs ne craignent pas les produits.",
    steps: [
      { title: "Je trouve leurs refuges", text: "Coutures, sommier, tête de lit, plinthes, cadres et prises : je note chaque endroit où je trouve des traces." },
      { title: "Je traite chaque refuge", text: "Produit professionnel, vapeur sèche à haute température si besoin, et pièges pour savoir si elles sont encore actives." },
      { title: "Je repasse plusieurs fois", text: "Pour atteindre celles qui sortent des œufs : 2, 3 ou 4 passages espacés de 10 à 15 jours, selon ce que j'ai trouvé." },
    ],
    after: (
      <>
        Entre deux passages, dormez normalement dans votre lit : c'est ce qui les fait sortir vers les endroits traités. Plus d'infos sur la page{" "}
        <Link to="/punaises-de-lit" className={textLink}>punaises de lit en Haute-Marne</Link>.
      </>
    ),
  },
  where: {
    intro: "Ville ancienne, bords de Marne et villages : voici où je les trouve le plus souvent dans le secteur de Joinville.",
    items: [
      { icon: Church, title: "La vieille ville", text: "maisons anciennes : lits en bois, planchers, encadrements de portes et papiers peints." },
      { icon: Waves, title: "Les quais de la Marne", text: "appartements loués : prises, plinthes et matelas laissés par l'occupant précédent." },
      { icon: Castle, title: "Gîtes et chambres d'hôtes", text: "près du château du Grand Jardin : chambres qui accueillent des visiteurs toute la saison." },
      { icon: Sofa, title: "Le salon", text: "canapés, fauteuils et clic-clac, surtout quand quelqu'un y dort." },
      { icon: Baby, title: "Les chambres d'enfants", text: "lits superposés, peluches, sacs de sport et de colonie." },
      { icon: Home, title: "Les villages de la vallée", text: "maisons de famille : chambres d'amis occupées seulement quelques fois par an." },
    ],
  },
  price: {
    paragraphs: [
      "Je ne donne pas de prix sans avoir vu : c'est le diagnostic qui dit combien de pièces et combien de passages sont nécessaires.",
      <>
        Pour vous faire une idée, le traitement d'une petite infestation commence autour de <strong className="whitespace-nowrap text-primary">250 €</strong>. Une maison touchée dans plusieurs pièces peut dépasser <strong className="whitespace-nowrap text-primary">900 €</strong>.
      </>,
    ],
    aside: {
      icon: FileText,
      title: "Vous décidez après",
      text: "Le devis précise tout : passages, pièces traitées, consignes. Le déplacement vous est annoncé au téléphone.",
    },
  },
  local: [
    {
      kind: "list",
      target: true,
      title: "Vérifier votre lit vous-même en 5 minutes",
      intro: "Le soir ou le matin, avec la lampe de votre téléphone. Ne secouez rien : regardez seulement.",
      items: [
        { title: "Le matelas", text: "soulevez un coin et suivez la couture tout autour : cherchez des points noirs ou de petites taches rousses." },
        { title: "Le sommier", text: "regardez les lattes, les angles et le tissu du dessous, où elles aiment se regrouper." },
        { title: "La tête de lit", text: "décollez-la un peu du mur : derrière, c'est l'une de leurs cachettes préférées." },
        { title: "Autour du lit", text: "plinthes, prises, table de nuit : des points noirs à cet endroit sont un signe fort." },
      ],
      aside: {
        icon: Flashlight,
        title: "Vous trouvez quelque chose ?",
        text: "Prenez une photo de près et envoyez-la au 07 65 25 67 92. Je vous dis si ce sont des punaises, et ce qu'il faut faire en attendant.",
      },
    },
    {
      kind: "dos",
      title: "Brocantes et occasion : les bons réflexes",
      intro: "Acheter d'occasion reste une bonne idée. Il suffit de regarder avant de faire entrer l'objet chez vous.",
      yes: [
        { text: "Inspectez coutures, fentes et dessous du meuble, de jour, avant de payer." },
        { text: "Passez à l'aspirateur un fauteuil ou un cadre de lit avant de le rentrer." },
        { text: "Lavez à 60 °C ou passez au sèche-linge bien chaud les textiles achetés." },
        { text: "Laissez les petits objets 72 heures au congélateur s'ils ne se lavent pas." },
      ],
      no: [
        { text: "Récupérer un matelas ou un sommier laissé sur le trottoir." },
        { text: "Monter directement un meuble acheté dans la chambre." },
        { text: "Garder les cartons du vendeur : rangez dans les vôtres et jetez les siens dehors." },
        { text: "Pulvériser un insecticide « au cas où » : il ne protège de rien." },
      ],
    },
    {
      kind: "text",
      title: "Maison de famille : la chambre d'amis qui pique",
      paragraphs: [
        "Une punaise de lit peut attendre plusieurs mois sans manger. Dans une chambre où l'on ne dort qu'à Noël ou pendant les vacances, elles patientent, puis se réveillent dès que quelqu'un s'y installe.",
        "Si vos invités repartent avec des boutons, faites vérifier la chambre avant le prochain séjour, et prévenez-les : mieux vaut qu'ils contrôlent leurs bagages en rentrant.",
      ],
      aside: {
        icon: Snowflake,
        title: "Chauffage coupé, punaises disparues ?",
        text: "Non : le froid d'une chambre fermée ne les tue pas. Elles ralentissent simplement, et repartent dès que la pièce se réchauffe.",
      },
    },
  ],
  call: {
    title: "Des punaises de lit à Joinville ?",
    text: "Dites-moi ce que vous avez remarqué : on fixe une date pour que je vienne vérifier.",
    contactLabel: "Demander un diagnostic",
  },
  faq: [
    {
      question: "Combien coûte un traitement contre les punaises de lit à Joinville ?",
      answer: "Une petite infestation commence autour de 250 €. Le prix dépend du nombre de pièces et de passages ; il est fixé après le diagnostic, avant tout traitement.",
    },
    {
      question: "Comment être sûr que ce sont des punaises de lit ?",
      answer: "Les piqûres seules ne suffisent pas. Il faut trouver des traces : points noirs, mues, petites taches de sang, ou l'insecte lui-même. C'est ce que je vérifie au diagnostic.",
    },
    {
      question: "Combien de passages faut-il prévoir ?",
      answer: "2, 3 ou 4, espacés de 10 à 15 jours. Ça dépend de l'ampleur de l'infestation et du nombre de pièces touchées ; je vous le dis après le diagnostic.",
    },
    {
      question: "Doit-on dormir ailleurs pendant le traitement ?",
      answer: "En général non : il vaut mieux continuer à dormir dans son lit, pour que les punaises sortent vers les zones traitées. Je vous dis seulement combien de temps garder la chambre fermée juste après chaque passage.",
    },
    {
      question: "Les animaux de compagnie peuvent-ils rester ?",
      answer: "Ils doivent rester hors des pièces traitées le temps que je vous indique, surtout les oiseaux et les poissons. Pensez à me dire au téléphone quels animaux vivent chez vous.",
    },
    {
      question: "Intervenez-vous autour de Joinville ?",
      answer: "Oui : Thonnance-lès-Joinville, Vecqueville, Rupt, Suzannecourt, Fronville, Gudmont-Villiers, Donjeux, Froncles et les autres villages de la vallée. Appelez le 07 65 25 67 92, 7j/7.",
    },
  ],
  nearby: {
    intro: "Depuis Chaumont, j'interviens dans toute la vallée de la Marne.",
    links: [
      { label: "Punaises de lit Saint-Dizier", to: "/punaises-de-lit-saint-dizier" },
      { label: "Punaises de lit Chaumont", to: "/punaises-de-lit-chaumont" },
      { label: "Punaises de lit Langres", to: "/punaises-de-lit-langres" },
    ],
    also: "Autres nuisibles à Joinville :",
    note: (
      <>
        Des insectes qui filent dans la cuisine la nuit ? Ce ne sont pas des punaises de lit : voyez la page{" "}
        <Link to="/cafards-blattes-joinville" className={textLink}>cafards à Joinville</Link>.
      </>
    ),
  },
};

const PunaisesDeLitJoinville = () => <RodentTownPage town={town} />;

export default PunaisesDeLitJoinville;
