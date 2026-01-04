import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/ScrollToTop";

// Lazy load pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const VisionMissionPage = lazy(() => import("./pages/VisionMissionPage"));
// const LeadershipPage = lazy(() => import("./pages/LeadershipPage"));
const QualityCertificationsPage = lazy(() => import("./pages/QualityCertificationsPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const ProductInspectionPage = lazy(() => import("./pages/ProductInspection"));
const FacilitiesPage = lazy(() => import("./pages/FacilitiesPage"));
const CapabilitiesPage = lazy(() => import("./pages/CapabilitiesPage"));
const IndustriesPage = lazy(() => import("./pages/IndustriesPage"));
const ClientsPage = lazy(() => import("./pages/ClientsPage"));
const SustainabilityPage = lazy(() => import("./pages/SustainabilityPage"));
const BusinessPerformancePage = lazy(() => import("./pages/BusinessPerformancePage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Industries pages
const MiningMineralProcessingPage = lazy(() => import("./pages/industries/MiningMineralProcessingPage"));
const MaterialHandlingPage = lazy(() => import("./pages/industries/MaterialHandlingPage"));
const RailwaysTransportationPage = lazy(() => import("./pages/industries/RailwaysTransportationPage"));
const FiltrationSystemsPage = lazy(() => import("./pages/industries/FiltrationSystemsPage"));

// Facilities pages
const Unit1MachiningPage = lazy(() => import("./pages/facilities/Unit1MachiningPage"));
const Unit2CastingPage = lazy(() => import("./pages/facilities/Unit2CastingPage"));

const queryClient = new QueryClient();

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/vision-mission" element={<VisionMissionPage />} />
              {/* <Route path="/leadership" element={<LeadershipPage />} /> */}
              <Route path="/quality-certifications" element={<QualityCertificationsPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:productId" element={<ProductDetailPage />} />
              <Route path="/product-inspection" element={<ProductInspectionPage />} />
              <Route path="/facilities" element={<FacilitiesPage />} />
              <Route path="/facilities/unit-1-machining-fabrication" element={<Unit1MachiningPage />} />
              <Route path="/facilities/unit-2-casting-plant" element={<Unit2CastingPage />} />
              <Route path="/capabilities" element={<CapabilitiesPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/industries/mining-mineral-processing" element={<MiningMineralProcessingPage />} />
              <Route path="/industries/material-handling" element={<MaterialHandlingPage />} />
              <Route path="/industries/railways-transportation" element={<RailwaysTransportationPage />} />
              <Route path="/industries/filtration-systems" element={<FiltrationSystemsPage />} />
              <Route path="/clients" element={<ClientsPage />} />
              <Route path="/sustainability" element={<SustainabilityPage />} />
              <Route path="/business-performance" element={<BusinessPerformancePage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
