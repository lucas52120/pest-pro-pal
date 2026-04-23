import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupes à Bar-sur-Aube dans l'Aube 10 | G&F Nuisibles";
const DESCRIPTION = "Taupinières à Bar-sur-Aube ? G&F Nuisibles intervient dans l'Aube 10 pour piéger les taupes sans chimie. Résultat garanti 7j/7.";

const TaupesBarSurAube = () => {
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
        "areaServed": { "@type": "City", "name": "Bar-sur-Aube" }
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
        city="Bar-sur-Aube"
        department="Aube (10)"
        serviceTitle={TITLE}
        icon={<Target className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="TAUPES DANS VOTRE JARDIN À BAR-SUR-AUBE ?"
        serviceCallSubtitle="G&F NUISIBLES ÉLIMINE LES TAUPES EFFICACEMENT !"
        intro="À Bar-sur-Aube, les taupes sont un fléau pour les jardins, terrains de sport et espaces paysagers. Leurs galeries fragilisent le sol et multiplient les taupinières disgracieuses. G&F Nuisibles agit vite et proprement."
        expertise="Notre expertise de terrain en Aube (10) nous permet de localiser rapidement les galeries actives. Nous privilégions le piégeage mécanique, une méthode écologique et sans danger pour les autres espèces."
        method="Cartographie des galeries et identification des passages principaux. Pose stratégique de pièges mécaniques certifiés. Visites de contrôle régulières jusqu'à élimination complète."
        cta="Libérez votre terrain des taupes à Bar-sur-Aube. Contactez le 07.65.25.67.92 pour un piégeage professionnel garanti."
      />
    </>
  );
};

export default TaupesBarSurAube;
