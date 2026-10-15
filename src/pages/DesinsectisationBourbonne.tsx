import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation à Bourbonne-les-Bains (52400) : cafards et punaises | G&F Nuisibles";
const DESCRIPTION = "Cafards, punaises de lit ou puces à Bourbonne-les-Bains (52400) ? G&F Nuisibles identifie les insectes et adapte le traitement. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/desinsectisation-bourbonne-les-bains";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Traitez-vous les punaises de lit à Bourbonne-les-Bains ?", answer: "Oui, le diagnostic recherche les insectes et les traces sur la literie et le mobilier. Les piqûres seules ne suffisent pas ; la méthode et le suivi sont définis selon les observations." },
  { question: "Desservez-vous Bourbonne-les-Bains et son territoire ?", answer: "Oui, indiquez votre adresse complète à Bourbonne-les-Bains pour confirmer les accès et préparer le diagnostic." },
  { question: "Faut-il jeter un matelas suspect ?", answer: "Pas sans diagnostic. Déplacer une literie suspecte peut disperser les insectes. Attendez les instructions concernant l'examen, le traitement et la manipulation des objets." },
  { question: "Peut-on rester sur place pendant la désinsectisation ?", answer: "Cela dépend du procédé. Les instructions de protection, d'éloignement, d'aération et de réintégration sont données avant la prestation et doivent être respectées." },
  { question: "Le traitement du logement suffit-il contre les puces ?", answer: "La prise en charge de l'animal peut être nécessaire et relève du vétérinaire. N'utilisez jamais sur un animal un produit destiné aux surfaces. Le traitement des locaux et le suivi sont adaptés au diagnostic." },
];

