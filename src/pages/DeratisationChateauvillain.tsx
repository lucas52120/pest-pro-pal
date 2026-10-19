import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation Châteauvillain 52 - Intervention 24h, Devis Gratuit";
const DESCRIPTION = "Rats ou souris à Châteauvillain (52120) ? G&F Nuisibles recherche les accès, adapte le traitement et conseille la prévention. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/deratisation-chateauvillain";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Dératisez-vous les maisons du centre de Châteauvillain ?", answer: "Oui, les particuliers et les professionnels de Châteauvillain peuvent demander un diagnostic. Précisez l'adresse, les pièces touchées et les accès aux caves ou dépendances pour préparer la visite." },
  { question: "La présence de l'eau à proximité signifie-t-elle que ce sont des rats ?", answer: "Non. Les cours d'eau du secteur sont des repères géographiques, pas un diagnostic. Les traces, les points d'entrée et l'examen du bâtiment permettent de distinguer les espèces et les causes possibles." },
  { question: "Pouvez-vous inspecter une dépendance ou une réserve ?", answer: "Oui, décrivez les surfaces, les stocks et les observations. Le stockage de nourriture, les accès au sol et les espaces attenants sont examinés selon la configuration des lieux." },
  { question: "Comment protéger mes animaux pendant la dératisation ?", answer: "Signalez-les avant la prestation. Le choix des dispositifs, leur emplacement et les consignes tiennent compte des occupants. Les appâts restent à risque et ne doivent jamais être déplacés ou laissés accessibles." },
  { question: "Quel est le prix d'une dératisation à Châteauvillain ?", answer: "Le prix dépend du bâtiment, des zones concernées et du suivi nécessaire. Un diagnostic et un devis gratuits permettent de préciser les prestations et les passages retenus avant votre accord." },
];

