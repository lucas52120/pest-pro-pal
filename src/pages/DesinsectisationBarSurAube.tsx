import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation Bar-sur-Aube 10 - Intervention 24h";
const DESCRIPTION = "Cafards, punaises de lit ou puces à Bar-sur-Aube (10200) ? G&F Nuisibles identifie les insectes et adapte le traitement. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/desinsectisation-bar-sur-aube";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Traitez-vous les punaises de lit à Bar-sur-Aube ?", answer: "Oui, le diagnostic recherche les insectes et les traces sur la literie et le mobilier. Les piqûres seules ne suffisent pas ; la méthode et le suivi sont définis selon les observations." },
  { question: "Desservez-vous le centre historique de Bar-sur-Aube ?", answer: "Oui, la page concerne la commune de Bar-sur-Aube. Indiquez votre adresse complète pour confirmer les accès et préparer le diagnostic." },
  { question: "Faut-il jeter un matelas suspect ?", answer: "Pas sans diagnostic. Déplacer une literie suspecte peut disperser les insectes. Attendez les instructions concernant l'examen, le traitement et la manipulation des objets." },
  { question: "Peut-on rester sur place pendant la désinsectisation ?", answer: "Cela dépend du procédé. Les instructions de protection, d'éloignement, d'aération et de réintégration sont données avant la prestation et doivent être respectées." },
  { question: "Le traitement du logement suffit-il contre les puces ?", answer: "La prise en charge de l'animal peut être nécessaire et relève du vétérinaire. N'utilisez jamais sur un animal un produit destiné aux surfaces. Le traitement des locaux et le suivi sont adaptés au diagnostic." },
];

const DesinsectisationBarSurAube = () => {
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
        "@type": "Service", "url": URL, "name": "Désinsectisation à Bar-sur-Aube (10200) : cafards et punaises", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Bar-sur-Aube", "containedInPlace": { "@type": "AdministrativeArea", "name": "Aube" }, "address": { "@type": "PostalAddress", "postalCode": "10200", "addressRegion": "Aube", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Désinsectisation", "item": "https://gf-nuisibles.fr/desinsectisation" },
        { "@type": "ListItem", "position": 3, "name": "Bar-sur-Aube", "item": URL }
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
        city="Bar-sur-Aube"
        department="Aube (10)"
        serviceTitle={"Désinsectisation à Bar-sur-Aube (10200) : cafards et punaises"}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"CAFARDS, PUNAISES OU PUCES À BAR-SUR-AUBE ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Des traces dans la literie, des insectes près d'un point d'eau ou des piqûres répétées demandent d'abord une identification. G&F Nuisibles propose la désinsectisation à Bar-sur-Aube (10200), ancienne cité des foires de Champagne, pour les logements et les locaux professionnels. Les cafards, les punaises de lit et les puces n'ont pas les mêmes refuges ni les mêmes modes de propagation. Le traitement est choisi après examen des indices et du contexte, plutôt qu'en appliquant systématiquement un produit dans toutes les pièces."}
        expertise={"Pour les punaises de lit, l'examen porte notamment sur les coutures du matelas, le sommier et le mobilier proche. Pour les cafards, les points d'eau, les appareils et les réserves orientent l'inspection, en particulier dans les bâtiments anciens du centre-ville dotés de caves communicantes héritées des foires de Champagne. En cas de puces, signalez les animaux et leurs lieux de repos ; leur prise en charge relève aussi d'un conseil vétérinaire. Les piqûres seules ne permettent pas d'identifier une espèce. Une photographie nette, les pièces concernées et l'historique des observations sont utiles avant la venue."}
        method={"L'identification des insectes précède la proposition de traitement. Des applications ciblées ou d'autres procédés professionnels sont retenus selon le diagnostic et les surfaces. Les instructions de préparation, de protection des denrées, d'éloignement et de réintégration sont précisées avant la prestation. Le suivi dépend du cycle de l'insecte et de la situation observée. Le devis indique les passages envisagés ; aucun résultat universel ni innocuité des produits ne doit être supposé."}
        localContext={{ title: "Logements du centre historique et locaux partagés à Bar-sur-Aube", content: <>
            <p>{"Autour de l'église Saint-Pierre et de son halloy de bois, ou près de l'église Saint-Maclou, la demande peut concerner un logement, un commerce ou des pièces au-dessus d'une activité. Précisez les murs mitoyens, les réserves attenantes et les passages techniques, notamment les caves anciennes, qui pourraient nécessiter une inspection élargie."}</p>
            <p>{"La colline Sainte-Germaine et ses abords constituent un repère du centre de Bar-sur-Aube. Pour une adresse dans ce secteur, indiquez l'usage du bien et les pièces touchées, sans déplacer de mobilier suspect dans les espaces partagés avant d'avoir reçu les consignes."}</p>
            <p>{"L'Aube et les vignobles de la Côte des Bar situent la commune, mais ne permettent pas d'expliquer une présence de punaises de lit ou de cafards. Le diagnostic repose sur les indices dans votre logement, pas sur une supposition liée à la rivière ou au vignoble voisin."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun monument n'est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://barsuraube.org/bouger-et-sortir-decouvrir-notre-territoire/notre-patrimoine-bati" target="_blank" rel="noopener noreferrer">site de la Communauté de communes de la région de Bar-sur-Aube</a> et dans la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.tourisme-cotedesbar.com/patrimoine/bar-sur-aube/" target="_blank" rel="noopener noreferrer">présentation de Bar-sur-Aube par l'office de tourisme Côte des Bar</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Bar-sur-Aube (10200)", intro: "Bar-sur-Aube est une ancienne cité des foires de Champagne, traversée par l'Aube. Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre historique de Bar-sur-Aube", "Secteur de l'église Saint-Pierre", "Secteur de l'église Saint-Maclou", "Colline Sainte-Germaine", "Promenade de la Gravière, bords de l'Aube", "Direction des vignobles de la Côte des Bar"] }}
        extraSections={[
          { title: "Préparer une demande sans disperser les insectes", content: <>
            <p>{"Évitez de multiplier les sprays avant l'identification. Pour une suspicion de punaises de lit, ne transportez pas le matelas dans une autre chambre ou un couloir commun. Notez les déplacements de meubles récents et conservez les photos des traces pour orienter l'inspection."}</p>
            <p>{"Ne lancez pas un rangement ou un lavage général sans instructions. La préparation varie selon l'espèce. Pour les cafards, mentionnez les observations derrière les appareils et dans les caves communicantes ; pour les puces, précisez les zones où les animaux se reposent et demandez conseil au vétérinaire."}</p>
          </> },
          { title: "Traitement et suivi dans un logement ou un commerce", content: <>
            <p>{"Signalez les enfants, les animaux et les personnes nécessitant des précautions particulières. Selon le procédé retenu, un éloignement et une aération peuvent être nécessaires. Respectez les délais communiqués et n'effacez pas les applications ciblées en nettoyant trop tôt les surfaces traitées."}</p>
            <p>{"Dans une location, une copropriété ou un commerce du centre-ville, la coordination avec le bailleur ou le syndic peut être utile. Pour une activité alimentaire ou viticole, détaillez les contraintes de stockage et de protection des denrées. Le périmètre et le suivi sont précisés dans le devis."}</p>
          </> },
          { title: "Votre service à Bar-sur-Aube et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation">service désinsectisation en Haute-Marne et dans l'Aube</Link> pour les méthodes et les prestations. Pour votre adresse à Bar-sur-Aube, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-chaumont">Désinsectisation à Chaumont</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-langres">Désinsectisation à Langres</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-chateauvillain">Désinsectisation à Châteauvillain</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Bar-sur-Aube", items: [
          { label: "Désinsectisation à Chaumont", to: "/desinsectisation-chaumont" },
          { label: "Désinsectisation à Langres", to: "/desinsectisation-langres" },
          { label: "Désinsectisation à Châteauvillain", to: "/desinsectisation-chateauvillain" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Bar-sur-Aube", to: "/deratisation-bar-sur-aube" },
          { label: "Guêpes et frelons à Bar-sur-Aube", to: "/guepes-frelons-bar-sur-aube" },
          { label: "Dépigeonnisation à Bar-sur-Aube", to: "/depigeonnisation-bar-sur-aube" },
          { label: "Taupier à Bar-sur-Aube", to: "/taupes-bar-sur-aube" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Désinsectisation à Bar-sur-Aube : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DesinsectisationBarSurAube;
