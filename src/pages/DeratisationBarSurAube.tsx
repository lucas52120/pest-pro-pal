import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Bar-sur-Aube (10200) : rats et souris | G&F Nuisibles";
const DESCRIPTION = "Rats ou souris à Bar-sur-Aube (10200) ? G&F Nuisibles recherche les accès, adapte le traitement et conseille la prévention. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/deratisation-bar-sur-aube";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Dératisez-vous les maisons du centre de Bar-sur-Aube ?", answer: "Oui, les particuliers et les professionnels de Bar-sur-Aube peuvent demander un diagnostic. Précisez l'adresse, les pièces touchées et les accès aux caves ou dépendances pour préparer la visite." },
  { question: "La proximité de l'Aube signifie-t-elle que ce sont des rats ?", answer: "Non. La rivière est un repère géographique, pas un diagnostic. Les traces, les points d'entrée et l'examen du bâtiment permettent de distinguer les espèces et les causes possibles." },
  { question: "Pouvez-vous inspecter une cave voûtée ou un cellier ancien ?", answer: "Oui, décrivez les surfaces, les stocks et les observations. De nombreux bâtiments du centre historique disposent de caves anciennes ; les accès au sol et les espaces attenants sont examinés selon la configuration des lieux." },
  { question: "Comment protéger mes animaux pendant la dératisation ?", answer: "Signalez-les avant la prestation. Le choix des dispositifs, leur emplacement et les consignes tiennent compte des occupants. Les appâts restent à risque et ne doivent jamais être déplacés ou laissés accessibles." },
  { question: "Quel est le prix d'une dératisation à Bar-sur-Aube ?", answer: "Le prix dépend du bâtiment, des zones concernées et du suivi nécessaire. Un diagnostic et un devis gratuits permettent de préciser les prestations et les passages retenus avant votre accord." },
];

