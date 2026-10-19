import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation Joinville 52 - Intervention 24h, Devis Gratuit";
const DESCRIPTION = "Pigeons sur un balcon ou une toiture à Joinville (52300) ? G&F Nuisibles étudie les supports et propose des protections adaptées. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/depigeonnisation-joinville";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Peut-on protéger une façade dans la vieille ville de Joinville ?", answer: "Le diagnostic étudie les supports et les fixations. Le statut du bâtiment et les autorisations à obtenir sont vérifiés avant les travaux, notamment en présence de contraintes patrimoniales." },
  { question: "Filets ou picots : quelle solution pour mon balcon ?", answer: "Le choix dépend du volume, des rebords et des zones utilisées par les oiseaux. Un filet ferme un accès à un espace ; les picots limitent le perchage sur certains supports." },
  { question: "Que faire si des oiseaux sont déjà dans le comble ?", answer: "Signalez-le avant toute fermeture. L’évaluation doit tenir compte de leur présence, des éventuels nids et des précautions nécessaires pour ne pas emprisonner les oiseaux." },
  { question: "Le nettoyage des fientes fait-il partie du devis ?", answer: "Seulement si cette opération est prévue. Les surfaces, les volumes, les accès et les mesures de protection sont évalués avant de définir la prestation." },
  { question: "Quel entretien après une dépigeonnisation ?", answer: "Contrôlez les protections selon les consignes données et signalez toute fixation déplacée ou ouverture. Le devis et les recommandations précisent le périmètre protégé et les conditions de suivi." },
];

