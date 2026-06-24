import { motion } from "framer-motion";
import { SectionHeading, TiltedCard } from "../ui";
import { FiCode, FiCpu, FiCloud, FiDatabase, FiTerminal, FiTool } from "react-icons/fi";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiJsonwebtokens,
  SiMongodb, SiPostgresql, SiFirebase, SiSupabase,
  SiDocker, SiCloudflare,
  SiGit, SiGithub, SiPostman, SiFigma,
  SiPython, SiC,
  SiKubernetes, SiJenkins
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { TbApi, TbBrandVscode } from "react-icons/tb";

const heroStack = [
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-[#2D3A31]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
  { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
  { name: "AWS", icon: <FaAws className="text-[#232F3E]" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" /> },
];

const coreExpertise = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, highly interactive, and search-optimized user interfaces with modern component-driven architectures.",
    icon: <FiCode className="text-xl" />,
    skills: [
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-[#2D3A31]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    ],
  },
  {
    title: "Backend Engineering",
    description: "Architecting high-performance server logic, secure JWT authentication schemes, and robust RESTful API integration layers.",
    icon: <FiCpu className="text-xl" />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-[#2D3A31]" /> },
      { name: "REST APIs", icon: <TbApi className="text-neutral-400" /> },
      { name: "JWT Auth", icon: <SiJsonwebtokens className="text-[#2D3A31]" /> },
    ],
  },
  {
    title: "Database Engineering",
    description: "Structuring optimized relational schemas and document models with real-time replication and performant query indexes.",
    icon: <FiDatabase className="text-xl" />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
      { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Containerizing workflows and deploying highly available, auto-scaling cloud systems with CI/CD automation pipelines.",
    icon: <FiCloud className="text-xl" />,
    skills: [
      { name: "AWS", icon: <FaAws className="text-[#232F3E]" /> },
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" /> },
      { name: "Cloudflare", icon: <SiCloudflare className="text-[#F38020]" /> },
      { name: "Jenkins", icon: <SiJenkins className="text-[#D24939]" /> },
    ],
  },
  {
    title: "Programming Languages",
    description: "Writing highly performant, type-safe, and clean code across multiple paradigms, from low-level systems to high-level scripts.",
    icon: <FiTerminal className="text-xl" />,
    skills: [
      { name: "Java", icon: <FaJava className="text-[#007396]" /> },
      { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
    ],
  },
  {
    title: "Tools & Workflows",
    description: "Leveraging robust version control, testing tools, and design-to-code platforms for rapid and collaborative delivery.",
    icon: <FiTool className="text-xl" />,
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="text-[#2D3A31]" /> },
      { name: "VS Code", icon: <TbBrandVscode className="text-[#007ACC]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
    ],
  },
];

const About: React.FC = () => (
  <section id="about" className="px-6 py-32 border-t border-[#E6E2DA] bg-[#F9F8F4] swiss-dots">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        title="about *me*"
        subtitle="A brief introduction to who I am and what I do."
        number="01"
      />

      {/* Spacious Split Summary Layout */}
      <div className="grid gap-12 lg:grid-cols-12 items-center mb-24">
        {/* Left: highly rounded TiltedCard avatar */}
        <div className="flex justify-center lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[320px]"
          >
            <TiltedCard
              imageSrc="https://avatars.githubusercontent.com/u/223609762?v=4"
              altText="Galla Naga Yashwanth"
              captionText="Yashwanth Galla"
              containerHeight="320px"
              containerWidth="320px"
              imageHeight="300px"
              imageWidth="300px"
              scaleOnHover={1.05}
              rotateAmplitude={8}
              showTooltip={true}
              showMobileWarning={false}
            />
          </motion.div>
        </div>

        {/* Right: Summary & Key Pillars */}
        <div className="lg:col-span-7 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-[#2D3A31] text-base md:text-lg leading-relaxed text-left font-medium"
          >
            <p className="first-letter:font-serif first-letter:italic first-letter:font-bold first-letter:text-6xl first-letter:text-[#C27B66] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
              I&apos;m <strong className="text-[#2D3A31] font-bold">Yashwanth</strong>, a Computer Science student passionate about software development, problem solving, and building scalable web applications. I work across both frontend and backend technologies with experience in Python, JavaScript, TypeScript, React, and Firebase. I have developed projects including a real-time chat application focused on responsive UI and real-time communication.
            </p>
            <p>
              I continuously strengthen my problem-solving skills through Data Structures and Algorithms practice on platforms like LeetCode and CodeChef, while also exploring modern web technologies, scalable system design, and efficient software architecture.
            </p>
          </motion.div>

          {/* Key Pillars - highly rounded cards */}
          <div className="grid gap-6 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-[#E6E2DA] bg-white p-6 rounded-3xl flex flex-col gap-3 shadow-[0_10px_20px_rgba(45,58,49,0.02)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(45,58,49,0.06)] transition-all duration-300 ease-out"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8C9A84]/15 text-[#2D3A31]">
                <FiCode className="text-2xl" />
              </div>
              <h5 className="text-base font-bold text-[#2D3A31]">Software Dev</h5>
              <p className="text-sm text-[#2D3A31]/90 leading-relaxed font-medium">
                Crafting robust full-stack applications and responsive web experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-[#E6E2DA] bg-white p-6 rounded-3xl flex flex-col gap-3 shadow-[0_10px_20px_rgba(45,58,49,0.02)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(45,58,49,0.06)] transition-all duration-300 ease-out"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8C9A84]/15 text-[#2D3A31]">
                <FiCpu className="text-2xl" />
              </div>
              <h5 className="text-base font-bold text-[#2D3A31]">Problem Solving</h5>
              <p className="text-sm text-[#2D3A31]/90 leading-relaxed font-medium">
                Applying optimized algorithms and DS methodologies to code challenges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-[#E6E2DA] bg-white p-6 rounded-3xl flex flex-col gap-3 shadow-[0_10px_20px_rgba(45,58,49,0.02)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(45,58,49,0.06)] transition-all duration-300 ease-out"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8C9A84]/15 text-[#2D3A31]">
                <FiCloud className="text-2xl" />
              </div>
              <h5 className="text-base font-bold text-[#2D3A31]">DevOps & Cloud</h5>
              <p className="text-sm text-[#2D3A31]/90 leading-relaxed font-medium">
                Building and deploying cloud infrastructure with Terraform and AWS.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="relative overflow-hidden rounded-[2.5rem] border border-[#E6E2DA] bg-gradient-to-b from-white via-[#F9F8F4] to-[#EFECE6] p-6 sm:p-10 md:p-14 shadow-[0_20px_50px_rgba(45,58,49,0.04)] mt-24"
      >
        {/* Apple/Linear Grid Mesh Overlay matching 28px Swiss spacing */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(45,58,49,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,58,49,0.015)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

        {/* Ambient radial glows */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#8C9A84]/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#C27B66]/8 rounded-full blur-[100px] pointer-events-none" />

        {/* Premium Top Border Accent Line with Animated Light Beam */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#E6E2DA] pointer-events-none overflow-hidden">
          <motion.div
            initial={{ left: "-30%" }}
            animate={{ left: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "linear",
            }}
            className="absolute top-0 w-[30%] h-full bg-gradient-to-r from-transparent via-[#8C9A84]/40 to-transparent"
          />
        </div>

        {/* Section Header */}
        <div className="relative z-10 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-[#E6E2DA] pb-10">
          <div>
            <h3 className="font-serif font-bold text-3xl sm:text-4xl text-[#2D3A31] tracking-tight">
              Technical <span className="font-serif italic font-normal text-terracotta">Arsenal</span>
            </h3>
            <p className="mt-3 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              A comprehensive breakdown of the technologies, tools, and languages I use.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[#E6E2DA] bg-[#F2F0EB]/60 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#8C9A84] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Recruiter-Focused Overview
          </div>
        </div>

        {/* Hero Tech Stack Banner */}
        <div className="relative z-10 mb-10 overflow-hidden rounded-2xl border border-[#E6E2DA] bg-white/40 p-6 backdrop-blur-md">
          {/* Subtle grid banner background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#8C9A84]/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="shrink-0">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C9A84] mb-1">CORE STACK</h4>
              <p className="text-xs text-muted-foreground">Primary stack for daily engineering</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              {heroStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 rounded-xl border border-[#E6E2DA] bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#2D3A31] hover:border-[#8C9A84]/40 hover:bg-[#8C9A84]/5 hover:shadow-[0_8px_20px_rgba(140,154,132,0.1)] transition-all duration-300 cursor-default"
                >
                  <span className="text-base">{tech.icon}</span>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Expertise Cards Grid */}
        <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {coreExpertise.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-[2rem] border border-[#E6E2DA] bg-white/60 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#8C9A84]/40 hover:bg-white hover:shadow-[0_20px_45px_rgba(45,58,49,0.08)] group flex flex-col h-full justify-between"
            >
              {/* Radial glow background on hover */}
              <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-[#8C9A84]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-[8px]" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Header info */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E6E2DA] bg-[#F2F0EB]/40 text-[#8C9A84] group-hover:text-[#2D3A31] group-hover:border-[#8C9A84]/40 transition-all duration-300">
                      {cat.icon}
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-[#2D3A31] tracking-tight group-hover:text-[#C27B66] transition-colors duration-300">
                    {cat.title}
                  </h4>

                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed font-medium min-h-[40px]">
                    {cat.description}
                  </p>

                  <div className="h-[1px] bg-[#E6E2DA]/60 my-5" />
                </div>

                {/* Badges Grid */}
                <div className="grid grid-cols-2 gap-3.5 mt-auto">
                  {cat.skills.map((skill, sIdx) => {
                    const isLast = sIdx === cat.skills.length - 1;
                    const isOdd = cat.skills.length % 2 !== 0;
                    const spanClass = (isLast && isOdd) ? "col-span-2" : "col-span-1";
                    
                    return (
                      <div
                        key={skill.name}
                        className={`${spanClass} flex items-center justify-center gap-3 rounded-2xl border border-[#E6E2DA] bg-white/80 px-5 py-4 text-xs font-bold uppercase tracking-wider text-[#2D3A31] shadow-[0_2px_8px_rgba(45,58,49,0.02)] hover:-translate-y-1 hover:border-[#8C9A84]/40 hover:bg-[#8C9A84]/5 hover:shadow-[0_12px_24px_rgba(140,154,132,0.12)] transition-all duration-300 cursor-default`}
                      >
                        <span className="text-lg shrink-0">{skill.icon}</span>
                        <span className="font-bold">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
