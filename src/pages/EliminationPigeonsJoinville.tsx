import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Joinville en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Besoin d'une élimination de pigeons à Joinville ? Protégez votre façade et votre santé. G&F Nuisibles : pics et répulsifs spécial particuliers.";

const EliminationPigeonsJoinville = () => (
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
      serviceCallTitle="VOTRE FAÇADE EST DÉGRADÉE PAR LES PIGEONS À JOINVILLE ?"
      serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOTRE MAISON DURABLEMENT !"
      intro="À Joinville, les pigeons dégradent les façades des maisons avec leurs fientes acides et créent des nuisances sonores au quotidien. Les particuliers subissent ces désagréments sans solution efficace. G&F Nuisibles apporte une réponse professionnelle adaptée à votre habitation."
      expertise="Notre équipe installe des dispositifs discrets et durables pour protéger votre façade et vos ouvertures : pics inox, répulsifs et filets invisibles. Chaque intervention est pensée pour préserver l'esthétique de votre maison tout en éloignant les volatiles."
      method="Diagnostic complet de votre habitation pour repérer les points d'accès des pigeons. Installation de protections sur façade, toiture et balcons. Désinfection des zones souillées. Garantie d'efficacité pour la tranquillité de votre famille."
      cta="Stoppez les dégradations sur votre maison à Joinville. Contactez G&F Nuisibles au 07.88.17.45.86 pour un devis gratuit."
    />
  </>
);

export default EliminationPigeonsJoinville;
