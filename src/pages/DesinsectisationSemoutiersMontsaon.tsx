import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation à Semoutiers-Montsaon (52000) : cafards, punaises | G&F Nuisibles";
const DESCRIPTION = "Cafards, punaises de lit ou autres insectes à Semoutiers-Montsaon (52000) ? G&F Nuisibles, implanté sur la commune, adapte le traitement à chaque espèce. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/desinsectisation-semoutiers-montsaon";

const FAQ_ITEMS: FaqItem[] = [
  { question: "G&F Nuisibles est-il vraiment basé à Semoutiers-Montsaon ?", answer: "Oui, notre siège est situé à Montsaon, l'un des deux villages de la commune. Précisez l'adresse, les pièces concernées et le type d'insecte observé pour préparer la visite." },
  { question: "Comment distinguer des punaises de lit d'autres insectes ?", answer: "L'identification repose sur l'examen des piqûres, des traces et des zones de refuge, souvent proches du lit ou des assises. Un diagnostic sur place évite un traitement inadapté, car chaque espèce répond à un protocole différent." },
  { question: "Intervenez-vous dans une exploitation agricole ou un local de stockage ?", answer: "Oui, décrivez les surfaces, les denrées stockées et les espèces observées. Les mites alimentaires et certains coléoptères sont fréquents dans les réserves et granges de ce secteur rural." },
  { question: "Le traitement est-il sans danger pour mes enfants ou mes animaux ?", answer: "Signalez-les avant la prestation. Le choix du produit, son mode d'application et le délai de réentrée dans les pièces traitées sont adaptés en conséquence." },
  { question: "Quel est le prix d'une désinsectisation à Semoutiers-Montsaon ?", answer: "Le prix dépend de l'espèce identifiée, de la surface et du nombre de passages nécessaires. Un diagnostic et un devis gratuits permettent de préciser le protocole avant votre accord." },
];

