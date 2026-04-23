import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Châlons-en-Champagne dans la Marne 51 | G&F Nuisibles";
const DESCRIPTION = "Besoin d'une élimination de pigeons à Châlons-en-Champagne ? Protégez votre façade et votre santé. G&F Nuisibles : pics et répulsifs pour particuliers.";

const EliminationPigeonsChalonsEnChampagne = () => {
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
        "areaServed": { "@type": "City", "name": "Châlons-en-Champagne" }
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
      city="Châlons-en-Champagne"
      department="Marne (51)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="FAÇADE DÉGRADÉE PAR LES PIGEONS À CHÂLONS-EN-CHAMPAGNE ?"
      serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOTRE HABITATION !"
      intro="À Châlons-en-Champagne, les pigeons dégradent les façades et les balcons des habitations résidentielles. Les fientes acides attaquent les enduits et les menuiseries, diminuant la valeur de votre bien. G&F Nuisibles intervient pour préserver votre patrimoine immobilier."
      expertise="Notre équipe propose des interventions discrètes pour les maisons et appartements de Châlons : pics inox esthétiques, filets invisibles, répulsifs adaptés. Protégez votre façade et la santé de votre famille avec des méthodes éprouvées."
      method="Diagnostic de votre habitation pour évaluer les dégâts et les zones à risque. Installation de systèmes anti-pigeons sur façade, balcons et toiture. Remise en propreté des surfaces souillées. Garantie de résultat."
      cta="Préservez votre façade à Châlons-en-Champagne. Contactez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit."
    />
  </>
  );
};

export default EliminationPigeonsChalonsEnChampagne;
