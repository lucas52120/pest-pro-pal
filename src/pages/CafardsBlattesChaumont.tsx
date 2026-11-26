import { Link } from "react-router-dom";
import {
  Briefcase,
  Building2,
  Droplets,
  FileText,
  House,
  Landmark,
  Moon,
  Package,
  Store,
  ThermometerSun,
  Utensils,
  UtensilsCrossed,
} from "lucide-react";
import heroImage from "@/assets/blatte-gros-plan.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "cockroaches",
  city: "Chaumont",
  postalCode: "52000",
  region: "Haute-Marne",
  slug: "/cafards-blattes-chaumont",
  title: "Traitement cafards et blattes à Chaumont (52)",
  description:
    "Des cafards dans votre cuisine à Chaumont ? N'attendez pas qu'ils se multiplient, on intervient en toute discrétion. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Cuisine, salle de bains, commerce",
    text: "Des cafards qui filent quand on allume la lumière ? Je trouve leurs cachettes et je traite, en toute discrétion.",
    highlight: "Véhicule non logoté sur demande",
    signsLabel: "Est-ce vraiment des cafards ? Les reconnaître",
    image: heroImage,
    imageAlt: "Blatte vue de dessus sur un fond clair",
    imageClassName: "max-lg:brightness-50",
  },
  reviews: ["soucelier", "duverne", "jc"],
  why: {
    title: "Pourquoi avez-vous des cafards chez vous ?",
    intro: "Ce n'est pas une question de propreté. Ils arrivent souvent de l'extérieur, puis restent là où ils trouvent ces quatre choses.",
    items: [
      { icon: ThermometerSun, title: "De la chaleur", text: "derrière le frigo, sous le four, autour de la chaudière : ils adorent les moteurs tièdes." },
      { icon: Droplets, title: "De l'eau", text: "une fuite sous l'évier, un joint de douche, une serpillière humide leur suffisent." },
      { icon: Utensils, title: "Quelques miettes", text: "une gamelle, la poubelle de la cuisine, des cartons de courses : ils mangent presque tout." },
      { icon: Package, title: "Un voyage en cachette", text: "un carton, un sac, un appareil d'occasion ou l'appartement voisin, par les gaines." },
    ],
  },
  where: {
    intro: "Une blatte se glisse dans une fente de quelques millimètres. Selon votre logement, voici les endroits que je contrôle d'abord.",
    items: [
      { icon: Landmark, title: "Centre historique", text: "immeubles anciens, colonnes d'eau et caves communes : une cuisine peut être touchée par celle du voisin." },
      { icon: Building2, title: "Le Cavalier et La Rochotte", text: "en résidence, je regarde les gaines techniques, les vide-ordures et les locaux poubelles en plus de l'appartement." },
      { icon: House, title: "Brottes", text: "côté pavillons, le sous-sol, la chaufferie et la buanderie passent avant la cuisine." },
      { icon: Briefcase, title: "Quartier Foch", text: "bureaux et coins repas : machine à café, réfrigérateur, faux plafonds." },
      { icon: Store, title: "Rues commerçantes du centre", text: "restaurants, boulangeries et épiceries : plonge, réserve, dessous des meubles réfrigérés." },
      { icon: UtensilsCrossed, title: "La Vendue et la Dame Huguenotte", text: "dans les zones d'activités, les quais de livraison et les cartons stockés." },
    ],
  },
  how: {
    title: "Comment se débarrasser des cafards efficacement ?",
    intro: "Les bombes du commerce tuent ceux que l'on voit, pas ceux qui restent cachés. Je choisis le traitement selon l'espèce et l'endroit, et je combine souvent plusieurs méthodes pour atteindre toutes leurs cachettes.",
    steps: [
      { title: "Je trouve leurs cachettes", text: "Dessous d'évier, charnières, plinthes, moteurs : je les cherche une par une, lampe à la main." },
      { title: "Je combine les traitements", text: "Gel dans les fentes, pulvérisation ciblée sur leurs passages, autre produit professionnel si besoin : toujours hors de portée des enfants et des animaux." },
      { title: "Je reviens contrôler", text: "Les œufs sont protégés dans une capsule\u00a0: un second passage traite les jeunes qui en sortent." },
    ],
    after: (
      <>
        Avant le traitement, je vous dis s'il faut quitter une pièce, pendant combien de temps et quelles précautions prendre. Tout est expliqué sur la page{" "}
        <Link to="/cafards-blattes" className={textLink}>traitement des cafards en Haute-Marne</Link>.
      </>
    ),
  },
  price: {
    paragraphs: [
      "Le prix dépend de l'espèce, du nombre de pièces touchées et des passages nécessaires. Quelques blattes dans une cuisine ne demandent pas le même travail qu'un immeuble ou un restaurant.",
      "Je regarde d'abord la situation, puis je vous donne le prix exact, avec le nombre de passages prévu.",
    ],
    aside: {
      icon: FileText,
      title: "Le prix avant le traitement",
      text: "Le devis est gratuit et dit ce qu'il comprend. Le déplacement vous est annoncé dès votre appel.",
    },
  },
  local: [
    {
      kind: "compare",
      target: true,
      title: "Comment savoir si ce sont des cafards ?",
      intro: "À Chaumont, on rencontre surtout deux espèces. Elles ne vivent pas au même endroit, et ne se traitent pas tout à fait pareil.",
      heads: ["Blatte germanique", "Blatte orientale"],
      rows: [
        { label: "Son allure", left: "Petite (1 à 1,5 cm), brun clair, deux bandes sombres derrière la tête.", right: "Plus grande (2 à 3 cm), brun très foncé à noir, lente." },
        { label: "Où la trouver", left: "Cuisine et salle de bains, près de la chaleur.", right: "Cave, sous-sol, local poubelles, sols humides." },
        { label: "Ce qu'elle laisse", left: "Petits points noirs dans les placards et les charnières.", right: "Crottes plus grosses, odeur de moisi le long des murs." },
        { label: "Son rythme", left: "Elle se multiplie très vite : chaque semaine compte.", right: "Elle se reproduit plus lentement, mais revient si l'humidité reste." },
      ],
      after: "Une petite bête brillante qui saute dans l'évier ou la baignoire ? C'est souvent un poisson d'argent, pas un cafard. Envoyez-moi une photo, je vous le dis.",
    },
    {
      kind: "list",
      title: "Comment préparer le passage du traitement ?",
      intro: "Dix minutes la veille rendent le traitement plus efficace.",
      items: [
        { text: "N'utilisez plus de bombe ni de spray du commerce : ils dispersent les blattes et gênent le traitement." },
        { text: "Videz le dessous de l'évier et dégagez l'accès derrière le frigo et la cuisinière." },
        { text: "Rangez la nourriture dans des boîtes fermées et sortez la poubelle." },
        { text: "Après le traitement, ne lavez pas à grande eau les endroits traités." },
      ],
      aside: {
        icon: Moon,
        title: "Vous en voyez davantage les premiers jours ?",
        text: "C'est fréquent : le traitement les fait sortir de leurs cachettes. Ne rajoutez pas de produit et ne nettoyez pas les endroits traités.",
      },
    },
    {
      kind: "text",
      title: "Locataire, copropriété, restaurant : qui fait quoi ?",
      paragraphs: [
        "Vous êtes locataire : prévenez votre propriétaire ou votre bailleur par écrit, avec des photos. Dans un immeuble, une seule cuisine traitée ne suffit pas toujours, car les blattes passent par les gaines.",
        "En copropriété, parlez-en au syndic : lui seul peut organiser le traitement des parties communes et des logements voisins le même jour.",
        <>
          Restaurant, boulangerie ou commerce alimentaire à Chaumont ? Je passe en dehors de vos heures d'ouverture et je vous propose un suivi avec compte rendu écrit, utile pour votre plan de maîtrise sanitaire.{" "}
          <Link to="/contact" className={textLink}>Demandez un devis professionnel</Link>.
        </>,
      ],
    },
  ],
  call: {
    title: "Des cafards à Chaumont ?",
    text: "Dites-moi dans quelle pièce et depuis quand : je vous dis quand je peux passer.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    {
      question: "Combien coûte un traitement contre les cafards à Chaumont ?",
      answer: "Le prix dépend de l'espèce, de la surface et du nombre de passages. Je regarde la situation, puis vous recevez un devis gratuit avec le prix exact avant le traitement. Le déplacement vous est annoncé au téléphone.",
    },
    {
      question: "Est-ce grave d'avoir des cafards chez soi ?",
      answer: "Ce n'est pas dangereux tout de suite, mais il ne faut pas attendre. Les blattes salissent les aliments et les surfaces, et leurs déjections peuvent gêner les personnes allergiques ou asthmatiques. Surtout, elles se multiplient vite : plus on traite tôt, plus c'est simple.",
    },
    {
      question: "Qu'est-ce qui attire les cafards dans une maison ?",
      answer: "La chaleur, l'eau et la nourriture. Une fuite sous l'évier, des miettes, une gamelle laissée la nuit ou une poubelle ouverte suffisent. Ils arrivent aussi avec des cartons, des sacs ou des appareils d'occasion.",
    },
    {
      question: "Quelle odeur les cafards détestent-ils ?",
      answer: "Certaines odeurs, comme le laurier ou les huiles essentielles, peuvent les gêner un moment. Mais elles ne tuent ni les blattes cachées ni leurs œufs : elles déplacent le problème sans le régler.",
    },
    {
      question: "Dois-je quitter mon logement pendant le traitement ?",
      answer: "Cela dépend du traitement choisi. Avec un gel, le plus souvent non. Avec une pulvérisation, il faut parfois laisser la pièce libre un moment : je vous dis à l'avance combien de temps et quelles précautions prendre pour les enfants et les animaux.",
    },
    {
      question: "Combien de passages faut-il ?",
      answer: "En général au moins deux : un pour traiter, un pour contrôler et toucher les jeunes sortis des œufs. Le nombre exact dépend de l'espèce et de l'ampleur du problème ; il est indiqué dans le devis.",
    },
    {
      question: "Intervenez-vous autour de Chaumont ?",
      answer: "Oui : Chamarandes-Choignes, Condes, Brethenay, Riaucourt, Treix, Jonchery, Euffigneix, Verbiesles, Luzy-sur-Marne, Semoutiers-Montsaon et les autres villages du secteur. Je suis joignable 7j/7, de 7h à 23h, au 07 65 25 67 92.",
    },
  ],
  nearby: {
    intro: "Basé aux portes de Chaumont, j'interviens partout en Haute-Marne, chez les particuliers comme chez les professionnels.",
    links: [
      { label: "Cafards Langres", to: "/cafards-blattes-langres" },
      { label: "Cafards Saint-Dizier", to: "/cafards-blattes-saint-dizier" },
      { label: "Cafards Nogent", to: "/cafards-blattes-nogent" },
      { label: "Cafards Joinville", to: "/cafards-blattes-joinville" },
    ],
    also: "Un autre nuisible à Chaumont ?",
    note: (
      <>
        Des piqûres la nuit plutôt que des insectes en cuisine ? Pensez aux{" "}
        <Link to="/punaises-de-lit" className={textLink}>punaises de lit</Link>, qui se traitent autrement.
      </>
    ),
  },
};

const CafardsBlattesChaumont = () => <RodentTownPage town={town} />;

export default CafardsBlattesChaumont;
