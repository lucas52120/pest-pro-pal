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

// Troyes (Aube 10)
import DeratisationTroyes from "./pages/DeratisationTroyes.tsx";
import GuepesFrelonsTroyes from "./pages/GuepesFrelonsTroyes.tsx";
import DesinsectisationTroyes from "./pages/DesinsectisationTroyes.tsx";
import DepigeonnageTroyes from "./pages/DepigeonnageTroyes.tsx";
import TaupesTroyes from "./pages/TaupesTroyes.tsx";

// Bar-sur-Aube (Aube 10)
import DeratisationBarSurAube from "./pages/DeratisationBarSurAube.tsx";
import GuepesFrelonsBarSurAube from "./pages/GuepesFrelonsBarSurAube.tsx";
import DesinsectisationBarSurAube from "./pages/DesinsectisationBarSurAube.tsx";
import DepigeonnageBarSurAube from "./pages/DepigeonnageBarSurAube.tsx";
import TaupesBarSurAube from "./pages/TaupesBarSurAube.tsx";

// Vitry-le-François (Marne 51)
import DeratisationVitryLeFrancois from "./pages/DeratisationVitryLeFrancois.tsx";
import GuepesFrelonsVitryLeFrancois from "./pages/GuepesFrelonsVitryLeFrancois.tsx";
import DesinsectisationVitryLeFrancois from "./pages/DesinsectisationVitryLeFrancois.tsx";
import DepigeonnageVitryLeFrancois from "./pages/DepigeonnageVitryLeFrancois.tsx";
import TaupesVitryLeFrancois from "./pages/TaupesVitryLeFrancois.tsx";

// Châlons-en-Champagne (Marne 51)
import DeratisationChalonsEnChampagne from "./pages/DeratisationChalonsEnChampagne.tsx";
import GuepesFrelonsChalonsEnChampagne from "./pages/GuepesFrelonsChalonsEnChampagne.tsx";
import DesinsectisationChalonsEnChampagne from "./pages/DesinsectisationChalonsEnChampagne.tsx";
import DepigeonnageChalonsEnChampagne from "./pages/DepigeonnageChalonsEnChampagne.tsx";
import TaupesChalonsEnChampagne from "./pages/TaupesChalonsEnChampagne.tsx";

// Vittel (Vosges 88)
import DeratisationVittel from "./pages/DeratisationVittel.tsx";
import GuepesFrelonsVittel from "./pages/GuepesFrelonsVittel.tsx";
import DesinsectisationVittel from "./pages/DesinsectisationVittel.tsx";
import DepigeonnageVittel from "./pages/DepigeonnageVittel.tsx";
import TaupesVittel from "./pages/TaupesVittel.tsx";

// Neufchâteau (Vosges 88)
import DeratisationNeufchateau from "./pages/DeratisationNeufchateau.tsx";
import GuepesFrelonsNeufchateau from "./pages/GuepesFrelonsNeufchateau.tsx";
import DesinsectisationNeufchateau from "./pages/DesinsectisationNeufchateau.tsx";
import DepigeonnageNeufchateau from "./pages/DepigeonnageNeufchateau.tsx";
import TaupesNeufchateau from "./pages/TaupesNeufchateau.tsx";

// Dijon (Côte-d'Or 21)
import DeratisationDijon from "./pages/DeratisationDijon.tsx";
import GuepesFrelonsDijon from "./pages/GuepesFrelonsDijon.tsx";
import DesinsectisationDijon from "./pages/DesinsectisationDijon.tsx";
import DepigeonnageDijon from "./pages/DepigeonnageDijon.tsx";
import TaupesDijon from "./pages/TaupesDijon.tsx";

// Beaune (Côte-d'Or 21)
import DeratisationBeaune from "./pages/DeratisationBeaune.tsx";
import GuepesFrelonsBeaune from "./pages/GuepesFrelonsBeaune.tsx";
import DesinsectisationBeaune from "./pages/DesinsectisationBeaune.tsx";
import DepigeonnageBeaune from "./pages/DepigeonnageBeaune.tsx";
import TaupesBeaune from "./pages/TaupesBeaune.tsx";

