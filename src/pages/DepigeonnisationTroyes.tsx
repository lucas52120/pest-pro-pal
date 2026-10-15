import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Troyes (10000) : façades et toitures | G&F Nuisibles";
const DESCRIPTION = "Pigeons à Troyes (10000) ? G&F Nuisibles étudie vos façades et toitures et propose des solutions anti-pigeons non létales adaptées. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/depigeonnisation-troyes";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Pouvez-vous protéger une maison à pans de bois du centre de Troyes ?", answer: "Oui, un diagnostic précise d'abord la configuration de la façade, des corniches et des encorbellements avant de proposer une solution. Dans le bâti ancien, la pose doit respecter l'aspect des colombages et des ouvertures d'origine." },
  { question: "Les pigeons près de la cathédrale ou de la basilique Saint-Urbain sont-ils un problème particulier ?", answer: "Ces monuments sont des repères pour situer votre adresse, pas un diagnostic. Chaque façade est examinée selon ses propres points de perchage et de nidification, qu'elle soit proche d'un édifice patrimonial ou non." },
  { question: "Intervenez-vous en copropriété ou sur un immeuble de bureaux ?", answer: "Oui, décrivez les parties communes concernées, les balcons et les toitures-terrasses. Le devis est établi selon le périmètre voté ou défini par le syndic ou le gestionnaire." },
  { question: "Que faire des fientes déjà accumulées avant la pose des dispositifs ?", answer: "Elles doivent être nettoyées avec des précautions sanitaires avant toute pose, sans projection de poussières. Ne les balayez pas à sec et signalez leur quantité lors de la demande de devis." },
  { question: "Quel est le prix d'une dépigeonnisation à Troyes ?", answer: "Le prix dépend de la surface, de la hauteur d'accès et du dispositif retenu (pics, filets, fil tendu). Un diagnostic et un devis gratuits permettent de préciser la solution avant votre accord." },
];

