import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Montier-en-Der en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Pigeons sur votre balcon à Montier-en-Der ? G&F Nuisibles protège votre maison contre les nuisances sonores et les fientes. Devis gratuit.";

const EliminationPigeonsMontierEnDer = () => {
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
        "url": "https://gf-nuisibles.fr/services/elimination-pigeons/montier-en-der",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Montier-en-Der" }
      }
    ]
  };

  return (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://gf-nuisibles.fr/services/elimination-pigeons/montier-en-der" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <CityServicePage
      city="Montier-en-Der"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="PIGEONS GÊNANTS SUR VOTRE HABITATION À MONTIER-EN-DER ?"
      serviceCallSubtitle="G&F NUISIBLES INTERVIENT CHEZ LES PARTICULIERS !"
      intro="À Montier-en-Der, les pigeons perturbent le quotidien des habitants en souillant balcons, fenêtres et terrasses. Les nuisances sonores et les fientes acides dégradent progressivement votre habitation. G&F Nuisibles apporte une solution concrète aux particuliers."
      expertise="Nous protégeons votre maison avec des dispositifs adaptés : filets pour balcons et loggias, pics discrets sur les appuis de fenêtres, répulsifs pour terrasses. Des solutions pensées pour le confort de votre famille au quotidien."
      method="Visite de votre domicile pour cartographier les zones touchées. Installation sur mesure de protections anti-pigeons. Nettoyage et traitement des surfaces contaminées. Suivi personnalisé pour une efficacité dans la durée."
      cta="Libérez votre maison à Montier-en-Der. Appelez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit."
    />
  </>
  );
};

export default EliminationPigeonsMontierEnDer;
