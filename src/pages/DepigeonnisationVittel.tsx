import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation Vittel 88 - Intervention 24h, Devis Gratuit";
const DESCRIPTION = "Pigeons à Vittel (88800) ? G&F Nuisibles étudie vos façades, balcons et toitures dans la station thermale et propose des solutions non létales. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/depigeonnisation-vittel";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Pouvez-vous protéger un hôtel ou une résidence du parc thermal de Vittel ?", answer: "Oui, un diagnostic précise d'abord la configuration des toitures, des corniches et des balcons avant de proposer une solution. Dans le parc thermal, la pose doit tenir compte de l'aspect des pavillons classés et des contraintes patrimoniales." },
  { question: "Comment se débarrasser des pigeons sans danger pour les clients d'un établissement ?", answer: "Des dispositifs mécaniques non létaux (pics, filets, fil tendu) permettent d'empêcher le perchage sans produit toxique. Dans un établissement recevant du public, le choix et l'emplacement du dispositif sont adaptés pour rester discrets et sans risque pour les occupants." },
  { question: "Intervenez-vous en copropriété ou sur un immeuble de bureaux ?", answer: "Oui, décrivez les parties communes concernées, les balcons et les toitures-terrasses. Le devis est établi selon le périmètre voté ou défini par le syndic ou le gestionnaire." },
  { question: "Que faire des fientes déjà accumulées avant la pose des dispositifs ?", answer: "Elles doivent être nettoyées avec des précautions sanitaires avant toute pose, sans projection de poussières. Ne les balayez pas à sec et signalez leur quantité lors de la demande de devis." },
  { question: "Quel est le prix d'une dépigeonnisation à Vittel ?", answer: "Le prix dépend de la surface, de la hauteur d'accès et du dispositif retenu (pics, filets, fil tendu). Un diagnostic et un devis gratuits permettent de préciser la solution avant votre accord." },
];

