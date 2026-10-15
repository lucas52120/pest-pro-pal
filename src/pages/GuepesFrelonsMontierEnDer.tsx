import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Nid de guêpes et frelons à Montier-en-Der (52220) | G&F Nuisibles";
const DESCRIPTION = "Nid de guêpes ou de frelons à Montier-en-Der (52220) ? G&F Nuisibles évalue l’accès et propose une intervention adaptée. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/guepes-frelons-montier-en-der";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Intervenez-vous sur les nids à Montier-en-Der (52220) ?", answer: "Oui, précisez l’adresse, le support, la hauteur approximative et les accès. Le créneau et les moyens nécessaires sont confirmés selon la situation." },
  { question: "Un nid dans un trou au sol peut-il être dangereux ?", answer: "Oui, un nid actif peut être dérangé par la tonte ou le passage. Éloignez les personnes et les animaux et ne versez aucun produit dans l’entrée. L’identification se fait sans manipuler le nid." },
  { question: "Faut-il boucher l’entrée sous une tuile ?", answer: "Non. Obstruer un accès actif peut déplacer les sorties, notamment vers l’intérieur. Gardez vos distances et attendez l’évaluation du professionnel." },
  { question: "Retirez-vous toujours le nid après le traitement ?", answer: "Le retrait dépend du support et de l’accessibilité. Il n’est pas systématique ni nécessairement immédiat. Les prestations retenues et les consignes sont précisées avant l’intervention." },
  { question: "Quel est le prix pour un nid de frelons à Montier-en-Der ?", answer: "Le prix dépend de l’identification, de la hauteur, de l’accès et des moyens nécessaires. Le diagnostic et le devis gratuits permettent de confirmer la prestation avant votre accord." },
];

const GuepesFrelonsMontierEnDer = () => {
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
        "@type": "Service", "url": URL, "name": "Nid de guêpes et frelons à Montier-en-Der (52220)", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Montier-en-Der", "containedInPlace": { "@type": "AdministrativeArea", "name": "La Porte du Der" }, "address": { "@type": "PostalAddress", "postalCode": "52220", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Guêpes et frelons", "item": "https://gf-nuisibles.fr/guepes-frelons" },
        { "@type": "ListItem", "position": 3, "name": "Montier-en-Der", "item": URL }
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
        city="Montier-en-Der"
        department="Haute-Marne (52)"
        serviceTitle={"Nid de guêpes et frelons à Montier-en-Der (52220)"}
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"UN NID DE GUÊPES OU DE FRELONS À MONTIER-EN-DER ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Un va-et-vient d’insectes sous une tuile, dans une haie ou près d’un trou au sol peut signaler un nid, même lorsque celui-ci est invisible. G&F Nuisibles intervient pour les nids de guêpes et de frelons à Montier-en-Der (52220), commune déléguée de La Porte du Der. La demande commence par l’identification et l’évaluation de l’accès : hauteur, support, proximité des occupants et activité observée. Ne vous approchez pas pour obtenir une photo et ne tentez pas de décrocher le nid vous-même."}
        expertise={"Les guêpes, les frelons européens et les frelons asiatiques nécessitent une identification adaptée aux indices disponibles. Les abeilles ne sont pas à traiter comme un nid de guêpes : un essaim peut relever d’un apiculteur. Le diagnostic prend en compte les accès au bâtiment, le passage des personnes et les animaux. Un nid dans un volume fermé ne se traite pas comme un nid visible dans un arbre. Les possibilités techniques sont confirmées selon la configuration et non à partir du seul nom de la commune."}
        method={"À partir de votre description, nous préparons l’évaluation du nid et des moyens d’accès. Le périmètre à éviter et les précautions sont définis avant le traitement professionnel. La neutralisation et le retrait éventuel dépendent du support et de l’accessibilité ; le retrait immédiat n’est pas systématique. Les consignes après intervention précisent les comportements à respecter et les observations à signaler. Le devis tient compte de l’espèce identifiée, de la hauteur, de l’accès et de la méthode retenue."}
        localContext={{ title: "Toitures du centre, haies et jardins de Montier-en-Der", content: <>
            <p>{"Dans le centre de Montier-en-Der, autour de l’abbatiale Saint-Pierre-et-Saint-Paul et de la halle au blé, signalez un accès sous toiture, dans un volet ou une dépendance. Un passage régulier d’insectes au même point est une information utile même si le nid reste caché."}</p>
            <p>{"Dans les secteurs du haras et de l’hippodrome de la Crouée, précisez la présence d’un jardin, d’une haie ou d’un bâtiment annexe à votre adresse. Éloignez les personnes et les animaux du point d’activité, sans tailler ni secouer la végétation pour chercher le nid."}</p>
            <p>{"Pour un terrain près de la Voire, indiquez les accès praticables et la position du nid par rapport aux chemins utilisés. La rivière est un repère local, pas la preuve d’une infestation. Les sites patrimoniaux cités ne sont pas des références d’intervention."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun monument n’est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.laporteduder.fr/tourisme-decouverte-patrimoine/montier-en-der" target="_blank" rel="noopener noreferrer">site de la mairie de La Porte du Der</a> et dans la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.lacduder.com/decouvrir-explorer/nos-incontournables/montier-en-der/" target="_blank" rel="noopener noreferrer">présentation de Montier-en-Der par l’office de tourisme du lac du Der</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Montier-en-Der (52220)", intro: "Montier-en-Der est une commune déléguée de La Porte du Der. Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre de Montier-en-Der", "Secteur de l’abbatiale Saint-Pierre-et-Saint-Paul", "Secteur du haras", "Abords de la halle au blé", "Abords de la Voire", "Direction de l’hippodrome de la Crouée"] }}
        extraSections={[
          { title: "Les précautions avant la venue du professionnel", content: <>
            <p>{"Ne bouchez pas un trou d’entrée dans une façade ou un toit : les insectes peuvent chercher une autre sortie. Ne versez ni eau, ni carburant, ni produit ménager dans un nid au sol. N’utilisez pas une échelle pour vous rapprocher d’un nid actif et ne le brûlez jamais."}</p>
            <p>{"Suspendez la tonte ou la taille près de l’activité observée. Gardez les enfants et les animaux à distance. Une photo prise sans s’approcher, une estimation de la hauteur et une description des accès suffisent pour préparer le premier échange."}</p>
          </> },
          { title: "Nid inaccessible, devis et suites de l’intervention", content: <>
            <p>{"Pour une toiture, un arbre ou un volume fermé, précisez la hauteur approximative et les obstacles. Le professionnel confirme les moyens nécessaires et la faisabilité. Un devis ne peut pas être déduit d’un tarif unique pour tous les nids ; la configuration et les prestations retenues comptent."}</p>
            <p>{"Après le traitement, respectez les consignes et signalez une activité persistante au même point. Ne manipulez pas un nid traité sans accord. En cas de piqûres multiples, de difficulté à respirer ou de gonflement du visage ou de la gorge, appelez immédiatement le 15 ou le 112 : la destruction du nid ne remplace pas une prise en charge médicale."}</p>
          </> },
          { title: "Votre service à Montier-en-Der et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons">service guêpes et frelons en Haute-Marne</Link> pour les méthodes et les prestations. Pour votre adresse à Montier-en-Der, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-wassy">Guêpes et frelons à Wassy</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-saint-dizier">Guêpes et frelons à Saint-Dizier</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-joinville">Guêpes et frelons à Joinville</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Montier-en-Der", items: [
          { label: "Guêpes et frelons à Wassy", to: "/guepes-frelons-wassy" },
          { label: "Guêpes et frelons à Saint-Dizier", to: "/guepes-frelons-saint-dizier" },
          { label: "Guêpes et frelons à Joinville", to: "/guepes-frelons-joinville" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Montier-en-Der", to: "/deratisation-montier-en-der" },
          { label: "Désinsectisation à Montier-en-Der", to: "/desinsectisation-montier-en-der" },
          { label: "Dépigeonnisation à Montier-en-Der", to: "/depigeonnisation-montier-en-der" },
          { label: "Taupier à Montier-en-Der", to: "/taupes-montier-en-der" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Guêpes et frelons à Montier-en-Der : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default GuepesFrelonsMontierEnDer;
