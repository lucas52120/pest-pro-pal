import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation à Vittel (88800) : cafards, punaises | G&F Nuisibles";
const DESCRIPTION = "Cafards, punaises de lit ou fourmis à Vittel (88800) ? G&F Nuisibles identifie l'espèce et adapte le traitement dans la station thermale. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/desinsectisation-vittel";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Intervenez-vous dans les hôtels et établissements thermaux de Vittel ?", answer: "Oui, les hôtels, résidences et commerces de Vittel peuvent demander un diagnostic. Précisez le type d'établissement, les zones concernées (chambres, cuisines, espaces communs) et les horaires d'activité pour préparer la visite." },
  { question: "Comment reconnaître une infestation de punaises de lit dans une chambre d'hôtel ?", answer: "Des piqûres groupées au réveil, de petites taches sombres sur la literie ou des insectes aplatis près des coutures de matelas sont des indices fréquents. Un diagnostic sur place confirme l'espèce avant tout traitement." },
  { question: "Pouvez-vous intervenir sans fermer un établissement recevant du public ?", answer: "Décrivez vos contraintes d'activité et vos horaires lors de la demande. Le choix des dispositifs, leur emplacement et le moment de la visite sont adaptés pour limiter la gêne, sans compromettre la fiabilité du diagnostic." },
  { question: "Faut-il préparer le logement avant votre venue ?", answer: "Des consignes simples vous sont données selon l'espèce suspectée : dégagement des plinthes, lavage du linge à bonne température pour les punaises de lit, ou retrait des denrées exposées pour les cafards et fourmis." },
  { question: "Quel est le prix d'une désinsectisation à Vittel ?", answer: "Le prix dépend de l'espèce identifiée, de la surface à traiter et du nombre de passages nécessaires. Un diagnostic et un devis gratuits permettent de préciser les prestations avant votre accord." },
];

const DesinsectisationVittel = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness", "@id": "https://gf-nuisibles.fr/#organization",
        "name": "G&F Nuisibles", "url": "https://gf-nuisibles.fr", "telephone": "+33765256792",
        "sameAs": ["https://www.facebook.com/gfnuisibles"],
        "address": { "@type": "PostalAddress", "streetAddress": "27 rue principale", "addressLocality": "Montsaon", "postalCode": "52000", "addressRegion": "Haute-Marne", "addressCountry": "FR" }
      },
      {
        "@type": "Service", "url": URL, "name": "Désinsectisation à Vittel (88800) : cafards, punaises", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Vittel", "address": { "@type": "PostalAddress", "postalCode": "88800", "addressRegion": "Vosges", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Désinsectisation", "item": "https://gf-nuisibles.fr/desinsectisation" },
        { "@type": "ListItem", "position": 3, "name": "Vittel", "item": URL }
      ] },
      { "@type": "FAQPage", "mainEntity": FAQ_ITEMS.map((item) => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Vittel"
        department="Vosges (88)"
        serviceTitle={"Désinsectisation à Vittel (88800) : cafards, punaises"}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"CAFARDS, PUNAISES OU FOURMIS À VITTEL ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC AVANT TOUT TRAITEMENT"
        intro={"Des cafards vus la nuit dans une cuisine d'hôtel, des piqûres inexpliquées au réveil ou une colonie de fourmis le long d'une plinthe méritent une identification précise avant tout traitement. G&F Nuisibles propose la désinsectisation à Vittel (88800), station thermale des Vosges, pour les particuliers, les hôtels et les commerces. Chaque espèce d'insecte a un mode de vie différent ; le traitement doit correspondre à l'insecte réellement identifié plutôt qu'à une hypothèse générale."}
        expertise={"Punaises de lit, cafards, fourmis ou puces n'ont ni les mêmes abris, ni les mêmes habitudes. Dans un hôtel du parc thermal, les punaises de lit se logent près des zones de couchage et peuvent circuler via les bagages, tandis que les cafards recherchent chaleur et humidité en cuisine. Un diagnostic sur place, avec inspection des chambres, cuisines et espaces communs, permet de confirmer l'espèce avant de proposer un protocole adapté. Nous utilisons des produits biocides homologués, dont l'usage est réservé aux professionnels formés."}
        method={"L'inspection identifie les zones infestées et l'ampleur du phénomène. Selon l'espèce, le traitement combine pulvérisation, gel insecticide ou nébulisation, avec un ou plusieurs passages selon le cycle de vie de l'insecte. Des consignes de préparation et de suivi vous sont données pour limiter les reprises, notamment pour les punaises de lit dont l'éradication demande souvent plusieurs interventions espacées."}
        localContext={{ title: "Parc thermal, hôtels et quartiers de Vittel", content: <>
            <p>{"Les hôtels historiques du parc thermal, construits par des architectes comme Charles Garnier ou Auguste Bluysen, comportent souvent de nombreuses chambres et des cuisines professionnelles. Précisez le type d'établissement et les zones concernées lors de la demande."}</p>
            <p>{"Le centre-ville, les commerces de l'avenue Bouloumié et les résidences proches de la gare peuvent également être concernés. Un logement récent n'est pas à l'abri d'une infestation, qui dépend surtout des apports extérieurs (bagages, linge, colis) plutôt que de l'ancienneté du bâtiment."}</p>
            <p>{"Chaque demande est traitée selon la configuration réelle du local, sans présumer d'un problème lié à un établissement en particulier."}</p>
            <p>Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.ville-vittel.fr/fr/bienvenue-a-vittel.html" target="_blank" rel="noopener noreferrer">site de la ville de Vittel</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Vittel (88800)", intro: "Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre-ville de Vittel", "Secteur du parc thermal", "Avenue Bouloumié", "Abords de la gare", "Secteur du Palais des Congrès", "Direction de Contrexéville"] }}
        extraSections={[
          { title: "Cafards, punaises de lit, fourmis : agir selon l'espèce", content: <>
            <p>{"Évitez de déplacer les meubles infestés sans précaution avant la visite, cela peut disperser les insectes dans d'autres pièces. Conservez si possible un échantillon ou une photo de l'insecte observé, utile pour orienter l'identification."}</p>
            <p>{"Pour les punaises de lit, informez vos voisins ou la gestion de l'établissement si vous séjournez en hôtel ou en immeuble collectif : une propagation entre chambres ou logements adjacents est possible."}</p>
          </> },
          { title: "Prévention dans un hôtel ou un commerce à Vittel", content: <>
            <p>{"Limitez les sources d'humidité et de nourriture accessibles, notamment en cuisine professionnelle. Un entretien régulier des zones de stockage et des joints de plomberie réduit les conditions favorables à l'installation des insectes."}</p>
            <p>{"Pour un établissement recevant du public, précisez vos contraintes sanitaires et vos horaires d'activité : le devis tient compte du périmètre réel et des passages nécessaires."}</p>
          </> },
          { title: "Votre service à Vittel et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation">service désinsectisation</Link> pour les méthodes et les prestations. Pour votre adresse à Vittel, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-neufchateau">Désinsectisation à Neufchâteau</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-bourbonne">Désinsectisation à Bourbonne-les-Bains</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-chaumont">Désinsectisation à Chaumont</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Vittel", items: [
          { label: "Désinsectisation à Neufchâteau", to: "/desinsectisation-neufchateau" },
          { label: "Désinsectisation à Bourbonne-les-Bains", to: "/desinsectisation-bourbonne" },
          { label: "Désinsectisation à Chaumont", to: "/desinsectisation-chaumont" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Vittel", to: "/deratisation-vittel" },
          { label: "Dépigeonnisation à Vittel", to: "/depigeonnisation-vittel" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Désinsectisation à Vittel : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. L'espèce, le périmètre et les passages sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DesinsectisationVittel;
