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
import GuepesFrelonsChaumont from "./pages/GuepesFrelonsChaumont.tsx";
import DesinsectisationChaumont from "./pages/DesinsectisationChaumont.tsx";
import DepigeonnisationChaumont from "./pages/DepigeonnisationChaumont.tsx";
import TaupesChaumont from "./pages/TaupesChaumont.tsx";
import DeratisationLangres from "./pages/DeratisationLangres.tsx";
import DeratisationNogent from "./pages/DeratisationNogent.tsx";
import DeratisationSaintDizier from "./pages/DeratisationSaintDizier.tsx";
import DeratisationJoinville from "./pages/DeratisationJoinville.tsx";

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

// Châlons-en-Champagne (Marne 51) — Dératisation + Dépigeonnisation uniquement
import DeratisationChalonsEnChampagne from "./pages/DeratisationChalonsEnChampagne.tsx";
import DepigeonnisationChalonsEnChampagne from "./pages/DepigeonnisationChalonsEnChampagne.tsx";

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

// Beaune (Côte-d'Or 21) — Dératisation + Dépigeonnisation uniquement
import DeratisationBeaune from "./pages/DeratisationBeaune.tsx";
import DepigeonnisationBeaune from "./pages/DepigeonnisationBeaune.tsx";

// Châtillon-sur-Seine (Côte-d'Or 21) — Dératisation + Dépigeonnisation uniquement
import DeratisationChatillonSurSeine from "./pages/DeratisationChatillonSurSeine.tsx";
import DepigeonnisationChatillonSurSeine from "./pages/DepigeonnisationChatillonSurSeine.tsx";

// Nancy (Meurthe-et-Moselle 54) — Dératisation + Dépigeonnisation uniquement
import DeratisationNancy from "./pages/DeratisationNancy.tsx";
import DepigeonnisationNancy from "./pages/DepigeonnisationNancy.tsx";

