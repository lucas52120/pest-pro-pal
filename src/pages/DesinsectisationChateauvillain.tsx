import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation à Châteauvillain en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Cafards, punaises à Châteauvillain ? G&F Nuisibles, désinsectisation pro en Haute-Marne 52. Traitement efficace garanti.";

const DesinsectisationChateauvillain = () => {
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
        "url": "https://gf-nuisibles.fr/desinsectisation-chateauvillain",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Châteauvillain" }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://gf-nuisibles.fr/desinsectisation-chateauvillain" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Châteauvillain"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="INVASION D'INSECTES À CHÂTEAUVILLAIN ?"
        serviceCallSubtitle="G&F NUISIBLES ÉLIMINE TOUS LES INSECTES NUISIBLES !"
        intro="À Châteauvillain, cafards, punaises de lit, puces et autres insectes nuisibles peuvent rapidement envahir votre logement ou vos locaux. G&F Nuisibles vous propose des solutions de désinsectisation professionnelles, efficaces et durables."
        expertise="G&F Nuisibles intervient à Châteauvillain et en Haute-Marne contre tous les insectes nuisibles : cafards, punaises de lit, puces, fourmis, mites. Diagnostic précis et traitement ciblé pour chaque situation."
        method="Inspection approfondie pour identifier les espèces et les foyers. Application de traitements professionnels (gel, pulvérisation, nébulisation) adaptés à chaque insecte. Suivi post-traitement pour garantir l'éradication complète."
        cta="Invasion d'insectes à Châteauvillain ? Contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic gratuit."
      />
    </>
  );
};

export default DesinsectisationChateauvillain;
