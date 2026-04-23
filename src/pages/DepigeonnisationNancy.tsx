import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Nancy en Meurthe-et-Moselle 54 | G&F Nuisibles";
const DESCRIPTION = "Pigeons à Nancy ? G&F Nuisibles installe des solutions anti-pigeons durables en Meurthe-et-Moselle 54. Dépigeonnage garanti.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le coût d'un contrat de dépigeonnage à Nancy ?",
    answer: "Pour les immeubles de Nancy, le tarif dépend du nombre de façades à traiter et de l'état d'encrassement initial. Nous proposons des contrats incluant le nettoyage haute pression et la pose de protections, assurant une valorisation immédiate de votre patrimoine immobilier en Meurthe-et-Moselle.",
  },
  {
    question: "Quelles maladies les pigeons transmettent-ils dans les zones urbaines denses ?",
    answer: "Outre les infections respiratoires, les pigeons peuvent propager la gale ou véhiculer des acariens. Dans un environnement de travail partagé, une infestation peut rapidement devenir un problème de santé au travail, nécessitant l'intervention d'un expert certifié.",
  },
  {
    question: "Quelle est la méthode la plus efficace pour les locaux ?",
    answer: "L'usage combiné de pics sur les corniches et de systèmes répulsifs (gels ou boîtiers à ultrasons professionnels) donne d'excellents résultats. Cela permet de garder les oiseaux à distance des tables de vos clients sans nuire à l'esthétique de votre établissement nancéien.",
  },
];

const DepigeonnisationNancy = () => {
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
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="PIGEONS ENVAHISSANTS À NANCY ?"
        serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS BÂTIMENTS DURABLEMENT !"
        intro="Les pigeons causent des nuisances importantes à Nancy : fientes corrosives, dégradation des façades, risques sanitaires. G&F Nuisibles met en place des dispositifs professionnels pour éloigner durablement ces volatiles."
        expertise="Experts en dépigeonnisation en Meurthe-et-Moselle (54), nous proposons des solutions adaptées à chaque type de bâtiment : pics anti-pigeons, filets de protection, systèmes de répulsion électrique et capture."
        method="Évaluation de la situation et cartographie des zones touchées. Installation de dispositifs anti-perchage et anti-nidification. Nettoyage et désinfection des zones souillées. Suivi de l'efficacité du dispositif."
        cta="Protégez vos bâtiments à Nancy. Appelez le 07.65.25.67.92 pour une solution anti-pigeons professionnelle et durable."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DepigeonnisationNancy;
