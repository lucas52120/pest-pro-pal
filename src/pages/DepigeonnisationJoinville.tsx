import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Joinville en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Pigeons à Joinville ? G&F Nuisibles, expert en dépigeonnage en Haute-Marne 52, protège vos bâtiments durablement. Diagnostic gratuit 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Combien coûte un dépigeonnage à Joinville ?",
    answer: "Pour sécuriser une cour intérieure ou un clocher à Joinville, le tarif inclut la fourniture du matériel et la main-d'œuvre spécialisée. Le coût est souvent amorti par la suppression des corvées de nettoyage quotidiennes. Contactez notre équipe en Haute-Marne pour une estimation précise.",
  },
  {
    question: "Quelle est la méthode la plus efficace contre les pigeons sur les monuments historiques ?",
    answer: "Nous recommandons souvent le système de fils tendus ou les dispositifs à basse tension, quasi invisibles à l'œil nu. Ces techniques respectent l'esthétique de votre patrimoine tout en interdisant l'accès aux corniches et aux statues de votre commune.",
  },
  {
    question: "Quelles maladies les volatiles peuvent-ils propager ?",
    answer: "Outre les bactéries, les nids de pigeons abritent souvent des tiques et des puces d'oiseaux. Dans votre milieu professionnel, ces parasites peuvent migrer vers les bureaux et causer des irritations ou des allergies sévères au personnel.",
  },
];

const DepigeonnisationJoinville = () => {
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
        "url": "https://gf-nuisibles.fr/services/depigeonnisation/joinville",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Joinville" }
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
        <link rel="canonical" href="https://gf-nuisibles.fr/services/depigeonnisation/joinville" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Joinville"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="PIGEONS ENVAHISSANTS À JOINVILLE ?"
        serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS BÂTIMENTS DURABLEMENT !"
        intro="À Joinville, les pigeons colonisent toitures, balcons et façades, provoquant salissures et dégradations. G&F Nuisibles met en place des solutions anti-pigeons professionnelles : filets, pics, fil tendu et systèmes de dissuasion adaptés à chaque configuration."
        expertise="Notre expertise en Haute-Marne nous permet d'intervenir sur tous types de bâtiments à Joinville : immeubles, commerces, monuments et habitations. Nous privilégions les méthodes non-létales et durables."
        method="Analyse du site et identification des zones de perchage et nidification. Pose de dispositifs anti-pigeons adaptés (pics, filets, fil tendu). Décontamination des surfaces souillées par les fientes. Garantie d'efficacité."
        cta="Pigeons à Joinville ? Contactez G&F Nuisibles au 07.65.25.67.92 pour une dépigeonnisation professionnelle garantie."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DepigeonnisationJoinville;
