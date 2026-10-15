import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupier à Nogent (52800) : piégeage des taupes | G&F Nuisibles";
const DESCRIPTION = "Taupinières dans votre jardin à Nogent (52800) ? G&F Nuisibles repère les galeries actives et propose un piégeage mécanique adapté. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/taupes-nogent";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Intervenez-vous dans les jardins de Nogent-le-Bas ?", answer: "Oui, les jardins de Nogent-le-Bas et de Nogent-le-Haut sont desservis. Indiquez l’adresse, l’accès au terrain et les zones où de nouvelles taupinières apparaissent." },
  { question: "Une taupinière correspond-elle à une taupe ?", answer: "Non. Un même animal peut produire plusieurs monticules. Le diagnostic recherche les galeries actives ; le nombre de taupinières ne permet pas de compter directement les animaux." },
  { question: "Le piégeage utilise-t-il des produits chimiques ?", answer: "La méthode proposée repose sur des pièges mécaniques dans les galeries, sans traitement chimique du sol. Les consignes de protection et d’accès restent nécessaires autour des dispositifs." },
  { question: "Faut-il aplatir les monticules avant la visite ?", answer: "Photographiez-les et notez les zones récentes avant toute remise à niveau. Évitez de remuer l’ensemble du réseau ; les traces visibles aident à organiser le repérage." },
  { question: "Pouvez-vous garantir un jardin sans taupes pour toujours ?", answer: "Non, un terrain ouvert peut être recolonisé. Le devis précise la prestation et le suivi retenus, sans promettre une absence définitive de nouvelles taupes." },
];

