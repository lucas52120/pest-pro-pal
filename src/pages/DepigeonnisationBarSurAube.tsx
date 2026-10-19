import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation Bar-sur-Aube 10 - Intervention 24h, Devis Gratuit";
const DESCRIPTION = "Pigeons sur un balcon ou une toiture à Bar-sur-Aube (10200) ? G&F Nuisibles étudie les protections adaptées au bâtiment. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/depigeonnisation-bar-sur-aube";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Protégez-vous les balcons et façades anciennes à Bar-sur-Aube ?", answer: "Oui, après examen des points de pose, des supports et des accès. La solution retenue dépend du bâtiment et des éventuelles règles applicables aux édifices du centre historique." },
  { question: "Peut-on poser une protection près de l'église Saint-Pierre ?", answer: "L'adresse permet de situer le bien, mais les contraintes doivent être vérifiées pour la façade concernée. Les autorisations applicables et l'accord du propriétaire ou du syndic sont à anticiper." },
  { question: "Les picots suffisent-ils toujours ?", answer: "Non. Ils peuvent convenir à certains supports, mais d'autres points de pose ou volumes ouverts peuvent nécessiter une protection différente. Le diagnostic précise le périmètre utile." },
  { question: "Faut-il nettoyer les fientes avant votre visite ?", answer: "Évitez le balayage et le grattage à sec. Décrivez les dépôts et les surfaces ; les précautions et le nettoyage éventuel sont définis après évaluation." },
  { question: "Combien coûte une dépigeonnisation à Bar-sur-Aube ?", answer: "Le prix dépend des surfaces, de la hauteur, des accès et du dispositif. Le diagnostic et le devis gratuits détaillent les prestations proposées avant votre accord." },
];

