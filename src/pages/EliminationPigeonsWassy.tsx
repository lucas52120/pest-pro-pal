import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Wassy en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Retrouvez un toit sain à Wassy. Nos experts interviennent chez les particuliers pour l'éloignement durable des oiseaux. Intervention rapide 7j/7.";

const EliminationPigeonsWassy = () => {
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
        "url": "https://www.gf-nuisibles.fr/services/elimination-pigeons/wassy",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://www.gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Wassy" }
      }
    ]
  };

  return (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://www.gf-nuisibles.fr/services/elimination-pigeons/wassy" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <CityServicePage
      city="Wassy"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="PIGEONS INSTALLÉS SOUS VOTRE TOIT À WASSY ?"
      serviceCallSubtitle="G&F NUISIBLES SÉCURISE VOTRE HABITATION !"
      intro="À Wassy, les pigeons colonisent les combles et toitures des maisons, provoquant des dégâts sur l'isolation et la charpente. Leurs déjections sont un vecteur de maladies pour votre famille. G&F Nuisibles propose des solutions ciblées pour les particuliers."
      expertise="Experts de la protection des habitations, nous intervenons sur les toitures, greniers et façades pour éloigner durablement les pigeons. Nos techniques non-létales respectent les volatiles tout en sécurisant votre domicile."
      method="Inspection de votre toiture et des combles pour localiser les accès. Fermeture des entrées, pose de filets et pics anti-perchage. Désinfection des zones contaminées par les fientes. Suivi pour assurer la pérennité de la protection."
      cta="Sécurisez votre toiture à Wassy. Contactez G&F Nuisibles au 07.65.25.67.92 pour une intervention rapide."
    />
  </>
  );
};

export default EliminationPigeonsWassy;
