import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";
import nidChaumontImg from "@/assets/nid-frelons-chaumont.jpg";

const TITLE = "Destruction nid de Guêpes & Frelons Chaumont 52 | G&F Nuisibles";
const DESCRIPTION = "Nid de guêpes ou frelons à Chaumont (52) ? G&F Nuisibles intervient en urgence 7j/7 en Haute-Marne. Destruction sécurisée dès 85 €, devis gratuit.";

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
    answer: "Pour une urgence à Chaumont ou dans les communes voisines (Chamarandes-Choignes, Brottes, Bologne, Froncles), nous intervenons généralement sous 24 h, et le jour-même quand le créneau le permet. Notre base est à Montsaon, à moins de 10 minutes de Chaumont centre.",
  },
  {
    question: "Qui doit payer la destruction d'un nid de guêpes : locataire ou propriétaire ?",
    answer: "En location, la destruction d'un nid de guêpes ou de frelons est généralement à la charge du locataire au titre de l'entretien courant. Pour un nid de frelons asiatiques (espèce classée nuisible), certaines communes de Haute-Marne participent partiellement aux frais : renseignez-vous en mairie de Chaumont avant l'intervention.",
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
    answer: "Une fois la colonie neutralisée et le nid retiré, il n'y a aucun risque que les guêpes ou frelons reviennent dans le même nid. Cependant, un nouveau nid peut être construit ailleurs si la zone reste attractive. Nous vous conseillons gratuitement après l'intervention sur les mesures de prévention adaptées à votre habitation à Chaumont.",
  },
];

const REVIEWS = [
  {
    author: "Sophie M.",
    location: "Chaumont — quartier Cavalier",
    rating: 5,
    text: "Nid de frelons asiatiques sous l'avancée du toit, intervention le jour même. Travail propre, sécurisé, et tarif annoncé respecté. Je recommande à 100 % à Chaumont.",
  },
  {
    author: "Julien R.",
    location: "Brottes (Chaumont)",
    rating: 5,
    text: "Très gros nid de guêpes dans la grange. G&F Nuisibles est passé en moins de 24h, équipement pro, plus aucune guêpe le lendemain. Parfait.",
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
        "telephone": "+33788174586",
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
          "https://www.facebook.com/profile.php?id=61560163661274"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": REVIEWS.length.toString(),
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": REVIEWS.map((r) => ({
          "@type": "Review",
          "author": { "@type": "Person", "name": r.author },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": r.rating.toString(),
            "bestRating": "5"
          },
          "reviewBody": r.text
        }))
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
        <link rel="canonical" href="https://gf-nuisibles.fr/guepes-frelons-chaumont" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Chaumont"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Bug className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À CHAUMONT ?"
        serviceCallSubtitle="G&F NUISIBLES INTERVIENT EN URGENCE POUR VOTRE SÉCURITÉ !"
        intro="À Chaumont (52000), les guêpes et frelons s'installent sous les toitures, dans les combles ou les jardins des quartiers Cavalier, La Vendue, Le Val Barizien ou Foch. Leurs piqûres représentent un danger réel, surtout pour les personnes allergiques. G&F Nuisibles détruit les nids de guêpes et frelons à Chaumont en toute sécurité avec un équipement professionnel adapté."
        expertise="Nos techniciens certifiés interviennent à Chaumont et dans les communes proches — Chamarandes-Choignes, Brottes, Bologne, Froncles, Nogent — pour la destruction de nids de guêpes, frelons européens et frelons asiatiques en Haute-Marne (52). Chaque intervention est sécurisée et garantie."
        method="Localisation précise du nid et évaluation des risques. Traitement par injection d'insecticide professionnel ou retrait mécanique. Vérification de l'élimination complète de la colonie. Conseils de prévention."
        cta="Nid de guêpes à Chaumont ? Appelez G&F Nuisibles au 07.88.17.45.86 pour une intervention rapide et sécurisée 7j/7."
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
                  les greniers, les granges et les arbres creux des jardins du Val Barizien
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
                  Devis gratuit par téléphone au <strong>07.88.17.45.86</strong>, paiement
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
            title: "Zones d'intervention autour de Chaumont",
            content: (
              <p>
                G&F Nuisibles couvre <strong>Chaumont</strong> (quartiers Cavalier,
                La Vendue, Le Val Barizien, Foch, centre-ville, Cavalier, Rochotte) et
                toutes les communes proches&nbsp;: <strong>Chamarandes-Choignes, Brottes,
                Bologne, Froncles, Nogent, Semoutiers-Montsaon, Vesaignes-sur-Marne,
                Jonchery, Verbiesles, Treix</strong>. Basés à Montsaon, nous sommes à
                moins de 10 minutes du centre de Chaumont pour une intervention rapide.
              </p>
            ),
          },
          {
            title: "Avis clients à Chaumont",
            content: (
              <div className="space-y-4">
                {REVIEWS.map((r) => (
                  <div
                    key={r.author}
                    className="rounded-lg border border-slate-100 bg-white p-4 shadow-sm"
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
        relatedLinks={[
          { label: "Guêpes & Frelons Bologne", to: "/guepes-frelons-bologne" },
          { label: "Guêpes & Frelons Froncles", to: "/guepes-frelons-froncles" },
          { label: "Guêpes & Frelons Nogent", to: "/guepes-frelons-nogent" },
          { label: "Guêpes & Frelons Chaumont (Semoutiers-Montsaon)", to: "/guepes-frelons-semoutiers-montsaon" },
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
