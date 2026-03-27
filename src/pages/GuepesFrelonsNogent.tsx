import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Destruction de nids de Guêpes & Frelons à Nogent";
const DESCRIPTION = "Guêpes ou frelons à Nogent ? G&F Nuisibles, spécialiste Haute-Marne 52, neutralise les nids rapidement. Appelez-nous !";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Tarifs pour la destruction de nids de frelons ou guêpes à Nogent ?",
    answer: "Nos forfaits à Nogent commencent à 70 € pour les guêpes et à 110 € pour les frelons. Le prix varie selon la complexité technique de l'accès. Nous nous engageons sur un prix ferme communiqué avant d'intervenir.",
  },
  {
    question: "Quels sont les dangers d'un nid de guêpes près d'une habitation ?",
    answer: "Le risque principal est la piqûre multiple, grave pour les enfants ou les personnes allergiques. À Nogent, nos techniciens interviennent 7j/7 avec du matériel pro pour éradiquer la menace sans mettre votre entourage en péril.",
  },
  {
    question: "Comment sont structurés les nids de frelons ?",
    answer: "Le nid ressemble à une grosse lanterne de papier grisâtre. Le frelon européen préfère les endroits sombres, tandis que le frelon asiatique construit souvent en pleine lumière. Dans le 52, restez vigilant si vous observez un gros insecte bruyant.",
  },
];

const GuepesFrelonsNogent = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Nogent"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À NOGENT ?"
        serviceCallSubtitle="G&F NUISIBLES INTERVIENT EN URGENCE POUR VOTRE SÉCURITÉ !"
        intro="Les guêpes et frelons s'installent fréquemment dans les habitations et jardins de Nogent. Leur présence constitue un risque majeur, surtout pour les personnes allergiques. Faites appel à G&F Nuisibles pour une destruction rapide et sécurisée."
        expertise="Nos techniciens qualifiés interviennent à Nogent et dans toute la Haute-Marne pour la destruction de nids de guêpes, frelons européens et frelons asiatiques. Intervention sécurisée, rapide et garantie."
        method="Repérage et évaluation du nid, sécurisation du périmètre, traitement par insecticide professionnel et retrait du nid. Intervention possible en hauteur et dans les zones difficiles d'accès."
        cta="Nid de guêpes ou frelons à Nogent ? Appelez G&F Nuisibles au 07.88.17.45.86 pour une intervention d'urgence."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default GuepesFrelonsNogent;
