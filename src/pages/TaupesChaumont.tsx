import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupier Chaumont 52 - Piégeage Taupes, Devis Gratuit";
const DESCRIPTION = "Taupinières dans votre jardin à Chaumont (52000) ou Brottes ? G&F Nuisibles repère les galeries actives et propose un piégeage mécanique sur devis gratuit.";
const URL = "https://gf-nuisibles.fr/taupes-chaumont";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Une dizaine de taupinières signifie-t-elle dix taupes ?", answer: "Non. Une seule taupe peut produire plusieurs monticules en utilisant son réseau de galeries. Le repérage des passages actifs est plus utile que le simple comptage des taupinières pour préparer le piégeage." },
  { question: "Intervenez-vous dans les jardins de Brottes et du Cavalier ?", answer: "Oui, G&F Nuisibles dessert ces secteurs de Chaumont ainsi que les autres quartiers. Précisez l’adresse du terrain, sa surface approximative et les conditions d’accès pour préparer la visite depuis Montsaon." },
  { question: "Le piégeage des taupes utilise-t-il des produits chimiques ?", answer: "La méthode proposée repose sur des pièges mécaniques, sans produit chimique. Cela ne dispense pas de précautions : ne manipulez pas les dispositifs et tenez les enfants et animaux éloignés des zones signalées." },
  { question: "Faut-il aplatir les taupinières avant votre venue ?", answer: "Évitez de remanier tout le terrain avant le diagnostic. Les déblais frais et les traces de circulation aident à repérer l’activité. Demandez les consignes adaptées au jardin lors de la prise de contact." },
  { question: "Pouvez-vous garantir qu’aucune taupe ne reviendra ?", answer: "Non, une parcelle ouverte peut être recolonisée depuis les environs. Le devis précise le périmètre de l’intervention et le suivi prévu ; une protection définitive de tout le jardin ne doit pas être promise." },
];

const TaupesChaumont = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://gf-nuisibles.fr/#organization",
        "url": "https://gf-nuisibles.fr",
        "name": "G&F Nuisibles",
        "telephone": "+33765256792",
        "sameAs": ["https://www.facebook.com/gfnuisibles"],
        "address": { "@type": "PostalAddress", "streetAddress": "27 rue principale", "addressLocality": "Montsaon", "postalCode": "52000", "addressRegion": "Haute-Marne", "addressCountry": "FR" }
      },
      {
        "@type": "Service", "url": URL, "name": "Taupier à Chaumont (52000) : taupes dans les jardins et pelouses", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Chaumont", "address": { "@type": "PostalAddress", "postalCode": "52000", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Taupier", "item": "https://gf-nuisibles.fr/taupes" },
        { "@type": "ListItem", "position": 3, "name": "Chaumont", "item": URL }
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
        city="Chaumont"
        department="Haute-Marne (52)"
        serviceTitle={"Taupier à Chaumont (52000) : taupes dans les jardins et pelouses"}
        icon={<Target className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"TAUPINIÈRES DANS VOTRE JARDIN À CHAUMONT ?"}
        serviceCallSubtitle={"REPÉRER LES GALERIES ACTIVES AVANT DE PIÉGER"}
        intro={"Des monticules de terre réapparaissent sur votre pelouse à Chaumont ou Brottes ? G&F Nuisibles propose un service de taupier à Chaumont (52000), en Haute-Marne, fondé sur le repérage des galeries et le piégeage mécanique. Le nombre de taupinières ne correspond pas au nombre de taupes : un même animal peut circuler dans un réseau étendu. Avant de choisir une action, il faut distinguer une galerie active d’une ancienne trace et vérifier l’animal concerné."}
        expertise={"Basée à Montsaon, l’entreprise dessert les jardins de particuliers et les terrains professionnels du secteur chaumontais. Le repérage tient compte de la surface, des zones récemment remuées et des usages du terrain. Le piégeage mécanique ne nécessite pas de produit chimique, mais les pièges restent des dispositifs à ne pas manipuler. Les enfants et les animaux doivent être tenus à l’écart des zones indiquées."}
        method={"L’examen du terrain recherche les galeries fréquentées et les points adaptés à la pose. Les pièges mécaniques sont installés dans le réseau identifié, puis contrôlés selon le protocole convenu. Les conditions d’accès au jardin et le suivi sont définis dans le devis. Nous expliquons les précautions et les signes à surveiller après le passage : le terrain reste ouvert à une éventuelle recolonisation."}
        localContext={{ title: "Des jardins de Brottes aux parcelles des quartiers chaumontais", content: <>
<p>{"À Brottes, au Cavalier ou à Foch, précisez si les taupinières concernent une pelouse, un potager ou un verger. Les limites du terrain, les plantations et les zones de passage déterminent où rechercher les galeries. La présence de taupes se constate sur la parcelle : elle ne se déduit pas du seul nom du quartier ou de la proximité d’un espace vert."}</p>
<p>{"Le jardin Agathe Roullot et le viaduc de Chaumont, au-dessus de la vallée de la Suize, sont des repères du cadre paysager local, pas des références clients. Pour votre terrain à Chaumont, en direction de Chamarandes-Choignes ou des communes voisines, indiquez les accès et les zones utilisées par le public. Un jardin privé et un espace partagé ne s’organisent pas de la même manière."}</p>
<p>Pour situer ces lieux, consultez le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.ville-chaumont.fr/decouvrir-chaumont/tourisme-et-patrimoine/" target="_blank" rel="noopener noreferrer">patrimoine présenté par la Ville de Chaumont</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs desservis à Chaumont (52000)", intro: "Ces repères permettent de situer votre demande, sans présumer de la présence de nuisibles dans un quartier. Chamarandes-Choignes et Treix sont des communes voisines, distinctes de Chaumont.", items: ["Centre historique, basilique Saint-Jean-Baptiste et donjon", "Cavalier", "Foch", "La Rochotte", "Brottes", "Secteur gare et viaduc", "La Vendue et la Dame Huguenotte"] }}
        extraSections={[
          { title: "Taupes ou campagnols : ne pas se fier seulement aux monticules", content: <>
<p>{"La taupe se nourrit notamment de vers de terre et d’invertébrés ; des racines rongées peuvent orienter vers un autre animal, comme un campagnol. La forme des déblais et l’organisation des galeries apportent des indices, mais ne remplacent pas le repérage. Décrivez les dégâts, leur localisation et leur évolution avant de demander un traitement."}</p>
<p>{"Ne versez pas de carburant, de produits ménagers ou de substances improvisées dans les galeries. Ces pratiques peuvent contaminer le sol et exposer les personnes ou les animaux, sans résoudre la cause du problème. Évitez aussi de bouleverser tout le réseau avant la visite, ce qui rend le repérage plus difficile."}</p>
          </> },
          { title: "Préparer la visite du taupier et le suivi du terrain", content: <>
<p>{"Indiquez la surface approximative, les premières dates d’apparition et les endroits où de la terre fraîche est visible. Des photos prises depuis le jardin peuvent aider. Signalez les arrosages enterrés, les câbles connus, les zones fréquentées par les enfants et la présence d’animaux avant la pose des pièges."}</p>
<p>{"Le coût dépend de la surface, de la dispersion des galeries, de l’accès et des contrôles nécessaires. Le diagnostic et le devis sont gratuits. Demandez comment se déroule le suivi et quelles zones ne pas toucher pendant l’intervention. Aucune méthode ne peut garantir qu’une taupe ne reviendra jamais depuis un terrain voisin."}</p>
          </> },
          { title: "Votre demande à Chaumont et les communes voisines", content: <>
<p>Découvrez les méthodes de notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes">service taupier en Haute-Marne</Link>. Pour votre adresse à Chaumont, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Vous résidez plus au nord ou au sud de Chaumont ? Consultez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-bologne">Taupier à Bologne</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-nogent">Taupier à Nogent</Link>. Retrouvez également notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link>.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales près de Chaumont", items: [
          { label: "Taupier à Bologne", to: "/taupes-bologne" },
          { label: "Taupier à Nogent", to: "/taupes-nogent" },
          { label: "Taupier à Châteauvillain", to: "/taupes-chateauvillain" },
          { label: "Taupier à Semoutiers-Montsaon", to: "/taupes-semoutiers-montsaon" },
        ] }}
        faqItems={FAQ_ITEMS}
        cta={"Taupier à Chaumont : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits adaptés à votre situation."}
      />
    </>
  );
};

export default TaupesChaumont;
