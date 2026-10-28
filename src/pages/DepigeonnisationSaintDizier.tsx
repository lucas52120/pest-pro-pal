import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation Saint-Dizier 52 - Intervention 24h, Devis Gratuit";
const DESCRIPTION = "Pigeons sur un balcon, une toiture ou un atelier à Saint-Dizier (52100) ? G&F Nuisibles étudie les protections adaptées. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/depigeonnisation-saint-dizier";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Quelle protection choisir pour un balcon au Vert-Bois ?", answer: "Le choix dépend des ouvertures, des appuis et des fixations possibles. Un filet peut fermer un volume ; les picots et fils tendus ciblent certains points de perchage. Le diagnostic permet de préciser le périmètre adapté." },
  { question: "Faut-il l’accord du syndic pour une protection anti-pigeons ?", answer: "Selon les travaux et les parties concernées, l’accord du syndic, du propriétaire ou de la copropriété peut être nécessaire. Vérifiez ces conditions avant la pose, notamment pour une fixation sur façade ou une partie commune." },
  { question: "Peut-on protéger un atelier à Marnaval ?", answer: "Oui, une demande pour un atelier ou un volume professionnel à Marnaval peut faire l’objet d’une étude. Les dimensions, les ouvertures, les accès de travail et les contraintes d’activité orientent le choix de la protection." },
  { question: "Que faire en présence d’un nid occupé ?", answer: "Ne fermez pas les accès et ne déplacez pas le nid de votre propre initiative. Signalez les œufs ou les oisillons avant le diagnostic ; l’espèce et les obligations applicables doivent être vérifiées avant d’agir." },
  { question: "Le nettoyage des fientes est-il toujours inclus ?", answer: "Non, il ne faut pas le supposer. Les prestations de nettoyage éventuelles et les surfaces concernées sont précisées dans le devis. Le dispositif, les moyens d’accès et l’état du site déterminent le périmètre proposé." },
];

