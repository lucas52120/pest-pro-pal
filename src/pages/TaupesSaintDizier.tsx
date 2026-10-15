import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupier à Saint-Dizier (52100) | G&F Nuisibles";
const DESCRIPTION = "Taupinières sur votre pelouse à Saint-Dizier (52100) ? G&F Nuisibles repère les galeries actives et propose un piégeage mécanique. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/taupes-saint-dizier";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Intervenez-vous dans les jardins de Gigny et de Marnaval ?", answer: "Oui, ces secteurs de Saint-Dizier sont desservis, comme La Noue, le Vert-Bois et les autres adresses de la commune. Précisez la surface du terrain, l’accès et la localisation des monticules." },
  { question: "Plusieurs taupinières signifient-elles plusieurs taupes ?", answer: "Pas nécessairement. Un même animal peut produire plusieurs monticules dans son réseau. Le repérage des galeries actives est plus utile qu’un simple comptage pour préparer le piégeage." },
  { question: "Les pièges présentent-ils un risque pour les animaux ?", answer: "Les dispositifs mécaniques ne doivent pas être manipulés. Signalez vos animaux et respectez les zones et les consignes indiquées. L’absence de produit chimique ne signifie pas qu’aucune précaution n’est nécessaire." },
  { question: "Faut-il remettre la pelouse à plat avant la visite ?", answer: "Évitez de remanier toutes les galeries avant le diagnostic. Les déblais frais et les traces visibles facilitent le repérage. Demandez les consignes adaptées à votre parcelle lors de la prise de contact." },
  { question: "Le jardin restera-t-il définitivement sans taupes ?", answer: "Une recolonisation reste possible depuis les terrains voisins. Le devis précise le périmètre et les contrôles de l’intervention, sans garantie d’absence définitive sur une parcelle ouverte." },
];

const TaupesSaintDizier = () => {
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
        "@type": "Service", "url": URL, "name": "Taupier à Saint-Dizier (52100) : jardins et pelouses", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Saint-Dizier", "address": { "@type": "PostalAddress", "postalCode": "52100", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Taupier", "item": "https://gf-nuisibles.fr/taupes" },
        { "@type": "ListItem", "position": 3, "name": "Saint-Dizier", "item": URL }
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
        city="Saint-Dizier"
        department="Haute-Marne (52)"
        serviceTitle={"Taupier à Saint-Dizier (52100) : jardins et pelouses"}
        icon={<Target className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"TAUPINIÈRES DANS VOTRE JARDIN À SAINT-DIZIER ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"De nouveaux monticules de terre apparaissent sur votre pelouse à Saint-Dizier ? G&F Nuisibles propose un service de taupier à Saint-Dizier (52100), basé sur le repérage des galeries actives et le piégeage mécanique. Le nombre de tas de terre ne correspond pas au nombre d’animaux : une taupe peut utiliser plusieurs passages. L’examen du terrain permet de distinguer les traces anciennes d’une activité récente avant de poser des dispositifs."}
        expertise={"Depuis Montsaon, nous desservons les jardins privés et les terrains professionnels du secteur bragard. L’accès, la surface et les usages de la parcelle sont pris en compte. Les pièges mécaniques ne nécessitent pas de produit chimique, mais doivent rester hors de manipulation : les enfants et les animaux sont tenus à l’écart des zones indiquées. La méthode et le suivi sont définis pour le terrain, pas d’après son quartier seul."}
        method={"Le repérage recherche les galeries fréquentées et les points adaptés à la pose. Le devis précise le périmètre et les contrôles nécessaires. Les dispositifs sont installés dans le réseau identifié et suivis selon le protocole convenu. Les consignes indiquent les zones à ne pas remanier pendant le passage et les indices à surveiller ensuite ; une parcelle ouverte peut être recolonisée depuis un terrain voisin."}
        localContext={{ title: "Jardins de Gigny, de La Noue et de Marnaval : examiner la parcelle", content: <>
<p>{"Pour un jardin à Gigny, à La Noue, à Marnaval ou au Vert-Bois, indiquez si les déblais concernent une pelouse, un verger ou un potager. Les limites de propriété, les plantations et les zones de passage déterminent le repérage. Une proximité avec la Marne ou le canal ne permet pas à elle seule d’expliquer les dégâts ni d’identifier l’animal."}</p>
<p>{"Le centre de Saint-Dizier, son château et l’église Notre-Dame sont des repères pour situer la commune ; le lac du Der appartient à un territoire voisin, pas à un quartier de Saint-Dizier. Aucun de ces lieux n’est cité comme référence d’intervention. Pour un espace partagé, signalez la fréquentation et les autorisations d’accès avant d’organiser la pose."}</p>
<p>{"Pour une demande dans une commune distincte, comme Bettancourt-la-Ferrée ou Chancenay, précisez bien l’adresse du terrain plutôt que de la présenter comme un quartier de Saint-Dizier. La zone et le créneau sont confirmés lors de l’appel."}</p>
<p>Pour situer les repères patrimoniaux, consultez le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.lacduder.com/offres/au-fil-des-rues-de-saint-dizier-saint-dizier-fr-5122370/" target="_blank" rel="noopener noreferrer">parcours de Saint-Dizier présenté par l’office de tourisme du lac du Der</a> et les <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://reveler.saint-dizier.fr/les-lieux/" target="_blank" rel="noopener noreferrer">lieux présentés par la Ville de Saint-Dizier</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs desservis à Saint-Dizier (52100)", intro: "Indiquez votre rue, le type de bien et les accès. Bettancourt-la-Ferrée et Chancenay sont des communes voisines, distinctes de Saint-Dizier ; les quartiers cités ne sont pas présentés comme infestés.", items: ["Centre-ville, église Notre-Dame et château", "Vert-Bois", "La Noue", "Gigny", "Marnaval", "Secteur gare, Marne et canal"] }}
        extraSections={[
          { title: "Taupe ou campagnol : décrire les dégâts avant de traiter", content: <>
<p>{"La taupe se nourrit notamment de vers de terre et d’invertébrés. Des racines rongées peuvent orienter vers un campagnol ou un autre animal ; les galeries et les déblais apportent des indices complémentaires. Décrivez les monticules, les végétaux touchés et l’évolution du problème plutôt que de conclure sur un seul signe."}</p>
<p>{"Ne versez pas de carburant, de produits ménagers ou de mélanges improvisés dans les galeries. Ces pratiques peuvent contaminer le sol et exposer les personnes ou les animaux sans régler le problème. Évitez de bouleverser l’ensemble du réseau avant la visite, ce qui complique le repérage."}</p>
          </> },
          { title: "Préparer le rendez-vous du taupier à Saint-Dizier", content: <>
<p>{"Précisez la surface approximative et les zones où de la terre fraîche apparaît. Des photos prises depuis le jardin peuvent aider. Signalez les réseaux enterrés connus, l’arrosage, les animaux et les espaces utilisés par les enfants. L’accès au terrain doit être convenu pour permettre les contrôles prévus."}</p>
<p>{"Le prix dépend de la surface, de la dispersion des passages et du suivi. Le diagnostic et le devis sont gratuits ; demandez quels contrôles sont inclus et quelles traces observer après l’intervention. Une absence définitive de taupes ne peut pas être promise sur un jardin ouvert aux parcelles voisines."}</p>
          </> },
          { title: "Votre service à Saint-Dizier et dans le nord de la Haute-Marne", content: <>
<p>Découvrez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes">service taupier en Haute-Marne</Link> pour les méthodes et les prestations. Pour votre adresse à Saint-Dizier, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez votre diagnostic et votre devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Vous êtes dans une autre commune du secteur ? Retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-wassy">Taupier à Wassy</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-joinville">Taupier à Joinville</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-montier-en-der">Taupier à Montier-en-Der</Link>. Consultez également notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link>.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Saint-Dizier", items: [
          { label: "Taupier à Wassy", to: "/taupes-wassy" },
          { label: "Taupier à Joinville", to: "/taupes-joinville" },
          { label: "Taupier à Montier-en-Der", to: "/taupes-montier-en-der" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Saint-Dizier", to: "/deratisation-saint-dizier" },
          { label: "Désinsectisation à Saint-Dizier", to: "/desinsectisation-saint-dizier" },
          { label: "Guêpes et frelons à Saint-Dizier", to: "/guepes-frelons-saint-dizier" },
          { label: "Dépigeonnisation à Saint-Dizier", to: "/depigeonnisation-saint-dizier" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Taupier à Saint-Dizier : appelez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default TaupesSaintDizier;
