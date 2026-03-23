import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Guêpes et frelons à Nancy en Meurthe-et-Moselle 54 | G&F | G&F Nuisibles";
const DESCRIPTION = "Nid de guêpes ou frelons à Nancy ? G&F Nuisibles intervient en urgence en Meurthe-et-Moselle 54. Destruction sécurisée, devis gratuit.";

const GuepesFrelonsNancy = () => {
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
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À NANCY ?"
        serviceCallSubtitle="G&F NUISIBLES NEUTRALISE LES NIDS EN TOUTE SÉCURITÉ !"
        intro="Les guêpes et frelons représentent un danger réel à Nancy et ses alentours. Un nid mal situé peut provoquer des piqûres graves voire des réactions allergiques. G&F Nuisibles neutralise tous les nids en toute sécurité."
        expertise="Formés à la destruction de nids en hauteur, sous toiture et dans les cavités, nos techniciens interviennent avec des équipements de protection adaptés. Nous traitons guêpes communes, frelons européens et frelons asiatiques en Meurthe-et-Moselle (54)."
        method="Repérage du nid et sécurisation du périmètre. Application d'un insecticide professionnel directement dans le nid. Retrait du nid si accessible. Vérification de l'élimination complète de la colonie."
        cta="Un nid chez vous à Nancy ? Appelez immédiatement le 07.88.17.45.86 pour une intervention d'urgence."
      />
    </>
  );
};

export default GuepesFrelonsNancy;
