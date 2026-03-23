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
          <Route path="/regulation-esod" element={<Esod />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/:city/:service" element={<CityService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
