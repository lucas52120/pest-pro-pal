import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Châteauvillain en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Besoin d'une élimination de pigeons à Châteauvillain ? Protégez votre façade et votre santé. G&F Nuisibles : pics et répulsifs spécial particuliers.";

const EliminationPigeonsChateauvillain = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
    </Helmet>
    <CityServicePage
      city="Châteauvillain"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="FAÇADE ABÎMÉE PAR LES PIGEONS À CHÂTEAUVILLAIN ?"
      serviceCallSubtitle="G&F NUISIBLES RESTAURE LA PROPRETÉ DE VOTRE HABITAT !"
      intro="À Châteauvillain, les pigeons causent des dégradations visibles sur les façades des maisons : fientes corrosives, nids dans les gouttières, bruits incessants. Les particuliers méritent une solution professionnelle pour protéger leur bien. G&F Nuisibles est votre allié."
      expertise="Nous installons des dispositifs durables et esthétiques pour les habitations : pics inox quasi invisibles, répulsifs sur mesure, filets pour les ouvertures. Chaque intervention respecte le cachet de votre maison tout en éliminant les nuisances."
      method="Visite de votre domicile pour un bilan complet des dégâts et des zones à protéger. Installation de systèmes anti-pigeons adaptés à votre architecture. Remise en état des surfaces souillées. Garantie d'efficacité sur la durée."
      cta="Préservez votre maison à Châteauvillain. Contactez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit."
    />
  </>
);

export default EliminationPigeonsChateauvillain;
