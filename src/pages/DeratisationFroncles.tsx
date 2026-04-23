import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Froncles en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Rats à Froncles ? G&F Nuisibles, expert dératisation en Haute-Marne, intervient 7j/7. Diagnostic gratuit et résultat garanti.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Combien facturez-vous pour éliminer des nuisibles à Froncles ?",
    answer: "Le tarif d'une dératisation à Froncles est calculé selon l'urgence et le matériel déployé. Puisque chaque cas est spécifique, nous vous invitons à nous contacter pour obtenir une proposition tarifaire qui correspond exactement à vos besoins réels."
  },
  {
    question: "Dératisation : qui doit payer, le locataire ou le propriétaire ?",
    answer: "Sauf preuve de négligence grave du locataire, c'est au propriétaire de prendre en charge les frais de traitement. La loi impose en effet la fourniture d'un logement décent et exempt de nuisibles, une règle qui s'applique partout dans votre commune."
  },
  {
    question: "Comment se débarrasser des rats de manière efficace et définitive ?",
    answer: "Le secret réside dans une approche globale : élimination de la population existante, suppression des sources de nourriture et blocage hermétique des accès extérieurs. C'est cette méthodologie complète qui assure un environnement sain sur le long terme."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://pest-pro-pal.lovable.app/#organization",
      "name": "G&F Nuisibles",
      "url": "https://pest-pro-pal.lovable.app",
      "telephone": "07 65 25 67 92",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "27 rue principale",
        "addressLocality": "Montsaon",
        "postalCode": "52000",
        "addressCountry": "FR"
      },
      "image": "https://pest-pro-pal.lovable.app/og-image.png"
    },
    {
      "@type": "Service",
      "name": TITLE,
      "description": DESCRIPTION,
      "provider": { "@id": "https://pest-pro-pal.lovable.app/#organization" },
      "areaServed": { "@type": "City", "name": "Froncles" }
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

const DeratisationFroncles = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Froncles"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS À FRONCLES ?"
        serviceCallSubtitle="G&F NUISIBLES, VOTRE EXPERT EN DÉRATISATION !"
        intro="À Froncles, les infestations de rongeurs touchent aussi bien les particuliers que les professionnels. Nos techniciens certifiés interviennent pour éliminer rats et souris avec des méthodes éprouvées et respectueuses de l'environnement."
        expertise="Nous intervenons chez les particuliers, entreprises et collectivités de Froncles et ses environs. Notre expertise couvre toutes les espèces de rongeurs présentes en Haute-Marne, avec des protocoles conformes aux normes sanitaires."
        method="Diagnostic complet des lieux, identification des points d'entrée et du niveau d'infestation. Mise en place de dispositifs professionnels : appâts sécurisés, pièges, obturation des accès. Suivi et contrôle post-intervention garantis."
        cta="Protégez votre habitat à Froncles. Appelez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit et une intervention rapide."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DeratisationFroncles;
