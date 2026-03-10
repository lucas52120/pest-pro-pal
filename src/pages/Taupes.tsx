import { Target } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImage from "@/assets/service-taupes.jpg";

const Taupes = () => (
  <ServicePageLayout
    icon={<Target className="h-8 w-8" />}
    title="Taupes"
    subtitle="Piégeage traditionnel et expertise terrain pour vos espaces verts."
    heroImage={heroImage}
    problem="Des monticules de terre apparaissent sur votre pelouse ou dans votre jardin ? Les taupes peuvent rapidement dégrader vos espaces verts et compromettre la stabilité de vos terrains."
    expertise="FG Nuisibles emploie la méthode traditionnelle de piégeage, la plus efficace et la plus respectueuse de l'environnement. Notre expertise terrain nous permet d'identifier les galeries actives."
    method="Repérage des galeries principales, pose de pièges mécaniques professionnels, suivi régulier et retrait des dispositifs. Aucun produit chimique utilisé."
    engagement="Intervention sur devis, suivi personnalisé. Nous intervenons sur l'ensemble de la Haute-Marne pour les particuliers et les professionnels."
  />
);

export default Taupes;
