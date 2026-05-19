import { motion } from "framer-motion";
import { SectionHeading, GlassCard } from "../ui";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiJsonwebtokens,
  SiMongodb, SiPostgresql, SiFirebase, SiSupabase,
  SiDocker, SiCloudflare, SiGooglecloud,
  SiGit, SiGithub, SiPostman, SiFigma,
  SiPython, SiC,
  SiKubernetes, SiJenkins
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { TbApi, TbBrandVscode, TbSql } from "react-icons/tb";

const skillCategories = [
  {
    title: "FRONTEND",
    skills: [
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
    ],
  },
  {
    title: "BACKEND",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-black" /> },
      { name: "REST APIs", icon: <TbApi className="text-gray-500" /> },
      { name: "JWT Auth", icon: <SiJsonwebtokens className="text-[#000000]" /> },
    ],
  },
  {
    title: "DATABASES",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
      { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> },
      { name: "SQL", icon: <TbSql className="text-[#003B57]" /> },
    ],
  },
  {
    title: "DEVOPS & CLOUD",
    skills: [
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
      { name: "AWS", icon: <FaAws className="text-[#232F3E]" /> },
      { name: "GCP", icon: <SiGooglecloud className="text-[#4285F4]" /> },
      { name: "Cloudflare", icon: <SiCloudflare className="text-[#F38020]" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" /> },
      { name: "Jenkins", icon: <SiJenkins className="text-[#D24939]" /> },
    ],
  },
  {
    title: "TOOLS",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="text-[#181717]" /> },
      { name: "VS Code", icon: <TbBrandVscode className="text-[#007ACC]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
    ],
  },
  {
    title: "PROGRAMMING LANGUAGES",
    skills: [
      { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
      { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "Java", icon: <FaJava className="text-[#007396]" /> },
    ],
  },
];

const About: React.FC = () => (
  <section id="about" className="px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        title="About"
        subtitle="A brief introduction to who I am and what I do."
      />

      {/* Professional summary */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <p className="leading-relaxed text-text-secondary mb-4 text-lg">
          I&apos;m Yashwanth, a Computer Science student with a strong passion for software engineering, problem solving, and building scalable applications. I enjoy working across both frontend and backend technologies, with experience in Python, JavaScript, and TypeScript. Recently, I developed a real-time chat application using React, TypeScript, and Firebase, focusing on real-time communication, responsive UI, and scalable architecture.
        </p>
        <p className="leading-relaxed text-text-secondary text-lg">
          I actively strengthen my problem-solving skills through Data Structures and Algorithms practice on platforms like LeetCode and CodeChef. I&apos;m continuously exploring modern web technologies, improving my development workflow, and learning how to design efficient, user-focused software solutions. My goal is to grow into a versatile software engineer who can contribute to impactful and innovative products.
        </p>
      </motion.div>

      {/* Skills Section */}
      {/* Skills Section Header */}
      <div className="mb-12 text-center">
        <h3 className="mb-4 text-2xl font-bold tracking-tight text-primary sm:text-3xl">Technical Arsenal</h3>
        <p className="mx-auto max-w-2xl text-text-secondary">
          A comprehensive breakdown of the technologies, tools, and languages I use to build robust and scalable applications.
        </p>
      </div>

      {/* Core Stack */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 mx-auto max-w-5xl rounded-2xl bg-surface-alt/50 border border-border p-6 text-center shadow-sm"
      >
        <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary/70">Core Stack</h4>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold sm:text-base">
          <span className="flex items-center gap-2 text-text-primary"><SiReact className="text-[#61DAFB] text-xl" /> React</span>
          <span className="text-border/80">•</span>
          <span className="flex items-center gap-2 text-text-primary"><SiNextdotjs className="text-black text-xl" /> Next.js</span>
          <span className="text-border/80">•</span>
          <span className="flex items-center gap-2 text-text-primary"><SiNodedotjs className="text-[#339933] text-xl" /> Node.js</span>
          <span className="text-border/80">•</span>
          <span className="flex items-center gap-2 text-text-primary"><SiPostgresql className="text-[#4169E1] text-xl" /> PostgreSQL</span>
          <span className="text-border/80">•</span>
          <span className="flex items-center gap-2 text-text-primary"><SiDocker className="text-[#2496ED] text-xl" /> Docker</span>
          <span className="text-border/80">•</span>
          <span className="flex items-center gap-2 text-text-primary"><FaAws className="text-[#232F3E] text-xl dark:text-white" /> AWS</span>
        </div>
      </motion.div>

      {/* Categories Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl">
        {skillCategories.map((cat, index) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <GlassCard className="!p-8 h-full">
              <h4 className="mb-8 text-center text-base font-bold uppercase tracking-widest text-primary">
                {cat.title}
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex cursor-default items-center gap-2.5 rounded-lg border border-border/60 bg-white/60 px-4 py-2.5 text-sm font-medium text-text-secondary transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white hover:text-primary hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                  >
                    <span className="text-lg opacity-80 transition-transform group-hover:scale-110 group-hover:opacity-100">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
