import { ClipboardCheck, FileText, Phone, Search, SprayCan } from "lucide-react";
import { Section, ServiceStep, StepRow } from "@/components/ServiceBlocks";

const STEPS: ServiceStep[] = [
  { step: 1, icon: Phone, title: "Votre appel", text: "Vous me dites ce que vous avez remarqué et depuis quand, sans gêne : je vous propose une date." },
  { step: 2, icon: Search, title: "Diagnostic", text: "Chez vous, je vérifie que ce sont bien des punaises et je regarde jusqu'où elles se sont étendues." },
  { step: 3, icon: FileText, title: "Devis", text: "Vous connaissez le prix et le nombre de passages prévu avant de vous engager." },
  { step: 4, icon: SprayCan, title: "Traitement", text: "En 2, 3 ou 4 passages selon l'infestation, espacés de 10 à 15 jours : le nombre est fixé au diagnostic." },
  { step: 5, icon: ClipboardCheck, title: "Contrôle", text: "Au dernier passage, je vérifie les cachettes une par une pour m'assurer qu'il n'y a plus d'activité." },
];

/** The five steps, identical on every bed bug town page. */
const BedbugSteps = ({ city }: { city: string }) => (
  <Section muted title={`Comment se passe un traitement contre les punaises de lit à ${city} ?`} intro="Un seul interlocuteur, de votre premier appel au dernier passage.">
    <StepRow steps={STEPS} />
  </Section>
);

export default BedbugSteps;
