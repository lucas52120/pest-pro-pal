import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupes à Beaune en Côte-d'Or 21 | G&F Nuisibles";
const DESCRIPTION = "Taupinières à Beaune ? G&F Nuisibles intervient en Côte-d'Or 21 pour piéger les taupes sans chimie. Résultat garanti 7j/7.";

const TaupesBeaune = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Beaune"
        department="Côte-d'Or (21)"
        serviceTitle={TITLE}
        icon={<Target className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="TAUPES DANS VOTRE JARDIN À BEAUNE ?"
        serviceCallSubtitle="G&F NUISIBLES ÉLIMINE LES TAUPES EFFICACEMENT !"
        intro="À Beaune, les taupes sont un fléau pour les jardins, terrains de sport et espaces paysagers. Leurs galeries fragilisent le sol et multiplient les taupinières disgracieuses. G&F Nuisibles agit vite et proprement."
        expertise="Notre expertise de terrain en Côte-d'Or (21) nous permet de localiser rapidement les galeries actives. Nous privilégions le piégeage mécanique, une méthode écologique et sans danger pour les autres espèces."
        method="Cartographie des galeries et identification des passages principaux. Pose stratégique de pièges mécaniques certifiés. Visites de contrôle régulières jusqu'à élimination complète."
        cta="Libérez votre terrain des taupes à Beaune. Contactez le 07.88.17.45.86 pour un piégeage professionnel garanti."
      />
    </>
  );
};

export default TaupesBeaune;
