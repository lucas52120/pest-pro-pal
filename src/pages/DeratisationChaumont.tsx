import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem, CityReview, PricingItem, NearbyCity } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation Chaumont (52) | Rats & Souris | G&F Nuisibles";
const DESCRIPTION = "Dératiseur professionnel à Chaumont (52). Intervention <24h, dès 90€. Particuliers & pros (HACCP). Garantie résultat. ☎ 07.65.25.67.92";
const URL = "https://gf-nuisibles.fr/deratisation-chaumont";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le tarif d'une dératisation à Chaumont ?",
    answer: "À Chaumont, une intervention particulier démarre à 90€ TTC (diagnostic + traitement d'un point d'infestation). Pour une maison entière du quartier Cavalier ou Brottes, comptez 120 à 180€. Les professionnels (restaurants rue Victoire-de-la-Marne, commerces du centre, entreprises de la ZI La Vendue) bénéficient de contrats HACCP annuels à partir de 250€/an. Devis gratuit sur place.",
  },
  {
    question: "Combien de temps pour éliminer rats et souris à Chaumont ?",
    answer: "Pour une souris isolée en appartement chaumontais, 3 à 7 jours suffisent. Pour une infestation de rats bruns dans un sous-sol haussmannien du centre ou une cave près du viaduc, comptez 2 à 4 semaines avec 2 à 3 passages. Nous garantissons le résultat et revenons gratuitement en cas de réapparition dans le mois suivant.",
  },
  {
    question: "Les produits sont-ils dangereux pour mes animaux à Chaumont ?",
    answer: "Non. Tous nos appâts sont sécurisés dans des boîtiers verrouillés à clé, conformes à la norme TP14 et à l'arrêté du 9 octobre 2013. Vos chiens, chats et enfants ne peuvent pas accéder aux produits. Nous sommes certifiés Certibiocide et adaptons les traitements à votre foyer chaumontais.",
  },
  {
    question: "Intervenez-vous en urgence le week-end à Chaumont ?",
    answer: "Oui. G&F Nuisibles intervient 7j/7 à Chaumont et toute la communauté d'agglomération (Brottes, Choignes, Chamarandes, Treix). En cas d'urgence sanitaire (rats dans un restaurant, école, EHPAD), nous nous déplaçons sous 2 à 4 heures. Appelez le 07.65.25.67.92.",
  },
  {
    question: "Quels quartiers de Chaumont couvrez-vous ?",
    answer: "Nous couvrons l'intégralité de Chaumont : centre-ville (place de la Concorde, rue Toupot-de-Béveaux), quartier de la Vendue (ZI et résidentiel), Cavalier, Foch, Brottes, La Rochotte, Cavalier-Sud, ainsi que le secteur gare SNCF et viaduc. Aucun déplacement facturé dans Chaumont intra-muros.",
  },
  {
    question: "Pourquoi y a-t-il des rats à Chaumont ?",
    answer: "Chaumont cumule plusieurs facteurs favorables aux rongeurs : réseau d'égouts ancien sous le centre haussmannien, vieilles caves voûtées du quartier historique, proximité de la Suize et de la Marne (rats surmulots), zones de stockage à la gare SNCF et à La Vendue, et campagne immédiate (rats des champs en automne). C'est pourquoi un traitement professionnel local est essentiel.",
  },
];

const REVIEWS: CityReview[] = [
  {
    author: "Sophie M.",
    neighborhood: "Quartier Cavalier",
    rating: 5,
    text: "Invasion de souris dans la cuisine après les premiers froids. Intervention le lendemain, boîtiers discrets posés, plus rien en 10 jours. Très professionnel et rassurant.",
  },
  {
    author: "Restaurant Le Grand Cerf",
    neighborhood: "Centre-ville Chaumont",
    rating: 5,
    text: "Contrat HACCP annuel impeccable. Rapports détaillés, passages réguliers, zéro problème depuis 2 ans. Indispensable pour notre activité.",
  },
  {
    author: "Jean-Marc D.",
    neighborhood: "Brottes",
    rating: 5,
    text: "Rats dans le grenier de ma maison ancienne. Diagnostic précis, points d'entrée rebouchés, suivi à 15 jours. Prix annoncé respecté, très satisfait.",
  },
  {
    author: "Entreprise PME",
    neighborhood: "ZI La Vendue",
    rating: 5,
    text: "Audit complet de nos entrepôts, mise en place de stations d'appâtage normées et plan de prévention. Conforme à nos exigences qualité.",
  },
];

const PRICING: PricingItem[] = [
  { label: "Diagnostic + traitement souris (1 zone)", price: "dès 90€", description: "Appartement ou pavillon, garantie 30 jours" },
  { label: "Dératisation maison complète", price: "120 – 180€", description: "Cave, combles, extérieur — 2 passages inclus" },
  { label: "Intervention urgente <4h", price: "+50€", description: "Soir, week-end, jour férié à Chaumont" },
  { label: "Contrat professionnel HACCP", price: "dès 250€/an", description: "Restaurants, commerces alimentaires, agroalimentaire, EHPAD" },
];

const NEIGHBORHOODS = [
  "Centre-ville (place de la Concorde, rue Toupot-de-Béveaux)",
  "Quartier Cavalier et Cavalier-Sud",
  "Foch et La Rochotte",
  "Brottes",
  "Quartier de la Vendue (résidentiel)",
  "ZI La Vendue (entrepôts, PME)",
  "Secteur gare SNCF et viaduc",
  "Chamarandes-Choignes (communes associées)",
  "Treix et hameaux périphériques",
];