// Châtillon-sur-Seine (Côte-d'Or 21)
import DeratisationChatillonSurSeine from "./pages/DeratisationChatillonSurSeine.tsx";
import GuepesFrelonsChatillonSurSeine from "./pages/GuepesFrelonsChatillonSurSeine.tsx";
import DesinsectisationChatillonSurSeine from "./pages/DesinsectisationChatillonSurSeine.tsx";
import DepigeonnageChatillonSurSeine from "./pages/DepigeonnageChatillonSurSeine.tsx";
import TaupesChatillonSurSeine from "./pages/TaupesChatillonSurSeine.tsx";

// Nancy (Meurthe-et-Moselle 54)
import DeratisationNancy from "./pages/DeratisationNancy.tsx";
import GuepesFrelonsNancy from "./pages/GuepesFrelonsNancy.tsx";
import DesinsectisationNancy from "./pages/DesinsectisationNancy.tsx";
import DepigeonnageNancy from "./pages/DepigeonnageNancy.tsx";
import TaupesNancy from "./pages/TaupesNancy.tsx";

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

          {/* Wassy */}
          <Route path="/deratisation-wassy" element={<DeratisationWassy />} />
          <Route path="/guepes-frelons-wassy" element={<GuepesFrelonsWassy />} />
          <Route path="/desinsectisation-wassy" element={<DesinsectisationWassy />} />
          <Route path="/depigeonnage-wassy" element={<DepigeonnageWassy />} />
          <Route path="/taupes-wassy" element={<TaupesWassy />} />

          {/* Bourbonne-les-Bains */}
          <Route path="/deratisation-bourbonne" element={<DeratisationBourbonne />} />
          <Route path="/guepes-frelons-bourbonne" element={<GuepesFrelonsBourbonne />} />
          <Route path="/desinsectisation-bourbonne" element={<DesinsectisationBourbonne />} />
          <Route path="/depigeonnage-bourbonne" element={<DepigeonnageBourbonne />} />
          <Route path="/taupes-bourbonne" element={<TaupesBourbonne />} />

          {/* Bologne */}
          <Route path="/deratisation-bologne" element={<DeratisationBologne />} />
          <Route path="/guepes-frelons-bologne" element={<GuepesFrelonsBologne />} />
          <Route path="/desinsectisation-bologne" element={<DesinsectisationBologne />} />
          <Route path="/depigeonnage-bologne" element={<DepigeonnageBologne />} />
          <Route path="/taupes-bologne" element={<TaupesBologne />} />

          {/* Montier-en-Der */}
          <Route path="/deratisation-montier-en-der" element={<DeratisationMontierEnDer />} />
          <Route path="/guepes-frelons-montier-en-der" element={<GuepesFrelonsMontierEnDer />} />
          <Route path="/desinsectisation-montier-en-der" element={<DesinsectisationMontierEnDer />} />
          <Route path="/depigeonnage-montier-en-der" element={<DepigeonnageMontierEnDer />} />
          <Route path="/taupes-montier-en-der" element={<TaupesMontierEnDer />} />

          {/* Chalindrey */}
          <Route path="/deratisation-chalindrey" element={<DeratisationChalindrey />} />
          <Route path="/guepes-frelons-chalindrey" element={<GuepesFrelonsChalindrey />} />
          <Route path="/desinsectisation-chalindrey" element={<DesinsectisationChalindrey />} />
          <Route path="/depigeonnage-chalindrey" element={<DepigeonnageChalindrey />} />
          <Route path="/taupes-chalindrey" element={<TaupesChalindrey />} />

          {/* Froncles */}
          <Route path="/deratisation-froncles" element={<DeratisationFroncles />} />
          <Route path="/guepes-frelons-froncles" element={<GuepesFrelonsFroncles />} />
          <Route path="/desinsectisation-froncles" element={<DesinsectisationFroncles />} />
          <Route path="/depigeonnage-froncles" element={<DepigeonnageFroncles />} />
          <Route path="/taupes-froncles" element={<TaupesFroncles />} />

          {/* Châteauvillain */}
          <Route path="/deratisation-chateauvillain" element={<DeratisationChateauvillain />} />
          <Route path="/guepes-frelons-chateauvillain" element={<GuepesFrelonsChateauvillain />} />
          <Route path="/desinsectisation-chateauvillain" element={<DesinsectisationChateauvillain />} />
          <Route path="/depigeonnage-chateauvillain" element={<DepigeonnageChateauvillain />} />
          <Route path="/taupes-chateauvillain" element={<TaupesChateauvillain />} />

          <Route path="/:city/:service" element={<CityService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
