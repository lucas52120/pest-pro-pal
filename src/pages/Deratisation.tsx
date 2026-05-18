import { Rat, Plus, Minus } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/service-deratisation.jpg";

const TITLE = "Dératisation Haute-Marne (52) | Rats & Souris | G&F Nuisibles";
const DESCRIPTION =
  "Dératisation en Haute-Marne (52) : élimination rats & souris pour particuliers et professionnels. Diagnostic GRATUIT, intervention 7j/7. Devis immédiat.";
const URL = "https://gf-nuisibles.fr/deratisation";

const FAQ_ITEMS = [
  {
    question: "Quels sont les signes d'une infestation de rats ou de souris ?",
    answer:
      "Bruits de grattage la nuit dans les cloisons, plafonds ou faux plafonds ; crottes noires en forme de grain de riz (souris) ou plus grosses (rats) le long des murs ; traces de grignotage sur câbles électriques, emballages alimentaires, plinthes ou isolants ; odeur d'urine forte et persistante ; traces de pas ou de queue dans la poussière. À la moindre alerte, contactez G&F Nuisibles au 07.65.25.67.92 pour un diagnostic gratuit à Chaumont, Langres, Saint-Dizier ou partout en Haute-Marne (52).",
  },
  {
    question: "Quels sont les risques sanitaires liés aux rongeurs ?",
    answer:
      "Les rats et souris transmettent de nombreuses maladies graves : leptospirose (par l'urine), salmonellose, hantavirus, fièvre par morsure de rat. Ils contaminent les denrées alimentaires et les surfaces de travail. Leurs déjections provoquent des allergies et des problèmes respiratoires. Ils rongent les câbles électriques (risque d'incendie : 25% des incendies d'origine inconnue selon les pompiers), les canalisations et la structure des bâtiments.",
  },
  {
    question: "Combien coûte une dératisation en Haute-Marne ?",
    answer:
      "Tarifs G&F Nuisibles : Diagnostic & devis 100% GRATUIT. Particulier — dératisation appartement / maison dès 90€. Intervention complète maison avec garantie : 150€ à 250€ selon surface et niveau d'infestation. Professionnels (restaurants, agroalimentaire, collectivités) : contrat annuel HACCP sur devis. Toutes nos interventions incluent rapport, traçabilité produits, plan de prévention et passage de contrôle.",
  },
  {
    question: "Combien de temps dure une intervention de dératisation ?",
    answer:
      "Le premier passage dure entre 45 minutes et 2 heures selon la surface et l'accessibilité. La dératisation complète d'une infestation établie nécessite généralement 2 à 3 passages espacés de 7 à 15 jours, le temps que les rongeurs consomment les appâts et que la colonie soit totalement éradiquée. Un contrôle final valide la fin de l'infestation.",
  },
  {
    question: "Les produits utilisés sont-ils dangereux pour les enfants et animaux ?",
    answer:
      "Nos techniciens sont certifiés Certibiocide. Tous les appâts sont disposés dans des postes d'appâtage sécurisés et inviolables, fixés au sol, inaccessibles aux enfants et animaux domestiques. Nous privilégions les solutions mécaniques (pièges) lorsque c'est pertinent. Chaque intervention fait l'objet d'un plan d'implantation et d'une fiche de sécurité.",
  },
  {
    question: "Intervenez-vous le week-end et en urgence ?",
    answer:
      "Oui. G&F Nuisibles intervient 7j/7 sur toute la Haute-Marne (52) et les départements limitrophes (Vosges 88, Meuse 55, Côte-d'Or 21, Marne 51, Aube 10). Urgences week-end disponibles. Délai d'intervention : 24 à 48h en moyenne, plus rapide en cas d'urgence sanitaire ou pour les professionnels sous contrat.",
  },
];

const CITY_LINKS = [
  { label: "Chaumont", to: "/deratisation-chaumont" },
  { label: "Langres", to: "/deratisation-langres" },
  { label: "Saint-Dizier", to: "/deratisation-saint-dizier" },
  { label: "Joinville", to: "/deratisation-joinville" },
  { label: "Bar-sur-Aube", to: "/deratisation-bar-sur-aube" },
  { label: "Bourbonne-les-Bains", to: "/deratisation-bourbonne" },
  { label: "Wassy", to: "/deratisation-wassy" },
  { label: "Bologne", to: "/deratisation-bologne" },
  { label: "Froncles", to: "/deratisation-froncles" },
  { label: "Nogent", to: "/deratisation-nogent" },
  { label: "Chalindrey", to: "/deratisation-chalindrey" },
  { label: "Arc-en-Barrois", to: "/deratisation-arc-en-barrois" },
  { label: "Châteauvillain", to: "/deratisation-chateauvillain" },
  { label: "Montier-en-Der", to: "/deratisation-montier-en-der" },
  { label: "Semoutiers-Montsaon", to: "/deratisation-semoutiers-montsaon" },
];

