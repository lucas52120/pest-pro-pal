import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Froncles en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Stop aux nuisances des pigeons dans votre jardin ou terrasse à Froncles. Solutions de protection efficaces pour votre habitat. Diagnostic offert.";

const EliminationPigeonsFroncles = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
    </Helmet>
    <CityServicePage
      city="Froncles"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="PIGEONS SUR VOTRE PROPRIÉTÉ À FRONCLES ?"
      serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOTRE MAISON ET VOTRE JARDIN !"
      intro="À Froncles, les pigeons envahissent les espaces extérieurs des particuliers : jardin, terrasse, dépendances. Leurs déjections abîment le mobilier, les plantations et les revêtements. G&F Nuisibles vous propose des solutions concrètes pour un habitat sain."
      expertise="Solutions personnalisées pour les maisons individuelles : répulsifs pour terrasses et jardins, filets de protection pour les zones couvertes, pics discrets sur les murs et appuis. Préservez votre cadre de vie familial."
      method="Diagnostic de votre propriété pour identifier les zones fréquentées par les pigeons. Mise en place de protections adaptées à votre jardin et votre maison. Nettoyage des surfaces souillées. Conseils de prévention pour un résultat pérenne."
      cta="Retrouvez un jardin propre à Froncles. Appelez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic offert."
    />
  </>
);

export default EliminationPigeonsFroncles;
