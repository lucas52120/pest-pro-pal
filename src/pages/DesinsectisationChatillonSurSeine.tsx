import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation à Châtillon-sur-Seine en Côte-d'Or 21 | | G&F Nuisibles";
const DESCRIPTION = "Cafards, punaises ou fourmis à Châtillon-sur-Seine ? G&F Nuisibles, désinsectiseur certifié en Côte-d'Or 21, éradique tous les insectes. Devis gratuit.";

const DesinsectisationChatillonSurSeine = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Châtillon-sur-Seine"
        department="Côte-d'Or (21)"
        serviceTitle={TITLE}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="INVASION D'INSECTES À CHÂTILLON-SUR-SEINE ?"
        serviceCallSubtitle="G&F NUISIBLES ÉLIMINE TOUS LES INSECTES NUISIBLES !"
        intro="Les insectes nuisibles envahissent de nombreux foyers et commerces à Châtillon-sur-Seine. Cafards, punaises de lit, fourmis ou puces : chaque espèce nécessite un traitement adapté. G&F Nuisibles vous débarrasse durablement de ces parasites."
        expertise="Nos techniciens qualifiés en Côte-d'Or (21) identifient précisément l'espèce et le niveau d'infestation avant d'agir. Nous utilisons des produits biocides homologués, efficaces et respectueux de votre environnement."
        method="Diagnostic approfondi pour déterminer l'espèce et les zones infestées. Traitement par pulvérisation, nébulisation ou gel selon la situation. Conseils de prévention et suivi post-intervention."
        cta="Insectes indésirables à Châtillon-sur-Seine ? Contactez le 07.88.17.45.86 pour une désinsectisation professionnelle garantie."
      />
    </>
  );
};

export default DesinsectisationChatillonSurSeine;
