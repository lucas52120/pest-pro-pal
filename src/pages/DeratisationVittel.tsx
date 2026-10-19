import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation Vittel 88 - Intervention 24h, Devis Gratuit";
const DESCRIPTION = "Rats ou souris à Vittel (88800) ? G&F Nuisibles recherche les accès, adapte le traitement et conseille la prévention dans la station thermale. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/deratisation-vittel";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Intervenez-vous pour les hôtels et résidences du parc thermal de Vittel ?", answer: "Oui, les établissements du parc thermal comme les copropriétés et maisons du centre-ville peuvent demander un diagnostic. Précisez le type de bâtiment, les zones de restauration ou de stockage et les accès aux caves ou sous-sols pour préparer la visite." },
  { question: "Un hôtel ancien est-il plus exposé aux rongeurs ?", answer: "L'ancienneté d'un bâtiment n'est pas un diagnostic en soi. Les réseaux de canalisations, les faux plafonds et les caves voûtées fréquents dans les grands hôtels vittellois peuvent faciliter des passages, mais seule une inspection sur place confirme la présence et l'espèce." },
  { question: "Pouvez-vous intervenir sans perturber l'activité d'un commerce ou d'un restaurant ?", answer: "Décrivez les horaires d'ouverture et les contraintes de votre activité lors de la demande. Le choix des dispositifs, leur emplacement et le moment de la visite sont adaptés pour limiter la gêne, sans compromettre la fiabilité du diagnostic." },
  { question: "Comment protéger mes animaux pendant la dératisation ?", answer: "Signalez-les avant la prestation. Le choix des dispositifs, leur emplacement et les consignes tiennent compte des occupants. Les appâts restent à risque et ne doivent jamais être déplacés ou laissés accessibles." },
  { question: "Quel est le prix d'une dératisation à Vittel ?", answer: "Le prix dépend du bâtiment, des zones concernées et du suivi nécessaire. Un diagnostic et un devis gratuits permettent de préciser les prestations et les passages retenus avant votre accord." },
];

