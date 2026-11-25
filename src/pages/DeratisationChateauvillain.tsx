import { Link } from "react-router-dom";
import { Apple, BrickWall, Castle, DoorOpen, Droplets, Euro, Fence, HandHeart, Hourglass, House, Moon, TowerControl, Trees, Wine } from "lucide-react";
import heroImage from "@/assets/mur-pierre-joints.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  city: "Châteauvillain",
  postalCode: "52120",
  region: "Haute-Marne",
  slug: "/deratisation-chateauvillain",
  title: "Entreprise de dératisation à Châteauvillain (52)",
  description:
    "Rats ou souris à Châteauvillain (52120), dans une maison ancienne ou une dépendance ? Traitement adapté. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Caves voûtées et maisons de caractère",
    text: "Cave voûtée ou vieux murs : je cherche chaque passage et je pose sans laisser de marque.",
    highlight: "Aucun perçage dans la pierre sans votre accord",
    signsLabel: "Votre cave sert de réserve ? À lire",
    image: heroImage,
    imageAlt: "Mur de pierre ancien avec un poste d'appâtage posé à sa base",
    imageClassName: "object-bottom",
  },
  reviews: ["yerli", "hanuszek", "genest"],
  why: {
    title: "Pourquoi les rats et les souris s'installent-ils chez vous ?",
    intro: "Une cave ancienne reste fraîche l'été et douce le reste de l'année : ils s'y plaisent en toute saison.",
    items: [
      { icon: Apple, title: "Des réserves à la cave", text: "pommes, pommes de terre, noix et cartons de bouteilles." },
      { icon: Hourglass, title: "Des pièces peu visitées", text: "quand on descend deux fois par an, ils ont le temps de s'installer." },
      { icon: BrickWall, title: "Des pierres disjointes", text: "un vide entre deux blocs, et ils circulent dans l'épaisseur du mur." },
      { icon: DoorOpen, title: "Une vieille descente de cave", text: "la porte du haut ne joint plus et le caniveau reste ouvert." },
    ],
  },
  where: {
    intro: "Derrière les remparts comme à la lisière de la forêt, je vérifie ces endroits l'un après l'autre.",
    items: [
      { icon: Castle, title: "Les remparts", text: "maisons adossées à la muraille, passages étroits, pierres creuses." },
      { icon: TowerControl, title: "La tour Saint-Marc et l'Auditoire", text: "cœur ancien aux toits emboîtés : les greniers se rejoignent." },
      { icon: Trees, title: "La Porte Madame et le Parc aux Daims", text: "jardins en lisière, cabanons et clôtures en bois." },
      { icon: Droplets, title: "La boucle de l'Aujon", text: "lavoirs, berges et murs de jardin, où je cherche les terriers." },
      { icon: House, title: "Les pavillons à l'entrée du bourg", text: "garage, combles perdus et terrasse sur plots." },
      { icon: Moon, title: "La forêt d'Arc-Châteauvillain", text: "maisons isolées, où le mulot vient aussi souvent que la souris." },
    ],
  },
  how: {
    title: "Comment éliminer les rats et les souris efficacement ?",
    intro: "J'avance à la lampe, pierre par pierre, pour trouver leur passage. Puis je pose sans percer, et je reviens contrôler avant de parler de rebouchage.",
    photo: "mur",
    steps: [
      { title: "Posé, jamais scellé", text: "Le boîtier s'appuie contre la pierre, sans trou ni fixation dans votre mur." },
      { title: "Un appât enfermé", text: "Vos réserves restent propres : rien ne sort du poste." },
      { title: "Un contrôle à la lampe", text: "J'ouvre chaque boîtier et je regarde si les traces au sol sont fraîches." },
    ],
    after: "Une chauve-souris dans la cave ? Elle est protégée : on la laisse en paix et j'adapte la pose.",
  },
  price: {
    paragraphs: [
      <>Vous partez de <strong className="whitespace-nowrap text-primary">100 €</strong>. Une cave seule, une maison complète ou deux caves voisines : le devis, offert, distingue chaque partie pour que vous sachiez ce que vous payez.</>,
    ],
    aside: { icon: Euro, title: "À 20 minutes de Chaumont environ", text: "Le déplacement reste raisonnable et je vous le chiffre dès l'appel." },
  },
  local: [
    {
      kind: "cards",
      target: true,
      columns: "lg:grid-cols-3",
      title: "Pommes, vin, bois : comment protéger ce qui dort à la cave ?",
      intro: "Ils ne viennent pas pour le vin. Mais ils abîment tout ce qui l'entoure.",
      items: [
        { icon: Apple, title: "Fruits et pommes de terre", text: "en clayettes surélevées, recouvertes d'un grillage à mailles de 6 mm au plus. Jamais en tas au sol." },
        { icon: Wine, title: "Bouteilles et cartons", text: "les étiquettes et la colle se mangent. Sortez les bouteilles des cartons et rangez-les sur un casier ajouré." },
        { icon: Fence, title: "Bois et vieux meubles", text: "laissez un vide derrière la pile : il permet de voir et de poser un piège." },
      ],
    },
    {
      kind: "text",
      title: "Murs mitoyens : comment en parler à votre voisin ?",
      paragraphs: [
        "Personne n'aime apprendre qu'il a des rats. Évitez les reproches : dites simplement ce que vous avez entendu, montrez une photo et proposez de regarder ensemble.",
        "Quand les deux caves sont ouvertes le même jour, je vois d'où viennent les traces et où elles vont. Chacun reçoit son devis, chacun garde sa décision.",
      ],
      aside: {
        icon: HandHeart,
        title: "Si le dialogue est difficile",
        text: "Gardez des preuves datées et écrivez un courrier courtois. La mairie peut aussi servir d'intermédiaire.",
      },
    },
  ],
  call: {
    title: "Vous n'osez plus descendre à la cave ?",
    text: "J'y vais pour vous. Dites-moi seulement par où l'on entre et ce qui y est rangé.",
    contactLabel: "Demande de devis",
  },
  faq: [
    { question: "Quel est le prix pour traiter une cave à Châteauvillain ?", answer: "Le premier niveau de prix est de 100 €. Selon l'étendue et le nombre de contrôles, le devis gratuit peut être différent : vous l'avez en main avant toute pose." },
    { question: "Comment savoir si un trou dans ma cave est utilisé ?", answer: "Glissez-y une boule de papier journal sans forcer. Si elle est ressortie ou déplacée le lendemain, quelqu'un passe par là. Ne mettez pas la main dans le trou." },
    { question: "Les bouteilles souillées sont-elles à jeter ?", answer: "Non. Lavez-les à l'eau chaude savonneuse avec des gants, en insistant sur le goulot, avant de les ouvrir." },
    { question: "Je trouve des noix vides partout : souris ou autre chose ?", answer: "Un trou rond et net dans la coquille fait penser à un mulot. Une noix ouverte en deux est plutôt l'œuvre d'un écureuil. Gardez-en une pour me la montrer." },
    { question: "Pouvez-vous intervenir dans une maison louée pour les vacances ?", answer: "Oui, avec votre accord écrit si vous n'êtes pas sur place, et une personne pour ouvrir. Je choisis des emplacements invisibles pour vos hôtes." },
    { question: "Jusqu'où allez-vous autour de Châteauvillain ?", answer: "Orges, Pont-la-Ville, Cour-l'Évêque, Coupray, Latrecey-Ormoy-sur-Aube, Bricon, Blessonville, Braux-le-Châtel, Dinteville, Cirfontaines-en-Azois, et plus largement tout l'ouest du département. Joignez-moi au 07 65 25 67 92." },
  ],
  nearby: {
    intro: "De Châteauvillain à la forêt, je me rends dans chaque village.",
    links: [
      { label: "Dératisation Arc-en-Barrois", to: "/deratisation-arc-en-barrois" },
      { label: "Dératisation Semoutiers-Montsaon", to: "/deratisation-semoutiers-montsaon" },
      { label: "Dératisation Chaumont", to: "/deratisation-chaumont" },
      { label: "Dératisation Bar-sur-Aube", to: "/deratisation-bar-sur-aube" },
    ],
    also: "Châteauvillain, c'est aussi :",
    note: (
      <>
        Pour aller plus loin sur les espèces et les produits, lisez la page{" "}
        <Link to="/deratisation" className={textLink}>dératisation : tout comprendre</Link>.
      </>
    ),
  },
};

const DeratisationChateauvillain = () => <RodentTownPage town={town} />;

export default DeratisationChateauvillain;
