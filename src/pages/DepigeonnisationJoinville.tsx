import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Joinville en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Pigeons à Joinville ? G&F Nuisibles, expert en dépigeonnage en Haute-Marne 52, protège vos bâtiments durablement. Diagnostic gratuit 7j/7.";

const DepigeonnisationJoinville = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
    </Helmet>
    <CityServicePage
      city="Joinville"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="PIGEONS ENVAHISSANTS À JOINVILLE ?"
      serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS BÂTIMENTS DURABLEMENT !"
      intro="À Joinville, les pigeons colonisent toitures, balcons et façades, provoquant salissures et dégradations. G&F Nuisibles met en place des solutions anti-pigeons professionnelles : filets, pics, fil tendu et systèmes de dissuasion adaptés à chaque configuration."
      expertise="Notre expertise en Haute-Marne nous permet d'intervenir sur tous types de bâtiments à Joinville : immeubles, commerces, monuments et habitations. Nous privilégions les méthodes non-létales et durables."
      method="Analyse du site et identification des zones de perchage et nidification. Pose de dispositifs anti-pigeons adaptés (pics, filets, fil tendu). Décontamination des surfaces souillées par les fientes. Garantie d'efficacité."
      cta="Pigeons à Joinville ? Contactez G&F Nuisibles au 07.88.17.45.86 pour une dépigeonnisation professionnelle garantie."
    />
  </>
);

export default DepigeonnisationJoinville;
