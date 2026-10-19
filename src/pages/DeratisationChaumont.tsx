import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem, CityReview, NearbyCity } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation Chaumont 52 - Intervention 24h, Devis Gratuit";
const DESCRIPTION = "Rats ou souris à Chaumont (52000) ? G&F Nuisibles recherche les accès et adapte le traitement aux logements et commerces. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/deratisation-chaumont";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Quel est le prix d’une dératisation à Chaumont ?", answer: "Le coût dépend de l’espèce, des zones touchées, des accès et du suivi nécessaire. Le diagnostic et le devis sont gratuits. Le devis précise les passages et les prestations retenues ; un prix de maison complète ne peut pas être déduit du quartier seul." },
  { question: "Quels indices distinguent rats et souris ?", answer: "Les déjections, les traces de grignotage, les passages et les bruits orientent le diagnostic. Les souris peuvent utiliser de très petits interstices ; les rats fréquentent aussi les dépendances et les réseaux techniques. Une photo peut aider, mais l’inspection confirme la stratégie." },
  { question: "Quelles précautions prendre avec les enfants et les animaux ?", answer: "Signalez leur présence avant le diagnostic. Si des appâts sont retenus, les postes sont sécurisés et leur implantation est étudiée. Ne les ouvrez pas et ne déplacez pas les dispositifs. Respectez les consignes données : un traitement ne doit pas être décrit comme sans risque." },
  { question: "Intervenez-vous au Cavalier, à La Rochotte et à Brottes ?", answer: "Oui, G&F Nuisibles dessert l’ensemble de Chaumont, dont ces secteurs, le centre-ville, Foch et La Vendue. L’entreprise est basée à Montsaon. Précisez votre adresse et les accès ; la disponibilité est confirmée au moment de votre appel." },
  { question: "Qui contacter si les rats circulent dans les parties communes ?", answer: "Prévenez le bailleur ou le syndic pour organiser les accès aux caves et locaux communs. Si le problème semble venir de l’espace public, signalez-le aussi à la mairie. Le diagnostic distingue ce qui relève de votre logement et ce qui nécessite une action coordonnée." },
  { question: "Comment limiter le retour des rongeurs après le traitement ?", answer: "Protégez les denrées, fermez les déchets et faites vérifier les points d’entrée repérés. Les joints de portes, passages de canalisations et grilles doivent être examinés selon le bâtiment. Le suivi et les éventuels travaux sont définis dans le devis, sans promesse d’absence définitive de rongeurs." },
];

const REVIEWS: CityReview[] = [
  {
    author: "H D N",
    neighborhood: "Secteur Chaumont — avis Google",
    rating: 5,
    text: "Excellent professionnel",
  },
  {
    author: "Laurent Rigny",
    neighborhood: "Condes (Chaumont) — avis Google",
    rating: 5,
    text: "Dératisation sur la commune de Condes. Société dynamique et efficace je recommande 👍👍",
  },
];

const NEIGHBORHOODS = [
  "Centre historique, basilique Saint-Jean-Baptiste et donjon",
  "Cavalier", "Foch", "La Rochotte", "Brottes",
  "La Vendue et la Dame Huguenotte", "Secteur gare et viaduc",
];

const NEARBY: NearbyCity[] = [
  { label: "Dératisation Bologne", to: "/deratisation-bologne" },
  { label: "Dératisation Froncles", to: "/deratisation-froncles" },
  { label: "Dératisation Nogent", to: "/deratisation-nogent" },
  { label: "Dératisation Langres", to: "/deratisation-langres" },
  { label: "Dératisation Châteauvillain", to: "/deratisation-chateauvillain" },
  { label: "Dératisation Arc-en-Barrois", to: "/deratisation-arc-en-barrois" },
];

const RELATED = [
  { label: "Guêpes & frelons à Chaumont", to: "/guepes-frelons-chaumont" },
  { label: "Dépigeonnisation à Chaumont", to: "/depigeonnisation-chaumont" },
  { label: "Désinsectisation à Chaumont", to: "/desinsectisation-chaumont" },
  { label: "Toutes nos prestations dératisation", to: "/deratisation" },
];

