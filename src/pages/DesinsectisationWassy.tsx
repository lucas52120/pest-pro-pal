import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation Wassy 52 - Intervention 24h";
const DESCRIPTION = "Cafards, punaises de lit ou fourmis à Wassy (52130) ? G&F Nuisibles identifie l'espèce et adapte le traitement. Diagnostic et devis gratuits en Haute-Marne.";
const URL = "https://gf-nuisibles.fr/desinsectisation-wassy";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Intervenez-vous dans les logements et commerces du centre de Wassy ?", answer: "Oui, les particuliers comme les professionnels de Wassy peuvent demander un diagnostic. Précisez le type de logement ou de local, les pièces concernées et depuis quand vous observez des insectes." },
  { question: "Comment reconnaître une infestation de punaises de lit ?", answer: "Des piqûres groupées au réveil, de petites taches sombres sur la literie ou des insectes aplatis près des coutures de matelas sont des indices fréquents. Un diagnostic sur place confirme l'espèce avant tout traitement." },
  { question: "La présence de cafards dans un immeuble ancien du centre historique est-elle automatique ?", answer: "Non. L'ancienneté d'un bâtiment n'explique pas à elle seule une infestation. Les réseaux de canalisations partagés entre logements peuvent faciliter une propagation, ce qui justifie parfois une coordination avec le voisinage." },
  { question: "Faut-il préparer le logement avant votre venue ?", answer: "Des consignes simples vous sont données selon l'espèce suspectée : dégagement des plinthes, lavage du linge à bonne température pour les punaises de lit, ou retrait des denrées exposées pour les cafards et fourmis." },
  { question: "Quel est le prix d'une désinsectisation à Wassy ?", answer: "Le prix dépend de l'espèce identifiée, de la surface à traiter et du nombre de passages nécessaires. Un diagnostic et un devis gratuits permettent de préciser les prestations avant votre accord." },
];

const DesinsectisationWassy = () => {
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
        "@type": "Service", "url": URL, "name": "Désinsectisation à Wassy (52130) : cafards, punaises", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Wassy", "address": { "@type": "PostalAddress", "postalCode": "52130", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Désinsectisation", "item": "https://gf-nuisibles.fr/desinsectisation" },
        { "@type": "ListItem", "position": 3, "name": "Wassy", "item": URL }
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
        city="Wassy"
        department="Haute-Marne (52)"
        serviceTitle={"Désinsectisation à Wassy (52130) : cafards, punaises"}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"CAFARDS, PUNAISES OU FOURMIS À WASSY ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC AVANT TOUT TRAITEMENT"
        intro={"Des cafards vus la nuit dans une cuisine, des piqûres inexpliquées au réveil ou une colonie de fourmis le long d'une plinthe méritent une identification précise avant tout traitement. G&F Nuisibles propose la désinsectisation à Wassy (52130), ancienne sous-préfecture de Haute-Marne, pour les particuliers et les professionnels. Chaque espèce d'insecte a un mode de vie différent ; le traitement doit correspondre à l'insecte réellement identifié plutôt qu'à une hypothèse générale."}
        expertise={"Punaises de lit, cafards, fourmis ou puces n'ont ni les mêmes abris, ni les mêmes habitudes. Les punaises de lit se logent près des zones de couchage, les cafards recherchent chaleur et humidité, notamment en cuisine ou salle de bain. Un diagnostic sur place, avec inspection des plinthes, meubles et zones sensibles, permet de confirmer l'espèce avant de proposer un protocole adapté. Nous utilisons des produits biocides homologués, dont l'usage est réservé aux professionnels formés."}
        method={"L'inspection identifie les zones infestées et l'ampleur du phénomène. Selon l'espèce, le traitement combine pulvérisation, gel insecticide ou nébulisation, avec un ou plusieurs passages selon le cycle de vie de l'insecte. Des consignes de préparation et de suivi vous sont données pour limiter les reprises, notamment pour les punaises de lit dont l'éradication demande souvent plusieurs interventions espacées."}
        localContext={{ title: "Centre historique de Wassy et secteurs à proximité de la Blaise", content: <>
            <p>{"Dans le centre, autour de la collégiale Notre-Dame, les logements anciens et les commerces peuvent présenter des réseaux de canalisations partagés entre plusieurs lots. Précisez le type de local concerné lors de la demande pour adapter le diagnostic."}</p>
            <p>{"La Blaise traverse Wassy, dont l'histoire est marquée par l'installation ancienne des comtes de Champagne le long de ce cours d'eau. Pour un bien proche de la rivière, le diagnostic porte sur les accès et les indices observés dans le logement, sans présumer d'un lien automatique avec l'eau."}</p>
            <p>{"Dans le secteur des anciens ateliers métallurgiques, les locaux professionnels doivent décrire leurs contraintes d'activité et de stockage lors de la demande."}</p>
            <p>Retrouvez ces repères sur la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.saint-dizier.fr/ville-agglo/notre-histoire/l-histoire-de-wassy.html" target="_blank" rel="noopener noreferrer">page consacrée à l'histoire de Wassy</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Wassy (52130)", intro: "Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre-ville de Wassy", "Secteur de la collégiale Notre-Dame", "Abords de la Blaise", "Secteur des anciens ateliers métallurgiques", "Direction de Montier-en-Der", "Direction de Saint-Dizier"] }}
        extraSections={[
          { title: "Cafards, punaises de lit, fourmis : agir selon l'espèce", content: <>
            <p>{"Évitez de déplacer les meubles infestés sans précaution avant la visite, cela peut disperser les insectes dans d'autres pièces. Conservez si possible un échantillon ou une photo de l'insecte observé, utile pour orienter l'identification."}</p>
            <p>{"Pour les punaises de lit, informez vos voisins si vous vivez en immeuble collectif : une propagation entre logements adjacents est possible par les gaines techniques ou les parties communes."}</p>
          </> },
          { title: "Prévention dans un logement ou un commerce à Wassy", content: <>
            <p>{"Limitez les sources d'humidité et de nourriture accessibles, notamment en cuisine. Un entretien régulier des zones de stockage et des joints de plomberie réduit les conditions favorables à l'installation des insectes."}</p>
            <p>{"Pour un commerce, précisez vos contraintes sanitaires et vos horaires d'ouverture : le devis tient compte du périmètre réel et des passages nécessaires, sans se fonder sur le seul quartier."}</p>
          </> },
          { title: "Votre service à Wassy et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation">service désinsectisation en Haute-Marne</Link> pour les méthodes et les prestations. Pour votre adresse à Wassy, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-saint-dizier">Désinsectisation à Saint-Dizier</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-joinville">Désinsectisation à Joinville</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-montier-en-der">Désinsectisation à Montier-en-Der</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Wassy", items: [
          { label: "Désinsectisation à Saint-Dizier", to: "/desinsectisation-saint-dizier" },
          { label: "Désinsectisation à Joinville", to: "/desinsectisation-joinville" },
          { label: "Désinsectisation à Montier-en-Der", to: "/desinsectisation-montier-en-der" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Wassy", to: "/deratisation-wassy" },
          { label: "Guêpes et frelons à Wassy", to: "/guepes-frelons-wassy" },
          { label: "Dépigeonnisation à Wassy", to: "/depigeonnisation-wassy" },
          { label: "Taupier à Wassy", to: "/taupes-wassy" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Désinsectisation à Wassy : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. L'espèce, le périmètre et les passages sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DesinsectisationWassy;
