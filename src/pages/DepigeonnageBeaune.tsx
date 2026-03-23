import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnage à Beaune en Côte-d'Or 21 | G&F Nuisibles";
const DESCRIPTION = "Pigeons à Beaune ? G&F Nuisibles installe des solutions anti-pigeons durables en Côte-d'Or 21. Devis gratuit, intervention rapide.";

const DepigeonnageBeaune = () => {
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
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="PIGEONS ENVAHISSANTS À BEAUNE ?"
        serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS BÂTIMENTS DURABLEMENT !"
        intro="Les pigeons causent des nuisances importantes à Beaune : fientes corrosives, dégradation des façades, risques sanitaires. G&F Nuisibles met en place des dispositifs professionnels pour éloigner durablement ces volatiles."
        expertise="Experts en dépigeonnage en Côte-d'Or (21), nous proposons des solutions adaptées à chaque type de bâtiment : pics anti-pigeons, filets de protection, systèmes de répulsion électrique et capture."
        method="Évaluation de la situation et cartographie des zones touchées. Installation de dispositifs anti-perchage et anti-nidification. Nettoyage et désinfection des zones souillées. Suivi de l'efficacité du dispositif."
        cta="Protégez vos bâtiments à Beaune. Appelez le 07.88.17.45.86 pour une solution anti-pigeons professionnelle et durable."
      />
    </>
  );
};

export default DepigeonnageBeaune;
