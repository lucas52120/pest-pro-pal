import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Langres en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Pigeons à Langres ? G&F Nuisibles, expert en dépigeonnage en Haute-Marne 52, protège vos bâtiments durablement. Diagnostic gratuit 7j/7.";

const DepigeonnisationLangres = () => {
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
        "url": "https://www.gf-nuisibles.fr/services/depigeonnisation/langres",
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
        <link rel="canonical" href="https://www.gf-nuisibles.fr/services/depigeonnisation/langres" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <CityServicePage
      city="Langres"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="PIGEONS ENVAHISSANTS À LANGRES ?"
      serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS BÂTIMENTS DURABLEMENT !"
      intro="À Langres, les pigeons colonisent toitures, balcons et façades, provoquant salissures et dégradations. G&F Nuisibles met en place des solutions anti-pigeons professionnelles : filets, pics, fil tendu et systèmes de dissuasion adaptés à chaque configuration."
      expertise="Notre expertise en Haute-Marne nous permet d'intervenir sur tous types de bâtiments à Langres : immeubles, commerces, monuments et habitations. Nous privilégions les méthodes non-létales et durables."
      method="Analyse du site et identification des zones de perchage et nidification. Pose de dispositifs anti-pigeons adaptés (pics, filets, fil tendu). Décontamination des surfaces souillées par les fientes. Garantie d'efficacité."
      cta="Pigeons à Langres ? Contactez G&F Nuisibles au 07.65.25.67.92 pour une dépigeonnisation professionnelle garantie."
    />
  </>
  );
};

export default DepigeonnisationLangres;
