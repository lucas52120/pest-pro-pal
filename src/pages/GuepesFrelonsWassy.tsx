import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Destruction nid Guêpes & Frelons Wassy 52 - Intervention 24h";
const DESCRIPTION = "Nid de guêpes ou de frelons à Wassy (52130) ? G&F Nuisibles sécurise le site et retire le nid. Intervention selon disponibilité, devis gratuit.";
const URL = "https://gf-nuisibles.fr/guepes-frelons-wassy";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Comment savoir si j'ai un nid de guêpes ou de frelons à Wassy ?", answer: "Un va-et-vient régulier d'insectes vers un même point (toiture, mur, arbre, dépendance) est souvent le signe d'un nid à proximité. Décrivez l'emplacement observé et, si possible, l'espèce aperçue pour préparer l'intervention." },
  { question: "Dois-je m'approcher du nid pour l'identifier ?", answer: "Non, gardez vos distances et évitez tout geste brusque près du nid. Les photos prises à distance avec un zoom peuvent aider à estimer la situation sans vous exposer à un risque de piqûres." },
  { question: "Intervenez-vous sur un nid de frelons asiatiques en hauteur ?", answer: "Oui, selon l'accessibilité du site. L'intervention est évaluée au cas par cas : hauteur, environnement, présence de passants ou d'enfants à proximité influencent le matériel et les précautions mises en œuvre." },
  { question: "Que faire en attendant l'intervention ?", answer: "Évitez de boucher l'accès au nid, cela pourrait pousser les insectes à chercher une autre sortie, parfois à l'intérieur du bâtiment. Limitez les passages à proximité et tenez les enfants et animaux éloignés de la zone." },
  { question: "Quel est le prix d'une destruction de nid à Wassy ?", answer: "Le prix dépend de l'espèce, de l'emplacement et de l'accessibilité du nid. Un diagnostic et un devis gratuits sont établis avant toute intervention." },
];

const GuepesFrelonsWassy = () => {
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
        "@type": "Service", "url": URL, "name": "Guêpes et frelons à Wassy (52130) : nid détecté", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Wassy", "address": { "@type": "PostalAddress", "postalCode": "52130", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Guêpes et frelons", "item": "https://gf-nuisibles.fr/guepes-frelons" },
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
        serviceTitle={"Guêpes et frelons à Wassy (52130) : nid détecté"}
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"NID DE GUÊPES OU DE FRELONS À WASSY ?"}
        serviceCallSubtitle="G&F NUISIBLES — INTERVENTION SÉCURISÉE SUR SITE"
        intro={"Un nid sous une toiture, dans une haie ou une dépendance à Wassy demande une intervention prudente, surtout s'il s'agit de frelons. G&F Nuisibles intervient à Wassy (52130) et dans le secteur pour localiser, sécuriser et retirer les nids de guêpes et de frelons, chez les particuliers comme chez les professionnels. L'espèce, l'emplacement et l'accessibilité du site déterminent le matériel et les précautions nécessaires."}
        expertise={"Guêpes communes, frelons européens et frelons asiatiques ne se comportent pas de la même façon et ne construisent pas leurs nids aux mêmes endroits. Un nid de frelon asiatique, souvent volumineux et situé en hauteur dans un arbre, ne se traite pas comme un nid de guêpes logé dans un muret ou une cavité murale. L'identification de l'espèce avant intervention conditionne la méthode et la sécurité du technicien comme des occupants."}
        method={"Le repérage précis du nid et de son accès est la première étape, suivi d'une évaluation des risques pour les personnes et les animaux à proximité. Le traitement est réalisé avec un équipement de protection adapté, en tenant compte de la hauteur et de l'environnement. Le nid est retiré lorsque les conditions le permettent, et des conseils sont donnés pour limiter un retour d'insectes au même endroit."}
        localContext={{ title: "Centre historique de Wassy et secteurs boisés à proximité", content: <>
            <p>{"Les maisons anciennes du centre de Wassy, avec leurs combles et leurs dépendances, peuvent offrir des cavités propices à l'installation d'un nid de guêpes. Précisez l'emplacement observé (toiture, mur, cave) lors de votre demande."}</p>
            <p>{"Les secteurs boisés et les jardins en périphérie, vers Montier-en-Der ou Saint-Dizier, sont également concernés par les nids de frelons installés en hauteur dans les arbres. La présence de la Blaise et des espaces verts attenants n'implique pas automatiquement un nid, mais ces repères aident à situer votre demande."}</p>
            <p>Retrouvez des informations sur la commune sur la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.saint-dizier.fr/ville-agglo/notre-histoire/l-histoire-de-wassy.html" target="_blank" rel="noopener noreferrer">page consacrée à l'histoire de Wassy</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Wassy (52130)", intro: "Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre-ville de Wassy", "Secteur de la collégiale Notre-Dame", "Abords de la Blaise", "Zones pavillonnaires périphériques", "Direction de Montier-en-Der", "Direction de Saint-Dizier"] }}
        extraSections={[
          { title: "Guêpes ou frelons : les bons réflexes avant l'intervention", content: <>
            <p>{"Ne tentez pas de détruire le nid vous-même, en particulier s'il s'agit de frelons : les piqûres multiples peuvent être dangereuses, surtout en cas d'allergie. Signalez toute réaction allergique connue d'un occupant lors de votre appel."}</p>
            <p>{"Tenez les fenêtres proches du nid fermées et évitez les mouvements brusques ou les vibrations à proximité (tonte, taille de haie) en attendant l'intervention."}</p>
          </> },
          { title: "Prévention autour d'une maison ou d'un jardin à Wassy", content: <>
            <p>{"Inspectez régulièrement les combles, les volets roulants et les abris de jardin au printemps, période où les reines fondatrices cherchent un emplacement pour démarrer un nid."}</p>
            <p>{"Le bouchage des petites cavités accessibles, lorsque celles-ci sont vides, peut limiter les installations futures, sans garantir une absence totale de nouveaux nids dans le secteur."}</p>
          </> },
          { title: "Votre service à Wassy et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons">service guêpes et frelons en Haute-Marne</Link> pour les méthodes et les prestations. Pour votre adresse à Wassy, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un devis gratuit</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-saint-dizier">Guêpes et frelons à Saint-Dizier</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-joinville">Guêpes et frelons à Joinville</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-montier-en-der">Guêpes et frelons à Montier-en-Der</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Wassy", items: [
          { label: "Guêpes et frelons à Saint-Dizier", to: "/guepes-frelons-saint-dizier" },
          { label: "Guêpes et frelons à Joinville", to: "/guepes-frelons-joinville" },
          { label: "Guêpes et frelons à Montier-en-Der", to: "/guepes-frelons-montier-en-der" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Wassy", to: "/deratisation-wassy" },
          { label: "Désinsectisation à Wassy", to: "/desinsectisation-wassy" },
          { label: "Dépigeonnisation à Wassy", to: "/depigeonnisation-wassy" },
          { label: "Taupier à Wassy", to: "/taupes-wassy" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Nid de guêpes ou de frelons à Wassy : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le matériel et les précautions sont adaptés à l'espèce et à l'emplacement du nid."}
      />
    </>
  );
};

export default GuepesFrelonsWassy;
