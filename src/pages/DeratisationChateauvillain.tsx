import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Châteauvillain en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Stop aux rats à Châteauvillain ! G&F Nuisibles, dératiseur certifié en Haute-Marne 52, élimine rongeurs. Intervention rapide 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le coût pour une dératisation de cave à Châteauvillain ?",
    answer: "Pour traiter vos dépendances ou votre habitation à Châteauvillain, le prix varie selon l'encombrement des lieux et la densité de la colonie. Nous effectuons un diagnostic précis pour vous proposer le tarif le plus compétitif du secteur."
  },
  {
    question: "Est-ce que les appareils à ultrasons sont vraiment efficaces contre les souris ?",
    answer: "Malheureusement, non. Si ces boîtiers peuvent perturber les rongeurs quelques jours, ils ne les chassent jamais définitivement. Les nuisibles finissent par ignorer le bruit, surtout s'ils ont déjà établi leur nid dans vos cloisons."
  },
  {
    question: "Comment boucher les points d'entrée des rongeurs dans une maison ?",
    answer: "Il s'agit d'identifier chaque fissure supérieure à 5 mm. Nous conseillons l'utilisation de matériaux inattaquables comme le ciment ou des grilles métalliques robustes. Nos techniciens peuvent vous accompagner dans cette mise en étanchéité pour protéger durablement votre domicile."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.gf-nuisibles.fr/#organization",
      "name": "G&F Nuisibles",
      "url": "https://www.gf-nuisibles.fr",
      "telephone": "07 65 25 67 92",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "27 rue principale",
        "addressLocality": "Montsaon",
        "postalCode": "52000",
        "addressCountry": "FR"
      },
      "image": "https://www.gf-nuisibles.fr/og-image.png"
    },
    {
      "@type": "Service",
      "name": TITLE,
      "description": DESCRIPTION,
      "provider": { "@id": "https://www.gf-nuisibles.fr/#organization" },
      "areaServed": { "@type": "City", "name": "Châteauvillain" }
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

const DeratisationChateauvillain = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://www.gf-nuisibles.fr/deratisation-chateauvillain" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Châteauvillain"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS À CHÂTEAUVILLAIN ?"
        serviceCallSubtitle="G&F NUISIBLES, VOTRE EXPERT EN DÉRATISATION !"
        intro="Châteauvillain, commune de Haute-Marne, est régulièrement confrontée aux infestations de rongeurs. Rats et souris s'introduisent dans les habitations et commerces, causant dégâts et risques sanitaires. G&F Nuisibles intervient rapidement pour éradiquer le problème."
        expertise="Nous intervenons chez les particuliers, entreprises et collectivités de Châteauvillain et ses environs. Notre expertise couvre toutes les espèces de rongeurs présentes en Haute-Marne, avec des protocoles conformes aux normes sanitaires."
        method="Diagnostic complet des lieux, identification des points d'entrée et du niveau d'infestation. Mise en place de dispositifs professionnels : appâts sécurisés, pièges, obturation des accès. Suivi et contrôle post-intervention garantis."
        cta="Protégez votre habitat à Châteauvillain. Appelez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit et une intervention rapide."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DeratisationChateauvillain;
