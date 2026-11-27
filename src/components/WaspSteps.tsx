import { ClipboardCheck, FileText, Phone, Search, SprayCan } from "lucide-react";
import { Section, ServiceStep, StepRow } from "@/components/ServiceBlocks";

const STEPS: ServiceStep[] = [
  { step: 1, icon: Phone, title: "Votre appel", text: "Vous m'indiquez l'emplacement du nid, et je vous donne ma première date disponible." },
  { step: 2, icon: FileText, title: "Devis", text: "Le prix est fixé avant ma venue, la plupart du temps dès votre appel." },
  { step: 3, icon: Search, title: "Diagnostic", text: "Une fois là, je reconnais l'espèce, je localise l'entrée et j'éloigne tout le monde." },
  { step: 4, icon: SprayCan, title: "Intervention", text: "En tenue de protection, je traite le nid : une petite heure au plus, souvent moins." },
  { step: 5, icon: ClipboardCheck, title: "Conseils", text: "Avant de partir, je vous explique quand revenir près du nid et s'il faut l'enlever." },
];

/** The five steps, identical on every wasp and hornet town page. */
const WaspSteps = ({ city }: { city: string }) => (
  <Section muted title={`Comment se déroule l'intervention sur un nid à ${city} ?`} intro="Un seul interlocuteur, de votre appel aux derniers conseils.">
    <StepRow steps={STEPS} />
  </Section>
);

export default WaspSteps;
