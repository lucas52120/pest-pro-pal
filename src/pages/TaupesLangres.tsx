import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupes à Langres en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Taupes dans votre jardin à Langres ? G&F Nuisibles, taupier professionnel en Haute-Marne 52. Piégeage efficace et écologique, devis gratuit.";

const TaupesLangres = () => {
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
        "areaServed": { "@type": "City", "name": "Langres" }
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
      city="Langres"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Target className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="TAUPES DANS VOTRE JARDIN À LANGRES ?"
      serviceCallSubtitle="G&F NUISIBLES, TAUPIER PROFESSIONNEL EN HAUTE-MARNE !"
      intro="À Langres, les taupes dégradent pelouses, jardins et espaces verts avec leurs galeries souterraines et monticules de terre. G&F Nuisibles intervient avec des méthodes de piégeage traditionnelles, efficaces et respectueuses de l'environnement."
      expertise="Nos taupiers expérimentés interviennent à Langres et dans toute la Haute-Marne. Nous traitons jardins de particuliers, parcs, terrains de sport et exploitations agricoles sans aucun produit chimique."
      method="Repérage des galeries actives et évaluation de l'étendue de l'infestation. Pose de pièges mécaniques professionnels dans les galeries principales. Contrôle régulier et retrait des captures. Conseils de prévention."
      cta="Taupes à Langres ? Appelez G&F Nuisibles au 07.65.25.67.92 pour un piégeage professionnel garanti."
    />
  </>
  );
};

export default TaupesLangres;
