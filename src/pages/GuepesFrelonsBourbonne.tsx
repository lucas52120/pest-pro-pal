import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Destruction nid Guêpes & Frelons Bourbonne-les-Bains 52 - Intervention 24h";
const DESCRIPTION = "Nid de guêpes ou de frelons à Bourbonne-les-Bains (52400) ? G&F Nuisibles évalue l'accès et propose une intervention adaptée. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/guepes-frelons-bourbonne-les-bains";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Intervenez-vous sur les nids à Bourbonne-les-Bains (52400) ?", answer: "Oui, précisez l'adresse, le support, la hauteur approximative et les accès. Le créneau et les moyens nécessaires sont confirmés selon la situation." },
  { question: "Un nid dans un trou au sol peut-il être dangereux ?", answer: "Oui, un nid actif peut être dérangé par la tonte ou le passage. Éloignez les personnes et les animaux et ne versez aucun produit dans l'entrée. L'identification se fait sans manipuler le nid." },
  { question: "Faut-il boucher l'entrée sous une tuile ?", answer: "Non. Obstruer un accès actif peut déplacer les sorties, notamment vers l'intérieur. Gardez vos distances et attendez l'évaluation du professionnel." },
  { question: "Retirez-vous toujours le nid après le traitement ?", answer: "Le retrait dépend du support et de l'accessibilité. Il n'est pas systématique ni nécessairement immédiat. Les prestations retenues et les consignes sont précisées avant l'intervention." },
  { question: "Quel est le prix pour un nid de frelons à Bourbonne-les-Bains ?", answer: "Le prix dépend de l'identification, de la hauteur, de l'accès et des moyens nécessaires. Le diagnostic et le devis gratuits permettent de confirmer la prestation avant votre accord." },
];

