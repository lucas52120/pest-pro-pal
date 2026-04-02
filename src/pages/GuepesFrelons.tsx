import { Zap, Plus, Minus } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useCallback, useRef } from "react";
import ServicePageLayout from "@/components/ServicePageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/service-guepes.jpg";
import comparatifFrelons from "@/assets/comparatif-frelons.png";
import guepeVol from "@/assets/guepe-vol.jpg";
import nidGuepes from "@/assets/nid-guepes.jpg";
import nidFrelonAsiatique from "@/assets/nid-frelon-asiatique.jpg";

const FAQ_ITEMS = [
  {
    question: "Quelles différences entre frelon européen et frelon asiatique ?",
    answer: `Il est essentiel de savoir les distinguer, car leur comportement et la dangerosité du nid diffèrent. À Chaumont, et ses communes alentour en Haute-Marne, nous rencontrons de plus en plus de frelons asiatiques, particulièrement agressifs près de leur colonie.\n\nLe Frelon Européen (Vespa crabro) : C'est le plus grand (entre 25 et 35 mm). Il ressemble à une grosse guêpe. Son corps est taché de roux, de noir et de jaune. Ses pattes sont brunes. Il est plutôt pacifique, sauf si l'on s'approche trop près du nid.\n\nLe Frelon Asiatique (Vespa velutina) : Plus petit que son cousin européen (entre 20 et 30 mm), il est très sombre. On le reconnaît à son thorax noir, son segment abdominal orangé et surtout ses pattes aux extrémités jaunes (d'où son surnom de frelon à pattes jaunes).`,
  },
  {
    question: "Caractéristiques physiques : comment reconnaître l'insecte qui vous envahit ?",
    answer: "Fiche d'identité et morphologie des guêpes et frelons.",
  },
  {
    question: "Comment déceler la présence d'un nid chez vous ?",
    answer: `Parfois, le nid est invisible, caché dans une cloison ou sous une toiture. Voici les signes qui doivent vous alerter.\n\nSi vous remarquez la présence d'un nid chez vous à Chaumont, Langres ou n'importe où dans le 52, contactez-nous immédiatement pour un diagnostic.`,
  },
  {
    question: "Comportement et Agressivité",
    answer: "Comprendre le comportement des guêpes et frelons pour mieux s'en protéger.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://pest-pro-pal.lovable.app/#organization",
      name: "G&F Nuisibles",
      image: "https://pest-pro-pal.lovable.app/og-image.png",
      telephone: "+33788174586",
      email: "contact@gf-nuisibles.fr",
      address: {
        "@type": "PostalAddress",
        streetAddress: "27 rue principale",
        addressLocality: "Montsaon",
        postalCode: "52000",
        addressCountry: "FR",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Haute-Marne (52)",
      },
      priceRange: "$$",
    },
    {
      "@type": "Service",
      name: "Destruction de nids de Guêpes & Frelons en Haute-Marne",
      provider: { "@id": "https://pest-pro-pal.lovable.app/#organization" },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Haute-Marne (52)",
      },
      description:
        "Expert en destruction de nids de guêpes et frelons en Haute-Marne. Intervention rapide et sécurisée 7j/7.",
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

const GuepesFrelons = () => {
  const accordionRef = useRef<HTMLDivElement>(null);

  const handleValueChange = useCallback((value: string) => {
    if (!value) return;
    setTimeout(() => {
      const el = document.querySelector(`[data-state="open"][data-value="${value}"]`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  }, []);

  return (
    <>
      <Helmet>
        <title>Destruction Guêpes & Frelons Haute-Marne 52 | G&F Nuisibles</title>
        <meta
          name="description"
          content="Votre expert en destruction de nid de guêpes & frelons en Haute-Marne 52. Diagnostic GRATUIT, intervention rapide et efficace 7j/7 appelez-nous !"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <ServicePageLayout
        icon={<Zap className="h-8 w-8" />}
        title="Guêpes & Frelons"
        subtitle="Destruction de nids de guêpes et frelons en toute sécurité en Haute-Marne."
        heroImage={heroImage}
        sidebarImage={heroImage}
        serviceCallTitle="VOTRE LOGEMENT OU LOCAL PROFESSIONNEL SUBIT UNE INVASION DE GUÊPES OU DE FRELONS ?"
        serviceCallSubtitle="CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DE LA DESTRUCTION DE NIDS DE GUÊPES ET FRELONS !"
        problem="Un nid de guêpes ou de frelons près de votre habitation représente un danger réel. Les piqûres peuvent provoquer des réactions allergiques graves, voire un choc anaphylactique. Ne prenez aucun risque et faites appel à un professionnel."
        expertise="GF Nuisibles intervient rapidement pour la destruction de nids de guêpes, frelons européens et frelons asiatiques. Nos techniciens sont équipés pour intervenir en hauteur et dans les zones difficiles d'accès (toitures, cheminées, arbres)."
        method="Après un diagnostic précis de la situation, nous procédons à la neutralisation du nid avec des produits professionnels homologués. L'intervention est rapide et sécurisée pour vous et votre entourage."
        engagement="Intervention garantie, même en urgence le week-end. Nous nous déplaçons sur Chaumont, Langres et l'ensemble de la Haute-Marne (52)."
      >
        {/* Section FAQ Expert */}
        <section className="section-padding">
          <div className="container-narrow">
            <h2 className="mb-8 font-heading text-3xl font-extrabold text-primary md:text-4xl">
              Tout savoir sur les guêpes et frelons
            </h2>

            <Accordion
              type="single"
              collapsible
              className="w-full space-y-4"
              ref={accordionRef}
              onValueChange={handleValueChange}
            >
              {/* Accordéon 1 */}
              <AccordionItem value="item-1" data-value="item-1" className="border-none">
                <AccordionTrigger className="flex items-center gap-3 py-4 text-left hover:no-underline [&[data-state=open]>svg.plus-icon]:hidden [&[data-state=closed]>svg.minus-icon]:hidden">
                  <Plus className="plus-icon h-5 w-5 shrink-0 text-accent" />
                  <Minus className="minus-icon h-5 w-5 shrink-0 text-accent" />
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    Quelles différences entre frelon européen et frelon asiatique ?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-foreground">
                  <p className="mb-4">
                    Il est essentiel de savoir les distinguer, car leur comportement et la dangerosité du nid diffèrent. À Chaumont, et ses communes alentour en Haute-Marne, nous rencontrons de plus en plus de frelons asiatiques, particulièrement agressifs près de leur colonie.
                  </p>
                  <p className="mb-4">
                    <strong>Le Frelon Européen (Vespa crabro) :</strong> C'est le plus grand (entre 25 et 35 mm). Il ressemble à une grosse guêpe. Son corps est taché de roux, de noir et de jaune. Ses pattes sont brunes. Il est plutôt pacifique, sauf si l'on s'approche trop près du nid.
                  </p>
                  <p className="mb-6">
                    <strong>Le Frelon Asiatique (Vespa velutina) :</strong> Plus petit que son cousin européen (entre 20 et 30 mm), il est très sombre. On le reconnaît à son thorax noir, son segment abdominal orangé et surtout ses pattes aux extrémités jaunes (d'où son surnom de frelon à pattes jaunes).
                  </p>
                  <img
                    src={comparatifFrelons}
                    alt="Comparatif frelon européen et asiatique - Expertise G&F Nuisibles Haute-Marne"
                    className="w-full max-w-3xl rounded-xl"
                    loading="lazy"
                    width={1200}
                    height={512}
                  />
                </AccordionContent>
              </AccordionItem>

              {/* Accordéon 2 */}
              <AccordionItem value="item-2" data-value="item-2" className="border-none">
                <AccordionTrigger className="flex items-center gap-3 py-4 text-left hover:no-underline [&[data-state=open]>svg.plus-icon]:hidden [&[data-state=closed]>svg.minus-icon]:hidden">
                  <Plus className="plus-icon h-5 w-5 shrink-0 text-accent" />
                  <Minus className="minus-icon h-5 w-5 shrink-0 text-accent" />
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    Caractéristiques physiques : comment reconnaître l'insecte qui vous envahit ?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-foreground">
                  <h4 className="mb-3 text-lg font-bold text-primary">Fiche d'identité et Morphologie</h4>

                  <div className="mb-8 flex flex-col gap-6 md:flex-row">
                    <div className="flex-1 space-y-3">
                      <p>
                        <strong>La Guêpe (Vespula) :</strong> Petite et élancée (10-19 mm), elle arbore un jaune vif et un noir profond sans poils apparents. Sa "taille de guêpe" est sa signature.
                      </p>
                      <p>
                        <strong>Le Frelon Européen (Vespa crabro) :</strong> Le géant de nos campagnes (25-35 mm). Teintes rousses sur le thorax et les pattes, abdomen très jaune rayé de noir. Son vol produit un bourdonnement très grave.
                      </p>
                      <p>
                        <strong>Le Frelon Asiatique (Vespa velutina) :</strong> Silhouette plus sombre et plus petite (20-30 mm). Thorax noir mat, face orangée, et surtout : pattes aux extrémités jaune vif.
                      </p>
                    </div>
                    <div className="shrink-0 md:w-64">
                      <img
                        src={guepeVol}
                        alt="Problème de guêpe à Chaumont et communes alentours"
                        className="w-full rounded-xl object-cover"
                        loading="lazy"
                        width={640}
                        height={512}
                      />
                    </div>
                  </div>

                  <h4 className="mb-3 text-lg font-bold text-primary">Reconnaître les nids et leurs endroits</h4>
                  <p className="mb-3">
                    Chaque espèce a ses préférences pour installer sa colonie. Grâce à vos informations, voici où les débusquer :
                  </p>
                  <div className="flex flex-col gap-6 md:flex-row">
                    <div className="flex-1 space-y-3">
                      <p>
                        <strong>Guêpes :</strong> Souvent dans le sol (terriers), les fissures de murs ou sous les tuiles. Le nid est gris "papier journal".
                      </p>
                      <p>
                        <strong>Frelon Européen :</strong> Cherche l'obscurité. On le trouve dans les cavités naturelles (arbres creux) ou les espaces confinés (greniers, cheminées, hangars).
                      </p>
                      <p>
                        <strong>Frelon Asiatique :</strong> Débute par un petit nid primaire sous un abri (avancée de toit, linteau), puis migre souvent en hauteur dans la cime des arbres pour former une énorme sphère pouvant atteindre 1 mètre.
                      </p>
                    </div>
                    <div className="shrink-0 md:w-64">
                      <img
                        src={nidGuepes}
                        alt="Destruction de nids de guêpes à Chaumont et communes alentours"
                        className="w-full rounded-xl object-cover"
                        loading="lazy"
                        width={640}
                        height={512}
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Accordéon 3 */}
              <AccordionItem value="item-3" data-value="item-3" className="border-none">
                <AccordionTrigger className="flex items-center gap-3 py-4 text-left hover:no-underline [&[data-state=open]>svg.plus-icon]:hidden [&[data-state=closed]>svg.minus-icon]:hidden">
                  <Plus className="plus-icon h-5 w-5 shrink-0 text-accent" />
                  <Minus className="minus-icon h-5 w-5 shrink-0 text-accent" />
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    Comment déceler la présence d'un nid chez vous ?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-foreground">
                  <p className="mb-4">
                    Parfois, le nid est invisible, caché dans une cloison ou sous une toiture. Voici les signes qui doivent vous alerter :
                  </p>

                  <div className="flex flex-col gap-6 md:flex-row">
                    <div className="flex-1 space-y-4">
                      <p>
                        <strong>Le va-et-vient incessant :</strong> Si vous observez un passage régulier d'insectes au même endroit (sous une tuile, dans une fissure de mur, dans un coffre de volet roulant), c'est le signe d'une activité de colonie.
                      </p>
                      <p>
                        <strong>Le bruit :</strong> Un grattage ou un bourdonnement sourd derrière un plafond ou une cloison placo indique souvent la construction d'un nid.
                      </p>
                      <p>
                        <strong>Lieux fréquents de nidification :</strong> Les nids de frelons asiatiques commencent par un petit "nid primaire" au printemps (taille d'une orange) pour finir en énorme sphère de papier mâché (jusqu'à 1 mètre de haut) souvent située dans :
                      </p>
                      <ul className="ml-6 list-disc space-y-1">
                        <li><strong>Espaces confinés :</strong> greniers, hangars, remises, abris.</li>
                        <li><strong>Cavités naturelles :</strong> à la cime des arbres, creux d'arbres, terriers, galeries.</li>
                        <li><strong>Interstices de construction :</strong> rebords, avant-toits, linteaux, fissures.</li>
                        <li><strong>Amas de matériaux :</strong> tas de bûches, souches, branchages.</li>
                      </ul>
                    </div>
                    <div className="shrink-0 md:w-64">
                      <img
                        src={nidFrelonAsiatique}
                        alt="Destruction de nids de frelon à Chaumont et communes alentours"
                        className="w-full rounded-xl object-cover"
                        loading="lazy"
                        width={640}
                        height={512}
                      />
                    </div>
                  </div>

                  <p className="mt-4">
                    Si vous remarquez la présence d'un nid chez vous à Chaumont, Langres ou n'importe où dans le 52, contactez-nous immédiatement pour un diagnostic.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Accordéon 4 */}
              <AccordionItem value="item-4" data-value="item-4" className="border-none">
                <AccordionTrigger className="flex items-center gap-3 py-4 text-left hover:no-underline [&[data-state=open]>svg.plus-icon]:hidden [&[data-state=closed]>svg.minus-icon]:hidden">
                  <Plus className="plus-icon h-5 w-5 shrink-0 text-accent" />
                  <Minus className="minus-icon h-5 w-5 shrink-0 text-accent" />
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    Comportement et Agressivité
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-foreground">
                  <div className="space-y-4">
                    <p>
                      <strong>La Guêpe :</strong> Opportuniste et curieuse, elle s'invite à vos tables. Elle devient agressive si on tente de la chasser brusquement.
                    </p>
                    <p>
                      <strong>Le Frelon Européen :</strong> Plutôt pacifique et discret, il ne pique que pour défendre son nid ou s'il est manipulé. Il est le seul actif la nuit, attiré par les lumières de vos terrasses.
                    </p>
                    <p>
                      <strong>Le Frelon Asiatique :</strong> Très territorial. Il déclenche des attaques collectives dès que l'on s'approche à moins de 5 mètres de son nid. Sa réactivité est bien supérieure aux autres espèces.
                    </p>

                    <h4 className="mt-6 text-lg font-bold text-primary">Dangerosité pour l'Homme et les Abeilles</h4>
                    <p>
                      <strong>Pour l'Homme :</strong> Le risque principal est le choc anaphylactique en cas d'allergie. La piqûre de frelon est plus profonde et injecte plus de venin, pouvant traverser des vêtements légers. Les attaques multiples des frelons asiatiques représentent un danger vital immédiat.
                    </p>
                    <p>
                      <strong>Pour les Abeilles (Le fléau) :</strong> Le frelon asiatique est un prédateur redoutable. Il pratique le "vol stationnaire" devant les ruches pour capturer les abeilles. Une colonie de frelons peut décimer une ruche entière en quelques semaines, menaçant gravement la biodiversité en Haute-Marne et la production de miel locale.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </ServicePageLayout>
    </>
  );
};

export default GuepesFrelons;
