import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation à Arc-en-Barrois en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Invasion d'insectes à Arc-en-Barrois ? G&F Nuisibles éradique cafards, punaises de lit et puces en Haute-Marne 52. Diagnostic gratuit, traitement certifié.";

const DesinsectisationArcEnBarrois = () => {
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
        "url": "https://www.gf-nuisibles.fr/desinsectisation-arc-en-barrois",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://www.gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Arc-en-Barrois" }
      }
    ]
  };

  return (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://www.gf-nuisibles.fr/desinsectisation-arc-en-barrois" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <CityServicePage
      city="Arc-en-Barrois"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Bug className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="CAFARDS, PUNAISES OU PUCES À ARC-EN-BARROIS ?"
      serviceCallSubtitle="G&F NUISIBLES ÉLIMINE TOUS LES INSECTES NUISIBLES DE VOTRE HABITAT !"
      intro="À Arc-en-Barrois, les insectes nuisibles — cafards, punaises de lit, puces ou blattes — peuvent rapidement envahir votre logement ou commerce. G&F Nuisibles, implanté à proximité à Montsaon, déploie des traitements professionnels certifiés pour une éradication totale et durable."
      expertise="Expert en désinsectisation en Haute-Marne, G&F Nuisibles identifie chaque espèce pour appliquer le protocole le plus adapté à Arc-en-Barrois. Nos traitements (gel, pulvérisation, nébulisation) sont compatibles avec la présence d'enfants et d'animaux domestiques."
      method="Inspection minutieuse de votre habitation à Arc-en-Barrois pour localiser les foyers d'infestation. Application de biocides professionnels ciblés. Suivi post-traitement pour valider l'éradication complète et conseils d'hygiène préventive."
      cta="Insectes nuisibles à Arc-en-Barrois ? Contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic gratuit et une intervention rapide."
    />
  </>
  );
};

export default DesinsectisationArcEnBarrois;
