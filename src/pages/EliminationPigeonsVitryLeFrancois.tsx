import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Vitry-le-François dans la Marne 51 | G&F Nuisibles";
const DESCRIPTION = "Stop aux nuisances des pigeons dans votre jardin ou terrasse à Vitry-le-François. Solutions de protection efficaces pour votre habitat. Diagnostic offert.";

const EliminationPigeonsVitryLeFrancois = () => {
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
        "url": "https://gf-nuisibles.fr/services/elimination-pigeons/vitry-le-francois",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Vitry-le-François" }
      }
    ]
  };

  return (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://gf-nuisibles.fr/services/elimination-pigeons/vitry-le-francois" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <CityServicePage
      city="Vitry-le-François"
      department="Marne (51)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="PIGEONS DANS VOTRE JARDIN À VITRY-LE-FRANÇOIS ?"
      serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOTRE ESPACE DE VIE !"
      intro="À Vitry-le-François, les pigeons envahissent les jardins et terrasses des particuliers, rendant les espaces extérieurs impraticables. Leurs fientes souillent le mobilier, les dalles et les plantations. G&F Nuisibles vous aide à reconquérir votre extérieur."
      expertise="Nous proposons des solutions sur mesure pour les habitations de la Marne : répulsifs pour terrasses et jardins, filets pour balcons et pergolas, pics pour appuis de fenêtres. Chaque dispositif est choisi pour s'intégrer discrètement à votre habitat."
      method="Analyse des zones de passage et de perchage autour de votre propriété. Installation de protections ciblées. Nettoyage et assainissement des surfaces touchées par les déjections. Conseils pour prévenir tout retour."
      cta="Profitez de votre terrasse à Vitry-le-François. Appelez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic offert."
    />
  </>
  );
};

export default EliminationPigeonsVitryLeFrancois;
