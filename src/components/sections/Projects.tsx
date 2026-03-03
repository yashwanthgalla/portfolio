import { SectionHeading } from "../ui";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data";

const Projects: React.FC = () => (
  <section id="projects" className="bg-surface-alt px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        title="Projects"
        subtitle="Selected work — from dashboards to real-time apps."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