const DeratisationVittel = () => {
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
        "@type": "Service", "url": URL, "name": "Dératisation à Vittel (88800) : rats et souris", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Vittel", "address": { "@type": "PostalAddress", "postalCode": "88800", "addressRegion": "Vosges", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dératisation", "item": "https://gf-nuisibles.fr/deratisation" },
        { "@type": "ListItem", "position": 3, "name": "Vittel", "item": URL }
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
        city="Vittel"
        department="Vosges (88)"
        serviceTitle={"Dératisation à Vittel (88800) : rats et souris"}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"RATS OU SOURIS DANS VOTRE BÂTIMENT À VITTEL ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Un grattement derrière une cloison, des traces dans une réserve ou des déjections dans une cave méritent une inspection avant de poser des appâts au hasard. G&F Nuisibles propose la dératisation à Vittel (88800), station thermale des Vosges, pour les particuliers, les hôtels et les commerces. Le diagnostic recherche les rats ou les souris, leurs circulations et les ressources qui permettent leur installation. Une maison du centre, un hôtel du parc thermal et un commerce de l'avenue Bouloumié ne présentent pas les mêmes accès : le protocole doit répondre au bâtiment réellement observé."}
        expertise={"Les souris peuvent circuler dans des espaces étroits entre les pièces, alors que des rats peuvent exploiter un accès au sol, un regard ou une dépendance. Ces pistes ne remplacent pas l'identification sur place. Nous examinons les indices, les passages techniques, les stocks et les habitudes de rangement. Signalez les animaux domestiques, les enfants et les zones de restauration pour organiser les précautions. Un poste sécurisé limite l'accès aux appâts mais ne rend pas un produit sans danger ; les consignes restent indispensables."}
        method={"L'inspection commence par les zones où vous avez relevé des traces, puis recherche les points d'entrée et les ressources alimentaires. Selon les observations, des pièges ou des dispositifs d'appâtage professionnels sont proposés, avec un emplacement adapté. Le devis précise les passages et les prestations retenues. Le contrôle des consommations ou des captures permet d'ajuster le suivi. Les conseils d'obturation, de stockage et de gestion des déchets complètent le traitement : retirer des rongeurs sans corriger un accès peut laisser la place à une nouvelle intrusion."}
        localContext={{ title: "Parc thermal, centre-ville et abords du Vair à Vittel", content: <>
            <p>{"Autour du parc thermal et de ses pavillons classés, hôtels, villas et résidences doivent préciser le type de local concerné : chambre, cuisine professionnelle, réserve ou sous-sol technique. Les bâtiments anciens du parc comportent souvent des caves voûtées et des réseaux étendus qui justifient une inspection méthodique plutôt qu'une hypothèse hâtive."}</p>
            <p>{"Le Vair et son affluent le Petit Vair traversent le territoire de Vittel. Pour un bien situé à proximité d'un cours d'eau, le diagnostic porte sur vos accès, les canalisations et les indices réellement constatés dans le bâtiment : la proximité d'un ruisseau ne prouve pas une infestation."}</p>
            <p>{"Dans le secteur du Palais des Congrès et de la gare, commerces et locaux professionnels peuvent décrire leurs contraintes d'activité et leurs horaires lors de la demande. Aucun établissement cité n'est présenté comme concerné : ces repères situent simplement votre adresse."}</p>
            <p>Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.ville-vittel.fr/fr/patrimoine-exceptionnel.html" target="_blank" rel="noopener noreferrer">site de la ville de Vittel consacré au patrimoine thermal</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Vittel (88800)", intro: "Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre-ville de Vittel", "Secteur du parc thermal", "Abords du Palais des Congrès", "Secteur de la gare", "Abords du Vair", "Direction de Contrexéville"] }}
        extraSections={[
          { title: "Rats ou souris : les informations utiles avant la visite", content: <>
            <p>{"Notez les pièces concernées, les moments où les bruits sont entendus et la date des premières traces. Des photos d'emballages endommagés ou de passages suspects peuvent aider à préparer le diagnostic. Ne manipulez pas les déjections à mains nues et évitez le balayage à sec qui remet des poussières en suspension."}</p>
            <p>{"Ne déplacez pas les appâts existants sans en signaler l'emplacement. Mentionnez les produits déjà utilisés, les captures éventuelles et les travaux récents. Une absence de bruit pendant une nuit ne suffit pas à conclure que les rongeurs ont disparu."}</p>
          </> },
          { title: "Prévention dans un hôtel, une maison ou un commerce à Vittel", content: <>
            <p>{"Conservez les denrées dans des contenants fermés et retirez les déchets alimentaires rapidement. Dans un établissement hôtelier ou de restauration, limitez les encombrements qui masquent les déplacements le long des murs et vérifiez régulièrement les réserves."}</p>
            <p>{"Pour un commerce ou un hôtel comportant plusieurs locaux communicants, une action isolée peut ne pas suffire. Le devis indique le périmètre retenu et le suivi, sans déduire un prix ou un nombre de passages du seul quartier."}</p>
          </> },
          { title: "Votre service à Vittel et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation">service dératisation</Link> pour les méthodes et les prestations. Pour votre adresse à Vittel, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-neufchateau">Dératisation à Neufchâteau</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-bourbonne">Dératisation à Bourbonne-les-Bains</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-chaumont">Dératisation à Chaumont</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Vittel", items: [
          { label: "Dératisation à Neufchâteau", to: "/deratisation-neufchateau" },
          { label: "Dératisation à Bourbonne-les-Bains", to: "/deratisation-bourbonne" },
          { label: "Dératisation à Chaumont", to: "/deratisation-chaumont" },
        ] }}
        relatedLinks={[
          { label: "Dépigeonnisation à Vittel", to: "/depigeonnisation-vittel" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dératisation à Vittel : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DeratisationVittel;
