import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation Nogent 52 - Intervention 24h, Devis Gratuit";
const DESCRIPTION = "Pigeons sur un balcon ou une toiture à Nogent (52800) ? G&F Nuisibles étudie les accès et propose des protections anti-pigeons. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/depigeonnisation-nogent";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Protégez-vous les balcons à Nogent ?", answer: "Oui, le diagnostic étudie le volume, les points de fixation et les zones utilisées par les oiseaux. Un filet ou une autre solution est proposé selon la configuration, après vérification des autorisations nécessaires." },
  { question: "Les picots conviennent-ils à tous les bâtiments ?", answer: "Non. Ils peuvent limiter le perchage sur certains supports, mais ne ferment pas un volume comme un filet. Le choix dépend des rebords, des accès et des zones occupées." },
  { question: "Que faire si un nid est présent ?", answer: "Signalez-le avant toute pose et ne fermez pas vous-même l’accès. La situation des oiseaux, les règles applicables et les précautions nécessaires doivent être évaluées pour ne pas les emprisonner." },
  { question: "Faut-il prévenir le syndic à Nogent ?", answer: "Oui, si les travaux concernent une façade ou des parties communes. L’accord du propriétaire ou de la copropriété peut être nécessaire, ainsi que des vérifications supplémentaires pour un bâtiment soumis à des contraintes patrimoniales." },
  { question: "Le nettoyage des fientes est-il inclus ?", answer: "Cela dépend du devis. Les surfaces, les volumes, les accès et les mesures de protection sont évalués avant de définir une éventuelle opération de nettoyage et la pose des dispositifs." },
];

