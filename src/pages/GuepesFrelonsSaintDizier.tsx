import { Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-guepes.jpg";

const TITLE = "Nids de guêpes et frelons à Saint-Dizier (52100) | G&F Nuisibles";
const DESCRIPTION = "Nid de guêpes ou frelons à Saint-Dizier (52100) ? G&F Nuisibles étudie l’accès et les précautions nécessaires. Devis gratuit au 07.65.25.67.92.";
const URL = "https://gf-nuisibles.fr/guepes-frelons-saint-dizier";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Que faire si des guêpes entrent dans mon volet à Saint-Dizier ?", answer: "Évitez de le manœuvrer et n’obstruez pas l’entrée. Décrivez l’emplacement depuis un endroit sûr et demandez conseil. Un nid dans une cavité peut nécessiter une méthode différente d’un nid apparent." },
  { question: "Intervenez-vous à Marnaval et au Vert-Bois ?", answer: "Oui, ces secteurs de Saint-Dizier sont desservis, ainsi que La Noue, Gigny et le centre-ville. Précisez l’adresse, la hauteur approximative et les possibilités d’accès ; la disponibilité est confirmée lors de l’appel." },
  { question: "Faut-il détruire un ancien nid en hiver ?", answer: "Un nid réellement abandonné ne nécessite pas automatiquement de traitement. La décision dépend de l’activité observée et de l’identification, pas du calendrier seul. Ne vous approchez pas pour vérifier vous-même si vous avez un doute." },
  { question: "Le prix dépend-il de la hauteur du nid ?", answer: "La hauteur, les accès, l’espèce et le matériel nécessaire influencent le devis. Signalez une cour fermée, une toiture difficile d’accès ou un passage commun. Le prix est annoncé avant l’intervention selon ces éléments." },
  { question: "Quand les enfants et les animaux peuvent-ils revenir à proximité ?", answer: "Les consignes dépendent du procédé et de la configuration. Elles sont expliquées avant le passage et doivent être respectées après le traitement. Ne vous approchez pas du nid pour vérifier l’activité de votre propre initiative." },
];

const GuepesFrelonsSaintDizier = () => {
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
        "@type": "Service", "url": URL, "name": "Destruction de nids de guêpes et frelons à Saint-Dizier (52100)", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Saint-Dizier", "address": { "@type": "PostalAddress", "postalCode": "52100", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Guêpes et frelons", "item": "https://gf-nuisibles.fr/guepes-frelons" },
        { "@type": "ListItem", "position": 3, "name": "Saint-Dizier", "item": URL }
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
        city="Saint-Dizier"
        department="Haute-Marne (52)"
        serviceTitle={"Destruction de nids de guêpes et frelons à Saint-Dizier (52100)"}
        icon={<Zap className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"NID DE GUÊPES OU FRELONS À SAINT-DIZIER ?"}
        serviceCallSubtitle="G&F NUISIBLES — UN DIAGNOSTIC ADAPTÉ À VOTRE SITUATION"
        intro={"Un va-et-vient d’insectes dans un volet, sous une toiture ou près d’un abri de jardin à Saint-Dizier ? G&F Nuisibles prend en charge les demandes de destruction de nids de guêpes et de frelons à Saint-Dizier (52100). L’espèce, l’emplacement et l’accès sont évalués avant l’intervention. Un nid dans une cavité de façade ne se traite pas comme un nid apparent dans un arbre ; n’obstruez pas l’entrée avant d’avoir demandé conseil."}
        expertise={"Basée à Montsaon, l’entreprise dessert la cité bragarde pour les particuliers et les professionnels. La préparation tient compte des passages, des personnes allergiques, des enfants et des animaux. L’équipement et le procédé sont adaptés au nid observé. Les protections et les conditions de suivi sont expliquées avant le passage ; le retrait physique d’un nid n’est pas automatiquement possible ni nécessaire dans toutes les configurations."}
        method={"Nous identifions les indices de l’espèce et examinons la hauteur, les accès et les risques d’exposition. Le périmètre est organisé avant le traitement professionnel. Les consignes après passage précisent la zone à éviter et les signes éventuels à signaler. Le devis annonce les prestations retenues, les contraintes de matériel et les conditions de suivi sans promettre un résultat immédiat quelle que soit la situation."}
        localContext={{ title: "Du centre de Saint-Dizier aux jardins de Marnaval", content: <>
<p>{"Dans le centre, l’église Notre-Dame et le château permettent de situer votre adresse, sans signaler de nid sur ces monuments. Pour un accès sur rue ou une cour commune, précisez les passages à protéger et les possibilités d’approche du bâtiment. Une photo n’est utile que si elle peut être prise depuis un endroit sûr."}</p>
<p>{"Au Vert-Bois, à La Noue, à Gigny ou à Marnaval, décrivez si le nid se trouve dans un volet, sous un appentis, en toiture ou dans un arbre. La proximité de la Marne ou du canal ne permet pas d’identifier l’espèce. Dans un local professionnel, les accès de livraison et la fréquentation des abords peuvent modifier l’organisation du passage."}</p>
<p>{"Près de la Tour Miko ou des Petites Halles, signalez surtout un passage public ou une entrée commune à protéger. Ces repères ne constituent pas des références d’intervention."}</p>
<p>Pour situer les repères patrimoniaux, consultez le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.lacduder.com/offres/au-fil-des-rues-de-saint-dizier-saint-dizier-fr-5122370/" target="_blank" rel="noopener noreferrer">parcours de Saint-Dizier présenté par l’office de tourisme du lac du Der</a> et les <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://reveler.saint-dizier.fr/les-lieux/" target="_blank" rel="noopener noreferrer">lieux présentés par la Ville de Saint-Dizier</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs desservis à Saint-Dizier (52100)", intro: "Indiquez votre rue, le type de bien et les accès. Bettancourt-la-Ferrée et Chancenay sont des communes voisines, distinctes de Saint-Dizier ; les quartiers cités ne sont pas présentés comme infestés.", items: ["Centre-ville, église Notre-Dame et château", "Vert-Bois", "La Noue", "Gigny", "Marnaval", "Secteur gare, Marne et canal"] }}
        extraSections={[
          { title: "Guêpe, frelon européen, frelon asiatique ou abeille ?", content: <>
<p>{"Le frelon asiatique présente notamment un corps sombre, une bande orangée sur l’abdomen et des extrémités de pattes jaunes ; le frelon européen est plus largement jaune et brun-roux. L’aspect général et l’observation à distance orientent l’identification, mais ne justifient pas de s’approcher pour examiner un insecte."}</p>
<p>{"Si vous pensez observer des abeilles ou un essaim, signalez-le avant toute demande de destruction. Un apiculteur peut être l’interlocuteur approprié selon la situation. La taille ou la forme d’un nid ne suffit pas à décider seule du procédé à employer."}</p>
          </> },
          { title: "Les précautions avant une intervention à Saint-Dizier", content: <>
<p>{"Ne montez pas sur une échelle pour photographier le nid. N’essayez pas de le brûler, de le noyer, de le décrocher ou de pulvériser un produit dans une ouverture. Éloignez les enfants et les animaux et évitez les vibrations à proximité. Signalez la présence d’une personne allergique et d’un passage très fréquenté lors de l’appel."}</p>
<p>{"En cas de difficulté à respirer ou de réaction allergique après une piqûre, appelez le 15 ou le 112 : la destruction du nid ne remplace pas les secours médicaux. Le tarif de l’intervention dépend de la hauteur, de l’accès et du matériel ; le devis gratuit et le créneau sont confirmés pour votre situation."}</p>
          </> },
          { title: "Votre service à Saint-Dizier et dans le nord de la Haute-Marne", content: <>
<p>Découvrez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons">service guêpes et frelons en Haute-Marne</Link> pour les méthodes et les prestations. Pour votre adresse à Saint-Dizier, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez votre diagnostic et votre devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Vous êtes dans une autre commune du secteur ? Retrouvez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-wassy">Guêpes et frelons à Wassy</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-joinville">Guêpes et frelons à Joinville</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/guepes-frelons-montier-en-der">Guêpes et frelons à Montier-en-Der</Link>. Consultez également notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link>.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales autour de Saint-Dizier", items: [
          { label: "Guêpes et frelons à Wassy", to: "/guepes-frelons-wassy" },
          { label: "Guêpes et frelons à Joinville", to: "/guepes-frelons-joinville" },
          { label: "Guêpes et frelons à Montier-en-Der", to: "/guepes-frelons-montier-en-der" },
        ] }}
        relatedLinks={[
          { label: "Dératisation à Saint-Dizier", to: "/deratisation-saint-dizier" },
          { label: "Désinsectisation à Saint-Dizier", to: "/desinsectisation-saint-dizier" },
          { label: "Dépigeonnisation à Saint-Dizier", to: "/depigeonnisation-saint-dizier" },
          { label: "Taupier à Saint-Dizier", to: "/taupes-saint-dizier" },
        ]}
        faqItems={FAQ_ITEMS}
        cta={"Guêpes et frelons à Saint-Dizier : appelez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits. Les prestations et le créneau sont confirmés selon votre situation."}
      />
    </>
  );
};

export default GuepesFrelonsSaintDizier;
