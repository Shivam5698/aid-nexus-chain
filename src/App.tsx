import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Donors from "./pages/Donors";
import Victims from "./pages/Victims";
import Vendors from "./pages/Vendors";
import Transparency from "./pages/Transparency";
import AIInsightsPage from "./pages/AIInsightsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/donors" element={<Donors />} />
          <Route path="/victims" element={<Victims />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/transparency" element={<Transparency />} />
          <Route path="/ai-insights" element={<AIInsightsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
