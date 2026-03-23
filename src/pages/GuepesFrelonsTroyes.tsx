import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Guêpes et frelons à Troyes dans l'Aube 10 | G&F Nuisibles";
const DESCRIPTION = "Destruction de nids de guêpes à Troyes. G&F Nuisibles, spécialiste dans l'Aube 10, intervient 7j/7. Appelez pour un devis gratuit.";

const GuepesFrelonsTroyes = () => {
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
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À TROYES ?"
        serviceCallSubtitle="G&F NUISIBLES NEUTRALISE LES NIDS EN TOUTE SÉCURITÉ !"
        intro="Chaque été, les nids de guêpes et de frelons se multiplient à Troyes. Sous les toits, dans les arbres ou les murs, ces insectes piqueurs menacent votre sécurité. G&F Nuisibles assure une destruction rapide et définitive."
        expertise="Expert en neutralisation d'hyménoptères en Aube (10), nous identifions l'espèce et adaptons notre protocole. Nos interventions respectent les normes de sécurité les plus strictes."
        method="Localisation précise du nid et identification de l'espèce. Traitement ciblé par injection d'insecticide homologué. Surveillance post-traitement pour garantir l'élimination totale."
        cta="Guêpes ou frelons à Troyes ? Contactez le 07.88.17.45.86 pour une neutralisation rapide et sécurisée."
      />
    </>
  );
};

export default GuepesFrelonsTroyes;
