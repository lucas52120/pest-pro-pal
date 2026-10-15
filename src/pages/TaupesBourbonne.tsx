import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupier à Bourbonne-les-Bains (52400) : taupes et galeries actives | G&F Nuisibles";
const DESCRIPTION = "Taupinières dans votre jardin à Bourbonne-les-Bains (52400) ? G&F Nuisibles repère les galeries actives et propose un piégeage adapté. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/taupes-bourbonne-les-bains";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Intervenez-vous comme taupier à Bourbonne-les-Bains ?", answer: "Oui, décrivez la surface, les zones actives et les accès à votre terrain. Le diagnostic prépare le piégeage et le suivi adaptés à votre situation." },
  { question: "Les taupes mangent-elles les racines ?", answer: "Les taupes sont insectivores. Des racines consommées peuvent orienter vers un autre animal. Le diagnostic distingue les traces et évite de choisir une méthode sur une identification incertaine." },
  { question: "Combien de taupes correspondent à mes taupinières ?", answer: "On ne peut pas déduire le nombre d'animaux du seul nombre de monticules. L'activité des galeries et l'évolution des traces sont examinées sur le terrain." },
  { question: "Faut-il aplatir toutes les taupinières avant votre venue ?", answer: "Gardez si possible des repères sur les zones récemment actives et suivez les instructions données avant la visite. Modifier toutes les galeries peut compliquer le repérage." },
  { question: "Quel est le tarif du piégeage à Bourbonne-les-Bains ?", answer: "Le prix dépend du terrain, de l'activité, des accès et du suivi retenu. Le diagnostic et le devis gratuits précisent le périmètre et les prestations avant votre accord." },
];

