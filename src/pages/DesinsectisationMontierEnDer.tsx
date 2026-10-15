import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation à Montier-en-Der (52220) : cafards et punaises | G&F Nuisibles";
const DESCRIPTION = "Cafards, punaises de lit ou puces à Montier-en-Der (52220) ? G&F Nuisibles identifie les insectes et adapte le traitement. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/desinsectisation-montier-en-der";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Traitez-vous les punaises de lit à Montier-en-Der ?", answer: "Oui, le diagnostic recherche les insectes et les traces sur la literie et le mobilier. Les piqûres seules ne suffisent pas ; la méthode et le suivi sont définis selon les observations." },
  { question: "Desservez-vous le centre de La Porte du Der ?", answer: "La page concerne Montier-en-Der, commune déléguée de La Porte du Der. Indiquez votre adresse complète pour confirmer les accès et préparer le diagnostic." },
  { question: "Faut-il jeter un matelas suspect ?", answer: "Pas sans diagnostic. Déplacer une literie suspecte peut disperser les insectes. Attendez les instructions concernant l’examen, le traitement et la manipulation des objets." },
  { question: "Peut-on rester sur place pendant la désinsectisation ?", answer: "Cela dépend du procédé. Les instructions de protection, d’éloignement, d’aération et de réintégration sont données avant la prestation et doivent être respectées." },
  { question: "Le traitement du logement suffit-il contre les puces ?", answer: "La prise en charge de l’animal peut être nécessaire et relève du vétérinaire. N’utilisez jamais sur un animal un produit destiné aux surfaces. Le traitement des locaux et le suivi sont adaptés au diagnostic." },
];

const DesinsectisationMontierEnDer = () => {
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
        "@type": "Service", "url": URL, "name": "Désinsectisation à Montier-en-Der (52220) : cafards et punaises", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Montier-en-Der", "containedInPlace": { "@type": "AdministrativeArea", "name": "La Porte du Der" }, "address": { "@type": "PostalAddress", "postalCode": "52220", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Désinsectisation", "item": "https://gf-nuisibles.fr/desinsectisation" },
        { "@type": "ListItem", "position": 3, "name": "Montier-en-Der", "item": URL }
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
        city="Montier-en-Der"
        department="Haute-Marne (52)"
        serviceTitle={"Désinsectisation à Montier-en-Der (52220) : cafards et punaises"}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"CAFARDS, PUNAISES OU PUCES À MONTIER-EN-DER ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Des traces dans la literie, des insectes près d’un point d’eau ou des piqûres répétées demandent d’abord une identification. G&F Nuisibles propose la désinsectisation à Montier-en-Der (52220), au sein de La Porte du Der, pour les logements et les locaux professionnels. Les cafards, les punaises de lit et les puces n’ont pas les mêmes refuges ni les mêmes modes de propagation. Le traitement est choisi après examen des indices et du contexte, plutôt qu’en appliquant systématiquement un produit dans toutes les pièces."}
        expertise={"Pour les punaises de lit, l’examen porte notamment sur les coutures du matelas, le sommier et le mobilier proche. Pour les cafards, les points d’eau, les appareils et les réserves orientent l’inspection. En cas de puces, signalez les animaux et leurs lieux de repos ; leur prise en charge relève aussi d’un conseil vétérinaire. Les piqûres seules ne permettent pas d’identifier une espèce. Une photographie nette, les pièces concernées et l’historique des observations sont utiles avant la venue."}
        method={"L’identification des insectes précède la proposition de traitement. Des applications ciblées ou d’autres procédés professionnels sont retenus selon le diagnostic et les surfaces. Les instructions de préparation, de protection des denrées, d’éloignement et de réintégration sont précisées avant la prestation. Le suivi dépend du cycle de l’insecte et de la situation observée. Le devis indique les passages envisagés ; aucun résultat universel ni innocuité des produits ne doit être supposé."}
        localContext={{ title: "Logements du centre et locaux partagés à La Porte du Der", content: <>
            <p>{"Autour de l’abbatiale Saint-Pierre-et-Saint-Paul et de la halle au blé, la demande peut concerner un logement, un commerce ou des pièces au-dessus d’une activité. Précisez les murs mitoyens, les réserves attenantes et les passages techniques qui pourraient nécessiter une inspection élargie."}</p>
            <p>{"Le haras constitue un repère du centre de Montier-en-Der. Pour une adresse dans ce secteur, indiquez l’usage du bien et les pièces touchées, sans déplacer de mobilier suspect dans les espaces partagés avant d’avoir reçu les consignes."}</p>
            <p>{"La Voire et la proximité du pays du Der situent la commune, mais ne permettent pas d’expliquer une présence de punaises de lit ou de cafards. Le diagnostic repose sur les indices dans votre logement, pas sur une supposition liée à la rivière ou au voisinage."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun monument n’est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.laporteduder.fr/tourisme-decouverte-patrimoine/montier-en-der" target="_blank" rel="noopener noreferrer">site de la mairie de La Porte du Der</a> et dans la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.lacduder.com/decouvrir-explorer/nos-incontournables/montier-en-der/" target="_blank" rel="noopener noreferrer">présentation de Montier-en-Der par l’office de tourisme du lac du Der</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Montier-en-Der (52220)", intro: "Montier-en-Der est une commune déléguée de La Porte du Der. Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre de Montier-en-Der", "Secteur de l’abbatiale Saint-Pierre-et-Saint-Paul", "Secteur du haras", "Abords de la halle au blé", "Abords de la Voire", "Direction de l’hippodrome de la Crouée"] }}
        extraSections={[
          { title: "Préparer une demande sans disperser les insectes", content: <>
            <p>{"Évitez de multiplier les sprays avant l’identification. Pour une suspicion de punaises de lit, ne transportez pas le matelas dans une autre chambre ou un couloir commun. Notez les déplacements de meubles récents et conservez les photos des traces pour orienter l’inspection."}</p>
            <p>{"Ne lancez pas un rangement ou un lavage général sans instructions. La préparation varie selon l’espèce. Pour les cafards, mentionnez les observations derrière les appareils ; pour les puces, précisez les zones où les animaux se reposent et demandez conseil au vétérinaire."}</p>
          </> },
          { title: "Traitement et suivi dans un logement ou un commerce", content: <>
            <p>{"Signalez les enfants, les animaux et les personnes nécessitant des précautions particulières. Selon le procédé retenu, un éloignement et une aération peuvent être nécessaires. Respectez les délais communiqués et n’effacez pas les applications ciblées en nettoyant trop tôt les surfaces traitées."}</p>
            <p>{"Dans une location, une copropriété ou un local partagé à Montier-en-Der, la coordination avec le bailleur ou le syndic peut être utile. Pour une activité alimentaire, détaillez les contraintes de stockage et de protection des denrées. Le périmètre et le suivi sont précisés dans le devis."}</p>
          </> },
          { title: "Votre service à Montier-en-Der et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation">service désinsectisation en Haute-Marne</Link> pour les méthodes et les prestations. Pour votre adresse à Montier-en-Der, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-wassy">Désinsectisation à Wassy</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-saint-dizier">Désinsectisation à Saint-Dizier</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-joinville">Désinsectisation à Joinville</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Montier-en-Der", items: [
          { label: "Désinsectisation à Wassy", to: "/desinsectisation-wassy" },
          { label: "Désinsectisation à Saint-Dizier", to: "/desinsectisation-saint-dizier" },
          { label: "Désinsectisation à Joinville", to: "/desinsectisation-joinville" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Montier-en-Der", to: "/deratisation-montier-en-der" },
          { label: "Guêpes et frelons à Montier-en-Der", to: "/guepes-frelons-montier-en-der" },
          { label: "Dépigeonnisation à Montier-en-Der", to: "/depigeonnisation-montier-en-der" },
          { label: "Taupier à Montier-en-Der", to: "/taupes-montier-en-der" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Désinsectisation à Montier-en-Der : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DesinsectisationMontierEnDer;
