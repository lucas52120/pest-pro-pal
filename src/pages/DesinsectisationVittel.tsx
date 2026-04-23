import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation à Vittel dans les Vosges 88 | G&F Nuisibles";
const DESCRIPTION = "Cafards, punaises ou fourmis à Vittel ? G&F Nuisibles, désinsectiseur certifié dans les Vosges 88, éradique tous les insectes. Devis gratuit.";

const DesinsectisationVittel = () => {
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
        "url": "https://www.gf-nuisibles.fr/desinsectisation-vittel",
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
        <link rel="canonical" href="https://www.gf-nuisibles.fr/desinsectisation-vittel" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Vittel"
        department="Vosges (88)"
        serviceTitle={TITLE}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="INVASION D'INSECTES À VITTEL ?"
        serviceCallSubtitle="G&F NUISIBLES ÉLIMINE TOUS LES INSECTES NUISIBLES !"
        intro="Les insectes nuisibles envahissent de nombreux foyers et commerces à Vittel. Cafards, punaises de lit, fourmis ou puces : chaque espèce nécessite un traitement adapté. G&F Nuisibles vous débarrasse durablement de ces parasites."
        expertise="Nos techniciens qualifiés en Vosges (88) identifient précisément l'espèce et le niveau d'infestation avant d'agir. Nous utilisons des produits biocides homologués, efficaces et respectueux de votre environnement."
        method="Diagnostic approfondi pour déterminer l'espèce et les zones infestées. Traitement par pulvérisation, nébulisation ou gel selon la situation. Conseils de prévention et suivi post-intervention."
        cta="Insectes indésirables à Vittel ? Contactez le 07.65.25.67.92 pour une désinsectisation professionnelle garantie."
      />
    </>
  );
};

export default DesinsectisationVittel;
