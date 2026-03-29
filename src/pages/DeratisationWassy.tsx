import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Wassy en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Stop aux rats à Wassy ! G&F Nuisibles, dératiseur certifié en Haute-Marne 52, élimine rongeurs. Intervention rapide 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Est-il possible d'avoir un devis gratuit pour une dératisation à Wassy ?",
    answer: "Nous évaluons gratuitement votre situation à Wassy par téléphone ou sur place pour définir le coût de l'intervention. Que ce soit pour une maison individuelle ou un local pro en Haute-Marne, nous vous garantissons un prix juste, annoncé avant le début des travaux.",
  },
  {
    question: "Quels signes indiquent que je dois appeler un dératiseur à Wassy ?",
    answer: "Bruits de grattage dans les cloisons, excréments sombres ou emballages alimentaires grignotés sont des signes d'alerte. Si vous observez l'un de ces éléments à Wassy, n'attendez pas que la colonie se multiplie : une action précoce coûte toujours moins cher qu'un traitement massif.",
  },
  {
    question: "Vos traitements sont-ils discrets pour le voisinage ?",
    answer: "La discrétion est l'une de nos priorités à Wassy. Nos véhicules et nos méthodes d'intervention sont conçus pour ne pas attirer l'attention inutilement. Nous traitons votre problème de nuisibles avec efficacité et professionnalisme dans le respect de votre vie privée.",
  },
];

const DeratisationWassy = () => {
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
          "name": "Wassy"
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
        city="Wassy"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS À WASSY ?"
        serviceCallSubtitle="G&F NUISIBLES, VOTRE EXPERT EN DÉRATISATION !"
        intro="Wassy, commune de Haute-Marne, est régulièrement confrontée aux infestations de rongeurs. Rats et souris s'introduisent dans les habitations et commerces, causant dégâts et risques sanitaires. G&F Nuisibles intervient rapidement pour éradiquer le problème."
        expertise="Nous intervenons chez les particuliers, entreprises et collectivités de Wassy et ses environs. Notre expertise couvre toutes les espèces de rongeurs présentes en Haute-Marne, avec des protocoles conformes aux normes sanitaires."
        method="Diagnostic complet des lieux, identification des points d'entrée et du niveau d'infestation. Mise en place de dispositifs professionnels : appâts sécurisés, pièges, obturation des accès. Suivi et contrôle post-intervention garantis."
        cta="Protégez votre habitat à Wassy. Appelez G&F Nuisibles au 07.88.17.45.86 pour un devis gratuit et une intervention rapide."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DeratisationWassy;
