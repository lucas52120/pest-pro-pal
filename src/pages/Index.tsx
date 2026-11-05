import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustedBy from "@/components/TrustedBy";
import Reassurance from "@/components/Reassurance";
import GoogleReviews from "@/components/GoogleReviews";
import Footer from "@/components/Footer";
import { LOCAL_BUSINESS } from "@/data/business";

const Index = () => {
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
      <TrustedBy />
      <GoogleReviews />
      <Reassurance />
      <Footer />
    </>
  );
};

export default Index;
