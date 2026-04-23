import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Bologne en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Besoin d'une élimination de pigeons à Bologne ? Protégez votre façade et votre santé. G&F Nuisibles : pics et répulsifs spécial particuliers.";

const EliminationPigeonsBologne = () => {
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
        "url": "https://www.gf-nuisibles.fr/services/elimination-pigeons/bologne",
        "name": TITLE,
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
        <link rel="canonical" href="https://www.gf-nuisibles.fr/services/elimination-pigeons/bologne" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <CityServicePage
      city="Bologne"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="VOTRE MAISON EST ENVAHIE PAR LES PIGEONS À BOLOGNE ?"
      serviceCallSubtitle="G&F NUISIBLES ÉLIMINE LES NUISANCES DURABLEMENT !"
      intro="À Bologne, les pigeons détériorent les façades des pavillons et créent un environnement insalubre avec leurs déjections. Les particuliers constatent des dégâts sur leur crépi, leurs volets et leurs gouttières. G&F Nuisibles intervient pour protéger votre habitation."
      expertise="Notre expertise cible les besoins des particuliers : protection de façade par pics inox, répulsifs discrets pour balcons, filets pour combles et greniers. Chaque solution préserve l'apparence de votre maison tout en repoussant les volatiles."
      method="Évaluation complète de votre pavillon et identification des zones à risque. Pose de dispositifs anti-pigeons adaptés à l'architecture de votre maison. Nettoyage des surfaces dégradées. Garantie de résultat pour votre sérénité."
      cta="Protégez votre façade à Bologne. Contactez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit."
    />
  </>
  );
};

export default EliminationPigeonsBologne;
