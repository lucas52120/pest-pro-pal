import { motion } from "framer-motion";
import { Phone, Clock, MapPin, CheckCircle, ShieldCheck } from "lucide-react";

const Reassurance = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
            Besoin d'une intervention rapide ?
          </h2>
          <p className="mb-10 text-lg text-primary-foreground/70">
            GF Nuisibles à votre service — Discrétion et efficacité garanties.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {[
            { icon: Clock, label: "Horaires", text: "Lun–Ven : 8h–19h | Urgence & astreinte week-end" },
            { icon: MapPin, label: "Secteur", text: "Chaumont, Langres et environs (52)" },
            { icon: CheckCircle, label: "Garantie", text: "Résultat garanti, véhicules discrets" },
            { icon: ShieldCheck, label: "Certification", text: "Agréé Certibiocide — Produits professionnels homologués" },
            { icon: Phone, label: "Contact", text: "07.88.17.45.86" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center rounded-xl bg-primary-foreground/5 p-6 text-center"
            >
              <item.icon className="mb-3 h-8 w-8 text-accent" />
              <h3 className="mb-1 font-heading text-sm font-bold text-accent">
                {item.label}
              </h3>
              <p className="text-sm text-primary-foreground/70">{item.text}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 font-heading text-lg font-bold text-accent-foreground shadow-lg transition-all hover:bg-orange-hover hover:shadow-xl"
          >
            Demander un devis gratuit
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Reassurance;
