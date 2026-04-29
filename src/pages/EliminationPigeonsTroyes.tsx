import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Troyes dans l'Aube 10 | G&F Nuisibles";
const DESCRIPTION = "Retrouvez un toit sain à Troyes. Nos experts interviennent chez les particuliers pour l'éloignement durable des oiseaux. Intervention rapide 7j/7.";

const EliminationPigeonsTroyes = () => {
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
        "url": "https://gf-nuisibles.fr/services/elimination-pigeons/troyes",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Troyes" }
      }
    ]
  };

  return (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://gf-nuisibles.fr/services/elimination-pigeons/troyes" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <CityServicePage
      city="Troyes"
      department="Aube (10)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="PIGEONS SUR VOTRE TOIT OU VOS FENÊTRES À TROYES ?"
      serviceCallSubtitle="G&F NUISIBLES ÉLOIGNE LES VOLATILES DE VOTRE DOMICILE !"
      intro="À Troyes, les pigeons s'installent sur les toits des maisons et immeubles résidentiels, provoquant des infiltrations et des nuisances sanitaires. Les particuliers voient leur cadre de vie se dégrader au fil des mois. G&F Nuisibles intervient pour rétablir votre confort."
      expertise="Notre expertise dans l'Aube nous permet d'intervenir sur tous types d'habitations : pavillons, appartements, maisons de ville. Filets, pics et systèmes répulsifs sont posés avec soin pour un éloignement durable sans nuire aux oiseaux."
      method="Inspection complète de votre toiture et des zones de perchage. Sécurisation des accès et pose de dispositifs anti-pigeons. Décontamination des surfaces touchées par les fientes. Suivi post-intervention garanti."
      cta="Retrouvez un toit propre à Troyes. Contactez G&F Nuisibles au 07.65.25.67.92 pour une intervention rapide."
    />
  </>
  );
};

export default EliminationPigeonsTroyes;