const TaupesBourbonne = () => {
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
        "@type": "Service", "url": URL, "name": "Taupier à Bourbonne-les-Bains (52400)", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Bourbonne-les-Bains", "containedInPlace": { "@type": "AdministrativeArea", "name": "la Communauté de communes des Savoir-Faire" }, "address": { "@type": "PostalAddress", "postalCode": "52400", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Taupier", "item": "https://gf-nuisibles.fr/taupes" },
        { "@type": "ListItem", "position": 3, "name": "Bourbonne-les-Bains", "item": URL }
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
        city="Bourbonne-les-Bains"
        department="Haute-Marne (52)"
        serviceTitle={"Taupier à Bourbonne-les-Bains (52400)"}
        icon={<Target className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"DES TAUPINIÈRES SUR VOTRE TERRAIN À BOURBONNE-LES-BAINS ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Des monticules de terre réapparaissent après la tonte ou traversent une pelouse à Bourbonne-les-Bains ? G&F Nuisibles propose un service de taupier à Bourbonne-les-Bains (52400), au sein de la Communauté de communes des Savoir-Faire. L'intervention commence par le repérage des galeries actives et l'examen des zones utilisées du terrain. Une succession de taupinières ne permet pas de compter les animaux. La surface, l'activité observée et les contraintes du jardin orientent le piégeage et le suivi, plutôt qu'un traitement uniforme de toute la parcelle."}
        expertise={"La taupe est insectivore ; elle ne mange pas directement les racines comme peut le faire un rongeur. Ses galeries et monticules peuvent néanmoins gêner la tonte et l'usage d'une pelouse. Une identification est utile lorsque des dégâts concernent aussi les végétaux. Nous examinons les galeries, les zones de passage et l'évolution des traces. Signalez les enfants, les animaux, les installations enterrées et les secteurs à préserver pour préparer un emplacement adapté des dispositifs."}
        method={"Le diagnostic recherche les galeries fréquentées et distingue les monticules anciens des zones récemment actives. Des pièges professionnels sont placés selon la configuration constatée. Les contrôles et les ajustements sont organisés dans le cadre de la prestation retenue. Le devis précise le périmètre et le suivi ; le nombre de monticules ne fixe pas à lui seul un prix ou un nombre de passages. Les consignes visent à éviter toute manipulation des dispositifs par les occupants."}
        localContext={{ title: "Centre thermal, Porte-Galon et abords de l'Apance", content: <>
            <p>{"Autour des Thermes de Bourbonne-les-Bains et du centre-ville, précisez si la demande concerne un hôtel, une résidence de curistes, un commerce ou un logement. L'activité saisonnière liée au thermalisme implique souvent des locaux occupés de façon temporaire, ce qui doit être signalé pour organiser l'accès."}</p>
            <p>{"La Porte-Galon, vestige des anciens remparts, et le secteur du casino situent le centre historique. Pour une adresse proche de ces repères, décrivez les caves, les dépendances et les éventuels passages communs avec un bâtiment voisin."}</p>
            <p>{"L'Apance traverse la commune et le ruisseau de Borne arrose aussi le centre. Pour un bien situé près de ces cours d'eau, le diagnostic porte sur vos accès, vos canalisations et les indices observés dans le bâtiment : la présence de l'eau à proximité ne permet pas à elle seule de conclure à une infestation."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun lieu n'est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://bourbonne.com/geographie/" target="_blank" rel="noopener noreferrer">site officiel de la ville thermale de Bourbonne-les-Bains</a> et sur la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://bourbonne.com/les-thermes/" target="_blank" rel="noopener noreferrer">page dédiée aux thermes de Bourbonne-les-Bains</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Bourbonne-les-Bains (52400)", intro: "Bourbonne-les-Bains fait partie de la Communauté de communes des Savoir-Faire. Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre-ville et secteur des Thermes", "Abords de la Porte-Galon", "Secteur du casino et du pôle culturel", "Abords de l'Apance", "Abords du ruisseau de Borne", "Hameaux et écarts de la commune"] }}
        extraSections={[
          { title: "Repérer l'activité sans détruire tous les indices", content: <>
            <p>{"Avant la visite, notez les zones où des monticules de terre fraîche apparaissent et leur évolution. Une photographie d'ensemble du jardin aide à situer l'activité. Évitez de retourner tout le sol ou de modifier les galeries avant le diagnostic : les indices de circulation deviennent moins lisibles."}</p>
            <p>{"Ne versez ni carburant ni produit ménager dans les galeries et n'utilisez pas de fumigation improvisée. Si des racines sont consommées ou si les dégâts diffèrent de simples taupinières, signalez-le pour ne pas confondre taupes et rongeurs."}</p>
          </> },
          { title: "Organisation du piégeage et suivi du jardin à Bourbonne-les-Bains", content: <>
            <p>{"Indiquez les zones fréquentées par les enfants et les animaux, les passages de tonte et les équipements enterrés connus. Les dispositifs doivent rester hors de manipulation. Respectez les indications sur les espaces à éviter et ne déplacez pas les pièges pour faciliter une tonte."}</p>
            <p>{"La réapparition de monticules dans une autre partie du terrain doit être signalée pour orienter le contrôle. Le suivi est adapté à l'activité et aux accès : une capture ne constitue pas une garantie d'absence définitive sur une parcelle ouverte. Les prestations sont précisées dans le devis."}</p>
          </> },
          { title: "Votre service à Bourbonne-les-Bains et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes">service taupier en Haute-Marne</Link> pour les méthodes et les prestations. Pour votre adresse à Bourbonne-les-Bains, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-chalindrey">Taupier à Chalindrey</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-chateauvillain">Taupier à Châteauvillain</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Bourbonne-les-Bains", items: [
          { label: "Taupier à Chalindrey", to: "/taupes-chalindrey" },
          { label: "Taupier à Châteauvillain", to: "/taupes-chateauvillain" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Bourbonne-les-Bains", to: "/deratisation-bourbonne-les-bains" },
          { label: "Désinsectisation à Bourbonne-les-Bains", to: "/desinsectisation-bourbonne-les-bains" },
          { label: "Guêpes et frelons à Bourbonne-les-Bains", to: "/guepes-frelons-bourbonne-les-bains" },
          { label: "Dépigeonnisation à Bourbonne-les-Bains", to: "/depigeonnisation-bourbonne-les-bains" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Taupier à Bourbonne-les-Bains : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default TaupesBourbonne;
