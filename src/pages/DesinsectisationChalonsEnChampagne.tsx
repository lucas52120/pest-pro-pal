import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation à Châlons-en-Champagne dans la Marne 51 | | G&F Nuisibles";
const DESCRIPTION = "Problème d'insectes à Châlons-en-Champagne ? G&F Nuisibles intervient rapidement dans la Marne 51. Traitement certifié, résultat garanti 7j/7.";

const DesinsectisationChalonsEnChampagne = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Châlons-en-Champagne"
        department="Marne (51)"
        serviceTitle={TITLE}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="INVASION D'INSECTES À CHÂLONS-EN-CHAMPAGNE ?"
        serviceCallSubtitle="G&F NUISIBLES ÉLIMINE TOUS LES INSECTES NUISIBLES !"
        intro="À Châlons-en-Champagne, les infestations d'insectes sont fréquentes et peuvent vite devenir incontrôlables. Blattes, mites, punaises ou chenilles processionnaires, G&F Nuisibles dispose des solutions professionnelles pour chaque situation."
        expertise="Spécialiste de la lutte anti-insectes en Marne (51), notre équipe combine expertise terrain et produits de dernière génération. Chaque opération est adaptée à l'espèce ciblée et à la configuration des lieux."
        method="Inspection minutieuse et identification des foyers. Application de traitements professionnels : gel appât, pulvérisation ciblée ou fumigation. Plan de prévention personnalisé et contrôle de suivi."
        cta="Débarrassez-vous des insectes à Châlons-en-Champagne. Appelez le 07.88.17.45.86 pour un diagnostic gratuit et une intervention efficace."
      />
    </>
  );
};

export default DesinsectisationChalonsEnChampagne;
