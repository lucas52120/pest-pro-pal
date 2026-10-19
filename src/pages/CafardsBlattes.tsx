import { Bug, CheckCircle2, Home, Building2, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/service-desinsectisation.jpg";

const TITLE = "Traitement Cafards et Blattes Haute-Marne (52) | G&F Nuisibles";
const DESCRIPTION =
  "Cafards ou blattes chez vous ou dans vos locaux ? G&F Nuisibles traite blattes germaniques et orientales en Haute-Marne : Chaumont, Langres, Saint-Dizier. Devis gratuit.";
const URL = "https://gf-nuisibles.fr/cafards-blattes";

const faqItems = [
  {
    question: "Comment savoir si j'ai des cafards ou des blattes chez moi ?",
    answer:
      "Les signes les plus fréquents sont des insectes bruns qui fuient la lumière la nuit, de petites déjections noires semblables à du poivre moulu près des placards ou de l'électroménager, des oothèques (petites capsules brunes contenant les œufs), des mues et parfois une odeur rance. Un diagnostic sur place permet d'identifier l'espèce et l'ampleur de l'infestation.",
  },
  {
    question: "Cafard et blatte, est-ce la même chose ?",
    answer:
      "Oui. « Cafard » est le nom courant, « blatte » le nom employé par les professionnels. En Haute-Marne, on rencontre surtout la blatte germanique (petite, brun clair, dans les cuisines), la blatte orientale (plus grosse, noire, dans les caves et sous-sols humides) et parfois la blatte rayée.",
  },
  {
    question: "Combien de passages faut-il pour éliminer les cafards ?",
    answer:
      "Cela dépend de l'espèce, de l'étendue de l'infestation et de la configuration des lieux. Les œufs protégés dans les oothèques résistent à de nombreux traitements : un passage de contrôle est donc souvent nécessaire. Le nombre de passages est précisé dans le devis après diagnostic.",
  },
  {
    question: "Dois-je quitter mon logement pendant le traitement ?",
    answer:
      "Le plus souvent non lorsqu'un traitement par gel est utilisé. Si une pulvérisation ou une nébulisation est nécessaire, nous vous indiquons le temps pendant lequel la pièce ne doit pas être occupée et les précautions à prendre pour les enfants et les animaux.",
  },
  {
    question: "Intervenez-vous dans les restaurants et commerces alimentaires ?",
    answer:
      "Oui. Nous intervenons auprès des restaurants, boulangeries, cantines, hôtels et commerces. Nous pouvons proposer un contrat de suivi avec passages réguliers et compte rendu écrit, utile dans le cadre de votre plan de maîtrise sanitaire (HACCP).",
  },
  {
    question: "Les produits du commerce suffisent-ils contre les blattes ?",
    answer:
      "Ils peuvent ralentir une petite présence, mais ils agissent rarement sur les nids cachés et les œufs. Un mauvais usage peut même disperser les blattes dans d'autres pièces ou appartements. Un traitement professionnel cible les zones de refuge.",
  },
  {
    question: "Dans quelles communes de Haute-Marne intervenez-vous ?",
    answer:
      "Nous intervenons dans toute la Haute-Marne, notamment à Chaumont, Langres, Saint-Dizier, Nogent, Joinville, Wassy, Bourbonne-les-Bains, Bologne, Froncles, Chalindrey, Châteauvillain, Arc-en-Barrois, Montier-en-Der et Semoutiers-Montsaon, ainsi que dans les villages alentour.",
  },
];

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
        "addressCountry": "FR",
      },
    },
    {
      "@type": "Service",
      "url": URL,
      "name": TITLE,
      "serviceType": "Traitement contre les cafards et blattes",
      "description": DESCRIPTION,
      "provider": { "@id": "https://gf-nuisibles.fr/#organization" },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Haute-Marne (52)" },
        { "@type": "City", "name": "Chaumont" },
        { "@type": "City", "name": "Langres" },
        { "@type": "City", "name": "Saint-Dizier" },
        { "@type": "City", "name": "Nogent" },
        { "@type": "City", "name": "Joinville" },
        { "@type": "City", "name": "Wassy" },
        { "@type": "City", "name": "Bourbonne-les-Bains" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Cafards et blattes", "item": URL },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqItems.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer },
      })),
    },
  ],
};

const cityLinks = [
  { label: "Cafards & Blattes Chaumont", to: "/cafards-blattes-chaumont" },
  { label: "Cafards & Blattes Langres", to: "/cafards-blattes-langres" },
  { label: "Cafards & Blattes Saint-Dizier", to: "/cafards-blattes-saint-dizier" },
  { label: "Cafards & Blattes Nogent", to: "/cafards-blattes-nogent" },
  { label: "Cafards & Blattes Joinville", to: "/cafards-blattes-joinville" },
  { label: "Cafards & Blattes Bourbonne-les-Bains", to: "/cafards-blattes-bourbonne-les-bains" },
  { label: "Cafards & Blattes Bar-sur-Aube", to: "/cafards-blattes-bar-sur-aube" },
];

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-3 font-heading text-2xl font-bold text-primary">{children}</h2>
);
const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-2 mt-4 font-heading text-xl font-bold text-primary">{children}</h3>
);

const CafardsBlattes = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="canonical" href={URL} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={URL} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <ServicePageLayout
      icon={<Bug className="h-8 w-8" />}
      title="Cafards et blattes"
      subtitle="Traitement anti-cafards pour particuliers et professionnels en Haute-Marne (52)."
      heroImage={heroImage}
      sidebarImage={heroImage}
      serviceCallTitle="VOTRE LOGEMENT, VOTRE CUISINE OU VOTRE COMMERCE EST ENVAHI PAR DES CAFARDS ?"
      serviceCallSubtitle="CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DU TRAITEMENT DES BLATTES EN HAUTE-MARNE !"
      problem="Des cafards apparaissent la nuit dans votre cuisine, votre salle de bain ou votre cave ? Les blattes se cachent dans les fissures, derrière l'électroménager et dans les gaines techniques. Elles se reproduisent vite, transportent des bactéries et peuvent contaminer les aliments : une intervention rapide limite l'infestation."
      expertise="G&F Nuisibles, entreprise basée à Montsaon près de Chaumont, identifie l'espèce de blatte présente (germanique, orientale ou rayée) et choisit le traitement adapté à vos locaux. Nous intervenons chez les particuliers comme chez les professionnels de toute la Haute-Marne."
      method="Diagnostic des zones de refuge, application ciblée de gel appâtant et, si nécessaire, pulvérisation ou nébulisation, puis passage de contrôle pour traiter les nouvelles éclosions. Conseils de prévention remis à chaque intervention."
      engagement="Devis gratuit, discrétion totale (véhicule non logoté sur demande), précautions expliquées avant chaque traitement et suivi jusqu'à la fin de l'infestation."
    >
      <section className="section-padding pt-0">
        <div className="container-narrow max-w-4xl space-y-10 text-muted-foreground leading-relaxed">
          <div>
            <H2>Pourquoi les cafards s'installent-ils en Haute-Marne ?</H2>
            <p className="mb-3">
              On associe souvent les cafards aux grandes villes, pourtant les blattes sont bien présentes en Haute-Marne. Elles
              recherchent trois choses : la chaleur, l'humidité et la nourriture. Une cuisine, une salle de bain, une chaufferie, une
              cave voûtée ou un local à poubelles réunissent souvent ces conditions, aussi bien dans un appartement de Chaumont
              ou de Saint-Dizier que dans une maison de village à Bologne, Froncles ou Chalindrey.
            </p>
            <p className="mb-3">
              Les blattes arrivent rarement par hasard. Elles voyagent dans les cartons de déménagement, les sacs de courses, les
              livraisons de marchandises, l'électroménager d'occasion ou les valises. Dans les immeubles collectifs, elles circulent
              d'un logement à l'autre par les gaines techniques, les colonnes d'eau et les vide-ordures. C'est pourquoi une
              infestation dans un immeuble du quartier de La Rochotte à Chaumont ou du Vert-Bois à Saint-Dizier demande souvent
              une approche coordonnée entre voisins et bailleur.
            </p>
            <p>
              L'hiver haut-marnais ne règle pas le problème : à l'intérieur des bâtiments chauffés, les cafards restent actifs toute
              l'année. Sans traitement, une petite colonie de blattes germaniques peut se multiplier très rapidement en quelques
              mois, car chaque femelle produit plusieurs oothèques contenant chacune des dizaines d'œufs.
            </p>
          </div>

          <div>
            <H2>Les espèces de blattes que nous traitons</H2>
            <H3>La blatte germanique</H3>
            <p className="mb-3">
              C'est l'espèce la plus fréquente dans les logements et les cuisines professionnelles. Elle mesure environ 1,5 cm, est
              brun clair avec deux bandes sombres sur le thorax. Elle aime la chaleur des moteurs de réfrigérateur, des fours, des
              lave-vaisselle et des machines à café. C'est elle que l'on retrouve le plus souvent dans les restaurants et les
              appartements.
            </p>
            <H3>La blatte orientale</H3>
            <p className="mb-3">
              Plus grosse (2 à 3 cm), brun foncé à noire, elle préfère les lieux frais et humides : caves, sous-sols, vides
              sanitaires, regards et canalisations. Elle est fréquente dans les maisons anciennes à caves voûtées, comme on en
              trouve dans le centre historique de Langres, à Joinville ou à Bourbonne-les-Bains.
            </p>
            <H3>La blatte rayée et la blatte américaine</H3>
            <p>
              Plus rares, la blatte rayée se cache dans les pièces sèches (chambres, meubles, appareils électroniques) et la blatte
              américaine dans les locaux techniques chauds. Une identification précise est indispensable, car le traitement et les
              zones à cibler ne sont pas les mêmes selon l'espèce.
            </p>
          </div>

          <div>
            <H2>Les signes d'une infestation de cafards</H2>
            <ul className="space-y-2">
              {[
                "Des insectes bruns ou noirs qui fuient la lumière lorsque vous allumez la cuisine la nuit.",
                "De petites déjections noires, comme du poivre moulu, dans les tiroirs, les placards et derrière l'électroménager.",
                "Des oothèques : petites capsules brunes allongées contenant les œufs.",
                "Des mues (enveloppes vides) et des cadavres près des plinthes ou sous l'évier.",
                "Une odeur rance et persistante dans les infestations importantes.",
                "Des emballages alimentaires grignotés dans les placards ou les réserves.",
              ].map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Voir un cafard en journée est souvent le signe d'une population déjà importante : les blattes sont nocturnes et ne
              sortent à découvert que lorsque leurs cachettes sont saturées.
            </p>
          </div>

          <div>
            <H2>Pourquoi faut-il traiter rapidement ?</H2>
            <p className="mb-3">
              Les blattes se déplacent dans les poubelles, les canalisations et les égouts avant de passer sur les plans de travail
              et la vaisselle. Elles peuvent transporter des bactéries et contaminer les aliments. Leurs déjections et leurs mues
              peuvent aussi provoquer des réactions allergiques et aggraver l'asthme, en particulier chez les enfants.
            </p>
            <p>
              Pour un professionnel de la restauration ou de l'alimentation, la présence de cafards constatée lors d'un contrôle
              sanitaire peut avoir des conséquences sérieuses. Intervenir tôt coûte moins cher et demande moins de passages qu'une
              infestation installée depuis plusieurs mois.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <Home className="h-6 w-6 text-accent" />
                <h2 className="font-heading text-xl font-bold text-primary">Pour les particuliers</h2>
              </div>
              <p className="mb-3">
                Maison, appartement, location ou résidence secondaire : nous intervenons chez vous avec discrétion. Le traitement
                par gel est appliqué en petites gouttes dans les fissures, charnières et recoins, hors de portée des enfants et des
                animaux. Il permet le plus souvent de rester dans le logement.
              </p>
              <p>
                Propriétaires, locataires ou bailleurs : nous vous expliquons comment préparer les lieux, quelles précautions prendre
                et comment éviter une réinfestation. Nous intervenons aussi bien à Chaumont, Langres ou Saint-Dizier que dans les
                villages comme Biesles, Rolampont, Vignory, Doulaincourt ou Fayl-Billot.
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <Building2 className="h-6 w-6 text-accent" />
                <h2 className="font-heading text-xl font-bold text-primary">Pour les professionnels</h2>
              </div>
              <p className="mb-3">
                Restaurants, boulangeries, cuisines collectives, hôtels, EHPAD, établissements scolaires, commerces, bailleurs
                sociaux et syndics : nous adaptons nos horaires pour ne pas perturber votre activité et intervenons avec un
                véhicule non logoté sur demande.
              </p>
              <p>
                Nous proposons des contrats de suivi avec passages réguliers et compte rendu écrit, utiles pour votre plan de
                maîtrise sanitaire (HACCP). Découvrez aussi notre service de{" "}
                <Link to="/deratisation" className="font-semibold text-accent hover:underline">dératisation</Link>, souvent
                associé dans les contrats professionnels.
              </p>
            </div>
          </div>

          <div>
            <H2>Notre méthode de traitement anti-cafards</H2>
            <H3>1. Diagnostic et identification</H3>
            <p className="mb-3">
              Nous inspectons les zones à risque : cuisine, électroménager, sous l'évier, plinthes, gaines techniques, cave, local
              poubelles. Nous identifions l'espèce de blatte, le niveau d'infestation et les points d'entrée possibles.
            </p>
            <H3>2. Traitement ciblé</H3>
            <p className="mb-3">
              Le gel appâtant professionnel est la base du traitement : les blattes le consomment et le ramènent dans leurs
              cachettes, ce qui touche aussi les individus qui ne sortent pas. Selon la situation, nous pouvons compléter par une
              pulvérisation localisée ou une nébulisation des locaux techniques.
            </p>
            <H3>3. Passage de contrôle</H3>
            <p className="mb-3">
              Les œufs contenus dans les oothèques sont protégés. Un second passage permet de vérifier l'efficacité et de traiter
              les jeunes blattes issues des éclosions. Le calendrier est précisé dans le devis.
            </p>
            <H3>4. Conseils de prévention</H3>
            <p>
              Nous vous remettons des conseils concrets : boucher les fissures, supprimer les sources d'eau, stocker les aliments
              dans des boîtes fermées, sortir les poubelles chaque soir, éviter les cartons stockés au sol.
            </p>
          </div>

          <div>
            <H2>Comment préparer votre logement avant l'intervention ?</H2>
            <ul className="space-y-2">
              {[
                "Ne pas utiliser d'insecticide du commerce dans les jours précédents : il peut repousser les blattes et réduire l'efficacité du gel.",
                "Dégager l'accès sous l'évier, derrière le réfrigérateur et la cuisinière si possible.",
                "Ranger la nourriture dans des contenants fermés.",
                "Signaler la présence d'enfants, de femmes enceintes, d'animaux ou d'aquariums.",
                "Après traitement, éviter de nettoyer à grande eau les endroits où le gel a été déposé.",
              ].map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <H2>Tarif d'un traitement contre les cafards</H2>
            <p>
              Le prix dépend de la surface, de l'espèce de blatte, du niveau d'infestation, du nombre de pièces à traiter et du
              nombre de passages nécessaires. Après diagnostic, nous vous remettons un devis gratuit et détaillé, sans
              engagement. Pour les professionnels, un contrat annuel peut être établi selon la fréquence de passages souhaitée.
            </p>
          </div>

          <div>
            <H2>Zone d'intervention en Haute-Marne</H2>
            <p className="mb-3">
              Basée à Montsaon, à quelques minutes de Chaumont, G&F Nuisibles intervient dans toute la Haute-Marne : Chaumont,
              Langres, Saint-Dizier, Nogent, Joinville, Wassy, Bourbonne-les-Bains, Bologne, Froncles, Chalindrey, Châteauvillain,
              Arc-en-Barrois, Montier-en-Der, Semoutiers-Montsaon, mais aussi Eurville-Bienville, Chevillon, Andelot-Blancheville,
              Saint-Blin, Prauthoy, Val-de-Meuse, Longeau-Percey et Is-en-Bassigny. Nous couvrons également les communes
              limitrophes de la Meuse, des Vosges, de l'Aube et de la Marne. Consultez notre{" "}
              <Link to="/zone-intervention" className="font-semibold text-accent hover:underline">zone d'intervention</Link>.
            </p>
            <ul className="flex flex-wrap gap-2">
              {cityLinks.map((c) => (
                <li key={c.to}>
                  <Link
                    to={c.to}
                    className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-white px-3 py-1.5 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <H2>Autres nuisibles traités</H2>
            <p>
              Les cafards ne sont qu'une partie de notre activité. Découvrez aussi la{" "}
              <Link to="/deratisation" className="font-semibold text-accent hover:underline">dératisation</Link> contre rats et
              souris, la destruction de{" "}
              <Link to="/guepes-frelons" className="font-semibold text-accent hover:underline">nids de guêpes et frelons</Link>,
              la{" "}
              <Link to="/depigeonnage" className="font-semibold text-accent hover:underline">dépigeonnisation</Link> et le{" "}
              <Link to="/taupes" className="font-semibold text-accent hover:underline">piégeage de taupes</Link>.
            </p>
          </div>

          <div className="rounded-xl border border-slate-100 bg-slate-50 p-8 shadow-sm">
            <h2 className="mb-6 font-heading text-2xl font-extrabold text-primary">Questions fréquentes sur les cafards</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-semibold text-primary hover:underline [&>svg]:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pl-4 text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="rounded-xl bg-secondary p-6">
            <p className="text-lg font-semibold text-primary">
              Des cafards chez vous ou dans votre établissement en Haute-Marne ? Appelez G&F Nuisibles au{" "}
              <a href="tel:0765256792" className="text-accent hover:underline">07.65.25.67.92</a> ou demandez votre{" "}
              <Link to="/contact" className="text-accent hover:underline">devis gratuit</Link>.
            </p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  </>
);

export default CafardsBlattes;
