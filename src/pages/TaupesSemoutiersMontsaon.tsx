import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupier à Semoutiers-Montsaon en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Taupes à Semoutiers-Montsaon ? G&F Nuisibles, taupier implanté sur place en Haute-Marne 52. Piégeage mécanique écologique, résultats rapides garantis.";

const TaupesSemoutiersMontsaon = () => {
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
        "url": "https://www.gf-nuisibles.fr/taupes-semoutiers-montsaon",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://www.gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Semoutiers-Montsaon" }
      }
    ]
  };

  return (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://www.gf-nuisibles.fr/taupes-semoutiers-montsaon" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <CityServicePage
      city="Semoutiers-Montsaon"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Target className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="TAUPINIÈRES DANS VOTRE JARDIN À SEMOUTIERS-MONTSAON ?"
      serviceCallSubtitle="G&F NUISIBLES, VOTRE TAUPIER DE PROXIMITÉ, AGIT VITE !"
      intro="Les jardins et terrains de Semoutiers-Montsaon, en milieu rural, sont particulièrement exposés aux taupes. G&F Nuisibles, basé directement sur la commune, intervient avec des techniques de piégeage mécanique traditionnelles, 100 % écologiques et reconnues pour leur efficacité."
      expertise="Nos taupiers professionnels traitent jardins de particuliers, espaces communaux et terrains agricoles à Semoutiers-Montsaon. Aucun produit chimique : uniquement des pièges mécaniques positionnés avec précision dans les galeries actives pour un taux de capture optimal."
      method="Sondage du terrain à Semoutiers-Montsaon pour repérer les galeries principales. Pose stratégique de pièges mécaniques professionnels. Contrôle régulier des dispositifs et ajustement si nécessaire. Conseils de prévention pour protéger vos espaces verts durablement."
      cta="Taupes à Semoutiers-Montsaon ? Appelez G&F Nuisibles au 07.65.25.67.92 pour un piégeage professionnel, écologique et garanti."
    />
  </>
  );
};

export default TaupesSemoutiersMontsaon;
