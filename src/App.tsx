import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import FloatingCallButton from "@/components/FloatingCallButton";
import Index from "./pages/Index.tsx";
import GuepesFrelons from "./pages/GuepesFrelons.tsx";
import Desinsectisation from "./pages/Desinsectisation.tsx";
import Taupes from "./pages/Taupes.tsx";
import CafardsBlattes from "./pages/CafardsBlattes.tsx";
import CafardsBlattesChaumont from "./pages/CafardsBlattesChaumont.tsx";
import CafardsBlattesSaintDizier from "./pages/CafardsBlattesSaintDizier.tsx";
import CafardsBlattesLangres from "./pages/CafardsBlattesLangres.tsx";
import CafardsBlattesJoinville from "./pages/CafardsBlattesJoinville.tsx";
import CafardsBlattesNogent from "./pages/CafardsBlattesNogent.tsx";
import CafardsBlattesBourbonneLesBains from "./pages/CafardsBlattesBourbonneLesBains.tsx";
import CafardsBlattesBarSurAube from "./pages/CafardsBlattesBarSurAube.tsx";
import Depigeonnisation from "./pages/Depigeonnage.tsx";
import Deratisation from "./pages/Deratisation.tsx";
import Esod from "./pages/Esod.tsx";
import Contact from "./pages/Contact.tsx";
import MentionsLegales from "./pages/MentionsLegales.tsx";
import APropos from "./pages/APropos.tsx";
import NotFound from "./pages/NotFound.tsx";
import PlanduSite from "./pages/PlanduSite.tsx";
import ZoneIntervention from "./pages/ZoneIntervention.tsx";
import DeratisationChaumont from "./pages/DeratisationChaumont.tsx";
import GuepesFrelonsChaumont from "./pages/GuepesFrelonsChaumont.tsx";
import DesinsectisationChaumont from "./pages/DesinsectisationChaumont.tsx";
import DepigeonnisationChaumont from "./pages/DepigeonnisationChaumont.tsx";
import TaupesChaumont from "./pages/TaupesChaumont.tsx";
import DeratisationLangres from "./pages/DeratisationLangres.tsx";
import GuepesFrelonsLangres from "./pages/GuepesFrelonsLangres.tsx";
import DesinsectisationLangres from "./pages/DesinsectisationLangres.tsx";
import DepigeonnisationLangres from "./pages/DepigeonnisationLangres.tsx";
import TaupesLangres from "./pages/TaupesLangres.tsx";
import DeratisationNogent from "./pages/DeratisationNogent.tsx";
import GuepesFrelonsNogent from "./pages/GuepesFrelonsNogent.tsx";
import DesinsectisationNogent from "./pages/DesinsectisationNogent.tsx";
import DepigeonnisationNogent from "./pages/DepigeonnisationNogent.tsx";
import TaupesNogent from "./pages/TaupesNogent.tsx";
import DeratisationSaintDizier from "./pages/DeratisationSaintDizier.tsx";
import GuepesFrelonsSaintDizier from "./pages/GuepesFrelonsSaintDizier.tsx";
import DesinsectisationSaintDizier from "./pages/DesinsectisationSaintDizier.tsx";
import DepigeonnisationSaintDizier from "./pages/DepigeonnisationSaintDizier.tsx";
import TaupesSaintDizier from "./pages/TaupesSaintDizier.tsx";
import DeratisationJoinville from "./pages/DeratisationJoinville.tsx";
import GuepesFrelonsJoinville from "./pages/GuepesFrelonsJoinville.tsx";
import DesinsectisationJoinville from "./pages/DesinsectisationJoinville.tsx";
import DepigeonnisationJoinville from "./pages/DepigeonnisationJoinville.tsx";
import TaupesJoinville from "./pages/TaupesJoinville.tsx";

// Wassy
import DeratisationWassy from "./pages/DeratisationWassy.tsx";
import GuepesFrelonsWassy from "./pages/GuepesFrelonsWassy.tsx";
import DesinsectisationWassy from "./pages/DesinsectisationWassy.tsx";
import DepigeonnisationWassy from "./pages/DepigeonnisationWassy.tsx";
import TaupesWassy from "./pages/TaupesWassy.tsx";

// Bourbonne-les-Bains
import DeratisationBourbonne from "./pages/DeratisationBourbonne.tsx";
import GuepesFrelonsBourbonne from "./pages/GuepesFrelonsBourbonne.tsx";
import DesinsectisationBourbonne from "./pages/DesinsectisationBourbonne.tsx";
import DepigeonnisationBourbonne from "./pages/DepigeonnisationBourbonne.tsx";
import TaupesBourbonne from "./pages/TaupesBourbonne.tsx";

// Bologne
import DeratisationBologne from "./pages/DeratisationBologne.tsx";
import GuepesFrelonsBologne from "./pages/GuepesFrelonsBologne.tsx";
import DesinsectisationBologne from "./pages/DesinsectisationBologne.tsx";
import DepigeonnisationBologne from "./pages/DepigeonnisationBologne.tsx";
import TaupesBologne from "./pages/TaupesBologne.tsx";

// Montier-en-Der
import DeratisationMontierEnDer from "./pages/DeratisationMontierEnDer.tsx";
import GuepesFrelonsMontierEnDer from "./pages/GuepesFrelonsMontierEnDer.tsx";
import DesinsectisationMontierEnDer from "./pages/DesinsectisationMontierEnDer.tsx";
import DepigeonnisationMontierEnDer from "./pages/DepigeonnisationMontierEnDer.tsx";
import TaupesMontierEnDer from "./pages/TaupesMontierEnDer.tsx";

// Chalindrey
import DeratisationChalindrey from "./pages/DeratisationChalindrey.tsx";
import GuepesFrelonsChalindrey from "./pages/GuepesFrelonsChalindrey.tsx";
import DesinsectisationChalindrey from "./pages/DesinsectisationChalindrey.tsx";
import DepigeonnisationChalindrey from "./pages/DepigeonnisationChalindrey.tsx";
import TaupesChalindrey from "./pages/TaupesChalindrey.tsx";

// Froncles
import DeratisationFroncles from "./pages/DeratisationFroncles.tsx";
import GuepesFrelonsFroncles from "./pages/GuepesFrelonsFroncles.tsx";
import DesinsectisationFroncles from "./pages/DesinsectisationFroncles.tsx";
import DepigeonnisationFroncles from "./pages/DepigeonnisationFroncles.tsx";
import TaupesFroncles from "./pages/TaupesFroncles.tsx";

// Châteauvillain
import DeratisationChateauvillain from "./pages/DeratisationChateauvillain.tsx";
import GuepesFrelonsChateauvillain from "./pages/GuepesFrelonsChateauvillain.tsx";
import DesinsectisationChateauvillain from "./pages/DesinsectisationChateauvillain.tsx";
import DepigeonnisationChateauvillain from "./pages/DepigeonnisationChateauvillain.tsx";
import TaupesChateauvillain from "./pages/TaupesChateauvillain.tsx";

// Arc-en-Barrois
import DeratisationArcEnBarrois from "./pages/DeratisationArcEnBarrois.tsx";
import GuepesFrelonsArcEnBarrois from "./pages/GuepesFrelonsArcEnBarrois.tsx";
import DesinsectisationArcEnBarrois from "./pages/DesinsectisationArcEnBarrois.tsx";
import DepigeonnisationArcEnBarrois from "./pages/DepigeonnisationArcEnBarrois.tsx";
import TaupesArcEnBarrois from "./pages/TaupesArcEnBarrois.tsx";

// Semoutiers-Montsaon
import DeratisationSemoutiersMontsaon from "./pages/DeratisationSemoutiersMontsaon.tsx";
import GuepesFrelonsSemoutiersMontsaon from "./pages/GuepesFrelonsSemoutiersMontsaon.tsx";
import DesinsectisationSemoutiersMontsaon from "./pages/DesinsectisationSemoutiersMontsaon.tsx";
import DepigeonnisationSemoutiersMontsaon from "./pages/DepigeonnisationSemoutiersMontsaon.tsx";
import TaupesSemoutiersMontsaon from "./pages/TaupesSemoutiersMontsaon.tsx";

// Troyes (Aube 10) — Dératisation + Dépigeonnisation uniquement
import DeratisationTroyes from "./pages/DeratisationTroyes.tsx";
import DepigeonnisationTroyes from "./pages/DepigeonnisationTroyes.tsx";

// Bar-sur-Aube (Aube 10) — Tous les services
import DeratisationBarSurAube from "./pages/DeratisationBarSurAube.tsx";
import GuepesFrelonsBarSurAube from "./pages/GuepesFrelonsBarSurAube.tsx";
import DesinsectisationBarSurAube from "./pages/DesinsectisationBarSurAube.tsx";
import DepigeonnisationBarSurAube from "./pages/DepigeonnisationBarSurAube.tsx";
import TaupesBarSurAube from "./pages/TaupesBarSurAube.tsx";

