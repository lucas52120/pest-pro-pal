import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Langres en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Problème de rats ou rongeurs à Langres ? G&F Nuisibles assure une lutte contre les rongeurs rapide et durable. Diagnostic gratuit, intervention 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Combien coûte un dératiseur professionnel à Langres ?",
    answer: "Le budget pour traiter votre maison à Langres dépend du type de rongeur (rat d'égout, souris ou mulot) et du nombre de passages nécessaires. Puisque chaque bâtisse est unique dans votre commune, nous privilégions un devis personnalisé après analyse de l'infestation.",
  },
  {
    question: "Comment savoir si j'ai des rats ou des souris chez moi ?",
    answer: "Plusieurs signes ne trompent pas : bruits de grattage nocturnes, présence de petites crottes sombres ou câbles électriques rongés. Si vous remarquez des emballages alimentaires percés dans votre cuisine, il est temps d'agir avant que la colonie ne s'agrandisse.",
  },
  {
    question: "Pourquoi faire appel à un pro plutôt que d'acheter des pièges ?",
    answer: "Les solutions du commerce sont souvent des \"pansements\" sur une plaie ouverte. Un expert identifie la source du problème et utilise des produits de grade professionnel, garantissant une efficacité radicale là où les tapettes classiques échouent souvent.",
  },
];

const DeratisationLangres = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://pest-pro-pal.lovable.app/#organization",
        "name": "G&F Nuisibles",
        "telephone": "07.65.25.67.92",
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
          "name": "Langres"
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
      city="Langres"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Rat className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="DES RONGEURS ONT ÉLU DOMICILE À LANGRES ?"
      serviceCallSubtitle="G&F NUISIBLES, EXPERT EN DÉRATISATION, INTERVIENT RAPIDEMENT !"
      intro="À Langres, les rongeurs trouvent refuge dans les bâtiments anciens et les caves voûtées de la vieille ville. Rats et souris rongent câbles électriques, isolants et denrées alimentaires, créant des risques d'incendie et de contamination. G&F Nuisibles vous débarrasse définitivement de ces nuisibles."
      expertise="Notre équipe connaît parfaitement les spécificités du bâti langrois. Nous employons des solutions certifiées : appâts sécurisés de dernière génération, pièges professionnels et obstruction des accès. Chaque intervention est adaptée à la configuration de votre habitation ou local."
      method="Inspection minutieuse pour cartographier l'infestation. Traitement ciblé avec des produits homologués et sans danger pour votre entourage. Visite de contrôle incluse pour garantir l'éradication complète et prévenir toute réapparition."
      cta="Stop aux rats à Langres ! Appelez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit et sans engagement. Expertise certifiée."
      faqItems={FAQ_ITEMS}
    />
    </>
  );
};

export default DeratisationLangres;
