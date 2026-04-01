import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImage from "@/assets/service-guepes.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "Quelles différences entre frelon européen et frelon asiatique ?",
    answer: `Il est essentiel de savoir les distinguer, car leur comportement et la dangerosité du nid diffèrent. À Chaumont, et dans les communes alentour en Haute-Marne, nous rencontrons de plus en plus de frelons asiatiques, particulièrement agressifs près de leur colonie.\n\nLe Frelon Européen (Vespa crabro) : C'est le plus grand (25-35 mm). Corps taché de roux, noir et jaune. Pattes brunes. Plutôt pacifique.\n\nLe Frelon Asiatique (Vespa velutina) : Plus petit (20-30 mm), très sombre. Thorax noir, segment abdominal orangé et extrémités des pattes jaunes.`,
  },
  {
    question: "Caractéristiques physiques : comment reconnaître l'insecte qui vous envahit ?",
    answer: `Savoir identifier l'insecte permet à nos techniciens G&F Nuisibles de préparer l'intervention.\n\nLa Guêpe : Corps svelte, peu poilu, jaune vif et noir. « Taille de guêpe » marquée (10-19 mm).\n\nLe Frelon : Plus grand (jusqu'à 35 mm). Bourdonnement sourd et puissant. Dard plus long.`,
  },
  {
    question: "Comment déceler la présence d'un nid chez vous ?",
    answer: `Voici les signes qui doivent vous alerter :\n\nLe va-et-vient incessant : Passage régulier au même endroit (tuiles, fissures, coffres de volets).\n\nLe bruit : Grattage ou bourdonnement sourd derrière un plafond ou une cloison.\n\nLieux fréquents : Greniers, hangars, cimes des arbres, ou interstices de construction.`,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://pest-pro-pal.lovable.app/#organization",
      name: "G&F Nuisibles",
      image: "https://pest-pro-pal.lovable.app/logo-gf.svg",
      telephone: "+33788174586",
      address: {
        "@type": "PostalAddress",
        streetAddress: "27 rue principale",
        addressLocality: "Montsaon",
        postalCode: "52000",
        addressCountry: "FR",
      },
      priceRange: "$$",
    },
    {
      "@type": "Service",
      name: "Destruction de nids de guêpes et frelons en Haute-Marne",
      provider: { "@id": "https://pest-pro-pal.lovable.app/#organization" },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Haute-Marne (52)",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

const GuepesFrelons = () => (
  <>
    <Helmet>
      <title>Destruction Guêpes & Frelons Haute-Marne 52 | GF Nuisibles</title>
      <meta
        name="description"
        content="Votre expert en destruction de nid de guêpes & frelons en Haute-Marne 52. Diagnostic GRATUIT, intervention rapide et efficace 7j/7 appelez-nous !"
      />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <ServicePageLayout
      icon={<Zap className="h-8 w-8" />}
      title="Guêpes & Frelons"
      subtitle="Destruction de nids de guêpes et frelons en toute sécurité en Haute-Marne."
      heroImage={heroImage}
      sidebarImage={heroImage}
      serviceCallTitle="VOTRE LOGEMENT OU LOCAL PROFESSIONNEL SUBIT UNE INVASION DE GUÊPES OU DE FRELONS ?"
      serviceCallSubtitle="CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DE LA DESTRUCTION DE NIDS DE GUÊPES ET FRELONS !"
      problem="Un nid de guêpes ou de frelons près de votre habitation représente un danger réel. Les piqûres peuvent provoquer des réactions allergiques graves, voire un choc anaphylactique. Ne prenez aucun risque et faites appel à un professionnel."
      expertise="GF Nuisibles intervient rapidement pour la destruction de nids de guêpes, frelons européens et frelons asiatiques. Nos techniciens sont équipés pour intervenir en hauteur et dans les zones difficiles d'accès (toitures, cheminées, arbres)."
      method="Après un diagnostic précis de la situation, nous procédons à la neutralisation du nid avec des produits professionnels homologués. L'intervention est rapide et sécurisée pour vous et votre entourage."
      engagement="Intervention garantie, même en urgence le week-end. Nous nous déplaçons sur Chaumont, Langres et l'ensemble de la Haute-Marne (52)."
    >
      {/* FAQ Expert */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="w-full rounded-xl border border-slate-100 bg-slate-50 p-8 shadow-sm">
            <h2 className="mb-6 font-heading text-2xl font-extrabold text-primary md:text-3xl">
              Questions fréquentes — Guêpes & Frelons
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-2">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-b border-slate-200">
                  <AccordionTrigger className="text-left text-base font-semibold text-primary hover:no-underline [&>svg]:text-accent">
                    <h3 className="text-base font-semibold">{item.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {item.answer}
                    {i === 0 && (
                      <img
                        src="/placeholder.svg"
                        alt="Comparatif frelon européen et asiatique - Expertise G&F Nuisibles Haute-Marne"
                        className="mt-4 w-full max-w-md rounded-lg"
                        loading="lazy"
                      />
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  </>
);

export default GuepesFrelons;
