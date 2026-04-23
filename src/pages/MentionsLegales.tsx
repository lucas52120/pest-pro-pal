import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const MentionsLegales = () => {
  return (
    <>
      <Navbar />
      <section className="bg-primary pb-16 pt-32">
        <div className="container-narrow px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="mb-4 font-heading text-4xl font-extrabold text-primary-foreground md:text-5xl">
              Mentions Légales
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow prose prose-lg max-w-none space-y-10">
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary">Éditeur du site</h2>
            <p className="text-muted-foreground">
              <strong>G&F Nuisibles</strong> — Micro-entreprise<br />
              SIRET : 91180982000010<br />
              Siège social : 27 rue principale, 52000 Montsaon<br />
              Directeur de la publication : <strong>Graja Lucas</strong>
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary">Contact</h2>
            <p className="text-muted-foreground">
              Téléphone : <a href="tel:0765256792" className="text-accent hover:underline">07.65.25.67.92</a><br />
              Email : <a href="mailto:contact@gf-nuisibles.fr" className="text-accent hover:underline">contact@gf-nuisibles.fr</a>
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary">Hébergement</h2>
            <p className="text-muted-foreground">
              Le site est hébergé par :<br />
              <em>[Nom de l'hébergeur à compléter]</em><br />
              <em>[Adresse de l'hébergeur]</em><br />
              <em>[Téléphone de l'hébergeur]</em>
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary">Propriété intellectuelle</h2>
            <p className="text-muted-foreground">
              L'ensemble des contenus présents sur le site gf-nuisibles.fr (textes, images, logos, graphismes, icônes, vidéos, sons, etc.) est la propriété exclusive de G&F Nuisibles ou de ses partenaires. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sauf autorisation écrite préalable de G&F Nuisibles.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary">Protection des données personnelles (RGPD)</h2>
            <p className="text-muted-foreground">
              Les données personnelles collectées via le formulaire de contact sont traitées uniquement dans le cadre de la gestion de votre demande d'intervention ou de devis. Elles ne sont ni cédées, ni vendues à des tiers.
            </p>
            <p className="text-muted-foreground">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles. Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:contact@gf-nuisibles.fr" className="text-accent hover:underline">contact@gf-nuisibles.fr</a>.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary">Cookies</h2>
            <p className="text-muted-foreground">
              Le site gf-nuisibles.fr peut utiliser des cookies à des fins de mesure d'audience et de statistiques. Vous pouvez paramétrer votre navigateur pour refuser les cookies. Le refus d'installation de cookies n'affecte pas la navigation sur le site.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MentionsLegales;
