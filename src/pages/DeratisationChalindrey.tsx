import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation Chalindrey 52 - Intervention 24h, Devis Gratuit";
const DESCRIPTION = "Rats ou souris à Chalindrey (52600) ? G&F Nuisibles recherche les accès, adapte le traitement et conseille la prévention. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/deratisation-chalindrey";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Dératisez-vous les maisons du centre de Chalindrey ?", answer: "Oui, les particuliers et les professionnels de Chalindrey peuvent demander un diagnostic. Précisez l'adresse, les pièces touchées et les accès aux caves ou dépendances pour préparer la visite." },
  { question: "La présence de l'eau à proximité signifie-t-elle que ce sont des rats ?", answer: "Non. Les cours d'eau du secteur sont des repères géographiques, pas un diagnostic. Les traces, les points d'entrée et l'examen du bâtiment permettent de distinguer les espèces et les causes possibles." },
  { question: "Pouvez-vous inspecter une dépendance ou une réserve ?", answer: "Oui, décrivez les surfaces, les stocks et les observations. Le stockage de nourriture, les accès au sol et les espaces attenants sont examinés selon la configuration des lieux." },
  { question: "Comment protéger mes animaux pendant la dératisation ?", answer: "Signalez-les avant la prestation. Le choix des dispositifs, leur emplacement et les consignes tiennent compte des occupants. Les appâts restent à risque et ne doivent jamais être déplacés ou laissés accessibles." },
  { question: "Quel est le prix d'une dératisation à Chalindrey ?", answer: "Le prix dépend du bâtiment, des zones concernées et du suivi nécessaire. Un diagnostic et un devis gratuits permettent de préciser les prestations et les passages retenus avant votre accord." },
];

