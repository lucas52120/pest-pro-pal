import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Destruction de nids de Guêpes & Frelons à Semoutiers-Montsaon";
const DESCRIPTION = "Guêpes ou frelons à Semoutiers-Montsaon ? G&F Nuisibles, votre expert local en Haute-Marne 52, détruit les nids en urgence. Devis gratuit, intervention sécurisée.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Combien coûte la destruction d'un nid de guêpes à Semoutiers-Montsaon ?",
    answer: "Nos forfaits à Semoutiers-Montsaon débutent à 85 € pour un nid de guêpes et 110 € pour un nid de frelons. Le tarif final dépend de la localisation du nid (hauteur, accessibilité). Un devis gratuit vous est remis sur place avant toute action.",
  },
  {
    question: "Êtes-vous vraiment à proximité de Semoutiers-Montsaon ?",
    answer: "G&F Nuisibles est basé à Montsaon, directement sur la commune de Semoutiers-Montsaon. Nous sommes donc votre prestataire le plus proche pour une intervention ultra-rapide, y compris en urgence le week-end.",
  },
  {
    question: "Le frelon asiatique est-il présent à Semoutiers-Montsaon ?",
    answer: "Le frelon asiatique progresse en Haute-Marne. Nos techniciens certifiés identifient l'espèce sur place et adaptent le traitement. La neutralisation d'un nid de frelon asiatique nécessite un protocole spécifique que nous maîtrisons parfaitement.",
  },
];

const GuepesFrelonsSemoutiersMontsaon = () => {
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
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À SEMOUTIERS-MONTSAON ?"
        serviceCallSubtitle="G&F NUISIBLES, VOTRE VOISIN EXPERT, INTERVIENT IMMÉDIATEMENT !"
        intro="Semoutiers-Montsaon, commune où G&F Nuisibles est implanté, bénéficie d'une réactivité maximale pour la destruction de nids de guêpes et frelons. En plein cœur de la Haute-Marne, notre équipe se déplace en quelques minutes pour sécuriser votre propriété et éliminer tout nid dangereux."
        expertise="Nos techniciens Certibiocide interviennent en toiture, cheminée, arbre ou sous-sol à Semoutiers-Montsaon. Nous utilisons des biocides homologués et du matériel professionnel pour une neutralisation complète, y compris sur les nids de frelons asiatiques en zones difficiles d'accès."
        method="Inspection sur place à Semoutiers-Montsaon pour localiser et identifier l'espèce. Traitement ciblé par insecticide professionnel, retrait sécurisé du nid et désinfection de la zone. Conseils de prévention pour éviter toute réinstallation."
        cta="Nid de guêpes ou frelons à Semoutiers-Montsaon ? Appelez votre voisin G&F Nuisibles au 07.65.25.67.92 pour une intervention immédiate."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default GuepesFrelonsSemoutiersMontsaon;
