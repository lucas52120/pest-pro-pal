import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Saint-Dizier en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Pigeons sur votre balcon à Saint-Dizier ? G&F Nuisibles protège votre maison contre les nuisances sonores et les fientes. Devis gratuit et pose de filets.";

const EliminationPigeonsSaintDizier = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
    </Helmet>
    <CityServicePage
      city="Saint-Dizier"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="DES PIGEONS ENVAHISSENT VOTRE BALCON À SAINT-DIZIER ?"
      serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOTRE DOMICILE ET VOTRE FAMILLE !"
      intro="À Saint-Dizier, les pigeons s'installent sur les balcons, terrasses et rebords des habitations résidentielles. Fientes, bruits et parasites perturbent votre quotidien et menacent la santé de votre famille. G&F Nuisibles intervient rapidement chez les particuliers."
      expertise="Nous équipons votre maison ou appartement de dispositifs anti-pigeons discrets : filets sur les balcons, pics sur les corniches, répulsifs adaptés aux habitations. Des solutions non-létales pour retrouver la tranquillité chez vous."
      method="Visite à domicile pour analyser les zones de nidification autour de votre habitation. Pose de protections personnalisées sur balcons, terrasses et toiture. Nettoyage et désinfection des surfaces touchées. Suivi pour garantir un résultat durable."
      cta="Retrouvez votre tranquillité à Saint-Dizier. Appelez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit à domicile."
    />
  </>
);

export default EliminationPigeonsSaintDizier;
