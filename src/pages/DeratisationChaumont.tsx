import { Rat } from "lucide-react";
import CityServicePage from "@/components/CityServicePage";
import SEO from "@/components/SEO";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Chaumont en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Rats ou souris à Chaumont ? G&F Nuisibles, dératiseur professionnel en Haute-Marne 52, intervient 7j/7 pour une extermination efficace. Devis gratuit.";

const DeratisationChaumont = () => {

  return (
    <>
    <SEO title={TITLE} description={DESCRIPTION} />
    <CityServicePage
      city="Chaumont"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Rat className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="INVASION DE RATS OU SOURIS À CHAUMONT ?"
      serviceCallSubtitle="CONTACTEZ G&F NUISIBLES, VOTRE DÉRATISEUR PROFESSIONNEL EN HAUTE-MARNE !"
      intro="Vous entendez des bruits dans vos cloisons ou constatez des traces de rongeurs à Chaumont ? Les rats et souris représentent un danger sanitaire et causent des dégâts matériels importants. G&F Nuisibles intervient rapidement sur Chaumont et ses environs pour éliminer durablement l'infestation."
      expertise="Forts de plusieurs années d'expérience en Haute-Marne, nous utilisons des techniques sécurisées adaptées à votre environnement : postes d'appâtage normés, pièges mécaniques et rebouchage des points d'entrée. Nos interventions sont compatibles avec la présence d'enfants et d'animaux domestiques."
      method="Diagnostic complet sur site pour identifier les zones de passage et points d'accès. Mise en place d'un plan de lutte personnalisé avec dispositifs sécurisés. Suivi post-intervention et conseils de prévention pour éviter toute récidive."
      cta="Contactez G&F Nuisibles dès maintenant pour un diagnostic gratuit à Chaumont. Intervention rapide 7j/7 — Appelez le 07.88.17.45.86."
    />
  );
};

export default DeratisationChaumont;
