import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-taupes.jpg";

const TITLE = "Taupier Langres 52 - Piégeage Taupes, Devis Gratuit";
const DESCRIPTION = "Taupinières dans votre jardin à Langres (52200) ? G&F Nuisibles propose un piégeage mécanique adapté au terrain, sans produit chimique. Devis gratuit.";
const URL = "https://gf-nuisibles.fr/taupes-langres";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Le piégeage des taupes utilise-t-il du poison ?", answer: "G&F Nuisibles propose un piégeage mécanique sans produit chimique. Les pièges exigent toutefois des précautions et ne doivent pas être manipulés. Les enfants et les animaux doivent être tenus à l'écart de la zone traitée." },
  { question: "Le nombre de taupinières indique-t-il le nombre de taupes ?", answer: "Non. Une taupe peut produire plusieurs monticules et toutes les galeries ne sont pas nécessairement utilisées au moment de la visite. Le repérage de l'activité aide à positionner les dispositifs." },
  { question: "Intervenez-vous dans les jardins de Saint-Gilles et des Franchises ?", answer: "Oui, ces secteurs de Langres sont desservis, comme les Fourches, la Citadelle et les autres secteurs de la commune. Précisez l'adresse et les accès au terrain. L'entreprise est basée à Montsaon." },
  { question: "Combien de temps faut-il pour traiter un jardin à Langres ?", answer: "La durée et le nombre de contrôles dépendent de l'activité et de la configuration du terrain. Les modalités sont précisées dans le devis ; il n'est pas possible de garantir à distance un délai identique pour chaque jardin." },
  { question: "Faut-il enlever les taupinières avant la visite ?", answer: "Demandez conseil avant de modifier les zones concernées. Les monticules récents et leur emplacement fournissent des indices utiles. Évitez d'ouvrir les galeries ou de déplacer des pièges existants, et signalez toute tentative de traitement." },
];

