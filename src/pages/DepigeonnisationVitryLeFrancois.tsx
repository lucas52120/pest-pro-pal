import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation Vitry-le-François 51 - Intervention 24h, Devis Gratuit";
const DESCRIPTION = "Pigeons à Vitry-le-François (51300) ? G&F Nuisibles étudie vos façades, balcons et toitures et propose des solutions anti-pigeons non létales. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/depigeonnisation-vitry-le-francois";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Pouvez-vous protéger un immeuble du centre en damier de Vitry-le-François ?", answer: "Oui, un diagnostic précise d'abord la configuration des façades, des corniches et des combles avant de proposer une solution. Les immeubles reconstruits selon le plan en damier du centre-ville présentent des points de perchage variés selon leur hauteur et leurs ouvertures." },
  { question: "La proximité de la Marne et de la Saulx attire-t-elle les pigeons ?", answer: "La présence de cours d'eau à proximité n'est pas un diagnostic en soi. L'installation des pigeons dépend surtout de l'architecture du bâtiment, des surfaces de perchage disponibles et de l'accès à la nourriture, qu'un logement soit proche de l'eau ou non." },
  { question: "Intervenez-vous en copropriété ou sur un immeuble de bureaux ?", answer: "Oui, décrivez les parties communes concernées, les balcons et les toitures-terrasses. Le devis est établi selon le périmètre voté ou défini par le syndic ou le gestionnaire." },
  { question: "Que faire des fientes déjà accumulées avant la pose des dispositifs ?", answer: "Elles doivent être nettoyées avec des précautions sanitaires avant toute pose, sans projection de poussières. Ne les balayez pas à sec et signalez leur quantité lors de la demande de devis." },
  { question: "Quel est le prix d'une dépigeonnisation à Vitry-le-François ?", answer: "Le prix dépend de la surface, de la hauteur d'accès et du dispositif retenu (pics, filets, fil tendu). Un diagnostic et un devis gratuits permettent de préciser la solution avant votre accord." },
];

