import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Chalindrey en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Dératisation professionnelle à Chalindrey (52). G&F Nuisibles éradique rats et souris. Devis gratuit, intervention garantie.";

const DeratisationChalindrey = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Chalindrey"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS À CHALINDREY ?"
        serviceCallSubtitle="G&F NUISIBLES, VOTRE EXPERT EN DÉRATISATION !"
        intro="Les rongeurs prolifèrent dans les zones rurales et urbaines de Chalindrey. Rats bruns, souris domestiques et mulots menacent vos installations et votre santé. G&F Nuisibles vous garantit une dératisation efficace et durable."
        expertise="Nous intervenons chez les particuliers, entreprises et collectivités de Chalindrey et ses environs. Notre expertise couvre toutes les espèces de rongeurs présentes en Haute-Marne, avec des protocoles conformes aux normes sanitaires."
        method="Diagnostic complet des lieux, identification des points d'entrée et du niveau d'infestation. Mise en place de dispositifs professionnels : appâts sécurisés, pièges, obturation des accès. Suivi et contrôle post-intervention garantis."
        cta="Protégez votre habitat à Chalindrey. Appelez G&F Nuisibles au 07.88.17.45.86 pour un devis gratuit et une intervention rapide."
      />
    </>
  );
};

export default DeratisationChalindrey;
