import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Destruction de nids de Guêpes & Frelons à Langres";
const DESCRIPTION = "Nid de guêpes ou frelons à Langres ? G&F Nuisibles intervient en urgence en Haute-Marne 52. Destruction sécurisée, devis gratuit 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le coût pour éliminer un nid de frelons à Langres ?",
    answer: "Pour une intervention sur des frelons à Langres, nos prix débutent à 110 €. S'il s'agit d'un nid de guêpes, le tarif commence à 70 €. Le montant final est ajusté selon l'emplacement et la hauteur du nid. Nous vous garantissons une transparence totale avec un tarif fixe annoncé avant chaque opération.",
  },
  {
    question: "Est-ce imprudent de tenter de détruire un nid de frelons asiatiques seul ?",
    answer: "C'est une prise de risque inutile et réelle. Une éradication improvisée avec des produits classiques provoque souvent une réaction de défense massive de la colonie. En Haute-Marne, nos experts disposent de combinaisons spéciales et de perches haute pression pour neutraliser les nids en toute sécurité.",
  },
  {
    question: "Comment identifier la présence de guêpes ou de frelons ?",
    answer: "La guêpe est petite et jaune vif, tandis que le frelon est bien plus gros. Le frelon asiatique possède des pattes jaunes et un corps sombre. Leurs nids ressemblent à de grosses boules de papier mâché. À Langres, gardez toujours une distance de 5 mètres.",
  },
];

const GuepesFrelonsLangres = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Langres"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À LANGRES ?"
        serviceCallSubtitle="G&F NUISIBLES INTERVIENT EN URGENCE POUR VOTRE SÉCURITÉ !"
        intro="À Langres, les nids de guêpes et de frelons représentent un danger réel pour les habitants. G&F Nuisibles intervient rapidement pour neutraliser et retirer les nids en toute sécurité, que ce soit chez vous ou dans vos locaux professionnels."
        expertise="Nos techniciens qualifiés interviennent à Langres et dans toute la Haute-Marne pour la destruction de nids de guêpes, frelons européens et frelons asiatiques. Intervention sécurisée, rapide et garantie."
        method="Repérage et évaluation du nid, sécurisation du périmètre, traitement par insecticide professionnel et retrait du nid. Intervention possible en hauteur et dans les zones difficiles d'accès."
        cta="Nid de guêpes ou frelons à Langres ? Appelez G&F Nuisibles au 07.88.17.45.86 pour une intervention d'urgence."
      />
    </>
  );
};

export default GuepesFrelonsLangres;
