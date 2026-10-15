import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Froncles (52320) : protection des bâtiments | G&F Nuisibles";
const DESCRIPTION = "Pigeons sur un hangar ou une toiture à Froncles (52320) ? G&F Nuisibles étudie les protections adaptées au bâtiment. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/depigeonnisation-froncles";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Protégez-vous les hangars agricoles à Froncles ?", answer: "Oui, après examen des points de pose, des supports et des accès. La solution retenue dépend du volume du bâtiment et de son usage." },
  { question: "Peut-on poser une protection sur une maison proche de la Marne ?", answer: "L'adresse permet de situer le bien, mais les contraintes doivent être vérifiées pour la façade concernée. L'accord du propriétaire est à anticiper avant toute pose." },
  { question: "Les picots suffisent-ils toujours ?", answer: "Non. Ils peuvent convenir à certains supports, mais d'autres points de pose ou volumes ouverts, comme un hangar, peuvent nécessiter une protection différente. Le diagnostic précise le périmètre utile." },
  { question: "Faut-il nettoyer les fientes avant votre visite ?", answer: "Évitez le balayage et le grattage à sec. Décrivez les dépôts et les surfaces ; les précautions et le nettoyage éventuel sont définis après évaluation." },
  { question: "Combien coûte une dépigeonnisation à Froncles ?", answer: "Le prix dépend des surfaces, de la hauteur, des accès et du dispositif. Le diagnostic et le devis gratuits détaillent les prestations proposées avant votre accord." },
];

