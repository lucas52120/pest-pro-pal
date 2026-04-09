import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Arc-en-Barrois en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Pigeons à Arc-en-Barrois ? G&F Nuisibles installe des dispositifs anti-pigeons durables en Haute-Marne 52. Diagnostic gratuit, méthodes non-létales.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quelles solutions anti-pigeons proposez-vous à Arc-en-Barrois ?",
    answer: "Nous installons des pics en inox, filets de protection, fils tendus et systèmes de dissuasion adaptés à chaque bâtiment. À Arc-en-Barrois, nous privilégions les méthodes non-létales conformes à la réglementation pour une protection durable de vos façades et toitures.",
  },
  {
    question: "Les fientes de pigeons sont-elles dangereuses pour la santé ?",
    answer: "Oui, les fientes de pigeons peuvent transmettre des maladies (ornithose, salmonellose) et contiennent des agents allergènes. À Arc-en-Barrois, G&F Nuisibles assure la décontamination complète des surfaces souillées après la mise en place des dispositifs de protection.",
  },
  {
    question: "Combien de temps dure l'installation anti-pigeons ?",
    answer: "Selon la surface à traiter, l'installation prend entre une demi-journée et une journée complète. À Arc-en-Barrois, nous réalisons un diagnostic préalable pour vous fournir un devis précis et un planning d'intervention adapté à votre situation.",
  },
];

const DepigeonnisationArcEnBarrois = () => {
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
        "provider": { "@id": "https://pest-pro-pal.lovable.app/#organization" },
        "areaServed": { "@type": "City", "name": "Arc-en-Barrois" }
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
        city="Arc-en-Barrois"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="PIGEONS SUR VOS BÂTIMENTS À ARC-EN-BARROIS ?"
        serviceCallSubtitle="G&F NUISIBLES MET EN PLACE DES SOLUTIONS ANTI-PIGEONS DURABLES !"
        intro="À Arc-en-Barrois, les pigeons colonisent toitures, corniches et façades des bâtiments, causant dégradations et problèmes sanitaires. G&F Nuisibles, expert en dépigeonnisation en Haute-Marne, installe des dispositifs professionnels pour protéger durablement vos locaux."
        expertise="Nous intervenons sur tous types de bâtiments à Arc-en-Barrois : maisons, commerces, bâtiments agricoles et collectivités. Nos méthodes non-létales (filets, pics, fil tendu) respectent la réglementation et garantissent une protection pérenne."
        method="Analyse du site à Arc-en-Barrois pour identifier les zones de perchage et nidification. Installation de dispositifs anti-pigeons sur mesure. Décontamination des surfaces souillées par les fientes. Suivi et garantie d'efficacité."
        cta="Pigeons à Arc-en-Barrois ? Contactez G&F Nuisibles au 07.88.17.45.86 pour un diagnostic gratuit et une dépigeonnisation professionnelle."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DepigeonnisationArcEnBarrois;
