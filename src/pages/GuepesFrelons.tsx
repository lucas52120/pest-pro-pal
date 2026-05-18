import { Zap, Plus, Minus } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/service-guepes.jpg";
import comparatifFrelons from "@/assets/comparatif-frelons.png";
import guepeVol from "@/assets/guepe-vol.jpg";
import nidGuepes from "@/assets/nid-guepes.jpg";
import nidFrelonAsiatique from "@/assets/nid-frelon-asiatique.jpg";

const FAQ_ITEMS = [
  {
    question: "Quelles différences entre frelon européen et frelon asiatique ?",
    answer: `Il est essentiel de savoir les distinguer, car leur comportement et la dangerosité du nid diffèrent. À Chaumont, et ses communes alentour en Haute-Marne, nous rencontrons de plus en plus de frelons asiatiques, particulièrement agressifs près de leur colonie.\n\nLe Frelon Européen (Vespa crabro) : C'est le plus grand (entre 25 et 35 mm). Il ressemble à une grosse guêpe. Son corps est taché de roux, de noir et de jaune. Ses pattes sont brunes. Il est plutôt pacifique, sauf si l'on s'approche trop près du nid.\n\nLe Frelon Asiatique (Vespa velutina) : Plus petit que son cousin européen (entre 20 et 30 mm), il est très sombre. On le reconnaît à son thorax noir, son segment abdominal orangé et surtout ses pattes aux extrémités jaunes (d'où son surnom de frelon à pattes jaunes).`,
  },
  {
    question: "Caractéristiques physiques : comment reconnaître l'insecte qui vous envahit ?",
    answer: `La Guêpe (Vespula) : petite et élancée (10-19 mm), jaune vif et noir profond sans poils apparents, "taille de guêpe" caractéristique.\n\nLe Frelon Européen (Vespa crabro) : le géant (25-35 mm), teintes rousses sur le thorax et les pattes, abdomen très jaune rayé de noir, bourdonnement grave en vol.\n\nLe Frelon Asiatique (Vespa velutina) : silhouette sombre et plus petite (20-30 mm), thorax noir mat, face orangée, pattes aux extrémités jaune vif. Concernant les nids : guêpes dans le sol, fissures de murs ou sous tuiles (papier gris) ; frelon européen dans les cavités (arbres creux, greniers, cheminées) ; frelon asiatique en hauteur dans la cime des arbres, sphère pouvant atteindre 1 mètre.`,
  },
  {
    question: "Comment déceler la présence d'un nid chez vous ?",
    answer: `Plusieurs signes doivent vous alerter : un va-et-vient incessant d'insectes au même endroit (sous une tuile, dans une fissure de mur, dans un coffre de volet roulant) indique une activité de colonie ; un grattage ou bourdonnement sourd derrière un plafond ou une cloison placo signale souvent la construction d'un nid. Les lieux fréquents de nidification sont les greniers, hangars, remises, abris, la cime des arbres, les creux d'arbres, les rebords, avant-toits, linteaux, fissures et amas de matériaux (bûches, souches, branchages). Si vous remarquez un nid à Chaumont, Langres, Saint-Dizier ou ailleurs en Haute-Marne (52), contactez G&F Nuisibles immédiatement au 07.65.25.67.92 pour un diagnostic gratuit.`,
  },
  {
    question: "Comportement et Agressivité",
    answer: `La Guêpe : opportuniste et curieuse, elle s'invite à vos tables et devient agressive si on tente de la chasser brusquement. Le Frelon Européen : plutôt pacifique et discret, il ne pique que pour défendre son nid ou s'il est manipulé, et reste actif la nuit attiré par les lumières. Le Frelon Asiatique : très territorial, il déclenche des attaques collectives dès qu'on s'approche à moins de 5 mètres de son nid. Dangers pour l'Homme : choc anaphylactique en cas d'allergie, piqûre plus profonde injectant plus de venin pouvant traverser les vêtements légers, attaques multiples du frelon asiatique = danger vital immédiat. Pour les abeilles, le frelon asiatique est un prédateur redoutable menaçant gravement la biodiversité et la production de miel locale en Haute-Marne.`,
  },
];

const CITY_LINKS = [
  { label: "Chaumont", to: "/guepes-frelons-chaumont" },
  { label: "Langres", to: "/guepes-frelons-langres" },
  { label: "Saint-Dizier", to: "/guepes-frelons-saint-dizier" },
  { label: "Joinville", to: "/guepes-frelons-joinville" },
  { label: "Bar-sur-Aube", to: "/guepes-frelons-bar-sur-aube" },
  { label: "Bourbonne-les-Bains", to: "/guepes-frelons-bourbonne" },
  { label: "Wassy", to: "/guepes-frelons-wassy" },
  { label: "Bologne", to: "/guepes-frelons-bologne" },
  { label: "Froncles", to: "/guepes-frelons-froncles" },
  { label: "Nogent", to: "/guepes-frelons-nogent" },
  { label: "Chalindrey", to: "/guepes-frelons-chalindrey" },
  { label: "Arc-en-Barrois", to: "/guepes-frelons-arc-en-barrois" },
  { label: "Châteauvillain", to: "/guepes-frelons-chateauvillain" },
  { label: "Montier-en-Der", to: "/guepes-frelons-montier-en-der" },
  { label: "Semoutiers-Montsaon", to: "/guepes-frelons-semoutiers-montsaon" },
];

const REVIEWS = [
  {
    author: "Marc D.",
    city: "Chaumont",
    rating: 5,
    text: "Intervention en 2h pour un nid de frelons asiatiques sur ma cheminée. Très professionnel, équipement impressionnant, prix annoncé respecté. Je recommande sans hésiter.",
  },
  {
    author: "Sophie L.",
    city: "Langres",
    rating: 5,
    text: "Nid de guêpes énorme sous notre toiture. G&F Nuisibles est venu un dimanche après-midi en urgence. Travail propre, garantie respectée. Merci !",
  },
  {
    author: "Jean-Pierre M.",
    city: "Saint-Dizier",
    rating: 5,
    text: "Très bon contact téléphonique, diagnostic clair, devis transparent. Le nid de frelons européens dans le grenier a été détruit en 30 minutes. Parfait.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://gf-nuisibles.fr/#organization",
      "url": "https://gf-nuisibles.fr",
      name: "G&F Nuisibles",
      image: "https://gf-nuisibles.fr/og-image.png",
      telephone: "+33765256792",
      address: {
        "@type": "PostalAddress",
        streetAddress: "27 rue principale",
        addressLocality: "Montsaon",
        postalCode: "52000",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.0856,
        longitude: 5.1858,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      sameAs: ["https://www.facebook.com/profile.php?id=61566255861001"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "27",
      },
      priceRange: "$$",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Haute-Marne (52)",
      },
    },
    {
      "@type": "Service",
      url: "https://gf-nuisibles.fr/guepes-frelons",
      name: "Destruction de nids de guêpes et frelons en Haute-Marne",
      provider: { "@id": "https://gf-nuisibles.fr/#organization" },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Haute-Marne (52)",
      },
      description:
        "Expert en destruction de nid de guêpes & frelons en Haute-Marne 52. Diagnostic GRATUIT, intervention rapide et efficace 7j/7.",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: "85",
        highPrice: "180",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", position: 2, name: "Nos services", item: "https://gf-nuisibles.fr/#services" },
        { "@type": "ListItem", position: 3, name: "Guêpes & Frelons", item: "https://gf-nuisibles.fr/guepes-frelons" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    ...REVIEWS.map((r) => ({
      "@type": "Review",
      itemReviewed: { "@id": "https://gf-nuisibles.fr/#organization" },
      author: { "@type": "Person", name: r.author },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    })),
  ],
};

const GuepesFrelons = () => {
  const accordionRef = useRef<HTMLDivElement>(null);

  const handleValueChange = useCallback((value: string) => {
    if (!value) return;
    setTimeout(() => {
      const el = document.querySelector(`[data-state="open"][data-value="${value}"]`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  }, []);

  return (
    <>
      <Helmet>
        <title>Destruction Guêpes & Frelons Haute-Marne 52 | GF Nuisibles</title>
        <meta
          name="description"
          content="Votre expert en destruction de nid de guêpes & frelons en Haute-Marne 52. Diagnostic GRATUIT, intervention rapide et efficace 7j/7 appelez-nous !"
        />
        <link rel="canonical" href="https://gf-nuisibles.fr/guepes-frelons" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <ServicePageLayout
        icon={<Zap className="h-8 w-8" />}
        title="Destruction de nids de guêpes et frelons en Haute-Marne (52)"
        subtitle="Destruction de nids de guêpes et frelons en toute sécurité en Haute-Marne."
        heroImage={heroImage}
        sidebarImage={heroImage}
        serviceCallTitle="VOTRE LOGEMENT OU LOCAL PROFESSIONNEL SUBIT UNE INVASION DE GUÊPES OU DE FRELONS ?"
        serviceCallSubtitle="CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DE LA DESTRUCTION DE NIDS DE GUÊPES ET FRELONS !"
        problem="Un nid de guêpes ou de frelons près de votre habitation représente un danger réel. Les piqûres peuvent provoquer des réactions allergiques graves, voire un choc anaphylactique. Ne prenez aucun risque et faites appel à un professionnel."
        expertise="GF Nuisibles intervient rapidement pour la destruction de nids de guêpes, frelons européens et frelons asiatiques. Nos techniciens sont équipés pour intervenir en hauteur et dans les zones difficiles d'accès (toitures, cheminées, arbres)."
        method="Après un diagnostic précis de la situation, nous procédons à la neutralisation du nid avec des produits professionnels homologués. L'intervention est rapide et sécurisée pour vous et votre entourage."
        engagement="Intervention garantie, même en urgence le week-end. Nous nous déplaçons sur Chaumont, Langres et l'ensemble de la Haute-Marne (52)."
      >
        {/* FAQ Expert Section */}
        <section className="section-padding">
          <div className="container-narrow">
            <h2 className="mb-8 font-heading text-3xl font-extrabold text-primary md:text-4xl">
              Tout savoir sur les guêpes et frelons
            </h2>

            <Accordion
              type="single"
              collapsible
              className="w-full space-y-4"
              ref={accordionRef}
              onValueChange={handleValueChange}
            >
              {/* Q1 */}
              <AccordionItem value="q1" data-value="q1" className="border-none">
                <AccordionTrigger className="justify-start gap-3 py-5 text-left hover:no-underline [&[data-state=open]>svg.plus-icon]:hidden [&[data-state=closed]>svg.minus-icon]:hidden [&>svg.chevron]:hidden">
                  <Plus className="plus-icon h-5 w-5 shrink-0 text-accent" />
                  <Minus className="minus-icon h-5 w-5 shrink-0 text-accent" />
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    Quelles différences entre frelon européen et frelon asiatique ?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-foreground">
                  <p className="mb-4">
                    Il est essentiel de savoir les distinguer, car leur comportement et la dangerosité du nid diffèrent. À Chaumont, et ses communes alentour en Haute-Marne, nous rencontrons de plus en plus de frelons asiatiques, particulièrement agressifs près de leur colonie.
                  </p>
                  <p className="mb-4">
                    <strong>Le Frelon Européen (Vespa crabro) :</strong> C'est le plus grand (entre 25 et 35 mm). Il ressemble à une grosse guêpe. Son corps est taché de roux, de noir et de jaune. Ses pattes sont brunes. Il est plutôt pacifique, sauf si l'on s'approche trop près du nid.
                  </p>
                  <p className="mb-6">
                    <strong>Le Frelon Asiatique (Vespa velutina) :</strong> Plus petit que son cousin européen (entre 20 et 30 mm), il est très sombre. On le reconnaît à son thorax noir, son segment abdominal orangé et surtout ses pattes aux extrémités jaunes (d'où son surnom de frelon à pattes jaunes).
                  </p>
                  <img
                    src={comparatifFrelons}
                    alt="Comparatif frelon européen et asiatique - Expertise G&F Nuisibles Haute-Marne"
                    className="w-full rounded-xl"
                    loading="lazy"
                    width={1200}
                    height={500}
                  />
                </AccordionContent>
              </AccordionItem>

              {/* Q2 */}
              <AccordionItem value="q2" data-value="q2" className="border-none">
                <AccordionTrigger className="justify-start gap-3 py-5 text-left hover:no-underline [&[data-state=open]>svg.plus-icon]:hidden [&[data-state=closed]>svg.minus-icon]:hidden [&>svg.chevron]:hidden">
                  <Plus className="plus-icon h-5 w-5 shrink-0 text-accent" />
                  <Minus className="minus-icon h-5 w-5 shrink-0 text-accent" />
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    Caractéristiques physiques : comment reconnaître l'insecte qui vous envahit ?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-foreground">
                  <h4 className="mb-3 font-heading text-lg font-bold text-primary">
                    Fiche d'identité et Morphologie
                  </h4>
                  <div className="mb-6 flex flex-col gap-6 md:flex-row">
                    <div className="flex-1 space-y-3">
                      <p>
                        <strong>La Guêpe (Vespula) :</strong> Petite et élancée (10-19 mm), elle arbore un jaune vif et un noir profond sans poils apparents. Sa "taille de guêpe" est sa signature.
                      </p>
                      <p>
                        <strong>Le Frelon Européen (Vespa crabro) :</strong> Le géant de nos campagnes (25-35 mm). Teintes rousses sur le thorax et les pattes, abdomen très jaune rayé de noir. Son vol produit un bourdonnement très grave.
                      </p>
                      <p>
                        <strong>Le Frelon Asiatique (Vespa velutina) :</strong> Silhouette plus sombre et plus petite (20-30 mm). Thorax noir mat, face orangée, et surtout : pattes aux extrémités jaune vif.
                      </p>
                    </div>
                    <img
                      src={guepeVol}
                      alt="probleme de guêpe a Chaumont et communes alentours"
                      className="w-full rounded-xl object-cover md:w-64 lg:w-72"
                      loading="lazy"
                      width={640}
                      height={640}
                    />
                  </div>

                  <h4 className="mb-3 font-heading text-lg font-bold text-primary">
                    Reconnaître les nids et leurs endroits
                  </h4>
                  <p className="mb-3">
                    Chaque espèce a ses préférences pour installer sa colonie. Grâce à vos informations, voici où les débusquer :
                  </p>
                  <div className="flex flex-col gap-6 md:flex-row">
                    <div className="flex-1 space-y-3">
                      <p>
                        <strong>Guêpes :</strong> Souvent dans le sol (terriers), les fissures de murs ou sous les tuiles. Le nid est gris "papier journal".
                      </p>
                      <p>
                        <strong>Frelon Européen :</strong> Cherche l'obscurité. On le trouve dans les cavités naturelles (arbres creux) ou les espaces confinés (greniers, cheminées, hangars).
                      </p>
                      <p>
                        <strong>Frelon Asiatique :</strong> Débute par un petit nid primaire sous un abri (avancée de toit, linteau), puis migre souvent en hauteur dans la cime des arbres pour former une énorme sphère pouvant atteindre 1 mètre.
                      </p>
                    </div>
                    <img
                      src={nidGuepes}
                      alt="destruction de nids de guêpes à Chaumont et communes alentours"
                      className="w-full rounded-xl object-cover md:w-64 lg:w-72"
                      loading="lazy"
                      width={640}
                      height={640}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Q3 */}
              <AccordionItem value="q3" data-value="q3" className="border-none">
                <AccordionTrigger className="justify-start gap-3 py-5 text-left hover:no-underline [&[data-state=open]>svg.plus-icon]:hidden [&[data-state=closed]>svg.minus-icon]:hidden [&>svg.chevron]:hidden">
                  <Plus className="plus-icon h-5 w-5 shrink-0 text-accent" />
                  <Minus className="minus-icon h-5 w-5 shrink-0 text-accent" />
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    Comment déceler la présence d'un nid chez vous ?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-foreground">
                  <p className="mb-4">
                    Parfois, le nid est invisible, caché dans une cloison ou sous une toiture. Voici les signes qui doivent vous alerter :
                  </p>
                  <div className="flex flex-col gap-6 md:flex-row">
                    <div className="flex-1 space-y-4">
                      <div>
                        <p className="font-semibold">Le va-et-vient incessant :</p>
                        <p>Si vous observez un passage régulier d'insectes au même endroit (sous une tuile, dans une fissure de mur, dans un coffre de volet roulant), c'est le signe d'une activité de colonie.</p>
                      </div>
                      <div>
                        <p className="font-semibold">Le bruit :</p>
                        <p>Un grattage ou un bourdonnement sourd derrière un plafond ou une cloison placo indique souvent la construction d'un nid.</p>
                      </div>
                      <div>
                        <p className="font-semibold">Lieux fréquents de nidification :</p>
                        <p className="mb-2">Les nids de frelons asiatiques commencent par un petit "nid primaire" au printemps (taille d'une orange) pour finir en énorme sphère de papier mâché (jusqu'à 1 mètre de haut) souvent située dans :</p>
                        <ul className="ml-5 list-disc space-y-1">
                          <li><strong>Espaces confinés :</strong> greniers, hangars, remises, abris.</li>
                          <li><strong>Cavités naturelles :</strong> à la cime des arbres, creux d'arbres, terriers, galeries.</li>
                          <li><strong>Interstices de construction :</strong> rebords, avant-toits, linteaux, fissures.</li>
                          <li><strong>Amas de matériaux :</strong> tas de bûches, souches, branchages.</li>
                        </ul>
                      </div>
                    </div>
                    <img
                      src={nidFrelonAsiatique}
                      alt="destruction de nids de frelon à Chaumont et communes alentours"
                      className="w-full rounded-xl object-cover md:w-64 lg:w-72"
                      loading="lazy"
                      width={640}
                      height={960}
                    />
                  </div>
                  <p className="mt-4">
                    Si vous remarquez la présence d'un nid chez vous à Chaumont, Langres ou n'importe où dans le 52, <strong>contactez-nous immédiatement pour un diagnostic</strong>.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Q4 */}
              <AccordionItem value="q4" data-value="q4" className="border-none">
                <AccordionTrigger className="justify-start gap-3 py-5 text-left hover:no-underline [&[data-state=open]>svg.plus-icon]:hidden [&[data-state=closed]>svg.minus-icon]:hidden [&>svg.chevron]:hidden">
                  <Plus className="plus-icon h-5 w-5 shrink-0 text-accent" />
                  <Minus className="minus-icon h-5 w-5 shrink-0 text-accent" />
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    Comportement et Agressivité
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-foreground">
                  <div className="space-y-3 mb-6">
                    <p>
                      <strong>La Guêpe :</strong> Opportuniste et curieuse, elle s'invite à vos tables. Elle devient agressive si on tente de la chasser brusquement.
                    </p>
                    <p>
                      <strong>Le Frelon Européen :</strong> Plutôt pacifique et discret, il ne pique que pour défendre son nid ou s'il est manipulé. Il est le seul actif la nuit, attiré par les lumières de vos terrasses.
                    </p>
                    <p>
                      <strong>Le Frelon Asiatique :</strong> Très territorial. Il déclenche des attaques collectives dès que l'on s'approche à moins de 5 mètres de son nid. Sa réactivité est bien supérieure aux autres espèces.
                    </p>
                  </div>

                  <h4 className="mb-3 font-heading text-lg font-bold text-primary">
                    Dangerosité pour l'Homme et les Abeilles
                  </h4>
                  <div className="space-y-3">
                    <p>
                      <strong>Pour l'Homme :</strong> Le risque principal est le choc anaphylactique en cas d'allergie. La piqûre de frelon est plus profonde et injecte plus de venin, pouvant traverser des vêtements légers. Les attaques multiples des frelons asiatiques représentent un danger vital immédiat.
                    </p>
                    <p>
                      <strong>Pour les Abeilles (Le fléau) :</strong> Le frelon asiatique est un prédateur redoutable. Il pratique le "vol stationnaire" devant les ruches pour capturer les abeilles. Une colonie de frelons peut décimer une ruche entière en quelques semaines, menaçant gravement la biodiversité en Haute-Marne et la production de miel locale.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Bloc Tarifs */}
            <section className="mt-12 rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary md:text-3xl">
                Tarifs destruction de nids de guêpes & frelons en Haute-Marne
              </h2>
              <p className="mb-5 text-muted-foreground leading-relaxed">
                Chez G&F Nuisibles, nous appliquons une grille tarifaire <strong>claire et transparente</strong>, sans frais cachés. Le déplacement est inclus dans toute la Haute-Marne (52) et le paiement s'effectue après intervention.
              </p>
              <ul className="mb-5 space-y-3">
                <li className="flex items-baseline justify-between gap-4 border-b border-slate-100 pb-3">
                  <span className="text-foreground"><strong>Nid accessible</strong> (au sol, &lt; 3 m de hauteur)</span>
                  <span className="font-heading font-bold text-accent whitespace-nowrap">dès 85 €</span>
                </li>
                <li className="flex items-baseline justify-between gap-4 border-b border-slate-100 pb-3">
                  <span className="text-foreground"><strong>Nid en hauteur</strong> (toiture, cheminée, perche télescopique)</span>
                  <span className="font-heading font-bold text-accent whitespace-nowrap">120 – 150 €</span>
                </li>
                <li className="flex items-baseline justify-between gap-4 border-b border-slate-100 pb-3">
                  <span className="text-foreground"><strong>Nid de frelons asiatiques</strong> (intervention sécurisée renforcée)</span>
                  <span className="font-heading font-bold text-accent whitespace-nowrap">150 – 180 €</span>
                </li>
                <li className="flex items-baseline justify-between gap-4">
                  <span className="text-foreground"><strong>Diagnostic & devis</strong></span>
                  <span className="font-heading font-bold text-accent whitespace-nowrap">GRATUIT</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground italic">
                Intervention 7j/7 — supplément modéré possible le dimanche et jours fériés. Devis personnalisé immédiat par téléphone au <a href="tel:0765256792" className="text-accent font-semibold hover:underline">07.65.25.67.92</a>.
              </p>
            </section>

            {/* Bloc Calendrier saisonnier */}
            <section className="mt-12">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary md:text-3xl">
                Quand intervenir ? Le calendrier des nuisances en Haute-Marne
              </h2>
              <p className="mb-5 text-muted-foreground leading-relaxed">
                Le cycle de vie des guêpes et frelons suit les saisons. Connaître ces périodes permet d'anticiper et de réduire considérablement le coût et le risque d'une intervention.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border-l-4 border-accent bg-slate-50 p-5">
                  <h3 className="mb-2 font-heading font-bold text-primary">Mars – Avril : émergence</h3>
                  <p className="text-sm text-muted-foreground">Les reines fondatrices sortent d'hibernation. C'est le moment idéal pour le piégeage sélectif du frelon asiatique avant qu'il ne construise sa colonie.</p>
                </div>
                <div className="rounded-xl border-l-4 border-accent bg-slate-50 p-5">
                  <h3 className="mb-2 font-heading font-bold text-primary">Mai – Juin : nids primaires</h3>
                  <p className="text-sm text-muted-foreground">Les nids ont la taille d'une orange. Destruction rapide, peu coûteuse et risque minimal. La meilleure période pour agir préventivement.</p>
                </div>
                <div className="rounded-xl border-l-4 border-accent bg-slate-50 p-5">
                  <h3 className="mb-2 font-heading font-bold text-primary">Juillet – Août : pic d'activité</h3>
                  <p className="text-sm text-muted-foreground">Les colonies atteignent leur taille maximale, les nids deviennent très volumineux. Danger maximal pour les habitants et les animaux domestiques.</p>
                </div>
                <div className="rounded-xl border-l-4 border-accent bg-slate-50 p-5">
                  <h3 className="mb-2 font-heading font-bold text-primary">Septembre – Octobre : agressivité</h3>
                  <p className="text-sm text-muted-foreground">Les frelons asiatiques deviennent extrêmement agressifs (défense des futures reines). C'est la période où nous recevons le plus d'appels en urgence en Haute-Marne.</p>
                </div>
                <div className="rounded-xl border-l-4 border-accent bg-slate-50 p-5 md:col-span-2">
                  <h3 className="mb-2 font-heading font-bold text-primary">Novembre – Février : nids vides</h3>
                  <p className="text-sm text-muted-foreground">Les colonies meurent avec le froid mais les nids restent visibles. Il est recommandé de les faire retirer pour éviter toute confusion l'année suivante et empêcher la réinstallation au même endroit.</p>
                </div>
              </div>
            </section>

            {/* Bloc Pourquoi un professionnel */}
            <section className="mt-12 rounded-xl bg-primary p-8 text-primary-foreground">
              <h2 className="mb-4 font-heading text-2xl font-bold md:text-3xl">
                Pourquoi faire appel à un professionnel certifié ?
              </h2>
              <p className="mb-5 leading-relaxed text-primary-foreground/85">
                Détruire soi-même un nid de guêpes ou de frelons est une <strong>très mauvaise idée</strong>. Les bombes insecticides grand public sont inefficaces sur les colonies adultes et déclenchent des attaques massives. Voici pourquoi le recours à G&F Nuisibles est indispensable :
              </p>
              <ul className="space-y-3 text-primary-foreground/90">
                <li>✓ <strong>Équipement professionnel</strong> : combinaison renforcée certifiée, perche télescopique jusqu'à 8 mètres, biocides homologués <strong>Certibiocide</strong> non disponibles dans le commerce.</li>
                <li>✓ <strong>Assurance Responsabilité Civile Professionnelle</strong> couvrant tout dégât éventuel sur votre toiture ou bâtiment.</li>
                <li>✓ <strong>Garantie de résultat</strong> : nous intervenons gratuitement à nouveau si le nid se réactive dans les 15 jours.</li>
                <li>✓ <strong>Sécurité absolue</strong> pour vous, vos enfants, vos animaux et vos voisins pendant et après l'intervention.</li>
                <li>✓ <strong>Élimination complète</strong> de la colonie (œufs, larves, reines) — pas seulement les insectes visibles.</li>
              </ul>
            </section>

            {/* Bloc Zone d'intervention */}
            <section className="mt-12">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary md:text-3xl">
                Notre zone d'intervention en Haute-Marne (52)
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Basés à Montsaon, nous intervenons <strong>en moins de 24 heures</strong> (et en quelques heures en cas d'urgence) sur l'ensemble du département de la Haute-Marne. Notre rayon d'action couvre notamment :
              </p>
              <p className="leading-relaxed text-muted-foreground">
                <strong>Chaumont</strong> et son agglomération (Chamarandes-Choignes, Brottes, Semoutiers-Montsaon), <strong>Langres</strong> et le pays de Langres (Chalindrey, Saints-Geosmes, Rolampont), <strong>Saint-Dizier</strong> et le nord du département (Wassy, Joinville, Montier-en-Der), <strong>Bar-sur-Aube</strong>, <strong>Bourbonne-les-Bains</strong>, <strong>Bologne</strong>, <strong>Froncles</strong>, <strong>Nogent</strong>, <strong>Arc-en-Barrois</strong>, <strong>Châteauvillain</strong>, ainsi que toutes les communes rurales de la Haute-Marne. Nous nous déplaçons aussi ponctuellement en Côte-d'Or limitrophe (Châtillon-sur-Seine, Beaune) et dans l'Aube (Bar-sur-Aube).
              </p>
            </section>

            {/* Bloc Avis clients */}
            <section className="mt-12">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary md:text-3xl">
                Avis de nos clients en Haute-Marne
              </h2>
              <div className="grid gap-5 md:grid-cols-3">
                {REVIEWS.map((r) => (
                  <article key={r.author} className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                    <div className="mb-2 text-accent" aria-label={`${r.rating} étoiles sur 5`}>
                      {"★".repeat(r.rating)}
                    </div>
                    <p className="mb-3 text-sm italic text-muted-foreground">« {r.text} »</p>
                    <p className="text-sm font-semibold text-primary">{r.author} — {r.city}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* FAQ étendue */}
            <section className="mt-12 rounded-xl border border-slate-100 bg-slate-50 p-8">
              <h2 className="mb-6 font-heading text-2xl font-bold text-primary md:text-3xl">
                Questions fréquentes complémentaires
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-2">
                <AccordionItem value="ext1" className="border-b border-slate-200">
                  <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                    Qui paie la destruction d'un nid de guêpes : locataire ou propriétaire ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    En location, la <strong>destruction d'un nid de guêpes ou frelons relève généralement du propriétaire</strong>, car il s'agit d'un problème lié au bâti (toiture, façade, combles). Le décret n°87-712 distingue toutefois l'entretien courant (locataire) des gros travaux (propriétaire). En cas de doute, contactez votre assurance habitation — certains contrats couvrent l'intervention.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ext2" className="border-b border-slate-200">
                  <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                    Combien de temps dure une intervention de destruction de nid ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Une intervention standard dure entre <strong>20 et 45 minutes</strong>, diagnostic compris. Pour un nid de frelons asiatiques en hauteur ou particulièrement volumineux, comptez jusqu'à 1h. L'efficacité du produit professionnel utilisé est quasi immédiate, et la colonie est totalement neutralisée sous 24 à 48 heures.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ext3" className="border-b border-slate-200">
                  <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                    Que faire en cas de piqûre de frelon asiatique ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Éloignez-vous immédiatement de la zone (au moins 50 mètres). Désinfectez la piqûre, appliquez du froid pour limiter le gonflement. <strong>Appelez le 15 (SAMU) en cas de piqûres multiples, de piqûre au visage/cou, ou de symptômes allergiques</strong> (gonflement étendu, difficulté à respirer, malaise). Une seule piqûre peut suffire à déclencher un choc anaphylactique chez un sujet allergique.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ext4">
                  <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                    Les pompiers détruisent-ils encore les nids de guêpes en Haute-Marne ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Depuis plusieurs années, le <strong>SDIS 52 n'intervient plus pour la destruction de nids de guêpes ou frelons</strong>, sauf en cas de danger immédiat avéré (établissement scolaire, voie publique, personne piquée en détresse). Pour tout nid à domicile, vous devez faire appel à une société spécialisée comme G&F Nuisibles.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Bloc Réglementation */}
            <section className="mt-12 rounded-xl border border-accent/30 bg-accent/5 p-8">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary md:text-3xl">
                Réglementation : le frelon asiatique, espèce classée
              </h2>
              <p className="mb-3 leading-relaxed text-muted-foreground">
                Le <strong>frelon asiatique (Vespa velutina)</strong> est officiellement classé <strong>« danger sanitaire de 2ᵉ catégorie »</strong> par arrêté ministériel du 26 décembre 2012, et inscrit sur la liste des espèces exotiques envahissantes préoccupantes pour l'Union européenne (règlement UE 1143/2014).
              </p>
              <p className="mb-3 leading-relaxed text-muted-foreground">
                En Haute-Marne, tout nid identifié doit être <strong>signalé à votre mairie ou à la FREDON Grand Est</strong> (Fédération régionale de défense contre les organismes nuisibles). Certaines communes du 52 (renseignez-vous auprès de votre mairie) participent financièrement à la destruction des nids de frelons asiatiques.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                G&F Nuisibles est <strong>certifié Certibiocide</strong> et utilise exclusivement des produits homologués pour la destruction des hyménoptères, conformément à la réglementation française en vigueur.
              </p>
            </section>

            {/* Maillage interne — Pages villes */}
            <nav aria-label="Interventions par ville" className="mt-12 rounded-xl border border-slate-100 bg-slate-50 p-8">
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                Destruction de nids de guêpes & frelons par ville
              </h2>
              <p className="mb-5 text-muted-foreground">
                G&F Nuisibles intervient dans toute la Haute-Marne. Découvrez nos pages dédiées :
              </p>
              <ul className="flex flex-wrap gap-2">
                {CITY_LINKS.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="inline-block rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      Guêpes & Frelons {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
      </ServicePageLayout>
    </>
  );
};

export default GuepesFrelons;
