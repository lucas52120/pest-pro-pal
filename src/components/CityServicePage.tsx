import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Phone, Clock, MapPin } from "lucide-react";
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