const DeratisationChaumont = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://gf-nuisibles.fr/#organization",
        "name": "G&F Nuisibles",
        "telephone": "+33765256792",
        "priceRange": "€€",
        "image": "https://gf-nuisibles.fr/og-image.png",
        "url": "https://gf-nuisibles.fr",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "27 rue principale",
          "addressLocality": "Montsaon",
          "postalCode": "52000",
          "addressRegion": "Haute-Marne",
          "addressCountry": "FR"
        },
        "geo": { "@type": "GeoCoordinates", "latitude": 48.0939, "longitude": 5.1739 },
        "openingHoursSpecification": [
          { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "19:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday","Sunday"], "opens": "09:00", "closes": "18:00" }
        ],
        "sameAs": ["https://www.facebook.com/gfnuisibles"]
      },
      {
        "@type": "Service",
        "name": "Dératisation à Chaumont",
        "url": URL,
        "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Chaumont", "addressRegion": "Haute-Marne", "addressCountry": "FR" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
          { "@type": "ListItem", "position": 2, "name": "Dératisation", "item": "https://gf-nuisibles.fr/deratisation" },
          { "@type": "ListItem", "position": 3, "name": "Chaumont", "item": URL }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": { "@type": "Answer", "text": item.answer }
        }))
      }
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
        city="Chaumont"
        department="Haute-Marne (52)"
        serviceTitle="Dératisation à Chaumont (52000) : rats et souris"
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="INVASION DE RATS OU SOURIS À CHAUMONT ?"
        serviceCallSubtitle="G&F NUISIBLES, VOTRE DÉRATISEUR PROFESSIONNEL EN HAUTE-MARNE"
        intro="Des grattements dans les cloisons, des emballages rongés dans une réserve ou des déjections dans une cave à Chaumont ? G&F Nuisibles recherche les indices de rats et de souris dans les logements et locaux professionnels de Chaumont (52000). Le diagnostic porte sur les zones touchées et les voies d’entrée : un bruit dans les combles ne justifie pas à lui seul la pose d’appâts. L’espèce, le bâtiment et les usages déterminent la méthode."
        expertise="Basée à Montsaon, G&F Nuisibles intervient dans le secteur chaumontais avec une approche adaptée à chaque site. Une cave du centre historique, un pavillon de Brottes et une réserve alimentaire à La Vendue n’ont pas les mêmes contraintes. Le diagnostic tient compte des enfants, des animaux, des denrées et des espaces partagés. Les pièges et les éventuels postes d’appâtage sont installés selon les besoins et les consignes de sécurité, sans présenter un traitement comme sans risque."
        method="L’inspection identifie les indices, les accès et les sources de nourriture ou d’abri. Le devis précise la stratégie, les zones concernées, le suivi et les éventuelles actions de sécurisation. Le traitement peut associer des pièges et, si nécessaire, des appâts professionnels en postes sécurisés. Les points d’entrée sont examinés pour proposer des corrections adaptées ; les travaux inclus ou à prévoir sont explicités plutôt que supposés compris."
        cta="Rats ou souris à Chaumont ? Appelez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le créneau et le suivi sont confirmés selon votre situation."
        localContext={{
          title: "Dératisation à Chaumont : raisonner à l’échelle de votre bâtiment",
          content: <>
            <p>Autour de la <strong>basilique Saint-Jean-Baptiste</strong>, du <strong>donjon</strong> et des rues du centre historique, une inspection peut porter sur les caves, les passages de canalisations et les locaux de stockage de votre immeuble. La gare et le <strong>viaduc de Chaumont</strong> permettent également de situer votre adresse. Ces monuments sont des repères, pas des références clients : aucune infestation de ces lieux n’est affirmée.</p>
            <p>Au Cavalier, à Foch, à La Rochotte ou à Brottes, on recherche les accès propres au logement : bas de porte, dépendance, grille ou passage technique. À La Vendue et à la Dame Huguenotte, l’organisation des réserves et des déchets est prise en compte. La proximité de la Suize ou de la Marne ne prouve pas à elle seule la présence de rats ; ce sont les traces sur place qui orientent le diagnostic.</p>
            <p>Chamarandes-Choignes, Condes et Treix sont des communes voisines, distinctes de Chaumont. Pour situer les repères cités, retrouvez le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.ville-chaumont.fr/decouvrir-chaumont/tourisme-et-patrimoine/" target="_blank" rel="noopener noreferrer">patrimoine de Chaumont présenté par la Ville</a>.</p>
          </>
        }}
        neighborhoods={{ title: "Secteurs desservis à Chaumont (52000)", intro: "Précisez votre adresse, le type de bien et l’accès aux caves ou dépendances pour préparer le diagnostic.", items: NEIGHBORHOODS }}
        extraSections={[
          { title: "Avant la visite : relever les indices sans vous exposer", content: <>
            <p>Notez les pièces concernées, les heures des bruits et les endroits où des déjections ou des traces de morsures apparaissent. Prenez des photos sans manipuler les déjections. Évitez de les balayer à sec ou de les aspirer ; demandez les précautions de nettoyage adaptées. Rangez les aliments dans des contenants fermés et ne laissez pas de nourriture pour animaux accessible la nuit.</p>
            <p>Ne dispersez pas d’appâts en vrac et ne bouchez pas au hasard tous les passages avant l’inspection. Indiquez les produits ou pièges déjà utilisés. Ces informations permettent de rechercher les accès sans multiplier les dispositifs inutiles.</p>
          </> },
          { title: "Logements, copropriétés et commerces de Chaumont", content: <>
            <p>Dans un immeuble, l’accès aux caves et gaines peut demander l’accord du syndic ou du bailleur. Pour une maison, signalez les garages et dépendances. L’objectif est de comprendre la circulation des rongeurs plutôt que de traiter uniquement la pièce où ils ont été aperçus.</p>
            <p>Dans un restaurant ou un commerce alimentaire, le stockage, les livraisons et les déchets font partie des points à examiner. Les besoins de surveillance et de traçabilité associés à votre démarche HACCP sont discutés au diagnostic. Le devis détaille le périmètre et le suivi proposé, sans annoncer de délai ou de résultat universel.</p>
          </> },
          { title: "Dératisation en Haute-Marne et autour de Chaumont", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation">service de dératisation en Haute-Marne</Link> pour les méthodes et les types de locaux pris en charge. Pour votre bien à Chaumont, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link>.</p>
            <p>Pour les communes voisines, retrouvez la <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-bologne">dératisation à Bologne</Link> et la <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-nogent">dératisation à Nogent</Link>, ou notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link>.</p>
          </> },
        ]}
        reviews={{
          title: "Ils nous ont fait confiance à Chaumont",
          items: REVIEWS
        }}
        nearbyCities={{
          title: "Dératisation dans les villes proches",
          items: NEARBY
        }}
        relatedLinks={RELATED}
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DeratisationChaumont;
