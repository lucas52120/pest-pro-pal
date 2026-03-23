import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Guêpes et frelons à Châlons-en-Champagne dans la Marne 51 | | G&F Nuisibles";
const DESCRIPTION = "Nid de guêpes ou frelons à Châlons-en-Champagne ? G&F Nuisibles intervient en urgence dans la Marne 51. Destruction sécurisée, devis gratuit.";

const GuepesFrelonsChalonsEnChampagne = () => {
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
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À CHÂLONS-EN-CHAMPAGNE ?"
        serviceCallSubtitle="G&F NUISIBLES NEUTRALISE LES NIDS EN TOUTE SÉCURITÉ !"
        intro="Les guêpes et frelons représentent un danger réel à Châlons-en-Champagne et ses alentours. Un nid mal situé peut provoquer des piqûres graves voire des réactions allergiques. G&F Nuisibles neutralise tous les nids en toute sécurité."
        expertise="Formés à la destruction de nids en hauteur, sous toiture et dans les cavités, nos techniciens interviennent avec des équipements de protection adaptés. Nous traitons guêpes communes, frelons européens et frelons asiatiques en Marne (51)."
        method="Repérage du nid et sécurisation du périmètre. Application d'un insecticide professionnel directement dans le nid. Retrait du nid si accessible. Vérification de l'élimination complète de la colonie."
        cta="Un nid chez vous à Châlons-en-Champagne ? Appelez immédiatement le 07.88.17.45.86 pour une intervention d'urgence."
      />
    </>
  );
};

export default GuepesFrelonsChalonsEnChampagne;
