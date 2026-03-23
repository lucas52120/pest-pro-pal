import { Rat } from "lucide-react";
import CityServicePage from "@/components/CityServicePage";
import SEO from "@/components/SEO";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Saint-Dizier en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Stop aux rats à Saint-Dizier ! G&F Nuisibles, dératiseur certifié en Haute-Marne 52, vous garantit une élimination totale. Intervention rapide 7j/7.";

const DeratisationSaintDizier = () => {

  return (
    <CityServicePage
      city="Saint-Dizier"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Rat className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="RATS OU SOURIS DANS VOS LOCAUX À SAINT-DIZIER ?"
      serviceCallSubtitle="G&F NUISIBLES VOUS APPORTE UNE SOLUTION PROFESSIONNELLE DE DÉRATISATION !"
      intro="Saint-Dizier, avec ses zones industrielles et résidentielles, offre un terrain propice aux infestations de rongeurs. Rats bruns, rats noirs ou souris domestiques prolifèrent vite et menacent votre santé comme vos installations. G&F Nuisibles vous propose une dératisation complète et garantie."
      expertise="Nous intervenons auprès des particuliers, entreprises, restaurants et collectivités de Saint-Dizier. Notre expertise couvre l'ensemble des espèces de rongeurs présentes en Haute-Marne, avec des protocoles conformes aux normes sanitaires en vigueur."
      method="Audit détaillé de votre site pour évaluer le niveau d'infestation. Déploiement d'un dispositif multi-techniques : appâts rodenticides sécurisés, pièges professionnels, obturation des passages. Rapport d'intervention et suivi de contrôle systématique."
      cta="Protégez votre habitat ou commerce à Saint-Dizier. Appelez G&F Nuisibles au 07.88.17.45.86 pour un devis gratuit et une expertise professionnelle certifiée."
    />
  );
};

export default DeratisationSaintDizier;