const DeratisationBarSurAube = () => {
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
        "@type": "Service", "url": URL, "name": "Dératisation à Bar-sur-Aube (10200) : rats et souris", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Bar-sur-Aube", "containedInPlace": { "@type": "AdministrativeArea", "name": "Aube" }, "address": { "@type": "PostalAddress", "postalCode": "10200", "addressRegion": "Aube", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dératisation", "item": "https://gf-nuisibles.fr/deratisation" },
        { "@type": "ListItem", "position": 3, "name": "Bar-sur-Aube", "item": URL }
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
        city="Bar-sur-Aube"
        department="Aube (10)"
        serviceTitle={"Dératisation à Bar-sur-Aube (10200) : rats et souris"}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"RATS OU SOURIS DANS VOTRE BÂTIMENT À BAR-SUR-AUBE ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Un bruit dans une cloison, des emballages rongés dans une réserve ou des déjections dans une cave méritent une inspection avant de poser des appâts au hasard. G&F Nuisibles propose la dératisation à Bar-sur-Aube (10200), ancienne cité des foires de Champagne traversée par l'Aube, pour les particuliers et les professionnels. Le diagnostic recherche les rats ou les souris, leurs circulations et les ressources qui permettent leur installation. Une maison du centre historique, un commerce et un cellier voûté ne présentent pas les mêmes accès : le protocole doit répondre au bâtiment réellement observé."}
        expertise={"Les souris peuvent circuler dans des espaces étroits entre les pièces, alors que des rats peuvent exploiter un accès au sol, un regard ou une cave communiquant avec un réseau de caves anciennes comme celles héritées de l'époque des foires de Champagne. Ces pistes ne remplacent pas l'identification sur place. Nous examinons les indices, les passages techniques, les stocks et les habitudes de rangement. Signalez les animaux domestiques, les enfants et les zones alimentaires pour organiser les précautions. Un poste sécurisé limite l'accès aux appâts mais ne rend pas un produit sans danger ; les consignes restent indispensables."}
        method={"L'inspection commence par les zones où vous avez relevé des traces, puis recherche les points d'entrée et les ressources alimentaires. Selon les observations, des pièges ou des dispositifs d'appâtage professionnels sont proposés, avec un emplacement adapté. Le devis précise les passages et les prestations retenues. Le contrôle des consommations ou des captures permet d'ajuster le suivi. Les conseils d'obturation, de stockage et de gestion des déchets complètent le traitement : retirer des rongeurs sans corriger un accès peut laisser la place à une nouvelle intrusion."}
        localContext={{ title: "Centre historique, caves anciennes et bords de l'Aube à Bar-sur-Aube", content: <>
            <p>{"Dans le centre, autour de l'église Saint-Pierre et de son halloy de bois, ou près de l'église Saint-Maclou, précisez si la demande concerne une cave, une cuisine, un appartement ou une réserve commerciale. Le réseau de caves et de celliers hérités des foires de Champagne peut justifier une inspection coordonnée avec le propriétaire."}</p>
            <p>{"L'Aube traverse la ville et borde les promenades de la Gravière, de Mathaux et des Chevillottes. Pour un bien situé à proximité, le diagnostic porte sur vos accès, les canalisations et les indices dans le bâtiment : la proximité de la rivière ne prouve pas une infestation. Indiquez notamment les regards accessibles et les dépendances où les observations se répètent."}</p>
            <p>{"Dans le secteur de la colline Sainte-Germaine ou en direction des vignobles de la Côte des Bar, les locaux annexes, ateliers et stocks doivent être décrits lors de la demande. La présence éventuelle d'aliments ou de matériel viticole appelle une vérification du stockage, sans présumer d'un problème chez un établissement cité."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun monument n'est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://barsuraube.org/bouger-et-sortir-decouvrir-notre-territoire/notre-patrimoine-bati" target="_blank" rel="noopener noreferrer">site de la Communauté de communes de la région de Bar-sur-Aube</a> et dans la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.tourisme-cotedesbar.com/patrimoine/bar-sur-aube/" target="_blank" rel="noopener noreferrer">présentation de Bar-sur-Aube par l'office de tourisme Côte des Bar</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Bar-sur-Aube (10200)", intro: "Bar-sur-Aube est une ancienne cité des foires de Champagne, traversée par l'Aube. Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre historique de Bar-sur-Aube", "Secteur de l'église Saint-Pierre", "Secteur de l'église Saint-Maclou", "Colline Sainte-Germaine", "Promenade de la Gravière, bords de l'Aube", "Direction des vignobles de la Côte des Bar"] }}
        extraSections={[
          { title: "Rats ou souris : les informations utiles avant la visite", content: <>
            <p>{"Notez les pièces concernées, les moments où les bruits sont entendus et la date des premières traces. Des photos d'emballages endommagés ou des passages suspects peuvent aider à préparer le diagnostic. Ne manipulez pas les déjections à mains nues et évitez le balayage à sec qui remet des poussières en suspension."}</p>
            <p>{"Ne déplacez pas les appâts existants sans en signaler l'emplacement. Mentionnez les produits déjà utilisés, les captures éventuelles et les travaux récents, notamment si votre bien communique avec une cave ancienne. Une absence de bruit pendant une nuit ne suffit pas à conclure que les rongeurs ont disparu."}</p>
          </> },
          { title: "Prévention dans une maison, une cave ou un commerce à Bar-sur-Aube", content: <>
            <p>{"Conservez les denrées et les aliments pour animaux dans des contenants fermés. Retirez les déchets alimentaires et limitez les encombrements qui masquent les déplacements le long des murs. Les portes de caves, les raccords de canalisations et les passages de câbles sont à examiner avec le diagnostic."}</p>
            <p>{"Pour un commerce du centre-ville ou une exploitation viticole, précisez les contraintes de nettoyage, les zones de stockage et les heures d'activité. Si plusieurs locaux communiquent par d'anciennes caves, une action isolée peut ne pas suffire. Le devis indique le périmètre retenu et le suivi, sans déduire un prix ou un nombre de passages du seul quartier."}</p>
          </> },
          { title: "Votre service à Bar-sur-Aube et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation">service dératisation en Haute-Marne et dans l'Aube</Link> pour les méthodes et les prestations. Pour votre adresse à Bar-sur-Aube, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-chatillon-sur-seine">Dératisation à Châtillon-sur-Seine</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-troyes">Dératisation à Troyes</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-chaumont">Dératisation à Chaumont</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Bar-sur-Aube", items: [
          { label: "Dératisation à Châtillon-sur-Seine", to: "/deratisation-chatillon-sur-seine" },
          { label: "Dératisation à Troyes", to: "/deratisation-troyes" },
          { label: "Dératisation à Chaumont", to: "/deratisation-chaumont" },
        ] }}
        relatedLinks={[
          { label: "Désinsectisation à Bar-sur-Aube", to: "/desinsectisation-bar-sur-aube" },
          { label: "Guêpes et frelons à Bar-sur-Aube", to: "/guepes-frelons-bar-sur-aube" },
          { label: "Dépigeonnisation à Bar-sur-Aube", to: "/depigeonnisation-bar-sur-aube" },
          { label: "Taupier à Bar-sur-Aube", to: "/taupes-bar-sur-aube" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dératisation à Bar-sur-Aube : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DeratisationBarSurAube;