const DesinsectisationBourbonne = () => {
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
        "@type": "Service", "url": URL, "name": "Désinsectisation à Bourbonne-les-Bains (52400) : cafards et punaises", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Bourbonne-les-Bains", "containedInPlace": { "@type": "AdministrativeArea", "name": "la Communauté de communes des Savoir-Faire" }, "address": { "@type": "PostalAddress", "postalCode": "52400", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Désinsectisation", "item": "https://gf-nuisibles.fr/desinsectisation" },
        { "@type": "ListItem", "position": 3, "name": "Bourbonne-les-Bains", "item": URL }
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
        city="Bourbonne-les-Bains"
        department="Haute-Marne (52)"
        serviceTitle={"Désinsectisation à Bourbonne-les-Bains (52400) : cafards et punaises"}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"CAFARDS, PUNAISES OU PUCES À BOURBONNE-LES-BAINS ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Des traces dans la literie, des insectes près d'un point d'eau ou des piqûres répétées demandent d'abord une identification. G&F Nuisibles propose la désinsectisation à Bourbonne-les-Bains (52400), au sein de la Communauté de communes des Savoir-Faire, pour les logements et les locaux professionnels. Les cafards, les punaises de lit et les puces n'ont pas les mêmes refuges ni les mêmes modes de propagation. Le traitement est choisi après examen des indices et du contexte, plutôt qu'en appliquant systématiquement un produit dans toutes les pièces."}
        expertise={"Pour les punaises de lit, l'examen porte notamment sur les coutures du matelas, le sommier et le mobilier proche. Pour les cafards, les points d'eau, les appareils et les réserves orientent l'inspection. En cas de puces, signalez les animaux et leurs lieux de repos ; leur prise en charge relève aussi d'un conseil vétérinaire. Les piqûres seules ne permettent pas d'identifier une espèce. Une photographie nette, les pièces concernées et l'historique des observations sont utiles avant la venue."}
        method={"L'identification des insectes précède la proposition de traitement. Des applications ciblées ou d'autres procédés professionnels sont retenus selon le diagnostic et les surfaces. Les instructions de préparation, de protection des denrées, d'éloignement et de réintégration sont précisées avant la prestation. Le suivi dépend du cycle de l'insecte et de la situation observée. Le devis indique les passages envisagés ; aucun résultat universel ni innocuité des produits ne doit être supposé."}
        localContext={{ title: "Centre thermal, Porte-Galon et abords de l'Apance", content: <>
            <p>{"Autour des Thermes de Bourbonne-les-Bains et du centre-ville, précisez si la demande concerne un hôtel, une résidence de curistes, un commerce ou un logement. L'activité saisonnière liée au thermalisme implique souvent des locaux occupés de façon temporaire, ce qui doit être signalé pour organiser l'accès."}</p>
            <p>{"La Porte-Galon, vestige des anciens remparts, et le secteur du casino situent le centre historique. Pour une adresse proche de ces repères, décrivez les caves, les dépendances et les éventuels passages communs avec un bâtiment voisin."}</p>
            <p>{"L'Apance traverse la commune et le ruisseau de Borne arrose aussi le centre. Pour un bien situé près de ces cours d'eau, le diagnostic porte sur vos accès, vos canalisations et les indices observés dans le bâtiment : la présence de l'eau à proximité ne permet pas à elle seule de conclure à une infestation."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun lieu n'est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://bourbonne.com/geographie/" target="_blank" rel="noopener noreferrer">site officiel de la ville thermale de Bourbonne-les-Bains</a> et sur la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://bourbonne.com/les-thermes/" target="_blank" rel="noopener noreferrer">page dédiée aux thermes de Bourbonne-les-Bains</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Bourbonne-les-Bains (52400)", intro: "Bourbonne-les-Bains fait partie de la Communauté de communes des Savoir-Faire. Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre-ville et secteur des Thermes", "Abords de la Porte-Galon", "Secteur du casino et du pôle culturel", "Abords de l'Apance", "Abords du ruisseau de Borne", "Hameaux et écarts de la commune"] }}
        extraSections={[
          { title: "Préparer une demande sans disperser les insectes", content: <>
            <p>{"Évitez de multiplier les sprays avant l'identification. Pour une suspicion de punaises de lit, ne transportez pas le matelas dans une autre chambre ou un couloir commun. Notez les déplacements de meubles récents et conservez les photos des traces pour orienter l'inspection."}</p>
            <p>{"Ne lancez pas un rangement ou un lavage général sans instructions. La préparation varie selon l'espèce. Pour les cafards, mentionnez les observations derrière les appareils ; pour les puces, précisez les zones où les animaux se reposent et demandez conseil au vétérinaire."}</p>
          </> },
          { title: "Traitement et suivi dans un logement ou un commerce à Bourbonne-les-Bains", content: <>
            <p>{"Signalez les enfants, les animaux et les personnes nécessitant des précautions particulières. Selon le procédé retenu, un éloignement et une aération peuvent être nécessaires. Respectez les délais communiqués et n'effacez pas les applications ciblées en nettoyant trop tôt les surfaces traitées."}</p>
            <p>{"Dans une location, une copropriété ou un local partagé à {name}, la coordination avec le bailleur ou le syndic peut être utile. Pour une activité alimentaire, détaillez les contraintes de stockage et de protection des denrées. Le périmètre et le suivi sont précisés dans le devis."}</p>
          </> },
          { title: "Votre service à Bourbonne-les-Bains et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation">service désinsectisation en Haute-Marne</Link> pour les méthodes et les prestations. Pour votre adresse à Bourbonne-les-Bains, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-chalindrey">Désinsectisation à Chalindrey</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-chateauvillain">Désinsectisation à Châteauvillain</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Bourbonne-les-Bains", items: [
          { label: "Désinsectisation à Chalindrey", to: "/desinsectisation-chalindrey" },
          { label: "Désinsectisation à Châteauvillain", to: "/desinsectisation-chateauvillain" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Bourbonne-les-Bains", to: "/deratisation-bourbonne-les-bains" },
          { label: "Guêpes et frelons à Bourbonne-les-Bains", to: "/guepes-frelons-bourbonne-les-bains" },
          { label: "Dépigeonnisation à Bourbonne-les-Bains", to: "/depigeonnisation-bourbonne-les-bains" },
          { label: "Taupier à Bourbonne-les-Bains", to: "/taupes-bourbonne-les-bains" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Désinsectisation à Bourbonne-les-Bains : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DesinsectisationBourbonne;
