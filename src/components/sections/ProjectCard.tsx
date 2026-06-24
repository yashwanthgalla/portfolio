import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import type { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="flex flex-col border border-[#E6E2DA] bg-white rounded-3xl p-3 shadow-[0_10px_25px_rgba(45,58,49,0.03)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(45,58,49,0.08)] transition-all duration-500 ease-out h-full group">
    {/* Arch Framed Image Container */}
    <div className="relative h-56 w-full bg-[#F2F0EB] rounded-t-[100px] rounded-b-2xl overflow-hidden border border-[#E6E2DA]/40 p-2.5">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover rounded-t-[90px] rounded-b-xl transition-all duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center gap-3 bg-[#2D3A31]/50 opacity-0 transition-opacity duration-300 rounded-t-[100px] rounded-b-2xl group-hover:opacity-100">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2D3A31] border border-[#E6E2DA] transition-colors hover:bg-[#C27B66] hover:text-white cursor-pointer shadow-sm"
            aria-label="Live demo"
          >
            <FaExternalLinkAlt className="text-xs" />
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2D3A31] border border-[#E6E2DA] transition-colors hover:bg-[#C27B66] hover:text-white cursor-pointer shadow-sm"
            aria-label="Source code"
          >
            <FaGithub className="text-sm" />
          </a>
        )}
      </div>
    </div>

    {/* Content */}
    <div className="flex flex-1 flex-col p-5 pt-6">
      <h3 className="mb-2 font-serif font-bold text-xl text-[#2D3A31] leading-tight">
        {project.title}
      </h3>
      <p className="mb-6 flex-1 text-xs font-semibold leading-relaxed text-[#2D3A31]/70 uppercase">
        {project.description}
      </p>
      
      {/* Pill Badges */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="border border-[#E6E2DA] bg-[#F2F0EB]/60 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-[#2D3A31]/75 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
