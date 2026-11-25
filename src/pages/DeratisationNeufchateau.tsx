import { Link } from "react-router-dom";
import { Armchair, Building2, Church, DoorOpen, Droplets, FileSignature, Map, Route, School, Scissors, Users, Utensils } from "lucide-react";
import heroImage from "@/assets/rat-qui-mange.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  city: "Neufchâteau",
  postalCode: "88300",
  region: "Vosges",
  slug: "/deratisation-neufchateau",
  title: "Entreprise de dératisation à Neufchâteau (88) | Devis gratuit",
  description:
    "Rats ou souris à Neufchâteau (88300), en maison, atelier, commerce ou collectivité ? Recherche des accès et traitement. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Ville haute, ville basse et ateliers",
    text: "Maison, atelier ou école : j'inspecte, je traite et je vous montre quels accès fermer.",
    highlight: "Des conseils clairs pour reboucher vous-même",
    signsLabel: "Avec quoi boucher un trou ? Les matériaux qui tiennent",
    image: heroImage,
    imageAlt: "Rat brun vu de face, occupé à manger au sol",
    area: "Entreprise de la Haute-Marne voisine, déplacement à Neufchâteau sur rendez-vous",
  },
  reviews: ["rigny", "jc", "moock"],
  why: {
    title: "Pourquoi y a-t-il des rats ou des souris chez vous ?",
    intro: "Quand ils sont là, ou quand ils reviennent, c'est qu'une porte est restée ouverte et qu'un repas les attend.",
    items: [
      { icon: Utensils, title: "Un garde-manger intact", text: "croquettes, graines ou poubelles : tant qu'il en reste, d'autres viendront." },
      { icon: DoorOpen, title: "Un trou oublié", text: "on bouche celui que l'on voit ; le deuxième est derrière le meuble." },
      { icon: Scissors, title: "Un bouchon trop tendre", text: "papier, chiffon ou silicone : ils le rongent en peu de temps." },
      { icon: Armchair, title: "Un meuble qui ne bouge pas", text: "mousse et tissu font un nid chaud, à la maison comme à l'atelier." },
    ],
  },
  where: {
    intro: "De la ville haute aux rives de la Meuse, j'ai ma liste d'endroits à vérifier.",
    items: [
      { icon: Church, title: "La ville haute", text: "Saint-Nicolas et la place Jeanne-d'Arc : parcelles étroites, caves superposées." },
      { icon: Building2, title: "Le secteur Saint-Christophe", text: "immeubles anciens, escaliers communs et greniers partagés." },
      { icon: Droplets, title: "Les Tanneries et le Mouzon", text: "murs au bord de l'eau, anciens conduits et sous-sols humides." },
      { icon: Map, title: "Les rives de la Meuse", text: "jardins, garages et remises en terrain bas." },
      { icon: Route, title: "Les faubourgs", text: "pavillons, dépôts et locaux artisanaux." },
      { icon: Users, title: "Rollainville, Rebeuville, Frebécourt", text: "villages tout proches, maisons à cour et dépendances." },
    ],
  },
  how: {
    title: "Comment se débarrasser des rats et des souris efficacement ?",
    intro: "Traiter sans fermer, c'est recommencer l'an prochain. Je trouve leur passage, je traite, je contrôle, puis je vous montre quoi reboucher.",
    photo: "gravier",
    steps: [
      { title: "Un poste à l'extérieur", text: "Placé près du trou repéré, il attire ceux qui entrent comme ceux qui sortent." },
      { title: "Un appât qui ne sort pas", text: "Grâce à la tige, on sait exactement ce qui a été consommé." },
      { title: "Le feu vert pour reboucher", text: "Quand les blocs restent intacts, on peut fermer le passage." },
    ],
    after: "Attendez toujours mon contrôle avant de fermer un trou, pour ne pas enfermer un animal.",
  },
  price: {
    paragraphs: [
      <>Chez un particulier, cela commence à <strong className="whitespace-nowrap text-primary">100 €</strong>, plus un déplacement depuis la région de Chaumont, précisé à l'appel. Un atelier ou une commune reçoit un devis gratuit, établi sur plan ou après visite.</>,
    ],
    aside: { icon: FileSignature, title: "Vous gardez la main", text: "Rien n'est commandé tant que vous n'avez pas répondu oui au devis." },
  },
  local: [
    {
      kind: "compare",
      target: true,
      title: "Boucher un trou de souris : quels matériaux tiennent ?",
      intro: "Attendez la fin du traitement, puis choisissez ce qui résiste à leurs dents.",
      heads: ["À utiliser", "À éviter"],
      rows: [
        { label: "Autour d'un tuyau", left: "Laine d'acier tassée, puis mortier ou mastic par-dessus.", right: "Mousse seule, ruban adhésif, papier." },
        { label: "Sur une aération", left: "Grille métallique à mailles de 5 ou 6 mm.", right: "Moustiquaire en plastique, ou fermeture complète : l'air doit passer." },
        { label: "Sous une porte", left: "Bas de porte avec brosse dense ou barre métallique.", right: "Boudin de tissu : il devient un nid." },
        { label: "Dans un mur", left: "Pierre, brique ou mortier adapté au mur.", right: "Plâtre, polystyrène, bouchon de bois." },
      ],
    },
    {
      kind: "text",
      title: "École, mairie, salle des fêtes : comment procéder ?",
      paragraphs: [
        "Dans un bâtiment public, on choisit un jour sans élèves ni visiteurs. Cuisine, réserve, chaufferie, vide sanitaire et placards à goûter sont vus en premier.",
        "Chaque poste est numéroté et reporté sur un plan remis au responsable. Le personnel sait ainsi ce qu'il ne doit ni déplacer ni nettoyer.",
      ],
      aside: {
        icon: School,
        title: "Commune ou association ?",
        text: <>Un mail avec la liste des bâtiments suffit pour préparer la visite : passez par la page <Link to="/contact" className={textLink}>contact</Link>.</>,
      },
    },
  ],
  call: {
    title: "Déjà traité, et les voilà de retour ?",
    text: "Dites-moi ce qui a été posé et ce qui a été bouché : on repart de là, pas de zéro.",
    contactLabel: "Expliquer mon cas",
  },
  faq: [
    { question: "Combien coûte une dératisation à Neufchâteau ?", answer: "Le tarif de départ est de 100 € pour un logement. La distance depuis Chaumont est comptée à part et annoncée au téléphone, puis le devis gratuit donne le total." },
    { question: "Intervenez-vous vraiment dans les Vosges ?", answer: "Oui, dans ce secteur de l'Ouest vosgien, sur rendez-vous. Plus loin, appelez : je vous dirai si c'est raisonnable pour vous." },
    { question: "Peut-on reboucher pendant le traitement ?", answer: "Pas tout de suite. On attend que l'activité cesse, sinon l'animal reste enfermé et perce ailleurs. Je vous indique le bon moment lors du contrôle." },
    { question: "La laine d'acier rouille-t-elle ?", answer: "Oui, à l'humidité. Dehors ou dans une cave, préférez une version inox ou une grille scellée." },
    { question: "J'achète un meuble ancien, comment éviter un passager ?", answer: "Ouvrez chaque tiroir, regardez le dos et le dessous, secouez les coussins à l'extérieur. Une odeur d'urine marquée doit vous alerter." },
    { question: "Où allez-vous près de Neufchâteau ?", answer: "Rebeuville, Frebécourt, Mont-lès-Neufchâteau, Certilleux, Circourt-sur-Mouzon, Coussey, Soulosse-sous-Saint-Élophe, Bazoilles-sur-Meuse, Tilleux et Barville. Voici mon numéro : 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Neufchâteau est à l'est de mon secteur habituel. Les pages ci-dessous couvrent le côté haut-marnais.",
    links: [
      { label: "Dératisation Chaumont", to: "/deratisation-chaumont" },
      { label: "Dératisation Bologne", to: "/deratisation-bologne" },
      { label: "Dératisation Nogent", to: "/deratisation-nogent" },
    ],
    also: "Je peux aussi venir à Neufchâteau pour :",
    note: (
      <>
        Vous hésitez encore sur l'animal ? La page{" "}
        <Link to="/deratisation" className={textLink}>reconnaître les rats et les souris</Link> vous aidera.
      </>
    ),
  },
};

const DeratisationNeufchateau = () => <RodentTownPage town={town} />;

export default DeratisationNeufchateau;
