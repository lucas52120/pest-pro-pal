import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Vittel dans les Vosges 88 | G&F Nuisibles";
const DESCRIPTION = "Nuisances de pigeons à Vittel ? G&F Nuisibles, expert dans les Vosges 88, protège vos façades et toitures. Diagnostic gratuit 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel tarif pour un service de dépigeonnage à Vittel ?",
    answer: "Maintenir le standing d'un établissement à Vittel nécessite une protection discrète. Le prix est fixé selon le type de protection (souvent des fils tendus inox) et l'accessibilité des balcons. Un devis gratuit vous permettra de chiffrer précisément l'intervention dans les Vosges.",
  },
  {
    question: "Comment se débarrasser des pigeons naturellement ?",
    answer: "Dans les secteurs sensibles comme les spas ou les hôtels, nous privilégions les répulsifs visuels ou olfactifs naturels. Ces méthodes, sans danger pour les clients, rompent les habitudes des oiseaux et les éloignent en douceur de vos espaces de détente.",
  },
  {
    question: "Pourquoi la capture et le piégeage sont-ils préconisés ?",
    answer: "Cette méthode non létale permet d'extraire les individus dominants qui attirent le reste de la colonie. En installant des cages de capture discrètes sur vos toitures, nous réduisons la pression aviaire sur l'ensemble de votre domaine de manière très efficace.",
  },
];

const DepigeonnisationVittel = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://gf-nuisibles.fr/#organization",
        "url": "https://gf-nuisibles.fr",
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
        "url": "https://gf-nuisibles.fr/services/depigeonnisation/vittel",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Vittel" }
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
        <link rel="canonical" href="https://gf-nuisibles.fr/services/depigeonnisation/vittel" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Vittel"
        department="Vosges (88)"
        serviceTitle={TITLE}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="PIGEONS ENVAHISSANTS À VITTEL ?"
        serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS BÂTIMENTS DURABLEMENT !"
        intro="À Vittel, les colonies de pigeons s'installent sur les toits, balcons et corniches, provoquant salissures et dégradations. G&F Nuisibles intervient pour sécuriser vos espaces avec des solutions anti-pigeons éprouvées."
        expertise="Notre savoir-faire dans les Vosges (88) nous permet d'adapter chaque intervention à la configuration du bâtiment. Nous combinons plusieurs techniques de dépigeonnisation pour une efficacité maximale et durable."
        method="Analyse du site et identification des points de perchage. Pose de pics, filets ou fil tendu selon les besoins. Décontamination des surfaces touchées par les fientes. Garantie d'efficacité."
        cta="Pigeons à Vittel ? Contactez G&F Nuisibles au 07.65.25.67.92 pour une dépigeonnisation professionnelle garantie."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DepigeonnisationVittel;
