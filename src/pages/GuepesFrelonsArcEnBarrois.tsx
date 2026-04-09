import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Destruction de nids de Guêpes & Frelons à Arc-en-Barrois";
const DESCRIPTION = "Nid de guêpes ou frelons à Arc-en-Barrois ? G&F Nuisibles intervient en urgence en Haute-Marne 52. Expertise certifiée, élimination sécurisée, devis gratuit.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le prix pour détruire un nid de guêpes à Arc-en-Barrois ?",
    answer: "À Arc-en-Barrois, nos tarifs débutent à 85 € pour un nid de guêpes et 110 € pour un nid de frelons. Le prix exact dépend de l'accessibilité du nid (hauteur, toiture, cheminée). Un devis gratuit et définitif vous est remis avant toute intervention.",
  },
  {
    question: "Intervenez-vous le week-end à Arc-en-Barrois ?",
    answer: "Oui, G&F Nuisibles assure un service d'urgence 7j/7 à Arc-en-Barrois et ses environs. Les piqûres de frelons asiatiques pouvant être dangereuses, nous nous déplaçons rapidement, y compris les samedis, dimanches et jours fériés.",
  },
  {
    question: "Comment savoir si c'est un frelon asiatique ou européen ?",
    answer: "Le frelon asiatique est plus sombre avec des pattes jaunes, tandis que l'européen est plus grand et brun-roux. À Arc-en-Barrois, nos techniciens identifient l'espèce sur place et adaptent le traitement en conséquence pour une neutralisation efficace.",
  },
];

const GuepesFrelonsArcEnBarrois = () => {
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
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À ARC-EN-BARROIS ?"
        serviceCallSubtitle="G&F NUISIBLES NEUTRALISE LES COLONIES EN URGENCE !"
        intro="Arc-en-Barrois, nichée au cœur de la forêt haut-marnaise, est un territoire propice à l'installation des guêpes et frelons dès les beaux jours. G&F Nuisibles, basé à proximité à Montsaon, intervient en urgence pour supprimer les nids dangereux sur votre propriété ou vos locaux professionnels."
        expertise="Nos techniciens certifiés Certibiocide maîtrisent le retrait de nids en toiture, cheminée, arbre et sous-sol à Arc-en-Barrois. Nous utilisons exclusivement des biocides homologués et du matériel professionnel pour une élimination sûre, y compris en hauteur et en zones difficiles d'accès."
        method="Diagnostic sur place à Arc-en-Barrois pour localiser et identifier l'espèce. Application d'un traitement ciblé, puis retrait sécurisé du nid. Désinfection de la zone et conseils de prévention pour éviter toute réinstallation en Haute-Marne."
        cta="Nid de guêpes ou frelons à Arc-en-Barrois ? Appelez G&F Nuisibles au 07.88.17.45.86 pour une intervention rapide et sécurisée."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default GuepesFrelonsArcEnBarrois;
