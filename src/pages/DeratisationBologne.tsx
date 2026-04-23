import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Bologne en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Rats à Bologne ? G&F Nuisibles, expert dératisation en Haute-Marne, intervient 7j/7. Diagnostic gratuit et résultat garanti.";

const DeratisationBologne = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.gf-nuisibles.fr/#organization",
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
        "name": TITLE,
        "url": "https://www.gf-nuisibles.fr/deratisation-bologne",
        "description": DESCRIPTION,
        "provider": { "@id": "https://www.gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Bologne" }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://www.gf-nuisibles.fr/deratisation-bologne" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Bologne"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS À BOLOGNE ?"
        serviceCallSubtitle="G&F NUISIBLES, VOTRE EXPERT EN DÉRATISATION !"
        intro="À Bologne, les infestations de rongeurs touchent aussi bien les particuliers que les professionnels. Nos techniciens certifiés interviennent pour éliminer rats et souris avec des méthodes éprouvées et respectueuses de l'environnement."
        expertise="Nous intervenons chez les particuliers, entreprises et collectivités de Bologne et ses environs. Notre expertise couvre toutes les espèces de rongeurs présentes en Haute-Marne, avec des protocoles conformes aux normes sanitaires."
        method="Diagnostic complet des lieux, identification des points d'entrée et du niveau d'infestation. Mise en place de dispositifs professionnels : appâts sécurisés, pièges, obturation des accès. Suivi et contrôle post-intervention garantis."
        cta="Protégez votre habitat à Bologne. Appelez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit et une intervention rapide."
      />
    </>
  );
};

export default DeratisationBologne;
