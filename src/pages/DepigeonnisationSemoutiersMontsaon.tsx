import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Semoutiers-Montsaon (52000) : façades et granges | G&F Nuisibles";
const DESCRIPTION = "Pigeons à Semoutiers-Montsaon (52000) ? G&F Nuisibles, implanté sur la commune, propose des solutions anti-pigeons non létales. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/depigeonnisation-semoutiers-montsaon";

const FAQ_ITEMS: FaqItem[] = [
  { question: "G&F Nuisibles est-il vraiment basé à Semoutiers-Montsaon ?", answer: "Oui, notre siège est situé à Montsaon, l'un des deux villages de la commune. Précisez l'adresse, le bâtiment concerné et les points d'accès pour préparer la visite." },
  { question: "Pouvez-vous protéger une grange ou un hangar agricole ?", answer: "Oui, les bâtiments agricoles sont des points de perchage et de nidification fréquents dans ce secteur rural. Décrivez la structure, les ouvertures et les stocks pour adapter le dispositif retenu." },
  { question: "Les pigeons autour de la base aérienne sont-ils un problème particulier ?", answer: "La présence d'un site comme la base aérienne 113, en partie sur la commune, n'est pas un diagnostic. Chaque bâtiment est examiné selon ses propres accès et points de perchage, qu'il soit proche ou non d'une installation voisine." },
  { question: "Que faire des fientes déjà accumulées avant la pose des dispositifs ?", answer: "Elles doivent être nettoyées avec des précautions sanitaires avant toute pose, sans projection de poussières. Signalez leur quantité et leur emplacement lors de la demande de devis." },
  { question: "Quel est le prix d'une dépigeonnisation à Semoutiers-Montsaon ?", answer: "Le prix dépend de la surface, de la hauteur d'accès et du dispositif retenu (pics, filets, fil tendu). Un diagnostic et un devis gratuits permettent de préciser la solution avant votre accord." },
];

const DepigeonnisationSemoutiersMontsaon = () => {
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
        "@type": "Service", "url": URL, "name": "Dépigeonnisation à Semoutiers-Montsaon (52000) : façades et granges", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Semoutiers-Montsaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haute-Marne" }, "address": { "@type": "PostalAddress", "postalCode": "52000", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dépigeonnisation", "item": "https://gf-nuisibles.fr/depigeonnisation" },
        { "@type": "ListItem", "position": 3, "name": "Semoutiers-Montsaon", "item": URL }
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
        city="Semoutiers-Montsaon"
        department="Haute-Marne (52)"
        serviceTitle={"Dépigeonnisation à Semoutiers-Montsaon (52000) : façades et granges"}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"PIGEONS SUR VOTRE BÂTIMENT À SEMOUTIERS-MONTSAON ?"}
        serviceCallSubtitle="G&F NUISIBLES — VOTRE VOISIN À MONTSAON"
        intro={"Des fientes qui s'accumulent sous une corniche, des nids dans une charpente de grange ou des pigeons installés sur un hangar méritent une inspection avant de choisir un dispositif. G&F Nuisibles, dont le siège est installé à Montsaon, propose la dépigeonnisation à Semoutiers-Montsaon (52000), commune rurale née en 1972 de la fusion des villages de Semoutiers et de Montsaon, à quelques kilomètres de Chaumont. Le diagnostic identifie les points de perchage et de nidification, qu'il s'agisse d'une maison, d'une ferme ou d'un bâtiment agricole."}
        expertise={"Les pigeons recherchent des surfaces planes abritées pour se percher et des recoins calmes pour nicher : charpentes ouvertes de granges, corniches, rebords de toiture ou hangars agricoles. Ces indices ne remplacent pas l'observation sur place. Nous examinons le bâtiment, les matériaux et les ouvertures avant de proposer pics, filets ou fil tendu, des dispositifs fréquemment utilisés sur les exploitations agricoles de ce secteur rural. Aucune méthode létale n'est utilisée : seules des solutions mécaniques et non létales sont proposées."}
        method={"L'inspection commence par un repérage des zones de perchage, de nidification et des traces de fientes sur la façade, en toiture ou dans une charpente de grange. Selon la configuration, un dispositif adapté est proposé : pics discrets sur les corniches, filets sur les grandes ouvertures de hangar ou fil tendu sur les rebords étroits. Le devis précise la surface traitée et les prestations retenues, y compris le nettoyage préalable des zones souillées si nécessaire. Un contrôle après la pose permet de vérifier l'efficacité du dispositif."}
        localContext={{ title: "Deux villages et un territoire agricole aux portes de Chaumont", content: <>
            <p>{"Semoutiers-Montsaon est une commune rurale de l'agglomération de Chaumont, née de la fusion administrative de deux villages en 1972. La Suize traverse ce territoire, et la partie ouest de la commune est proche de la base aérienne 113 de Chaumont-Semoutiers. Ces repères situent votre adresse ; ils ne préjugent pas d'une présence de pigeons sur un bâtiment donné."}</p>
            <p>{"Montsaon, où se trouve notre siège rue principale, et Semoutiers, où se situe la mairie historique rue de Neuilly, forment un territoire agricole où les granges, hangars et bâtiments d'élevage sont des points de perchage habituels pour les pigeons."}</p>
            <p>{"Chaumont, préfecture de la Haute-Marne, se trouve à quelques kilomètres. La présence d'un bâtiment agricole ou d'un hangar proche d'une exploitation ne signifie pas automatiquement une installation de pigeons : seuls les indices observés sur votre bâtiment permettent de confirmer le besoin d'une protection."}</p>
            <p>Les repères ci-dessus situent votre demande ; aucun lieu n'est présenté comme infesté ou client. Retrouvez des informations sur la commune sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.semoutiers.fr/" target="_blank" rel="noopener noreferrer">site officiel de la mairie de Semoutiers-Montsaon</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Semoutiers-Montsaon (52000)", intro: "Semoutiers-Montsaon réunit les villages de Semoutiers et de Montsaon. Les repères suivants aident à situer votre adresse, sans constituer une liste de lieux infestés. Précisez votre village et votre rue lors de votre demande.", items: ["Village de Montsaon", "Village de Semoutiers", "Secteur de la rue principale", "Abords de la mairie, rue de Neuilly", "Exploitations agricoles et dépendances", "Abords de la Suize"] }}
        extraSections={[
          { title: "Pigeons : les informations utiles avant la visite", content: <>
            <p>{"Notez les zones où les fientes s'accumulent, les bâtiments concernés (maison, grange, hangar) et la hauteur d'accès nécessaire pour une intervention. Des photos de la charpente ou de la façade aident à préparer le diagnostic et à anticiper le matériel requis."}</p>
            <p>{"Ne tentez pas de retirer un nid occupé vous-même : certaines espèces d'oiseaux sont protégées et seul un diagnostic permet de distinguer un pigeon d'une autre espèce avant toute intervention."}</p>
          </> },
          { title: "Prévention sur une grange ou un corps de ferme", content: <>
            <p>{"Limitez l'accès à la nourriture autour des bâtiments, en particulier les grains stockés ou répandus, qui favorisent l'installation durable des pigeons. Sur une grange ouverte, un entretien régulier des ouvertures permet de repérer rapidement un début de nidification."}</p>
            <p>{"Pour une exploitation agricole, précisez les bâtiments concernés et l'organisation des accès. Le devis indique le périmètre retenu et le dispositif choisi, sans déduire un prix ou un délai du seul village."}</p>
          </> },
          { title: "Votre service à Semoutiers-Montsaon et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation">service dépigeonnisation</Link> pour les méthodes et les dispositifs. Pour votre adresse à Semoutiers-Montsaon, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-chaumont">Dépigeonnisation à Chaumont</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-bologne">Dépigeonnisation à Bologne</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-chateauvillain">Dépigeonnisation à Châteauvillain</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Semoutiers-Montsaon", items: [
          { label: "Dépigeonnisation à Chaumont", to: "/depigeonnisation-chaumont" },
          { label: "Dépigeonnisation à Bologne", to: "/depigeonnisation-bologne" },
          { label: "Dépigeonnisation à Châteauvillain", to: "/depigeonnisation-chateauvillain" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Semoutiers-Montsaon", to: "/deratisation-semoutiers-montsaon" },
          { label: "Désinsectisation à Semoutiers-Montsaon", to: "/desinsectisation-semoutiers-montsaon" },
          { label: "Guêpes et frelons à Semoutiers-Montsaon", to: "/guepes-frelons-semoutiers-montsaon" },
          { label: "Taupier à Semoutiers-Montsaon", to: "/taupes-semoutiers-montsaon" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Dépigeonnisation à Semoutiers-Montsaon : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DepigeonnisationSemoutiersMontsaon;
