import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Nid de guêpes ou de frelons à Semoutiers-Montsaon (52000) | G&F Nuisibles";
const DESCRIPTION = "Nid de guêpes ou de frelons à Semoutiers-Montsaon (52000) ? G&F Nuisibles, implanté sur la commune, localise et traite le nid en sécurité. Devis gratuit.";
const URL = "https://gf-nuisibles.fr/guepes-frelons-semoutiers-montsaon";

const FAQ_ITEMS: FaqItem[] = [
  { question: "G&F Nuisibles est-il vraiment basé à Semoutiers-Montsaon ?", answer: "Oui, notre siège est situé à Montsaon, l'un des deux villages de la commune. Précisez l'adresse et l'emplacement du nid (toiture, charpente, arbre, sous-sol) pour préparer l'intervention." },
  { question: "Comment distinguer un nid de guêpes d'un nid de frelons ?", answer: "La forme, la taille et l'emplacement du nid diffèrent selon l'espèce, mais seule une observation à distance par un technicien permet de confirmer l'identification en toute sécurité. Ne vous approchez pas du nid vous-même." },
  { question: "Le frelon asiatique est-il présent à Semoutiers-Montsaon ?", answer: "Le frelon asiatique progresse en Haute-Marne. Nos techniciens identifient l'espèce sur place et adaptent le protocole, car la neutralisation d'un nid de frelon asiatique, souvent en hauteur, nécessite un équipement spécifique." },
  { question: "Intervenez-vous sur une grange ou un bâtiment agricole ?", answer: "Oui, les charpentes de granges, les hangars et les combles sont des emplacements fréquents de nidification dans ce secteur rural. Décrivez le bâtiment et l'accès pour préparer l'intervention." },
  { question: "Quel est le prix d'une destruction de nid à Semoutiers-Montsaon ?", answer: "Le prix dépend de l'espèce, de l'emplacement et de l'accessibilité du nid (hauteur, toiture, sous-sol). Un devis gratuit est établi après identification, avant toute intervention." },
];

