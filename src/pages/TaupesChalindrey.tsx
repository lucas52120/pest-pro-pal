import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupes à Chalindrey en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Élimination des taupes à Chalindrey (52). G&F Nuisibles protège vos jardins. Intervention rapide et garantie.";

const TaupesChalindrey = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Chalindrey"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Target className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="TAUPES DANS VOTRE JARDIN À CHALINDREY ?"
        serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS ESPACES VERTS !"
        intro="Les taupes sont un fléau pour les jardins et terrains de Chalindrey. Monticules de terre, racines endommagées, pelouse détruite : G&F Nuisibles vous débarrasse des taupes rapidement et efficacement."
        expertise="G&F Nuisibles intervient à Chalindrey et en Haute-Marne pour le piégeage professionnel des taupes. Nos taupiers expérimentés traitent jardins, parcs, terrains de sport et exploitations agricoles."
        method="Repérage des galeries actives et évaluation de l'étendue de l'infestation. Pose de pièges professionnels dans les galeries principales. Contrôle régulier et retrait des captures. Conseils de prévention."
        cta="Taupes dans votre jardin à Chalindrey ? Contactez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit."
      />
    </>
  );
};

export default TaupesChalindrey;
