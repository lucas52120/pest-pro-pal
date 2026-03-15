import { Bird } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImage from "@/assets/service-depigeonnage.jpg";

const EliminationPigeons = () => (
  <ServicePageLayout
    icon={<Bird className="h-8 w-8" />}
    title="Élimination Pigeons"
    subtitle="Solutions professionnelles pour vous débarrasser des pigeons."
    heroImage={heroImage}
    sidebarImage={heroImage}
    serviceCallTitle="VOTRE HABITATION SUBIT UNE INVASION DE PIGEONS OU D'OISEAUX NUISIBLES ?"
    serviceCallSubtitle="CONTACTEZ G&F NUISIBLES, VOTRE PROFESSIONNEL DE L'ÉLIMINATION DES PIGEONS !"
    problem="Les pigeons représentent un véritable fléau pour les bâtiments et la santé publique. Leurs fientes acides dégradent les façades, les toitures et les équipements, tandis que les maladies qu'ils transmettent constituent un risque sanitaire majeur."
    expertise="F&G Nuisibles utilise différentes méthodes sans blesser ni tuer les volatiles : installation de filets, de picots, de systèmes de répulsion laser, efficaces et discrets. Ainsi, les volatiles ne vont plus se poser ou se nicher sur vos bâtiments. Préservez l'hygiène de vos locaux et évitez les dégradations liées aux déjections et maladies."
    method="Diagnostic approfondi de votre site pour identifier les zones de nidification et de perchage. Mise en place de dispositifs professionnels : filets anti-pigeons, pics inox, systèmes de répulsion électrique ou laser. Nettoyage et désinfection complète des zones souillées."
    engagement="Solutions pérennes avec garantie. Intervention discrète pour les bâtiments publics, copropriétés et locaux professionnels. Devis gratuit sur site."
  />
);

export default EliminationPigeons;
