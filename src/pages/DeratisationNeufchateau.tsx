import { Rat } from "lucide-react";
import { Helmet } from "react-helmet-async";
import CityServicePage from "@/components/CityServicePage";
import type { FaqItem } from "@/components/CityServicePage";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation à Neufchâteau dans les Vosges 88 | G&F Nuisibles";
const DESCRIPTION = "Invasion de rongeurs à Neufchâteau ? G&F Nuisibles éradique rats et souris dans les Vosges 88. Diagnostic offert, opération rapide 7j/7.";

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Quel tarif prévoir pour dératiser un commerce de bouche à Neufchâteau ?",
    answer: "À Neufchâteau, le tarif est ajusté selon les spécificités de votre boutique et les contraintes liées à votre métier. Nous privilégions une tarification forfaitaire incluant le diagnostic, la pose des dispositifs et le suivi, afin de vous garantir une conformité totale avec les règlements sanitaires locaux.",
  },
  {
    question: "Dératisation commerciale : qui doit régler la facture, le gérant ou le bailleur ?",
    answer: "Dans le cadre d'un bail commercial, les frais de dératisation sont généralement à la charge du locataire (le gérant) au titre de l'entretien des locaux. Toutefois, si l'infestation provient de défauts structurels de l'immeuble, une prise en charge par le propriétaire peut être envisagée dans votre secteur.",
  },
  {
    question: "Quelles maladies les rats peuvent-ils transmettre dans un environnement de travail ?",
    answer: "La leptospirose et la salmonellose sont les risques majeurs. En milieu professionnel, la présence de nuisibles met en péril la santé de vos collaborateurs et la sécurité de vos produits. Une action rapide permet de sécuriser vos zones de vente et de stockage de manière définitive.",
  },
];

const DeratisationNeufchateau = () => {
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
          "name": "Neufchâteau"
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
        city="Neufchâteau"
        department="Vosges (88)"
        serviceTitle={TITLE}
        icon={<Rat className="h-8 w-8" />}
        heroImage={heroImage}
        metaDescription={DESCRIPTION}
        serviceCallTitle="RATS OU SOURIS À NEUFCHÂTEAU ?"
        serviceCallSubtitle="G&F NUISIBLES : VOTRE EXPERT EN DÉRATISATION CERTIFIÉ !"
        intro="À Neufchâteau, les rongeurs trouvent des conditions idéales pour proliférer. Que ce soit dans les habitations ou les commerces, une infestation non traitée peut causer des dégâts considérables. G&F Nuisibles propose une éradication complète et garantie."
        expertise="Spécialistes de la lutte anti-rongeurs en Vosges (88), nos équipes utilisent des techniques éprouvées adaptées à chaque situation. Notre approche combine efficacité immédiate et prévention à long terme."
        method="Audit détaillé de votre site pour évaluer l'ampleur de l'infestation. Déploiement d'un dispositif multi-techniques : rodenticides sécurisés, pièges professionnels, colmatage des passages. Rapport et suivi systématique."
        cta="Ne laissez pas les rongeurs s'installer à Neufchâteau. Appelez le 07.88.17.45.86 pour une expertise certifiée et un devis sans engagement."
        faqItems={FAQ_ITEMS}
      />
    </>
  );
};

export default DeratisationNeufchateau;
