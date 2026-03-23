import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation à Dijon en Côte-d'Or 21 | G&F Nuisibles";
const DESCRIPTION = "Cafards, punaises ou fourmis à Dijon ? G&F Nuisibles, désinsectiseur certifié en Côte-d'Or 21, éradique tous les insectes. Devis gratuit.";

const DesinsectisationDijon = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Dijon"
        department="Côte-d'Or (21)"
        serviceTitle={TITLE}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="INVASION D'INSECTES À DIJON ?"
        serviceCallSubtitle="G&F NUISIBLES ÉLIMINE TOUS LES INSECTES NUISIBLES !"
        intro="Les insectes nuisibles envahissent de nombreux foyers et commerces à Dijon. Cafards, punaises de lit, fourmis ou puces : chaque espèce nécessite un traitement adapté. G&F Nuisibles vous débarrasse durablement de ces parasites."
        expertise="Nos techniciens qualifiés en Côte-d'Or (21) identifient précisément l'espèce et le niveau d'infestation avant d'agir. Nous utilisons des produits biocides homologués, efficaces et respectueux de votre environnement."
        method="Diagnostic approfondi pour déterminer l'espèce et les zones infestées. Traitement par pulvérisation, nébulisation ou gel selon la situation. Conseils de prévention et suivi post-intervention."
        cta="Insectes indésirables à Dijon ? Contactez le 07.88.17.45.86 pour une désinsectisation professionnelle garantie."
      />
    </>
  );
};

export default DesinsectisationDijon;
