import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation Saint-Dizier 52 - Intervention 24h, Devis Gratuit";
const DESCRIPTION = "Rats ou souris à Saint-Dizier (52100) ? G&F Nuisibles adapte le traitement aux logements et locaux professionnels. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/deratisation-saint-dizier";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Intervenez-vous au Vert-Bois et à Marnaval ?", answer: "Oui, G&F Nuisibles dessert ces secteurs de Saint-Dizier ainsi que La Noue, Gigny et le centre-ville. Indiquez l’adresse, les zones touchées et les accès ; le créneau est confirmé lors de votre demande depuis notre base à Montsaon." },
  { question: "La proximité de la Marne suffit-elle à expliquer la présence de rats ?", answer: "Non. Les abords d’un cours d’eau font partie de l’environnement, mais la présence de rongeurs doit être constatée par des indices. Le diagnostic recherche les accès, les refuges et les ressources propres à votre bâtiment." },
  { question: "Que faire si plusieurs appartements sont concernés ?", answer: "Informez le bailleur ou le syndic pour organiser l’accès aux espaces communs. Une inspection coordonnée peut être nécessaire pour comprendre les passages entre logements, caves et locaux techniques." },
  { question: "Les postes d’appâtage suppriment-ils tous les risques ?", answer: "Non. Les postes sécurisés contribuent à limiter l’accès aux appâts, mais les consignes restent indispensables. Ne les ouvrez pas ou ne les déplacez pas ; signalez enfants et animaux avant le passage." },
  { question: "Combien coûte une dératisation à Saint-Dizier ?", answer: "Le prix dépend des zones à examiner, de l’espèce, de l’étendue du problème et du suivi. Le diagnostic et le devis sont gratuits. Demandez quelles visites et quelles actions de sécurisation sont incluses." },
];

