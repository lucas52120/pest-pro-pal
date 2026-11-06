import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";

const MentionsLegales = () => {
  useScrollToHash();

  return (
    <>
      <SEO
        title="Mentions légales | GF Nuisibles"
        description="Mentions légales de GF Nuisibles, entreprise de lutte antinuisibles en Haute-Marne (52) : éditeur, hébergement et informations légales."
        path="/mentions-legales"
      />
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
              <strong>GF Nuisibles</strong> — Micro-entreprise<br />
              SIRET : 91180982000010<br />
              Siège social : 27 rue Principale, 52000 Semoutiers-Montsaon<br />
              Directeur de la publication : <strong>Graja Lucas</strong>
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary">Contact</h2>
            <p className="text-muted-foreground">
              Téléphone : <a href="tel:0765256792" className="text-accent hover:underline">07 65 25 67 92</a><br />
              Email : <a href="mailto:contact@gf-nuisibles.fr" className="text-accent hover:underline">contact@gf-nuisibles.fr</a>
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary">Hébergement</h2>
            <p className="text-muted-foreground">
              Le site est hébergé par :<br />
              <strong>Netlify, Inc.</strong><br />
              44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA<br />
              Téléphone : <a href="tel:+14156911573" className="text-accent hover:underline">+1 415-691-1573</a>
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary">Propriété intellectuelle</h2>
            <p className="text-muted-foreground">
              L'ensemble des contenus présents sur le site gf-nuisibles.fr (textes, images, logos, graphismes, icônes, vidéos, sons, etc.) est la propriété exclusive de GF Nuisibles ou de ses partenaires. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sauf autorisation écrite préalable de GF Nuisibles.
            </p>
          </div>

          <div id="donnees-personnelles" className="scroll-mt-28">
            <h2 className="font-heading text-2xl font-bold text-primary">Données personnelles</h2>
            <p className="text-muted-foreground">
              <strong>Responsable du traitement :</strong> GF Nuisibles, Lucas Graja, 27 rue Principale, 52000 Semoutiers-Montsaon, <a href="mailto:contact@gf-nuisibles.fr" className="text-accent hover:underline">contact@gf-nuisibles.fr</a>.
            </p>
            <p className="text-muted-foreground">
              <strong>Données collectées :</strong> nom, téléphone, e-mail (facultatif), type de nuisible et message saisis dans le formulaire de contact.
            </p>
            <p className="text-muted-foreground">
              <strong>Finalité :</strong> répondre aux demandes de devis et de renseignement, et assurer le suivi de la relation client.
            </p>
            <p className="text-muted-foreground">
              <strong>Base légale :</strong> le consentement de la personne et les mesures précontractuelles prises à sa demande (article 6.1.a et 6.1.b du RGPD).
            </p>
            <p className="text-muted-foreground">
              <strong>Destinataires :</strong> GF Nuisibles uniquement. Les données transitent par Formspark (service d'envoi de formulaires) et le site est hébergé par Netlify ; ces prestataires peuvent traiter des données hors de l'Union européenne, dans le cadre des garanties prévues par le RGPD. Les données ne sont ni vendues ni cédées.
            </p>
            <p className="text-muted-foreground">
              <strong>Durée de conservation :</strong> 3 ans à compter du dernier contact, sauf obligation légale de conservation plus longue (par exemple les factures).
            </p>
            <p className="text-muted-foreground">
              <strong>Droits :</strong> accès, rectification, effacement, limitation, opposition, portabilité et retrait du consentement à tout moment, par e-mail à <a href="mailto:contact@gf-nuisibles.fr" className="text-accent hover:underline">contact@gf-nuisibles.fr</a>. Réponse sous un mois.
            </p>
            <p className="text-muted-foreground">
              <strong>Réclamation :</strong> possibilité de saisir la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.cnil.fr</a>).
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-primary">Cookies</h2>
            <p className="text-muted-foreground">
              Le site gf-nuisibles.fr n'utilise pas de cookies publicitaires ni de mesure d'audience. Seuls des éléments techniques nécessaires au bon fonctionnement du site peuvent être déposés ; ils ne nécessitent pas de consentement. Si un outil de mesure d'audience était ajouté, cette page serait mise à jour et votre accord serait demandé si nécessaire.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MentionsLegales;
