import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-gf-new.svg";

const navItems = [
  { label: "Accueil", path: "/" },
  { label: "Guêpes & Frelons", path: "/guepes-frelons" },
  { label: "Désinsectisation", path: "/desinsectisation" },
  { label: "Taupes", path: "/taupes" },
  { label: "Dépigeonnage", path: "/depigeonnage" },
  { label: "Dératisation", path: "/deratisation" },
  { label: "À propos", path: "/a-propos" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary shadow-lg" : "bg-primary/95"
      }`}
    >
      <div className="flex w-full items-center justify-between px-6 py-1">
        {/* Logo — flush left, tall */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="GF Nuisibles"
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop nav — centered */}
        <div className="hidden flex-1 items-center justify-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-heading text-[1.1rem] font-medium transition-colors hover:text-accent ${
                location.pathname === item.path
                  ? "text-accent"
                  : "text-primary-foreground/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Phone CTA — flush right */}
        <a
          href="tel:0765256792"
          className="hidden flex-shrink-0 items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-heading text-base font-bold text-accent-foreground transition-colors hover:bg-orange-hover md:flex"
        >
          <Phone className="h-5 w-5" />
          07.65.25.67.92
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-primary-foreground lg:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-primary-foreground/10 bg-primary lg:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-md px-3 py-2 font-heading text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-accent text-accent-foreground"
                    : "text-primary-foreground/80 hover:bg-primary-foreground/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:0765256792"
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 font-heading text-sm font-bold text-accent-foreground"
            >
              <Phone className="h-4 w-4" />
              07.65.25.67.92
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
