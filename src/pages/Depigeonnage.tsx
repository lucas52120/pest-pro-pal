import { Bird } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import heroImage from "@/assets/service-depigeonnage.jpg";

const Depigeonnisation = () => (
  <ServicePageLayout
    icon={<Bird className="h-8 w-8" />}
    title="Dépigeonnisation"
    subtitle="Protection durable de vos bâtiments contre les pigeons et volatiles."
    heroImage={heroImage}
    problem="Les pigeons causent des dégâts importants sur les bâtiments : fientes acides qui détériorent les façades, risques sanitaires, nuisances sonores. Les collectivités et professionnels sont particulièrement touchés."
    expertise="F&G Nuisibles utilise différentes méthodes sans blesser ni tuer les volatiles : installation de filets, de picots, de systèmes de répulsion laser, efficaces et discrets. Ainsi, les volatiles ne vont plus se poser ou se nicher sur vos bâtiments. Préservez l'hygiène de vos locaux et évitez les dégradations liées aux déjections et maladies."
    method="Audit complet du site, identification des zones de nidification, installation de dispositifs anti-pigeons adaptés (pics inox, filets, fil électrique, systèmes laser), nettoyage et désinfection des zones souillées."
    engagement="Solutions pérennes avec garantie. Intervention discrète pour les bâtiments publics et les copropriétés. Devis gratuit sur site."
  />
);

export default Depigeonnisation;
