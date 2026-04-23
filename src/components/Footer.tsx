import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

/* Static city → services map. Each entry mirrors EXACTLY the manual
   routes declared in App.tsx so no dead links exist. */
type CityLink = { label: string; to: string };
type CityEntry = { name: string; links: CityLink[] };

const CITY_FOOTER: CityEntry[] = [
  {
    name: "Chaumont",
    links: [
      { label: "Dératisation", to: "/deratisation-chaumont" },
      { label: "Guêpes & Frelons", to: "/guepes-frelons-chaumont" },
      { label: "Désinsectisation", to: "/desinsectisation-chaumont" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/chaumont" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/chaumont" },
      { label: "Taupes", to: "/taupes-chaumont" },
    ],
  },
  {
    name: "Langres",
    links: [
      { label: "Dératisation", to: "/deratisation-langres" },
      { label: "Guêpes & Frelons", to: "/guepes-frelons-langres" },
      { label: "Désinsectisation", to: "/desinsectisation-langres" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/langres" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/langres" },
      { label: "Taupes", to: "/taupes-langres" },
    ],
  },
  {
    name: "Nogent",
    links: [
      { label: "Dératisation", to: "/deratisation-nogent" },
      { label: "Guêpes & Frelons", to: "/guepes-frelons-nogent" },
      { label: "Désinsectisation", to: "/desinsectisation-nogent" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/nogent" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/nogent" },
      { label: "Taupes", to: "/taupes-nogent" },
    ],
  },
  {
    name: "Saint-Dizier",
    links: [
      { label: "Dératisation", to: "/deratisation-saint-dizier" },
      { label: "Guêpes & Frelons", to: "/guepes-frelons-saint-dizier" },
      { label: "Désinsectisation", to: "/desinsectisation-saint-dizier" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/saint-dizier" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/saint-dizier" },
      { label: "Taupes", to: "/taupes-saint-dizier" },
    ],
  },
  {
    name: "Joinville",
    links: [
      { label: "Dératisation", to: "/deratisation-joinville" },
      { label: "Guêpes & Frelons", to: "/guepes-frelons-joinville" },
      { label: "Désinsectisation", to: "/desinsectisation-joinville" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/joinville" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/joinville" },
      { label: "Taupes", to: "/taupes-joinville" },
    ],
  },
  {
    name: "Wassy",
    links: [
      { label: "Dératisation", to: "/deratisation-wassy" },
      { label: "Guêpes & Frelons", to: "/guepes-frelons-wassy" },
      { label: "Désinsectisation", to: "/desinsectisation-wassy" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/wassy" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/wassy" },
      { label: "Taupes", to: "/taupes-wassy" },
    ],
  },
  {
    name: "Bourbonne-les-Bains",
    links: [
      { label: "Dératisation", to: "/deratisation-bourbonne-les-bains" },
      { label: "Guêpes & Frelons", to: "/guepes-frelons-bourbonne-les-bains" },
      { label: "Désinsectisation", to: "/desinsectisation-bourbonne-les-bains" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/bourbonne-les-bains" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/bourbonne-les-bains" },
      { label: "Taupes", to: "/taupes-bourbonne-les-bains" },
    ],
  },
  {
    name: "Bologne",
    links: [
      { label: "Dératisation", to: "/deratisation-bologne" },
      { label: "Guêpes & Frelons", to: "/guepes-frelons-bologne" },
      { label: "Désinsectisation", to: "/desinsectisation-bologne" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/bologne" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/bologne" },
      { label: "Taupes", to: "/taupes-bologne" },
    ],
  },
  {
    name: "Montier-en-Der",
    links: [
      { label: "Dératisation", to: "/deratisation-montier-en-der" },
      { label: "Guêpes & Frelons", to: "/guepes-frelons-montier-en-der" },
      { label: "Désinsectisation", to: "/desinsectisation-montier-en-der" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/montier-en-der" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/montier-en-der" },
      { label: "Taupes", to: "/taupes-montier-en-der" },
    ],
  },
  {
    name: "Chalindrey",
    links: [
      { label: "Dératisation", to: "/deratisation-chalindrey" },
      { label: "Guêpes & Frelons", to: "/guepes-frelons-chalindrey" },
      { label: "Désinsectisation", to: "/desinsectisation-chalindrey" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/chalindrey" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/chalindrey" },
      { label: "Taupes", to: "/taupes-chalindrey" },
    ],
  },
  {
    name: "Froncles",
    links: [
      { label: "Dératisation", to: "/deratisation-froncles" },
      { label: "Guêpes & Frelons", to: "/guepes-frelons-froncles" },
      { label: "Désinsectisation", to: "/desinsectisation-froncles" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/froncles" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/froncles" },
      { label: "Taupes", to: "/taupes-froncles" },
    ],
  },
  {
    name: "Châteauvillain",
    links: [
      { label: "Dératisation", to: "/deratisation-chateauvillain" },
      { label: "Guêpes & Frelons", to: "/guepes-frelons-chateauvillain" },
      { label: "Désinsectisation", to: "/desinsectisation-chateauvillain" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/chateauvillain" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/chateauvillain" },
      { label: "Taupes", to: "/taupes-chateauvillain" },
    ],
  },
  {
    name: "Arc-en-Barrois",
    links: [
      { label: "Dératisation", to: "/deratisation-arc-en-barrois" },
      { label: "Guêpes & Frelons", to: "/guepes-frelons-arc-en-barrois" },
      { label: "Désinsectisation", to: "/desinsectisation-arc-en-barrois" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/arc-en-barrois" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/arc-en-barrois" },
      { label: "Taupes", to: "/taupes-arc-en-barrois" },
    ],
  },
  {
    name: "Semoutiers-Montsaon",
    links: [
      { label: "Dératisation", to: "/deratisation-semoutiers-montsaon" },
      { label: "Guêpes & Frelons", to: "/guepes-frelons-semoutiers-montsaon" },
      { label: "Désinsectisation", to: "/desinsectisation-semoutiers-montsaon" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/semoutiers-montsaon" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/semoutiers-montsaon" },
      { label: "Taupes", to: "/taupes-semoutiers-montsaon" },
    ],
  },
  {
    name: "Troyes",
    links: [
      { label: "Dératisation", to: "/deratisation-troyes" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/troyes" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/troyes" },
    ],
  },
  {
    name: "Bar-sur-Aube",
    links: [
      { label: "Dératisation", to: "/deratisation-bar-sur-aube" },
      { label: "Guêpes & Frelons", to: "/guepes-frelons-bar-sur-aube" },
      { label: "Désinsectisation", to: "/desinsectisation-bar-sur-aube" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/bar-sur-aube" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/bar-sur-aube" },
      { label: "Taupes", to: "/taupes-bar-sur-aube" },
    ],
  },
  {
    name: "Vitry-le-François",
    links: [
      { label: "Désinsectisation", to: "/desinsectisation-vitry-le-francois" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/vitry-le-francois" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/vitry-le-francois" },
    ],
  },
  {
    name: "Châlons-en-Champagne",
    links: [
      { label: "Dératisation", to: "/deratisation-chalons-en-champagne" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/chalons-en-champagne" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/chalons-en-champagne" },
    ],
  },
  {
    name: "Vittel",
    links: [
      { label: "Dératisation", to: "/deratisation-vittel" },
      { label: "Désinsectisation", to: "/desinsectisation-vittel" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/vittel" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/vittel" },
    ],
  },
  {
    name: "Neufchâteau",
    links: [
      { label: "Dératisation", to: "/deratisation-neufchateau" },
      { label: "Désinsectisation", to: "/desinsectisation-neufchateau" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/neufchateau" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/neufchateau" },
    ],
  },
  {
    name: "Dijon",
    links: [
      { label: "Dératisation", to: "/deratisation-dijon" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/dijon" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/dijon" },
    ],
  },
  {
    name: "Beaune",
    links: [
      { label: "Dératisation", to: "/deratisation-beaune" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/beaune" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/beaune" },
    ],
  },
  {
    name: "Châtillon-sur-Seine",
    links: [
      { label: "Dératisation", to: "/deratisation-chatillon-sur-seine" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/chatillon-sur-seine" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/chatillon-sur-seine" },
    ],
  },
  {
    name: "Nancy",
    links: [
      { label: "Dératisation", to: "/deratisation-nancy" },
      { label: "Dépigeonnisation", to: "/services/depigeonnisation/nancy" },
      { label: "Élimination Pigeons", to: "/services/elimination-pigeons/nancy" },
    ],
  },
];

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
          </div>
          <div>
            <h4 className="mb-4 font-heading font-bold">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="/guepes-frelons" className="hover:text-accent">Guêpes & Frelons</Link></li>
              <li><Link to="/desinsectisation" className="hover:text-accent">Désinsectisation</Link></li>
              <li><Link to="/taupes" className="hover:text-accent">Taupes</Link></li>
              <li><Link to="/depigeonnage" className="hover:text-accent">Dépigeonnage</Link></li>
              <li><Link to="/deratisation" className="hover:text-accent">Dératisation</Link></li>
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
            {CITY_FOOTER.map((city) => (
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
          <Link to="/plan-du-site" className="hover:text-accent transition-colors">Plan du site</Link>
        </div>
        © {new Date().getFullYear()} GF Nuisibles — Tous droits réservés
      </div>
    </footer>
  );
};

export default Footer;
