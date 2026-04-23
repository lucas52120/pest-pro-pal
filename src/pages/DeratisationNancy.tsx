import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Nancy en Meurthe-et-Moselle 54 | G&F Nuisibles";
const DESCRIPTION = "Invasion de rongeurs à Nancy ? G&F Nuisibles éradique rats et souris en Meurthe-et-Moselle 54. Diagnostic offert, opération rapide 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le tarif moyen d'une dératisation pour une usine à Nancy ?",
    answer: "À Nancy, le coût pour un site industriel est évalué après une étude de risques précise. Le prix varie selon le périmètre de protection extérieur et intérieur requis pour stopper les intrusions massives. Nous éditons des devis personnalisés pour répondre aux exigences de votre cahier des charges sécurité.",
  },
  {
    question: "Quelles sont les méthodes les plus efficaces contre les rats en milieu urbain ?",
    answer: "La lutte intégrée est la seule solution viable. Elle associe des pièges connectés, des rodenticides de haute technologie et une analyse fine des points de vulnérabilité de votre bâtiment. Cette approche garantit un contrôle total sur les populations de rongeurs dans ce secteur de Meurthe-et-Moselle.",
  },
  {
    question: "Quels risques courent mes stocks en cas d'infestation ?",
    answer: "Au-delà de la consommation de produits, les rongeurs souillent les emballages avec leur urine, rendant vos marchandises impropres à la vente. Un défaut de dératisation peut entraîner des pertes financières colossales et une rupture de confiance avec vos clients.",
  },
];

const DeratisationNancy = () => {
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
        "areaServed": { "@type": "City", "name": "Nancy" }
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
        city="Nancy"
        department="Meurthe-et-Moselle (54)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS À NANCY ?"
        serviceCallSubtitle="G&F NUISIBLES : VOTRE EXPERT EN DÉRATISATION CERTIFIÉ !"
        intro="À Nancy, les rongeurs trouvent des conditions idéales pour proliférer. Que ce soit dans les habitations ou les commerces, une infestation non traitée peut causer des dégâts considérables. G&F Nuisibles propose une éradication complète et garantie."
        expertise="Spécialistes de la lutte anti-rongeurs en Meurthe-et-Moselle (54), nos équipes utilisent des techniques éprouvées adaptées à chaque situation. Notre approche combine efficacité immédiate et prévention à long terme."
        method="Audit détaillé de votre site pour évaluer l'ampleur de l'infestation. Déploiement d'un dispositif multi-techniques : rodenticides sécurisés, pièges professionnels, colmatage des passages. Rapport et suivi systématique."
        cta="Ne laissez pas les rongeurs s'installer à Nancy. Appelez le 07.65.25.67.92 pour une expertise certifiée et un devis sans engagement."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DeratisationNancy;
