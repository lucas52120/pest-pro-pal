import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupier Bar-sur-Aube 10 - Piégeage Taupes, Devis Gratuit";
const DESCRIPTION = "Taupinières dans votre jardin à Bar-sur-Aube (10200) ? G&F Nuisibles repère les galeries actives et propose un piégeage adapté. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/taupes-bar-sur-aube";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Intervenez-vous comme taupier à Bar-sur-Aube ?", answer: "Oui, décrivez la surface, les zones actives et les accès à votre terrain. Le diagnostic prépare le piégeage et le suivi adaptés à votre situation." },
  { question: "Les taupes mangent-elles les racines de vigne ?", answer: "Les taupes sont insectivores. Des racines consommées peuvent orienter vers un autre animal, notamment dans une parcelle viticole. Le diagnostic distingue les traces et évite de choisir une méthode sur une identification incertaine." },
  { question: "Combien de taupes correspondent à mes taupinières ?", answer: "On ne peut pas déduire le nombre d'animaux du seul nombre de monticules. L'activité des galeries et l'évolution des traces sont examinées sur le terrain." },
  { question: "Faut-il aplatir toutes les taupinières avant votre venue ?", answer: "Gardez si possible des repères sur les zones récemment actives et suivez les instructions données avant la visite. Modifier toutes les galeries peut compliquer le repérage." },
  { question: "Quel est le tarif du piégeage à Bar-sur-Aube ?", answer: "Le prix dépend du terrain, de l'activité, des accès et du suivi retenu. Le diagnostic et le devis gratuits précisent le périmètre et les prestations avant votre accord." },
];

