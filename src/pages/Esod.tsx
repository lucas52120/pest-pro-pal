import { ShieldAlert } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImage from "@/assets/service-esod.jpg";

const TITLE = "Régulation des espèces ESOD Haute-Marne 52 | GF Nuisibles";
const DESCRIPTION = "Dégâts de fouine, loir ou ragondin ? GF Nuisibles régule les ESOD en Haute-Marne. Pros & particuliers, diagnostic et devis GRATUIT 7j/7. Appelez-nous !";
const URL = "https://gf-nuisibles.fr/regulation-esod";

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

const Esod = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="canonical" href={URL} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <ServicePageLayout
    icon={<ShieldAlert className="h-8 w-8" />}
    title="Régulation des animaux classés ESOD"
    subtitle="Gestion et régulation des Espèces Susceptibles d'Occasionner des Dégâts : ragondins, renards, corneilles, pies et autres."
    heroImage={heroImage}
    sidebarImage={heroImage}
    serviceCallTitle="VOUS SUBISSEZ DES DÉGÂTS CAUSÉS PAR DES ANIMAUX CLASSÉS ESOD ?"
    serviceCallSubtitle="CONTACTEZ GF NUISIBLES, VOTRE SPÉCIALISTE DE LA RÉGULATION DES ESPÈCES NUISIBLES !"
    problem="Ragondins qui détériorent les berges, renards qui s'attaquent aux élevages, corneilles et pies qui ravagent les cultures… Les animaux classés ESOD (Espèces Susceptibles d'Occasionner des Dégâts) peuvent causer des dommages considérables aux exploitations agricoles, aux infrastructures hydrauliques et aux propriétés privées."
    expertise="GF Nuisibles est habilité à intervenir dans le cadre réglementaire strict de la régulation des ESOD. Nous maîtrisons les techniques de piégeage agréées et respectons scrupuleusement la législation en vigueur (arrêtés préfectoraux, périodes autorisées, méthodes homologuées)."
    method="Diagnostic terrain pour identifier les espèces et évaluer l'ampleur des dégâts, mise en place de dispositifs de piégeage conformes à la réglementation, relevés réguliers des pièges, compte-rendu d'intervention et déclaration auprès des autorités compétentes."
    engagement="Intervention sur devis après évaluation sur site. Nous accompagnons les particuliers, agriculteurs, collectivités et gestionnaires d'espaces naturels sur l'ensemble de la Haute-Marne (52) et départements limitrophes."
    />
  </>
);

export default Esod;
