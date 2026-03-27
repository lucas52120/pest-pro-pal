import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Destruction de nids de Guêpes & Frelons à Bourbonne-les-Bains";
const DESCRIPTION = "Destruction nid de frelons à Bourbonne-les-Bains (52). G&F Nuisibles intervient en urgence. Sécurité garantie, devis gratuit.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel budget prévoir pour enlever un nid de guêpes à Bourbonne-les-Bains ?",
    answer: "À Bourbonne-les-Bains, nos interventions débutent à 85 € pour les nids de guêpes et à 110 € pour les frelons. Le prix dépend de la complexité de l'accès (cheminée, combles, arbres). Nous validons toujours le montant avec vous avant de commencer le traitement.",
  },
  {
    question: "Pourquoi faire appel à GF Nuisibles plutôt qu'un kit du commerce ?",
    answer: "Les bombes aérosols classiques ne traitent que la surface du nid. Un professionnel à Bourbonne-les-Bains possède des poudres pressurisées qui pénètrent au cœur de la colonie, tuant la reine instantanément. C'est la seule méthode qui garantit que le nid ne se reformera pas ailleurs.",
  },
  {
    question: "Les frelons sont-ils actifs la nuit ?",
    answer: "Oui, contrairement aux guêpes, les frelons (notamment européens) sont attirés par la lumière et peuvent voler la nuit. Si vous dînez dehors à Bourbonne-les-Bains et que de gros insectes percutent vos lampes, vous avez probablement un nid à proximité.",
  },
];

const GuepesFrelonsBourbonne = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Bourbonne-les-Bains"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À BOURBONNE-LES-BAINS ?"
        serviceCallSubtitle="G&F NUISIBLES INTERVIENT EN URGENCE POUR VOTRE SÉCURITÉ !"
        intro="Les guêpes et frelons s'installent fréquemment dans les habitations et jardins de Bourbonne-les-Bains. Leur présence constitue un risque majeur, surtout pour les personnes allergiques. Faites appel à G&F Nuisibles pour une destruction rapide et sécurisée."
        expertise="Nos techniciens qualifiés interviennent à Bourbonne-les-Bains et dans toute la Haute-Marne pour la destruction de nids de guêpes, frelons européens et frelons asiatiques. Intervention sécurisée, rapide et garantie."
        method="Repérage et évaluation du nid, sécurisation du périmètre, traitement par insecticide professionnel et retrait du nid. Intervention possible en hauteur et dans les zones difficiles d'accès."
        cta="Nid de guêpes ou frelons à Bourbonne-les-Bains ? Appelez G&F Nuisibles au 07.88.17.45.86 pour une intervention d'urgence."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default GuepesFrelonsBourbonne;
