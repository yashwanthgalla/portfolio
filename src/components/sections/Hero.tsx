import { lazy, Suspense, useRef } from "react";
import { motion } from "framer-motion";
import { HiArrowDown, HiDocumentDownload } from "react-icons/hi";
import WeatherWidget from "../ui/WeatherWidget";
// @ts-expect-error — VariableProximity is a plain JSX component without type declarations
import VariableProximity from "../VariableProximity";

// @ts-expect-error — Antigravity is a plain JSX component without type declarations
const Antigravity = lazy(() => import("../Antigravity"));

const heroTags = [
  "Full Stack Developer",
  "Backend Engineer",
  "Cloud Engineer",
  "Frontend Engineer",
  "DevOps Engineer",
];

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 pt-20 overflow-hidden bg-linear-to-br from-white via-blue-50/40 to-indigo-50/30"
    >
      {/* Weather widget */}
      <WeatherWidget />

      {/* Antigravity particle background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Antigravity
            count={300}
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={1.2}
            lerpSpeed={0.05}
            color="#5227FF"
            autoAnimate
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
          />
        </Suspense>
      </div>

      {/* Hero content */}
      <div ref={containerRef} className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        {/* Main content card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-3xl border border-white/30 bg-white/40 px-8 py-14 shadow-sm sm:px-14 sm:py-16"
        >

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-4xl font-bold leading-tight tracking-tight text-black md:text-5xl lg:text-6xl whitespace-nowrap"
        >
          <VariableProximity
            label="Galla Naga Yashwanth"
            fromFontVariationSettings="'wght' 400, 'wdth' 100"
            toFontVariationSettings="'wght' 900, 'wdth' 125"
            containerRef={containerRef}
            radius={150}
            falloff="gaussian"
            className="variable-proximity-text"
          />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 flex max-w-xl flex-wrap items-center justify-center gap-2"
        >
          {heroTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-black/80 shadow-sm backdrop-blur-sm md:text-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-black/10 bg-white/60 px-5 py-2.5 text-sm font-medium text-black transition-all hover:bg-white/80"
          >
            <HiArrowDown className="text-sm" />
            View Projects
          </button>

          <a
            href="/Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white/60 px-5 py-2.5 text-sm font-medium text-black transition-all hover:bg-white/80"
          >
            <HiDocumentDownload className="text-sm" />
            Resume
          </a>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
};

export default Hero;
