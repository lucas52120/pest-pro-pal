import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Vittel dans les Vosges 88 | G&F Nuisibles";
const DESCRIPTION = "Besoin d'une élimination de pigeons à Vittel ? Protégez votre façade et votre santé. G&F Nuisibles : pics et répulsifs spécial particuliers.";

const EliminationPigeonsVittel = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
    </Helmet>
    <CityServicePage
      city="Vittel"
      department="Vosges (88)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="VOTRE MAISON SUBIT LES PIGEONS À VITTEL ?"
      serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOTRE HABITAT DURABLEMENT !"
      intro="À Vittel, les pigeons dégradent les façades et toitures des maisons avec leurs fientes corrosives. Les particuliers constatent des salissures sur leurs volets, balcons et terrasses. G&F Nuisibles apporte une solution professionnelle pour protéger votre habitation."
      expertise="Spécialistes de l'éloignement des pigeons chez les particuliers dans les Vosges, nous installons des pics inox discrets, des répulsifs efficaces et des filets de protection. Chaque dispositif est adapté à votre maison pour un résultat esthétique et durable."
      method="Diagnostic complet de votre habitation pour repérer les zones de perchage. Pose de protections anti-pigeons sur façade, balcons et toiture. Nettoyage des surfaces dégradées par les fientes. Garantie d'efficacité pour votre tranquillité familiale."
      cta="Préservez votre maison à Vittel. Contactez G&F Nuisibles au 07.88.17.45.86 pour un devis gratuit."
    />
  </>
);

export default EliminationPigeonsVittel;
