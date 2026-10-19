import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";
import nidChaumontImg from "@/assets/nid-frelons-chaumont.jpg";

const TITLE = "Destruction nid Guêpes & Frelons Chaumont 52 - Intervention 24h";
const DESCRIPTION = "Nid de guêpes ou frelons à Chaumont (52) ? G&F Nuisibles intervient en urgence 7j/7 en Haute-Marne. Destruction sécurisée dès 85 €, devis gratuit.";

const URL = "https://gf-nuisibles.fr/guepes-frelons-chaumont";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le prix pour détruire un nid de frelons à Chaumont ?",
    answer: "Nos tarifs pour une destruction de nid à Chaumont débutent à partir de 85 €. Le prix dépend de la hauteur et de l'accessibilité du nid. Nous validons toujours un prix ferme avec vous avant l'intervention : aucune mauvaise surprise sur la facture finale.",
  },
  {
    question: "Est-il dangereux de détruire le nid soi-même ?",
    answer: "Oui, c'est extrêmement dangereux. Les méthodes artisanales ou les bombes du commerce provoquent souvent des attaques collectives massives. Nos techniciens en Haute-Marne utilisent des combinaisons spécialisées et du matériel professionnel pour neutraliser le nid en toute sécurité.",
  },
  {
    question: "Comment différencier un nid de guêpes d'un nid de frelons ?",
    answer: "La guêpe est petite et jaune vif, tandis que le frelon est bien plus gros et bruyant. Le frelon asiatique se reconnaît à ses pattes jaunes et son corps très sombre. Leurs nids ressemblent à de grosses boules de papier mâché souvent haut perchées. Dans tous les cas, gardez une distance de sécurité de 5 mètres.",
  },
  {
    question: "En combien de temps intervenez-vous à Chaumont ?",
    answer: "Pour un nid à Chaumont, à Brottes ou dans les communes voisines comme Chamarandes-Choignes et Bologne, décrivez son emplacement et les risques d’exposition. Notre base est à Montsaon. Le créneau est confirmé lors de votre appel selon les disponibilités et les conditions d’accès.",
  },
  {
    question: "Qui doit payer la destruction d'un nid de guêpes : locataire ou propriétaire ?",
    answer: "La répartition dépend de la situation, notamment de la date d’apparition du nid, des parties concernées et des obligations du bail. Prévenez le propriétaire ou le syndic avant l’intervention. Si vous cherchez une aide locale, vérifiez directement auprès de la mairie les conditions en vigueur : aucune prise en charge n’est présumée.",
  },
  {
    question: "Faut-il vraiment détruire un nid de guêpes en hiver ?",
    answer: "Non. Les colonies de guêpes et frelons européens meurent naturellement avec les premières gelées en Haute-Marne (généralement fin octobre/novembre). Seules les reines hivernent. Le nid abandonné ne sera pas réoccupé l'année suivante. Inutile donc de payer une intervention l'hiver, sauf nid de frelons asiatiques actif.",
  },
  {
    question: "Intervenez-vous chez les professionnels à Chaumont ?",
    answer: "Oui. G&F Nuisibles intervient pour les particuliers comme pour les professionnels de Chaumont : commerces du centre-ville, restaurants, écoles, copropriétés, sites industriels de la zone de la Vendue ou du Cavalier, exploitations agricoles. Nous fournissons facture et rapport d'intervention.",
  },
  {
    question: "Le nid revient-il après destruction ?",
    answer: "Après traitement, une activité résiduelle peut demander une vérification selon les consignes données. Ne vous approchez pas du nid pour le contrôler vous-même. Un autre nid peut apparaître ultérieurement ailleurs ; le suivi et les conditions de réintervention sont expliqués pour votre situation.",
  },
];

const REVIEWS = [
  {
    author: "Ema Hanuszek",
    location: "Chaumont",
    rating: 5,
    text: "Très satisfaite de la prestation de ce professionnel. Il a traité un nid de frelon sous ma table de jardin à Chaumont de manière très sécurisée. Devis clair et respecté. C'est un excellent désinsectiseur local. Un grand merci pour votre réactivité !",
  },
  {
    author: "Sebastien Babinski",
    location: "Chaumont",
    rating: 5,
    text: "Contact agréable. Intervention rapide et efficace sur un nid de guêpes. Je recommande ce professionnel.",
  },
  {
    author: "Valerie Moock",
    location: "Brethenay (Chaumont)",
    rating: 5,
    text: "Intervention très rapide et efficace sur un nid de guêpes sur Brethenay. Contact super et agréable. Je recommande ce professionnel.",
  },
];

const GuepesFrelonsChaumont = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://gf-nuisibles.fr/#organization",
        "url": "https://gf-nuisibles.fr",
        "name": "G&F Nuisibles",
        "telephone": "+33765256792",
        "priceRange": "$$",
        "image": "https://gf-nuisibles.fr/og-image.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "27 rue principale",
          "addressLocality": "Montsaon",
          "postalCode": "52000",
          "addressRegion": "Haute-Marne",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 48.0856,
          "longitude": 5.1858
        },
        "areaServed": [
          { "@type": "City", "name": "Chaumont" },
          { "@type": "City", "name": "Chamarandes-Choignes" },
          { "@type": "City", "name": "Brottes" },
          { "@type": "City", "name": "Bologne" },
          { "@type": "AdministrativeArea", "name": "Haute-Marne" }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/gfnuisibles"
        ]
      },
      {
        "@type": "Service",
        "url": "https://gf-nuisibles.fr/guepes-frelons-chaumont",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": {
          "@id": "https://gf-nuisibles.fr/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Chaumont"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "EUR",
          "lowPrice": "85",
          "highPrice": "180",
          "offerCount": "4"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
          { "@type": "ListItem", "position": 2, "name": "Guêpes & Frelons", "item": "https://gf-nuisibles.fr/guepes-frelons" },
          { "@type": "ListItem", "position": 3, "name": "Chaumont", "item": "https://gf-nuisibles.fr/guepes-frelons-chaumont" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
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
        city="Chaumont"
        department="Haute-Marne (52)"
        serviceTitle="Destruction de nids de guêpes et frelons à Chaumont (52000)"
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À CHAUMONT ?"
        serviceCallSubtitle="G&F NUISIBLES INTERVIENT EN URGENCE POUR VOTRE SÉCURITÉ !"
        intro="À Chaumont (52000), les guêpes et frelons s'installent sous les toitures, dans les combles ou les jardins des secteurs Cavalier, La Vendue, Brottes ou Foch. Leurs piqûres représentent un danger réel, surtout pour les personnes allergiques. G&F Nuisibles détruit les nids de guêpes et frelons à Chaumont en toute sécurité avec un équipement professionnel adapté."
        expertise="Nos techniciens certifiés interviennent à Chaumont et dans les communes proches — Chamarandes-Choignes, Brottes, Bologne, Froncles, Nogent — pour la destruction de nids de guêpes, frelons européens et frelons asiatiques en Haute-Marne (52). Les mesures de protection et les conditions de suivi sont expliquées avant le passage."
        method="Localisation précise du nid et évaluation des risques. Traitement par injection d'insecticide professionnel ou retrait mécanique. Vérification de l'élimination complète de la colonie. Conseils de prévention."
        cta="Nid de guêpes à Chaumont ? Appelez G&F Nuisibles au 07.65.25.67.92 pour une intervention rapide et sécurisée 7j/7."
        faqItems={FAQ_ITEMS}
        localImage={{
          src: nidChaumontImg,
          alt: "Destruction d'un nid de frelons asiatiques à Chaumont (Brottes) par G&F Nuisibles",
          caption: "Nid de frelons asiatiques sous une toiture à Brottes (Chaumont, 52) — intervention G&F Nuisibles.",
        }}
        extraSections={[
          {
            title: "Guêpes, frelons européens, frelons asiatiques : bien identifier l'espèce à Chaumont",
            content: (
              <>
                <p>
                  À Chaumont et en Haute-Marne, trois espèces principales construisent
                  des nids près des habitations. La <strong>guêpe commune</strong> (jaune vif,
                  2 cm) niche souvent dans les volets, les coffres de stores ou sous les tuiles.
                  Le <strong>frelon européen</strong>, plus gros (3 cm, brun-jaune), apprécie
                  les greniers, les granges et les arbres creux des jardins de Brottes
                  ou de Foch. Le <strong>frelon asiatique</strong> (corps très sombre, pattes
                  jaunes) est désormais bien implanté en Haute-Marne : ses nids sphériques,
                  parfois de plus de 60 cm, se trouvent en hauteur dans les arbres, sous les
                  avancées de toit ou les abris de jardin.
                </p>
                <p>
                  Une mauvaise identification fait perdre du temps et augmente le risque.
                  Nos techniciens valident l'espèce dès l'arrivée à Chaumont et adaptent
                  le protocole : un nid de frelons asiatiques en hauteur ne se traite pas
                  comme un nid de guêpes dans un volet.
                </p>
              </>
            ),
          },
          {
            title: "Tarifs destruction de nid à Chaumont (52)",
            content: (
              <>
                <p>
                  Nos prix sont annoncés <strong>fermes avant l'intervention</strong>,
                  sans frais cachés. Voici les fourchettes pratiquées à Chaumont&nbsp;:
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>Nid de guêpes accessible (volet, sol, &lt; 3 m) : <strong>à partir de 85 €</strong></li>
                  <li>Nid de frelons européens (toiture, combles) : <strong>110 € à 150 €</strong></li>
                  <li>Nid de frelons asiatiques en hauteur (perche télescopique) : <strong>130 € à 180 €</strong></li>
                  <li>Intervention week-end ou urgence soir : <strong>+ 20 à 30 €</strong></li>
                </ul>
                <p>
                  Devis gratuit par téléphone au <strong>07.65.25.67.92</strong>, paiement
                  après intervention, facture remise systématiquement.
                </p>
              </>
            ),
          },
          {
            title: "Quand intervenir ? Saisonnalité à Chaumont",
            content: (
              <>
                <p>
                  En Haute-Marne, la saison des guêpes et frelons s'étend
                  d'<strong>avril à octobre</strong>. Les premiers nids apparaissent au
                  printemps (taille d'une balle de ping-pong, fondés par une seule reine)
                  et grossissent jusqu'en août-septembre, période la plus dangereuse à
                  Chaumont où les colonies peuvent compter <strong>plusieurs milliers
                  d'individus</strong>.
                </p>
                <p>
                  Le bon réflexe : intervenir <strong>dès la découverte du nid</strong>,
                  même petit. Un nid détruit au printemps coûte moins cher, prend moins de
                  temps et présente beaucoup moins de risques qu'un nid mature en plein été.
                </p>
              </>
            ),
          },
          {
            title: "Préparer votre demande sans approcher le nid",
            content: <>
              <p>Depuis un endroit sûr, notez si les insectes entrent dans un volet, sous une tuile ou dans un arbre. Décrivez la hauteur approximative, l’accès depuis la rue ou le jardin et la proximité d’une porte, d’une terrasse ou d’un passage. Une photo prise à distance peut aider ; il n’est pas nécessaire de monter sur une échelle ni de dégager la toiture pour la réaliser.</p>
              <p>N’obstruez pas l’entrée d’un nid dans un mur et ne tentez pas de le brûler, de le noyer ou de le décrocher. Éloignez enfants et animaux, évitez les vibrations à proximité et demandez conseil avant de manœuvrer un volet occupé. En cas de réaction allergique ou de difficulté à respirer après une piqûre, appelez le 15 ou le 112 : une entreprise de désinsectisation ne remplace pas les secours médicaux.</p>
            </>
          },
          {
            title: "Des liens utiles pour Chaumont et ses environs",
            content: <>
              <p>Retrouvez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons">service de destruction de nids de guêpes et frelons en Haute-Marne</Link> pour comprendre les méthodes. Pour votre adresse à Chaumont, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un devis</Link> en précisant l’emplacement du nid.</p>
              <p>Vous êtes à proximité ? Consultez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-bologne">guêpes et frelons à Bologne</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-nogent">guêpes et frelons à Nogent</Link>, ainsi que notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link>.</p>
            </>
          },
          {
            title: "Avis Google de nos clients à Chaumont",
            content: (
              <div className="space-y-4">
                {REVIEWS.map((r) => (
                  <div
                    key={r.author}
                    className="rounded-lg border border-border bg-background p-4 shadow-sm"
                  >
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-accent">{"★".repeat(r.rating)}</span>
                      <span className="font-semibold text-primary">{r.author}</span>
                      <span className="text-xs text-muted-foreground">— {r.location}</span>
                    </div>
                    <p className="text-sm italic text-muted-foreground">« {r.text} »</p>
                  </div>
                ))}
              </div>
            ),
          },
        ]}
        localContext={{ title: "Un nid dans le centre de Chaumont ou dans un jardin de Brottes", content: <>
          <p>Autour de la basilique Saint-Jean-Baptiste et du donjon, comme dans le secteur de la gare et du viaduc, l’accès au bâtiment compte autant que l’emplacement du nid. Précisez si la cour est fermée, si l’entrée donne sur une rue passante ou si un passage commun doit être protégé. Ces monuments sont des repères locaux et ne sont pas présentés comme des lieux d’intervention ou d’infestation.</p>
          <p>Au Cavalier, à Foch, à La Rochotte et à Brottes, les demandes peuvent concerner une haie, un abri ou une toiture. À La Vendue, signalez aussi les zones de livraison et les horaires d’activité afin de préparer la sécurisation des abords. La méthode dépend du nid observé, pas d’un risque supposé identique pour tout le quartier.</p>
          <p>Ces repères figurent dans les informations de la <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.ville-chaumont.fr/decouvrir-chaumont/tourisme-et-patrimoine/" target="_blank" rel="noopener noreferrer">Ville de Chaumont et son patrimoine</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs desservis à Chaumont (52000)", intro: "Brottes fait partie de Chaumont. Chamarandes-Choignes et Treix sont des communes voisines ; précisez votre adresse lors de l’appel.", items: ["Centre historique, basilique et donjon", "Cavalier", "Foch", "La Rochotte", "Brottes", "Gare et viaduc", "La Vendue"] }}
        nearbyCities={{ title: "Guêpes et frelons dans les communes voisines", items: [
          { label: "Guêpes et frelons à Bologne", to: "/guepes-frelons-bologne" },
          { label: "Guêpes et frelons à Nogent", to: "/guepes-frelons-nogent" },
          { label: "Guêpes et frelons à Semoutiers-Montsaon", to: "/guepes-frelons-semoutiers-montsaon" },
        ] }}
        relatedLinks={[
          { label: "Service guêpes et frelons en Haute-Marne", to: "/guepes-frelons" },
          { label: "Guêpes & Frelons Bologne", to: "/guepes-frelons-bologne" },
          { label: "Guêpes & Frelons Froncles", to: "/guepes-frelons-froncles" },
          { label: "Guêpes & Frelons Nogent", to: "/guepes-frelons-nogent" },
          { label: "Guêpes & Frelons à Semoutiers-Montsaon", to: "/guepes-frelons-semoutiers-montsaon" },
          { label: "Dératisation à Chaumont", to: "/deratisation-chaumont" },
          { label: "Désinsectisation à Chaumont", to: "/desinsectisation-chaumont" },
          { label: "Dépigeonnisation à Chaumont", to: "/depigeonnisation-chaumont" },
          { label: "Taupes à Chaumont", to: "/taupes-chaumont" },
        ]}
      />
    </>
  );
};

export default GuepesFrelonsChaumont;