const DesinsectisationSemoutiersMontsaon = () => {
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
        "@type": "Service", "url": URL, "name": "Désinsectisation à Semoutiers-Montsaon (52000) : cafards, punaises", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Semoutiers-Montsaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haute-Marne" }, "address": { "@type": "PostalAddress", "postalCode": "52000", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Désinsectisation", "item": "https://gf-nuisibles.fr/desinsectisation" },
        { "@type": "ListItem", "position": 3, "name": "Semoutiers-Montsaon", "item": URL }
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
        city="Semoutiers-Montsaon"
        department="Haute-Marne (52)"
        serviceTitle={"Désinsectisation à Semoutiers-Montsaon (52000) : cafards, punaises"}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"INSECTES NUISIBLES DANS VOTRE LOGEMENT À SEMOUTIERS-MONTSAON ?"}
        serviceCallSubtitle="G&F NUISIBLES — VOTRE VOISIN À MONTSAON"
        intro={"Des cafards dans une cuisine, des punaises de lit dans une chambre ou des mites dans une réserve de grains méritent une identification avant de choisir un traitement. G&F Nuisibles, dont le siège est installé à Montsaon, propose la désinsectisation à Semoutiers-Montsaon (52000), commune rurale née en 1972 de la fusion des villages de Semoutiers et de Montsaon, à quelques kilomètres de Chaumont. Le diagnostic identifie l'espèce présente, ses zones de refuge et les causes possibles de son installation, dans une maison, une ferme ou un local professionnel."}
        expertise={"Chaque espèce d'insecte répond à un protocole différent : les punaises de lit se logent près des zones de couchage, les cafards recherchent l'humidité et la chaleur des cuisines et salles de bain, et les mites ou charançons s'installent dans les denrées stockées, fréquentes dans les granges et réserves de ce secteur rural. Ces indices ne remplacent pas l'identification sur place. Nous examinons les lieux, les habitudes et les zones à risque avant de proposer un traitement par gel, pulvérisation ou nébulisation, adapté aux occupants, enfants et animaux."}
        method={"L'inspection commence par les pièces où les insectes ont été observés, puis recherche les zones de refuge et les foyers d'infestation. Selon l'espèce identifiée, un traitement ciblé est proposé avec des produits professionnels homologués. Le devis précise les surfaces traitées et le nombre de passages nécessaires. Un suivi post-traitement permet de vérifier l'efficacité et d'ajuster si besoin. Des conseils d'hygiène et de stockage complètent l'intervention pour limiter le risque de récidive."}
        localContext={{ title: "Deux villages et un territoire agricole aux portes de Chaumont", content: <>
            <p>{"Semoutiers-Montsaon est une commune rurale de l'agglomération de Chaumont, née de la fusion administrative de deux villages en 1972. La Suize traverse ce territoire, et une partie de la commune est proche de la base aérienne 113 de Chaumont-Semoutiers. Selon que votre adresse se trouve à Semoutiers ou à Montsaon, les bâtiments et dépendances concernés peuvent varier : précisez votre village et votre rue lors de la demande."}</p>
            <p>{"Montsaon, où se trouve notre siège rue principale, et Semoutiers, où se situe la mairie historique rue de Neuilly, forment un territoire agricole où les granges, réserves de grains et dépendances sont des zones d'inspection habituelles pour les mites alimentaires et certains coléoptères."}</p>
            <p>{"Chaumont, préfecture de la Haute-Marne, se trouve à quelques kilomètres. La proximité d'une exploitation agricole ne signifie pas automatiquement une infestation : seuls les indices observés sur votre bâtiment permettent de confirmer la présence d'insectes nuisibles."}</p>
            <p>Les repères ci-dessus situent votre demande ; aucun lieu n'est présenté comme infesté ou client. Retrouvez des informations sur la commune sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.semoutiers.fr/" target="_blank" rel="noopener noreferrer">site officiel de la mairie de Semoutiers-Montsaon</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Semoutiers-Montsaon (52000)", intro: "Semoutiers-Montsaon réunit les villages de Semoutiers et de Montsaon. Les repères suivants aident à situer votre adresse, sans constituer une liste de lieux infestés. Précisez votre village et votre rue lors de votre demande.", items: ["Village de Montsaon", "Village de Semoutiers", "Secteur de la rue principale", "Abords de la mairie, rue de Neuilly", "Exploitations agricoles et réserves", "Abords de la Suize"] }}
        extraSections={[
          { title: "Insectes nuisibles : les informations utiles avant la visite", content: <>
            <p>{"Notez les pièces concernées, les moments où les insectes sont observés et la date des premières traces ou piqûres. Des photos des insectes ou de leurs traces (déjections, mues, galeries) aident à préparer le diagnostic et à identifier l'espèce avant la visite."}</p>
            <p>{"Ne traitez pas vous-même avec des produits du commerce avant le diagnostic : un traitement mal ciblé peut disperser une colonie de punaises ou de cafards plutôt que l'éliminer, et compliquer l'intervention professionnelle."}</p>
          </> },
          { title: "Prévention dans une maison, une grange ou un corps de ferme", content: <>
            <p>{"Conservez les denrées et les grains dans des contenants hermétiques pour limiter les mites alimentaires. Aérez régulièrement les pièces humides pour réduire les conditions favorables aux cafards. Inspectez les bagages et les textiles d'occasion pour limiter l'introduction de punaises de lit."}</p>
            <p>{"Pour une exploitation agricole, précisez les bâtiments concernés et les stocks à risque. Le devis indique le périmètre retenu et le nombre de passages, sans déduire un prix du seul village."}</p>
          </> },
          { title: "Votre service à Semoutiers-Montsaon et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation">service désinsectisation</Link> pour les méthodes et les prestations. Pour votre adresse à Semoutiers-Montsaon, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-chaumont">Désinsectisation à Chaumont</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-bologne">Désinsectisation à Bologne</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-chateauvillain">Désinsectisation à Châteauvillain</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Semoutiers-Montsaon", items: [
          { label: "Désinsectisation à Chaumont", to: "/desinsectisation-chaumont" },
          { label: "Désinsectisation à Bologne", to: "/desinsectisation-bologne" },
          { label: "Désinsectisation à Châteauvillain", to: "/desinsectisation-chateauvillain" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Semoutiers-Montsaon", to: "/deratisation-semoutiers-montsaon" },
          { label: "Guêpes et frelons à Semoutiers-Montsaon", to: "/guepes-frelons-semoutiers-montsaon" },
          { label: "Dépigeonnisation à Semoutiers-Montsaon", to: "/depigeonnisation-semoutiers-montsaon" },
          { label: "Taupier à Semoutiers-Montsaon", to: "/taupes-semoutiers-montsaon" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Désinsectisation à Semoutiers-Montsaon : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DesinsectisationSemoutiersMontsaon;
