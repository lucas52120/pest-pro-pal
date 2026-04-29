import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Semoutiers-Montsaon en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Pigeons à Semoutiers-Montsaon ? G&F Nuisibles, expert local en Haute-Marne 52, protège vos bâtiments avec des solutions anti-pigeons durables. Diagnostic offert.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quels dispositifs anti-pigeons installez-vous à Semoutiers-Montsaon ?",
    answer: "Nous posons des pics en inox, filets de protection et fils tendus adaptés à chaque configuration de bâtiment. À Semoutiers-Montsaon, nous privilégions les méthodes non-létales pour une protection durable et conforme à la réglementation.",
  },
  {
    question: "Les fientes de pigeons représentent-elles un risque sanitaire ?",
    answer: "Oui, elles peuvent véhiculer des maladies (ornithose, salmonellose) et contiennent des agents allergènes. G&F Nuisibles assure la décontamination complète des surfaces souillées après l'installation des dispositifs de protection à Semoutiers-Montsaon.",
  },
  {
    question: "Intervenez-vous aussi sur les bâtiments agricoles ?",
    answer: "Absolument. À Semoutiers-Montsaon, nous protégeons hangars, granges et bâtiments d'élevage contre les pigeons. Nos solutions sont adaptées aux grandes surfaces et aux contraintes spécifiques du milieu agricole.",
  },
];

const DepigeonnisationSemoutiersMontsaon = () => {
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
        "url": "https://gf-nuisibles.fr/services/depigeonnisation/semoutiers-montsaon",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Semoutiers-Montsaon" }
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
        <link rel="canonical" href="https://gf-nuisibles.fr/services/depigeonnisation/semoutiers-montsaon" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Semoutiers-Montsaon"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="PIGEONS SUR VOS BÂTIMENTS À SEMOUTIERS-MONTSAON ?"
        serviceCallSubtitle="G&F NUISIBLES INSTALLE DES PROTECTIONS ANTI-PIGEONS DURABLES !"
        intro="À Semoutiers-Montsaon, les pigeons envahissent toitures, façades et bâtiments agricoles, causant dégradations et risques sanitaires. G&F Nuisibles, votre expert de proximité basé sur la commune, met en place des dispositifs professionnels pour protéger durablement vos locaux."
        expertise="Nous intervenons sur tous types de bâtiments à Semoutiers-Montsaon : habitations, exploitations agricoles, commerces et bâtiments communaux. Nos méthodes non-létales (filets, pics, fil tendu) sont conformes à la réglementation et garantissent une protection pérenne."
        method="Analyse complète du site à Semoutiers-Montsaon pour identifier les zones de perchage et nidification. Pose de dispositifs anti-pigeons sur mesure. Décontamination des surfaces souillées. Suivi et garantie d'efficacité."
        cta="Pigeons à Semoutiers-Montsaon ? Contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic gratuit et une dépigeonnisation professionnelle."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DepigeonnisationSemoutiersMontsaon;
