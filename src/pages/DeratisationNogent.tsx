import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation Nogent 52 - Intervention 24h, Devis Gratuit";
const DESCRIPTION = "Rats ou souris à Nogent (52800) ? G&F Nuisibles recherche les accès et propose une dératisation adaptée aux logements et locaux. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/deratisation-nogent";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Intervenez-vous à Nogent-le-Haut et à Nogent-le-Bas ?", answer: "Oui, ces deux secteurs de Nogent sont desservis. Précisez votre adresse, les pièces touchées et les accès à la cave ou aux dépendances pour préparer le diagnostic." },
  { question: "Que vérifier dans un atelier de la zone industrielle de Nogent ?", answer: "Signalez les traces près des livraisons, les emballages endommagés et les passages de canalisations. Le diagnostic porte sur votre établissement et ses contraintes de stockage, sans présumer de la situation des bâtiments voisins." },
  { question: "Comment distinguer rats et souris ?", answer: "La taille des déjections, les dégâts et les voies de passage donnent des indications, mais l’identification demande un examen. Une photo nette peut aider ; ne manipulez pas les traces sans précautions." },
  { question: "Combien coûte une dératisation à Nogent ?", answer: "Le prix dépend des accès, des surfaces concernées, des dispositifs et du suivi. Un diagnostic et un devis gratuits permettent de préciser les prestations ; aucun forfait général ne décrit toutes les situations." },
  { question: "Faut-il boucher les trous avant la visite ?", answer: "Repérez-les et prenez des photos, mais demandez conseil avant une fermeture définitive. Il faut comprendre les circulations et coordonner les réparations avec les mesures de traitement." },
];

