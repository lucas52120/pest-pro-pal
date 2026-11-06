import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import LinksSection from "@/components/LinksSection";
import TrustedBy from "@/components/TrustedBy";
import Reassurance from "@/components/Reassurance";
import GoogleReviews from "@/components/GoogleReviews";
import Footer from "@/components/Footer";
import { LOCAL_BUSINESS } from "@/data/business";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";

const ZONE_LINKS = [
  { label: "Dératisation à Chaumont", to: "/deratisation-chaumont" },
  { label: "Dératisation à Langres", to: "/deratisation-langres" },
  { label: "Dératisation à Saint-Dizier", to: "/deratisation-saint-dizier" },
  { label: "Dératisation à Joinville", to: "/deratisation-joinville" },
  { label: "Dératisation à Nogent", to: "/deratisation-nogent" },
  { label: "Dératisation à Bourbonne-les-Bains", to: "/deratisation-bourbonne-les-bains" },
  { label: "Dératisation à Bologne", to: "/deratisation-bologne" },
  { label: "Dératisation à Châteauvillain", to: "/deratisation-chateauvillain" },
];

const Index = () => {
  useScrollToHash();
  const jsonLd = { "@context": "https://schema.org", ...LOCAL_BUSINESS };

  return (
    <>
      <Helmet>
        <title>GF Nuisibles : Dératisation, Cafards & Blattes, Dépigeonnage</title>
        <meta
          name="description"
          content="Votre expert local en Haute-Marne et communes limitrophes. Cafards et blattes, guêpes et frelons, dératisation et dépigeonnage. Service rapide 7j/7 et devis gratuit !"
        />
        <link rel="canonical" href="https://gf-nuisibles.fr/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />
      <Hero />
      <Services />
      <LinksSection
        title="Nos zones d'intervention"
        intro="GF Nuisibles intervient dans toute la Haute-Marne (52) et les départements limitrophes. Retrouvez nos pages dans les principales villes du secteur :"
        links={ZONE_LINKS}
      >
        <p className="mt-6">
          <Link to="/zone-intervention" className="font-semibold text-primary underline underline-offset-4 hover:text-accent">
            Voir toute notre zone d'intervention
          </Link>
        </p>
      </LinksSection>
      <TrustedBy />
      <GoogleReviews />
      <Reassurance />
      <Footer />
    </>
  );
};

export default Index;
