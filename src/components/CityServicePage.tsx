import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Phone, Clock, MapPin, Star, CheckCircle2, Euro, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Reassurance from "@/components/Reassurance";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ExtraSection {
  title: string;
  content: ReactNode;
}

export interface LocalImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CityReview {
  author: string;
  neighborhood?: string;
  rating: number;
  text: string;
}

export interface PricingItem {
  label: string;
  price: string;
  description?: string;
}

export interface NearbyCity {
  label: string;
  to: string;
}

interface CityServicePageProps {
  city: string;
  department: string;
  serviceTitle: string;
  icon: ReactNode;
  heroImage?: string;
  metaDescription: string;
  intro: string;
  expertise: string;
  method: string;
  cta: string;
  serviceCallTitle: string;
  serviceCallSubtitle: string;
  faqItems?: FaqItem[];
  relatedLinks?: { label: string; to: string }[];
  extraSections?: ExtraSection[];
  localImage?: LocalImage;
  /** Quartiers couverts dans la ville (contenu unique = pas de duplicate content) */
  neighborhoods?: { title?: string; intro?: string; items: string[] };
  /** Contexte local : monuments, géographie, économie */
  localContext?: { title?: string; content: ReactNode };
  /** Tarifs transparents */
  pricing?: { title?: string; intro?: string; items: PricingItem[] };
  /** Avis clients locaux */
  reviews?: { title?: string; items: CityReview[] };
  /** Villes proches pour maillage interne */
  nearbyCities?: { title?: string; items: NearbyCity[] };
}