const DepigeonnisationBarSurAube = () => {
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
        "@type": "Service", "url": URL, "name": "Dépigeonnisation à Bar-sur-Aube (10200) : protection des bâtiments", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Bar-sur-Aube", "containedInPlace": { "@type": "AdministrativeArea", "name": "Aube" }, "address": { "@type": "PostalAddress", "postalCode": "10200", "addressRegion": "Aube", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dépigeonnisation", "item": "https://gf-nuisibles.fr/depigeonnisation" },
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
        serviceTitle={"Dépigeonnisation à Bar-sur-Aube (10200) : protection des bâtiments"}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"PIGEONS SUR VOTRE BALCON OU VOTRE TOITURE À BAR-SUR-AUBE ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Des fientes qui reviennent sur un balcon ou des pigeons installés sous une avancée de toit demandent une protection adaptée aux points de pose. G&F Nuisibles propose la dépigeonnisation à Bar-sur-Aube (10200), ancienne cité des foires de Champagne au riche patrimoine architectural, pour les particuliers et les professionnels. L'objectif est de limiter l'accès aux zones concernées en tenant compte du bâtiment, souvent ancien dans le centre-ville, des occupants et de l'entretien. Le choix d'un filet, de picots ou de fils tendus repose sur l'inspection, pas sur une solution identique pour toutes les façades."}
        expertise={"Une corniche étroite, un balcon ouvert et un volume sous toiture ne présentent pas les mêmes contraintes, en particulier sur un bâti ancien proche de l'église Saint-Pierre et de son halloy de bois ou de l'église Saint-Maclou. Nous examinons les supports, les accès pour la pose et les possibilités d'entretien. Les installations doivent éviter de piéger les oiseaux et respecter les contraintes du bâtiment. Avant toute obturation, il faut vérifier la présence éventuelle de nids ou d'autres espèces. Les démarches nécessaires auprès du propriétaire, du syndic ou pour une façade concernée par des règles patrimoniales doivent être anticipées."}
        method={"Le diagnostic repère les zones de pose, les entrées et les surfaces souillées. Une proposition précise les dispositifs adaptés, le périmètre à protéger et les moyens d'accès. Le nettoyage éventuel et ses précautions sont définis selon l'état du site ; il ne remplace pas la protection des points de retour. La pose et le contrôle des installations cherchent à maintenir les accès nécessaires à l'entretien. Le devis distingue les prestations retenues et les contraintes de hauteur ou de support."}
        localContext={{ title: "Façades et toitures du centre historique de Bar-sur-Aube", content: <>
            <p>{"Autour de l'église Saint-Pierre et de l'église Saint-Maclou, dont le clocher reprend l'ancien donjon des comtes de Champagne, les repères patrimoniaux aident à situer une adresse. Pour votre façade, précisez les corniches, les avancées de toit et les accès, ainsi que les éventuelles règles de protection ou autorisations applicables au bien."}</p>
            <p>{"Dans le secteur de la colline Sainte-Germaine ou le long des promenades de la Gravière et de Mathaux, un balcon ou une cour peut se trouver à proximité d'espaces communs. Une protection doit tenir compte des surfaces réellement utilisées par les pigeons et éviter de déplacer simplement les nuisances vers un autre point du même bâtiment."}</p>
            <p>{"L'Aube et les vignobles de la Côte des Bar situent certains bâtiments de la ville, mais leur proximité ne justifie ni un diagnostic ni une pose standard. Les monuments et équipements mentionnés sont des repères géographiques : ils ne sont pas présentés comme infestés ou clients de G&F Nuisibles."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun monument n'est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://barsuraube.org/bouger-et-sortir-decouvrir-notre-territoire/notre-patrimoine-bati" target="_blank" rel="noopener noreferrer">site de la Communauté de communes de la région de Bar-sur-Aube</a> et dans la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.tourisme-cotedesbar.com/patrimoine/bar-sur-aube/" target="_blank" rel="noopener noreferrer">présentation de Bar-sur-Aube par l'office de tourisme Côte des Bar</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Bar-sur-Aube (10200)", intro: "Bar-sur-Aube est une ancienne cité des foires de Champagne, traversée par l'Aube. Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre historique de Bar-sur-Aube", "Secteur de l'église Saint-Pierre", "Secteur de l'église Saint-Maclou", "Colline Sainte-Germaine", "Promenade de la Gravière, bords de l'Aube", "Direction des vignobles de la Côte des Bar"] }}
        extraSections={[
          { title: "Filets, picots ou fils tendus : choisir selon le support", content: <>
            <p>{"Un filet peut protéger un volume ouvert lorsque les fixations et la configuration le permettent. Les picots ou fils tendus concernent plutôt certains points de pose, notamment sur des corniches de pierre du centre ancien. Un dispositif posé sur une seule corniche peut être insuffisant si d'autres appuis restent disponibles tout près."}</p>
            <p>{"Le diagnostic examine aussi les ouvertures de toiture et les besoins de maintenance. Les protections ne doivent pas bloquer un équipement, un accès technique ou emprisonner des oiseaux. La solution et son entretien sont expliqués avant la prestation."}</p>
          </> },
          { title: "Fientes, accès en hauteur et bâti ancien", content: <>
            <p>{"Évitez de gratter ou balayer à sec des fientes accumulées : cela remet des poussières en suspension. Le nettoyage doit être organisé avec des protections adaptées, selon l'importance des dépôts et l'usage des lieux. Ne travaillez pas en hauteur sans moyens sécurisés, en particulier sur une toiture ancienne du centre-ville."}</p>
            <p>{"Dans un immeuble ou sur une façade soumise à des règles particulières à Bar-sur-Aube, vérifiez l'accord du propriétaire, du syndic et les démarches applicables. Le devis précise les moyens d'accès, les surfaces et les dispositifs, sans annoncer un coût universel au mètre carré."}</p>
          </> },
          { title: "Votre service à Bar-sur-Aube et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation">service dépigeonnisation en Haute-Marne et dans l'Aube</Link> pour les méthodes et les prestations. Pour votre adresse à Bar-sur-Aube, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-chatillon-sur-seine">Dépigeonnisation à Châtillon-sur-Seine</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-troyes">Dépigeonnisation à Troyes</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-chaumont">Dépigeonnisation à Chaumont</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Bar-sur-Aube", items: [
          { label: "Dépigeonnisation à Châtillon-sur-Seine", to: "/depigeonnisation-chatillon-sur-seine" },
          { label: "Dépigeonnisation à Troyes", to: "/depigeonnisation-troyes" },
          { label: "Dépigeonnisation à Chaumont", to: "/depigeonnisation-chaumont" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Bar-sur-Aube", to: "/deratisation-bar-sur-aube" },
          { label: "Désinsectisation à Bar-sur-Aube", to: "/desinsectisation-bar-sur-aube" },
          { label: "Guêpes et frelons à Bar-sur-Aube", to: "/guepes-frelons-bar-sur-aube" },
          { label: "Taupier à Bar-sur-Aube", to: "/taupes-bar-sur-aube" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dépigeonnisation à Bar-sur-Aube : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DepigeonnisationBarSurAube;
