import { Link } from "react-router-dom";
import { CalendarDays, Castle, ChefHat, Droplets, FileText, Hotel, House, KeyRound, Luggage, Trees, Waves } from "lucide-react";
import heroImage from "@/assets/blatte-cuisine.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "cockroaches",
  city: "Bourbonne-les-Bains",
  postalCode: "52400",
  region: "Haute-Marne",
  slug: "/cafards-blattes-bourbonne-les-bains",
  title: "Traitement cafards et blattes à Bourbonne-les-Bains (52)",
  description:
    "Cafards dans votre logement ou votre restaurant à Bourbonne-les-Bains ? Intervention discrète, 7j/7. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Meublés, hôtels et restaurants",
    text: "Un locataire a vu un cafard dans la kitchenette ? Je trouve leurs cachettes et je traite, entre deux séjours si besoin.",
    highlight: "Véhicule non logoté sur demande",
    signsLabel: "Vous louez un meublé ? Que faire entre deux séjours",
    image: heroImage,
    imageAlt: "Cuisine avec évier et placards en bois",
    imageClassName: "max-lg:brightness-50",
  },
  reviews: ["mathieu", "muller", "jc"],
  why: {
    title: "Pourquoi avez-vous des cafards dans votre logement ?",
    intro: "Dans une ville thermale, les logements changent souvent d'occupants. Chaque arrivée peut amener une blatte, sans que personne ne soit en faute.",
    items: [
      { icon: Luggage, title: "Les valises et les sacs", text: "une blatte germanique se glisse facilement dans un bagage ou un sac de courses." },
      { icon: ChefHat, title: "Les kitchenettes", text: "petits frigos, plaques et micro-ondes collés au mur : de la chaleur dans peu de place." },
      { icon: Droplets, title: "Les salles d'eau", text: "joints de douche, siphons et ventilations restent humides toute l'année." },
      { icon: KeyRound, title: "Les périodes fermées", text: "un logement vide et calme les laisse se multiplier sans être dérangées." },
    ],
  },
  how: {
    title: "Comment se débarrasser des cafards efficacement ?",
    intro: "Dans un meublé ou un hôtel, il faut traiter vite, bien, et sans que les clients le remarquent. Je choisis les méthodes en fonction des pièces et de vos dates.",
    steps: [
      { title: "Une visite pièce par pièce", text: "Kitchenette, salle d'eau, local de ménage, lingerie : je cherche les foyers, pas seulement les blattes visibles." },
      { title: "Un traitement adapté", text: "Gel discret dans les pièces louées, pulvérisation ciblée dans les locaux techniques : on combine selon les besoins." },
      { title: "Un contrôle calé sur vos réservations", text: "Le second passage est prévu à une date où le logement est libre, pour traiter les jeunes sortis des œufs." },
    ],
    after: (
      <>
        Je vous indique avant le traitement si un logement doit rester vide, et combien de temps. Pour les détails sur les espèces, voyez la page{" "}
        <Link to="/cafards-blattes" className={textLink}>traitement anti-cafards</Link>.
      </>
    ),
  },
  where: {
    intro: "Côté thermes ou côté campagne, ce ne sont pas les mêmes bâtiments ni les mêmes cachettes.",
    items: [
      { icon: Waves, title: "Autour des Thermes", text: "meublés et résidences de curistes : kitchenettes, salles d'eau, locaux communs." },
      { icon: Hotel, title: "Hôtels et pensions", text: "cuisines, lingeries, chaufferies et vestiaires du personnel." },
      { icon: ChefHat, title: "Restaurants du centre", text: "plonge, réserve, dessous des fourneaux et des vitrines." },
      { icon: Castle, title: "Vers la Porte-Galon", text: "maisons anciennes avec caves humides, où vit la blatte orientale." },
      { icon: House, title: "Villars-Saint-Marcellin et Genrupt", text: "maisons de village, buanderies et cuisines d'été." },
      { icon: Trees, title: "Les villages alentour", text: "Serqueux, Coiffy-le-Haut, Fresnes-sur-Apance : maisons et résidences secondaires." },
    ],
  },
  price: {
    paragraphs: [
      "Un studio, un immeuble de meublés ou un hôtel : le prix dépend du nombre de logements, de l'espèce et des passages.",
      "Je vous donne le prix exact après la visite, avant tout traitement.",
    ],
    aside: { icon: FileText, title: "Plusieurs logements ?", text: "On les voit tous en une seule fois : c'est plus simple et plus efficace. Le déplacement est annoncé au téléphone." },
  },
  local: [
    {
      kind: "levels",
      target: true,
      title: "Un cafard signalé entre deux séjours : que faire ?",
      intro: "Le prochain locataire arrive bientôt ? Voici l'ordre que je conseille.",
      items: [
        { title: "Tout de suite", text: "Demandez une photo et l'endroit exact. Remerciez votre client : mieux vaut un message qu'un mauvais avis." },
        { title: "Le jour même", text: "Videz les placards, jetez ce qui est ouvert et rangez le reste dans des boîtes fermées." },
        { title: "Avant le ménage", text: "Appelez-moi avant de tout désinfecter : les traces m'aident à trouver le foyer." },
        { title: "Avant l'arrivée suivante", text: "Je traite, puis je vous dis quand le logement peut être reloué." },
      ],
    },
    {
      kind: "list",
      title: "Hôtel ou restaurant : comment éviter que ça revienne ?",
      intro: "En saison, les livraisons et les passages sont nombreux. Ces habitudes limitent les retours.",
      items: [
        { text: "Déballez les livraisons dehors ou dans un sas, jamais dans la réserve." },
        { text: "Nettoyez sous les appareils de cuisson et les frigos chaque semaine." },
        { text: "Fermez les poubelles et videz-les chaque soir." },
        { text: "Signalez la moindre fuite aux services techniques." },
      ],
      aside: {
        icon: CalendarDays,
        title: "Un suivi pendant la saison",
        text: <>Je peux passer à intervalles réguliers et laisser un compte rendu écrit à chaque visite. <Link to="/contact" className={textLink}>Demandez une proposition</Link>.</>,
      },
    },
  ],
  call: {
    title: "Un cafard dans un de vos logements ?",
    text: "Dites-moi la date de la prochaine arrivée : on s'organise pour traiter avant.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "Quel est le prix d'un traitement anti-cafards à Bourbonne-les-Bains ?", answer: "Il dépend du nombre de logements, de l'espèce et des passages. Je vous remets un devis gratuit après ma visite. Le déplacement vous est annoncé au téléphone." },
    { question: "Puis-je louer le logement juste après le traitement ?", answer: "Souvent oui avec un gel, après aération. Si une pulvérisation est nécessaire, je vous dis combien de temps attendre avant de relouer." },
    { question: "Mon client a-t-il apporté les cafards ?", answer: "C'est possible, dans un bagage ou un sac. Mais ils ont pu arriver avec une livraison ou depuis un logement voisin. L'important est de traiter vite, pas de chercher un coupable." },
    { question: "Faut-il prévenir les clients suivants ?", answer: "Si le traitement est terminé et le logement aéré, ce n'est pas obligatoire. Laissez simplement les endroits traités tels quels, sans les laver à grande eau." },
    { question: "Les cafards résistent-ils aux produits ?", answer: "La blatte germanique peut résister à certains insecticides du commerce. C'est une raison de plus pour ne pas multiplier les bombes et pour combiner plusieurs méthodes professionnelles." },
    { question: "Intervenez-vous autour de Bourbonne-les-Bains ?", answer: "Oui : Serqueux, Coiffy-le-Haut, Coiffy-le-Bas, Montcharvot, Laneuvelle, Fresnes-sur-Apance, Damrémont, Larivière-Arnoncourt, Melay, Voisey et les autres villages du secteur. Appelez le 07 65 25 67 92." },
  ],
  nearby: {
    intro: "Je couvre Bourbonne et tout l'est de la Haute-Marne, jusqu'aux limites des Vosges.",
    links: [
      { label: "Cafards Langres", to: "/cafards-blattes-langres" },
      { label: "Cafards Nogent", to: "/cafards-blattes-nogent" },
      { label: "Cafards Chaumont", to: "/cafards-blattes-chaumont" },
    ],
    also: "Aussi à Bourbonne-les-Bains :",
    note: (
      <>
        Des piqûres signalées par vos locataires ? Ce sont plutôt des{" "}
        <Link to="/punaises-de-lit" className={textLink}>punaises de lit</Link> : l'inspection se fait à part.
      </>
    ),
  },
};

const CafardsBlattesBourbonneLesBains = () => <RodentTownPage town={town} />;

export default CafardsBlattesBourbonneLesBains;