const GuepesFrelonsSemoutiersMontsaon = () => {
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
        "@type": "Service", "url": URL, "name": "Destruction de nids de guêpes et de frelons à Semoutiers-Montsaon (52000)", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Semoutiers-Montsaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haute-Marne" }, "address": { "@type": "PostalAddress", "postalCode": "52000", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Guêpes et frelons", "item": "https://gf-nuisibles.fr/guepes-frelons" },
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
        serviceTitle={"Nid de guêpes ou de frelons à Semoutiers-Montsaon (52000)"}
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"NID DE GUÊPES OU DE FRELONS À SEMOUTIERS-MONTSAON ?"}
        serviceCallSubtitle="G&F NUISIBLES — VOTRE VOISIN À MONTSAON"
        intro={"Un va-et-vient d'insectes sous une avancée de toit, un nid visible dans une charpente de grange ou un bourdonnement dans un mur extérieur méritent une identification avant toute approche. G&F Nuisibles, dont le siège est installé à Montsaon, intervient pour la destruction de nids de guêpes et de frelons à Semoutiers-Montsaon (52000), commune rurale née en 1972 de la fusion des villages de Semoutiers et de Montsaon, à quelques kilomètres de Chaumont. Le diagnostic identifie l'espèce, l'emplacement exact du nid et les risques pour les occupants avant toute intervention."}
        expertise={"Les guêpes installent souvent leur nid dans un auvent, une haie ou une cavité de mur, tandis que les frelons, dont le frelon asiatique en progression en Haute-Marne, nichent fréquemment en hauteur, dans les charpentes de granges ou la cime des arbres. Ces indices ne remplacent pas l'identification sur place par un technicien équipé. Nous examinons l'emplacement, l'accessibilité et le niveau d'activité du nid avant de choisir le protocole de traitement, avec un équipement de protection individuelle adapté à chaque intervention."}
        method={"L'inspection commence par une observation à distance pour localiser et identifier précisément le nid, sans provoquer les insectes. Selon l'espèce et l'emplacement, un traitement par insecticide professionnel homologué est appliqué directement sur le nid, suivi si possible de son retrait. La zone est ensuite sécurisée et des conseils sont donnés pour limiter le risque de réinstallation à proximité. Un devis gratuit précise l'intervention selon l'accessibilité du nid, notamment en toiture ou en hauteur dans un arbre."}
        localContext={{ title: "Deux villages et un territoire agricole aux portes de Chaumont", content: <>
            <p>{"Semoutiers-Montsaon est une commune rurale de l'agglomération de Chaumont, née de la fusion administrative de deux villages en 1972. La Suize traverse ce territoire, et une partie de la commune est proche de la base aérienne 113 de Chaumont-Semoutiers. Selon que votre adresse se trouve à Semoutiers ou à Montsaon, les bâtiments concernés (maison, grange, hangar) peuvent varier : précisez votre village et votre rue lors de la demande."}</p>
            <p>{"Montsaon, où se trouve notre siège rue principale, et Semoutiers, où se situe la mairie historique rue de Neuilly, forment un territoire agricole où les charpentes de granges, les hangars et les haies sont des emplacements fréquents de nidification pour les guêpes et les frelons."}</p>
            <p>{"Chaumont, préfecture de la Haute-Marne, se trouve à quelques kilomètres. La proximité d'une exploitation agricole ou d'un boisement ne signifie pas automatiquement la présence d'un nid : seule une observation directe permet de le confirmer."}</p>
            <p>Les repères ci-dessus situent votre demande ; aucun lieu n'est présenté comme infesté ou client. Retrouvez des informations sur la commune sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.semoutiers.fr/" target="_blank" rel="noopener noreferrer">site officiel de la mairie de Semoutiers-Montsaon</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Semoutiers-Montsaon (52000)", intro: "Semoutiers-Montsaon réunit les villages de Semoutiers et de Montsaon. Les repères suivants aident à situer votre adresse, sans constituer une liste de lieux infestés. Précisez votre village et votre rue lors de votre demande.", items: ["Village de Montsaon", "Village de Semoutiers", "Secteur de la rue principale", "Abords de la mairie, rue de Neuilly", "Exploitations agricoles et dépendances", "Abords de la Suize"] }}
        extraSections={[
          { title: "Nid de guêpes ou de frelons : les informations utiles avant la visite", content: <>
            <p>{"Notez l'emplacement précis du nid (toiture, charpente, arbre, sous-sol, mur), sa taille approximative et l'intensité du va-et-vient observé. Ne vous approchez pas et ne bouchez pas l'entrée vous-même : une tentative mal maîtrisée peut provoquer des piqûres en série, surtout en fin d'été lorsque les colonies sont les plus actives."}</p>
            <p>{"Signalez toute allergie connue d'un occupant aux piqûres d'hyménoptères : cette information est prise en compte pour organiser l'intervention en toute sécurité."}</p>
          </> },
          { title: "Prévention dans une maison, une grange ou un corps de ferme", content: <>
            <p>{"Inspectez régulièrement les charpentes de granges, les avancées de toit et les cavités de mur au printemps, période où les nids commencent à se former. Rebouchez les petites cavités extérieures inoccupées pour limiter les sites potentiels de nidification."}</p>
            <p>{"Pour une exploitation agricole, précisez les bâtiments concernés et les zones de passage fréquent. Le devis indique l'intervention retenue selon l'accessibilité du nid, sans déduire un prix du seul village."}</p>
          </> },
          { title: "Votre service à Semoutiers-Montsaon et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons">service guêpes et frelons</Link> pour les méthodes et les prestations. Pour votre adresse à Semoutiers-Montsaon, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un devis gratuit</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-chaumont">Guêpes et frelons à Chaumont</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-bologne">Guêpes et frelons à Bologne</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-chateauvillain">Guêpes et frelons à Châteauvillain</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation."}</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Semoutiers-Montsaon", items: [
          { label: "Guêpes et frelons à Chaumont", to: "/guepes-frelons-chaumont" },
          { label: "Guêpes et frelons à Bologne", to: "/guepes-frelons-bologne" },
          { label: "Guêpes et frelons à Châteauvillain", to: "/guepes-frelons-chateauvillain" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Semoutiers-Montsaon", to: "/deratisation-semoutiers-montsaon" },
          { label: "Désinsectisation à Semoutiers-Montsaon", to: "/desinsectisation-semoutiers-montsaon" },
          { label: "Dépigeonnisation à Semoutiers-Montsaon", to: "/depigeonnisation-semoutiers-montsaon" },
          { label: "Taupier à Semoutiers-Montsaon", to: "/taupes-semoutiers-montsaon" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Nid de guêpes ou de frelons à Semoutiers-Montsaon : contactez G&F Nuisibles au 07.65.25.67.92 pour une intervention sécurisée et un devis gratuit."}
      />
    </>
  );
};

export default GuepesFrelonsSemoutiersMontsaon;
