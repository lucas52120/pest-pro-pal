import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation Bologne 52 - Intervention 24h, Devis Gratuit";
const DESCRIPTION = "Rats ou souris à Bologne (52310) ? G&F Nuisibles recherche les accès, adapte le traitement et conseille la prévention. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/deratisation-bologne";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Dératisez-vous les maisons du centre-bourg de Bologne ?", answer: "Oui, les particuliers et les professionnels de Bologne peuvent demander un diagnostic. Précisez l'adresse, les pièces concernées et les accès aux caves ou dépendances pour préparer la visite." },
  { question: "La proximité de la Marne signifie-t-elle que ce sont des rats ?", answer: "Non. Le méandre de la Marne et le canal sont des repères géographiques, pas un diagnostic. Les traces, les points d'entrée et l'examen du bâtiment permettent de distinguer les espèces et les causes possibles." },
  { question: "Pouvez-vous inspecter un atelier ou une dépendance agricole ?", answer: "Oui, décrivez les surfaces, les stocks et les observations. Le stockage de grains ou d'aliments, les accès au sol et les locaux attenants sont examinés selon la configuration des lieux." },
  { question: "Comment protéger mes animaux pendant la dératisation ?", answer: "Signalez-les avant la prestation. Le choix des dispositifs, leur emplacement et les consignes tiennent compte des occupants. Les appâts restent à risque et ne doivent jamais être déplacés ou laissés accessibles." },
  { question: "Quel est le prix d'une dératisation à Bologne ?", answer: "Le prix dépend du bâtiment, des zones concernées et du suivi nécessaire. Un diagnostic et un devis gratuits permettent de préciser les prestations et les passages retenus avant votre accord." },
];

