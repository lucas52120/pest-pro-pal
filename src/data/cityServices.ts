import { Zap, Bug, Rat, Bird, Target } from "lucide-react";
import serviceGuepes from "@/assets/service-guepes.jpg";
import serviceDesinsectisation from "@/assets/service-desinsectisation.jpg";
import serviceDeratisation from "@/assets/service-deratisation.jpg";
import serviceDepigeonnage from "@/assets/service-depigeonnage.jpg";
import serviceTaupes from "@/assets/service-taupes.jpg";
import { serviceDefinitionsData, cities as citiesData, type CityData, type ServiceContent } from "../../seo-data";

export type { CityData, ServiceContent };
export { cities } from "../../seo-data";

/* ──────────────────────────────────────────────
   Map React-specific parts (icons, images) onto
   the pure data definitions from seo-data.ts
   ────────────────────────────────────────────── */

const iconMap: Record<string, typeof Zap> = {
  "guepes-frelons": Zap,
  "desinsectisation": Bug,
  "deratisation": Rat,
  "depigeonnisation": Bird,
  "elimination-pigeons": Bird,
  "taupes": Target,
};

const imageMap: Record<string, string> = {
  "guepes-frelons": serviceGuepes,
  "desinsectisation": serviceDesinsectisation,
  "deratisation": serviceDeratisation,
  "depigeonnisation": serviceDepigeonnage,
  "elimination-pigeons": serviceDepigeonnage,
  "taupes": serviceTaupes,
};

export const serviceDefinitions = serviceDefinitionsData.map((sd) => ({
  ...sd,
  icon: iconMap[sd.slug],
  heroImage: imageMap[sd.slug],
}));
