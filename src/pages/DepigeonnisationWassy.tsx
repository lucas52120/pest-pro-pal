import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation Wassy 52 - Intervention 24h, Devis Gratuit";
const DESCRIPTION = "Pigeons à Wassy (52130) ? G&F Nuisibles étudie vos façades et toitures et propose des solutions anti-pigeons non létales adaptées. Diagnostic et devis gratuits en Haute-Marne.";
const URL = "https://gf-nuisibles.fr/depigeonnisation-wassy";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Pouvez-vous protéger une maison ancienne du centre de Wassy ?", answer: "Oui, un diagnostic précise d'abord la configuration de la façade, des corniches et de la toiture avant de proposer une solution. Dans le bâti ancien autour de la collégiale, la pose doit respecter l'aspect des façades et des ouvertures d'origine." },
  { question: "Les pigeons près de la collégiale Notre-Dame sont-ils un problème particulier ?", answer: "Ce monument est un repère pour situer votre adresse, pas un diagnostic. Chaque façade est examinée selon ses propres points de perchage et de nidification, qu'elle soit proche d'un édifice patrimonial ou non." },
  { question: "Intervenez-vous sur un atelier ou un local artisanal ?", answer: "Oui, décrivez les surfaces, les ouvertures en toiture et les points d'accès. Le devis est établi selon le périmètre défini et le dispositif adapté à la structure du bâtiment." },
  { question: "Que faire des fientes déjà accumulées avant la pose des dispositifs ?", answer: "Elles doivent être nettoyées avec des précautions sanitaires avant toute pose, sans projection de poussières. Ne les balayez pas à sec et signalez leur quantité lors de la demande de devis." },
  { question: "Quel est le prix d'une dépigeonnisation à Wassy ?", answer: "Le prix dépend de la surface, de la hauteur d'accès et du dispositif retenu (pics, filets, fil tendu). Un diagnostic et un devis gratuits permettent de préciser la solution avant votre accord." },
];

const DepigeonnisationWassy = () => {
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
        "@type": "Service", "url": URL, "name": "Dépigeonnisation à Wassy (52130) : façades et toitures", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Wassy", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haute-Marne" }, "address": { "@type": "PostalAddress", "postalCode": "52130", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dépigeonnisation", "item": "https://gf-nuisibles.fr/depigeonnage" },
        { "@type": "ListItem", "position": 3, "name": "Wassy", "item": URL }
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
        city="Wassy"
        department="Haute-Marne (52)"
        serviceTitle={"Dépigeonnisation à Wassy (52130) : façades et toitures"}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"PIGEONS SUR VOTRE FAÇADE OU VOTRE TOITURE À WASSY ?"}
        serviceCallSubtitle="G&F NUISIBLES — UNE SOLUTION ADAPTÉE À VOTRE BÂTIMENT"
        intro={"Des fientes qui s'accumulent sur un rebord, des nids sous une corniche ou des pigeons installés dans une charpente méritent une inspection avant de choisir un dispositif. G&F Nuisibles propose la dépigeonnisation à Wassy (52130), ancienne sous-préfecture de Haute-Marne, pour les particuliers et les professionnels. Le diagnostic identifie les points de perchage, de nidification et les accès utilisés par les pigeons, qu'il s'agisse d'une maison du centre ancien, d'un commerce ou d'un atelier artisanal."}
        expertise={"Les pigeons recherchent des surfaces planes abritées pour se percher et des recoins calmes pour nicher : corniches, rebords de fenêtres, charpentes ouvertes ou locaux techniques en toiture. Ces indices ne remplacent pas l'observation sur place. Nous examinons la façade, les matériaux et les contraintes du bâtiment avant de proposer pics, filets ou fil tendu. Dans le centre ancien autour de la collégiale, la pose respecte l'aspect des façades et des toitures existantes. Aucune méthode létale n'est utilisée : seules des solutions mécaniques et non létales sont proposées."}
        method={"L'inspection commence par un repérage des zones de perchage, de nidification et des traces de fientes sur la façade et en toiture. Selon la configuration, un dispositif adapté est proposé : pics discrets sur les corniches, filets sur les grandes ouvertures ou balcons, ou fil tendu sur les rebords étroits. Le devis précise la surface traitée et les prestations retenues, y compris le nettoyage préalable des zones souillées si nécessaire. Un contrôle après la pose permet de vérifier l'efficacité du dispositif face aux tentatives de retour des oiseaux."}
        localContext={{ title: "Centre historique de Wassy et abords de la Blaise", content: <>
            <p>{"Dans le centre, autour de la collégiale Notre-Dame et de la place où s'est tenu le marché depuis des siècles, précisez si la demande concerne une maison, un appartement ou un local commercial. Les toitures et corniches des bâtiments anciens peuvent offrir des points de perchage qu'un diagnostic sur place permet d'identifier précisément."}</p>
            <p>{"La Blaise traverse Wassy, qui s'est développée le long de cette rivière dès l'implantation des comtes de Champagne. Pour un bien situé à proximité du cours d'eau, le diagnostic porte sur votre façade et vos points d'accès réels : la proximité de la rivière ne prouve pas une présence de pigeons."}</p>
            <p>{"Dans le secteur des anciens ateliers métallurgiques qui ont marqué l'histoire industrielle de la ville, les locaux annexes et les toitures doivent être décrits lors de la demande, sans présumer d'un problème chez un établissement cité."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun lieu n'est présenté comme infesté ou client. Retrouvez ces repères sur la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.saint-dizier.fr/ville-agglo/notre-histoire/l-histoire-de-wassy.html" target="_blank" rel="noopener noreferrer">page consacrée à l'histoire de Wassy</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Wassy (52130)", intro: "Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et le type de façade lors de votre demande.", items: ["Centre-ville de Wassy", "Secteur de la collégiale Notre-Dame", "Abords de la Blaise", "Secteur des anciens ateliers métallurgiques", "Direction de Montier-en-Der", "Direction de Saint-Dizier"] }}
        extraSections={[
          { title: "Pigeons : les informations utiles avant la visite", content: <>
            <p>{"Notez les zones où les fientes s'accumulent, les horaires où les pigeons sont les plus présents et la hauteur d'accès nécessaire pour une intervention. Des photos de la façade et des points de perchage aident à préparer le diagnostic et à anticiper le matériel requis (nacelle, échafaudage)."}</p>
            <p>{"Ne tentez pas de retirer un nid occupé vous-même : certaines espèces d'oiseaux sont protégées et seul un diagnostic permet de distinguer un pigeon d'une autre espèce avant toute intervention."}</p>
          </> },
          { title: "Prévention sur une maison, un commerce ou un atelier à Wassy", content: <>
            <p>{"Limitez l'accès à la nourriture autour du bâtiment et évitez le nourrissage volontaire des pigeons, qui favorise leur installation durable. Sur une façade ancienne, un entretien régulier des corniches et des rebords permet de repérer rapidement un début de nidification."}</p>
            <p>{"Pour un commerce ou un atelier comportant plusieurs bâtiments attenants, précisez le périmètre concerné. Le devis indique les surfaces retenues et le dispositif choisi, sans déduire un prix ou un délai du seul quartier."}</p>
          </> },
          { title: "Votre service à Wassy et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnage">service dépigeonnisation en Haute-Marne</Link> pour les méthodes et les dispositifs. Pour votre adresse à Wassy, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-saint-dizier">Dépigeonnisation à Saint-Dizier</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-joinville">Dépigeonnisation à Joinville</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-montier-en-der">Dépigeonnisation à Montier-en-Der</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Wassy", items: [
          { label: "Dépigeonnisation à Saint-Dizier", to: "/depigeonnisation-saint-dizier" },
          { label: "Dépigeonnisation à Joinville", to: "/depigeonnisation-joinville" },
          { label: "Dépigeonnisation à Montier-en-Der", to: "/depigeonnisation-montier-en-der" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Wassy", to: "/deratisation-wassy" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dépigeonnisation à Wassy : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DepigeonnisationWassy;
