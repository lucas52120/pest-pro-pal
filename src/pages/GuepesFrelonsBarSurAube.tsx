import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Destruction de nids de Guêpes & Frelons à Bar-sur-Aube";
const DESCRIPTION = "Nid de guêpes ou frelons à Bar-sur-Aube ? G&F Nuisibles intervient en urgence dans l'Aube 10. Destruction sécurisée, devis gratuit.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le prix d'une intervention sur un nid de guêpes à Bar-sur-Aube ?",
    answer: "À Bar-sur-Aube, l'élimination d'un nid de guêpes est facturée à partir de 85 €. Pour les frelons, le coût démarre à 110 €. Le devis dépend de l'accessibilité du site. Aucun frais caché : le tarif validé ensemble est celui appliqué sur votre facture finale.",
  },
  {
    question: "Pourquoi ne pas utiliser une bombe insecticide du commerce ?",
    answer: "Ces sprays excitent souvent les insectes sans détruire la colonie entière. Pour les habitants de l'Aube, GF Nuisibles utilise des biocides professionnels foudroyants et un équipement de protection intégrale qui garantit une neutralisation immédiate.",
  },
  {
    question: "Le frelon asiatique est-il présent dans le secteur de Bar-sur-Aube ?",
    answer: "Oui, il colonise la région. Il se distingue par son thorax noir et ses pattes jaunes. Son nid sphérique peut atteindre une taille impressionnante. Si vous repérez un va-et-vient suspect, ne vous approchez pas et contactez-nous.",
  },
];

const GuepesFrelonsBarSurAube = () => {
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
        "provider": {
          "@id": "https://pest-pro-pal.lovable.app/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Bar-sur-Aube"
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
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Bar-sur-Aube"
        department="Aube (10)"
        serviceTitle={TITLE}
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À BAR-SUR-AUBE ?"
        serviceCallSubtitle="G&F NUISIBLES NEUTRALISE LES NIDS EN TOUTE SÉCURITÉ !"
        intro="Les guêpes et frelons représentent un danger réel à Bar-sur-Aube et ses alentours. Un nid mal situé peut provoquer des piqûres graves voire des réactions allergiques. G&F Nuisibles neutralise tous les nids en toute sécurité."
        expertise="Formés à la destruction de nids en hauteur, sous toiture et dans les cavités, nos techniciens interviennent avec des équipements de protection adaptés. Nous traitons guêpes communes, frelons européens et frelons asiatiques en Aube (10)."
        method="Repérage du nid et sécurisation du périmètre. Application d'un insecticide professionnel directement dans le nid. Retrait du nid si accessible. Vérification de l'élimination complète de la colonie."
        cta="Un nid chez vous à Bar-sur-Aube ? Appelez immédiatement le 07.88.17.45.86 pour une intervention d'urgence."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default GuepesFrelonsBarSurAube;
