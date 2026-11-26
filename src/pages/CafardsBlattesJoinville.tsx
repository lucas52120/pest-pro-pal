import { Link } from "react-router-dom";
import { Bed, Boxes, Castle, Church, Droplets, FileText, House, Store, ThermometerSun, Utensils, Waves, Wrench } from "lucide-react";
import heroImage from "@/assets/blatte-hero.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "cockroaches",
  city: "Joinville",
  postalCode: "52300",
  region: "Haute-Marne",
  slug: "/cafards-blattes-joinville",
  title: "Traitement cafards et blattes à Joinville (52)",
  description:
    "Un cafard chez vous à Joinville ? Il est rarement seul. Faites traiter votre logement ou commerce discrètement, 7j/7. Devis gratuit : 07 65 25 67 92.",
  hero: {
    eyebrow: "Vieille ville, quais et commerces",
    text: "Un cafard aperçu est rarement seul. Je trouve d'où ils viennent dans votre maison ou votre commerce, et je traite.",
    highlight: "Intervention discrète, en dehors des heures d'ouverture",
    signsLabel: "Blatte germanique ou blatte des meubles ? Voir la différence",
    image: heroImage,
    imageClassName: "max-lg:brightness-50",
    imageAlt: "Blatte vue de profil sur une surface brillante",
  },
  reviews: ["fontanive", "soucelier", "duverne"],
  why: {
    title: "Pourquoi les cafards s'installent-ils chez vous ?",
    intro: "Ils ne viennent pas par hasard. Dans une maison ancienne près de l'eau, ils trouvent vite ce qui leur manque dehors.",
    items: [
      { icon: Droplets, title: "L'humidité du sous-sol", text: "près de la Marne, les caves et les murs bas restent humides une grande partie de l'année." },
      { icon: ThermometerSun, title: "Une chaleur constante", text: "chaudière, cumulus, moteurs d'appareils : les blattes s'y regroupent." },
      { icon: Utensils, title: "La cuisine du voisin", text: "dans les maisons mitoyennes, les tuyaux communs leur servent de passage." },
      { icon: Boxes, title: "Les livraisons", text: "cartons et cagettes de commerce, sacs de farine ou de croquettes." },
    ],
  },
  how: {
    title: "Comment se débarrasser des cafards et des blattes efficacement ?",
    intro: "Je ne me contente pas de traiter là où on les voit. Je cherche leur nid, puis j'associe les méthodes qui conviennent à chaque pièce.",
    steps: [
      { title: "Je cherche leur nid", text: "Les blattes visibles ne sont qu'une partie du groupe. Le reste est caché près d'un point d'eau ou d'une source de chaleur." },
      { title: "Je combine les méthodes", text: "Gel appât, pulvérisation ciblée ou autre produit professionnel : je choisis selon l'espèce et l'usage de la pièce." },
      { title: "Je contrôle le résultat", text: "Je reviens pour atteindre la génération suivante, avant qu'elle ne ponde à son tour." },
    ],
    after: (
      <>
        Les précautions à prendre, et le temps éventuel à attendre avant de revenir dans une pièce, vous sont donnés avant le traitement. En savoir plus :{" "}
        <Link to="/cafards-blattes" className={textLink}>cafards et blattes, la méthode</Link>.
      </>
    ),
  },
  where: {
    intro: "Des quais à la vieille ville, les bâtiments de Joinville offrent des cachettes bien différentes.",
    items: [
      { icon: Church, title: "La vieille ville", text: "autour de l'église Notre-Dame et de l'Auditoire : maisons mitoyennes avec caves et cuisines anciennes." },
      { icon: Waves, title: "Le quai des Peceaux et le quai des Mailles", text: "sous-sols humides, évacuations et chaufferies où la blatte orientale se plaît." },
      { icon: Store, title: "Les commerces du centre", text: "réserves, arrière-cuisines, dessous des vitrines réfrigérées." },
      { icon: Castle, title: "Vers le Grand Jardin", text: "maisons avec dépendances, buanderies et cuisines d'été." },
      { icon: House, title: "Les quartiers plus récents", text: "dessous d'évier, lave-vaisselle et arrière du frigo." },
      { icon: Wrench, title: "Les zones d'activités", text: "vestiaires, salles de pause et ateliers où l'on mange sur place." },
    ],
  },
  price: {
    paragraphs: [
      "Une cuisine, une maison entière ou un commerce : le prix suit la surface à traiter, l'espèce et le nombre de passages.",
      "Après ma visite, vous savez exactement ce que vous paierez, avant que je commence.",
    ],
    aside: { icon: FileText, title: "Devis gratuit", text: "Il précise le traitement choisi et les passages. Le déplacement est annoncé au téléphone." },
  },
  local: [
    {
      kind: "compare",
      target: true,
      title: "Blatte germanique ou blatte des meubles ?",
      intro: "Toutes les blattes ne vivent pas dans la cuisine. Savoir laquelle vous avez aide à chercher au bon endroit.",
      heads: ["Blatte germanique", "Blatte des meubles"],
      rows: [
        { label: "Son allure", left: "Brun clair, deux bandes sombres derrière la tête.", right: "Plus petite, brune, avec deux bandes claires en travers du corps." },
        { label: "Où la trouver", left: "Cuisine et salle de bains, près de l'eau.", right: "Chambres, salons, meubles, cadres et appareils électriques." },
        { label: "Ce qu'elle aime", left: "L'humidité et les restes de nourriture.", right: "La chaleur sèche, en hauteur, loin des points d'eau." },
      ],
      after: "Une blatte noire et lente dans la cave ? C'est plutôt la blatte orientale. Envoyez une photo au 07 65 25 67 92 pour en être sûr.",
    },
    {
      kind: "text",
      title: "Commerce ou restaurant : traiter sans fermer",
      paragraphs: [
        "Un client qui voit un cafard ne revient pas. Je passe avant l'ouverture ou après la fermeture, et je traite la cuisine, la réserve et les locaux du personnel.",
        "Gardez les cartons de livraison à l'extérieur de la réserve, nettoyez sous les appareils chaque semaine et signalez toute fuite. Ces trois gestes rendent le traitement beaucoup plus durable.",
      ],
      aside: {
        icon: Bed,
        title: "Un logement au-dessus ?",
        text: "Si vous habitez à l'étage, dites-le-moi : on traite les deux le même jour, car les blattes montent par les tuyaux.",
      },
    },
  ],
  call: {
    title: "Des cafards à Joinville ?",
    text: "Dites-moi où et depuis combien de temps : je vous propose une date tout de suite.",
    contactLabel: "Devis gratuit",
  },
  faq: [
    { question: "Combien coûte un traitement contre les cafards à Joinville ?", answer: "Le prix dépend de l'espèce, de la surface et du nombre de passages. Vous recevez un devis gratuit après ma visite, avec le montant exact. Le déplacement vous est annoncé au téléphone." },
    { question: "Un seul cafard aperçu, faut-il s'inquiéter ?", answer: "Pas forcément, mais surveillez. S'il en revient d'autres, ou si vous trouvez de petits points noirs dans les placards, il y a probablement un groupe installé à proximité." },
    { question: "Les cafards peuvent-ils venir de la Marne ?", answer: "Pas directement. En revanche, l'humidité des sous-sols près de l'eau favorise la blatte orientale, qui remonte par les caves et les évacuations." },
    { question: "Peut-on rester dans le logement pendant le traitement ?", answer: "Avec un gel, oui le plus souvent. Si une pulvérisation est nécessaire, je vous dis à l'avance combien de temps la pièce doit rester libre." },
    { question: "Combien de temps avant de ne plus en voir ?", answer: "On en voit souvent plus les premiers jours, car le traitement les fait sortir. L'activité baisse ensuite nettement ; le passage de contrôle sert à atteindre les jeunes qui naissent entre-temps." },
    { question: "Venez-vous autour de Joinville ?", answer: "Oui : Thonnance-lès-Joinville, Vecqueville, Rupt, Suzannecourt, Fronville, Gudmont-Villiers, Donjeux, Froncles et les autres villages de la vallée. Appelez le 07 65 25 67 92, 7j/7." },
  ],
  nearby: {
    intro: "Depuis Chaumont, j'interviens dans toute la vallée de la Marne.",
    links: [
      { label: "Cafards Saint-Dizier", to: "/cafards-blattes-saint-dizier" },
      { label: "Cafards Chaumont", to: "/cafards-blattes-chaumont" },
      { label: "Cafards Nogent", to: "/cafards-blattes-nogent" },
    ],
    also: "Autres nuisibles à Joinville :",
    note: (
      <>
        Les espèces et les produits sont détaillés sur la page{" "}
        <Link to="/cafards-blattes" className={textLink}>désinsectisation des cafards</Link>.
      </>
    ),
  },
};

const CafardsBlattesJoinville = () => <RodentTownPage town={town} />;

export default CafardsBlattesJoinville;
