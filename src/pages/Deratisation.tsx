import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImage from "@/assets/service-deratisation.jpg";

const Deratisation = () => (
  <>
    <Helmet>
      <title>Dératisation | Particuliers & Professionnels | GF Nuisibles</title>
      <meta name="description" content="Invasion de rongeurs ? GF Nuisibles intervient 7j/7 en Haute-Marne, Marne, Meuse, Vosges, Côte-d'Or, Aube. Pros ou particuliers. Diagnostic & devis GRATUIT !" />
    </Helmet>
    <ServicePageLayout
    icon={<Rat className="h-8 w-8" />}
    title="Dératisation"
    subtitle="Élimination rapide et efficace des rats, souris et rongeurs."
    heroImage={heroImage}
    sidebarImage={heroImage}
    serviceCallTitle="VOTRE LOGEMENT OU LOCAL PROFESSIONNEL SUBIT UNE INVASION DE RATS OU DE RONGEURS ?"
    serviceCallSubtitle="CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DE LA DÉRATISATION !"
    problem="Des bruits dans les cloisons ? Des traces de grignotage sur les câbles ou les emballages ? La présence de rongeurs est un risque sanitaire majeur et peut causer des dégâts matériels considérables."
    expertise="GF Nuisibles intervient rapidement pour éliminer rats et souris de votre habitation ou de vos locaux professionnels. Nos méthodes sont sécurisées, notamment pour les foyers avec enfants et animaux domestiques."
    method="Diagnostic complet pour identifier les points d'entrée et les zones de passage. Pose de dispositifs sécurisés (postes d'appâtage, pièges mécaniques). Rebouchage des accès et conseils de prévention."
    engagement="Discrétion assurée, véhicules non logotés si besoin. Garantie de résultat avec suivi post-intervention. Contrats d'entretien disponibles pour les professionnels."
  />
);

export default Deratisation;
