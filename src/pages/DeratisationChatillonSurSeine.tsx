import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Châtillon-sur-Seine en Côte-d'Or 21 | G&F | G&F Nuisibles";
const DESCRIPTION = "Rats ou souris à Châtillon-sur-Seine ? G&F Nuisibles, dératiseur certifié en Côte-d'Or 21, élimine tous les rongeurs. Devis gratuit, intervention 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel prix pour une dératisation de locaux administratifs à Châtillon-sur-Seine ?",
    answer: "Pour les entreprises et collectivités de Châtillon-sur-Seine, le coût est fixé selon le volume de bureaux et d'archives à traiter. Nous garantissons une tarification transparente et des interventions programmées pour ne pas perturber vos équipes administratives dans le nord de la Côte-d'Or.",
  },
  {
    question: "Dératisation en copropriété : qui prend en charge les frais ?",
    answer: "Généralement, ces prestations sont votées en assemblée générale et réparties dans les charges communes. S'il s'agit d'une urgence dans un local privé, le propriétaire ou le locataire peut être concerné selon l'origine de l'invasion dans votre immeuble ou résidence.",
  },
  {
    question: "Faut-il quitter les bureaux pendant le passage du technicien ?",
    answer: "Non, l'activité peut se poursuivre normalement. Nos interventions sont silencieuses et les produits n'émettent aucune odeur incommodante. Vos collaborateurs peuvent travailler en toute sérénité pendant que nous sécurisons les faux-plafonds et les locaux techniques de votre structure.",
  },
];

const DeratisationChatillonSurSeine = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://pest-pro-pal.lovable.app/#organization",
        "name": "G&F Nuisibles",
        "telephone": "07.88.17.45.86",
        "priceRange": "$$",
        "image": "https://pest-pro-pal.lovable.app/og-image.png",
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
        "description": DESCRIPTION,
        "provider": { "@id": "https://pest-pro-pal.lovable.app/#organization" },
        "areaServed": { "@type": "City", "name": "Châtillon-sur-Seine" }
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
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Châtillon-sur-Seine"
        department="Côte-d'Or (21)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS À CHÂTILLON-SUR-SEINE ?"
        serviceCallSubtitle="G&F NUISIBLES : VOTRE EXPERT EN DÉRATISATION CERTIFIÉ !"
        intro="Châtillon-sur-Seine et ses environs sont régulièrement touchés par des infestations de rongeurs. Rats bruns, souris ou mulots colonisent caves, greniers et locaux professionnels. G&F Nuisibles intervient rapidement pour une dératisation efficace et durable."
        expertise="Nos techniciens certifiés maîtrisent toutes les espèces de rongeurs présentes en Côte-d'Or (21). Nous intervenons chez les particuliers, entreprises, restaurants et collectivités avec des protocoles conformes aux normes sanitaires."
        method="Inspection complète pour identifier les points d'entrée et le niveau d'infestation. Mise en place de postes d'appâtage sécurisés, pièges mécaniques et obturation des accès. Suivi de contrôle inclus."
        cta="Protégez votre habitat à Châtillon-sur-Seine. Contactez G&F Nuisibles au 07.88.17.45.86 pour un diagnostic gratuit et une intervention rapide."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DeratisationChatillonSurSeine;
