import { Zap, Bug, Rat, Bird, Target } from "lucide-react";
import serviceGuepes from "@/assets/service-guepes.jpg";
import serviceDesinsectisation from "@/assets/service-desinsectisation.jpg";
import serviceDeratisation from "@/assets/service-deratisation.jpg";
import serviceDepigeonnage from "@/assets/service-depigeonnage.jpg";
import serviceTaupes from "@/assets/service-taupes.jpg";

/* ──────────────────────────────────────────────
   SEO helper — converts "Haute-Marne (52)" → "Haute-Marne 52"
   and builds the proper preposition form for descriptions:
   "Haute-Marne (52)" → "en Haute-Marne 52"
   "Aube (10)" → "dans l'Aube 10"
   etc.
   ────────────────────────────────────────────── */

function deptSeo(department: string): string {
  return department.replace("(", "").replace(")", "").trim();
}

function deptSeoPrep(department: string): string {
  const raw = deptSeo(department);
  const deptMap: Record<string, string> = {
    "Haute-Marne 52": "en Haute-Marne 52",
    "Aube 10": "dans l'Aube 10",
    "Côte-d'Or 21": "en Côte-d'Or 21",
    "Marne 51": "dans la Marne 51",
    "Vosges 88": "dans les Vosges 88",
    "Meurthe-et-Moselle 54": "en Meurthe-et-Moselle 54",
  };
  return deptMap[raw] || `en ${raw}`;
}

/* ──────────────────────────────────────────────
   Variation helpers — each city gets a variation
   index (0-3) that selects a unique set of
   phrasing, synonyms and sentence order.
   ────────────────────────────────────────────── */

export const serviceDefinitions = [
  /* ═══════════════════════════════════════════
     GUÊPES & FRELONS
     ═══════════════════════════════════════════ */
  {
    slug: "guepes-frelons",
    title: "Guêpes & Frelons",
    icon: Zap,
    heroImage: serviceGuepes,
    getContent: (city: string, department: string, variation = 0) => {
      const v = variation % 4;
      const ds = deptSeo(department);
      const dp = deptSeoPrep(department);

      const metaDescriptions = [
        `Destruction nids de guêpes et frelons à ${city} ${dp}. Intervention 7j/7, diagnostic gratuit. Contactez G&F Nuisibles.`,
        `Découverte d'un nid de guêpe ou frelons à ${city} ? G&F Nuisibles, votre expert en élimination de nids ${dp}. Devis gratuit.`,
        `Élimination nids de guêpes à ${city} ${dp}. Intervention rapide et discrète. Expertise professionnelle G&F Nuisibles.`,
        `Enlèvement nids de frelons à ${city} ${dp}. Contactez G&F Nuisibles pour un diagnostic gratuit, intervention 7j/7.`,
      ];

      const intros = [
        `La présence d'un nid de guêpes ou de frelons à ${city} nécessite une action immédiate. GF Nuisibles, votre spécialiste en ${department}, intervient en urgence pour neutraliser ces colonies dangereuses. Les insectes piqueurs, en particulier les frelons asiatiques, peuvent provoquer des réactions allergiques sévères. Nos équipes effectuent un passage rapide à ${city} et ses environs pour sécuriser votre habitation ou vos locaux professionnels.`,
        `Votre sécurité à ${city} est notre priorité. GF Nuisibles assure la suppression de nids de guêpes et de frelons dans tout le ${department}. Ces envahisseurs volants représentent un risque sanitaire considérable, surtout en période estivale lorsque les colonies atteignent leur pic d'activité. Nous garantissons une éradication complète et un environnement sain pour votre famille ou vos collaborateurs à ${city}.`,
        `Fort de son expertise technique, GF Nuisibles à ${city} vous propose l'élimination définitive des nids de guêpes et frelons en ${department}. Nos techniciens Certibiocide maîtrisent le retrait de nids en toiture, cheminée, arbre ou sous-sol. Chaque opération à ${city} est menée avec du matériel professionnel et des produits homologués pour une neutralisation sûre et durable.`,
        `À ${city}, en ${department}, les nids de guêpes et de frelons sont fréquents dès le printemps. GF Nuisibles vous offre une assistance technique rapide pour supprimer ces indésirables avant qu'ils ne deviennent un danger. Notre connaissance du terrain à ${city} nous permet d'intervenir efficacement, que ce soit en zone urbaine ou rurale.`,
      ];

      const expertises = [
        `Nos experts à ${city} en ${department} utilisent du matériel professionnel pour atteindre les nids en hauteur ou sous toiture. Qu'il s'agisse d'une cheminée, d'un arbre ou d'un toit, nous assurons un retrait sécurisé. Nos produits homologués respectent l'environnement. GF Nuisibles vous garantit la suppression totale du nid et un traitement préventif contre toute réinstallation.`,
        `GF Nuisibles déploie à ${city} des techniques de neutralisation adaptées à chaque situation : accès en hauteur, cavités murales, combles ou dépendances. Nos techniciens certifiés en ${department} utilisent des insecticides professionnels homologués et assurent une éradication complète. Nous vous conseillons ensuite sur les gestes préventifs à adopter.`,
        `L'expertise de GF Nuisibles en ${department} nous permet d'intervenir à ${city} même dans les configurations les plus complexes : toitures élevées, structures industrielles, espaces confinés. Chaque opération est réalisée avec des équipements de protection individuelle et des biocides conformes à la réglementation européenne.`,
        `À ${city}, nos professionnels identifient l'espèce (guêpe commune, frelon européen, frelon asiatique) avant de procéder à l'élimination définitive du nid. Cette approche ciblée, propre à GF Nuisibles en ${department}, garantit un traitement adapté et une suppression durable sans risque pour les pollinisateurs bénéfiques.`,
      ];

      const methods = [
        `Après un diagnostic précis sur place à ${city}, nous procédons à la neutralisation complète du nid. L'intervention dure généralement moins d'une heure. Nous vous conseillons également sur les mesures préventives pour protéger durablement votre habitation ou vos locaux professionnels en ${department}.`,
        `Notre protocole à ${city} débute par une inspection minutieuse pour localiser et évaluer le nid. Nous appliquons ensuite un traitement ciblé permettant l'élimination définitive de la colonie. Un contrôle post-intervention est systématiquement réalisé pour vérifier l'efficacité du traitement en ${department}.`,
        `Le passage de nos techniciens à ${city} se déroule en trois étapes : repérage du nid, application d'un biocide professionnel et retrait sécurisé de la structure. Nous nettoyons et désinfectons la zone traitée pour éviter toute recolonisation sur votre propriété en ${department}.`,
        `À ${city}, chaque opération commence par un diagnostic terrain. GF Nuisibles applique ensuite un produit professionnel adapté à l'espèce identifiée, puis procède au retrait mécanique du nid. Un rapport d'intervention vous est remis avec des recommandations de prévention spécifiques à votre situation en ${department}.`,
      ];

      return {
        metaDescription: metaDescriptions[v],
        seoTitle: `Guêpes & Frelons ${city} ${ds} | G&F Nuisibles`,
        serviceCallTitle: `VOTRE LOGEMENT OU LOCAL PROFESSIONNEL SUBIT UNE INVASION DE GUÊPES OU DE FRELONS ?`,
        serviceCallSubtitle: `CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DE LA DESTRUCTION DE NIDS DE GUÊPES ET FRELONS DU CÔTÉ DE ${city.toUpperCase()} !`,
        intro: intros[v],
        expertise: expertises[v],
        method: methods[v],
        cta: `Contactez G&F Nuisibles au 07.88.17.45.86 pour une intervention rapide à ${city} et ses environs en ${department}. Diagnostic gratuit, intervention garantie.`,
      };
    },
  },

  /* ═══════════════════════════════════════════
     DÉSINSECTISATION
     ═══════════════════════════════════════════ */
  {
    slug: "desinsectisation",
    title: "Désinsectisation",
    icon: Bug,
    heroImage: serviceDesinsectisation,
    getContent: (city: string, department: string, variation = 0) => {
      const v = variation % 4;
      const ds = deptSeo(department);
      const dp = deptSeoPrep(department);

      const metaDescriptions = [
        `Traitement punaises de lit et blattes à ${city} ${dp}. Intervention 7j/7, devis gratuit. Contactez G&F Nuisibles.`,
        `Invasion d'insectes à ${city} ? G&F Nuisibles, votre expert en désinsectisation ${dp}. Diagnostic gratuit, discrétion totale.`,
        `Extermination insectes rampants à ${city} ${dp}. Intervention rapide, expertise professionnelle. Appelez G&F Nuisibles.`,
        `Traitement punaises de lit et cafards à ${city} ${dp}. G&F Nuisibles intervient sous 24h. Devis gratuit, discrétion assurée.`,
      ];

      const intros = [
        `Une infestation d'insectes à ${city} exige une réponse rapide et professionnelle. GF Nuisibles, expert en désinsectisation en ${department}, élimine cafards, punaises de lit, blattes et autres parasites. Ces envahisseurs se reproduisent à grande vitesse et constituent un risque sanitaire majeur pour votre foyer ou vos locaux à ${city}. Notre diagnostic précis permet un traitement ciblé et efficace.`,
        `La présence d'insectes indésirables dans votre logement ou commerce à ${city} compromet votre hygiène et votre tranquillité. GF Nuisibles en ${department} met en œuvre des solutions d'éradication professionnelles contre les cafards, blattes, punaises de lit et autres parasites. Nos techniciens certifiés assurent une suppression complète et durable à ${city}.`,
        `GF Nuisibles à ${city} vous protège contre les invasions d'insectes nuisibles en ${department}. Que vous soyez confronté à des cafards, des punaises de lit ou des blattes, nos traitements professionnels garantissent une élimination définitive. Notre expertise terrain à ${city} nous permet d'identifier rapidement le type d'infestation et d'appliquer le protocole le plus adapté.`,
        `À ${city}, en ${department}, les infestations d'insectes peuvent survenir à tout moment de l'année. GF Nuisibles vous apporte une assistance technique spécialisée pour neutraliser cafards, punaises de lit, blattes et autres nuisibles. Notre approche combine diagnostic approfondi et traitements professionnels homologués pour une élimination totale à ${city}.`,
      ];

      const expertises = [
        `À ${city} en ${department}, nos techniciens certifiés utilisent des traitements adaptés à chaque type d'insecte. Nos solutions sont efficaces, durables et respectueuses de votre santé. Nous intervenons chez les particuliers comme chez les professionnels (hôtels, restaurants, collectivités). GF Nuisibles garantit une discrétion totale lors de ses interventions à ${city}.`,
        `GF Nuisibles déploie à ${city} des protocoles de désinsectisation conformes aux normes Certibiocide. En ${department}, nos techniciens maîtrisent les techniques de gel, pulvérisation et nébulisation pour une éradication complète. Chaque traitement est adapté à l'espèce identifiée et à l'environnement traité : habitation, restaurant, hôtel ou collectivité.`,
        `Notre expertise en ${department} nous permet d'intervenir à ${city} sur tous types d'infestations. Nous utilisons des biocides professionnels de dernière génération, sans danger pour les occupants et les animaux domestiques. GF Nuisibles assure un suivi rigoureux après chaque opération pour garantir l'absence de récidive.`,
        `Les techniciens GF Nuisibles à ${city} sont formés aux dernières méthodes d'élimination des insectes nuisibles. En ${department}, nous adaptons chaque traitement à la configuration des lieux et au degré d'infestation. Notre approche respecte les normes sanitaires les plus strictes tout en assurant une suppression définitive des parasites.`,
      ];

      const methods = [
        `Inspection approfondie de vos locaux à ${city} pour identifier l'espèce et les zones infestées. Application de traitements ciblés (gel, pulvérisation, nébulisation) avec un suivi post-traitement assuré pour garantir l'élimination complète. Nous vous accompagnons avec des conseils de prévention adaptés en ${department}.`,
        `Notre protocole à ${city} démarre par un diagnostic complet de l'infestation. Nous appliquons ensuite un traitement professionnel adapté : gel appât pour les cafards, traitement thermique ou chimique pour les punaises de lit. Un contrôle de vérification est programmé pour valider la suppression totale en ${department}.`,
        `Le passage de nos techniciens à ${city} comprend : identification précise des espèces présentes, cartographie des foyers d'infestation, application de biocides professionnels ciblés, puis suivi à 15 et 30 jours. Cette méthode garantit un taux de réussite optimal en ${department}.`,
        `À ${city}, GF Nuisibles procède en trois phases : diagnostic terrain, traitement professionnel multi-technique et suivi de contrôle. Nos interventions en ${department} s'accompagnent systématiquement de recommandations personnalisées pour prévenir toute réinfestation future.`,
      ];

      return {
        metaDescription: metaDescriptions[v],
        seoTitle: `Désinsectisation ${city} ${ds} | G&F Nuisibles`,
        serviceCallTitle: `VOTRE LOGEMENT OU LOCAL PROFESSIONNEL SUBIT UNE INVASION D'INSECTES NUISIBLES ?`,
        serviceCallSubtitle: `CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DE LA DÉSINSECTISATION DU CÔTÉ DE ${city.toUpperCase()} !`,
        intro: intros[v],
        expertise: expertises[v],
        method: methods[v],
        cta: `Appelez G&F Nuisibles au 07.88.17.45.86 pour un traitement professionnel à ${city} en ${department}. Discrétion totale, véhicules non logotés sur demande.`,
      };
    },
  },

  /* ═══════════════════════════════════════════
     DÉRATISATION
     ═══════════════════════════════════════════ */
  {
    slug: "deratisation",
    title: "Dératisation",
    icon: Rat,
    heroImage: serviceDeratisation,
    getContent: (city: string, department: string, variation = 0) => {
      const v = variation % 4;
      const ds = deptSeo(department);
      const dp = deptSeoPrep(department);

      const metaDescriptions = [
        `Extermination de rats et souris à ${city} ${dp}. Dératiseur professionnel, intervention 7j/7. Contactez G&F Nuisibles.`,
        `Problème de rats, souris ou rongeurs à ${city} ? G&F Nuisibles, votre expert en lutte contre les rongeurs ${dp}. Devis gratuit.`,
        `Stop aux rats à ${city} ${dp}. Intervention rapide et discrète, diagnostic gratuit. Expertise professionnelle G&F Nuisibles.`,
        `Dératiseur professionnel à ${city} ${dp}. G&F Nuisibles élimine rats et souris sous 24h. Devis gratuit, discrétion assurée.`,
      ];

      const intros = [
        `Des bruits de grattement dans vos murs à ${city} ? GF Nuisibles intervient en urgence en ${department} pour l'éradication de rats, souris et rongeurs. Ces nuisibles provoquent des dégâts considérables : câbles électriques rongés, isolation détruite, risques d'incendie et contamination alimentaire. Ne laissez pas la situation s'aggraver à ${city}.`,
        `La présence de rongeurs à ${city} est un problème sanitaire qui nécessite une intervention professionnelle. GF Nuisibles, spécialiste de la dératisation en ${department}, assure la suppression définitive de rats et souris dans votre habitation ou vos locaux. Nos méthodes sécurisées protègent votre famille et vos animaux domestiques à ${city}.`,
        `GF Nuisibles à ${city} met son expertise technique au service de l'élimination des rongeurs en ${department}. Rats, souris, mulots : nous identifions précisément l'espèce et les points d'accès pour un traitement ciblé et durable. Notre connaissance du terrain à ${city} nous permet de proposer des solutions adaptées à chaque configuration.`,
        `À ${city}, en ${department}, les invasions de rongeurs touchent aussi bien les particuliers que les professionnels. GF Nuisibles vous propose une assistance technique complète : diagnostic, neutralisation et prévention. Nos techniciens certifiés assurent un passage rapide et discret pour éliminer rats et souris de vos locaux à ${city}.`,
      ];

      const expertises = [
        `À ${city} en ${department}, nos techniciens utilisent des méthodes sécurisées, adaptées aux foyers avec enfants et animaux domestiques. Nous identifions les points d'entrée et mettons en place des solutions durables pour éviter toute réinfestation. GF Nuisibles vous accompagne du diagnostic à la prévention.`,
        `GF Nuisibles déploie à ${city} des dispositifs professionnels conformes aux normes en vigueur en ${department}. Postes d'appâtage sécurisés, pièges mécaniques, répulsifs ultrasoniques : nous sélectionnons la méthode la plus efficace selon l'ampleur de l'infestation et la configuration de vos locaux.`,
        `Notre expertise en dératisation à ${city} repose sur une connaissance approfondie du comportement des rongeurs en ${department}. Nous analysons les habitudes de déplacement, identifions les sources de nourriture et colmatons les accès. Cette approche globale garantit une élimination définitive et prévient toute récidive.`,
        `Les techniciens GF Nuisibles à ${city} sont formés aux protocoles de dératisation les plus avancés. En ${department}, nous combinons moyens mécaniques et chimiques (appâts rodenticides sécurisés) pour une neutralisation complète. Chaque intervention est suivie d'un rebouchage des points d'accès identifiés.`,
      ];

      const methods = [
        `Diagnostic complet à ${city} pour identifier les zones de passage et points d'entrée. Pose de dispositifs sécurisés (postes d'appâtage, pièges mécaniques). Rebouchage des accès et conseils de prévention pour une protection durable de vos locaux en ${department}.`,
        `Notre protocole à ${city} comprend : inspection intérieure et extérieure, identification des galeries et traces de passage, mise en place de postes d'appâtage sécurisés et de pièges mécaniques. Nous assurons un suivi régulier jusqu'à l'éradication totale en ${department}.`,
        `Le traitement à ${city} débute par un repérage des zones d'activité des rongeurs. GF Nuisibles installe ensuite des dispositifs professionnels adaptés et procède au colmatage des points d'entrée. Un contrôle post-intervention est programmé pour valider l'élimination complète en ${department}.`,
        `À ${city}, GF Nuisibles réalise un audit complet de vos locaux : traces de rongement, déjections, empreintes. Nous déployons un dispositif de dératisation sur mesure en ${department}, avec suivi bimensuel et rapport d'intervention détaillé pour les professionnels soumis aux normes HACCP.`,
      ];

      return {
        metaDescription: metaDescriptions[v],
        seoTitle: `Dératisation ${city} ${ds} | G&F Nuisibles`,
        serviceCallTitle: `VOTRE LOGEMENT OU LOCAL PROFESSIONNEL SUBIT UNE INVASION DE RATS OU DE RONGEURS ?`,
        serviceCallSubtitle: `CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DE LA DÉRATISATION DU CÔTÉ DE ${city.toUpperCase()} !`,
        intro: intros[v],
        expertise: expertises[v],
        method: methods[v],
        cta: `Contactez G&F Nuisibles au 07.88.17.45.86 pour une dératisation efficace à ${city} en ${department}. Discrétion assurée, garantie de résultat.`,
      };
    },
  },

  /* ═══════════════════════════════════════════
     DÉPIGEONNISATION (professionnels)
     ═══════════════════════════════════════════ */
  {
    slug: "depigeonnisation",
    title: "Dépigeonnisation",
    icon: Bird,
    heroImage: serviceDepigeonnage,
    getContent: (city: string, department: string, variation = 0) => {
      const v = variation % 4;
      const ds = deptSeo(department);
      const dp = deptSeoPrep(department);

      const metaDescriptions = [
        `Problème de pigeons à ${city} ? Pose de filets et picots professionnels ${dp}. Contactez G&F Nuisibles, devis gratuit.`,
        `Dégâts causés par les pigeons à ${city} ? G&F Nuisibles installe des systèmes de répulsion durables ${dp}. Intervention 7j/7.`,
        `Installation de picots anti-pigeons à ${city} ${dp}. Expertise professionnelle, diagnostic gratuit. Appelez G&F Nuisibles.`,
        `Pose de filets anti-pigeons à ${city} ${dp}. G&F Nuisibles, votre expert en dépigeonnisation. Devis gratuit, intervention rapide.`,
      ];

      const intros = [
        `Les pigeons envahissent vos locaux professionnels à ${city} ? GF Nuisibles, spécialiste de la dépigeonnisation en ${department}, intervient auprès des restaurants, collectivités et syndics de copropriété. Les fientes acides détériorent les façades, créent des risques sanitaires et ternissent l'image de votre établissement à ${city}. Nous mettons en place des solutions pérennes et respectueuses.`,
        `GF Nuisibles assure la protection de vos bâtiments professionnels contre les pigeons à ${city} en ${department}. Ces volatiles indésirables causent des dégradations coûteuses : corrosion des structures, obstruction des gouttières, contamination des espaces de travail. Notre expertise technique permet une suppression durable adaptée à chaque type de bâtiment à ${city}.`,
        `La prolifération des pigeons sur vos locaux à ${city} nuit à votre activité et à votre image. GF Nuisibles en ${department} propose des solutions de dépigeonnisation professionnelles pour les restaurants, hôtels, administrations et syndics. Nos dispositifs empêchent durablement les oiseaux de se poser et nicher sur vos structures à ${city}.`,
        `À ${city}, en ${department}, GF Nuisibles accompagne les professionnels confrontés aux nuisances aviaires. Nos techniciens réalisent un audit complet de vos bâtiments pour identifier les zones de nidification et déployer les dispositifs anti-pigeons les plus adaptés. Chaque intervention à ${city} est conçue pour offrir une protection durable et discrète.`,
      ];

      const expertises = [
        `GF Nuisibles utilise différentes méthodes sans blesser ni tuer les volatiles à ${city} en ${department} : installation de filets, de picots, de systèmes de répulsion laser, efficaces et discrets. Les volatiles ne pourront plus se poser ni nicher sur vos bâtiments. Nos solutions sont conformes à la réglementation et respectueuses des animaux.`,
        `À ${city}, nos techniciens déploient un arsenal complet de dispositifs anti-pigeons en ${department} : pics inox, filets polyéthylène, fils tendus électrifiés et répulsifs olfactifs. Chaque solution est sélectionnée en fonction de l'architecture de vos bâtiments et de l'ampleur de la colonisation.`,
        `L'expertise de GF Nuisibles en ${department} nous permet d'équiper tous types de structures à ${city} : immeubles, entrepôts, monuments, bâtiments industriels. Nos installations anti-pigeons sont quasi invisibles et garantissent une protection longue durée sans nuire aux oiseaux.`,
        `Nos professionnels à ${city} maîtrisent les techniques de dépigeonnisation les plus avancées en ${department}. Nous combinons barrières physiques (pics, filets) et solutions technologiques (laser, ultrasons) pour une protection complète et pérenne de vos locaux professionnels.`,
      ];

      const methods = [
        `Audit complet de votre bâtiment à ${city}, identification des zones de nidification, installation des dispositifs adaptés (pics inox, filets, fil électrique, systèmes laser), nettoyage et désinfection des zones souillées. Nous assurons un suivi pour garantir l'efficacité durable de notre intervention en ${department}.`,
        `Notre protocole à ${city} comprend : diagnostic architectural, cartographie des zones de perchage et de nidification, installation de dispositifs sur mesure, puis nettoyage professionnel des déjections. Un contrat de maintenance peut être proposé aux professionnels en ${department}.`,
        `Le traitement à ${city} se déroule en quatre phases : inspection des façades et toitures, choix des dispositifs adaptés, pose professionnelle et désinfection des zones contaminées. GF Nuisibles fournit un rapport d'intervention détaillé aux gestionnaires de bâtiments en ${department}.`,
        `À ${city}, GF Nuisibles commence par une étude de site complète. Nous installons ensuite les dispositifs anti-pigeons adaptés à votre architecture en ${department} : pics, filets, systèmes électriques basse tension. Un nettoyage approfondi et une désinfection sont réalisés avant la remise du site.`,
      ];

      return {
        metaDescription: metaDescriptions[v],
        seoTitle: `Dépigeonnisation ${city} ${ds} | G&F Nuisibles`,
        serviceCallTitle: `G&F NUISIBLES INTERVIENT AUPRÈS DES RESTAURANTS, ÉTABLISSEMENTS PUBLICS, COLLECTIVITÉS, SYNDICS DE COPROPRIÉTÉ DU CÔTÉ DE ${city.toUpperCase()} POUR METTRE FIN AUX DÉGÂTS CAUSÉS PAR LES PIGEONS ET AUTRES OISEAUX.`,
        serviceCallSubtitle: `CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DE LA DÉPIGEONNISATION EN ${department.toUpperCase()} !`,
        intro: intros[v],
        expertise: expertises[v],
        method: methods[v],
        cta: `Appelez GF Nuisibles au 07.88.17.45.86 pour protéger vos bâtiments professionnels à ${city} en ${department}. Devis gratuit sur site, solutions pérennes garanties.`,
      };
    },
  },

  /* ═══════════════════════════════════════════
     ÉLIMINATION PIGEONS (particuliers)
     ═══════════════════════════════════════════ */
  {
    slug: "elimination-pigeons",
    title: "Élimination Pigeons",
    icon: Bird,
    heroImage: serviceDepigeonnage,
    getContent: (city: string, department: string, variation = 0) => {
      const v = variation % 4;
      const ds = deptSeo(department);
      const dp = deptSeoPrep(department);

      const metaDescriptions = [
        `Besoin d'éliminer les pigeons chez vous à ${city} ? GF Nuisibles intervient ${dp}. Devis gratuit, intervention discrète sous 24h.`,
        `Stop aux pigeons à ${city} ! Solutions pour particuliers ${dp}. Intervention rapide et discrète. Appelez GF Nuisibles.`,
        `Élimination de pigeons rapide à ${city} ${dp}. Protection durable de votre habitation, devis gratuit. GF Nuisibles.`,
        `Protégez votre maison des pigeons à ${city}. GF Nuisibles : solutions efficaces et discrètes ${dp}. Devis gratuit.`,
      ];

      const intros = [
        `Les pigeons envahissent votre toiture ou votre balcon à ${city} ? GF Nuisibles intervient chez les particuliers en ${department} pour mettre fin aux nuisances aviaires. Fientes corrosives, bruits incessants, risques sanitaires : ces volatiles indésirables dégradent votre cadre de vie à ${city}. Nous vous proposons des solutions efficaces et respectueuses pour retrouver la tranquillité.`,
        `Votre habitation à ${city} est envahie par les pigeons ? GF Nuisibles, expert en élimination de pigeons en ${department}, vous aide à protéger votre maison, appartement ou pavillon. Les déjections acides abîment vos façades et votre toiture tandis que les parasites transportés par ces oiseaux menacent votre santé à ${city}.`,
        `GF Nuisibles à ${city} accompagne les particuliers du ${department} confrontés aux nuisances des pigeons. Que vous viviez en maison, en pavillon ou en appartement, nos techniciens déploient des dispositifs adaptés pour empêcher les volatiles de se poser et nicher sur votre habitation à ${city}. Retrouvez un logement sain et préservé.`,
        `À ${city}, en ${department}, les pigeons peuvent rapidement transformer votre quotidien en cauchemar. GF Nuisibles apporte une réponse professionnelle aux particuliers : diagnostic de votre habitation, installation de protections durables et nettoyage des zones souillées. Notre assistance technique à ${city} vous garantit des résultats concrets et pérennes.`,
      ];

      const expertises = [
        `GF Nuisibles utilise différentes méthodes sans blesser ni tuer les volatiles à ${city} en ${department} : filets, picots, systèmes de répulsion laser, efficaces et discrets. Les oiseaux ne pourront plus se poser ni nicher sur votre habitation. Notre expertise nous permet d'adapter nos solutions à chaque configuration : pavillons, maisons, appartements, balcons et terrasses.`,
        `À ${city}, nos techniciens évaluent la configuration de votre logement en ${department} pour sélectionner les dispositifs les plus adaptés. Pics discrets pour les rebords de fenêtre, filets pour les balcons, répulsifs pour les toitures : chaque installation est pensée pour s'intégrer harmonieusement à votre habitation.`,
        `L'expertise de GF Nuisibles en ${department} nous permet d'intervenir à ${city} sur tous types d'habitations. Nous installons des protections anti-pigeons quasi invisibles qui respectent l'esthétique de votre logement tout en assurant une protection maximale contre les volatiles indésirables.`,
        `Nos professionnels à ${city} sont spécialisés dans la protection résidentielle contre les pigeons en ${department}. Nous combinons des solutions mécaniques (pics, filets) et technologiques (répulsifs sonores, visuels) pour créer un environnement hostile aux pigeons sans altérer le confort de votre habitation.`,
      ];

      const methods = [
        `Diagnostic approfondi de votre domicile à ${city} pour identifier les zones de nidification et de perchage. Mise en place de dispositifs professionnels adaptés : filets anti-pigeons, pics inox, systèmes de répulsion. Nettoyage et désinfection complète des zones souillées. Suivi post-intervention pour garantir des résultats durables en ${department}.`,
        `Notre protocole chez les particuliers à ${city} comprend : visite d'évaluation, identification des accès et zones de repos, installation de protections sur mesure, puis nettoyage et désinfection. GF Nuisibles assure un suivi gratuit après l'intervention en ${department}.`,
        `Le traitement de votre habitation à ${city} se déroule en trois étapes : inspection complète de la toiture, des façades et des ouvertures ; pose de dispositifs anti-pigeons adaptés ; nettoyage professionnel des déjections et désinfection. Un rapport vous est remis avec des conseils de prévention pour ${department}.`,
        `À ${city}, GF Nuisibles commence par un diagnostic personnalisé de votre habitation en ${department}. Nous déterminons les points d'entrée et de perchage, installons les protections nécessaires et procédons à un nettoyage complet. Notre suivi post-intervention garantit l'efficacité durable de nos solutions.`,
      ];

      return {
        metaDescription: metaDescriptions[v],
        seoTitle: `Élimination Pigeons ${city} ${ds} | G&F Nuisibles`,
        serviceCallTitle: `G&F NUISIBLES INTERVIENT CHEZ VOUS, EN PAVILLON, MAISON OU EN APPARTEMENT DU CÔTÉ DE ${city.toUpperCase()} POUR METTRE FIN AUX DÉGÂTS CAUSÉS PAR LES PIGEONS ET AUTRES OISEAUX.`,
        serviceCallSubtitle: `CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DE L'ÉLIMINATION DES PIGEONS EN ${department.toUpperCase()} !`,
        intro: intros[v],
        expertise: expertises[v],
        method: methods[v],
        cta: `Contactez GF Nuisibles au 07.88.17.45.86 pour l'élimination des pigeons chez vous à ${city} en ${department}. Devis gratuit, intervention rapide et discrète.`,
      };
    },
  },

  /* ═══════════════════════════════════════════
     TAUPES
     ═══════════════════════════════════════════ */
  {
    slug: "taupes",
    title: "Taupes",
    icon: Target,
    heroImage: serviceTaupes,
    getContent: (city: string, department: string, variation = 0) => {
      const v = variation % 4;
      const ds = deptSeo(department);
      const dp = deptSeoPrep(department);

      const metaDescriptions = [
        `Besoin d'un taupier à ${city} ? GF Nuisibles élimine les taupes ${dp} par piégeage écologique. Devis gratuit, intervention rapide.`,
        `Stop aux taupinières à ${city} ! Piégeage professionnel et écologique ${dp}. Résultat garanti. GF Nuisibles.`,
        `Piégeage de taupes rapide à ${city} ${dp}. Méthode écologique sans produit chimique. Devis gratuit. GF Nuisibles.`,
        `Protégez votre jardin des taupes à ${city}. GF Nuisibles : piégeage mécanique expert ${dp}. Devis gratuit, intervention 48h.`,
      ];

      const intros = [
        `Votre pelouse à ${city} est ravagée par les taupinières ? GF Nuisibles, spécialiste du piégeage de taupes en ${department}, intervient rapidement pour protéger vos espaces verts. Les taupes, bien qu'utiles pour l'aération du sol, peuvent causer des dégâts considérables sur les jardins, terrains de sport et espaces paysagers à ${city}.`,
        `Les taupes envahissent votre jardin à ${city} et multiplient les monticules de terre ? GF Nuisibles en ${department} utilise la méthode traditionnelle de piégeage, la plus efficace et la plus respectueuse de l'environnement. Préservez vos espaces verts avec notre expertise terrain reconnue à ${city} et ses alentours.`,
        `GF Nuisibles à ${city} met son savoir-faire au service de l'élimination des taupes en ${department}. Nos techniciens utilisent exclusivement des pièges mécaniques professionnels, sans aucun produit chimique. Cette méthode écologique garantit des résultats rapides tout en respectant l'écosystème de votre jardin à ${city}.`,
        `À ${city}, en ${department}, les taupes peuvent transformer un beau jardin en champ de bataille. GF Nuisibles vous apporte une solution professionnelle et écologique : le piégeage mécanique traditionnel. Nos experts identifient les galeries actives à ${city} et posent des dispositifs ciblés pour une élimination efficace.`,
      ];

      const expertises = [
        `À ${city} en ${department}, nos techniciens identifient les galeries actives et posent des pièges mécaniques professionnels. Aucun produit chimique n'est utilisé. Notre expertise terrain garantit des résultats rapides et durables. GF Nuisibles intervient chez les particuliers, sur les terrains sportifs, golfs et espaces verts municipaux.`,
        `GF Nuisibles déploie à ${city} une méthode de piégeage éprouvée en ${department}. Nos techniciens analysent le réseau de galeries, identifient les passages principaux et positionnent les pièges avec précision. Cette approche ciblée assure un taux de capture élevé sans impact environnemental.`,
        `L'expertise de GF Nuisibles en ${department} repose sur une connaissance approfondie du comportement des taupes. À ${city}, nous intervenons sur tous types de terrains : jardins privés, parcs, terrains de sport, golfs et espaces communaux. Nos méthodes 100 % mécaniques respectent la faune et la flore environnantes.`,
        `Nos professionnels à ${city} pratiquent un piégeage traditionnel maîtrisé en ${department}. Chaque intervention commence par un repérage minutieux des galeries principales et secondaires. Les pièges sont positionnés stratégiquement et contrôlés régulièrement pour assurer l'élimination progressive de toutes les taupes présentes.`,
      ];

      const methods = [
        `Repérage des galeries principales sur votre terrain à ${city}, pose de pièges mécaniques, suivi régulier et retrait des dispositifs. Nous vous conseillons sur les mesures préventives pour protéger durablement vos espaces verts en ${department}.`,
        `Notre protocole à ${city} comprend : analyse du réseau de galeries, identification des galeries actives par sondage, pose de pièges professionnels aux points stratégiques. Un suivi bihebdomadaire est assuré jusqu'à l'élimination complète en ${department}.`,
        `Le traitement de votre terrain à ${city} se déroule sur plusieurs passages : repérage initial, pose de pièges mécaniques sélectifs, contrôle régulier et ajustement des positions si nécessaire. GF Nuisibles garantit des résultats concrets et mesurables en ${department}.`,
        `À ${city}, GF Nuisibles réalise un diagnostic terrain complet : cartographie des taupinières, sondage des galeries, identification des zones d'activité. Nous déployons ensuite un dispositif de pièges mécaniques en ${department}, avec suivi régulier jusqu'à la résolution complète du problème.`,
      ];

      return {
        metaDescription: metaDescriptions[v],
        seoTitle: `Taupes ${city} ${ds} | G&F Nuisibles`,
        serviceCallTitle: `VOTRE JARDIN OU ESPACE VERT SUBIT UNE INVASION DE TAUPES ?`,
        serviceCallSubtitle: `CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DU PIÉGEAGE DE TAUPES DU CÔTÉ DE ${city.toUpperCase()} !`,
        intro: intros[v],
        expertise: expertises[v],
        method: methods[v],
        cta: `Contactez GF Nuisibles au 07.88.17.45.86 pour un piégeage de taupes efficace à ${city} en ${department}. Devis gratuit, intervention rapide.`,
      };
    },
  },
];

