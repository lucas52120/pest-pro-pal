import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroPigeons from "@/assets/hero-pigeons.jpg";

const images = [heroBg, heroPigeons];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }} />
        
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />

      <div className="container-narrow relative z-10 px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl">
          
      <div className="mb-6 flex items-center gap-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-accent">
          <Shield className="h-4 w-4" />
          <span className="font-heading text-sm font-semibold">
            Intervention 7j/7 — Urgence week-end
          </span>
        </div>

        <a
          href="https://www.facebook.com/gfnuisibles"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[#1877F2] p-2.5 text-white transition-transform hover:scale-110"
          aria-label="Facebook G&F Nuisibles"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
      </div>

          <h1 className="mb-6 font-heading text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Votre expert en gestion des nuisibles en{" "}
            <span className="text-accent text-4xl md:text-5xl lg:text-6xl">Haute-Marne et départements limitrophes</span>
          </h1>

          <p className="mb-8 max-w-lg text-lg text-primary-foreground/80">
            Intervention rapide et discrète pour particuliers et professionnels.
            Dératisation, désinsectisation, guêpes, taupes et dépigeonnage.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:0765256792"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 font-heading text-lg font-bold text-accent-foreground shadow-lg transition-all hover:bg-orange-hover hover:shadow-xl">
              
              <Phone className="h-5 w-5" />
              Appeler le 07.65.25.67.92
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/30 px-8 py-4 font-heading text-lg font-semibold text-primary-foreground transition-all hover:border-primary-foreground/60 hover:bg-primary-foreground/10">
              
              Devis gratuit
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default Hero;