const DepigeonnisationVittel = () => {
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
        "@type": "Service", "url": URL, "name": "Dépigeonnisation à Vittel (88800) : façades et toitures", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Vittel", "containedInPlace": { "@type": "AdministrativeArea", "name": "Vosges" }, "address": { "@type": "PostalAddress", "postalCode": "88800", "addressRegion": "Vosges", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dépigeonnisation", "item": "https://gf-nuisibles.fr/depigeonnage" },
        { "@type": "ListItem", "position": 3, "name": "Vittel", "item": URL }
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
        city="Vittel"
        department="Vosges (88)"
        serviceTitle={"Dépigeonnisation à Vittel (88800) : façades et toitures"}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"PIGEONS SUR VOTRE FAÇADE OU VOTRE TOITURE À VITTEL ?"}
        serviceCallSubtitle="G&F NUISIBLES — UNE SOLUTION ADAPTÉE À VOTRE BÂTIMENT"
        intro={"Des fientes qui s'accumulent sur un balcon, des nids sous une corniche ou des pigeons installés sur une toiture-terrasse méritent une inspection avant de choisir un dispositif. G&F Nuisibles propose la dépigeonnisation à Vittel (88800), station thermale des Vosges, pour les particuliers, les hôtels, les copropriétés et les professionnels. Le diagnostic identifie les points de perchage, de nidification et les accès utilisés par les pigeons, qu'il s'agisse d'un hôtel du parc thermal, d'une villa du centre-ville ou d'un commerce de l'avenue Bouloumié."}
        expertise={"Les pigeons recherchent des surfaces planes abritées pour se percher et des recoins calmes pour nicher : corniches, rebords de fenêtres, charpentes ouvertes ou locaux techniques en toiture. Ces indices ne remplacent pas l'observation sur place. Nous examinons la façade, les matériaux et les contraintes patrimoniales avant de proposer pics, filets ou fil tendu. Sur les pavillons classés du parc thermal, la pose respecte l'aspect des façades et des toitures d'origine. Aucune méthode létale n'est utilisée : seules des solutions mécaniques et non létales sont proposées."}
        method={"L'inspection commence par un repérage des zones de perchage, de nidification et des traces de fientes sur la façade et en toiture. Selon la configuration, un dispositif adapté est proposé : pics discrets sur les corniches, filets sur les grandes ouvertures ou balcons, ou fil tendu sur les rebords étroits. Le devis précise la surface traitée et les prestations retenues, y compris le nettoyage préalable des zones souillées si nécessaire. Un contrôle après la pose permet de vérifier l'efficacité du dispositif face aux tentatives de retour des oiseaux."}
        localContext={{ title: "Parc thermal, centre-ville et abords du Vair à Vittel", content: <>
            <p>{"Autour du parc thermal et de ses pavillons classés, hôtels, villas et résidences présentent des toitures et des corniches variées où les pigeons peuvent se percher. Précisez le type de bâtiment et les contraintes patrimoniales lors de la demande pour préparer le diagnostic."}</p>
            <p>{"Dans le secteur du Palais des Congrès, de la gare et des zones commerciales de l'avenue Bouloumié, les toitures-terrasses, les enseignes et les corniches métalliques sont des points de perchage fréquents. Le diagnostic reste identique : repérage des accès et des zones souillées avant de choisir un dispositif adapté à la structure."}</p>
            <p>{"Le Vair et son affluent le Petit Vair traversent le territoire de Vittel, sans lien direct avec la présence de pigeons, dont l'installation dépend avant tout de l'architecture du bâtiment et de la disponibilité de nourriture à proximité."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun établissement n'est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.ville-vittel.fr/fr/patrimoine-exceptionnel.html" target="_blank" rel="noopener noreferrer">site de la ville de Vittel consacré au patrimoine thermal</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Vittel (88800)", intro: "Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et le type de façade lors de votre demande.", items: ["Centre-ville de Vittel", "Secteur du parc thermal", "Abords du Palais des Congrès", "Secteur de la gare", "Abords du Vair", "Direction de Contrexéville"] }}
        extraSections={[
          { title: "Pigeons : les informations utiles avant la visite", content: <>
            <p>{"Notez les zones où les fientes s'accumulent, les horaires où les pigeons sont les plus présents et la hauteur d'accès nécessaire pour une intervention. Des photos de la façade et des points de perchage aident à préparer le diagnostic et à anticiper le matériel requis (nacelle, échafaudage)."}</p>
            <p>{"Ne tentez pas de retirer un nid occupé vous-même : certaines espèces d'oiseaux sont protégées et seul un diagnostic permet de distinguer un pigeon d'une autre espèce avant toute intervention."}</p>
          </> },
          { title: "Prévention dans un hôtel, une villa ou un commerce à Vittel", content: <>
            <p>{"Limitez l'accès à la nourriture autour du bâtiment et évitez le nourrissage volontaire des pigeons, qui favorise leur installation durable. Dans un établissement hôtelier, un entretien régulier des corniches, des balcons et des toitures-terrasses permet de repérer rapidement un début de nidification."}</p>
            <p>{"Pour une copropriété ou un hôtel comportant plusieurs bâtiments, précisez les parties communes concernées et les décisions déjà votées. Le devis indique le périmètre retenu et le dispositif choisi, sans déduire un prix ou un délai du seul quartier."}</p>
          </> },
          { title: "Votre service à Vittel et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnage">service dépigeonnisation</Link> pour les méthodes et les dispositifs. Pour votre adresse à Vittel, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-neufchateau">Dépigeonnisation à Neufchâteau</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-bourbonne">Dépigeonnisation à Bourbonne-les-Bains</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-chaumont">Dépigeonnisation à Chaumont</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Vittel", items: [
          { label: "Dépigeonnisation à Neufchâteau", to: "/depigeonnisation-neufchateau" },
          { label: "Dépigeonnisation à Bourbonne-les-Bains", to: "/depigeonnisation-bourbonne" },
          { label: "Dépigeonnisation à Chaumont", to: "/depigeonnisation-chaumont" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Vittel", to: "/deratisation-vittel" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dépigeonnisation à Vittel : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DepigeonnisationVittel;
