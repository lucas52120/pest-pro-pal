import { Link } from "react-router-dom";
import { Building2, DoorOpen, Droplets, Factory, FileText, House, Landmark, MessageSquare, Package, ShoppingBag, ThermometerSun, Trash2, Utensils } from "lucide-react";
import heroImage from "@/assets/blatte-fissure.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "cockroaches",
  city: "Saint-Dizier",
  postalCode: "52100",
  region: "Haute-Marne",
  slug: "/cafards-blattes-saint-dizier",
  title: "Traitement cafards et blattes à Saint-Dizier (52)",
  description:
    "Des blattes qui sortent la nuit à Saint-Dizier ? Logement ou restaurant, on s'en occupe en toute discrétion, 7j/7. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Appartements, immeubles et restaurants",
    text: "En immeuble, les blattes passent d'un logement à l'autre. Je trouve d'où elles viennent et je traite, sans bruit.",
    highlight: "Interventions coordonnées pour bailleurs et syndics",
    signsLabel: "Vous êtes en immeuble ? Comment s'organiser",
    image: heroImage,
    imageAlt: "Blatte brune au bord d'une fissure dans du béton",
    imageClassName: "max-lg:brightness-50",
  },
  reviews: ["soucelier", "bromann", "jc"],
  why: {
    title: "Pourquoi y a-t-il des cafards chez vous ?",
    intro: "Un appartement bien tenu peut en avoir. Les blattes cherchent la chaleur et l'eau, et suivent les tuyaux pour les trouver.",
    items: [
      { icon: Building2, title: "Le logement d'à côté", text: "gaines, colonnes d'eau et vide-ordures relient les appartements d'un même immeuble." },
      { icon: ThermometerSun, title: "Les appareils chauds", text: "réfrigérateur, lave-vaisselle, box internet : leurs moteurs servent de refuge." },
      { icon: Utensils, title: "De quoi manger la nuit", text: "miettes sous le grille-pain, gamelle, sac poubelle ouvert dans la cuisine." },
      { icon: Package, title: "Un déménagement", text: "cartons récupérés, meubles d'occasion, électroménager acheté d'occasion." },
    ],
  },
  how: {
    title: "Comment se débarrasser des cafards efficacement ?",
    intro: "En immeuble, traiter un appartement seul revient souvent à déplacer le problème. Je cherche d'où elles arrivent et je choisis les méthodes en conséquence.",
    steps: [
      { title: "Je remonte jusqu'au foyer", text: "Cuisine, salle de bains, gaine, local poubelles : je regarde chez vous et, si besoin, dans les parties communes." },
      { title: "J'adapte le traitement", text: "Gel dans les charnières et les fentes, pulvérisation ciblée le long des tuyaux, ou les deux selon ce que je trouve." },
      { title: "Je reviens à la date prévue", text: "Le contrôle est fixé dès le départ, pour atteindre les jeunes sortis des œufs entre-temps." },
    ],
    after: (
      <>
        Si une pièce doit rester libre un moment, je vous le dis avant. Plus d'informations sur la page{" "}
        <Link to="/cafards-blattes" className={textLink}>se débarrasser des cafards</Link>.
      </>
    ),
  },
  where: {
    intro: "Grand ensemble, maison de quartier ou cuisine professionnelle : les cachettes changent avec le bâtiment.",
    items: [
      { icon: Building2, title: "Le Vert-Bois", text: "dans les immeubles, je vérifie les gaines techniques, les colonnes d'eau et le local poubelles en plus de l'appartement." },
      { icon: Landmark, title: "Le centre-ville", text: "autour de l'église Notre-Dame et des Petites Halles : logements anciens au-dessus des commerces." },
      { icon: Trash2, title: "La Noue", text: "vide-ordures, caves communes et cuisines qui partagent les mêmes tuyaux." },
      { icon: House, title: "Gigny et Marnaval", text: "maisons avec sous-sol humide, où la blatte orientale s'installe près des évacuations." },
      { icon: ShoppingBag, title: "Restaurants et snacks", text: "dessous des friteuses, plonge, réserve sèche et vestiaires." },
      { icon: Factory, title: "Zones d'activités", text: "réfectoires, salles de pause et entrepôts où arrivent les palettes." },
    ],
  },
  price: {
    paragraphs: [
      "Le prix dépend du nombre de pièces, de l'espèce et des passages. Pour un immeuble, il dépend aussi du nombre de logements et de parties communes à traiter.",
      "Vous recevez le montant exact avant le traitement, sans engagement.",
    ],
    aside: { icon: FileText, title: "Bailleur ou syndic ?", text: "Je peux établir un devis par cage d'escalier ou pour tout le bâtiment. Le déplacement est annoncé au téléphone." },
  },
  local: [
    {
      kind: "cards",
      target: true,
      columns: "lg:grid-cols-3",
      title: "Des cafards dans l'immeuble : comment s'organiser ?",
      intro: "Quand plusieurs logements sont touchés, la façon de faire compte autant que le produit.",
      items: [
        { icon: MessageSquare, title: "Prévenir le bailleur ou le syndic", text: "par écrit, avec des photos et la date. C'est lui qui peut organiser le traitement des voisins et des parties communes." },
        { icon: DoorOpen, title: "Traiter le même jour", text: "plusieurs logements et les locaux communs en une seule fois, pour que les blattes ne passent pas d'un appartement traité à un autre." },
        { icon: Droplets, title: "Réparer les fuites", text: "une fuite dans une gaine ou sous un évier nourrit le problème. Signalez-la en même temps." },
      ],
    },
    {
      kind: "levels",
      title: "Quels signes montrent qu'il y a des cafards ?",
      intro: "On voit rarement les blattes en plein jour. Ce sont leurs traces qui les trahissent.",
      items: [
        { title: "De petits points noirs", text: "Comme du poivre, dans les charnières des placards, derrière les appareils ou sous l'évier." },
        { title: "Des mues brunes", text: "De fines peaux vides, laissées par les jeunes qui grandissent." },
        { title: "Des capsules d'œufs", text: "Petits étuis bruns de moins d'un centimètre, souvent près des cachettes." },
        { title: "Une odeur", text: "Rance et persistante quand elles sont nombreuses, surtout dans un placard fermé." },
      ],
    },
    {
      kind: "text",
      title: "Restaurant ou commerce : un suivi régulier",
      paragraphs: [
        "Dans une cuisine professionnelle, les livraisons apportent régulièrement de nouveaux insectes. Un traitement isolé règle le problème du moment, un suivi évite qu'il revienne.",
        <>
          Je passe en dehors du service, je laisse un compte rendu écrit après chaque visite, utile pour votre plan de maîtrise sanitaire.{" "}
          <Link to="/contact" className={textLink}>Demandez un devis professionnel</Link>.
        </>,
      ],
    },
  ],
  call: {
    title: "Des blattes chez vous à Saint-Dizier ?",
    text: "Dites-moi si vous êtes en maison ou en immeuble : je vous donne une date dès l'appel.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "Combien coûte un traitement anti-cafards à Saint-Dizier ?", answer: "Le prix dépend de la surface, de l'espèce et du nombre de passages. Je vous remets un devis gratuit avant de traiter, avec le montant exact et le déplacement." },
    { question: "Mon voisin a des cafards, vais-je en avoir ?", answer: "C'est possible dans un immeuble, car les blattes suivent les tuyaux. Surveillez le dessous de l'évier et l'arrière des appareils. Le mieux reste que le bailleur ou le syndic organise un traitement commun." },
    { question: "Est-ce au propriétaire de payer le traitement ?", answer: "Cela dépend de l'origine du problème et de votre bail. Prévenez votre propriétaire ou votre bailleur par écrit dès les premières traces : c'est le point de départ, quelle que soit la réponse." },
    { question: "Est-ce dangereux pour mon chat ou mon chien ?", answer: "Dites-moi dès l'appel quels animaux vivent chez vous. Je place les produits hors de leur portée et je vous dis s'ils doivent rester dans une autre pièce pendant un temps." },
    { question: "Les pièges collants vendus en magasin suffisent-ils ?", answer: "Ils aident à repérer où passent les blattes, mais ne règlent pas le problème : la plupart restent cachées et continuent à pondre." },
    { question: "Venez-vous autour de Saint-Dizier ?", answer: "Oui : Bettancourt-la-Ferrée, Chancenay, Valcourt, Hallignicourt, Perthes, Eurville-Bienville, Chamouilley, Roches-sur-Marne et les autres villages du nord haut-marnais. Appelez le 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Basé aux portes de Chaumont, je me déplace dans tout le nord de la Haute-Marne.",
    links: [
      { label: "Cafards Joinville", to: "/cafards-blattes-joinville" },
      { label: "Cafards Chaumont", to: "/cafards-blattes-chaumont" },
      { label: "Cafards Langres", to: "/cafards-blattes-langres" },
    ],
    also: "À Saint-Dizier, je traite aussi :",
    note: (
      <>
        Une question sur les espèces ou les produits ? Lisez notre page{" "}
        <Link to="/cafards-blattes" className={textLink}>traitement des blattes</Link>.
      </>
    ),
  },
};

const CafardsBlattesSaintDizier = () => <RodentTownPage town={town} />;

export default CafardsBlattesSaintDizier;
