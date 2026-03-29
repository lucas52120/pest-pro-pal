import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Montier-en-Der en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Stop aux rats à Montier-en-Der ! G&F Nuisibles, dératiseur certifié en Haute-Marne 52, élimine rongeurs. Intervention rapide 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le tarif pour dératiser une grange ou une maison à Montier-en-Der ?",
    answer: "Pour une dératisation à Montier-en-Der, le devis dépend souvent de la nature du bâtiment et de l'accessibilité des zones infestées. Nous intervenons aussi bien en zone rurale qu'urbaine avec une tarification étudiée pour être accessible à tous les budgets."
  },
  {
    question: "Comment savoir si j'ai des rats ou des souris chez moi ?",
    answer: "Outre les bruits de pas dans les plafonds, soyez attentifs aux odeurs d'ammoniaque (urine) très fortes dans les zones confinées. Si vous trouvez des nids faits de papier ou de textile déchiquetés dans votre grenier, l'infestation est déjà bien installée."
  },
  {
    question: "Les produits de dératisation sont-ils dangereux pour mes animaux domestiques ?",
    answer: "La sécurité est notre priorité absolue dans cette partie du département. Nous utilisons des postes sécurisés qui empêchent tout contact direct entre vos animaux et les rodenticides. Votre tranquillité d'esprit est garantie tout au long du processus."
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
      "telephone": "07 88 17 45 86",
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
      "areaServed": { "@type": "City", "name": "Montier-en-Der" }
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

const DeratisationMontierEnDer = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Montier-en-Der"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS À MONTIER-EN-DER ?"
        serviceCallSubtitle="G&F NUISIBLES, VOTRE EXPERT EN DÉRATISATION !"
        intro="Montier-en-Der, commune de Haute-Marne, est régulièrement confrontée aux infestations de rongeurs. Rats et souris s'introduisent dans les habitations et commerces, causant dégâts et risques sanitaires. G&F Nuisibles intervient rapidement pour éradiquer le problème."
        expertise="Nous intervenons chez les particuliers, entreprises et collectivités de Montier-en-Der et ses environs. Notre expertise couvre toutes les espèces de rongeurs présentes en Haute-Marne, avec des protocoles conformes aux normes sanitaires."
        method="Diagnostic complet des lieux, identification des points d'entrée et du niveau d'infestation. Mise en place de dispositifs professionnels : appâts sécurisés, pièges, obturation des accès. Suivi et contrôle post-intervention garantis."
        cta="Protégez votre habitat à Montier-en-Der. Appelez G&F Nuisibles au 07.88.17.45.86 pour un devis gratuit et une intervention rapide."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DeratisationMontierEnDer;
