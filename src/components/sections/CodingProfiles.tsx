import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCode, FaStar } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { SiCredly, SiLeetcode } from "react-icons/si";
import { SectionHeading, GlassCard } from "../ui";
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

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalEasy: number;
  totalMedium: number;
  totalHard: number;
  ranking: number;
  recentSubmissions: Array<{ title: string; lang: string; statusDisplay: string }>;
}

const DEFAULT_LEETCODE: LeetCodeStats = {
  totalSolved: 16,
  easySolved: 12,
  mediumSolved: 3,
  hardSolved: 1,
  totalEasy: 947,
  totalMedium: 2063,
  totalHard: 938,
  ranking: 4626201,
  recentSubmissions: [
    { title: "Valid Anagram", lang: "python3", statusDisplay: "Accepted" },
    { title: "Two Sum", lang: "java", statusDisplay: "Accepted" },
    { title: "Sort Colors", lang: "python3", statusDisplay: "Accepted" },
  ],
};

interface CodeChefStats {
  rating: number;
  stars: number;
  globalRank: number | string;
  countryRank: number | string;
  division: string;
}

const DEFAULT_CODECHEF: CodeChefStats = {
  rating: 728,
  stars: 1,
  globalRank: 202434,
  countryRank: 195345,
  division: "Div 4",
};

const CodingProfiles: React.FC = () => {
  const [leetStats, setLeetStats] = useState<LeetCodeStats>(DEFAULT_LEETCODE);
  const [chefStats, setChefStats] = useState<CodeChefStats>(DEFAULT_CODECHEF);
  const [loadingLeet, setLoadingLeet] = useState(true);
  const [loadingChef, setLoadingChef] = useState(true);

  useEffect(() => {
    // Fetch LeetCode Stats
    fetch("https://leetcode-api-faisal.vercel.app/yashwanthgalla")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch LeetCode stats");
        return res.json();
      })
      .then((data) => {
        setLeetStats({
          totalSolved: data.totalSolved ?? DEFAULT_LEETCODE.totalSolved,
          easySolved: data.easySolved ?? DEFAULT_LEETCODE.easySolved,
          mediumSolved: data.mediumSolved ?? DEFAULT_LEETCODE.mediumSolved,
          hardSolved: data.hardSolved ?? DEFAULT_LEETCODE.hardSolved,
          totalEasy: data.totalEasy ?? DEFAULT_LEETCODE.totalEasy,
          totalMedium: data.totalMedium ?? DEFAULT_LEETCODE.totalMedium,
          totalHard: data.totalHard ?? DEFAULT_LEETCODE.totalHard,
          ranking: data.ranking ?? DEFAULT_LEETCODE.ranking,
          recentSubmissions: data.recentSubmissions 
            ? data.recentSubmissions.filter((sub: any) => sub.statusDisplay === "Accepted").slice(0, 3)
            : DEFAULT_LEETCODE.recentSubmissions,
        });
      })
      .catch((err) => {
        console.warn("LeetCode API error, using fallback statistics:", err);
      })
      .finally(() => {
        setLoadingLeet(false);
      });

    // Fetch CodeChef Stats
    fetch("https://cp-rating-api.vercel.app/codechef/nagayashwanth")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch CodeChef stats");
        return res.json();
      })
      .then((data) => {
        const ratingVal = parseInt(data.rating?.trim() || "");
        setChefStats({
          rating: isNaN(ratingVal) ? DEFAULT_CODECHEF.rating : ratingVal,
          stars: data.stars && data.stars < 7 ? data.stars : DEFAULT_CODECHEF.stars,
          globalRank: data.globalRank || DEFAULT_CODECHEF.globalRank,
          countryRank: data.countryRank || DEFAULT_CODECHEF.countryRank,
          division: data.rating && parseInt(data.rating) >= 1400 ? "Div 3" : "Div 4",
        });
      })
      .catch((err) => {
        console.warn("CodeChef API error, using fallback statistics:", err);
      })
      .finally(() => {
        setLoadingChef(false);
      });
  }, []);

  return (
    <section id="profiles" className="bg-white py-24 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Profiles"
          subtitle="Competitive programming and open-source contributions."
        />

        {/* Profiles Grid */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-16">
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

        {/* Stats Dashboard */}
        <div className="mt-20">
          <SectionHeading
            title="Coding Profile Stats"
            subtitle="Real-time performance indicators and coding milestones."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* LeetCode Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <GlassCard hover={false} className="h-full flex flex-col">
                <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFA116]/10 text-[#FFA116]">
                      <SiLeetcode className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary">LeetCode</h4>
                      <p className="text-xs text-text-muted">@yashwanthgalla</p>
                    </div>
                  </div>
                  <a
                    href="https://leetcode.com/u/yashwanthgalla/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-border p-1.5 text-text-muted hover:bg-surface-alt hover:text-primary transition-colors cursor-pointer"
                  >
                    <HiExternalLink className="text-sm" />
                  </a>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Rating/Rank row */}
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <span className="text-xs text-text-muted font-medium block">Total Solved</span>
                        <span className="text-3xl font-extrabold text-primary">{loadingLeet ? "..." : leetStats.totalSolved}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-text-muted font-medium block">Global Rank</span>
                        <span className="text-sm font-bold text-primary">
                          {loadingLeet ? "..." : `#${leetStats.ranking.toLocaleString()}`}
                        </span>
                      </div>
                    </div>

                    {/* Progress bars */}
                    <div className="space-y-3.5 mb-6">
                      {/* Easy */}
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-emerald-600">Easy</span>
                          <span className="text-text-secondary">
                            {leetStats.easySolved} <span className="text-text-muted font-normal">/ {leetStats.totalEasy}</span>
                          </span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(leetStats.easySolved / leetStats.totalEasy) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full bg-emerald-500 rounded-full"
                          />
                        </div>
                      </div>

                      {/* Medium */}
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-amber-500">Medium</span>
                          <span className="text-text-secondary">
                            {leetStats.mediumSolved} <span className="text-text-muted font-normal">/ {leetStats.totalMedium}</span>
                          </span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(leetStats.mediumSolved / leetStats.totalMedium) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full bg-amber-500 rounded-full"
                          />
                        </div>
                      </div>

                      {/* Hard */}
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1">
                          <span className="text-rose-500">Hard</span>
                          <span className="text-text-secondary">
                            {leetStats.hardSolved} <span className="text-text-muted font-normal">/ {leetStats.totalHard}</span>
                          </span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(leetStats.hardSolved / leetStats.totalHard) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full bg-rose-500 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Submissions */}
                  <div>
                    <h5 className="text-[11px] font-bold text-primary/70 uppercase tracking-widest mb-2">Recent Solved</h5>
                    <div className="space-y-1.5">
                      {leetStats.recentSubmissions.map((sub, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-surface-alt/70 border border-border/40 rounded-lg p-2 text-xs">
                          <span className="font-semibold text-text-secondary truncate max-w-[150px]">{sub.title}</span>
                          <span className="text-[10px] bg-primary/5 text-primary/80 font-bold px-1.5 py-0.5 rounded uppercase">
                            {sub.lang === "python3" ? "Python" : sub.lang === "cpp" ? "C++" : sub.lang}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* CodeChef Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <GlassCard hover={false} className="h-full flex flex-col">
                <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5B4638]/10">
                      <img src="/icons/icons8-codechef-100.png" alt="CodeChef" className="h-6 w-6 object-contain" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary">CodeChef</h4>
                      <p className="text-xs text-text-muted">@nagayashwanth</p>
                    </div>
                  </div>
                  <a
                    href="https://www.codechef.com/users/nagayashwanth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-border p-1.5 text-text-muted hover:bg-surface-alt hover:text-primary transition-colors cursor-pointer"
                  >
                    <HiExternalLink className="text-sm" />
                  </a>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Rating Info */}
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <span className="text-xs text-text-muted font-medium block">Rating</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-extrabold text-primary">{loadingChef ? "..." : chefStats.rating}</span>
                          <span className="text-xs font-bold bg-amber-500/10 text-amber-600 px-2 py-0.5 rounded-full">
                            {chefStats.division}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-text-muted font-medium block">Stars</span>
                        <span className="inline-flex items-center gap-1 text-sm font-bold bg-[#5B4638]/10 text-[#5B4638] px-2.5 py-0.5 rounded-full">
                          {chefStats.stars} <FaStar className="text-[10px]" />
                        </span>
                      </div>
                    </div>

                    {/* Rankings grid */}
                    <div className="grid grid-cols-2 gap-3 bg-surface-alt/50 border border-border/50 rounded-xl p-4 mb-6">
                      <div>
                        <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider block">Global Rank</span>
                        <span className="text-sm font-bold text-primary">
                          {loadingChef ? "..." : parseInt(chefStats.globalRank.toString()).toLocaleString() || chefStats.globalRank}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider block">Country Rank</span>
                        <span className="text-sm font-bold text-primary">
                          {loadingChef ? "..." : parseInt(chefStats.countryRank.toString()).toLocaleString() || chefStats.countryRank}
                        </span>
                      </div>
                      <div className="col-span-2 pt-2 border-t border-border/40">
                        <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider block">Highest Rating</span>
                        <span className="text-sm font-bold text-primary">{chefStats.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Division Badge Visualizer */}
                  <div className="text-center p-3 border border-dashed border-border/80 rounded-xl bg-white/40">
                    <span className="text-[11px] font-bold text-primary/70 uppercase tracking-widest block mb-1.5">Division Rank Status</span>
                    <div className="flex justify-center items-center gap-1.5 text-xs text-text-secondary font-medium">
                      <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-500 font-semibold">Div 1</span>
                      <span className="text-text-muted">➔</span>
                      <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-500 font-semibold">Div 2</span>
                      <span className="text-text-muted">➔</span>
                      <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-500 font-semibold">Div 3</span>
                      <span className="text-text-muted">➔</span>
                      <span className="px-2 py-0.5 rounded bg-[#5B4638] text-white font-bold shadow-xs">Div 4</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* HackerRank Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <GlassCard hover={false} className="h-full flex flex-col">
                <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2EC866]/10">
                      <img src="/icons/icons8-hackerrank-50.png" alt="HackerRank" className="h-6 w-6 object-contain" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary">HackerRank</h4>
                      <p className="text-xs text-text-muted">@KLU2300031794</p>
                    </div>
                  </div>
                  <a
                    href="https://www.hackerrank.com/profile/KLU2300031794"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-border p-1.5 text-text-muted hover:bg-surface-alt hover:text-primary transition-colors cursor-pointer"
                  >
                    <HiExternalLink className="text-sm" />
                  </a>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div className="text-center py-2">
                    {/* Badge Image */}
                    <img
                      src="https://hrcdn.net/fcore/assets/badges/profile-small-en-65e1b74ff7.png"
                      alt="HackerRank Problem Solving Badge"
                      className="h-20 mx-auto object-contain transition-transform duration-300 hover:rotate-6"
                    />

                    {/* Shields Badge */}
                    <img
                      src="https://img.shields.io/badge/HackerRank-5★-2EC866?style=for-the-badge&logo=hackerrank"
                      alt="HackerRank 5 Stars"
                      className="mx-auto mt-4 rounded-md shadow-2xs hover:scale-105 transition-transform"
                    />
                  </div>

                  {/* HackerRank verified skills */}
                  <div className="mt-4 pt-4 border-t border-border/40">
                    <h5 className="text-[11px] font-bold text-primary/70 uppercase tracking-widest mb-2.5 text-left">Verified Skill Stars</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-text-secondary">Problem Solving</span>
                        <span className="flex text-emerald-500 gap-0.5">
                          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-text-secondary">Java Programming</span>
                        <span className="flex text-emerald-500 gap-0.5">
                          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-text-secondary">Python Programming</span>
                        <span className="flex text-emerald-500 gap-0.5">
                          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-28 h-32 w-full overflow-hidden relative">
        <PerspectiveMarqueeScene />
      </div>
    </section>
  );
};

export default CodingProfiles;
