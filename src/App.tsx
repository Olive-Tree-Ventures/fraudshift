import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Services from "./pages/Services.tsx";
import Industries from "./pages/Industries.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import OurPeople from "./pages/OurPeople.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Layout from "./components/Layout.tsx";
import { useAnalytics } from "@/hooks/useAnalytics";
import { CookieConsent } from "@/components/CookieConsent";

const queryClient = new QueryClient();

// AppContent contains everything except the router so entry-server.tsx can
// wrap it in StaticRouter during pre-rendering.
export const AppContent = () => {
  useAnalytics();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/our-people" element={<OurPeople />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <CookieConsent />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
