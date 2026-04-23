import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation à Wassy en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Cafards, punaises à Wassy ? G&F Nuisibles, désinsectisation pro en Haute-Marne 52. Traitement efficace garanti.";

const DesinsectisationWassy = () => {
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
        "url": "https://www.gf-nuisibles.fr/desinsectisation-wassy",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://www.gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Wassy" }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://www.gf-nuisibles.fr/desinsectisation-wassy" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Wassy"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="INVASION D'INSECTES À WASSY ?"
        serviceCallSubtitle="G&F NUISIBLES ÉLIMINE TOUS LES INSECTES NUISIBLES !"
        intro="À Wassy, cafards, punaises de lit, puces et autres insectes nuisibles peuvent rapidement envahir votre logement ou vos locaux. G&F Nuisibles vous propose des solutions de désinsectisation professionnelles, efficaces et durables."
        expertise="G&F Nuisibles intervient à Wassy et en Haute-Marne contre tous les insectes nuisibles : cafards, punaises de lit, puces, fourmis, mites. Diagnostic précis et traitement ciblé pour chaque situation."
        method="Inspection approfondie pour identifier les espèces et les foyers. Application de traitements professionnels (gel, pulvérisation, nébulisation) adaptés à chaque insecte. Suivi post-traitement pour garantir l'éradication complète."
        cta="Invasion d'insectes à Wassy ? Contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic gratuit."
      />
    </>
  );
};

export default DesinsectisationWassy;
