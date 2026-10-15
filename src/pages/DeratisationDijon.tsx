import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Dijon (21000) : rats et souris | G&F Nuisibles";
const DESCRIPTION = "Rats ou souris à Dijon (21000) ? G&F Nuisibles recherche les accès, adapte le traitement et conseille la prévention. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/deratisation-dijon";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Intervenez-vous dans le centre-ville de Dijon ?", answer: "Oui, les particuliers et les professionnels du centre de Dijon peuvent demander un diagnostic. Précisez l'adresse, les pièces concernées et les accès aux caves, cours ou parties communes pour préparer la visite." },
  { question: "La présence de l'Ouche ou du canal de Bourgogne signifie-t-elle que ce sont des rats ?", answer: "Non. Ces cours d'eau sont des repères géographiques, pas un diagnostic. Les traces observées dans le bâtiment, les points d'entrée et l'examen des lieux permettent de distinguer les espèces et les causes possibles." },
  { question: "Pouvez-vous intervenir dans un restaurant ou un commerce du centre-ville ?", answer: "Oui, décrivez l'activité, les zones de stockage et les contraintes d'ouverture. Le protocole retenu tient compte des horaires et des exigences propres à un local recevant du public." },
  { question: "Comment protéger mes animaux pendant la dératisation ?", answer: "Signalez-les avant la prestation. Le choix des dispositifs, leur emplacement et les consignes tiennent compte des occupants. Les appâts restent à risque et ne doivent jamais être déplacés ou laissés accessibles." },
  { question: "Quel est le prix d'une dératisation à Dijon ?", answer: "Le prix dépend du bâtiment, des zones concernées et du suivi nécessaire. Un diagnostic et un devis gratuits permettent de préciser les prestations et les passages retenus avant votre accord." },
];

const DeratisationDijon = () => {
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
        "@type": "Service", "url": URL, "name": "Dératisation à Dijon (21000) : rats et souris", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Dijon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Côte-d'Or" }, "address": { "@type": "PostalAddress", "postalCode": "21000", "addressRegion": "Côte-d'Or", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dératisation", "item": "https://gf-nuisibles.fr/deratisation" },
        { "@type": "ListItem", "position": 3, "name": "Dijon", "item": URL }
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
        city="Dijon"
        department="Côte-d'Or (21)"
        serviceTitle={"Dératisation à Dijon (21000) : rats et souris"}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"RATS OU SOURIS DANS VOTRE BÂTIMENT À DIJON ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Un bruit dans une cloison, des emballages rongés dans une réserve ou des déjections dans une cave méritent une inspection avant de poser des appâts au hasard. G&F Nuisibles propose la dératisation à Dijon (21000), préfecture de la Côte-d'Or, pour les particuliers et les professionnels. Le diagnostic recherche les rats ou les souris, leurs circulations et les ressources qui permettent leur installation. Un appartement du centre ancien, un commerce de la rue de la Liberté et un pavillon de périphérie ne présentent pas les mêmes accès : le protocole doit répondre au bâtiment réellement observé."}
        expertise={"Les souris peuvent circuler dans des espaces étroits entre les pièces, alors que des rats peuvent exploiter un accès au sol, un réseau d'évacuation ou une cour intérieure. Ces pistes ne remplacent pas l'identification sur place. Nous examinons les indices, les passages techniques, les stocks et les habitudes de rangement. Signalez les animaux domestiques, les enfants et les zones alimentaires pour organiser les précautions. Un poste sécurisé limite l'accès aux appâts mais ne rend pas un produit sans danger ; les consignes restent indispensables."}
        method={"L'inspection commence par les zones où vous avez relevé des traces, puis recherche les points d'entrée et les ressources alimentaires. Selon les observations, des pièges ou des dispositifs d'appâtage professionnels sont proposés, avec un emplacement adapté. Le devis précise les passages et les prestations retenues. Le contrôle des consommations ou des captures permet d'ajuster le suivi. Les conseils d'obturation, de stockage et de gestion des déchets complètent le traitement : retirer des rongeurs sans corriger un accès peut laisser la place à une nouvelle intrusion."}
        localContext={{ title: "Place Darcy, quartier Fontaine d'Ouche et abords de l'Ouche à Dijon", content: <>
            <p>{"Dans le centre, entre la place Darcy et la place de la Libération, en passant par la rue de la Liberté, précisez si la demande concerne un appartement, une cave ou un commerce. Des immeubles anciens avec parties communes peuvent justifier une inspection coordonnée avec le syndic ou le propriétaire."}</p>
            <p>{"L'Ouche et le canal de Bourgogne traversent l'ouest de Dijon, dans les secteurs de Fontaine d'Ouche, de Larrey et du faubourg Raines. Pour un bien situé à proximité, le diagnostic porte sur vos accès, les canalisations et les indices dans le bâtiment : la proximité de l'eau ne prouve pas une infestation. Indiquez notamment les regards accessibles et les dépendances où les observations se répètent."}</p>
            <p>{"Pour un local professionnel proche du centre historique, précisez les contraintes d'activité, les stocks et les horaires. La présence éventuelle de denrées alimentaires appelle une vérification du stockage, sans présumer d'un problème chez un établissement du secteur."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun lieu n'est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.dijon.fr" target="_blank" rel="noopener noreferrer">site de la ville de Dijon</a> et dans la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://patrimoine.dijon.fr/le-patrimoine-dijonnais-en-ligne/123-quartiers/quartier-fontaine-douche-larrey-faubourg-raines-motte-giron/" target="_blank" rel="noopener noreferrer">présentation des quartiers par le site Patrimoine de Dijon</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Dijon (21000)", intro: "Dijon est une grande ville organisée en plusieurs quartiers. Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre-ville et place Darcy", "Secteur de la place de la Libération", "Quartier Fontaine d'Ouche", "Quartier Larrey", "Faubourg Raines", "Abords du canal de Bourgogne"] }}
        extraSections={[
          { title: "Rats ou souris : les informations utiles avant la visite", content: <>
            <p>{"Notez les pièces concernées, les moments où les bruits sont entendus et la date des premières traces. Des photos d'emballages endommagés ou des passages suspects peuvent aider à préparer le diagnostic. Ne manipulez pas les déjections à mains nues et évitez le balayage à sec qui remet des poussières en suspension."}</p>
            <p>{"Ne déplacez pas les appâts existants sans en signaler l'emplacement. Mentionnez les produits déjà utilisés, les captures éventuelles et les travaux récents. Une absence de bruit pendant une nuit ne suffit pas à conclure que les rongeurs ont disparu."}</p>
          </> },
          { title: "Prévention dans un appartement, un commerce ou une copropriété à Dijon", content: <>
            <p>{"Conservez les denrées dans des contenants fermés. Retirez les déchets alimentaires et limitez les encombrements qui masquent les déplacements le long des murs. Les gaines techniques, les raccords de canalisations et les passages de câbles sont à examiner avec le diagnostic."}</p>
            <p>{"Pour un commerce du centre-ville, précisez les contraintes de nettoyage, les zones de stockage et les heures d'activité. Si plusieurs locaux communiquent par une cour ou un sous-sol, une action isolée peut ne pas suffire. Le devis indique le périmètre retenu et le suivi, sans déduire un prix ou un nombre de passages du seul quartier."}</p>
          </> },
          { title: "Votre service à Dijon et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation">service dératisation</Link> pour les méthodes et les prestations. Pour votre adresse à Dijon, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-chatillon-sur-seine">Dératisation à Châtillon-sur-Seine</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-langres">Dératisation à Langres</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-chaumont">Dératisation à Chaumont</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Dijon", items: [
          { label: "Dératisation à Châtillon-sur-Seine", to: "/deratisation-chatillon-sur-seine" },
          { label: "Dératisation à Langres", to: "/deratisation-langres" },
          { label: "Dératisation à Chaumont", to: "/deratisation-chaumont" },
        ] }}
        relatedLinks={[
          { label: "Dépigeonnisation à Dijon", to: "/depigeonnisation-dijon" },
          { label: "Zone d'intervention", to: "/zone-intervention" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dératisation à Dijon : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DeratisationDijon;
