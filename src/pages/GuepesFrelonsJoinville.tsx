import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Destruction nid Guêpes & Frelons Joinville 52 - Intervention 24h";
const DESCRIPTION = "Nid de guêpes ou de frelons à Joinville (52300) ? G&F Nuisibles évalue son emplacement et les accès pour un traitement adapté. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/guepes-frelons-joinville";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Pouvez-vous traiter un nid sous une toiture à Joinville ?", answer: "Le diagnostic évalue l’entrée du nid et les possibilités d’accès. Un refuge caché ne peut pas toujours être retiré physiquement ; les opérations retenues sont précisées avant le traitement." },
  { question: "Que faire pour un nid donnant sur une cour commune ?", answer: "Prévenez les occupants et le gestionnaire afin de limiter l’accès à la zone. Décrivez les passages fréquentés et les possibilités d’intervention sans approcher le nid." },
  { question: "Dois-je boucher l’entrée d’un nid dans un volet ?", answer: "Non. Une fermeture peut modifier les sorties des insectes. Gardez vos distances et demandez conseil avant toute manipulation du volet ou du support." },
  { question: "Et si ce sont des abeilles ?", answer: "L’identification est nécessaire avant une décision. Une colonie d’abeilles demande une prise en charge différente, parfois par un apiculteur ; ne tentez pas de la détruire vous-même." },
  { question: "Quel est le tarif pour un nid à Joinville ?", answer: "Le prix dépend de l’emplacement, de la hauteur, des obstacles et des moyens d’accès. Le diagnostic et le devis gratuits précisent les opérations proposées avant l’intervention." },
];

const GuepesFrelonsJoinville = () => {
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
        "@type": "Service", "url": URL, "name": "Nid de guêpes et frelons à Joinville (52300)", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Joinville", "address": { "@type": "PostalAddress", "postalCode": "52300", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Guêpes et frelons", "item": "https://gf-nuisibles.fr/guepes-frelons" },
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
        serviceTitle={"Nid de guêpes et frelons à Joinville (52300)"}
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"UN NID DE GUÊPES OU DE FRELONS À JOINVILLE ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Des insectes entrent régulièrement sous une toiture, dans un volet ou dans un abri de jardin à Joinville ? Gardez vos distances et ne cherchez pas à ouvrir le refuge. G&F Nuisibles prend en charge les demandes de destruction de nids de guêpes, de frelons européens et de frelons asiatiques à Joinville (52300), en Haute-Marne. L’identification et l’accès au nid déterminent la méthode ; une activité autour des fleurs n’indique pas forcément la présence d’une colonie dans votre propriété."}
        expertise={"Décrivez le support, la hauteur approximative et la fréquence des allées et venues sans vous exposer. Une photo prise depuis un endroit sûr peut aider, mais n’est pas indispensable si elle vous oblige à approcher le nid. Une colonie d’abeilles nécessite une prise en charge différente, éventuellement avec un apiculteur. Le diagnostic permet d’éviter un traitement inadapté et de préciser les mesures de protection des occupants et des espaces fréquentés."}
        method={"L’évaluation prend en compte le nid, les obstacles, l’accès en hauteur et les passages proches. Le périmètre de travail est organisé avant le traitement approprié. Le devis précise les opérations possibles : un nid visible dans un abri et un nid caché derrière une toiture ne demandent pas les mêmes moyens. Le retrait physique n’est pas systématique pour un refuge inaccessible. Les consignes après traitement et les conditions de suivi éventuel sont expliquées avant la prestation."}
        localContext={{ title: "Cours, toitures et jardins : situer une demande à Joinville", content: <>
<p>{"Dans la vieille ville, autour de l’église Notre-Dame et de l’Auditoire de Justice, signalez si l’entrée du nid donne sur une ruelle, une cour intérieure ou un comble. Les accès et les passages utilisés par les occupants doivent être décrits pour préparer l’intervention, sans monter près du refuge."}</p>
<p>{"Près du quai des Peceaux ou du pont du Poncelot, indiquez si le nid est visible depuis votre terrain et si des obstacles limitent l’accès. La présence de la Marne ne permet pas d’identifier l’espèce ; l’observation des insectes et du support reste nécessaire."}</p>
<p>{"Le château du Grand Jardin et la colline de l’ancien château sont des repères de Joinville pour situer les secteurs d’une demande. Ils ne désignent pas des sites traités ou infestés. Pour une découverte dans un espace public, prévenez le gestionnaire en donnant la localisation, sans tenter de neutraliser le nid."}</p>
<p>Pour retrouver ces repères, consultez la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.bienvenue-hautemarne.fr/villes-cites-caractere/joinville/" target="_blank" rel="noopener noreferrer">présentation de Joinville par Haute-Marne Attractivité</a> et le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://tourisme-joinville.com/" target="_blank" rel="noopener noreferrer">site de l’office de tourisme de Joinville</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs desservis à Joinville (52300)", intro: "Précisez votre rue, le type de bien et les accès disponibles. Les noms ci-dessous sont des secteurs et des repères de Joinville en Haute-Marne, et non des lieux présumés infestés. Ils ne désignent pas Joinville-le-Pont.", items: ["Vieille ville et centre historique", "Secteur de l’église Notre-Dame et de l’Auditoire de Justice", "Quai des Peceaux", "Quai des Mailles et pont du Poncelot", "Secteur du château du Grand Jardin", "Abords de la colline de l’ancien château"] }}
        extraSections={[
          { title: "Les précautions avant le passage du professionnel", content: <>
<p>{"Éloignez les enfants et les animaux de la zone d’activité. N’utilisez ni feu, ni eau, ni spray à proximité du refuge. N’obstruez pas le trou d’entrée d’un nid dans un volet ou un mur : les insectes pourraient chercher d’autres voies de sortie."}</p>
<p>{"Évitez les vibrations et ne tentez pas de décrocher le nid. Si une piqûre provoque une réaction grave, appelez le 15 ou le 112. L’intervention sur le nid ne remplace pas une prise en charge médicale ; les personnes allergiques doivent rester à distance."}</p>
          </> },
          { title: "Quelles informations pour le devis à Joinville ?", content: <>
<p>{"Indiquez l’adresse, le support du nid, sa hauteur estimée et les possibilités d’accès à la cour ou au jardin. Signalez les câbles et les obstacles visibles depuis le sol. Ne montez pas sur une échelle pour obtenir une mesure ou une photo plus précise."}</p>
<p>{"Le coût dépend des moyens d’accès et des opérations retenues. Le créneau est confirmé après échange, sans promettre un délai identique à chaque adresse. Demandez les consignes après traitement et la marche à suivre si une activité persiste ; le devis précise les prestations et les conditions de suivi."}</p>
          </> },
          { title: "Votre service à Joinville et dans les villes du secteur", content: <>
<p>Découvrez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons">service guêpes et frelons en Haute-Marne</Link> pour connaître les méthodes et les prestations. Pour votre adresse à Joinville, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Pour une adresse dans une autre commune, consultez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-wassy">Guêpes et frelons à Wassy</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-froncles">Guêpes et frelons à Froncles</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-saint-dizier">Guêpes et frelons à Saint-Dizier</Link>. Elles présentent les prestations dans ces villes, distinctes de Joinville. Retrouvez également notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link> pour situer votre demande.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Joinville", items: [
          { label: "Guêpes et frelons à Wassy", to: "/guepes-frelons-wassy" },
          { label: "Guêpes et frelons à Froncles", to: "/guepes-frelons-froncles" },
          { label: "Guêpes et frelons à Saint-Dizier", to: "/guepes-frelons-saint-dizier" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Joinville", to: "/deratisation-joinville" },
          { label: "Dépigeonnisation à Joinville", to: "/depigeonnisation-joinville" },
          { label: "Taupier à Joinville", to: "/taupes-joinville" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Guêpes et frelons à Joinville : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default GuepesFrelonsJoinville;
