import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation Neufchâteau 88 - Intervention 24h, Devis Gratuit";
const DESCRIPTION = "Pigeons sur un balcon ou une toiture à Neufchâteau (88300) ? G&F Nuisibles étudie les protections adaptées au bâtiment. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/depigeonnisation-neufchateau";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Protégez-vous les balcons et corniches à Neufchâteau ?", answer: "Oui, après examen des points de pose, des supports et des accès. La solution retenue dépend du balcon et des éventuelles règles de l’immeuble ou du Site Patrimonial Remarquable." },
  { question: "Peut-on poser une protection sur une façade du centre historique ?", answer: "L’adresse permet de situer le bien, mais les contraintes doivent être vérifiées pour la façade concernée. Les autorisations applicables au Site Patrimonial Remarquable et l’accord du propriétaire ou du syndic sont à anticiper." },
  { question: "Les picots suffisent-ils toujours ?", answer: "Non. Ils peuvent convenir à certains supports, mais d’autres points de pose ou volumes ouverts peuvent nécessiter une protection différente. Le diagnostic précise le périmètre utile." },
  { question: "Faut-il nettoyer les fientes avant votre visite ?", answer: "Évitez le balayage et le grattage à sec. Décrivez les dépôts et les surfaces ; les précautions et le nettoyage éventuel sont définis après évaluation." },
  { question: "Combien coûte une dépigeonnisation à Neufchâteau ?", answer: "Le prix dépend des surfaces, de la hauteur, des accès et du dispositif. Le diagnostic et le devis gratuits détaillent les prestations proposées avant votre accord." },
];

