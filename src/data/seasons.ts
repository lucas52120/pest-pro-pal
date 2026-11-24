import { useEffect, useState } from "react";
import heroHiver from "@/assets/accueil-rat.jpg";
import heroPrintemps from "@/assets/taupe-hero.jpg";
import heroEte from "@/assets/frelon-hero.jpg";
import carteRats from "@/assets/carte-rats.jpg";
import carteGuepes from "@/assets/carte-guepes.jpg";
import carteCafards from "@/assets/carte-cafards.jpg";
import cartePunaises from "@/assets/carte-punaises.jpg";
import carteTaupes from "@/assets/carte-taupes.jpg";
import cartePigeons from "@/assets/carte-pigeons.jpg";
import carteRagondin from "@/assets/carte-ragondin.jpg";

export type Season = "hiver" | "printemps" | "ete";

/** November to February, then March and April, then May to October. */
export const getSeason = (date: Date): Season => {
  const month = date.getMonth() + 1;
  if (month >= 11 || month <= 2) return "hiver";
  return month <= 4 ? "printemps" : "ete";
};

const SERVICES = {
  rats: {
    title: "Rats et souris",
    text: "Bruits dans les cloisons, crottes, emballages grignotés ? Diagnostic, devis et intervention souvent le même jour.",
    link: "Dératisation en Haute-Marne",
    path: "/deratisation",
    image: carteRats,
    alt: "Rat sur une poutre en bois",
  },
  guepes: {
    title: "Guêpes et frelons",
    text: "Un nid sous le toit, dans un volet ou dans un arbre ? À partir de 80 €, frelons asiatiques à partir de 110 €.",
    link: "Destruction de nids de guêpes et frelons",
    path: "/guepes-frelons",
    image: carteGuepes,
    alt: "Guêpes sur leur nid, contre une planche de bois",
  },
  cafards: {
    title: "Cafards et blattes",
    text: "Des insectes bruns qui filent la nuit dans la cuisine ? Un traitement ciblé, en toute discrétion.",
    link: "Traitement des cafards et blattes",
    path: "/cafards-blattes",
    image: carteCafards,
    alt: "Blatte brune vue de dessus",
  },
  punaises: {
    title: "Punaises de lit",
    text: "Piqûres au réveil, points noirs sur le matelas ? Une inspection, puis un traitement en plusieurs passages.",
    link: "Traitement des punaises de lit",
    path: "/punaises-de-lit",
    image: cartePunaises,
    alt: "Punaise de lit adulte, brun-rouge, sur la peau",
  },
  taupes: {
    title: "Taupes",
    text: "De nouvelles taupinières chaque matin ? Un piégeur agréé s'en occupe, sans produit chimique.",
    link: "Taupier en Haute-Marne",
    path: "/taupes",
    image: carteTaupes,
    alt: "Taupinières sur une pelouse",
  },
  pigeons: {
    title: "Pigeons",
    text: "Fientes sur le balcon, nids sous le toit ? Filets, pics et répulsion, sans tuer les oiseaux.",
    link: "Dépigeonnage en Haute-Marne",
    path: "/depigeonnage",
    image: cartePigeons,
    alt: "Pigeons sur le rebord d'une façade",
  },
  esod: {
    title: "Autres animaux",
    text: "Ragondins, renards, corneilles : piégeage et régulation, dans le cadre prévu par la loi.",
    link: "Régulation des espèces ESOD",
    path: "/regulation-esod",
    image: carteRagondin,
    alt: "Ragondin au bord de l'eau",
  },
};

type ServiceKey = keyof typeof SERVICES;

interface SeasonContent {
  order: ServiceKey[];
  /** How many cards, from the first, are flagged as current. */
  current: number;
  hero: { image: string; alt: string; text: string; link: string; path: string };
}

const SEASONS: Record<Season, SeasonContent> = {
  hiver: {
    order: ["rats", "cafards", "punaises", "pigeons", "taupes", "guepes", "esod"],
    current: 3,
    hero: {
      image: heroHiver,
      alt: "Rat sur une poutre en bois",
      text: "En ce moment, rats et souris cherchent la chaleur.",
      link: "Voir la dératisation",
      path: "/deratisation",
    },
  },
  printemps: {
    order: ["taupes", "rats", "guepes", "pigeons", "cafards", "punaises", "esod"],
    current: 3,
    hero: {
      image: heroPrintemps,
      alt: "Taupe noire avec son museau rose",
      text: "En ce moment, les taupes creusent beaucoup.",
      link: "Voir le piégeage des taupes",
      path: "/taupes",
    },
  },
  ete: {
    order: ["guepes", "rats", "taupes", "punaises", "cafards", "pigeons", "esod"],
    current: 3,
    hero: {
      image: heroEte,
      alt: "Frelon européen vu de face",
      text: "En ce moment, c'est la saison des nids de guêpes et de frelons.",
      link: "Voir la destruction de nids",
      path: "/guepes-frelons",
    },
  },
};

export const seasonContent = (season: Season) => {
  const { order, ...rest } = SEASONS[season];
  return { ...rest, services: order.map((key) => SERVICES[key]) };
};

const isSeason = (value?: string): value is Season => !!value && value in SEASONS;

/**
 * The season drives the home page. The prerendered HTML carries the season of
 * its build in data-season: the first client render reuses it, so hydration
 * matches, then the visitor's date takes over.
 */
export const useSeason = (): Season => {
  const [season, setSeason] = useState<Season>(() => {
    const prerendered =
      typeof document === "undefined" ? undefined : document.querySelector<HTMLElement>("[data-season]")?.dataset.season;
    return isSeason(prerendered) ? prerendered : getSeason(new Date());
  });

  useEffect(() => {
    // Development only: /?saison=ete shows another season.
    const forced = import.meta.env.DEV ? new URLSearchParams(window.location.search).get("saison") ?? undefined : undefined;
    setSeason(isSeason(forced) ? forced : getSeason(new Date()));
  }, []);

  return season;
};
