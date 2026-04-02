import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Phone, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Reassurance from "@/components/Reassurance";
import Footer from "@/components/Footer";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  problem: string;
  expertise: string;
  method: string;
  engagement: string;
  icon: ReactNode;
  heroImage?: string;
  serviceCallTitle: string;
  serviceCallSubtitle: string;
  sidebarImage?: string;
  children?: ReactNode;
}

const ServicePageLayout = ({
  title,
  subtitle,
  problem,
  expertise,
  method,
  engagement,
  icon,
  heroImage,
  serviceCallTitle,
  serviceCallSubtitle,
  sidebarImage,
  children,
}: ServicePageLayoutProps) => {
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
            <h1 className="mb-4 font-heading text-4xl font-extrabold text-primary-foreground md:text-5xl">
              {title}
            </h1>
            <p className="max-w-xl text-lg text-primary-foreground/70">{subtitle}</p>
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
              { label: "Le Problème", content: problem },
              { label: "L'Expertise GF Nuisibles", content: expertise },
              { label: "Notre Méthode", content: method },
              { label: "Notre Engagement", content: engagement },
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
          </div>

          {/* Sidebar: Image ABOVE, then Intervention rapide */}
          <div className="space-y-6 lg:sticky lg:top-28 self-start">
            {/* Sidebar Image — now on top */}
            {sidebarImage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <img
                  src={sidebarImage}
                  alt={title}
                  className="w-full rounded-xl object-cover shadow-sm"
                  loading="lazy"
                />
              </motion.div>
            )}

            {/* Intervention rapide — now below image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="rounded-xl bg-secondary p-6 shadow-sm">
                <h3 className="mb-4 font-heading text-lg font-bold text-primary">
                  Intervention rapide
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Contactez-nous pour un diagnostic gratuit et une intervention dans les plus brefs délais.
                </p>
                <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-accent" />
                  <span>Lun–Ven : 8h–19h | Urgence week-end</span>
                </div>
                <a
                  href="tel:0788174586"
                  className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-heading font-bold text-accent-foreground transition-colors hover:bg-orange-hover"
                >
                  <Phone className="h-4 w-4" />
                  07.88.17.45.86
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
        </div>
      </section>

      {children}
      <Reassurance />
      <Footer />
    </>
  );
};

export default ServicePageLayout;
