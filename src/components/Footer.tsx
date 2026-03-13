import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { cities, serviceDefinitions } from "@/data/cityServices";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* SEO Cities */}
      <div className="border-b border-primary-foreground/10 px-4 py-10">
        <div className="container-narrow">
          <h3 className="mb-6 font-heading text-lg font-bold text-accent">
            Nos zones d'intervention
          </h3>
          <div className="grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => {
              const cityServices = serviceDefinitions.filter((s) =>
                city.services.includes(s.slug)
              );
              return (
                <div key={city.slug}>
                  <span className="font-heading font-semibold">{city.name} : </span>
                  {cityServices.map((s, i) => (
                    <span key={s.slug}>
                      <Link
                        to={`/${city.slug}/${s.slug}`}
                        className="text-primary-foreground/60 transition-colors hover:text-accent"
                      >
                        {s.title}
                      </Link>
                      {i < cityServices.length - 1 && " | "}
                    </span>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="px-4 py-10">
        <div className="container-narrow grid gap-8 sm:grid-cols-3">
          <div>
            <h4 className="mb-4 font-heading text-lg font-bold">FG NUISIBLES</h4>
            <p className="text-sm text-primary-foreground/60">
              Expert en gestion des nuisibles en Haute-Marne. Intervention rapide, discrète et garantie.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-heading font-bold">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="/guepes-frelons" className="hover:text-accent">Guêpes & Frelons</Link></li>
              <li><Link to="/desinsectisation" className="hover:text-accent">Désinsectisation</Link></li>
              <li><Link to="/taupes" className="hover:text-accent">Taupes</Link></li>
              <li><Link to="/depigeonnisation" className="hover:text-accent">Dépigeonnisation</Link></li>
              <li><Link to="/elimination-pigeons" className="hover:text-accent">Élimination Pigeons</Link></li>
              <li><Link to="/deratisation" className="hover:text-accent">Dératisation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-heading font-bold">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:0788174586" className="hover:text-accent">07.88.17.45.86</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:contact@fgnuisibles.fr" className="hover:text-accent">contact@gfnuisibles.fr</a>
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

      <div className="border-t border-primary-foreground/10 px-4 py-4 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} FG Nuisibles — Tous droits réservés
      </div>
    </footer>
  );
};

export default Footer;
