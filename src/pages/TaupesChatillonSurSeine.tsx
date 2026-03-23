import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupes à Châtillon-sur-Seine en Côte-d'Or 21 | G&F Nuisibles";
const DESCRIPTION = "Taupes à Châtillon-sur-Seine ? G&F Nuisibles, taupier professionnel en Côte-d'Or 21, élimine les taupes de votre jardin. Devis gratuit.";

const TaupesChatillonSurSeine = () => {
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
        icon={<Target className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="TAUPES DANS VOTRE JARDIN À CHÂTILLON-SUR-SEINE ?"
        serviceCallSubtitle="G&F NUISIBLES ÉLIMINE LES TAUPES EFFICACEMENT !"
        intro="Les taupinières envahissent votre pelouse à Châtillon-sur-Seine ? Ces petits mammifères creusent des galeries souterraines qui abîment vos espaces verts. G&F Nuisibles propose un piégeage professionnel et écologique."
        expertise="Taupier expérimenté en Côte-d'Or (21), nous utilisons exclusivement des pièges mécaniques pour une élimination respectueuse de l'environnement. Notre méthode est efficace et sans produit chimique."
        method="Repérage des galeries actives par sondage du terrain. Installation de pièges mécaniques professionnels sur les passages principaux. Relevé régulier des pièges et rebouchage des galeries."
        cta="Taupes à Châtillon-sur-Seine ? Appelez le 07.88.17.45.86 pour retrouver un jardin impeccable grâce à notre expertise de taupier."
      />
    </>
  );
};

export default TaupesChatillonSurSeine;
