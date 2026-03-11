import { motion } from "framer-motion";
import { Phone, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }} />
      
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />

      <div className="container-narrow relative z-10 px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl">
          
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-accent">
            <Shield className="h-4 w-4" />
            <span className="font-heading text-sm font-semibold">
              Intervention 7j/7 — Urgence week-end 
            </span>
          </div>

          <h1 className="mb-6 font-heading text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Votre expert en gestion des nuisibles en{" "}
            <span className="text-accent">Haute-Marne (52)</span>
          </h1>

          <p className="mb-8 max-w-lg text-lg text-primary-foreground/80">
            Intervention rapide et discrète pour particuliers et professionnels.
            Dératisation, désinsectisation, guêpes, taupes et dépigeonnage.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:0788174586"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 font-heading text-lg font-bold text-accent-foreground shadow-lg transition-all hover:bg-orange-hover hover:shadow-xl">
              
              <Phone className="h-5 w-5" />
              Appeler le 07.88.17.45.86
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