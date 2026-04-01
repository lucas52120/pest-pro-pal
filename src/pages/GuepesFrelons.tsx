import { Zap, Plus, Minus } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import ServicePageLayout from "@/components/ServicePageLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImage from "@/assets/service-guepes.jpg";
import comparatifFrelons from "@/assets/comparatif-frelons.jpg";

const FAQ_ITEMS = [
  {
    question: "Quelles différences entre frelon européen et frelon asiatique ?",
    answer: `Il est essentiel de savoir les distinguer, car leur comportement et la dangerosité du nid diffèrent. À Chaumont, et ses communes alentour en Haute-Marne, nous rencontrons de plus en plus de frelons asiatiques, particulièrement agressifs près de leur colonie.

Le Frelon Européen (Vespa crabro) : C'est le plus grand (entre 25 et 35 mm). Il ressemble à une grosse guêpe. Son corps est taché de roux, de noir et de jaune. Ses pattes sont brunes. Il est plutôt pacifique, sauf si l'on s'approche trop près du nid.

Le Frelon Asiatique (Vespa velutina) : Plus petit que son cousin européen (entre 20 et 30 mm), il est très sombre. On le reconnaît à son thorax noir, son segment abdominal orangé et surtout ses pattes aux extrémités jaunes (d'où son surnom de frelon à pattes jaunes).`,
    hasImage: true,
  },
  {
    question: "Caractéristiques physiques : comment reconnaître l'insecte qui vous envahit ?",
    answer: `Savoir identifier l'insecte permet à nos techniciens G&F Nuisibles de préparer l'intervention la plus efficace. Voici quelques repères simples :

La Guêpe : Corps svelte, peu poilu, jaune vif et noir profond. "Taille de guêpe" marquée. Mesure entre 10 et 19 mm.

Le Frelon : Beaucoup plus grand (jusqu'à 35 mm). Bourdonnement sourd et puissant. Piqûres plus douloureuses en raison de la taille du dard.`,
  },
  {
    question: "Comment déceler la présence d'un nid chez vous ?",
    answer: `Parfois, le nid est invisible, caché dans une cloison ou sous une toiture. Voici les signes qui doivent vous alerter :

Le va-et-vient incessant : Si vous observez un passage régulier d'insectes au même endroit (sous une tuile, dans une fissure de mur, dans un coffre de volet roulant), c'est le signe d'une activité de colonie.

Le bruit : Un grattage ou un bourdonnement sourd derrière un plafond ou une cloison placo indique souvent la construction d'un nid.

Lieux fréquents de nidification : Les nids de frelons asiatiques commencent par un petit "nid primaire" au printemps (taille d'une orange) pour finir en énorme sphère de papier mâché (jusqu'à 1 mètre de haut) souvent située dans :
• Espaces confinés : greniers, hangars, remises, abris.
• Cavités naturelles : à la cime des arbres, creux d'arbres, terriers, galeries.
• Interstices de construction : rebords, avant-toits, linteaux, fissures.
• Amas de matériaux : tas de bûches, souches, branchages.

Si vous remarquez la présence d'un nid à Chaumont, Langres ou n'importe où dans le 52, contactez-nous immédiatement pour un diagnostic.`,
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
      address: {
        "@type": "PostalAddress",
        streetAddress: "27 rue principale",
        addressLocality: "Montsaon",
        postalCode: "52000",
        addressCountry: "FR",
      },
      telephone: "+33788174586",
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
      {/* FAQ Expert Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-8 text-center font-heading text-3xl font-extrabold text-primary md:text-4xl">
              FAQ / Informations Experts
            </h2>
          </motion.div>

          <div className="w-full rounded-xl border border-border bg-secondary/50 p-6 shadow-sm md:p-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {FAQ_ITEMS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <AccordionItem value={`faq-${i}`} className="rounded-lg border border-border bg-background px-4">
                    <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-0 [&>svg]:hidden">
                      <div className="flex items-center gap-3">
                        <Plus className="h-5 w-5 shrink-0 text-accent transition-transform [[data-state=open]_&]:hidden" />
                        <Minus className="hidden h-5 w-5 shrink-0 text-accent [[data-state=open]_&]:block" />
                        <h3 className="text-left font-heading text-base font-bold text-primary md:text-lg">
                          {item.question}
                        </h3>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.answer.split("\n\n").map((paragraph, pi) => (
                        <p key={pi} className="mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                      {item.hasImage && (
                        <div className="mt-6">
                          <img
                            src={comparatifFrelons}
                            alt="Comparatif frelon européen et asiatique - Expertise G&F Nuisibles Haute-Marne"
                            className="w-full max-w-lg rounded-xl shadow-sm"
                            loading="lazy"
                            width={1024}
                            height={576}
                          />
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  </>
);

export default GuepesFrelons;
