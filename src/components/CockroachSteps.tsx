import { ClipboardCheck, FileText, Phone, Search, SprayCan } from "lucide-react";
import { Section, ServiceStep, StepRow } from "@/components/ServiceBlocks";

const STEPS: ServiceStep[] = [
  { step: 1, icon: Phone, title: "Votre appel", text: "Vous me dites où vous les voyez et à quel moment, et je vous donne ma première date disponible." },
  { step: 2, icon: Search, title: "Diagnostic", text: "Je cherche l'espèce et leurs cachettes : moteurs, dessous d'évier, plinthes, gaines." },
  { step: 3, icon: FileText, title: "Devis", text: "Vous connaissez le prix et le nombre de passages avant de vous engager." },
  { step: 4, icon: SprayCan, title: "Traitement", text: "Gel, pulvérisation ciblée ou les deux : j'applique le traitement adapté dans leurs cachettes." },
  { step: 5, icon: ClipboardCheck, title: "Contrôle", text: "Je repasse pour traiter les jeunes sortis des œufs et vérifier le résultat." },
];

/** The five steps, identical on every cockroach town page. */
const CockroachSteps = ({ city }: { city: string }) => (
  <Section muted title={`Comment se passe un traitement contre les cafards à ${city} ?`} intro="Un seul interlocuteur, de votre appel au dernier contrôle.">
    <StepRow steps={STEPS} />
  </Section>
);

export default CockroachSteps;
