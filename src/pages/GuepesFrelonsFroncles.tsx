import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Destruction de nids de Guêpes & Frelons à Froncles";
const DESCRIPTION =
  "Guêpes ou frelons à Froncles ? G&F Nuisibles, spécialiste Haute-Marne 52, neutralise les nids rapidement. Appelez-nous !";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel prix pour un nid de guêpes ou frelons à Froncles ?",
    answer:
      "Le tarif d'une intervention à Froncles débute à 85 € pour les guêpes et à 110 € pour les frelons. Chaque situation est unique, c'est pourquoi nous fixons un prix définitif avec vous avant toute manipulation du nid.",
  },
  {
    question: "Est-ce que vous intervenez le week-end en cas d'urgence à Froncles ?",
    answer:
      "Oui, nous assurons des interventions d'urgence 7j/7 en Haute-Marne. Si un nid de frelons devient une menace immédiate pour votre famille ou vos clients à Froncles, nous nous déplaçons rapidement pour sécuriser les lieux.",
  },
  {
    question: "Comment éviter que les guêpes ne reviennent l'année prochaine ?",
    answer:
      "Il est impossible d'empêcher totalement la nature de reprendre ses droits, mais une destruction totale du nid actuel à Froncles avant l'envol des reines réduit fortement la population locale. Nous pouvons aussi vous conseiller sur la pose de pièges sélectifs au printemps.",
  },
];

const GuepesFrelonsFroncles = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.gf-nuisibles.fr/#organization",
        "url": "https://www.gf-nuisibles.fr",
        name: "G&F Nuisibles",
        telephone: "07.65.25.67.92",
        priceRange: "$$",
        image: "https://www.gf-nuisibles.fr/og-image.png",
        address: {
          "@type": "PostalAddress",
          streetAddress: "27 rue principale",
          addressLocality: "Montsaon",
          postalCode: "52000",
          addressRegion: "Haute-Marne",
          addressCountry: "FR",
        },
      },
      {
        "@type": "Service",
        "url": "https://www.gf-nuisibles.fr/guepes-frelons-froncles",
        name: TITLE,
        description: DESCRIPTION,
        provider: {
          "@id": "https://www.gf-nuisibles.fr/#organization",
        },
        areaServed: {
          "@type": "City",
          name: "Froncles",
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

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://www.gf-nuisibles.fr/guepes-frelons-froncles" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Froncles"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À FRONCLES ?"
        serviceCallSubtitle="G&F NUISIBLES INTERVIENT EN URGENCE POUR VOTRE SÉCURITÉ !"
        intro="Chaque été, Froncles voit se multiplier les nids de guêpes et frelons asiatiques. Ne prenez aucun risque : G&F Nuisibles neutralise les colonies avec un équipement professionnel adapté et une intervention garantie."
        expertise="Nos techniciens qualifiés interviennent à Froncles et dans toute la Haute-Marne pour la destruction de nids de guêpes, frelons européens et frelons asiatiques. Intervention sécurisée, rapide et garantie."
        method="Repérage et évaluation du nid, sécurisation du périmètre, traitement par insecticide professionnel et retrait du nid. Intervention possible en hauteur et dans les zones difficiles d'accès."
        cta="Nid de guêpes ou frelons à Froncles ? Appelez G&F Nuisibles au 07.65.25.67.92 pour une intervention d'urgence."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default GuepesFrelonsFroncles;
