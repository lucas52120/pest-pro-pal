import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation à Nancy en Meurthe-et-Moselle 54 | G&F Nuisibles";
const DESCRIPTION = "Problème d'insectes à Nancy ? G&F Nuisibles intervient rapidement en Meurthe-et-Moselle 54. Traitement certifié, résultat garanti 7j/7.";

const DesinsectisationNancy = () => {
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
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="INVASION D'INSECTES À NANCY ?"
        serviceCallSubtitle="G&F NUISIBLES ÉLIMINE TOUS LES INSECTES NUISIBLES !"
        intro="À Nancy, les infestations d'insectes sont fréquentes et peuvent vite devenir incontrôlables. Blattes, mites, punaises ou chenilles processionnaires, G&F Nuisibles dispose des solutions professionnelles pour chaque situation."
        expertise="Spécialiste de la lutte anti-insectes en Meurthe-et-Moselle (54), notre équipe combine expertise terrain et produits de dernière génération. Chaque opération est adaptée à l'espèce ciblée et à la configuration des lieux."
        method="Inspection minutieuse et identification des foyers. Application de traitements professionnels : gel appât, pulvérisation ciblée ou fumigation. Plan de prévention personnalisé et contrôle de suivi."
        cta="Débarrassez-vous des insectes à Nancy. Appelez le 07.88.17.45.86 pour un diagnostic gratuit et une intervention efficace."
      />
    </>
  );
};

export default DesinsectisationNancy;
