import { useState, FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const FORMSPARK_URL = "https://submit-form.com/cbVnrVxCc";

const SITE_URL = "https://www.gf-nuisibles.fr";
const PHONE_DISPLAY = "07.65.25.67.92";
const PHONE_TEL = "0765256792";
const EMAIL = "contact@gf-nuisibles.fr";

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "url": `${SITE_URL}/contact`,
  "name": "Contact GF Nuisibles | Devis ou Renseignement Gratuit",
  "mainEntity": {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    "name": "G&F Nuisibles",
    "url": SITE_URL,
    "telephone": PHONE_DISPLAY,
    "email": EMAIL,
    "image": `${SITE_URL}/og-image.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "27 rue principale",
      "addressLocality": "Montsaon",
      "postalCode": "52000",
      "addressRegion": "Haute-Marne",
      "addressCountry": "FR",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": PHONE_DISPLAY,
      "email": EMAIL,
      "contactType": "customer service",
      "areaServed": "FR",
      "availableLanguage": ["French"],
    },
  },
};

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!consent) {
      toast.error("Veuillez accepter les conditions de traitement des données.");
      return;
    }

    setSending(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      nuisible: formData.get("nuisible"),
      message: formData.get("message"),
      _email: {
        subject: `Demande de contact - ${formData.get("nuisible") || "Non précisé"}`,
      },
    };

    try {
      const response = await fetch(FORMSPARK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Erreur lors de l'envoi");

      setSubmitted(true);
    } catch {
      toast.error("Une erreur est survenue. Veuillez réessayer ou nous appeler directement.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact GF Nuisibles | Devis ou Renseignement Gratuit</title>
        <meta name="description" content="Besoin d'un renseignement ? Contactez GF Nuisibles en Haute-Marne et communes limitrophes. Diagnostic et devis gratuit 7j/7. Intervention rapide !" />
        <link rel="canonical" href="https://www.gf-nuisibles.fr/contact" />
        <script type="application/ld+json">{JSON.stringify(contactJsonLd)}</script>
      </Helmet>
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
          {/* Form or Success */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center rounded-xl bg-secondary p-10 text-center"
            >
              <CheckCircle className="mb-6 h-16 w-16 text-accent" />
              <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                Merci !
              </h2>
              <p className="max-w-md leading-relaxed text-muted-foreground">
                Votre demande a été transmise avec succès. Notre équipe vous recontactera par téléphone ou par e-mail dans les plus brefs délais (sous 24 heures).
              </p>
              <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                En cas d'urgence absolue, n'attendez pas et appelez-nous directement au{" "}
                <a href="tel:0765256792" className="font-bold text-accent hover:underline">
                  07.65.25.67.92
                </a>.
              </p>
            </motion.div>
          ) : (
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
                  <label htmlFor="name" className="mb-1 block font-heading text-sm font-semibold text-primary">Nom *</label>
                  <input
                    required
                    id="name"
                    name="name"
                    type="text"
                    maxLength={100}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block font-heading text-sm font-semibold text-primary">Téléphone *</label>
                  <input
                    required
                    id="phone"
                    name="phone"
                    type="tel"
                    maxLength={20}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                    placeholder="06 XX XX XX XX"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block font-heading text-sm font-semibold text-primary">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  maxLength={255}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="votre@email.fr"
                />
              </div>
              <div>
                <label htmlFor="nuisible" className="mb-1 block font-heading text-sm font-semibold text-primary">Type de nuisible</label>
                <select
                  id="nuisible"
                  name="nuisible"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                >
                  <option value="">Sélectionnez...</option>
                  <option>Guêpes / Frelons</option>
                  <option>Cafards / Blattes</option>
                  <option>Punaises de lit</option>
                  <option>Taupes</option>
                  <option>Pigeons</option>
                  <option>Rats / Souris</option>
                  <option>ESOD (Ragondins, Renards...)</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block font-heading text-sm font-semibold text-primary">Message *</label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={2000}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Décrivez votre problème..."
                />
              </div>

              {/* RGPD Consent */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-border text-accent focus:ring-accent"
                  required
                />
                <label htmlFor="consent" className="text-sm text-muted-foreground">
                  En soumettant ce formulaire, je consens au traitement des informations saisies afin de m'envoyer un mail et une newsletter commerciale. *
                </label>
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
          )}

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
                    <a href="tel:0765256792" className="text-muted-foreground hover:text-accent">07.65.25.67.92</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-heading font-semibold text-primary">Email</p>
                    <a href="mailto:contact@gf-nuisibles.fr" className="text-muted-foreground hover:text-accent">contact@gf-nuisibles.fr</a>
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
                href="tel:0765256792"
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
