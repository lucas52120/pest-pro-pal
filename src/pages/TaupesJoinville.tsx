import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupier à Joinville (52300) : piégeage des taupes | G&F Nuisibles";
const DESCRIPTION = "Taupinières dans votre jardin à Joinville (52300) ? G&F Nuisibles recherche les galeries actives et propose un piégeage mécanique. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/taupes-joinville";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Intervenez-vous dans les jardins de Joinville ?", answer: "Oui, les jardins et terrains de Joinville peuvent faire l’objet d’un diagnostic. Précisez l’adresse, les accès et les zones où de nouvelles taupinières apparaissent." },
  { question: "Le nombre de taupinières indique-t-il le nombre de taupes ?", answer: "Non. Un même animal peut produire plusieurs monticules. La recherche des galeries actives est plus utile que le comptage des tas de terre." },
  { question: "Utilisez-vous des produits chimiques dans le jardin ?", answer: "La méthode proposée repose sur des pièges mécaniques dans les galeries, sans traitement chimique du sol. Les consignes d’accès et de protection restent nécessaires." },
  { question: "Faut-il aplatir les taupinières avant votre visite ?", answer: "Photographiez les traces et repérez les zones récentes avant une remise à niveau. Évitez de bouleverser le réseau, car les indices visibles aident à organiser l’inspection." },
  { question: "Une intervention empêche-t-elle tout retour des taupes ?", answer: "Non. Un terrain ouvert peut être recolonisé. Le devis précise la prestation et le suivi, sans garantir l’absence définitive de nouvelles taupes." },
];