const DepigeonnisationTroyes = () => {
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
        "@type": "Service", "url": URL, "name": "Dépigeonnisation à Troyes (10000) : façades et toitures", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Troyes", "containedInPlace": { "@type": "AdministrativeArea", "name": "Aube" }, "address": { "@type": "PostalAddress", "postalCode": "10000", "addressRegion": "Aube", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dépigeonnisation", "item": "https://gf-nuisibles.fr/depigeonnisation" },
        { "@type": "ListItem", "position": 3, "name": "Troyes", "item": URL }
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
        city="Troyes"
        department="Aube (10)"
        serviceTitle={"Dépigeonnisation à Troyes (10000) : façades et toitures"}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"PIGEONS SUR VOTRE FAÇADE OU VOTRE TOITURE À TROYES ?"}
        serviceCallSubtitle="G&F NUISIBLES — UNE SOLUTION ADAPTÉE À VOTRE BÂTIMENT"
        intro={"Des fientes qui s'accumulent sur un balcon, des nids sous une corniche ou des pigeons installés sur une toiture-terrasse méritent une inspection avant de choisir un dispositif. G&F Nuisibles propose la dépigeonnisation à Troyes (10000), préfecture de l'Aube, pour les particuliers, les copropriétés et les professionnels. Le diagnostic identifie les points de perchage, de nidification et les accès utilisés par les pigeons, qu'il s'agisse d'une maison à pans de bois du centre ancien, d'un immeuble du centre-ville ou d'un local d'activité en périphérie."}
        expertise={"Les pigeons recherchent des surfaces planes abritées pour se percher et des recoins calmes pour nicher : corniches, rebords de fenêtres, charpentes ouvertes ou locaux techniques en toiture. Ces indices ne remplacent pas l'observation sur place. Nous examinons la façade, les matériaux et les contraintes patrimoniales avant de proposer pics, filets ou fil tendu. Dans le centre historique, la pose respecte l'aspect des colombages et des menuiseries d'origine. Aucune méthode létale n'est utilisée : seules des solutions mécaniques et non létales sont proposées."}
        method={"L'inspection commence par un repérage des zones de perchage, de nidification et des traces de fientes sur la façade et en toiture. Selon la configuration, un dispositif adapté est proposé : pics discrets sur les corniches, filets sur les grandes ouvertures ou fil tendu sur les rebords étroits. Le devis précise la surface traitée et les prestations retenues, y compris le nettoyage préalable des zones souillées si nécessaire. Un contrôle après la pose permet de vérifier l'efficacité du dispositif face aux tentatives de retour des oiseaux."}
        localContext={{ title: "Façades patrimoniales et quartiers de Troyes", content: <>
            <p>{"Le centre historique de Troyes, dont le tracé évoque un « bouchon de champagne », regroupe des maisons à pans de bois autour de la cathédrale Saint-Pierre-et-Saint-Paul, de la basilique Saint-Urbain et des ruelles du quartier Saint-Jean. Sur ces façades anciennes, la pose d'un dispositif anti-pigeons doit tenir compte des matériaux, des encorbellements et des contraintes d'un bâtiment classé ou inscrit ; précisez la nature de votre façade lors de la demande."}</p>
            <p>{"Dans les immeubles plus récents et les zones commerciales en périphérie, les toitures-terrasses, les enseignes et les corniches métalliques sont des points de perchage fréquents. Le diagnostic reste identique : repérage des accès et des zones souillées avant de choisir un dispositif adapté à la structure."}</p>
            <p>{"La Seine et ses berges traversent la ville sans lien direct avec la présence de pigeons, dont l'installation dépend avant tout de l'architecture du bâtiment et de la disponibilité de nourriture à proximité."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun monument n'est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.tourisme-troyes.com/" target="_blank" rel="noopener noreferrer">site de l'office de tourisme de Troyes</a> et dans la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://fr.wikipedia.org/wiki/Troyes" target="_blank" rel="noopener noreferrer">présentation de Troyes</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Troyes (10000)", intro: "Troyes est la préfecture de l'Aube. Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et le type de façade lors de votre demande.", items: ["Centre historique et quartier Saint-Jean", "Abords de la cathédrale Saint-Pierre-et-Saint-Paul", "Secteur de la rue Champeaux", "Quartier de la basilique Saint-Urbain", "Abords de la Seine", "Zones commerciales de périphérie"] }}
        extraSections={[
          { title: "Pigeons : les informations utiles avant la visite", content: <>
            <p>{"Notez les zones où les fientes s'accumulent, les horaires où les pigeons sont les plus présents et la hauteur d'accès nécessaire pour une intervention. Des photos de la façade et des points de perchage aident à préparer le diagnostic et à anticiper le matériel requis (nacelle, échafaudage)."}</p>
            <p>{"Ne tentez pas de retirer un nid occupé vous-même : certaines espèces d'oiseaux sont protégées et seul un diagnostic permet de distinguer un pigeon d'une autre espèce avant toute intervention."}</p>
          </> },
          { title: "Prévention sur une façade ancienne ou un immeuble à Troyes", content: <>
            <p>{"Limitez l'accès à la nourriture autour du bâtiment et évitez le nourrissage volontaire des pigeons, qui favorise leur installation durable. Sur une façade ancienne, un entretien régulier des corniches et des rebords permet de repérer rapidement un début de nidification."}</p>
            <p>{"Pour une copropriété, précisez les parties communes concernées et les décisions déjà votées en assemblée générale. Le devis indique le périmètre retenu et le dispositif choisi, sans déduire un prix ou un délai du seul quartier."}</p>
          </> },
          { title: "Votre service à Troyes et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation">service dépigeonnisation</Link> pour les méthodes et les dispositifs. Pour votre adresse à Troyes, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-bar-sur-aube">Dépigeonnisation à Bar-sur-Aube</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-chatillon-sur-seine">Dépigeonnisation à Châtillon-sur-Seine</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-chaumont">Dépigeonnisation à Chaumont</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Troyes", items: [
          { label: "Dépigeonnisation à Bar-sur-Aube", to: "/depigeonnisation-bar-sur-aube" },
          { label: "Dépigeonnisation à Châtillon-sur-Seine", to: "/depigeonnisation-chatillon-sur-seine" },
          { label: "Dépigeonnisation à Chaumont", to: "/depigeonnisation-chaumont" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Troyes", to: "/deratisation-troyes" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dépigeonnisation à Troyes : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DepigeonnisationTroyes;
