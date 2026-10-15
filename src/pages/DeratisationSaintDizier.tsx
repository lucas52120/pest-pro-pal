import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem, CityReview, PricingItem, NearbyCity } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation Saint-Dizier (52) | Rats & Souris | G&F Nuisibles";
const DESCRIPTION = "Dératiseur professionnel à Saint-Dizier (52). Intervention <24h, dès 90€. Particuliers & pros (HACCP). Garantie résultat. ☎ 07.65.25.67.92";
const URL = "https://gf-nuisibles.fr/deratisation-saint-dizier";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le tarif d'une dératisation à Saint-Dizier ?",
    answer: "À Saint-Dizier, une intervention particulier démarre à 90€ TTC (diagnostic + traitement d'un point d'infestation). Pour une maison complète au Vert-Bois, au Clos Mortier ou à La Noue, comptez 120 à 180€. Les professionnels (restaurants du centre, commerces de la rue Gambetta, industries de la ZI du Petit Pré, agroalimentaire) bénéficient de contrats HACCP annuels dès 250€/an. Devis gratuit sur place.",
  },
  {
    question: "Combien de temps pour éliminer rats et souris à Saint-Dizier ?",
    answer: "Pour une souris isolée en appartement bragard, 3 à 7 jours suffisent. Pour une infestation de rats surmulots dans un sous-sol ancien du centre ou un entrepôt industriel près de la Marne, comptez 2 à 4 semaines avec 2 à 3 passages. Nous garantissons le résultat et revenons gratuitement en cas de réapparition dans les 30 jours.",
  },
  {
    question: "Vos traitements sont-ils sans danger pour mes animaux à Saint-Dizier ?",
    answer: "Oui. Tous nos appâts sont sécurisés dans des boîtiers verrouillés à clé, conformes à la norme TP14 et à l'arrêté du 9 octobre 2013. Vos chiens, chats et enfants ne peuvent pas accéder aux produits. G&F Nuisibles est certifié Certibiocide et adapte chaque traitement à votre foyer bragard.",
  },
  {
    question: "Intervenez-vous en urgence week-end à Saint-Dizier ?",
    answer: "Oui. G&F Nuisibles intervient 7j/7 sur Saint-Dizier et l'agglomération (Bettancourt-la-Ferrée, Chancenay, Roches-sur-Marne, Eurville-Bienville). En cas d'urgence sanitaire (rats dans un restaurant, école, EHPAD, atelier agroalimentaire), nous nous déplaçons sous 2 à 4 heures. Appelez le 07.65.25.67.92.",
  },
  {
    question: "Quels quartiers de Saint-Dizier couvrez-vous ?",
    answer: "Nous couvrons l'ensemble de Saint-Dizier : centre-ville (place Aristide-Briand, rue Gambetta, halles), Vert-Bois, Clos Mortier, La Noue, Le Grand Lachat, Marnaval, Gigny, ainsi que la ZI du Petit Pré, la zone Référence et les abords de la gare SNCF. Aucun déplacement facturé dans Saint-Dizier intra-muros.",
  },
  {
    question: "Pourquoi y a-t-il autant de rats à Saint-Dizier ?",
    answer: "Saint-Dizier cumule plusieurs facteurs favorables aux rongeurs : passage de la Marne et du canal entre Champagne et Bourgogne (rats surmulots d'eau), réseau d'égouts ancien sous le centre, lourd passé industriel (Hauts-Fourneaux, fonderies, GHM) avec entrepôts et friches, sites agroalimentaires et lac du Der à proximité. Cette diversité exige un dératiseur local qui connaît le bâti bragard.",
  },
];


const PRICING: PricingItem[] = [
  { label: "Diagnostic + traitement souris (1 zone)", price: "dès 90€", description: "Appartement ou pavillon, garantie 30 jours" },
  { label: "Dératisation maison complète", price: "120 – 180€", description: "Cave, combles, extérieur — 2 passages inclus" },
  { label: "Intervention urgente <4h", price: "+50€", description: "Soir, week-end, jour férié à Saint-Dizier" },
  { label: "Contrat professionnel HACCP", price: "dès 250€/an", description: "Restaurants, agroalimentaire, industrie, EHPAD" },
];

const NEIGHBORHOODS = [
  "Centre-ville (place Aristide-Briand, rue Gambetta, halles)",
  "Vert-Bois",
  "Clos Mortier",
  "La Noue",
  "Le Grand Lachat",
  "Marnaval",
  "Gigny",
  "ZI du Petit Pré et zone Référence",
  "Secteur gare SNCF et abords de la Marne",
  "Bettancourt-la-Ferrée, Chancenay, Eurville-Bienville (agglomération)",
];

const NEARBY: NearbyCity[] = [
  { label: "Dératisation Wassy", to: "/deratisation-wassy" },
  { label: "Dératisation Joinville", to: "/deratisation-joinville" },
  { label: "Dératisation Montier-en-Der", to: "/deratisation-montier-en-der" },
  { label: "Dératisation Bar-sur-Aube", to: "/deratisation-bar-sur-aube" },
  { label: "Dératisation Vitry-le-François", to: "/deratisation-chalons-en-champagne" },
  { label: "Dératisation Chaumont", to: "/deratisation-chaumont" },
];

