import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Joinville en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Besoin d'une élimination de pigeons à Joinville ? Protégez votre façade et votre santé. G&F Nuisibles : pics et répulsifs spécial particuliers.";

const EliminationPigeonsJoinville = () => {
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
        "url": "https://gf-nuisibles.fr/services/elimination-pigeons/joinville",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Joinville" }
      }
    ]
  };

  return (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://gf-nuisibles.fr/services/elimination-pigeons/joinville" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <CityServicePage
      city="Joinville"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="VOTRE FAÇADE EST DÉGRADÉE PAR LES PIGEONS À JOINVILLE ?"
      serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOTRE MAISON DURABLEMENT !"
      intro="À Joinville, les pigeons dégradent les façades des maisons avec leurs fientes acides et créent des nuisances sonores au quotidien. Les particuliers subissent ces désagréments sans solution efficace. G&F Nuisibles apporte une réponse professionnelle adaptée à votre habitation."
      expertise="Notre équipe installe des dispositifs discrets et durables pour protéger votre façade et vos ouvertures : pics inox, répulsifs et filets invisibles. Chaque intervention est pensée pour préserver l'esthétique de votre maison tout en éloignant les volatiles."
      method="Diagnostic complet de votre habitation pour repérer les points d'accès des pigeons. Installation de protections sur façade, toiture et balcons. Désinfection des zones souillées. Garantie d'efficacité pour la tranquillité de votre famille."
      cta="Stoppez les dégradations sur votre maison à Joinville. Contactez G&F Nuisibles au 07.65.25.67.92 pour un devis gratuit."
    />
  </>
  );
};

export default EliminationPigeonsJoinville;
