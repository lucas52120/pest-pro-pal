import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Châtillon-sur-Seine en Côte-d'Or 21 | G&F Nuisibles";
const DESCRIPTION = "Nuisances de pigeons à Châtillon-sur-Seine ? G&F Nuisibles, expert en Côte-d'Or 21, protège vos façades et toitures. Diagnostic gratuit 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel budget pour une dépigeonnisation de bâtiment à Châtillon-sur-Seine ?",
    answer: "À Châtillon-sur-Seine, nous calculons nos tarifs en fonction de la logistique nécessaire (échafaudage ou nacelle). Pour les hangars agricoles ou industriels, nous installons des solutions robustes capables de résister aux intempéries tout en éloignant les volatiles durablement.",
  },
  {
    question: "Est-il interdit de tuer les pigeons dans les bâtiments publics ?",
    answer: "Oui, la loi s'applique à tous les types de bâtiments. Nous travaillons en étroite collaboration avec les gestionnaires de votre commune pour mettre en place des solutions de piégeage et de délocalisation qui respectent le bien-être animal tout en protégeant les infrastructures.",
  },
  {
    question: "Comment faire fuir les pigeons définitivement des balcons de bureaux ?",
    answer: "La pose de pics \"Ecopics\" ou de fils tendus est la solution idéale. Ces dispositifs ne blessent pas l'oiseau mais rendent son atterrissage impossible, garantissant ainsi la propreté de vos espaces de travail extérieurs dans le nord de la Côte-d'Or.",
  },
];

const DepigeonnisationChatillonSurSeine = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.gf-nuisibles.fr/#organization",
        "url": "https://www.gf-nuisibles.fr",
        "name": "G&F Nuisibles",
        "telephone": "07.65.25.67.92",
        "priceRange": "$$",
        "image": "https://www.gf-nuisibles.fr/og-image.png",
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
        "url": "https://www.gf-nuisibles.fr/services/depigeonnisation/chatillon-sur-seine",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://www.gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Châtillon-sur-Seine" }
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
        <link rel="canonical" href="https://www.gf-nuisibles.fr/services/depigeonnisation/chatillon-sur-seine" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Châtillon-sur-Seine"
        department="Côte-d'Or (21)"
        serviceTitle={TITLE}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="PIGEONS ENVAHISSANTS À CHÂTILLON-SUR-SEINE ?"
        serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS BÂTIMENTS DURABLEMENT !"
        intro="À Châtillon-sur-Seine, les colonies de pigeons s'installent sur les toits, balcons et corniches, provoquant salissures et dégradations. G&F Nuisibles intervient pour sécuriser vos espaces avec des solutions anti-pigeons éprouvées."
        expertise="Notre savoir-faire en Côte-d'Or (21) nous permet d'adapter chaque intervention à la configuration du bâtiment. Nous combinons plusieurs techniques de dépigeonnisation pour une efficacité maximale et durable."
        method="Analyse du site et identification des points de perchage. Pose de pics, filets ou fil tendu selon les besoins. Décontamination des surfaces touchées par les fientes. Garantie d'efficacité."
        cta="Pigeons à Châtillon-sur-Seine ? Contactez G&F Nuisibles au 07.65.25.67.92 pour une dépigeonnisation professionnelle garantie."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DepigeonnisationChatillonSurSeine;
