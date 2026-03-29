import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Joinville en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Besoin d'un dératiseur à Joinville ? G&F Nuisibles élimine rats et souris avec des méthodes sécurisées et durables. Diagnostic gratuit, expertise certifiée.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Comment est calculé le tarif d'un dératiseur à Joinville ?",
    answer: "Pour nos clients de Joinville, le prix varie selon l'ampleur du traitement nécessaire et le type de nuisibles (rats, souris ou mulots). Nous privilégions une approche sur-mesure pour vous garantir le meilleur résultat. Appelez-nous pour obtenir un tarif adapté à votre problème spécifique.",
  },
  {
    question: "Les souris peuvent-elles revenir après votre passage à Joinville ?",
    answer: "Notre méthode inclut non seulement l'élimination, mais aussi le conseil en \"proofing\" (étanchéité). En identifiant les points d'entrée à Joinville, nous vous aidons à boucher les accès pour éviter toute récidive. La durabilité est la clé de notre service en Haute-Marne.",
  },
  {
    question: "Utilisez-vous des produits professionnels puissants ?",
    answer: "Oui, nous utilisons des solutions rodenticides de grade professionnel, bien plus efficaces que les produits vendus en grande surface. Nos techniciens certifiés à Joinville maîtrisent les dosages pour une efficacité foudroyante tout en respectant les normes de sécurité environnementale.",
  },
];

const DeratisationJoinville = () => {
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
          "name": "Joinville"
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
        city="Joinville"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="DES RONGEURS S'INFILTRENT CHEZ VOUS À JOINVILLE ?"
        serviceCallSubtitle="FAITES CONFIANCE À G&F NUISIBLES POUR UNE DÉRATISATION EFFICACE !"
        intro="À Joinville, la proximité de la Marne et des zones boisées favorise la présence de rongeurs dans les habitations et les commerces. Rats et souris s'introduisent par les moindres fissures et se reproduisent à grande vitesse. G&F Nuisibles stoppe l'infestation avant qu'elle ne devienne incontrôlable."
        expertise="Avec une connaissance approfondie du terrain haut-marnais, nos techniciens adaptent chaque intervention aux particularités de votre bâtiment. Nous privilégions des méthodes respectueuses de l'environnement tout en garantissant une éradication totale des nuisibles."
        method="Visite technique pour localiser nids et chemins de passage. Installation de pièges et stations sécurisées dans les zones stratégiques. Fermeture des accès identifiés et remise d'un compte-rendu détaillé avec préconisations de prévention."
        cta="Rongeurs à Joinville ? Réagissez vite ! Contactez G&F Nuisibles au 07.88.17.45.86 — devis sans engagement et intervention sous 24h."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DeratisationJoinville;
