import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Shield, Users, MapPin, Clock, Award } from "lucide-react";
import vanImage from "@/assets/van-gf.png";

const APropos = () => {
  return (
    <>
      <Helmet>
        <title>À Propos de GF Nuisibles | Expert Local contre les nuisibles</title>
        <meta name="description" content="Découvrez GF nuisible votre expert local de gestion des nuisibles en Haute-Marne et communes limitrophes pour les professionnels ou particuliers" />
      </Helmet>
      <Navbar />
      <section className="bg-primary pb-16 pt-32">
        <div className="container-narrow px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="mb-4 font-heading text-4xl font-extrabold text-primary-foreground md:text-5xl">
              À propos de G&F Nuisibles
            </h1>
            <p className="max-w-xl text-lg text-primary-foreground/70">
              Votre expert en lutte contre les nuisibles en Haute-Marne (52)
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="font-heading text-2xl font-bold text-primary">
              Qui sommes-nous ?
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              <strong>G&F Nuisibles</strong> est une entreprise spécialisée dans la gestion et l'élimination des nuisibles, implantée au cœur de la <strong>Haute-Marne (52)</strong>. Nous intervenons auprès des <strong>particuliers et professionnels</strong> sur l'ensemble du département : <strong>Chaumont, Langres, Saint-Dizier</strong> et toutes les communes environnantes.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Notre mission : vous offrir un service de <strong>dératisation, désinsectisation, dépigeonnage</strong> et <strong>destruction de nids de guêpes et frelons</strong> rapide, efficace et respectueux de l'environnement. Agréés <strong>Certibiocide</strong>, nous utilisons exclusivement des produits professionnels homologués pour garantir votre sécurité et celle de votre entourage.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Ce qui nous distingue, c'est notre <strong>réactivité</strong> et notre <strong>connaissance du terrain</strong>. Basés localement, nous comprenons les problématiques spécifiques de notre région et nous nous déplaçons rapidement, y compris en urgence le week-end, pour répondre à vos besoins dans les meilleurs délais.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center"
          >
            <img
              src={vanImage}
              alt="Véhicule d'intervention G&F Nuisibles"
              className="w-full rounded-xl shadow-lg object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-secondary section-padding">
        <div className="container-narrow">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center font-heading text-3xl font-bold text-primary"
          >
            Pourquoi choisir G&F Nuisibles ?
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Proximité locale",
                desc: "Implantés en Haute-Marne, nous connaissons parfaitement le territoire de Chaumont à Saint-Dizier en passant par Langres.",
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Réactivité immédiate",
                desc: "Intervention rapide du lundi au vendredi et en urgence le week-end. Votre sécurité n'attend pas.",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Agréé Certibiocide",
                desc: "Nos techniciens sont certifiés et utilisent uniquement des produits professionnels homologués par le ministère.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Particuliers & Professionnels",
                desc: "Nous accompagnons les résidences privées, syndics de copropriété, restaurants, hôtels et collectivités.",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Résultats garantis",
                desc: "Chaque intervention fait l'objet d'un suivi. Nous nous engageons sur l'efficacité de nos traitements.",
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Devis gratuit",
                desc: "Diagnostic et estimation offerts. Contactez-nous pour une évaluation précise de votre situation.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl bg-background p-6 shadow-sm"
              >
                <div className="mb-3 text-accent">{item.icon}</div>
                <h3 className="mb-2 font-heading text-lg font-bold text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 font-heading text-3xl font-bold text-primary">
              Nos services en Haute-Marne
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Que vous soyez confronté à une invasion de rats à Chaumont, un nid de frelons à Langres ou des pigeons à Saint-Dizier, G&F Nuisibles dispose de l'expertise et des équipements adaptés pour résoudre votre problème durablement.
            </p>
            <a
              href="tel:0788174586"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 font-heading font-bold text-accent-foreground transition-colors hover:bg-orange-hover"
            >
              Appelez-nous : 07.88.17.45.86
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default APropos;
