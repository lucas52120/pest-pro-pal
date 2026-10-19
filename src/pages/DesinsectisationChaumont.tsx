import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation Chaumont 52 - Intervention 24h";
const DESCRIPTION = "Cafards, punaises de lit ou puces à Chaumont (52000) ? G&F Nuisibles adapte le traitement à votre logement ou commerce. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/desinsectisation-chaumont";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Comment identifier un insecte dans mon logement à Chaumont ?", answer: "Une photo nette et la localisation des observations orientent le diagnostic. Les piqûres seules ne suffisent pas à identifier une punaise de lit ou une puce. Évitez de manipuler l’insecte et décrivez les indices lors de votre demande." },
  { question: "Intervenez-vous à La Rochotte, au Cavalier et à Brottes ?", answer: "Oui, ces secteurs de Chaumont sont desservis, ainsi que Foch, le centre-ville et La Vendue. Précisez l’adresse, l’étage et les accès. G&F Nuisibles est basée à Montsaon, et non dans une agence à Chaumont." },
  { question: "Faut-il prévenir le syndic en cas de cafards dans un immeuble ?", answer: "Si les observations concernent plusieurs logements ou des espaces communs, prévenez le bailleur ou le syndic. Une inspection coordonnée peut être nécessaire pour rechercher les voies de circulation et éviter de traiter un seul logement sans examiner le contexte." },
  { question: "Peut-on rester sur place pendant le traitement ?", answer: "Cela dépend de la méthode et des produits employés. Les consignes concernant les enfants, les animaux, les aliments, l’aération et la réintégration sont précisées avant le passage. Respectez ces consignes plutôt qu’un délai trouvé sur Internet." },
  { question: "Combien de passages faut-il contre les punaises de lit ?", answer: "Le nombre de passages et le suivi dépendent du diagnostic et du protocole. Ils sont précisés dans le devis ; aucun nombre de visites ni résultat immédiat ne peut être annoncé sans examiner la situation." },
];

