import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Saint-Dizier en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Pigeons à Saint-Dizier ? G&F Nuisibles, expert en dépigeonnage en Haute-Marne 52, protège vos bâtiments durablement. Diagnostic gratuit 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Combien coûte une dépigeonnisation à Saint-Dizier ?",
    answer: "À Saint-Dizier, les tarifs varient selon que vous gériez une copropriété ou un local commercial. Le prix dépend de la complexité de l'accès, nécessitant parfois l'usage d'une nacelle. Nous proposons des solutions forfaitaires pour assainir vos rebords de fenêtres et balcons de manière pérenne.",
  },
  {
    question: "Comment faire fuir les pigeons définitivement ?",
    answer: "L'installation de pics en inox ou de systèmes d'électro-éloignement est très efficace pour les zones de passage. À proximité de votre commerce, ces dispositifs empêchent l'oiseau de se poser, l'obligeant à chercher un autre perchoir loin de votre clientèle.",
  },
  {
    question: "Est-il interdit de tuer les pigeons en ville ?",
    answer: "Oui, la législation française interdit l'abattage sauvage. C'est pourquoi nous privilégions des méthodes non létales dans votre commune, comme la capture par cages de piégeage. Ces oiseaux sont ensuite déplacés ou gérés selon les réglementations préfectorales en vigueur.",
  },
];

const DepigeonnisationSaintDizier = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.gf-nuisibles.fr/#organization",
        "url": "https://www.gf-nuisibles.fr",
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
        "url": "https://www.gf-nuisibles.fr/services/depigeonnisation/saint-dizier",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://www.gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Saint-Dizier" }
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
        <link rel="canonical" href="https://www.gf-nuisibles.fr/services/depigeonnisation/saint-dizier" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Saint-Dizier"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="PIGEONS ENVAHISSANTS À SAINT-DIZIER ?"
        serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS BÂTIMENTS DURABLEMENT !"
        intro="À Saint-Dizier, les pigeons colonisent toitures, balcons et façades, provoquant salissures et dégradations. G&F Nuisibles met en place des solutions anti-pigeons professionnelles : filets, pics, fil tendu et systèmes de dissuasion adaptés à chaque configuration."
        expertise="Notre expertise en Haute-Marne nous permet d'intervenir sur tous types de bâtiments à Saint-Dizier : immeubles, commerces, monuments et habitations. Nous privilégions les méthodes non-létales et durables."
        method="Analyse du site et identification des zones de perchage et nidification. Pose de dispositifs anti-pigeons adaptés (pics, filets, fil tendu). Décontamination des surfaces souillées par les fientes. Garantie d'efficacité."
        cta="Pigeons à Saint-Dizier ? Contactez G&F Nuisibles au 07.65.25.67.92 pour une dépigeonnisation professionnelle garantie."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DepigeonnisationSaintDizier;
