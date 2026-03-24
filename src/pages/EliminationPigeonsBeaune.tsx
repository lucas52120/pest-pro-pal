import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Beaune en Côte-d'Or 21 | G&F Nuisibles";
const DESCRIPTION = "Retrouvez un toit sain à Beaune. Nos experts interviennent chez les particuliers pour l'éloignement durable des oiseaux. Intervention rapide 7j/7.";

const EliminationPigeonsBeaune = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
    </Helmet>
    <CityServicePage
      city="Beaune"
      department="Côte-d'Or (21)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="PIGEONS NICHÉS SOUS VOTRE TOITURE À BEAUNE ?"
      serviceCallSubtitle="G&F NUISIBLES SÉCURISE VOTRE MAISON !"
      intro="À Beaune, les pigeons pénètrent dans les combles et sous les tuiles des habitations, provoquant des dégâts sur la charpente et l'isolation. Les particuliers subissent aussi les nuisances olfactives et sonores. G&F Nuisibles intervient pour sécuriser votre domicile."
      expertise="Notre savoir-faire en Côte-d'Or nous permet de traiter efficacement les invasions résidentielles. Obturation des accès, pose de filets et pics anti-perchage, le tout dans le respect de l'architecture locale et des volatiles."
      method="Inspection approfondie de votre toiture et de vos combles. Fermeture de tous les points d'entrée utilisés par les pigeons. Installation de dispositifs de protection durable. Décontamination complète des zones souillées."
      cta="Sécurisez votre toiture à Beaune. Contactez G&F Nuisibles au 07.88.17.45.86 pour une intervention rapide."
    />
  </>
);

export default EliminationPigeonsBeaune;
