import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Élimination Pigeons | Particuliers | GF Nuisibles";
const DESCRIPTION = "Pigeons envahissants ? GF Nuisibles installe filets, picots et systèmes de répulsion en Haute-Marne, Vosges, Meuse, Côte-d'Or, Marne, Aube. Devis gratuit.";
const URL = "https://gf-nuisibles.fr/elimination-pigeons";

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

const EliminationPigeons = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="canonical" href={URL} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <ServicePageLayout
    icon={<Bird className="h-8 w-8" />}
    title="Élimination Pigeons"
    subtitle="Solutions professionnelles pour vous débarrasser des pigeons."
    heroImage={heroImage}
    sidebarImage={heroImage}
    serviceCallTitle="VOTRE HABITATION SUBIT UNE INVASION DE PIGEONS OU D'OISEAUX NUISIBLES ?"
    serviceCallSubtitle="CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DE L'ÉLIMINATION DES PIGEONS !"
    problem="Les pigeons représentent un véritable fléau pour les bâtiments et la santé publique. Leurs fientes acides dégradent les façades, les toitures et les équipements, tandis que les maladies qu'ils transmettent constituent un risque sanitaire majeur."
    expertise="G&F Nuisibles utilise différentes méthodes sans blesser ni tuer les volatiles : installation de filets, de picots, de systèmes de répulsion laser, efficaces et discrets. Ainsi, les volatiles ne vont plus se poser ou se nicher sur vos bâtiments. Préservez l'hygiène de vos locaux et évitez les dégradations liées aux déjections et maladies."
    method="Diagnostic approfondi de votre site pour identifier les zones de nidification et de perchage. Mise en place de dispositifs professionnels : filets anti-pigeons, pics inox, systèmes de répulsion électrique ou laser. Nettoyage et désinfection complète des zones souillées."
    engagement="Solutions pérennes avec garantie. Intervention discrète pour les bâtiments publics, copropriétés et locaux professionnels. Devis gratuit sur site."
    />
  </>
);

export default EliminationPigeons;
