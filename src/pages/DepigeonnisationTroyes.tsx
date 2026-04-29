import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Troyes dans l'Aube 10 | G&F Nuisibles";
const DESCRIPTION = "Nuisances de pigeons à Troyes ? G&F Nuisibles, expert dans l'Aube 10, protège vos façades et toitures. Diagnostic gratuit 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel budget pour un dépigeonnage à Troyes ?",
    answer: "À Troyes, les devis pour les immeubles incluent souvent le nettoyage préalable des zones souillées. Le prix global est réparti entre les copropriétaires, rendant l'opération très abordable pour protéger durablement les balcons et les corniches de votre patrimoine dans l'Aube.",
  },
  {
    question: "Comment faire fuir les pigeons définitivement des centres commerciaux ?",
    answer: "L'obstruction des zones de repos par des filets à mailles fines est la seule solution 100 % garantie. En empêchant l'accès aux poutrelles métalliques, vous supprimez tout risque de chutes de fientes sur les clients ou les marchandises.",
  },
  {
    question: "Est-il autorisé d'utiliser du poison contre les pigeons ?",
    answer: "Absolument pas, l'usage de substances toxiques est strictement interdit et pénalement sanctionné. Dans votre commune, nous n'utilisons que des moyens mécaniques ou des techniques de piégeage éthiques pour gérer les populations indésirables.",
  },
];

const DepigeonnisationTroyes = () => {
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
        "url": "https://gf-nuisibles.fr/services/depigeonnisation/troyes",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Troyes" }
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
        <link rel="canonical" href="https://gf-nuisibles.fr/services/depigeonnisation/troyes" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Troyes"
        department="Aube (10)"
        serviceTitle={TITLE}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="PIGEONS ENVAHISSANTS À TROYES ?"
        serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS BÂTIMENTS DURABLEMENT !"
        intro="À Troyes, les colonies de pigeons s'installent sur les toits, balcons et corniches, provoquant salissures et dégradations. G&F Nuisibles intervient pour sécuriser vos espaces avec des solutions anti-pigeons éprouvées."
        expertise="Notre savoir-faire dans l'Aube (10) nous permet d'adapter chaque intervention à la configuration du bâtiment. Nous combinons plusieurs techniques pour une efficacité maximale et durable."
        method="Analyse du site et identification des points de perchage. Pose de pics, filets ou fil tendu selon les besoins. Décontamination des surfaces touchées par les fientes. Garantie d'efficacité."
        cta="Pigeons à Troyes ? Contactez G&F Nuisibles au 07.65.25.67.92 pour une dépigeonnisation professionnelle garantie."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DepigeonnisationTroyes;
