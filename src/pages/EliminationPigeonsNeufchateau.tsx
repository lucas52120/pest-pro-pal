import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Neufchâteau dans les Vosges 88 | G&F Nuisibles";
const DESCRIPTION = "Pigeons sur votre balcon à Neufchâteau ? G&F Nuisibles protège votre maison contre les nuisances sonores et les fientes. Devis gratuit et pose de filets.";

const EliminationPigeonsNeufchateau = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
    </Helmet>
    <CityServicePage
      city="Neufchâteau"
      department="Vosges (88)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="PIGEONS ENVAHISSANTS À NEUFCHÂTEAU ?"
      serviceCallSubtitle="G&F NUISIBLES INTERVIENT CHEZ LES PARTICULIERS !"
      intro="À Neufchâteau, les pigeons s'installent sur les balcons, fenêtres et toits des habitations résidentielles. Les fientes salissent vos espaces de vie et les nuisances sonores troublent votre quotidien. G&F Nuisibles propose aux particuliers une élimination efficace et respectueuse."
      expertise="Nous équipons votre maison ou appartement de protections adaptées : filets pour balcons et loggias, pics sur les corniches, répulsifs pour les terrasses. Des méthodes non-létales qui préservent les oiseaux tout en protégeant votre foyer."
      method="Visite à domicile pour analyser les points de perchage et de nidification. Installation de dispositifs sur mesure adaptés à votre habitation. Nettoyage complet des zones souillées. Suivi post-intervention pour un résultat pérenne."
      cta="Retrouvez votre tranquillité à Neufchâteau. Appelez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit."
    />
  </>
);

export default EliminationPigeonsNeufchateau;
