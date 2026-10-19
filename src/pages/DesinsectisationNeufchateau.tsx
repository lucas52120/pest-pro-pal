import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation Neufchâteau 88 - Intervention 24h";
const DESCRIPTION = "Cafards, punaises de lit ou puces à Neufchâteau (88300) ? G&F Nuisibles identifie les insectes et adapte le traitement. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/desinsectisation-neufchateau";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Traitez-vous les punaises de lit à Neufchâteau ?", answer: "Oui, le diagnostic recherche les insectes et les traces sur la literie et le mobilier. Les piqûres seules ne suffisent pas ; la méthode et le suivi sont définis selon les observations." },
  { question: "Intervenez-vous dans le centre ancien de Neufchâteau ?", answer: "Oui, dans le centre historique comme dans les quartiers périphériques. Indiquez votre adresse complète pour confirmer les accès et préparer le diagnostic, notamment dans un immeuble mitoyen." },
  { question: "Faut-il jeter un matelas suspect ?", answer: "Pas sans diagnostic. Déplacer une literie suspecte peut disperser les insectes. Attendez les instructions concernant l’examen, le traitement et la manipulation des objets." },
  { question: "Peut-on rester sur place pendant la désinsectisation ?", answer: "Cela dépend du procédé. Les instructions de protection, d’éloignement, d’aération et de réintégration sont données avant la prestation et doivent être respectées." },
  { question: "Le traitement du logement suffit-il contre les puces ?", answer: "La prise en charge de l’animal peut être nécessaire et relève du vétérinaire. N’utilisez jamais sur un animal un produit destiné aux surfaces. Le traitement des locaux et le suivi sont adaptés au diagnostic." },
];

