import { Rat } from "lucide-react";
import CityServicePage from "@/components/CityServicePage";
import SEO from "@/components/SEO";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Nogent en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Souris ou rats à Nogent ? Faites appel à G&F Nuisibles, votre expert en extermination de rongeurs en Haute-Marne. Solutions durables et devis sans engagement.";

const DeratisationNogent = () => {

  return (
    <>
    <SEO title={TITLE} description={DESCRIPTION} />
    <CityServicePage
      city="Nogent"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Rat className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="UNE INFESTATION DE RONGEURS À NOGENT ?"
      serviceCallSubtitle="G&F NUISIBLES ÉLIMINE RATS ET SOURIS AVEC EFFICACITÉ !"
      intro="Vous suspectez la présence de rongeurs dans votre maison ou votre commerce à Nogent ? Excréments, câbles grignotés ou bruits nocturnes sont autant de signaux d'alerte. G&F Nuisibles intervient rapidement pour stopper l'invasion avant qu'elle ne s'aggrave."
      expertise="Spécialistes de la dératisation en Haute-Marne, nous proposons des solutions sur mesure alliant efficacité et sécurité. Nos techniciens certifiés utilisent exclusivement des produits homologués, respectueux de l'environnement et sans risque pour vos proches."
      method="Repérage des points d'entrée et des nids. Mise en place de dispositifs adaptés : stations d'appâtage verrouillées, nasses et pièges mécaniques. Colmatage des accès et recommandations d'hygiène pour une protection longue durée."
      cta="Ne laissez pas les rongeurs s'installer à Nogent. Contactez G&F Nuisibles au 07.88.17.45.86 — intervention rapide 7j/7, diagnostic gratuit."
    />
  );
};

export default DeratisationNogent;
