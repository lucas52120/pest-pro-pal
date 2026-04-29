import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Bourbonne en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Stop aux nuisances des pigeons dans votre jardin ou terrasse à Bourbonne-les-Bains. Solutions de protection efficaces pour votre habitat. Diagnostic offert.";

const EliminationPigeonsBourbonne = () => {
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
        "url": "https://gf-nuisibles.fr/services/elimination-pigeons/bourbonne-les-bains",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Bourbonne-les-Bains" }
      }
    ]
  };

  return (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://gf-nuisibles.fr/services/elimination-pigeons/bourbonne-les-bains" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <CityServicePage
      city="Bourbonne-les-Bains"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="PIGEONS DANS VOTRE JARDIN À BOURBONNE-LES-BAINS ?"
      serviceCallSubtitle="G&F NUISIBLES VOUS OFFRE UNE PROTECTION SUR MESURE !"
      intro="À Bourbonne-les-Bains, les pigeons envahissent les jardins, terrasses et dépendances des particuliers. Leurs fientes abîment le mobilier extérieur et les plantations. G&F Nuisibles vous aide à reconquérir vos espaces de vie en plein air."
      expertise="Nous adaptons nos solutions à chaque configuration : répulsifs pour terrasses couvertes, filets pour pergolas, pics pour murets et appuis de fenêtres. Votre jardin et votre terrasse redeviennent des espaces agréables pour votre famille."
      method="Analyse des habitudes des pigeons autour de votre propriété. Installation de protections discrètes sur les zones ciblées. Nettoyage des fientes et désinfection. Conseils personnalisés pour maintenir votre habitat protégé."
      cta="Profitez de votre extérieur à Bourbonne. Appelez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic offert."
    />
  </>
  );
};

export default EliminationPigeonsBourbonne;
