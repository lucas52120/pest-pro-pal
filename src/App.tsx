import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import GuepesFrelons from "./pages/GuepesFrelons.tsx";
import Desinsectisation from "./pages/Desinsectisation.tsx";
import Taupes from "./pages/Taupes.tsx";
import Depigeonnisation from "./pages/Depigeonnage.tsx";
import EliminationPigeons from "./pages/EliminationPigeons.tsx";
import Deratisation from "./pages/Deratisation.tsx";
import Esod from "./pages/Esod.tsx";
import Contact from "./pages/Contact.tsx";
import CityService from "./pages/CityService.tsx";
import MentionsLegales from "./pages/MentionsLegales.tsx";
import APropos from "./pages/APropos.tsx";
import NotFound from "./pages/NotFound.tsx";
import DeratisationChaumont from "./pages/DeratisationChaumont.tsx";
import DeratisationLangres from "./pages/DeratisationLangres.tsx";
import DeratisationNogent from "./pages/DeratisationNogent.tsx";
import DeratisationSaintDizier from "./pages/DeratisationSaintDizier.tsx";
import DeratisationJoinville from "./pages/DeratisationJoinville.tsx";

// Wassy
import DeratisationWassy from "./pages/DeratisationWassy.tsx";
import GuepesFrelonsWassy from "./pages/GuepesFrelonsWassy.tsx";
import DesinsectisationWassy from "./pages/DesinsectisationWassy.tsx";
import DepigeonnageWassy from "./pages/DepigeonnageWassy.tsx";
import TaupesWassy from "./pages/TaupesWassy.tsx";

// Bourbonne-les-Bains
import DeratisationBourbonne from "./pages/DeratisationBourbonne.tsx";
import GuepesFrelonsBourbonne from "./pages/GuepesFrelonsBourbonne.tsx";
import DesinsectisationBourbonne from "./pages/DesinsectisationBourbonne.tsx";
import DepigeonnageBourbonne from "./pages/DepigeonnageBourbonne.tsx";
import TaupesBourbonne from "./pages/TaupesBourbonne.tsx";

// Bologne
import DeratisationBologne from "./pages/DeratisationBologne.tsx";
import GuepesFrelonsBologne from "./pages/GuepesFrelonsBologne.tsx";
import DesinsectisationBologne from "./pages/DesinsectisationBologne.tsx";
import DepigeonnageBologne from "./pages/DepigeonnageBologne.tsx";
import TaupesBologne from "./pages/TaupesBologne.tsx";

// Montier-en-Der
import DeratisationMontierEnDer from "./pages/DeratisationMontierEnDer.tsx";
import GuepesFrelonsMontierEnDer from "./pages/GuepesFrelonsMontierEnDer.tsx";
import DesinsectisationMontierEnDer from "./pages/DesinsectisationMontierEnDer.tsx";
import DepigeonnageMontierEnDer from "./pages/DepigeonnageMontierEnDer.tsx";
import TaupesMontierEnDer from "./pages/TaupesMontierEnDer.tsx";

// Chalindrey
import DeratisationChalindrey from "./pages/DeratisationChalindrey.tsx";
import GuepesFrelonsChalindrey from "./pages/GuepesFrelonsChalindrey.tsx";
import DesinsectisationChalindrey from "./pages/DesinsectisationChalindrey.tsx";
import DepigeonnageChalindrey from "./pages/DepigeonnageChalindrey.tsx";
import TaupesChalindrey from "./pages/TaupesChalindrey.tsx";

// Froncles
import DeratisationFroncles from "./pages/DeratisationFroncles.tsx";
import GuepesFrelonsFroncles from "./pages/GuepesFrelonsFroncles.tsx";
import DesinsectisationFroncles from "./pages/DesinsectisationFroncles.tsx";
import DepigeonnageFroncles from "./pages/DepigeonnageFroncles.tsx";
import TaupesFroncles from "./pages/TaupesFroncles.tsx";

// Châteauvillain
import DeratisationChateauvillain from "./pages/DeratisationChateauvillain.tsx";
import GuepesFrelonsChateauvillain from "./pages/GuepesFrelonsChateauvillain.tsx";
import DesinsectisationChateauvillain from "./pages/DesinsectisationChateauvillain.tsx";
import DepigeonnageChateauvillain from "./pages/DepigeonnageChateauvillain.tsx";
import TaupesChateauvillain from "./pages/TaupesChateauvillain.tsx";

// Troyes (Aube 10) — Dératisation + Dépigeonnage uniquement
import DeratisationTroyes from "./pages/DeratisationTroyes.tsx";
import DepigeonnageTroyes from "./pages/DepigeonnageTroyes.tsx";

// Bar-sur-Aube (Aube 10) — Tous les services
import DeratisationBarSurAube from "./pages/DeratisationBarSurAube.tsx";
import GuepesFrelonsBarSurAube from "./pages/GuepesFrelonsBarSurAube.tsx";
import DesinsectisationBarSurAube from "./pages/DesinsectisationBarSurAube.tsx";
import DepigeonnageBarSurAube from "./pages/DepigeonnageBarSurAube.tsx";
import TaupesBarSurAube from "./pages/TaupesBarSurAube.tsx";

// Vitry-le-François (Marne 51) — Désinsectisation + Dépigeonnage uniquement
import DesinsectisationVitryLeFrancois from "./pages/DesinsectisationVitryLeFrancois.tsx";
import DepigeonnageVitryLeFrancois from "./pages/DepigeonnageVitryLeFrancois.tsx";

// Châlons-en-Champagne (Marne 51) — Dératisation + Dépigeonnage uniquement
import DeratisationChalonsEnChampagne from "./pages/DeratisationChalonsEnChampagne.tsx";
import DepigeonnageChalonsEnChampagne from "./pages/DepigeonnageChalonsEnChampagne.tsx";

// Vittel (Vosges 88) — Désinsectisation + Dératisation + Dépigeonnage
import DeratisationVittel from "./pages/DeratisationVittel.tsx";
import DesinsectisationVittel from "./pages/DesinsectisationVittel.tsx";
import DepigeonnageVittel from "./pages/DepigeonnageVittel.tsx";

// Neufchâteau (Vosges 88) — Désinsectisation + Dératisation + Dépigeonnage
import DeratisationNeufchateau from "./pages/DeratisationNeufchateau.tsx";
import DesinsectisationNeufchateau from "./pages/DesinsectisationNeufchateau.tsx";
import DepigeonnageNeufchateau from "./pages/DepigeonnageNeufchateau.tsx";

// Dijon (Côte-d'Or 21) — Dératisation + Dépigeonnage uniquement
import DeratisationDijon from "./pages/DeratisationDijon.tsx";
import DepigeonnageDijon from "./pages/DepigeonnageDijon.tsx";

// Beaune (Côte-d'Or 21) — Dératisation + Dépigeonnage uniquement
import DeratisationBeaune from "./pages/DeratisationBeaune.tsx";
import DepigeonnageBeaune from "./pages/DepigeonnageBeaune.tsx";

// Châtillon-sur-Seine (Côte-d'Or 21) — Dératisation + Dépigeonnage uniquement
import DeratisationChatillonSurSeine from "./pages/DeratisationChatillonSurSeine.tsx";
import DepigeonnageChatillonSurSeine from "./pages/DepigeonnageChatillonSurSeine.tsx";

// Nancy (Meurthe-et-Moselle 54) — Dératisation + Dépigeonnage uniquement
import DeratisationNancy from "./pages/DeratisationNancy.tsx";
import DepigeonnageNancy from "./pages/DepigeonnageNancy.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/guepes-frelons" element={<GuepesFrelons />} />
          <Route path="/desinsectisation" element={<Desinsectisation />} />
          <Route path="/taupes" element={<Taupes />} />
          <Route path="/depigeonnage" element={<Depigeonnisation />} />
          <Route path="/elimination-pigeons" element={<EliminationPigeons />} />
          <Route path="/deratisation" element={<Deratisation />} />
          <Route path="/deratisation-chaumont" element={<DeratisationChaumont />} />
          <Route path="/deratisation-langres" element={<DeratisationLangres />} />
          <Route path="/deratisation-nogent" element={<DeratisationNogent />} />
          <Route path="/deratisation-saint-dizier" element={<DeratisationSaintDizier />} />
          <Route path="/deratisation-joinville" element={<DeratisationJoinville />} />
          <Route path="/regulation-esod" element={<Esod />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/a-propos" element={<APropos />} />

          {/* Wassy — tous les services */}
          <Route path="/deratisation-wassy" element={<DeratisationWassy />} />
          <Route path="/guepes-frelons-wassy" element={<GuepesFrelonsWassy />} />
          <Route path="/desinsectisation-wassy" element={<DesinsectisationWassy />} />
          <Route path="/depigeonnage-wassy" element={<DepigeonnageWassy />} />
          <Route path="/taupes-wassy" element={<TaupesWassy />} />

          {/* Bourbonne-les-Bains — tous les services */}
          <Route path="/deratisation-bourbonne" element={<DeratisationBourbonne />} />
          <Route path="/guepes-frelons-bourbonne" element={<GuepesFrelonsBourbonne />} />
          <Route path="/desinsectisation-bourbonne" element={<DesinsectisationBourbonne />} />
          <Route path="/depigeonnage-bourbonne" element={<DepigeonnageBourbonne />} />
          <Route path="/taupes-bourbonne" element={<TaupesBourbonne />} />

          {/* Bologne — tous les services */}
          <Route path="/deratisation-bologne" element={<DeratisationBologne />} />
          <Route path="/guepes-frelons-bologne" element={<GuepesFrelonsBologne />} />
          <Route path="/desinsectisation-bologne" element={<DesinsectisationBologne />} />
          <Route path="/depigeonnage-bologne" element={<DepigeonnageBologne />} />
          <Route path="/taupes-bologne" element={<TaupesBologne />} />

          {/* Montier-en-Der — tous les services */}
          <Route path="/deratisation-montier-en-der" element={<DeratisationMontierEnDer />} />
          <Route path="/guepes-frelons-montier-en-der" element={<GuepesFrelonsMontierEnDer />} />
          <Route path="/desinsectisation-montier-en-der" element={<DesinsectisationMontierEnDer />} />
          <Route path="/depigeonnage-montier-en-der" element={<DepigeonnageMontierEnDer />} />
          <Route path="/taupes-montier-en-der" element={<TaupesMontierEnDer />} />

          {/* Chalindrey — tous les services */}
          <Route path="/deratisation-chalindrey" element={<DeratisationChalindrey />} />
          <Route path="/guepes-frelons-chalindrey" element={<GuepesFrelonsChalindrey />} />
          <Route path="/desinsectisation-chalindrey" element={<DesinsectisationChalindrey />} />
          <Route path="/depigeonnage-chalindrey" element={<DepigeonnageChalindrey />} />
          <Route path="/taupes-chalindrey" element={<TaupesChalindrey />} />

          {/* Froncles — tous les services */}
          <Route path="/deratisation-froncles" element={<DeratisationFroncles />} />
          <Route path="/guepes-frelons-froncles" element={<GuepesFrelonsFroncles />} />
          <Route path="/desinsectisation-froncles" element={<DesinsectisationFroncles />} />
          <Route path="/depigeonnage-froncles" element={<DepigeonnageFroncles />} />
          <Route path="/taupes-froncles" element={<TaupesFroncles />} />

          {/* Châteauvillain — tous les services */}
          <Route path="/deratisation-chateauvillain" element={<DeratisationChateauvillain />} />
          <Route path="/guepes-frelons-chateauvillain" element={<GuepesFrelonsChateauvillain />} />
          <Route path="/desinsectisation-chateauvillain" element={<DesinsectisationChateauvillain />} />
          <Route path="/depigeonnage-chateauvillain" element={<DepigeonnageChateauvillain />} />
          <Route path="/taupes-chateauvillain" element={<TaupesChateauvillain />} />

          {/* Troyes — Dératisation + Dépigeonnage */}
          <Route path="/deratisation-troyes" element={<DeratisationTroyes />} />
          <Route path="/depigeonnage-troyes" element={<DepigeonnageTroyes />} />

          {/* Bar-sur-Aube — tous les services */}
          <Route path="/deratisation-bar-sur-aube" element={<DeratisationBarSurAube />} />
          <Route path="/guepes-frelons-bar-sur-aube" element={<GuepesFrelonsBarSurAube />} />
          <Route path="/desinsectisation-bar-sur-aube" element={<DesinsectisationBarSurAube />} />
          <Route path="/depigeonnage-bar-sur-aube" element={<DepigeonnageBarSurAube />} />
          <Route path="/taupes-bar-sur-aube" element={<TaupesBarSurAube />} />

          {/* Vitry-le-François — Désinsectisation + Dépigeonnage */}
          <Route path="/desinsectisation-vitry-le-francois" element={<DesinsectisationVitryLeFrancois />} />
          <Route path="/depigeonnage-vitry-le-francois" element={<DepigeonnageVitryLeFrancois />} />

          {/* Châlons-en-Champagne — Dératisation + Dépigeonnage */}
          <Route path="/deratisation-chalons-en-champagne" element={<DeratisationChalonsEnChampagne />} />
          <Route path="/depigeonnage-chalons-en-champagne" element={<DepigeonnageChalonsEnChampagne />} />

          {/* Vittel — Désinsectisation + Dératisation + Dépigeonnage */}
          <Route path="/deratisation-vittel" element={<DeratisationVittel />} />
          <Route path="/desinsectisation-vittel" element={<DesinsectisationVittel />} />
          <Route path="/depigeonnage-vittel" element={<DepigeonnageVittel />} />

          {/* Neufchâteau — Désinsectisation + Dératisation + Dépigeonnage */}
          <Route path="/deratisation-neufchateau" element={<DeratisationNeufchateau />} />
          <Route path="/desinsectisation-neufchateau" element={<DesinsectisationNeufchateau />} />
          <Route path="/depigeonnage-neufchateau" element={<DepigeonnageNeufchateau />} />

          {/* Dijon — Dératisation + Dépigeonnage */}
          <Route path="/deratisation-dijon" element={<DeratisationDijon />} />
          <Route path="/depigeonnage-dijon" element={<DepigeonnageDijon />} />

          {/* Beaune — Dératisation + Dépigeonnage */}
          <Route path="/deratisation-beaune" element={<DeratisationBeaune />} />
          <Route path="/depigeonnage-beaune" element={<DepigeonnageBeaune />} />

          {/* Châtillon-sur-Seine — Dératisation + Dépigeonnage */}
          <Route path="/deratisation-chatillon-sur-seine" element={<DeratisationChatillonSurSeine />} />
          <Route path="/depigeonnage-chatillon-sur-seine" element={<DepigeonnageChatillonSurSeine />} />

          {/* Nancy — Dératisation + Dépigeonnage */}
          <Route path="/deratisation-nancy" element={<DeratisationNancy />} />
          <Route path="/depigeonnage-nancy" element={<DepigeonnageNancy />} />

          <Route path="/:city/:service" element={<CityService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;