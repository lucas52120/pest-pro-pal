import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation Nogent 52 - Intervention 24h";
const DESCRIPTION = "Cafards, punaises de lit ou puces à Nogent (52800) ? G&F Nuisibles identifie les insectes et adapte le traitement à votre logement. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/desinsectisation-nogent";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Traitez-vous les punaises de lit à Nogent ?", answer: "Oui, le diagnostic recherche les indices sur la literie et le mobilier. Les piqûres seules ne suffisent pas à identifier l’insecte. La préparation et le suivi sont définis selon le protocole." },
  { question: "Desservez-vous Nogent-le-Bas ?", answer: "Oui, Nogent-le-Bas et Nogent-le-Haut sont desservis. Indiquez l’adresse, les pièces touchées et la présence éventuelle d’espaces partagés pour préparer la visite." },
  { question: "Peut-on rester sur place pendant le traitement ?", answer: "Cela dépend du procédé et des produits retenus. Les consignes de protection, d’éloignement, d’aération et de réintégration sont communiquées avant la prestation ; ne retenez pas une durée générale." },
  { question: "Faut-il jeter un matelas suspect ?", answer: "Pas systématiquement. Attendez l’identification et les recommandations avant de déplacer ou de jeter le mobilier. Un transport non préparé peut propager les insectes." },
  { question: "Quel devis pour un commerce à Nogent ?", answer: "Le devis dépend de l’insecte, des surfaces, des accès et du suivi. Précisez l’activité et les contraintes de protection des stocks pour définir les prestations, après un diagnostic gratuit." },
];

const DesinsectisationNogent = () => {
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
        "@type": "Service", "url": URL, "name": "Désinsectisation à Nogent (52800) : cafards et punaises", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Nogent", "address": { "@type": "PostalAddress", "postalCode": "52800", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Désinsectisation", "item": "https://gf-nuisibles.fr/desinsectisation" },
        { "@type": "ListItem", "position": 3, "name": "Nogent", "item": URL }
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
        city="Nogent"
        department="Haute-Marne (52)"
        serviceTitle={"Désinsectisation à Nogent (52800) : cafards et punaises"}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"INSECTES DANS VOTRE LOGEMENT À NOGENT ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"À Nogent (52800), des insectes dans une cuisine, des traces sur la literie ou des piqûres répétées demandent d’abord une identification. G&F Nuisibles propose une désinsectisation adaptée aux logements et locaux professionnels, à Nogent-le-Haut comme à Nogent-le-Bas. Cafards, punaises de lit et puces ont des refuges et des modes de propagation différents : appliquer le même produit partout peut compliquer la recherche sans résoudre le problème."}
        expertise={"L’examen porte sur les insectes observés, leurs traces et les pièces concernées. Une photo nette, les dates des premières observations et les traitements déjà essayés aident à préparer la visite. Signalez les animaux, les enfants et les personnes nécessitant des précautions particulières. Les consignes de préparation, d’éloignement et de réintégration sont adaptées à la méthode retenue ; un traitement ne doit jamais être décrit comme inoffensif."}
        method={"Après identification, le protocole cible les refuges et les voies de circulation : mobilier, appareils de cuisine, textiles ou passages techniques selon l’espèce. Le devis indique la préparation, les zones à traiter et le suivi envisagé. Le traitement peut faire appel à des applications ciblées ou à d’autres procédés professionnels selon le diagnostic. Les opérations de lavage, de rangement et de nettoyage sont coordonnées avec la prestation, plutôt qu’improvisées avant la visite."}
        localContext={{ title: "Une désinsectisation adaptée à votre adresse à Nogent", content: <>
<p>{"À Nogent-le-Haut, autour de la place Charles-de-Gaulle et de l’église Saint-Jean, une demande peut concerner un appartement, un logement au-dessus d’un commerce ou une réserve. Précisez l’existence de locaux attenants et de parties communes : cette configuration importe davantage que le nom de la rue pour définir l’inspection."}</p>
<p>{"À Nogent-le-Bas, dans la vallée de la Traire, indiquez les pièces de vie, les dépendances et les lieux où les insectes ont réellement été vus. Le relief ou la proximité de l’eau ne permettent pas de conclure à la présence de cafards, de puces ou de punaises."}</p>
<p>{"La médiathèque Bernard Dimey et le musée de la Coutellerie servent à situer le centre de Nogent. Les références au patrimoine local ne désignent ni des établissements infestés ni des clients de G&F Nuisibles. Dans la zone industrielle, précisez l’usage de votre local et les zones accessibles au diagnostic."}</p>
<p>Pour retrouver ces repères, consultez la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://villedenogent52.fr/ma-ville/presentation-de-la-ville" target="_blank" rel="noopener noreferrer">présentation de Nogent par la mairie</a> et son <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://villedenogent52.fr/mes-activites/circuit-du-patrimoine" target="_blank" rel="noopener noreferrer">circuit du patrimoine</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs desservis à Nogent (52800)", intro: "Précisez votre rue, le type de bien et les accès. Ces secteurs situent les demandes et ne sont pas présentés comme infestés. Nogent désigne ici la commune de Haute-Marne, et non Nogent-sur-Marne ou Nogent-le-Rotrou.", items: ["Nogent-le-Haut", "Nogent-le-Bas et vallée de la Traire", "Centre, place Charles-de-Gaulle et musée de la Coutellerie", "Secteur de l’église Saint-Jean", "Secteur de l’église Saint-Germain", "Zone industrielle de Nogent"] }}
        extraSections={[
          { title: "Cafards, punaises ou puces : éviter les confusions", content: <>
<p>{"Des piqûres seules ne prouvent pas la présence de punaises de lit. Les coutures du matelas, le sommier et le mobilier voisin sont examinés pour rechercher d’autres indices. Ne déplacez pas une literie suspecte dans une autre chambre sans conseil : cela peut transporter les insectes."}</p>
<p>{"Pour les cafards, notez les observations près des points d’eau, des appareils et des réserves. Pour les puces, signalez les animaux présents et demandez conseil à un vétérinaire pour leur prise en charge. Un traitement des surfaces ne remplace pas les soins appropriés à l’animal."}</p>
          </> },
          { title: "Préparer un logement ou un commerce à Nogent", content: <>
<p>{"Conservez les informations utiles et attendez les consignes avant de vider les placards ou de laver tous les textiles. La préparation varie selon l’insecte. Évitez les pulvérisations répétées qui peuvent disperser les individus et compliquer leur localisation."}</p>
<p>{"Dans un commerce, indiquez les contraintes de protection des denrées et les horaires d’ouverture. Si plusieurs logements sont concernés, informez le bailleur ou le syndic pour organiser l’accès aux espaces partagés. Le devis précise les passages retenus et les consignes après traitement, dont l’aération et le nettoyage."}</p>
          </> },
          { title: "Votre service à Nogent et dans les villes du secteur", content: <>
<p>Découvrez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation">service désinsectisation en Haute-Marne</Link> pour connaître les méthodes et les prestations. Pour votre adresse à Nogent, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Pour une adresse dans une autre commune, consultez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-langres">Désinsectisation à Langres</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-chaumont">Désinsectisation à Chaumont</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-chalindrey">Désinsectisation à Chalindrey</Link>. Elles présentent les prestations dans ces villes, distinctes de Nogent. Retrouvez également notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link> pour situer votre demande.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Nogent", items: [
          { label: "Désinsectisation à Langres", to: "/desinsectisation-langres" },
          { label: "Désinsectisation à Chaumont", to: "/desinsectisation-chaumont" },
          { label: "Désinsectisation à Chalindrey", to: "/desinsectisation-chalindrey" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Nogent", to: "/deratisation-nogent" },
          { label: "Guêpes et frelons à Nogent", to: "/guepes-frelons-nogent" },
          { label: "Dépigeonnisation à Nogent", to: "/depigeonnisation-nogent" },
          { label: "Taupier à Nogent", to: "/taupes-nogent" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Désinsectisation à Nogent : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DesinsectisationNogent;
