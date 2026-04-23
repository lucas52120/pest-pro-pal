import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Expert Désinsectisation Haute-Marne et Meuse | GF Nuisibles";
const DESCRIPTION = "Invasion d'insectes ? GF Nuisibles élimine cafards, blattes, punaises de lit et fourmis en Haute-Marne et Meuse. Diagnostic & devis gratuit 7j/7.";
const URL = "https://www.gf-nuisibles.fr/desinsectisation";

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
      "url": URL,
      "name": TITLE,
      "description": DESCRIPTION,
      "provider": { "@id": "https://www.gf-nuisibles.fr/#organization" },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Haute-Marne (52)" },
        { "@type": "AdministrativeArea", "name": "Vosges (88)" },
        { "@type": "AdministrativeArea", "name": "Meuse (55)" },
        { "@type": "AdministrativeArea", "name": "Marne (51)" },
        { "@type": "AdministrativeArea", "name": "Aube (10)" }
      ]
    }
  ]
};

const Desinsectisation = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="canonical" href={URL} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <ServicePageLayout
    icon={<Bug className="h-8 w-8" />}
    title="Désinsectisation"
    subtitle="Traitement professionnel contre cafards, punaises de lit et blattes."
    heroImage={heroImage}
    sidebarImage={heroImage}
    serviceCallTitle="VOTRE LOGEMENT OU LOCAL PROFESSIONNEL SUBIT UNE INVASION D'INSECTES NUISIBLES ?"
    serviceCallSubtitle="CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DE LA DÉSINSECTISATION !"
    problem="Des insectes nuisibles envahissent votre logement ou vos locaux ? Cafards, punaises de lit, blattes... Ces parasites se reproduisent rapidement et peuvent contaminer votre environnement."
    expertise="GF Nuisibles utilise des traitements professionnels adaptés à chaque type d'insecte. Nos solutions sont efficaces, durables et respectueuses de votre santé."
    method="Inspection approfondie pour identifier l'espèce et les zones infestées, puis application de traitements ciblés (gel, pulvérisation, nébulisation). Un suivi post-traitement est assuré."
    engagement="Discrétion totale pour les professionnels (hôtels, restaurants, collectivités). Véhicules non logotés sur demande. Garantie de résultat."
    />
  </>
);

export default Desinsectisation;
