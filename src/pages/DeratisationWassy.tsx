import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Wassy en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Stop aux rats à Wassy ! G&F Nuisibles, dératiseur certifié en Haute-Marne 52, élimine rongeurs. Intervention rapide 7j/7.";

const DeratisationWassy = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Wassy"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS À WASSY ?"
        serviceCallSubtitle="G&F NUISIBLES, VOTRE EXPERT EN DÉRATISATION !"
        intro="Wassy, commune de Haute-Marne, est régulièrement confrontée aux infestations de rongeurs. Rats et souris s'introduisent dans les habitations et commerces, causant dégâts et risques sanitaires. G&F Nuisibles intervient rapidement pour éradiquer le problème."
        expertise="Nous intervenons chez les particuliers, entreprises et collectivités de Wassy et ses environs. Notre expertise couvre toutes les espèces de rongeurs présentes en Haute-Marne, avec des protocoles conformes aux normes sanitaires."
        method="Diagnostic complet des lieux, identification des points d'entrée et du niveau d'infestation. Mise en place de dispositifs professionnels : appâts sécurisés, pièges, obturation des accès. Suivi et contrôle post-intervention garantis."
        cta="Protégez votre habitat à Wassy. Appelez G&F Nuisibles au 07.88.17.45.86 pour un devis gratuit et une intervention rapide."
      />
    </>
  );
};

export default DeratisationWassy;
