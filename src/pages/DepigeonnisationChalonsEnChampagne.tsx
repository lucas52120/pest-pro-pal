import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Châlons-en-Champagne | G&F Nuisibles";
const DESCRIPTION = "Pigeons à Châlons-en-Champagne ? G&F Nuisibles installe des solutions anti-pigeons durables dans la Marne 51. Devis gratuit.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le prix pour dépigeonner à Châlons-en-Champagne ?",
    answer: "À Châlons-en-Champagne, nous adaptons nos tarifs aux contraintes des restaurateurs (intervention hors service). Le budget dépend du nombre de mètres linéaires de pics à poser ou de la surface de filets à installer sur votre devanture.",
  },
  {
    question: "Est-il interdit de tuer les pigeons en milieu urbain ?",
    answer: "La destruction directe est prohibée. Nous utilisons donc des méthodes passives et respectueuses. Pour votre établissement dans la Marne, nous mettons en place des stratégies d'effarouchement ou de capture contrôlée qui régulent la population sans acte de cruauté.",
  },
  {
    question: "Comment faire fuir les pigeons définitivement d'un bâtiment ?",
    answer: "Les enseignes sont des perchoirs de choix. La pose de pics d'obstruction est la solution radicale pour protéger vos logos et éviter que les fientes ne court-circuitent vos installations électriques à proximité de votre point de vente.",
  },
];

const DepigeonnisationChalonsEnChampagne = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://gf-nuisibles.fr/#organization",
        "url": "https://gf-nuisibles.fr",
        "name": "G&F Nuisibles",
        "telephone": "07.65.25.67.92",
        "priceRange": "$$",
        "image": "https://gf-nuisibles.fr/og-image.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "27 rue principale",
          "addressLocality": "Montsaon",
          "postalCode": "52000",
          "addressRegion": "Haute-Marne",
          "addressCountry": "FR"
        }
      },
      {
        "@type": "Service",
        "url": "https://gf-nuisibles.fr/services/depigeonnisation/chalons-en-champagne",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Châlons-en-Champagne" }
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
        <link rel="canonical" href="https://gf-nuisibles.fr/services/depigeonnisation/chalons-en-champagne" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Châlons-en-Champagne"
        department="Marne (51)"
        serviceTitle={TITLE}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="PIGEONS ENVAHISSANTS À CHÂLONS-EN-CHAMPAGNE ?"
        serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS BÂTIMENTS DURABLEMENT !"
        intro="Les pigeons causent des nuisances importantes à Châlons-en-Champagne : fientes corrosives, dégradation des façades, risques sanitaires. G&F Nuisibles met en place des dispositifs professionnels pour éloigner durablement ces volatiles."
        expertise="Experts en dépigeonnisation dans la Marne (51), nous proposons des solutions adaptées à chaque type de bâtiment : pics anti-pigeons, filets de protection, systèmes de répulsion électrique et capture."
        method="Évaluation de la situation et cartographie des zones touchées. Installation de dispositifs anti-perchage et anti-nidification. Nettoyage et désinfection des zones souillées. Suivi de l'efficacité du dispositif."
        cta="Protégez vos bâtiments à Châlons-en-Champagne. Appelez le 07.65.25.67.92 pour un dépigeonnage professionnel et durable."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DepigeonnisationChalonsEnChampagne;
