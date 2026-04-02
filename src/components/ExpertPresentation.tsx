import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutExpert from "@/assets/about-expert.jpg";

const ExpertPresentation = () => {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container-narrow px-4"
      >
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Image - appears first on mobile */}
          <div className="order-first md:order-last">
            <img
              src={aboutExpert}
              alt="Expert G&F Nuisibles intervention dératisation Chaumont Saint-Dizier Haute-Marne"
              className="w-full rounded-2xl object-cover shadow-lg"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="mb-6 font-heading text-2xl font-bold text-primary md:text-3xl lg:text-4xl">
              G&F Nuisibles : votre expert en destruction des nuisibles en Haute-Marne (52)
            </h2>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Vous recherchez une société de destruction de nuisibles réactive autour de Chaumont,
              Saint-Dizier ou Langres ? Faites appel au professionnalisme de l'entreprise G&F
              Nuisibles, à votre service dans tout le département de la Haute-Marne et ses environs.
              Spécialisés dans l'éradication des guêpes ou frelons, rongeurs, insectes et volatiles,
              et établis à Montsaon, contactez-nous dès aujourd'hui pour un diagnostic et une
              solution adaptée à votre situation.
            </p>
            <Link
              to="/a-propos"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-heading font-bold text-accent-foreground shadow transition-all hover:bg-orange-hover hover:shadow-lg"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExpertPresentation;
