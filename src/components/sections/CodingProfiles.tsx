import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { SectionHeading } from "../ui";
import { codingProfiles } from "../../data";

const iconMap: Record<string, React.ReactNode> = {
  github: <img src="/icons/github.gif" alt="GitHub" className="h-6 w-6 object-contain" />,
  leetcode: <FaCode className="text-2xl" />,
  codechef: <img src="/icons/icons8-codechef-100.png" alt="CodeChef" className="h-6 w-6 object-contain" />,
  hackerrank: <img src="/icons/icons8-hackerrank-50.png" alt="HackerRank" className="h-6 w-6 object-contain" />,
  linkedin: <img src="/icons/icons8-linkedin (1).gif" alt="LinkedIn" className="h-6 w-6 object-contain" />,
};

const CodingProfiles: React.FC = () => (
  <section id="profiles" className="bg-surface-alt px-6 py-24">
    <div className="mx-auto max-w-4xl">
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
  </section>
);

export default CodingProfiles;
