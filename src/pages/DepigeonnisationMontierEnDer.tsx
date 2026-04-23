import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Montier-en-Der en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Pigeons à Montier-en-Der ? G&F Nuisibles installe des protections anti-pigeons en Haute-Marne 52. Dépigeonnage durable garanti.";

const DepigeonnisationMontierEnDer = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Montier-en-Der"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="PIGEONS ENVAHISSANTS À MONTIER-EN-DER ?"
        serviceCallSubtitle="G&F NUISIBLES MET FIN AUX NUISANCES DES PIGEONS !"
        intro="À Montier-en-Der, les pigeons causent des dégradations importantes sur les bâtiments et posent des risques sanitaires. G&F Nuisibles vous propose des solutions de dépigeonnisation durables et respectueuses pour protéger vos structures."
        expertise="Nous intervenons à Montier-en-Der et dans toute la Haute-Marne pour la dépigeonnisation de bâtiments résidentiels, commerciaux et publics. Solutions durables adaptées à chaque configuration architecturale."
        method="Audit du site et évaluation de la population de pigeons. Installation de dispositifs anti-pigeons : pics, filets, fils tendus, répulsifs. Nettoyage et désinfection des zones souillées. Suivi de l'efficacité."
        cta="Problème de pigeons à Montier-en-Der ? Appelez G&F Nuisibles au 07.65.25.67.92 pour une solution durable."
      />
    </>
  );
};

export default DepigeonnisationMontierEnDer;
