import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Destruction nid Guêpes & Frelons Langres 52 - Intervention 24h";
const DESCRIPTION = "Nid de guêpes ou de frelons à Langres (52200) ? G&F Nuisibles évalue les accès et propose un traitement adapté. Diagnostic et devis gratuits en Haute-Marne.";
const URL = "https://gf-nuisibles.fr/guepes-frelons-langres";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Quel est le tarif pour un nid de guêpes ou de frelons à Langres ?", answer: "Les tarifs commencent à 85 € pour les guêpes et à 110 € pour les frelons. La hauteur, l'accès et les moyens nécessaires peuvent modifier le montant. Le devis gratuit précise le tarif applicable à votre situation avant l'intervention." },
  { question: "Faut-il retirer soi-même un nid situé dans un volet ?", answer: "Non. Ne démontez pas le coffre et ne bouchez pas l'entrée. Éloignez les occupants et décrivez les accès au professionnel. Le traitement et l'éventuel retrait dépendent de la configuration du volet et du nid." },
  { question: "Pouvez-vous intervenir dans les quartiers de Langres ?", answer: "Oui, le centre historique, la Citadelle, Saint-Gilles, les Franchises et les Fourches font partie des secteurs desservis. L'accès et les disponibilités sont à confirmer lors de l'appel. L'entreprise est basée à Montsaon, en Haute-Marne." },
  { question: "Retirez-vous toujours le nid après traitement ?", answer: "Le retrait dépend de l'accessibilité et de la situation. Certains nids sont dissimulés dans une paroi ou sous une toiture. Les modalités de traitement et de retrait éventuel sont expliquées pour votre cas ; ne démontez pas vous-même les matériaux pour accéder au nid." },
  { question: "Comment transmettre une photo pour identifier les insectes ?", answer: "Prenez une photo uniquement depuis un emplacement protégé et sans vous rapprocher. À défaut, décrivez l'aspect des insectes, leur point d'entrée et les heures d'activité observées. L'identification doit être confirmée avant de choisir la méthode." },
];

