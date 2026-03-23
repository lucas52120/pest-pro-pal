import { Rat } from "lucide-react";
import CityServicePage from "@/components/CityServicePage";
import SEO from "@/components/SEO";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Langres en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Problème de rats ou rongeurs à Langres ? G&F Nuisibles assure une lutte contre les rongeurs rapide et durable. Diagnostic gratuit, intervention 7j/7.";

const DeratisationLangres = () => {

  return (
    <CityServicePage
      city="Langres"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Rat className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="DES RONGEURS ONT ÉLU DOMICILE À LANGRES ?"
      serviceCallSubtitle="G&F NUISIBLES, EXPERT EN DÉRATISATION, INTERVIENT RAPIDEMENT !"
      intro="À Langres, les rongeurs trouvent refuge dans les bâtiments anciens et les caves voûtées de la vieille ville. Rats et souris rongent câbles électriques, isolants et denrées alimentaires, créant des risques d'incendie et de contamination. G&F Nuisibles vous débarrasse définitivement de ces nuisibles."
      expertise="Notre équipe connaît parfaitement les spécificités du bâti langrois. Nous employons des solutions certifiées : appâts sécurisés de dernière génération, pièges professionnels et obstruction des accès. Chaque intervention est adaptée à la configuration de votre habitation ou local."
      method="Inspection minutieuse pour cartographier l'infestation. Traitement ciblé avec des produits homologués et sans danger pour votre entourage. Visite de contrôle incluse pour garantir l'éradication complète et prévenir toute réapparition."
      cta="Stop aux rats à Langres ! Appelez G&F Nuisibles au 07.88.17.45.86 pour un devis gratuit et sans engagement. Expertise certifiée."
    />
  );
};

export default DeratisationLangres;
