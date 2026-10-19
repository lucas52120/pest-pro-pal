import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupier Wassy 52 - Piégeage Taupes, Devis Gratuit";
const DESCRIPTION = "Taupinières dans votre jardin à Wassy (52130) ? G&F Nuisibles pose des pièges professionnels dans les galeries actives. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/taupes-wassy";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Comment savoir si mes taupinières sont actives à Wassy ?", answer: "Une taupinière fraîche a une terre meuble et sombre, souvent encore humide. Des monticules récents qui réapparaissent au même endroit après retrait indiquent une galerie toujours utilisée, utile à signaler lors de la demande." },
  { question: "Le piégeage fonctionne-t-il sur un grand terrain ou une exploitation à Wassy ?", answer: "Oui, la méthode s'adapte à la surface et au nombre de galeries actives repérées. Pour un terrain agricole ou un grand jardin, plusieurs pièges peuvent être posés simultanément sur les galeries principales identifiées lors du repérage." },
  { question: "Le piégeage est-il dangereux pour mes animaux domestiques ?", answer: "Les pièges sont installés dans les galeries souterraines, hors de portée directe des animaux domestiques en surface. Signalez tout de même la présence d'animaux fouisseurs chez vous pour adapter l'emplacement des dispositifs." },
  { question: "Combien de temps faut-il pour voir un résultat ?", answer: "Le délai dépend du nombre de galeries actives et de la configuration du terrain. Un contrôle des pièges posés permet de vérifier les captures et d'ajuster leur emplacement si nécessaire." },
  { question: "Quel est le prix d'un piégeage de taupes à Wassy ?", answer: "Le prix dépend de la surface du terrain et du nombre de galeries à traiter. Un diagnostic et un devis gratuits permettent de préciser l'intervention avant votre accord." },
];

const TaupesWassy = () => {
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
        "@type": "Service", "url": URL, "name": "Taupes à Wassy (52130) : piégeage de jardin", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Wassy", "address": { "@type": "PostalAddress", "postalCode": "52130", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Taupes", "item": "https://gf-nuisibles.fr/taupes" },
        { "@type": "ListItem", "position": 3, "name": "Wassy", "item": URL }
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
        city="Wassy"
        department="Haute-Marne (52)"
        serviceTitle={"Taupes à Wassy (52130) : piégeage de jardin"}
        icon={<Target className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"TAUPINIÈRES DANS VOTRE JARDIN À WASSY ?"}
        serviceCallSubtitle="G&F NUISIBLES — PIÉGEAGE PROFESSIONNEL CIBLÉ"
        intro={"Des monticules de terre qui réapparaissent sur une pelouse, dans un potager ou en bordure d'un champ à Wassy signalent une activité souterraine qu'il faut localiser avant d'intervenir. G&F Nuisibles propose le piégeage de taupes à Wassy (52130) pour les particuliers, les exploitants agricoles et les gestionnaires d'espaces verts. Le repérage des galeries actives permet de cibler les pièges plutôt que de traiter la surface au hasard."}
        expertise={"La taupe creuse un réseau de galeries pour chasser les vers de terre et les larves dont elle se nourrit ; les monticules visibles ne représentent qu'une partie de ce réseau souterrain. Distinguer une galerie principale, régulièrement empruntée, d'une galerie secondaire abandonnée conditionne l'efficacité du piégeage. Cette distinction s'appuie sur l'observation du terrain, pas sur une règle générale applicable à tous les jardins."}
        method={"Le repérage commence par l'examen des monticules et de leur disposition pour identifier les galeries principales. Des pièges professionnels y sont installés, puis contrôlés pour vérifier les captures et ajuster leur emplacement si nécessaire. Des conseils sont donnés pour limiter une réinstallation, notamment sur l'entretien du terrain et la gestion des accès depuis les parcelles voisines."}
        localContext={{ title: "Jardins, terrains agricoles et abords de la Blaise à Wassy", content: <>
            <p>{"Les jardins du centre de Wassy et les terrains plus vastes en périphérie, vers les prairies longeant la Blaise, offrent des sols meubles propices aux galeries de taupes. La nature du sol et son humidité influencent l'activité observée, plus que la seule localisation."}</p>
            <p>{"Pour les exploitations agricoles et les grands terrains en direction de Montier-en-Der ou de Saint-Dizier, le nombre de galeries actives et la surface concernée déterminent l'ampleur de l'intervention nécessaire."}</p>
            <p>Retrouvez des informations sur la commune sur la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.saint-dizier.fr/ville-agglo/notre-histoire/l-histoire-de-wassy.html" target="_blank" rel="noopener noreferrer">page consacrée à l'histoire de Wassy</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Wassy (52130)", intro: "Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Jardins du centre de Wassy", "Zones pavillonnaires périphériques", "Terrains agricoles en périphérie", "Abords de la Blaise", "Direction de Montier-en-Der", "Direction de Saint-Dizier"] }}
        extraSections={[
          { title: "Taupinières : les informations utiles avant la visite", content: <>
            <p>{"Notez l'emplacement et le nombre approximatif de monticules, ainsi que leur fréquence d'apparition. Évitez d'arroser abondamment les zones concernées juste avant la visite, cela peut masquer temporairement l'activité des galeries."}</p>
            <p>{"Ne bouchez pas les monticules avant le repérage : leur disposition aide à localiser les galeries principales où les pièges seront posés."}</p>
          </> },
          { title: "Prévention dans un jardin ou sur un terrain à Wassy", content: <>
            <p>{"Un sol tassé régulièrement et un entretien de la pelouse limitent parfois l'attractivité du terrain, sans empêcher une taupe de passer depuis une parcelle voisine ou un espace non traité."}</p>
            <p>{"Pour un terrain agricole ou un grand jardin, un suivi régulier permet de repérer rapidement une nouvelle activité et d'intervenir avant une prolifération des galeries."}</p>
          </> },
          { title: "Votre service à Wassy et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes">service taupier en Haute-Marne</Link> pour les méthodes et les prestations. Pour votre adresse à Wassy, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un devis gratuit</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un terrain dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-saint-dizier">Taupier à Saint-Dizier</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-joinville">Taupier à Joinville</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-montier-en-der">Taupier à Montier-en-Der</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Wassy", items: [
          { label: "Taupier à Saint-Dizier", to: "/taupes-saint-dizier" },
          { label: "Taupier à Joinville", to: "/taupes-joinville" },
          { label: "Taupier à Montier-en-Der", to: "/taupes-montier-en-der" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Wassy", to: "/deratisation-wassy" },
          { label: "Guêpes et frelons à Wassy", to: "/guepes-frelons-wassy" },
          { label: "Dépigeonnisation à Wassy", to: "/depigeonnisation-wassy" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Taupes à Wassy : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le nombre de pièges et le suivi sont adaptés à la surface et aux galeries observées."}
      />
    </>
  );
};

export default TaupesWassy;
