import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Carrot,
  ClipboardCheck,
  Droplets,
  FileText,
  Flower2,
  Footprints,
  Hand,
  House,
  Info,
  Leaf,
  MapPin,
  Phone,
  Search,
  Shovel,
  Snowflake,
  SprayCan,
  Sprout,
  Sun,
  Target,
  Tractor,
  Trees,
  Volume2,
  Worm,
} from "lucide-react";
import heroImage from "@/assets/taupe-hero.jpg";
import moundsImage from "@/assets/taupinieres.jpg";
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
  photoClass,
  textLink,
} from "@/components/ServiceBlocks";
import { LOCAL_BUSINESS } from "@/data/business";
import { CITIES } from "@/data/cities";

const CITY_LINKS = CITIES.flatMap((city) =>
  city.links
    .filter((link) => link.label === "Taupes")
    .map((link) => ({ label: `Taupier à ${city.name}`, to: link.to })),
);

const TITLE = "Taupier Haute-Marne 52 | Expert Anti-Taupes | GF Nuisibles";
const DESCRIPTION =
  "Votre pelouse est pleine de taupinières ? Un piégeur agréé s'en occupe, sans produit chimique, en Haute-Marne. Devis gratuit : 07 65 25 67 92.";
const URL = "https://gf-nuisibles.fr/taupes";

const STEPS: ServiceStep[] = [
  { step: 1, icon: Phone, title: "Prise de contact", text: "Vous décrivez votre terrain et les taupinières. Quelques photos aident beaucoup." },
  { step: 2, icon: Search, title: "Diagnostic", text: "Sur place, je cherche les galeries actives et je vérifie que c'est bien une taupe." },
  { step: 3, icon: FileText, title: "Devis", text: "Vous connaissez le prix avant de vous engager." },
  { step: 4, icon: Target, title: "Piégeage", text: "Je pose des pièges mécaniques dans les bonnes galeries, sans produit chimique." },
  { step: 5, icon: ClipboardCheck, title: "Contrôle", text: "Je relève les pièges, je vérifie l'activité et je retire le matériel." },
];

const PRICE_FACTORS = [
  { title: "La surface", text: "une petite pelouse, un grand jardin, un verger ou un champ." },
  { title: "Les galeries", text: "quelques taupinières groupées ou un réseau dispersé sur tout le terrain." },
  { title: "L'accès", text: "clôtures, pentes, plantations, arrosage enterré." },
  { title: "Les contrôles", text: "le nombre de passages nécessaires pour relever les pièges." },
];

const PLACES = [
  { icon: House, title: "Pelouse et jardin", text: "des monticules qui abîment le gazon et gênent la tonte." },
  { icon: Carrot, title: "Potager", text: "des galeries qui soulèvent les semis et dessèchent les racines." },
  { icon: Trees, title: "Verger et parc", text: "des taupinières entre les arbres et le long des allées." },
  { icon: Flower2, title: "Massifs et haies", text: "des plants déchaussés dans une terre souple et arrosée." },
  { icon: Footprints, title: "Terrain de sport, cimetière", text: "un sol irrégulier, avec un risque de chute." },
  { icon: Tractor, title: "Prairie et culture", text: "de la terre dans le fourrage et des lames abîmées." },
];

const SIGNS = [
  { title: "Les taupinières", text: "des monticules de terre fine, ronds, souvent alignés." },
  { title: "Les galeries", text: "de petits bourrelets sous l'herbe, le sol s'enfonce quand on marche dessus." },
  { title: "La terre fraîche", text: "un monticule humide et meuble le matin : la galerie est active." },
  { title: "L'herbe jaunie", text: "des bandes de gazon sèchent, car les racines ne touchent plus la terre." },
];

const WHO_IS_IT = [
  { icon: Worm, title: "La taupe", text: "des monticules en dôme, sans trou visible. Elle mange des vers et des larves, pas vos légumes." },
  { icon: Carrot, title: "Le campagnol", text: "des monticules plus plats, des trous ouverts, des racines et des bulbes rongés. C'est un rongeur." },
  { icon: Leaf, title: "Le rat taupier", text: "un gros campagnol : des monticules irréguliers et des racines d'arbres fruitiers rongées." },
];

const GET_RID = [
  { title: "Repérer les galeries actives", text: "toutes ne servent plus. Poser un piège au hasard ne donne rien." },
  { title: "Trouver les passages principaux", text: "ceux que la taupe emprunte chaque jour, souvent le long d'une haie, d'un mur ou d'une allée." },
  { title: "Poser le bon piège", text: "un piège mécanique, bien placé et bien réglé, sans laisser d'odeur." },
  { title: "Contrôler", text: "relever les pièges, les déplacer si besoin, vérifier qu'aucune terre fraîche n'apparaît." },
  { title: "Surveiller", text: "une autre taupe peut venir d'un terrain voisin : les premières taupinières se traitent vite." },
];

const ATTRACT = [
  { icon: Worm, title: "Les vers de terre", text: "un sol riche et vivant est un garde-manger. C'est plutôt bon signe pour votre terre." },
  { icon: Droplets, title: "Un sol souple et humide", text: "facile à creuser, comme une pelouse arrosée ou un fond de vallée." },
  { icon: Sprout, title: "Un terrain calme", text: "prairies, lisières, jardins peu fréquentés." },
  { icon: Trees, title: "Le voisinage", text: "un champ ou un bois à côté : une galerie libre est vite reprise." },
];

const SEASONS = [
  { icon: Sprout, title: "Printemps", text: "les mâles cherchent les femelles et creusent beaucoup. Les petits naissent à cette période." },
  { icon: Sun, title: "Été", text: "les jeunes quittent le nid. Par temps sec, les taupes descendent plus profond et se voient moins." },
  { icon: Leaf, title: "Automne", text: "le sol redevient souple : les taupinières réapparaissent." },
  { icon: Snowflake, title: "Hiver", text: "la taupe n'hiberne pas. Elle continue à creuser, parfois sous la neige." },
];

const MISTAKES = [
  { icon: Volume2, title: "Les appareils à ultrasons", text: "les taupes s'y habituent souvent ou creusent un peu plus loin." },
  { icon: SprayCan, title: "Verser un produit", text: "essence, javel ou boules de naphtaline polluent le sol et sont dangereuses pour vos animaux." },
  { icon: Shovel, title: "Tout aplatir avant la visite", text: "les traces fraîches aident à trouver les bonnes galeries." },
  { icon: Hand, title: "Poser les pièges au hasard", text: "la taupe contourne un piège mal placé et devient méfiante." },
];

const WHY_PRO = [
  { title: "Piégeur agréé", text: "un agrément, et l'habitude de lire un terrain." },
  { title: "Sans produit chimique", text: "des pièges mécaniques, adaptés aux jardins avec enfants et animaux si les consignes sont suivies." },
  { title: "Local", text: "basé à Semoutiers-Montsaon, près de Chaumont." },
  { title: "Franc", text: "personne ne peut promettre qu'une taupe ne reviendra jamais d'un terrain voisin." },
];

const PREPARE = [
  { text: "N'aplatissez pas toutes les taupinières : laissez les plus récentes." },
  { text: "Notez où de la terre fraîche apparaît, et depuis quand." },
  { text: "Signalez les tuyaux d'arrosage, câbles enterrés et robots de tonte." },
  { text: "Prévoyez de garder les enfants et les animaux loin des pièges." },
  { text: "Ne touchez pas aux pièges entre deux passages." },
];

const FAQ_ITEMS = [
  {
    question: "Quel tarif pour un taupier ?",
    answer:
      "Le prix dépend de la surface, de l'étendue des galeries, de l'accès et du nombre de contrôles. Il n'y a pas de tarif unique : le devis est gratuit et vous connaissez le prix avant l'intervention.",
  },
  {
    question: "Comment faire pour ne plus avoir de taupes dans le jardin ?",
    answer:
      "Le piégeage dans les galeries actives est la solution la plus directe. Ensuite, il faut surveiller : un terrain ouvert peut être repris par une taupe venue d'à côté. Agir dès les premières taupinières évite un réseau étendu.",
  },
  {
    question: "Une dizaine de taupinières, est-ce dix taupes ?",
    answer:
      "Non. La taupe vit seule et une seule peut faire de nombreux monticules. Ce qui compte, c'est de trouver les galeries qu'elle utilise.",
  },
  {
    question: "Le piégeage des taupes utilise-t-il des produits chimiques ?",
    answer:
      "Non, j'utilise des pièges mécaniques. Cela demande quand même des précautions : ne manipulez pas les pièges et tenez les enfants et les animaux éloignés des zones indiquées.",
  },
  {
    question: "Les taupes mangent-elles les légumes et les racines ?",
    answer:
      "Non, la taupe mange surtout des vers de terre et des larves. Si vos racines, bulbes ou légumes sont rongés, il s'agit plutôt d'un campagnol ou d'un autre rongeur.",
  },
  {
    question: "Quel est le meilleur moment pour piéger les taupes ?",
    answer:
      "On peut intervenir toute l'année. L'automne, l'hiver doux et le début du printemps sont souvent favorables, car le sol est souple et les galeries actives se repèrent bien.",
  },
  {
    question: "La taupe est-elle protégée ?",
    answer:
      "Non, la taupe d'Europe n'est pas une espèce protégée en France. Le piégeage doit tout de même être fait avec du matériel adapté et dans le respect des règles.",
  },
  {
    question: "Pouvez-vous garantir qu'aucune taupe ne reviendra ?",
    answer:
      "Non, et il faut se méfier de ceux qui le promettent. Une parcelle ouverte peut être reprise depuis les environs. Le devis précise ce qui est prévu et les contrôles.",
  },
  {
    question: "Intervenez-vous pour les communes et les professionnels ?",
    answer:
      "Oui : terrains de sport, parcs, cimetières, campings, exploitations agricoles, paysagistes. L'intervention et le suivi sont adaptés à l'usage du terrain.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    LOCAL_BUSINESS,
    {
      "@type": "Service",
      url: URL,
      name: "Taupier en Haute-Marne (52) : piégeage des taupes",
      serviceType: "Piégeage de taupes",
      description: DESCRIPTION,
      provider: { "@id": LOCAL_BUSINESS["@id"] },
      areaServed: LOCAL_BUSINESS.areaServed,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", position: 2, name: "Nos services", item: "https://gf-nuisibles.fr/#services" },
        { "@type": "ListItem", position: 3, name: "Taupes", item: URL },
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

const Taupes = () => (
  <>
    <SEO title={TITLE} description={DESCRIPTION} path="/taupes" />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <Navbar />

    <ServiceHero
      breadcrumbs={breadcrumbsFrom(jsonLd)}
      eyebrow="Piégeur agréé, sans produit chimique"
      title="Taupier en Haute-Marne (52) : piégeage des taupes"
      text="Chaque matin, de nouvelles taupinières sur la pelouse ? Je repère les galeries actives et je pose les pièges au bon endroit, dans votre jardin ou sur votre terrain."
      highlight="Pièges mécaniques uniquement, aucun produit dans le sol"
      signsLabel="Pas sûr que ce soit une taupe ? Voir les signes à repérer"
      image={heroImage}
      imageAlt="Taupe noire avec son museau rose et ses pattes fouisseuses"
      icon={Shovel}
    />

    <main>
      <Section muted title="Comment se passe le piégeage des taupes ?" intro="De votre appel au dernier contrôle, vous savez à chaque fois ce qui va se passer.">
        <StepRow steps={STEPS} />
        <div className="mt-8">
          <Callout icon={Info} title="Dix taupinières ne veulent pas dire dix taupes">
            La taupe vit seule et peut faire de nombreux monticules. L'important n'est pas de les compter, mais de trouver les galeries qu'elle utilise.
          </Callout>
        </div>
      </Section>

      <Section title="Quel est le prix d'un taupier ?">
        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-foreground/80">
          <strong className="text-primary">Il n'y a pas de tarif unique : tout dépend du terrain et de l'étendue des galeries.</strong> Le devis est gratuit et vous donne le prix exact.
        </p>
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <CheckList items={PRICE_FACTORS} />
          <Callout icon={FileText} title="Un devis gratuit, avant de vous engager">
            Je regarde d'abord le terrain, puis vous recevez le prix et le nombre de contrôles prévus.
          </Callout>
        </div>
      </Section>

      <CallBand
        title="Des taupes dans votre jardin ?"
        text="Appelez et décrivez ce que vous voyez : on voit ensemble ce qu'il faut faire."
        contactLabel="Devis gratuit"
      />

      <Section
        muted
        title="Où les taupes font-elles des dégâts ?"
        intro="Une taupe creuse partout où le sol est souple et plein de vers. J'interviens sur tous types de terrains."
      >
        <PlaceGrid items={PLACES} />
        <p className="mt-8 leading-relaxed text-muted-foreground">
          <strong className="text-primary">Vous êtes professionnel ?</strong> Commune, club, camping, paysagiste, exploitation agricole :{" "}
          <Link to="/contact" className={textLink}>demandez un devis adapté</Link>.
        </p>
      </Section>

      <Section title="Un taupier près de chez vous">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Basé aux portes de Chaumont, j'interviens partout en Haute-Marne : comme{" "}
              <Link to="/taupes-chaumont" className={textLink}>taupier à Chaumont</Link>, Brottes et dans les villages autour, comme{" "}
              <Link to="/taupes-langres" className={textLink}>taupier à Langres</Link>, contre les{" "}
              <Link to="/taupes-saint-dizier" className={textLink}>taupes à Saint-Dizier</Link>, et aussi à{" "}
              <Link to="/taupes-nogent" className={textLink}>Nogent</Link>,{" "}
              <Link to="/taupes-joinville" className={textLink}>Joinville</Link> et{" "}
              <Link to="/taupes-montier-en-der" className={textLink}>Montier-en-Der</Link>.
            </p>
            <p>
              Entre prairies, vergers et fonds de vallée, la Haute-Marne a beaucoup de sols souples et riches en vers : les taupes s'y plaisent, en village comme en bordure de ville.
            </p>
            <Link to="/zone-intervention" className={`inline-flex items-center gap-2 ${textLink}`}>
              <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
              Voir notre zone d'intervention
            </Link>
          </div>
          <img src={moundsImage} alt="Taupinières de terre fraîche sur une pelouse couverte de feuilles" loading="lazy" className={photoClass} />
        </div>
      </Section>

      <section className="section-padding bg-secondary">
        <div className="container-narrow space-y-6">
          <GuideBlock
            id="reconnaitre"
            title="Reconnaître la présence d'une taupe"
            intro="On ne la voit presque jamais : c'est la terre qui la trahit."
            summary="Voir les signes à repérer"
            open
          >
            <CheckList items={SIGNS} />
          </GuideBlock>
          <GuideBlock
            title="Taupe, campagnol ou rat taupier : comment savoir ?"
            intro="Les traces se ressemblent, mais le traitement n'est pas le même."
            summary="Voir les différences"
          >
            <CardGrid items={WHO_IS_IT} columns="lg:grid-cols-3" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Des racines ou des légumes rongés ? Voyez plutôt la{" "}
              <Link to="/deratisation" className={textLink}>dératisation en Haute-Marne</Link>.
            </p>
          </GuideBlock>
          <GuideBlock
            title="Comment se débarrasser des taupes ?"
            intro="La méthode la plus directe reste le piégeage, à condition de bien lire le terrain."
            summary="Voir la méthode"
          >
            <CheckList items={GET_RID} />
          </GuideBlock>
          <GuideBlock
            title="Comment préparer la visite du taupier ?"
            intro="Quelques gestes simples font gagner du temps."
            summary="Voir comment préparer la visite"
          >
            <CheckList items={PREPARE} />
          </GuideBlock>
          <GuideBlock
            title="Qu'est-ce qui attire les taupes dans un jardin ?"
            intro="Une taupe cherche à manger et un sol facile à creuser."
            summary="Voir les causes"
          >
            <CardGrid items={ATTRACT} />
          </GuideBlock>
          <GuideBlock
            title="Quand piéger les taupes ?"
            intro="Les taupes sont actives toute l'année, de jour comme de nuit."
            summary="Voir le calendrier"
          >
            <CardGrid items={SEASONS} />
          </GuideBlock>
          <GuideBlock title="Les erreurs à éviter" intro="Beaucoup de recettes circulent, peu fonctionnent." summary="Voir les erreurs les plus courantes">
            <CardGrid items={MISTAKES} />
          </GuideBlock>
          <GuideBlock
            title="Pourquoi faire appel à un taupier professionnel ?"
            intro="Poser un piège est simple. Le poser au bon endroit l'est beaucoup moins."
            summary="Voir les raisons"
          >
            <CheckList items={WHY_PRO} />
          </GuideBlock>
        </div>
      </section>

      <Section title="Questions fréquentes sur les taupes">
        <FaqList items={FAQ_ITEMS} />
      </Section>

      <Section
        muted
        title="Taupier par ville en Haute-Marne"
        intro="GF Nuisibles intervient comme taupier en Haute-Marne (52) et à proximité. Cliquez sur votre ville :"
      >
        <CityPills links={CITY_LINKS} />
        <p className="mt-8 leading-relaxed text-muted-foreground">
          <strong className="text-primary">Un autre nuisible chez vous ?</strong> Voyez aussi votre{" "}
          <Link to="/deratisation" className={textLink}>dératiseur en Haute-Marne</Link>, les{" "}
          <Link to="/guepes-frelons" className={textLink}>nids de guêpes et frelons</Link>, le{" "}
          <Link to="/cafards-blattes" className={textLink}>traitement des cafards et blattes</Link>, les{" "}
          <Link to="/punaises-de-lit" className={textLink}>punaises de lit</Link>, le{" "}
          <Link to="/depigeonnage" className={textLink}>dépigeonnage</Link> ou la{" "}
          <Link to="/regulation-esod" className={textLink}>régulation des espèces ESOD</Link>.
        </p>
      </Section>
    </main>

    <Reassurance />
    <Footer />
  </>
);

export default Taupes;
