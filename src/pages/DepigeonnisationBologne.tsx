import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Bologne en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Nuisances de pigeons à Bologne ? G&F Nuisibles, expert dépigeonnage en Haute-Marne 52. Intervention rapide.";

const DepigeonnisationBologne = () => {
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
        "url": "https://www.gf-nuisibles.fr/services/depigeonnisation/bologne",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://www.gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Bologne" }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://www.gf-nuisibles.fr/services/depigeonnisation/bologne" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Bologne"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="PIGEONS ENVAHISSANTS À BOLOGNE ?"
        serviceCallSubtitle="G&F NUISIBLES MET FIN AUX NUISANCES DES PIGEONS !"
        intro="Bologne fait face à une prolifération de pigeons en milieu urbain. Nos experts en dépigeonnisation déploient des solutions sur mesure : pics, filets, systèmes de répulsion, pour protéger vos bâtiments efficacement."
        expertise="Nous intervenons à Bologne et dans toute la Haute-Marne pour la dépigeonnisation de bâtiments résidentiels, commerciaux et publics. Solutions durables adaptées à chaque configuration architecturale."
        method="Audit du site et évaluation de la population de pigeons. Installation de dispositifs anti-pigeons : pics, filets, fils tendus, répulsifs. Nettoyage et désinfection des zones souillées. Suivi de l'efficacité."
        cta="Problème de pigeons à Bologne ? Appelez G&F Nuisibles au 07.65.25.67.92 pour une solution durable."
      />
    </>
  );
};

export default DepigeonnisationBologne;
