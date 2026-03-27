import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Destruction de nids de Guêpes & Frelons à Montier-en-Der";
const DESCRIPTION = "Nid de guêpes à Montier-en-Der ? G&F Nuisibles détruit nids de guêpes et frelons en Haute-Marne 52. Urgence 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le tarif d'un destructeur de nids à Montier-en-Der ?",
    answer: "Nos prix à Montier-en-Der commencent à 85 € pour les guêpes et à 110 € pour les frelons. Ce coût couvre le diagnostic, le traitement biocide et la garantie de résultat. Un tarif fixe vous est proposé avant toute intervention pour éviter les surprises.",
  },
  {
    question: "J'ai trouvé un nid dans la terre, est-ce des guêpes ou des frelons ?",
    answer: "Il s'agit le plus souvent de guêpes germaniques ou de frelons européens qui s'installent dans d'anciens terriers de rongeurs. À Montier-en-Der, ces nids sont dangereux car on peut marcher dessus par mégarde. Ne versez jamais d'eau ou d'essence dedans, appelez un expert du 52.",
  },
  {
    question: "Que faire en cas de piqûre de frelon asiatique ?",
    answer: "La piqûre est très douloureuse. Si vous êtes piqué près de Montier-en-Der, désinfectez la zone et surveillez tout signe de réaction allergique (difficulté à respirer, gonflement du visage). En cas de doute, contactez les secours. Pour éviter cela, faites neutraliser le nid dès sa découverte.",
  },
];

const GuepesFrelonsMontierEnDer = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Montier-en-Der"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À MONTIER-EN-DER ?"
        serviceCallSubtitle="G&F NUISIBLES INTERVIENT EN URGENCE POUR VOTRE SÉCURITÉ !"
        intro="À Montier-en-Der, les nids de guêpes et de frelons représentent un danger réel pour les habitants. G&F Nuisibles intervient rapidement pour neutraliser et retirer les nids en toute sécurité, que ce soit chez vous ou dans vos locaux professionnels."
        expertise="Nos techniciens qualifiés interviennent à Montier-en-Der et dans toute la Haute-Marne pour la destruction de nids de guêpes, frelons européens et frelons asiatiques. Intervention sécurisée, rapide et garantie."
        method="Repérage et évaluation du nid, sécurisation du périmètre, traitement par insecticide professionnel et retrait du nid. Intervention possible en hauteur et dans les zones difficiles d'accès."
        cta="Nid de guêpes ou frelons à Montier-en-Der ? Appelez G&F Nuisibles au 07.88.17.45.86 pour une intervention d'urgence."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default GuepesFrelonsMontierEnDer;
