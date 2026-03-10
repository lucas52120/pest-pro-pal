import { Rat } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const Deratisation = () => (
  <ServicePageLayout
    icon={<Rat className="h-8 w-8" />}
    title="Dératisation"
    subtitle="Élimination rapide et efficace des rats, souris et rongeurs."
    problem="Des bruits dans les cloisons ? Des traces de grignotage sur les câbles ou les emballages ? La présence de rongeurs est un risque sanitaire majeur et peut causer des dégâts matériels considérables."
    expertise="FG Nuisibles intervient rapidement pour éliminer rats et souris de votre habitation ou de vos locaux professionnels. Nos méthodes sont sécurisées, notamment pour les foyers avec enfants et animaux domestiques."
    method="Diagnostic complet pour identifier les points d'entrée et les zones de passage. Pose de dispositifs sécurisés (postes d'appâtage, pièges mécaniques). Rebouchage des accès et conseils de prévention."
    engagement="Discrétion assurée, véhicules non logotés si besoin. Garantie de résultat avec suivi post-intervention. Contrats d'entretien disponibles pour les professionnels."
  />
);

export default Deratisation;
