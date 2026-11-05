import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SERVICES = [
  { label: "Guêpes & Frelons", to: "/guepes-frelons" },
  { label: "Dératisation", to: "/deratisation" },
  { label: "Cafards & Blattes", to: "/cafards-blattes" },
  { label: "Taupes", to: "/taupes" },
  { label: "Dépigeonnage", to: "/depigeonnage" },
  { label: "Régulation ESOD", to: "/regulation-esod" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page introuvable | GF Nuisibles</title>
        <meta name="description" content="Cette page n'existe pas ou a été déplacée. Retrouvez les services de GF Nuisibles en Haute-Marne." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar />
      <main className="section-padding pt-32 md:pt-40">
        <div className="container-narrow text-center">
          <p className="mb-2 font-heading text-lg font-bold text-accent">Erreur 404</p>
          <h1 className="mb-4 font-heading text-3xl font-extrabold text-primary md:text-4xl">
            Cette page est introuvable
          </h1>
          <p className="mx-auto mb-8 max-w-xl leading-relaxed text-muted-foreground">
            L'adresse demandée n'existe pas ou a été déplacée. Choisissez un service ci-dessous ou appelez-nous directement.
          </p>
          <a
            href="tel:0765256792"
            className="mb-10 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-heading font-bold text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Phone className="h-5 w-5" />
            Appeler le 07 65 25 67 92
          </a>
          <nav aria-label="Nos services" className="mx-auto mb-8 grid max-w-2xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Link
                key={service.to}
                to={service.to}
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
              >
                {service.label}
              </Link>
            ))}
          </nav>
          <Link to="/" className="font-semibold text-primary underline underline-offset-4 hover:text-accent">
            Retour à l'accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
