import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Semoutiers-Montsaon (52000) : rats et souris | G&F Nuisibles";
const DESCRIPTION = "Rats ou souris à Semoutiers-Montsaon (52000) ? G&F Nuisibles, implanté sur la commune, recherche les accès et adapte le traitement. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/deratisation-semoutiers-montsaon";

const FAQ_ITEMS: FaqItem[] = [
  { question: "G&F Nuisibles est-il vraiment basé à Semoutiers-Montsaon ?", answer: "Oui, notre siège est situé à Montsaon, l’un des deux villages de la commune. Précisez l’adresse, les pièces touchées et les accès aux granges ou dépendances pour préparer la visite." },
  { question: "Intervenez-vous aussi bien à Semoutiers qu’à Montsaon ?", answer: "Oui, la commune de Semoutiers-Montsaon résulte de la fusion de ces deux villages en 1972. Le diagnostic est organisé selon votre adresse précise, dans l’un ou l’autre village." },
  { question: "Pouvez-vous inspecter une grange ou un bâtiment agricole ?", answer: "Oui, décrivez les surfaces, les stocks et les observations. Le stockage de nourriture, les accès au sol et les espaces attenants sont examinés selon la configuration des lieux, fréquente dans ce secteur rural." },
  { question: "Comment protéger mes animaux pendant la dératisation ?", answer: "Signalez-les avant la prestation. Le choix des dispositifs, leur emplacement et les consignes tiennent compte des occupants. Les appâts restent à risque et ne doivent jamais être déplacés ou laissés accessibles." },
  { question: "Quel est le prix d’une dératisation à Semoutiers-Montsaon ?", answer: "Le prix dépend du bâtiment, des zones concernées et du suivi nécessaire. Un diagnostic et un devis gratuits permettent de préciser les prestations et les passages retenus avant votre accord." },
];