const DepigeonnisationNeufchateau = () => {
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
        "@type": "Service", "url": URL, "name": "Dépigeonnisation à Neufchâteau (88300) : protection des bâtiments", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Neufchâteau", "containedInPlace": { "@type": "AdministrativeArea", "name": "Vosges" }, "address": { "@type": "PostalAddress", "postalCode": "88300", "addressRegion": "Vosges", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dépigeonnisation", "item": "https://gf-nuisibles.fr/depigeonnage" },
        { "@type": "ListItem", "position": 3, "name": "Neufchâteau", "item": URL }
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
        city="Neufchâteau"
        department="Vosges (88)"
        serviceTitle={"Dépigeonnisation à Neufchâteau (88300) : protection des bâtiments"}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"PIGEONS SUR VOTRE BALCON OU VOTRE TOITURE À NEUFCHÂTEAU ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Des fientes qui reviennent sur un balcon ou des pigeons installés sous une avancée de toit demandent une protection adaptée aux points de pose. G&F Nuisibles propose la dépigeonnisation à Neufchâteau (88300), sous-préfecture des Vosges, pour les particuliers et les professionnels. L’objectif est de limiter l’accès aux zones concernées en tenant compte du bâtiment, des occupants et de l’entretien. Le choix d’un filet, de picots ou de fils tendus repose sur l’inspection, pas sur une solution identique pour toutes les façades, y compris dans le centre ancien classé."}
        expertise={"Une corniche étroite du centre historique, un balcon ouvert et un volume sous toiture ne présentent pas les mêmes contraintes. Nous examinons les supports, les accès pour la pose et les possibilités d’entretien. Les installations doivent éviter de piéger les oiseaux et respecter les contraintes du bâtiment, en particulier dans le Site Patrimonial Remarquable de Neufchâteau. Avant toute obturation, il faut vérifier la présence éventuelle de nids ou d’autres espèces. Les démarches nécessaires auprès du propriétaire, du syndic ou pour une façade concernée par des règles patrimoniales doivent être anticipées."}
        method={"Le diagnostic repère les zones de pose, les entrées et les surfaces souillées. Une proposition précise les dispositifs adaptés, le périmètre à protéger et les moyens d’accès. Le nettoyage éventuel et ses précautions sont définis selon l’état du site ; il ne remplace pas la protection des points de retour. La pose et le contrôle des installations cherchent à maintenir les accès nécessaires à l’entretien. Le devis distingue les prestations retenues et les contraintes de hauteur ou de support."}
        localContext={{ title: "Façades du centre ancien et toitures proches de la Meuse", content: <>
            <p>{"Autour de la place Jeanne-d’Arc, des églises Saint-Christophe et Saint-Nicolas et de l’hôtel de ville, le Site Patrimonial Remarquable aide à situer une adresse. Pour votre façade, précisez les corniches, les avancées de toit et les accès, ainsi que les éventuelles règles de protection ou autorisations applicables au bien."}</p>
            <p>{"Dans la ville basse et vers l’ancien quartier des Tanneries, un balcon ou une cour peut se trouver à proximité d’espaces communs. Une protection doit tenir compte des surfaces réellement utilisées par les pigeons et éviter de déplacer simplement les nuisances vers un autre point du même bâtiment."}</p>
            <p>{"La Meuse et le Mouzon situent certains bâtiments de Neufchâteau, mais leur proximité ne justifie ni un diagnostic ni une pose standard. Les monuments et équipements mentionnés sont des repères géographiques : ils ne sont pas présentés comme infestés ou clients de G&F Nuisibles."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun monument n’est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.tourisme.vosges.fr/decouvrir/sites-monuments/984001835-centre-historique-de-neufchateau-neufchateau" target="_blank" rel="noopener noreferrer">site de l’office de tourisme de l’Ouest des Vosges</a> et dans la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://fr.wikipedia.org/wiki/Neufch%C3%A2teau_(Vosges)" target="_blank" rel="noopener noreferrer">présentation de Neufchâteau</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Neufchâteau (88300)", intro: "Neufchâteau est la sous-préfecture de l’Ouest vosgien. Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre historique de Neufchâteau", "Secteur de la place Jeanne-d’Arc", "Abords de l’église Saint-Nicolas", "Ancien quartier des Tanneries", "Abords de la Meuse", "Abords du Mouzon"] }}
        extraSections={[
          { title: "Filets, picots ou fils tendus : choisir selon le support", content: <>
            <p>{"Un filet peut protéger un volume ouvert lorsque les fixations et la configuration le permettent. Les picots ou fils tendus concernent plutôt certains points de pose, notamment sur les corniches en pierre de taille du centre ancien. Un dispositif posé sur un seul appui peut être insuffisant si d’autres points restent disponibles tout près."}</p>
            <p>{"Le diagnostic examine aussi les ouvertures de toiture et les besoins de maintenance. Les protections ne doivent pas bloquer un équipement, un accès technique ou emprisonner des oiseaux. La solution et son entretien sont expliqués avant la prestation."}</p>
          </> },
          { title: "Fientes, accès en hauteur et autorisations", content: <>
            <p>{"Évitez de gratter ou balayer à sec des fientes accumulées : cela remet des poussières en suspension. Le nettoyage doit être organisé avec des protections adaptées, selon l’importance des dépôts et l’usage des lieux. Ne travaillez pas en hauteur sans moyens sécurisés."}</p>
            <p>{"Dans un immeuble du Site Patrimonial Remarquable ou une façade soumise à des règles particulières, vérifiez l’accord du propriétaire, du syndic et les démarches applicables. Le devis précise les moyens d’accès, les surfaces et les dispositifs, sans annoncer un coût universel au mètre carré."}</p>
          </> },
          { title: "Votre service à Neufchâteau et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnage">service dépigeonnisation</Link> pour les méthodes et les prestations. Pour votre adresse à Neufchâteau, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-vittel">Dépigeonnisation à Vittel</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-chaumont">Dépigeonnisation à Chaumont</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-bologne">Dépigeonnisation à Bologne</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Neufchâteau", items: [
          { label: "Dépigeonnisation à Vittel", to: "/depigeonnisation-vittel" },
          { label: "Dépigeonnisation à Chaumont", to: "/depigeonnisation-chaumont" },
          { label: "Dépigeonnisation à Bologne", to: "/depigeonnisation-bologne" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Neufchâteau", to: "/deratisation-neufchateau" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dépigeonnisation à Neufchâteau : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DepigeonnisationNeufchateau;
