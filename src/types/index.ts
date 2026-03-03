/* ── Shared TypeScript interfaces ──────────────────────── */

export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface DesignItem {
  id: number;
  title: string;
  category: "poster" | "graphic" | "cad";
  image: string;
  description?: string;
}

export interface CodingProfile {
  name: string;
  url: string;
  icon: string; // react-icons identifier handled in component
  color: string;
  username?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