const DeratisationChateauvillain = () => {
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
        "@type": "Service", "url": URL, "name": "Dératisation à Châteauvillain (52120) : rats et souris", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Châteauvillain", "containedInPlace": { "@type": "AdministrativeArea", "name": "la Communauté de communes des Trois Forêts" }, "address": { "@type": "PostalAddress", "postalCode": "52120", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dératisation", "item": "https://gf-nuisibles.fr/deratisation" },
        { "@type": "ListItem", "position": 3, "name": "Châteauvillain", "item": URL }
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
        city="Châteauvillain"
        department="Haute-Marne (52)"
        serviceTitle={"Dératisation à Châteauvillain (52120) : rats et souris"}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"RATS OU SOURIS DANS VOTRE BÂTIMENT À CHÂTEAUVILLAIN ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Un bruit dans une cloison, des emballages rongés dans une réserve ou des déjections dans une dépendance méritent une inspection avant de poser des appâts au hasard. G&F Nuisibles propose la dératisation à Châteauvillain (52120), au sein de la Communauté de communes des Trois Forêts, pour les particuliers et les professionnels. Le diagnostic recherche les rats ou les souris, leurs circulations et les ressources qui permettent leur installation. Une maison du centre, un commerce et une dépendance ne présentent pas les mêmes accès : le protocole doit répondre au bâtiment réellement observé."}
        expertise={"Les souris peuvent circuler dans des espaces étroits entre les pièces, alors que des rats peuvent exploiter un accès au sol, un regard ou une dépendance. Ces pistes ne remplacent pas l'identification sur place. Nous examinons les indices, les passages techniques, les stocks et les habitudes de rangement. Signalez les animaux domestiques, les enfants et les zones alimentaires pour organiser les précautions. Un poste sécurisé limite l'accès aux appâts mais ne rend pas un produit sans danger ; les consignes restent indispensables."}
        method={"L'inspection commence par les zones où vous avez relevé des traces, puis recherche les points d'entrée et les ressources alimentaires. Selon les observations, des pièges ou des dispositifs d'appâtage professionnels sont proposés, avec un emplacement adapté. Le devis précise les passages et les prestations retenues. Le contrôle des consommations ou des captures permet d'ajuster le suivi. Les conseils d'obturation, de stockage et de gestion des déchets complètent le traitement : retirer des rongeurs sans corriger un accès peut laisser la place à une nouvelle intrusion."}
        localContext={{ title: "Remparts, Porte Madame et boucle de l'Aujon", content: <>
            <p>{"Châteauvillain est une Petite Cité de Caractère lovée dans une boucle de l'Aujon. Pour un bien situé près de la rivière, le diagnostic porte sur vos accès et les indices observés dans le bâtiment : la proximité de l'eau ne permet pas à elle seule de conclure à une infestation."}</p>
            <p>{"Dans le centre historique, autour des remparts, de la tour Saint-Marc et de la tour de l'Auditoire, les maisons anciennes aux caves voûtées et aux dépendances mitoyennes demandent de préciser les accès et les éventuels passages communs avec un voisin."}</p>
            <p>{"Le secteur de la Porte Madame ouvre sur le Parc aux Daims, en lisière de la forêt d'Arc-Châteauvillain. Pour une propriété proche de ces espaces boisés, décrivez le jardin, les dépendances et les abords du bâtiment plutôt que de présumer une origine liée à la forêt."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun lieu n'est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.bienvenue-hautemarne.fr/villes-cites-caractere/petites-cites-de-caractere/chateauvillain/" target="_blank" rel="noopener noreferrer">page de l'office de tourisme Haute-Marne Attractivité sur Châteauvillain</a> et sur la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://fr.wikipedia.org/wiki/Ch%C3%A2teauvillain" target="_blank" rel="noopener noreferrer">page Wikipédia de Châteauvillain</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Châteauvillain (52120)", intro: "Châteauvillain fait partie de la Communauté de communes des Trois Forêts. Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre historique et remparts", "Secteur de la tour Saint-Marc", "Abords de la Porte Madame et du Parc aux Daims", "Abords de l'Aujon", "Lisière de la forêt d'Arc-Châteauvillain"] }}
        extraSections={[
          { title: "Rats ou souris : les informations utiles avant la visite", content: <>
            <p>{"Notez les pièces concernées, les moments où les bruits sont entendus et la date des premières traces. Des photos d'emballages endommagés ou des passages suspects peuvent aider à préparer le diagnostic. Ne manipulez pas les déjections à mains nues et évitez le balayage à sec qui remet des poussières en suspension."}</p>
            <p>{"Ne déplacez pas les appâts existants sans en signaler l'emplacement. Mentionnez les produits déjà utilisés, les captures éventuelles et les travaux récents. Une absence de bruit pendant une nuit ne suffit pas à conclure que les rongeurs ont disparu."}</p>
          </> },
          { title: "Prévention dans une maison, un commerce ou une dépendance à Châteauvillain", content: <>
            <p>{"Conservez les denrées et les aliments pour animaux dans des contenants fermés. Retirez les déchets alimentaires et limitez les encombrements qui masquent les déplacements le long des murs. Les portes de dépendances, les raccords de canalisations et les passages de câbles sont à examiner avec le diagnostic."}</p>
            <p>{"Pour un commerce, précisez les contraintes de nettoyage, les zones de stockage et les heures d'activité. Si plusieurs locaux communiquent, une action isolée peut ne pas suffire. Le devis indique le périmètre retenu et le suivi, sans déduire un prix ou un nombre de passages du seul quartier."}</p>
          </> },
          { title: "Votre service à Châteauvillain et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation">service dératisation en Haute-Marne</Link> pour les méthodes et les prestations. Pour votre adresse à Châteauvillain, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-bourbonne-les-bains">Dératisation à Bourbonne-les-Bains</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-chalindrey">Dératisation à Chalindrey</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Châteauvillain", items: [
          { label: "Dératisation à Bourbonne-les-Bains", to: "/deratisation-bourbonne-les-bains" },
          { label: "Dératisation à Chalindrey", to: "/deratisation-chalindrey" },
        ] }}
        relatedLinks={[
          { label: "Désinsectisation à Châteauvillain", to: "/desinsectisation-chateauvillain" },
          { label: "Guêpes et frelons à Châteauvillain", to: "/guepes-frelons-chateauvillain" },
          { label: "Dépigeonnisation à Châteauvillain", to: "/depigeonnisation-chateauvillain" },
          { label: "Taupier à Châteauvillain", to: "/taupes-chateauvillain" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dératisation à Châteauvillain : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DeratisationChateauvillain;
