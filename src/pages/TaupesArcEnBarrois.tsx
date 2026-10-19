import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupier Arc-en-Barrois 52 - Piégeage Taupes, Devis Gratuit";
const DESCRIPTION = "Taupinières dans votre jardin à Arc-en-Barrois (52210) ? G&F Nuisibles repère les galeries actives et propose un piégeage adapté. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/taupes-arc-en-barrois";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Intervenez-vous comme taupier à Arc-en-Barrois ?", answer: "Oui, décrivez la surface, les zones actives et les accès à votre terrain. Le diagnostic prépare le piégeage et le suivi adaptés à votre situation." },
  { question: "Les taupes mangent-elles les racines ?", answer: "Les taupes sont insectivores. Des racines consommées peuvent orienter vers un autre animal. Le diagnostic distingue les traces et évite de choisir une méthode sur une identification incertaine." },
  { question: "Combien de taupes correspondent à mes taupinières ?", answer: "On ne peut pas déduire le nombre d'animaux du seul nombre de monticules. L'activité des galeries et l'évolution des traces sont examinées sur le terrain." },
  { question: "Faut-il aplatir toutes les taupinières avant votre venue ?", answer: "Gardez si possible des repères sur les zones récemment actives et suivez les instructions données avant la visite. Modifier toutes les galeries peut compliquer le repérage." },
  { question: "Quel est le tarif du piégeage à Arc-en-Barrois ?", answer: "Le prix dépend du terrain, de l'activité, des accès et du suivi retenu. Le diagnostic et le devis gratuits précisent le périmètre et les prestations avant votre accord." },
];

const TaupesArcEnBarrois = () => {
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
        "@type": "Service", "url": URL, "name": "Taupier à Arc-en-Barrois (52210) : taupes et galeries actives", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Arc-en-Barrois", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haute-Marne" }, "address": { "@type": "PostalAddress", "postalCode": "52210", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Taupier", "item": "https://gf-nuisibles.fr/taupes" },
        { "@type": "ListItem", "position": 3, "name": "Arc-en-Barrois", "item": URL }
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
        city="Arc-en-Barrois"
        department="Haute-Marne (52)"
        serviceTitle={"Taupier à Arc-en-Barrois (52210) : taupes et galeries actives"}
        icon={<Target className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"DES TAUPINIÈRES SUR VOTRE TERRAIN À ARC-EN-BARROIS ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Des monticules de terre réapparaissent après la tonte ou traversent une pelouse à Arc-en-Barrois ? G&F Nuisibles propose un service de taupier à Arc-en-Barrois (52210), commune entourée de prairies et de forêts au sein du Parc national de forêts. L'intervention commence par le repérage des galeries actives et l'examen des zones utilisées du terrain. Une succession de taupinières ne permet pas de compter les animaux. La surface, l'activité observée et les contraintes du jardin orientent le piégeage et le suivi, plutôt qu'un traitement uniforme de toute la parcelle."}
        expertise={"La taupe est insectivore ; elle ne mange pas directement les racines comme peut le faire un rongeur. Ses galeries et monticules peuvent néanmoins gêner la tonte et l'usage d'une pelouse ou d'un jardin en lisière de forêt. Une identification est utile lorsque des dégâts concernent aussi les végétaux. Nous examinons les galeries, les zones de passage et l'évolution des traces. Signalez les enfants, les animaux, les installations enterrées et les secteurs à préserver pour préparer un emplacement adapté des dispositifs."}
        method={"Le diagnostic recherche les galeries fréquentées et distingue les monticules anciens des zones récemment actives. Des pièges professionnels sont placés selon la configuration constatée. Les contrôles et les ajustements sont organisés dans le cadre de la prestation retenue. Le devis précise le périmètre et le suivi ; le nombre de monticules ne fixe pas à lui seul un prix ou un nombre de passages. Les consignes visent à éviter toute manipulation des dispositifs par les occupants."}
        localContext={{ title: "Jardins du centre-bourg et terrains proches de l'Aujon à Arc-en-Barrois", content: <>
            <p>{"Dans le centre-bourg d'Arc-en-Barrois, les jardins et cours végétalisées autour de l'église Saint-Martin peuvent présenter des accès étroits. Décrivez le passage jusqu'à votre terrain et les zones où la terre fraîche réapparaît, sans présumer que tous les jardins voisins sont touchés."}</p>
            <p>{"Pour une parcelle près de l'Aujon ou du jardin des gardes, l'humidité et la praticabilité du sol sont à décrire lors de la demande. La proximité du cours d'eau n'établit pas la présence de taupes : seules les observations et l'inspection permettent d'identifier les galeries utiles au piégeage."}</p>
            <p>{"En direction du parc à l'anglaise du château et de la forêt domaniale, précisez l'usage de votre terrain : pelouse privée, espace de passage ou parcelle agricole. Ces repères situent Arc-en-Barrois et ne constituent pas des références clients."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun monument n'est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.arc-en-barrois.com/patrimoine-remarquable" target="_blank" rel="noopener noreferrer">site de la mairie d'Arc-en-Barrois</a> et dans la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.bienvenue-hautemarne.fr/villes-cites-caractere/arc-en-barrois/" target="_blank" rel="noopener noreferrer">présentation d'Arc-en-Barrois par Haute-Marne Attractivité</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Arc-en-Barrois (52210)", intro: "Arc-en-Barrois est une petite cité de caractère, siège du Parc national de forêts. Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre-bourg d'Arc-en-Barrois", "Secteur de l'église Saint-Martin", "Abords de la Maison Renaissance", "Abords du château et du parc à l'anglaise", "Bords de l'Aujon", "Direction de la forêt domaniale"] }}
        extraSections={[
          { title: "Repérer l'activité sans détruire tous les indices", content: <>
            <p>{"Avant la visite, notez les zones où des monticules de terre fraîche apparaissent et leur évolution. Une photographie d'ensemble du jardin aide à situer l'activité. Évitez de retourner tout le sol ou de modifier les galeries avant le diagnostic : les indices de circulation deviennent moins lisibles."}</p>
            <p>{"Ne versez ni carburant ni produit ménager dans les galeries et n'utilisez pas de fumigation improvisée. Si des racines sont consommées ou si les dégâts diffèrent de simples taupinières, signalez-le pour ne pas confondre taupes et rongeurs."}</p>
          </> },
          { title: "Organisation du piégeage et suivi du jardin", content: <>
            <p>{"Indiquez les zones fréquentées par les enfants et les animaux, les passages de tonte et les équipements enterrés connus. Les dispositifs doivent rester hors de manipulation. Respectez les indications sur les espaces à éviter et ne déplacez pas les pièges pour faciliter une tonte."}</p>
            <p>{"La réapparition de monticules dans une autre partie du terrain, notamment en lisière de forêt, doit être signalée pour orienter le contrôle. Le suivi est adapté à l'activité et aux accès : une capture ne constitue pas une garantie d'absence définitive sur une parcelle ouverte. Les prestations sont précisées dans le devis."}</p>
          </> },
          { title: "Votre service à Arc-en-Barrois et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes">service taupier en Haute-Marne</Link> pour les méthodes et les prestations. Pour votre adresse à Arc-en-Barrois, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-chateauvillain">Taupier à Châteauvillain</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-chaumont">Taupier à Chaumont</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-langres">Taupier à Langres</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour d'Arc-en-Barrois", items: [
          { label: "Taupier à Châteauvillain", to: "/taupes-chateauvillain" },
          { label: "Taupier à Chaumont", to: "/taupes-chaumont" },
          { label: "Taupier à Langres", to: "/taupes-langres" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Arc-en-Barrois", to: "/deratisation-arc-en-barrois" },
          { label: "Guêpes et frelons à Arc-en-Barrois", to: "/guepes-frelons-arc-en-barrois" },
          { label: "Dépigeonnisation à Arc-en-Barrois", to: "/depigeonnisation-arc-en-barrois" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Taupier à Arc-en-Barrois : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default TaupesArcEnBarrois;
