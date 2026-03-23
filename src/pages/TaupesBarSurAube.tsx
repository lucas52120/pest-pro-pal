import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupes à Bar-sur-Aube dans l'Aube 10 | G&F Nuisibles";
const DESCRIPTION = "Taupinières à Bar-sur-Aube ? G&F Nuisibles intervient dans l'Aube 10 pour piéger les taupes sans chimie. Résultat garanti 7j/7.";

const TaupesBarSurAube = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
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
        cta="Libérez votre terrain des taupes à Bar-sur-Aube. Contactez le 07.88.17.45.86 pour un piégeage professionnel garanti."
      />
    </>
  );
};

export default TaupesBarSurAube;
