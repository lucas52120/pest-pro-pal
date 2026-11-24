import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Award,
  Bird,
  Building2,
  ClipboardCheck,
  FileText,
  House,
  Info,
  Landmark,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Store,
  Target,
  Tractor,
  Wrench,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustedBy from "@/components/TrustedBy";
import Reassurance from "@/components/Reassurance";
import GoogleReviews from "@/components/GoogleReviews";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Callout, FaqList, PlaceGrid, Section, ServiceStep, StepRow, textLink } from "@/components/ServiceBlocks";
import { LOCAL_BUSINESS } from "@/data/business";
import { CITIES } from "@/data/cities";
import { seasonContent, useSeason } from "@/data/seasons";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";

const TITLE = "Anti-nuisibles Chaumont et Haute-Marne (52) | GF Nuisibles";
const DESCRIPTION =
  "Rats, guêpes, cafards, punaises de lit, taupes ou pigeons ? Un artisan local intervient partout en Haute-Marne, 7j/7. Devis gratuit : 07 65 25 67 92.";
const SITE_URL = "https://gf-nuisibles.fr";

const STEPS: ServiceStep[] = [
  { step: 1, icon: Phone, title: "Prise de contact", text: "Vous appelez et vous racontez ce que vous avez vu ou entendu. On fixe une date." },
  { step: 2, icon: Search, title: "Diagnostic", text: "Sur place, je cherche quel nuisible c'est, d'où il vient et jusqu'où il s'est installé." },
  { step: 3, icon: FileText, title: "Devis", text: "Vous connaissez le prix avant de vous engager." },
  { step: 4, icon: Wrench, title: "Intervention", text: "La méthode dépend du nuisible : piégeage, traitement ou protection." },
  { step: 5, icon: ClipboardCheck, title: "Contrôle", text: "Quand c'est nécessaire, je repasse vérifier le résultat." },
];

const WHY = [
  { icon: MapPin, title: "Un artisan local", text: "basé aux portes de Chaumont. Pas une plateforme d'appels, pas une franchise nationale." },
  { icon: ShieldCheck, title: "Certibiocide", text: "le certificat indispensable pour utiliser des produits professionnels." },
  { icon: Target, title: "Piégeur agréé", text: "pour les taupes et les animaux qui causent des dégâts, sans produit quand c'est possible." },
  { icon: Bird, title: "Fauconnier de métier", text: "une vraie connaissance des oiseaux, utile pour éloigner les pigeons sans les tuer." },
];

const CLIENTS = [
  { icon: House, title: "Particuliers", text: "maisons, appartements, jardins et dépendances." },
  { icon: Building2, title: "Bailleurs et syndics", text: "logements loués, parties communes, immeubles." },
  { icon: Store, title: "Commerces et restaurants", text: "interventions discrètes, documents pour votre suivi sanitaire." },
  { icon: Landmark, title: "Communes", text: "écoles, mairies, espaces verts, bâtiments publics." },
  { icon: Tractor, title: "Exploitations agricoles", text: "granges, hangars, silos et prairies." },
  { icon: Award, title: "Entreprises", text: "sites industriels, bureaux et entrepôts." },
];

const MAIN_CITIES = ["Chaumont", "Langres", "Saint-Dizier", "Joinville", "Nogent", "Bourbonne-les-Bains"];

