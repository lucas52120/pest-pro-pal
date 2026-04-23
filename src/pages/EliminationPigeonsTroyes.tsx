import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Troyes dans l'Aube 10 | G&F Nuisibles";
const DESCRIPTION = "Retrouvez un toit sain à Troyes. Nos experts interviennent chez les particuliers pour l'éloignement durable des oiseaux. Intervention rapide 7j/7.";

const EliminationPigeonsTroyes = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
    </Helmet>
    <CityServicePage
      city="Troyes"
      department="Aube (10)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="PIGEONS SUR VOTRE TOIT OU VOS FENÊTRES À TROYES ?"
      serviceCallSubtitle="G&F NUISIBLES ÉLOIGNE LES VOLATILES DE VOTRE DOMICILE !"
      intro="À Troyes, les pigeons s'installent sur les toits des maisons et immeubles résidentiels, provoquant des infiltrations et des nuisances sanitaires. Les particuliers voient leur cadre de vie se dégrader au fil des mois. G&F Nuisibles intervient pour rétablir votre confort."
      expertise="Notre expertise dans l'Aube nous permet d'intervenir sur tous types d'habitations : pavillons, appartements, maisons de ville. Filets, pics et systèmes répulsifs sont posés avec soin pour un éloignement durable sans nuire aux oiseaux."
      method="Inspection complète de votre toiture et des zones de perchage. Sécurisation des accès et pose de dispositifs anti-pigeons. Décontamination des surfaces touchées par les fientes. Suivi post-intervention garanti."
      cta="Retrouvez un toit propre à Troyes. Contactez G&F Nuisibles au 07.65.25.67.92 pour une intervention rapide."
    />
  </>
);

export default EliminationPigeonsTroyes;
