import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Langres en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Retrouvez un toit sain à Langres. Nos experts interviennent chez les particuliers pour l'éloignement durable des oiseaux. Intervention rapide 7j/7.";

const EliminationPigeonsLangres = () => {
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
        "url": "https://www.gf-nuisibles.fr/services/elimination-pigeons/langres",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://www.gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Langres" }
      }
    ]
  };

  return (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://www.gf-nuisibles.fr/services/elimination-pigeons/langres" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <CityServicePage
      city="Langres"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="PIGEONS NICHÉS SOUS VOTRE TOITURE À LANGRES ?"
      serviceCallSubtitle="G&F NUISIBLES ÉLOIGNE LES VOLATILES DE VOTRE DOMICILE !"
      intro="À Langres, les pigeons colonisent les greniers, gouttières et toitures des habitations. Leurs déjections détériorent les matériaux et propagent des parasites dangereux pour votre santé. G&F Nuisibles offre aux particuliers une protection complète de leur domicile."
      expertise="Spécialistes de l'éloignement des pigeons chez les particuliers, nous sécurisons votre toiture et vos combles avec des techniques non-létales. Filets, pics et répulsifs préservent l'intégrité de votre maison et la santé de votre famille."
      method="Inspection complète de votre toiture et des accès utilisés par les volatiles. Obturation des entrées, pose de dispositifs anti-perchage, décontamination des zones touchées. Suivi post-intervention pour garantir votre tranquillité."
      cta="Libérez votre toit à Langres. Contactez G&F Nuisibles au 07.65.25.67.92 pour une intervention rapide chez vous."
    />
  </>
  );
};

export default EliminationPigeonsLangres;