const DepigeonnisationFroncles = () => {
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
        "@type": "Service", "url": URL, "name": "Dépigeonnisation à Froncles (52320) : protection des bâtiments", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Froncles", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haute-Marne" }, "address": { "@type": "PostalAddress", "postalCode": "52320", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dépigeonnisation", "item": "https://gf-nuisibles.fr/depigeonnisation" },
        { "@type": "ListItem", "position": 3, "name": "Froncles", "item": URL }
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
        city="Froncles"
        department="Haute-Marne (52)"
        serviceTitle={"Dépigeonnisation à Froncles (52320) : protection des bâtiments"}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"PIGEONS SUR VOTRE TOITURE OU VOTRE HANGAR À FRONCLES ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Des fientes qui s'accumulent sur un hangar ou des pigeons installés sous une charpente demandent une protection adaptée aux points de pose. G&F Nuisibles propose la dépigeonnisation à Froncles (52320), commune qui regroupe aussi Buxières-lès-Froncles et Provenchères-sur-Marne, pour les particuliers et les professionnels. L'objectif est de limiter l'accès aux zones concernées en tenant compte du bâtiment, des occupants et de l'entretien. Le choix d'un filet, de picots ou de fils tendus repose sur l'inspection, pas sur une solution identique pour toutes les constructions, qu'il s'agisse d'une maison ou d'un bâtiment industriel lié au passé métallurgique du village."}
        expertise={"Une corniche étroite, un hangar ouvert et un volume sous charpente ne présentent pas les mêmes contraintes. Nous examinons les supports, les accès pour la pose et les possibilités d'entretien. Les installations doivent éviter de piéger les oiseaux et respecter les contraintes du bâtiment. Avant toute obturation, il faut vérifier la présence éventuelle de nids ou d'autres espèces. Les démarches nécessaires auprès du propriétaire ou de l'exploitant doivent être anticipées."}
        method={"Le diagnostic repère les zones de pose, les entrées et les surfaces souillées. Une proposition précise les dispositifs adaptés, le périmètre à protéger et les moyens d'accès. Le nettoyage éventuel et ses précautions sont définis selon l'état du site ; il ne remplace pas la protection des points de retour. La pose et le contrôle des installations cherchent à maintenir les accès nécessaires à l'entretien. Le devis distingue les prestations retenues et les contraintes de hauteur ou de support."}
        localContext={{ title: "Bâtiments de Froncles, Buxières-lès-Froncles et abords de la Marne", content: <>
            <p>{"Froncles regroupe le bourg, Buxières-lès-Froncles et Provenchères-sur-Marne. Pour votre façade ou votre hangar, précisez les corniches, les avancées de toit et les accès, ainsi que les éventuelles autorisations nécessaires selon l'usage du bâtiment."}</p>
            <p>{"Le canal entre Champagne et Bourgogne et la Marne traversent la commune. Un bâtiment proche de l'eau ou de la halte fluviale peut se trouver à proximité d'espaces communs. Une protection doit tenir compte des surfaces réellement utilisées par les pigeons et éviter de déplacer simplement les nuisances vers un autre point du même bâtiment."}</p>
            <p>{"Les anciens sites industriels liés à l'histoire du fer à Froncles et les abords de la gare situent certains bâtiments de la commune, mais ne justifient ni un diagnostic ni une pose standard. Les lieux mentionnés sont des repères géographiques : ils ne sont pas présentés comme infestés ou clients de G&F Nuisibles."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun lieu n'est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.froncles.fr/froncles.html" target="_blank" rel="noopener noreferrer">site de la mairie de Froncles</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Froncles (52320)", intro: "Froncles regroupe plusieurs anciens villages. Les repères suivants aident à situer votre adresse, sans constituer une liste de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre de Froncles", "Secteur de Buxières-lès-Froncles", "Secteur de Provenchères-sur-Marne", "Abords de la Marne", "Abords du canal entre Champagne et Bourgogne", "Secteur de la gare"] }}
        extraSections={[
          { title: "Filets, picots ou fils tendus : choisir selon le support", content: <>
            <p>{"Un filet peut protéger un volume ouvert comme un hangar lorsque les fixations et la configuration le permettent. Les picots ou fils tendus concernent plutôt certains points de pose sur une maison ou un bâtiment plus modeste. Un dispositif posé sur une seule corniche peut être insuffisant si d'autres appuis restent disponibles tout près."}</p>
            <p>{"Le diagnostic examine aussi les ouvertures de toiture et les besoins de maintenance. Les protections ne doivent pas bloquer un équipement, un accès technique ou emprisonner des oiseaux. La solution et son entretien sont expliqués avant la prestation."}</p>
          </> },
          { title: "Fientes, accès en hauteur et autorisations", content: <>
            <p>{"Évitez de gratter ou balayer à sec des fientes accumulées : cela remet des poussières en suspension. Le nettoyage doit être organisé avec des protections adaptées, selon l'importance des dépôts et l'usage des lieux. Ne travaillez pas en hauteur sans moyens sécurisés."}</p>
            <p>{"Pour un bâtiment agricole ou industriel, vérifiez l'accord de l'exploitant et les démarches applicables. Le devis précise les moyens d'accès, les surfaces et les dispositifs, sans annoncer un coût universel au mètre carré."}</p>
          </> },
          { title: "Votre service à Froncles et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation">service dépigeonnisation en Haute-Marne</Link> pour les méthodes et les prestations. Pour votre adresse à Froncles, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-bologne">Dépigeonnisation à Bologne</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-nogent">Dépigeonnisation à Nogent</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-joinville">Dépigeonnisation à Joinville</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Froncles", items: [
          { label: "Dépigeonnisation à Bologne", to: "/depigeonnisation-bologne" },
          { label: "Dépigeonnisation à Nogent", to: "/depigeonnisation-nogent" },
          { label: "Dépigeonnisation à Joinville", to: "/depigeonnisation-joinville" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Froncles", to: "/deratisation-froncles" },
          { label: "Désinsectisation à Froncles", to: "/desinsectisation-froncles" },
          { label: "Guêpes et frelons à Froncles", to: "/guepes-frelons-froncles" },
          { label: "Taupier à Froncles", to: "/taupes-froncles" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dépigeonnisation à Froncles : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DepigeonnisationFroncles;
