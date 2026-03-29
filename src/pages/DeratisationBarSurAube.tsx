import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Bar-sur-Aube dans l'Aube 10 | G&F Nuisibles";
const DESCRIPTION = "Invasion de rongeurs à Bar-sur-Aube ? G&F Nuisibles éradique rats et souris dans l'Aube 10. Diagnostic offert, opération rapide 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel budget pour éliminer des rongeurs à Bar-sur-Aube ?",
    answer: "Le tarif pour une dératisation à Bar-sur-Aube varie selon que nous intervenions ponctuellement ou dans le cadre d'un contrat de prévention. Pour protéger votre patrimoine dans l'Aube, nous vous proposons une grille tarifaire claire basée sur l'ampleur du traitement requis.",
  },
  {
    question: "Comment se débarrasser des rats de manière efficace et définitive ?",
    answer: "La clé d'un résultat durable réside dans la combinaison de l'élimination et du \"proofing\" (étanchéité). Une fois les individus supprimés, il est crucial de boucher les points de passage pour qu'aucun autre nuisible ne puisse coloniser à nouveau votre espace.",
  },
  {
    question: "Comment boucher les points d'entrée des rongeurs dans une maison ?",
    answer: "Il faut utiliser des matériaux résistants aux dents des rongeurs, comme de la laine d'acier, du grillage à mailles fines ou des mastics spécifiques. Nos techniciens inspectent minutieusement chaque recoin de votre propriété pour identifier ces failles de structure.",
  },
];

const DeratisationBarSurAube = () => {
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
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS À BAR-SUR-AUBE ?"
        serviceCallSubtitle="G&F NUISIBLES : VOTRE EXPERT EN DÉRATISATION CERTIFIÉ !"
        intro="À Bar-sur-Aube, les rongeurs trouvent des conditions idéales pour proliférer. Que ce soit dans les habitations ou les commerces, une infestation non traitée peut causer des dégâts considérables. G&F Nuisibles propose une éradication complète et garantie."
        expertise="Spécialistes de la lutte anti-rongeurs en Aube (10), nos équipes utilisent des techniques éprouvées adaptées à chaque situation. Notre approche combine efficacité immédiate et prévention à long terme."
        method="Audit détaillé de votre site pour évaluer l'ampleur de l'infestation. Déploiement d'un dispositif multi-techniques : rodenticides sécurisés, pièges professionnels, colmatage des passages. Rapport et suivi systématique."
        cta="Ne laissez pas les rongeurs s'installer à Bar-sur-Aube. Appelez le 07.88.17.45.86 pour une expertise certifiée et un devis sans engagement."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DeratisationBarSurAube;