const TaupesBarSurAube = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness", "@id": "https://gf-nuisibles.fr/#organization",
        "name": "G&F Nuisibles", "url": "https://gf-nuisibles.fr", "telephone": "+33765256792",
        "sameAs": ["https://www.facebook.com/gfnuisibles"],
        "address": { "@type": "PostalAddress", "streetAddress": "27 rue principale", "addressLocality": "Montsaon", "postalCode": "52000", "addressRegion": "Haute-Marne", "addressCountry": "FR" }
      },
      {
        "@type": "Service", "url": URL, "name": "Taupier à Bar-sur-Aube (10200) : taupes et galeries actives", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Bar-sur-Aube", "containedInPlace": { "@type": "AdministrativeArea", "name": "Aube" }, "address": { "@type": "PostalAddress", "postalCode": "10200", "addressRegion": "Aube", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Taupier", "item": "https://gf-nuisibles.fr/taupes" },
        { "@type": "ListItem", "position": 3, "name": "Bar-sur-Aube", "item": URL }
      ] },
      { "@type": "FAQPage", "mainEntity": FAQ_ITEMS.map((item) => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) }
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
        city="Bar-sur-Aube"
        department="Aube (10)"
        serviceTitle={"Taupier à Bar-sur-Aube (10200) : taupes et galeries actives"}
        icon={<Target className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"DES TAUPINIÈRES SUR VOTRE TERRAIN À BAR-SUR-AUBE ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Des monticules de terre réapparaissent après la tonte ou traversent une pelouse à Bar-sur-Aube ? G&F Nuisibles propose un service de taupier à Bar-sur-Aube (10200), ville traversée par l'Aube et bordée par les coteaux viticoles de la Côte des Bar. L'intervention commence par le repérage des galeries actives et l'examen des zones utilisées du terrain. Une succession de taupinières ne permet pas de compter les animaux. La surface, l'activité observée et les contraintes du jardin orientent le piégeage et le suivi, plutôt qu'un traitement uniforme de toute la parcelle."}
        expertise={"La taupe est insectivore ; elle ne mange pas directement les racines comme peut le faire un rongeur. Ses galeries et monticules peuvent néanmoins gêner la tonte, l'usage d'une pelouse ou le travail d'une parcelle proche des vignes. Une identification est utile lorsque des dégâts concernent aussi les végétaux. Nous examinons les galeries, les zones de passage et l'évolution des traces. Signalez les enfants, les animaux, les installations enterrées et les secteurs à préserver pour préparer un emplacement adapté des dispositifs."}
        method={"Le diagnostic recherche les galeries fréquentées et distingue les monticules anciens des zones récemment actives. Des pièges professionnels sont placés selon la configuration constatée. Les contrôles et les ajustements sont organisés dans le cadre de la prestation retenue. Le devis précise le périmètre et le suivi ; le nombre de monticules ne fixe pas à lui seul un prix ou un nombre de passages. Les consignes visent à éviter toute manipulation des dispositifs par les occupants."}
        localContext={{ title: "Jardins du centre historique et terrains proches de l'Aube à Bar-sur-Aube", content: <>
            <p>{"Dans le centre de Bar-sur-Aube, les jardins et cours végétalisées autour de l'église Saint-Pierre peuvent présenter des accès étroits. Décrivez le passage jusqu'à votre terrain et les zones où la terre fraîche réapparaît, sans présumer que tous les jardins voisins sont touchés."}</p>
            <p>{"Pour une parcelle près de l'Aube ou des promenades de la Gravière et de Mathaux, l'humidité et la praticabilité du sol sont à décrire lors de la demande. La proximité du cours d'eau n'établit pas la présence de taupes : seules les observations et l'inspection permettent d'identifier les galeries utiles au piégeage."}</p>
            <p>{"En direction des vignobles de la Côte des Bar et de la colline Sainte-Germaine, précisez l'usage de votre terrain : pelouse privée, espace de passage ou parcelle agricole. Ces repères situent Bar-sur-Aube et ne constituent pas des références clients."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun monument n'est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://barsuraube.org/bouger-et-sortir-decouvrir-notre-territoire/notre-patrimoine-bati" target="_blank" rel="noopener noreferrer">site de la Communauté de communes de la région de Bar-sur-Aube</a> et dans la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.tourisme-cotedesbar.com/patrimoine/bar-sur-aube/" target="_blank" rel="noopener noreferrer">présentation de Bar-sur-Aube par l'office de tourisme Côte des Bar</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Bar-sur-Aube (10200)", intro: "Bar-sur-Aube est une ancienne cité des foires de Champagne, traversée par l'Aube. Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre historique de Bar-sur-Aube", "Secteur de l'église Saint-Pierre", "Secteur de l'église Saint-Maclou", "Colline Sainte-Germaine", "Promenade de la Gravière, bords de l'Aube", "Direction des vignobles de la Côte des Bar"] }}
        extraSections={[
          { title: "Repérer l'activité sans détruire tous les indices", content: <>
            <p>{"Avant la visite, notez les zones où des monticules de terre fraîche apparaissent et leur évolution. Une photographie d'ensemble du jardin aide à situer l'activité. Évitez de retourner tout le sol ou de modifier les galeries avant le diagnostic : les indices de circulation deviennent moins lisibles."}</p>
            <p>{"Ne versez ni carburant ni produit ménager dans les galeries et n'utilisez pas de fumigation improvisée. Si des racines sont consommées, notamment sur une parcelle de vigne, ou si les dégâts diffèrent de simples taupinières, signalez-le pour ne pas confondre taupes et rongeurs."}</p>
          </> },
          { title: "Organisation du piégeage et suivi du jardin", content: <>
            <p>{"Indiquez les zones fréquentées par les enfants et les animaux, les passages de tonte et les équipements enterrés connus. Les dispositifs doivent rester hors de manipulation. Respectez les indications sur les espaces à éviter et ne déplacez pas les pièges pour faciliter une tonte ou un passage d'engin."}</p>
            <p>{"La réapparition de monticules dans une autre partie du terrain doit être signalée pour orienter le contrôle. Le suivi est adapté à l'activité et aux accès : une capture ne constitue pas une garantie d'absence définitive sur une parcelle ouverte. Les prestations sont précisées dans le devis."}</p>
          </> },
          { title: "Votre service à Bar-sur-Aube et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes">service taupier en Haute-Marne et dans l'Aube</Link> pour les méthodes et les prestations. Pour votre adresse à Bar-sur-Aube, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-chaumont">Taupier à Chaumont</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-langres">Taupier à Langres</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-chateauvillain">Taupier à Châteauvillain</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Bar-sur-Aube", items: [
          { label: "Taupier à Chaumont", to: "/taupes-chaumont" },
          { label: "Taupier à Langres", to: "/taupes-langres" },
          { label: "Taupier à Châteauvillain", to: "/taupes-chateauvillain" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Bar-sur-Aube", to: "/deratisation-bar-sur-aube" },
          { label: "Désinsectisation à Bar-sur-Aube", to: "/desinsectisation-bar-sur-aube" },
          { label: "Guêpes et frelons à Bar-sur-Aube", to: "/guepes-frelons-bar-sur-aube" },
          { label: "Dépigeonnisation à Bar-sur-Aube", to: "/depigeonnisation-bar-sur-aube" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Taupier à Bar-sur-Aube : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default TaupesBarSurAube;
