import { motion } from "framer-motion";
import { HiArrowDown, HiDocumentDownload } from "react-icons/hi";
import { BlurText } from "../ui";
// @ts-expect-error - DotField is JSX
import DotField from "../../components/DotField";

const heroTags = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "React & Next.js Developer",
  "Cloud & DevOps Enthusiast",
];

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 pt-20 overflow-hidden bg-linear-to-br from-white via-blue-50/40 to-indigo-50/30"
    >
      {/* DotField particle background */}
      <div className="absolute inset-0 z-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly={true}
          gradientFrom="#A855F7"
          gradientTo="#B497CF"
          glowColor="transparent"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        {/* Main content card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-3xl border border-white/30 bg-white/40 px-8 py-14 shadow-sm sm:px-14 sm:py-16"
        >

          <BlurText
            text="Galla Naga Yashwanth"
            delay={150}
            animateBy="words"
            direction="top"
            className="justify-center text-4xl font-bold leading-tight tracking-tight text-black md:text-5xl lg:text-6xl whitespace-nowrap"
          />

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
              href="/Resume(18 May).pdf"
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
