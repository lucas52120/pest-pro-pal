import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Votre demande a bien été envoyée ! Nous vous recontacterons rapidement.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <section className="bg-primary pb-16 pt-32">
        <div className="container-narrow px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 font-heading text-4xl font-extrabold text-primary-foreground md:text-5xl">
              Contactez-nous
            </h1>
            <p className="max-w-xl text-lg text-primary-foreground/70">
              Demandez votre devis gratuit ou appelez-nous pour une intervention rapide.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1 block font-heading text-sm font-semibold text-primary">Nom *</label>
                <input
                  required
                  type="text"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="mb-1 block font-heading text-sm font-semibold text-primary">Téléphone *</label>
                <input
                  required
                  type="tel"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="06 XX XX XX XX"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block font-heading text-sm font-semibold text-primary">Email</label>
              <input
                type="email"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="votre@email.fr"
              />
            </div>
            <div>
              <label className="mb-1 block font-heading text-sm font-semibold text-primary">Type de nuisible</label>
              <select className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent">
                <option value="">Sélectionnez...</option>
                <option>Guêpes / Frelons</option>
                <option>Cafards / Blattes</option>
                <option>Punaises de lit</option>
                <option>Taupes</option>
                <option>Pigeons</option>
                <option>Rats / Souris</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block font-heading text-sm font-semibold text-primary">Message *</label>
              <textarea
                required
                rows={5}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="Décrivez votre problème..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 font-heading font-bold text-accent-foreground transition-colors hover:bg-orange-hover disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
              {sending ? "Envoi en cours..." : "Envoyer la demande"}
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="rounded-xl bg-secondary p-6">
              <h3 className="mb-4 font-heading text-xl font-bold text-primary">Coordonnées</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-heading font-semibold text-primary">Téléphone</p>
                    <a href="tel:0788174586" className="text-muted-foreground hover:text-accent">07.88.17.45.86</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-heading font-semibold text-primary">Email</p>
                    <a href="mailto:contact@fgnuisibles.fr" className="text-muted-foreground hover:text-accent">contact@fgnuisibles.fr</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-heading font-semibold text-primary">Zone d'intervention</p>
                    <p className="text-muted-foreground">Chaumont, Langres et environs — Haute-Marne (52)</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-primary p-6">
              <h3 className="mb-2 font-heading text-xl font-bold text-accent">Urgence ?</h3>
              <p className="mb-4 text-primary-foreground/70">
                Nous intervenons 7j/7, y compris le week-end pour les situations urgentes.
              </p>
              <a
                href="tel:0788174586"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-heading font-bold text-accent-foreground transition-colors hover:bg-orange-hover"
              >
                <Phone className="h-4 w-4" />
                Appeler maintenant
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
