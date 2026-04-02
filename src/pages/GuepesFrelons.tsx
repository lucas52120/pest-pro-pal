import { Zap, Home, TreePine, Plus } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImage from "@/assets/service-guepes.jpg";
import comparatifFrelons from "@/assets/comparatif-frelons.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "Quelles différences entre frelon européen et frelon asiatique ?",
    answer:
      "Il est essentiel de savoir les distinguer, car leur comportement et la dangerosité du nid diffèrent. À Chaumont, et ses communes alentour en Haute-Marne, nous rencontrons de plus en plus de frelons asiatiques, particulièrement agressifs près de leur colonie. Le Frelon Européen (Vespa crabro) mesure entre 25 et 35 mm. Son corps est taché de roux, de noir et de jaune avec des pattes brunes. Il est plutôt pacifique sauf si l'on s'approche trop près du nid. Le Frelon Asiatique (Vespa velutina) est plus petit (20 à 30 mm), très sombre, avec un thorax noir, un segment abdominal orangé et surtout des pattes aux extrémités jaunes.",
  },
  {
    question:
      "Caractéristiques physiques : comment reconnaître l'insecte qui vous envahit ?",
    answer:
      "La Guêpe (Vespula) est petite et élancée (10-19 mm), jaune vif et noir profond. Le Frelon Européen (Vespa crabro) est le géant (25-35 mm) avec des teintes rousses et un abdomen très jaune rayé de noir. Le Frelon Asiatique (Vespa velutina) est plus sombre et plus petit (20-30 mm) avec un thorax noir mat, une face orangée et des pattes aux extrémités jaune vif. Les guêpes nichent dans le sol ou les fissures, le frelon européen dans les cavités sombres (greniers, cheminées), le frelon asiatique commence par un nid primaire sous un abri puis migre en hauteur.",
  },
  {
    question: "Comment déceler la présence d'un nid chez vous ?",
    answer:
      "Parfois, le nid est invisible, caché dans une cloison ou sous une toiture. Les signes d'alerte sont : un va-et-vient incessant d'insectes au même endroit, un bruit de grattage ou bourdonnement sourd derrière un plafond ou une cloison, et la présence de nids primaires au printemps (taille d'une orange) qui peuvent devenir des sphères de papier mâché d'un mètre de haut. Si vous remarquez la présence d'un nid chez vous à Chaumont, Langres ou n'importe où dans le 52, contactez-nous immédiatement pour un diagnostic.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://pest-pro-pal.lovable.app/#organization",
      name: "G&F Nuisibles",
      image: "https://pest-pro-pal.lovable.app/logo-gf.svg",
      telephone: "+33788174586",
      email: "contact@gf-nuisibles.fr",
      address: {
        "@type": "PostalAddress",
        streetAddress: "27 rue principale",
        addressLocality: "Montsaon",
        postalCode: "52000",
        addressCountry: "FR",
      },
      priceRange: "$$",
    },
    {
      "@type": "Service",
      name: "Destruction de nids de guêpes et frelons en Haute-Marne",
      provider: {
        "@id": "https://pest-pro-pal.lovable.app/#organization",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Haute-Marne (52)",
      },
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

const GuepesFrelons = () => (
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
      {/* FAQ Expert Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-8 shadow-sm">
            <h2 className="mb-8 text-center font-heading text-3xl font-extrabold text-primary">
              FAQ / Informations Experts
            </h2>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {/* Accordéon 1 */}
              <AccordionItem value="differences" className="rounded-lg border border-slate-200 bg-white px-6">
                <AccordionTrigger className="hover:no-underline [&>svg]:text-accent">
                  <h3 className="text-left font-heading text-lg font-bold text-primary">
                    Quelles différences entre frelon européen et frelon asiatique ?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Il est essentiel de savoir les distinguer, car leur comportement et la dangerosité du nid diffèrent.
                    À Chaumont, et ses communes alentour en Haute-Marne, nous rencontrons de plus en plus de frelons
                    asiatiques, particulièrement agressifs près de leur colonie.
                  </p>
                  <div className="space-y-3">
                    <p>
                      <strong className="text-primary">Le Frelon Européen (Vespa crabro) :</strong> C'est le plus grand
                      (entre 25 et 35 mm). Il ressemble à une grosse guêpe. Son corps est taché de roux, de noir et de
                      jaune. Ses pattes sont brunes. Il est plutôt pacifique, sauf si l'on s'approche trop près du nid.
                    </p>
                    <p>
                      <strong className="text-primary">Le Frelon Asiatique (Vespa velutina) :</strong> Plus petit que son
                      cousin européen (entre 20 et 30 mm), il est très sombre. On le reconnaît à son thorax noir, son
                      segment abdominal orangé et surtout ses pattes aux extrémités jaunes (d'où son surnom de frelon à
                      pattes jaunes).
                    </p>
                  </div>
                  <figure className="mt-4">
                    <img
                      src={comparatifFrelons}
                      alt="Comparatif frelon européen et asiatique - Expertise G&F Nuisibles Haute-Marne"
                      className="w-full rounded-lg"
                      loading="lazy"
                    />
                    <figcaption className="mt-2 text-center text-sm italic text-muted-foreground/70">
                      Comparatif visuel : frelon européen vs frelon asiatique
                    </figcaption>
                  </figure>
                </AccordionContent>
              </AccordionItem>

              {/* Accordéon 2 */}
              <AccordionItem value="identification" className="rounded-lg border border-slate-200 bg-white px-6">
                <AccordionTrigger className="hover:no-underline [&>svg]:text-accent">
                  <h3 className="text-left font-heading text-lg font-bold text-primary">
                    Caractéristiques physiques : comment reconnaître l'insecte qui vous envahit ?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="space-y-6 text-muted-foreground leading-relaxed">
                  {/* Morphologie */}
                  <div>
                    <h4 className="mb-3 font-heading text-base font-bold text-primary">
                      🐝 Fiche d'identité et Morphologie
                    </h4>
                    <div className="space-y-2">
                      <p>
                        <strong className="text-primary">La Guêpe (Vespula) :</strong> Petite et élancée (10-19 mm),
                        elle arbore un jaune vif et un noir profond sans poils apparents. Sa "taille de guêpe" est sa
                        signature.
                      </p>
                      <p>
                        <strong className="text-primary">Le Frelon Européen (Vespa crabro) :</strong> Le géant de nos
                        campagnes (25-35 mm). Teintes rousses sur le thorax et les pattes, abdomen très jaune rayé de
                        noir. Son vol produit un bourdonnement très grave.
                      </p>
                      <p>
                        <strong className="text-primary">Le Frelon Asiatique (Vespa velutina) :</strong> Silhouette plus
                        sombre et plus petite (20-30 mm). Thorax noir mat, face orangée, et surtout : pattes aux
                        extrémités jaune vif.
                      </p>
                    </div>
                  </div>

                  {/* Type de nid */}
                  <div>
                    <h4 className="mb-3 font-heading text-base font-bold text-primary">🏠 Type de nid</h4>
                    <p className="mb-3">
                      Chaque espèce a ses préférences pour installer sa colonie. Voici où les débusquer :
                    </p>
                    <div className="space-y-2">
                      <p>
                        <strong className="text-primary">Guêpes :</strong> Souvent dans le sol (terriers), les fissures
                        de murs ou sous les tuiles. Le nid est gris "papier journal".
                      </p>
                      <p>
                        <strong className="text-primary">Frelon Européen :</strong> Cherche l'obscurité. On le trouve dans
                        les cavités naturelles (arbres creux) ou les espaces confinés (greniers, cheminées, hangars).
                      </p>
                      <p>
                        <strong className="text-primary">Frelon Asiatique :</strong> Débute par un petit nid primaire sous
                        un abri (avancée de toit, linteau), puis migre souvent en hauteur dans la cime des arbres pour
                        former une énorme sphère pouvant atteindre 1 mètre.
                      </p>
                    </div>
                  </div>

                  {/* Comportement */}
                  <div>
                    <h4 className="mb-3 font-heading text-base font-bold text-primary">⚡ Comportement et Agressivité</h4>
                    <div className="space-y-2">
                      <p>
                        <strong className="text-primary">La Guêpe :</strong> Opportuniste et curieuse, elle s'invite à vos
                        tables. Elle devient agressive si on tente de la chasser brusquement.
                      </p>
                      <p>
                        <strong className="text-primary">Le Frelon Européen :</strong> Plutôt pacifique et discret, il ne
                        pique que pour défendre son nid ou s'il est manipulé. Il est le seul actif la nuit, attiré par les
                        lumières de vos terrasses.
                      </p>
                      <p>
                        <strong className="text-primary">Le Frelon Asiatique :</strong> Très territorial. Il déclenche des
                        attaques collectives dès que l'on s'approche à moins de 5 mètres de son nid. Sa réactivité est bien
                        supérieure aux autres espèces.
                      </p>
                    </div>
                  </div>

                  {/* Dangerosité */}
                  <div>
                    <h4 className="mb-3 font-heading text-base font-bold text-primary">
                      ⚠️ Dangerosité pour l'Homme et les Abeilles
                    </h4>
                    <div className="space-y-2">
                      <p>
                        <strong className="text-primary">Pour l'Homme :</strong> Le risque principal est le choc
                        anaphylactique en cas d'allergie. La piqûre de frelon est plus profonde et injecte plus de venin,
                        pouvant traverser des vêtements légers. Les attaques multiples des frelons asiatiques représentent
                        un danger vital immédiat.
                      </p>
                      <p>
                        <strong className="text-primary">Pour les Abeilles (Le fléau) :</strong> Le frelon asiatique est un
                        prédateur redoutable. Il pratique le "vol stationnaire" devant les ruches pour capturer les
                        abeilles. Une colonie de frelons peut décimer une ruche entière en quelques semaines, menaçant
                        gravement la biodiversité en Haute-Marne et la production de miel locale.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Accordéon 3 */}
              <AccordionItem value="detection" className="rounded-lg border border-slate-200 bg-white px-6">
                <AccordionTrigger className="hover:no-underline [&>svg]:text-accent">
                  <h3 className="text-left font-heading text-lg font-bold text-primary">
                    Comment déceler la présence d'un nid chez vous ?
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Parfois, le nid est invisible, caché dans une cloison ou sous une toiture. Voici les signes qui
                    doivent vous alerter :
                  </p>
                  <div className="space-y-3">
                    <p>
                      <strong className="text-primary">Le va-et-vient incessant :</strong> Si vous observez un passage
                      régulier d'insectes au même endroit (sous une tuile, dans une fissure de mur, dans un coffre de
                      volet roulant), c'est le signe d'une activité de colonie.
                    </p>
                    <p>
                      <strong className="text-primary">Le bruit :</strong> Un grattage ou un bourdonnement sourd derrière
                      un plafond ou une cloison placo indique souvent la construction d'un nid.
                    </p>
                  </div>

                  {/* Lieux de nidification en 2 colonnes */}
                  <div>
                    <h4 className="mb-4 font-heading text-base font-bold text-primary">
                      Où se cachent les nids ?
                    </h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                        <div className="mb-3 flex items-center gap-2 font-heading font-bold text-primary">
                          <Home className="h-5 w-5 text-accent" />
                          Espaces Bâtis
                        </div>
                        <ul className="space-y-1 text-sm">
                          <li>• Greniers et combles</li>
                          <li>• Hangars et remises</li>
                          <li>• Coffres de volets roulants</li>
                          <li>• Rebords et avant-toits</li>
                          <li>• Linteaux et fissures</li>
                        </ul>
                      </div>
                      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                        <div className="mb-3 flex items-center gap-2 font-heading font-bold text-primary">
                          <TreePine className="h-5 w-5 text-accent" />
                          Espaces Naturels
                        </div>
                        <ul className="space-y-1 text-sm">
                          <li>• Cime des arbres</li>
                          <li>• Creux d'arbres</li>
                          <li>• Terriers et galeries</li>
                          <li>• Tas de bûches et souches</li>
                          <li>• Branchages et haies</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-lg bg-accent/10 p-4 text-center">
                    <p className="font-heading font-bold text-primary">
                      Si vous remarquez la présence d'un nid chez vous à Chaumont, Langres ou n'importe où dans le 52,{" "}
                      <a href="/contact" className="text-accent underline hover:text-accent/80">
                        contactez-nous immédiatement
                      </a>{" "}
                      pour un diagnostic.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  </>
);

export default GuepesFrelons;
