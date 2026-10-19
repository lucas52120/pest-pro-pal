import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Destruction nid Guêpes & Frelons Nogent 52 - Intervention 24h";
const DESCRIPTION = "Nid de guêpes ou de frelons à Nogent (52800) ? G&F Nuisibles évalue son accès et organise un traitement adapté. Appelez pour un diagnostic et un devis gratuits.";
const URL = "https://gf-nuisibles.fr/guepes-frelons-nogent";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Intervenez-vous à Nogent-le-Haut et Nogent-le-Bas ?", answer: "Oui, ces deux secteurs de Nogent sont desservis. Précisez l’adresse, l’emplacement du nid et les possibilités d’accès depuis le sol, sans vous approcher du refuge." },
  { question: "Pouvez-vous traiter un nid sous les tuiles ?", answer: "Une évaluation de l’accès est nécessaire. Un nid caché dans la toiture ne peut pas toujours être retiré physiquement ; les opérations possibles et les consignes sont précisées avant le traitement." },
  { question: "Faut-il fermer le trou d’entrée du nid ?", answer: "Non, ne l’obstruez pas avant avis professionnel. Les insectes pourraient chercher une autre sortie. Gardez vos distances et évitez toute manipulation du support." },
  { question: "Comment distinguer abeilles et frelons ?", answer: "Une photo prise à distance peut aider à l’identification, mais ne vous exposez pas pour l’obtenir. Une colonie d’abeilles appelle une prise en charge différente, parfois avec un apiculteur." },
  { question: "Quel prix pour un nid de frelons à Nogent ?", answer: "Le devis dépend de l’emplacement, de la hauteur, des obstacles et des moyens d’accès. Décrivez la situation par téléphone pour préparer le diagnostic et connaître les prestations proposées." },
];

const GuepesFrelonsNogent = () => {
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
        "@type": "Service", "url": URL, "name": "Nid de guêpes et frelons à Nogent (52800)", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Nogent", "address": { "@type": "PostalAddress", "postalCode": "52800", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Guêpes et frelons", "item": "https://gf-nuisibles.fr/guepes-frelons" },
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
        serviceTitle={"Nid de guêpes et frelons à Nogent (52800)"}
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"UN NID DE GUÊPES OU DE FRELONS À NOGENT ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Des allées et venues sous les tuiles, dans un coffre de volet ou vers un arbre de votre jardin à Nogent peuvent révéler un nid. Ne cherchez pas à ouvrir le refuge pour vérifier. G&F Nuisibles intervient pour les nids de guêpes, de frelons européens et de frelons asiatiques à Nogent (52800), en Haute-Marne. La demande commence par la localisation, la hauteur estimée et les possibilités d’accès, sans vous exposer pour obtenir une photo."}
        expertise={"L’identification de l’insecte et la configuration du nid orientent la prestation. Une activité autour des fleurs ne signifie pas nécessairement qu’un nid se trouve à proximité. Une colonie d’abeilles ne doit pas être confondue avec des guêpes ou des frelons : selon la situation, un apiculteur peut être l’interlocuteur adapté. Les consignes de distance et de protection sont données avant l’intervention ; aucune manipulation domestique du nid n’est recommandée."}
        method={"L’évaluation porte sur le refuge, l’accès en hauteur, les passages fréquentés et les espaces attenants. Le périmètre de travail est organisé avant le traitement adapté à l’espèce. Un nid accessible et un nid caché dans une toiture ne demandent pas les mêmes moyens. Le devis précise les opérations prévues ; le retrait physique n’est pas systématique lorsque le nid est inaccessible. Les consignes après traitement et les conditions éventuelles de suivi sont expliquées."}
        localContext={{ title: "Toitures, dépendances et jardins à Nogent : situer le nid", content: <>
<p>{"À Nogent-le-Haut, autour de l’église Saint-Jean et du musée de la Coutellerie, précisez si l’activité concerne une toiture donnant sur la rue, une cour ou une dépendance. L’accès au bâtiment et les zones de passage doivent être décrits pour préparer la visite, sans monter sur une échelle près du nid."}</p>
<p>{"À Nogent-le-Bas, dans la vallée de la Traire, un nid signalé dans un jardin ou un arbre demande de préciser la hauteur et la distance des lieux fréquentés. La proximité du cours d’eau n’établit pas la présence d’une espèce particulière. Le diagnostic repose sur les observations de votre propriété."}</p>
<p>{"La Côte Gueudin est un repère naturel de Nogent, tandis que la place Charles-de-Gaulle situe le centre. Ces noms permettent de décrire le secteur d’une demande : ils ne désignent pas des sites traités ou infestés. Pour un nid dans un espace public, signalez sa localisation au gestionnaire plutôt que d’intervenir vous-même."}</p>
<p>Pour retrouver ces repères, consultez la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://villedenogent52.fr/ma-ville/presentation-de-la-ville" target="_blank" rel="noopener noreferrer">présentation de Nogent par la mairie</a> et son <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://villedenogent52.fr/mes-activites/circuit-du-patrimoine" target="_blank" rel="noopener noreferrer">circuit du patrimoine</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs desservis à Nogent (52800)", intro: "Précisez votre rue, le type de bien et les accès. Ces secteurs situent les demandes et ne sont pas présentés comme infestés. Nogent désigne ici la commune de Haute-Marne, et non Nogent-sur-Marne ou Nogent-le-Rotrou.", items: ["Nogent-le-Haut", "Nogent-le-Bas et vallée de la Traire", "Centre, place Charles-de-Gaulle et musée de la Coutellerie", "Secteur de l’église Saint-Jean", "Secteur de l’église Saint-Germain", "Zone industrielle de Nogent"] }}
        extraSections={[
          { title: "Que faire en attendant une intervention à Nogent ?", content: <>
<p>{"Éloignez les enfants et les animaux de la zone d’activité. N’obstruez pas l’entrée d’un nid dans un mur ou un volet : cela peut modifier les voies de sortie. Évitez les vibrations, l’eau, le feu et les sprays à proximité du refuge ; ne tentez pas de décrocher un nid."}</p>
<p>{"Si une photo peut être prise depuis une distance sûre, elle peut aider à identifier l’insecte. Sinon, décrivez simplement les allées et venues et le support. En cas de réaction grave après une piqûre, appelez le 15 ou le 112 : l’intervention sur le nid ne remplace pas les soins médicaux."}</p>
          </> },
          { title: "Hauteur, accès et devis : les informations utiles", content: <>
<p>{"Indiquez si le nid se trouve sous une toiture, dans un arbre, un abri ou un coffre de volet. Signalez les câbles, les obstacles et l’accès à la cour. La hauteur approximative suffit pour préparer l’échange ; ne prenez pas de risque pour la mesurer précisément."}</p>
<p>{"Le coût dépend des moyens d’accès, de l’emplacement et des opérations retenues. Le créneau et les prestations sont confirmés après échange. Demandez les consignes après traitement et ce qui est prévu si une activité persiste : aucun délai ni prix universel ne correspond à tous les nids."}</p>
          </> },
          { title: "Votre service à Nogent et dans les villes du secteur", content: <>
<p>Découvrez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons">service guêpes et frelons en Haute-Marne</Link> pour connaître les méthodes et les prestations. Pour votre adresse à Nogent, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Pour une adresse dans une autre commune, consultez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-langres">Guêpes et frelons à Langres</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-chaumont">Guêpes et frelons à Chaumont</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-chalindrey">Guêpes et frelons à Chalindrey</Link>. Elles présentent les prestations dans ces villes, distinctes de Nogent. Retrouvez également notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link> pour situer votre demande.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Nogent", items: [
          { label: "Guêpes et frelons à Langres", to: "/guepes-frelons-langres" },
          { label: "Guêpes et frelons à Chaumont", to: "/guepes-frelons-chaumont" },
          { label: "Guêpes et frelons à Chalindrey", to: "/guepes-frelons-chalindrey" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Nogent", to: "/deratisation-nogent" },
          { label: "Désinsectisation à Nogent", to: "/desinsectisation-nogent" },
          { label: "Dépigeonnisation à Nogent", to: "/depigeonnisation-nogent" },
          { label: "Taupier à Nogent", to: "/taupes-nogent" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Guêpes et frelons à Nogent : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default GuepesFrelonsNogent;