const DeratisationChalindrey = () => {
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
        "@type": "Service", "url": URL, "name": "Dératisation à Chalindrey (52600) : rats et souris", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Chalindrey", "containedInPlace": { "@type": "AdministrativeArea", "name": "la Communauté de communes des Savoir-Faire" }, "address": { "@type": "PostalAddress", "postalCode": "52600", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dératisation", "item": "https://gf-nuisibles.fr/deratisation" },
        { "@type": "ListItem", "position": 3, "name": "Chalindrey", "item": URL }
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
        city="Chalindrey"
        department="Haute-Marne (52)"
        serviceTitle={"Dératisation à Chalindrey (52600) : rats et souris"}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"RATS OU SOURIS DANS VOTRE BÂTIMENT À CHALINDREY ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Un bruit dans une cloison, des emballages rongés dans une réserve ou des déjections dans une dépendance méritent une inspection avant de poser des appâts au hasard. G&F Nuisibles propose la dératisation à Chalindrey (52600), au sein de la Communauté de communes des Savoir-Faire, pour les particuliers et les professionnels. Le diagnostic recherche les rats ou les souris, leurs circulations et les ressources qui permettent leur installation. Une maison du centre, un commerce et une dépendance ne présentent pas les mêmes accès : le protocole doit répondre au bâtiment réellement observé."}
        expertise={"Les souris peuvent circuler dans des espaces étroits entre les pièces, alors que des rats peuvent exploiter un accès au sol, un regard ou une dépendance. Ces pistes ne remplacent pas l'identification sur place. Nous examinons les indices, les passages techniques, les stocks et les habitudes de rangement. Signalez les animaux domestiques, les enfants et les zones alimentaires pour organiser les précautions. Un poste sécurisé limite l'accès aux appâts mais ne rend pas un produit sans danger ; les consignes restent indispensables."}
        method={"L'inspection commence par les zones où vous avez relevé des traces, puis recherche les points d'entrée et les ressources alimentaires. Selon les observations, des pièges ou des dispositifs d'appâtage professionnels sont proposés, avec un emplacement adapté. Le devis précise les passages et les prestations retenues. Le contrôle des consommations ou des captures permet d'ajuster le suivi. Les conseils d'obturation, de stockage et de gestion des déchets complètent le traitement : retirer des rongeurs sans corriger un accès peut laisser la place à une nouvelle intrusion."}
        localContext={{ title: "Quartier de la gare, rotonde SNCF et centre-ville", content: <>
            <p>{"Chalindrey est un nœud ferroviaire connu pour la gare de Culmont-Chalindrey et son important dépôt. Pour une adresse proche de la gare, des voies ou de la rotonde SNCF, précisez s'il s'agit d'un logement, d'un local professionnel ou d'une dépendance : ces secteurs mêlent souvent habitations, entrepôts et bâtiments techniques aux accès variés."}</p>
            <p>{"Autour de la mairie, rue de Langres, et dans le centre-bourg, les maisons mitoyennes et les cours intérieures justifient de décrire les accès aux caves, aux greniers et aux espaces partagés avec un voisin."}</p>
            <p>{"Le bourg s'étend sur le plateau de Langres, dans un environnement plutôt rural autour du noyau urbain lié au rail. Un terrain en lisière du bâti ou proche d'une dépendance agricole peut nécessiter une inspection élargie, sans présumer d'un problème pour l'ensemble du secteur."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun lieu n'est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://ville-chalindrey.fr/" target="_blank" rel="noopener noreferrer">notice de la mairie de Chalindrey</a> et sur la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://fr.wikipedia.org/wiki/Chalindrey" target="_blank" rel="noopener noreferrer">page Wikipédia de Chalindrey</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Chalindrey (52600)", intro: "Chalindrey fait partie de la Communauté de communes des Savoir-Faire. Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre-bourg et mairie", "Quartier de la gare de Culmont-Chalindrey", "Secteur de la rotonde SNCF", "Abords de l'avenue Gambetta", "Écarts et hameaux proches du plateau de Langres"] }}
        extraSections={[
          { title: "Rats ou souris : les informations utiles avant la visite", content: <>
            <p>{"Notez les pièces concernées, les moments où les bruits sont entendus et la date des premières traces. Des photos d'emballages endommagés ou des passages suspects peuvent aider à préparer le diagnostic. Ne manipulez pas les déjections à mains nues et évitez le balayage à sec qui remet des poussières en suspension."}</p>
            <p>{"Ne déplacez pas les appâts existants sans en signaler l'emplacement. Mentionnez les produits déjà utilisés, les captures éventuelles et les travaux récents. Une absence de bruit pendant une nuit ne suffit pas à conclure que les rongeurs ont disparu."}</p>
          </> },
          { title: "Prévention dans une maison, un commerce ou une dépendance à Chalindrey", content: <>
            <p>{"Conservez les denrées et les aliments pour animaux dans des contenants fermés. Retirez les déchets alimentaires et limitez les encombrements qui masquent les déplacements le long des murs. Les portes de dépendances, les raccords de canalisations et les passages de câbles sont à examiner avec le diagnostic."}</p>
            <p>{"Pour un commerce, précisez les contraintes de nettoyage, les zones de stockage et les heures d'activité. Si plusieurs locaux communiquent, une action isolée peut ne pas suffire. Le devis indique le périmètre retenu et le suivi, sans déduire un prix ou un nombre de passages du seul quartier."}</p>
          </> },
          { title: "Votre service à Chalindrey et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation">service dératisation en Haute-Marne</Link> pour les méthodes et les prestations. Pour votre adresse à Chalindrey, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-chateauvillain">Dératisation à Châteauvillain</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-bourbonne-les-bains">Dératisation à Bourbonne-les-Bains</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Chalindrey", items: [
          { label: "Dératisation à Châteauvillain", to: "/deratisation-chateauvillain" },
          { label: "Dératisation à Bourbonne-les-Bains", to: "/deratisation-bourbonne-les-bains" },
        ] }}
        relatedLinks={[
          { label: "Guêpes et frelons à Chalindrey", to: "/guepes-frelons-chalindrey" },
          { label: "Dépigeonnisation à Chalindrey", to: "/depigeonnisation-chalindrey" },
          { label: "Taupier à Chalindrey", to: "/taupes-chalindrey" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dératisation à Chalindrey : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DeratisationChalindrey;