const DeratisationSemoutiersMontsaon = () => {
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
        "@type": "Service", "url": URL, "name": "Dératisation à Semoutiers-Montsaon (52000) : rats et souris", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Semoutiers-Montsaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haute-Marne" }, "address": { "@type": "PostalAddress", "postalCode": "52000", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dératisation", "item": "https://gf-nuisibles.fr/deratisation" },
        { "@type": "ListItem", "position": 3, "name": "Semoutiers-Montsaon", "item": URL }
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
        city="Semoutiers-Montsaon"
        department="Haute-Marne (52)"
        serviceTitle={"Dératisation à Semoutiers-Montsaon (52000) : rats et souris"}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"RATS OU SOURIS DANS VOTRE BÂTIMENT À SEMOUTIERS-MONTSAON ?"}
        serviceCallSubtitle="G&F NUISIBLES — VOTRE VOISIN À MONTSAON"
        intro={"Un bruit dans une cloison, des emballages rongés dans une grange ou des déjections dans une dépendance méritent une inspection avant de poser des appâts au hasard. G&F Nuisibles, dont le siège est installé à Montsaon, propose la dératisation à Semoutiers-Montsaon (52000), commune rurale née en 1972 de la fusion des villages de Semoutiers et de Montsaon, à quelques kilomètres de Chaumont. Le diagnostic recherche les rats ou les souris, leurs circulations et les ressources qui permettent leur installation dans une maison, une ferme ou une dépendance."}
        expertise={"Les souris peuvent circuler dans des espaces étroits entre les pièces, alors que des rats peuvent exploiter un accès au sol, un regard ou un bâtiment agricole attenant. Ces pistes ne remplacent pas l’identification sur place. Nous examinons les indices, les passages techniques, les stocks et les habitudes de rangement, fréquents dans les exploitations et les dépendances de ce secteur rural. Signalez les animaux domestiques, les enfants et les zones alimentaires pour organiser les précautions. Un poste sécurisé limite l’accès aux appâts mais ne rend pas un produit sans danger ; les consignes restent indispensables."}
        method={"L’inspection commence par les zones où vous avez relevé des traces, puis recherche les points d’entrée et les ressources alimentaires. Selon les observations, des pièges ou des dispositifs d’appâtage professionnels sont proposés, avec un emplacement adapté. Le devis précise les passages et les prestations retenues. Le contrôle des consommations ou des captures permet d’ajuster le suivi. Les conseils d’obturation, de stockage et de gestion des déchets complètent le traitement : retirer des rongeurs sans corriger un accès peut laisser la place à une nouvelle intrusion."}
        localContext={{ title: "Deux villages, Semoutiers et Montsaon, aux portes de Chaumont", content: <>
            <p>{"Semoutiers-Montsaon est une commune rurale de l’agglomération de Chaumont, née de la fusion administrative de deux villages en 1972. Selon que votre adresse se trouve à Semoutiers ou à Montsaon, les accès au bâti, les granges et les cours peuvent varier : précisez votre village et votre rue lors de la demande."}</p>
            <p>{"Montsaon, où se trouve notre siège rue principale, et Semoutiers, où se situe la mairie historique rue de Neuilly, forment un territoire agricole où les granges, hangars et réserves de fourrage sont des zones d’inspection habituelles pour la dératisation."}</p>
            <p>{"Chaumont, préfecture de la Haute-Marne, se trouve à quelques kilomètres. La proximité d’une exploitation agricole ou d’un corps de ferme ne signifie pas automatiquement une infestation : seuls les indices observés sur votre bâtiment permettent de confirmer la présence de rongeurs."}</p>
            <p>Les repères ci-dessus situent votre demande ; aucun lieu n’est présenté comme infesté ou client. Retrouvez des informations sur la commune sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.semoutiers.fr/" target="_blank" rel="noopener noreferrer">site officiel de la mairie de Semoutiers-Montsaon</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Semoutiers-Montsaon (52000)", intro: "Semoutiers-Montsaon réunit les villages de Semoutiers et de Montsaon. Les repères suivants aident à situer votre adresse, sans constituer une liste de lieux infestés. Précisez votre village et votre rue lors de votre demande.", items: ["Village de Montsaon", "Village de Semoutiers", "Secteur de la rue principale", "Abords de la mairie, rue de Neuilly", "Exploitations agricoles et dépendances", "Direction de Chaumont"] }}
        extraSections={[
          { title: "Rats ou souris : les informations utiles avant la visite", content: <>
            <p>{"Notez les pièces concernées, les moments où les bruits sont entendus et la date des premières traces. Des photos d’emballages endommagés ou des passages suspects peuvent aider à préparer le diagnostic. Ne manipulez pas les déjections à mains nues et évitez le balayage à sec qui remet des poussières en suspension."}</p>
            <p>{"Ne déplacez pas les appâts existants sans en signaler l’emplacement. Mentionnez les produits déjà utilisés, les captures éventuelles et les travaux récents. Une absence de bruit pendant une nuit ne suffit pas à conclure que les rongeurs ont disparu."}</p>
          </> },
          { title: "Prévention dans une maison, une grange ou un corps de ferme", content: <>
            <p>{"Conservez les denrées, les grains et les aliments pour animaux dans des contenants fermés. Retirez les déchets alimentaires et limitez les encombrements qui masquent les déplacements le long des murs. Les portes de granges, les raccords de canalisations et les passages de câbles sont à examiner avec le diagnostic."}</p>
            <p>{"Pour une exploitation agricole, précisez les bâtiments concernés, les stocks et l’organisation des accès. Si plusieurs bâtiments communiquent, une action isolée peut ne pas suffire. Le devis indique le périmètre retenu et le suivi, sans déduire un prix ou un nombre de passages du seul village."}</p>
          </> },
          { title: "Votre service à Semoutiers-Montsaon et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation">service dératisation</Link> pour les méthodes et les prestations. Pour votre adresse à Semoutiers-Montsaon, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-chaumont">Dératisation à Chaumont</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-bologne">Dératisation à Bologne</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-chateauvillain">Dératisation à Châteauvillain</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Semoutiers-Montsaon", items: [
          { label: "Dératisation à Chaumont", to: "/deratisation-chaumont" },
          { label: "Dératisation à Bologne", to: "/deratisation-bologne" },
          { label: "Dératisation à Châteauvillain", to: "/deratisation-chateauvillain" },
        ] }}
        relatedLinks={[
          { label: "Désinsectisation à Semoutiers-Montsaon", to: "/desinsectisation-semoutiers-montsaon" },
          { label: "Guêpes et frelons à Semoutiers-Montsaon", to: "/guepes-frelons-semoutiers-montsaon" },
          { label: "Dépigeonnisation à Semoutiers-Montsaon", to: "/depigeonnisation-semoutiers-montsaon" },
          { label: "Taupier à Semoutiers-Montsaon", to: "/taupes-semoutiers-montsaon" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dératisation à Semoutiers-Montsaon : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DeratisationSemoutiersMontsaon;
