import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Désinsectisation Vitry-le-François 51 - Intervention 24h";
const DESCRIPTION = "Cafards, punaises de lit ou fourmis à Vitry-le-François (51300) ? G&F Nuisibles identifie l'espèce et adapte le traitement. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/desinsectisation-vitry-le-francois";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Intervenez-vous dans les logements et commerces du centre de Vitry-le-François ?", answer: "Oui, les particuliers comme les professionnels installés autour de la place d'Armes ou ailleurs en ville peuvent demander un diagnostic. Précisez le type de logement ou de local, les pièces concernées et depuis quand vous observez des insectes." },
  { question: "Comment reconnaître une infestation de punaises de lit ?", answer: "Des piqûres groupées au réveil, de petites taches sombres sur la literie ou des insectes aplatis près des coutures de matelas sont des indices fréquents. Un diagnostic sur place confirme l'espèce avant tout traitement, car plusieurs nuisibles peuvent laisser des traces similaires." },
  { question: "La présence de cafards dans un immeuble ancien est-elle automatique ?", answer: "Non. L'ancienneté d'un bâtiment n'explique pas à elle seule une infestation. Les réseaux de canalisations partagés entre logements ou commerces peuvent faciliter une propagation, ce qui justifie parfois une coordination avec la copropriété ou les voisins." },
  { question: "Faut-il préparer le logement avant votre venue ?", answer: "Des consignes simples vous sont données selon l'espèce suspectée : dégagement des plinthes, lavage du linge à bonne température pour les punaises de lit, ou retrait des denrées exposées pour les cafards et fourmis. Elles sont précisées lors de la prise de rendez-vous." },
  { question: "Quel est le prix d'une désinsectisation à Vitry-le-François ?", answer: "Le prix dépend de l'espèce identifiée, de la surface à traiter et du nombre de passages nécessaires. Un diagnostic et un devis gratuits permettent de préciser les prestations avant votre accord." },
];