const CityServicePage = ({
  city,
  department,
  serviceTitle,
  icon,
  heroImage,
  metaDescription,
  intro,
  expertise,
  method,
  cta,
  serviceCallTitle,
  serviceCallSubtitle,
  faqItems,
  relatedLinks,
  extraSections,
  localImage,
  neighborhoods,
  localContext,
  pricing,
  reviews,
  nearbyCities,
}: CityServicePageProps) => {

  return (
    <>
      <Navbar />
      {/* Hero */}
      <section className="relative bg-primary pb-16 pt-32">
        {heroImage && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            <div className="absolute inset-0 bg-primary/80" />
          </>
        )}
        <div className="container-narrow relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-accent/20 text-accent">
              {icon}
            </div>
            <h1 className="mb-4 font-heading text-3xl font-extrabold text-primary-foreground md:text-5xl">
              {serviceTitle}
            </h1>
            <p className="max-w-xl text-lg text-primary-foreground/70">
              G&F Nuisibles — Votre expert à {city}, {department}.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Call Title */}
      <section className="section-padding pb-0">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-2 font-heading text-xl font-extrabold text-primary md:text-2xl uppercase">
              {serviceCallTitle}
            </h2>
            <p className="font-heading text-lg text-primary/80 md:text-xl uppercase">
              {serviceCallSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-narrow grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            {[
              { label: serviceTitle, content: intro },
              { label: "L'expertise G&F Nuisibles", content: expertise },
              { label: "Notre méthode d'intervention", content: method },
            ].map((block, i) => (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="mb-3 font-heading text-2xl font-bold text-primary">
                  {block.label}
                </h3>
                <p className="leading-relaxed text-muted-foreground">{block.content}</p>
              </motion.div>
            ))}

            {localImage && (
              <motion.figure
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-xl border border-slate-100 shadow-sm"
              >
                <img
                  src={localImage.src}
                  alt={localImage.alt}
                  loading="lazy"
                  className="w-full object-cover max-h-[520px]"
                />
                {localImage.caption && (
                  <figcaption className="bg-slate-50 px-4 py-3 text-sm italic text-muted-foreground">
                    {localImage.caption}
                  </figcaption>
                )}
              </motion.figure>
            )}

            {extraSections?.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h2 className="mb-3 font-heading text-2xl font-bold text-primary">
                  {section.title}
                </h2>
                <div className="space-y-3 leading-relaxed text-muted-foreground">
                  {section.content}
                </div>
              </motion.div>
            ))}

            {localContext && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="mb-3 font-heading text-2xl font-bold text-primary">
                  {localContext.title ?? `Spécificités de ${city}`}
                </h2>
                <div className="space-y-3 leading-relaxed text-muted-foreground">
                  {localContext.content}
                </div>
              </motion.div>
            )}

            {neighborhoods && neighborhoods.items.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="mb-3 font-heading text-2xl font-bold text-primary">
                  {neighborhoods.title ?? `Quartiers d'intervention à ${city}`}
                </h2>
                {neighborhoods.intro && (
                  <p className="mb-4 leading-relaxed text-muted-foreground">{neighborhoods.intro}</p>
                )}
                <ul className="grid gap-2 sm:grid-cols-2">
                  {neighborhoods.items.map((n) => (
                    <li key={n} className="flex items-start gap-2 text-muted-foreground">
                      <Building2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {pricing && pricing.items.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <h2 className="mb-3 font-heading text-2xl font-bold text-primary">
                  {pricing.title ?? `Tarifs à ${city}`}
                </h2>
                {pricing.intro && (
                  <p className="mb-4 leading-relaxed text-muted-foreground">{pricing.intro}</p>
                )}
                <ul className="space-y-3">
                  {pricing.items.map((p) => (
                    <li key={p.label} className="flex items-start gap-3 border-b border-slate-100 pb-3 last:border-0">
                      <Euro className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <span className="font-semibold text-primary">{p.label}</span>
                          <span className="font-heading font-bold text-accent">{p.price}</span>
                        </div>
                        {p.description && (
                          <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {reviews && reviews.items.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
                  {reviews.title ?? `Avis clients à ${city}`}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {reviews.items.map((r, idx) => (
                    <article key={idx} className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                      <div className="mb-2 flex items-center gap-1 text-accent" aria-label={`${r.rating} sur 5`}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < r.rating ? "fill-current" : "opacity-30"}`} />
                        ))}
                      </div>
                      <p className="mb-3 text-sm leading-relaxed text-muted-foreground">« {r.text} »</p>
                      <p className="text-sm font-semibold text-primary">
                        {r.author}
                        {r.neighborhood && <span className="font-normal text-muted-foreground"> — {r.neighborhood}</span>}
                      </p>
                    </article>
                  ))}
                </div>
              </motion.div>
            )}

            {nearbyCities && nearbyCities.items.length > 0 && (
              <motion.nav
                aria-label="Villes proches"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-slate-100 bg-slate-50 p-6"
              >
                <h2 className="mb-3 font-heading text-xl font-bold text-primary">
                  {nearbyCities.title ?? `Nous intervenons aussi près de ${city}`}
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {nearbyCities.items.map((c) => (
                    <li key={c.to}>
                      <Link
                        to={c.to}
                        className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-white px-3 py-1.5 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            )}

            {faqItems && faqItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-xl border border-slate-100 bg-slate-50 p-8 shadow-sm"
              >
                <h3 className="mb-6 font-heading text-2xl font-extrabold text-primary">
                  Questions fréquentes
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left font-semibold text-primary hover:underline [&>svg]:text-accent">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="pl-4 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl bg-secondary p-6"
            >
              <p className="text-lg font-semibold text-primary">{cta}</p>
            </motion.div>

            {relatedLinks && relatedLinks.length > 0 && (
              <motion.nav
                aria-label="Pages liées"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-xl border border-slate-100 bg-white p-6"
              >
                <h3 className="mb-3 font-heading text-lg font-bold text-primary">
                  À voir aussi
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {relatedLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="inline-block rounded-full border border-primary/20 px-3 py-1 text-sm text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:sticky lg:top-28 self-start"
          >
            <div className="rounded-xl bg-secondary p-6 shadow-sm">
              <h4 className="mb-4 font-heading text-lg font-bold text-primary">
                Intervention à {city}
              </h4>
              <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                <span>{city} et environs — {department}</span>
              </div>
              <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-accent" />
                <span>Lun–Ven : 8h–19h | Urgence week-end</span>
              </div>
              <a
                href="tel:0765256792"
                className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-heading font-bold text-accent-foreground transition-colors hover:bg-orange-hover"
              >
                <Phone className="h-4 w-4" />
                07.65.25.67.92
              </a>
              <Link
                to="/contact"
                className="flex w-full items-center justify-center rounded-lg border-2 border-primary px-6 py-3 font-heading font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Devis gratuit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Reassurance />
      <Footer />
    </>
  );
};

export default CityServicePage;