// Vitry-le-François (Marne 51) — Désinsectisation + Dépigeonnisation uniquement
import DesinsectisationVitryLeFrancois from "./pages/DesinsectisationVitryLeFrancois.tsx";
import DepigeonnisationVitryLeFrancois from "./pages/DepigeonnisationVitryLeFrancois.tsx";


// Vittel (Vosges 88) — Désinsectisation + Dératisation + Dépigeonnisation
import DeratisationVittel from "./pages/DeratisationVittel.tsx";
import DesinsectisationVittel from "./pages/DesinsectisationVittel.tsx";
import DepigeonnisationVittel from "./pages/DepigeonnisationVittel.tsx";

// Neufchâteau (Vosges 88) — Désinsectisation + Dératisation + Dépigeonnisation
import DeratisationNeufchateau from "./pages/DeratisationNeufchateau.tsx";
import DesinsectisationNeufchateau from "./pages/DesinsectisationNeufchateau.tsx";
import DepigeonnisationNeufchateau from "./pages/DepigeonnisationNeufchateau.tsx";

// Dijon (Côte-d'Or 21) — Dératisation + Dépigeonnisation uniquement
import DeratisationDijon from "./pages/DeratisationDijon.tsx";
import DepigeonnisationDijon from "./pages/DepigeonnisationDijon.tsx";


// Châtillon-sur-Seine (Côte-d'Or 21) — Dératisation + Dépigeonnisation uniquement
import DeratisationChatillonSurSeine from "./pages/DeratisationChatillonSurSeine.tsx";
import DepigeonnisationChatillonSurSeine from "./pages/DepigeonnisationChatillonSurSeine.tsx";


// Élimination Pigeons — Pages villes (particuliers)

const queryClient = new QueryClient();

interface AppProps {
  /** Router component — BrowserRouter in the browser, StaticRouter during prerender. */
  Router?: React.ComponentType<any>;
  routerProps?: Record<string, unknown>;
}

