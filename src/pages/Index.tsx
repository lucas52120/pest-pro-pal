import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExpertPresentation from "@/components/ExpertPresentation";
import Services from "@/components/Services";
import Reassurance from "@/components/Reassurance";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>GF Nuisibles : Désinsectisation, Dératisation & Dépigeonnage</title>
        <meta name="description" content="Votre expert local en Haute-Marne et communes limitrophes. Désinsectisation (guêpes & frelons), dératisation et dépigeonnage. Service rapide 7j/7 et devis gratuit !" />
      </Helmet>
      <Navbar />
      <Hero />
      <ExpertPresentation />
      <Services />
      <Reassurance />
      <Footer />
    </>
  );
};

export default Index;
