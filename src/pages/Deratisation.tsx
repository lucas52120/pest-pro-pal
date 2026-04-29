import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation | Particuliers & Professionnels | GF Nuisibles";
const DESCRIPTION = "Invasion de rongeurs ? GF Nuisibles intervient 7j/7 en Haute-Marne, Marne, Meuse, Vosges, Côte-d'Or, Aube. Pros ou particuliers. Diagnostic & devis GRATUIT !";
const URL = "https://gf-nuisibles.fr/deratisation";

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
      "url": URL,
      "name": TITLE,
      "description": DESCRIPTION,
      "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Haute-Marne (52)" },
        { "@type": "AdministrativeArea", "name": "Vosges (88)" },
        { "@type": "AdministrativeArea", "name": "Meuse (55)" },
        { "@type": "AdministrativeArea", "name": "Côte-d'Or (21)" },
        { "@type": "AdministrativeArea", "name": "Marne (51)" },
        { "@type": "AdministrativeArea", "name": "Aube (10)" }
      ]
    }
  ]
};

const Deratisation = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="canonical" href={URL} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <ServicePageLayout
    icon={<Rat className="h-8 w-8" />}
    title="Dératisation"
    subtitle="Élimination rapide et efficace des rats, souris et rongeurs."
    heroImage={heroImage}
    sidebarImage={heroImage}
    serviceCallTitle="VOTRE LOGEMENT OU LOCAL PROFESSIONNEL SUBIT UNE INVASION DE RATS OU DE RONGEURS ?"
    serviceCallSubtitle="CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DE LA DÉRATISATION !"
    problem="Des bruits dans les cloisons ? Des traces de grignotage sur les câbles ou les emballages ? La présence de rongeurs est un risque sanitaire majeur et peut causer des dégâts matériels considérables."
    expertise="GF Nuisibles intervient rapidement pour éliminer rats et souris de votre habitation ou de vos locaux professionnels. Nos méthodes sont sécurisées, notamment pour les foyers avec enfants et animaux domestiques."
    method="Diagnostic complet pour identifier les points d'entrée et les zones de passage. Pose de dispositifs sécurisés (postes d'appâtage, pièges mécaniques). Rebouchage des accès et conseils de prévention."
    engagement="Discrétion assurée, véhicules non logotés si besoin. Garantie de résultat avec suivi post-intervention. Contrats d'entretien disponibles pour les professionnels."
    />
  </>
);

export default Deratisation;
