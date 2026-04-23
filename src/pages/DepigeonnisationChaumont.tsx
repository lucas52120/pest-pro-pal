import { Bird } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-depigeonnage.jpg";

const TITLE = "Dépigeonnisation à Chaumont en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Pigeons à Chaumont ? G&F Nuisibles, expert en dépigeonnage en Haute-Marne 52, protège vos bâtiments durablement. Diagnostic gratuit 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel est le prix d'un dépigeonnage à Chaumont ?",
    answer: "Le coût d'une intervention à Chaumont est calculé selon la hauteur du bâtiment et le dispositif choisi (pics, filets ou cages). Pour une entreprise en Haute-Marne, nous établissons un devis sur mesure après analyse des zones de nidification. L'investissement permet d'éviter des frais de ravalement de façade bien plus onéreux à l'avenir.",
  },
  {
    question: "Quelles sont les maladies transmises par les pigeons ?",
    answer: "Ces oiseaux sont vecteurs de pathologies comme la cryptococcose ou la salmonellose. Dans votre établissement, leurs fientes peuvent contaminer les stocks ou les zones de réception, mettant en péril votre sécurité sanitaire et celle de vos collaborateurs dans le 52.",
  },
  {
    question: "Quelle est la méthode la plus efficace pour protéger un bâtiment ?",
    answer: "Pour les grands volumes de stockage, la pose de filets anti-pigeons reste la solution de référence. Ce système crée une barrière physique infranchissable qui protège durablement vos structures de charpente et vos machines contre les dégradations acides dues aux fientes.",
  },
];

const DepigeonnisationChaumont = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://pest-pro-pal.lovable.app/#organization",
        "name": "G&F Nuisibles",
        "telephone": "07.65.25.67.92",
        "priceRange": "$$",
        "image": "https://pest-pro-pal.lovable.app/og-image.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "27 rue principale",
          "addressLocality": "Montsaon",
          "postalCode": "52000",
          "addressRegion": "Haute-Marne",
          "addressCountry": "FR"
        }
      },
      {
        "@type": "Service",
        "name": TITLE,
        "description": DESCRIPTION,
        "provider": { "@id": "https://pest-pro-pal.lovable.app/#organization" },
        "areaServed": { "@type": "City", "name": "Chaumont" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": { "@type": "Answer", "text": item.answer }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <CityServicePage
        city="Chaumont"
        department="Haute-Marne (52)"
        serviceTitle={TITLE}
        icon={<Bird className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="PIGEONS ENVAHISSANTS À CHAUMONT ?"
        serviceCallSubtitle="G&F NUISIBLES PROTÈGE VOS BÂTIMENTS DURABLEMENT !"
        intro="À Chaumont, les pigeons colonisent toitures, balcons et façades, provoquant salissures et dégradations. G&F Nuisibles met en place des solutions anti-pigeons professionnelles : filets, pics, fil tendu et systèmes de dissuasion adaptés à chaque configuration."
        expertise="Notre expertise en Haute-Marne nous permet d'intervenir sur tous types de bâtiments à Chaumont : immeubles, commerces, monuments et habitations. Nous privilégions les méthodes non-létales et durables."
        method="Analyse du site et identification des zones de perchage et nidification. Pose de dispositifs anti-pigeons adaptés (pics, filets, fil tendu). Décontamination des surfaces souillées par les fientes. Garantie d'efficacité."
        cta="Pigeons à Chaumont ? Contactez G&F Nuisibles au 07.65.25.67.92 pour une dépigeonnisation professionnelle garantie."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DepigeonnisationChaumont;
