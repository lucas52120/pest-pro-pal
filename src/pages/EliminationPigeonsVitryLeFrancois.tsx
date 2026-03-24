import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Vitry-le-François dans la Marne 51 | G&F Nuisibles";
const DESCRIPTION = "Stop aux nuisances des pigeons dans votre jardin ou terrasse à Vitry-le-François. Solutions de protection efficaces pour votre habitat. Diagnostic offert.";

const EliminationPigeonsVitryLeFrancois = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
    </Helmet>
    <CityServicePage
      city="Vitry-le-François"
      department="Marne (51)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="PIGEONS DANS VOTRE JARDIN À VITRY-LE-FRANÇOIS ?"
      serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOTRE ESPACE DE VIE !"
      intro="À Vitry-le-François, les pigeons envahissent les jardins et terrasses des particuliers, rendant les espaces extérieurs impraticables. Leurs fientes souillent le mobilier, les dalles et les plantations. G&F Nuisibles vous aide à reconquérir votre extérieur."
      expertise="Nous proposons des solutions sur mesure pour les habitations de la Marne : répulsifs pour terrasses et jardins, filets pour balcons et pergolas, pics pour appuis de fenêtres. Chaque dispositif est choisi pour s'intégrer discrètement à votre habitat."
      method="Analyse des zones de passage et de perchage autour de votre propriété. Installation de protections ciblées. Nettoyage et assainissement des surfaces touchées par les déjections. Conseils pour prévenir tout retour."
      cta="Profitez de votre terrasse à Vitry-le-François. Appelez G&F Nuisibles au 07.88.17.45.86 pour un diagnostic offert."
    />
  </>
);

export default EliminationPigeonsVitryLeFrancois;
