import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Destruction nid Guêpes & Frelons Bar-sur-Aube 10 - Intervention 24h";
const DESCRIPTION = "Nid de guêpes ou de frelons à Bar-sur-Aube (10200) ? G&F Nuisibles évalue l'accès et propose une intervention adaptée. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/guepes-frelons-bar-sur-aube";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Intervenez-vous sur les nids à Bar-sur-Aube (10200) ?", answer: "Oui, précisez l'adresse, le support, la hauteur approximative et les accès. Le créneau et les moyens nécessaires sont confirmés selon la situation." },
  { question: "Un nid dans une vigne ou un talus peut-il être dangereux ?", answer: "Oui, un nid actif peut être dérangé par un travail de la vigne ou le passage à proximité. Éloignez les personnes et ne versez aucun produit dans l'entrée. L'identification se fait sans manipuler le nid." },
  { question: "Faut-il boucher l'entrée sous une tuile ?", answer: "Non. Obstruer un accès actif peut déplacer les sorties, notamment vers l'intérieur. Gardez vos distances et attendez l'évaluation du professionnel." },
  { question: "Retirez-vous toujours le nid après le traitement ?", answer: "Le retrait dépend du support et de l'accessibilité. Il n'est pas systématique ni nécessairement immédiat. Les prestations retenues et les consignes sont précisées avant l'intervention." },
  { question: "Quel est le prix pour un nid de frelons à Bar-sur-Aube ?", answer: "Le prix dépend de l'identification, de la hauteur, de l'accès et des moyens nécessaires. Le diagnostic et le devis gratuits permettent de confirmer la prestation avant votre accord." },
];

