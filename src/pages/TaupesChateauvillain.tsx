import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupier Châteauvillain 52 - Piégeage Taupes, Devis Gratuit";
const DESCRIPTION = "Taupinières dans votre jardin à Châteauvillain (52120) ? G&F Nuisibles repère les galeries actives et propose un piégeage adapté. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/taupes-chateauvillain";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Intervenez-vous comme taupier à Châteauvillain ?", answer: "Oui, décrivez la surface, les zones actives et les accès à votre terrain. Le diagnostic prépare le piégeage et le suivi adaptés à votre situation." },
  { question: "Les taupes mangent-elles les racines ?", answer: "Les taupes sont insectivores. Des racines consommées peuvent orienter vers un autre animal. Le diagnostic distingue les traces et évite de choisir une méthode sur une identification incertaine." },
  { question: "Combien de taupes correspondent à mes taupinières ?", answer: "On ne peut pas déduire le nombre d'animaux du seul nombre de monticules. L'activité des galeries et l'évolution des traces sont examinées sur le terrain." },
  { question: "Faut-il aplatir toutes les taupinières avant votre venue ?", answer: "Gardez si possible des repères sur les zones récemment actives et suivez les instructions données avant la visite. Modifier toutes les galeries peut compliquer le repérage." },
  { question: "Quel est le tarif du piégeage à Châteauvillain ?", answer: "Le prix dépend du terrain, de l'activité, des accès et du suivi retenu. Le diagnostic et le devis gratuits précisent le périmètre et les prestations avant votre accord." },
];

const TaupesChateauvillain = () => {
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
        "@type": "Service", "url": URL, "name": "Taupier à Châteauvillain (52120)", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Châteauvillain", "containedInPlace": { "@type": "AdministrativeArea", "name": "la Communauté de communes des Trois Forêts" }, "address": { "@type": "PostalAddress", "postalCode": "52120", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Taupier", "item": "https://gf-nuisibles.fr/taupes" },
        { "@type": "ListItem", "position": 3, "name": "Châteauvillain", "item": URL }
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
        city="Châteauvillain"
        department="Haute-Marne (52)"
        serviceTitle={"Taupier à Châteauvillain (52120)"}
        icon={<Target className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"DES TAUPINIÈRES SUR VOTRE TERRAIN À CHÂTEAUVILLAIN ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Des monticules de terre réapparaissent après la tonte ou traversent une pelouse à Châteauvillain ? G&F Nuisibles propose un service de taupier à Châteauvillain (52120), au sein de la Communauté de communes des Trois Forêts. L'intervention commence par le repérage des galeries actives et l'examen des zones utilisées du terrain. Une succession de taupinières ne permet pas de compter les animaux. La surface, l'activité observée et les contraintes du jardin orientent le piégeage et le suivi, plutôt qu'un traitement uniforme de toute la parcelle."}
        expertise={"La taupe est insectivore ; elle ne mange pas directement les racines comme peut le faire un rongeur. Ses galeries et monticules peuvent néanmoins gêner la tonte et l'usage d'une pelouse. Une identification est utile lorsque des dégâts concernent aussi les végétaux. Nous examinons les galeries, les zones de passage et l'évolution des traces. Signalez les enfants, les animaux, les installations enterrées et les secteurs à préserver pour préparer un emplacement adapté des dispositifs."}
        method={"Le diagnostic recherche les galeries fréquentées et distingue les monticules anciens des zones récemment actives. Des pièges professionnels sont placés selon la configuration constatée. Les contrôles et les ajustements sont organisés dans le cadre de la prestation retenue. Le devis précise le périmètre et le suivi ; le nombre de monticules ne fixe pas à lui seul un prix ou un nombre de passages. Les consignes visent à éviter toute manipulation des dispositifs par les occupants."}
        localContext={{ title: "Remparts, Porte Madame et boucle de l'Aujon", content: <>
            <p>{"Châteauvillain est une Petite Cité de Caractère lovée dans une boucle de l'Aujon. Pour un bien situé près de la rivière, le diagnostic porte sur vos accès et les indices observés dans le bâtiment : la proximité de l'eau ne permet pas à elle seule de conclure à une infestation."}</p>
            <p>{"Dans le centre historique, autour des remparts, de la tour Saint-Marc et de la tour de l'Auditoire, les maisons anciennes aux caves voûtées et aux dépendances mitoyennes demandent de préciser les accès et les éventuels passages communs avec un voisin."}</p>
            <p>{"Le secteur de la Porte Madame ouvre sur le Parc aux Daims, en lisière de la forêt d'Arc-Châteauvillain. Pour une propriété proche de ces espaces boisés, décrivez le jardin, les dépendances et les abords du bâtiment plutôt que de présumer une origine liée à la forêt."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun lieu n'est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.bienvenue-hautemarne.fr/villes-cites-caractere/petites-cites-de-caractere/chateauvillain/" target="_blank" rel="noopener noreferrer">page de l'office de tourisme Haute-Marne Attractivité sur Châteauvillain</a> et sur la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://fr.wikipedia.org/wiki/Ch%C3%A2teauvillain" target="_blank" rel="noopener noreferrer">page Wikipédia de Châteauvillain</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Châteauvillain (52120)", intro: "Châteauvillain fait partie de la Communauté de communes des Trois Forêts. Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre historique et remparts", "Secteur de la tour Saint-Marc", "Abords de la Porte Madame et du Parc aux Daims", "Abords de l'Aujon", "Lisière de la forêt d'Arc-Châteauvillain"] }}
        extraSections={[
          { title: "Repérer l'activité sans détruire tous les indices", content: <>
            <p>{"Avant la visite, notez les zones où des monticules de terre fraîche apparaissent et leur évolution. Une photographie d'ensemble du jardin aide à situer l'activité. Évitez de retourner tout le sol ou de modifier les galeries avant le diagnostic : les indices de circulation deviennent moins lisibles."}</p>
            <p>{"Ne versez ni carburant ni produit ménager dans les galeries et n'utilisez pas de fumigation improvisée. Si des racines sont consommées ou si les dégâts diffèrent de simples taupinières, signalez-le pour ne pas confondre taupes et rongeurs."}</p>
          </> },
          { title: "Organisation du piégeage et suivi du jardin à Châteauvillain", content: <>
            <p>{"Indiquez les zones fréquentées par les enfants et les animaux, les passages de tonte et les équipements enterrés connus. Les dispositifs doivent rester hors de manipulation. Respectez les indications sur les espaces à éviter et ne déplacez pas les pièges pour faciliter une tonte."}</p>
            <p>{"La réapparition de monticules dans une autre partie du terrain doit être signalée pour orienter le contrôle. Le suivi est adapté à l'activité et aux accès : une capture ne constitue pas une garantie d'absence définitive sur une parcelle ouverte. Les prestations sont précisées dans le devis."}</p>
          </> },
          { title: "Votre service à Châteauvillain et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes">service taupier en Haute-Marne</Link> pour les méthodes et les prestations. Pour votre adresse à Châteauvillain, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-bourbonne-les-bains">Taupier à Bourbonne-les-Bains</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-chalindrey">Taupier à Chalindrey</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Châteauvillain", items: [
          { label: "Taupier à Bourbonne-les-Bains", to: "/taupes-bourbonne-les-bains" },
          { label: "Taupier à Chalindrey", to: "/taupes-chalindrey" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Châteauvillain", to: "/deratisation-chateauvillain" },
          { label: "Désinsectisation à Châteauvillain", to: "/desinsectisation-chateauvillain" },
          { label: "Guêpes et frelons à Châteauvillain", to: "/guepes-frelons-chateauvillain" },
          { label: "Dépigeonnisation à Châteauvillain", to: "/depigeonnisation-chateauvillain" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Taupier à Châteauvillain : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default TaupesChateauvillain;
