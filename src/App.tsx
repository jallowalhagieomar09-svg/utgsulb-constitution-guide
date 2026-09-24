import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import PreamblePage from "@/pages/PreamblePage";
import Chapter1Page from "@/pages/Chapter1Page";
import Chapter2Page from "@/pages/Chapter2Page";
import Chapter3Page from "@/pages/Chapter3Page";
import Chapter4Page from "@/pages/Chapter4Page";
import Chapter5Page from "@/pages/Chapter5Page";
import Chapter6Page from "@/pages/Chapter6Page";
import Chapter7Page from "@/pages/Chapter7Page";
import Chapter8Page from "@/pages/Chapter8Page";
import Chapter9Page from "@/pages/Chapter9Page";
import BillsPage from "@/pages/BillsPage";
import MembersPage from "@/pages/MembersPage";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/preamble" element={<PreamblePage />} />
            <Route path="/chapter-1" element={<Chapter1Page />} />
            <Route path="/chapter-2" element={<Chapter2Page />} />
            <Route path="/chapter-3" element={<Chapter3Page />} />
            <Route path="/chapter-4" element={<Chapter4Page />} />
            <Route path="/chapter-5" element={<Chapter5Page />} />
            <Route path="/chapter-6" element={<Chapter6Page />} />
            <Route path="/chapter-7" element={<Chapter7Page />} />
            <Route path="/chapter-8" element={<Chapter8Page />} />
            <Route path="/chapter-9" element={<Chapter9Page />} />
            <Route path="/bills" element={<BillsPage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
