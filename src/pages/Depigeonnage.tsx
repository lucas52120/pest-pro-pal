import { Bird } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

const Depigeonnage = () => (
  <ServicePageLayout
    icon={<Bird className="h-8 w-8" />}
    title="Dépigeonnage"
    subtitle="Protection durable de vos bâtiments contre les pigeons."
    problem="Les pigeons causent des dégâts importants sur les bâtiments : fientes acides qui détériorent les façades, risques sanitaires, nuisances sonores. Les collectivités et professionnels sont particulièrement touchés."
    expertise="FG Nuisibles propose des solutions durables et respectueuses de la réglementation : installation de pics, filets, systèmes de répulsion. Nous protégeons durablement vos bâtiments."
    method="Audit complet du site, identification des zones de nidification, installation de dispositifs anti-pigeons adaptés (pics inox, filets, fil électrique), nettoyage et désinfection des zones souillées."
    engagement="Solutions pérennes avec garantie. Intervention discrète pour les bâtiments publics et les copropriétés. Devis gratuit sur site."
  />
);

export default Depigeonnage;
