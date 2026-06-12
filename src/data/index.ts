import type {
  NavLink,
  Project,
  DesignItem,
  CodingProfile,
  SocialLink,
} from "../types";

/* ── Navigation ───────────────────────────────────────── */
export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Designing", href: "#designs" },
  { label: "Certifications", href: "#certifications" },
  { label: "Profiles", href: "#profiles" },
  { label: "Contact", href: "#contact" },
];


export const projects: Project[] = [
  {
    id: 1,
    title: "Music Streaming Website",
    description:
      "A sleek music streaming platform with playlist management, audio playback controls, and a modern responsive UI.",
    image: "Projects/musicstreaming.png",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://musicstreaming-beta.vercel.app/",
    repoUrl: "https://github.com/yashwanthgalla/musicstreaming",
  },
  {
    id: 2,
    title: "Car Rental Platform",
    description:
      "A full-stack car rental application with vehicle browsing, booking management, and a clean user-friendly interface.",
    image: "Projects/carrentals.png",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://carrental-lac-chi.vercel.app/",
    repoUrl: "https://github.com/yashwanthgalla/carrental-frontend",
  },
  {
    id: 3,
    title: "Mine Sweeper Game",
    description:
      "A retro-inspired Minesweeper game with multiple difficulty levels, timer, and AI-assisted gameplay built using Kiro.",
    image: "Projects/minesweeper.png",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Kiro AI"],
    liveUrl: "https://minesweeper-sage-pi.vercel.app/",
    repoUrl: "https://github.com/yashwanthgalla/Minesweeper-Retro-Revival-Building-an-AI-Assisted-Game-Using-Kiro",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A modern developer portfolio featuring glassmorphism UI, interactive particle effects, and smooth animations.",
    image: "Projects/portfolio.png",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://portfolioyash-xi.vercel.app/",
    repoUrl: "https://github.com/yashwanthgalla/portfolio",
  },
  {
    id: 5,
    title: "Work Tracker",
    description:
      "A productivity app for tracking daily tasks and work hours with progress visualization and analytics.",
    image: "Projects/worktracker.png",
    techStack: ["React", "Tailwind CSS", "Firebase", "Vercel"],
    liveUrl: "https://worktracker-chi.vercel.app/",
    repoUrl: "https://github.com/yashwanthgalla/worktracker",
  },
  {
    id: 6,
    title: "File Converter",
    description:
      "A fast and easy-to-use file conversion tool supporting multiple formats including PDF, images, and documents.",
    image: "Projects/fileconverter.png",
    techStack: ["React", "Tailwind CSS", "Node.js", "Vercel"],
    liveUrl: "https://dammypdf.vercel.app/",
    repoUrl: "https://github.com/yashwanthgalla/dammypdf",
  },
];

