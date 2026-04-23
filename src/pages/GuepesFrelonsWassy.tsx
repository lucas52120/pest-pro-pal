import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Destruction de nids de Guêpes & Frelons à Wassy";
const DESCRIPTION = "Nid de guêpes à Wassy ? G&F Nuisibles détruit nids de guêpes et frelons en Haute-Marne 52. Urgence 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Prix d'une destruction de nid de frelons asiatiques à Wassy ?",
    answer: "Le tarif de base à Wassy est de 110 € pour les frelons et de 85 € pour les guêpes. Le prix peut varier si l'utilisation d'une perche télescopique ou d'un équipement de travail en hauteur est nécessaire. Le prix annoncé au téléphone ou sur place est le prix final.",
  },
  {
    question: "Comment savoir si j'ai un nid de guêpes dans mon mur ou ma cloison ?",
    answer: "Un va-et-vient incessant d'insectes au même endroit (fissure, aération, dessous de tuile) est le signe d'un nid. À Wassy, n'essayez jamais de boucher le trou : les guêpes chercheraient à sortir par l'intérieur de votre maison, créant un danger bien plus grand.",
  },
  {
    question: "Quel est votre délai d'intervention en cas d'urgence à Wassy ?",
    answer: "Nous intervenons très rapidement en Haute-Marne, souvent dans la journée ou sous 24h. Nous sommes conscients du stress que représente un nid près d'une terrasse ou d'une école, c'est pourquoi nous traitons les urgences de Wassy en priorité.",
  },
];

const GuepesFrelonsWassy = () => {
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
        "provider": {
          "@id": "https://pest-pro-pal.lovable.app/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Wassy"
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
        city="Wassy"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À WASSY ?"
        serviceCallSubtitle="G&F NUISIBLES INTERVIENT EN URGENCE POUR VOTRE SÉCURITÉ !"
        intro="À Wassy, les nids de guêpes et de frelons représentent un danger réel pour les habitants. G&F Nuisibles intervient rapidement pour neutraliser et retirer les nids en toute sécurité, que ce soit chez vous ou dans vos locaux professionnels."
        expertise="Nos techniciens qualifiés interviennent à Wassy et dans toute la Haute-Marne pour la destruction de nids de guêpes, frelons européens et frelons asiatiques. Intervention sécurisée, rapide et garantie."
        method="Repérage et évaluation du nid, sécurisation du périmètre, traitement par insecticide professionnel et retrait du nid. Intervention possible en hauteur et dans les zones difficiles d'accès."
        cta="Nid de guêpes ou frelons à Wassy ? Appelez G&F Nuisibles au 07.65.25.67.92 pour une intervention d'urgence."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default GuepesFrelonsWassy;
