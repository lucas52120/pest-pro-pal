import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Semoutiers-Montsaon en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Pigeons chez vous à Semoutiers-Montsaon ? G&F Nuisibles, implanté sur la commune, protège votre habitation des fientes et nuisances. Devis gratuit.";

const EliminationPigeonsSemoutiersMontsaon = () => {
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
        "url": "https://gf-nuisibles.fr/services/elimination-pigeons/semoutiers-montsaon",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Semoutiers-Montsaon" }
      }
    ]
  };

  return (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://gf-nuisibles.fr/services/elimination-pigeons/semoutiers-montsaon" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <CityServicePage
      city="Semoutiers-Montsaon"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="DES PIGEONS ENVAHISSENT VOTRE MAISON À SEMOUTIERS-MONTSAON ?"
      serviceCallSubtitle="G&F NUISIBLES, VOTRE VOISIN EXPERT, VOUS PROTÈGE !"
      intro="À Semoutiers-Montsaon, les pigeons colonisent toitures, greniers et dépendances des habitations, laissant fientes et parasites. G&F Nuisibles, basé sur votre commune, intervient chez les particuliers pour installer des protections discrètes et efficaces."
      expertise="Nous équipons votre maison à Semoutiers-Montsaon de dispositifs anti-pigeons adaptés : filets sur les ouvertures, pics sur les corniches, répulsifs discrets. Des solutions non-létales pour retrouver la tranquillité de votre habitat et protéger la santé de votre famille."
      method="Visite à domicile à Semoutiers-Montsaon pour analyser les zones de nidification et de perchage. Pose de protections personnalisées sur toiture, balcons et façades. Nettoyage des surfaces souillées. Suivi pour garantir un résultat durable."
      cta="Retrouvez votre tranquillité à Semoutiers-Montsaon. Appelez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit."
    />
  </>
  );
};

export default EliminationPigeonsSemoutiersMontsaon;
