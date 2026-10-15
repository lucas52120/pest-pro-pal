import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation à Joinville (52300) : cafards et punaises | G&F Nuisibles";
const DESCRIPTION = "Cafards, punaises de lit ou puces à Joinville (52300) ? G&F Nuisibles identifie les insectes et propose un traitement adapté. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/desinsectisation-joinville";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Traitez-vous les punaises de lit à Joinville ?", answer: "Oui, le diagnostic recherche les indices sur la literie et le mobilier. Les piqûres seules ne permettent pas de conclure ; le protocole et le suivi dépendent des observations." },
  { question: "Desservez-vous les logements de la vieille ville ?", answer: "Oui, les logements du centre historique de Joinville sont desservis. Précisez les pièces touchées, les accès et la présence de parties communes pour préparer la visite." },
  { question: "Peut-on rester dans le logement pendant le traitement ?", answer: "Cela dépend de la méthode et des produits. Les consignes d’éloignement, de protection, d’aération et de réintégration sont communiquées avant la prestation." },
  { question: "Faut-il traiter mon animal contre les puces ?", answer: "Demandez conseil à un vétérinaire. Traiter le logement ne remplace pas la prise en charge de l’animal ; n’appliquez jamais sur lui un produit destiné aux surfaces." },
  { question: "Le devis prévoit-il plusieurs passages ?", answer: "Le nombre de passages dépend de l’insecte, des zones concernées et du protocole. Le devis précise le suivi retenu après le diagnostic, sans imposer un nombre identique à toutes les situations." },
];

