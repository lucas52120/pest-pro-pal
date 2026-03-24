import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation à Chaumont en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Cafards, punaises ou puces à Chaumont ? G&F Nuisibles, expert désinsectisation en Haute-Marne 52, élimine tous les insectes nuisibles. Devis gratuit.";

const DesinsectisationChaumont = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Chaumont"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="INVASION D'INSECTES À CHAUMONT ?"
        serviceCallSubtitle="G&F NUISIBLES ÉLIMINE CAFARDS, PUNAISES ET PUCES EFFICACEMENT !"
        intro="À Chaumont, cafards, punaises de lit, puces et autres insectes nuisibles peuvent envahir votre habitat ou local professionnel. G&F Nuisibles intervient avec des traitements ciblés et certifiés pour une élimination complète et durable."
        expertise="Spécialistes de la désinsectisation en Haute-Marne, nous traitons tous les types d'insectes rampants et volants. Nos protocoles respectent les normes sanitaires et sont compatibles avec la présence d'enfants et d'animaux."
        method="Inspection complète pour identifier l'espèce et les zones infestées. Application de traitements professionnels (gel, pulvérisation, nébulisation). Suivi post-traitement et conseils d'hygiène préventive."
        cta="Insectes nuisibles à Chaumont ? Contactez G&F Nuisibles au 07.88.17.45.86 pour un diagnostic gratuit."
      />
    </>
  );
};

export default DesinsectisationChaumont;
