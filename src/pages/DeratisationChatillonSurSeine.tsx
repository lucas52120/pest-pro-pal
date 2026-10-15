import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Châtillon-sur-Seine (21400) : rats et souris | G&F Nuisibles";
const DESCRIPTION = "Rats ou souris à Châtillon-sur-Seine (21400) ? G&F Nuisibles recherche les accès, adapte le traitement et conseille la prévention. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/deratisation-chatillon-sur-seine";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Dératisez-vous les maisons du centre de Châtillon-sur-Seine ?", answer: "Oui, les particuliers et les professionnels de Châtillon-sur-Seine peuvent demander un diagnostic. Précisez l'adresse, les pièces touchées et les accès aux caves ou dépendances pour préparer la visite." },
  { question: "La proximité de la Seine signifie-t-elle que ce sont des rats ?", answer: "Non. La rivière est un repère géographique, pas un diagnostic. Les traces, les points d'entrée et l'examen du bâtiment permettent de distinguer les espèces et les causes possibles." },
  { question: "Pouvez-vous inspecter un commerce ou un local proche du musée ?", answer: "Oui, décrivez les surfaces, les stocks et les observations. Le stockage de denrées, les accès au sol et les espaces attenants sont examinés selon la configuration des lieux." },
  { question: "Comment protéger mes animaux pendant la dératisation ?", answer: "Signalez-les avant la prestation. Le choix des dispositifs, leur emplacement et les consignes tiennent compte des occupants. Les appâts restent à risque et ne doivent jamais être déplacés ou laissés accessibles." },
  { question: "Quel est le prix d'une dératisation à Châtillon-sur-Seine ?", answer: "Le prix dépend du bâtiment, des zones concernées et du suivi nécessaire. Un diagnostic et un devis gratuits permettent de préciser les prestations et les passages retenus avant votre accord." },
];

