import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Dijon en Côte-d'Or 21 | G&F Nuisibles";
const DESCRIPTION = "Rats ou souris à Dijon ? G&F Nuisibles, dératiseur certifié en Côte-d'Or 21, élimine tous les rongeurs. Devis gratuit, intervention 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le tarif d'une dératisation urgente pour un restaurant à Dijon ?",
    answer: "Pour les restaurateurs de Dijon, le prix est défini selon l'ampleur de l'infestation et la réactivité nécessaire pour éviter une fermeture administrative. Nous intervenons en urgence dans la métropole dijonnaise avec des forfaits \"choc\" conçus pour assainir vos cuisines en un temps record.",
  },
  {
    question: "Les produits utilisés sont-ils sans danger pour les cuisines professionnelles ?",
    answer: "Oui, nos techniciens appliquent des protocoles stricts conformes aux normes HACCP. Les rodenticides sont placés dans des boîtiers sécurisés inaccessibles, évitant tout risque de contamination croisée avec les aliments ou les plans de travail dans votre établissement.",
  },
  {
    question: "Pourquoi un pro est-il indispensable pour une usine ou un laboratoire ?",
    answer: "Au-delà de l'efficacité, l'expert vous remet un rapport d'intervention détaillé exigé par les services vétérinaires et les auditeurs qualité. Cette documentation prouve que vous prenez toutes les mesures nécessaires pour protéger vos chaînes de production en Côte-d'Or.",
  },
];

const DeratisationDijon = () => {
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
        "url": "https://gf-nuisibles.fr/deratisation-dijon",
        "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Dijon" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": { "@type": "Answer", "text": item.answer }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://gf-nuisibles.fr/deratisation-dijon" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Dijon"
        department="Côte-d'Or (21)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS À DIJON ?"
        serviceCallSubtitle="G&F NUISIBLES : VOTRE EXPERT EN DÉRATISATION CERTIFIÉ !"
        intro="Dijon et ses environs sont régulièrement touchés par des infestations de rongeurs. Rats bruns, souris ou mulots colonisent caves, greniers et locaux professionnels. G&F Nuisibles intervient rapidement pour une dératisation efficace et durable."
        expertise="Nos techniciens certifiés maîtrisent toutes les espèces de rongeurs présentes en Côte-d'Or (21). Nous intervenons chez les particuliers, entreprises, restaurants et collectivités avec des protocoles conformes aux normes sanitaires."
        method="Inspection complète pour identifier les points d'entrée et le niveau d'infestation. Mise en place de postes d'appâtage sécurisés, pièges mécaniques et obturation des accès. Suivi de contrôle inclus."
        cta="Protégez votre habitat à Dijon. Contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic gratuit et une intervention rapide."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DeratisationDijon;