const GuepesFrelonsBourbonne = () => {
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
        "@type": "Service", "url": URL, "name": "Nid de guêpes et frelons à Bourbonne-les-Bains (52400)", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Bourbonne-les-Bains", "containedInPlace": { "@type": "AdministrativeArea", "name": "la Communauté de communes des Savoir-Faire" }, "address": { "@type": "PostalAddress", "postalCode": "52400", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Guêpes et frelons", "item": "https://gf-nuisibles.fr/guepes-frelons" },
        { "@type": "ListItem", "position": 3, "name": "Bourbonne-les-Bains", "item": URL }
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
        city="Bourbonne-les-Bains"
        department="Haute-Marne (52)"
        serviceTitle={"Nid de guêpes et frelons à Bourbonne-les-Bains (52400)"}
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"UN NID DE GUÊPES OU DE FRELONS À BOURBONNE-LES-BAINS ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Un va-et-vient d'insectes sous une tuile, dans une haie ou près d'un trou au sol peut signaler un nid, même lorsque celui-ci est invisible. G&F Nuisibles intervient pour les nids de guêpes et de frelons à Bourbonne-les-Bains (52400), au sein de la Communauté de communes des Savoir-Faire. La demande commence par l'identification et l'évaluation de l'accès : hauteur, support, proximité des occupants et activité observée. Ne vous approchez pas pour obtenir une photo et ne tentez pas de décrocher le nid vous-même."}
        expertise={"Les guêpes, les frelons européens et les frelons asiatiques nécessitent une identification adaptée aux indices disponibles. Les abeilles ne sont pas à traiter comme un nid de guêpes : un essaim peut relever d'un apiculteur. Le diagnostic prend en compte les accès au bâtiment, le passage des personnes et les animaux. Un nid dans un volume fermé ne se traite pas comme un nid visible dans un arbre. Les possibilités techniques sont confirmées selon la configuration et non à partir du seul nom de la commune."}
        method={"À partir de votre description, nous préparons l'évaluation du nid et des moyens d'accès. Le périmètre à éviter et les précautions sont définis avant le traitement professionnel. La neutralisation et le retrait éventuel dépendent du support et de l'accessibilité ; le retrait immédiat n'est pas systématique. Les consignes après intervention précisent les comportements à respecter et les observations à signaler. Le devis tient compte de l'espèce identifiée, de la hauteur, de l'accès et de la méthode retenue."}
        localContext={{ title: "Centre thermal, Porte-Galon et abords de l'Apance", content: <>
            <p>{"Autour des Thermes de Bourbonne-les-Bains et du centre-ville, précisez si la demande concerne un hôtel, une résidence de curistes, un commerce ou un logement. L'activité saisonnière liée au thermalisme implique souvent des locaux occupés de façon temporaire, ce qui doit être signalé pour organiser l'accès."}</p>
            <p>{"La Porte-Galon, vestige des anciens remparts, et le secteur du casino situent le centre historique. Pour une adresse proche de ces repères, décrivez les caves, les dépendances et les éventuels passages communs avec un bâtiment voisin."}</p>
            <p>{"L'Apance traverse la commune et le ruisseau de Borne arrose aussi le centre. Pour un bien situé près de ces cours d'eau, le diagnostic porte sur vos accès, vos canalisations et les indices observés dans le bâtiment : la présence de l'eau à proximité ne permet pas à elle seule de conclure à une infestation."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun lieu n'est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://bourbonne.com/geographie/" target="_blank" rel="noopener noreferrer">site officiel de la ville thermale de Bourbonne-les-Bains</a> et sur la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://bourbonne.com/les-thermes/" target="_blank" rel="noopener noreferrer">page dédiée aux thermes de Bourbonne-les-Bains</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Bourbonne-les-Bains (52400)", intro: "Bourbonne-les-Bains fait partie de la Communauté de communes des Savoir-Faire. Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre-ville et secteur des Thermes", "Abords de la Porte-Galon", "Secteur du casino et du pôle culturel", "Abords de l'Apance", "Abords du ruisseau de Borne", "Hameaux et écarts de la commune"] }}
        extraSections={[
          { title: "Les précautions avant la venue du professionnel", content: <>
            <p>{"Ne bouchez pas un trou d'entrée dans une façade ou un toit : les insectes peuvent chercher une autre sortie. Ne versez ni eau, ni carburant, ni produit ménager dans un nid au sol. N'utilisez pas une échelle pour vous rapprocher d'un nid actif et ne le brûlez jamais."}</p>
            <p>{"Suspendez la tonte ou la taille près de l'activité observée. Gardez les enfants et les animaux à distance. Une photo prise sans s'approcher, une estimation de la hauteur et une description des accès suffisent pour préparer le premier échange."}</p>
          </> },
          { title: "Nid inaccessible, devis et suites de l'intervention à Bourbonne-les-Bains", content: <>
            <p>{"Pour une toiture, un arbre ou un volume fermé, précisez la hauteur approximative et les obstacles. Le professionnel confirme les moyens nécessaires et la faisabilité. Un devis ne peut pas être déduit d'un tarif unique pour tous les nids ; la configuration et les prestations retenues comptent."}</p>
            <p>{"Après le traitement, respectez les consignes et signalez une activité persistante au même point. Ne manipulez pas un nid traité sans accord. En cas de piqûres multiples, de difficulté à respirer ou de gonflement du visage ou de la gorge, appelez immédiatement le 15 ou le 112 : la destruction du nid ne remplace pas une prise en charge médicale."}</p>
          </> },
          { title: "Votre service à Bourbonne-les-Bains et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons">service guêpes et frelons en Haute-Marne</Link> pour les méthodes et les prestations. Pour votre adresse à Bourbonne-les-Bains, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-chalindrey">Guêpes et frelons à Chalindrey</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-chateauvillain">Guêpes et frelons à Châteauvillain</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Bourbonne-les-Bains", items: [
          { label: "Guêpes et frelons à Chalindrey", to: "/guepes-frelons-chalindrey" },
          { label: "Guêpes et frelons à Châteauvillain", to: "/guepes-frelons-chateauvillain" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Bourbonne-les-Bains", to: "/deratisation-bourbonne-les-bains" },
          { label: "Désinsectisation à Bourbonne-les-Bains", to: "/desinsectisation-bourbonne-les-bains" },
          { label: "Dépigeonnisation à Bourbonne-les-Bains", to: "/depigeonnisation-bourbonne-les-bains" },
          { label: "Taupier à Bourbonne-les-Bains", to: "/taupes-bourbonne-les-bains" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Guêpes et frelons à Bourbonne-les-Bains : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default GuepesFrelonsBourbonne;
