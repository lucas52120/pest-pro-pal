import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation à Semoutiers-Montsaon en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Cafards ou punaises à Semoutiers-Montsaon ? G&F Nuisibles, implanté sur place, éradique tous les insectes nuisibles. Expertise certifiée, diagnostic offert.";

const DesinsectisationSemoutiersMontsaon = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://pest-pro-pal.lovable.app/#organization",
        "name": "G&F Nuisibles",
        "telephone": "07.65.25.67.92",
        "priceRange": "$$",
        "image": "https://pest-pro-pal.lovable.app/og-image.png",
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
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://pest-pro-pal.lovable.app/#organization" },
        "areaServed": { "@type": "City", "name": "Semoutiers-Montsaon" }
      }
    ]
  };

  return (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <CityServicePage
      city="Semoutiers-Montsaon"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Bug className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="INSECTES NUISIBLES À SEMOUTIERS-MONTSAON ?"
      serviceCallSubtitle="G&F NUISIBLES, VOTRE EXPERT LOCAL, INTERVIENT SANS DÉLAI !"
      intro="Basé directement à Montsaon, G&F Nuisibles est le prestataire le plus réactif pour traiter les infestations d'insectes à Semoutiers-Montsaon. Cafards, punaises de lit, puces ou blattes : nous déployons des traitements professionnels certifiés pour une éradication complète de votre habitat."
      expertise="Spécialiste de la désinsectisation en Haute-Marne, G&F Nuisibles adapte son protocole à chaque espèce identifiée à Semoutiers-Montsaon. Nos traitements par gel, pulvérisation ou nébulisation sont sécurisés pour les enfants et animaux domestiques."
      method="Diagnostic minutieux de votre logement à Semoutiers-Montsaon pour localiser les foyers d'infestation. Application de biocides professionnels ciblés selon l'espèce. Suivi post-traitement et recommandations d'hygiène préventive pour éviter toute récidive."
      cta="Insectes à Semoutiers-Montsaon ? Contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic gratuit et un traitement rapide."
    />
  </>
  );
};

export default DesinsectisationSemoutiersMontsaon;