const TaupesJoinville = () => {
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
        "@type": "Service", "url": URL, "name": "Taupier à Joinville (52300) : piégeage des taupes", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Joinville", "address": { "@type": "PostalAddress", "postalCode": "52300", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Taupier", "item": "https://gf-nuisibles.fr/taupes" },
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
        serviceTitle={"Taupier à Joinville (52300) : piégeage des taupes"}
        icon={<Target className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"DES TAUPINIÈRES SUR VOTRE PELOUSE À JOINVILLE ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"De nouveaux monticules de terre apparaissent dans votre jardin à Joinville ? G&F Nuisibles propose un service de taupier à Joinville (52300), en Haute-Marne, fondé sur le repérage des galeries actives. Avant de poser des pièges, il faut distinguer les traces récentes des anciennes et vérifier qu’elles correspondent à des taupes. Le nombre de taupinières ne permet pas de compter les animaux : un même individu peut déplacer de la terre à plusieurs endroits de son réseau."}
        expertise={"La taupe se nourrit principalement d’invertébrés du sol. Des racines consommées ou une plante abîmée ne suffisent donc pas à l’identifier comme responsable. Le diagnostic porte sur les indices visibles, la disposition des galeries et l’usage du terrain. La méthode proposée utilise des pièges mécaniques sans traitement chimique du sol. Leur installation doit rester protégée ; les enfants, les animaux et les usagers du jardin doivent respecter les consignes autour des dispositifs."}
        method={"Le repérage recherche les portions du réseau utilisées et évalue le périmètre de travail. Le devis décrit la pose et le suivi retenus selon l’activité observée et l’accès au terrain. Les pièges sont placés dans les galeries adaptées puis contrôlés selon l’organisation convenue. La remise à niveau de la pelouse se prévoit après le suivi. Un terrain ouvert peut être recolonisé : le piégeage ne doit pas être présenté comme une exclusion définitive de nouvelles taupes."}
        localContext={{ title: "Vallée de la Marne et jardins de Joinville : examiner le sol réel", content: <>
<p>{"Joinville s’inscrit dans la vallée de la Marne, avec une vieille ville et une colline portant le site de l’ancien château. Pour votre jardin, indiquez la pente, les zones récemment travaillées et l’accès aux parcelles. La géographie locale ne permet pas de prévoir l’activité souterraine sur un terrain particulier."}</p>
<p>{"Le quai des Peceaux et le secteur du château du Grand Jardin permettent de situer une demande dans Joinville. Les jardins du monument ne sont pas présentés comme infestés ni comme des interventions de G&F Nuisibles. Le diagnostic concerne uniquement les traces observées sur votre propriété."}</p>
<p>{"Dans un jardin attenant à une maison comme sur un espace extérieur professionnel, précisez les passages fréquentés, les jeux d’enfants et les animaux présents. Signalez les réseaux enterrés connus et les zones dont l’accès est limité. Ces informations servent à organiser le repérage et à protéger les dispositifs."}</p>
<p>Pour retrouver ces repères, consultez la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.bienvenue-hautemarne.fr/villes-cites-caractere/joinville/" target="_blank" rel="noopener noreferrer">présentation de Joinville par Haute-Marne Attractivité</a> et le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://tourisme-joinville.com/" target="_blank" rel="noopener noreferrer">site de l’office de tourisme de Joinville</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs desservis à Joinville (52300)", intro: "Précisez votre rue, le type de bien et les accès disponibles. Les noms ci-dessous sont des secteurs et des repères de Joinville en Haute-Marne, et non des lieux présumés infestés. Ils ne désignent pas Joinville-le-Pont.", items: ["Vieille ville et centre historique", "Secteur de l’église Notre-Dame et de l’Auditoire de Justice", "Quai des Peceaux", "Quai des Mailles et pont du Poncelot", "Secteur du château du Grand Jardin", "Abords de la colline de l’ancien château"] }}
        extraSections={[
          { title: "Que noter avant la visite du taupier ?", content: <>
<p>{"Photographiez les monticules et notez les endroits où de la terre fraîche apparaît. Des taupinières anciennes peuvent rester visibles après une période sans nouvelle activité ; leur seule présence ne prouve pas qu’une galerie est encore utilisée. Évitez de remuer tout le réseau avant l’inspection."}</p>
<p>{"Signalez les opérations déjà tentées, le déplacement de la terre et les produits appliqués. Les ultrasons et les recettes domestiques ne constituent pas une protection certaine. N’introduisez pas de carburant, de produits ménagers ou de fumigènes dans les galeries : ces pratiques créent des risques inutiles pour les occupants et le terrain."}</p>
          </> },
          { title: "Définir le suivi et remettre le jardin en état", content: <>
<p>{"La surface seule ne détermine pas la prestation : la répartition des galeries, l’activité récente et les accès comptent également. Le devis précise le périmètre, les modalités de contrôle et les consignes. Ne déplacez pas les pièges et gardez les enfants et les animaux à distance des emplacements concernés."}</p>
<p>{"Après le suivi, la terre des monticules peut être répartie pour remettre la pelouse à niveau selon son état. Si de nouvelles taupinières apparaissent ultérieurement, une nouvelle observation permet de distinguer activité persistante et recolonisation. Demandez les conditions d’un éventuel suivi supplémentaire plutôt qu’une promesse de résultat permanent."}</p>
          </> },
          { title: "Votre service à Joinville et dans les villes du secteur", content: <>
<p>Découvrez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes">service taupier en Haute-Marne</Link> pour connaître les méthodes et les prestations. Pour votre adresse à Joinville, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Pour une adresse dans une autre commune, consultez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-wassy">Taupier à Wassy</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-froncles">Taupier à Froncles</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-saint-dizier">Taupier à Saint-Dizier</Link>. Elles présentent les prestations dans ces villes, distinctes de Joinville. Retrouvez également notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link> pour situer votre demande.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Joinville", items: [
          { label: "Taupier à Wassy", to: "/taupes-wassy" },
          { label: "Taupier à Froncles", to: "/taupes-froncles" },
          { label: "Taupier à Saint-Dizier", to: "/taupes-saint-dizier" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Joinville", to: "/deratisation-joinville" },
          { label: "Désinsectisation à Joinville", to: "/desinsectisation-joinville" },
          { label: "Guêpes et frelons à Joinville", to: "/guepes-frelons-joinville" },
          { label: "Dépigeonnisation à Joinville", to: "/depigeonnisation-joinville" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Taupier à Joinville : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default TaupesJoinville;
