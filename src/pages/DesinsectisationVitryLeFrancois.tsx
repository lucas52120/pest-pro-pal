import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation à Vitry-le-François dans la Marne 51 | G&F | G&F Nuisibles";
const DESCRIPTION = "Cafards, punaises ou fourmis à Vitry-le-François ? G&F Nuisibles, désinsectiseur certifié dans la Marne 51, éradique tous les insectes. Devis gratuit.";

const DesinsectisationVitryLeFrancois = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Vitry-le-François"
        department="Marne (51)"
        serviceTitle={TITLE}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="INVASION D'INSECTES À VITRY-LE-FRANÇOIS ?"
        serviceCallSubtitle="G&F NUISIBLES ÉLIMINE TOUS LES INSECTES NUISIBLES !"
        intro="Les insectes nuisibles envahissent de nombreux foyers et commerces à Vitry-le-François. Cafards, punaises de lit, fourmis ou puces : chaque espèce nécessite un traitement adapté. G&F Nuisibles vous débarrasse durablement de ces parasites."
        expertise="Nos techniciens qualifiés en Marne (51) identifient précisément l'espèce et le niveau d'infestation avant d'agir. Nous utilisons des produits biocides homologués, efficaces et respectueux de votre environnement."
        method="Diagnostic approfondi pour déterminer l'espèce et les zones infestées. Traitement par pulvérisation, nébulisation ou gel selon la situation. Conseils de prévention et suivi post-intervention."
        cta="Insectes indésirables à Vitry-le-François ? Contactez le 07.65.25.67.92 pour une désinsectisation professionnelle garantie."
      />
    </>
  );
};

export default DesinsectisationVitryLeFrancois;
