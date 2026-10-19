import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

import { CITIES } from "@/data/cities";

/* Single source of truth: src/data/cities.ts mirrors the manual routes
   declared in App.tsx so no dead links exist. */

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer */}
      <div className="px-4 py-10">
        <div className="container-narrow grid gap-8 sm:grid-cols-3">
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold">GF NUISIBLES</h4>
            <p className="text-sm text-primary-foreground/60">
              Expert en gestion des nuisibles en Haute-Marne et communes limitrophes. Intervention rapide, discrète et garantie.
            </p>
            <a
              href="https://www.facebook.com/gfnuisibles"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-3 rounded-lg bg-[#1877F2] px-5 py-3 text-white transition-transform hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-base font-semibold">Suivez-nous</span>
            </a>
          </div>
          <div>
            <h4 className="mb-4 font-heading font-bold">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="/guepes-frelons" className="hover:text-accent">Guêpes & Frelons</Link></li>
              <li><Link to="/cafards-blattes" className="hover:text-accent">Cafards &amp; Blattes</Link></li>
              <li><Link to="/taupes" className="hover:text-accent">Taupes</Link></li>
              <li><Link to="/depigeonnage" className="hover:text-accent">Dépigeonnage</Link></li>
              <li><Link to="/deratisation" className="hover:text-accent">Dératisation</Link></li>
              <li><Link to="/regulation-esod" className="hover:text-accent">Régulation ESOD</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-heading font-bold">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:0765256792" className="hover:text-accent">07.65.25.67.92</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:contact@gf-nuisibles.fr" className="hover:text-accent">contact@gf-nuisibles.fr</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                Haute-Marne (52)
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                Lun–Ven : 8h–19h | Urgence week-end
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SEO Cities — below main footer */}
      <div className="border-t border-primary-foreground/10 px-4 py-10">
        <div className="container-narrow">
          <h3 className="mb-6 font-heading text-lg font-bold text-accent">
            Nos zones d'intervention
          </h3>
          <div className="grid gap-4 text-[0.8125rem] leading-relaxed sm:grid-cols-2 lg:grid-cols-3">
            {CITIES.map((city) => (
              <div key={city.name}>
                <span className="font-heading font-semibold">{city.name} : </span>
                {city.links.map((link, i) => (
                  <span key={link.to}>
                    <Link
                      to={link.to}
                      className="text-primary-foreground/60 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                    {i < city.links.length - 1 && " | "}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 px-4 py-4 text-center text-xs text-primary-foreground/40">
        <div className="mb-2">
          <Link to="/mentions-legales" className="hover:text-accent transition-colors">Mentions Légales</Link>
          <span className="mx-2 text-primary-foreground/30">|</span>
          <Link to="/zone-intervention" className="hover:text-accent transition-colors">Zone d'intervention</Link>
          <span>•</span>
          <Link to="/plan-du-site" className="hover:text-accent transition-colors">Plan du site</Link>
        </div>
        © {new Date().getFullYear()} GF Nuisibles — Tous droits réservés
      </div>
    </footer>
  );
};

export default Footer;
