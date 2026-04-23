import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Solution de dépigeonnage | Votre expert GF Nuisibles";
const DESCRIPTION = "Dégâts de pigeons ? GF Nuisibles contrôle leur présence : Haute-Marne, Marne, Meuse, Vosges, Côte-d'Or, Aube. Pros/Partics. Diagnostic & Devis GRATUIT 7j/7";
const URL = "https://www.gf-nuisibles.fr/depigeonnage";

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
        { "@type": "AdministrativeArea", "name": "Côte-d'Or (21)" },
        { "@type": "AdministrativeArea", "name": "Marne (51)" },
        { "@type": "AdministrativeArea", "name": "Aube (10)" }
      ]
    }
  ]
};

const Depigeonnisation = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="canonical" href={URL} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <ServicePageLayout
    icon={<Bird className="h-8 w-8" />}
    title="Dépigeonnage"
    subtitle="Protection durable de vos bâtiments contre les pigeons et volatiles."
    heroImage={heroImage}
    sidebarImage={heroImage}
    serviceCallTitle="VOTRE LOGEMENT OU LOCAL PROFESSIONNEL SUBIT UNE INVASION DE PIGEONS ?"
    serviceCallSubtitle="CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DE LA GESTION DES PIGEONS !"
    problem="Les pigeons causent des dégâts importants sur les bâtiments : fientes acides qui détériorent les façades, risques sanitaires, nuisances sonores. Les collectivités et professionnels sont particulièrement touchés."
    expertise="G&F Nuisibles utilise différentes méthodes sans blesser ni tuer les volatiles : installation de filets, de picots, de systèmes de répulsion laser, efficaces et discrets. Ainsi, les volatiles ne vont plus se poser ou se nicher sur vos bâtiments. Préservez l'hygiène de vos locaux et évitez les dégradations liées aux déjections et maladies."
    method="Audit complet du site, identification des zones de nidification, installation de dispositifs anti-pigeons adaptés (pics inox, filets, fil électrique, systèmes laser), nettoyage et désinfection des zones souillées."
    engagement="Solutions pérennes avec garantie. Intervention discrète pour les bâtiments publics et les copropriétés. Devis gratuit sur site."
    />
  </>
);

export default Depigeonnisation;
