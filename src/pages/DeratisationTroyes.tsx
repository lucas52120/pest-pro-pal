import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Troyes dans l'Aube 10 | G&F Nuisibles";
const DESCRIPTION = "Rats ou souris à Troyes ? G&F Nuisibles, dératiseur certifié dans l'Aube 10, élimine tous les rongeurs. Devis gratuit, intervention 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Combien coûte la protection d'une copropriété contre les rats à Troyes ?",
    answer: "Pour les syndics et copropriétés à Troyes, le devis est établi en fonction du nombre de parties communes, de colonnes sèches et de locaux poubelles à traiter. Nous offrons des solutions groupées très avantageuses pour les immeubles de l'Aube, garantissant une tranquillité durable à tous les résidents.",
  },
  {
    question: "Est-ce que les ultrasons sont efficaces pour protéger un grand entrepôt ?",
    answer: "Dans de grands volumes de stockage, les ultrasons sont inefficaces car les ondes sont bloquées par les palettes et les rayonnages. Pour obtenir un résultat professionnel dans votre dépôt, seule une stratégie de lutte intégrée (chimique et mécanique) permet de stopper réellement les dégâts sur vos marchandises.",
  },
  {
    question: "Comment boucher les points d'entrée dans une structure industrielle ?",
    answer: "Nous procédons au colmatage des passages techniques avec des matériaux résistants comme la maille d'inox ou des mortiers hydrofuges. L'étanchéité de votre bâtiment est la première ligne de défense pour empêcher toute nouvelle intrusion de rongeurs par les bas de portes ou les gaines de câblage.",
  },
];

const DeratisationTroyes = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://gf-nuisibles.fr/#organization",
        "name": "G&F Nuisibles",
        "telephone": "07.65.25.67.92",
        "priceRange": "$$",
        "image": "https://gf-nuisibles.fr/og-image.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "27 rue principale",
          "addressLocality": "Montsaon",
          "postalCode": "52000",
          "addressRegion": "Haute-Marne",
          "addressCountry": "FR"
        }
      },
      {
        "@type": "Service",
        "name": TITLE,
        "url": "https://gf-nuisibles.fr/deratisation-troyes",
        "description": DESCRIPTION,
        "provider": {
          "@id": "https://gf-nuisibles.fr/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Troyes"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://gf-nuisibles.fr/deratisation-troyes" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Troyes"
        department="Aube (10)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS À TROYES ?"
        serviceCallSubtitle="G&F NUISIBLES : VOTRE EXPERT EN DÉRATISATION CERTIFIÉ !"
        intro="Troyes et ses environs sont régulièrement touchés par des infestations de rongeurs. Rats bruns, souris ou mulots colonisent caves, greniers et locaux professionnels. G&F Nuisibles intervient rapidement pour une dératisation efficace et durable."
        expertise="Nos techniciens certifiés maîtrisent toutes les espèces de rongeurs présentes en Aube (10). Nous intervenons chez les particuliers, entreprises, restaurants et collectivités avec des protocoles conformes aux normes sanitaires."
        method="Inspection complète pour identifier les points d'entrée et le niveau d'infestation. Mise en place de postes d'appâtage sécurisés, pièges mécaniques et obturation des accès. Suivi de contrôle inclus."
        cta="Protégez votre habitat à Troyes. Contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic gratuit et une intervention rapide."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DeratisationTroyes;
