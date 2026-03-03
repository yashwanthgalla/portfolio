import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { SectionHeading } from "../ui";
import { codingProfiles } from "../../data";
// @ts-expect-error — LogoLoop is a plain JSX component without type declarations
import { LogoLoop } from "../LogoLoop";

const iconMap: Record<string, React.ReactNode> = {
  github: <img src="/icons/github.gif" alt="GitHub" className="h-6 w-6 object-contain" />,
  leetcode: <FaCode className="text-2xl" />,
  codechef: <img src="/icons/icons8-codechef-100.png" alt="CodeChef" className="h-6 w-6 object-contain" />,
  hackerrank: <img src="/icons/icons8-hackerrank-50.png" alt="HackerRank" className="h-6 w-6 object-contain" />,
  linkedin: <img src="/icons/icons8-linkedin (1).gif" alt="LinkedIn" className="h-6 w-6 object-contain" />,
};

const CodingProfiles: React.FC = () => (
  <section id="profiles" className="bg-surface-alt py-24">
    <div className="mx-auto max-w-4xl px-6">
      <SectionHeading
        title="Profiles"
        subtitle="Competitive programming and open-source contributions."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {codingProfiles.map((profile, i) => (
          <motion.a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ delay: i * 0.08, duration: 0.35 }}
            className="group flex items-center gap-4 rounded-xl border border-border bg-white p-4 transition-all duration-200 hover:border-primary/30 hover:shadow-sm"
          >
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors"
              style={{ color: profile.color, background: `${profile.color}10` }}
            >
              {iconMap[profile.icon]}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-primary">{profile.name}</p>
              {profile.username && (
                <p className="truncate text-xs text-text-muted">{profile.username}</p>
              )}
            </div>
            <HiExternalLink className="shrink-0 text-text-muted opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.a>
        ))}
      </div>
    </div>

    {/* Tech stack marquee — full-bleed */}
    <div className="mt-10 grayscale opacity-60">
      <LogoLoop
        logos={[
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", alt: "AWS" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg", alt: "Vite" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", alt: "Kubernetes" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", alt: "C" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", alt: "Firebase" },
          { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg", alt: "Cloudflare" },
        ]}
        speed={80}
        logoHeight={32}
        gap={48}
        pauseOnHover
        fadeOut
      />
    </div>
  </section>
);

export default CodingProfiles;