const DeratisationNogent = () => {
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
        "@type": "Service", "url": URL, "name": "Dératisation à Nogent (52800) : rats et souris", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Nogent", "address": { "@type": "PostalAddress", "postalCode": "52800", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dératisation", "item": "https://gf-nuisibles.fr/deratisation" },
        { "@type": "ListItem", "position": 3, "name": "Nogent", "item": URL }
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
        city="Nogent"
        department="Haute-Marne (52)"
        serviceTitle={"Dératisation à Nogent (52800) : rats et souris"}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"RATS OU SOURIS DANS VOTRE BÂTIMENT À NOGENT ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Des crottes dans une réserve, des emballages rongés ou des bruits derrière une cloison à Nogent ? Ces observations justifient une recherche de rongeurs, sans permettre à elles seules de mesurer leur nombre. G&F Nuisibles propose une dératisation à Nogent (52800), en Haute-Marne, pour les particuliers et les professionnels. Indiquez si votre adresse se trouve à Nogent-le-Haut ou à Nogent-le-Bas et décrivez les pièces concernées : une cave, une cuisine et un atelier ne présentent pas les mêmes accès."}
        expertise={"Le diagnostic distingue les indices de rats et de souris, recherche les voies de passage et tient compte de l’usage du bâtiment. Dans un logement, signalez les enfants et les animaux ; dans un local professionnel, précisez les denrées, les stocks et les horaires d’activité. Les dispositifs mécaniques ou les postes sécurisés sont choisis selon la situation. Aucun produit n’est présenté comme sans risque : les consignes de protection accompagnent la prestation."}
        method={"L’inspection porte sur les ouvertures en pied de façade, les passages de canalisations, les dépendances et les sources de nourriture. Le devis précise les zones retenues, les dispositifs et le suivi proposé. La dératisation associe le traitement de l’activité observée et des recommandations sur les accès : rangement, protection des denrées, gestion des déchets et réparations à prévoir. Un colmatage doit être réfléchi selon les circulations repérées, et non réalisé au hasard."}
        localContext={{ title: "Rongeurs : prendre en compte le relief et les bâtiments de Nogent", content: <>
<p>{"Nogent-le-Haut occupe un plateau, tandis que Nogent-le-Bas se situe dans la vallée de la Traire. Pour une intervention, cette distinction sert à situer votre adresse et ses dépendances. La présence d’un cours d’eau ne suffit pas à établir une infestation : ce sont les traces dans votre bâtiment et les accès disponibles qui orientent le diagnostic."}</p>
<p>{"Autour de la place Charles-de-Gaulle et du musée de la Coutellerie, précisez si la demande concerne un logement, une réserve de commerce ou un espace partagé. Près de l’église Saint-Germain, à Nogent-le-Bas, indiquez les caves et annexes accessibles. Ces monuments sont des repères géographiques, pas des références clients."}</p>
<p>{"L’activité coutelière et industrielle de Nogent implique des locaux aux usages variés. Dans la zone industrielle, la recherche porte sur les portes de livraison, les zones de stockage et les passages techniques de votre établissement. Aucun atelier voisin n’est présumé infesté."}</p>
<p>Pour retrouver ces repères, consultez la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://villedenogent52.fr/ma-ville/presentation-de-la-ville" target="_blank" rel="noopener noreferrer">présentation de Nogent par la mairie</a> et son <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://villedenogent52.fr/mes-activites/circuit-du-patrimoine" target="_blank" rel="noopener noreferrer">circuit du patrimoine</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs desservis à Nogent (52800)", intro: "Précisez votre rue, le type de bien et les accès. Ces secteurs situent les demandes et ne sont pas présentés comme infestés. Nogent désigne ici la commune de Haute-Marne, et non Nogent-sur-Marne ou Nogent-le-Rotrou.", items: ["Nogent-le-Haut", "Nogent-le-Bas et vallée de la Traire", "Centre, place Charles-de-Gaulle et musée de la Coutellerie", "Secteur de l’église Saint-Jean", "Secteur de l’église Saint-Germain", "Zone industrielle de Nogent"] }}
        extraSections={[
          { title: "Quels indices relever avant une dératisation ?", content: <>
<p>{"Photographiez les traces sans manipuler les déjections à mains nues. Notez où elles apparaissent, les dégâts sur les emballages et les moments où vous entendez du bruit. Un animal aperçu dans le jardin ne prouve pas qu’il occupe la maison ; à l’inverse, des indices répétés dans un placard méritent une inspection ciblée."}</p>
<p>{"Évitez de déposer des appâts en vrac ou de mélanger plusieurs produits. Gardez les aliments dans des contenants fermés et rendez les zones à examiner accessibles. Les gestes de nettoyage et les protections nécessaires sont précisés selon la nature des traces."}</p>
          </> },
          { title: "Maisons, commerces et ateliers : définir le périmètre du devis", content: <>
<p>{"Un devis de dératisation à Nogent tient compte des volumes, des accès et de l’activité constatée. Une réserve attenante, un garage ou une cave peuvent devoir être examinés avec la pièce initialement signalée. Dans un immeuble, le bailleur ou le syndic peut faciliter l’accès aux parties communes."}</p>
<p>{"Pour un commerce ou un atelier, indiquez les contraintes de circulation, de stockage et de protection des produits. Demandez ce qui est compris dans le suivi, les contrôles et les recommandations de fermeture des accès. Aucun prix ni nombre de passages ne peut être déduit du seul nom du quartier."}</p>
          </> },
          { title: "Votre service à Nogent et dans les villes du secteur", content: <>
<p>Découvrez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation">service dératisation en Haute-Marne</Link> pour connaître les méthodes et les prestations. Pour votre adresse à Nogent, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Pour une adresse dans une autre commune, consultez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-langres">Dératisation à Langres</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-chaumont">Dératisation à Chaumont</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-chalindrey">Dératisation à Chalindrey</Link>. Elles présentent les prestations dans ces villes, distinctes de Nogent. Retrouvez également notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link> pour situer votre demande.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Nogent", items: [
          { label: "Dératisation à Langres", to: "/deratisation-langres" },
          { label: "Dératisation à Chaumont", to: "/deratisation-chaumont" },
          { label: "Dératisation à Chalindrey", to: "/deratisation-chalindrey" },
        ] }}
        relatedLinks={[
          { label: "Guêpes et frelons à Nogent", to: "/guepes-frelons-nogent" },
          { label: "Dépigeonnisation à Nogent", to: "/depigeonnisation-nogent" },
          { label: "Taupier à Nogent", to: "/taupes-nogent" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dératisation à Nogent : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DeratisationNogent;
