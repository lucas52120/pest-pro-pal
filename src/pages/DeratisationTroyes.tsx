import { Link } from "react-router-dom";
import { Building2, ChefHat, Church, ClipboardCheck, Droplets, Home, Landmark, MapPin, Store, Warehouse } from "lucide-react";
import heroImage from "@/assets/accueil-rat.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  city: "Troyes",
  postalCode: "10000",
  region: "Aube",
  slug: "/deratisation-troyes",
  title: "Entreprise de dératisation à Troyes (10) | Devis gratuit",
  description:
    "Rats ou souris à Troyes (10000), dans un commerce, un immeuble ou une maison à pans de bois ? Visite sur rendez-vous. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Commerces, copropriétés et maisons à pans de bois",
    text: "Restaurant, immeuble ou maison du centre : je viens sur rendez-vous, avec une visite préparée.",
    highlight: "Visites planifiées à l'avance",
    signsLabel: "Restaurant ou commerce ? Les points à surveiller",
    image: heroImage,
    imageAlt: "Rat gris posé sur une poutre, de profil",
    area: "Entreprise basée près de Chaumont, déplacement à Troyes sur rendez-vous",
  },
  reviews: ["yerli", "hanuszek", "babinski"],
  why: {
    title: "Pourquoi les rats et les souris s'installent-ils chez vous ?",
    intro: "Beaucoup de cuisines, des bâtiments qui se touchent : la ville leur simplifie la vie.",
    items: [
      { icon: ChefHat, title: "Des restes à toute heure", text: "restaurants, snacks et appartements se suivent dans la même rue." },
      { icon: Building2, title: "Des immeubles d'un seul tenant", text: "greniers et caves communiquent sur plusieurs numéros." },
      { icon: Droplets, title: "Le réseau sous les pieds", text: "égouts et anciens ouvrages d'eau leur servent de route." },
      { icon: Store, title: "Les sacs du soir", text: "sortis trop tôt, ils font office de buffet jusqu'au ramassage." },
    ],
  },
  where: {
    intro: "Centre ancien, copropriété ou zone commerciale : j'inspecte différemment selon l'endroit.",
    items: [
      { icon: Landmark, title: "Saint-Jean et la rue Champeaux", text: "restaurants, boutiques et logements au-dessus, dans le bâti ancien." },
      { icon: Church, title: "La cathédrale et Saint-Urbain", text: "maisons, immeubles et cours intérieures." },
      { icon: Droplets, title: "Les quais et les bras de Seine", text: "rez-de-chaussée, caves et sous-sols proches de l'eau." },
      { icon: Warehouse, title: "Les zones commerciales", text: "réserves, quais de livraison, faux plafonds et abords." },
      { icon: Building2, title: "Les copropriétés", text: "parties communes, gaines, locaux poubelles et parkings." },
      { icon: MapPin, title: "L'agglomération", text: "Sainte-Savine, La Chapelle-Saint-Luc, Saint-André-les-Vergers, Pont-Sainte-Marie." },
    ],
  },
  how: {
    title: "Comment se débarrasser des rats et des souris ?",
    intro: "On prépare la visite par téléphone, je repère les passages sur place, je pose, et la date du contrôle est déjà fixée en partant.",
    photo: "mur",
    steps: [
      { title: "Un poste discret", text: "Dans une cour, un local technique ou au pied d'un mur, à l'écart du public." },
      { title: "Un modèle verrouillé", text: "Indispensable en copropriété : personne ne peut ouvrir ni prendre l'appât." },
      { title: "Un contrôle annoncé", text: "Gardien, gérant ou syndic savent quand je reviens et ce qui a été relevé." },
    ],
    after: "Dans les cuisines et les pièces de vie, je travaille de préférence avec des pièges.",
  },
  price: {
    paragraphs: [
      <>La prestation débute à <strong className="whitespace-nowrap text-primary">100 €</strong>, auxquels s'ajoute la route, que je vous annonce au téléphone. Pour un commerce ou une copropriété, demandez un devis gratuit : il détaille les postes, les passages et les documents remis.</>,
    ],
    aside: { icon: ClipboardCheck, title: "Pour les syndics", text: "Indiquez le nombre de cages, de caves et de locaux communs. Avec ces chiffres, la première visite va plus vite." },
  },
  local: [
    {
      kind: "levels",
      target: true,
      title: "Restaurant, snack, épicerie : les quatre points à surveiller",
      intro: "Dans un commerce alimentaire, on ne cherche pas seulement l'animal. On cherche ce qui le fait revenir.",
      items: [
        { title: "La réception", text: "Inspectez les cartons avant de les rentrer et aplatissez-les le jour même." },
        { title: "Le stock sec", text: "Rien au sol, rien contre le mur, et des dates qui tournent." },
        { title: "Sous les machines", text: "Moteurs de frigo et de lave-verres : chaleur, eau et miettes réunies." },
        { title: "Le local déchets", text: "Bacs fermés, sol lavé, porte avec bas étanche." },
      ],
      after: (
        <>
          Vous devez pouvoir montrer ce qui est fait contre les nuisibles. Gardez le plan des postes et les comptes rendus : ils entrent dans votre{" "}
          <Link to="/deratisation" className={textLink}>suivi d'hygiène professionnel</Link>.
        </>
      ),
    },
    {
      kind: "list",
      title: "Vous vivez dans une maison à pans de bois du Bouchon ?",
      intro: "Les façades sont superbes. Derrière, les planchers sont creux et les étages débordent les uns sur les autres.",
      items: [
        { title: "Écoutez l'encorbellement", text: "l'avancée au-dessus de la rue est creuse, et presque jamais visitée." },
        { title: "Soulevez une plinthe", text: "derrière, on trouve souvent la galerie principale." },
        { title: "Regardez la gouttière", text: "un angle de façade et une descente d'eau suffisent à grimper." },
        { title: "Parlez à la copropriété", text: "un plancher appartient souvent à deux logements à la fois." },
      ],
      aside: {
        icon: Home,
        title: "Attention aux travaux",
        text: "Dans le secteur sauvegardé, toute modification visible de l'extérieur peut demander une autorisation. Pièges et postes intérieurs ne sont pas concernés.",
      },
    },
  ],
  call: {
    title: "Un commerce, un immeuble, une maison à Troyes ?",
    text: "Donnez-moi l'adresse et l'usage du lieu. Je vous dis franchement si je suis la bonne personne.",
    contactLabel: "Décrire mon besoin",
  },
  faq: [
    { question: "Quel est le tarif d'une dératisation à Troyes ?", answer: "À partir de 100 €, déplacement en plus. Ce dernier vous est donné avant tout rendez-vous. Le devis est gratuit." },
    { question: "Pouvez-vous passer aujourd'hui ?", answer: "En général non, car Troyes est à environ 100 km de ma base. Je préfère vous annoncer une vraie date que vous faire attendre. Si c'est urgent, une entreprise sur place sera plus rapide." },
    { question: "Un contrôle sanitaire arrive, que puis-je faire ?", answer: "Nettoyez à fond, jetez tout aliment entamé, notez ce que vous avez vu et rassemblez vos documents. Ne cachez pas un problème : montrez que vous le traitez." },
    { question: "Le syndic tarde, ai-je le droit de traiter chez moi ?", answer: "Oui, dans votre lot. Les caves, gaines et couloirs communs demandent en revanche son accord. Relancez-le par écrit avec des photos." },
    { question: "Les rats vus dans un parc relèvent-ils de vous ?", answer: "Non, l'espace public dépend de la ville. Signalez-le aux services municipaux. J'interviens sur les terrains et bâtiments privés, ou à la demande d'une collectivité." },
    { question: "Vous déplacez-vous dans l'agglomération ?", answer: "Oui, toujours sur rendez-vous : Sainte-Savine, La Chapelle-Saint-Luc, Saint-André-les-Vergers, Saint-Julien-les-Villas, Pont-Sainte-Marie, Les Noës-près-Troyes, Rosières-près-Troyes, Saint-Parres-aux-Tertres. Contact : 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Sur le même axe, je couvre aussi Bar-sur-Aube et l'ouest haut-marnais.",
    links: [
      { label: "Dératisation Bar-sur-Aube", to: "/deratisation-bar-sur-aube" },
      { label: "Dératisation Châteauvillain", to: "/deratisation-chateauvillain" },
      { label: "Dératisation Chaumont", to: "/deratisation-chaumont" },
    ],
    also: "Autres prestations :",
    note: (
      <>
        Avant de m'appeler, vous pouvez consulter la page{" "}
        <Link to="/deratisation" className={textLink}>comment se déroule une dératisation</Link>.
      </>
    ),
  },
};

const DeratisationTroyes = () => <RodentTownPage town={town} />;

export default DeratisationTroyes;