const FAQ_ITEMS = [
  {
    question: "Qui contacter en cas de nuisibles en Haute-Marne ?",
    answer:
      "Une entreprise titulaire du Certibiocide, qui se déplace près de chez vous et annonce son prix avant d'intervenir. GF Nuisibles est joignable 7j/7 de 7h à 23h au 07 65 25 67 92. Pour un nid ou des rats dans la rue ou un lieu public, prévenez aussi la mairie.",
  },
  {
    question: "Combien coûte une intervention contre les nuisibles ?",
    answer:
      "Cela dépend du nuisible, de l'infestation, de la surface et de l'accès. Par exemple, un nid de guêpes est traité à partir de 80 €, un nid de frelons asiatiques à partir de 110 €, et une dératisation débute à 90 €. Le devis est gratuit. Pour les punaises de lit, l'inspection est payante et déduite du traitement si vous acceptez le devis.",
  },
  {
    question: "Faites-vous la désinsectisation ?",
    answer:
      "Oui : cafards et blattes, punaises de lit, guêpes et frelons. La méthode dépend de l'insecte et du lieu : gel, traitement en plusieurs passages ou destruction de nid.",
  },
  {
    question: "Quand pouvez-vous venir ?",
    answer:
      "Vous pouvez appeler 7j/7, de 7h à 23h, week-ends compris. On fixe la date ensemble selon votre commune et l'urgence, par exemple un nid près d'un passage ou une personne allergique.",
  },
  {
    question: "Les produits sont-ils dangereux pour les enfants et les animaux ?",
    answer:
      "Les pièges et les solutions sans produit sont privilégiés quand c'est possible. Quand un produit est nécessaire, il est placé ou appliqué de façon à limiter les risques, et vous recevez les consignes à suivre. Signalez les enfants, les femmes enceintes, les animaux et les aquariums dès votre appel.",
  },
  {
    question: "Intervenez-vous dans toute la Haute-Marne ?",
    answer:
      "Oui, à Chaumont, Langres, Saint-Dizier, Joinville, Nogent, Bourbonne-les-Bains et dans tous les villages du département, ainsi que dans les départements voisins : Vosges, Meuse, Côte-d'Or, Marne et Aube.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    LOCAL_BUSINESS,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: LOCAL_BUSINESS.name,
      inLanguage: "fr-FR",
      publisher: { "@id": LOCAL_BUSINESS["@id"] },
    },
    {
      "@type": "OfferCatalog",
      name: "Services anti-nuisibles en Haute-Marne",
      itemListElement: seasonContent("hiver").services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.link,
          url: `${SITE_URL}${service.path}`,
          provider: { "@id": LOCAL_BUSINESS["@id"] },
        },
      })),
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

const Index = () => {
  useScrollToHash();
  const season = useSeason();

  return (
    <div data-season={season}>
      <SEO title={TITLE} description={DESCRIPTION} path="/" />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />
      <Hero season={season} />
      <main>
        <Services season={season} />

        <Section title="Comment ça se passe ?" intro="De votre appel au contrôle, vous savez à chaque fois ce qui va se passer.">
          <div className="rounded-2xl bg-secondary p-2">
            <StepRow steps={STEPS} />
          </div>
          <div className="mt-8">
            <Callout icon={Info} title="Vous n'y êtes pour rien">
              Rats, cafards ou punaises : une maison propre peut être touchée. On regarde votre situation sans jugement, avec un véhicule non logoté sur demande.
            </Callout>
          </div>
        </Section>

        <Section
          muted
          title="Pourquoi choisir GF Nuisibles ?"
          intro="Vous appelez quelqu'un d'ici, qui connaît le terrain et le comportement des animaux."
        >
          <PlaceGrid items={WHY} columns="lg:grid-cols-4" />
          <p className="mt-8 leading-relaxed text-muted-foreground">
            <Link to="/a-propos" className={textLink}>En savoir plus sur GF Nuisibles</Link>
          </p>
        </Section>

        <GoogleReviews />

        <Section
          muted
          title="Particuliers et professionnels"
          intro="Une souris dans la cuisine ou un bâtiment entier à protéger : la méthode s'adapte au lieu."
        >
          <PlaceGrid items={CLIENTS} />
          <p className="mt-8 leading-relaxed text-muted-foreground">
            <strong className="text-primary">Vous êtes professionnel ?</strong>{" "}
            <Link to="/contact" className={textLink}>Demandez un devis adapté</Link>.
          </p>
        </Section>

        <TrustedBy />

        <Section
          muted
          title="Anti-nuisibles à Chaumont, Langres, Saint-Dizier et partout en Haute-Marne"
          intro="Choisissez votre ville pour voir le service qui vous concerne."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CITIES.filter((city) => MAIN_CITIES.includes(city.name))
              .sort((a, b) => MAIN_CITIES.indexOf(a.name) - MAIN_CITIES.indexOf(b.name))
              .map((city) => (
                <div key={city.name} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <h3 className="mb-3 flex items-center gap-2 font-heading text-lg font-bold text-primary">
                    <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
                    {city.name}
                  </h3>
                  <ul className="space-y-1.5 text-sm">
                    {city.links.map((link) => (
                      <li key={link.to}>
                        <Link to={link.to} className="text-muted-foreground underline-offset-4 hover:text-accent hover:underline">
                          {link.label} {city.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
          <p className="mt-8 leading-relaxed text-muted-foreground">
            Votre commune n'est pas dans la liste ? Votre{" "}
            <Link to="/deratisation" className={textLink}>dératiseur en Haute-Marne</Link> se déplace aussi dans les villages :{" "}
            <Link to="/zone-intervention" className={textLink}>voir toute la zone d'intervention</Link>.
          </p>
        </Section>

        <Section title="Questions fréquentes">
          <FaqList items={FAQ_ITEMS} />
        </Section>
      </main>
      <Reassurance />
      <Footer />
    </div>
  );
};

export default Index;
