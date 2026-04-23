import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation à Neufchâteau dans les Vosges 88 | G&F Nuisibles";
const DESCRIPTION = "Problème d'insectes à Neufchâteau ? G&F Nuisibles intervient rapidement dans les Vosges 88. Traitement certifié, résultat garanti 7j/7.";

const DesinsectisationNeufchateau = () => {
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
        "url": "https://www.gf-nuisibles.fr/desinsectisation-neufchateau",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://www.gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Neufchâteau" }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://www.gf-nuisibles.fr/desinsectisation-neufchateau" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Neufchâteau"
        department="Vosges (88)"
        serviceTitle={TITLE}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="INVASION D'INSECTES À NEUFCHÂTEAU ?"
        serviceCallSubtitle="G&F NUISIBLES ÉLIMINE TOUS LES INSECTES NUISIBLES !"
        intro="À Neufchâteau, les infestations d'insectes sont fréquentes et peuvent vite devenir incontrôlables. Blattes, mites, punaises ou chenilles processionnaires, G&F Nuisibles dispose des solutions professionnelles pour chaque situation."
        expertise="Spécialiste de la lutte anti-insectes en Vosges (88), notre équipe combine expertise terrain et produits de dernière génération. Chaque opération est adaptée à l'espèce ciblée et à la configuration des lieux."
        method="Inspection minutieuse et identification des foyers. Application de traitements professionnels : gel appât, pulvérisation ciblée ou fumigation. Plan de prévention personnalisé et contrôle de suivi."
        cta="Débarrassez-vous des insectes à Neufchâteau. Appelez le 07.65.25.67.92 pour un diagnostic gratuit et une intervention efficace."
      />
    </>
  );
};

export default DesinsectisationNeufchateau;