const GuepesFrelonsBarSurAube = () => {
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
        "@type": "Service", "url": URL, "name": "Nid de guêpes et frelons à Bar-sur-Aube (10200)", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Bar-sur-Aube", "containedInPlace": { "@type": "AdministrativeArea", "name": "Aube" }, "address": { "@type": "PostalAddress", "postalCode": "10200", "addressRegion": "Aube", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Guêpes et frelons", "item": "https://gf-nuisibles.fr/guepes-frelons" },
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
        serviceTitle={"Nid de guêpes et frelons à Bar-sur-Aube (10200)"}
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"UN NID DE GUÊPES OU DE FRELONS À BAR-SUR-AUBE ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Un va-et-vient d'insectes sous une tuile, dans une haie ou près d'un trou au sol peut signaler un nid, même lorsque celui-ci est invisible. G&F Nuisibles intervient pour les nids de guêpes et de frelons à Bar-sur-Aube (10200), ville traversée par l'Aube et bordée par les vignobles de la Côte des Bar. La demande commence par l'identification et l'évaluation de l'accès : hauteur, support, proximité des occupants et activité observée. Ne vous approchez pas pour obtenir une photo et ne tentez pas de décrocher le nid vous-même."}
        expertise={"Les guêpes, les frelons européens et les frelons asiatiques nécessitent une identification adaptée aux indices disponibles. Les abeilles ne sont pas à traiter comme un nid de guêpes : un essaim peut relever d'un apiculteur. Le diagnostic prend en compte les accès au bâtiment, le passage des personnes et les animaux, ainsi que la proximité éventuelle d'une parcelle de vigne ou d'un jardin. Un nid dans un volume fermé ne se traite pas comme un nid visible dans un arbre. Les possibilités techniques sont confirmées selon la configuration et non à partir du seul nom de la commune."}
        method={"À partir de votre description, nous préparons l'évaluation du nid et des moyens d'accès. Le périmètre à éviter et les précautions sont définis avant le traitement professionnel. La neutralisation et le retrait éventuel dépendent du support et de l'accessibilité ; le retrait immédiat n'est pas systématique. Les consignes après intervention précisent les comportements à respecter et les observations à signaler. Le devis tient compte de l'espèce identifiée, de la hauteur, de l'accès et de la méthode retenue."}
        localContext={{ title: "Toitures du centre historique, jardins et vignobles autour de Bar-sur-Aube", content: <>
            <p>{"Dans le centre de Bar-sur-Aube, autour de l'église Saint-Pierre et de son halloy, ou de l'église Saint-Maclou, signalez un accès sous toiture, dans un volet ou une dépendance. Un passage régulier d'insectes au même point est une information utile même si le nid reste caché."}</p>
            <p>{"Sur la colline Sainte-Germaine ou le long des promenades de la Gravière et de Mathaux, précisez la présence d'un jardin, d'une haie ou d'un bâtiment annexe à votre adresse. Éloignez les personnes et les animaux du point d'activité, sans tailler ni secouer la végétation pour chercher le nid."}</p>
            <p>{"Pour une parcelle située dans les vignobles de la Côte des Bar, indiquez les accès praticables et la position du nid par rapport aux rangs de vigne et aux chemins utilisés. L'activité viticole du secteur est un repère local, pas la preuve d'une infestation."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun monument n'est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://barsuraube.org/bouger-et-sortir-decouvrir-notre-territoire/notre-patrimoine-bati" target="_blank" rel="noopener noreferrer">site de la Communauté de communes de la région de Bar-sur-Aube</a> et dans la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.tourisme-cotedesbar.com/patrimoine/bar-sur-aube/" target="_blank" rel="noopener noreferrer">présentation de Bar-sur-Aube par l'office de tourisme Côte des Bar</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Bar-sur-Aube (10200)", intro: "Bar-sur-Aube est une ancienne cité des foires de Champagne, traversée par l'Aube. Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre historique de Bar-sur-Aube", "Secteur de l'église Saint-Pierre", "Secteur de l'église Saint-Maclou", "Colline Sainte-Germaine", "Promenade de la Gravière, bords de l'Aube", "Direction des vignobles de la Côte des Bar"] }}
        extraSections={[
          { title: "Les précautions avant la venue du professionnel", content: <>
            <p>{"Ne bouchez pas un trou d'entrée dans une façade ou un toit : les insectes peuvent chercher une autre sortie. Ne versez ni eau, ni carburant, ni produit ménager dans un nid au sol ou dans un talus de vigne. N'utilisez pas une échelle pour vous rapprocher d'un nid actif et ne le brûlez jamais."}</p>
            <p>{"Suspendez la tonte, la taille ou le travail de la vigne près de l'activité observée. Gardez les enfants et les animaux à distance. Une photo prise sans s'approcher, une estimation de la hauteur et une description des accès suffisent pour préparer le premier échange."}</p>
          </> },
          { title: "Nid inaccessible, devis et suites de l'intervention", content: <>
            <p>{"Pour une toiture, un arbre ou un volume fermé, précisez la hauteur approximative et les obstacles. Le professionnel confirme les moyens nécessaires et la faisabilité. Un devis ne peut pas être déduit d'un tarif unique pour tous les nids ; la configuration et les prestations retenues comptent."}</p>
            <p>{"Après le traitement, respectez les consignes et signalez une activité persistante au même point. Ne manipulez pas un nid traité sans accord. En cas de piqûres multiples, de difficulté à respirer ou de gonflement du visage ou de la gorge, appelez immédiatement le 15 ou le 112 : la destruction du nid ne remplace pas une prise en charge médicale."}</p>
          </> },
          { title: "Votre service à Bar-sur-Aube et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons">service guêpes et frelons en Haute-Marne et dans l'Aube</Link> pour les méthodes et les prestations. Pour votre adresse à Bar-sur-Aube, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-chaumont">Guêpes et frelons à Chaumont</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-langres">Guêpes et frelons à Langres</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-chateauvillain">Guêpes et frelons à Châteauvillain</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Bar-sur-Aube", items: [
          { label: "Guêpes et frelons à Chaumont", to: "/guepes-frelons-chaumont" },
          { label: "Guêpes et frelons à Langres", to: "/guepes-frelons-langres" },
          { label: "Guêpes et frelons à Châteauvillain", to: "/guepes-frelons-chateauvillain" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Bar-sur-Aube", to: "/deratisation-bar-sur-aube" },
          { label: "Désinsectisation à Bar-sur-Aube", to: "/desinsectisation-bar-sur-aube" },
          { label: "Dépigeonnisation à Bar-sur-Aube", to: "/depigeonnisation-bar-sur-aube" },
          { label: "Taupier à Bar-sur-Aube", to: "/taupes-bar-sur-aube" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Guêpes et frelons à Bar-sur-Aube : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default GuepesFrelonsBarSurAube;
