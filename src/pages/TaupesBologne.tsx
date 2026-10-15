import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupier à Bologne (52310) : taupes et galeries actives | G&F Nuisibles";
const DESCRIPTION = "Taupinières dans votre jardin à Bologne (52310) ? G&F Nuisibles repère les galeries actives et propose un piégeage adapté. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/taupes-bologne";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Intervenez-vous comme taupier à Bologne ?", answer: "Oui, décrivez la surface, les zones actives et les accès à votre terrain. Le diagnostic prépare le piégeage et le suivi adaptés à votre situation." },
  { question: "Les taupes mangent-elles les racines ?", answer: "Les taupes sont insectivores. Des racines consommées peuvent orienter vers un autre animal. Le diagnostic distingue les traces et évite de choisir une méthode sur une identification incertaine." },
  { question: "Combien de taupes correspondent à mes taupinières ?", answer: "On ne peut pas déduire le nombre d'animaux du seul nombre de monticules. L'activité des galeries et l'évolution des traces sont examinées sur le terrain." },
  { question: "Faut-il aplatir toutes les taupinières avant votre venue ?", answer: "Gardez si possible des repères sur les zones récemment actives et suivez les instructions données avant la visite. Modifier toutes les galeries peut compliquer le repérage." },
  { question: "Quel est le tarif du piégeage à Bologne ?", answer: "Le prix dépend du terrain, de l'activité, des accès et du suivi retenu. Le diagnostic et le devis gratuits précisent le périmètre et les prestations avant votre accord." },
];

const TaupesBologne = () => {
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
        "@type": "Service", "url": URL, "name": "Taupier à Bologne (52310) : taupes et galeries actives", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Bologne", "containedInPlace": { "@type": "AdministrativeArea", "name": "Communauté d'agglomération de Chaumont" }, "address": { "@type": "PostalAddress", "postalCode": "52310", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Taupier", "item": "https://gf-nuisibles.fr/taupes" },
        { "@type": "ListItem", "position": 3, "name": "Bologne", "item": URL }
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
        city="Bologne"
        department="Haute-Marne (52)"
        serviceTitle={"Taupier à Bologne (52310) : taupes et galeries actives"}
        icon={<Target className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"DES TAUPINIÈRES SUR VOTRE TERRAIN À BOLOGNE ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Des monticules de terre réapparaissent après la tonte ou traversent une pelouse à Bologne ? G&F Nuisibles propose un service de taupier à Bologne (52310), bourg-centre niché dans un méandre de la Marne. L'intervention commence par le repérage des galeries actives et l'examen des zones utilisées du terrain. Une succession de taupinières ne permet pas de compter les animaux. La surface, l'activité observée et les contraintes du jardin orientent le piégeage et le suivi, plutôt qu'un traitement uniforme de toute la parcelle."}
        expertise={"La taupe est insectivore ; elle ne mange pas directement les racines comme peut le faire un rongeur. Ses galeries et monticules peuvent néanmoins gêner la tonte et l'usage d'une pelouse ou d'un terrain proche des biefs. Une identification est utile lorsque des dégâts concernent aussi les végétaux. Nous examinons les galeries, les zones de passage et l'évolution des traces. Signalez les enfants, les animaux, les installations enterrées et les secteurs à préserver pour préparer un emplacement adapté des dispositifs."}
        method={"Le diagnostic recherche les galeries fréquentées et distingue les monticules anciens des zones récemment actives. Des pièges professionnels sont placés selon la configuration constatée. Les contrôles et les ajustements sont organisés dans le cadre de la prestation retenue. Le devis précise le périmètre et le suivi ; le nombre de monticules ne fixe pas à lui seul un prix ou un nombre de passages. Les consignes visent à éviter toute manipulation des dispositifs par les occupants."}
        localContext={{ title: "Jardins de Bologne et terrains proches de la Marne", content: <>
            <p>{"Dans le centre-bourg de Bologne, les jardins et cours végétalisées autour du secteur de l'église Sainte-Bologne peuvent présenter des accès étroits. Décrivez le passage jusqu'à votre terrain et les zones où la terre fraîche réapparaît, sans présumer que tous les jardins voisins sont touchés."}</p>
            <p>{"Pour une parcelle près de la Marne, du canal ou d'un bief, l'humidité et la praticabilité du sol sont à décrire lors de la demande. La proximité de l'eau n'établit pas la présence de taupes : seules les observations et l'inspection permettent d'identifier les galeries utiles au piégeage."}</p>
            <p>{"À Marault et à Roôcourt-la-Côte, communes associées de Bologne, précisez l'usage de votre terrain : pelouse privée, espace de passage ou parcelle agricole. Ces repères situent votre demande et ne constituent pas des références clients."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun monument n'est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.mairie-bologne.fr/patrimoine/" target="_blank" rel="noopener noreferrer">site du patrimoine de la mairie de Bologne</a> et dans la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.agglo-chaumont.fr/mon-agglomeration/presentation/les-communes-adherentes/bologne/" target="_blank" rel="noopener noreferrer">présentation de Bologne par l'agglomération de Chaumont</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Bologne (52310)", intro: "Bologne est un bourg-centre de l'agglomération de Chaumont, avec les communes associées de Marault et de Roôcourt-la-Côte. Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre-bourg de Bologne", "Secteur de l'église Sainte-Bologne", "Abords de la Marne et du canal", "Chemin de halage", "Marault", "Roôcourt-la-Côte"] }}
        extraSections={[
          { title: "Repérer l'activité sans détruire tous les indices", content: <>
            <p>{"Avant la visite, notez les zones où des monticules de terre fraîche apparaissent et leur évolution. Une photographie d'ensemble du jardin aide à situer l'activité. Évitez de retourner tout le sol ou de modifier les galeries avant le diagnostic : les indices de circulation deviennent moins lisibles."}</p>
            <p>{"Ne versez ni carburant ni produit ménager dans les galeries et n'utilisez pas de fumigation improvisée. Si des racines sont consommées ou si les dégâts diffèrent de simples taupinières, signalez-le pour ne pas confondre taupes et rongeurs."}</p>
          </> },
          { title: "Organisation du piégeage et suivi du jardin à Bologne", content: <>
            <p>{"Indiquez les zones fréquentées par les enfants et les animaux, les passages de tonte et les équipements enterrés connus. Les dispositifs doivent rester hors de manipulation. Respectez les indications sur les espaces à éviter et ne déplacez pas les pièges pour faciliter une tonte."}</p>
            <p>{"La réapparition de monticules dans une autre partie du terrain doit être signalée pour orienter le contrôle. Le suivi est adapté à l'activité et aux accès : une capture ne constitue pas une garantie d'absence définitive sur une parcelle ouverte. Les prestations sont précisées dans le devis."}</p>
          </> },
          { title: "Votre service à Bologne et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes">service taupier en Haute-Marne</Link> pour les méthodes et les prestations. Pour votre adresse à Bologne, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-chaumont">Taupier à Chaumont</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-froncles">Taupier à Froncles</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Bologne", items: [
          { label: "Taupier à Chaumont", to: "/taupes-chaumont" },
          { label: "Taupier à Froncles", to: "/taupes-froncles" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Bologne", to: "/deratisation-bologne" },
          { label: "Désinsectisation à Bologne", to: "/desinsectisation-bologne" },
          { label: "Guêpes et frelons à Bologne", to: "/guepes-frelons-bologne" },
          { label: "Dépigeonnisation à Bologne", to: "/depigeonnisation-bologne" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Taupier à Bologne : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default TaupesBologne;