// All services slugs
const ALL_SERVICES = ["guepes-frelons", "desinsectisation", "deratisation", "depigeonnisation", "elimination-pigeons", "taupes"];

export interface CityData {
  name: string;
  slug: string;
  department: string;
  services: string[];
  variation: number;
}

export const cities: CityData[] = [
  // Haute-Marne (52) — tous les services
  { name: "Chaumont", slug: "chaumont", department: "Haute-Marne (52)", services: ALL_SERVICES, variation: 0 },
  { name: "Langres", slug: "langres", department: "Haute-Marne (52)", services: ALL_SERVICES, variation: 1 },
  { name: "Nogent", slug: "nogent", department: "Haute-Marne (52)", services: ALL_SERVICES, variation: 2 },
  { name: "Bar-sur-Aube", slug: "bar-sur-aube", department: "Haute-Marne (52)", services: ALL_SERVICES, variation: 3 },
  { name: "Joinville", slug: "joinville", department: "Haute-Marne (52)", services: ALL_SERVICES, variation: 0 },
  { name: "Saint-Dizier", slug: "saint-dizier", department: "Haute-Marne (52)", services: ALL_SERVICES, variation: 1 },
  { name: "Wassy", slug: "wassy", department: "Haute-Marne (52)", services: ALL_SERVICES, variation: 2 },
  { name: "Bourbonne-les-Bains", slug: "bourbonne-les-bains", department: "Haute-Marne (52)", services: ALL_SERVICES, variation: 3 },
  { name: "Bologne", slug: "bologne", department: "Haute-Marne (52)", services: ALL_SERVICES, variation: 0 },
  { name: "Montier-en-Der", slug: "montier-en-der", department: "Haute-Marne (52)", services: ALL_SERVICES, variation: 1 },

  // Marne (51)
  { name: "Vitry-le-François", slug: "vitry-le-francois", department: "Marne (51)", services: ["depigeonnisation", "desinsectisation", "elimination-pigeons"], variation: 2 },
  { name: "Châlons-en-Champagne", slug: "chalons-en-champagne", department: "Marne (51)", services: ["depigeonnisation", "elimination-pigeons", "deratisation"], variation: 3 },

  // Vosges (88)
  { name: "Vittel", slug: "vittel", department: "Vosges (88)", services: ["depigeonnisation", "desinsectisation", "elimination-pigeons", "deratisation"], variation: 0 },
  { name: "Neufchâteau", slug: "neufchateau", department: "Vosges (88)", services: ["depigeonnisation", "desinsectisation", "elimination-pigeons", "deratisation"], variation: 1 },

  // Aube (10)
  { name: "Troyes", slug: "troyes", department: "Aube (10)", services: ["depigeonnisation", "elimination-pigeons", "deratisation"], variation: 2 },

  // Côte-d'Or (21)
  { name: "Dijon", slug: "dijon", department: "Côte-d'Or (21)", services: ["depigeonnisation", "elimination-pigeons", "deratisation"], variation: 3 },
  { name: "Beaune", slug: "beaune", department: "Côte-d'Or (21)", services: ["depigeonnisation", "elimination-pigeons", "deratisation"], variation: 0 },
  { name: "Châtillon-sur-Seine", slug: "chatillon-sur-seine", department: "Côte-d'Or (21)", services: ["depigeonnisation", "elimination-pigeons", "deratisation"], variation: 1 },

  // Meurthe-et-Moselle (54)
  { name: "Nancy", slug: "nancy", department: "Meurthe-et-Moselle (54)", services: ["depigeonnisation", "elimination-pigeons", "deratisation"], variation: 2 },
];
