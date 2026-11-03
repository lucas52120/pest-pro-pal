import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  { label: "Dératisation", path: "/deratisation" },
  { label: "Guêpes & Frelons", path: "/guepes-frelons" },
  { label: "Cafards & Blattes", path: "/cafards-blattes" },
  { label: "Taupes", path: "/taupes" },
  { label: "Dépigeonnage", path: "/depigeonnage" },
];

const NotFound = () => (
  <div className="min-h-screen flex flex-col">
    <Helmet>
      <title>Page introuvable | G&F Nuisibles</title>
      <meta
        name="description"
        content="Cette page n'existe pas ou a été déplacée. Retrouvez les services de G&F Nuisibles en Haute-Marne."
      />
      <meta name="robots" content="noindex, follow" />
    </Helmet>
    <Navbar />
    <main className="flex-1 container mx-auto px-4 pt-36 pb-20 text-center">
      <p className="text-5xl font-bold text-primary mb-4">404</p>
      <h1 className="text-3xl font-bold mb-4">Page introuvable</h1>
      <p className="text-muted-foreground max-w-xl mx-auto mb-8">
        Cette page n'existe pas ou a été déplacée. Vous cherchez peut-être l'un de nos services :
      </p>
      <ul className="flex flex-wrap justify-center gap-3 mb-8">
        {services.map((s) => (
          <li key={s.path}>
            <Link to={s.path} className="inline-block rounded-md border px-4 py-2 hover:bg-muted">
              {s.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/" className="text-primary underline">Retour à l'accueil</Link>
        <Link to="/contact" className="text-primary underline">Nous contacter</Link>
        <a href="tel:0765256792" className="inline-flex items-center gap-2 text-primary underline">
          <Phone className="h-4 w-4" /> 07.65.25.67.92
        </a>
      </div>
    </main>
    <Footer />
  </div>
);

export default NotFound;