const REVIEWS = [
  {
    author: "Catherine R.",
    city: "Chaumont",
    rating: 5,
    text: "Infestation de souris dans la cuisine, intervention sous 24h. Postes d'appâtage discrets et sécurisés (j'ai un chat), 3 passages et plus rien. Très pro.",
  },
  {
    author: "Pascal V.",
    city: "Saint-Dizier",
    rating: 5,
    text: "Rats dans le garage et la cave, dégâts importants sur l'isolant. G&F Nuisibles a identifié les points d'entrée, traité et conseillé sur l'étanchéité. Problème réglé.",
  },
  {
    author: "Restaurant Le Comptoir",
    city: "Langres",
    rating: 5,
    text: "Contrat annuel HACCP. Passages réguliers, rapports clairs, traçabilité parfaite pour nos audits. Équipe sérieuse et discrète, jamais devant les clients.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://gf-nuisibles.fr/#organization",
      url: "https://gf-nuisibles.fr",
      name: "G&F Nuisibles",
      image: "https://gf-nuisibles.fr/og-image.png",
      telephone: "+33765256792",
      address: {
        "@type": "PostalAddress",
        streetAddress: "27 rue principale",
        addressLocality: "Montsaon",
        postalCode: "52000",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.0856,
        longitude: 5.1858,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      sameAs: ["https://www.facebook.com/profile.php?id=61566255861001"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "27",
      },
      priceRange: "$$",
      areaServed: { "@type": "AdministrativeArea", name: "Haute-Marne (52)" },
    },
    {
      "@type": "Service",
      url: URL,
      name: "Dératisation en Haute-Marne (52) – Rats & Souris",
      provider: { "@id": "https://gf-nuisibles.fr/#organization" },
      description: DESCRIPTION,
      areaServed: [
        { "@type": "AdministrativeArea", name: "Haute-Marne (52)" },
        { "@type": "AdministrativeArea", name: "Vosges (88)" },
        { "@type": "AdministrativeArea", name: "Meuse (55)" },
        { "@type": "AdministrativeArea", name: "Côte-d'Or (21)" },
        { "@type": "AdministrativeArea", name: "Marne (51)" },
        { "@type": "AdministrativeArea", name: "Aube (10)" },
      ],
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: "90",
        highPrice: "250",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://gf-nuisibles.fr/" },
        { "@type": "ListItem", position: 2, name: "Nos services", item: "https://gf-nuisibles.fr/#services" },
        { "@type": "ListItem", position: 3, name: "Dératisation", item: URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    ...REVIEWS.map((r) => ({
      "@type": "Review",
      itemReviewed: { "@id": "https://gf-nuisibles.fr/#organization" },
      author: { "@type": "Person", name: r.author },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    })),
  ],
};

const Deratisation = () => {
  const accordionRef = useRef<HTMLDivElement>(null);

  const handleValueChange = useCallback((value: string) => {
    if (!value) return;
    setTimeout(() => {
      const el = document.querySelector(`[data-state="open"][data-value="${value}"]`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  }, []);

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={URL} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <ServicePageLayout
        icon={<Rat className="h-8 w-8" />}
        title="Dératisation en Haute-Marne (52) : élimination rats & souris"
        subtitle="Experts en dératisation pour particuliers et professionnels — diagnostic gratuit, intervention 7j/7."
        heroImage={heroImage}
        sidebarImage={heroImage}
        serviceCallTitle="VOTRE LOGEMENT OU LOCAL PROFESSIONNEL SUBIT UNE INVASION DE RATS OU DE RONGEURS ?"
        serviceCallSubtitle="CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DE LA DÉRATISATION !"
        problem="Des bruits dans les cloisons ? Des traces de grignotage sur les câbles ou les emballages ? La présence de rongeurs est un risque sanitaire majeur (leptospirose, salmonellose, hantavirus) et peut causer des dégâts matériels considérables, dont des incendies par câbles rongés."
        expertise="G&F Nuisibles intervient rapidement pour éliminer rats et souris de votre habitation ou de vos locaux professionnels en Haute-Marne (52). Nos techniciens sont certifiés Certibiocide. Méthodes sécurisées pour les foyers avec enfants et animaux domestiques."
        method="Diagnostic complet pour identifier les points d'entrée et les zones de passage. Pose de dispositifs sécurisés (postes d'appâtage inviolables, pièges mécaniques). Rebouchage des accès, conseils de prévention, contrôle final et passage de suivi."
        engagement="Discrétion assurée, véhicules non logotés sur demande. Garantie de résultat avec suivi post-intervention. Contrats d'entretien HACCP disponibles pour restaurants, agroalimentaire et collectivités."
      >
        {/* Tarifs */}
        <section className="section-padding pb-0">
          <div className="container-narrow">
            <h2 className="mb-6 font-heading text-3xl font-extrabold text-primary md:text-4xl">
              Tarifs dératisation Haute-Marne — Devis gratuit
            </h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Chez G&F Nuisibles, la transparence est une priorité. Voici nos tarifs indicatifs pour la dératisation en Haute-Marne et départements limitrophes :
            </p>
            <ul className="mb-6 space-y-3 leading-relaxed text-muted-foreground">
              <li>🔍 <strong>Diagnostic & devis :</strong> 100% GRATUIT — sans engagement.</li>
              <li>🏠 <strong>Dératisation appartement / maison :</strong> à partir de <strong>90€</strong>.</li>
              <li>🏡 <strong>Maison complète (multi-passages, garantie) :</strong> entre <strong>150€ et 250€</strong> selon surface et niveau d'infestation.</li>
              <li>🏢 <strong>Professionnels (HACCP) :</strong> contrat annuel sur devis — restaurants, agroalimentaire, collectivités.</li>
              <li>⏰ <strong>Urgence week-end / soirée :</strong> majoration applicable, devis communiqué avant intervention.</li>
            </ul>
            <p className="leading-relaxed text-muted-foreground">
              Chaque intervention inclut le rapport, la traçabilité des produits Certibiocide et un plan de prévention personnalisé. Appelez-nous au{" "}
              <a href="tel:0765256792" className="font-bold text-primary underline">07.65.25.67.92</a> pour votre devis.
            </p>
          </div>
        </section>

        {/* Signes & risques */}
        <section className="section-padding pb-0">
          <div className="container-narrow">
            <h2 className="mb-6 font-heading text-3xl font-extrabold text-primary md:text-4xl">
              Reconnaître une infestation de rats ou de souris
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="mb-3 font-heading text-xl font-bold text-primary">Les signes qui ne trompent pas</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Bruits de grattage nocturnes dans les cloisons ou plafonds</li>
                  <li>• Crottes noires (grain de riz pour souris, plus grosses pour rats)</li>
                  <li>• Grignotage sur câbles, emballages, plinthes, isolants</li>
                  <li>• Odeur d'urine forte et persistante</li>
                  <li>• Traces de gras le long des plinthes (rats)</li>
                  <li>• Nids de papier, tissu ou laine de verre déchiquetés</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="mb-3 font-heading text-xl font-bold text-primary">Risques sanitaires & matériels</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Leptospirose</strong> (urine de rat, parfois mortelle)</li>
                  <li>• <strong>Salmonellose</strong> et <strong>hantavirus</strong></li>
                  <li>• Contamination des denrées alimentaires</li>
                  <li>• <strong>Risque d'incendie</strong> par câbles électriques rongés (≈25% des incendies d'origine inconnue)</li>
                  <li>• Dégradation isolants, plomberie, structure</li>
                  <li>• Allergies et asthme liés aux déjections</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Rats Haute-Marne */}
        <section className="section-padding pb-0">
          <div className="container-narrow">
            <h2 className="mb-6 font-heading text-3xl font-extrabold text-primary md:text-4xl">
              Les rongeurs présents en Haute-Marne
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                <strong>Le rat brun (Rattus norvegicus) :</strong> aussi appelé rat d'égout, c'est le plus fréquent en Haute-Marne. De grande taille (20–25 cm sans la queue), il vit dans les égouts, caves, sous-sols, granges et zones humides. Excellent nageur, il colonise facilement les bâtiments par les canalisations.
              </p>
              <p>
                <strong>Le rat noir (Rattus rattus) :</strong> plus petit et plus agile, il préfère les hauteurs : combles, greniers, toitures, faux plafonds. Présent surtout dans les centres anciens de Chaumont, Langres et Saint-Dizier.
              </p>
              <p>
                <strong>La souris domestique (Mus musculus) :</strong> petite (7–10 cm), elle s'introduit par des ouvertures de seulement 6 mm. Très prolifique (jusqu'à 8 portées par an), elle colonise rapidement cuisines, garages, dépendances et exploitations agricoles haut-marnaises.
              </p>
              <p>
                <strong>Le mulot et le campagnol :</strong> rongeurs des champs, ils s'invitent dans les habitations rurales et causent des dégâts dans les jardins, granges et silos agricoles.
              </p>
            </div>
          </div>
        </section>

        {/* Méthode 4 étapes */}
        <section className="section-padding pb-0">
          <div className="container-narrow">
            <h2 className="mb-6 font-heading text-3xl font-extrabold text-primary md:text-4xl">
              Notre méthode de dératisation en 4 étapes
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { n: "1", t: "Diagnostic gratuit", d: "Inspection complète du site : identification de l'espèce, des points d'entrée, des zones de nidification et de passage, évaluation du niveau d'infestation." },
                { n: "2", t: "Traitement ciblé", d: "Pose de postes d'appâtage sécurisés inviolables aux endroits stratégiques, pièges mécaniques selon le contexte, produits Certibiocide homologués." },
                { n: "3", t: "Sécurisation", d: "Identification et rebouchage des points d'entrée (canalisations, fissures, grilles), conseils sur l'étanchéité, le stockage des denrées et l'hygiène." },
                { n: "4", t: "Suivi & contrôle", d: "Passage de contrôle 7 à 15 jours après pour évaluer l'efficacité, recharger les postes si nécessaire et valider l'éradication complète." },
              ].map((s) => (
                <div key={s.n} className="rounded-xl border-l-4 border-accent bg-slate-50 p-6">
                  <div className="mb-2 font-heading text-3xl font-extrabold text-accent">{s.n}</div>
                  <h3 className="mb-2 font-heading text-xl font-bold text-primary">{s.t}</h3>
                  <p className="text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendrier d'activité */}
        <section className="section-padding pb-0">
          <div className="container-narrow">
            <h2 className="mb-6 font-heading text-3xl font-extrabold text-primary md:text-4xl">
              Quand intervenir ? Calendrier d'activité des rongeurs
            </h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Contrairement aux idées reçues, les rats et souris sont actifs toute l'année. Mais certaines périodes connaissent des pics d'infestation en Haute-Marne :
            </p>
            <div className="space-y-4">
              {[
                { p: "Automne (septembre – novembre)", d: "Pic d'intrusion N°1 : les rongeurs cherchent un abri chaud pour l'hiver. Les premières gelées les poussent à entrer dans les habitations, granges et hangars." },
                { p: "Hiver (décembre – février)", d: "Période de forte présence dans les bâtiments chauffés. Les colonies se développent à l'abri du froid, souvent dans les combles, caves et faux plafonds." },
                { p: "Printemps (mars – mai)", d: "Reproduction intense. Une femelle souris peut avoir jusqu'à 8 portées de 6 à 8 petits. Une infestation négligée explose rapidement." },
                { p: "Été (juin – août)", d: "Présence accrue à l'extérieur (granges, silos, exploitations agricoles). Période idéale pour les contrats de prévention en agroalimentaire et collectivités." },
              ].map((s) => (
                <div key={s.p} className="rounded-xl border-l-4 border-accent bg-slate-50 p-5">
                  <h3 className="mb-1 font-heading text-lg font-bold text-primary">{s.p}</h3>
                  <p className="text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pros */}
        <section className="section-padding pb-0">
          <div className="container-narrow">
            <h2 className="mb-6 font-heading text-3xl font-extrabold text-primary md:text-4xl">
              Dératisation professionnelle : HACCP, agroalimentaire, collectivités
            </h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              G&F Nuisibles accompagne les professionnels de Haute-Marne avec des prestations conformes aux normes <strong>HACCP</strong> et <strong>ISO 22000</strong>. Nous travaillons avec :
            </p>
            <ul className="mb-6 space-y-2 leading-relaxed text-muted-foreground">
              <li>🍽️ <strong>Restaurants, brasseries, hôtels</strong> — contrats annuels avec passages réguliers, plans d'implantation, traçabilité produits, rapports d'intervention pour vos audits.</li>
              <li>🏭 <strong>Industries agroalimentaires</strong> — protocoles stricts conformes aux audits IFS, BRC et clients.</li>
              <li>🏥 <strong>Collectivités, EHPAD, écoles, mairies</strong> — interventions discrètes, hors présence du public, produits adaptés aux établissements sensibles.</li>
              <li>🏗️ <strong>Bailleurs sociaux, syndics, copropriétés</strong> — gestion des parties communes, vide-ordures, locaux techniques.</li>
              <li>🚜 <strong>Exploitations agricoles</strong> — silos, granges, étables, stockages céréales.</li>
            </ul>
            <p className="leading-relaxed text-muted-foreground">
              Chaque contrat inclut un classeur sanitaire à jour, fiches de données de sécurité, plan d'implantation des postes et registre des interventions — éléments indispensables lors d'un contrôle DDPP.
            </p>
          </div>
        </section>

        {/* Réglementation */}
        <section className="section-padding pb-0">
          <div className="container-narrow">
            <h2 className="mb-6 font-heading text-3xl font-extrabold text-primary md:text-4xl">
              Réglementation & certifications
            </h2>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                L'usage de produits rodenticides est strictement encadré par la <strong>réglementation européenne biocide (BPR n°528/2012)</strong> et l'<strong>arrêté du 9 octobre 2013</strong>. Seuls les professionnels titulaires du certificat <strong>Certibiocide</strong> (catégorie TP14 — rodenticides) sont habilités à acheter et appliquer ces produits.
              </p>
              <p>
                G&F Nuisibles est <strong>certifié Certibiocide</strong>, assuré en responsabilité civile professionnelle et applique l'ensemble des règles relatives à la lutte intégrée contre les nuisibles (IPM — Integrated Pest Management) : diagnostic, action mécanique privilégiée, produit en dernier recours, dosage minimal efficace, traçabilité complète.
              </p>
              <p>
                Pour les établissements alimentaires, la lutte contre les nuisibles est <strong>obligatoire</strong> (Règlement CE 852/2004 et Paquet Hygiène). L'absence de plan de lutte est sanctionnée lors des contrôles DDPP.
              </p>
            </div>
          </div>
        </section>

        {/* Avis */}
        <section className="section-padding pb-0">
          <div className="container-narrow">
            <h2 className="mb-6 font-heading text-3xl font-extrabold text-primary md:text-4xl">
              Avis clients en Haute-Marne
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {REVIEWS.map((r) => (
                <div key={r.author} className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
                  <div className="mb-2 text-accent">{"★".repeat(r.rating)}</div>
                  <p className="mb-3 italic text-muted-foreground">« {r.text} »</p>
                  <p className="font-heading text-sm font-bold text-primary">{r.author} — {r.city}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding pb-0">
          <div className="container-narrow">
            <h2 className="mb-8 font-heading text-3xl font-extrabold text-primary md:text-4xl">
              Questions fréquentes — Dératisation
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-4"
              ref={accordionRef}
              onValueChange={handleValueChange}
            >
              {FAQ_ITEMS.map((faq, i) => (
                <AccordionItem key={i} value={`q${i}`} data-value={`q${i}`} className="border-none">
                  <AccordionTrigger className="justify-start gap-3 py-5 text-left hover:no-underline [&[data-state=open]>svg.plus-icon]:hidden [&[data-state=closed]>svg.minus-icon]:hidden [&>svg.chevron]:hidden">
                    <Plus className="plus-icon h-5 w-5 shrink-0 text-accent" />
                    <Minus className="minus-icon h-5 w-5 shrink-0 text-accent" />
                    <h3 className="font-heading text-xl font-bold text-foreground">{faq.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-foreground">
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Interventions par ville */}
        <section className="section-padding">
          <div className="container-narrow">
            <h2 className="mb-6 font-heading text-3xl font-extrabold text-primary md:text-4xl">
              Dératisation par ville en Haute-Marne
            </h2>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              G&F Nuisibles intervient pour la dératisation dans toute la Haute-Marne (52) et les départements limitrophes. Cliquez sur votre ville pour découvrir notre service local :
            </p>
            <ul className="flex flex-wrap gap-2">
              {CITY_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-block rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Dératisation {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ServicePageLayout>
    </>
  );
};

export default Deratisation;