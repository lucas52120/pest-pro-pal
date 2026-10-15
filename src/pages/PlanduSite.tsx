import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { CITIES, type CityLink } from "@/data/cities";

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
  { label: "Taupes", to: "/taupes" },
  { label: "Régulation ESOD", to: "/regulation-esod" },
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
