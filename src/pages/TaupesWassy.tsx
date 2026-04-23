import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupes à Wassy en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Taupes à Wassy ? G&F Nuisibles, taupier professionnel en Haute-Marne 52. Piégeage efficace, devis gratuit.";

const TaupesWassy = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Wassy"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Target className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="TAUPES DANS VOTRE JARDIN À WASSY ?"
        serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS ESPACES VERTS !"
        intro="À Wassy, les taupes ravagent pelouses et jardins avec leurs galeries souterraines. G&F Nuisibles intervient avec des méthodes de piégeage professionnel pour éliminer ces nuisibles et préserver vos espaces verts."
        expertise="G&F Nuisibles intervient à Wassy et en Haute-Marne pour le piégeage professionnel des taupes. Nos taupiers expérimentés traitent jardins, parcs, terrains de sport et exploitations agricoles."
        method="Repérage des galeries actives et évaluation de l'étendue de l'infestation. Pose de pièges professionnels dans les galeries principales. Contrôle régulier et retrait des captures. Conseils de prévention."
        cta="Taupes dans votre jardin à Wassy ? Contactez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit."
      />
    </>
  );
};

export default TaupesWassy;
