import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Bar-sur-Aube dans l'Aube 10 | G&F Nuisibles";
const DESCRIPTION = "Pigeons à Bar-sur-Aube ? G&F Nuisibles installe des solutions anti-pigeons durables dans l'Aube 10. Devis gratuit, intervention rapide.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le coût d'une dépigeonnisation à Bar-sur-Aube ?",
    answer: "Le prix moyen à Bar-sur-Aube est déterminé par la surface à protéger et le niveau d'infestation. Pour les sites industriels de l'Aube, nous réalisons un audit technique complet afin de proposer le dispositif le plus rentable sur le long terme, garantissant la propreté de vos quais de déchargement.",
  },
  {
    question: "Comment se débarrasser des pigeons naturellement dans une grange ou un dépôt ?",
    answer: "L'utilisation de gels répulsifs naturels à base d'extraits végétaux peut être une option pour les sites historiques ou sensibles. Ces solutions modifient la perception visuelle et olfactive des volatiles, les incitant à quitter vos bâtiments sans aucun impact chimique sur l'environnement.",
  },
  {
    question: "Pourquoi choisir la capture par piégeage pour une copropriété ?",
    answer: "Lorsque la population de pigeons est trop dense, les dispositifs d'éloignement ne suffisent plus. Le piégeage permet de réduire drastiquement le nombre d'individus de manière éthique et silencieuse, sans déranger les résidents de l'immeuble ou les passants dans votre secteur.",
  },
];

const DepigeonnisationBarSurAube = () => {
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
        "provider": { "@id": "https://pest-pro-pal.lovable.app/#organization" },
        "areaServed": { "@type": "City", "name": "Bar-sur-Aube" }
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
        city="Bar-sur-Aube"
        department="Aube (10)"
        serviceTitle={TITLE}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="PIGEONS ENVAHISSANTS À BAR-SUR-AUBE ?"
        serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS BÂTIMENTS DURABLEMENT !"
        intro="Les pigeons causent des nuisances importantes à Bar-sur-Aube : fientes corrosives, dégradation des façades, risques sanitaires. G&F Nuisibles met en place des dispositifs professionnels pour éloigner durablement ces volatiles."
        expertise="Experts en dépigeonnisation dans l'Aube (10), nous proposons des solutions adaptées à chaque type de bâtiment : pics anti-pigeons, filets de protection, systèmes de répulsion électrique et capture."
        method="Évaluation de la situation et cartographie des zones touchées. Installation de dispositifs anti-perchage et anti-nidification. Nettoyage et désinfection des zones souillées. Suivi de l'efficacité du dispositif."
        cta="Protégez vos bâtiments à Bar-sur-Aube. Appelez le 07.88.17.45.86 pour une solution anti-pigeons professionnelle et durable."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DepigeonnisationBarSurAube;
