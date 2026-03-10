import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bug, Rat, Bird, Target, Zap, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Guêpes & Frelons",
    description: "Destruction de nids en toute sécurité, intervention rapide et sécurisée en hauteur.",
    path: "/guepes-frelons",
  },
  {
    icon: Bug,
    title: "Désinsectisation",
    description: "Élimination de cafards, punaises de lit et blattes. Traitement professionnel garanti.",
    path: "/desinsectisation",
  },
  {
    icon: Target,
    title: "Taupes",
    description: "Piégeage traditionnel et expertise terrain pour protéger vos espaces verts.",
    path: "/taupes",
  },
  {
    icon: Bird,
    title: "Dépigeonnage",
    description: "Protection durable des bâtiments contre les nuisances liées aux pigeons.",
    path: "/depigeonnage",
  },
  {
    icon: Rat,
    title: "Dératisation",
    description: "Opérations rapides et efficaces pour éliminer rats, souris et rongeurs.",
    path: "/deratisation",
  },
  {
    icon: ShieldCheck,
    title: "Contrat d'entretien",
    description: "Suivi régulier et préventif pour les professionnels et collectivités.",
    path: "/contact",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary md:text-4xl">
            Nos Services
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Des solutions professionnelles adaptées à chaque situation. Diagnostic gratuit et intervention rapide.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item}>
              <Link
                to={service.path}
                className="group flex h-full flex-col rounded-xl bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-primary">
                  {service.title}
                </h3>
                <p className="flex-1 text-sm text-muted-foreground">
                  {service.description}
                </p>
                <span className="mt-4 font-heading text-sm font-semibold text-accent">
                  En savoir plus →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
