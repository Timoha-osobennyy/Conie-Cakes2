// start the app always with '/' route
import Banner from "@/components/layout/Banner";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import { TooltipProvider } from "./components/ui/tooltip";

import { ThemeProvider } from "./components/layout/theme-provider";
import { SidebarProvider } from "./components/ui/sidebar";
import "./index.css";
import Index from "./pages";
import { useEffect } from "react";
import { setupScrollAnimations } from "./utils/animationObserver";

const queryClient = new QueryClient();

// Component to setup animations after render
const AnimationSetup = () => {
  useEffect(() => {
    // Setup scroll animations
    setupScrollAnimations();
  }, []);
  
  return null;
};

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <SidebarProvider>
      <TooltipProvider>
        <ThemeProvider>
          <BrowserRouter>
            <AnimationSetup />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/cakes" element={<div>Cakes Page</div>} />
              <Route path="/cart" element={<div>Cart Page</div>} />
            </Routes>
          </BrowserRouter>
          <Sonner />
          <Toaster />
          <Banner />
        </ThemeProvider>
      </TooltipProvider>
    </SidebarProvider>
  </QueryClientProvider>
);