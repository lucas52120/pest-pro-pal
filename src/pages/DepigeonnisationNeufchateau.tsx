import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Neufchâteau dans les Vosges 88 | G&F Nuisibles";
const DESCRIPTION = "Pigeons à Neufchâteau ? G&F Nuisibles installe des solutions anti-pigeons durables dans les Vosges 88. Dépigeonnage garanti.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Combien facture un spécialiste pour éloigner les pigeons à Neufchâteau ?",
    answer: "Le coût à Neufchâteau dépend de la configuration de votre toit (pente, hauteur, matériaux). Que vous soyez un syndic ou un commerçant, nous vous proposons une solution adaptée qui stoppe les nuisances sonores et olfactives dès la première semaine d'installation.",
  },
  {
    question: "Quelles maladies sont transmises par les pigeons dans les entrepôts ?",
    answer: "Le risque majeur est l'inhalation de poussières de fientes séchées, qui peut provoquer l'ornithose-psittacose. Dans votre bâtiment industriel, sécuriser les accès pour les oiseaux est une obligation pour garantir la sécurité au travail de vos équipes.",
  },
  {
    question: "Quelle est la méthode la plus efficace ?",
    answer: "L'électro-répulsion est une technique de pointe pour les structures tertiaires. Très discrète, elle envoie une micro-impulsion désagréable mais inoffensive qui apprend aux volatiles à ne plus s'approcher de votre bâtiment administratif.",
  },
];

const DepigeonnisationNeufchateau = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://gf-nuisibles.fr/#organization",
        "url": "https://gf-nuisibles.fr",
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
        "url": "https://gf-nuisibles.fr/services/depigeonnisation/neufchateau",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Neufchâteau" }
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
        <link rel="canonical" href="https://gf-nuisibles.fr/services/depigeonnisation/neufchateau" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Neufchâteau"
        department="Vosges (88)"
        serviceTitle={TITLE}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="PIGEONS ENVAHISSANTS À NEUFCHÂTEAU ?"
        serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS BÂTIMENTS DURABLEMENT !"
        intro="Les pigeons causent des nuisances importantes à Neufchâteau : fientes corrosives, dégradation des façades, risques sanitaires. G&F Nuisibles met en place des dispositifs professionnels pour éloigner durablement ces volatiles."
        expertise="Experts en dépigeonnisation dans les Vosges (88), nous proposons des solutions adaptées à chaque type de bâtiment : pics anti-pigeons, filets de protection, systèmes de répulsion électrique et capture."
        method="Évaluation de la situation et cartographie des zones touchées. Installation de dispositifs anti-perchage et anti-nidification. Nettoyage et désinfection des zones souillées. Suivi de l'efficacité du dispositif."
        cta="Protégez vos bâtiments à Neufchâteau. Appelez le 07.65.25.67.92 pour une solution anti-pigeons professionnelle et durable."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DepigeonnisationNeufchateau;
