import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupier Semoutiers-Montsaon 52 - Piégeage Taupes, Devis Gratuit";
const DESCRIPTION = "Taupinières dans votre jardin ou votre terrain à Semoutiers-Montsaon (52000) ? G&F Nuisibles, implanté sur la commune, pratique le piégeage mécanique. Devis gratuit.";
const URL = "https://gf-nuisibles.fr/taupes-semoutiers-montsaon";

const FAQ_ITEMS: FaqItem[] = [
  { question: "G&F Nuisibles est-il vraiment basé à Semoutiers-Montsaon ?", answer: "Oui, notre siège est situé à Montsaon, l'un des deux villages de la commune. Précisez l'adresse et la surface du terrain concerné pour préparer l'intervention." },
  { question: "Utilisez-vous des produits chimiques contre les taupes ?", answer: "Non, nous privilégions le piégeage mécanique, une méthode traditionnelle sans produit toxique, adaptée aux jardins, aux espaces communaux et aux terrains agricoles de ce secteur rural." },
  { question: "Pouvez-vous intervenir sur un grand terrain agricole ou une prairie ?", answer: "Oui, décrivez la surface, les galeries visibles et l'usage du terrain. Le nombre de pièges posés et le temps d'intervention sont adaptés à l'étendue du terrain concerné." },
  { question: "Combien de temps faut-il pour éliminer les taupes d'un jardin ?", answer: "Le délai dépend du nombre de galeries actives et de la taille du terrain. Un contrôle régulier des pièges posés permet d'ajuster l'intervention jusqu'à l'arrêt de l'activité observée." },
  { question: "Quel est le prix d'un piégeage de taupes à Semoutiers-Montsaon ?", answer: "Le prix dépend de la surface du terrain et du nombre de galeries à traiter. Un devis gratuit est établi après évaluation du terrain, avant toute intervention." },
];

const TaupesSemoutiersMontsaon = () => {
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
        "@type": "Service", "url": URL, "name": "Taupier à Semoutiers-Montsaon (52000) : piégeage de taupes", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Semoutiers-Montsaon", "containedInPlace": { "@type": "AdministrativeArea", "name": "Haute-Marne" }, "address": { "@type": "PostalAddress", "postalCode": "52000", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Taupier", "item": "https://gf-nuisibles.fr/taupes" },
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
        serviceTitle={"Taupier à Semoutiers-Montsaon (52000) : piégeage de taupes"}
        icon={<Target className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"TAUPINIÈRES DANS VOTRE JARDIN À SEMOUTIERS-MONTSAON ?"}
        serviceCallSubtitle="G&F NUISIBLES — VOTRE VOISIN À MONTSAON"
        intro={"Des monticules de terre qui se multiplient dans un jardin, une pelouse ou une prairie méritent une évaluation avant de poser des pièges au hasard. G&F Nuisibles, dont le siège est installé à Montsaon, propose le piégeage de taupes à Semoutiers-Montsaon (52000), commune rurale née en 1972 de la fusion des villages de Semoutiers et de Montsaon, à quelques kilomètres de Chaumont. L'évaluation du terrain identifie les galeries actives avant de poser les pièges mécaniques, qu'il s'agisse d'un jardin de particulier, d'un espace communal ou d'un terrain agricole."}
        expertise={"Les taupes creusent des galeries pour chercher leur nourriture, principalement des vers de terre, et leur activité est particulièrement visible dans les terrains humides et meubles de ce secteur traversé par la Suize. Seul un repérage des galeries principales, actives ou non, permet de positionner efficacement les pièges. Aucun produit chimique n'est utilisé : le piégeage mécanique reste la méthode la plus fiable et la plus respectueuse de l'environnement pour un jardin, un terrain agricole ou un espace communal."}
        method={"L'intervention commence par un sondage du terrain pour repérer les galeries principales et distinguer les circulations actives des anciennes galeries abandonnées. Des pièges mécaniques professionnels sont ensuite positionnés avec précision dans ces galeries. Un contrôle régulier permet de vérifier les captures et de repositionner les pièges si nécessaire. Des conseils sont donnés pour limiter une nouvelle installation, notamment sur les terrains en bordure de prairie ou de culture."}
        localContext={{ title: "Un territoire rural propice à l'activité des taupes" , content: <>
            <p>{"Semoutiers-Montsaon est une commune rurale de l'agglomération de Chaumont, née de la fusion administrative de deux villages en 1972. La Suize traverse ce territoire, et les sols humides qui bordent son cours favorisent souvent l'activité des vers de terre, donc des taupes. Selon que votre terrain se trouve à Semoutiers ou à Montsaon, l'étendue et la configuration des galeries peuvent varier : précisez votre village et la surface concernée."}</p>
            <p>{"Montsaon, où se trouve notre siège rue principale, et Semoutiers, où se situe la mairie historique rue de Neuilly, sont entourés de prairies, de jardins et de terrains agricoles où les taupinières sont une nuisance fréquente, notamment après une période pluvieuse."}</p>
            <p>{"Chaumont, préfecture de la Haute-Marne, se trouve à quelques kilomètres. La proximité d'une prairie ou d'un champ ne garantit pas la présence de taupes sur votre parcelle : seul un sondage du terrain permet de confirmer l'activité des galeries."}</p>
            <p>Les repères ci-dessus situent votre demande ; aucun lieu n'est présenté comme infesté ou client. Retrouvez des informations sur la commune sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.semoutiers.fr/" target="_blank" rel="noopener noreferrer">site officiel de la mairie de Semoutiers-Montsaon</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Semoutiers-Montsaon (52000)", intro: "Semoutiers-Montsaon réunit les villages de Semoutiers et de Montsaon. Les repères suivants aident à situer votre adresse, sans constituer une liste de lieux infestés. Précisez votre village et la surface de votre terrain lors de votre demande.", items: ["Village de Montsaon", "Village de Semoutiers", "Jardins et pelouses de particuliers", "Espaces communaux", "Prairies et terrains agricoles", "Abords de la Suize"] }}
        extraSections={[
          { title: "Taupes : les informations utiles avant la visite", content: <>
            <p>{"Notez la surface approximative concernée, le nombre de monticules visibles et leur répartition dans le jardin ou le terrain. Évitez d'arroser ou de tasser les taupinières avant la visite afin de laisser les galeries actives identifiables."}</p>
            <p>{"Le piégeage mécanique demande un peu de patience : une absence de nouvelle taupinière pendant quelques jours ne signifie pas toujours que toutes les galeries sont vidées. Un contrôle régulier des pièges reste nécessaire."}</p>
          </> },
          { title: "Prévention dans un jardin, une prairie ou un terrain agricole", content: <>
            <p>{"Un sol bien drainé limite la présence de vers de terre et rend le terrain moins attractif pour les taupes. Sur un grand terrain agricole, une surveillance régulière des bordures de prairie permet de repérer rapidement une nouvelle activité avant qu'elle ne s'étende."}</p>
            <p>{"Pour un espace communal ou une grande parcelle, précisez la surface et l'usage du terrain. Le devis indique le nombre de pièges posés et le suivi, sans déduire un prix du seul village."}</p>
          </> },
          { title: "Votre service à Semoutiers-Montsaon et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes">service taupier</Link> pour les méthodes et les prestations. Pour votre adresse à Semoutiers-Montsaon, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un devis gratuit</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-chaumont">Taupier à Chaumont</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-bologne">Taupier à Bologne</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-chateauvillain">Taupier à Châteauvillain</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Semoutiers-Montsaon", items: [
          { label: "Taupier à Chaumont", to: "/taupes-chaumont" },
          { label: "Taupier à Bologne", to: "/taupes-bologne" },
          { label: "Taupier à Châteauvillain", to: "/taupes-chateauvillain" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Semoutiers-Montsaon", to: "/deratisation-semoutiers-montsaon" },
          { label: "Désinsectisation à Semoutiers-Montsaon", to: "/desinsectisation-semoutiers-montsaon" },
          { label: "Guêpes et frelons à Semoutiers-Montsaon", to: "/guepes-frelons-semoutiers-montsaon" },
          { label: "Dépigeonnisation à Semoutiers-Montsaon", to: "/depigeonnisation-semoutiers-montsaon" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Taupes à Semoutiers-Montsaon : contactez G&F Nuisibles au 07.65.25.67.92 pour un piégeage mécanique écologique et un devis gratuit."}
      />
    </>
  );
};

export default TaupesSemoutiersMontsaon;
