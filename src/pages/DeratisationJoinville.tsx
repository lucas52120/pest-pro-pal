import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation Joinville 52 - Intervention 24h, Devis Gratuit";
const DESCRIPTION = "Rats ou souris à Joinville (52300) ? G&F Nuisibles recherche les accès et adapte la dératisation aux logements et commerces. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/deratisation-joinville";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Intervenez-vous dans le centre historique de Joinville ?", answer: "Oui, les logements et locaux professionnels de Joinville sont desservis. Précisez votre rue, l’accès aux caves et les éventuelles parties communes pour préparer le diagnostic." },
  { question: "Habiter près du quai des Peceaux signifie-t-il avoir des rats ?", answer: "Non. La proximité de l’eau ne suffit pas à établir une infestation. Les traces dans votre bâtiment, les accès disponibles et l’identification orientent la recherche." },
  { question: "Que faire si les traces concernent plusieurs appartements ?", answer: "Informez le bailleur ou le syndic et indiquez les espaces partagés concernés. L’accès aux caves et aux passages techniques peut aider à définir une action coordonnée." },
  { question: "Quel prix pour une dératisation à Joinville ?", answer: "Le coût dépend du périmètre, des accès, des dispositifs et du suivi. Le diagnostic et le devis gratuits servent à préciser les prestations adaptées à votre situation." },
  { question: "Les rongeurs peuvent-ils revenir après le traitement ?", answer: "Oui, de nouveaux accès ou des ressources alimentaires peuvent favoriser un retour. Le suivi et les recommandations de fermeture des passages réduisent ce risque, sans promettre une absence définitive." },
];

const DeratisationJoinville = () => {
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
        "@type": "Service", "url": URL, "name": "Dératisation à Joinville (52300) : rats et souris", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Joinville", "address": { "@type": "PostalAddress", "postalCode": "52300", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dératisation", "item": "https://gf-nuisibles.fr/deratisation" },
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
        serviceTitle={"Dératisation à Joinville (52300) : rats et souris"}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"DES TRACES DE RONGEURS CHEZ VOUS À JOINVILLE ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"À Joinville, une réserve avec des emballages rongés, une cave présentant des déjections ou des bruits répétés sous un plancher appellent une recherche de rongeurs. G&F Nuisibles propose une dératisation à Joinville (52300), en Haute-Marne, pour les logements et les locaux professionnels. Le diagnostic part de vos observations : la présence de la Marne dans la commune ne permet pas de conclure qu’un bâtiment est infesté. Précisez les pièces concernées et les accès aux dépendances lors de votre demande."}
        expertise={"Dans une maison de la vieille ville comme dans un commerce, le traitement dépend des voies de passage, des refuges et des ressources accessibles. L’identification des rats ou des souris guide le choix entre pièges mécaniques et autres dispositifs professionnels. Signalez les enfants, les animaux et les denrées à protéger. Les postes sécurisés et les consignes limitent l’exposition, mais aucun produit n’est présenté comme sans risque ni comme une solution automatique à toute présence de rongeurs."}
        method={"L’inspection examine les seuils, les passages de canalisations, les espaces de stockage et les ouvertures vers les annexes. Le devis décrit le périmètre retenu, les dispositifs et le suivi proposé. La lutte contre les rats et les souris s’accompagne de recommandations sur la conservation des aliments, les déchets et les réparations des accès identifiés. Une fermeture doit être coordonnée avec le traitement après compréhension des circulations ; boucher tous les trous avant le diagnostic peut masquer des informations utiles."}
        localContext={{ title: "Vieille ville et quais de Joinville : rechercher les accès réels", content: <>
<p>{"Dans le centre historique, autour de l’Auditoire de Justice et de l’église Notre-Dame, précisez si le bien comporte une cave, une cour intérieure ou des locaux mitoyens. Ces éléments peuvent modifier le périmètre de recherche. La valeur patrimoniale ou l’âge d’un bâtiment ne prouvent pas la présence de rongeurs."}</p>
<p>{"Du quai des Peceaux au quai des Mailles, la Marne et ses bras servent à situer votre adresse. Le diagnostic porte sur les traces observées chez vous, les accès en pied de façade et les éventuelles annexes. Aucun quai ni bâtiment voisin n’est désigné comme infesté."}</p>
<p>{"Dans le secteur du pont du Poncelot ou du château du Grand Jardin, indiquez les possibilités de stationnement et d’accès à votre logement ou à votre commerce. Ces monuments sont des repères géographiques de Joinville, pas des clients ou des interventions revendiquées par G&F Nuisibles."}</p>
<p>Pour retrouver ces repères, consultez la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.bienvenue-hautemarne.fr/villes-cites-caractere/joinville/" target="_blank" rel="noopener noreferrer">présentation de Joinville par Haute-Marne Attractivité</a> et le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://tourisme-joinville.com/" target="_blank" rel="noopener noreferrer">site de l’office de tourisme de Joinville</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs desservis à Joinville (52300)", intro: "Précisez votre rue, le type de bien et les accès disponibles. Les noms ci-dessous sont des secteurs et des repères de Joinville en Haute-Marne, et non des lieux présumés infestés. Ils ne désignent pas Joinville-le-Pont.", items: ["Vieille ville et centre historique", "Secteur de l’église Notre-Dame et de l’Auditoire de Justice", "Quai des Peceaux", "Quai des Mailles et pont du Poncelot", "Secteur du château du Grand Jardin", "Abords de la colline de l’ancien château"] }}
        extraSections={[
          { title: "Cave, cuisine ou réserve : transmettre les bonnes observations", content: <>
<p>{"Notez les endroits où les déjections réapparaissent, les dégâts sur les emballages et les bruits entendus. Une photo nette peut aider à préparer l’inspection ; ne manipulez pas les traces à mains nues. Des indices dans une cave ne signifient pas nécessairement que toutes les pièces du bâtiment sont occupées."}</p>
<p>{"Fermez les contenants alimentaires et rendez les zones à examiner accessibles. Évitez de déposer des appâts en vrac ou de mélanger des produits. Pour le nettoyage des surfaces souillées, demandez les précautions adaptées plutôt que de balayer les traces à sec."}</p>
          </> },
          { title: "Organiser une dératisation dans un immeuble ou un commerce", content: <>
<p>{"Lorsque des passages techniques relient plusieurs locaux, l’accès aux espaces partagés peut être utile au diagnostic. À Joinville, signalez au bailleur ou au syndic les observations dans les parties communes. Une action limitée à un seul placard ne permet pas toujours de comprendre l’ensemble des circulations."}</p>
<p>{"Pour une réserve de commerce, précisez les horaires, les livraisons et les contraintes de protection des denrées. Le devis doit indiquer les zones concernées et les contrôles retenus. Aucun tarif ni nombre de passages ne peut être déduit de la seule localisation dans le centre ou près de la Marne."}</p>
          </> },
          { title: "Votre service à Joinville et dans les villes du secteur", content: <>
<p>Découvrez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation">service dératisation en Haute-Marne</Link> pour connaître les méthodes et les prestations. Pour votre adresse à Joinville, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Pour une adresse dans une autre commune, consultez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-wassy">Dératisation à Wassy</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-froncles">Dératisation à Froncles</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-saint-dizier">Dératisation à Saint-Dizier</Link>. Elles présentent les prestations dans ces villes, distinctes de Joinville. Retrouvez également notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link> pour situer votre demande.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Joinville", items: [
          { label: "Dératisation à Wassy", to: "/deratisation-wassy" },
          { label: "Dératisation à Froncles", to: "/deratisation-froncles" },
          { label: "Dératisation à Saint-Dizier", to: "/deratisation-saint-dizier" },
        ] }}
        relatedLinks={[
          { label: "Désinsectisation à Joinville", to: "/desinsectisation-joinville" },
          { label: "Guêpes et frelons à Joinville", to: "/guepes-frelons-joinville" },
          { label: "Dépigeonnisation à Joinville", to: "/depigeonnisation-joinville" },
          { label: "Taupier à Joinville", to: "/taupes-joinville" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dératisation à Joinville : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DeratisationJoinville;
