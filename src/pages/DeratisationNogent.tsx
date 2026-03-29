import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Nogent en Haute-Marne 52 | G&F Nuisibles";
const DESCRIPTION = "Souris ou rats à Nogent ? Faites appel à G&F Nuisibles, votre expert en extermination de rongeurs en Haute-Marne. Solutions durables et devis sans engagement.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel prix faut-il prévoir pour une dératisation à Nogent ?",
    answer: "À Nogent, nos tarifs sont ajustés en fonction de la complexité de l'accès (combles, caves, entrepôts) et de la méthode d'éradication choisie. Nous vous fournissons une estimation précise par téléphone ou sur place pour éviter toute mauvaise surprise.",
  },
  {
    question: "Dératisation : qui doit payer, le locataire ou le propriétaire ?",
    answer: "En règle générale, la loi stipule que les frais de dératisation incombent au propriétaire, sauf s'il peut prouver que l'infestation est due à un manque d'entretien ou d'hygiène du locataire. C'est une question de salubrité publique qui doit être traitée rapidement.",
  },
  {
    question: "Est-ce que les appareils à ultrasons sont vraiment efficaces contre les souris ?",
    answer: "Soyons directs : leur efficacité est très limitée dans le temps. Les rongeurs finissent par s'habituer aux fréquences sonores, surtout s'ils ont trouvé une source de nourriture stable dans votre bâtiment. Rien ne remplace une action curative ciblée.",
  },
];

const DeratisationNogent = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://pest-pro-pal.lovable.app/#organization",
        "name": "G&F Nuisibles",
        "telephone": "07.88.17.45.86",
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
        "provider": {
          "@id": "https://pest-pro-pal.lovable.app/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Nogent"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
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
      city="Nogent"
      department="Haute-Marne (52)"
      serviceTitle={TITLE}
      icon={<Rat className="h-8 w-8" />}
      heroImage={heroImage}
      metaDescription={DESCRIPTION}
      serviceCallTitle="UNE INFESTATION DE RONGEURS À NOGENT ?"
      serviceCallSubtitle="G&F NUISIBLES ÉLIMINE RATS ET SOURIS AVEC EFFICACITÉ !"
      intro="Vous suspectez la présence de rongeurs dans votre maison ou votre commerce à Nogent ? Excréments, câbles grignotés ou bruits nocturnes sont autant de signaux d'alerte. G&F Nuisibles intervient rapidement pour stopper l'invasion avant qu'elle ne s'aggrave."
      expertise="Spécialistes de la dératisation en Haute-Marne, nous proposons des solutions sur mesure alliant efficacité et sécurité. Nos techniciens certifiés utilisent exclusivement des produits homologués, respectueux de l'environnement et sans risque pour vos proches."
      method="Repérage des points d'entrée et des nids. Mise en place de dispositifs adaptés : stations d'appâtage verrouillées, nasses et pièges mécaniques. Colmatage des accès et recommandations d'hygiène pour une protection longue durée."
      cta="Ne laissez pas les rongeurs s'installer à Nogent. Contactez G&F Nuisibles au 07.88.17.45.86 — intervention rapide 7j/7, diagnostic gratuit."
      faqItems={FAQ_ITEMS}
    />
    </>
  );
};

export default DeratisationNogent;
