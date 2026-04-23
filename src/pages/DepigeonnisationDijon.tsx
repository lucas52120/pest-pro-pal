import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Dijon en Côte-d'Or 21 | G&F Nuisibles";
const DESCRIPTION = "Nuisances de pigeons à Dijon ? G&F Nuisibles, expert en Côte-d'Or 21, protège vos façades et toitures. Diagnostic gratuit 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le tarif d'un dépigeonnage pour un professionnel à Dijon ?",
    answer: "Le prix à Dijon varie selon le métrage de dispositifs à poser sur vos gouttières ou enseignes. Pour les professionnels de la métropole dijonnaise, nous proposons des interventions rapides pour préserver l'accueil de vos clients et la propreté de vos accès extérieurs.",
  },
  {
    question: "Quelles sont les maladies transmises par les fientes de pigeons ?",
    answer: "Les fientes contiennent des champignons microscopiques responsables de troubles respiratoires. Pour un restaurant ou une boulangerie en Côte-d'Or, l'élimination de ces nuisibles est une priorité absolue pour valider les contrôles d'hygiène réguliers.",
  },
  {
    question: "Pourquoi privilégier la capture par cages sur les toits plats ?",
    answer: "Cette méthode permet de réguler les effectifs là où les pics sont impossibles à poser sur de grandes surfaces. Les cages de capture, relevées régulièrement par nos techniciens, offrent une solution non violente et très performante pour les usines ou les grands magasins.",
  },
];

const DepigeonnisationDijon = () => {
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
        "url": "https://www.gf-nuisibles.fr/services/depigeonnisation/dijon",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://www.gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Dijon" }
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
        <link rel="canonical" href="https://www.gf-nuisibles.fr/services/depigeonnisation/dijon" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Dijon"
        department="Côte-d'Or (21)"
        serviceTitle={TITLE}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="PIGEONS ENVAHISSANTS À DIJON ?"
        serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS BÂTIMENTS DURABLEMENT !"
        intro="À Dijon, les colonies de pigeons s'installent sur les toits, balcons et corniches, provoquant salissures et dégradations. G&F Nuisibles intervient pour sécuriser vos espaces avec des solutions anti-pigeons éprouvées."
        expertise="Notre savoir-faire en Côte-d'Or (21) nous permet d'adapter chaque intervention à la configuration du bâtiment. Nous combinons plusieurs techniques de dépigeonnisation pour une efficacité maximale et durable."
        method="Analyse du site et identification des points de perchage. Pose de pics, filets ou fil tendu selon les besoins. Décontamination des surfaces touchées par les fientes. Garantie d'efficacité."
        cta="Pigeons à Dijon ? Contactez G&F Nuisibles au 07.65.25.67.92 pour une dépigeonnisation professionnelle garantie."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DepigeonnisationDijon;
