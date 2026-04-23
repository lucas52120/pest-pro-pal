import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Châlons-en-Champagne dans la Marne 51 | G&F | G&F Nuisibles";
const DESCRIPTION = "Invasion de rongeurs à Châlons-en-Champagne ? G&F Nuisibles éradique rats et souris dans la Marne 51. Diagnostic offert, opération rapide 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le budget pour un contrat de dératisation annuel à Châlons-en-Champagne ?",
    answer: "Pour les entreprises situées à Châlons-en-Champagne, le tarif dépend de la nature de votre activité (agroalimentaire, stockage, bureaux) et de la surface des locaux. Nous proposons des contrats de maintenance conformes aux normes sanitaires, avec un devis détaillé établi après un audit gratuit de votre site industriel ou commercial.",
  },
  {
    question: "Pourquoi faire appel à un pro plutôt que d'utiliser des solutions classiques en entreprise ?",
    answer: "Un prestataire spécialisé garantit une traçabilité indispensable lors des contrôles d'hygiène. Contrairement aux pièges amateurs, nos experts utilisent des dispositifs sécurisés et des molécules haute puissance qui assurent une éradication totale, protégeant ainsi vos stocks et votre outil de production dans la Marne.",
  },
  {
    question: "Combien de temps dure l'assainissement complet d'un local professionnel ?",
    answer: "Le traitement prend généralement entre deux et trois semaines pour éliminer l'intégralité d'une colonie. Nous planifions nos passages pour ne jamais interrompre votre flux de travail, assurant une discrétion totale vis-à-vis de vos clients et partenaires.",
  },
];

const DeratisationChalonsEnChampagne = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.gf-nuisibles.fr/#organization",
        "name": "G&F Nuisibles",
        "telephone": "07.65.25.67.92",
        "priceRange": "$$",
        "image": "https://www.gf-nuisibles.fr/og-image.png",
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
        "url": "https://www.gf-nuisibles.fr/deratisation-chalons-en-champagne",
        "description": DESCRIPTION,
        "provider": {
          "@id": "https://www.gf-nuisibles.fr/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Châlons-en-Champagne"
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
        <link rel="canonical" href="https://www.gf-nuisibles.fr/deratisation-chalons-en-champagne" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Châlons-en-Champagne"
        department="Marne (51)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS À CHÂLONS-EN-CHAMPAGNE ?"
        serviceCallSubtitle="G&F NUISIBLES : VOTRE EXPERT EN DÉRATISATION CERTIFIÉ !"
        intro="À Châlons-en-Champagne, les rongeurs trouvent des conditions idéales pour proliférer. Que ce soit dans les habitations ou les commerces, une infestation non traitée peut causer des dégâts considérables. G&F Nuisibles propose une éradication complète et garantie."
        expertise="Spécialistes de la lutte anti-rongeurs en Marne (51), nos équipes utilisent des techniques éprouvées adaptées à chaque situation. Notre approche combine efficacité immédiate et prévention à long terme."
        method="Audit détaillé de votre site pour évaluer l'ampleur de l'infestation. Déploiement d'un dispositif multi-techniques : rodenticides sécurisés, pièges professionnels, colmatage des passages. Rapport et suivi systématique."
        cta="Ne laissez pas les rongeurs s'installer à Châlons-en-Champagne. Appelez le 07.65.25.67.92 pour une expertise certifiée et un devis sans engagement."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DeratisationChalonsEnChampagne;
