import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Arc-en-Barrois en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Pigeons sur votre toiture à Arc-en-Barrois ? G&F Nuisibles protège votre habitation des fientes et nuisances. Pose de filets et pics, devis gratuit.";

const EliminationPigeonsArcEnBarrois = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
    </Helmet>
    <CityServicePage
      city="Arc-en-Barrois"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="DES PIGEONS S'INSTALLENT CHEZ VOUS À ARC-EN-BARROIS ?"
      serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOTRE MAISON DURABLEMENT !"
      intro="À Arc-en-Barrois, les pigeons investissent toitures, balcons et greniers des habitations, laissant fientes et parasites. G&F Nuisibles intervient chez les particuliers pour installer des protections discrètes et efficaces qui vous rendront votre tranquillité."
      expertise="Nous équipons votre maison à Arc-en-Barrois de dispositifs anti-pigeons adaptés : filets sur les ouvertures, pics sur les corniches, répulsifs discrets. Des solutions non-létales pour protéger votre habitat et la santé de votre famille."
      method="Visite à domicile à Arc-en-Barrois pour analyser les zones de nidification et de perchage. Pose de protections personnalisées sur toiture, balcons et façades. Nettoyage et désinfection des surfaces souillées. Suivi pour garantir un résultat durable."
      cta="Retrouvez votre tranquillité à Arc-en-Barrois. Appelez G&F Nuisibles au 07.88.17.45.86 pour un devis gratuit à domicile."
    />
  </>
);

export default EliminationPigeonsArcEnBarrois;
