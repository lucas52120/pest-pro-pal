import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Vittel dans les Vosges 88 | G&F Nuisibles";
const DESCRIPTION = "Rats ou souris à Vittel ? G&F Nuisibles, dératiseur certifié dans les Vosges 88, élimine tous les rongeurs. Devis gratuit, intervention 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le prix d'une intervention anti-nuisibles pour un hôtel à Vittel ?",
    answer: "Le coût pour un établissement à Vittel est calculé selon le nombre de chambres et les zones de restauration à sécuriser. Maintenir une image de marque irréprochable dans les Vosges nécessite une approche rigoureuse, c'est pourquoi nous proposons des tarifs compétitifs basés sur la prévention et le traitement curatif.",
  },
  {
    question: "Faut-il fermer mon établissement au public pendant la dératisation ?",
    answer: "Pas du tout. Nos méthodes permettent de traiter vos espaces sans évacuer le personnel ou les clients. Les postes d'appâtage sont hermétiques et installés dans des zones invisibles pour le public, garantissant une sécurité maximale et une continuité de service totale au sein de votre structure.",
  },
  {
    question: "Quels sont les signes qui prouvent la présence de rongeurs dans des cuisines pro ?",
    answer: "Soyez vigilants aux traces de gras le long des plinthes, aux emballages grignotés ou à une odeur d'ammoniaque persistante. Dans le secteur de l'hôtellerie, la moindre déjection retrouvée dans une réserve doit déclencher une intervention immédiate pour éviter tout scandale sanitaire.",
  },
];

const DeratisationVittel = () => {
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
          "name": "Vittel"
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
        city="Vittel"
        department="Vosges (88)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS À VITTEL ?"
        serviceCallSubtitle="G&F NUISIBLES : VOTRE EXPERT EN DÉRATISATION CERTIFIÉ !"
        intro="Vittel et ses environs sont régulièrement touchés par des infestations de rongeurs. Rats bruns, souris ou mulots colonisent caves, greniers et locaux professionnels. G&F Nuisibles intervient rapidement pour une dératisation efficace et durable."
        expertise="Nos techniciens certifiés maîtrisent toutes les espèces de rongeurs présentes en Vosges (88). Nous intervenons chez les particuliers, entreprises, restaurants et collectivités avec des protocoles conformes aux normes sanitaires."
        method="Inspection complète pour identifier les points d'entrée et le niveau d'infestation. Mise en place de postes d'appâtage sécurisés, pièges mécaniques et obturation des accès. Suivi de contrôle inclus."
        cta="Protégez votre habitat à Vittel. Contactez G&F Nuisibles au 07.88.17.45.86 pour un diagnostic gratuit et une intervention rapide."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DeratisationVittel;
