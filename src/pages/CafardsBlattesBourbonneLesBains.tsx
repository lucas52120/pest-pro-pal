import { Bug } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Traitement Cafards & Blattes Bourbonne-les-Bains 52 - Devis gratuit";
const DESCRIPTION = "Cafards ou blattes à Bourbonne-les-Bains (52400) ? G&F Nuisibles traite logements, commerces et restaurants : diagnostic et devis gratuits, intervention discrète. 07.65.25.67.92";
const URL = "https://gf-nuisibles.fr/cafards-blattes-bourbonne-les-bains";

const FAQ_ITEMS: FaqItem[] = [
  { question: "Comment reconnaître une blatte germanique à Bourbonne-les-Bains ?", answer: "La blatte germanique mesure environ 1 à 1,5 cm, elle est brun clair avec deux bandes sombres sur le thorax. Elle vit surtout dans les cuisines et salles de bains, près de la chaleur et de l'eau. La blatte orientale, plus grande et presque noire, préfère les caves et sous-sols. Une photo nette aide à préparer le diagnostic." },
  { question: "Pouvez-vous traiter un meublé de curiste entre deux locations ?", answer: "Oui. Les secteurs cités sur cette page font partie de la zone desservie, ainsi que les communes voisines comme Fresnes-sur-Apance, Serqueux, Montcharvot, Coiffy-le-Haut, Parnoy-en-Bassigny, Laferté-sur-Amance ou Val-de-Meuse. G&F Nuisibles est basée à Montsaon et n'a pas d'agence à Bourbonne-les-Bains : précisez votre adresse et les accès lors de votre demande." },
  { question: "Les produits du commerce suffisent-ils contre les cafards ?", answer: "Ils peuvent tuer quelques individus visibles mais atteignent rarement les refuges et les oothèques (capsules d'œufs). Des pulvérisations répétées peuvent aussi disperser les blattes et rendre les appâts moins attractifs. Indiquez les produits déjà utilisés pour que la stratégie en tienne compte." },
  { question: "Combien de passages faut-il prévoir ?", answer: "Cela dépend de l'espèce, de l'étendue de l'infestation et du bâtiment. Le nombre de passages et le contrôle de suivi sont précisés dans le devis gratuit ; aucun chiffre unique ne convient à toutes les situations." },
  { question: "Proposez-vous un suivi pour les professionnels de Bourbonne-les-Bains ?", answer: "Oui. Restaurants, commerces alimentaires, hébergements, bailleurs et entreprises peuvent mettre en place un contrat avec contrôles réguliers et compte rendu écrit, utile dans une démarche d'hygiène de type HACCP. La fréquence est définie selon l'activité et les locaux." },
];

const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "LocalBusiness", "@id": "https://gf-nuisibles.fr/#organization", "url": "https://gf-nuisibles.fr", "name": "G&F Nuisibles", "telephone": "07.65.25.67.92", "priceRange": "$$", "image": "https://gf-nuisibles.fr/og-image.png", "sameAs": ["https://www.facebook.com/gfnuisibles"], "address": {"@type": "PostalAddress", "streetAddress": "27 rue principale", "addressLocality": "Montsaon", "postalCode": "52000", "addressRegion": "Haute-Marne", "addressCountry": "FR"}}, {"@type": "Service", "url": "https://gf-nuisibles.fr/cafards-blattes-bourbonne-les-bains", "name": "Cafards et Blattes à Bourbonne-les-Bains (52400) | G&F Nuisibles", "description": "Cafards ou blattes à Bourbonne-les-Bains (52400) ? G&F Nuisibles traite logements, commerces et restaurants : diagnostic et devis gratuits, intervention discrète. 07.65.25.67.92", "serviceType": "Traitement cafards et blattes", "provider": {"@id": "https://gf-nuisibles.fr/#organization"}, "areaServed": {"@type": "City", "name": "Bourbonne-les-Bains", "address": {"@type": "PostalAddress", "postalCode": "52400", "addressRegion": "Haute-Marne", "addressCountry": "FR"}}}, {"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/"}, {"@type": "ListItem", "position": 2, "name": "Cafards & Blattes", "item": "https://gf-nuisibles.fr/cafards-blattes"}, {"@type": "ListItem", "position": 3, "name": "Cafards et Blattes à Bourbonne-les-Bains", "item": "https://gf-nuisibles.fr/cafards-blattes-bourbonne-les-bains"}]}, {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Comment reconnaître une blatte germanique à Bourbonne-les-Bains ?", "acceptedAnswer": {"@type": "Answer", "text": "La blatte germanique mesure environ 1 à 1,5 cm, elle est brun clair avec deux bandes sombres sur le thorax. Elle vit surtout dans les cuisines et salles de bains, près de la chaleur et de l'eau. La blatte orientale, plus grande et presque noire, préfère les caves et sous-sols. Une photo nette aide à préparer le diagnostic."}}, {"@type": "Question", "name": "Pouvez-vous traiter un meublé de curiste entre deux locations ?", "acceptedAnswer": {"@type": "Answer", "text": "Oui. Les secteurs cités sur cette page font partie de la zone desservie, ainsi que les communes voisines comme Fresnes-sur-Apance, Serqueux, Montcharvot, Coiffy-le-Haut, Parnoy-en-Bassigny, Laferté-sur-Amance ou Val-de-Meuse. G&F Nuisibles est basée à Montsaon et n'a pas d'agence à Bourbonne-les-Bains : précisez votre adresse et les accès lors de votre demande."}}, {"@type": "Question", "name": "Les produits du commerce suffisent-ils contre les cafards ?", "acceptedAnswer": {"@type": "Answer", "text": "Ils peuvent tuer quelques individus visibles mais atteignent rarement les refuges et les oothèques (capsules d'œufs). Des pulvérisations répétées peuvent aussi disperser les blattes et rendre les appâts moins attractifs. Indiquez les produits déjà utilisés pour que la stratégie en tienne compte."}}, {"@type": "Question", "name": "Combien de passages faut-il prévoir ?", "acceptedAnswer": {"@type": "Answer", "text": "Cela dépend de l'espèce, de l'étendue de l'infestation et du bâtiment. Le nombre de passages et le contrôle de suivi sont précisés dans le devis gratuit ; aucun chiffre unique ne convient à toutes les situations."}}, {"@type": "Question", "name": "Proposez-vous un suivi pour les professionnels de Bourbonne-les-Bains ?", "acceptedAnswer": {"@type": "Answer", "text": "Oui. Restaurants, commerces alimentaires, hébergements, bailleurs et entreprises peuvent mettre en place un contrat avec contrôles réguliers et compte rendu écrit, utile dans une démarche d'hygiène de type HACCP. La fréquence est définie selon l'activité et les locaux."}}]}]};

const CafardsBlattesBourbonneLesBains = () => (
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
      city="Bourbonne-les-Bains"
      department="Haute-Marne (52)"
      serviceTitle={"Cafards et blattes à Bourbonne-les-Bains (52400) : traitement pour particuliers et professionnels"}
      icon={<Bug className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="DES CAFARDS À BOURBONNE-LES-BAINS ?"
      serviceCallSubtitle="G&F NUISIBLES TRAITE BLATTES ET CAFARDS EN LOGEMENT COMME EN COMMERCE !"
      intro={"Des cafards dans la cuisine, des blattes qui sortent la nuit ou des traces noires dans les placards à Bourbonne-les-Bains (52400) ? G&F Nuisibles traite les blattes germaniques, orientales et américaines chez les particuliers comme chez les professionnels de Bourbonne-les-Bains et des communes voisines. Plus l'intervention est rapide, plus elle est simple : ces insectes se reproduisent vite et se cachent dans des recoins inaccessibles. Le diagnostic et le devis sont gratuits."}
      expertise={"Basée à Montsaon, en Haute-Marne, G&F Nuisibles intervient à Bourbonne-les-Bains pour les maisons, appartements, locations, restaurants, commerces alimentaires, hébergements et entreprises. Le choix de la méthode dépend de l'espèce identifiée, des refuges trouvés et de l'usage des pièces. Signalez la présence d'enfants, d'animaux et les produits déjà utilisés : les consignes de protection et de réintégration sont adaptées au protocole retenu."}
      method={"L'inspection localise les refuges : moteurs d'électroménager, dessous d'évier, plinthes, gaines et passages de canalisations. Le devis précise la stratégie, généralement des gels appâts posés en points ciblés, complétés si nécessaire par d'autres traitements professionnels, ainsi que le contrôle de suivi. Des conseils d'hygiène et de colmatage accompagnent le traitement pour limiter le retour des insectes."}
      localContext={{ title: "Ville thermale : cafards et blattes dans les hébergements de Bourbonne-les-Bains", content: <>
<p>{"Station thermale, Bourbonne-les-Bains compte beaucoup d'hébergements : hôtels, meublés de curistes, résidences et chambres d'hôtes autour du centre et du secteur des Thermes. Les rotations de locataires, bagages et cartons de livraison favorisent l'introduction de blattes germaniques, qui se cachent ensuite dans les cuisines équipées et kitchenettes. Ces repères situent le secteur desservi ; ils ne désignent aucun établissement client ni aucun lieu infesté."}</p>
<p>{"Près de la Porte-Galon, du casino et des abords de l'Apance, les maisons anciennes avec caves humides sont plus propices à la blatte orientale. Pour un loueur de meublés, le traitement doit s'organiser entre deux séjours, avec des consignes de réintégration claires. Les restaurants et commerces alimentaires de la ville thermale peuvent prévoir un suivi régulier pendant la saison."}</p>
</> }}
      neighborhoods={{ title: "Quartiers et secteurs desservis à Bourbonne-les-Bains (52400)", intro: "Précisez votre adresse et les accès lors de votre demande. Ces repères aident à situer votre logement ou votre local ; ils ne signalent aucune infestation dans ces secteurs.", items: ["Centre-ville et secteur des Thermes", "Abords de la Porte-Galon", "Secteur du casino et du pôle culturel", "Abords de l'Apance", "Abords du ruisseau de Borne", "Hameaux et écarts de la commune"] }}
      extraSections={[
        { title: "Blatte germanique, orientale ou américaine : quelle espèce à Bourbonne-les-Bains ?", content: <>
<p>{"À Bourbonne-les-Bains, la blatte germanique est l'espèce la plus fréquente dans les logements et cuisines professionnelles : petite, brun clair, elle se reproduit vite et se cache derrière le réfrigérateur, le four, le lave-vaisselle ou dans les charnières des placards. Une femelle transporte une oothèque contenant plusieurs dizaines d'œufs, ce qui explique qu'une petite présence devienne vite une infestation."}</p>
<p>{"La blatte orientale, plus grande et sombre, vit plutôt dans les caves, vides sanitaires, regards et chaufferies ; elle remonte par les évacuations. La blatte américaine, rare en habitation, se rencontre parfois dans des locaux techniques chauffés. Identifier l'espèce oriente les zones d'inspection et le choix des produits : un gel appât en cuisine ne répond pas au même problème qu'une colonie installée dans un sous-sol."}</p>
<p>{"Signes à surveiller : insectes qui fuient à l'allumage de la lumière, petites déjections noires semblables à du poivre moulu, capsules d'œufs vides, mues, ou odeur âcre persistante dans les placards. Ne videz pas les placards au hasard avant le diagnostic : notez simplement où vous avez vu les insectes."}</p>
</> },
        { title: "Particuliers à Bourbonne-les-Bains : maison, appartement ou location", content: <>
<p>{"Pour un particulier, le diagnostic à domicile est gratuit. Il porte sur la cuisine, la salle de bains, les WC, les arrivées d'eau et les zones chaudes. En appartement, signalez si vos voisins observent aussi des blattes : un traitement isolé dans un immeuble peut être recontaminé par les gaines communes. Locataire, vous pouvez prévenir votre bailleur ; propriétaire en copropriété, le syndic peut être associé pour les parties communes."}</p>
<p>{"Le traitement privilégie généralement des gels appâts posés en points ciblés, peu visibles et compatibles avec une occupation du logement, complétés si besoin par d'autres produits professionnels. Les consignes de protection des aliments, des enfants et des animaux, ainsi que le délai avant nettoyage des zones traitées, vous sont expliqués avant l'intervention."}</p>
<p>{"Dans les communes autour de Bourbonne-les-Bains, comme Fresnes-sur-Apance, Serqueux, Montcharvot, Coiffy-le-Haut, Parnoy-en-Bassigny, Laferté-sur-Amance ou Val-de-Meuse, les conditions sont identiques : diagnostic, devis écrit, traitement et contrôle de suivi selon la situation."}</p>
</> },
        { title: "Professionnels à Bourbonne-les-Bains : restaurants, commerces, bailleurs et entreprises", content: <>
<p>{"À Bourbonne-les-Bains, le thermalisme fait vivre hôtels, meublés de tourisme, résidences de curistes et restaurants. Pour ces locaux, la présence de blattes engage l'image de l'établissement et peut être relevée lors d'un contrôle sanitaire. G&F Nuisibles intervient sur rendez-vous, si possible en dehors des heures d'ouverture, avec une discrétion adaptée (véhicule et tenue sans mise en avant du nuisible quand vous le demandez)."}</p>
<p>{"Les professionnels peuvent souscrire un contrat de suivi : visites régulières, contrôle des points sensibles (réserves, plonge, chambres froides, vestiaires, locaux poubelles), traçabilité écrite des passages et des produits utilisés, utile dans un plan de maîtrise sanitaire de type HACCP. Bailleurs sociaux et syndics peuvent organiser des campagnes coordonnées par bâtiment."}</p>
<p>{"Le devis tient compte des surfaces, du nombre de locaux, des contraintes d'accès et de la fréquence de suivi souhaitée. Il est gratuit et sans engagement."}</p>
</> },
        { title: "Préparer l'intervention et éviter le retour des cafards à Bourbonne-les-Bains", content: <>
<p>{"Avant le passage : dégagez l'accès sous l'évier, derrière l'électroménager quand c'est possible, et rangez les denrées dans des boîtes fermées. Évitez les insecticides en bombe dans les jours précédents. Après le traitement : ne nettoyez pas les points de gel et respectez les consignes données."}</p>
<p>{"Ensuite, réduisez ce qui attire les blattes : fuites d'eau réparées, miettes et graisses nettoyées, poubelles fermées, cartons de livraison sortis rapidement, joints et passages de tuyaux colmatés. Ces gestes accompagnent le traitement mais ne remplacent pas un diagnostic lorsque les insectes sont déjà installés."}</p>
</> },
        { title: "Votre service cafards et blattes à Bourbonne-les-Bains et alentour", content: <>
<p>Pour découvrir l'ensemble de nos méthodes, consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/cafards-blattes">{"service cafards et blattes en Haute-Marne"}</Link>. Pour un rendez-vous, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/contact">demandez votre diagnostic et votre devis gratuits</Link> ou appelez le 07.65.25.67.92.</p>
<p>Nous intervenons aussi dans les villes voisines : <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/cafards-blattes-langres">{"Cafards et blattes à Langres"}</Link>, <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/cafards-blattes-nogent">{"Cafards et blattes à Nogent"}</Link>. Consultez notre <Link className="font-semibold text-primary underline underline-offset-4 hover:text-accent" to="/zone-intervention">zone d’intervention</Link> pour les autres communes desservies.</p>
</> },
      ]}
      nearbyCities={{ title: "Près de Bourbonne-les-Bains : nos pages locales", items: [
{ label: "Cafards et blattes à Langres", to: "/cafards-blattes-langres" },
{ label: "Cafards et blattes à Nogent", to: "/cafards-blattes-nogent" },
] }}
      faqItems={FAQ_ITEMS}
      relatedLinks={[
        { label: "Cafards & Blattes (52)", to: "/cafards-blattes" },
        { label: "Dératisation à Bourbonne-les-Bains", to: "/deratisation-bourbonne-les-bains" },
        { label: "Zone d'intervention", to: "/zone-intervention" },
      ]}
      cta={"Cafards ou blattes à Bourbonne-les-Bains : contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic et un devis gratuits, pour votre logement ou votre établissement."}
    />
  </>
);

export default CafardsBlattesBourbonneLesBains;
