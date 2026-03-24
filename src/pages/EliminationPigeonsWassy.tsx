import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Wassy en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Retrouvez un toit sain à Wassy. Nos experts interviennent chez les particuliers pour l'éloignement durable des oiseaux. Intervention rapide 7j/7.";

const EliminationPigeonsWassy = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
    </Helmet>
    <CityServicePage
      city="Wassy"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="PIGEONS INSTALLÉS SOUS VOTRE TOIT À WASSY ?"
      serviceCallSubtitle="G&F NUISIBLES SÉCURISE VOTRE HABITATION !"
      intro="À Wassy, les pigeons colonisent les combles et toitures des maisons, provoquant des dégâts sur l'isolation et la charpente. Leurs déjections sont un vecteur de maladies pour votre famille. G&F Nuisibles propose des solutions ciblées pour les particuliers."
      expertise="Experts de la protection des habitations, nous intervenons sur les toitures, greniers et façades pour éloigner durablement les pigeons. Nos techniques non-létales respectent les volatiles tout en sécurisant votre domicile."
      method="Inspection de votre toiture et des combles pour localiser les accès. Fermeture des entrées, pose de filets et pics anti-perchage. Désinfection des zones contaminées par les fientes. Suivi pour assurer la pérennité de la protection."
      cta="Sécurisez votre toiture à Wassy. Contactez G&F Nuisibles au 07.88.17.45.86 pour une intervention rapide."
    />
  </>
);

export default EliminationPigeonsWassy;