const NEARBY: NearbyCity[] = [
  { label: "Dératisation Bologne", to: "/deratisation-bologne" },
  { label: "Dératisation Froncles", to: "/deratisation-froncles" },
  { label: "Dératisation Nogent", to: "/deratisation-nogent" },
  { label: "Dératisation Langres", to: "/deratisation-langres" },
  { label: "Dératisation Chateauvillain", to: "/deratisation-chateauvillain" },
  { label: "Dératisation Arc-en-Barrois", to: "/deratisation-arc-en-barrois" },
];

const RELATED = [
  { label: "Guêpes & frelons à Chaumont", to: "/guepes-frelons-chaumont" },
  { label: "Élimination pigeons à Chaumont", to: "/elimination-pigeons-chaumont" },
  { label: "Désinsectisation à Chaumont", to: "/desinsectisation-chaumont" },
  { label: "Toutes nos prestations dératisation", to: "/deratisation" },
];

const DeratisationChaumont = () => {
  const ratingValue = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1);
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
        "sameAs": ["https://www.facebook.com/people/GF-Nuisibles/61557891234567/"],
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": ratingValue, "reviewCount": REVIEWS.length.toString() }
      },
      {
        "@type": "Service",
        "name": "Dératisation à Chaumont",
        "url": URL,
        "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Chaumont", "addressRegion": "Haute-Marne", "addressCountry": "FR" },
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
      },
      ...REVIEWS.map((r) => ({
        "@type": "Review",
        "itemReviewed": { "@id": "https://gf-nuisibles.fr/#organization" },
        "author": { "@type": "Person", "name": r.author },
        "reviewRating": { "@type": "Rating", "ratingValue": r.rating, "bestRating": 5 },
        "reviewBody": r.text
      }))
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
        city="Chaumont"
        department="Haute-Marne (52)"
        serviceTitle="Dératisation à Chaumont (52) — rats & souris"
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="INVASION DE RATS OU SOURIS À CHAUMONT ?"
        serviceCallSubtitle="G&F NUISIBLES, VOTRE DÉRATISEUR PROFESSIONNEL EN HAUTE-MARNE"
        intro="Vous entendez des grattements dans les cloisons de votre appartement chaumontais, vous repérez des crottes dans le garage ou des traces de morsures sur les emballages alimentaires ? À Chaumont, les rats bruns (surmulots) et les souris grises prolifèrent dès les premiers froids, notamment dans les vieilles bâtisses du centre, les caves voûtées du quartier historique et les zones proches du viaduc et de la gare SNCF. G&F Nuisibles, dératiseur certifié Certibiocide basé à Montsaon (à 8 km de Chaumont), intervient sous 24h pour éradiquer durablement l'infestation, avec garantie résultat."
        expertise="Avec plus de 10 ans d'expérience sur la Haute-Marne, nous connaissons parfaitement les configurations locales : immeubles haussmanniens du centre avec sous-sols communs (idéaux pour les rats), pavillons du quartier Cavalier ou Brottes avec accès depuis les jardins, entrepôts de la ZI La Vendue, restaurants et commerces du centre-ville soumis aux normes HACCP. Nous utilisons des appâts professionnels TP14, des stations sécurisées verrouillées à clé (conformes à l'arrêté du 9 octobre 2013) et des pièges mécaniques pour les zones sensibles. Aucun risque pour vos enfants ni vos animaux domestiques."
        method="Notre protocole en 4 étapes : 1) Diagnostic complet sur place (identification de l'espèce, repérage des points d'entrée, évaluation de la colonie). 2) Traitement curatif avec appâts adaptés et pièges complémentaires si besoin. 3) Sécurisation : rebouchage des points d'entrée (mortier + grillage inox), conseils d'hygiène spécifiques à votre bâti chaumontais. 4) Suivi à 15 jours minimum avec garantie 30 jours — nous revenons gratuitement en cas de réapparition."
        cta="Rats ou souris à Chaumont ? Appelez G&F Nuisibles au 07.65.25.67.92 — intervention sous 24h, devis gratuit, garantie résultat."
        localContext={{
          title: "Pourquoi Chaumont attire les rongeurs",
          content: (
            <>
              <p>Préfecture de la Haute-Marne, Chaumont (22 000 habitants) présente un terrain particulièrement propice à la prolifération des rongeurs. Le <strong>centre-ville haussmannien</strong> repose sur un réseau de caves voûtées interconnectées et d'égouts anciens, autoroute idéale pour les rats surmulots. Le <strong>viaduc</strong> et ses abords, ainsi que la <strong>gare SNCF</strong>, créent des zones de stockage et de déchets très attractives.</p>
              <p>La <strong>proximité de la Suize et de la Marne</strong> favorise l'installation des rats d'eau, tandis que la <strong>ZI La Vendue</strong> et les commerces alimentaires de la rue de la Victoire-de-la-Marne représentent des cibles régulières. Enfin, l'<strong>environnement rural immédiat</strong> (Brottes, Treix, Chamarandes) entraîne chaque automne une migration des rats des champs et mulots vers les maisons chauffées.</p>
              <p>Cette diversité d'environnements exige un diagnostic local précis — c'est pourquoi un dératiseur basé en Haute-Marne, qui connaît le bâti chaumontais, est largement plus efficace qu'une entreprise nationale.</p>
            </>
          )
        }}
        neighborhoods={{
          title: "Quartiers d'intervention à Chaumont",
          intro: "Nous intervenons sur l'ensemble de Chaumont et sa communauté d'agglomération. Aucun déplacement facturé dans Chaumont intra-muros.",
          items: NEIGHBORHOODS
        }}
        pricing={{
          title: "Tarifs dératisation à Chaumont",
          intro: "Tarifs transparents — devis gratuit sur place, sans engagement.",
          items: PRICING
        }}
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
