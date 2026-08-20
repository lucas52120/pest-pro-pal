import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type CityLink = { label: string; to: string };
type CityEntry = { name: string; links: CityLink[] };

const MAIN_PAGES: CityLink[] = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/a-propos" },
  { label: "Contact", to: "/contact" },
  { label: "Mentions Légales", to: "/mentions-legales" },
];

const GLOBAL_SERVICES: CityLink[] = [
  { label: "Dératisation", to: "/deratisation" },
  { label: "Guêpes & Frelons", to: "/guepes-frelons" },
  { label: "Désinsectisation", to: "/desinsectisation" },
  { label: "Dépigeonnage (B2B)", to: "/depigeonnage" },
  { label: "Élimination Pigeons (B2C)", to: "/elimination-pigeons" },
  { label: "Taupes", to: "/taupes" },
  { label: "Régulation ESOD", to: "/regulation-esod" },
];

const CITIES: CityEntry[] = [
  { name: "Chaumont", links: [
    { label: "Dératisation", to: "/deratisation-chaumont" },
    { label: "Guêpes & Frelons", to: "/guepes-frelons-chaumont" },
    { label: "Désinsectisation", to: "/desinsectisation-chaumont" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-chaumont" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-chaumont" },
    { label: "Taupes", to: "/taupes-chaumont" },
  ]},
  { name: "Langres", links: [
    { label: "Dératisation", to: "/deratisation-langres" },
    { label: "Guêpes & Frelons", to: "/guepes-frelons-langres" },
    { label: "Désinsectisation", to: "/desinsectisation-langres" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-langres" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-langres" },
    { label: "Taupes", to: "/taupes-langres" },
  ]},
  { name: "Nogent", links: [
    { label: "Dératisation", to: "/deratisation-nogent" },
    { label: "Guêpes & Frelons", to: "/guepes-frelons-nogent" },
    { label: "Désinsectisation", to: "/desinsectisation-nogent" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-nogent" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-nogent" },
    { label: "Taupes", to: "/taupes-nogent" },
  ]},
  { name: "Saint-Dizier", links: [
    { label: "Dératisation", to: "/deratisation-saint-dizier" },
    { label: "Guêpes & Frelons", to: "/guepes-frelons-saint-dizier" },
    { label: "Désinsectisation", to: "/desinsectisation-saint-dizier" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-saint-dizier" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-saint-dizier" },
    { label: "Taupes", to: "/taupes-saint-dizier" },
  ]},
  { name: "Joinville", links: [
    { label: "Dératisation", to: "/deratisation-joinville" },
    { label: "Guêpes & Frelons", to: "/guepes-frelons-joinville" },
    { label: "Désinsectisation", to: "/desinsectisation-joinville" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-joinville" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-joinville" },
    { label: "Taupes", to: "/taupes-joinville" },
  ]},
  { name: "Wassy", links: [
    { label: "Dératisation", to: "/deratisation-wassy" },
    { label: "Guêpes & Frelons", to: "/guepes-frelons-wassy" },
    { label: "Désinsectisation", to: "/desinsectisation-wassy" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-wassy" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-wassy" },
    { label: "Taupes", to: "/taupes-wassy" },
  ]},
  { name: "Bourbonne-les-Bains", links: [
    { label: "Dératisation", to: "/deratisation-bourbonne-les-bains" },
    { label: "Guêpes & Frelons", to: "/guepes-frelons-bourbonne-les-bains" },
    { label: "Désinsectisation", to: "/desinsectisation-bourbonne-les-bains" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-bourbonne-les-bains" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-bourbonne-les-bains" },
    { label: "Taupes", to: "/taupes-bourbonne-les-bains" },
  ]},
  { name: "Bologne", links: [
    { label: "Dératisation", to: "/deratisation-bologne" },
    { label: "Guêpes & Frelons", to: "/guepes-frelons-bologne" },
    { label: "Désinsectisation", to: "/desinsectisation-bologne" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-bologne" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-bologne" },
    { label: "Taupes", to: "/taupes-bologne" },
  ]},
  { name: "Montier-en-Der", links: [
    { label: "Dératisation", to: "/deratisation-montier-en-der" },
    { label: "Guêpes & Frelons", to: "/guepes-frelons-montier-en-der" },
    { label: "Désinsectisation", to: "/desinsectisation-montier-en-der" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-montier-en-der" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-montier-en-der" },
    { label: "Taupes", to: "/taupes-montier-en-der" },
  ]},
  { name: "Chalindrey", links: [
    { label: "Dératisation", to: "/deratisation-chalindrey" },
    { label: "Guêpes & Frelons", to: "/guepes-frelons-chalindrey" },
    { label: "Désinsectisation", to: "/desinsectisation-chalindrey" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-chalindrey" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-chalindrey" },
    { label: "Taupes", to: "/taupes-chalindrey" },
  ]},
  { name: "Froncles", links: [
    { label: "Dératisation", to: "/deratisation-froncles" },
    { label: "Guêpes & Frelons", to: "/guepes-frelons-froncles" },
    { label: "Désinsectisation", to: "/desinsectisation-froncles" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-froncles" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-froncles" },
    { label: "Taupes", to: "/taupes-froncles" },
  ]},
  { name: "Châteauvillain", links: [
    { label: "Dératisation", to: "/deratisation-chateauvillain" },
    { label: "Guêpes & Frelons", to: "/guepes-frelons-chateauvillain" },
    { label: "Désinsectisation", to: "/desinsectisation-chateauvillain" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-chateauvillain" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-chateauvillain" },
    { label: "Taupes", to: "/taupes-chateauvillain" },
  ]},
  { name: "Arc-en-Barrois", links: [
    { label: "Dératisation", to: "/deratisation-arc-en-barrois" },
    { label: "Guêpes & Frelons", to: "/guepes-frelons-arc-en-barrois" },
    { label: "Désinsectisation", to: "/desinsectisation-arc-en-barrois" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-arc-en-barrois" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-arc-en-barrois" },
    { label: "Taupes", to: "/taupes-arc-en-barrois" },
  ]},
  { name: "Semoutiers-Montsaon", links: [
    { label: "Dératisation", to: "/deratisation-semoutiers-montsaon" },
    { label: "Guêpes & Frelons", to: "/guepes-frelons-semoutiers-montsaon" },
    { label: "Désinsectisation", to: "/desinsectisation-semoutiers-montsaon" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-semoutiers-montsaon" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-semoutiers-montsaon" },
    { label: "Taupes", to: "/taupes-semoutiers-montsaon" },
  ]},
  { name: "Troyes", links: [
    { label: "Dératisation", to: "/deratisation-troyes" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-troyes" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-troyes" },
  ]},
  { name: "Bar-sur-Aube", links: [
    { label: "Dératisation", to: "/deratisation-bar-sur-aube" },
    { label: "Guêpes & Frelons", to: "/guepes-frelons-bar-sur-aube" },
    { label: "Désinsectisation", to: "/desinsectisation-bar-sur-aube" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-bar-sur-aube" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-bar-sur-aube" },
    { label: "Taupes", to: "/taupes-bar-sur-aube" },
  ]},
  { name: "Vitry-le-François", links: [
    { label: "Désinsectisation", to: "/desinsectisation-vitry-le-francois" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-vitry-le-francois" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-vitry-le-francois" },
  ]},
  { name: "Châlons-en-Champagne", links: [
    { label: "Dératisation", to: "/deratisation-chalons-en-champagne" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-chalons-en-champagne" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-chalons-en-champagne" },
  ]},
  { name: "Vittel", links: [
    { label: "Dératisation", to: "/deratisation-vittel" },
    { label: "Désinsectisation", to: "/desinsectisation-vittel" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-vittel" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-vittel" },
  ]},
  { name: "Neufchâteau", links: [
    { label: "Dératisation", to: "/deratisation-neufchateau" },
    { label: "Désinsectisation", to: "/desinsectisation-neufchateau" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-neufchateau" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-neufchateau" },
  ]},
  { name: "Dijon", links: [
    { label: "Dératisation", to: "/deratisation-dijon" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-dijon" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-dijon" },
  ]},
  { name: "Beaune", links: [
    { label: "Dératisation", to: "/deratisation-beaune" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-beaune" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-beaune" },
  ]},
  { name: "Châtillon-sur-Seine", links: [
    { label: "Dératisation", to: "/deratisation-chatillon-sur-seine" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-chatillon-sur-seine" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-chatillon-sur-seine" },
  ]},
  { name: "Nancy", links: [
    { label: "Dératisation", to: "/deratisation-nancy" },
    { label: "Dépigeonnisation", to: "/depigeonnisation-nancy" },
    { label: "Élimination Pigeons", to: "/elimination-pigeons-nancy" },
  ]},
];

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-12">
    <h2 className="mb-6 font-heading text-2xl font-bold text-primary border-b-2 border-accent pb-2">
      {title}
    </h2>
    {children}
  </section>
);

const LinkItem = ({ to, label }: CityLink) => (
  <li>
    <Link
      to={to}
      className="text-foreground/80 hover:text-accent transition-colors"
    >
      {label}
    </Link>
  </li>
);

const PlanduSite = () => {
  return (
    <>
      <Helmet>
        <title>Plan du site | G&F Nuisibles</title>
        <meta
          name="description"
          content="Plan du site G&F Nuisibles : retrouvez toutes les pages, services et zones d'intervention en Haute-Marne et alentours."
        />
        <link rel="canonical" href="https://gf-nuisibles.fr/plan-du-site" />
      </Helmet>

      <Navbar />

      <main className="bg-background">
        <div className="container-narrow px-4 py-12 md:py-16">
          <header className="mb-10">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-3">
              Plan du site
            </h1>
            <p className="text-muted-foreground">
              Retrouvez l'ensemble des pages et services proposés par G&F Nuisibles.
            </p>
          </header>

          <Section title="Pages principales">
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {MAIN_PAGES.map((l) => <LinkItem key={l.to} {...l} />)}
            </ul>
          </Section>

          <Section title="Nos services">
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {GLOBAL_SERVICES.map((l) => <LinkItem key={l.to} {...l} />)}
            </ul>
          </Section>

          <Section title="Nos interventions par ville">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {CITIES.map((city) => (
                <div key={city.name} className="rounded-lg border border-border bg-card p-5">
                  <h3 className="mb-3 font-heading text-lg font-semibold text-primary">
                    {city.name}
                  </h3>
                  <ul className="space-y-1.5 text-sm">
                    {city.links.map((l) => <LinkItem key={l.to} {...l} />)}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PlanduSite;
