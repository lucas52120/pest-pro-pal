import { Link } from "react-router-dom";
import { BrickWall, Building2, Cable, Car, Fence, House, Package, PiggyBank, TrainFront, Trees, Utensils, Warehouse } from "lucide-react";
import heroImage from "@/assets/accueil-rat.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  city: "Chalindrey",
  postalCode: "52600",
  region: "Haute-Marne",
  slug: "/deratisation-chalindrey",
  title: "Entreprise de dératisation à Chalindrey (52) | Devis gratuit",
  description:
    "Rats ou souris à Chalindrey (52600), au bourg, près de la gare ou dans les hameaux ? Traitement adapté et conseils. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Maisons mitoyennes, garages et dépôts",
    text: "Cloison, garage ou combles : je remonte la piste, je traite et je vérifie.",
    highlight: "Garage, véhicule et maison vérifiés ensemble",
    signsLabel: "Des fils rongés dans la voiture ? Lire mes conseils",
    image: heroImage,
    imageAlt: "Jeune rat gris sur une poutre en bois",
  },
  reviews: ["yerli", "babinski", "duverne"],
  why: {
    title: "Pourquoi avez-vous des rats ou des souris chez vous ?",
    intro: "Dans une rangée de maisons, ils dorment souvent d'un côté et mangent de l'autre.",
    items: [
      { icon: Utensils, title: "À manger, d'un côté ou de l'autre", text: "croquettes du garage, graines, poubelle ou potager du voisin." },
      { icon: Package, title: "Un garage bien rempli", text: "cartons et vieux meubles : il y fait sec et personne n'y touche." },
      { icon: BrickWall, title: "Un mur commun percé", text: "les vieux murs mitoyens sont rarement fermés jusqu'en haut." },
      { icon: House, title: "Des combles qui se suivent", text: "d'une maison à la suivante, il n'y a parfois qu'une planche." },
    ],
  },
  where: {
    intro: "Autour de la gare comme dans les écarts, je regarde toujours ces endroits avant les autres.",
    items: [
      { icon: TrainFront, title: "Le quartier de la gare", text: "habitations, entrepôts et bâtiments techniques proches de Culmont-Chalindrey." },
      { icon: Warehouse, title: "Près de la rotonde", text: "grands locaux, ateliers et terrains où l'herbe cache les passages." },
      { icon: Building2, title: "La mairie et la rue de Langres", text: "maisons accolées, commerces, caves et courettes." },
      { icon: House, title: "L'avenue Gambetta", text: "pavillons, garages et jardins sur l'arrière." },
      { icon: Fence, title: "Les écarts", text: "maisons seules avec remise, bois et quelques animaux." },
      { icon: Trees, title: "Culmont, Torcenay, Le Pailly", text: "les villages qui touchent Chalindrey, avec leurs fermes et leurs vergers." },
    ],
  },
  how: {
    title: "Comment se débarrasser des rats et des souris efficacement ?",
    intro: "Suivre les traces, poser du bon côté du mur, revenir : c'est la méthode. Dans un garage, je mets surtout des pièges ; dehors, des postes fermés.",
    photo: "gravier",
    steps: [
      { title: "Le poste extérieur", text: "Posé derrière la maison ou le garage, il arrête les rats avant la porte." },
      { title: "L'appât, sous clé", text: "Il tient sur une tige de métal et le couvercle est verrouillé." },
      { title: "La vérification", text: "Je compare avec ma première visite : moins d'activité, autre passage, ou plus rien." },
    ],
    after: "Je ne pose jamais d'appât dans une voiture ni dans un camping-car.",
  },
  price: {
    paragraphs: [
      <>Une intervention démarre à <strong className="whitespace-nowrap text-primary">100 €</strong>. Deux voisins qui font traiter leurs maisons le même jour reçoivent chacun un devis, mais le travail est plus cohérent, et souvent plus rapide.</>,
    ],
    aside: { icon: PiggyBank, title: "Pas de surprise", text: "Montant du déplacement au téléphone, devis gratuit après visite, accord avant la pose." },
  },
  local: [
    {
      kind: "levels",
      target: true,
      title: "Une souris dans la voiture : que faire ?",
      intro: "Un moteur tiède, un filtre douillet, des gaines à ronger : c'est un abri de choix, surtout si le véhicule roule peu.",
      items: [
        { title: "Regarder", text: "Ouvrez le capot : crottes, brins d'herbe, coquilles ou mousse rongée sur le moteur ? Vérifiez aussi le filtre d'habitacle." },
        { title: "Ne pas démarrer", text: "Si des fils sont à nu, montrez-les d'abord à un garagiste. Photographiez les dégâts pour votre assurance." },
        { title: "Vider", text: "Retirez miettes, graines, sièges d'enfant souillés et plaids du coffre." },
        { title: "Traiter le garage", text: "La voiture n'est que l'arrêt. Le nid est autour : c'est là que je pose les pièges." },
      ],
      after: "Camping-car, caravane, tondeuse autoportée : le raisonnement est le même. Je ne mets jamais d'appât dans un véhicule, un animal mort y serait introuvable.",
    },
    {
      kind: "cards",
      columns: "lg:grid-cols-3",
      title: "Pourquoi rongent-ils les câbles électriques ?",
      intro: "Leurs dents poussent toute leur vie, il leur faut les user. Un câble a juste la bonne dureté.",
      items: [
        { icon: Cable, title: "Dans les combles", text: "les fils courent à découvert sur l'isolant. Une gaine mordue peut faire disjoncter, ou chauffer." },
        { icon: Car, title: "Sous le capot", text: "faisceaux, durites et capteurs : une petite bouchée, une grosse facture." },
        { icon: Package, title: "Dans l'atelier", text: "rallonges, portail motorisé, congélateur du garage. Contrôlez les prises avant de rebrancher." },
      ],
      after: "Un disjoncteur qui saute sans raison depuis que vous entendez gratter ? Faites vérifier l'installation par un électricien, en plus de la dératisation.",
    },
  ],
  call: {
    title: "Des fils mordus, un bruit dans la cloison ?",
    text: "Plus on le sait tôt, moins il y a de dégâts. Je décroche 7j/7, de 7h à 23h.",
    contactLabel: "Laisser un message",
  },
  faq: [
    { question: "Quel budget pour une dératisation à Chalindrey ?", answer: "À compter de 100 €. Le montant exact figure sur le devis gratuit : il varie selon les pièces, le garage, les combles et le nombre de retours." },
    { question: "Mon assurance couvre-t-elle les câbles rongés ?", answer: "Cela dépend du contrat, pour la maison comme pour la voiture. Relisez la partie sur les dommages causés par les animaux, gardez des photos et demandez à votre assureur." },
    { question: "La menthe ou les boules antimites font-elles fuir les souris ?", answer: "L'odeur les gêne un moment, puis elles s'y font ou contournent. Les boules antimites sont en plus irritantes à respirer. Ce n'est pas une solution." },
    { question: "Mon voisin ne veut rien faire, est-ce peine perdue ?", answer: "Non. On peut protéger votre côté, fermer les passages une fois l'activité retombée et garder quelques pièges de veille. C'est simplement plus long." },
    { question: "Faut-il couper le courant pendant votre visite ?", answer: "Non, sauf si des fils sont visiblement abîmés. Dans ce cas, coupez le circuit concerné et ne touchez à rien avant l'électricien." },
    { question: "Passez-vous aussi dans les communes voisines ?", answer: "Oui, à Culmont, Torcenay, Le Pailly, Noidant-Chatenoy, Violot, Les Loges, Chaudenay, Saint-Vallier-sur-Marne, Heuilley-le-Grand, Champsevraine et dans tout le secteur. Mon numéro : 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Je circule sur tout le plateau, de Langres aux limites du département.",
    links: [
      { label: "Dératisation Langres", to: "/deratisation-langres" },
      { label: "Dératisation Bourbonne-les-Bains", to: "/deratisation-bourbonne-les-bains" },
      { label: "Dératisation Nogent", to: "/deratisation-nogent" },
    ],
    also: "Pour votre maison de Chalindrey, je propose aussi :",
    note: (
      <>
        Maladies, dégâts, méthodes : l'essentiel se trouve sur la page{" "}
        <Link to="/deratisation" className={textLink}>lutter contre les rongeurs</Link>.
      </>
    ),
  },
};

const DeratisationChalindrey = () => <RodentTownPage town={town} />;

export default DeratisationChalindrey;
