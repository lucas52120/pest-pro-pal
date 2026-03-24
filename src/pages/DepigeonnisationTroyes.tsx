import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Troyes dans l'Aube 10 | G&F Nuisibles";
const DESCRIPTION = "Nuisances de pigeons à Troyes ? G&F Nuisibles, expert dans l'Aube 10, protège vos façades et toitures. Diagnostic gratuit 7j/7.";

const DepigeonnisationTroyes = () => {
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
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="PIGEONS ENVAHISSANTS À TROYES ?"
        serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS BÂTIMENTS DURABLEMENT !"
        intro="À Troyes, les colonies de pigeons s'installent sur les toits, balcons et corniches, provoquant salissures et dégradations. G&F Nuisibles intervient pour sécuriser vos espaces avec des solutions anti-pigeons éprouvées."
        expertise="Notre savoir-faire dans l'Aube (10) nous permet d'adapter chaque intervention à la configuration du bâtiment. Nous combinons plusieurs techniques pour une efficacité maximale et durable."
        method="Analyse du site et identification des points de perchage. Pose de pics, filets ou fil tendu selon les besoins. Décontamination des surfaces touchées par les fientes. Garantie d'efficacité."
        cta="Pigeons à Troyes ? Contactez G&F Nuisibles au 07.88.17.45.86 pour une dépigeonnisation professionnelle garantie."
      />
    </>
  );
};

export default DepigeonnisationTroyes;
