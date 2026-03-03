import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { GlassCard } from "../ui";
import type { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <GlassCard className="flex flex-col overflow-hidden !p-0">
    {/* Image */}
    <div className="group relative h-48 overflow-hidden bg-surface-alt">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center gap-3 bg-primary/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white p-2.5 text-sm text-primary transition-transform hover:scale-105"
            aria-label="Live demo"
          >
            <FaExternalLinkAlt />
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white p-2.5 text-sm text-primary transition-transform hover:scale-105"
            aria-label="Source code"
          >
            <FaGithub />
          </a>
        )}
      </div>
    </div>

    {/* Content */}
    <div className="flex flex-1 flex-col p-5">
      <h3 className="mb-2 text-base font-semibold text-primary">
        {project.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-border px-2 py-0.5 text-xs text-text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </GlassCard>
);

export default ProjectCard;
