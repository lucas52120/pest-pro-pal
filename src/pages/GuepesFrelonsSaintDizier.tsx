import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Destruction de nids de Guêpes & Frelons à Saint-Dizier";
const DESCRIPTION = "Nid de guêpes à Saint-Dizier ? G&F Nuisibles détruit nids de guêpes et frelons en Haute-Marne 52. Urgence 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Combien coûte l'éradication d'un nid de guêpes à Saint-Dizier ?",
    answer: "Pour les habitants de Saint-Dizier, nos forfaits commencent à 85 € pour les guêpes et à 110 € pour les nids de frelons (européens ou asiatiques). Ce tarif inclut le déplacement et le traitement professionnel. Un devis gratuit et ferme vous est communiqué avant chaque intervention.",
  },
  {
    question: "Peut-on attendre l'hiver pour qu'un nid de frelons meure seul ?",
    answer: "C'est déconseillé. Si le froid tue la colonie, les futures reines quittent le nid avant l'hiver pour hiberner à proximité. En traitant le nid dès maintenant à Saint-Dizier, vous limitez drastiquement le risque de voir plusieurs nouveaux nids apparaître dans votre jardin l'année prochaine.",
  },
  {
    question: "Vos produits insecticides sont-ils dangereux pour mes animaux ?",
    answer: "Nous utilisons des biocides professionnels ciblés. Une fois le nid traité et neutralisé, le risque pour vos animaux est quasi nul s'ils ne s'approchent pas de la zone immédiate. À Saint-Dizier, nos techniciens vous donneront toutes les consignes de sécurité après l'intervention.",
  },
];

const GuepesFrelonsSaintDizier = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Saint-Dizier"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À SAINT-DIZIER ?"
        serviceCallSubtitle="G&F NUISIBLES INTERVIENT EN URGENCE POUR VOTRE SÉCURITÉ !"
        intro="À Saint-Dizier, les nids de guêpes et de frelons représentent un danger réel pour les habitants. G&F Nuisibles intervient rapidement pour neutraliser et retirer les nids en toute sécurité, que ce soit chez vous ou dans vos locaux professionnels."
        expertise="Nos techniciens qualifiés interviennent à Saint-Dizier et dans toute la Haute-Marne pour la destruction de nids de guêpes, frelons européens et frelons asiatiques. Intervention sécurisée, rapide et garantie."
        method="Repérage et évaluation du nid, sécurisation du périmètre, traitement par insecticide professionnel et retrait du nid. Intervention possible en hauteur et dans les zones difficiles d'accès."
        cta="Nid de guêpes ou frelons à Saint-Dizier ? Appelez G&F Nuisibles au 07.88.17.45.86 pour une intervention d'urgence."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default GuepesFrelonsSaintDizier;
