import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Guêpes & Frelons à Montier-en-Der en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Nid de guêpes à Montier-en-Der ? G&F Nuisibles détruit nids de guêpes et frelons en Haute-Marne 52. Urgence 7j/7.";

const GuepesFrelonsMontierEnDer = () => {
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
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À MONTIER-EN-DER ?"
        serviceCallSubtitle="G&F NUISIBLES INTERVIENT EN URGENCE POUR VOTRE SÉCURITÉ !"
        intro="À Montier-en-Der, les nids de guêpes et de frelons représentent un danger réel pour les habitants. G&F Nuisibles intervient rapidement pour neutraliser et retirer les nids en toute sécurité, que ce soit chez vous ou dans vos locaux professionnels."
        expertise="Nos techniciens qualifiés interviennent à Montier-en-Der et dans toute la Haute-Marne pour la destruction de nids de guêpes, frelons européens et frelons asiatiques. Intervention sécurisée, rapide et garantie."
        method="Repérage et évaluation du nid, sécurisation du périmètre, traitement par insecticide professionnel et retrait du nid. Intervention possible en hauteur et dans les zones difficiles d'accès."
        cta="Nid de guêpes ou frelons à Montier-en-Der ? Appelez G&F Nuisibles au 07.88.17.45.86 pour une intervention d'urgence."
      />
    </>
  );
};

export default GuepesFrelonsMontierEnDer;