const DeratisationSaintDizier = () => {
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
        "@type": "Service", "url": URL, "name": "Dératisation à Saint-Dizier (52100) : rats et souris", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Saint-Dizier", "address": { "@type": "PostalAddress", "postalCode": "52100", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dératisation", "item": "https://gf-nuisibles.fr/deratisation" },
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
        serviceTitle={"Dératisation à Saint-Dizier (52100) : rats et souris"}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"RATS OU SOURIS À SAINT-DIZIER ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Une réserve alimentaire avec des emballages grignotés, des déjections dans un garage à Marnaval ou des bruits dans un appartement du Vert-Bois ? G&F Nuisibles propose une dératisation à Saint-Dizier (52100), dans le nord de la Haute-Marne. Les traces, les accès et les usages des pièces sont examinés avant de choisir une méthode. Rats et souris ne fréquentent pas toujours les mêmes passages ; il ne suffit pas de poser un appât là où un animal a été aperçu."}
        expertise={"L’entreprise est basée à Montsaon et dessert Saint-Dizier, sans agence locale revendiquée. Le diagnostic distingue les logements individuels, les espaces communs et les locaux professionnels. Dans une activité alimentaire, les conditions de stockage et les besoins de surveillance associés à la démarche HACCP sont pris en compte. Les enfants, les animaux et les denrées doivent être signalés pour organiser des dispositifs et des précautions adaptés."}
        method={"L’inspection recherche l’espèce probable, les voies de circulation et les sources de nourriture ou d’abri. Le devis précise le périmètre, les dispositifs proposés et le suivi nécessaire. Des pièges mécaniques et, si la situation le justifie, des appâts professionnels en postes sécurisés peuvent être retenus. Les points d’entrée à corriger sont expliqués ; les travaux et passages inclus sont détaillés plutôt que supposés compris."}
        localContext={{ title: "Centre bragard, Marnaval et Marne : examiner les accès réels", content: <>
<p>{"Dans le centre de Saint-Dizier, l’église Notre-Dame et le château servent à situer votre adresse. Pour un logement proche de ces repères, l’examen peut concerner une cave, un local de déchets ou un passage de canalisations. Ces lieux patrimoniaux ne sont ni des références clients ni des sites présentés comme infestés."}</p>
<p>{"À Marnaval, l’histoire industrielle de la ville ne permet pas de conclure qu’un atelier ou un entrepôt abrite des rats. À La Noue, à Gigny ou au Vert-Bois, le diagnostic repose également sur les indices propres au bâtiment. La Marne et le canal entre Champagne et Bourgogne sont des éléments du paysage local, pas une preuve de présence de rongeurs dans une maison proche des berges."}</p>
<p>{"Pour une adresse près des Petites Halles ou de la Tour Miko, indiquez simplement la rue et l’usage du local. Le diagnostic recherche les accès de votre bien, sans associer ces lieux publics à une infestation."}</p>
<p>Pour situer les repères patrimoniaux, consultez le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.lacduder.com/offres/au-fil-des-rues-de-saint-dizier-saint-dizier-fr-5122370/" target="_blank" rel="noopener noreferrer">parcours de Saint-Dizier présenté par l’office de tourisme du lac du Der</a> et les <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://reveler.saint-dizier.fr/les-lieux/" target="_blank" rel="noopener noreferrer">lieux présentés par la Ville de Saint-Dizier</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs desservis à Saint-Dizier (52100)", intro: "Indiquez votre rue, le type de bien et les accès. Bettancourt-la-Ferrée et Chancenay sont des communes voisines, distinctes de Saint-Dizier ; les quartiers cités ne sont pas présentés comme infestés.", items: ["Centre-ville, église Notre-Dame et château", "Vert-Bois", "La Noue", "Gigny", "Marnaval", "Secteur gare, Marne et canal"] }}
        extraSections={[
          { title: "Quels indices communiquer avant une dératisation ?", content: <>
<p>{"Notez les pièces touchées, les horaires des bruits et l’emplacement des déjections ou des dégâts. Prenez des photos sans manipuler les traces. Une odeur ou un bruit seul ne permet pas d’identifier l’animal ; décrivez aussi les observations dans les dépendances et les pièces voisines."}</p>
<p>{"Ne balayez pas à sec et n’aspirez pas des déjections de rongeurs : demandez les précautions adaptées au nettoyage. Protégez les aliments, fermez les déchets et signalez les produits déjà utilisés. Les appâts en vrac ou les pièges dispersés sans repérage peuvent exposer les personnes et gêner le diagnostic."}</p>
          </> },
          { title: "Copropriétés et activités professionnelles à Saint-Dizier", content: <>
<p>{"Au Vert-Bois ou dans un immeuble du centre, l’accès aux caves et aux locaux techniques peut nécessiter un échange avec le bailleur ou le syndic. Si plusieurs logements sont concernés, une approche coordonnée évite de traiter une pièce sans examiner les passages partagés."}</p>
<p>{"Dans un commerce, un atelier ou une réserve, précisez les contraintes de livraison, de nettoyage et d’accès. Le suivi dépend du risque observé et de l’usage des lieux. Le devis gratuit explique les passages, les mesures préventives et les éventuels travaux ; aucun délai d’élimination ni tarif universel n’est annoncé sans diagnostic."}</p>
          </> },
          { title: "Votre service à Saint-Dizier et dans le nord de la Haute-Marne", content: <>
<p>Découvrez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation">service dératisation en Haute-Marne</Link> pour les méthodes et les prestations. Pour votre adresse à Saint-Dizier, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez votre diagnostic et votre devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Vous êtes dans une autre commune du secteur ? Retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-wassy">Dératisation à Wassy</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-joinville">Dératisation à Joinville</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-montier-en-der">Dératisation à Montier-en-Der</Link>. Consultez également notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link>.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Saint-Dizier", items: [
          { label: "Dératisation à Wassy", to: "/deratisation-wassy" },
          { label: "Dératisation à Joinville", to: "/deratisation-joinville" },
          { label: "Dératisation à Montier-en-Der", to: "/deratisation-montier-en-der" },
        ] }}
        relatedLinks={[
          { label: "Guêpes et frelons à Saint-Dizier", to: "/guepes-frelons-saint-dizier" },
          { label: "Dépigeonnisation à Saint-Dizier", to: "/depigeonnisation-saint-dizier" },
          { label: "Taupier à Saint-Dizier", to: "/taupes-saint-dizier" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dératisation à Saint-Dizier : appelez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DeratisationSaintDizier;
