import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Arc-en-Barrois en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Rats ou souris à Arc-en-Barrois ? G&F Nuisibles, dératiseur certifié en Haute-Marne 52, assure une éradication complète. Intervention sous 24h, devis gratuit.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Comment savoir si j'ai des rats ou des souris à Arc-en-Barrois ?",
    answer: "Les signes typiques sont les excréments noirs le long des murs, les bruits de grattement nocturnes dans les cloisons, et les traces de grignotage sur les câbles ou emballages. À Arc-en-Barrois, nos techniciens réalisent un diagnostic gratuit pour identifier précisément l'espèce et le niveau d'infestation.",
  },
  {
    question: "Vos appâts sont-ils sécurisés pour les animaux domestiques ?",
    answer: "Absolument. Nous utilisons exclusivement des postes d'appâtage verrouillés et normés, inaccessibles aux chiens, chats et enfants. À Arc-en-Barrois, chaque dispositif est positionné stratégiquement pour cibler les rongeurs sans risque pour votre foyer.",
  },
  {
    question: "Combien de temps dure une dératisation à Arc-en-Barrois ?",
    answer: "Le traitement initial prend environ 1 à 2 heures. Un suivi de contrôle est ensuite planifié sous 2 à 3 semaines pour vérifier l'efficacité du dispositif et ajuster si nécessaire. La plupart des infestations à Arc-en-Barrois sont résolues en 2 à 4 semaines.",
  },
];

const DeratisationArcEnBarrois = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://pest-pro-pal.lovable.app/#organization",
        "name": "G&F Nuisibles",
        "telephone": "07.65.25.67.92",
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
        "areaServed": { "@type": "City", "name": "Arc-en-Barrois" }
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
        city="Arc-en-Barrois"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS DANS VOTRE HABITATION À ARC-EN-BARROIS ?"
        serviceCallSubtitle="G&F NUISIBLES VOUS GARANTIT UNE DÉRATISATION PROFESSIONNELLE !"
        intro="Arc-en-Barrois, avec son environnement rural et forestier, est un territoire où rats bruns et souris domestiques trouvent facilement refuge dans les habitations et dépendances. G&F Nuisibles, votre dératiseur de proximité basé à Montsaon, intervient rapidement pour stopper l'infestation avant qu'elle ne s'aggrave."
        expertise="Nous intervenons chez les particuliers, agriculteurs et professionnels d'Arc-en-Barrois et alentours. Nos protocoles conformes aux normes sanitaires couvrent toutes les espèces de rongeurs présentes en Haute-Marne, avec des solutions adaptées à chaque configuration de bâtiment."
        method="Audit complet de votre site à Arc-en-Barrois pour évaluer le niveau d'infestation et identifier les points d'entrée. Déploiement de postes d'appâtage sécurisés et de pièges professionnels. Obturation des accès. Rapport d'intervention et suivi de contrôle systématique."
        cta="Protégez votre habitation à Arc-en-Barrois. Appelez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit et une dératisation certifiée."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DeratisationArcEnBarrois;
