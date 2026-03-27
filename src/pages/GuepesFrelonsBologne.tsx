import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Destruction de nids de Guêpes & Frelons à Bologne";
const DESCRIPTION = "Guêpes ou frelons à Bologne ? G&F Nuisibles, spécialiste Haute-Marne 52, neutralise les nids rapidement. Appelez-nous !";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel budget prévoir pour un nid de frelons à Bologne ?",
    answer: "Pour neutraliser des frelons à Bologne, prévoyez un tarif à partir de 110 €. Pour les guêpes, l'intervention débute à 70 €. Un prix définitif vous est toujours annoncé avant le début des travaux pour éviter toute surprise.",
  },
  {
    question: "Peut-on détruire un nid avec de l'eau ou du feu ?",
    answer: "C'est extrêmement dangereux. L'eau ne noie pas la colonie et le feu présente un risque d'incendie pour votre toiture. La solution la plus sûre à Bologne reste l'injection de poudre insecticide professionnelle au cœur du nid.",
  },
  {
    question: "Quelles différences visuelles entre guêpe et frelon asiatique ?",
    answer: "La guêpe a des rayures jaunes et noires marquées. Le frelon asiatique est plus grand, noir avec une bande orange sur l'abdomen et des pattes jaunes. Restez à distance, ils sont très protecteurs.",
  },
];

const GuepesFrelonsBologne = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Bologne"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À BOLOGNE ?"
        serviceCallSubtitle="G&F NUISIBLES INTERVIENT EN URGENCE POUR VOTRE SÉCURITÉ !"
        intro="Chaque été, Bologne voit se multiplier les nids de guêpes et frelons asiatiques. Ne prenez aucun risque : G&F Nuisibles neutralise les colonies avec un équipement professionnel adapté et une intervention garantie."
        expertise="Nos techniciens qualifiés interviennent à Bologne et dans toute la Haute-Marne pour la destruction de nids de guêpes, frelons européens et frelons asiatiques. Intervention sécurisée, rapide et garantie."
        method="Repérage et évaluation du nid, sécurisation du périmètre, traitement par insecticide professionnel et retrait du nid. Intervention possible en hauteur et dans les zones difficiles d'accès."
        cta="Nid de guêpes ou frelons à Bologne ? Appelez G&F Nuisibles au 07.88.17.45.86 pour une intervention d'urgence."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default GuepesFrelonsBologne;
