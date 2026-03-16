import { Zap, Bug, Rat, Bird, Target } from "lucide-react";
import serviceGuepes from "@/assets/service-guepes.jpg";
import serviceDesinsectisation from "@/assets/service-desinsectisation.jpg";
import serviceDeratisation from "@/assets/service-deratisation.jpg";
import serviceDepigeonnage from "@/assets/service-depigeonnage.jpg";
import serviceTaupes from "@/assets/service-taupes.jpg";

export const serviceDefinitions = [
  {
    slug: "guepes-frelons",
    title: "Guêpes & Frelons",
    icon: Zap,
    heroImage: serviceGuepes,
    getContent: (city: string, department: string) => ({
      metaDescription: `Destruction de nids de guêpes et frelons à ${city} en ${department}. GF Nuisibles intervient en urgence. Appelez le 07.88.17.45.86.`,
      seoTitle: `Guêpes & Frelons à ${city} en ${department}`,
      serviceCallTitle: `VOTRE LOGEMENT OU LOCAL PROFESSIONNEL SUBIT UNE INVASION DE GUÊPES OU DE FRELONS ?`,
      serviceCallSubtitle: `CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DE LA DESTRUCTION DE NIDS DE GUÊPES ET FRELONS DU CÔTÉ DE ${city.toUpperCase()} !`,
      intro: `G&F Nuisibles à ${city} intervient en urgence pour neutraliser les nids de guêpes et frelons (européens et asiatiques). Sécurisez votre environnement et évitez les risques de piqûres. Un nid de guêpes ou de frelons représente un danger réel pour vous et votre entourage, surtout en période estivale. Nos équipes professionnelles sont formées pour intervenir rapidement et en toute sécurité à ${city} et ses environs, même dans les situations les plus complexes.`,
      expertise: `Nos experts intervenant à ${city} en ${department} utilisent du matériel professionnel pour atteindre les nids en hauteur ou sous toiture. Que ce soit dans une cheminée, un arbre ou sous un toit, nous intervenons rapidement et en toute sécurité. Nos produits sont homologués et respectueux de l'environnement. G&F Nuisibles vous garantit une élimination totale du nid et un traitement préventif pour éviter toute réinstallation.`,
      method: `Après un diagnostic précis sur place à ${city}, nous procédons à la neutralisation complète du nid. L'intervention est rapide (généralement moins d'une heure) et sécurisée. Nous vous conseillons également sur les mesures préventives à adopter pour protéger durablement votre habitation ou vos locaux professionnels.`,
      cta: `Contactez G&F Nuisibles au 07.88.17.45.86 pour une intervention rapide à ${city} et ses environs en ${department}. Diagnostic gratuit, intervention garantie.`,
    }),
  },
  {
    slug: "desinsectisation",
    title: "Désinsectisation",
    icon: Bug,
    heroImage: serviceDesinsectisation,
    getContent: (city: string, department: string) => ({
      metaDescription: `Désinsectisation professionnelle à ${city} en ${department}. Traitement cafards, punaises de lit, blattes. GF Nuisibles. Tél : 07.88.17.45.86.`,
      seoTitle: `Désinsectisation à ${city} en ${department}`,
      serviceCallTitle: `VOTRE LOGEMENT OU LOCAL PROFESSIONNEL SUBIT UNE INVASION D'INSECTES NUISIBLES ?`,
      serviceCallSubtitle: `CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DE LA DÉSINSECTISATION DU CÔTÉ DE ${city.toUpperCase()} !`,
      intro: `G&F Nuisibles à ${city} propose des traitements professionnels contre les insectes nuisibles : cafards, punaises de lit, blattes et autres parasites. Ces insectes se reproduisent rapidement et représentent un risque sanitaire important pour votre foyer ou vos locaux professionnels à ${city}. Notre expertise nous permet d'identifier rapidement le type d'infestation et de mettre en place le traitement le plus adapté.`,
      expertise: `À ${city} en ${department}, nos techniciens certifiés utilisent des traitements adaptés à chaque type d'insecte. Nos solutions sont efficaces, durables et respectueuses de votre santé. Nous intervenons chez les particuliers comme chez les professionnels (hôtels, restaurants, collectivités). G&F Nuisibles garantit une discrétion totale lors de ses interventions.`,
      method: `Inspection approfondie de vos locaux à ${city} pour identifier l'espèce et les zones infestées. Application de traitements ciblés (gel, pulvérisation, nébulisation) avec un suivi post-traitement assuré pour garantir l'élimination complète. Nous vous accompagnons également avec des conseils de prévention adaptés.`,
      cta: `Appelez G&F Nuisibles au 07.88.17.45.86 pour un traitement professionnel à ${city} en ${department}. Discrétion totale, véhicules non logotés sur demande.`,
    }),
  },
  {
    slug: "deratisation",
    title: "Dératisation",
    icon: Rat,
    heroImage: serviceDeratisation,
    getContent: (city: string, department: string) => ({
      metaDescription: `Dératisation à ${city} en ${department}. Élimination rats, souris, rongeurs. GF Nuisibles intervient rapidement. Tél : 07.88.17.45.86.`,
      seoTitle: `Dératisation à ${city} en ${department}`,
      serviceCallTitle: `VOTRE LOGEMENT OU LOCAL PROFESSIONNEL SUBIT UNE INVASION DE RATS OU DE RONGEURS ?`,
      serviceCallSubtitle: `CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DE LA DÉRATISATION DU CÔTÉ DE ${city.toUpperCase()} !`,
      intro: `G&F Nuisibles à ${city} intervient rapidement pour éliminer rats, souris et rongeurs de votre habitation ou de vos locaux professionnels. La présence de rongeurs est un risque sanitaire majeur et peut causer des dégâts importants sur vos installations électriques et votre isolation.`,
      expertise: `À ${city} en ${department}, nos techniciens utilisent des méthodes sécurisées, adaptées aux foyers avec enfants et animaux domestiques. Nous identifions les points d'entrée et mettons en place des solutions durables pour éviter toute réinfestation. G&F Nuisibles vous accompagne du diagnostic à la prévention.`,
      method: `Diagnostic complet à ${city} pour identifier les zones de passage et points d'entrée. Pose de dispositifs sécurisés (postes d'appâtage, pièges mécaniques). Rebouchage des accès et conseils de prévention pour une protection durable de vos locaux.`,
      cta: `Contactez G&F Nuisibles au 07.88.17.45.86 pour une dératisation efficace à ${city} en ${department}. Discrétion assurée, garantie de résultat.`,
    }),
  },
  {
    slug: "depigeonnisation",
    title: "Dépigeonnisation",
    icon: Bird,
    heroImage: serviceDepigeonnage,
    getContent: (city: string, department: string) => ({
      metaDescription: `Dépigeonnisation à ${city} en ${department}. Protection durable des bâtiments professionnels contre les pigeons. GF Nuisibles. Tél : 07.88.17.45.86.`,
      seoTitle: `Dépigeonnisation à ${city} en ${department}`,
      serviceCallTitle: `G&F NUISIBLES INTERVIENT AUPRÈS DES RESTAURANTS, ÉTABLISSEMENTS PUBLICS, COLLECTIVITÉS, SYNDICS DE COPROPRIÉTÉ DU CÔTÉ DE ${city.toUpperCase()} POUR METTRE FIN AUX DÉGÂTS CAUSÉS PAR LES PIGEONS ET AUTRES OISEAUX.`,
      serviceCallSubtitle: `CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DE LA DÉPIGEONNISATION EN ${department.toUpperCase()} !`,
      intro: `G&F Nuisibles à ${city} vous propose ses services de dépigeonnisation pour débarrasser vos locaux professionnels des pigeons et divers oiseaux nuisibles. Les pigeons causent des dégâts importants sur les bâtiments : fientes acides qui détériorent les façades, risques sanitaires, nuisances sonores. Préservez l'hygiène de vos locaux et évitez les dégradations liées aux déjections et maladies.`,
      expertise: `G&F Nuisibles utilise différentes méthodes sans blesser ni tuer les volatiles à ${city} en ${department} : installation de filets, de picots, de systèmes de répulsion laser, efficaces et discrets. Ainsi, les volatiles ne vont plus se poser ou se nicher sur vos bâtiments. Nos solutions sont conformes à la réglementation et respectueuses des animaux.`,
      method: `Audit complet de votre bâtiment à ${city}, identification des zones de nidification, installation des dispositifs adaptés (pics inox, filets, fil électrique, systèmes laser), nettoyage et désinfection des zones souillées. Nous assurons un suivi pour garantir l'efficacité durable de notre intervention.`,
      cta: `Appelez G&F Nuisibles au 07.88.17.45.86 pour protéger vos bâtiments professionnels à ${city} en ${department}. Devis gratuit sur site, solutions pérennes garanties.`,
    }),
  },
  {
    slug: "elimination-pigeons",
    title: "Élimination Pigeons",
    icon: Bird,
    heroImage: serviceDepigeonnage,
    getContent: (city: string, department: string) => ({
      metaDescription: `Élimination de pigeons à ${city} en ${department}. Solutions pour particuliers. GF Nuisibles. Tél : 07.88.17.45.86.`,
      seoTitle: `Élimination Pigeons à ${city} en ${department}`,
      serviceCallTitle: `G&F NUISIBLES INTERVIENT CHEZ VOUS, EN PAVILLON, MAISON OU EN APPARTEMENT DU CÔTÉ DE ${city.toUpperCase()} POUR METTRE FIN AUX DÉGÂTS CAUSÉS PAR LES PIGEONS ET AUTRES OISEAUX.`,
      serviceCallSubtitle: `CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DE L'ÉLIMINATION DES PIGEONS EN ${department.toUpperCase()} !`,
      intro: `G&F Nuisibles à ${city} vous propose ses services pour vous débarrasser des pigeons et divers oiseaux à votre domicile. Les pigeons représentent un véritable fléau pour votre habitation et votre santé. Leurs fientes acides dégradent les façades, les toitures et les équipements, tandis que les maladies qu'ils transmettent constituent un risque sanitaire majeur. Préservez l'hygiène de votre maison et évitez les dégradations liées aux déjections et maladies.`,
      expertise: `G&F Nuisibles utilise différentes méthodes sans blesser ni tuer les volatiles à ${city} en ${department} comme l'installation de filets, de picots, de systèmes de répulsion laser, efficaces et discrets. Ainsi, les volatiles ne vont plus se poser ou se nicher sur votre habitation. Notre expertise nous permet d'adapter nos solutions à chaque configuration : pavillons, maisons, appartements, balcons et terrasses.`,
      method: `Diagnostic approfondi de votre domicile à ${city} pour identifier les zones de nidification et de perchage. Mise en place de dispositifs professionnels adaptés : filets anti-pigeons, pics inox, systèmes de répulsion électrique ou laser. Nettoyage et désinfection complète des zones souillées. Suivi post-intervention pour garantir des résultats durables.`,
      cta: `Contactez G&F Nuisibles au 07.88.17.45.86 pour l'élimination des pigeons chez vous à ${city} en ${department}. Devis gratuit, intervention rapide et discrète.`,
    }),
  },
  {
    slug: "taupes",
    title: "Taupes",
    icon: Target,
    heroImage: serviceTaupes,
    getContent: (city: string, department: string) => ({
      metaDescription: `Piégeage de taupes à ${city} en ${department}. Méthode traditionnelle, écologique et efficace. GF Nuisibles. Tél : 07.88.17.45.86.`,
      seoTitle: `Taupes à ${city} en ${department}`,
      serviceCallTitle: `VOTRE JARDIN OU ESPACE VERT SUBIT UNE INVASION DE TAUPES ?`,
      serviceCallSubtitle: `CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DU PIÉGEAGE DE TAUPES DU CÔTÉ DE ${city.toUpperCase()} !`,
      intro: `G&F Nuisibles à ${city} utilise la méthode traditionnelle de piégeage, la plus efficace et respectueuse de l'environnement. Protégez vos espaces verts avec notre expertise terrain reconnue dans toute la région.`,
      expertise: `À ${city} en ${department}, nos techniciens identifient les galeries actives et posent des pièges mécaniques professionnels. Aucun produit chimique n'est utilisé. Notre expertise terrain garantit des résultats rapides et durables. G&F Nuisibles intervient aussi bien chez les particuliers que sur les terrains sportifs, golfs et espaces verts municipaux.`,
      method: `Repérage des galeries principales sur votre terrain à ${city}, pose de pièges mécaniques, suivi régulier et retrait des dispositifs. Nous vous conseillons sur les mesures préventives pour protéger durablement vos espaces verts.`,
      cta: `Contactez G&F Nuisibles au 07.88.17.45.86 pour un piégeage de taupes efficace à ${city} en ${department}. Devis gratuit, intervention rapide.`,
    }),
  },
];

// All services slugs
const ALL_SERVICES = ["guepes-frelons", "desinsectisation", "deratisation", "depigeonnisation", "elimination-pigeons", "taupes"];

export interface CityData {
  name: string;
  slug: string;
  department: string;
  services: string[];
}

export const cities: CityData[] = [
  // Haute-Marne (52) — tous les services
  { name: "Chaumont", slug: "chaumont", department: "Haute-Marne (52)", services: ALL_SERVICES },
  { name: "Langres", slug: "langres", department: "Haute-Marne (52)", services: ALL_SERVICES },
  { name: "Nogent", slug: "nogent", department: "Haute-Marne (52)", services: ALL_SERVICES },
  { name: "Bar-sur-Aube", slug: "bar-sur-aube", department: "Haute-Marne (52)", services: ALL_SERVICES },
  { name: "Joinville", slug: "joinville", department: "Haute-Marne (52)", services: ALL_SERVICES },
  { name: "Saint-Dizier", slug: "saint-dizier", department: "Haute-Marne (52)", services: ALL_SERVICES },
  { name: "Wassy", slug: "wassy", department: "Haute-Marne (52)", services: ALL_SERVICES },
  { name: "Bourbonne-les-Bains", slug: "bourbonne-les-bains", department: "Haute-Marne (52)", services: ALL_SERVICES },
  { name: "Bologne", slug: "bologne", department: "Haute-Marne (52)", services: ALL_SERVICES },

  // Marne (51)
  { name: "Vitry-le-François", slug: "vitry-le-francois", department: "Marne (51)", services: ["depigeonnisation", "desinsectisation", "elimination-pigeons"] },
  { name: "Châlons-en-Champagne", slug: "chalons-en-champagne", department: "Marne (51)", services: ["depigeonnisation", "elimination-pigeons", "deratisation"] },

  // Vosges (88)
  { name: "Vittel", slug: "vittel", department: "Vosges (88)", services: ["depigeonnisation", "desinsectisation", "elimination-pigeons", "deratisation"] },
  { name: "Neufchâteau", slug: "neufchateau", department: "Vosges (88)", services: ["depigeonnisation", "desinsectisation", "elimination-pigeons", "deratisation"] },

  // Aube (10)
  { name: "Troyes", slug: "troyes", department: "Aube (10)", services: ["depigeonnisation", "elimination-pigeons", "deratisation"] },

  // Côte-d'Or (21)
  { name: "Dijon", slug: "dijon", department: "Côte-d'Or (21)", services: ["depigeonnisation", "elimination-pigeons", "deratisation"] },
  { name: "Beaune", slug: "beaune", department: "Côte-d'Or (21)", services: ["depigeonnisation", "elimination-pigeons", "deratisation"] },
  { name: "Châtillon-sur-Seine", slug: "chatillon-sur-seine", department: "Côte-d'Or (21)", services: ["depigeonnisation", "elimination-pigeons", "deratisation"] },

  // Doubs (25)
  { name: "Besançon", slug: "besancon", department: "Doubs (25)", services: ["depigeonnisation", "elimination-pigeons", "deratisation"] },

  // Meurthe-et-Moselle (54)
  { name: "Nancy", slug: "nancy", department: "Meurthe-et-Moselle (54)", services: ["depigeonnisation", "elimination-pigeons", "deratisation"] },

  // Moselle (57)
  { name: "Metz", slug: "metz", department: "Moselle (57)", services: ["depigeonnisation", "elimination-pigeons", "deratisation"] },

  // Rhône (69)
  { name: "Lyon", slug: "lyon", department: "Rhône (69)", services: ["depigeonnisation", "elimination-pigeons"] },
];
