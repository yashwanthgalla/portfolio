import { motion } from "framer-motion";
import { HiArrowDown, HiDocumentDownload } from "react-icons/hi";
import { GLSLHills } from "../ui";
import Button from "../ui/Button";

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
      className="relative flex min-h-screen items-center justify-center px-6 pt-32 overflow-hidden bg-[#F9F8F4] swiss-grid-pattern"
    >
      {/* Soft Clay Glowing Background Shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#DCCFC2]/30 blur-3xl z-0" />

      {/* GLSL Hills Background */}
      <div className="absolute inset-0 z-0 opacity-25">
        <GLSLHills width="100%" height="100%" />
      </div>

      {/* Decorative Vertical Side Label */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block select-none z-10">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2D3A31]/40 [writing-mode:vertical-rl] font-sans">
          GALLA NAGA YASHWANTH • PORTFOLIO • VOL. 01
        </span>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#8C9A84] block mb-4">
            00. PORTFOLIO INDEX
          </span>
          {/* Main Headline - Playfair Display serif, capitalized, with terracotta italic emphasis */}
          <h1 className="font-serif font-semibold text-5xl md:text-8xl tracking-tight leading-[1.05] text-[#2D3A31] max-w-3xl">
            Galla Naga
            <br />
            <span className="font-serif italic font-normal text-[#C27B66]">
              Yashwanth
            </span>
          </h1>
        </div>

        {/* Roles structured in pill-shaped tags */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3.5 max-w-2xl"
        >
          {heroTags.map((tag, idx) => (
            <span
              key={tag}
              className="rounded-full border border-[#E6E2DA] bg-white/70 backdrop-blur-xs py-2 px-4.5 text-[10px] font-bold uppercase tracking-widest text-[#2D3A31]/80 shadow-[0_2px_6px_rgba(45,58,49,0.02)] transition-colors hover:bg-[#8C9A84]/15 hover:text-[#2D3A31]"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Call-to-actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            onClick={() => scrollTo("#projects")}
            className="flex items-center gap-2"
          >
            <HiArrowDown className="text-sm" />
            <span>View Projects</span>
          </Button>

          <Button
            variant="outline"
            href="/Resume(18 May).pdf"
            download
            className="flex items-center gap-2"
          >
            <HiDocumentDownload className="text-sm" />
            <span>Resume</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
