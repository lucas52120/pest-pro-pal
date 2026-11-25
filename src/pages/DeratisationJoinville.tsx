import { Link } from "react-router-dom";
import { Castle, Church, Droplets, Flower2, House, KeyRound, Landmark, Store, Trees, Wallet } from "lucide-react";
import heroImage from "@/assets/rat-gros-plan.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  city: "Joinville",
  postalCode: "52300",
  region: "Haute-Marne",
  slug: "/deratisation-joinville",
  title: "Entreprise de dératisation à Joinville (52) | Devis gratuit",
  description:
    "Rats ou souris à Joinville (52300), dans une cave, une réserve ou sous un plancher ? Traitement adapté et conseils. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Vieille ville, quais et villages",
    text: "Cave, cour ou réserve : je trouve la cachette, je traite et je contrôle, sans abîmer votre maison.",
    highlight: "Un prix annoncé avant toute pose",
    signsLabel: "Vous venez d'acheter ? Ce qu'il faut vérifier",
    image: heroImage,
    imageAlt: "Rat brun sortant la tête sous une planche, entre des graines",
  },
  reviews: ["rigny", "duverne", "hanuszek"],
  why: {
    title: "Pourquoi y a-t-il des rats ou des souris chez vous ?",
    intro: "Vous n'y êtes souvent pour rien. Dans une ville ancienne, ils trouvent facilement ce qu'ils cherchent.",
    items: [
      { icon: Store, title: "Un repas tout près", text: "réserve de commerce, poubelle de cour ou placard de cuisine mal fermé." },
      { icon: KeyRound, title: "Une maison vide à côté", text: "ils s'y reproduisent au calme, puis passent chez vous pour manger." },
      { icon: Droplets, title: "Un tuyau ou un trou", text: "ancienne évacuation, gouttière cassée, soupirail : 2 cm suffisent à un rat." },
      { icon: Flower2, title: "Une cour encombrée", text: "pots, planches et vieux bois leur font un abri à deux pas de la porte." },
    ],
  },
  where: {
    intro: "Des quais à la vieille ville, chaque rue a ses cachettes. Je commence par celles-ci.",
    items: [
      { icon: Landmark, title: "La vieille ville", text: "autour de l'Auditoire et de l'église Notre-Dame : maisons serrées, cours intérieures, caves qui se touchent." },
      { icon: Droplets, title: "Le quai des Peceaux et le quai des Mailles", text: "au bord de l'eau, je vérifie les soupiraux, les sorties d'eau et le pied des façades." },
      { icon: Castle, title: "Vers le château du Grand Jardin", text: "maisons avec jardin, remises et murs de clôture où un terrier passe facilement inaperçu." },
      { icon: Store, title: "Les rues commerçantes", text: "réserves, arrière-boutiques et logements au-dessus : je regarde l'immeuble en entier." },
      { icon: Trees, title: "Au pied de la colline du château", text: "terrains en pente, caves creusées dans le talus, végétation contre les murs." },
      { icon: Church, title: "Vecqueville, Thonnance, Suzannecourt", text: "pavillons, anciennes fermes et poulaillers des villages voisins." },
    ],
  },
  how: {
    title: "Comment se débarrasser des rats efficacement ?",
    intro: "D'abord trouver leur chemin, ensuite poser, enfin vérifier. Dans les cours et les caves, j'utilise des postes fermés à clé qui tiennent l'appât hors de portée.",
    photo: "facade",
    steps: [
      { title: "Le poste, au bon endroit", text: "Il se pose à l'abri d'un mur ou d'une marche, là où les traces sont les plus nettes." },
      { title: "Un appât bien tenu", text: "Les blocs sont enfilés sur une tige : le rat les grignote sur place, sans les emporter." },
      { title: "Le retour sur place", text: "Un bloc rongé confirme le passage. S'il ne l'est pas, je cherche un meilleur emplacement." },
    ],
    after: "Si un voisin ou un locataire a touché à un poste, dites-le-moi simplement : il faut le vérifier.",
  },
  price: {
    paragraphs: [
      <>Les tarifs débutent à <strong className="whitespace-nowrap text-primary">100 €</strong>. Une cuisine visitée par deux souris et une maison avec cour, cave et grenier ne demandent pas le même travail. Le devis est gratuit : il précise ce que je pose, où, et quand je repasse.</>,
    ],
    aside: { icon: Wallet, title: "Vous êtes propriétaire bailleur ?", text: "Je peux établir le devis à votre nom et voir le logement avec votre locataire ou votre agence." },
  },
  local: [
    {
      kind: "list",
      target: true,
      title: "Vous venez d'acheter ou d'hériter d'une maison ?",
      intro: "Avant d'apporter vos meubles, faites le tour avec une lampe. C'est le meilleur moment pour agir : tout est vide et accessible.",
      items: [
        { title: "Sous l'évier et derrière la cuisine", text: "cherchez des crottes, des traces grasses et le trou autour des tuyaux." },
        { title: "Dans les cheminées condamnées", text: "un simple carton ne ferme rien. Il faut une plaque ou une grille fixée." },
        { title: "Sous les marches", text: "dans un vieil escalier en bois, l'espace sous les marches sert souvent de nid." },
        { title: "Dans les placards muraux", text: "regardez le fond : il donne parfois directement sur le mur en pierre." },
        { title: "À la cave", text: "un sol en terre remué près d'un mur mérite qu'on s'y arrête." },
      ],
      aside: {
        icon: House,
        title: "Prévoyez la visite avant les travaux",
        text: "Une fois les doublages posés, le passage est caché derrière la plaque de plâtre. Faites vérifier tant que les murs sont nus.",
      },
    },
    {
      kind: "levels",
      title: "Pourquoi vos pièges n'attrapent-ils rien ?",
      intro: "Beaucoup de gens m'appellent après avoir essayé seuls. Le piège n'est pas mauvais, il est presque toujours mal placé.",
      items: [
        { title: "Trop loin du mur", text: "Un rongeur longe les parois. Au milieu de la pièce, il fera le tour." },
        { title: "Trop tôt relevé", text: "Un rat se méfie de tout objet nouveau. Il peut l'ignorer une semaine entière." },
        { title: "Trop peu nombreux", text: "Un seul piège pour une cave, c'est compter sur la chance." },
        { title: "Trop concurrencé", text: "Si un sac de graines est ouvert à côté, il n'a aucune raison d'y toucher." },
      ],
    },
  ],
  call: {
    title: "Un doute dans votre maison de Joinville ?",
    text: "Décrivez-moi le bâtiment et ce que vous avez remarqué. On voit ensemble si une visite s'impose.",
    contactLabel: "Écrire un message",
  },
  faq: [
    { question: "Combien faut-il prévoir pour une dératisation à Joinville ?", answer: "Comptez au minimum 100 €. Le montant dépend de la taille du bien, de l'ancienneté du problème et des visites nécessaires. Je vous donne le coût du déplacement par téléphone, avant de venir." },
    { question: "La maison voisine est abandonnée, que puis-je faire ?", answer: "Signalez-la à la mairie, qui peut contacter le propriétaire. De mon côté, je peux traiter votre terrain et fermer la route entre les deux, mais je n'entre pas chez le voisin sans son accord." },
    { question: "Mon piège à colle a pris une souris, que faire ?", answer: "Évitez ce type de piège : l'animal souffre longtemps et d'autres bêtes peuvent s'y prendre. Un piège mécanique bien placé est plus net." },
    { question: "Travaillez-vous avec les agences immobilières ?", answer: "Oui, une agence peut me mandater pour un logement vide, en location ou en vente. Elle sait ce que j'ai vu et posé." },
    { question: "Peut-on rester dans la maison pendant le traitement ?", answer: "Oui. Les postes sont fermés et placés à l'écart. Je vous montre chaque emplacement et vous laisse des consignes simples, surtout s'il y a des enfants ou des animaux." },
    { question: "Jusqu'où vous déplacez-vous autour de Joinville ?", answer: "Vecqueville, Rupt, Nomécourt, Thonnance-lès-Joinville, Suzannecourt, Chatonrupt-Sommermont, Saint-Urbain-Maconcourt, Poissons, Fronville, Mussey-sur-Marne et plus loin si besoin. Je réponds au 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Depuis Chaumont, j'interviens dans toute la vallée de la Marne.",
    links: [
      { label: "Dératisation Saint-Dizier", to: "/deratisation-saint-dizier" },
      { label: "Dératisation Wassy", to: "/deratisation-wassy" },
      { label: "Dératisation Froncles", to: "/deratisation-froncles" },
      { label: "Dératisation Chaumont", to: "/deratisation-chaumont" },
    ],
    also: "À Joinville, je m'occupe aussi d'autres nuisibles :",
    note: (
      <>
        Les espèces, les risques et les méthodes sont détaillés sur la page{" "}
        <Link to="/deratisation" className={textLink}>dératisation dans le 52</Link>.
      </>
    ),
  },
};

const DeratisationJoinville = () => <RodentTownPage town={town} />;

export default DeratisationJoinville;
