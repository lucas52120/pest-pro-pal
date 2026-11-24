import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Blinds,
  Bug,
  CalendarDays,
  Camera,
  ClipboardCheck,
  Drill,
  FileText,
  Hand,
  House,
  Info,
  Leaf,
  MapPin,
  Phone,
  Search,
  ShieldAlert,
  Snowflake,
  SprayCan,
  Sprout,
  Stethoscope,
  Sun,
  TreeDeciduous,
  Volume2,
  Warehouse,
} from "lucide-react";
import heroImage from "@/assets/frelon-hero.jpg";
import waspNestImage from "@/assets/guepes-nid-bois.jpg";
import paperNestImage from "@/assets/nid-papier.jpg";
import treeNestImage from "@/assets/nid-arbre.jpg";
import chaumontNestImage from "@/assets/nid-frelons-chaumont.jpg";
import comparisonImage from "@/assets/comparatif-frelons.jpg";
import Navbar from "@/components/Navbar";
import Reassurance from "@/components/Reassurance";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { breadcrumbsFrom } from "@/components/Breadcrumbs";
import {
  CallBand,
  Callout,
  CardGrid,
  CheckList,
  CityPills,
  FaqList,
  GuideBlock,
  PlaceGrid,
  Section,
  ServiceHero,
  ServiceStep,
  StepRow,
  callButton,
  photoClass,
  textLink,
} from "@/components/ServiceBlocks";
import { LOCAL_BUSINESS } from "@/data/business";

const TITLE = "Nid de guêpes ou frelons Haute-Marne (52) | GF Nuisibles";
const DESCRIPTION =
  "Un nid de guêpes ou de frelons chez vous en Haute-Marne ? N'y touchez pas, on s'en occupe 7j/7. À partir de 80 €, devis gratuit : 07 65 25 67 92.";
const URL = "https://gf-nuisibles.fr/guepes-frelons";

const PHOTO_SMS = `sms:0765256792?&body=${encodeURIComponent("Bonjour, voici une photo du nid. Il se trouve à : ")}`;

const STEPS: ServiceStep[] = [
  { step: 1, icon: Phone, title: "Prise de contact", text: "Vous dites où est le nid et à quelle hauteur. Une photo par SMS ou WhatsApp aide beaucoup." },
  { step: 2, icon: FileText, title: "Devis", text: "Vous avez un prix avant de vous engager, souvent dès le téléphone." },
  { step: 3, icon: Search, title: "Diagnostic", text: "Sur place, j'identifie l'insecte, je trouve l'entrée du nid et je sécurise la zone." },
  { step: 4, icon: SprayCan, title: "Intervention", text: "Équipé, je traite le nid. Comptez en général 20 à 45 minutes." },
  { step: 5, icon: ClipboardCheck, title: "Conseils", text: "Je vous dis quand vous pouvez approcher à nouveau et quoi faire du nid." },
];

const PRICE_FACTORS = [
  { title: "L'insecte", text: "les frelons asiatiques demandent plus de protection que les guêpes." },
  { title: "La hauteur", text: "un nid sous une terrasse et un nid sous un faîtage ne demandent pas le même matériel." },
  { title: "L'accès", text: "toiture, cheminée, coffre de volet, cloison, arbre." },
  { title: "Le jour", text: "un supplément peut s'appliquer le dimanche et les jours fériés. Il est annoncé avant." },
];

const PLACES = [
  { icon: House, title: "Sous les tuiles", text: "un va-et-vient au bord du toit, sous une rive ou un faîtage." },
  { icon: Blinds, title: "Coffre de volet", text: "des guêpes qui entrent et sortent quand le volet bouge." },
  { icon: Warehouse, title: "Grenier, abri, grange", text: "un nid accroché à une poutre, souvent découvert en été." },
  { icon: Drill, title: "Mur et cloison", text: "une fissure ou une aération, avec un bruit sourd derrière." },
  { icon: Leaf, title: "Dans le sol", text: "un trou dans la pelouse ou le talus : attention à la tonte." },
  { icon: TreeDeciduous, title: "Arbre et haie", text: "haut perché pour le frelon asiatique, parfois bas dans une haie." },
];

const SIGNS = [
  { title: "Le va-et-vient", text: "des insectes passent toujours au même endroit : sous une tuile, dans une fissure, dans un coffre de volet." },
  { title: "Le bruit", text: "un grattage ou un bourdonnement sourd derrière un plafond ou une cloison." },
  { title: "Les insectes dans la maison", text: "plusieurs guêpes près d'une fenêtre, jour après jour." },
  { title: "La boule grise", text: "une matière qui ressemble à du papier, sous un avant-toit, un linteau ou dans un arbre." },
];