const DesinsectisationChaumont = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://gf-nuisibles.fr/#organization",
        "url": "https://gf-nuisibles.fr",
        "name": "G&F Nuisibles",
        "telephone": "+33765256792",
        "sameAs": ["https://www.facebook.com/gfnuisibles"],
        "address": { "@type": "PostalAddress", "streetAddress": "27 rue principale", "addressLocality": "Montsaon", "postalCode": "52000", "addressRegion": "Haute-Marne", "addressCountry": "FR" }
      },
      {
        "@type": "Service", "url": URL, "name": "Désinsectisation à Chaumont (52000) : cafards, punaises et puces", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Chaumont", "address": { "@type": "PostalAddress", "postalCode": "52000", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Désinsectisation", "item": "https://gf-nuisibles.fr/desinsectisation" },
        { "@type": "ListItem", "position": 3, "name": "Chaumont", "item": URL }
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
        city="Chaumont"
        department="Haute-Marne (52)"
        serviceTitle={"Désinsectisation à Chaumont (52000) : cafards, punaises et puces"}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"INVASION D’INSECTES À CHAUMONT ?"}
        serviceCallSubtitle={"UN DIAGNOSTIC POUR CHOISIR LE BON TRAITEMENT"}
        intro={"Dans un appartement du centre de Chaumont, une maison de Brottes ou un commerce de La Vendue, la présence d’insectes ne se traite pas avec une solution unique. Cafards, punaises de lit et puces ont des refuges et des cycles différents. G&F Nuisibles propose une désinsectisation à Chaumont (52000), en Haute-Marne, après identification des indices et des pièces concernées. Une photographie nette, prise sans vous exposer, aide à préparer la visite ; des piqûres seules ne permettent pas de conclure à la présence de punaises."}
        expertise={"Basée à Montsaon, G&F Nuisibles dessert Chaumont pour les particuliers et les professionnels. L’inspection tient compte du type de logement, des surfaces, des zones alimentaires et de la présence d’enfants ou d’animaux. Le choix du procédé dépend de l’insecte identifié. Les consignes de préparation, de protection et de réintégration sont expliquées avant le traitement : aucun produit ne doit être présenté comme sans risque."}
        method={"Nous recherchons les refuges et les passages des insectes, puis définissons un protocole adapté : traitement ciblé, mesures de préparation et suivi selon les besoins. Le devis précise les zones concernées et les passages prévus. Les consignes après intervention, notamment le nettoyage et l’aération, dépendent de la méthode retenue. Informez-nous des produits déjà appliqués pour éviter des traitements contradictoires."}
        localContext={{ title: "À Chaumont, un diagnostic adapté au bâtiment et à son usage", content: <>
<p>{"Dans le centre historique, autour de la basilique Saint-Jean-Baptiste et du donjon, les demandes concernent aussi bien des logements que des locaux commerciaux. L’inspection porte sur votre bien : plinthes, mobilier, passages de canalisations et espaces techniques. Les monuments cités sont des repères géographiques, pas des clients ni des lieux présentés comme infestés."}</p>
<p>{"Au Cavalier, à Foch et à La Rochotte, précisez si les observations concernent un seul appartement ou plusieurs espaces communs. Un échange avec le bailleur ou le syndic peut être utile pour organiser les accès. À Brottes et dans le secteur de La Vendue, signalez les dépendances, les réserves et les pièces attenantes : le périmètre de l’inspection découle des indices, et non du quartier."}</p>
<p>Pour situer ces lieux, consultez le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.ville-chaumont.fr/decouvrir-chaumont/tourisme-et-patrimoine/" target="_blank" rel="noopener noreferrer">patrimoine présenté par la Ville de Chaumont</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs desservis à Chaumont (52000)", intro: "Ces repères permettent de situer votre demande, sans présumer de la présence de nuisibles dans un quartier. Chamarandes-Choignes et Treix sont des communes voisines, distinctes de Chaumont.", items: ["Centre historique, basilique Saint-Jean-Baptiste et donjon", "Cavalier", "Foch", "La Rochotte", "Brottes", "Secteur gare et viaduc", "La Vendue et la Dame Huguenotte"] }}
        extraSections={[
          { title: "Cafards, punaises de lit ou puces : les indices à relever", content: <>
<p>{"Les cafards peuvent laisser des traces près des équipements de cuisine, des points d’eau et des réserves. Notez les endroits et les heures d’observation. Dans un commerce alimentaire de Chaumont, protégez les denrées et signalez les contraintes d’activité avant de convenir d’un traitement."}</p>
<p>{"Pour les punaises de lit, recherchez sans déplacer le mobilier les traces sur les coutures du matelas, le sommier et les meubles proches. En cas de puces, la présence d’animaux fait partie du diagnostic ; leur prise en charge relève, si nécessaire, d’un vétérinaire et ne remplace pas le traitement du logement."}</p>
          </> },
          { title: "Préparer le logement et comprendre le devis", content: <>
<p>{"Ne déplacez pas de literie ou de mobilier potentiellement infesté vers une autre pièce sans consigne. Évitez de multiplier les bombes insecticides avant l’identification. Préparez la liste des pièces touchées et des traitements déjà essayés ; les recommandations de lavage et de rangement seront adaptées à l’espèce."}</p>
<p>{"Le coût dépend des surfaces, de l’étendue du problème, des contraintes d’accès et du suivi nécessaire. Le diagnostic et le devis sont gratuits. Demandez quels passages sont inclus, comment protéger les personnes et les animaux et quand nettoyer les surfaces traitées."}</p>
          </> },
          { title: "Votre demande à Chaumont et les communes voisines", content: <>
<p>Découvrez les méthodes de notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation">service désinsectisation en Haute-Marne</Link>. Pour votre adresse à Chaumont, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Vous résidez plus au nord ou au sud de Chaumont ? Consultez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-bologne">Désinsectisation à Bologne</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-nogent">Désinsectisation à Nogent</Link>. Retrouvez également notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link>.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales près de Chaumont", items: [
          { label: "Désinsectisation à Bologne", to: "/desinsectisation-bologne" },
          { label: "Désinsectisation à Nogent", to: "/desinsectisation-nogent" },
          { label: "Désinsectisation à Châteauvillain", to: "/desinsectisation-chateauvillain" },
          { label: "Désinsectisation à Semoutiers-Montsaon", to: "/desinsectisation-semoutiers-montsaon" },
        ] }}
        faqItems={FAQ_ITEMS}
        cta={"Désinsectisation à Chaumont : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits adaptés à votre situation."}
      />
    </>
  );
};

export default DesinsectisationChaumont;
