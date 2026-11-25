import { ReactNode } from "react";
import { ClipboardCheck, FileText, Phone, Search, ShieldCheck } from "lucide-react";
import { Section, ServiceStep, StepRow } from "@/components/ServiceBlocks";

const STEPS: ServiceStep[] = [
  { step: 1, icon: Phone, title: "Votre appel", text: "Vous me dites ce que vous avez vu, et je vous donne ma première date disponible." },
  { step: 2, icon: Search, title: "Diagnostic", text: "Je fais le tour du logement, de la cave au grenier, pour trouver l'entrée." },
  { step: 3, icon: FileText, title: "Devis", text: "Je vous donne le prix avant de poser quoi que ce soit." },
  { step: 4, icon: ShieldCheck, title: "Intervention", text: "Pièges ou postes fermés, là où les rongeurs passent vraiment." },
  { step: 5, icon: ClipboardCheck, title: "Contrôle", text: "Je reviens voir ce qui a été mangé ou capturé, et j'ajuste." },
];

/** The five steps, identical on every town page so that clients always find the same process. */
const RodentSteps = ({ city, children }: { city: string; children?: ReactNode }) => (
  <Section muted title={`Comment se passe une dératisation à ${city} ?`} intro="Un seul interlocuteur, de votre appel au dernier contrôle.">
    <StepRow steps={STEPS} />
    {children}
  </Section>
);

export default RodentSteps;
