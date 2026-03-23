import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Bar-sur-Aube dans l'Aube 10 | G&F Nuisibles";
const DESCRIPTION = "Invasion de rongeurs à Bar-sur-Aube ? G&F Nuisibles éradique rats et souris dans l'Aube 10. Diagnostic offert, opération rapide 7j/7.";

const DeratisationBarSurAube = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Bar-sur-Aube"
        department="Aube (10)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS À BAR-SUR-AUBE ?"
        serviceCallSubtitle="G&F NUISIBLES : VOTRE EXPERT EN DÉRATISATION CERTIFIÉ !"
        intro="À Bar-sur-Aube, les rongeurs trouvent des conditions idéales pour proliférer. Que ce soit dans les habitations ou les commerces, une infestation non traitée peut causer des dégâts considérables. G&F Nuisibles propose une éradication complète et garantie."
        expertise="Spécialistes de la lutte anti-rongeurs en Aube (10), nos équipes utilisent des techniques éprouvées adaptées à chaque situation. Notre approche combine efficacité immédiate et prévention à long terme."
        method="Audit détaillé de votre site pour évaluer l'ampleur de l'infestation. Déploiement d'un dispositif multi-techniques : rodenticides sécurisés, pièges professionnels, colmatage des passages. Rapport et suivi systématique."
        cta="Ne laissez pas les rongeurs s'installer à Bar-sur-Aube. Appelez le 07.88.17.45.86 pour une expertise certifiée et un devis sans engagement."
      />
    </>
  );
};

export default DeratisationBarSurAube;
