import { Link } from "react-router-dom";
import { BedDouble, CalendarDays, Castle, FileText, Home, Hotel, Luggage, Repeat, Tent, Trees, Waves, Wind } from "lucide-react";
import heroImage from "@/assets/punaise-adulte.jpg";
import RodentTownPage, { RodentTown } from "@/components/RodentTownPage";
import { textLink } from "@/components/ServiceBlocks";

const town: RodentTown = {
  kind: "bedbugs",
  city: "Bourbonne-les-Bains",
  postalCode: "52400",
  region: "Haute-Marne",
  slug: "/punaises-de-lit-bourbonne-les-bains",
  title: "Punaises de lit à Bourbonne-les-Bains (52) : meublés, hôtels",
  description:
    "Punaises de lit à Bourbonne-les-Bains ? Meublés de curistes, hôtels, maisons : diagnostic sur place et traitement discret en plusieurs passages. 07 65 25 67 92.",
  hero: {
    eyebrow: "Meublés de curistes, hôtels et maisons",
    text: "Un curiste vous signale des piqûres, ou vous en avez vous-même ? Je vérifie le logement et je traite discrètement, entre deux locations si besoin.",
    highlight: "Organisé selon vos arrivées et vos départs",
    signsLabel: "Curiste : vérifier votre logement en arrivant",
    image: heroImage,
    imageAlt: "Punaise de lit adulte, brun-rouge, vue de profil sur une peau humaine",
    imageClassName: "object-[92%_50%] max-lg:brightness-75",
  },
  reviews: ["jc", "coustillet", "soucelier"],
  why: {
    title: "Pourquoi les punaises de lit touchent-elles Bourbonne ?",
    intro: "Dans une ville thermale, beaucoup de personnes dorment quelques semaines dans un logement, puis repartent. C'est exactement ce qui fait voyager les punaises.",
    items: [
      { icon: Repeat, title: "Des locataires qui se succèdent", text: "une cure dure souvent trois semaines : chaque arrivée peut apporter, ou emporter, quelques punaises." },
      { icon: Luggage, title: "Des valises qui voyagent", text: "venues de toute la France, posées au pied du lit, défaites dans la chambre." },
      { icon: BedDouble, title: "Des logements très meublés", text: "lits, fauteuils, armoires anciennes : autant de cachettes à l'abri des regards." },
      { icon: CalendarDays, title: "Des chambres vides l'hiver", text: "les punaises y attendent des mois sans manger, jusqu'au retour des premiers curistes." },
    ],
  },
  how: {
    title: "Comment traiter un logement contre les punaises de lit ?",
    intro: "Pour un meublé ou un hôtel, il faut agir vite sans immobiliser vos chambres trop longtemps. Le traitement s'organise donc avec votre calendrier de location.",
    steps: [
      { title: "J'inspecte la chambre", text: "Lit, chevets, fauteuils, porte-bagages, plinthes : je repère jusqu'où elles sont allées, et si d'autres chambres sont touchées." },
      { title: "Je traite entre deux locations", text: "Produit professionnel dans les cachettes, vapeur sèche si besoin, pièges de contrôle, au moment où la chambre est libre." },
      { title: "Je repasse selon le calendrier", text: "2, 3 ou 4 passages à 10 à 15 jours d'écart, pour toucher les jeunes sortis des œufs." },
    ],
    after: (
      <>
        Je vous dis à chaque passage quand la chambre peut être réoccupée. Pour comprendre comment elles se reproduisent, voyez la page{" "}
        <Link to="/punaises-de-lit" className={textLink}>punaises de lit en Haute-Marne</Link>.
      </>
    ),
  },
  where: {
    intro: "Côté thermes ou côté campagne, voici les logements où je les rencontre le plus souvent.",
    items: [
      { icon: Waves, title: "Autour des Thermes", text: "meublés de curistes : literie, canapés-lits, fauteuils et armoires." },
      { icon: Hotel, title: "Hôtels et pensions", text: "têtes de lit, porte-bagages, rideaux et plinthes des chambres." },
      { icon: Tent, title: "Campings et mobil-homes", text: "banquettes, matelas et coffres de rangement sous les lits." },
      { icon: Castle, title: "Vers la Porte-Galon", text: "maisons anciennes : parquets, boiseries et lits en bois massif." },
      { icon: Home, title: "Villars-Saint-Marcellin et Genrupt", text: "maisons de village et chambres d'amis peu utilisées." },
      { icon: Trees, title: "Les villages alentour", text: "résidences secondaires et gîtes fermés une partie de l'année." },
    ],
  },
  price: {
    paragraphs: [
      "Le prix dépend du nombre de chambres touchées, de la quantité de meubles et du nombre de passages. Une chambre de meublé prise à temps coûte bien moins qu'un logement entier.",
      <>
        À titre indicatif, une petite infestation se traite à partir de <strong className="whitespace-nowrap text-primary">250 €</strong> environ, et un logement très touché peut dépasser <strong className="whitespace-nowrap text-primary">900 €</strong>. Le prix exact est fixé après le diagnostic.
      </>,
    ],
    aside: {
      icon: FileText,
      title: "Plusieurs logements ?",
      text: "Dites-le-moi au téléphone : on regroupe le diagnostic et les passages pour limiter les déplacements.",
    },
  },
  local: [
    {
      kind: "list",
      target: true,
      title: "Curiste : vérifier votre logement en arrivant",
      intro: "Cinq minutes en posant vos valises suffisent. Faites-le avant de défaire vos affaires.",
      items: [
        { title: "Les valises", text: "laissez-les sur le carrelage ou dans la salle de bains, loin du lit, le temps de vérifier." },
        { title: "Le matelas", text: "soulevez le drap et regardez les coutures : des points noirs doivent vous alerter." },
        { title: "La tête de lit et le chevet", text: "avec la lampe du téléphone, regardez derrière et dans les angles." },
        { title: "En cas de doute", text: "prévenez tout de suite votre loueur, avec une photo, et gardez vos affaires fermées." },
      ],
      aside: {
        icon: Luggage,
        title: "À la fin de la cure",
        text: "Avant de repartir, vérifiez votre valise. Chez vous, lavez tout à 60 °C ou passez au sèche-linge chaud.",
      },
    },
    {
      kind: "levels",
      title: "Loueur de meublé : un curiste signale des piqûres",
      intro: "Ça peut arriver dans le logement le mieux tenu. Ce qui compte, c'est la rapidité, pour que le problème ne passe pas au locataire suivant.",
      items: [
        { title: "Tout de suite", text: "Rassurez votre locataire et demandez-lui de garder ses affaires dans des sacs fermés." },
        { title: "Le jour même", text: "Appelez-moi avec l'adresse, le nombre de chambres et les dates de location à venir." },
        { title: "Le diagnostic", text: "Je vérifie le logement et vous dis combien de passages il faut et quand." },
        { title: "Avant de relouer", text: "On cale les passages entre deux cures, et je vous dis quand le logement peut être reloué." },
      ],
    },
    {
      kind: "text",
      title: "Entre deux saisons de cure : le bon moment pour vérifier",
      paragraphs: [
        "Quand les logements sont vides, c'est le moment idéal pour faire le point. Je peux contrôler vos chambres avant l'arrivée des premiers curistes et traiter s'il le faut, sans gêner personne.",
        "Une chambre restée fermée plusieurs mois n'est pas forcément saine : les punaises supportent très bien le jeûne et le froid d'un logement non chauffé.",
      ],
      aside: {
        icon: Wind,
        title: "Après le dernier passage",
        text: "Gardez un œil sur les draps à chaque changement de locataire. Au moindre point noir, appelez avant que cela s'étende.",
      },
    },
  ],
  call: {
    title: "Des punaises de lit à Bourbonne ?",
    text: "Dites-moi quel logement est touché et quand il est libre : on organise le diagnostic.",
    contactLabel: "Demander un diagnostic",
  },
  faq: [
    {
      question: "Quel est le prix d'un traitement contre les punaises de lit à Bourbonne-les-Bains ?",
      answer: "À partir de 250 € environ pour une petite infestation. Le prix dépend du nombre de chambres et de passages ; il est fixé après le diagnostic, avant tout traitement.",
    },
    {
      question: "Faut-il annuler les prochaines locations ?",
      answer: "Pas toujours. On organise les passages entre deux locataires quand c'est possible. Je vous dis au diagnostic si le logement peut être reloué, et à partir de quand.",
    },
    {
      question: "Un curiste peut-il rapporter des punaises chez lui ?",
      answer: "Oui, dans ses bagages. C'est pour cela qu'il faut agir vite, et lui conseiller de laver ses affaires à 60 °C en rentrant.",
    },
    {
      question: "Le traitement se voit-il de l'extérieur ?",
      answer: "Non. Je peux venir avec un véhicule sans marquage, et rien n'indique aux voisins ni aux autres clients ce qui se passe.",
    },
    {
      question: "Combien de passages faut-il ?",
      answer: "2, 3 ou 4 selon l'infestation, espacés de 10 à 15 jours. Le nombre est fixé lors du diagnostic, et le calendrier tient compte de vos locations.",
    },
    {
      question: "Les punaises de lit sont-elles dangereuses ?",
      answer: "Elles ne transmettent pas de maladie connue, mais les démangeaisons et le manque de sommeil pèsent vite, surtout pendant une cure. Une pharmacie peut conseiller une crème contre les démangeaisons.",
    },
    {
      question: "Intervenez-vous autour de Bourbonne-les-Bains ?",
      answer: "Oui : Serqueux, Coiffy-le-Haut, Coiffy-le-Bas, Montcharvot, Laneuvelle, Fresnes-sur-Apance, Damrémont, Melay, Voisey et les autres villages du secteur. Appelez le 07 65 25 67 92.",
    },
  ],
  nearby: {
    intro: "Je couvre Bourbonne et tout l'est de la Haute-Marne.",
    links: [
      { label: "Punaises de lit Langres", to: "/punaises-de-lit-langres" },
      { label: "Punaises de lit Chaumont", to: "/punaises-de-lit-chaumont" },
      { label: "Punaises de lit Saint-Dizier", to: "/punaises-de-lit-saint-dizier" },
    ],
    also: "Aussi à Bourbonne-les-Bains :",
    note: (
      <>
        Des insectes dans la cuisine du meublé plutôt que dans le lit ? Voyez la page{" "}
        <Link to="/cafards-blattes-bourbonne-les-bains" className={textLink}>cafards à Bourbonne-les-Bains</Link>.
      </>
    ),
  },
};

const PunaisesDeLitBourbonne = () => <RodentTownPage town={town} />;

export default PunaisesDeLitBourbonne;