const App = ({ Router = BrowserRouter, routerProps = {} }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router {...routerProps}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/guepes-frelons" element={<GuepesFrelons />} />
          <Route path="/desinsectisation" element={<Desinsectisation />} />
          <Route path="/taupes" element={<Taupes />} />
          <Route path="/cafards-blattes" element={<CafardsBlattes />} />
          <Route path="/cafards-blattes-chaumont" element={<CafardsBlattesChaumont />} />
          <Route path="/cafards-blattes-saint-dizier" element={<CafardsBlattesSaintDizier />} />
          <Route path="/cafards-blattes-langres" element={<CafardsBlattesLangres />} />
          <Route path="/cafards-blattes-joinville" element={<CafardsBlattesJoinville />} />
          <Route path="/cafards-blattes-nogent" element={<CafardsBlattesNogent />} />
          <Route path="/cafards-blattes-bourbonne-les-bains" element={<CafardsBlattesBourbonneLesBains />} />
          <Route path="/cafards-blattes-bar-sur-aube" element={<CafardsBlattesBarSurAube />} />
          <Route path="/depigeonnage" element={<Depigeonnisation />} />
          <Route path="/deratisation" element={<Deratisation />} />
          {/* Chaumont — tous les services */}
          <Route path="/deratisation-chaumont" element={<DeratisationChaumont />} />
          <Route path="/guepes-frelons-chaumont" element={<GuepesFrelonsChaumont />} />
          <Route path="/desinsectisation-chaumont" element={<DesinsectisationChaumont />} />
          <Route path="/depigeonnisation-chaumont" element={<DepigeonnisationChaumont />} />
          <Route path="/taupes-chaumont" element={<TaupesChaumont />} />
          {/* Langres — tous les services */}
          <Route path="/deratisation-langres" element={<DeratisationLangres />} />
          <Route path="/guepes-frelons-langres" element={<GuepesFrelonsLangres />} />
          <Route path="/desinsectisation-langres" element={<DesinsectisationLangres />} />
          <Route path="/depigeonnisation-langres" element={<DepigeonnisationLangres />} />
          <Route path="/taupes-langres" element={<TaupesLangres />} />
          {/* Nogent — tous les services */}
          <Route path="/deratisation-nogent" element={<DeratisationNogent />} />
          <Route path="/guepes-frelons-nogent" element={<GuepesFrelonsNogent />} />
          <Route path="/desinsectisation-nogent" element={<DesinsectisationNogent />} />
          <Route path="/depigeonnisation-nogent" element={<DepigeonnisationNogent />} />
          <Route path="/taupes-nogent" element={<TaupesNogent />} />
          {/* Saint-Dizier — tous les services */}
          <Route path="/deratisation-saint-dizier" element={<DeratisationSaintDizier />} />
          <Route path="/guepes-frelons-saint-dizier" element={<GuepesFrelonsSaintDizier />} />
          <Route path="/desinsectisation-saint-dizier" element={<DesinsectisationSaintDizier />} />
          <Route path="/depigeonnisation-saint-dizier" element={<DepigeonnisationSaintDizier />} />
          <Route path="/taupes-saint-dizier" element={<TaupesSaintDizier />} />
          {/* Joinville — tous les services */}
          <Route path="/deratisation-joinville" element={<DeratisationJoinville />} />
          <Route path="/guepes-frelons-joinville" element={<GuepesFrelonsJoinville />} />
          <Route path="/desinsectisation-joinville" element={<DesinsectisationJoinville />} />
          <Route path="/depigeonnisation-joinville" element={<DepigeonnisationJoinville />} />
          <Route path="/taupes-joinville" element={<TaupesJoinville />} />
          <Route path="/regulation-esod" element={<Esod />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/plan-du-site" element={<PlanduSite />} />
          <Route path="/zone-intervention" element={<ZoneIntervention />} />

          {/* Wassy — tous les services */}
          <Route path="/deratisation-wassy" element={<DeratisationWassy />} />
          <Route path="/guepes-frelons-wassy" element={<GuepesFrelonsWassy />} />
          <Route path="/desinsectisation-wassy" element={<DesinsectisationWassy />} />
          <Route path="/depigeonnisation-wassy" element={<DepigeonnisationWassy />} />
          <Route path="/taupes-wassy" element={<TaupesWassy />} />

          {/* Bourbonne-les-Bains — tous les services */}
          <Route path="/deratisation-bourbonne-les-bains" element={<DeratisationBourbonne />} />
          <Route path="/guepes-frelons-bourbonne-les-bains" element={<GuepesFrelonsBourbonne />} />
          <Route path="/desinsectisation-bourbonne-les-bains" element={<DesinsectisationBourbonne />} />
          <Route path="/depigeonnisation-bourbonne-les-bains" element={<DepigeonnisationBourbonne />} />
          <Route path="/taupes-bourbonne-les-bains" element={<TaupesBourbonne />} />

          {/* Bologne — tous les services */}
          <Route path="/deratisation-bologne" element={<DeratisationBologne />} />
          <Route path="/guepes-frelons-bologne" element={<GuepesFrelonsBologne />} />
          <Route path="/desinsectisation-bologne" element={<DesinsectisationBologne />} />
          <Route path="/depigeonnisation-bologne" element={<DepigeonnisationBologne />} />
          <Route path="/taupes-bologne" element={<TaupesBologne />} />

          {/* Montier-en-Der — tous les services */}
          <Route path="/deratisation-montier-en-der" element={<DeratisationMontierEnDer />} />
          <Route path="/guepes-frelons-montier-en-der" element={<GuepesFrelonsMontierEnDer />} />
          <Route path="/desinsectisation-montier-en-der" element={<DesinsectisationMontierEnDer />} />
          <Route path="/depigeonnisation-montier-en-der" element={<DepigeonnisationMontierEnDer />} />
          <Route path="/taupes-montier-en-der" element={<TaupesMontierEnDer />} />

          {/* Chalindrey — tous les services */}
          <Route path="/deratisation-chalindrey" element={<DeratisationChalindrey />} />
          <Route path="/guepes-frelons-chalindrey" element={<GuepesFrelonsChalindrey />} />
          <Route path="/desinsectisation-chalindrey" element={<DesinsectisationChalindrey />} />
          <Route path="/depigeonnisation-chalindrey" element={<DepigeonnisationChalindrey />} />
          <Route path="/taupes-chalindrey" element={<TaupesChalindrey />} />

          {/* Froncles — tous les services */}
          <Route path="/deratisation-froncles" element={<DeratisationFroncles />} />
          <Route path="/guepes-frelons-froncles" element={<GuepesFrelonsFroncles />} />
          <Route path="/desinsectisation-froncles" element={<DesinsectisationFroncles />} />
          <Route path="/depigeonnisation-froncles" element={<DepigeonnisationFroncles />} />
          <Route path="/taupes-froncles" element={<TaupesFroncles />} />

          {/* Châteauvillain — tous les services */}
          <Route path="/deratisation-chateauvillain" element={<DeratisationChateauvillain />} />
          <Route path="/guepes-frelons-chateauvillain" element={<GuepesFrelonsChateauvillain />} />
          <Route path="/desinsectisation-chateauvillain" element={<DesinsectisationChateauvillain />} />
          <Route path="/depigeonnisation-chateauvillain" element={<DepigeonnisationChateauvillain />} />
          <Route path="/taupes-chateauvillain" element={<TaupesChateauvillain />} />

          {/* Arc-en-Barrois — tous les services */}
          <Route path="/deratisation-arc-en-barrois" element={<DeratisationArcEnBarrois />} />
          <Route path="/guepes-frelons-arc-en-barrois" element={<GuepesFrelonsArcEnBarrois />} />
          <Route path="/desinsectisation-arc-en-barrois" element={<DesinsectisationArcEnBarrois />} />
          <Route path="/depigeonnisation-arc-en-barrois" element={<DepigeonnisationArcEnBarrois />} />
          <Route path="/taupes-arc-en-barrois" element={<TaupesArcEnBarrois />} />

          {/* Semoutiers-Montsaon — tous les services */}
          <Route path="/deratisation-semoutiers-montsaon" element={<DeratisationSemoutiersMontsaon />} />
          <Route path="/guepes-frelons-semoutiers-montsaon" element={<GuepesFrelonsSemoutiersMontsaon />} />
          <Route path="/desinsectisation-semoutiers-montsaon" element={<DesinsectisationSemoutiersMontsaon />} />
          <Route path="/depigeonnisation-semoutiers-montsaon" element={<DepigeonnisationSemoutiersMontsaon />} />
          <Route path="/taupes-semoutiers-montsaon" element={<TaupesSemoutiersMontsaon />} />

          {/* Troyes — Dératisation + Dépigeonnisation */}
          <Route path="/deratisation-troyes" element={<DeratisationTroyes />} />
          <Route path="/depigeonnisation-troyes" element={<DepigeonnisationTroyes />} />

          {/* Bar-sur-Aube — tous les services */}
          <Route path="/deratisation-bar-sur-aube" element={<DeratisationBarSurAube />} />
          <Route path="/guepes-frelons-bar-sur-aube" element={<GuepesFrelonsBarSurAube />} />
          <Route path="/desinsectisation-bar-sur-aube" element={<DesinsectisationBarSurAube />} />
          <Route path="/depigeonnisation-bar-sur-aube" element={<DepigeonnisationBarSurAube />} />
          <Route path="/taupes-bar-sur-aube" element={<TaupesBarSurAube />} />

          {/* Vitry-le-François — Désinsectisation + Dépigeonnisation */}
          <Route path="/desinsectisation-vitry-le-francois" element={<DesinsectisationVitryLeFrancois />} />
          <Route path="/depigeonnisation-vitry-le-francois" element={<DepigeonnisationVitryLeFrancois />} />


          {/* Vittel — Désinsectisation + Dératisation + Dépigeonnisation */}
          <Route path="/deratisation-vittel" element={<DeratisationVittel />} />
          <Route path="/desinsectisation-vittel" element={<DesinsectisationVittel />} />
          <Route path="/depigeonnisation-vittel" element={<DepigeonnisationVittel />} />

          {/* Neufchâteau — Désinsectisation + Dératisation + Dépigeonnisation */}
          <Route path="/deratisation-neufchateau" element={<DeratisationNeufchateau />} />
          <Route path="/desinsectisation-neufchateau" element={<DesinsectisationNeufchateau />} />
          <Route path="/depigeonnisation-neufchateau" element={<DepigeonnisationNeufchateau />} />

          {/* Dijon — Dératisation + Dépigeonnisation */}
          <Route path="/deratisation-dijon" element={<DeratisationDijon />} />
          <Route path="/depigeonnisation-dijon" element={<DepigeonnisationDijon />} />


          {/* Châtillon-sur-Seine — Dératisation + Dépigeonnisation */}
          <Route path="/deratisation-chatillon-sur-seine" element={<DeratisationChatillonSurSeine />} />
          <Route path="/depigeonnisation-chatillon-sur-seine" element={<DepigeonnisationChatillonSurSeine />} />


          {/* Élimination Pigeons — Pages villes (particuliers) */}

          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingCallButton />
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