const TaupesLangres = () => {
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
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Langres" }
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
      serviceTitle={"Taupier à Langres (52200) : piégeage des taupes dans vos jardins"}
      icon={<Target className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="TAUPES DANS VOTRE JARDIN À LANGRES ?"
      serviceCallSubtitle="G&F NUISIBLES, TAUPIER PROFESSIONNEL EN HAUTE-MARNE !"
      intro={"Des taupinières apparaissent sur votre pelouse ou dans votre jardin à Langres ? G&F Nuisibles propose un service de taupier à Langres (52200), en Haute-Marne. L'inspection recherche les galeries utilisées et délimite la zone à traiter avant de poser des pièges mécaniques. Le nombre de monticules ne suffit pas à déterminer le nombre de taupes ni à choisir l'emplacement des pièges."}
      expertise={"Depuis Montsaon, G&F Nuisibles dessert les jardins et espaces verts du Pays de Langres. Le piégeage mécanique ne nécessite pas de produit chimique. Cela ne supprime pas les précautions : la zone des pièges doit rester inaccessible aux enfants et aux animaux. Le dispositif est choisi selon le terrain et son usage, sans promesse de protection permanente contre toute nouvelle arrivée."}
      method={"Le repérage des galeries précède la pose des pièges dans les passages retenus. Le suivi permet de contrôler les dispositifs et d'ajuster leur emplacement selon l'activité constatée. Les modalités de passage et de retrait sont définies pour votre terrain. N'ouvrez pas les galeries et ne manipulez pas les pièges pendant la période de traitement."}
      localContext={{ title: "Jardins de Langres : partir du terrain, pas du seul nombre de taupinières", content: <>
<p>{"À Saint-Gilles, aux Franchises ou aux Fourches, indiquez si les monticules concernent une pelouse, un potager ou une bordure. Dans le secteur de la Citadelle comme près du centre historique, précisez les accès au jardin et la présence d'espaces partagés. Ces secteurs sont des repères de desserte, et non une affirmation que tous leurs jardins sont concernés."}</p>
<p>{"La place Diderot, la cathédrale Saint-Mammès et les remparts permettent de situer le centre de Langres, mais ils ne renseignent pas sur l'activité des taupes dans votre parcelle. Pour préparer l'inspection, les informations utiles restent l'emplacement des monticules récents, la surface réellement touchée et les contraintes du terrain. Aucune intervention sur ces monuments n'est revendiquée."}</p>
</> }}
      neighborhoods={{ title: "Secteurs desservis à Langres (52200)", intro: "Précisez votre adresse et les accès lors de votre demande. Le diagnostic porte sur votre logement ou votre terrain, sans présumer de la présence de nuisibles dans tout un quartier.", items: ["Centre historique, place Diderot", "Secteur de la cathédrale Saint-Mammès et des remparts", "La Citadelle", "Saint-Gilles", "Les Franchises", "Les Fourches"] }}
      extraSections={[
        { title: "Taupe ou autre animal : pourquoi vérifier les indices ?", content: <>
<p>{"Des monticules de terre peuvent orienter vers une activité de taupes, mais l'observation du terrain et des galeries reste nécessaire. La taupe recherche surtout des invertébrés dans le sol ; des racines rongées peuvent appeler un autre diagnostic. Décrivez les dégâts et fournissez des photos du terrain sans ouvrir les galeries."}</p>
<p>{"Aplatir les monticules ou poser un répulsif ne permet pas, à lui seul, de confirmer la fin de l'activité. La réapparition de terre fraîche est une information à transmettre au taupier. Avant la visite, indiquez aussi les tentatives précédentes : pièges posés, travaux du sol ou produits utilisés."}</p>
</> },
        { title: "Préparer le terrain pour le passage du taupier", content: <>
<p>{"Repérez les zones récemment modifiées et limitez les passages à proximité. Signalez les réseaux enterrés connus, l'arrosage automatique et les espaces utilisés par les enfants ou les animaux. L'accès au terrain, les portails et les contraintes d'horaires doivent être précisés lors de la prise de rendez-vous."}</p>
<p>{"Le suivi nécessite de laisser les dispositifs en place et de respecter les consignes de sécurité. La remise en état de la pelouse et le nivellement éventuel des monticules sont à distinguer du piégeage : demandez quelles prestations sont incluses dans le devis avant de prévoir ces travaux."}</p>
</> },
        { title: "Prix d’un taupier à Langres et suivi du piégeage", content: <>
<p>{"La surface concernée, la dispersion des galeries, les accès et le suivi nécessaire influencent le budget. Un grand terrain et un petit jardin ne se traitent pas uniquement en comptant les taupinières. Le diagnostic et le devis sont gratuits ; les modalités d'intervention sont précisées selon les observations."}</p>
<p>{"Après le retrait des dispositifs, surveillez les signes d'activité nouvelle. Un jardin reste un milieu ouvert : aucune méthode ne garantit qu'une taupe ne pourra jamais revenir. Si de nouveaux monticules apparaissent, notez leur emplacement pour demander une réévaluation, plutôt que de manipuler un ancien piège."}</p>
</> },
        { title: "Votre service à Langres et dans les communes voisines", content: <>
<p>Pour découvrir les méthodes et les prestations, consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes">{"service de taupier en Haute-Marne"}</Link>. Pour un rendez-vous à Langres, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez votre diagnostic et votre devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Vous êtes dans une commune voisine ? Retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-nogent">{"Taupier à Nogent"}</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/taupes-chalindrey">{"Taupier à Chalindrey"}</Link>, ou consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link> pour les autres secteurs desservis.</p>
</> },
      ]}
      nearbyCities={{ title: "Près de Langres : nos pages locales", items: [
{ label: "Taupier à Nogent", to: "/taupes-nogent" },
{ label: "Taupier à Chalindrey", to: "/taupes-chalindrey" },
] }}
      faqItems={FAQ_ITEMS}
      cta={"Taupier à Langres : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits adaptés à votre situation."}
    />
  </>
  );
};

export default TaupesLangres;
