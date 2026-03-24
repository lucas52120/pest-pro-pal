import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Châtillon-sur-Seine en Côte-d'Or 21 | G&F Nuisibles";
const DESCRIPTION = "Stop aux nuisances des pigeons dans votre jardin ou terrasse à Châtillon-sur-Seine. Solutions de protection efficaces pour votre habitat. Diagnostic offert.";

const EliminationPigeonsChatillonSurSeine = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
    </Helmet>
    <CityServicePage
      city="Châtillon-sur-Seine"
      department="Côte-d'Or (21)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="PIGEONS DANS VOTRE JARDIN À CHÂTILLON-SUR-SEINE ?"
      serviceCallSubtitle="G&F NUISIBLES VOUS REND VOTRE ESPACE EXTÉRIEUR !"
      intro="À Châtillon-sur-Seine, les pigeons envahissent les jardins et terrasses des particuliers, souillant le mobilier et les espaces de détente. Les familles ne peuvent plus profiter sereinement de leur extérieur. G&F Nuisibles offre des solutions de protection efficaces."
      expertise="Nous protégeons votre espace de vie extérieur avec des dispositifs adaptés : répulsifs pour terrasses, filets pour pergolas et balcons, pics discrets sur les murets. Retrouvez un jardin propre et accueillant pour votre famille."
      method="Évaluation des habitudes des pigeons autour de votre propriété. Installation de protections ciblées sur jardin, terrasse et façade. Nettoyage des surfaces contaminées. Conseils personnalisés pour maintenir l'efficacité dans le temps."
      cta="Récupérez votre jardin à Châtillon-sur-Seine. Appelez G&F Nuisibles au 07.88.17.45.86 pour un diagnostic offert."
    />
  </>
);

export default EliminationPigeonsChatillonSurSeine;
