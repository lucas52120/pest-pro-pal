import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Destruction de nids de Guêpes & Frelons à Joinville";
const DESCRIPTION = "Destruction nid de frelons à Joinville (52). G&F Nuisibles intervient en urgence. Sécurité garantie, devis gratuit.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le tarif pour détruire un nid de frelons à Joinville ?",
    answer: "À Joinville, l'intervention sur un nid de frelons débute à 110 €, tandis que pour les guêpes, le prix commence à 85 €. Le coût final est déterminé par l'accessibilité du nid (en hauteur, sous toiture, etc.). Nous validons systématiquement un prix définitif avec vous avant toute action.",
  },
  {
    question: "Est-ce que les pompiers interviennent encore pour les nids à Joinville ?",
    answer: "Non, les pompiers de la Haute-Marne n'interviennent plus pour les nids de guêpes et frelons sur le domaine privé. Ils vous redirigeront vers des professionnels certifiés comme GF Nuisibles, équipés pour neutraliser les colonies en toute sécurité.",
  },
  {
    question: "Votre intervention est-elle garantie si les insectes reviennent ?",
    answer: "Absolument. Chaque traitement réalisé à Joinville est garanti. Si le nid traité présente encore une activité 48h après notre passage, nous revenons gratuitement pour finaliser l'éradication. Votre satisfaction et votre sécurité sont nos priorités.",
  },
];

const GuepesFrelonsJoinville = () => {
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
          "name": "Joinville"
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
        city="Joinville"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À JOINVILLE ?"
        serviceCallSubtitle="G&F NUISIBLES INTERVIENT EN URGENCE POUR VOTRE SÉCURITÉ !"
        intro="Chaque été, Joinville voit se multiplier les nids de guêpes et frelons asiatiques. Ne prenez aucun risque : G&F Nuisibles neutralise les colonies avec un équipement professionnel adapté et une intervention garantie."
        expertise="Nos techniciens qualifiés interviennent à Joinville et dans toute la Haute-Marne pour la destruction de nids de guêpes, frelons européens et frelons asiatiques. Intervention sécurisée, rapide et garantie."
        method="Repérage et évaluation du nid, sécurisation du périmètre, traitement par insecticide professionnel et retrait du nid. Intervention possible en hauteur et dans les zones difficiles d'accès."
        cta="Nid de guêpes ou frelons à Joinville ? Appelez G&F Nuisibles au 07.65.25.67.92 pour une intervention d'urgence."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default GuepesFrelonsJoinville;
