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
        <p className="leading-relaxed text-text-secondary">
          I&apos;m a Full Stack Developer who builds modern web applications.
          I turn ideas into elegant, performant digital products — with strong
          foundations in both frontend and backend technologies, I deliver
          end-to-end solutions that solve real problems.
        </p>
      </motion.div>

      {/* Skills grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {skillCategories.map((cat) => (
          <GlassCard key={cat.title}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
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
