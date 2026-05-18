import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { SiCredly } from "react-icons/si";
import { SectionHeading } from "../ui";
import { codingProfiles } from "../../data";
import { PerspectiveMarquee } from "../ui/perspective-marquee";

function PerspectiveMarqueeScene() {
  return (
    <PerspectiveMarquee
      items={[
        "React", "TypeScript", "JavaScript", "HTML5", "CSS3",
        "Tailwind CSS", "Next.js", "Node.js", "MongoDB", "PostgreSQL",
        "Git", "AWS", "Figma", "Docker", "Vite",
        "Kubernetes", "C", "Java", "Firebase", "Cloudflare"
      ]}
      rotateY={-28}
      rotateX={8}
      perspective={1200}
      fontSize={40}
      pixelsPerFrame={1.5}
      background="#ffffff"
      fadeColor="#ffffff"
      color="#1A1A1A"
    />
  );
}

const iconMap: Record<string, React.ReactNode> = {
  github: <img src="/icons/github.gif" alt="GitHub" className="h-6 w-6 object-contain" />,
  leetcode: <FaCode className="text-2xl" />,
  codechef: <img src="/icons/icons8-codechef-100.png" alt="CodeChef" className="h-6 w-6 object-contain" />,
  hackerrank: <img src="/icons/icons8-hackerrank-50.png" alt="HackerRank" className="h-6 w-6 object-contain" />,
  linkedin: <img src="/icons/icons8-linkedin (1).gif" alt="LinkedIn" className="h-6 w-6 object-contain" />,
  credly: <SiCredly className="text-2xl" />,
};

const CodingProfiles: React.FC = () => (
  <section id="profiles" className="bg-white py-24">
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeading
        title="Profiles"
        subtitle="Competitive programming and open-source contributions."
      />

      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
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

    <div className="mt-12 h-32 w-full overflow-hidden relative">
      <PerspectiveMarqueeScene />
    </div>
  </section>
);

export default CodingProfiles;
