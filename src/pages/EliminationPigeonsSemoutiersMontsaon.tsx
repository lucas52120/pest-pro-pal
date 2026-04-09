import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Semoutiers-Montsaon en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Pigeons chez vous à Semoutiers-Montsaon ? G&F Nuisibles, implanté sur la commune, protège votre habitation des fientes et nuisances. Devis gratuit.";

const EliminationPigeonsSemoutiersMontsaon = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
    </Helmet>
    <CityServicePage
      city="Semoutiers-Montsaon"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="DES PIGEONS ENVAHISSENT VOTRE MAISON À SEMOUTIERS-MONTSAON ?"
      serviceCallSubtitle="G&F NUISIBLES, VOTRE VOISIN EXPERT, VOUS PROTÈGE !"
      intro="À Semoutiers-Montsaon, les pigeons colonisent toitures, greniers et dépendances des habitations, laissant fientes et parasites. G&F Nuisibles, basé sur votre commune, intervient chez les particuliers pour installer des protections discrètes et efficaces."
      expertise="Nous équipons votre maison à Semoutiers-Montsaon de dispositifs anti-pigeons adaptés : filets sur les ouvertures, pics sur les corniches, répulsifs discrets. Des solutions non-létales pour retrouver la tranquillité de votre habitat et protéger la santé de votre famille."
      method="Visite à domicile à Semoutiers-Montsaon pour analyser les zones de nidification et de perchage. Pose de protections personnalisées sur toiture, balcons et façades. Nettoyage des surfaces souillées. Suivi pour garantir un résultat durable."
      cta="Retrouvez votre tranquillité à Semoutiers-Montsaon. Appelez G&F Nuisibles au 07.88.17.45.86 pour un devis gratuit."
    />
  </>
);

export default EliminationPigeonsSemoutiersMontsaon;
