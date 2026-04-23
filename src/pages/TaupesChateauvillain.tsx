import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupes à Châteauvillain en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Taupes à Châteauvillain ? G&F Nuisibles, taupier professionnel en Haute-Marne 52. Piégeage efficace, devis gratuit.";

const TaupesChateauvillain = () => {
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
        "url": "https://www.gf-nuisibles.fr/taupes-chateauvillain",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://www.gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Châteauvillain" }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://www.gf-nuisibles.fr/taupes-chateauvillain" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Châteauvillain"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Target className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="TAUPES DANS VOTRE JARDIN À CHÂTEAUVILLAIN ?"
        serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS ESPACES VERTS !"
        intro="À Châteauvillain, les taupes ravagent pelouses et jardins avec leurs galeries souterraines. G&F Nuisibles intervient avec des méthodes de piégeage professionnel pour éliminer ces nuisibles et préserver vos espaces verts."
        expertise="G&F Nuisibles intervient à Châteauvillain et en Haute-Marne pour le piégeage professionnel des taupes. Nos taupiers expérimentés traitent jardins, parcs, terrains de sport et exploitations agricoles."
        method="Repérage des galeries actives et évaluation de l'étendue de l'infestation. Pose de pièges professionnels dans les galeries principales. Contrôle régulier et retrait des captures. Conseils de prévention."
        cta="Taupes dans votre jardin à Châteauvillain ? Contactez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit."
      />
    </>
  );
};

export default TaupesChateauvillain;
