import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Vittel dans les Vosges 88 | G&F Nuisibles";
const DESCRIPTION = "Besoin d'une élimination de pigeons à Vittel ? Protégez votre façade et votre santé. G&F Nuisibles : pics et répulsifs spécial particuliers.";

const EliminationPigeonsVittel = () => {
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
        "url": "https://www.gf-nuisibles.fr/services/elimination-pigeons/vittel",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://www.gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Vittel" }
      }
    ]
  };

  return (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://www.gf-nuisibles.fr/services/elimination-pigeons/vittel" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <CityServicePage
      city="Vittel"
      department="Vosges (88)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="VOTRE MAISON SUBIT LES PIGEONS À VITTEL ?"
      serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOTRE HABITAT DURABLEMENT !"
      intro="À Vittel, les pigeons dégradent les façades et toitures des maisons avec leurs fientes corrosives. Les particuliers constatent des salissures sur leurs volets, balcons et terrasses. G&F Nuisibles apporte une solution professionnelle pour protéger votre habitation."
      expertise="Spécialistes de l'éloignement des pigeons chez les particuliers dans les Vosges, nous installons des pics inox discrets, des répulsifs efficaces et des filets de protection. Chaque dispositif est adapté à votre maison pour un résultat esthétique et durable."
      method="Diagnostic complet de votre habitation pour repérer les zones de perchage. Pose de protections anti-pigeons sur façade, balcons et toiture. Nettoyage des surfaces dégradées par les fientes. Garantie d'efficacité pour votre tranquillité familiale."
      cta="Préservez votre maison à Vittel. Contactez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit."
    />
  </>
  );
};

export default EliminationPigeonsVittel;
