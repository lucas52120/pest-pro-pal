import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Chaumont en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Rats ou souris à Chaumont ? G&F Nuisibles, dératiseur professionnel en Haute-Marne 52, intervient 7j/7 pour une extermination efficace. Devis gratuit.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le tarif d'une intervention de dératisation à Chaumont ?",
    answer: "Pour une dératisation à Chaumont, le coût est calculé sur mesure selon la superficie à traiter et l'importance de la colonie. Dans cette ville de Haute-Marne, nous réalisons un diagnostic initial pour vous proposer un prix juste et transparent, adapté à l'urgence de votre situation.",
  },
  {
    question: "Quelles sont les maladies transmises par les rats ?",
    answer: "Les rongeurs sont porteurs de pathologies sérieuses comme la leptospirose ou la salmonellose. En laissant ces nuisibles s'installer dans votre domicile, vous exposez votre famille à des risques sanitaires par simple contact avec leurs déjections ou leurs urines.",
  },
  {
    question: "Les produits utilisés sont-ils dangereux pour mes animaux domestiques ?",
    answer: "Absolument pas. Nous sécurisons chaque poste d'appâtage avec des boîtiers verrouillés par clé. Vos chiens et chats ne peuvent pas accéder aux produits actifs, ce qui nous permet d'assainir votre foyer en toute sécurité dans ce secteur du 52.",
  },
];

const DeratisationChaumont = () => {
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
        "url": "https://gf-nuisibles.fr/deratisation-chaumont",
        "description": DESCRIPTION,
        "provider": {
          "@id": "https://gf-nuisibles.fr/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Chaumont"
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
        <link rel="canonical" href="https://gf-nuisibles.fr/deratisation-chaumont" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
      city="Chaumont"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Rat className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="INVASION DE RATS OU SOURIS À CHAUMONT ?"
      serviceCallSubtitle="CONTACTEZ G&F NUISIBLES, VOTRE DÉRATISEUR PROFESSIONNEL EN HAUTE-MARNE !"
      intro="Vous entendez des bruits dans vos cloisons ou constatez des traces de rongeurs à Chaumont ? Les rats et souris représentent un danger sanitaire et causent des dégâts matériels importants. G&F Nuisibles intervient rapidement sur Chaumont et ses environs pour éliminer durablement l'infestation."
      expertise="Forts de plusieurs années d'expérience en Haute-Marne, nous utilisons des techniques sécurisées adaptées à votre environnement : postes d'appâtage normés, pièges mécaniques et rebouchage des points d'entrée. Nos interventions sont compatibles avec la présence d'enfants et d'animaux domestiques."
      method="Diagnostic complet sur site pour identifier les zones de passage et points d'accès. Mise en place d'un plan de lutte personnalisé avec dispositifs sécurisés. Suivi post-intervention et conseils de prévention pour éviter toute récidive."
      cta="Contactez G&F Nuisibles dès maintenant pour un diagnostic gratuit à Chaumont. Intervention rapide 7j/7 — Appelez le 07.65.25.67.92."
      faqItems={FAQ_ITEMS}
    />
    </>
  );
};

export default DeratisationChaumont;
