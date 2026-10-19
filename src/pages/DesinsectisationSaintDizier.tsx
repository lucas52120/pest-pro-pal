import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation Saint-Dizier 52 - Intervention 24h";
const DESCRIPTION = "Cafards, punaises de lit ou puces à Saint-Dizier (52100) ? G&F Nuisibles propose un traitement adapté après identification. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/desinsectisation-saint-dizier";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Traitez-vous les punaises de lit à Saint-Dizier ?", answer: "Oui, une demande concernant des punaises de lit peut faire l’objet d’un diagnostic. Les indices sur la literie et le mobilier sont recherchés ; les piqûres seules ne suffisent pas à conclure. La préparation et les passages dépendent du protocole retenu." },
  { question: "Intervenez-vous à La Noue et à Gigny ?", answer: "Oui, ces secteurs font partie de Saint-Dizier et sont desservis, comme le Vert-Bois, Marnaval et le centre-ville. Décrivez les pièces touchées et précisez l’adresse pour préparer votre rendez-vous." },
  { question: "Dois-je traiter mon animal contre les puces ?", answer: "Signalez sa présence lors du diagnostic et demandez conseil à un vétérinaire pour sa prise en charge. Traiter les locaux ne remplace pas les soins adaptés à l’animal ; n’utilisez jamais sur lui un produit destiné aux surfaces." },
  { question: "Peut-on rester dans le logement pendant une désinsectisation ?", answer: "Cela dépend du procédé et des produits. Les consignes de protection, d’éloignement, d’aération et de réintégration sont données avant la visite. Suivez ces recommandations spécifiques plutôt qu’une durée générale." },
  { question: "Faut-il prévenir le syndic en cas de cafards ?", answer: "Lorsque plusieurs logements ou des parties communes sont concernés, prévenez le bailleur ou le syndic. L’accès aux espaces techniques et une action coordonnée peuvent être nécessaires pour comprendre la circulation des insectes." },
];

