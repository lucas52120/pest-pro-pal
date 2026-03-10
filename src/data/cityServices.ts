import { Zap, Bug, Rat, Bird, Target } from "lucide-react";
import serviceGuepes from "@/assets/service-guepes.jpg";
import serviceDesinsectisation from "@/assets/service-desinsectisation.jpg";
import serviceDeratisation from "@/assets/service-deratisation.jpg";
import serviceDepigeonnage from "@/assets/service-depigeonnage.jpg";
import serviceTaupes from "@/assets/service-taupes.jpg";

export const cities = [
  { name: "Chaumont", slug: "chaumont" },
  { name: "Langres", slug: "langres" },
  { name: "Nogent", slug: "nogent" },
  { name: "Bar-sur-Aube", slug: "bar-sur-aube" },
  { name: "Joinville", slug: "joinville" },
  { name: "Saint-Dizier", slug: "saint-dizier" },
  { name: "Wassy", slug: "wassy" },
  { name: "Bourbonne-les-Bains", slug: "bourbonne-les-bains" },
];

export const serviceDefinitions = [
  {
    slug: "guepes-frelons",
    title: "Guêpes & Frelons",
    icon: Zap,
    heroImage: serviceGuepes,
    getContent: (city: string) => ({
      metaDescription: `Destruction de nids de guêpes et frelons à ${city}. FG Nuisibles intervient en urgence en Haute-Marne (52). Appelez le 07.88.17.45.86.`,
      intro: `FG Nuisibles intervient en urgence à ${city} pour neutraliser les nids de guêpes et frelons (européens et asiatiques). Sécurisez votre environnement et évitez les risques de piqûres. Un nid de guêpes ou de frelons représente un danger réel pour vous et votre entourage, surtout en période estivale.`,
      expertise: `Nos experts à ${city} utilisent du matériel professionnel pour atteindre les nids en hauteur ou sous toiture. Que ce soit dans une cheminée, un arbre ou sous un toit, nous intervenons rapidement et en toute sécurité. Nos produits sont homologués et respectueux de l'environnement.`,
      method: `Après un diagnostic précis sur place à ${city}, nous procédons à la neutralisation complète du nid. L'intervention est rapide (généralement moins d'une heure) et sécurisée. Nous vous conseillons également sur les mesures préventives à adopter.`,
      cta: `Contactez-nous au 07.88.17.45.86 pour une intervention rapide à ${city} et ses environs. Diagnostic gratuit, intervention garantie.`,
    }),
  },
  {
    slug: "desinsectisation",
    title: "Désinsectisation",
    icon: Bug,
    heroImage: serviceDesinsectisation,
    getContent: (city: string) => ({
      metaDescription: `Désinsectisation professionnelle à ${city}. Traitement cafards, punaises de lit, blattes. FG Nuisibles, Haute-Marne (52). Tél : 07.88.17.45.86.`,
      intro: `FG Nuisibles propose des traitements professionnels contre les insectes nuisibles à ${city} : cafards, punaises de lit, blattes et autres parasites. Ces insectes se reproduisent rapidement et représentent un risque sanitaire important pour votre foyer ou vos locaux professionnels.`,
      expertise: `À ${city}, nos techniciens certifiés utilisent des traitements adaptés à chaque type d'insecte. Nos solutions sont efficaces, durables et respectueuses de votre santé. Nous intervenons chez les particuliers comme chez les professionnels (hôtels, restaurants, collectivités).`,
      method: `Inspection approfondie de vos locaux à ${city} pour identifier l'espèce et les zones infestées. Application de traitements ciblés (gel, pulvérisation, nébulisation) avec un suivi post-traitement assuré pour garantir l'élimination complète.`,
      cta: `Appelez le 07.88.17.45.86 pour un traitement professionnel à ${city}. Discrétion totale, véhicules non logotés sur demande.`,
    }),
  },
  {
    slug: "deratisation",
    title: "Dératisation",
    icon: Rat,
    heroImage: serviceDeratisation,
    getContent: (city: string) => ({
      metaDescription: `Dératisation à ${city}. Élimination rats, souris, rongeurs. FG Nuisibles intervient rapidement en Haute-Marne (52). Tél : 07.88.17.45.86.`,
      intro: `Des bruits dans les cloisons à ${city} ? Des traces de grignotage ? FG Nuisibles intervient rapidement pour éliminer rats, souris et rongeurs de votre habitation ou de vos locaux professionnels. La présence de rongeurs est un risque sanitaire majeur.`,
      expertise: `À ${city}, nos techniciens utilisent des méthodes sécurisées, adaptées aux foyers avec enfants et animaux domestiques. Nous identifions les points d'entrée et mettons en place des solutions durables pour éviter toute réinfestation.`,
      method: `Diagnostic complet à ${city} pour identifier les zones de passage et points d'entrée. Pose de dispositifs sécurisés (postes d'appâtage, pièges mécaniques). Rebouchage des accès et conseils de prévention pour une protection durable.`,
      cta: `Contactez-nous au 07.88.17.45.86 pour une dératisation efficace à ${city}. Discrétion assurée, garantie de résultat.`,
    }),
  },
  {
    slug: "depigeonnage",
    title: "Dépigeonnage",
    icon: Bird,
    heroImage: serviceDepigeonnage,
    getContent: (city: string) => ({
      metaDescription: `Dépigeonnage à ${city}. Protection durable des bâtiments contre les pigeons. FG Nuisibles, Haute-Marne (52). Tél : 07.88.17.45.86.`,
      intro: `Les pigeons causent des dégâts importants sur les bâtiments à ${city} : fientes acides, risques sanitaires, nuisances sonores. FG Nuisibles propose des solutions durables pour protéger vos façades et vos locaux.`,
      expertise: `À ${city}, nous installons des dispositifs anti-pigeons adaptés à chaque situation : pics inox, filets, systèmes de répulsion. Nos solutions sont conformes à la réglementation et respectueuses des animaux.`,
      method: `Audit complet de votre bâtiment à ${city}, identification des zones de nidification, installation des dispositifs adaptés, nettoyage et désinfection des zones souillées. Nous assurons un suivi pour garantir l'efficacité.`,
      cta: `Appelez le 07.88.17.45.86 pour protéger vos bâtiments à ${city}. Devis gratuit sur site, solutions pérennes garanties.`,
    }),
  },
  {
    slug: "taupes",
    title: "Taupes",
    icon: Target,
    heroImage: serviceTaupes,
    getContent: (city: string) => ({
      metaDescription: `Piégeage de taupes à ${city}. Méthode traditionnelle, écologique et efficace. FG Nuisibles, Haute-Marne (52). Tél : 07.88.17.45.86.`,
      intro: `Des taupinières envahissent votre pelouse à ${city} ? FG Nuisibles utilise la méthode traditionnelle de piégeage, la plus efficace et respectueuse de l'environnement. Protégez vos espaces verts avec notre expertise terrain.`,
      expertise: `À ${city}, nos techniciens identifient les galeries actives et posent des pièges mécaniques professionnels. Aucun produit chimique n'est utilisé. Notre expertise terrain garantit des résultats rapides et durables.`,
      method: `Repérage des galeries principales sur votre terrain à ${city}, pose de pièges mécaniques, suivi régulier et retrait des dispositifs. Nous vous conseillons sur les mesures préventives pour protéger durablement vos espaces verts.`,
      cta: `Contactez-nous au 07.88.17.45.86 pour un piégeage de taupes efficace à ${city}. Devis gratuit, intervention rapide.`,
    }),
  },
];