const DeratisationBologne = () => {
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
        "@type": "Service", "url": URL, "name": "Dératisation à Bologne (52310) : rats et souris", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Bologne", "containedInPlace": { "@type": "AdministrativeArea", "name": "Communauté d'agglomération de Chaumont" }, "address": { "@type": "PostalAddress", "postalCode": "52310", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dératisation", "item": "https://gf-nuisibles.fr/deratisation" },
        { "@type": "ListItem", "position": 3, "name": "Bologne", "item": URL }
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
        city="Bologne"
        department="Haute-Marne (52)"
        serviceTitle={"Dératisation à Bologne (52310) : rats et souris"}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"RATS OU SOURIS DANS VOTRE BÂTIMENT À BOLOGNE ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Un bruit dans une cloison, des emballages rongés dans une réserve ou des déjections dans une dépendance méritent une inspection avant de poser des appâts au hasard. G&F Nuisibles propose la dératisation à Bologne (52310), bourg-centre situé dans un méandre de la Marne, pour les particuliers et les professionnels. Le diagnostic recherche les rats ou les souris, leurs circulations et les ressources qui permettent leur installation. Une maison du centre-bourg, un commerce et une dépendance agricole ne présentent pas les mêmes accès : le protocole doit répondre au bâtiment réellement observé."}
        expertise={"Les souris peuvent circuler dans des espaces étroits entre les pièces, alors que des rats peuvent exploiter un accès au sol, un regard ou une dépendance proche d'un cours d'eau. Ces pistes ne remplacent pas l'identification sur place. Nous examinons les indices, les passages techniques, les stocks et les habitudes de rangement. Signalez les animaux domestiques, les enfants et les zones alimentaires pour organiser les précautions. Un poste sécurisé limite l'accès aux appâts mais ne rend pas un produit sans danger ; les consignes restent indispensables."}
        method={"L'inspection commence par les zones où vous avez relevé des traces, puis recherche les points d'entrée et les ressources alimentaires. Selon les observations, des pièges ou des dispositifs d'appâtage professionnels sont proposés, avec un emplacement adapté. Le devis précise les passages et les prestations retenues. Le contrôle des consommations ou des captures permet d'ajuster le suivi. Les conseils d'obturation, de stockage et de gestion des déchets complètent le traitement : retirer des rongeurs sans corriger un accès peut laisser la place à une nouvelle intrusion."}
        localContext={{ title: "Centre-bourg de Bologne, méandre de la Marne et canal", content: <>
            <p>{"Dans le centre, autour de l'église Sainte-Bologne, inscrite à l'inventaire des monuments historiques, précisez si la demande concerne une cave, une cuisine ou une réserve commerciale. Des espaces attenants ou des passages entre bâtiments peuvent justifier une inspection coordonnée avec le propriétaire."}</p>
            <p>{"Bologne est installée dans un large méandre de la Marne, avec un canal entre Champagne et Bourgogne qui longe la commune. Pour un bien situé près du chemin de halage ou d'un bief, le diagnostic porte sur vos accès, les canalisations et les indices dans le bâtiment : la proximité de l'eau ne prouve pas une infestation."}</p>
            <p>{"Dans les communes associées de Marault, avec son château dont la porterie et le donjon sont inscrits à l'inventaire, et de Roôcourt-la-Côte, les dépendances, granges et stocks doivent être décrits lors de la demande. La présence éventuelle d'aliments pour animaux appelle une vérification du stockage, sans présumer d'un problème chez un établissement cité."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun monument n'est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.mairie-bologne.fr/patrimoine/" target="_blank" rel="noopener noreferrer">site du patrimoine de la mairie de Bologne</a> et dans la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.agglo-chaumont.fr/mon-agglomeration/presentation/les-communes-adherentes/bologne/" target="_blank" rel="noopener noreferrer">présentation de Bologne par l'agglomération de Chaumont</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Bologne (52310)", intro: "Bologne est un bourg-centre de l'agglomération de Chaumont, avec les communes associées de Marault et de Roôcourt-la-Côte. Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre-bourg de Bologne", "Secteur de l'église Sainte-Bologne", "Abords de la Marne et du canal", "Chemin de halage", "Marault", "Roôcourt-la-Côte"] }}
        extraSections={[
          { title: "Rats ou souris : les informations utiles avant la visite", content: <>
            <p>{"Notez les pièces concernées, les moments où les bruits sont entendus et la date des premières traces. Des photos d'emballages endommagés ou des passages suspects peuvent aider à préparer le diagnostic. Ne manipulez pas les déjections à mains nues et évitez le balayage à sec qui remet des poussières en suspension."}</p>
            <p>{"Ne déplacez pas les appâts existants sans en signaler l'emplacement. Mentionnez les produits déjà utilisés, les captures éventuelles et les travaux récents. Une absence de bruit pendant une nuit ne suffit pas à conclure que les rongeurs ont disparu."}</p>
          </> },
          { title: "Prévention dans une maison, une grange ou un commerce à Bologne", content: <>
            <p>{"Conservez les denrées et les aliments pour animaux dans des contenants fermés. Retirez les déchets alimentaires et limitez les encombrements qui masquent les déplacements le long des murs. Les portes de dépendances, les raccords de canalisations et les passages de câbles sont à examiner avec le diagnostic."}</p>
            <p>{"Pour un commerce du centre-bourg, précisez les contraintes de nettoyage, les zones de stockage et les heures d'activité. Si plusieurs locaux communiquent, une action isolée peut ne pas suffire. Le devis indique le périmètre retenu et le suivi, sans déduire un prix ou un nombre de passages du seul quartier."}</p>
          </> },
          { title: "Votre service à Bologne et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation">service dératisation en Haute-Marne</Link> pour les méthodes et les prestations. Pour votre adresse à Bologne, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-chaumont">Dératisation à Chaumont</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-froncles">Dératisation à Froncles</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Bologne", items: [
          { label: "Dératisation à Chaumont", to: "/deratisation-chaumont" },
          { label: "Dératisation à Froncles", to: "/deratisation-froncles" },
        ] }}
        relatedLinks={[
          { label: "Guêpes et frelons à Bologne", to: "/guepes-frelons-bologne" },
          { label: "Dépigeonnisation à Bologne", to: "/depigeonnisation-bologne" },
          { label: "Taupier à Bologne", to: "/taupes-bologne" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dératisation à Bologne : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DeratisationBologne;