const DesinsectisationVitryLeFrancois = () => {
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
        "@type": "Service", "url": URL, "name": "Désinsectisation à Vitry-le-François (51300) : cafards, punaises", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Vitry-le-François", "address": { "@type": "PostalAddress", "postalCode": "51300", "addressRegion": "Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Désinsectisation", "item": "https://gf-nuisibles.fr/desinsectisation" },
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
        serviceTitle={"Désinsectisation à Vitry-le-François (51300) : cafards, punaises"}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"CAFARDS, PUNAISES OU FOURMIS À VITRY-LE-FRANÇOIS ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC AVANT TOUT TRAITEMENT"
        intro={"Des cafards vus la nuit dans une cuisine, des piqûres inexpliquées au réveil ou une colonie de fourmis le long d'une plinthe méritent une identification précise avant tout traitement. G&F Nuisibles propose la désinsectisation à Vitry-le-François (51300), ville fondée par François Ier au confluent de la Marne et de la Saulx, pour les particuliers, les commerces et les professionnels. Chaque espèce d'insecte a un mode de vie différent ; le traitement doit correspondre à l'insecte réellement identifié plutôt qu'à une hypothèse générale."}
        expertise={"Punaises de lit, cafards, fourmis ou puces n'ont ni les mêmes abris, ni les mêmes habitudes. Les punaises de lit se logent près des zones de couchage, les cafards recherchent chaleur et humidité, notamment en cuisine ou salle de bain. Un diagnostic sur place, avec inspection des plinthes, meubles et zones sensibles, permet de confirmer l'espèce avant de proposer un protocole adapté. Nous utilisons des produits biocides homologués, dont l'usage est réservé aux professionnels formés."}
        method={"L'inspection identifie les zones infestées et l'ampleur du phénomène. Selon l'espèce, le traitement combine pulvérisation, gel insecticide ou nébulisation, avec un ou plusieurs passages selon le cycle de vie de l'insecte. Des consignes de préparation et de suivi vous sont données pour limiter les reprises, notamment pour les punaises de lit dont l'éradication demande souvent plusieurs interventions espacées."}
        localContext={{ title: "Place d'Armes, Collégiale Notre-Dame et quartiers de Vitry-le-François", content: <>
            <p>{"Dans le centre reconstruit autour de la Place d'Armes et de la Collégiale Notre-Dame, logements, commerces et bureaux doivent préciser le type de local concerné lors de la demande. La ville, en damier depuis sa fondation au XVIe siècle, compte des immeubles aux réseaux de canalisations parfois partagés entre plusieurs lots."}</p>
            <p>{"Vitry-le-François se situe au confluent de la Marne et de la Saulx, et au carrefour de plusieurs canaux. Pour un bien proche de l'eau, le diagnostic porte sur les accès et les indices observés dans le logement : la proximité d'un cours d'eau n'explique pas à elle seule une présence d'insectes."}</p>
            <p>{"Dans le quartier du Bas-Village, développé historiquement le long de la rivière, comme dans les zones commerciales plus récentes, chaque demande est traitée selon la configuration réelle du bâtiment."}</p>
            <p>Retrouvez ces repères sur la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.vitry-le-francois.net/articles/patrimoine/" target="_blank" rel="noopener noreferrer">page patrimoine de la mairie de Vitry-le-François</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs et repères à Vitry-le-François (51300)", intro: "Les repères suivants aident à situer votre adresse, sans constituer une liste de quartiers administratifs ou de lieux infestés. Précisez votre rue et les accès lors de votre demande.", items: ["Centre-ville et Place d'Armes", "Secteur de la Collégiale Notre-Dame", "Quartier du Bas-Village", "Abords de la Marne et de la Saulx", "Secteur de la gare", "Zones commerciales périphériques"] }}
        extraSections={[
          { title: "Cafards, punaises de lit, fourmis : agir selon l'espèce", content: <>
            <p>{"Évitez de déplacer les meubles infestés sans précaution avant la visite, cela peut disperser les insectes dans d'autres pièces. Conservez si possible un échantillon ou une photo de l'insecte observé, utile pour orienter l'identification avant l'intervention."}</p>
            <p>{"Pour les punaises de lit, informez vos voisins si vous vivez en immeuble collectif : une propagation entre logements adjacents est possible par les gaines techniques ou les parties communes."}</p>
          </> },
          { title: "Prévention dans un logement ou un commerce à Vitry-le-François", content: <>
            <p>{"Limitez les sources d'humidité et de nourriture accessibles, notamment en cuisine. Un entretien régulier des zones de stockage et des join de plomberie réduit les conditions favorables à l'installation des insectes."}</p>
            <p>{"Pour un commerce alimentaire, précisez vos contraintes sanitaires et vos horaires d'ouverture : le devis tient compte du périmètre réel et des passages nécessaires, sans se fonder sur le seul quartier."}</p>
          </> },
          { title: "Votre service à Vitry-le-François et dans le secteur", content: <>
            <p>Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation">service désinsectisation</Link> pour les méthodes et les prestations. Pour votre adresse à Vitry-le-François, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
            <p>Pour un bien dans une autre ville du secteur, retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-saint-dizier">Désinsectisation à Saint-Dizier</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-wassy">Désinsectisation à Wassy</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/desinsectisation-montier-en-der">Désinsectisation à Montier-en-Der</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet aussi de situer votre demande.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Vitry-le-François", items: [
          { label: "Désinsectisation à Saint-Dizier", to: "/desinsectisation-saint-dizier" },
          { label: "Désinsectisation à Wassy", to: "/desinsectisation-wassy" },
          { label: "Désinsectisation à Montier-en-Der", to: "/desinsectisation-montier-en-der" },
        ] }}
        relatedLinks={[
          { label: "Dépigeonnisation à Vitry-le-François", to: "/depigeonnisation-vitry-le-francois" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Désinsectisation à Vitry-le-François : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. L'espèce, le périmètre et les passages sont confirmés selon votre situation."}
      />
    </>
  );
};

export default DesinsectisationVitryLeFrancois;