const GuepesFrelonsLangres = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://gf-nuisibles.fr/#organization",
        "url": "https://gf-nuisibles.fr",
        "name": "G&F Nuisibles",
        "telephone": "07.65.25.67.92",
        "priceRange": "$$",
        "image": "https://gf-nuisibles.fr/og-image.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "27 rue principale",
          "addressLocality": "Montsaon",
          "postalCode": "52000",
          "addressRegion": "Haute-Marne",
          "addressCountry": "FR"
        }
      },
      {
        "@type": "Service",
        "url": URL,
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": {
          "@id": "https://gf-nuisibles.fr/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Langres"
        }
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
        city="Langres"
        department="Haute-Marne (52)"
        serviceTitle={"Destruction de nids de guêpes et frelons à Langres (52200)"}
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="NID DE GUÊPES OU FRELONS À LANGRES ?"
        serviceCallSubtitle="G&F NUISIBLES INTERVIENT EN URGENCE POUR VOTRE SÉCURITÉ !"
        intro={"Un va-et-vient de guêpes sous une toiture ou des frelons autour d'un arbre à Langres ? G&F Nuisibles intervient pour la destruction de nids de guêpes, de frelons européens et de frelons asiatiques à Langres (52200). La localisation du nid, son accès et l'activité observée guident l'évaluation. N'approchez pas pour confirmer l'espèce : décrivez ce que vous voyez depuis un endroit protégé."}
        expertise={"Depuis Montsaon, G&F Nuisibles dessert les particuliers et professionnels du Pays de Langres. Un nid dans un coffre de volet, sous des tuiles ou dans un arbre ne présente pas les mêmes contraintes. L'évaluation permet de choisir le matériel et les précautions adaptés, sans promettre à distance un délai ou un accès possible dans toutes les configurations."}
        method={"Avant le traitement, le nid ou son point d'entrée est repéré et le périmètre à protéger est défini. L'intervention est adaptée à l'espèce et à l'emplacement. Le retrait physique du nid dépend de son accessibilité et de la situation : il ne doit pas être tenté par l'occupant. Les consignes après traitement sont expliquées pour éviter une remise en contact prématurée avec la zone."}
        localContext={{ title: "Toitures du centre ancien et jardins de Langres : des accès à préciser", content: <>
<p>{"Dans le centre historique, autour de la place Diderot ou de la cathédrale Saint-Mammès, indiquez si l'activité se situe côté rue, dans une cour ou sous une toiture. Le passage par le logement, la présence de voisins et les accès disponibles influencent l'organisation. La mention de ces monuments sert uniquement de repère géographique ; elle ne signifie pas que nous y avons traité des nids."}</p>
<p>{"À Saint-Gilles, aux Franchises, aux Fourches ou dans le secteur de la Citadelle, précisez si le nid est visible depuis le sol et s'il se trouve près d'une porte, d'une terrasse ou d'un passage. Dans un jardin, tenez compte des occupants voisins et des animaux. Ces informations sont plus utiles qu'une tentative d'approche pour mesurer exactement le nid."}</p>
</> }}
      neighborhoods={{ title: "Secteurs desservis à Langres (52200)", intro: "Précisez votre adresse et les accès lors de votre demande. Le diagnostic porte sur votre logement ou votre terrain, sans présumer de la présence de nuisibles dans tout un quartier.", items: ["Centre historique, place Diderot", "Secteur de la cathédrale Saint-Mammès et des remparts", "La Citadelle", "Saint-Gilles", "Les Franchises", "Les Fourches"] }}
      extraSections={[
        { title: "Que faire en attendant le traitement du nid ?", content: <>
<p>{"Éloignez les personnes et les animaux de la zone et évitez les vibrations à proximité. Ne bouchez pas l'entrée d'un nid dans un mur ou un volet : les insectes peuvent rechercher un autre passage. N'utilisez ni feu, ni jet d'eau, ni tentative de décrochage. Une photo n'est utile que si elle peut être prise sans s'approcher."}</p>
<p>{"Des insectes en déplacement ne prouvent pas à eux seuls qu'un nid se trouve sur votre propriété. Un regroupement d'abeilles nécessite une identification différente : ne le faites pas traiter comme un nid de guêpes. En cas de difficulté respiratoire, de malaise ou de réaction grave après une piqûre, appelez le 15 ou le 112 ; le traitement d'un nid ne remplace pas les secours médicaux."}</p>
</> },
        { title: "Prix et préparation d’une intervention à Langres", content: <>
<p>{"Les tarifs affichés commencent à 85 € pour un nid de guêpes et à 110 € pour un nid de frelons. Le montant dépend notamment de la hauteur, de l'accès et des moyens nécessaires. Un devis gratuit permet de préciser le prix et le périmètre de la prestation avant votre accord."}</p>
<p>{"Pour préparer votre appel, donnez votre adresse à Langres, l'emplacement estimé, les voies d'accès et les contraintes de voisinage. Signalez également un précédent traitement. Après le passage, respectez les consignes sur les déplacements près du nid et sur toute manipulation : une activité résiduelle doit être signalée, pas traitée soi-même."}</p>
</> },
        { title: "Votre service à Langres et dans les communes voisines", content: <>
<p>Pour découvrir les méthodes et les prestations, consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons">{"service de guêpes et frelons en Haute-Marne"}</Link>. Pour un rendez-vous à Langres, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez votre diagnostic et votre devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Vous êtes dans une commune voisine ? Retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-nogent">{"Guêpes et frelons à Nogent"}</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-chalindrey">{"Guêpes et frelons à Chalindrey"}</Link>, ou consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link> pour les autres secteurs desservis.</p>
</> },
      ]}
      nearbyCities={{ title: "Près de Langres : nos pages locales", items: [
{ label: "Guêpes et frelons à Nogent", to: "/guepes-frelons-nogent" },
{ label: "Guêpes et frelons à Chalindrey", to: "/guepes-frelons-chalindrey" },
] }}
      faqItems={FAQ_ITEMS}
      cta={"Guêpes et frelons à Langres : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits adaptés à votre situation."}
      />
    </>
  );
};

export default GuepesFrelonsLangres;
