import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Chaumont en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Pigeons sur votre balcon à Chaumont ? G&F Nuisibles protège votre maison contre les nuisances sonores et les fientes. Devis gratuit et pose de filets.";

const EliminationPigeonsChaumont = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
    </Helmet>
    <CityServicePage
      city="Chaumont"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="DES PIGEONS ENVAHISSENT VOTRE MAISON À CHAUMONT ?"
      serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOTRE HABITAT ET VOTRE FAMILLE !"
      intro="À Chaumont, les pigeons s'installent sur les balcons, rebords de fenêtres et toitures des maisons individuelles. Leurs fientes salissent vos espaces de vie et représentent un risque pour la santé de votre famille. G&F Nuisibles intervient chez les particuliers pour une élimination efficace et durable."
      expertise="Nous proposons des solutions adaptées aux pavillons et appartements : pose de filets discrets sur les balcons, installation de pics inox sur les rebords, systèmes de répulsion adaptés à votre habitation. Retrouvez la tranquillité de votre foyer."
      method="Visite à domicile pour identifier les zones de perchage sur votre maison. Installation de dispositifs anti-pigeons sur mesure : filets, pics ou répulsifs. Nettoyage complet des surfaces souillées. Garantie de résultat pour votre confort familial."
      cta="Protégez votre maison à Chaumont. Appelez G&F Nuisibles au 07.88.17.45.86 pour un diagnostic gratuit à domicile."
    />
  </>
);

export default EliminationPigeonsChaumont;
