import { Bug } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImage from "@/assets/service-desinsectisation.jpg";

const Desinsectisation = () => (
  <ServicePageLayout
    icon={<Bug className="h-8 w-8" />}
    title="Désinsectisation"
    subtitle="Traitement professionnel contre cafards, punaises de lit et blattes."
    heroImage={heroImage}
    sidebarImage={heroImage}
    serviceCallTitle="VOTRE LOGEMENT OU LOCAL PROFESSIONNEL SUBIT UNE INVASION D'INSECTES NUISIBLES ?"
    serviceCallSubtitle="CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DE LA DÉSINSECTISATION !"
    problem="Des insectes nuisibles envahissent votre logement ou vos locaux ? Cafards, punaises de lit, blattes... Ces parasites se reproduisent rapidement et peuvent contaminer votre environnement."
    expertise="FG Nuisibles utilise des traitements professionnels adaptés à chaque type d'insecte. Nos solutions sont efficaces, durables et respectueuses de votre santé."
    method="Inspection approfondie pour identifier l'espèce et les zones infestées, puis application de traitements ciblés (gel, pulvérisation, nébulisation). Un suivi post-traitement est assuré."
    engagement="Discrétion totale pour les professionnels (hôtels, restaurants, collectivités). Véhicules non logotés sur demande. Garantie de résultat."
  />
);

export default Desinsectisation;
