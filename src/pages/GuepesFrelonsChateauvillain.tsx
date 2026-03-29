import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Destruction de nids de Guêpes & Frelons à Châteauvillain";
const DESCRIPTION = "Nid de guêpes à Châteauvillain ? G&F Nuisibles détruit nids de guêpes et frelons en Haute-Marne 52. Urgence 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Prix d'une intervention guêpes/frelons à Châteauvillain ?",
    answer: "Le coût à Châteauvillain commence à 85 € pour les guêpes et 110 € pour les frelons. La hauteur et les moyens techniques nécessaires font varier ce tarif. Le prix est fixé et validé avec vous avant toute manipulation.",
  },
  {
    question: "Que faire si je découvre un nid dans mon grenier à Châteauvillain ?",
    answer: "Ne bouchez pas le trou de sortie, les insectes chercheraient une autre issue à l'intérieur. En Haute-Marne, nous intervenons rapidement pour éliminer la colonie avec des produits certifiés Certibiocide, inaccessibles au public.",
  },
  {
    question: "Pourquoi les frelons asiatiques sont-ils plus problématiques ?",
    answer: "Ils sont plus agressifs et leurs colonies sont beaucoup plus vastes. À Châteauvillain, leurs nids peuvent atteindre la taille d'un ballon de basket en quelques semaines seulement. Contactez un expert dès les premiers signes.",
  },
];

const GuepesFrelonsChateauvillain = () => {
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
          "name": "Châteauvillain"
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
        city="Châteauvillain"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À CHÂTEAUVILLAIN ?"
        serviceCallSubtitle="G&F NUISIBLES INTERVIENT EN URGENCE POUR VOTRE SÉCURITÉ !"
        intro="À Châteauvillain, les nids de guêpes et de frelons représentent un danger réel pour les habitants. G&F Nuisibles intervient rapidement pour neutraliser et retirer les nids en toute sécurité, que ce soit chez vous ou dans vos locaux professionnels."
        expertise="Nos techniciens qualifiés interviennent à Châteauvillain et dans toute la Haute-Marne pour la destruction de nids de guêpes, frelons européens et frelons asiatiques. Intervention sécurisée, rapide et garantie."
        method="Repérage et évaluation du nid, sécurisation du périmètre, traitement par insecticide professionnel et retrait du nid. Intervention possible en hauteur et dans les zones difficiles d'accès."
        cta="Nid de guêpes ou frelons à Châteauvillain ? Appelez G&F Nuisibles au 07.88.17.45.86 pour une intervention d'urgence."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default GuepesFrelonsChateauvillain;
