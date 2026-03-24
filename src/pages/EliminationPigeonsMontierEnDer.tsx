import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Montier-en-Der en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Pigeons sur votre balcon à Montier-en-Der ? G&F Nuisibles protège votre maison contre les nuisances sonores et les fientes. Devis gratuit.";

const EliminationPigeonsMontierEnDer = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
    </Helmet>
    <CityServicePage
      city="Montier-en-Der"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="PIGEONS GÊNANTS SUR VOTRE HABITATION À MONTIER-EN-DER ?"
      serviceCallSubtitle="G&F NUISIBLES INTERVIENT CHEZ LES PARTICULIERS !"
      intro="À Montier-en-Der, les pigeons perturbent le quotidien des habitants en souillant balcons, fenêtres et terrasses. Les nuisances sonores et les fientes acides dégradent progressivement votre habitation. G&F Nuisibles apporte une solution concrète aux particuliers."
      expertise="Nous protégeons votre maison avec des dispositifs adaptés : filets pour balcons et loggias, pics discrets sur les appuis de fenêtres, répulsifs pour terrasses. Des solutions pensées pour le confort de votre famille au quotidien."
      method="Visite de votre domicile pour cartographier les zones touchées. Installation sur mesure de protections anti-pigeons. Nettoyage et traitement des surfaces contaminées. Suivi personnalisé pour une efficacité dans la durée."
      cta="Libérez votre maison à Montier-en-Der. Appelez G&F Nuisibles au 07.88.17.45.86 pour un devis gratuit."
    />
  </>
);

export default EliminationPigeonsMontierEnDer;
