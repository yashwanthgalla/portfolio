import { lazy, Suspense, useRef } from "react";
import { motion } from "framer-motion";
import { HiArrowDown, HiMail, HiDocumentDownload } from "react-icons/hi";
// @ts-expect-error — VariableProximity is a plain JSX component without type declarations
import VariableProximity from "../VariableProximity";

// @ts-expect-error — Antigravity is a plain JSX component without type declarations
const Antigravity = lazy(() => import("../Antigravity"));

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 pt-20 overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/30"
    >
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
        {/* Freelance badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="rounded-full border border-white/30 bg-white/40 px-6 py-2 shadow-sm"
        >
          <span className="text-xs font-medium tracking-wide text-black">
            Available for freelance work
          </span>
        </motion.div>

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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-lg font-medium text-black md:text-xl"
        >
          <VariableProximity
            label="Full Stack / Frontend / Cloud Engineer / DevOps Enthusiast"
            fromFontVariationSettings="'wght' 300, 'wdth' 100"
            toFontVariationSettings="'wght' 700, 'wdth' 115"
            containerRef={containerRef}
            radius={100}
            falloff="gaussian"
            className="variable-proximity-text"
          />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mx-auto mt-6 max-w-lg leading-relaxed text-black/70"
        >
          Hello, I’m Yashwanth, a third-year Computer Science student passionate about software development and problem solving, with a strong interest in data structures, algorithms, and full-stack development.
          I work mainly with Python, JavaScript, and TypeScript, and recently built a real-time chat application using React, TypeScript, and Firebase to explore real-time communication and scalable systems.
          I also regularly practice DSA on platforms like LeetCode and CodeChef, and I’m eager to apply my skills and grow as a software engineer
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-black/10 bg-white/50 px-5 py-2.5 text-sm font-medium text-black transition-all hover:bg-white/70"
          >
            <HiArrowDown className="text-sm" />
            View Projects
          </button>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white/50 px-5 py-2.5 text-sm font-medium text-black transition-all hover:bg-white/70"
          >
            <HiDocumentDownload className="text-sm" />
            Resume
          </a>
          <button
            onClick={() => scrollTo("#contact")}
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-black/70 transition-all hover:bg-white/30 hover:text-black"
          >
            <HiMail className="text-sm" />
            Contact
          </button>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
};

export default Hero;
