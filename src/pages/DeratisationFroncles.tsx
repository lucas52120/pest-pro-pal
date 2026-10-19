import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation Froncles 52 - Intervention 24h, Devis Gratuit";
const DESCRIPTION = "Rats ou souris à Froncles (52320) ? G&F Nuisibles recherche les accès, adapte le traitement et conseille la prévention. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/deratisation-froncles";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Dératisez-vous les maisons de Froncles et de Buxières-lès-Froncles ?", answer: "Oui, les particuliers et les professionnels de Froncles, Buxières-lès-Froncles et Provenchères-sur-Marne peuvent demander un diagnostic. Précisez l'adresse, les pièces touchées et les accès aux caves ou dépendances pour préparer la visite." },
  { question: "La proximité de la Marne ou du canal signifie-t-elle que ce sont des rats ?", answer: "Non. La rivière et le canal entre Champagne et Bourgogne sont des repères géographiques, pas un diagnostic. Les traces, les points d'entrée et l'examen du bâtiment permettent de distinguer les espèces et les causes possibles." },
  { question: "Pouvez-vous inspecter une grange ou un local industriel ?", answer: "Oui, décrivez les surfaces, les stocks et les observations. Le stockage de matières, les accès au sol et les espaces attenants sont examinés selon la configuration des lieux." },
  { question: "Comment protéger mes animaux pendant la dératisation ?", answer: "Signalez-les avant la prestation. Le choix des dispositifs, leur emplacement et les consignes tiennent compte des occupants. Les appâts restent à risque et ne doivent jamais être déplacés ou laissés accessibles." },
  { question: "Quel est le prix d'une dératisation à Froncles ?", answer: "Le prix dépend du bâtiment, des zones concernées et du suivi nécessaire. Un diagnostic et un devis gratuits permettent de préciser les prestations et les passages retenus avant votre accord." },
];

const DeratisationFroncles = () => {
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
        "@type": "Service", "url": URL, "name": "Dératisation à Froncles (52320) : rats et souris", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Froncles", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haute-Marne" }, "address": { "@type": "PostalAddress", "postalCode": "52320", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dératisation", "item": "https://gf-nuisibles.fr/deratisation" },
        { "@type": "ListItem", "position": 3, "name": "Froncles", "item": URL }
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
        city="Froncles"
        department="Haute-Marne (52)"
        serviceTitle={"Dératisation à Froncles (52320) : rats et souris"}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"RATS OU SOURIS DANS VOTRE BÂTIMENT À FRONCLES ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Un bruit dans une cloison, des emballages rongés dans une réserve ou des déjections dans une dépendance méritent une inspection avant de poser des appâts au hasard. G&F Nuisibles propose la dératisation à Froncles (52320), commune qui regroupe aussi Buxières-lès-Froncles et Provenchères-sur-Marne, pour les particuliers et les professionnels. Le diagnostic recherche les rats ou les souris, leurs circulations et les ressources qui permettent leur installation. Une maison du bourg, un atelier et une grange ne présentent pas les mêmes accès : le protocole doit répondre au bâtiment réellement observé."}
        expertise={"Les souris peuvent circuler dans des espaces étroits entre les pièces, alors que des rats peuvent exploiter un accès au sol, un regard ou une dépendance proche d'un cours d'eau. Ces pistes ne remplacent pas l'identification sur place. Nous examinons les indices, les passages techniques, les stocks et les habitudes de rangement. Signalez les animaux domestiques, les enfants et les zones alimentaires pour organiser les précautions. Un poste sécurisé limite l'accès aux appâts mais ne rend pas un produit sans danger ; les consignes restent indispensables."}
        method={"L'inspection commence par les zones où vous avez relevé des traces, puis recherche les points d'entrée et les ressources alimentaires. Selon les observations, des pièges ou des dispositifs d'appâtage professionnels sont proposés, avec un emplacement adapté. Le devis précise les passages et les prestations retenues. Le contrôle des consommations ou des captures permet d'ajuster le suivi. Les conseils d'obturation, de stockage et de gestion des déchets complètent le traitement : retirer des rongeurs sans corriger un accès peut laisser la place à une nouvelle intrusion."}
        localContext={{ title: "Froncles, Buxières-lès-Froncles et abords de la Marne", content: <>
            <p>{"Froncles résulte du rapprochement avec Buxières-lès-Froncles et Provenchères-sur-Marne. Pour une adresse dans l'un de ces secteurs, précisez si la demande concerne une maison, une cave ou un local d'activité, et signalez les dépendances ou passages entre bâtiments."}</p>
            <p>{"La Marne et le canal entre Champagne et Bourgogne traversent la commune, qui conserve une halte fluviale. Pour un bien situé à proximité de l'eau, le diagnostic porte sur vos accès, les canalisations et les indices dans le bâtiment : la proximité de la rivière ou du canal ne prouve pas une infestation. Indiquez notamment les regards accessibles et les dépendances où les observations se répètent."}</p>
            <p>{"Dans le secteur de la gare de Froncles et des anciens sites industriels liés à l'histoire métallurgique du village, les locaux annexes et réserves doivent être décrits lors de la demande, sans présumer d'un problème chez un établissement du secteur."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun lieu n'est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.froncles.fr/froncles.html" target="_blank" rel="noopener noreferrer">site de la mairie de Froncles</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Froncles (52320)", intro: "Froncles regroupe plusieurs anciens villages. Les repères suivants aident à situer votre adresse, sans constituer une liste de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre de Froncles", "Secteur de Buxières-lès-Froncles", "Secteur de Provenchères-sur-Marne", "Abords de la Marne", "Abords du canal entre Champagne et Bourgogne", "Secteur de la gare"] }}
        extraSections={[
          { title: "Rats ou souris : les informations utiles avant la visite", content: <>
            <p>{"Notez les pièces concernées, les moments où les bruits sont entendus et la date des premières traces. Des photos d'emballages endommagés ou des passages suspects peuvent aider à préparer le diagnostic. Ne manipulez pas les déjections à mains nues et évitez le balayage à sec qui remet des poussières en suspension."}</p>
            <p>{"Ne déplacez pas les appâts existants sans en signaler l'emplacement. Mentionnez les produits déjà utilisés, les captures éventuelles et les travaux récents. Une absence de bruit pendant une nuit ne suffit pas à conclure que les rongeurs ont disparu."}</p>
          </> },
          { title: "Prévention dans une maison, un atelier ou une grange à Froncles", content: <>
            <p>{"Conservez les denrées et les aliments pour animaux dans des contenants fermés. Retirez les déchets alimentaires et limitez les encombrements qui masquent les déplacements le long des murs. Les portes de dépendances, les raccords de canalisations et les passages de câbles sont à examiner avec le diagnostic."}</p>
            <p>{"Pour une entreprise ou un atelier, précisez les contraintes de nettoyage, les zones de stockage et les heures d'activité. Si plusieurs locaux communiquent, une action isolée peut ne pas suffire. Le devis indique le périmètre retenu et le suivi, sans déduire un prix ou un nombre de passages du seul quartier."}</p>
          </> },
          { title: "Votre service à Froncles et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation">service dératisation en Haute-Marne</Link> pour les méthodes et les prestations. Pour votre adresse à Froncles, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-bologne">Dératisation à Bologne</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-nogent">Dératisation à Nogent</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-joinville">Dératisation à Joinville</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Froncles", items: [
          { label: "Dératisation à Bologne", to: "/deratisation-bologne" },
          { label: "Dératisation à Nogent", to: "/deratisation-nogent" },
          { label: "Dératisation à Joinville", to: "/deratisation-joinville" },
        ] }}
        relatedLinks={[
          { label: "Désinsectisation à Froncles", to: "/desinsectisation-froncles" },
          { label: "Guêpes et frelons à Froncles", to: "/guepes-frelons-froncles" },
          { label: "Dépigeonnisation à Froncles", to: "/depigeonnisation-froncles" },
          { label: "Taupier à Froncles", to: "/taupes-froncles" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dératisation à Froncles : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DeratisationFroncles;