const RELATED = [
  { label: "Désinsectisation à Saint-Dizier", to: "/desinsectisation-saint-dizier" },
  { label: "Dépigeonnisation à Saint-Dizier", to: "/depigeonnisation-saint-dizier" },
  { label: "Guêpes & frelons à Saint-Dizier", to: "/guepes-frelons-saint-dizier" },
  { label: "Toutes nos prestations dératisation", to: "/deratisation" },
];

const DeratisationSaintDizier = () => {
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
        "sameAs": ["https://www.facebook.com/people/GF-Nuisibles/61557891234567/"]
      },
      {
        "@type": "Service",
        "name": "Dératisation à Saint-Dizier",
        "url": URL,
        "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Saint-Dizier", "addressRegion": "Haute-Marne", "addressCountry": "FR" },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "EUR",
          "lowPrice": "90",
          "highPrice": "250",
          "offerCount": "4"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
          { "@type": "ListItem", "position": 2, "name": "Dératisation", "item": "https://gf-nuisibles.fr/deratisation" },
          { "@type": "ListItem", "position": 3, "name": "Saint-Dizier", "item": URL }
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
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Saint-Dizier"
        department="Haute-Marne (52)"
        serviceTitle="Dératisation à Saint-Dizier (52) — rats & souris"
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS DANS VOS LOCAUX À SAINT-DIZIER ?"
        serviceCallSubtitle="G&F NUISIBLES, VOTRE DÉRATISEUR PROFESSIONNEL EN HAUTE-MARNE"
        intro="Grattements dans les combles d'un pavillon du Vert-Bois, crottes derrière le frigo d'un appartement du centre bragard, traces de morsures sur des emballages dans un entrepôt de la ZI du Petit Pré ? À Saint-Dizier, deuxième ville de Haute-Marne et capitale industrielle du nord du département, les rats surmulots et les souris grises prolifèrent vite, favorisés par la Marne, le canal, les anciens sites industriels et le réseau d'égouts du centre. G&F Nuisibles, dératiseur certifié Certibiocide, intervient sous 24h sur Saint-Dizier pour éradiquer durablement l'infestation, avec garantie résultat."
        expertise="Forts de plus de 10 ans d'expérience sur la Haute-Marne, nous connaissons parfaitement les configurations locales bragardes : maisons anciennes du centre avec caves communicantes, pavillons des années 1960-70 du Vert-Bois et du Clos Mortier, immeubles collectifs de La Noue, entrepôts et friches industrielles de Marnaval, restaurants et brasseries du centre soumis aux normes HACCP, sites agroalimentaires. Nous utilisons des appâts professionnels TP14, des stations sécurisées verrouillées à clé (arrêté du 9 octobre 2013) et des pièges mécaniques pour les zones sensibles. Aucun risque pour vos enfants ni vos animaux domestiques."
        method="Notre protocole en 4 étapes : 1) Diagnostic complet sur place (identification de l'espèce, repérage des points d'entrée, évaluation de la colonie). 2) Traitement curatif avec appâts adaptés et pièges complémentaires si besoin. 3) Sécurisation : rebouchage des points d'entrée (mortier + grillage inox), conseils d'hygiène adaptés au bâti bragard. 4) Suivi à 15 jours minimum avec garantie 30 jours — nous revenons gratuitement en cas de réapparition."
        cta="Rats ou souris à Saint-Dizier ? Appelez G&F Nuisibles au 07.65.25.67.92 — intervention sous 24h, devis gratuit, garantie résultat."
        localContext={{
          title: "Pourquoi Saint-Dizier attire les rongeurs",
          content: (
            <>
              <p>Deuxième ville de Haute-Marne avec près de 24 000 habitants, Saint-Dizier (« la cité bragarde ») présente un terrain particulièrement favorable aux rongeurs. La <strong>traversée de la Marne</strong> et du <strong>canal entre Champagne et Bourgogne</strong> favorise l'installation des rats surmulots d'eau, qui colonisent berges, caves et sous-sols proches des rives.</p>
              <p>Le <strong>centre ancien</strong> repose sur un réseau d'égouts vieillissant et de caves voûtées interconnectées, autoroute idéale pour les rongeurs. Le <strong>passé industriel</strong> (Hauts-Fourneaux, GHM, fonderies, friches reconverties) laisse de nombreux <strong>entrepôts, ateliers et zones de stockage</strong> très attractifs. Les <strong>ZI du Petit Pré, zone Référence et Marnaval</strong> concentrent les sites logistiques et agroalimentaires sensibles.</p>
              <p>Enfin, la <strong>proximité du lac du Der</strong> et de la campagne dervoise entraîne chaque automne une migration des rats des champs et mulots vers les maisons chauffées. Cette diversité d'environnements exige un dératiseur local qui connaît précisément le bâti bragard — bien plus efficace qu'une enseigne nationale.</p>
            </>
          )
        }}
        neighborhoods={{
          title: "Quartiers d'intervention à Saint-Dizier",
          intro: "Nous intervenons sur l'ensemble de Saint-Dizier et son agglomération. Aucun déplacement facturé dans Saint-Dizier intra-muros.",
          items: NEIGHBORHOODS
        }}
        pricing={{
          title: "Tarifs dératisation à Saint-Dizier",
          intro: "Tarifs transparents — devis gratuit sur place, sans engagement.",
          items: PRICING
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

export default DeratisationSaintDizier;
