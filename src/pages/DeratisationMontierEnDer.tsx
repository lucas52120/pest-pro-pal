import { Link } from "react-router-dom";
import { BrickWall, Calculator, Church, Droplets, Fence, Hammer, House, Layers, Tractor, Waves, Wheat } from "lucide-react";
import heroImage from "@/assets/rat-planche.jpg";
import ragondinImage from "@/assets/carte-ragondin.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  city: "Montier-en-Der",
  postalCode: "52220",
  region: "Haute-Marne",
  slug: "/deratisation-montier-en-der",
  title: "Entreprise de dératisation à Montier-en-Der (52)",
  description:
    "Rats ou souris à Montier-en-Der (52220) ? GF Nuisibles recherche les passages, traite et vous conseille, 7j/7. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Pays du Der, maisons à pans de bois et granges",
    text: "Pans de bois, torchis ou grange : je traite rats et souris en respectant votre bâtiment.",
    highlight: "Un traitement qui n'abîme ni le bois ni le torchis",
    signsLabel: "Gros animal près de l'eau ? Rat ou ragondin",
    image: heroImage,
    imageAlt: "Jeune rat sur une planche, près du lierre",
    imageClassName: "max-lg:brightness-125",
  },
  reviews: ["rigny", "genest", "moock"],
  why: {
    title: "Pourquoi les rats et les souris rentrent-ils chez vous ?",
    intro: "Bois, torchis, granges : les maisons du Der leur offrent beaucoup de vides, en toute saison.",
    items: [
      { icon: Wheat, title: "Du grain et du foin", text: "une grange, une écurie ou quelques sacs de graines les nourrissent longtemps." },
      { icon: BrickWall, title: "Un mur en torchis", text: "de la terre et de la paille : une souris y creuse vite sa galerie." },
      { icon: Hammer, title: "Une fente dans le bois", text: "en séchant, la poutre s'écarte du mur et laisse un passage tout du long." },
      { icon: Layers, title: "Un bardage", text: "entre les planches et le mur, ils montent à l'abri jusqu'au toit." },
    ],
  },
  where: {
    intro: "De l'abbatiale à la Voire, voici les bâtiments du secteur et ce que j'y vérifie.",
    items: [
      { icon: Church, title: "Autour de l'abbatiale", text: "maisons de bourg, commerces et réserves, avec des cours qui se rejoignent." },
      { icon: House, title: "La halle au blé et le centre", text: "logements à l'étage, greniers et passages entre bâtiments." },
      { icon: Tractor, title: "Le secteur du haras", text: "paille, grain et sellerie : je contrôle d'abord les réserves." },
      { icon: Droplets, title: "Les abords de la Voire", text: "jardins, fossés et remises proches de l'eau." },
      { icon: Fence, title: "Robert-Magny", text: "maisons et fermes de l'autre village de la commune." },
      { icon: Waves, title: "Vers le lac du Der", text: "gîtes, chalets et résidences de week-end souvent inoccupés." },
    ],
  },
  how: {
    title: "Comment se débarrasser des rats et des souris ?",
    intro: "Je traite sans percer les pans de bois : on observe, on pose, on contrôle, et on ne rebouche qu'à la fin, avec les bons matériaux.",
    photo: "mur",
    steps: [
      { title: "Un poste simplement posé", text: "Calé contre le soubassement, il n'a besoin ni de vis ni de colle." },
      { title: "Un appât bien accroché", text: "Il ne finit ni dans le foin, ni sous le plancher." },
      { title: "Un contrôle avant de fermer", text: "Tant que les blocs sont rongés, on ne bouche rien." },
    ],
    after: "Des chevaux, un chien, un chat de grange ? Dites-le-moi avant, je choisis les emplacements en conséquence.",
  },
  price: {
    paragraphs: [
      <>À partir de <strong className="whitespace-nowrap text-primary">100 €</strong> pour un logement. Une ferme avec grange et écurie demande davantage de postes et de passages, donc un devis à part. Il est gratuit, et vous pouvez me demander de détailler chaque bâtiment.</>,
    ],
    aside: { icon: Calculator, title: "Le Der, c'est loin ?", text: "Un peu. C'est pour cela que je vous annonce le déplacement au téléphone, avant de prendre rendez-vous." },
  },
  local: [
    {
      kind: "compare",
      target: true,
      title: "Rat ou ragondin : comment les reconnaître ?",
      intro: "Autour des étangs et de la Voire, on parle souvent d'un « énorme rat ». La taille donne presque toujours la réponse.",
      heads: ["Le rat brun", "Le ragondin"],
      rows: [
        { label: "La taille", left: "Un corps de 20 à 27 cm environ, 500 g au plus.", right: "Un corps de 40 à 60 cm, plusieurs kilos : on ne peut pas s'y tromper." },
        { label: "Les dents", left: "On ne les voit pas de loin.", right: "Deux grandes incisives orange, bien visibles." },
        { label: "L'endroit", left: "Murs, remises, poulailler, égout.", right: "Berge, fossé, étang. Il n'entre pas dans votre cuisine." },
        { label: "Les dégâts", left: "Aliments, câbles, isolants.", right: "Berges creusées, cultures et jeunes plants mangés." },
      ],
      photo: { src: ragondinImage, alt: "Ragondin sur une berge de galets, au bord de l'eau", caption: "Un ragondin au bord de l'eau : ce n'est pas un rat, et il ne se traite pas de la même façon." },
      after: (
        <>
          Pour un ragondin, le cadre légal est particulier : rendez-vous sur la page{" "}
          <Link to="/regulation-esod" className={textLink}>régulation des ESOD</Link>.
        </>
      ),
    },
    {
      kind: "levels",
      title: "Comment boucher un passage dans un mur en torchis ?",
      intro: "Une fois les rongeurs partis, on ferme. Pas avant, et pas avec n'importe quoi.",
      items: [
        { title: "Mousse expansive : non", text: "Elle se ronge comme du pain et retient l'humidité contre le bois." },
        { title: "Ciment : à éviter", text: "Trop dur pour du torchis, il finit par se décoller avec la terre autour." },
        { title: "Laine d'acier : oui", text: "Coincée au fond du trou, comme une grille fine, elle arrête les dents." },
        { title: "Terre ou chaux : oui", text: "Par-dessus, pour refaire la surface. Un artisan habitué au bâti du Der saura faire." },
      ],
    },
  ],
  call: {
    title: "Ça gratte dans le torchis ?",
    text: "Dites-moi si la maison touche une grange ou un étang : cela m'indique où chercher.",
    contactLabel: "Obtenir un devis",
  },
  faq: [
    { question: "Combien coûte l'intervention à Montier-en-Der ?", answer: "Au minimum 100 € pour une maison. Le devis gratuit précise le nombre de postes ou de pièges et les visites prévues ; le déplacement vous est annoncé quand vous appelez." },
    { question: "Les rats peuvent-ils fragiliser une maison à pans de bois ?", answer: "Ils ne font pas tomber une charpente, mais ils vident le remplissage, percent les isolants et rongent les câbles. Sur un mur déjà abîmé, plus on attend, plus il y a à refaire." },
    { question: "Je vois un gros rongeur dans mon fossé, qui appeler ?", answer: "Envoyez-moi une photo. Si c'est un rat, je m'en occupe. Si c'est un ragondin ou un rat musqué, je vous explique ce qu'il est possible de faire." },
    { question: "Mes chevaux risquent-ils quelque chose ?", answer: "Les postes sont fermés et placés hors des boxes et des allées. Prévenez-moi de la présence de chevaux, de chiens ou de chats de grange avant ma venue." },
    { question: "Mon gîte n'est occupé que le week-end : que prévoir ?", answer: "Ne laissez aucun aliment en semaine, même fermé dans un sachet. Je peux placer des pièges de surveillance et passer les relever à date convenue." },
    { question: "Vous venez jusqu'où dans le Der ?", answer: "Planrupt, Frampas, Ceffonds, Thilleux, Sommevoire, Laneuville-à-Rémy, Rives Dervoises, Voillecomte, Éclaron-Braucourt-Sainte-Livière et les villages autour. Appelez-moi au 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Je viens depuis Chaumont dans tout le nord-ouest du département.",
    links: [
      { label: "Dératisation Wassy", to: "/deratisation-wassy" },
      { label: "Dératisation Saint-Dizier", to: "/deratisation-saint-dizier" },
      { label: "Dératisation Joinville", to: "/deratisation-joinville" },
    ],
    also: "D'autres soucis à Montier-en-Der ?",
    note: (
      <>
        Les bases à connaître avant d'agir sont réunies dans notre dossier{" "}
        <Link to="/deratisation" className={textLink}>dératiseur en Haute-Marne</Link>.
      </>
    ),
  },
};

const DeratisationMontierEnDer = () => <RodentTownPage town={town} />;

export default DeratisationMontierEnDer;
