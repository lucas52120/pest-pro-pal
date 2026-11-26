import { Link } from "react-router-dom";
import { BedDouble, BrickWall, Castle, Droplets, FileText, House, Landmark, Luggage, Package, ThermometerSun, Trees, UtensilsCrossed } from "lucide-react";
import heroImage from "@/assets/blatte-hero.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "cockroaches",
  city: "Langres",
  postalCode: "52200",
  region: "Haute-Marne",
  slug: "/cafards-blattes-langres",
  title: "Traitement cafards et blattes à Langres (52) | Devis gratuit",
  description:
    "Cafards ou blattes à Langres ? Plus on agit tôt, plus c'est simple. Appelez, on intervient discrètement, 7j/7. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Maisons anciennes, gîtes et restaurants",
    text: "Murs épais, caves voûtées, vieilles canalisations : je trouve où les blattes se cachent et je traite, discrètement.",
    highlight: "Passage possible entre deux séjours pour les gîtes",
    signsLabel: "Cafard, poisson d'argent ou cloporte ? Faire la différence",
    image: heroImage,
    imageClassName: "max-lg:brightness-50",
    imageAlt: "Blatte posée sur une surface en verre, vue de profil",
  },
  reviews: ["mathieu", "duverne", "coustillet"],
  why: {
    title: "Pourquoi les cafards s'installent-ils chez vous ?",
    intro: "Une vieille maison n'est pas sale pour autant. Elle offre simplement plus de recoins chauds et humides, en toute saison.",
    items: [
      { icon: Droplets, title: "Une humidité qui dure", text: "cave voûtée, mur enterré, évacuation ancienne : la blatte orientale adore." },
      { icon: ThermometerSun, title: "La chaleur des appareils", text: "chaudière, ballon d'eau chaude, frigo collé au mur : la blatte germanique s'y loge." },
      { icon: BrickWall, title: "Des murs pleins de vides", text: "doublages, plinthes décollées, vieux conduits : autant de couloirs cachés." },
      { icon: Luggage, title: "Des arrivées fréquentes", text: "valises, cartons de livraison, meubles chinés : un passager suffit pour commencer." },
    ],
  },
  how: {
    title: "Comment se débarrasser des cafards et des blattes ?",
    intro: "Dans une maison sur plusieurs niveaux, on ne traite pas qu'une pièce. Je repère d'où elles viennent, puis j'associe les méthodes qui conviennent à chaque endroit.",
    steps: [
      { title: "De la cave à la cuisine", text: "Je suis les tuyaux et les murs humides, étage par étage, pour trouver le foyer et pas seulement les blattes visibles." },
      { title: "Plusieurs méthodes ensemble", text: "Gel dans les fentes de la cuisine, pulvérisation ciblée dans la cave ou la chaufferie : chaque zone reçoit le bon traitement." },
      { title: "Un second passage", text: "Je reviens quand les œufs ont éclos, pour traiter les jeunes et vérifier que l'activité a cessé." },
    ],
    after: (
      <>
        Je vous dis toujours avant s'il faut laisser une pièce libre et pendant combien de temps. Pour aller plus loin, voyez la page{" "}
        <Link to="/cafards-blattes" className={textLink}>cafards et blattes en Haute-Marne</Link>.
      </>
    ),
  },
  where: {
    intro: "Entre la vieille ville et les quartiers plus récents, les blattes ne choisissent pas les mêmes cachettes.",
    items: [
      { icon: Castle, title: "Dans les remparts", text: "autour de la place Diderot et de la cathédrale : caves voûtées, cuisines en sous-sol, colonnes d'eau anciennes." },
      { icon: UtensilsCrossed, title: "Restaurants et commerces du centre", text: "plonge, réserve, dessous des meubles réfrigérés et local à poubelles." },
      { icon: BedDouble, title: "Gîtes et chambres d'hôtes", text: "kitchenettes, salles d'eau et placards où les visiteurs laissent des provisions." },
      { icon: Landmark, title: "La Citadelle et Saint-Gilles", text: "petits immeubles : gaines techniques, vide-ordures et caves partagées." },
      { icon: House, title: "Les Franchises et Les Fourches", text: "pavillons : chaufferie, buanderie, dessous de l'évier et garage." },
      { icon: Trees, title: "Corlée et le lac de la Liez", text: "maisons secondaires fermées l'hiver, où les blattes s'installent sans être dérangées." },
    ],
  },
  price: {
    paragraphs: [
      "Une cuisine seule, une maison sur trois niveaux ou un restaurant ne demandent pas le même travail. Le prix dépend de l'espèce, des pièces touchées et du nombre de passages.",
      "Je regarde d'abord, puis je vous donne un prix clair, sans engagement.",
    ],
    aside: { icon: FileText, title: "Devis gratuit", text: "Il détaille le traitement, les pièces concernées et les passages prévus. Le déplacement est annoncé au téléphone." },
  },
  local: [
    {
      kind: "cards",
      target: true,
      columns: "lg:grid-cols-3",
      title: "Cafard, poisson d'argent ou cloporte ?",
      intro: "Dans une maison ancienne, on croise souvent de petites bêtes qui ne sont pas des cafards. Voici comment les distinguer.",
      items: [
        { icon: Package, title: "La blatte", text: "corps plat et brun, longues antennes, elle court vite et fuit la lumière. Elle laisse de petits points noirs." },
        { icon: Droplets, title: "Le poisson d'argent", text: "gris argenté, en forme de goutte, trois filaments au bout du corps. Il aime la salle de bains, mais ne se traite pas pareil." },
        { icon: BrickWall, title: "Le cloporte", text: "gris, bombé, il se roule parfois en boule. Il vient de l'humidité du jardin ou de la cave, et ne vit pas dans la cuisine." },
      ],
      after: "Un doute ? Une photo envoyée au 07 65 25 67 92 suffit souvent pour savoir s'il faut un traitement.",
    },
    {
      kind: "list",
      title: "Gîte ou chambre d'hôtes : comment éviter les mauvaises surprises ?",
      intro: "Un client qui voit un cafard le soir, c'est un avis négatif le lendemain. Quatre habitudes réduisent le risque.",
      items: [
        { text: "Videz les placards de la kitchenette après chaque séjour, même les paquets fermés." },
        { text: "Contrôlez derrière le frigo et sous l'évier à chaque ménage, lampe à la main." },
        { text: "Ne stockez pas de cartons de livraison dans le logement." },
        { text: "Faites réparer tout de suite une fuite ou un joint de douche abîmé." },
      ],
      aside: {
        icon: BedDouble,
        title: "Un client vous a prévenu ?",
        text: "Demandez une photo et l'endroit, puis appelez-moi avant la prochaine arrivée : on organise le passage entre deux séjours.",
      },
    },
    {
      kind: "text",
      title: "Pourquoi les blattes reviennent-elles après un traitement ?",
      paragraphs: [
        "Le plus souvent, ce n'est pas le produit qui a échoué. Ce sont les œufs : une capsule protège plusieurs dizaines de petits, et ils sortent après le premier passage.",
        "Les autres raisons : une fuite toujours là, un voisin non traité, ou des sprays du commerce qui ont dispersé les blattes loin du traitement. C'est pour cela que le contrôle fait partie du travail.",
      ],
    },
  ],
  call: {
    title: "Des blattes à Langres ?",
    text: "Dites-moi à quel étage et dans quelle pièce : je vous dis quand je peux venir.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "Quel est le prix d'un traitement contre les cafards à Langres ?", answer: "Il dépend de l'espèce, du nombre de pièces et des passages. Après avoir vu les lieux, je vous remets un devis gratuit, avec le prix exact. Le déplacement est indiqué au téléphone." },
    { question: "Les cafards peuvent-ils passer d'une maison à l'autre ?", answer: "Oui, surtout dans les maisons mitoyennes du centre : ils suivent les canalisations, les caves et les vides des murs. Si votre voisin en a aussi, traiter les deux en même temps donne un bien meilleur résultat." },
    { question: "Un cafard dans la salle de bains, est-ce grave ?", answer: "Un seul peut venir de l'évacuation, surtout la blatte orientale. Si vous en revoyez, ou si vous trouvez de petites crottes noires, il y a probablement un foyer à proximité : mieux vaut le faire vérifier." },
    { question: "Peut-on traiter pendant que le gîte est occupé ?", answer: "C'est possible dans certaines pièces, mais mieux vaut profiter d'un logement vide : on traite partout, sans gêner personne, et le contrôle est plus simple." },
    { question: "Le froid de l'hiver fait-il disparaître les cafards ?", answer: "Non. Dans une maison chauffée, les blattes vivent et se reproduisent toute l'année. Elles sont simplement moins visibles quand elles restent près des appareils." },
    { question: "Venez-vous dans les villages autour de Langres ?", answer: "Oui : Saints-Geosmes, Humes-Jorquenay, Peigney, Champigny-lès-Langres, Rolampont, Chalindrey et les autres communes du Pays de Langres. Appelez le 07 65 25 67 92, 7j/7 de 7h à 23h." },
  ],
  nearby: {
    intro: "Basé aux portes de Chaumont, j'interviens dans tout le sud de la Haute-Marne.",
    links: [
      { label: "Cafards Chaumont", to: "/cafards-blattes-chaumont" },
      { label: "Cafards Nogent", to: "/cafards-blattes-nogent" },
      { label: "Cafards Bourbonne-les-Bains", to: "/cafards-blattes-bourbonne-les-bains" },
    ],
    also: "À Langres, j'interviens aussi pour :",
    note: (
      <>
        Des piqûres au réveil dans une chambre ? Ce n'est pas un cafard : voyez les{" "}
        <Link to="/punaises-de-lit" className={textLink}>punaises de lit</Link>.
      </>
    ),
  },
};

const CafardsBlattesLangres = () => <RodentTownPage town={town} />;

export default CafardsBlattesLangres;
