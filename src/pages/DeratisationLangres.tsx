import { Link } from "react-router-dom";
import { BrickWall, CalendarDays, Castle, ClipboardList, DoorOpen, House, KeyRound, Moon, Rat, Snowflake, Trees, Utensils, Waves } from "lucide-react";
import heroImage from "@/assets/rat-planche.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  city: "Langres",
  postalCode: "52200",
  region: "Haute-Marne",
  slug: "/deratisation-langres",
  title: "Entreprise de dératisation à Langres (52) | Devis gratuit",
  description:
    "Rats ou souris à Langres (52200), dans les combles, la cave ou votre commerce ? Recherche des accès et traitement adapté. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Rats, souris et bruits au grenier",
    text: "De la cave au grenier, je cherche leurs cachettes et je traite en respectant votre maison.",
    highlight: "Devis gratuit, prix connu avant l'intervention",
    signsLabel: "Du bruit sous le toit ? Voir ce que cela peut être",
    image: heroImage,
    imageAlt: "Rat sombre sur une planche de bois",
    imageClassName: "max-lg:brightness-125",
  },
  reviews: ["yerli", "genest", "moock"],
  why: {
    title: "Pourquoi les rats et les souris rentrent-ils chez vous ?",
    intro: "Avoir des souris dans une vieille maison n'a rien d'une faute : elle leur offre simplement plus de portes.",
    items: [
      { icon: Utensils, title: "De quoi manger", text: "bocaux mal fermés, croquettes, graines et réserves de cave." },
      { icon: BrickWall, title: "Des joints creusés", text: "entre deux pierres, un vide large comme un crayon laisse passer une souris." },
      { icon: DoorOpen, title: "Un soupirail ou une trappe", text: "un grillage rouillé, un bois mangé en bas, et la cave est ouverte." },
      { icon: House, title: "Un mur ou un grenier partagé", text: "quand deux maisons se touchent, ils passent de l'une à l'autre sans sortir." },
    ],
  },
  where: {
    intro: "De la vieille ville aux villages du Pays de Langres, les maisons changent et leurs cachettes aussi.",
    items: [
      { icon: Castle, title: "La vieille ville, dans les remparts", text: "autour de la place Diderot et de la cathédrale Saint-Mammès : maisons hautes, murs épais, caves et greniers anciens." },
      { icon: BrickWall, title: "Sous-Murs, Brevoines et Saint-Gilles", text: "les anciens faubourgs, avec leurs cours, leurs remises et leurs jardins." },
      { icon: House, title: "La Citadelle, Les Franchises, Les Fourches", text: "je regarde le garage, le vide sanitaire, les gaines et les abords." },
      { icon: Waves, title: "Corlée et le lac de la Liez", text: "maisons de campagne, dépendances et réserves de bois ou de grain." },
      { icon: Trees, title: "Les villages du Pays de Langres", text: "fermes, granges et poulaillers : à l'automne, les mulots quittent les champs pour l'intérieur." },
      { icon: KeyRound, title: "Gîtes et maisons fermées l'hiver", text: "un logement vide est tranquille et abrité. Faites-le vérifier avant la réouverture." },
    ],
  },
  how: {
    title: "Comment se débarrasser des rats efficacement ?",
    intro: "Dans une maison tout en hauteur, traiter une seule pièce ne sert pas à grand-chose. Je trouve leur route, je pose à chaque niveau utile, puis je repasse.",
    photo: "joints",
    steps: [
      { title: "Au pied des vieux murs", text: "Un joint vide juste au-dessus du poste : c'est l'endroit qu'ils empruntent." },
      { title: "Des blocs bien attachés", text: "Le rat doit les manger dans le boîtier ; il ne les cache pas sous votre plancher." },
      { title: "Une vérification étage par étage", text: "Je compare la cave, les pièces et le grenier pour voir où il reste de l'activité." },
    ],
    after: "Si un poste vous semble ouvert ou cassé, n'y touchez pas et appelez-moi.",
  },
  price: {
    paragraphs: [
      <>Comptez <strong className="whitespace-nowrap text-primary">à partir de 100 €</strong>. Le nombre de niveaux à inspecter, l'état des accès et l'ancienneté du problème font la différence : c'est pourquoi je ne donne pas de prix ferme sans avoir vu les lieux.</>,
    ],
    aside: { icon: ClipboardList, title: "Commerce ou restaurant du centre ?", text: <>On organise les passages en dehors du service, en toute discrétion, réserve et cave comprises. <Link to="/contact" className={textLink}>Écrivez-moi</Link> pour un suivi dans l'année.</> },
  },
  local: [
    {
      kind: "cards",
      target: true,
      columns: "lg:grid-cols-3",
      title: "Du bruit au grenier : souris, rat ou loir ?",
      intro: "À l'oreille, on se trompe souvent. Ces trois situations donnent une première piste.",
      items: [
        { icon: Rat, title: "Grattements légers, toute la nuit", text: "souvent une souris, surtout si vous trouvez de petites crottes pointues dans l'isolant." },
        { icon: Moon, title: "Pas lourds et objets qui roulent", text: "on pense au rat. Le rat noir grimpe très bien et aime les hauteurs." },
        { icon: Snowflake, title: "Vacarme l'été, silence l'hiver", text: "cela peut être un loir : il dort à la mauvaise saison. S'il y a du bruit en janvier, ce n'est sans doute pas lui." },
      ],
      after: (
        <>
          Des courses, des sauts et de longues crottes torsadées ? Il peut s'agir d'une fouine : le cadre est différent, voyez la{" "}
          <Link to="/regulation-esod" className={textLink}>régulation des espèces ESOD</Link>.
        </>
      ),
    },
    {
      kind: "levels",
      title: "Rats et souris : ce que je contrôle de la cave au toit",
      intro: "Je pars du bas et je remonte, niveau après niveau.",
      items: [
        { title: "Sous la maison", text: "Dans la cave, je suis le bas des murs : terre remuée, crottes, passages de tuyaux, regards d'évacuation." },
        { title: "Au rez-de-chaussée", text: "Cuisine, cellier, dessous d'escalier, arrière-boutique : c'est là que se trouve la nourriture." },
        { title: "Dans les étages", text: "Plinthes, coffrages, planchers creux et anciennes cheminées servent de chemins discrets." },
        { title: "Sous le toit", text: "Isolant tassé, coins sombres, jours sous les tuiles : le rat noir et la souris s'y plaisent." },
      ],
    },
    {
      kind: "list",
      title: "Maison de vacances ou gîte : partir l'esprit tranquille",
      intro: "Beaucoup de rongeurs s'installent quand personne ne vient. Quatre habitudes limitent les mauvaises surprises au retour.",
      items: [
        { text: "Videz les placards : farine, pâtes, croquettes et graines partent avec vous ou dans des bocaux." },
        { text: "Coupez l'accès : grille aux aérations, bas de porte à la cave, trappe du grenier fermée." },
        { text: "Ne stockez pas de bois ni de cartons contre les murs." },
        { text: "Au retour, ouvrez d'abord les fenêtres, puis regardez derrière le frigo, sous l'évier et dans les lits." },
      ],
      aside: {
        icon: CalendarDays,
        title: "Les traces étaient là à votre arrivée ?",
        text: "Ne balayez pas les crottes à sec : mouillez d'abord, portez des gants et aérez longuement. Lavez la vaisselle et le linge rangés à proximité, puis appelez-moi si les traces reviennent.",
      },
    },
  ],
  call: {
    title: "Vous entendez courir au-dessus de votre tête ?",
    text: "Dites-moi à quelle heure et à quel étage : c'est souvent suffisant pour savoir par où commencer.",
    contactLabel: "Demander un devis",
  },
  faq: [
    { question: "Combien coûte une dératisation à Langres ?", answer: "Le tarif débute à 100 €. Une maison sur quatre niveaux avec cave et grenier demande plus de temps qu'un petit appartement, et le nombre de passages compte aussi. Le déplacement vous est annoncé au téléphone et le devis, gratuit, fixe le montant." },
    { question: "Faut-il reboucher les trous de mon vieux mur tout de suite ?", answer: "Non, pas avant la fin du traitement : vous risqueriez d'enfermer des rongeurs, qui rongeront ailleurs pour sortir. Ensuite, on ferme les passages avec un matériau qu'ils n'attaquent pas. Sur une façade en pierre, un mortier à la chaux est souvent préférable au ciment." },
    { question: "Ma maison est dans le secteur protégé de Langres, qu'est-ce que cela change ?", answer: "Rien pour les pièges et les postes, qui se posent sans abîmer le bâtiment. En revanche, si vous devez refaire une façade, une grille ou une ouverture visible de la rue, renseignez-vous d'abord en mairie : des règles peuvent s'appliquer." },
    { question: "J'ai des souris alors que j'ai un chat, est-ce normal ?", answer: "Oui, c'est courant. Un chat attrape celles qu'il croise, mais il n'entre ni dans les murs ni sous les planchers. Prévenez-moi de sa présence : le choix et l'emplacement des dispositifs en tiennent compte." },
    { question: "Une odeur forte vient du plafond : est-ce un rat mort ?", answer: "Peut-être. Une odeur qui apparaît d'un coup et s'accentue plusieurs jours peut venir d'un animal mort dans une cloison ou un isolant. Si on peut l'atteindre, on le retire. N'y touchez pas à mains nues." },
    { question: "Venez-vous dans les villages autour de Langres ?", answer: "Oui : Saints-Geosmes, Humes-Jorquenay, Champigny-lès-Langres, Peigney, Saint-Ciergues, Perrancey-les-Vieux-Moulins, et plus largement tout le Pays de Langres. Appelez le 07 65 25 67 92, 7j/7 de 7h à 23h." },
  ],
  nearby: {
    intro: "Basé aux portes de Chaumont, j'interviens dans tout le sud de la Haute-Marne, en ville comme dans les hameaux.",
    links: [
      { label: "Dératisation Chalindrey", to: "/deratisation-chalindrey" },
      { label: "Dératisation Nogent", to: "/deratisation-nogent" },
      { label: "Dératisation Arc-en-Barrois", to: "/deratisation-arc-en-barrois" },
      { label: "Dératisation Bourbonne-les-Bains", to: "/deratisation-bourbonne-les-bains" },
      { label: "Dératisation Chaumont", to: "/deratisation-chaumont" },
    ],
    also: "À Langres, j'interviens aussi pour d'autres nuisibles :",
    note: (
      <>
        Pour connaître les rongeurs du département, les risques et les bons gestes, lisez aussi notre page sur la{" "}
        <Link to="/deratisation" className={textLink}>lutte contre les rats et souris en Haute-Marne</Link>.
      </>
    ),
  },
};

const DeratisationLangres = () => <RodentTownPage town={town} />;

export default DeratisationLangres;
