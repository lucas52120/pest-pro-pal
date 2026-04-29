import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination de pigeons à Nogent en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Stop aux nuisances des pigeons dans votre jardin ou terrasse à Nogent. Solutions de protection efficaces pour votre habitat. Diagnostic offert.";

const EliminationPigeonsNogent = () => {
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
        "url": "https://gf-nuisibles.fr/services/elimination-pigeons/nogent",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Nogent" }
      }
    ]
  };

  return (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://gf-nuisibles.fr/services/elimination-pigeons/nogent" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <CityServicePage
      city="Nogent"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="PIGEONS SUR VOTRE TERRASSE OU DANS VOTRE JARDIN À NOGENT ?"
      serviceCallSubtitle="G&F NUISIBLES VOUS REND VOTRE TRANQUILLITÉ !"
      intro="À Nogent, les pigeons perturbent la vie quotidienne des particuliers en envahissant jardins, terrasses et balcons. Leurs fientes souillent le mobilier extérieur et présentent un risque sanitaire. G&F Nuisibles vous aide à retrouver un espace de vie propre et serein."
      expertise="Nous concevons des solutions sur mesure pour les maisons individuelles et appartements : répulsifs adaptés aux terrasses, filets pour balcons, pics discrets sur les appuis de fenêtres. Votre confort en extérieur est notre priorité."
      method="Évaluation des zones fréquentées par les pigeons autour de votre habitation. Mise en place de protections ciblées sur terrasse, jardin et façade. Nettoyage des surfaces contaminées par les fientes. Conseils pour prévenir le retour des volatiles."
      cta="Profitez de votre jardin à Nogent sans nuisances. Appelez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic offert."
    />
  </>
  );
};

export default EliminationPigeonsNogent;
