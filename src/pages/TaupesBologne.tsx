import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupes à Bologne en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Taupes dans votre jardin à Bologne ? G&F Nuisibles intervient en Haute-Marne 52. Piégeage pro garanti.";

const TaupesBologne = () => {
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
        "url": "https://gf-nuisibles.fr/taupes-bologne",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Bologne" }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://gf-nuisibles.fr/taupes-bologne" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Bologne"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Target className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="TAUPES DANS VOTRE JARDIN À BOLOGNE ?"
        serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS ESPACES VERTS !"
        intro="Bologne et ses environs verdoyants attirent les taupes qui dégradent vos terrains. Nos taupiers professionnels utilisent des techniques de piégeage éprouvées pour une élimination complète et respectueuse."
        expertise="G&F Nuisibles intervient à Bologne et en Haute-Marne pour le piégeage professionnel des taupes. Nos taupiers expérimentés traitent jardins, parcs, terrains de sport et exploitations agricoles."
        method="Repérage des galeries actives et évaluation de l'étendue de l'infestation. Pose de pièges professionnels dans les galeries principales. Contrôle régulier et retrait des captures. Conseils de prévention."
        cta="Taupes dans votre jardin à Bologne ? Contactez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit."
      />
    </>
  );
};

export default TaupesBologne;
