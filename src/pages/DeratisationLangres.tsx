import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation Langres 52 - Intervention 24h, Devis Gratuit";
const DESCRIPTION = "Rats ou souris à Langres (52200) ? G&F Nuisibles intervient dans le centre historique, les quartiers et les environs. Diagnostic et devis gratuits.";
const URL = "https://gf-nuisibles.fr/deratisation-langres";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Combien coûte un dératiseur professionnel à Langres ?",
    answer: "Le prix dépend de la surface à inspecter, de l'espèce identifiée, des accès, de l'étendue de l'infestation et du suivi nécessaire. Une cave du centre historique et un local de stockage ne demandent pas forcément le même dispositif. G&F Nuisibles propose un diagnostic et un devis gratuits : le traitement et ses conditions sont précisés avant votre accord.",
  },
  {
    question: "Comment savoir si j'ai des rats ou des souris chez moi ?",
    answer: "Des grattements, des déjections, des emballages percés ou des traces de rongement peuvent indiquer la présence de rongeurs. Ces indices ne suffisent pas toujours à déterminer l'espèce. Photographiez les traces sans les manipuler et indiquez les pièces concernées pour préparer le diagnostic.",
  },
  {
    question: "Intervenez-vous dans le centre historique et les quartiers de Langres ?",
    answer: "Oui, G&F Nuisibles dessert Langres, notamment le centre historique, la Citadelle, Saint-Gilles, les Franchises et les Fourches. Précisez votre adresse, le type de bâtiment et les possibilités d'accès lors de votre demande. L'entreprise est basée à Montsaon, en Haute-Marne, et ne dispose pas d'une agence à Langres.",
  },
  {
    question: "Comment préparer une intervention contre les rats ou les souris ?",
    answer: "Rangez les aliments dans des contenants fermés, mettez les déchets à l'abri et rendez accessibles les zones où vous avez constaté des traces, sans déplacer les matériaux souillés. Signalez la présence d'enfants, d'animaux et tout produit déjà utilisé. Ne déposez pas de poison en vrac ; les consignes dépendent du dispositif retenu.",
  },
  {
    question: "Faut-il plusieurs passages pour une dératisation à Langres ?",
    answer: "Le nombre de passages dépend de l'activité constatée, des accès et de la réponse au traitement. Le suivi sert à vérifier les dispositifs et à ajuster la stratégie si nécessaire. Ses modalités sont définies dans le devis ; une seule intervention ne permet pas de promettre l'absence définitive de rongeurs.",
  },
  {
    question: "Intervenez-vous aussi à Nogent et à Chalindrey ?",
    answer: "Oui, G&F Nuisibles propose également la dératisation à Nogent et à Chalindrey. Les pages dédiées à ces communes sont accessibles depuis cette page. Pour organiser le déplacement, communiquez votre adresse et décrivez les signes observés.",
  },
];

const DeratisationLangres = () => {
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
        "name": TITLE,
        "url": URL,
        "serviceType": "Dératisation : lutte contre les rats et les souris",
        "description": DESCRIPTION,
        "provider": {
          "@id": "https://gf-nuisibles.fr/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Langres",
          "containedInPlace": { "@type": "AdministrativeArea", "name": "Haute-Marne" }
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
      serviceTitle="Dératisation à Langres (52200) : rats et souris"
      icon={<Rat className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="DES RONGEURS ONT ÉLU DOMICILE À LANGRES ?"
      serviceCallSubtitle="G&F NUISIBLES, EXPERT EN DÉRATISATION, INTERVIENT RAPIDEMENT !"
      intro="Des bruits dans les combles, des déjections dans une cave ou des denrées rongées dans votre commerce à Langres ? G&F Nuisibles intervient contre les rats et les souris dans les logements et les locaux professionnels de Langres (52200), en Haute-Marne. Le diagnostic recherche les zones de passage, les sources de nourriture et les points d'entrée afin de proposer un traitement adapté, plutôt que de poser des pièges au hasard."
      expertise="Basée à Montsaon, G&F Nuisibles est une entreprise locale qui dessert le Pays de Langres. L'intervention tient compte de la configuration réelle de vos pièces, des espaces communs et de vos contraintes d'activité. Pièges mécaniques, postes sécurisés et recommandations de fermeture des accès sont choisis selon les observations. La présence d'enfants ou d'animaux doit être signalée : aucun traitement ne dispense du respect des consignes de sécurité."
      method="L'inspection commence par les traces et les accès possibles : dessous de portes, traversées de canalisations, caves, réserves et combles accessibles. Après identification du problème, le devis précise le dispositif proposé et les modalités de suivi. Le contrôle de l'activité permet d'ajuster le traitement. La prévention complète cette démarche : protéger les denrées, limiter les refuges et corriger les accès pour réduire le risque de retour."
      localContext={{
        title: "Centre historique de Langres : une inspection adaptée au bâti",
        content: (
          <>
            <p>
              La place Diderot, la cathédrale Saint-Mammès et les remparts sont des repères du centre historique de Langres. Pour un logement ou un commerce situé dans ce secteur, l'inspection porte sur votre bâtiment : cave, arrière-boutique, gaines techniques, passages entre pièces et accès depuis l'extérieur. Ces monuments servent à situer la zone desservie ; leur mention ne signifie pas qu'ils sont infestés ou qu'ils sont clients de G&F Nuisibles.
            </p>
            <p>
              Dans un immeuble, un problème observé dans un appartement peut nécessiter de vérifier les parties communes avec le propriétaire ou le syndic. Une fermeture d'accès doit être adaptée au support : on évite les travaux improvisés sur les maçonneries et on définit les corrections après inspection. En présence d'un bâtiment protégé, toute modification doit respecter les règles applicables au lieu.
            </p>
            <p>
              Pour préparer votre demande, précisez l'adresse, l'étage, l'accès à la cave et l'endroit où les traces apparaissent. Une localisation près de la place Diderot ou de la cathédrale aide à situer le rendez-vous, mais ne remplace pas un diagnostic sur place.
            </p>
            <p className="text-sm">
              Repères patrimoniaux : <a className="underline underline-offset-4 hover:text-primary" href="https://visite-multimedia.tourisme-langres.com/37-place-diderot-langres.html">place Diderot</a> et <a className="underline underline-offset-4 hover:text-primary" href="https://visite-multimedia.tourisme-langres.com/cathedrale-plan.html">cathédrale Saint-Mammès</a>, présentées par l'office de tourisme du Pays de Langres.
            </p>
          </>
        ),
      }}
      neighborhoods={{
        title: "Quartiers et secteurs desservis à Langres",
        intro: "Du centre historique aux quartiers extérieurs, la démarche reste centrée sur les traces constatées chez vous. Dans une maison, on examine notamment les annexes et les accès au jardin ; dans un local professionnel, les réserves et les zones de livraison. Indiquez votre secteur lors de votre appel pour organiser l'accès.",
        items: ["Centre historique, autour de la place Diderot", "Secteur de la cathédrale Saint-Mammès et des remparts", "La Citadelle", "Saint-Gilles", "Les Franchises", "Les Fourches"],
      }}
      extraSections={[
        {
          title: "Rats ou souris : quels indices relever avant notre venue ?",
          content: (
            <>
              <p>Repérez les pièces concernées et le moment où vous entendez les bruits. Des emballages alimentaires percés, des traces de rongement, des déjections ou une odeur inhabituelle peuvent orienter l'inspection. L'identification de l'espèce et de ses parcours permet de choisir l'emplacement des dispositifs.</p>
              <p>Évitez de toucher les déjections ou de balayer à sec les matériaux souillés. Éloignez les enfants et les animaux des zones concernées et demandez les consignes de nettoyage adaptées. En cas de câble endommagé, ne manipulez pas l'installation : faites contrôler sa sécurité par un professionnel compétent.</p>
            </>
          ),
        },
        {
          title: "Logements, commerces et réserves : prévenir le retour des rongeurs",
          content: (
            <>
              <p>Dans les logements langrois, conservez les aliments et la nourriture pour animaux dans des récipients fermés. Vérifiez les bas de portes et les passages de tuyaux après le diagnostic. Les cartons accumulés et les zones encombrées compliquent l'inspection : dégager les accès utiles aide au contrôle, sans déplacer les objets souillés sans précaution.</p>
              <p>Pour un commerce ou une activité de restauration, la gestion des déchets, le stockage des denrées et le contrôle des livraisons complètent le traitement. Signalez les contraintes de votre activité et les espaces partagés. Le devis peut ainsi distinguer l'intervention ponctuelle des besoins de suivi, sans promettre une protection définitive.</p>
            </>
          ),
        },
        {
          title: "Quel devis pour une dératisation à Langres ?",
          content: (
            <>
              <p>Le diagnostic et le devis sont gratuits. Le coût du traitement dépend de la surface, des accès, de l'espèce, des dispositifs nécessaires et du nombre de contrôles prévus. Il n'y a pas de prix unique applicable à toutes les habitations de Langres : décrivez le problème pour obtenir une proposition correspondant à votre situation.</p>
              <p>Pour en savoir plus sur les méthodes et les prestations de G&F Nuisibles, consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation">service de dératisation pour particuliers et professionnels</Link>. Pour demander votre diagnostic à Langres, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">contactez G&F Nuisibles</Link> ou appelez le 07.65.25.67.92.</p>
            </>
          ),
        },
        {
          title: "Dératisation dans le Pays de Langres : Nogent et Chalindrey",
          content: (
            <p>Votre logement ou votre entreprise se trouve hors de Langres ? Retrouvez les informations de notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-nogent">service de dératisation à Nogent</Link> ou de notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/deratisation-chalindrey">service de dératisation à Chalindrey</Link>. Notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d'intervention</Link> permet également de consulter les autres communes desservies en Haute-Marne.</p>
          ),
        },
      ]}
      nearbyCities={{
        title: "Nos pages de dératisation près de Langres",
        items: [
          { label: "Dératisation à Nogent", to: "/deratisation-nogent" },
          { label: "Dératisation à Chalindrey", to: "/deratisation-chalindrey" },
        ],
      }}
      cta="Rats ou souris à Langres ? Appelez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits, adaptés à votre logement ou à votre activité."
      faqItems={FAQ_ITEMS}
    />
    </>
  );
};

export default DeratisationLangres;
