import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation Langres 52 - Intervention 24h, Devis Gratuit";
const DESCRIPTION = "Pigeons sur un balcon ou une toiture à Langres (52200) ? G&F Nuisibles étudie la pose de filets, pics ou fils tendus. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/depigeonnisation-langres";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Posez-vous des protections anti-pigeons sur les balcons à Langres ?", answer: "Oui, une protection peut être étudiée selon le balcon et ses accès. Le diagnostic détermine si un filet, des pics ou des fils tendus conviennent. L'accord du propriétaire ou de la copropriété et les éventuelles règles de façade doivent être vérifiés avant la pose." },
  { question: "Peut-on poser des pics sur un bâtiment du centre historique ?", answer: "Cela dépend du support, du statut du bâtiment et des règles applicables au secteur. Ne percez pas une façade protégée sans vérification préalable. Le dispositif et les fixations doivent être étudiés après examen du site." },
  { question: "Les dispositifs anti-pigeons sont-ils conçus pour tuer les oiseaux ?", answer: "Non. Les protections proposées visent à empêcher ou limiter le perchage, sans blesser les oiseaux. La pose doit éviter tout enfermement. La présence de nids ou d'autres espèces doit être évaluée avant les travaux." },
  { question: "Combien coûte la protection d’une toiture ou d’un balcon ?", answer: "Le prix dépend de la surface, du dispositif, du nettoyage éventuel et des accès. Un diagnostic et un devis gratuits permettent de préciser les prestations et leurs conditions. Aucun prix au mètre unique ne convient à toutes les configurations." },
];

const DepigeonnisationLangres = () => {
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
      serviceTitle={"Dépigeonnisation à Langres (52200) : protection anti-pigeons"}
      icon={<Bird className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="PIGEONS ENVAHISSANTS À LANGRES ?"
      serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS BÂTIMENTS DURABLEMENT !"
      intro={"Des pigeons se posent régulièrement sur votre balcon, une corniche ou la toiture de votre bâtiment à Langres ? G&F Nuisibles propose des solutions de dépigeonnisation à Langres (52200) pour limiter les zones de perchage et protéger les espaces exposés aux fientes. L'étude du site permet de choisir un dispositif adapté au support, à la surface et à l'utilisation du lieu."}
      expertise={"Basée à Montsaon, G&F Nuisibles dessert les habitations, copropriétés et locaux professionnels du Pays de Langres. Filets, pics anti-pigeons et fils tendus répondent à des configurations différentes. La pose vise à dissuader l'installation des oiseaux sans les blesser. Un dispositif ne doit pas être choisi sur le seul critère du prix : sa couverture, son accès pour l'entretien et son intégration au bâtiment comptent aussi."}
      method={"L'inspection identifie les points de perchage, les zones souillées et les accès nécessaires. La solution proposée tient compte des fixations possibles et de l'occupation du bâtiment. Le nettoyage et les précautions sanitaires sont évalués selon l'état des surfaces. Avant la pose, il faut vérifier qu'aucun oiseau ne risque d'être enfermé et examiner la présence éventuelle de nids ou d'autres espèces."}
      localContext={{ title: "Protéger un bâtiment à Langres sans négliger son caractère architectural", content: <>
<p>{"Autour de la cathédrale Saint-Mammès, de la place Diderot et des remparts, la visibilité d'une protection et la nature des supports doivent être examinées avec soin. Pour un bâtiment situé en secteur protégé, vérifiez les autorisations applicables avant toute fixation ou modification de façade. Ces monuments situent le centre historique : leur mention ne vaut ni référence de chantier ni constat de présence de pigeons."}</p>
<p>{"Dans les secteurs de la Citadelle, des Fourches, de Saint-Gilles ou des Franchises, une loggia, un balcon et une toiture demandent des protections différentes. En copropriété, l'accord du syndic ou du propriétaire peut être nécessaire pour les parties communes et la façade. Précisez le statut du bâtiment et les contraintes d'accès lors de votre demande de diagnostic."}</p>
</> }}
      neighborhoods={{ title: "Secteurs desservis à Langres (52200)", intro: "Précisez votre adresse et les accès lors de votre demande. Le diagnostic porte sur votre logement ou votre terrain, sans présumer de la présence de nuisibles dans tout un quartier.", items: ["Centre historique, place Diderot", "Secteur de la cathédrale Saint-Mammès et des remparts", "La Citadelle", "Saint-Gilles", "Les Franchises", "Les Fourches"] }}
      extraSections={[
        { title: "Filets, pics ou fils tendus : comment choisir ?", content: <>
<p>{"Un filet peut fermer un volume ouvert, tandis que des pics ou des fils tendus visent certaines surfaces de pose. Le choix dépend de la largeur des rebords, des trajets des oiseaux et des possibilités de fixation. Un espace mal couvert peut laisser une zone de perchage disponible : le diagnostic doit considérer l'ensemble de la zone concernée."}</p>
<p>{"Le dispositif doit rester compatible avec les ouvertures, l'écoulement des eaux et l'entretien du bâtiment. Les interventions en hauteur nécessitent une étude des accès. Une pose ne permet pas de promettre l'absence de tout oiseau aux alentours : l'objectif est la protection des zones définies dans le devis."}</p>
</> },
        { title: "Fientes, nettoyage et entretien des protections", content: <>
<p>{"Évitez de gratter ou de balayer à sec des accumulations de fientes : cela peut disperser des poussières. Limitez l'accès aux surfaces souillées et demandez une évaluation des mesures de nettoyage et de protection nécessaires. La préparation dépend de la quantité de dépôts et du support, et ne se résume pas à installer des pics sur une surface sale."}</p>
<p>{"Après la pose, les fixations et l'état des filets doivent être surveillés, notamment après des travaux ou une dégradation. L'entretien permet de repérer les ouvertures et les matériaux détériorés. Le devis précise les surfaces protégées, les prestations de nettoyage éventuelles et les conditions applicables, sans garantie absolue non définie."}</p>
</> },
        { title: "Quel budget pour une dépigeonnisation à Langres ?", content: <>
<p>{"La longueur des rebords, la surface à fermer, le dispositif, la hauteur et les moyens d'accès déterminent le coût. Un balcon accessible et une façade nécessitant des équipements spécifiques ne peuvent pas recevoir le même tarif standard. G&F Nuisibles propose un diagnostic et un devis gratuits pour définir une solution correspondant au site."}</p>
</> },
        { title: "Votre service à Langres et dans les communes voisines", content: <>
<p>Pour découvrir les méthodes et les prestations, consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnage">{"service de dépigeonnisation en Haute-Marne"}</Link>. Pour un rendez-vous à Langres, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez votre diagnostic et votre devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Vous êtes dans une commune voisine ? Retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-nogent">{"Dépigeonnisation à Nogent"}</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-chalindrey">{"Dépigeonnisation à Chalindrey"}</Link>, ou consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link> pour les autres secteurs desservis.</p>
</> },
      ]}
      nearbyCities={{ title: "Près de Langres : nos pages locales", items: [
{ label: "Dépigeonnisation à Nogent", to: "/depigeonnisation-nogent" },
{ label: "Dépigeonnisation à Chalindrey", to: "/depigeonnisation-chalindrey" },
] }}
      faqItems={FAQ_ITEMS}
      cta={"Dépigeonnisation à Langres : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits adaptés à votre situation."}
    />
  </>
  );
};

export default DepigeonnisationLangres;
