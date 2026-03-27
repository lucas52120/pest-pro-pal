import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TITLE = "Destruction de nids de Guêpes & Frelons à Chaumont";
const DESCRIPTION = "Nid de guêpes ou frelons à Chaumont ? G&F Nuisibles intervient en urgence en Haute-Marne 52. Destruction sécurisée, devis gratuit 7j/7.";

const faqItems = [
  {
    question: "Quel est le prix pour détruire un nid de frelons à Chaumont ?",
    answer: "Nos tarifs pour une destruction de nid à Chaumont débutent à partir de 75 €. Le prix dépend de la hauteur et de l'accessibilité du nid. Nous validons toujours un prix ferme avec vous avant l'intervention : aucune mauvaise surprise sur la facture finale.",
  },
  {
    question: "Est-il dangereux de détruire le nid soi-même ?",
    answer: "Oui, c'est extrêmement dangereux. Les méthodes artisanales ou les bombes du commerce provoquent souvent des attaques collectives massives. Nos techniciens en Haute-Marne utilisent des combinaisons spécialisées et du matériel professionnel pour neutraliser le nid en toute sécurité.",
  },
  {
    question: "Comment différencier un nid de guêpes d'un nid de frelons ?",
    answer: "La guêpe est petite et jaune vif, tandis que le frelon est bien plus gros et bruyant. Le frelon asiatique se reconnaît à ses pattes jaunes et son corps très sombre. Leurs nids ressemblent à de grosses boules de papier mâché souvent haut perchées. Dans tous les cas, gardez une distance de sécurité de 5 mètres.",
  },
];

const GuepesFrelonsChaumont = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <CityServicePage
        city="Chaumont"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À CHAUMONT ?"
        serviceCallSubtitle="G&F NUISIBLES INTERVIENT EN URGENCE POUR VOTRE SÉCURITÉ !"
        intro="À Chaumont, les guêpes et frelons s'installent sous les toitures, dans les combles ou les jardins. Leurs piqûres représentent un danger réel, surtout pour les personnes allergiques. G&F Nuisibles détruit les nids en toute sécurité avec un équipement professionnel adapté."
        expertise="Nos techniciens certifiés interviennent à Chaumont et dans toute la Haute-Marne pour la destruction de nids de guêpes, frelons européens et frelons asiatiques. Chaque intervention est sécurisée et garantie."
        method="Localisation précise du nid et évaluation des risques. Traitement par injection d'insecticide professionnel ou retrait mécanique. Vérification de l'élimination complète de la colonie. Conseils de prévention."
        cta="Nid de guêpes à Chaumont ? Appelez G&F Nuisibles au 07.88.17.45.86 pour une intervention rapide et sécurisée."
      />

      {/* FAQ Section */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <h2 className="mb-8 text-center font-heading text-2xl font-extrabold text-primary md:text-3xl">
            Questions fréquentes — Guêpes & Frelons à Chaumont
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default GuepesFrelonsChaumont;
