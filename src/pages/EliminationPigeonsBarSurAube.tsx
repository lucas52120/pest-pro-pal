import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Bar-sur-Aube dans l'Aube 10 | G&F Nuisibles";
const DESCRIPTION = "Pigeons sur votre balcon à Bar-sur-Aube ? G&F Nuisibles protège votre maison contre les nuisances sonores et les fientes. Devis gratuit et pose de filets.";

const EliminationPigeonsBarSurAube = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
    </Helmet>
    <CityServicePage
      city="Bar-sur-Aube"
      department="Aube (10)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="DES PIGEONS S'INSTALLENT CHEZ VOUS À BAR-SUR-AUBE ?"
      serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOTRE MAISON EFFICACEMENT !"
      intro="À Bar-sur-Aube, les pigeons colonisent les balcons, toitures et rebords de fenêtres des habitations. Fientes, bruits matinaux et parasites perturbent la vie de famille. G&F Nuisibles propose aux particuliers des solutions d'élimination adaptées et durables."
      expertise="Spécialistes de la protection résidentielle dans l'Aube, nous équipons votre habitation de filets discrets, pics anti-perchage et répulsifs ciblés. Des solutions non-létales qui respectent les volatiles tout en vous rendant votre tranquillité."
      method="Diagnostic à domicile pour évaluer l'ampleur de l'invasion. Pose de dispositifs de protection sur balcons, corniches et toiture. Nettoyage complet des fientes et désinfection. Suivi pour garantir un résultat durable."
      cta="Protégez votre foyer à Bar-sur-Aube. Appelez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit à domicile."
    />
  </>
);

export default EliminationPigeonsBarSurAube;
