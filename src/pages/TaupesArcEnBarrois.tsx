import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupier à Arc-en-Barrois en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Taupes dans votre jardin à Arc-en-Barrois ? G&F Nuisibles, taupier professionnel en Haute-Marne 52. Piégeage mécanique écologique, intervention rapide.";

const TaupesArcEnBarrois = () => {
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
        "areaServed": { "@type": "City", "name": "Arc-en-Barrois" }
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
      city="Arc-en-Barrois"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Target className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="TAUPINIÈRES DANS VOTRE JARDIN À ARC-EN-BARROIS ?"
      serviceCallSubtitle="G&F NUISIBLES, VOTRE TAUPIER PROFESSIONNEL EN HAUTE-MARNE !"
      intro="Les espaces verts d'Arc-en-Barrois, en bordure de forêt, sont particulièrement exposés aux taupes qui multiplient galeries et monticules de terre. G&F Nuisibles, implanté à Montsaon, intervient avec des méthodes de piégeage mécaniques traditionnelles, 100 % écologiques et efficaces."
      expertise="Nos taupiers expérimentés traitent jardins de particuliers, parcs communaux et terrains sportifs à Arc-en-Barrois et ses environs. Aucun produit chimique n'est utilisé : uniquement des pièges mécaniques professionnels positionnés dans les galeries actives."
      method="Repérage des galeries principales sur votre terrain à Arc-en-Barrois par sondage. Pose de pièges mécaniques aux points stratégiques. Contrôle régulier et ajustement des positions. Conseils de prévention pour protéger durablement vos espaces verts."
      cta="Taupes à Arc-en-Barrois ? Appelez G&F Nuisibles au 07.65.25.67.92 pour un piégeage professionnel garanti et écologique."
    />
  </>
  );
};

export default TaupesArcEnBarrois;