const DepigeonnisationJoinville = () => {
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
        "@type": "Service", "url": URL, "name": "Dépigeonnisation à Joinville (52300) : balcons et toitures", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Joinville", "address": { "@type": "PostalAddress", "postalCode": "52300", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dépigeonnisation", "item": "https://gf-nuisibles.fr/depigeonnisation" },
        { "@type": "ListItem", "position": 3, "name": "Joinville", "item": URL }
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
        city="Joinville"
        department="Haute-Marne (52)"
        serviceTitle={"Dépigeonnisation à Joinville (52300) : balcons et toitures"}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"DES PIGEONS SUR VOTRE BÂTIMENT À JOINVILLE ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Un balcon utilisé comme abri, des fientes sur un rebord ou des oiseaux entrant sous une toiture à Joinville demandent une étude des accès. G&F Nuisibles propose une dépigeonnisation à Joinville (52300) pour protéger les logements et les locaux professionnels. L’objectif est de limiter l’accès aux zones utilisées par les pigeons avec une solution adaptée au support. La pose d’un dispositif doit tenir compte des oiseaux présents, de l’entretien et de l’usage du bâtiment."}
        expertise={"Filets, picots et fils tendus répondent à des besoins distincts. Un filet protège un volume, tandis qu’un système de limitation du perchage peut convenir à certains rebords. Le choix dépend des points de fixation, de la largeur du support et des accès voisins. Les méthodes non létales doivent être mises en place sans emprisonner les oiseaux. Sur une façade en copropriété ou soumise à des contraintes patrimoniales, les autorisations nécessaires sont vérifiées avant d’engager les travaux."}
        method={"Le diagnostic repère les zones de perchage, les ouvertures et la présence éventuelle de nids. Le devis indique les protections proposées, les moyens d’accès et les éventuelles opérations de nettoyage. La pose recherche une fermeture cohérente des passages retenus, sans laisser d’oiseau enfermé. Les contrôles des fixations et l’entretien sont expliqués : une protection abîmée ou déplacée peut laisser un nouvel accès, même après une installation initialement adaptée."}
        localContext={{ title: "Façades de Joinville : intégrer les contraintes patrimoniales", content: <>
<p>{"La vieille ville de Joinville possède un patrimoine que situent l’Auditoire de Justice et l’église Notre-Dame. Pour votre façade, décrivez les rebords, les balcons et les points de fixation disponibles. Le statut d’un bâtiment et les accords à obtenir doivent être vérifiés ; aucun monument cité n’est présenté comme infesté ou comme client."}</p>
<p>{"Le long du quai des Peceaux et du quai des Mailles, précisez l’accès à la façade depuis la rue, la cour ou le logement. Les possibilités de travail en hauteur et les zones de passage influencent l’organisation de la pose. La proximité de l’eau ne suffit pas à choisir un dispositif anti-pigeons."}</p>
<p>{"Le pont du Poncelot et le château du Grand Jardin sont des repères locaux pour situer une adresse. La protection envisagée concerne votre bien et ses accès réels, sans prétendre intervenir sur ces sites patrimoniaux. Signalez les éventuels travaux, ouvertures ou équipements à préserver sur votre bâtiment."}</p>
<p>Pour retrouver ces repères, consultez la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.bienvenue-hautemarne.fr/villes-cites-caractere/joinville/" target="_blank" rel="noopener noreferrer">présentation de Joinville par Haute-Marne Attractivité</a> et le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://tourisme-joinville.com/" target="_blank" rel="noopener noreferrer">site de l’office de tourisme de Joinville</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs desservis à Joinville (52300)", intro: "Précisez votre rue, le type de bien et les accès disponibles. Les noms ci-dessous sont des secteurs et des repères de Joinville en Haute-Marne, et non des lieux présumés infestés. Ils ne désignent pas Joinville-le-Pont.", items: ["Vieille ville et centre historique", "Secteur de l’église Notre-Dame et de l’Auditoire de Justice", "Quai des Peceaux", "Quai des Mailles et pont du Poncelot", "Secteur du château du Grand Jardin", "Abords de la colline de l’ancien château"] }}
        extraSections={[
          { title: "Quelle protection pour un balcon, une corniche ou un comble ?", content: <>
<p>{"Un filet peut empêcher l’accès à un balcon ou à un volume sous réserve de fixations appropriées et d’une pose complète. Les picots ou les fils tendus peuvent décourager le perchage sur certains rebords. Une seule solution n’est pas adaptée à tous les supports ni à tous les usages."}</p>
<p>{"Avant de fermer un accès au comble, la présence d’oiseaux et de nids doit être évaluée. Les règles applicables et les précautions nécessaires sont prises en compte. Pour une façade commune ou un bâtiment soumis à des contraintes patrimoniales, l’accord du propriétaire, du syndic ou des services compétents peut être requis."}</p>
          </> },
          { title: "Nettoyage des fientes et entretien : préciser la prestation", content: <>
<p>{"Évitez de balayer à sec une accumulation de fientes sans précautions. Limitez l’accès à la zone souillée et demandez les consignes de protection adaptées. Une opération de nettoyage éventuelle dépend des surfaces, des volumes et des moyens d’accès ; elle ne doit pas être supposée incluse automatiquement."}</p>
<p>{"Pour le devis, transmettez des photos prises depuis un endroit sûr et les dimensions approximatives des supports. Demandez les opérations incluses, les modalités de contrôle et l’entretien des fixations. Aucune garantie d’absence définitive de pigeons ne remplace une description claire du périmètre protégé."}</p>
          </> },
          { title: "Votre service à Joinville et dans les villes du secteur", content: <>
<p>Découvrez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation">service dépigeonnisation en Haute-Marne</Link> pour connaître les méthodes et les prestations. Pour votre adresse à Joinville, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Pour une adresse dans une autre commune, consultez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-wassy">Dépigeonnisation à Wassy</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-froncles">Dépigeonnisation à Froncles</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-saint-dizier">Dépigeonnisation à Saint-Dizier</Link>. Elles présentent les prestations dans ces villes, distinctes de Joinville. Retrouvez également notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link> pour situer votre demande.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Joinville", items: [
          { label: "Dépigeonnisation à Wassy", to: "/depigeonnisation-wassy" },
          { label: "Dépigeonnisation à Froncles", to: "/depigeonnisation-froncles" },
          { label: "Dépigeonnisation à Saint-Dizier", to: "/depigeonnisation-saint-dizier" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Joinville", to: "/deratisation-joinville" },
          { label: "Désinsectisation à Joinville", to: "/desinsectisation-joinville" },
          { label: "Guêpes et frelons à Joinville", to: "/guepes-frelons-joinville" },
          { label: "Taupier à Joinville", to: "/taupes-joinville" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dépigeonnisation à Joinville : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DepigeonnisationJoinville;