const TaupesNogent = () => {
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
        "@type": "Service", "url": URL, "name": "Taupier à Nogent (52800) : piégeage des taupes", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Nogent", "address": { "@type": "PostalAddress", "postalCode": "52800", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Taupier", "item": "https://gf-nuisibles.fr/taupes" },
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
        serviceTitle={"Taupier à Nogent (52800) : piégeage des taupes"}
        icon={<Target className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"DES TAUPINIÈRES DANS VOTRE JARDIN À NOGENT ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Des monticules de terre apparaissent sur votre pelouse à Nogent (52800) ? Avant de prévoir un piégeage, il faut vérifier l’activité des galeries et distinguer les taupes d’autres animaux fouisseurs. G&F Nuisibles propose un service de taupier pour les jardins et terrains de Nogent, à Nogent-le-Haut comme à Nogent-le-Bas. La méthode repose sur le repérage du réseau actif, pas sur le nombre de taupinières visibles à un instant donné."}
        expertise={"Une taupe se nourrit principalement d’invertébrés présents dans le sol : une plante abîmée ne suffit donc pas à l’identifier comme responsable. Le diagnostic tient compte des traces, de l’état de la pelouse et des zones récemment remuées. Les pièges mécaniques sont installés dans les galeries identifiées, sans traitement chimique du terrain. Leur emplacement doit être protégé et les consignes respectées, notamment en présence d’enfants ou d’animaux."}
        method={"Le repérage recherche les galeries utilisées et distingue les anciennes taupinières des signes récents. Le devis précise le périmètre de travail et le suivi retenu. Les pièges sont posés aux endroits adaptés, puis contrôlés selon l’organisation convenue. La remise en état de la pelouse est envisagée après l’évaluation de l’activité. Une capture ne garantit pas qu’aucun nouvel animal n’entrera ultérieurement sur un terrain ouvert."}
        localContext={{ title: "Jardins du plateau et de la vallée : observer votre terrain à Nogent", content: <>
<p>{"Nogent-le-Haut se situe sur un plateau et Nogent-le-Bas dans la vallée de la Traire. Pour un jardin dans l’un ou l’autre secteur, précisez la pente, les accès et l’état du sol lors de vos observations. La topographie locale situe la demande, mais ne permet pas de prévoir le nombre de taupes sur votre propriété."}</p>
<p>{"Les abords de la Côte Gueudin et les secteurs autour de l’église Saint-Germain sont des repères pour décrire une adresse et ses espaces extérieurs. Ils ne sont pas présentés comme des lieux infestés ou déjà traités. Seuls les indices observés dans votre jardin orientent le diagnostic."}</p>
<p>{"Une pelouse attenante à une maison, un jardin potager et un espace extérieur professionnel ont des usages différents. À Nogent, signalez les zones de passage, les jeux d’enfants, les clôtures et les éventuels réseaux enterrés connus avant d’organiser le piégeage."}</p>
<p>Pour retrouver ces repères, consultez la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://villedenogent52.fr/ma-ville/presentation-de-la-ville" target="_blank" rel="noopener noreferrer">présentation de Nogent par la mairie</a> et son <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://villedenogent52.fr/mes-activites/circuit-du-patrimoine" target="_blank" rel="noopener noreferrer">circuit du patrimoine</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs desservis à Nogent (52800)", intro: "Précisez votre rue, le type de bien et les accès. Ces secteurs situent les demandes et ne sont pas présentés comme infestés. Nogent désigne ici la commune de Haute-Marne, et non Nogent-sur-Marne ou Nogent-le-Rotrou.", items: ["Nogent-le-Haut", "Nogent-le-Bas et vallée de la Traire", "Centre, place Charles-de-Gaulle et musée de la Coutellerie", "Secteur de l’église Saint-Jean", "Secteur de l’église Saint-Germain", "Zone industrielle de Nogent"] }}
        extraSections={[
          { title: "Taupinières récentes ou anciennes : préparer le repérage", content: <>
<p>{"Photographiez les monticules et notez les endroits où de la terre fraîche apparaît. Leur répartition aide à comprendre l’activité, mais plusieurs taupinières peuvent provenir d’un même animal. Évitez de bouleverser tout le réseau avant la visite, car cela rend la lecture des galeries plus difficile."}</p>
<p>{"Si vous avez essayé un répulsif ou déplacé la terre, signalez-le. Les ultrasons et les recettes domestiques n’offrent pas une protection certaine. N’introduisez pas de produits ménagers, de carburant ni de fumigènes dans les galeries : ces pratiques exposent les occupants et le terrain à des risques inutiles."}</p>
          </> },
          { title: "Piégeage, suivi et remise en état de la pelouse", content: <>
<p>{"La surface du jardin ne suffit pas à fixer le périmètre : les galeries actives, l’accessibilité et l’usage des lieux comptent également. Le devis indique les modalités de pose et de contrôle. Ne déplacez pas les dispositifs et respectez les consignes d’accès aux zones concernées."}</p>
<p>{"Après le suivi, la terre des monticules peut servir à remettre la pelouse à niveau selon son état. Une nouvelle taupinière plus tard demande une nouvelle observation plutôt qu’une promesse d’exclusion définitive. Les conditions d’un éventuel suivi supplémentaire doivent être explicitées avant la prestation."}</p>
          </> },
          { title: "Votre service à Nogent et dans les villes du secteur", content: <>
<p>Découvrez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes">service taupier en Haute-Marne</Link> pour connaître les méthodes et les prestations. Pour votre adresse à Nogent, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Pour une adresse dans une autre commune, consultez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-langres">Taupier à Langres</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-chaumont">Taupier à Chaumont</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-chalindrey">Taupier à Chalindrey</Link>. Elles présentent les prestations dans ces villes, distinctes de Nogent. Retrouvez également notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link> pour situer votre demande.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Nogent", items: [
          { label: "Taupier à Langres", to: "/taupes-langres" },
          { label: "Taupier à Chaumont", to: "/taupes-chaumont" },
          { label: "Taupier à Chalindrey", to: "/taupes-chalindrey" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Nogent", to: "/deratisation-nogent" },
          { label: "Désinsectisation à Nogent", to: "/desinsectisation-nogent" },
          { label: "Guêpes et frelons à Nogent", to: "/guepes-frelons-nogent" },
          { label: "Dépigeonnisation à Nogent", to: "/depigeonnisation-nogent" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Taupier à Nogent : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default TaupesNogent;
