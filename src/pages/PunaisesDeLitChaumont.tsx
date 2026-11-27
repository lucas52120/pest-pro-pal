import { Link } from "react-router-dom";
import { Armchair, Briefcase, Building2, FileText, House, Landmark, Luggage, School, ShieldCheck, TrainFront, Trees, Users } from "lucide-react";
import heroImage from "@/assets/punaise-adulte.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "bedbugs",
  city: "Chaumont",
  postalCode: "52000",
  region: "Haute-Marne",
  slug: "/punaises-de-lit-chaumont",
  title: "Traitement punaises de lit à Chaumont (52)",
  description:
    "Des punaises de lit à Chaumont ? Diagnostic sur place et traitement en plusieurs passages, sans jugement et en toute discrétion. Appelez le 07 65 25 67 92.",
  hero: {
    eyebrow: "Sans jugement, en toute discrétion",
    text: "Des piqûres au réveil, des petits points noirs sur le matelas ? Je viens voir ce qu'il en est, puis je traite chaque cachette, discrètement.",
    highlight: "Véhicule non logoté sur demande",
    signsLabel: "Est-ce vraiment des punaises de lit ? Les signes",
    image: heroImage,
    imageAlt: "Punaise de lit adulte, brun-rouge, vue de profil sur une peau humaine",
    imageClassName: "object-[92%_50%] max-lg:brightness-75",
  },
  reviews: ["mathieu", "soucelier", "muller"],
  why: {
    title: "Pourquoi avez-vous des punaises de lit chez vous ?",
    intro: "Ce n'est pas une question de propreté : une punaise ne cherche ni miettes ni saleté, seulement quelqu'un qui dort. Elle arrive presque toujours en voyageant avec nous.",
    items: [
      { icon: Luggage, title: "Un séjour ou un voyage", text: "hôtel, gîte, train de nuit, colonie : elle se glisse dans une valise ou un sac posé près du lit." },
      { icon: Armchair, title: "Un meuble d'occasion", text: "matelas, sommier, canapé ou table de chevet récupérés sans être inspectés." },
      { icon: Building2, title: "Un voisin touché", text: "en immeuble, elles passent d'un logement à l'autre le long des tuyaux, des gaines et des prises." },
      { icon: Users, title: "Une visite", text: "un proche qui dort chez vous, un sac de sport laissé sur le lit : quelques-unes suffisent." },
    ],
  },
  how: {
    title: "Comment se débarrasser des punaises de lit efficacement ?",
    intro: "Une bombe insecticide ne fait que les disperser dans les autres pièces. Il faut trouver toutes leurs cachettes, combiner plusieurs méthodes, puis revenir pour atteindre celles qui sortent des œufs.",
    steps: [
      { title: "Je cherche les traces", text: "Coutures du matelas, lattes du sommier, plinthes, tête de lit : je repère où elles vivent et jusqu'où elles sont allées." },
      { title: "Je combine les traitements", text: "Produit professionnel dans les cachettes, vapeur sèche à haute température si besoin, pièges de contrôle autour du lit." },
      { title: "Je repasse autant que nécessaire", text: "Les produits n'atteignent pas les œufs : je reviens 10 à 15 jours plus tard, en 2, 3 ou 4 passages selon l'infestation." },
    ],
    after: (
      <>
        Avant le premier passage, je vous explique comment préparer le linge et la chambre. Pour tout savoir sur ces insectes, voyez la page{" "}
        <Link to="/punaises-de-lit" className={textLink}>punaises de lit en Haute-Marne</Link>.
      </>
    ),
  },
  where: {
    intro: "Elles vivent près de l'endroit où l'on dort, mais pas seulement. Selon votre logement à Chaumont, voici ce que je regarde en priorité.",
    items: [
      { icon: Landmark, title: "Centre historique", text: "immeubles anciens : parquets disjoints, plinthes en bois, papiers peints qui se décollent." },
      { icon: Building2, title: "Le Cavalier et La Rochotte", text: "en résidence, elles circulent par les gaines : je vous dis s'il vaut mieux prévenir les voisins." },
      { icon: House, title: "Brottes", text: "pavillons : chambre d'amis, canapé-lit, chambre d'un enfant qui rentre d'un séjour." },
      { icon: TrainFront, title: "Autour de la gare", text: "hôtels et logements de passage, où les occupants se succèdent d'une nuit à l'autre." },
      { icon: School, title: "Foyers, internats et résidences", text: "chambres partagées, lits superposés, beaucoup d'allées et venues." },
      { icon: Trees, title: "Les villages autour", text: "maisons de campagne et chambres d'hôtes : une chambre peu utilisée peut les abriter des mois." },
    ],
  },
  price: {
    paragraphs: [
      "Le prix dépend du nombre de pièces touchées, de l'ampleur de l'infestation et du nombre de passages. Une chambre où l'on repère quelques punaises n'a rien à voir avec un logement entier touché depuis des mois.",
      <>
        À titre de repère, une petite infestation repérée tôt démarre autour de <strong className="whitespace-nowrap text-primary">250 €</strong>. Quand plusieurs pièces sont touchées, le prix peut dépasser <strong className="whitespace-nowrap text-primary">900 €</strong>. Je vous donne le prix exact après le diagnostic, avant de commencer quoi que ce soit.
      </>,
    ],
    aside: {
      icon: FileText,
      title: "Rien n'est engagé avant le devis",
      text: "Le devis dit combien de passages sont prévus et ce qu'ils comprennent. Le déplacement vous est annoncé dès votre appel.",
    },
  },
  local: [
    {
      kind: "compare",
      target: true,
      title: "Comment savoir si ce sont des punaises de lit ?",
      intro: "Des piqûres seules ne suffisent pas : puces et moustiques laissent aussi des boutons. Voici ce qui fait la différence.",
      heads: ["Punaises de lit", "Puces ou moustiques"],
      rows: [
        { label: "Les piqûres", left: "En ligne ou en petits groupes, sur les bras, le cou, le dos : ce qui dépasse des draps.", right: "Puces : surtout aux chevilles et aux jambes. Moustiques : isolées, n'importe où." },
        { label: "Quand ça pique", left: "La nuit, pendant le sommeil : on le découvre au réveil.", right: "Puces : à toute heure, souvent près d'un animal. Moustiques : le soir, avec le bourdonnement." },
        { label: "Les traces", left: "Points noirs sur le matelas, petites taches de sang sur les draps, mues claires.", right: "Puces : petits grains noirs dans le panier de l'animal. Moustiques : aucune." },
        { label: "L'insecte", left: "Plat, brun-rouge, de la taille d'un pépin de pomme. Il ne vole pas et ne saute pas.", right: "La puce est minuscule et saute très haut. Le moustique vole." },
      ],
      after: "Un doute ? Envoyez une photo de l'insecte ou des traces au 07 65 25 67 92 : je vous dis ce que c'est.",
    },
    {
      kind: "dos",
      title: "En attendant mon passage : les bons gestes",
      intro: "Ce que vous faites les premiers jours peut limiter l'infestation, ou au contraire l'étendre à toute la maison.",
      yes: [
        { text: "Continuez à dormir dans votre lit : elles restent ainsi regroupées autour de la chambre." },
        { text: "Lavez draps et pyjamas à 60 °C, puis gardez-les dans des sacs fermés." },
        { text: "Passez l'aspirateur sur le matelas et autour du lit, puis jetez le sac bien fermé dehors." },
        { text: "Notez où vous avez vu des insectes ou des traces : cela m'aide pour le diagnostic." },
      ],
      no: [
        { text: "Changer de chambre ou dormir sur le canapé : elles vous suivent." },
        { text: "Pulvériser un insecticide du commerce : elles se dispersent et y résistent souvent." },
        { text: "Sortir le matelas sans l'emballer : il en sème dans l'escalier et les parties communes." },
        { text: "Déplacer des affaires de la chambre vers d'autres pièces sans les avoir lavées." },
      ],
    },
    {
      kind: "text",
      title: "Locataire, propriétaire, hébergeur : qui fait quoi ?",
      paragraphs: [
        "Vous êtes locataire : prévenez votre propriétaire ou votre bailleur par écrit dès les premiers signes. Depuis la loi ELAN, il doit fournir un logement sans nuisibles. En cas de doute sur qui paie, l'ADIL de la Haute-Marne peut vous renseigner.",
        "En immeuble, parlez-en au syndic ou au bailleur : si des voisins sont touchés, mieux vaut traiter les logements concernés dans la même période.",
        <>
          Hôtel, chambre d'hôtes ou meublé à Chaumont ? Je viens à un moment où la chambre peut rester libre, sans attirer l'attention de vos clients, et je vous dis quand la relouer.{" "}
          <Link to="/contact" className={textLink}>Demandez un devis professionnel</Link>.
        </>,
      ],
      aside: {
        icon: ShieldCheck,
        title: "Certibiocide",
        text: "Je suis titulaire du Certibiocide, le certificat obligatoire pour utiliser des produits professionnels contre les punaises de lit.",
      },
    },
  ],
  call: {
    title: "Des punaises de lit à Chaumont ?",
    text: "Dites-moi depuis quand et dans quelles pièces : on fixe ensemble la date du diagnostic.",
    contactLabel: "Demander un diagnostic",
  },
  faq: [
    {
      question: "Combien coûte un traitement contre les punaises de lit à Chaumont ?",
      answer: "Cela dépend du nombre de pièces, de l'infestation et du nombre de passages. Une petite infestation repérée tôt démarre autour de 250 €. Le prix exact vous est donné après le diagnostic, avant tout traitement.",
    },
    {
      question: "Combien de passages faut-il ?",
      answer: "Deux au minimum, parfois trois ou quatre quand l'infestation est installée depuis longtemps. Ils sont espacés de 10 à 15 jours, et leur nombre est fixé au diagnostic.",
    },
    {
      question: "Avoir des punaises de lit, est-ce un manque d'hygiène ?",
      answer: "Non. Elles se nourrissent de sang, pas de saleté : on les trouve aussi bien dans une maison impeccable que dans un hôtel. Il n'y a pas à en avoir honte, et plus on appelle tôt, plus le traitement est simple.",
    },
    {
      question: "Peut-on rester chez soi pendant le traitement ?",
      answer: "Cela dépend des produits utilisés et de l'infestation. Je vous dis avant chaque passage combien de temps laisser la chambre fermée. Ensuite, continuez à dormir dans votre lit : les punaises sortent et rencontrent le traitement.",
    },
    {
      question: "Les voisins vont-ils le savoir ?",
      answer: "Pas par moi. Je peux venir avec un véhicule sans marquage. En immeuble, prévenir le syndic aide simplement à traiter le problème à la source si d'autres logements sont touchés.",
    },
    {
      question: "Faut-il jeter son matelas ?",
      answer: "Le plus souvent, non : il se traite comme le reste. Si vous le jetez quand même, emballez-le dans un plastique fermé et rendez-le inutilisable avant de le sortir, pour qu'il ne contamine personne.",
    },
    {
      question: "Intervenez-vous autour de Chaumont ?",
      answer: "Oui : Chamarandes-Choignes, Brethenay, Condes, Riaucourt, Treix, Jonchery, Euffigneix, Verbiesles, Luzy-sur-Marne, Semoutiers-Montsaon et les autres communes du secteur. Joignable 7j/7, de 7h à 23h, au 07 65 25 67 92.",
    },
  ],
  nearby: {
    intro: "Basé aux portes de Chaumont, j'interviens dans toute la Haute-Marne, chez les particuliers comme dans les hébergements.",
    links: [
      { label: "Punaises de lit Langres", to: "/punaises-de-lit-langres" },
      { label: "Punaises de lit Saint-Dizier", to: "/punaises-de-lit-saint-dizier" },
      { label: "Punaises de lit Joinville", to: "/punaises-de-lit-joinville" },
      { label: "Punaises de lit Bourbonne-les-Bains", to: "/punaises-de-lit-bourbonne-les-bains" },
    ],
    also: "Un autre nuisible à Chaumont ?",
    note: (
      <>
        Des petites bêtes qui filent dans la cuisine plutôt que des piqûres la nuit ? Ce sont plutôt des cafards : voyez la page{" "}
        <Link to="/cafards-blattes-chaumont" className={textLink}>cafards à Chaumont</Link>.
      </>
    ),
  },
};

const PunaisesDeLitChaumont = () => <RodentTownPage town={town} />;

export default PunaisesDeLitChaumont;