const DepigeonnisationSaintDizier = () => {
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
        "@type": "Service", "url": URL, "name": "Dépigeonnisation à Saint-Dizier (52100) : balcons et bâtiments", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Saint-Dizier", "address": { "@type": "PostalAddress", "postalCode": "52100", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dépigeonnisation", "item": "https://gf-nuisibles.fr/depigeonnage" },
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
        serviceTitle={"Dépigeonnisation à Saint-Dizier (52100) : balcons et bâtiments"}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"PIGEONS SUR VOTRE BÂTIMENT À SAINT-DIZIER ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Des fientes sur des appuis de fenêtres, des pigeons dans un volume abrité ou des accès répétés à une toiture ? La dépigeonnisation à Saint-Dizier (52100) vise à protéger les zones sensibles avec une solution adaptée à leur configuration. G&F Nuisibles étudie les lieux de perchage et les ouvertures avant de proposer des filets, des picots ou des fils tendus. Un dispositif posé sur un seul rebord ne protège pas nécessairement toute la façade."}
        expertise={"L’entreprise dessert Saint-Dizier depuis Montsaon pour les logements, copropriétés et locaux professionnels. L’état du support, les moyens d’accès et l’entretien sont examinés avec l’usage du bâtiment. Les dispositifs physiques non létaux sont privilégiés selon la configuration. Si un nid, des œufs ou des oisillons sont présents, l’espèce et les obligations applicables doivent être vérifiées avant toute fermeture d’accès."}
        method={"Le diagnostic repère les zones utilisées par les oiseaux et les possibilités de fixation. Le devis détaille les surfaces protégées, le dispositif et les prestations éventuelles de nettoyage. Après pose, les points de passage sont contrôlés. Les limites de l’installation et les besoins d’entretien sont expliqués : l’objectif est une protection cohérente, pas une promesse de disparition définitive de tous les pigeons du voisinage."}
        localContext={{ title: "Balcons du Vert-Bois et volumes professionnels de Marnaval", content: <>
<p>{"Dans une copropriété du Vert-Bois, de La Noue ou de Gigny, distinguez votre balcon privatif des parties communes. L’accord du propriétaire ou du syndic peut être nécessaire avant une fixation sur façade. Dans le centre, près de l’église Notre-Dame ou du château, vérifiez aussi les éventuelles contraintes d’aspect extérieur ou de secteur protégé auprès du service urbanisme."}</p>
<p>{"À Marnaval, un atelier ou un bâtiment avec charpente ouverte peut demander la protection d’un volume plutôt que de simples rebords. Les accès logistiques et les possibilités de maintenance sont étudiés au cas par cas. Le patrimoine industriel et les monuments servent uniquement de repères : ils ne sont pas présentés comme des sites infestés ou comme des clients de G&F Nuisibles."}</p>
<p>{"Le château et la Tour Miko sont des repères du patrimoine local, pas des chantiers revendiqués. La protection de votre bâtiment se décide après examen de ses propres accès et supports."}</p>
<p>Pour situer les repères patrimoniaux, consultez le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.lacduder.com/offres/au-fil-des-rues-de-saint-dizier-saint-dizier-fr-5122370/" target="_blank" rel="noopener noreferrer">parcours de Saint-Dizier présenté par l’office de tourisme du lac du Der</a> et les <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://reveler.saint-dizier.fr/les-lieux/" target="_blank" rel="noopener noreferrer">lieux présentés par la Ville de Saint-Dizier</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs desservis à Saint-Dizier (52100)", intro: "Indiquez votre rue, le type de bien et les accès. Bettancourt-la-Ferrée et Chancenay sont des communes voisines, distinctes de Saint-Dizier ; les quartiers cités ne sont pas présentés comme infestés.", items: ["Centre-ville, église Notre-Dame et château", "Vert-Bois", "La Noue", "Gigny", "Marnaval", "Secteur gare, Marne et canal"] }}
        extraSections={[
          { title: "Choisir un filet, des picots ou un fil tendu", content: <>
<p>{"Le filet peut empêcher l’accès à un volume si ses raccords et les ouvertures sont correctement traités. Les picots visent des points de perchage ciblés ; le fil tendu peut convenir à certains appuis. Chaque solution dépend de la largeur des supports, de l’exposition et des possibilités d’entretien."}</p>
<p>{"Une pose doit tenir compte des autres points accessibles pour éviter de déplacer le perchage vers le rebord voisin. Le diagnostic explique le périmètre protégé et les accès qui resteront à surveiller, sans proposer automatiquement le même équipement pour un balcon et un entrepôt."}</p>
          </> },
          { title: "Fientes et accès en hauteur : préparer le diagnostic", content: <>
<p>{"Ne balayez pas à sec des accumulations de fientes et ne les dispersez pas au jet sans évaluation. Les protections et le procédé de nettoyage dépendent des surfaces et de l’état des dépôts. Les opérations éventuelles de nettoyage ou de décontamination doivent figurer dans le devis pour savoir si elles sont incluses."}</p>
<p>{"Depuis le sol ou un espace sûr, photographiez les appuis et les ouvertures concernés. Indiquez la hauteur, les contraintes de stationnement et l’accès aux parties communes. Le prix dépend des dimensions, des supports et des moyens d’accès ; il est défini après diagnostic et devis gratuits."}</p>
          </> },
          { title: "Votre service à Saint-Dizier et dans le nord de la Haute-Marne", content: <>
<p>Découvrez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnage">service dépigeonnisation en Haute-Marne</Link> pour les méthodes et les prestations. Pour votre adresse à Saint-Dizier, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez votre diagnostic et votre devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Vous êtes dans une autre commune du secteur ? Retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-wassy">Dépigeonnisation à Wassy</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-joinville">Dépigeonnisation à Joinville</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-montier-en-der">Dépigeonnisation à Montier-en-Der</Link>. Consultez également notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link>.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Saint-Dizier", items: [
          { label: "Dépigeonnisation à Wassy", to: "/depigeonnisation-wassy" },
          { label: "Dépigeonnisation à Joinville", to: "/depigeonnisation-joinville" },
          { label: "Dépigeonnisation à Montier-en-Der", to: "/depigeonnisation-montier-en-der" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Saint-Dizier", to: "/deratisation-saint-dizier" },
          { label: "Guêpes et frelons à Saint-Dizier", to: "/guepes-frelons-saint-dizier" },
          { label: "Taupier à Saint-Dizier", to: "/taupes-saint-dizier" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dépigeonnisation à Saint-Dizier : appelez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DepigeonnisationSaintDizier;
