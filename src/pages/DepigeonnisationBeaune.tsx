import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Beaune en Côte-d'Or 21 | G&F Nuisibles";
const DESCRIPTION = "Pigeons à Beaune ? G&F Nuisibles installe des solutions anti-pigeons durables en Côte-d'Or 21. Dépigeonnage garanti, devis gratuit.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel prix pour protéger un domaine viticole contre les pigeons à Beaune ?",
    answer: "Pour les caves et chais de Beaune, le tarif est lié à la protection des points de pénétration (lucarnes, soupiraux). Nous utilisons des matériaux nobles comme le cuivre ou l'inox pour que les dispositifs s'intègrent parfaitement à l'architecture de votre domaine viticole.",
  },
  {
    question: "Comment se débarrasser des pigeons naturellement dans une cour intérieure ?",
    answer: "L'installation de systèmes d'effarouchement acoustique ou visuel peut être envisagée. Ces méthodes imitent les cris de prédateurs ou utilisent des reflets lumineux pour perturber les oiseaux, les poussant à déserter votre propriété sans usage de produits chimiques.",
  },
  {
    question: "Quelle est la méthode la plus efficace pour les toitures en tuiles ?",
    answer: "L'utilisation de closoirs ventilés et de pics spécifiques pour tuiles empêche les pigeons de nicher sous votre toiture. Cela préserve l'isolation de votre maison et évite que les oiseaux ne bouchent vos conduits d'évacuation d'eaux pluviales.",
  },
];

const DepigeonnisationBeaune = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.gf-nuisibles.fr/#organization",
        "url": "https://www.gf-nuisibles.fr",
        "name": "G&F Nuisibles",
        "telephone": "07.65.25.67.92",
        "priceRange": "$$",
        "image": "https://www.gf-nuisibles.fr/og-image.png",
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
        "url": "https://www.gf-nuisibles.fr/services/depigeonnisation/beaune",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://www.gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Beaune" }
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
        <link rel="canonical" href="https://www.gf-nuisibles.fr/services/depigeonnisation/beaune" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Beaune"
        department="Côte-d'Or (21)"
        serviceTitle={TITLE}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="PIGEONS ENVAHISSANTS À BEAUNE ?"
        serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS BÂTIMENTS DURABLEMENT !"
        intro="Les pigeons causent des nuisances importantes à Beaune : fientes corrosives, dégradation des façades, risques sanitaires. G&F Nuisibles met en place des dispositifs professionnels pour éloigner durablement ces volatiles."
        expertise="Experts en dépigeonnisation en Côte-d'Or (21), nous proposons des solutions adaptées à chaque type de bâtiment : pics anti-pigeons, filets de protection, systèmes de répulsion électrique et capture."
        method="Évaluation de la situation et cartographie des zones touchées. Installation de dispositifs anti-perchage et anti-nidification. Nettoyage et désinfection des zones souillées. Suivi de l'efficacité du dispositif."
        cta="Protégez vos bâtiments à Beaune. Appelez le 07.65.25.67.92 pour une solution anti-pigeons professionnelle et durable."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DepigeonnisationBeaune;
