import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Dijon en Côte-d'Or 21 | G&F Nuisibles";
const DESCRIPTION = "Pigeons sur votre balcon à Dijon ? G&F Nuisibles protège votre maison contre les nuisances sonores et les fientes. Devis gratuit et pose de filets.";

const EliminationPigeonsDijon = () => {
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
        "url": "https://www.gf-nuisibles.fr/services/elimination-pigeons/dijon",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://www.gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Dijon" }
      }
    ]
  };

  return (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://www.gf-nuisibles.fr/services/elimination-pigeons/dijon" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <CityServicePage
      city="Dijon"
      department="Côte-d'Or (21)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="DES PIGEONS ENVAHISSENT VOTRE HABITATION À DIJON ?"
      serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOTRE FOYER DURABLEMENT !"
      intro="À Dijon, les pigeons s'installent sur les balcons et rebords des immeubles et maisons de ville. Leurs fientes acides endommagent les garde-corps et les menuiseries, tandis que les nuisances sonores perturbent votre quotidien. G&F Nuisibles protège les particuliers efficacement."
      expertise="Experts de la protection résidentielle en Côte-d'Or, nous installons des dispositifs discrets pour tous types d'habitations : filets pour balcons, pics pour corniches, répulsifs pour terrasses. Des solutions non-létales pour le confort de votre famille."
      method="Visite à domicile pour identifier les zones de nidification et de perchage. Pose de protections personnalisées sur balcons, fenêtres et toiture. Nettoyage et désinfection des surfaces contaminées. Suivi garanti."
      cta="Protégez votre habitation à Dijon. Appelez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit à domicile."
    />
  </>
  );
};

export default EliminationPigeonsDijon;