const DesinsectisationSaintDizier = () => {
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
        "@type": "Service", "url": URL, "name": "Désinsectisation à Saint-Dizier (52100) : cafards, punaises et puces", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Saint-Dizier", "address": { "@type": "PostalAddress", "postalCode": "52100", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Désinsectisation", "item": "https://gf-nuisibles.fr/desinsectisation" },
        { "@type": "ListItem", "position": 3, "name": "Saint-Dizier", "item": URL }
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
        city="Saint-Dizier"
        department="Haute-Marne (52)"
        serviceTitle={"Désinsectisation à Saint-Dizier (52100) : cafards, punaises et puces"}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"INSECTES DANS VOTRE LOGEMENT À SAINT-DIZIER ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Des insectes dans une cuisine, des traces sur la literie ou des piqûres répétées à Saint-Dizier ? La désinsectisation commence par l’identification, et non par un traitement identique pour tous les insectes. G&F Nuisibles dessert les logements et locaux professionnels de Saint-Dizier (52100), du centre au Vert-Bois et à Marnaval. Une photo nette et les endroits où vous observez le problème peuvent aider à préparer la visite."}
        expertise={"Depuis Montsaon, nous organisons un diagnostic adapté à l’insecte et à l’usage des pièces. Un cafard dans une réserve, des punaises de lit dans une chambre et des puces dans un logement avec animaux nécessitent des recherches différentes. Signalez les traitements déjà tentés, les enfants et les animaux. Les recommandations de préparation et de réintégration dépendent du procédé : aucun traitement ne doit être présenté comme sans risque."}
        method={"L’examen porte sur les refuges, les surfaces et les voies de circulation. Le devis décrit le protocole proposé, la préparation et le suivi. Des applications ciblées de gel ou d’autres traitements professionnels sont envisagées selon le diagnostic. Le rangement, le lavage des textiles et le nettoyage font l’objet de consignes propres à l’insecte, sans multiplier les pulvérisations au hasard."}
        localContext={{ title: "Adapter la désinsectisation aux logements de Saint-Dizier", content: <>
<p>{"Au Vert-Bois, à La Noue et à Gigny, précisez si vous habitez un appartement, une maison ou un logement avec des espaces partagés. Les passages techniques et les parties communes peuvent demander un échange avec le bailleur ou le syndic. Le nom du quartier ne permet pas de présumer de la présence d’insectes."}</p>
<p>{"Dans le centre, autour de l’église Notre-Dame et du château, une demande peut concerner un commerce autant qu’un logement. À Marnaval, signalez les dépendances ou les réserves attenantes. Ces repères décrivent les secteurs desservis ; ni les monuments ni les établissements voisins ne sont présentés comme clients ou comme infestés."}</p>
<p>{"Pour une adresse dans le secteur des Petites Halles, précisez l’existence de réserves ou de pièces attenantes. La recherche porte sur votre local, sans supposer qu’un site voisin soit concerné."}</p>
<p>Pour situer les repères patrimoniaux, consultez le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.lacduder.com/offres/au-fil-des-rues-de-saint-dizier-saint-dizier-fr-5122370/" target="_blank" rel="noopener noreferrer">parcours de Saint-Dizier présenté par l’office de tourisme du lac du Der</a> et les <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://reveler.saint-dizier.fr/les-lieux/" target="_blank" rel="noopener noreferrer">lieux présentés par la Ville de Saint-Dizier</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs desservis à Saint-Dizier (52100)", intro: "Indiquez votre rue, le type de bien et les accès. Bettancourt-la-Ferrée et Chancenay sont des communes voisines, distinctes de Saint-Dizier ; les quartiers cités ne sont pas présentés comme infestés.", items: ["Centre-ville, église Notre-Dame et château", "Vert-Bois", "La Noue", "Gigny", "Marnaval", "Secteur gare, Marne et canal"] }}
        extraSections={[
          { title: "Literie, cuisine ou animal de compagnie : des recherches distinctes", content: <>
<p>{"Des piqûres ne suffisent pas à diagnostiquer des punaises de lit. L’inspection recherche aussi les traces sur le sommier, les coutures du matelas et le mobilier proche. Ne transportez pas une literie potentiellement infestée vers une autre pièce sans recommandation : cela peut étendre le problème."}</p>
<p>{"Pour les cafards, les points d’eau, les appareils et les réserves sont examinés. Pour les puces, la présence d’animaux doit être signalée ; leur prise en charge peut nécessiter un avis vétérinaire, distinct du traitement des locaux. L’identification évite de choisir un produit inadapté à la situation."}</p>
          </> },
          { title: "Préparer la visite et organiser le suivi à Saint-Dizier", content: <>
<p>{"Notez les premières observations, les pièces concernées et les produits appliqués. Attendez les consignes avant de vider les meubles ou de laver toutes les surfaces : la préparation dépend de l’espèce et de la méthode. Dans un commerce, indiquez les horaires d’activité et les contraintes de protection des denrées."}</p>
<p>{"Le devis précise les zones à traiter et les passages nécessaires selon le diagnostic. Demandez les délais de réintégration, l’aération et les consignes après traitement, notamment avant nettoyage. Le prix dépend du périmètre et du suivi ; un diagnostic et un devis gratuits permettent de définir ce qui est réellement inclus."}</p>
          </> },
          { title: "Votre service à Saint-Dizier et dans le nord de la Haute-Marne", content: <>
<p>Découvrez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation">service désinsectisation en Haute-Marne</Link> pour les méthodes et les prestations. Pour votre adresse à Saint-Dizier, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez votre diagnostic et votre devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Vous êtes dans une autre commune du secteur ? Retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-wassy">Désinsectisation à Wassy</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-joinville">Désinsectisation à Joinville</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-montier-en-der">Désinsectisation à Montier-en-Der</Link>. Consultez également notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link>.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Saint-Dizier", items: [
          { label: "Désinsectisation à Wassy", to: "/desinsectisation-wassy" },
          { label: "Désinsectisation à Joinville", to: "/desinsectisation-joinville" },
          { label: "Désinsectisation à Montier-en-Der", to: "/desinsectisation-montier-en-der" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Saint-Dizier", to: "/deratisation-saint-dizier" },
          { label: "Guêpes et frelons à Saint-Dizier", to: "/guepes-frelons-saint-dizier" },
          { label: "Dépigeonnisation à Saint-Dizier", to: "/depigeonnisation-saint-dizier" },
          { label: "Taupier à Saint-Dizier", to: "/taupes-saint-dizier" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Désinsectisation à Saint-Dizier : appelez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DesinsectisationSaintDizier;
