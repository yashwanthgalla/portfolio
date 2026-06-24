import { lazy, Suspense } from "react";
import { Navbar, Footer, ScrollToTop } from "./components/layout";
import {
  Hero,
  About,
  Projects,
  Certifications,
  CodingProfiles,
  Contact,
  Hackathons,
  Contributions,
} from "./components/sections";
import { ScrollReveal } from "./components/ui";

const Designs = lazy(() => import("./components/sections/Designs"));

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-terracotta selection:text-white">
      {/* Botanical Tactile Noise Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.015] swiss-noise" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Suspense fallback={<div className="py-24" />}>
          <Designs />
        </Suspense>
        <Certifications />
        <Hackathons />
        <CodingProfiles />
        <Contributions />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
