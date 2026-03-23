import { Rat } from "lucide-react";
import CityServicePage from "@/components/CityServicePage";
import SEO from "@/components/SEO";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Joinville en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Besoin d'un dératiseur à Joinville ? G&F Nuisibles élimine rats et souris avec des méthodes sécurisées et durables. Diagnostic gratuit, expertise certifiée.";

const DeratisationJoinville = () => {

  return (
    <>
    <SEO title={TITLE} description={DESCRIPTION} />
    <CityServicePage
      city="Joinville"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Rat className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="DES RONGEURS S'INFILTRENT CHEZ VOUS À JOINVILLE ?"
      serviceCallSubtitle="FAITES CONFIANCE À G&F NUISIBLES POUR UNE DÉRATISATION EFFICACE !"
      intro="À Joinville, la proximité de la Marne et des zones boisées favorise la présence de rongeurs dans les habitations et les commerces. Rats et souris s'introduisent par les moindres fissures et se reproduisent à grande vitesse. G&F Nuisibles stoppe l'infestation avant qu'elle ne devienne incontrôlable."
      expertise="Avec une connaissance approfondie du terrain haut-marnais, nos techniciens adaptent chaque intervention aux particularités de votre bâtiment. Nous privilégions des méthodes respectueuses de l'environnement tout en garantissant une éradication totale des nuisibles."
      method="Visite technique pour localiser nids et chemins de passage. Installation de pièges et stations sécurisées dans les zones stratégiques. Fermeture des accès identifiés et remise d'un compte-rendu détaillé avec préconisations de prévention."
      cta="Rongeurs à Joinville ? Réagissez vite ! Contactez G&F Nuisibles au 07.88.17.45.86 — devis sans engagement et intervention sous 24h."
    />
    </>
  );
};

export default DeratisationJoinville;
