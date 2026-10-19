import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation Chaumont 52 - Intervention 24h, Devis Gratuit";
const DESCRIPTION = "Pigeons sur un balcon, une toiture ou un entrepôt à Chaumont (52000) ? G&F Nuisibles propose des protections adaptées et un devis après diagnostic gratuit.";
const URL = "https://gf-nuisibles.fr/depigeonnisation-chaumont";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Quel dispositif anti-pigeons choisir pour un balcon à Chaumont ?", answer: "Cela dépend des ouvertures, des appuis et des possibilités de fixation. Un filet peut fermer un volume, tandis que picots et fils tendus ciblent certains points de perchage. Une inspection permet de choisir sans laisser de passages inutiles." },
  { question: "Peut-on poser des protections sur une façade du centre historique ?", answer: "Il faut vérifier les contraintes du bâtiment et des travaux, notamment dans un secteur protégé. Une autorisation peut être nécessaire. Le syndic, le propriétaire et le service urbanisme peuvent être concernés avant de modifier une façade." },
  { question: "Intervenez-vous sur les bâtiments de La Vendue ?", answer: "Oui, les demandes de dépigeonnisation dans le secteur de La Vendue et les autres secteurs de Chaumont peuvent faire l’objet d’un diagnostic. Précisez l’usage des locaux, la hauteur et les contraintes de circulation ou de stockage." },
  { question: "Que faire si un nid contient des œufs ou des oisillons ?", answer: "Ne bouchez pas l’accès et ne déplacez pas le nid de votre propre initiative. L’espèce et les obligations applicables doivent être vérifiées avant toute action. Signalez la présence d’un nid dès votre demande de diagnostic." },
  { question: "Combien coûte une dépigeonnisation à Chaumont ?", answer: "Le devis dépend de la surface, du dispositif, des moyens d’accès et des prestations de nettoyage éventuelles. Le diagnostic et le devis sont gratuits ; aucun tarif unique ne convient à un balcon, une toiture et un entrepôt." },
];

const DepigeonnisationChaumont = () => {
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
        "@type": "Service", "url": URL, "name": "Dépigeonnisation à Chaumont (52000) : protéger balcons et toitures", "description": DESCRIPTION,
        "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
        "areaServed": { "@type": "City", "name": "Chaumont", "address": { "@type": "PostalAddress", "postalCode": "52000", "addressRegion": "Haute-Marne", "addressCountry": "FR" } }
      },
      { "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Dépigeonnisation", "item": "https://gf-nuisibles.fr/depigeonnisation" },
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
        serviceTitle={"Dépigeonnisation à Chaumont (52000) : protéger balcons et toitures"}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle={"PIGEONS SUR VOTRE BÂTIMENT À CHAUMONT ?"}
        serviceCallSubtitle={"DES PROTECTIONS ADAPTÉES AUX ZONES DE PERCHAGE"}
        intro={"Des fientes sur un balcon, des pigeons sous une avancée de toit ou des accès répétés à un hangar ? G&F Nuisibles propose une dépigeonnisation à Chaumont (52000) pour limiter l’accès des oiseaux aux zones sensibles. Le choix entre filets, picots et fils tendus dépend de la surface, du support et de l’usage du bâtiment. L’objectif est de protéger les lieux sans simplement déplacer le problème vers un autre rebord du même immeuble."}
        expertise={"Depuis Montsaon, nous desservons les habitations, copropriétés et locaux professionnels de Chaumont. Le diagnostic examine les zones de perchage, les accès aux volumes abrités et les possibilités d’entretien. Les solutions physiques non létales sont choisies selon la configuration. En présence de nids, d’œufs ou d’oisillons, l’espèce et les obligations applicables doivent être vérifiées avant toute fermeture d’accès."}
        method={"La visite permet de repérer les points d’entrée, mesurer les surfaces et évaluer les conditions de travail en hauteur. Le devis détaille le dispositif, les fixations et les éventuelles opérations de nettoyage. La pose vise une protection cohérente des accès identifiés, puis un contrôle vérifie les points de passage. L’entretien et les limites du dispositif sont expliqués pour conserver son efficacité."}
        localContext={{ title: "Façades du centre et bâtiments d’activité : des contraintes différentes", content: <>
<p>{"Autour de la basilique Saint-Jean-Baptiste et du donjon de Chaumont, une protection sur une façade du centre historique demande d’examiner le support et les contraintes d’aspect extérieur. Selon le bâtiment et les travaux envisagés, une autorisation peut être nécessaire ; vérifiez la situation auprès du service urbanisme avant la pose."}</p>
<p>{"Dans les quartiers Foch, Cavalier ou La Rochotte, les demandes peuvent porter sur des balcons et des parties communes de copropriété. Dans les zones d’activités de La Vendue et de la Dame Huguenotte, les volumes ouverts, les charpentes et les accès logistiques appellent une autre étude. Le viaduc, la basilique et le donjon ne sont cités qu’en tant que repères locaux : aucune intervention sur ces monuments n’est revendiquée."}</p>
<p>Pour situer ces lieux, consultez le <a className="font-semibold text-primary underline underline-offset-4 hover:text-accent" href="https://www.ville-chaumont.fr/decouvrir-chaumont/tourisme-et-patrimoine/" target="_blank" rel="noopener noreferrer">patrimoine présenté par la Ville de Chaumont</a>.</p>
        </> }}
        neighborhoods={{ title: "Secteurs desservis à Chaumont (52000)", intro: "Ces repères permettent de situer votre demande, sans présumer de la présence de nuisibles dans un quartier. Chamarandes-Choignes et Treix sont des communes voisines, distinctes de Chaumont.", items: ["Centre historique, basilique Saint-Jean-Baptiste et donjon", "Cavalier", "Foch", "La Rochotte", "Brottes", "Secteur gare et viaduc", "La Vendue et la Dame Huguenotte"] }}
        extraSections={[
          { title: "Filets, picots ou fils tendus : choisir selon la configuration", content: <>
<p>{"Un filet peut empêcher l’accès à un volume, comme une cour ou une zone de charpente, si sa pose ferme correctement les passages. Les picots servent surtout à empêcher le perchage sur des rebords ciblés ; ils ne protègent pas à eux seuls toutes les ouvertures d’un bâtiment. Le fil tendu peut convenir à certains appuis selon leur largeur et leur exposition."}</p>
<p>{"L’état du support, l’accès pour la maintenance et l’impact visuel comptent autant que le dispositif. Une installation incomplète peut laisser d’autres zones accessibles. Le diagnostic permet d’expliquer ce qui sera protégé et ce qui restera à surveiller."}</p>
          </> },
          { title: "Fientes, copropriété et préparation du devis à Chaumont", content: <>
<p>{"Évitez de balayer à sec des accumulations de fientes ou de les disperser au jet sans précaution. Le nettoyage demande une évaluation de l’état des surfaces et des protections adaptées. Les prestations de nettoyage ou de décontamination éventuelles doivent être précisées dans le devis, et non supposées incluses dans toute pose."}</p>
<p>{"Transmettez des photos prises depuis un endroit sûr, le nombre de balcons ou d’ouvertures et les contraintes d’accès. En copropriété, vérifiez avec le syndic les accords nécessaires pour les parties communes. Le prix dépend des dimensions, de la hauteur, des moyens d’accès et du système retenu ; il est établi après diagnostic."}</p>
          </> },
          { title: "Votre demande à Chaumont et les communes voisines", content: <>
<p>Découvrez les méthodes de notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation">service dépigeonnisation en Haute-Marne</Link>. Pour votre adresse à Chaumont, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez un diagnostic et un devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Vous résidez plus au nord ou au sud de Chaumont ? Consultez nos pages <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-bologne">Dépigeonnisation à Bologne</Link> et <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/depigeonnisation-nogent">Dépigeonnisation à Nogent</Link>. Retrouvez également notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link>.</p>
          </> },
        ]}
        nearbyCities={{ title: "Nos pages locales près de Chaumont", items: [
          { label: "Dépigeonnisation à Bologne", to: "/depigeonnisation-bologne" },
          { label: "Dépigeonnisation à Nogent", to: "/depigeonnisation-nogent" },
          { label: "Dépigeonnisation à Châteauvillain", to: "/depigeonnisation-chateauvillain" },
          { label: "Dépigeonnisation à Semoutiers-Montsaon", to: "/depigeonnisation-semoutiers-montsaon" },
        ] }}
        faqItems={FAQ_ITEMS}
        cta={"Dépigeonnisation à Chaumont : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits adaptés à votre situation."}
      />
    </>
  );
};

export default DepigeonnisationChaumont;