const DepigeonnisationNogent = () => {
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
        "@type": "Service", "url": URL, "name": "Dépigeonnisation à Nogent (52800) : protéger les bâtiments", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Nogent", "address": { "@type": "PostalAddress", "postalCode": "52800", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dépigeonnisation", "item": "https://gf-nuisibles.fr/depigeonnisation" },
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
        serviceTitle={"Dépigeonnisation à Nogent (52800) : protéger les bâtiments"}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"PIGEONS SUR VOTRE BALCON OU VOTRE TOITURE À NOGENT ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Des pigeons se posent régulièrement sur un rebord, un balcon ou sous une avancée de toiture à Nogent ? La dépigeonnisation consiste à protéger les zones utilisées par les oiseaux, plutôt qu’à installer le même dispositif sur toute la façade. G&F Nuisibles étudie les bâtiments de Nogent (52800), à Nogent-le-Haut et à Nogent-le-Bas, pour proposer une protection adaptée aux logements, commerces et locaux professionnels."}
        expertise={"L’observation distingue le simple perchage, l’accès à un abri et la présence éventuelle de nids. Filets, picots ou fils tendus répondent à des configurations différentes. Le choix tient compte de la largeur du support, des fixations possibles, de l’entretien et de l’usage du balcon ou de la toiture. Les solutions non létales doivent être posées sans emprisonner les oiseaux ; les autorisations et les contraintes du bâtiment sont vérifiées avant les travaux."}
        method={"Le diagnostic repère les zones occupées, les points d’entrée et les possibilités de travail en hauteur. Le devis décrit la protection retenue et les éventuelles opérations de nettoyage. La pose doit traiter le passage effectivement utilisé et éviter les ouvertures résiduelles. Si des nids ou des oiseaux sont présents, la conduite à tenir est évaluée avant toute fermeture. Les contrôles et l’entretien des dispositifs sont expliqués pour conserver une protection fonctionnelle."}
        localContext={{ title: "Protéger les façades et les accès de Nogent sans généraliser", content: <>
<p>{"Dans Nogent-le-Haut, les abords de la place Charles-de-Gaulle, du musée de la Coutellerie et de l’église Saint-Jean permettent de situer une adresse du centre. Pour votre bâtiment, précisez les corniches, rebords et cours concernés. Ces repères patrimoniaux ne sont pas présentés comme infestés ni comme clients."}</p>
<p>{"À Nogent-le-Bas, autour de l’église Saint-Germain et dans la vallée de la Traire, indiquez si les oiseaux accèdent à un balcon, à un comble ou à un abri. La configuration réelle des ouvertures détermine la protection ; le nom du secteur ne suffit pas à choisir entre filet et picots."}</p>
<p>{"Dans la zone industrielle de Nogent, un bâtiment peut disposer de portes de livraison, de charpentes ou d’avancées de toit. Décrivez les supports occupés et les contraintes d’exploitation de votre local. Une protection doit rester compatible avec les accès, la ventilation et les opérations d’entretien."}</p>
<p>Pour retrouver ces repères, consultez la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://villedenogent52.fr/ma-ville/presentation-de-la-ville" target="_blank" rel="noopener noreferrer">présentation de Nogent par la mairie</a> et son <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://villedenogent52.fr/mes-activites/circuit-du-patrimoine" target="_blank" rel="noopener noreferrer">circuit du patrimoine</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs desservis à Nogent (52800)", intro: "Précisez votre rue, le type de bien et les accès. Ces secteurs situent les demandes et ne sont pas présentés comme infestés. Nogent désigne ici la commune de Haute-Marne, et non Nogent-sur-Marne ou Nogent-le-Rotrou.", items: ["Nogent-le-Haut", "Nogent-le-Bas et vallée de la Traire", "Centre, place Charles-de-Gaulle et musée de la Coutellerie", "Secteur de l’église Saint-Jean", "Secteur de l’église Saint-Germain", "Zone industrielle de Nogent"] }}
        extraSections={[
          { title: "Filets, picots ou fils tendus : choisir selon le support", content: <>
<p>{"Un filet peut fermer l’accès à un volume, sous réserve de fixations adaptées et d’une pose ne laissant aucun oiseau enfermé. Les picots et les fils tendus peuvent limiter le perchage sur certains rebords. Leur pertinence dépend du support, de la pression des oiseaux et des zones voisines accessibles."}</p>
<p>{"Une façade en copropriété ou soumise à des contraintes patrimoniales peut nécessiter l’accord du propriétaire, du syndic ou des services compétents. Les monuments cités servent uniquement à situer Nogent ; aucune autorisation de travaux sur un bâtiment protégé n’est présumée."}</p>
          </> },
          { title: "Fientes, entretien et préparation de la visite", content: <>
<p>{"Ne balayez pas à sec des accumulations de fientes sans précautions : la poussière doit être évitée. Limitez l’accès à la zone souillée et demandez les consignes adaptées. Un nettoyage éventuel est à définir selon les surfaces, le volume et les moyens de protection nécessaires."}</p>
<p>{"Pour le devis, fournissez des photos prises depuis un endroit sûr, les dimensions approximatives et les accès disponibles. Signalez la présence de nids avant la pose. Demandez quelles opérations sont incluses, comment contrôler les fixations et quand organiser l’entretien ; aucune garantie générale ne remplace ces conditions précises."}</p>
          </> },
          { title: "Votre service à Nogent et dans les villes du secteur", content: <>
<p>Découvrez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation">service dépigeonnisation en Haute-Marne</Link> pour connaître les méthodes et les prestations. Pour votre adresse à Nogent, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Pour une adresse dans une autre commune, consultez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-langres">Dépigeonnisation à Langres</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-chaumont">Dépigeonnisation à Chaumont</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-chalindrey">Dépigeonnisation à Chalindrey</Link>. Elles présentent les prestations dans ces villes, distinctes de Nogent. Retrouvez également notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link> pour situer votre demande.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Nogent", items: [
          { label: "Dépigeonnisation à Langres", to: "/depigeonnisation-langres" },
          { label: "Dépigeonnisation à Chaumont", to: "/depigeonnisation-chaumont" },
          { label: "Dépigeonnisation à Chalindrey", to: "/depigeonnisation-chalindrey" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Nogent", to: "/deratisation-nogent" },
          { label: "Désinsectisation à Nogent", to: "/desinsectisation-nogent" },
          { label: "Guêpes et frelons à Nogent", to: "/guepes-frelons-nogent" },
          { label: "Taupier à Nogent", to: "/taupes-nogent" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dépigeonnisation à Nogent : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DepigeonnisationNogent;