const DesinsectisationJoinville = () => {
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
        "@type": "Service", "url": URL, "name": "Désinsectisation à Joinville (52300) : cafards et punaises", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Joinville", "address": { "@type": "PostalAddress", "postalCode": "52300", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Désinsectisation", "item": "https://gf-nuisibles.fr/desinsectisation" },
        { "@type": "ListItem", "position": 3, "name": "Joinville", "item": URL }
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
        city="Joinville"
        department="Haute-Marne (52)"
        serviceTitle={"Désinsectisation à Joinville (52300) : cafards et punaises"}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"CAFARDS, PUNAISES OU PUCES DANS VOTRE LOGEMENT À JOINVILLE ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Un insecte observé dans une cuisine ou des traces sur la literie à Joinville ne justifient pas une pulvérisation générale sans identification. G&F Nuisibles propose une désinsectisation à Joinville (52300) pour les particuliers et les professionnels. Le diagnostic distingue les cafards, les punaises de lit et les puces afin de rechercher leurs refuges respectifs. Décrivez les pièces concernées, les premières observations et les traitements déjà tentés pour préparer une réponse adaptée à votre logement ou à votre activité."}
        expertise={"Une punaise de lit se recherche dans la literie et le mobilier proche, tandis que les cafards nécessitent notamment l’examen des points d’eau, des appareils et des zones de stockage. En cas de puces, la présence d’animaux doit être signalée ; leur prise en charge relève aussi d’un conseil vétérinaire. Les consignes de préparation et de protection tiennent compte des occupants. Aucun traitement des locaux ne doit être présenté comme inoffensif ou comme un substitut aux soins d’un animal."}
        method={"L’identification précède le choix du protocole. Le devis indique les zones à traiter, les préparatifs et le suivi retenu selon l’insecte. Des applications ciblées de gel ou d’autres procédés professionnels peuvent être envisagés après inspection. Les consignes de lavage, de rangement et de nettoyage sont propres à la situation : laver toutes les surfaces avant la visite ou multiplier les sprays peut compliquer le repérage et disperser certains insectes."}
        localContext={{ title: "À Joinville, adapter la visite au logement et aux espaces partagés", content: <>
<p>{"Autour de l’église Notre-Dame et de l’Auditoire de Justice, dans la vieille ville, indiquez si vous occupez une maison, un appartement ou un logement au-dessus d’un commerce. Une cour commune, des réserves attenantes ou des passages techniques peuvent nécessiter une inspection coordonnée avec le propriétaire ou le syndic."}</p>
<p>{"Le quai des Peceaux, le quai des Mailles et le pont du Poncelot situent des adresses dans le tissu urbain de Joinville. La présence d’insectes se vérifie dans vos pièces : le voisinage de la Marne ne permet pas de diagnostiquer des punaises de lit ou des cafards."}</p>
<p>{"Pour une demande dans le secteur du château du Grand Jardin, décrivez l’usage du bien et les pièces où les observations se répètent. Les monuments cités sont uniquement des repères locaux ; aucun site patrimonial ni établissement voisin n’est présenté comme infesté ou client."}</p>
<p>Pour retrouver ces repères, consultez la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.bienvenue-hautemarne.fr/villes-cites-caractere/joinville/" target="_blank" rel="noopener noreferrer">présentation de Joinville par Haute-Marne Attractivité</a> et le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://tourisme-joinville.com/" target="_blank" rel="noopener noreferrer">site de l’office de tourisme de Joinville</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs desservis à Joinville (52300)", intro: "Précisez votre rue, le type de bien et les accès disponibles. Les noms ci-dessous sont des secteurs et des repères de Joinville en Haute-Marne, et non des lieux présumés infestés. Ils ne désignent pas Joinville-le-Pont.", items: ["Vieille ville et centre historique", "Secteur de l’église Notre-Dame et de l’Auditoire de Justice", "Quai des Peceaux", "Quai des Mailles et pont du Poncelot", "Secteur du château du Grand Jardin", "Abords de la colline de l’ancien château"] }}
        extraSections={[
          { title: "Piqûres et traces : ne pas conclure trop vite", content: <>
<p>{"Des piqûres seules ne suffisent pas à identifier les punaises de lit. L’examen recherche aussi les insectes, les traces dans les coutures du matelas, sur le sommier et dans les meubles voisins. Évitez de transporter une literie suspecte dans une autre chambre sans recommandation."}</p>
<p>{"Pour les cafards, notez les observations près des appareils et des points d’eau. Si vous suspectez des puces, signalez les animaux et les lieux où ils se reposent. Une photo exploitable et un historique des observations sont plus utiles qu’une succession de produits appliqués sans identification."}</p>
          </> },
          { title: "Préparation et suivi pour un logement ou un local à Joinville", content: <>
<p>{"Attendez les consignes avant de vider les meubles, de déplacer le mobilier ou de lancer un lavage complet des textiles. La préparation dépend du diagnostic. Signalez les enfants, les animaux et les personnes nécessitant des précautions particulières afin d’organiser la protection des occupants."}</p>
<p>{"Dans un commerce, précisez les contraintes de stockage, de protection des denrées et les horaires d’activité. Le devis indique les passages envisagés et les consignes de réintégration, d’aération et de nettoyage. Lorsque plusieurs logements sont touchés, une coordination avec le bailleur ou le syndic peut être nécessaire."}</p>
          </> },
          { title: "Votre service à Joinville et dans les villes du secteur", content: <>
<p>Découvrez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation">service désinsectisation en Haute-Marne</Link> pour connaître les méthodes et les prestations. Pour votre adresse à Joinville, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Pour une adresse dans une autre commune, consultez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-wassy">Désinsectisation à Wassy</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-froncles">Désinsectisation à Froncles</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-saint-dizier">Désinsectisation à Saint-Dizier</Link>. Elles présentent les prestations dans ces villes, distinctes de Joinville. Retrouvez également notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link> pour situer votre demande.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Joinville", items: [
          { label: "Désinsectisation à Wassy", to: "/desinsectisation-wassy" },
          { label: "Désinsectisation à Froncles", to: "/desinsectisation-froncles" },
          { label: "Désinsectisation à Saint-Dizier", to: "/desinsectisation-saint-dizier" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Joinville", to: "/deratisation-joinville" },
          { label: "Guêpes et frelons à Joinville", to: "/guepes-frelons-joinville" },
          { label: "Dépigeonnisation à Joinville", to: "/depigeonnisation-joinville" },
          { label: "Taupier à Joinville", to: "/taupes-joinville" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Désinsectisation à Joinville : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DesinsectisationJoinville;
