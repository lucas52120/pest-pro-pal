import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation à Chalindrey en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Désinsectisation à Chalindrey (52). G&F Nuisibles élimine insectes nuisibles : cafards, puces, punaises. Devis gratuit.";

const DesinsectisationChalindrey = () => {
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
        "areaServed": { "@type": "City", "name": "Chalindrey" }
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
        city="Chalindrey"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="INVASION D'INSECTES À CHALINDREY ?"
        serviceCallSubtitle="G&F NUISIBLES ÉLIMINE TOUS LES INSECTES NUISIBLES !"
        intro="Les insectes nuisibles sont un fléau courant à Chalindrey. Blattes, punaises, mites ou fourmis : quelle que soit l'espèce, G&F Nuisibles dispose des traitements adaptés pour les éliminer définitivement."
        expertise="G&F Nuisibles intervient à Chalindrey et en Haute-Marne contre tous les insectes nuisibles : cafards, punaises de lit, puces, fourmis, mites. Diagnostic précis et traitement ciblé pour chaque situation."
        method="Inspection approfondie pour identifier les espèces et les foyers. Application de traitements professionnels (gel, pulvérisation, nébulisation) adaptés à chaque insecte. Suivi post-traitement pour garantir l'éradication complète."
        cta="Invasion d'insectes à Chalindrey ? Contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic gratuit."
      />
    </>
  );
};

export default DesinsectisationChalindrey;
