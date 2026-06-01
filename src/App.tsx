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
    <div className="relative min-h-screen overflow-x-hidden">

      <Navbar />
      <main>
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