const DepigeonnisationVitryLeFrancois = () => {
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
        "@type": "Service", "url": URL, "name": "Dépigeonnisation à Vitry-le-François (51300) : façades et toitures", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Vitry-le-François", "containedInPlace": { "@type": "AdministrativeArea", "name": "Marne" }, "address": { "@type": "PostalAddress", "postalCode": "51300", "addressRegion": "Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dépigeonnisation", "item": "https://gf-nuisibles.fr/depigeonnisation" },
        { "@type": "ListItem", "position": 3, "name": "Vitry-le-François", "item": URL }
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
        city="Vitry-le-François"
        department="Marne (51)"
        serviceTitle={"Dépigeonnisation à Vitry-le-François (51300) : façades et toitures"}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"PIGEONS SUR VOTRE FAÇADE OU VOTRE TOITURE À VITRY-LE-FRANÇOIS ?"}
        serviceCallSubtitle="G&F NUISIBLES — UNE SOLUTION ADAPTÉE À VOTRE BÂTIMENT"
        intro={"Des fientes qui s'accumulent sur un balcon, des nids sous une corniche ou des pigeons installés sur une toiture-terrasse méritent une inspection avant de choisir un dispositif. G&F Nuisibles propose la dépigeonnisation à Vitry-le-François (51300), ville reconstruite en damier au confluent de la Marne et de la Saulx, pour les particuliers, les copropriétés et les professionnels. Le diagnostic identifie les points de perchage, de nidification et les accès utilisés par les pigeons, qu'il s'agisse d'un immeuble du centre-ville, d'une maison avec balcon ou d'un local d'activité en périphérie."}
        expertise={"Les pigeons recherchent des surfaces planes abritées pour se percher et des recoins calmes pour nicher : corniches, rebords de fenêtres, charpentes ouvertes ou locaux techniques en toiture. Ces indices ne remplacent pas l'observation sur place. Nous examinons la façade, les matériaux et les contraintes du bâtiment avant de proposer pics, filets ou fil tendu. Sur les immeubles du centre reconstruit, la pose respecte l'alignement des façades et les menuiseries existantes. Aucune méthode létale n'est utilisée : seules des solutions mécaniques et non létales sont proposées."}
        method={"L'inspection commence par un repérage des zones de perchage, de nidification et des traces de fientes sur la façade et en toiture. Selon la configuration, un dispositif adapté est proposé : pics discrets sur les corniches, filets sur les grandes ouvertures ou balcons, ou fil tendu sur les rebords étroits. Le devis précise la surface traitée et les prestations retenues, y compris le nettoyage préalable des zones souillées si nécessaire. Un contrôle après la pose permet de vérifier l'efficacité du dispositif face aux tentatives de retour des oiseaux."}
        localContext={{ title: "Place d'Armes, Collégiale Notre-Dame et quartiers de Vitry-le-François", content: <>
            <p>{"Le centre de Vitry-le-François, reconstruit en damier au XVIe siècle autour de la Place d'Armes et de la Collégiale Notre-Dame, regroupe des immeubles aux façades alignées où les corniches et les combles peuvent servir de points de perchage. Précisez la hauteur et le type de votre façade lors de la demande pour préparer le diagnostic."}</p>
            <p>{"Dans le quartier du Bas-Village et les zones commerciales plus récentes, les toitures-terrasses, les enseignes et les corniches métalliques sont des points d'installation fréquents. Le diagnostic reste identique : repérage des accès et des zones souillées avant de choisir un dispositif adapté à la structure."}</p>
            <p>{"Vitry-le-François se situe au confluent de la Marne et de la Saulx, et au carrefour de plusieurs canaux. Ces cours d'eau n'expliquent pas à eux seuls la présence de pigeons, dont l'installation dépend avant tout de l'architecture du bâtiment et de la disponibilité de nourriture à proximité."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun lieu n'est présenté comme infesté ou client. Retrouvez ces repères sur la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.vitry-le-francois.net/articles/patrimoine/" target="_blank" rel="noopener noreferrer">page patrimoine de la mairie de Vitry-le-François</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Vitry-le-François (51300)", intro: "Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et le type de façade lors de votre demande.", items: ["Centre-ville et Place d'Armes", "Secteur de la Collégiale Notre-Dame", "Quartier du Bas-Village", "Abords de la Marne et de la Saulx", "Secteur de la gare", "Zones commerciales périphériques"] }}
        extraSections={[
          { title: "Pigeons : les informations utiles avant la visite", content: <>
            <p>{"Notez les zones où les fientes s'accumulent, les horaires où les pigeons sont les plus présents et la hauteur d'accès nécessaire pour une intervention. Des photos de la façade et des points de perchage aident à préparer le diagnostic et à anticiper le matériel requis (nacelle, échafaudage)."}</p>
            <p>{"Ne tentez pas de retirer un nid occupé vous-même : certaines espèces d'oiseaux sont protégées et seul un diagnostic permet de distinguer un pigeon d'une autre espèce avant toute intervention."}</p>
          </> },
          { title: "Prévention sur un immeuble ou une maison à Vitry-le-François", content: <>
            <p>{"Limitez l'accès à la nourriture autour du bâtiment et évitez le nourrissage volontaire des pigeons, qui favorise leur installation durable. Un entretien régulier des corniches, des balcons et des rebords permet de repérer rapidement un début de nidification."}</p>
            <p>{"Pour une copropriété, précisez les parties communes concernées et les décisions déjà votées en assemblée générale. Le devis indique le périmètre retenu et le dispositif choisi, sans déduire un prix ou un délai du seul quartier."}</p>
          </> },
          { title: "Votre service à Vitry-le-François et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation">service dépigeonnisation</Link> pour les méthodes et les dispositifs. Pour votre adresse à Vitry-le-François, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-saint-dizier">Dépigeonnisation à Saint-Dizier</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-wassy">Dépigeonnisation à Wassy</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-montier-en-der">Dépigeonnisation à Montier-en-Der</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Vitry-le-François", items: [
          { label: "Dépigeonnisation à Saint-Dizier", to: "/depigeonnisation-saint-dizier" },
          { label: "Dépigeonnisation à Wassy", to: "/depigeonnisation-wassy" },
          { label: "Dépigeonnisation à Montier-en-Der", to: "/depigeonnisation-montier-en-der" },
        ] }}
        relatedLinks={[
          { label: "Désinsectisation à Vitry-le-François", to: "/desinsectisation-vitry-le-francois" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dépigeonnisation à Vitry-le-François : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DepigeonnisationVitryLeFrancois;
