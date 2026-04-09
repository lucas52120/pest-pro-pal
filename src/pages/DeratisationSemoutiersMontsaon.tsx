import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Semoutiers-Montsaon en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Rongeurs à Semoutiers-Montsaon ? G&F Nuisibles, dératiseur implanté sur place en Haute-Marne 52, garantit une élimination totale. Intervention express, devis offert.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Intervenez-vous rapidement à Semoutiers-Montsaon ?",
    answer: "G&F Nuisibles est basé à Montsaon, sur votre commune. Nous sommes le prestataire le plus proche et pouvons intervenir en moins d'une heure pour un diagnostic ou une urgence de dératisation.",
  },
  {
    question: "Les postes d'appâtage sont-ils dangereux pour mes animaux ?",
    answer: "Non. Nous utilisons exclusivement des postes verrouillés et normés, inaccessibles aux chiens, chats et enfants. Chaque dispositif est positionné stratégiquement pour cibler uniquement les rongeurs à Semoutiers-Montsaon.",
  },
  {
    question: "Combien de passages sont nécessaires pour une dératisation complète ?",
    answer: "En général, 2 à 3 passages suffisent : un traitement initial suivi de contrôles à 2-3 semaines d'intervalle. À Semoutiers-Montsaon, notre proximité nous permet un suivi régulier et réactif jusqu'à élimination complète.",
  },
];

const DeratisationSemoutiersMontsaon = () => {
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
        "areaServed": { "@type": "City", "name": "Semoutiers-Montsaon" }
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
        city="Semoutiers-Montsaon"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS CHEZ VOUS À SEMOUTIERS-MONTSAON ?"
        serviceCallSubtitle="G&F NUISIBLES, VOTRE DÉRATISEUR DE PROXIMITÉ, AGIT VITE !"
        intro="À Semoutiers-Montsaon, l'environnement rural favorise la présence de rats bruns et souris dans les habitations, granges et dépendances. G&F Nuisibles, implanté directement sur la commune à Montsaon, est votre allié le plus réactif pour stopper une infestation de rongeurs avant qu'elle ne s'aggrave."
        expertise="Nous intervenons chez les particuliers, exploitants agricoles et professionnels de Semoutiers-Montsaon. Nos protocoles certifiés couvrent toutes les espèces de rongeurs avec des solutions adaptées : postes d'appâtage sécurisés, pièges mécaniques et obturation des accès."
        method="Audit détaillé de votre bâtiment à Semoutiers-Montsaon pour cartographier l'infestation et identifier les points d'entrée. Mise en place d'un dispositif multi-techniques. Rapport d'intervention avec suivi de contrôle régulier jusqu'à résolution complète."
        cta="Rongeurs à Semoutiers-Montsaon ? Appelez votre voisin G&F Nuisibles au 07.88.17.45.86 pour un devis gratuit et une dératisation express."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DeratisationSemoutiersMontsaon;
