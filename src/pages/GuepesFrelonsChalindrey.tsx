import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Destruction de nids de Guêpes & Frelons à Chalindrey";
const DESCRIPTION = "Destruction nid de frelons à Chalindrey (52). G&F Nuisibles intervient en urgence. Sécurité garantie, devis gratuit.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Combien coûte une intervention pour nids de frelons à Chalindrey ?",
    answer: "À Chalindrey, nous intervenons à partir de 110 € pour les frelons et 85 € pour les guêpes. Le montant varie selon la hauteur du nid. Transparence totale : nous confirmons le prix ferme avec vous avant de déployer notre matériel.",
  },
  {
    question: "Pourquoi les nids de guêpes sont-ils plus fréquents sous les tuiles ?",
    answer: "La chaleur accumulée sous le toit de votre maison à Chalindrey favorise le développement des larves. C'est un endroit protégé des intempéries. Nos techniciens utilisent des cannes d'injection pour traiter ces nids sans avoir à soulever toutes vos tuiles.",
  },
  {
    question: "Proposez-vous des forfaits pour les mairies ou entreprises de Chalindrey ?",
    answer: "Oui, GF Nuisibles collabore avec les professionnels et les collectivités de Haute-Marne. Nous proposons des contrats d'entretien ou des tarifs dégressifs en cas de nids multiples sur un même site ou une même commune.",
  },
];

const GuepesFrelonsChalindrey = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "G&F Nuisibles",
        "telephone": "07.88.17.45.86",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chalindrey",
          "addressRegion": "Haute-Marne",
          "postalCode": "52600",
          "addressCountry": "FR"
        }
      },
      {
        "@type": "Service",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": {
          "@type": "LocalBusiness",
          "name": "G&F Nuisibles"
        },
        "areaServed": {
          "@type": "City",
          "name": "Chalindrey"
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
        city="Chalindrey"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À CHALINDREY ?"
        serviceCallSubtitle="G&F NUISIBLES INTERVIENT EN URGENCE POUR VOTRE SÉCURITÉ !"
        intro="Les guêpes et frelons s'installent fréquemment dans les habitations et jardins de Chalindrey. Leur présence constitue un risque majeur, surtout pour les personnes allergiques. Faites appel à G&F Nuisibles pour une destruction rapide et sécurisée."
        expertise="Nos techniciens qualifiés interviennent à Chalindrey et dans toute la Haute-Marne pour la destruction de nids de guêpes, frelons européens et frelons asiatiques. Intervention sécurisée, rapide et garantie."
        method="Repérage et évaluation du nid, sécurisation du périmètre, traitement par insecticide professionnel et retrait du nid. Intervention possible en hauteur et dans les zones difficiles d'accès."
        cta="Nid de guêpes ou frelons à Chalindrey ? Appelez G&F Nuisibles au 07.88.17.45.86 pour une intervention d'urgence."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default GuepesFrelonsChalindrey;
