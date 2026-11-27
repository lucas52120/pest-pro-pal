import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Building2,
  DoorOpen,
  Droplets,
  FileText,
  Hammer,
  House,
  KeyRound,
  Landmark,
  Moon,
  Quote,
  Rat,
  ShieldCheck,
  Store,
  Trees,
  Users,
  Utensils,
} from "lucide-react";
import heroImage from "@/assets/poste-appat-mur-pierre.jpg";
import closedStation from "@/assets/poste-appat-facade.jpg";
import openStation from "@/assets/poste-appat-ouvert.jpg";
import gnawedBait from "@/assets/appat-entame.jpg";
import Navbar from "@/components/Navbar";
import Reassurance from "@/components/Reassurance";
import RodentSteps from "@/components/RodentSteps";
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
  PlaceGrid,
  Section,
  ServiceHero,
  textLink,
} from "@/components/ServiceBlocks";
import { LOCAL_BUSINESS } from "@/data/business";
import { CALL_DELAY, RODENT_PRICE } from "@/data/rodentOffer";

const TITLE = "Entreprise de dératisation à Chaumont (52) | Devis gratuit";
const DESCRIPTION =
  "Rats ou souris à Chaumont (52000) ? Entreprise locale pour logements et commerces : recherche des accès, traitement adapté. Devis gratuit : 07 65 25 67 92.";
const URL = "https://gf-nuisibles.fr/deratisation-chaumont";

const WHY = [
  { icon: Utensils, title: "De quoi manger", text: "croquettes, graines pour les oiseaux, compost, poulailler, poubelle sortie la veille." },
  { icon: Moon, title: "Un coin tranquille", text: "grenier, cave, faux plafond ou dessous de cuisine : là où personne ne passe." },
  { icon: DoorOpen, title: "Une ouverture", text: "bas de porte, tuyau, soupirail, aération. Pour une souris, un trou de 6 mm suffit." },
  { icon: Hammer, title: "Un changement à côté", text: "des travaux, une maison vidée ou un traitement chez un voisin les poussent à bouger." },
];

const DISTRICTS = [
  { icon: Landmark, title: "Centre historique", text: "maisons accolées et vieilles caves : je regarde les soupiraux, les murs en pierre et les passages de tuyaux partagés avec les voisins." },
  { icon: Building2, title: "Le Cavalier et La Rochotte", text: "en immeuble, souris et rats montent par les gaines et tournent autour des locaux poubelles. Un seul appartement traité ne suffit pas toujours." },
  { icon: House, title: "Brottes", text: "côté pavillons, l'entrée se trouve souvent au garage, dans le vide sanitaire ou près du compost et du poulailler." },
  { icon: Briefcase, title: "Quartier Foch", text: "bureaux et locaux d'activité : faux plafonds, coin repas, placards techniques et sous-sols." },
  { icon: Store, title: "La Vendue et la Dame Huguenotte", text: "dans les zones d'activités, les quais, les réserves et les bennes attirent les rongeurs en premier." },
  { icon: Droplets, title: "Vallées de la Suize et de la Marne", text: "près de l'eau, je contrôle les regards, les évacuations et les remises : le rat brun est un très bon nageur." },
];

const PHOTOS = [
  { src: closedStation, alt: "Poste d'appâtage noir fermé, posé au pied d'une façade", title: "Un boîtier fermé", text: "Posé contre un mur, là où passent les rats. Ils entrent par l'ouverture ronde ; l'appât reste à l'intérieur." },
  { src: openStation, alt: "Intérieur d'un poste d'appâtage avec trois blocs verts enfilés sur une tige", title: "Des blocs tenus par une tige", text: "Le rat mange sur place au lieu d'emporter l'appât dans votre jardin ou sous le plancher." },
  { src: gnawedBait, alt: "Appât bleu rongé dans un poste d'appâtage ouvert lors d'un contrôle", title: "Le contrôle", text: "Un appât entamé montre que l'endroit est le bon. S'il est intact, je déplace le boîtier." },
];

const TELL_ME = [
  { title: "L'endroit", text: "quelle pièce, quel étage, et ce qu'il y a juste à côté : cave, garage, combles, local poubelles." },
  { title: "Le moment", text: "des grattements la nuit, au petit matin, ou un animal vu en pleine journée." },
  { title: "Les traces", text: "crottes, emballage percé, câble rongé, terre remuée au pied d'un mur. Une photo aide beaucoup." },
  { title: "Ce que vous avez déjà essayé", text: "pièges, poison acheté en magasin, trous rebouchés : dites-le-moi, cela change la façon de faire." },
];

const WHO_TO_CALL = [
  { icon: KeyRound, title: "Vous êtes locataire", text: "prévenez votre propriétaire, votre agence ou votre bailleur par écrit, avec des photos. Gardez une copie de votre message." },
  { icon: Users, title: "Vous êtes en copropriété", text: "si cela vient de la cave ou des gaines, parlez-en au syndic : c'est lui qui organise l'accès aux parties communes et leur traitement." },
  { icon: Trees, title: "Les rats sont dans la rue", text: "trottoir, parc, bouche d'égout : signalez-le à la mairie de Chaumont. Je peux traiter votre terrain, pas l'espace public à sa place." },
];

const REVIEWS = [
  { author: "Laurent Rigny", place: "Condes, près de Chaumont", text: "Dératisation sur la commune de Condes. Société dynamique et efficace je recommande 👍👍" },
  { author: "H D N", place: "secteur de Chaumont", text: "Excellent professionnel" },
];

const FAQ_ITEMS = [
  {
    question: "Quel est le prix d'une dératisation à Chaumont ?",
    answer:
      "Une dératisation débute à 100 €. Le prix dépend ensuite de l'importance de l'infestation, de la surface et du nombre de passages : un studio du centre et une maison de Brottes avec dépendances ne demandent pas le même travail. Le devis est gratuit et vous connaissez le montant avant l'intervention.",
  },
  {
    question: "Pouvez-vous traiter le jour du diagnostic ?",
    answer:
      "Souvent, oui. Si le devis vous convient, je peux poser les pièges ou les postes dans la foulée. En immeuble, il faut parfois attendre l'accord du syndic ou du bailleur pour les caves et les gaines.",
  },
  {
    question: "J'ai des enfants, un chien ou un chat : est-ce possible quand même ?",
    answer:
      "Oui, dites-le-moi dès l'appel. Je choisis les emplacements en conséquence et je privilégie les pièges quand c'est possible. Les appâts sont placés dans des postes fermés : ne les ouvrez pas et ne les déplacez pas. En cas de doute sur une ingestion, appelez un centre antipoison ou votre vétérinaire.",
  },
  {
    question: "Un seul rat aperçu dans le jardin, faut-il s'inquiéter ?",
    answer:
      "Pas forcément, il peut seulement passer. Rentrez les gamelles et les graines le soir, fermez le compost et regardez s'il y a des trous au pied des murs ou près des regards. S'il revient ou si vous trouvez des crottes près de la maison, mieux vaut appeler.",
  },
  {
    question: "Mon voisin a des rats : est-ce que je risque d'en avoir ?",
    answer:
      "C'est possible, surtout dans les maisons accolées du centre ou dans un immeuble, où caves et murs communiquent. Le plus efficace est d'en parler ensemble et de traiter les deux côtés. Je peux déjà vérifier vos propres accès.",
  },
  {
    question: "Au bout de combien de temps voit-on un résultat ?",
    answer:
      "Cela dépend du rongeur et de l'ampleur du problème. Les appâts n'agissent pas tout de suite : il faut compter plusieurs jours. Je repasse 10 à 15 jours après pour vérifier, et une infestation bien installée demande souvent 2 à 3 passages.",
  },
  {
    question: "Intervenez-vous dans les communes autour de Chaumont ?",
    answer:
      "Oui : Chamarandes-Choignes, Condes, Treix, Brethenay, Riaucourt, Jonchery, Euffigneix, Semoutiers-Montsaon, Luzy-sur-Marne, Verbiesles et les autres villages du secteur. Je suis joignable 7j/7, de 7h à 23h, au 07 65 25 67 92.",
  },
];

const NEARBY = [
  { label: "Dératisation Semoutiers-Montsaon", to: "/deratisation-semoutiers-montsaon" },
  { label: "Dératisation Bologne", to: "/deratisation-bologne" },
  { label: "Dératisation Froncles", to: "/deratisation-froncles" },
  { label: "Dératisation Nogent", to: "/deratisation-nogent" },
  { label: "Dératisation Langres", to: "/deratisation-langres" },
  { label: "Dératisation Châteauvillain", to: "/deratisation-chateauvillain" },
  { label: "Dératisation Arc-en-Barrois", to: "/deratisation-arc-en-barrois" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    LOCAL_BUSINESS,
    {
      "@type": "Service",
      name: "Dératisation à Chaumont",
      serviceType: "Dératisation",
      url: URL,
      description: DESCRIPTION,
      provider: { "@id": "https://gf-nuisibles.fr/#organization" },
      areaServed: { "@type": "City", name: "Chaumont", address: { "@type": "PostalAddress", postalCode: "52000", addressLocality: "Chaumont", addressRegion: "Haute-Marne", addressCountry: "FR" } },
      offers: {
        "@type": "Offer",
        priceSpecification: { "@type": "PriceSpecification", minPrice: 100, priceCurrency: "EUR" },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", position: 2, name: "Dératisation", item: "https://gf-nuisibles.fr/deratisation" },
        { "@type": "ListItem", position: 3, name: "Chaumont", item: URL },
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

const DeratisationChaumont = () => (
  <>
    <SEO title={TITLE} description={DESCRIPTION} path="/deratisation-chaumont" />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <Navbar />

    <ServiceHero
      breadcrumbs={breadcrumbsFrom(jsonLd)}
      eyebrow="Votre dératiseur à Chaumont"
      title={"Dératisation à Chaumont (52000) : rats et souris"}
      text="Du bruit au-dessus du plafond, des crottes à la cave, un paquet de pâtes percé ? Je cherche par où ils entrent chez vous, je traite, puis je reviens vérifier."
      highlight="Diagnostic, devis et intervention souvent le même jour"
      price={RODENT_PRICE}
      delay={CALL_DELAY}
      signsLabel="Avant d'appeler : ce qu'il est utile de noter"
      image={heroImage}
      imageAlt="Poste d'appâtage contre les rats, posé au pied d'un mur en pierre"
      imageClassName="max-lg:brightness-75"
      icon={Rat}
    />

    <main>
      <RodentSteps city="Chaumont" />

      <Section
        title="Pourquoi avez-vous des rats ou des souris chez vous ?"
        intro="Ce n'est pas forcément une question de propreté. Toute l'année, un rongeur s'installe là où il trouve ce qu'il lui faut."
      >
        <CardGrid items={WHY} />
      </Section>

      <Section
        muted
        title="Où se cachent les rats et les souris à Chaumont ?"
        intro="Une cave du centre, un appartement et un pavillon n'ont ni les mêmes entrées, ni les mêmes voisins. Voici où je regarde en premier."
      >
        <PlaceGrid items={DISTRICTS} />
      </Section>

      <Section title="Comment se débarrasser des rats efficacement ?" intro="Trouver leur passage, poser le bon dispositif au bon endroit, puis revenir vérifier. Quand un piège ne suffit pas, j'utilise des postes d'appâtage : des boîtiers fermés, prévus pour que seuls les rongeurs atteignent l'appât.">
        <div className="grid gap-6 md:grid-cols-3">
          {PHOTOS.map((photo) => (
            <figure key={photo.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <img src={photo.src} alt={photo.alt} loading="lazy" className="h-56 w-full object-cover" />
              <figcaption className="p-5">
                <h3 className="mb-1 font-heading text-lg font-bold text-primary">{photo.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{photo.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">
          <strong className="text-primary">N'ouvrez jamais un poste vous-même</strong>, même pour regarder. Si un boîtier a bougé ou s'il est abîmé, appelez-moi. Les rongeurs, les risques et la méthode sont expliqués en détail sur la page{" "}
          <Link to="/deratisation" className={textLink}>dératisation en Haute-Marne</Link>.
        </p>
      </Section>

      <CallBand
        title="Des rats ou des souris à Chaumont ?"
        text="Racontez-moi ce que vous avez vu : je vous dis ce que j'en pense et quand je peux passer."
        contactLabel="Devis gratuit"
      />

      <Section muted title="Quel est le prix d'une dératisation à Chaumont ?">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Une dératisation débute à <strong className="whitespace-nowrap text-primary">100 €</strong>. Ensuite, tout dépend de ce que je trouve : quelques souris dans une cuisine ou des rats installés depuis des mois entre la cave et le jardin.
            </p>
            <p>La surface, les accès et le nombre de passages comptent aussi. C'est pour cela que je regarde avant de chiffrer.</p>
          </div>
          <Callout icon={FileText} title="Le prix avant l'intervention">
            Votre devis est gratuit et dit ce qu'il comprend. Si une majoration s'applique le soir ou le week-end, vous le savez avant de dire oui.
          </Callout>
        </div>
      </Section>

      <div id="reconnaitre" className="scroll-mt-20">
        <Section title="Avant d'appeler, notez ces quatre choses" intro="Deux minutes suffisent, et je gagne du temps une fois sur place.">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <CheckList items={TELL_ME} />
            <Callout icon={ShieldCheck} title="Les crottes : ni balai, ni aspirateur">
              Balayer à sec envoie des poussières dans l'air. Laissez en place jusqu'à ma visite si vous le pouvez. Sinon : gants, aération et nettoyage humide, jamais à sec.
            </Callout>
          </div>
        </Section>
      </div>

      <Section muted title="Appartement, copropriété, rue : qui prévenir ?" intro="Les rongeurs ne s'arrêtent pas à la porte du palier. Voici vers qui vous tourner, selon l'endroit où ils circulent.">
        <CardGrid items={WHO_TO_CALL} columns="lg:grid-cols-3" />
        <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">
          <strong className="text-primary">Restaurant, commerce ou bureau à Chaumont ?</strong> Je passe si possible en dehors de vos heures d'ouverture, avec un véhicule non logoté sur demande, et on définit ensemble un suivi adapté. Voyez le{" "}
          <Link to="/deratisation-professionnels" className={textLink}>contrat de dératisation pour les professionnels</Link> et l'offre pour les{" "}
          <Link to="/deratisation-restaurants" className={textLink}>restaurants et boulangeries</Link>, les{" "}
          <Link to="/deratisation-collectivites" className={textLink}>communes</Link>, les{" "}
          <Link to="/deratisation-coproprietes" className={textLink}>copropriétés</Link>, les{" "}
          <Link to="/deratisation-entreprises" className={textLink}>entreprises</Link> et les{" "}
          <Link to="/deratisation-agricole" className={textLink}>exploitations agricoles et viticoles</Link>, ou{" "}
          <Link to="/contact" className={textLink}>demandez un devis professionnel</Link>.
        </p>
      </Section>

      <Section title="Ils m'ont appelé à Chaumont et autour">
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure key={review.author} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <Quote className="mb-3 h-6 w-6 text-accent" aria-hidden="true" />
              <blockquote className="leading-relaxed text-foreground/80">« {review.text} »</blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                <strong className="text-primary">{review.author}</strong>, {review.place} (avis Google)
              </figcaption>
            </figure>
          ))}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-4 font-heading text-lg font-bold text-primary">Ils font aussi appel à GF Nuisibles</h3>
            <CheckList
              items={[
                { text: "Des particuliers de Chaumont et des villages voisins" },
                { text: "L'agence immobilière Square Habitat" },
                { text: "Des communes, dont Leffonds" },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section muted title="Vos questions sur les rats et souris à Chaumont">
        <FaqList items={FAQ_ITEMS} />
      </Section>

      <Section title="Un dératiseur autour de Chaumont" intro="Basé aux portes de Chaumont, j'interviens partout en Haute-Marne. Votre commune n'est pas dans la liste ? Appelez, je me déplace dans tous les villages.">
        <CityPills links={NEARBY} />
        <p className="mt-8 leading-relaxed text-muted-foreground">
          <strong className="text-primary">Un autre nuisible à Chaumont ?</strong> Voyez les{" "}
          <Link to="/cafards-blattes-chaumont" className={textLink}>cafards et blattes à Chaumont</Link>, les{" "}
          <Link to="/guepes-frelons-chaumont" className={textLink}>nids de guêpes et frelons à Chaumont</Link>, les{" "}
          <Link to="/taupes-chaumont" className={textLink}>taupes à Chaumont</Link>, les{" "}
          <Link to="/depigeonnisation-chaumont" className={textLink}>pigeons à Chaumont</Link> ou les{" "}
          <Link to="/punaises-de-lit" className={textLink}>punaises de lit</Link>.
        </p>
      </Section>
    </main>

    <Reassurance />
    <Footer />
  </>
);

export default DeratisationChaumont;
