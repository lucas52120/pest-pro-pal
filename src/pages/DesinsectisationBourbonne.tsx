import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation à Bourbonne-les-Bains en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Désinsectisation à Bourbonne-les-Bains (52). G&F Nuisibles élimine insectes nuisibles : cafards, puces, punaises. Devis gratuit.";

const DesinsectisationBourbonne = () => {
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
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="INVASION D'INSECTES À BOURBONNE-LES-BAINS ?"
        serviceCallSubtitle="G&F NUISIBLES ÉLIMINE TOUS LES INSECTES NUISIBLES !"
        intro="Les insectes nuisibles sont un fléau courant à Bourbonne-les-Bains. Blattes, punaises, mites ou fourmis : quelle que soit l'espèce, G&F Nuisibles dispose des traitements adaptés pour les éliminer définitivement."
        expertise="G&F Nuisibles intervient à Bourbonne-les-Bains et en Haute-Marne contre tous les insectes nuisibles : cafards, punaises de lit, puces, fourmis, mites. Diagnostic précis et traitement ciblé pour chaque situation."
        method="Inspection approfondie pour identifier les espèces et les foyers. Application de traitements professionnels (gel, pulvérisation, nébulisation) adaptés à chaque insecte. Suivi post-traitement pour garantir l'éradication complète."
        cta="Invasion d'insectes à Bourbonne-les-Bains ? Contactez G&F Nuisibles au 07.88.17.45.86 pour un diagnostic gratuit."
      />
    </>
  );
};

export default DesinsectisationBourbonne;
