import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Destruction nid de Guêpes & Frelons Chaumont 52 | G&F Nuisibles";
const DESCRIPTION = "Nid de guêpes ou frelons à Chaumont (52) ? G&F Nuisibles intervient en urgence 7j/7 en Haute-Marne. Destruction sécurisée dès 85 €, devis gratuit.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le prix pour détruire un nid de frelons à Chaumont ?",
    answer: "Nos tarifs pour une destruction de nid à Chaumont débutent à partir de 85 €. Le prix dépend de la hauteur et de l'accessibilité du nid. Nous validons toujours un prix ferme avec vous avant l'intervention : aucune mauvaise surprise sur la facture finale.",
  },
  {
    question: "Est-il dangereux de détruire le nid soi-même ?",
    answer: "Oui, c'est extrêmement dangereux. Les méthodes artisanales ou les bombes du commerce provoquent souvent des attaques collectives massives. Nos techniciens en Haute-Marne utilisent des combinaisons spécialisées et du matériel professionnel pour neutraliser le nid en toute sécurité.",
  },
  {
    question: "Comment différencier un nid de guêpes d'un nid de frelons ?",
    answer: "La guêpe est petite et jaune vif, tandis que le frelon est bien plus gros et bruyant. Le frelon asiatique se reconnaît à ses pattes jaunes et son corps très sombre. Leurs nids ressemblent à de grosses boules de papier mâché souvent haut perchées. Dans tous les cas, gardez une distance de sécurité de 5 mètres.",
  },
];

const GuepesFrelonsChaumont = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://gf-nuisibles.fr/#organization",
        "url": "https://gf-nuisibles.fr",
        "name": "G&F Nuisibles",
        "telephone": "+33788174586",
        "priceRange": "$$",
        "image": "https://gf-nuisibles.fr/og-image.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "27 rue principale",
          "addressLocality": "Montsaon",
          "postalCode": "52000",
          "addressRegion": "Haute-Marne",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 48.0856,
          "longitude": 5.1858
        },
        "areaServed": [
          { "@type": "City", "name": "Chaumont" },
          { "@type": "City", "name": "Chamarandes-Choignes" },
          { "@type": "City", "name": "Brottes" },
          { "@type": "City", "name": "Bologne" },
          { "@type": "AdministrativeArea", "name": "Haute-Marne" }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61560163661274"
        ]
      },
      {
        "@type": "Service",
        "url": "https://gf-nuisibles.fr/guepes-frelons-chaumont",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": {
          "@id": "https://gf-nuisibles.fr/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Chaumont"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
          { "@type": "ListItem", "position": 2, "name": "Guêpes & Frelons", "item": "https://gf-nuisibles.fr/guepes-frelons" },
          { "@type": "ListItem", "position": 3, "name": "Chaumont", "item": "https://gf-nuisibles.fr/guepes-frelons-chaumont" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://gf-nuisibles.fr/guepes-frelons-chaumont" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Chaumont"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À CHAUMONT ?"
        serviceCallSubtitle="G&F NUISIBLES INTERVIENT EN URGENCE POUR VOTRE SÉCURITÉ !"
        intro="À Chaumont (52000), les guêpes et frelons s'installent sous les toitures, dans les combles ou les jardins des quartiers Cavalier, La Vendue, Le Val Barizien ou Foch. Leurs piqûres représentent un danger réel, surtout pour les personnes allergiques. G&F Nuisibles détruit les nids de guêpes et frelons à Chaumont en toute sécurité avec un équipement professionnel adapté."
        expertise="Nos techniciens certifiés interviennent à Chaumont et dans les communes proches — Chamarandes-Choignes, Brottes, Bologne, Froncles, Nogent — pour la destruction de nids de guêpes, frelons européens et frelons asiatiques en Haute-Marne (52). Chaque intervention est sécurisée et garantie."
        method="Localisation précise du nid et évaluation des risques. Traitement par injection d'insecticide professionnel ou retrait mécanique. Vérification de l'élimination complète de la colonie. Conseils de prévention."
        cta="Nid de guêpes à Chaumont ? Appelez G&F Nuisibles au 07.88.17.45.86 pour une intervention rapide et sécurisée 7j/7."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default GuepesFrelonsChaumont;
