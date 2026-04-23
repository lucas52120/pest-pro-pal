import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Beaune en Côte-d'Or 21 | G&F Nuisibles";
const DESCRIPTION = "Invasion de rongeurs à Beaune ? G&F Nuisibles éradique rats et souris en Côte-d'Or 21. Diagnostic offert, opération rapide 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel budget pour sécuriser une exploitation viticole à Beaune ?",
    answer: "À Beaune, le tarif de dératisation pour les domaines et caves vinicoles dépend de la configuration des chais et des zones de stockage. Nous proposons des solutions sur mesure pour protéger vos étiquettes, bouchons et cartons contre les dégradations causées par les souris et mulots.",
  },
  {
    question: "Comment se débarrasser des rats de manière définitive dans une cave ancienne ?",
    answer: "La persévérance est la clé. Dans les structures en pierre de la région, nous combinons des traitements de fond avec des conseils de prévention structurelle. En identifiant les failles de vos caves, nous empêchons durablement le retour des nuisibles dans vos espaces de stockage.",
  },
  {
    question: "Combien de temps dure l'effet du traitement dans un environnement humide ?",
    answer: "Nous utilisons des appâts spécifiques (blocs extrudés ou pâtes fraîches) résistants à l'humidité. L'efficacité est immédiate dès la consommation, et nos passages réguliers permettent de renouveler la protection pour que votre exploitation reste saine tout au long de l'année.",
  },
];

const DeratisationBeaune = () => {
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
        "url": "https://www.gf-nuisibles.fr/deratisation-beaune",
        "description": DESCRIPTION,
        "provider": { "@id": "https://www.gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Beaune" }
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
        <link rel="canonical" href="https://www.gf-nuisibles.fr/deratisation-beaune" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Beaune"
        department="Côte-d'Or (21)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS À BEAUNE ?"
        serviceCallSubtitle="G&F NUISIBLES : VOTRE EXPERT EN DÉRATISATION CERTIFIÉ !"
        intro="À Beaune, les rongeurs trouvent des conditions idéales pour proliférer. Que ce soit dans les habitations ou les commerces, une infestation non traitée peut causer des dégâts considérables. G&F Nuisibles propose une éradication complète et garantie."
        expertise="Spécialistes de la lutte anti-rongeurs en Côte-d'Or (21), nos équipes utilisent des techniques éprouvées adaptées à chaque situation. Notre approche combine efficacité immédiate et prévention à long terme."
        method="Audit détaillé de votre site pour évaluer l'ampleur de l'infestation. Déploiement d'un dispositif multi-techniques : rodenticides sécurisés, pièges professionnels, colmatage des passages. Rapport et suivi systématique."
        cta="Ne laissez pas les rongeurs s'installer à Beaune. Appelez le 07.65.25.67.92 pour une expertise certifiée et un devis sans engagement."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DeratisationBeaune;
