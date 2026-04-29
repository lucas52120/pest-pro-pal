import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Chalindrey en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Dépigeonnage professionnel à Chalindrey (52). G&F Nuisibles protège vos bâtiments des pigeons. Devis gratuit.";

const DepigeonnisationChalindrey = () => {
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
        "url": "https://gf-nuisibles.fr/services/depigeonnisation/chalindrey",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Chalindrey" }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://gf-nuisibles.fr/services/depigeonnisation/chalindrey" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Chalindrey"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="PIGEONS ENVAHISSANTS À CHALINDREY ?"
        serviceCallSubtitle="G&F NUISIBLES MET FIN AUX NUISANCES DES PIGEONS !"
        intro="Les pigeons s'installent sur les toitures et façades de Chalindrey, provoquant salissures, dégâts et nuisances sonores. G&F Nuisibles installe des dispositifs professionnels pour éloigner durablement ces volatiles."
        expertise="Nous intervenons à Chalindrey et dans toute la Haute-Marne pour la dépigeonnisation de bâtiments résidentiels, commerciaux et publics. Solutions durables adaptées à chaque configuration architecturale."
        method="Audit du site et évaluation de la population de pigeons. Installation de dispositifs anti-pigeons : pics, filets, fils tendus, répulsifs. Nettoyage et désinfection des zones souillées. Suivi de l'efficacité."
        cta="Problème de pigeons à Chalindrey ? Appelez G&F Nuisibles au 07.65.25.67.92 pour une solution durable."
      />
    </>
  );
};

export default DepigeonnisationChalindrey;
