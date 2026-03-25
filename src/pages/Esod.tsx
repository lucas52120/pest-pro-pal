import { ShieldAlert } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImage from "@/assets/service-esod.jpg";

const Esod = () => (
  <>
    <Helmet>
      <title>Régulation des espèces ESOD Haute-Marne 52 | GF Nuisibles</title>
      <meta name="description" content="Dégâts de fouine, loir ou ragondin ? GF Nuisibles régule les ESOD en Haute-Marne. Pros & particuliers, diagnostic et devis GRATUIT 7j/7. Appelez-nous !" />
    </Helmet>
    <ServicePageLayout
    icon={<ShieldAlert className="h-8 w-8" />}
    title="Régulation des animaux classés ESOD"
    subtitle="Gestion et régulation des Espèces Susceptibles d'Occasionner des Dégâts : ragondins, renards, corneilles, pies et autres."
    heroImage={heroImage}
    sidebarImage={heroImage}
    serviceCallTitle="VOUS SUBISSEZ DES DÉGÂTS CAUSÉS PAR DES ANIMAUX CLASSÉS ESOD ?"
    serviceCallSubtitle="CONTACTEZ GF NUISIBLES, VOTRE SPÉCIALISTE DE LA RÉGULATION DES ESPÈCES NUISIBLES !"
    problem="Ragondins qui détériorent les berges, renards qui s'attaquent aux élevages, corneilles et pies qui ravagent les cultures… Les animaux classés ESOD (Espèces Susceptibles d'Occasionner des Dégâts) peuvent causer des dommages considérables aux exploitations agricoles, aux infrastructures hydrauliques et aux propriétés privées."
    expertise="GF Nuisibles est habilité à intervenir dans le cadre réglementaire strict de la régulation des ESOD. Nous maîtrisons les techniques de piégeage agréées et respectons scrupuleusement la législation en vigueur (arrêtés préfectoraux, périodes autorisées, méthodes homologuées)."
    method="Diagnostic terrain pour identifier les espèces et évaluer l'ampleur des dégâts, mise en place de dispositifs de piégeage conformes à la réglementation, relevés réguliers des pièges, compte-rendu d'intervention et déclaration auprès des autorités compétentes."
    engagement="Intervention sur devis après évaluation sur site. Nous accompagnons les particuliers, agriculteurs, collectivités et gestionnaires d'espaces naturels sur l'ensemble de la Haute-Marne (52) et départements limitrophes."
  />
);

export default Esod;
