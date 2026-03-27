import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Destruction de nids de Guêpes & Frelons à Chaumont";
const DESCRIPTION = "Nid de guêpes ou frelons à Chaumont ? G&F Nuisibles intervient en urgence en Haute-Marne 52. Destruction sécurisée, devis gratuit 7j/7.";

const GuepesFrelonsChaumont = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Chaumont"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À CHAUMONT ?"
        serviceCallSubtitle="G&F NUISIBLES INTERVIENT EN URGENCE POUR VOTRE SÉCURITÉ !"
        intro="À Chaumont, les guêpes et frelons s'installent sous les toitures, dans les combles ou les jardins. Leurs piqûres représentent un danger réel, surtout pour les personnes allergiques. G&F Nuisibles détruit les nids en toute sécurité avec un équipement professionnel adapté."
        expertise="Nos techniciens certifiés interviennent à Chaumont et dans toute la Haute-Marne pour la destruction de nids de guêpes, frelons européens et frelons asiatiques. Chaque intervention est sécurisée et garantie."
        method="Localisation précise du nid et évaluation des risques. Traitement par injection d'insecticide professionnel ou retrait mécanique. Vérification de l'élimination complète de la colonie. Conseils de prévention."
        cta="Nid de guêpes à Chaumont ? Appelez G&F Nuisibles au 07.88.17.45.86 pour une intervention rapide et sécurisée."
      />
    </>
  );
};

export default GuepesFrelonsChaumont;
