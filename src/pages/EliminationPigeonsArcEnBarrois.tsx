import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Arc-en-Barrois en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Pigeons sur votre toiture à Arc-en-Barrois ? G&F Nuisibles protège votre habitation des fientes et nuisances. Pose de filets et pics, devis gratuit.";

const EliminationPigeonsArcEnBarrois = () => {
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
        "areaServed": { "@type": "City", "name": "Arc-en-Barrois" }
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
      city="Arc-en-Barrois"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="DES PIGEONS S'INSTALLENT CHEZ VOUS À ARC-EN-BARROIS ?"
      serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOTRE MAISON DURABLEMENT !"
      intro="À Arc-en-Barrois, les pigeons investissent toitures, balcons et greniers des habitations, laissant fientes et parasites. G&F Nuisibles intervient chez les particuliers pour installer des protections discrètes et efficaces qui vous rendront votre tranquillité."
      expertise="Nous équipons votre maison à Arc-en-Barrois de dispositifs anti-pigeons adaptés : filets sur les ouvertures, pics sur les corniches, répulsifs discrets. Des solutions non-létales pour protéger votre habitat et la santé de votre famille."
      method="Visite à domicile à Arc-en-Barrois pour analyser les zones de nidification et de perchage. Pose de protections personnalisées sur toiture, balcons et façades. Nettoyage et désinfection des surfaces souillées. Suivi pour garantir un résultat durable."
      cta="Retrouvez votre tranquillité à Arc-en-Barrois. Appelez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit à domicile."
    />
  </>
  );
};

export default EliminationPigeonsArcEnBarrois;
