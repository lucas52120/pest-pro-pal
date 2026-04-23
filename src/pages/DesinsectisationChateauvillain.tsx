import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation à Châteauvillain en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Cafards, punaises à Châteauvillain ? G&F Nuisibles, désinsectisation pro en Haute-Marne 52. Traitement efficace garanti.";

const DesinsectisationChateauvillain = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Châteauvillain"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="INVASION D'INSECTES À CHÂTEAUVILLAIN ?"
        serviceCallSubtitle="G&F NUISIBLES ÉLIMINE TOUS LES INSECTES NUISIBLES !"
        intro="À Châteauvillain, cafards, punaises de lit, puces et autres insectes nuisibles peuvent rapidement envahir votre logement ou vos locaux. G&F Nuisibles vous propose des solutions de désinsectisation professionnelles, efficaces et durables."
        expertise="G&F Nuisibles intervient à Châteauvillain et en Haute-Marne contre tous les insectes nuisibles : cafards, punaises de lit, puces, fourmis, mites. Diagnostic précis et traitement ciblé pour chaque situation."
        method="Inspection approfondie pour identifier les espèces et les foyers. Application de traitements professionnels (gel, pulvérisation, nébulisation) adaptés à chaque insecte. Suivi post-traitement pour garantir l'éradication complète."
        cta="Invasion d'insectes à Châteauvillain ? Contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic gratuit."
      />
    </>
  );
};

export default DesinsectisationChateauvillain;
