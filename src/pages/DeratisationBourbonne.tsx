import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Bourbonne-les-Bains en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Dératisation professionnelle à Bourbonne-les-Bains (52). G&F Nuisibles éradique rats et souris. Devis gratuit, intervention garantie.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le prix d'un traitement anti-rats à Bourbonne-les-Bains ?",
    answer: "À Bourbonne-les-Bains, nous adaptons nos prix à la spécificité de chaque logement ou établissement thermal. Le coût est influencé par la surface à protéger et la persistance de l'infestation. Contactez-nous pour un chiffrage rapide et sans engagement.",
  },
  {
    question: "Combien de temps dure un traitement contre les rongeurs ?",
    answer: "En moyenne, une éradication complète prend entre 10 et 21 jours. Ce délai permet de couvrir tout le cycle de consommation des appâts par l'ensemble de la colonie présente dans votre secteur.",
  },
  {
    question: "Faut-il quitter son logement pendant une dératisation ?",
    answer: "Non, ce n'est pas nécessaire. Nos interventions sont conçues pour être les moins invasives possible. Les dispositifs sont placés dans des endroits discrets et sécurisés, vous permettant de continuer à vivre normalement dans votre maison pendant l'opération.",
  },
];

const DeratisationBourbonne = () => {
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
          "name": "Bourbonne-les-Bains"
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
        city="Bourbonne-les-Bains"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS À BOURBONNE-LES-BAINS ?"
        serviceCallSubtitle="G&F NUISIBLES, VOTRE EXPERT EN DÉRATISATION !"
        intro="Les rongeurs prolifèrent dans les zones rurales et urbaines de Bourbonne-les-Bains. Rats bruns, souris domestiques et mulots menacent vos installations et votre santé. G&F Nuisibles vous garantit une dératisation efficace et durable."
        expertise="Nous intervenons chez les particuliers, entreprises et collectivités de Bourbonne-les-Bains et ses environs. Notre expertise couvre toutes les espèces de rongeurs présentes en Haute-Marne, avec des protocoles conformes aux normes sanitaires."
        method="Diagnostic complet des lieux, identification des points d'entrée et du niveau d'infestation. Mise en place de dispositifs professionnels : appâts sécurisés, pièges, obturation des accès. Suivi et contrôle post-intervention garantis."
        cta="Protégez votre habitat à Bourbonne-les-Bains. Appelez G&F Nuisibles au 07.88.17.45.86 pour un devis gratuit et une intervention rapide."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DeratisationBourbonne;