/* ── Design & CAD Projects ────────────────────────────── */
export const designItems: DesignItem[] = [
  {
    id: 1,
    title: "Rohit Sharma",
    category: "poster",
    image: "posters/batman45.png",
    description: "A dynamic sports poster tribute to Rohit Sharma, the Hitman of Indian cricket.",
  },
  {
    id: 2,
    title: "Max Verstappen",
    category: "poster",
    image: "posters/maxverstappen1.png",
    description: "A high-energy F1 poster featuring Max Verstappen, the reigning Formula 1 World Champion.",
  },
  {
    id: 3,
    title: "Messi",
    category: "poster",
    image: "posters/messi3.png",
    description: "A stylized poster celebrating Lionel Messi, the GOAT of football.",
  },
  {
    id: 4,
    title: "Sebastian Vettel",
    category: "poster",
    image: "posters/sebastian.png",
    description: "A tribute poster to Sebastian Vettel, the four-time F1 World Champion and racing legend.",
  },
  {
    id: 5,
    title: "Senku",
    category: "poster",
    image: "posters/senku.png",
    description: "An anime-inspired poster featuring Senku Ishigami from Dr. Stone, the genius scientist.",
  },
  {
    id: 6,
    title: "3D Flower Vase",
    category: "cad",
    image: "Cad/flowervase.png",
    description: "Detailed 3D architectural visualization of a modern building.",
  },
   {
    id: 7,
    title: "Cloth Pin",
    category: "cad",
    image: "Cad/clothpin.png",
    description: "Detailed 3D architectural visualization of a modern building.",
  },
   {
    id: 8,
    title: "Glass Bottle",
    category: "cad",
    image: "Cad/glassbottle.png",
    description: "Detailed 3D architectural visualization of a modern building.",
  },
   {
    id: 9,
    title: "3D Battery",
    category: "cad",
    image: "Cad/large.png",
    description: "Detailed 3D architectural visualization of a modern building.",
  },
  {
    id: 12,
    title: "3D Fan",
    category: "cad",
    image: "Cad/fan.png",
    description: "A CAD model study of a fan assembly with clean mechanical detailing.",
  },
  {
    id: 13,
    title: "Headset Model",
    category: "cad",
    image: "Cad/headset.png",
    description: "A product-style CAD model of a headset focused on form and proportions.",
  },
  {
    id: 14,
    title: "Holder Model",
    category: "cad",
    image: "Cad/holdmodel.png",
    description: "A functional CAD holder concept modeled with practical geometry and structure.",
  },
  {
    id: 15,
    title: "Spinner Model",
    category: "cad",
    image: "Cad/spinf.png",
    description: "A compact CAD spinner concept emphasizing symmetry and smooth curves.",
  },
  {
    id: 10,
    title: "Diet Coke",
    category: "poster",
    image: "posters/DietCoke.png",
    description: "A vibrant poster celebrating the iconic Diet Coke brand with a modern twist.",
  },
  {
    id: 11,
    title: "Shreyas",
    category: "poster",
    image: "posters/shreyas.png",
    description: "A new poster featuring Shreyas with a bold, high-contrast composition.",
  },
  {
    id: 16,
    title: "Rohit Sharma",
    category: "poster",
    image: "posters/rohitsharma.jpg",
    description: "A customized sports poster celebrating the legendary Rohit Sharma in his signature stance.",
  },
  {
    id: 17,
    title: "Kimi Antonelli",
    category: "poster",
    image: "posters/andreakimi.jpg",
    description: "A high-octane F1 tribute poster to Andrea Kimi Antonelli, the rising star of Formula 1.",
  }
];

/* ── Coding Profiles ──────────────────────────────────── */
export const codingProfiles: CodingProfile[] = [
  {
    name: "GitHub",
    url: "https://github.com/yashwanthgalla",
    icon: "github",
    color: "#333",
    username: "@yashwanthgalla",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/yashwanthgalla/",
    icon: "leetcode",
    color: "#FFA116",
    username: "@yashwanthgalla",
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/nagayashwanth",
    icon: "codechef",
    color: "#5B4638",
    username: "@nagayashwanth",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/KLU2300031794",
    icon: "hackerrank",
    color: "#2EC866",
    username: "@KLU2300031794",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/galla-naga-yashwanth-7776732b3/",
    icon: "linkedin",
    color: "#0077B5",
    username: "@yashwanthgalla",
  },
  {
    name: "Credly",
    url: "https://www.credly.com/users/naga-yashwanth-galla",
    icon: "credly",
    color: "#FF6B00",
    username: "@naga-yashwanth-galla",
  },
];

/* ── Social Links ─────────────────────────────────────── */
export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/yashwanthgalla", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yashwanthgalla", icon: "linkedin" },
  { name: "Twitter", url: "https://x.com/yashwanth_galla", icon: "twitter" },
  { name: "Instagram", url: "https://instagram.com/_yashwanth.45", icon: "instagram" },
  { name: "Email", url: "mailto:nagayashwanthgalla@gmail.com", icon: "email" },
];
