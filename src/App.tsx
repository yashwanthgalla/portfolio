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
} from "./components/sections";
import { ScrollReveal } from "./components/ui";

const Designs = lazy(() => import("./components/sections/Designs"));

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">

      <Navbar />
      <main>
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <Suspense fallback={<div className="py-24" />}>
            <Designs />
          </Suspense>
        </ScrollReveal>
        <ScrollReveal>
          <Certifications />
        </ScrollReveal>
        <ScrollReveal>
          <Hackathons />
        </ScrollReveal>
        <ScrollReveal>
          <CodingProfiles />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
