import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupes à Bourbonne-les-Bains en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Élimination des taupes à Bourbonne-les-Bains (52). G&F Nuisibles protège vos jardins. Intervention rapide et garantie.";

const TaupesBourbonne = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Bourbonne-les-Bains"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Target className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="TAUPES DANS VOTRE JARDIN À BOURBONNE-LES-BAINS ?"
        serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS ESPACES VERTS !"
        intro="Les taupes sont un fléau pour les jardins et terrains de Bourbonne-les-Bains. Monticules de terre, racines endommagées, pelouse détruite : G&F Nuisibles vous débarrasse des taupes rapidement et efficacement."
        expertise="G&F Nuisibles intervient à Bourbonne-les-Bains et en Haute-Marne pour le piégeage professionnel des taupes. Nos taupiers expérimentés traitent jardins, parcs, terrains de sport et exploitations agricoles."
        method="Repérage des galeries actives et évaluation de l'étendue de l'infestation. Pose de pièges professionnels dans les galeries principales. Contrôle régulier et retrait des captures. Conseils de prévention."
        cta="Taupes dans votre jardin à Bourbonne-les-Bains ? Contactez G&F Nuisibles au 07.88.17.45.86 pour un devis gratuit."
      />
    </>
  );
};

export default TaupesBourbonne;