const DesinsectisationNeufchateau = () => {
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
        "@type": "Service", "url": URL, "name": "Désinsectisation à Neufchâteau (88300) : cafards et punaises", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Neufchâteau", "containedInPlace": { "@type": "AdministrativeArea", "name": "Vosges" }, "address": { "@type": "PostalAddress", "postalCode": "88300", "addressRegion": "Vosges", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Désinsectisation", "item": "https://gf-nuisibles.fr/desinsectisation" },
        { "@type": "ListItem", "position": 3, "name": "Neufchâteau", "item": URL }
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
        city="Neufchâteau"
        department="Vosges (88)"
        serviceTitle={"Désinsectisation à Neufchâteau (88300) : cafards et punaises"}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"CAFARDS, PUNAISES OU PUCES À NEUFCHÂTEAU ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Des traces dans la literie, des insectes près d’un point d’eau ou des piqûres répétées demandent d’abord une identification. G&F Nuisibles propose la désinsectisation à Neufchâteau (88300), sous-préfecture des Vosges, pour les logements et les locaux professionnels. Les cafards, les punaises de lit et les puces n’ont pas les mêmes refuges ni les mêmes modes de propagation. Le traitement est choisi après examen des indices et du contexte, plutôt qu’en appliquant systématiquement un produit dans toutes les pièces."}
        expertise={"Pour les punaises de lit, l’examen porte notamment sur les coutures du matelas, le sommier et le mobilier proche. Pour les cafards, les points d’eau, les appareils et les réserves orientent l’inspection, en particulier dans les immeubles anciens et mitoyens du centre. En cas de puces, signalez les animaux et leurs lieux de repos ; leur prise en charge relève aussi d’un conseil vétérinaire. Les piqûres seules ne permettent pas d’identifier une espèce. Une photographie nette, les pièces concernées et l’historique des observations sont utiles avant la venue."}
        method={"L’identification des insectes précède la proposition de traitement. Des applications ciblées ou d’autres procédés professionnels sont retenus selon le diagnostic et les surfaces. Les instructions de préparation, de protection des denrées, d’éloignement et de réintégration sont précisées avant la prestation. Le suivi dépend du cycle de l’insecte et de la situation observée. Le devis indique les passages envisagés ; aucun résultat universel ni innocuité des produits ne doit être supposé."}
        localContext={{ title: "Logements du centre ancien et locaux mitoyens à Neufchâteau", content: <>
            <p>{"Autour de la place Jeanne-d’Arc et des églises Saint-Christophe et Saint-Nicolas, le bâti continu du Site Patrimonial Remarquable rapproche souvent les logements. Précisez les murs mitoyens, les réserves attenantes et les passages techniques qui pourraient nécessiter une inspection élargie avec le voisinage ou la copropriété."}</p>
            <p>{"L’ancien quartier des Tanneries, le long du Mouzon, regroupe des maisons resserrées dont l’historique bâti peut favoriser certains refuges. Pour une adresse dans ce secteur, indiquez l’usage du bien et les pièces touchées, sans déplacer de mobilier suspect dans les espaces partagés avant d’avoir reçu les consignes."}</p>
            <p>{"La Meuse et le Mouzon situent la ville, mais ne permettent pas d’expliquer une présence de punaises de lit ou de cafards. Le diagnostic repose sur les indices dans votre logement, pas sur une supposition liée aux cours d’eau ou au quartier."}</p>
            <p>Les noms ci-dessus situent votre demande ; aucun monument n’est présenté comme infesté ou client. Retrouvez ces repères sur le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.tourisme.vosges.fr/decouvrir/sites-monuments/984001835-centre-historique-de-neufchateau-neufchateau" target="_blank" rel="noopener noreferrer">site de l’office de tourisme de l’Ouest des Vosges</a> et dans la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://fr.wikipedia.org/wiki/Neufch%C3%A2teau_(Vosges)" target="_blank" rel="noopener noreferrer">présentation de Neufchâteau</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Neufchâteau (88300)", intro: "Neufchâteau est la sous-préfecture de l’Ouest vosgien. Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre historique de Neufchâteau", "Secteur de la place Jeanne-d’Arc", "Abords de l’église Saint-Nicolas", "Ancien quartier des Tanneries", "Abords de la Meuse", "Abords du Mouzon"] }}
        extraSections={[
          { title: "Préparer une demande sans disperser les insectes", content: <>
            <p>{"Évitez de multiplier les sprays avant l’identification. Pour une suspicion de punaises de lit, ne transportez pas le matelas dans une autre chambre ou un couloir commun, surtout dans un immeuble ancien où les logements sont rapprochés. Notez les déplacements de meubles récents et conservez les photos des traces pour orienter l’inspection."}</p>
            <p>{"Ne lancez pas un rangement ou un lavage général sans instructions. La préparation varie selon l’espèce. Pour les cafards, mentionnez les observations derrière les appareils ; pour les puces, précisez les zones où les animaux se reposent et demandez conseil au vétérinaire."}</p>
          </> },
          { title: "Traitement et suivi dans un logement ou un commerce", content: <>
            <p>{"Signalez les enfants, les animaux et les personnes nécessitant des précautions particulières. Selon le procédé retenu, un éloignement et une aération peuvent être nécessaires. Respectez les délais communiqués et n’effacez pas les applications ciblées en nettoyant trop tôt les surfaces traitées."}</p>
            <p>{"Dans une location, une copropriété du centre ancien ou un local partagé à Neufchâteau, la coordination avec le bailleur ou le syndic peut être utile. Pour une activité alimentaire, détaillez les contraintes de stockage et de protection des denrées. Le périmètre et le suivi sont précisés dans le devis."}</p>
          </> },
          { title: "Votre service à Neufchâteau et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation">service désinsectisation</Link> pour les méthodes et les prestations. Pour votre adresse à Neufchâteau, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-vittel">Désinsectisation à Vittel</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-chaumont">Désinsectisation à Chaumont</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-bologne">Désinsectisation à Bologne</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link> permet aussi de situer votre demande. Le créneau et les prestations sont confirmés selon votre situation.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Neufchâteau", items: [
          { label: "Désinsectisation à Vittel", to: "/desinsectisation-vittel" },
          { label: "Désinsectisation à Chaumont", to: "/desinsectisation-chaumont" },
          { label: "Désinsectisation à Bologne", to: "/desinsectisation-bologne" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Neufchâteau", to: "/deratisation-neufchateau" },
          { label: "Dépigeonnisation à Neufchâteau", to: "/depigeonnisation-neufchateau" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Désinsectisation à Neufchâteau : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Le périmètre, les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DesinsectisationNeufchateau;
