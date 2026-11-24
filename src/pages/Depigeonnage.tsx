import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Bird,
  Building2,
  CalendarDays,
  Church,
  ClipboardCheck,
  Droplets,
  Egg,
  Factory,
  Feather,
  FileText,
  Fence,
  Grid3x3,
  Hand,
  House,
  Info,
  Leaf,
  MapPin,
  Phone,
  Pin,
  Search,
  ShieldCheck,
  Sparkles,
  Sprout,
  Stethoscope,
  Store,
  Sun,
  Trash2,
  Utensils,
  Volume2,
  Warehouse,
  Zap,
} from "lucide-react";
import heroImage from "@/assets/pigeon-hero.jpg";
import ledgeImage from "@/assets/pigeons-rebord.jpg";
import roofImage from "@/assets/pigeons-toit.jpg";
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
    .filter((link) => link.label === "Dépigeonnisation")
    .map((link) => ({ label: `Dépigeonnage à ${city.name}`, to: link.to })),
);

const TITLE = "Dépigeonnage Haute-Marne (52) : anti-pigeons | GF Nuisibles";
const DESCRIPTION =
  "Marre des fientes de pigeons ? Filets, pics, répulsion : des solutions sans les tuer, par un fauconnier de métier. Devis gratuit : 07 65 25 67 92.";
const URL = "https://gf-nuisibles.fr/depigeonnage";

const STEPS: ServiceStep[] = [
  { step: 1, icon: Phone, title: "Prise de contact", text: "Vous décrivez l'endroit et la gêne. Quelques photos prises de loin aident beaucoup." },
  { step: 2, icon: Search, title: "Diagnostic", text: "Sur place, je repère où les pigeons se posent, entrent et nichent, et je prends les mesures." },
  { step: 3, icon: FileText, title: "Devis", text: "Vous savez ce qui sera posé, où, et à quel prix, avant de vous engager." },
  { step: 4, icon: ShieldCheck, title: "Pose", text: "J'installe les protections adaptées : filets, pics, fils ou répulsion, sans tuer les oiseaux." },
  { step: 5, icon: ClipboardCheck, title: "Contrôle", text: "Je vérifie les points de passage et je vous explique l'entretien." },
];

const PRICE_FACTORS = [
  { title: "La surface", text: "un rebord de fenêtre, un balcon, une toiture ou un hangar." },
  { title: "Le dispositif", text: "filet, pics, fils tendus, système électrique ou laser." },
  { title: "La hauteur et l'accès", text: "échelle, nacelle, toiture fragile, cour intérieure." },
  { title: "Le nettoyage", text: "l'enlèvement des fientes et la désinfection, si vous les demandez." },
];

const PLACES = [
  { icon: Fence, title: "Balcon et terrasse", text: "des fientes sur le sol, la rambarde et le linge." },
  { icon: House, title: "Toiture et gouttières", text: "des nids sous les tuiles et des gouttières bouchées." },
  { icon: Building2, title: "Façade et rebords", text: "des coulures sur les murs, les fenêtres et les enseignes." },
  { icon: Warehouse, title: "Grange et hangar", text: "des oiseaux sur les poutres, au-dessus du matériel." },
  { icon: Factory, title: "Panneaux solaires", text: "des nids dessous, des panneaux salis." },
  { icon: Church, title: "Clocher et bâtiment public", text: "des accumulations dans les combles et les ouvertures." },
];

const SOLUTIONS = [
  { icon: Grid3x3, title: "Les filets", text: "ils ferment un volume : balcon, cour, charpente, puits de lumière. Une bonne solution quand les pigeons entrent ou nichent." },
  { icon: Pin, title: "Les pics", text: "en inox, ils empêchent de se poser sur un rebord, une corniche, une enseigne ou une gouttière." },
  { icon: Feather, title: "Les fils tendus", text: "discrets, pour les appuis et les façades où l'aspect compte." },
  { icon: Zap, title: "Le système électrique", text: "un fil à faible impulsion qui éloigne les oiseaux sans les blesser, sur certaines façades." },
  { icon: Sparkles, title: "La répulsion laser", text: "pour de grands volumes ou de grandes toitures, selon la configuration." },
  { icon: Droplets, title: "Le nettoyage", text: "enlèvement des fientes et désinfection des zones souillées, prévus au devis si besoin." },
];

const SIGNS = [
  { title: "Les fientes", text: "toujours au même endroit, sous un rebord, une poutre ou une gouttière." },
  { title: "Les plumes et brindilles", text: "au sol ou dans les gouttières : un nid se prépare." },
  { title: "Le bruit", text: "roucoulements et battements d'ailes tôt le matin, sous le toit." },
  { title: "Les allers-retours", text: "des oiseaux qui entrent par la même ouverture, une tuile ou une lucarne." },
];

const GET_RID = [
  { title: "Comprendre pourquoi ils sont là", text: "nourriture, abri, nid : on ne traite pas les trois de la même façon." },
  { title: "Fermer les accès", text: "après avoir vérifié qu'aucun oiseau, œuf ou jeune n'est à l'intérieur." },
  { title: "Protéger les points de pose", text: "tous les rebords utilisés, sinon ils se décalent de quelques mètres." },
  { title: "Nettoyer", text: "les fientes et les restes de nids attirent de nouveaux oiseaux." },
  { title: "Supprimer la nourriture", text: "poubelles ouvertes, graines, restes sur une terrasse." },
];

const ROOF = [
  { title: "Vérifiez de loin", text: "regardez d'où ils entrent et où ils se posent, sans monter sur le toit." },
  { title: "Ne bouchez pas tout de suite", text: "des œufs ou des jeunes peuvent se trouver à l'intérieur." },
  { title: "Pensez aux gouttières", text: "fientes et brindilles les bouchent et l'eau finit dans le mur." },
  { title: "Panneaux solaires", text: "un grillage ou un filet adapté sur le pourtour évite les nids dessous." },
];

const DAMAGES = [
  { icon: Building2, title: "Le bâtiment", text: "les fientes sont acides : elles attaquent la pierre, le zinc, les peintures et les joints." },
  { icon: Droplets, title: "Les gouttières", text: "bouchées par les nids et les fientes, elles débordent." },
  { icon: Stethoscope, title: "La santé", text: "des fientes sèches remuées dégagent des poussières qui peuvent porter des germes. Le risque est plus sérieux pour les personnes fragiles." },
  { icon: Volume2, title: "Le quotidien", text: "bruit, odeur, balcon inutilisable, sol glissant devant une entrée." },
];

const CLEANING = [
  { text: "Ne balayez jamais des fientes à sec : mouillez-les d'abord." },
  { text: "Portez des gants et un masque adapté, et aérez." },
  { text: "N'utilisez pas de jet à haute pression, qui disperse les poussières." },
  { text: "Pour une grosse accumulation, en comble ou en grange, faites appel à un professionnel." },
];

const SEASONS = [
  { icon: Sprout, title: "Printemps", text: "les pigeons s'installent et nichent. Mieux vaut protéger avant." },
  { icon: Sun, title: "Été", text: "les couvées se suivent : la présence d'un nid doit être vérifiée avant toute fermeture." },
  { icon: Leaf, title: "Automne", text: "une bonne période pour nettoyer et poser les protections." },
  { icon: CalendarDays, title: "Hiver", text: "les oiseaux cherchent l'abri et la chaleur. Idéal pour préparer un chantier." },
];

const MISTAKES = [
  { icon: Trash2, title: "Nourrir les pigeons", text: "le règlement sanitaire l'interdit en général, et cela en attire d'autres." },
  { icon: Egg, title: "Retirer un nid sans vérifier", text: "l'espèce et la présence d'œufs ou de jeunes changent ce qui est permis." },
  { icon: Feather, title: "Compter sur un faux hibou", text: "les pigeons s'y habituent souvent en quelques jours." },
  { icon: Hand, title: "Protéger un seul rebord", text: "ils se posent juste à côté : il faut traiter l'ensemble." },
];

const PROS = [
  { icon: Building2, title: "Copropriétés et bailleurs", text: "balcons, cours, parties communes. L'accord du syndic est à prévoir." },
  { icon: Church, title: "Communes", text: "écoles, mairies, églises, halles. Une autorisation peut être nécessaire en secteur protégé." },
  { icon: Store, title: "Commerces et bureaux", text: "enseignes, entrées, terrasses : une façade propre pour vos clients." },
  { icon: Utensils, title: "Agricole et agroalimentaire", text: "hangars, quais, silos : éviter les fientes sur le matériel et les denrées." },
];

const FAQ_ITEMS = [
  {
    question: "Comment faire pour que les pigeons ne viennent plus sur mon toit ?",
    answer:
      "Il faut fermer les endroits où ils nichent et protéger ceux où ils se posent : filets, pics ou fils tendus selon la toiture. Un seul dispositif mal placé les déplace de quelques mètres. Le diagnostic permet de traiter l'ensemble des points utilisés.",
  },
  {
    question: "Quel est le prix d'un dépigeonnage ?",
    answer:
      "Le prix dépend de la surface, du dispositif, de la hauteur, des moyens d'accès et du nettoyage éventuel. Un balcon, une toiture et un hangar n'ont rien à voir. Le devis est gratuit et détaille ce qui sera posé.",
  },
  {
    question: "Filet ou pics anti-pigeons : que choisir ?",
    answer:
      "Les pics empêchent de se poser sur un rebord. Le filet empêche d'entrer dans un volume, comme un balcon ou une charpente. Si les pigeons nichent, les pics seuls suffisent rarement.",
  },
  {
    question: "Vos méthodes blessent-elles les pigeons ?",
    answer:
      "Non. Les solutions posées sont non létales : elles empêchent les oiseaux de se poser, d'entrer ou de nicher, sans les tuer ni les blesser. GF Nuisibles est dirigé par un fauconnier de métier.",
  },
  {
    question: "Que faire si un nid contient des œufs ou des oisillons ?",
    answer:
      "Ne bouchez pas l'accès et ne déplacez pas le nid vous-même. L'espèce et les règles qui s'appliquent doivent être vérifiées avant toute action. Signalez-le dès votre appel.",
  },
  {
    question: "Peut-on poser des protections sur une façade ancienne ou classée ?",
    answer:
      "Souvent oui, avec un dispositif discret, mais une autorisation peut être nécessaire en secteur protégé. Vérifiez auprès du service urbanisme de votre commune avant la pose.",
  },
  {
    question: "Nettoyez-vous les fientes de pigeon ?",
    answer:
      "Oui, l'enlèvement des fientes et la désinfection des zones souillées peuvent être ajoutés au devis. Évitez de balayer à sec en attendant : les poussières peuvent porter des germes.",
  },
  {
    question: "Qui paie le dépigeonnage en copropriété ou en location ?",
    answer:
      "Cela dépend de l'endroit : parties communes, balcon privatif, façade. Prévenez le syndic ou votre propriétaire avant les travaux, de préférence par écrit. En cas de doute, renseignez-vous auprès de l'ADIL.",
  },
  {
    question: "A-t-on le droit de nourrir les pigeons ?",
    answer:
      "En général non : le règlement sanitaire départemental interdit de déposer de la nourriture qui attire les animaux sauvages ou les oiseaux, notamment les pigeons. Certaines communes prennent aussi un arrêté.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    LOCAL_BUSINESS,
    {
      "@type": "Service",
      url: URL,
      name: "Dépigeonnage en Haute-Marne (52) : solutions anti-pigeons",
      serviceType: "Dépigeonnage",
      description: DESCRIPTION,
      provider: { "@id": LOCAL_BUSINESS["@id"] },
      areaServed: LOCAL_BUSINESS.areaServed,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", position: 2, name: "Nos services", item: "https://gf-nuisibles.fr/#services" },
        { "@type": "ListItem", position: 3, name: "Dépigeonnage", item: URL },
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

const Depigeonnage = () => (
  <>
    <SEO title={TITLE} description={DESCRIPTION} path="/depigeonnage" />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <Navbar />

    <ServiceHero
      breadcrumbs={breadcrumbsFrom(jsonLd)}
      eyebrow="Par un fauconnier de métier, sans tuer les oiseaux"
      title="Dépigeonnage en Haute-Marne (52) : solutions anti-pigeons"
      text="Fientes sur le balcon, nids sous le toit, façade tachée ? Je protège votre bâtiment avec des filets, des pics ou des systèmes de répulsion, adaptés à chaque endroit."
      highlight="Particuliers, copropriétés, communes et professionnels"
      signsLabel="Pas sûr que les pigeons nichent chez vous ? Voir les signes"
      image={heroImage}
      imageAlt="Pigeon posé au bord d'un toit de tuiles, près d'une fenêtre"
      icon={Bird}
    />

    <main>
      <Section muted title="Comment se passe un dépigeonnage ?" intro="De votre appel au contrôle, vous savez à chaque fois ce qui va se passer.">
        <StepRow steps={STEPS} />
        <div className="mt-8">
          <Callout icon={Info} title="Un nid, des œufs ou des jeunes ?">
            Ne bouchez pas l'accès et ne touchez à rien. Dites-le dès votre appel : l'espèce et les règles doivent être vérifiées avant d'intervenir.
          </Callout>
        </div>
      </Section>

      <Section title="Quel est le prix d'un dépigeonnage ?">
        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-foreground/80">
          <strong className="text-primary">Il n'y a pas de tarif unique : protéger un balcon et protéger un hangar n'ont rien à voir.</strong> Le devis est gratuit et vous donne le prix exact.
        </p>
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <CheckList items={PRICE_FACTORS} />
          <Callout icon={FileText} title="Un devis détaillé, avant de vous engager">
            Il précise le dispositif, les endroits protégés, les fixations et le nettoyage éventuel. Vous savez aussi ce qui ne sera pas couvert.
          </Callout>
        </div>
      </Section>

      <CallBand
        title="Des pigeons sur votre toit ou votre balcon ?"
        text="Appelez et décrivez l'endroit : on voit ensemble quelle protection convient."
        contactLabel="Devis gratuit"
      />

      <Section muted title="Où les pigeons s'installent-ils ?" intro="Ils cherchent un rebord tranquille, un abri et de quoi manger pas trop loin.">
        <PlaceGrid items={PLACES} />
      </Section>

      <Section title="Quelles solutions anti-pigeons ?" intro="Le bon choix dépend de ce que font les pigeons : se poser, entrer ou nicher. Aucune de ces solutions ne les tue.">
        <CardGrid items={SOLUTIONS} columns="lg:grid-cols-3" />
      </Section>

      <Section muted title="Dépigeonnage : près de chez vous">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Basé aux portes de Chaumont, j'interviens partout en Haute-Marne : pour le{" "}
              <Link to="/depigeonnisation-chaumont" className={textLink}>dépigeonnage à Chaumont</Link>, le{" "}
              <Link to="/depigeonnisation-langres" className={textLink}>dépigeonnage à Langres</Link>, contre les{" "}
              <Link to="/depigeonnisation-saint-dizier" className={textLink}>pigeons à Saint-Dizier</Link>, et aussi à{" "}
              <Link to="/depigeonnisation-joinville" className={textLink}>Joinville</Link>,{" "}
              <Link to="/depigeonnisation-nogent" className={textLink}>Nogent</Link> et, tout près, à{" "}
              <Link to="/depigeonnisation-vitry-le-francois" className={textLink}>Vitry-le-François</Link>.
            </p>
            <p>
              Centres anciens, toitures en tuiles, granges, clochers : en Haute-Marne, le bâti offre beaucoup d'abris aux pigeons. Sur une façade ancienne, mieux vaut une protection discrète.
            </p>
            <Link to="/zone-intervention" className={`inline-flex items-center gap-2 ${textLink}`}>
              <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
              Voir notre zone d'intervention
            </Link>
          </div>
          <img src={ledgeImage} alt="Deux pigeons posés sur le rebord d'une façade ancienne, près d'une fenêtre" loading="lazy" className={photoClass} />
        </div>
      </Section>

      <section className="section-padding bg-background">
        <div className="container-narrow space-y-6">
          <GuideBlock
            id="reconnaitre"
            title="Les signes que des pigeons s'installent"
            intro="Plus on agit tôt, moins il y a à nettoyer et à protéger."
            summary="Voir les signes à repérer"
            open
          >
            <CheckList items={SIGNS} />
          </GuideBlock>
          <GuideBlock
            title="Comment se débarrasser des pigeons ?"
            intro="Les faire partir ne suffit pas : il faut qu'ils ne puissent plus se réinstaller."
            summary="Voir la méthode"
          >
            <CheckList items={GET_RID} />
          </GuideBlock>
          <GuideBlock
            title="Pigeons sur le toit ou sous les panneaux solaires : que faire ?"
            intro="Le toit est l'endroit le plus fréquent, et le plus délicat à protéger."
            summary="Voir quoi faire"
          >
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <CheckList items={ROOF} />
              <img src={roofImage} alt="Pigeons posés sur le toit en tuiles d'une maison" loading="lazy" className={photoClass} />
            </div>
          </GuideBlock>
          <GuideBlock
            title="Quels dégâts et quels risques avec les pigeons ?"
            intro="Quelques oiseaux ne posent pas de problème. Une colonie installée, si."
            summary="Voir les dégâts et les risques"
          >
            <CardGrid items={DAMAGES} />
          </GuideBlock>
          <GuideBlock
            title="Nettoyer des fientes de pigeon sans risque"
            intro="Les poussières de fientes sèches ne doivent pas être respirées."
            summary="Voir les précautions"
          >
            <CheckList items={CLEANING} />
          </GuideBlock>
          <GuideBlock
            title="Quand protéger son bâtiment ?"
            intro="Les pigeons peuvent nicher une grande partie de l'année."
            summary="Voir le calendrier"
          >
            <CardGrid items={SEASONS} />
          </GuideBlock>
          <GuideBlock title="Les erreurs à éviter" intro="Elles font perdre du temps, et parfois attirent plus d'oiseaux." summary="Voir les erreurs les plus courantes">
            <CardGrid items={MISTAKES} />
          </GuideBlock>
          <GuideBlock
            title="Copropriétés, communes et professionnels"
            intro="Une intervention discrète, organisée avec les occupants."
            summary="Voir les prestations pour les professionnels"
          >
            <CardGrid items={PROS} />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              <Link to="/contact" className={textLink}>Demandez un devis adapté</Link> à votre bâtiment.
            </p>
          </GuideBlock>
        </div>
      </section>

      <Section muted title="Questions fréquentes sur les pigeons">
        <FaqList items={FAQ_ITEMS} />
      </Section>

      <Section
        title="Dépigeonnage par ville"
        intro="GF Nuisibles intervient pour le dépigeonnage en Haute-Marne (52) et dans les départements limitrophes. Cliquez sur votre ville :"
      >
        <CityPills links={CITY_LINKS} />
        <p className="mt-8 leading-relaxed text-muted-foreground">
          <strong className="text-primary">Des bruits sous la toiture la nuit ?</strong> Ce ne sont peut-être pas des pigeons : voyez la{" "}
          <Link to="/deratisation" className={textLink}>dératisation en Haute-Marne</Link>. Voyez aussi les{" "}
          <Link to="/guepes-frelons" className={textLink}>nids de guêpes et frelons</Link>, le{" "}
          <Link to="/cafards-blattes" className={textLink}>traitement des cafards et blattes</Link>, les{" "}
          <Link to="/punaises-de-lit" className={textLink}>punaises de lit</Link> ou votre{" "}
          <Link to="/taupes" className={textLink}>taupier en Haute-Marne</Link>.
        </p>
      </Section>
    </main>

    <Reassurance />
    <Footer />
  </>
);

export default Depigeonnage;
