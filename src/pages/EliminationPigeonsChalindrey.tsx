import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Chalindrey en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Retrouvez un toit sain à Chalindrey. Nos experts interviennent chez les particuliers pour l'éloignement durable des oiseaux. Intervention rapide 7j/7.";

const EliminationPigeonsChalindrey = () => {
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
        "url": "https://gf-nuisibles.fr/services/elimination-pigeons/chalindrey",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Chalindrey" }
      }
    ]
  };

  return (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://gf-nuisibles.fr/services/elimination-pigeons/chalindrey" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <CityServicePage
      city="Chalindrey"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="PIGEONS NICHÉS DANS VOS COMBLES À CHALINDREY ?"
      serviceCallSubtitle="G&F NUISIBLES SÉCURISE VOTRE TOITURE !"
      intro="À Chalindrey, les pigeons pénètrent dans les combles et greniers des maisons, détériorant l'isolation et souillant les espaces de stockage. Les particuliers sont souvent démunis face à ces invasions. G&F Nuisibles intervient avec des méthodes professionnelles adaptées."
      expertise="Notre savoir-faire couvre la sécurisation complète des toitures résidentielles : obturation des accès, filets de protection, pics anti-perchage. Des techniques non-létales qui respectent les volatiles tout en protégeant votre domicile."
      method="Inspection détaillée de votre toiture et de vos combles. Identification et fermeture de tous les points d'entrée. Pose de dispositifs de protection durable. Désinfection complète des zones contaminées."
      cta="Sécurisez vos combles à Chalindrey. Contactez G&F Nuisibles au 07.65.25.67.92 pour une intervention rapide."
    />
  </>
  );
};

export default EliminationPigeonsChalindrey;
