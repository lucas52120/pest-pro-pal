import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Nancy en Meurthe-et-Moselle 54 | G&F Nuisibles";
const DESCRIPTION = "Retrouvez un toit sain à Nancy. Nos experts interviennent chez les particuliers pour l'éloignement durable des oiseaux. Intervention rapide 7j/7.";

const EliminationPigeonsNancy = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
    </Helmet>
    <CityServicePage
      city="Nancy"
      department="Meurthe-et-Moselle (54)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="PIGEONS SUR VOTRE TOITURE À NANCY ?"
      serviceCallSubtitle="G&F NUISIBLES SÉCURISE VOTRE DOMICILE !"
      intro="À Nancy, les pigeons colonisent les toits et greniers des habitations, causant des infiltrations et des dégâts sur l'isolation. Les particuliers sont confrontés à des nuisances sanitaires et olfactives. G&F Nuisibles intervient pour sécuriser votre domicile en Meurthe-et-Moselle."
      expertise="Notre expertise couvre la protection complète des habitations résidentielles : sécurisation des toitures, obturation des accès aux combles, pose de dispositifs anti-perchage. Des solutions durables pour la tranquillité de votre famille."
      method="Inspection de votre toiture et des combles pour localiser les entrées utilisées par les pigeons. Fermeture des accès et pose de protections anti-perchage. Décontamination des zones touchées. Suivi pour garantir l'efficacité dans le temps."
      cta="Sécurisez votre toit à Nancy. Contactez G&F Nuisibles au 07.88.17.45.86 pour une intervention rapide chez vous."
    />
  </>
);

export default EliminationPigeonsNancy;
