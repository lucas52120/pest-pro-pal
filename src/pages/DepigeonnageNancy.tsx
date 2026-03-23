import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnage à Nancy en Meurthe-et-Moselle 54 | G&F Nuisibles";
const DESCRIPTION = "Pigeons à Nancy ? G&F Nuisibles installe des solutions anti-pigeons durables en Meurthe-et-Moselle 54. Devis gratuit, intervention rapide.";

const DepigeonnageNancy = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Nancy"
        department="Meurthe-et-Moselle (54)"
        serviceTitle={TITLE}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="PIGEONS ENVAHISSANTS À NANCY ?"
        serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS BÂTIMENTS DURABLEMENT !"
        intro="Les pigeons causent des nuisances importantes à Nancy : fientes corrosives, dégradation des façades, risques sanitaires. G&F Nuisibles met en place des dispositifs professionnels pour éloigner durablement ces volatiles."
        expertise="Experts en dépigeonnage en Meurthe-et-Moselle (54), nous proposons des solutions adaptées à chaque type de bâtiment : pics anti-pigeons, filets de protection, systèmes de répulsion électrique et capture."
        method="Évaluation de la situation et cartographie des zones touchées. Installation de dispositifs anti-perchage et anti-nidification. Nettoyage et désinfection des zones souillées. Suivi de l'efficacité du dispositif."
        cta="Protégez vos bâtiments à Nancy. Appelez le 07.88.17.45.86 pour une solution anti-pigeons professionnelle et durable."
      />
    </>
  );
};

export default DepigeonnageNancy;
