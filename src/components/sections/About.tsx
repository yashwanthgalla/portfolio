import { motion } from "framer-motion";
import { SectionHeading, GlassCard } from "../ui";
import { skillCategories } from "../../data";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

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
        className="mx-auto mb-16 max-w-2xl text-center"
      >
        <p className="leading-relaxed text-text-secondary mb-4">
          I&apos;m Yashwanth, Computer Science student with a strong passion for software engineering, problem solving, and building scalable applications. I enjoy working across both frontend and backend technologies, with experience in Python, JavaScript, and TypeScript. Recently, I developed a real-time chat application using React, TypeScript, and Firebase, focusing on real-time communication, responsive UI, and scalable architecture.
        </p>
        <p className="leading-relaxed text-text-secondary">
          I actively strengthen my problem-solving skills through Data Structures and Algorithms practice on platforms like LeetCode and CodeChef. I&apos;m continuously exploring modern web technologies, improving my development workflow, and learning how to design efficient, user-focused software solutions. My goal is to grow into a versatile software engineer who can contribute to impactful and innovative products.
        </p>
      </motion.div>

      {/* Skills grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {skillCategories.map((cat) => (
          <GlassCard key={cat.title}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {cat.title}
            </h3>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {cat.skills.map((skill) => (
                <motion.span
                  key={skill.name}
                  variants={fadeIn}
                  className="rounded-md border border-border bg-surface-alt px-3 py-1 text-sm text-text-secondary"
                >
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

export default About;
