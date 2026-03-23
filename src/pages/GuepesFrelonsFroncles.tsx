import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Guêpes & Frelons à Froncles en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Guêpes ou frelons à Froncles ? G&F Nuisibles, spécialiste Haute-Marne 52, neutralise les nids rapidement. Appelez-nous !";

const GuepesFrelonsFroncles = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Froncles"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À FRONCLES ?"
        serviceCallSubtitle="G&F NUISIBLES INTERVIENT EN URGENCE POUR VOTRE SÉCURITÉ !"
        intro="Chaque été, Froncles voit se multiplier les nids de guêpes et frelons asiatiques. Ne prenez aucun risque : G&F Nuisibles neutralise les colonies avec un équipement professionnel adapté et une intervention garantie."
        expertise="Nos techniciens qualifiés interviennent à Froncles et dans toute la Haute-Marne pour la destruction de nids de guêpes, frelons européens et frelons asiatiques. Intervention sécurisée, rapide et garantie."
        method="Repérage et évaluation du nid, sécurisation du périmètre, traitement par insecticide professionnel et retrait du nid. Intervention possible en hauteur et dans les zones difficiles d'accès."
        cta="Nid de guêpes ou frelons à Froncles ? Appelez G&F Nuisibles au 07.88.17.45.86 pour une intervention d'urgence."
      />
    </>
  );
};

export default GuepesFrelonsFroncles;
