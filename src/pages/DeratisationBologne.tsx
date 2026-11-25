import { Link } from "react-router-dom";
import { Anchor, Church, Coins, DoorOpen, Factory, House, Leaf, Mountain, Shovel, Sprout, TreeDeciduous, Waves } from "lucide-react";
import heroImage from "@/assets/poste-appat-mur-pierre.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  city: "Bologne",
  postalCode: "52310",
  region: "Haute-Marne",
  slug: "/deratisation-bologne",
  title: "Dératisation Bologne 52 - Intervention 24h, Devis Gratuit",
  description:
    "Rats ou souris à Bologne (52310), dans la maison, le jardin ou une dépendance ? Recherche des accès et traitement adapté. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "De la maison au fond du jardin",
    text: "Du fond du jardin jusqu'à la cuisine, je remonte leur trajet, je traite et je reviens contrôler.",
    highlight: "À une dizaine de kilomètres de Chaumont",
    signsLabel: "Un trou dans la pelouse ? Voir qui l'a fait",
    image: heroImage,
    imageAlt: "Poste d'appâtage au pied d'un mur ancien, entouré d'herbes",
    imageClassName: "max-lg:brightness-75",
  },
  reviews: ["yerli", "buke", "hanuszek"],
  why: {
    title: "Pourquoi les rats et les souris s'installent-ils chez vous ?",
    intro: "Un jardin calme, de l'eau et quelques restes leur plaisent beaucoup. La maison vient ensuite.",
    items: [
      { icon: Sprout, title: "Le potager et le compost", text: "légumes tombés, épluchures et restes de cuisine leur servent de garde-manger." },
      { icon: House, title: "Le dessous de l'abri", text: "un plancher posé à même la terre fait un toit parfait pour un terrier." },
      { icon: DoorOpen, title: "Le garage entrouvert", text: "le soir, ils y entrent pour fouiller, puis trouvent le chemin de la cuisine." },
      { icon: Leaf, title: "Les herbes hautes", text: "lierre et planches le long d'un mur leur permettent d'avancer sans être vus." },
    ],
  },
  where: {
    intro: "Entre le bourg, le canal et les deux villages rattachés, ils n'ont que l'embarras du choix. Je regarde ici en premier.",
    items: [
      { icon: Church, title: "Le bourg, près de l'église", text: "maisons anciennes, caves basses et passages entre jardins." },
      { icon: Waves, title: "La boucle de la Marne", text: "terrains inondables, potagers et remises proches de l'eau." },
      { icon: Anchor, title: "Le canal et son chemin de halage", text: "talus et murs de pierre où un terrier se voit peu." },
      { icon: Factory, title: "Le secteur industriel", text: "ateliers et entrepôts : abords, bennes et portes de livraison." },
      { icon: TreeDeciduous, title: "Marault", text: "fermes, vieux bâtiments et grands terrains à l'écart du bourg." },
      { icon: House, title: "Roôcourt-la-Côte", text: "maisons de pierre, granges et vergers sur la hauteur." },
    ],
  },
  how: {
    title: "Comment se débarrasser des rats efficacement ?",
    intro: "On ne traite pas un jardin au hasard. Je suis les chemins dans l'herbe, je place les postes au bord, puis je regarde lesquels sont visités.",
    photo: "gravier",
    steps: [
      { title: "Un poste sur leur chemin", text: "Au pied d'un mur ou de l'abri, il est à l'abri de la pluie et à l'écart des légumes." },
      { title: "Un appât qui ne s'envole pas", text: "Il reste vissé dans le boîtier : aucun morceau dans le potager." },
      { title: "Un contrôle boîtier par boîtier", text: "Les postes visités me montrent où se trouve le terrier encore occupé." },
    ],
    after: "Pendant le traitement, gardez les poubelles et le compost fermés, sinon ils mangeront ailleurs.",
  },
  price: {
    paragraphs: [
      <>Le tarif commence à <strong className="whitespace-nowrap text-primary">100 €</strong>. Je regarde la surface du terrain, le nombre de bâtiments et la distance entre eux. Un jardin de lotissement et une propriété à Marault, ce n'est pas la même tournée.</>,
    ],
    aside: { icon: Coins, title: "Devis gratuit, décision libre", text: "Vous lisez, vous posez vos questions, vous répondez quand vous voulez." },
  },
  local: [
    {
      kind: "cards",
      target: true,
      columns: "lg:grid-cols-3",
      title: "Trou dans la pelouse : rat, campagnol ou taupe ?",
      intro: "Avant de traiter, il faut savoir qui creuse. Regardez le trou et la terre autour.",
      items: [
        { icon: Shovel, title: "Un trou net, bien ouvert", text: "large comme un œuf ou une balle de tennis, avec un petit chemin tassé qui y mène : pensez au rat." },
        { icon: Sprout, title: "Des plants qui s'effondrent", text: "racines mangées, petits trous ronds, terre en tas aplatis : c'est plutôt un campagnol." },
        { icon: Mountain, title: "Des monticules sans entrée", text: "de la terre fine qui sort du sol, sans trou visible : la taupe, qui ne mange pas vos légumes." },
      ],
      after: (
        <>
          Pour une taupe, la méthode n'a rien à voir : c'est du piégeage, expliqué sur la page{" "}
          <Link to="/taupes-bologne" className={textLink}>taupier à Bologne</Link>.
        </>
      ),
    },
    {
      kind: "text",
      title: "Près de l'eau : ce que les crues changent",
      paragraphs: [
        "Quand la Marne monte, les terriers se remplissent et les animaux cherchent le sec : un talus, une cave, une remise. On peut en voir plusieurs en quelques jours, puis plus rien.",
        "Notez la date et l'endroit. S'ils sont encore là une semaine après la décrue, c'est qu'ils ont trouvé mieux chez vous : c'est le moment d'intervenir.",
      ],
      aside: {
        icon: Waves,
        title: "Après une inondation",
        text: "Portez des gants et des bottes pour nettoyer : l'urine de rat peut transmettre la leptospirose par l'eau et les petites plaies.",
      },
    },
  ],
  call: {
    title: "Un trou suspect au fond du jardin ?",
    text: "Photographiez-le avec votre main à côté : je vous dis si c'est un rat ou autre chose.",
    contactLabel: "Envoyer une demande",
  },
  faq: [
    { question: "Quel est le tarif de départ à Bologne ?", answer: "100 €. Comme Bologne est proche de Chaumont, la route est courte, et son coût vous est donné au téléphone. Le devis écrit est gratuit." },
    { question: "Puis-je enfumer ou inonder le terrier ?", answer: "Non. C'est dangereux pour vous, et un terrier a plusieurs sorties : les rats partent creuser ailleurs, parfois sous la terrasse." },
    { question: "Mes légumes grignotés sont-ils encore bons ?", answer: "Jetez ceux qui sont entamés. Pour les autres, un lavage soigneux et une épluchure suffisent. Récoltez dès que c'est mûr, sans rien laisser au sol." },
    { question: "Les postes craignent-ils la pluie ?", answer: "Non, ils sont prévus pour rester dehors. Je les place tout de même à l'abri, car un appât mouillé attire moins." },
    { question: "Et si le rat vient du terrain d'à côté ?", answer: "C'est fréquent. Je traite votre côté et je vous conseille d'en parler au voisin : deux jardins contrôlés le même jour donnent un bien meilleur résultat qu'un seul." },
    { question: "Dans quelles communes autour de Bologne ?", answer: "Lamancine, Vraincourt, Viéville, Annéville-la-Prairie, Riaucourt, Briaucourt, Oudincourt, Brethenay, Meures, Soncourt-sur-Marne et Vignory, sans oublier les autres. Un coup de fil au 07 65 25 67 92 suffit." },
  ],
  nearby: {
    intro: "Bologne est à deux pas de ma base : j'y viens sans difficulté.",
    links: [
      { label: "Dératisation Chaumont", to: "/deratisation-chaumont" },
      { label: "Dératisation Froncles", to: "/deratisation-froncles" },
      { label: "Dératisation Joinville", to: "/deratisation-joinville" },
    ],
    also: "Je viens aussi à Bologne pour :",
    note: (
      <>
        Vous voulez comparer pièges et appâts ? La page{" "}
        <Link to="/deratisation" className={textLink}>traitement contre les rongeurs en Haute-Marne</Link> fait le point.
      </>
    ),
  },
};

const DeratisationBologne = () => <RodentTownPage town={town} />;

export default DeratisationBologne;
