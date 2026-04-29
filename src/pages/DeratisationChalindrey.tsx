import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Chalindrey en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Dératisation professionnelle à Chalindrey (52). G&F Nuisibles éradique rats et souris. Devis gratuit, intervention garantie.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel budget prévoir pour une dératisation professionnelle à Chalindrey ?",
    answer: "À Chalindrey, le prix est fixé après une évaluation du niveau de risque et de la taille du site à traiter. Qu'il s'agisse d'un pavillon ou d'un local professionnel, nous vous assurons une intervention rapide avec un prix annoncé avant le début des travaux."
  },
  {
    question: "Pourquoi faire appel à un pro plutôt que d'acheter des pièges ?",
    answer: "Un professionnel possède une connaissance approfondie du comportement des rongeurs. Nous savons placer les appâts sur les chemins de passage stratégiques, ce qui garantit un résultat bien plus rapide et pérenne que l'utilisation de pièges vendus en grande surface."
  },
  {
    question: "Quelles sont les maladies transmises par les rats ?",
    answer: "Ces animaux peuvent véhiculer des agents pathogènes dangereux par leurs poils ou leurs déjections. Pour protéger la santé des occupants de votre foyer à proximité de la gare ou du centre-ville, une dératisation rigoureuse est la seule solution viable."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://gf-nuisibles.fr/#organization",
      "name": "G&F Nuisibles",
      "url": "https://gf-nuisibles.fr",
      "telephone": "07 65 25 67 92",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "27 rue principale",
        "addressLocality": "Montsaon",
        "postalCode": "52000",
        "addressCountry": "FR"
      },
      "image": "https://gf-nuisibles.fr/og-image.png"
    },
    {
      "@type": "Service",
      "name": TITLE,
        "url": "https://gf-nuisibles.fr/deratisation-chalindrey",
      "description": DESCRIPTION,
      "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
      "areaServed": { "@type": "City", "name": "Chalindrey" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQ_ITEMS.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    }
  ]
};

const DeratisationChalindrey = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://gf-nuisibles.fr/deratisation-chalindrey" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Chalindrey"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS À CHALINDREY ?"
        serviceCallSubtitle="G&F NUISIBLES, VOTRE EXPERT EN DÉRATISATION !"
        intro="Les rongeurs prolifèrent dans les zones rurales et urbaines de Chalindrey. Rats bruns, souris domestiques et mulots menacent vos installations et votre santé. G&F Nuisibles vous garantit une dératisation efficace et durable."
        expertise="Nous intervenons chez les particuliers, entreprises et collectivités de Chalindrey et ses environs. Notre expertise couvre toutes les espèces de rongeurs présentes en Haute-Marne, avec des protocoles conformes aux normes sanitaires."
        method="Diagnostic complet des lieux, identification des points d'entrée et du niveau d'infestation. Mise en place de dispositifs professionnels : appâts sécurisés, pièges, obturation des accès. Suivi et contrôle post-intervention garantis."
        cta="Protégez votre habitat à Chalindrey. Appelez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit et une intervention rapide."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DeratisationChalindrey;