// Élimination Pigeons — Pages villes (particuliers)
import EliminationPigeonsChaumont from "./pages/EliminationPigeonsChaumont.tsx";
import EliminationPigeonsLangres from "./pages/EliminationPigeonsLangres.tsx";
import EliminationPigeonsNogent from "./pages/EliminationPigeonsNogent.tsx";
import EliminationPigeonsJoinville from "./pages/EliminationPigeonsJoinville.tsx";
import EliminationPigeonsSaintDizier from "./pages/EliminationPigeonsSaintDizier.tsx";
import EliminationPigeonsWassy from "./pages/EliminationPigeonsWassy.tsx";
import EliminationPigeonsBourbonne from "./pages/EliminationPigeonsBourbonne.tsx";
import EliminationPigeonsBologne from "./pages/EliminationPigeonsBologne.tsx";
import EliminationPigeonsMontierEnDer from "./pages/EliminationPigeonsMontierEnDer.tsx";
import EliminationPigeonsChalindrey from "./pages/EliminationPigeonsChalindrey.tsx";
import EliminationPigeonsFroncles from "./pages/EliminationPigeonsFroncles.tsx";
import EliminationPigeonsChateauvillain from "./pages/EliminationPigeonsChateauvillain.tsx";
import EliminationPigeonsBarSurAube from "./pages/EliminationPigeonsBarSurAube.tsx";
import EliminationPigeonsTroyes from "./pages/EliminationPigeonsTroyes.tsx";
import EliminationPigeonsVitryLeFrancois from "./pages/EliminationPigeonsVitryLeFrancois.tsx";
import EliminationPigeonsChalonsEnChampagne from "./pages/EliminationPigeonsChalonsEnChampagne.tsx";
import EliminationPigeonsDijon from "./pages/EliminationPigeonsDijon.tsx";
import EliminationPigeonsBeaune from "./pages/EliminationPigeonsBeaune.tsx";
import EliminationPigeonsChatillonSurSeine from "./pages/EliminationPigeonsChatillonSurSeine.tsx";
import EliminationPigeonsVittel from "./pages/EliminationPigeonsVittel.tsx";
import EliminationPigeonsNeufchateau from "./pages/EliminationPigeonsNeufchateau.tsx";
import EliminationPigeonsNancy from "./pages/EliminationPigeonsNancy.tsx";

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
          {/* Chaumont — tous les services */}
          <Route path="/deratisation-chaumont" element={<DeratisationChaumont />} />
          <Route path="/guepes-frelons-chaumont" element={<GuepesFrelonsChaumont />} />
          <Route path="/desinsectisation-chaumont" element={<DesinsectisationChaumont />} />
          <Route path="/services/depigeonnisation/chaumont" element={<DepigeonnisationChaumont />} />
          <Route path="/taupes-chaumont" element={<TaupesChaumont />} />
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
          <Route path="/services/depigeonnisation/wassy" element={<DepigeonnisationWassy />} />
          <Route path="/taupes-wassy" element={<TaupesWassy />} />

          {/* Bourbonne-les-Bains — tous les services */}
          <Route path="/deratisation-bourbonne" element={<DeratisationBourbonne />} />
          <Route path="/guepes-frelons-bourbonne" element={<GuepesFrelonsBourbonne />} />
          <Route path="/desinsectisation-bourbonne" element={<DesinsectisationBourbonne />} />
          <Route path="/services/depigeonnisation/bourbonne-les-bains" element={<DepigeonnisationBourbonne />} />
          <Route path="/taupes-bourbonne" element={<TaupesBourbonne />} />

          {/* Bologne — tous les services */}
          <Route path="/deratisation-bologne" element={<DeratisationBologne />} />
          <Route path="/guepes-frelons-bologne" element={<GuepesFrelonsBologne />} />
          <Route path="/desinsectisation-bologne" element={<DesinsectisationBologne />} />
          <Route path="/services/depigeonnisation/bologne" element={<DepigeonnisationBologne />} />
          <Route path="/taupes-bologne" element={<TaupesBologne />} />

          {/* Montier-en-Der — tous les services */}
          <Route path="/deratisation-montier-en-der" element={<DeratisationMontierEnDer />} />
          <Route path="/guepes-frelons-montier-en-der" element={<GuepesFrelonsMontierEnDer />} />
          <Route path="/desinsectisation-montier-en-der" element={<DesinsectisationMontierEnDer />} />
          <Route path="/services/depigeonnisation/montier-en-der" element={<DepigeonnisationMontierEnDer />} />
          <Route path="/taupes-montier-en-der" element={<TaupesMontierEnDer />} />

          {/* Chalindrey — tous les services */}
          <Route path="/deratisation-chalindrey" element={<DeratisationChalindrey />} />
          <Route path="/guepes-frelons-chalindrey" element={<GuepesFrelonsChalindrey />} />
          <Route path="/desinsectisation-chalindrey" element={<DesinsectisationChalindrey />} />
          <Route path="/services/depigeonnisation/chalindrey" element={<DepigeonnisationChalindrey />} />
          <Route path="/taupes-chalindrey" element={<TaupesChalindrey />} />

          {/* Froncles — tous les services */}
          <Route path="/deratisation-froncles" element={<DeratisationFroncles />} />
          <Route path="/guepes-frelons-froncles" element={<GuepesFrelonsFroncles />} />
          <Route path="/desinsectisation-froncles" element={<DesinsectisationFroncles />} />
          <Route path="/services/depigeonnisation/froncles" element={<DepigeonnisationFroncles />} />
          <Route path="/taupes-froncles" element={<TaupesFroncles />} />

          {/* Châteauvillain — tous les services */}
          <Route path="/deratisation-chateauvillain" element={<DeratisationChateauvillain />} />
          <Route path="/guepes-frelons-chateauvillain" element={<GuepesFrelonsChateauvillain />} />
          <Route path="/desinsectisation-chateauvillain" element={<DesinsectisationChateauvillain />} />
          <Route path="/services/depigeonnisation/chateauvillain" element={<DepigeonnisationChateauvillain />} />
          <Route path="/taupes-chateauvillain" element={<TaupesChateauvillain />} />

          {/* Troyes — Dératisation + Dépigeonnisation */}
          <Route path="/deratisation-troyes" element={<DeratisationTroyes />} />
          <Route path="/services/depigeonnisation/troyes" element={<DepigeonnisationTroyes />} />

          {/* Bar-sur-Aube — tous les services */}
          <Route path="/deratisation-bar-sur-aube" element={<DeratisationBarSurAube />} />
          <Route path="/guepes-frelons-bar-sur-aube" element={<GuepesFrelonsBarSurAube />} />
          <Route path="/desinsectisation-bar-sur-aube" element={<DesinsectisationBarSurAube />} />
          <Route path="/services/depigeonnisation/bar-sur-aube" element={<DepigeonnisationBarSurAube />} />
          <Route path="/taupes-bar-sur-aube" element={<TaupesBarSurAube />} />

          {/* Vitry-le-François — Désinsectisation + Dépigeonnisation */}
          <Route path="/desinsectisation-vitry-le-francois" element={<DesinsectisationVitryLeFrancois />} />
          <Route path="/services/depigeonnisation/vitry-le-francois" element={<DepigeonnisationVitryLeFrancois />} />

          {/* Châlons-en-Champagne — Dératisation + Dépigeonnisation */}
          <Route path="/deratisation-chalons-en-champagne" element={<DeratisationChalonsEnChampagne />} />
          <Route path="/services/depigeonnisation/chalons-en-champagne" element={<DepigeonnisationChalonsEnChampagne />} />

          {/* Vittel — Désinsectisation + Dératisation + Dépigeonnisation */}
          <Route path="/deratisation-vittel" element={<DeratisationVittel />} />
          <Route path="/desinsectisation-vittel" element={<DesinsectisationVittel />} />
          <Route path="/services/depigeonnisation/vittel" element={<DepigeonnisationVittel />} />

          {/* Neufchâteau — Désinsectisation + Dératisation + Dépigeonnisation */}
          <Route path="/deratisation-neufchateau" element={<DeratisationNeufchateau />} />
          <Route path="/desinsectisation-neufchateau" element={<DesinsectisationNeufchateau />} />
          <Route path="/services/depigeonnisation/neufchateau" element={<DepigeonnisationNeufchateau />} />

          {/* Dijon — Dératisation + Dépigeonnisation */}
          <Route path="/deratisation-dijon" element={<DeratisationDijon />} />
          <Route path="/services/depigeonnisation/dijon" element={<DepigeonnisationDijon />} />

          {/* Beaune — Dératisation + Dépigeonnisation */}
          <Route path="/deratisation-beaune" element={<DeratisationBeaune />} />
          <Route path="/services/depigeonnisation/beaune" element={<DepigeonnisationBeaune />} />

          {/* Châtillon-sur-Seine — Dératisation + Dépigeonnisation */}
          <Route path="/deratisation-chatillon-sur-seine" element={<DeratisationChatillonSurSeine />} />
          <Route path="/services/depigeonnisation/chatillon-sur-seine" element={<DepigeonnisationChatillonSurSeine />} />

          {/* Nancy — Dératisation + Dépigeonnisation */}
          <Route path="/deratisation-nancy" element={<DeratisationNancy />} />
          <Route path="/services/depigeonnisation/nancy" element={<DepigeonnisationNancy />} />

          <Route path="/:city/:service" element={<CityService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
