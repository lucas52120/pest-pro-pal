import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation Châteauvillain 52 - Intervention 24h";
const DESCRIPTION = "Cafards, punaises de lit ou puces à Châteauvillain (52120) ? G&F Nuisibles identifie les insectes et adapte le traitement. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/desinsectisation-chateauvillain";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Traitez-vous les punaises de lit à Châteauvillain ?", answer: "Oui, le diagnostic recherche les insectes et les traces sur la literie et le mobilier. Les piqûres seules ne suffisent pas ; la méthode et le suivi sont définis selon les observations." },
  { question: "Desservez-vous Châteauvillain et son territoire ?", answer: "Oui, indiquez votre adresse complète à Châteauvillain pour confirmer les accès et préparer le diagnostic." },
  { question: "Faut-il jeter un matelas suspect ?", answer: "Pas sans diagnostic. Déplacer une literie suspecte peut disperser les insectes. Attendez les instructions concernant l'examen, le traitement et la manipulation des objets." },
  { question: "Peut-on rester sur place pendant la désinsectisation ?", answer: "Cela dépend du procédé. Les instructions de protection, d'éloignement, d'aération et de réintégration sont données avant la prestation et doivent être respectées." },
  { question: "Le traitement du logement suffit-il contre les puces ?", answer: "La prise en charge de l'animal peut être nécessaire et relève du vétérinaire. N'utilisez jamais sur un animal un produit destiné aux surfaces. Le traitement des locaux et le suivi sont adaptés au diagnostic." },
];

const DesinsectisationChateauvillain = () => {
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
        "@type": "Service", "url": URL, "name": "Désinsectisation à Châteauvillain (52120) : cafards et punaises", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Châteauvillain", "containedInPlace": { "@type": "AdministrativeArea", "name": "la Communauté de communes des Trois Forêts" }, "address": { "@type": "PostalAddress", "postalCode": "52120", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Désinsectisation", "item": "https://gf-nuisibles.fr/desinsectisation" },
        { "@type": "ListItem", "position": 3, "name": "Châteauvillain", "item": URL }
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
        city="Châteauvillain"
        department="Haute-Marne (52)"
        serviceTitle={"Désinsectisation à Châteauvillain (52120) : cafards et punaises"}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"CAFARDS, PUNAISES OU PUCES À CHÂTEAUVILLAIN ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Des traces dans la literie, des insectes près d'un point d'eau ou des piqûres répétées demandent d'abord une identification. G&F Nuisibles propose la désinsectisation à Châteauvillain (52120), au sein de la Communauté de communes des Trois Forêts, pour les logements et les locaux professionnels. Les cafards, les punaises de lit et les puces n'ont pas les mêmes refuges ni les mêmes modes de propagation. Le traitement est choisi après examen des indices et du contexte, plutôt qu'en appliquant systématiquement un produit dans toutes les pièces."}
        expertise={"Pour les punaises de lit, l'examen porte notamment sur les coutures du matelas, le sommier et le mobilier proche. Pour les cafards, les points d'eau, les appareils et les réserves orientent l'inspection. En cas de puces, signalez les animaux et leurs lieux de repos ; leur prise en charge relève aussi d'un conseil vétérinaire. Les piqûres seules ne permettent pas d'identifier une espèce. Une photographie nette, les pièces concernées et l'historique des observations sont utiles avant la venue."}
        method={"L'identification des insectes précède la proposition de traitement. Des applications ciblées ou d'autres procédés professionnels sont retenus selon le diagnostic et les surfaces. Les instructions de préparation, de protection des denrées, d'éloignement et de réintégration sont précisées avant la prestation. Le suivi dépend du cycle de l'insecte et de la situation observée. Le devis indique les passages envisagés ; aucun résultat universel ni innocuité des produits ne doit être supposé."}
        localContext={{ title: "Remparts, Porte Madame et boucle de l'Aujon", content: <>
            <p>{"Châteauvillain est une Petite Cité de Caractère lovée dans une boucle de l'Aujon. Pour un bien situé près de la rivière, le diagnostic porte sur vos accès et les indices observés dans le bâtiment : la proximité de l'eau ne permet pas à elle seule de conclure à une infestation."}</p>
            <p>{"Dans le centre historique, autour des remparts, de la tour Saint-Marc et de la tour de l'Auditoire, les maisons anciennes aux caves voûtées et aux dépendances mitoyennes demandent de préciser les accès et les éventuels passages communs avec un voisin."}</p>
            <p>{"Le secteur de la Porte Madame ouvre sur le Parc aux Daims, en lisière de la forêt d'Arc-Châteauvillain. Pour une propriété proche de ces espaces boisés, décrivez le jardin, les dépendances et les abords du bâtiment plutôt que de présumer une origine liée à la forêt."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun lieu n'est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.bienvenue-hautemarne.fr/villes-cites-caractere/petites-cites-de-caractere/chateauvillain/" target="_blank" rel="noopener noreferrer">page de l'office de tourisme Haute-Marne Attractivité sur Châteauvillain</a> et sur la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://fr.wikipedia.org/wiki/Ch%C3%A2teauvillain" target="_blank" rel="noopener noreferrer">page Wikipédia de Châteauvillain</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Châteauvillain (52120)", intro: "Châteauvillain fait partie de la Communauté de communes des Trois Forêts. Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre historique et remparts", "Secteur de la tour Saint-Marc", "Abords de la Porte Madame et du Parc aux Daims", "Abords de l'Aujon", "Lisière de la forêt d'Arc-Châteauvillain"] }}
        extraSections={[
          { title: "Préparer une demande sans disperser les insectes", content: <>
            <p>{"Évitez de multiplier les sprays avant l'identification. Pour une suspicion de punaises de lit, ne transportez pas le matelas dans une autre chambre ou un couloir commun. Notez les déplacements de meubles récents et conservez les photos des traces pour orienter l'inspection."}</p>
            <p>{"Ne lancez pas un rangement ou un lavage général sans instructions. La préparation varie selon l'espèce. Pour les cafards, mentionnez les observations derrière les appareils ; pour les puces, précisez les zones où les animaux se reposent et demandez conseil au vétérinaire."}</p>
          </> },
          { title: "Traitement et suivi dans un logement ou un commerce à Châteauvillain", content: <>
            <p>{"Signalez les enfants, les animaux et les personnes nécessitant des précautions particulières. Selon le procédé retenu, un éloignement et une aération peuvent être nécessaires. Respectez les délais communiqués et n'effacez pas les applications ciblées en nettoyant trop tôt les surfaces traitées."}</p>
            <p>{"Dans une location, une copropriété ou un local partagé à {name}, la coordination avec le bailleur ou le syndic peut être utile. Pour une activité alimentaire, détaillez les contraintes de stockage et de protection des denrées. Le périmètre et le suivi sont précisés dans le devis."}</p>
          </> },
          { title: "Votre service à Châteauvillain et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation">service désinsectisation en Haute-Marne</Link> pour les méthodes et les prestations. Pour votre adresse à Châteauvillain, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-bourbonne-les-bains">Désinsectisation à Bourbonne-les-Bains</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-chalindrey">Désinsectisation à Chalindrey</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Châteauvillain", items: [
          { label: "Désinsectisation à Bourbonne-les-Bains", to: "/desinsectisation-bourbonne-les-bains" },
          { label: "Désinsectisation à Chalindrey", to: "/desinsectisation-chalindrey" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Châteauvillain", to: "/deratisation-chateauvillain" },
          { label: "Guêpes et frelons à Châteauvillain", to: "/guepes-frelons-chateauvillain" },
          { label: "Dépigeonnisation à Châteauvillain", to: "/depigeonnisation-chateauvillain" },
          { label: "Taupier à Châteauvillain", to: "/taupes-chateauvillain" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Désinsectisation à Châteauvillain : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DesinsectisationChateauvillain;
