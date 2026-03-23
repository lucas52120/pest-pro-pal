import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Troyes dans l'Aube 10 | G&F Nuisibles";
const DESCRIPTION = "Rats ou souris à Troyes ? G&F Nuisibles, dératiseur certifié dans l'Aube 10, élimine tous les rongeurs. Devis gratuit, intervention 7j/7.";

const DeratisationTroyes = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Troyes"
        department="Aube (10)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS À TROYES ?"
        serviceCallSubtitle="G&F NUISIBLES : VOTRE EXPERT EN DÉRATISATION CERTIFIÉ !"
        intro="Troyes et ses environs sont régulièrement touchés par des infestations de rongeurs. Rats bruns, souris ou mulots colonisent caves, greniers et locaux professionnels. G&F Nuisibles intervient rapidement pour une dératisation efficace et durable."
        expertise="Nos techniciens certifiés maîtrisent toutes les espèces de rongeurs présentes en Aube (10). Nous intervenons chez les particuliers, entreprises, restaurants et collectivités avec des protocoles conformes aux normes sanitaires."
        method="Inspection complète pour identifier les points d'entrée et le niveau d'infestation. Mise en place de postes d'appâtage sécurisés, pièges mécaniques et obturation des accès. Suivi de contrôle inclus."
        cta="Protégez votre habitat à Troyes. Contactez G&F Nuisibles au 07.88.17.45.86 pour un diagnostic gratuit et une intervention rapide."
      />
    </>
  );
};

export default DeratisationTroyes;
