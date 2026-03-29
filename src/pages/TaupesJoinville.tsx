import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupes à Joinville en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Taupes dans votre jardin à Joinville ? G&F Nuisibles, taupier professionnel en Haute-Marne 52. Piégeage efficace et écologique, devis gratuit.";

const TaupesJoinville = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
    </Helmet>
    <CityServicePage
      city="Joinville"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Target className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="TAUPES DANS VOTRE JARDIN À JOINVILLE ?"
      serviceCallSubtitle="G&F NUISIBLES, TAUPIER PROFESSIONNEL EN HAUTE-MARNE !"
      intro="À Joinville, les taupes dégradent pelouses, jardins et espaces verts avec leurs galeries souterraines et monticules de terre. G&F Nuisibles intervient avec des méthodes de piégeage traditionnelles, efficaces et respectueuses de l'environnement."
      expertise="Nos taupiers expérimentés interviennent à Joinville et dans toute la Haute-Marne. Nous traitons jardins de particuliers, parcs, terrains de sport et exploitations agricoles sans aucun produit chimique."
      method="Repérage des galeries actives et évaluation de l'étendue de l'infestation. Pose de pièges mécaniques professionnels dans les galeries principales. Contrôle régulier et retrait des captures. Conseils de prévention."
      cta="Taupes à Joinville ? Appelez G&F Nuisibles au 07.88.17.45.86 pour un piégeage professionnel garanti."
    />
  </>
);

export default TaupesJoinville;
