import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustedBy from "@/components/TrustedBy";
import Reassurance from "@/components/Reassurance";
import Footer from "@/components/Footer";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://gf-nuisibles.fr/#organization",
    name: "G&F Nuisibles",
    url: "https://gf-nuisibles.fr",
    telephone: "07 65 25 67 92",
    priceRange: "$$",
    image: "https://gf-nuisibles.fr/og-image.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "27 rue principale",
      addressLocality: "Montsaon",
      postalCode: "52000",
      addressRegion: "Haute-Marne",
      addressCountry: "FR",
    },
    description:
      "Expert local en Haute-Marne pour la désinsectisation, dératisation et dépigeonnage. Intervention rapide 7j/7.",
  };

  return (
    <>
      <Helmet>
        <title>GF Nuisibles : Désinsectisation, Dératisation & Dépigeonnage</title>
        <meta
          name="description"
          content="Votre expert local en Haute-Marne et communes limitrophes. Désinsectisation (guêpes & frelons), dératisation et dépigeonnage. Service rapide 7j/7 et devis gratuit !"
        />
        <link rel="canonical" href="https://gf-nuisibles.fr/" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />
      <Hero />
      <Services />
      <TrustedBy />
      <Reassurance />
      <Footer />
    </>
  );
};

export default Index;
