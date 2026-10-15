import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation à Langres (52200) | G&F Nuisibles";
const DESCRIPTION = "Cafards, punaises de lit ou puces à Langres (52200) ? G&F Nuisibles propose un diagnostic et un devis gratuits pour un traitement adapté à votre logement.";
const URL = "https://gf-nuisibles.fr/desinsectisation-langres";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Comment savoir quel insecte est présent dans mon logement à Langres ?", answer: "Décrivez son aspect et les endroits où il apparaît. Si possible, transmettez une photo nette, sans manipuler l'insecte ni vous exposer. Les piqûres seules ne suffisent pas à identifier une punaise ou une puce ; un diagnostic permet de choisir le traitement." },
  { question: "Peut-on rester chez soi pendant une désinsectisation ?", answer: "Cela dépend du procédé et des produits retenus. Les consignes de protection des aliments, d'éloignement des personnes et animaux, d'aération et de réintégration sont précisées avant l'intervention. N'utilisez pas une règle générale de délai à la place de ces consignes." },
  { question: "Plusieurs passages sont-ils nécessaires contre les punaises de lit ?", answer: "Le suivi et le nombre de passages dépendent de l'infestation et du protocole retenu. Ils sont précisés dans le devis. La préparation du logement et le respect des recommandations contribuent au résultat ; aucun nombre de visites identique ne convient à toutes les situations." },
  { question: "Intervenez-vous aux Fourches et à Saint-Gilles ?", answer: "Oui, ces secteurs de Langres font partie de la zone desservie, ainsi que le centre historique, la Citadelle et les Franchises. Précisez votre adresse et les accès au logement. G&F Nuisibles est basée à Montsaon, et non dans une agence à Langres." },
];

const DesinsectisationLangres = () => {
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
        "areaServed": { "@type": "City", "name": "Langres" }
      }
    ]
  };

  return (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={URL} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={URL} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <CityServicePage
      city="Langres"
      department="Haute-Marne (52)"
      serviceTitle={"Désinsectisation à Langres (52200) : cafards, punaises et puces"}
      icon={<Bug className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="INVASION D'INSECTES À LANGRES ?"
      serviceCallSubtitle="G&F NUISIBLES ÉLIMINE CAFARDS, PUNAISES ET PUCES EFFICACEMENT !"
      intro={"Des insectes dans votre cuisine, des traces sur la literie ou des piqûres répétées à Langres ? G&F Nuisibles propose une désinsectisation adaptée aux logements et locaux professionnels de Langres (52200), en Haute-Marne. Identifier l'insecte est la première étape : un cafard, une punaise de lit et une puce ne nécessitent pas les mêmes recherches ni le même traitement. Une photographie nette, prise sans vous exposer, peut aider à préparer le diagnostic."}
      expertise={"Basée à Montsaon, G&F Nuisibles dessert le Pays de Langres. Le choix de la méthode tient compte de l'espèce, des surfaces et de l'usage des pièces. Signalez les enfants, les animaux et les traitements déjà essayés. Les consignes de préparation, de protection et de réintégration dépendent des produits et du protocole retenus ; la présence d'un professionnel ne rend pas un traitement sans risque ni ne dispense de suivre ces consignes."}
      method={"L'inspection recherche les insectes, leurs refuges et les zones de circulation. Le devis précise la stratégie proposée et le suivi nécessaire. Selon la situation, des applications ciblées de gel ou d'autres traitements professionnels peuvent être envisagées. Les mesures de rangement et d'hygiène sont adaptées au diagnostic : elles accompagnent le traitement, sans remplacer l'identification de la cause."}
      localContext={{ title: "Centre historique et quartiers de Langres : adapter le traitement au logement", content: <>
<p>{"Autour de la place Diderot et de la cathédrale Saint-Mammès, comme dans les autres secteurs de Langres, le diagnostic concerne les pièces de votre logement ou de votre commerce. Les plinthes, les passages de canalisations et les espaces derrière les équipements doivent rester accessibles. Ces repères patrimoniaux situent le secteur desservi : ils ne constituent pas des références clients et ne signalent aucune infestation de ces lieux."}</p>
<p>{"À la Citadelle, à Saint-Gilles, aux Franchises ou aux Fourches, précisez si vous occupez une maison, un appartement ou un local partagé. Dans un immeuble, un problème peut nécessiter un échange avec le bailleur ou le syndic pour vérifier les espaces communs. On n'applique pas automatiquement le même protocole à tous les logements d'un quartier."}</p>
</> }}
      neighborhoods={{ title: "Secteurs desservis à Langres (52200)", intro: "Précisez votre adresse et les accès lors de votre demande. Le diagnostic porte sur votre logement ou votre terrain, sans présumer de la présence de nuisibles dans tout un quartier.", items: ["Centre historique, place Diderot", "Secteur de la cathédrale Saint-Mammès et des remparts", "La Citadelle", "Saint-Gilles", "Les Franchises", "Les Fourches"] }}
      extraSections={[
        { title: "Cafards, punaises de lit et puces : des recherches différentes", content: <>
<p>{"Pour les cafards, l'inspection porte notamment sur les zones de stockage alimentaire, les points d'eau et les appareils de cuisine. Les denrées doivent être protégées selon les consignes données. Évitez de multiplier les pulvérisations avant le diagnostic : indiquez les produits déjà employés afin de choisir une stratégie cohérente."}</p>
<p>{"Pour les punaises de lit, l'examen de la literie, des coutures et du mobilier proche aide à rechercher des indices ; des piqûres seules ne permettent pas de conclure. En cas de puces, la présence d'animaux doit être prise en compte. Un avis vétérinaire peut être nécessaire pour leur prise en charge, indépendamment du traitement des pièces."}</p>
</> },
        { title: "Préparer votre rendez-vous de désinsectisation à Langres", content: <>
<p>{"Notez les pièces concernées, la date des premières observations et les traitements précédents. Ne déplacez pas de literie ou de mobilier potentiellement infesté d'une pièce à l'autre sans consigne. Les textiles, le nettoyage et l'accès aux zones à traiter font l'objet de recommandations adaptées à l'espèce identifiée."}</p>
<p>{"Le coût dépend notamment des surfaces, de l'étendue du problème, des contraintes d'accès et des passages nécessaires. Le diagnostic et le devis sont gratuits. Demandez ce qui est inclus dans le suivi et quelles précautions respecter après le passage, notamment avant de nettoyer les surfaces traitées."}</p>
</> },
        { title: "Votre service à Langres et dans les communes voisines", content: <>
<p>Pour découvrir les méthodes et les prestations, consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation">{"service de désinsectisation en Haute-Marne"}</Link>. Pour un rendez-vous à Langres, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez votre diagnostic et votre devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Vous êtes dans une commune voisine ? Retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-nogent">{"Désinsectisation à Nogent"}</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-chalindrey">{"Désinsectisation à Chalindrey"}</Link>, ou consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link> pour les autres secteurs desservis.</p>
</> },
      ]}
      nearbyCities={{ title: "Près de Langres : nos pages locales", items: [
{ label: "Désinsectisation à Nogent", to: "/desinsectisation-nogent" },
{ label: "Désinsectisation à Chalindrey", to: "/desinsectisation-chalindrey" },
] }}
      faqItems={FAQ_ITEMS}
      cta={"Désinsectisation à Langres : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits adaptés à votre situation."}
    />
  </>
  );
};

export default DesinsectisationLangres;
