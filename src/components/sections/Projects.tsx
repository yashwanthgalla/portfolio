import { SectionHeading, ScrollReveal } from "../ui";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data";

const Projects: React.FC = () => (
  <section id="projects" className="bg-[#F9F8F4] px-6 py-32 pb-44 border-t border-[#E6E2DA] swiss-grid-pattern">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        title="selected *projects*"
        subtitle="Selected work — from dashboards to real-time apps."
        number="02"
      />

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <div key={p.id} className={i % 2 !== 0 ? "md:translate-y-12" : ""}>
            <ScrollReveal delay={i * 0.05}>
              <ProjectCard project={p} />
            </ScrollReveal>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
