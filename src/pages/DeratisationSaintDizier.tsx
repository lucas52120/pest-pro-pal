import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Saint-Dizier en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Stop aux rats à Saint-Dizier ! G&F Nuisibles, dératiseur certifié en Haute-Marne 52, vous garantit une élimination totale. Intervention rapide 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le budget pour une dératisation à Saint-Dizier ?",
    answer: "Le tarif d'une intervention à Saint-Dizier dépend de la surface du bâtiment et du niveau d'infestation. Puisque chaque situation est différente, nous réalisons un diagnostic sur place pour vous soumettre une proposition tarifaire précise. Contactez-nous pour une évaluation rapide et sans engagement.",
  },
  {
    question: "Vos méthodes anti-rongeurs sont-elles sans risque pour mes chiens et chats ?",
    answer: "Absolument. À Saint-Dizier, nous utilisons exclusivement des postes d'appâtage sécurisés et verrouillés. Ces boîtiers empêchent vos animaux domestiques d'accéder aux produits, garantissant une éradication des rats et souris en toute sérénité pour votre foyer.",
  },
  {
    question: "Pourquoi est-il urgent d'intervenir en cas de présence de rats ou souris ?",
    answer: "En Haute-Marne, les rongeurs causent des dégâts majeurs : câbles électriques rongés (risque d'incendie) et souillure des isolations. De plus, ils véhiculent des maladies. Une intervention immédiate à Saint-Dizier protège votre patrimoine et la santé de vos proches.",
  },
];

const DeratisationSaintDizier = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://gf-nuisibles.fr/#organization",
        "name": "G&F Nuisibles",
        "telephone": "07.65.25.67.92",
        "priceRange": "$$",
        "image": "https://gf-nuisibles.fr/og-image.png",
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
        "url": "https://gf-nuisibles.fr/deratisation-saint-dizier",
        "description": DESCRIPTION,
        "provider": {
          "@id": "https://gf-nuisibles.fr/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Saint-Dizier"
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
        <link rel="canonical" href="https://gf-nuisibles.fr/deratisation-saint-dizier" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Saint-Dizier"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS DANS VOS LOCAUX À SAINT-DIZIER ?"
        serviceCallSubtitle="G&F NUISIBLES VOUS APPORTE UNE SOLUTION PROFESSIONNELLE DE DÉRATISATION !"
        intro="Saint-Dizier, avec ses zones industrielles et résidentielles, offre un terrain propice aux infestations de rongeurs. Rats bruns, rats noirs ou souris domestiques prolifèrent vite et menacent votre santé comme vos installations. G&F Nuisibles vous propose une dératisation complète et garantie."
        expertise="Nous intervenons auprès des particuliers, entreprises, restaurants et collectivités de Saint-Dizier. Notre expertise couvre l'ensemble des espèces de rongeurs présentes en Haute-Marne, avec des protocoles conformes aux normes sanitaires en vigueur."
        method="Audit détaillé de votre site pour évaluer le niveau d'infestation. Déploiement d'un dispositif multi-techniques : appâts rodenticides sécurisés, pièges professionnels, obturation des passages. Rapport d'intervention et suivi de contrôle systématique."
        cta="Protégez votre habitat ou commerce à Saint-Dizier. Appelez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit et une expertise professionnelle certifiée."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DeratisationSaintDizier;