const DeratisationChatillonSurSeine = () => {
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
        "@type": "Service", "url": URL, "name": "Dératisation à Châtillon-sur-Seine (21400) : rats et souris", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Châtillon-sur-Seine", "containedInPlace": { "@type": "AdministrativeArea", "name": "Côte-d'Or" }, "address": { "@type": "PostalAddress", "postalCode": "21400", "addressRegion": "Côte-d'Or", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dératisation", "item": "https://gf-nuisibles.fr/deratisation" },
        { "@type": "ListItem", "position": 3, "name": "Châtillon-sur-Seine", "item": URL }
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
        city="Châtillon-sur-Seine"
        department="Côte-d'Or (21)"
        serviceTitle={"Dératisation à Châtillon-sur-Seine (21400) : rats et souris"}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"RATS OU SOURIS DANS VOTRE BÂTIMENT À CHÂTILLON-SUR-SEINE ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Un bruit dans une cloison, des emballages rongés dans une réserve ou des déjections dans une dépendance méritent une inspection avant de poser des appâts au hasard. G&F Nuisibles propose la dératisation à Châtillon-sur-Seine (21400) pour les particuliers et les professionnels. Le diagnostic recherche les rats ou les souris, leurs circulations et les ressources qui permettent leur installation. Une maison du centre ancien, un commerce et une dépendance en périphérie ne présentent pas les mêmes accès : le protocole doit répondre au bâtiment réellement observé."}
        expertise={"Les souris peuvent circuler dans des espaces étroits entre les pièces, alors que des rats peuvent exploiter un accès au sol, un regard ou une dépendance. Ces pistes ne remplacent pas l'identification sur place. Nous examinons les indices, les passages techniques, les stocks et les habitudes de rangement. Signalez les animaux domestiques, les enfants et les zones alimentaires pour organiser les précautions. Un poste sécurisé limite l'accès aux appâts mais ne rend pas un produit sans danger ; les consignes restent indispensables."}
        method={"L'inspection commence par les zones où vous avez relevé des traces, puis recherche les points d'entrée et les ressources alimentaires. Selon les observations, des pièges ou des dispositifs d'appâtage professionnels sont proposés, avec un emplacement adapté. Le devis précise les passages et les prestations retenues. Le contrôle des consommations ou des captures permet d'ajuster le suivi. Les conseils d'obturation, de stockage et de gestion des déchets complètent le traitement : retirer des rongeurs sans corriger un accès peut laisser la place à une nouvelle intrusion."}
        localContext={{ title: "Centre ancien, église Saint-Vorles et abords de la Seine à Châtillon-sur-Seine", content: <>
            <p>{"Dans le centre, autour de l'église Saint-Vorles et de la source de la Douix, précisez si la demande concerne une maison, une cave ou un local commercial. Des espaces attenants ou des passages entre bâtiments anciens peuvent justifier une inspection coordonnée avec le propriétaire."}</p>
            <p>{"La Seine traverse Châtillon-sur-Seine, non loin de ses sources situées dans le Châtillonnais. Pour un bien situé à proximité, le diagnostic porte sur vos accès, les canalisations et les indices dans le bâtiment : la proximité de la rivière ne prouve pas une infestation. Indiquez notamment les regards accessibles et les dépendances où les observations se répètent."}</p>
            <p>{"Dans le secteur du musée du Pays Châtillonnais, les locaux annexes, réserves et ateliers doivent être décrits lors de la demande. La présence éventuelle de denrées appelle une vérification du stockage, sans présumer d'un problème chez un établissement cité."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun monument n'est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://chatillonnais-tourisme.fr/fr/sites-remarquables/eglise-saint-vorles" target="_blank" rel="noopener noreferrer">site de l'office de tourisme du Pays Châtillonnais</a> et dans la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.musee-vix.fr/" target="_blank" rel="noopener noreferrer">présentation du musée du Pays Châtillonnais</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Châtillon-sur-Seine (21400)", intro: "Châtillon-sur-Seine est la ville principale du Châtillonnais. Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre-ville de Châtillon-sur-Seine", "Secteur de l'église Saint-Vorles", "Abords de la source de la Douix", "Quartier du Bourg", "Abords de la Seine", "Secteur du musée du Pays Châtillonnais"] }}
        extraSections={[
          { title: "Rats ou souris : les informations utiles avant la visite", content: <>
            <p>{"Notez les pièces concernées, les moments où les bruits sont entendus et la date des premières traces. Des photos d'emballages endommagés ou des passages suspects peuvent aider à préparer le diagnostic. Ne manipulez pas les déjections à mains nues et évitez le balayage à sec qui remet des poussières en suspension."}</p>
            <p>{"Ne déplacez pas les appâts existants sans en signaler l'emplacement. Mentionnez les produits déjà utilisés, les captures éventuelles et les travaux récents. Une absence de bruit pendant une nuit ne suffit pas à conclure que les rongeurs ont disparu."}</p>
          </> },
          { title: "Prévention dans une maison ancienne ou un commerce à Châtillon-sur-Seine", content: <>
            <p>{"Conservez les denrées dans des contenants fermés. Retirez les déchets alimentaires et limitez les encombrements qui masquent les déplacements le long des murs. Les portes de dépendances, les raccords de canalisations et les passages de câbles sont à examiner avec le diagnostic."}</p>
            <p>{"Pour un commerce, précisez les contraintes de nettoyage, les zones de stockage et les heures d'activité. Si plusieurs locaux communiquent, une action isolée peut ne pas suffire. Le devis indique le périmètre retenu et le suivi, sans déduire un prix ou un nombre de passages du seul quartier."}</p>
          </> },
          { title: "Votre service à Châtillon-sur-Seine et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation">service dératisation</Link> pour les méthodes et les prestations. Pour votre adresse à Châtillon-sur-Seine, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-bar-sur-aube">Dératisation à Bar-sur-Aube</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-chaumont">Dératisation à Chaumont</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-dijon">Dératisation à Dijon</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Châtillon-sur-Seine", items: [
          { label: "Dératisation à Bar-sur-Aube", to: "/deratisation-bar-sur-aube" },
          { label: "Dératisation à Chaumont", to: "/deratisation-chaumont" },
          { label: "Dératisation à Dijon", to: "/deratisation-dijon" },
        ] }}
        relatedLinks={[
          { label: "Dépigeonnisation à Châtillon-sur-Seine", to: "/depigeonnisation-chatillon-sur-seine" },
          { label: "Zone d'intervention", to: "/zone-intervention" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dératisation à Châtillon-sur-Seine : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DeratisationChatillonSurSeine;