const SPECIES = [
  { icon: Bug, title: "La guêpe (Vespula)", text: "10 à 19 mm, jaune vif et noire, sans poils apparents. Nid gris, comme du papier journal : dans le sol, les fissures de murs ou sous les tuiles." },
  { icon: Bug, title: "La guêpe poliste", text: "fine, avec de longues pattes pendantes en vol. Petit nid ouvert dont on voit les alvéoles, sous une tuile, un rebord ou un volet." },
  { icon: Bug, title: "Le frelon européen (Vespa crabro)", text: "25 à 35 mm, taché de roux, de noir et de jaune, pattes brunes. Plutôt pacifique loin du nid, il vole aussi la nuit. Nid dans les arbres creux, greniers, cheminées et hangars." },
  { icon: Bug, title: "Le frelon asiatique (Vespa velutina)", text: "20 à 30 mm, très sombre, face orangée et bout des pattes jaune. Petit nid sous un abri au printemps, puis grosse boule, souvent à la cime des arbres, jusqu'à 1 mètre." },
];

const WHAT_TO_DO = [
  { title: "Éloignez-vous", text: "gardez les enfants et les animaux à l'écart, et ne passez pas devant l'entrée du nid." },
  { title: "Ne bouchez pas l'entrée", text: "les insectes cherchent une autre sortie, parfois à l'intérieur de la maison." },
  { title: "Évitez les vibrations", text: "tondeuse, débroussailleuse, perceuse ou échelle près du nid peuvent déclencher une attaque." },
  { title: "Regardez de loin", text: "la hauteur, l'endroit exact et la couleur des insectes aident à préparer l'intervention." },
  { title: "Appelez", text: "surtout si quelqu'un est allergique ou si le nid est près d'un passage." },
];

const ROOF = [
  { title: "Pourquoi là", text: "l'espace sous les tuiles est sec, chaud et tranquille : un abri idéal pour un nid." },
  { title: "Le risque", text: "le nid grossit tout l'été et peut finir contre l'isolant ou le plafond, avec des guêpes dans les pièces." },
  { title: "L'erreur à éviter", text: "monter sur le toit ou vider une bombe entre les tuiles : vous risquez la chute et les piqûres." },
  { title: "Ce que je fais", text: "je repère l'entrée et je traite le nid avec un matériel adapté à la hauteur." },
];

const SEASONS = [
  { icon: Sprout, title: "Mars et avril", text: "les reines sortent de l'hiver et cherchent un endroit pour fonder leur colonie." },
  { icon: CalendarDays, title: "Mai et juin", text: "les nids ont la taille d'une orange. C'est le bon moment pour agir : c'est plus simple." },
  { icon: Sun, title: "Juillet et août", text: "les colonies grossissent vite. C'est la pleine saison des nids de guêpes." },
  { icon: Leaf, title: "Septembre et octobre", text: "les frelons asiatiques défendent fortement leur nid. Les nids apparaissent quand les feuilles tombent." },
  { icon: Snowflake, title: "Novembre à février", text: "les colonies meurent avec le froid et le vieux nid n'est pas réutilisé. Le faire retirer évite les confusions l'année suivante." },
];

const DANGERS = [
  { icon: Stethoscope, title: "L'allergie", text: "une seule piqûre peut provoquer une réaction grave chez une personne allergique. En cas de gêne pour respirer ou de malaise, appelez le 15." },
  { icon: ShieldAlert, title: "Les attaques groupées", text: "le frelon asiatique défend son nid à plusieurs dès qu'on s'approche à quelques mètres ou qu'on provoque des vibrations." },
  { icon: Volume2, title: "Les dégâts", text: "un nid dans une cloison ou un plafond peut abîmer l'isolant et tacher le placo." },
  { icon: Leaf, title: "Les abeilles", text: "le frelon asiatique chasse les abeilles devant les ruches et fragilise les colonies." },
];

const MISTAKES = [
  { icon: SprayCan, title: "Vider une bombe du commerce", text: "sur un gros nid, elle suffit rarement et peut déclencher une attaque." },
  { icon: Hand, title: "Taper ou brûler le nid", text: "risque de piqûres en nombre, de chute et d'incendie." },
  { icon: Drill, title: "Boucher le trou", text: "les guêpes peuvent ressortir dans la maison." },
  { icon: CalendarDays, title: "Attendre l'automne", text: "le nid grossit chaque semaine pendant l'été." },
];

const WHY_PRO = [
  { title: "L'équipement", text: "combinaison de protection et perche télescopique jusqu'à 8 mètres." },
  { title: "Les produits", text: "des produits professionnels, réservés aux titulaires du Certibiocide." },
  { title: "L'assurance", text: "une responsabilité civile professionnelle." },
  { title: "L'expérience locale", text: "des maisons, granges et toitures de Haute-Marne." },
];

const FAQ_ITEMS = [
  {
    question: "Quel est le prix pour enlever un nid de guêpes ?",
    answer:
      "Un nid de guêpes est traité à partir de 80 €, et un nid de frelons asiatiques à partir de 110 €. Le prix dépend de l'insecte, de la hauteur, de l'accès et du jour. Le devis est gratuit et vous connaissez le prix avant l'intervention.",
  },
  {
    question: "Qui appeler pour un nid de guêpes ou de frelons en Haute-Marne ?",
    answer:
      "Sur un terrain privé, il faut appeler une entreprise spécialisée, titulaire du Certibiocide. GF Nuisibles est joignable 7j/7 de 7h à 23h au 07 65 25 67 92. Si le nid est dans la rue ou dans un lieu public, prévenez la mairie.",
  },
  {
    question: "Les pompiers se déplacent-ils pour un nid de guêpes ou de frelons ?",
    answer:
      "Non, en Haute-Marne les pompiers n'interviennent plus pour les nids chez les particuliers. Il faut faire appel à une entreprise spécialisée. S'il y a un danger immédiat pour quelqu'un, appelez le 18 ou le 15.",
  },
  {
    question: "Est-il obligatoire de détruire un nid de frelons asiatiques ?",
    answer:
      "La loi du 14 mars 2025 a créé un plan national et des plans départementaux contre le frelon asiatique à pattes jaunes. Les règles et les aides pouvant varier, le plus simple est de signaler le nid à votre mairie. Certaines communes participent financièrement.",
  },
  {
    question: "Qui paie la destruction d'un nid : locataire ou propriétaire ?",
    answer:
      "Cela dépend de la situation : âge du nid, emplacement, contrat de location. Prévenez votre propriétaire ou votre agence avant l'intervention, de préférence par écrit. En cas de doute, renseignez-vous auprès de l'ADIL.",
  },
  {
    question: "Mon assurance habitation rembourse-t-elle la destruction d'un nid ?",
    answer:
      "Certains contrats le prévoient, beaucoup ne le font pas. Regardez votre contrat ou appelez votre assureur avant l'intervention, et gardez la facture.",
  },
  {
    question: "Combien de temps dure une intervention ?",
    answer:
      "En général entre 20 et 45 minutes, diagnostic compris. Pour un nid de frelons asiatiques en hauteur ou très volumineux, comptez jusqu'à 1 heure. Il peut rester quelques insectes autour du nid dans les heures qui suivent : c'est normal, ce sont ceux qui étaient sortis.",
  },
  {
    question: "Quelles différences entre frelon européen et frelon asiatique ?",
    answer:
      "Le frelon européen est le plus grand (25 à 35 mm), taché de roux, de noir et de jaune, avec des pattes brunes. Le frelon asiatique est plus petit (20 à 30 mm), très sombre, avec une face orangée et le bout des pattes jaune : c'est pour cela qu'on l'appelle frelon à pattes jaunes.",
  },
  {
    question: "Que faire en cas de piqûre de guêpe ou de frelon ?",
    answer:
      "Éloignez-vous du nid, désinfectez et appliquez du froid. Appelez le 15 en cas de piqûres multiples, de piqûre dans la bouche ou la gorge, de difficulté à respirer, de gonflement étendu ou de malaise.",
  },
  {
    question: "Les guêpes reviennent-elles dans le même nid l'année suivante ?",
    answer:
      "Non, un ancien nid n'est pas réutilisé. Mais un bon emplacement peut attirer une nouvelle reine au printemps : boucher l'accès une fois le nid mort, en hiver, limite ce risque.",
  },
];

const CITY_LINKS = [
  { label: "Guêpes & Frelons Chaumont", to: "/guepes-frelons-chaumont" },
  { label: "Guêpes & Frelons Langres", to: "/guepes-frelons-langres" },
  { label: "Guêpes & Frelons Saint-Dizier", to: "/guepes-frelons-saint-dizier" },
  { label: "Guêpes & Frelons Joinville", to: "/guepes-frelons-joinville" },
  { label: "Guêpes & Frelons Bar-sur-Aube", to: "/guepes-frelons-bar-sur-aube" },
  { label: "Guêpes & Frelons Bourbonne-les-Bains", to: "/guepes-frelons-bourbonne-les-bains" },
  { label: "Guêpes & Frelons Wassy", to: "/guepes-frelons-wassy" },
  { label: "Guêpes & Frelons Bologne", to: "/guepes-frelons-bologne" },
  { label: "Guêpes & Frelons Froncles", to: "/guepes-frelons-froncles" },
  { label: "Guêpes & Frelons Nogent", to: "/guepes-frelons-nogent" },
  { label: "Guêpes & Frelons Chalindrey", to: "/guepes-frelons-chalindrey" },
  { label: "Guêpes & Frelons Arc-en-Barrois", to: "/guepes-frelons-arc-en-barrois" },
  { label: "Guêpes & Frelons Châteauvillain", to: "/guepes-frelons-chateauvillain" },
  { label: "Guêpes & Frelons Montier-en-Der", to: "/guepes-frelons-montier-en-der" },
  { label: "Guêpes & Frelons Semoutiers-Montsaon", to: "/guepes-frelons-semoutiers-montsaon" },
];

const offer = (name: string, minPrice: number) => ({
  "@type": "Offer",
  name,
  priceSpecification: { "@type": "PriceSpecification", minPrice, priceCurrency: "EUR" },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    LOCAL_BUSINESS,
    {
      "@type": "Service",
      url: URL,
      name: "Destruction de nids de guêpes et frelons en Haute-Marne (52)",
      serviceType: "Destruction de nids de guêpes et de frelons",
      provider: { "@id": LOCAL_BUSINESS["@id"] },
      areaServed: LOCAL_BUSINESS.areaServed,
      description: DESCRIPTION,
      offers: [offer("Nid de guêpes", 80), offer("Nid de frelons asiatiques", 110)],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", position: 2, name: "Nos services", item: "https://gf-nuisibles.fr/#services" },
        { "@type": "ListItem", position: 3, name: "Guêpes & Frelons", item: URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

const GuepesFrelons = () => (
  <>
    <SEO title={TITLE} description={DESCRIPTION} path="/guepes-frelons" />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <Navbar />

    <ServiceHero
      breadcrumbs={breadcrumbsFrom(jsonLd)}
      eyebrow="N'y touchez pas, appelez un professionnel"
      title="Destruction de nids de guêpes et frelons en Haute-Marne (52)"
      text="Un nid sous le toit, dans un volet ou dans un arbre ? J'interviens chez vous contre les guêpes, les frelons européens et les frelons asiatiques, 7j/7."
      highlight="Nid de guêpes à partir de 80 €, frelons asiatiques à partir de 110 €"
      signsLabel="Pas sûr qu'il y ait un nid ? Voir les signes à repérer"
      image={heroImage}
      imageAlt="Frelon européen vu de face sur un grain de raisin"
      icon={Bug}
    />

    <main>
      <Section muted title="Comment se passe la destruction d'un nid ?" intro="De votre appel à la fin de l'intervention, vous savez à chaque fois ce qui va se passer.">
        <StepRow steps={STEPS} />
        <div className="mt-8">
          <Callout icon={Info} title="En attendant l'intervention">
            Restez à distance, éloignez les enfants et les animaux, et ne bouchez pas l'entrée du nid. En cas de piqûres multiples ou de gêne pour respirer, appelez le 15.
          </Callout>
        </div>
      </Section>

      <Section title="Quel est le prix pour enlever un nid de guêpes ou de frelons ?">
        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-foreground/80">
          Un nid de guêpes est traité <strong className="text-primary">à partir de <span className="whitespace-nowrap">80 €</span></strong>, et un nid de frelons asiatiques{" "}
          <strong className="text-primary">à partir de <span className="whitespace-nowrap">110 €</span></strong>. Le devis est gratuit et le paiement se fait après l'intervention.
        </p>
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <CheckList items={PRICE_FACTORS} />
          <div>
            <Callout icon={Camera} title="Une photo du nid pour un prix plus rapide">
              Envoyez une photo du nid par SMS ou WhatsApp au <span className="whitespace-nowrap">07 65 25 67 92</span>, prise de loin, sans vous approcher. Cela m'aide à vous donner un prix plus vite, avant que vous ne vous engagiez.
            </Callout>
            {/* sms: links only work on phones, so the button stays off larger screens. */}
            <a href={PHOTO_SMS} className={`${callButton} mt-4 w-full md:hidden`}>
              <Camera className="h-5 w-5" aria-hidden="true" />
              Envoyer une photo par SMS
            </a>
          </div>
        </div>
      </Section>

      <CallBand
        title="Un nid de guêpes ou de frelons chez vous ?"
        text="Appelez et dites où il se trouve : on voit ensemble ce qu'il faut faire."
        contactLabel="Devis gratuit"
      />

      <Section
        muted
        title="Où se trouvent les nids de guêpes et de frelons ?"
        intro="Certains se voient de loin, d'autres sont bien cachés. Voici les endroits à regarder, sans s'approcher."
      >
        <PlaceGrid items={PLACES} />
        <p className="mt-8 leading-relaxed text-muted-foreground">
          <strong className="text-primary">Vous êtes professionnel ?</strong> Commune, école, camping, entreprise, bailleur :{" "}
          <Link to="/contact" className={textLink}>demandez un devis adapté</Link>.
        </p>
      </Section>

      <Section title="Nids de guêpes et frelons : près de chez vous">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Basé aux portes de Chaumont, j'interviens partout en Haute-Marne : pour un{" "}
              <Link to="/guepes-frelons-chaumont" className={textLink}>nid de guêpes à Chaumont</Link>, Brottes ou Chamarandes-Choignes, pour la{" "}
              <Link to="/guepes-frelons-langres" className={textLink}>destruction de nids à Langres</Link>, contre les{" "}
              <Link to="/guepes-frelons-saint-dizier" className={textLink}>guêpes et frelons à Saint-Dizier</Link>, et aussi à{" "}
              <Link to="/guepes-frelons-nogent" className={textLink}>Nogent</Link>,{" "}
              <Link to="/guepes-frelons-joinville" className={textLink}>Joinville</Link> et, tout près, à{" "}
              <Link to="/guepes-frelons-bar-sur-aube" className={textLink}>Bar-sur-Aube</Link>.
            </p>
            <p>
              Vieilles toitures, granges, arbres creux, vergers : en Haute-Marne, les nids ne manquent pas d'endroits où s'installer. Les frelons asiatiques y sont aussi présents.
            </p>
            <Link to="/zone-intervention" className={`inline-flex items-center gap-2 ${textLink}`}>
              <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
              Voir notre zone d'intervention
            </Link>
          </div>
          <figure>
            <img src={chaumontNestImage} alt="Nid de frelons sous une toiture à Brottes, Chaumont, pendant une intervention de GF Nuisibles" loading="lazy" className={`${photoClass} object-[50%_38%]`} />
            <figcaption className="mt-2 text-sm text-muted-foreground">Un nid de frelons sous une toiture à Brottes (Chaumont), intervention GF Nuisibles.</figcaption>
          </figure>
        </div>
      </Section>

      <section className="section-padding bg-secondary">
        <div className="container-narrow space-y-6">
          <GuideBlock
            id="reconnaitre"
            title="Comment savoir s'il y a un nid chez vous ?"
            intro="Le nid est parfois invisible, dans une cloison ou sous une toiture. Ce sont les allées et venues qui le trahissent."
            summary="Voir les signes à repérer"
            open
          >
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <CheckList items={SIGNS} />
              <img src={waspNestImage} alt="Guêpes sur un nid ouvert, avec les alvéoles visibles, contre une planche de bois" loading="lazy" className={photoClass} />
            </div>
          </GuideBlock>
          <GuideBlock
            title="Que faire si vous trouvez un nid ?"
            intro="Le bon réflexe est de garder ses distances et de ne rien boucher."
            summary="Voir les bons réflexes"
          >
            <CheckList items={WHAT_TO_DO} />
          </GuideBlock>
          <GuideBlock
            title="Guêpe, frelon européen ou frelon asiatique ?"
            intro="La taille, la couleur et la forme du nid permettent souvent de les distinguer."
            summary="Voir les différences"
          >
            <CardGrid items={SPECIES} columns="" />
            <div className="mt-8 grid items-center gap-8 lg:grid-cols-[3fr_2fr]">
              <img src={comparisonImage} alt="Comparaison du frelon européen et du frelon asiatique : couleur du thorax, de l'abdomen et des pattes" loading="lazy" width={1200} height={504} className="w-full rounded-2xl border border-border bg-card" />
              <img src={paperNestImage} alt="Nid fermé en papier gris avec son trou d'entrée" loading="lazy" className={photoClass} />
            </div>
          </GuideBlock>
          <GuideBlock
            title="Guêpes dans le toit ou sous les tuiles : que faire ?"
            intro="C'est l'un des endroits les plus fréquents, et l'un des plus risqués à traiter soi-même."
            summary="Voir quoi faire"
          >
            <CheckList items={ROOF} />
          </GuideBlock>
          <GuideBlock
            title="Nid de frelons asiatiques : ce qu'il faut savoir"
            intro="Le frelon asiatique à pattes jaunes est une espèce exotique envahissante au niveau européen."
            summary="Voir les règles et les démarches"
          >
            <div className="grid items-center gap-8 lg:grid-cols-[2fr_1fr]">
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Il figure sur la liste européenne des espèces exotiques envahissantes (règlement UE 1143/2014). En France, la{" "}
                  <a href="https://www.vie-publique.fr/loi/293758-loi-du-14-mars-2025-proliferation-du-frelon-asiatique-filiere-apicole" target="_blank" rel="noopener noreferrer" className={textLink}>
                    loi du 14 mars 2025
                  </a>{" "}
                  prévoit un plan national et des plans départementaux pour limiter sa prolifération et protéger les ruches.
                </p>
                <p>
                  Si vous trouvez un nid, vous pouvez le signaler à votre mairie ou à la FREDON Grand Est. Certaines communes participent au coût de la destruction : demandez avant l'intervention.
                </p>
                <p>
                  À la fin de l'été, le nid peut dépasser la taille d'un ballon et se trouver très haut. Ne le secouez pas et n'essayez pas de le faire tomber.
                </p>
              </div>
              <img src={treeNestImage} alt="Gros nid en papier accroché dans un arbre sans feuilles" loading="lazy" className={photoClass} />
            </div>
          </GuideBlock>
          <GuideBlock
            title="Quand intervenir ? Le calendrier des nids"
            intro="Plus le nid est petit, plus l'intervention est simple."
            summary="Voir le calendrier"
          >
            <CardGrid items={SEASONS} columns="lg:grid-cols-3" />
          </GuideBlock>
          <GuideBlock
            title="Quels dangers avec les guêpes et les frelons ?"
            intro="La plupart des piqûres sont sans gravité, mais un nid près de la maison mérite de la prudence."
            summary="Voir les risques"
          >
            <CardGrid items={DANGERS} />
          </GuideBlock>
          <GuideBlock title="Les erreurs à éviter" intro="Détruire un nid soi-même est rarement une bonne idée." summary="Voir les erreurs les plus courantes">
            <CardGrid items={MISTAKES} />
          </GuideBlock>
          <GuideBlock
            title="Pourquoi faire appel à un professionnel ?"
            intro="Pour traiter le nid sans se mettre en danger, ni les voisins."
            summary="Voir les raisons"
          >
            <CheckList items={WHY_PRO} />
          </GuideBlock>
        </div>
      </section>

      <Section title="Questions fréquentes sur les nids de guêpes et de frelons">
        <FaqList items={FAQ_ITEMS} />
      </Section>

      <Section
        muted
        title="Destruction de nids de guêpes et frelons par ville"
        intro="GF Nuisibles intervient dans toute la Haute-Marne, comme à Chamarandes-Choignes, Saints-Geosmes ou Rolampont, et à proximité. Cliquez sur votre ville :"
      >
        <CityPills links={CITY_LINKS} />
        <p className="mt-8 leading-relaxed text-muted-foreground">
          <strong className="text-primary">Un autre nuisible chez vous ?</strong> Voyez aussi votre{" "}
          <Link to="/deratisation" className={textLink}>dératiseur en Haute-Marne</Link>, le{" "}
          <Link to="/cafards-blattes" className={textLink}>traitement des cafards et blattes</Link>, les{" "}
          <Link to="/punaises-de-lit" className={textLink}>punaises de lit</Link>, le{" "}
          <Link to="/depigeonnage" className={textLink}>dépigeonnage</Link> ou le{" "}
          <Link to="/taupes" className={textLink}>piégeage des taupes</Link>.
        </p>
      </Section>
    </main>

    <Reassurance />
    <Footer />
  </>
);

export default GuepesFrelons;
