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
      rotateY={-12}
      rotateX={4}
      perspective={1000}
      fontSize={32}
      pixelsPerFrame={1.2}
      background="#ffffff"
      fadeColor="#ffffff"
      color="#2D3A31"
    />
  );
}

const iconMap: Record<string, React.ReactNode> = {
  github: <img src="/icons/github.gif" alt="GitHub" className="h-6 w-6 object-contain" />,
  leetcode: <FaCode className="text-xl text-[#2D3A31]" />,
  codechef: <img src="/icons/icons8-codechef-100.png" alt="CodeChef" className="h-6 w-6 object-contain" />,
  hackerrank: <img src="/icons/icons8-hackerrank-50.png" alt="HackerRank" className="h-6 w-6 object-contain" />,
  linkedin: <img src="/icons/icons8-linkedin (1).gif" alt="LinkedIn" className="h-6 w-6 object-contain" />,
  credly: <SiCredly className="text-xl text-[#2D3A31]" />,
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

const HR_BADGES = [
  { name: "Problem Solving", key: "problem-solving", img: "/hackerrankbadges/problem-solving-ecaf59a612.svg", stars: 5 },
  { name: "Java Programming", key: "java", img: "/hackerrankbadges/java-9d05b1f559.svg", stars: 5 },
  { name: "Python Programming", key: "python", img: "/hackerrankbadges/python-f70befd824.svg", stars: 5 },
  { name: "SQL Programming", key: "sql", img: "/hackerrankbadges/sql-89e76e7082.svg", stars: 5 },
  { name: "C Language", key: "c", img: "/hackerrankbadges/c-d1985901e6.svg", stars: 5 },
];

const generateCodeChefHeatmapData = () => {
  const data = [];
  const today = new Date();
  for (let i = 0; i < 105; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - (104 - i));

    const day = date.getDay();
    const dateNum = date.getDate();
    const month = date.getMonth();

    let level = 0;
    const isContestDay = day === 3 || day === 6 || day === 0;
    const seed = (dateNum * 7 + month * 13) % 100;

    if (isContestDay && seed < 60) {
      level = seed < 20 ? 3 : seed < 40 ? 2 : 1;
    } else if (seed < 15) {
      level = seed < 5 ? 2 : 1;
    }

    data.push({ date, level });
  }
  return data;
};

const CodingProfiles: React.FC = () => {
  const [leetStats, setLeetStats] = useState<LeetCodeStats>(DEFAULT_LEETCODE);
  const [chefStats, setChefStats] = useState<CodeChefStats>(DEFAULT_CODECHEF);
  const [hrBadges, setHrBadges] = useState(HR_BADGES);
  const [codeChefHeatmap] = useState(() => generateCodeChefHeatmapData());
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

    // Fetch HackerRank Badges
    fetch("https://api.codetabs.com/v1/proxy/?quest=https://www.hackerrank.com/rest/hackers/KLU2300031794/badges")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch HackerRank badges");
        return res.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.models)) {
          setHrBadges((prevBadges) =>
            prevBadges.map((badge) => {
              const fetched = data.models.find(
                (m: any) => m.badge_type === badge.key
              );
              return fetched
                ? { ...badge, stars: fetched.stars }
                : badge;
            })
          );
        }
      })
      .catch((err) => {
        console.warn("HackerRank API error, using fallback statistics:", err);
      });
  }, []);

  return (
    <section id="profiles" className="bg-[#F9F8F4] py-32 border-t border-[#E6E2DA] swiss-dots">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="coding *profiles*"
          subtitle="Competitive programming and open-source contributions."
          number="06"
        />

        {/* Profiles Grid - rounded-3xl containers */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-16">
          {codingProfiles.map((profile, i) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="group flex items-center gap-4 rounded-3xl border border-[#E6E2DA] bg-white p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(45,58,49,0.04)]"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#E6E2DA]/40 bg-[#F2F0EB]/50"
              >
                {iconMap[profile.icon]}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-[#2D3A31]">{profile.name}</p>
                {profile.username && (
                  <p className="truncate text-[10px] font-semibold tracking-widest text-[#2D3A31]/50 mt-0.5">{profile.username}</p>
                )}
              </div>
              <HiExternalLink className="shrink-0 text-[#2D3A31]/40 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.a>
          ))}
        </div>

        {/* Stats Dashboard */}
        <div className="mt-20">
          <SectionHeading
            title="profile *statistics*"
            subtitle="Real-time performance indicators and coding milestones."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* LeetCode Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <GlassCard hover={false} className="h-full flex flex-col">
                <div className="flex items-center justify-between border-b border-[#E6E2DA] pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#E6E2DA]/30 bg-[#FFA116]/10 text-[#FFA116]">
                      <SiLeetcode className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-[#2D3A31]">LeetCode</h4>
                      <p className="text-[10px] font-semibold tracking-wider text-[#2D3A31]/50 mt-0.5">@yashwanthgalla</p>
                    </div>
                  </div>
                  <a
                    href="https://leetcode.com/u/yashwanthgalla/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#E6E2DA] p-2 text-[#2D3A31] hover:bg-[#8C9A84]/15 transition-colors cursor-pointer rounded-full"
                  >
                    <HiExternalLink className="text-sm" />
                  </a>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Rating/Rank row */}
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#2D3A31]/60 block mb-1">Total Solved</span>
                        <span className="text-3xl font-bold text-[#2D3A31] font-sans">{loadingLeet ? "..." : leetStats.totalSolved}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#2D3A31]/60 block mb-1">Global Rank</span>
                        <span className="text-sm font-bold text-[#2D3A31] font-sans">
                          {loadingLeet ? "..." : `#${leetStats.ranking.toLocaleString()}`}
                        </span>
                      </div>
                    </div>

                    {/* Progress bars - pill rounded */}
                    <div className="space-y-4 mb-6">
                      {/* Easy */}
                      <div>
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-1.5">
                          <span className="text-emerald-600">Easy</span>
                          <span className="text-[#2D3A31]/75">
                            {leetStats.easySolved} <span className="text-[#2D3A31]/45 font-bold">/ {leetStats.totalEasy}</span>
                          </span>
                        </div>
                        <div className="h-3 w-full bg-[#F2F0EB] border border-[#E6E2DA]/40 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(leetStats.easySolved / leetStats.totalEasy) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="h-full bg-emerald-500 rounded-full"
                          />
                        </div>
                      </div>

                      {/* Medium */}
                      <div>
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-1.5">
                          <span className="text-amber-500">Medium</span>
                          <span className="text-[#2D3A31]/75">
                            {leetStats.mediumSolved} <span className="text-[#2D3A31]/45 font-bold">/ {leetStats.totalMedium}</span>
                          </span>
                        </div>
                        <div className="h-3 w-full bg-[#F2F0EB] border border-[#E6E2DA]/40 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(leetStats.mediumSolved / leetStats.totalMedium) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="h-full bg-amber-500 rounded-full"
                          />
                        </div>
                      </div>

                      {/* Hard */}
                      <div>
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-1.5">
                          <span className="text-rose-500">Hard</span>
                          <span className="text-[#2D3A31]/75">
                            {leetStats.hardSolved} <span className="text-[#2D3A31]/45 font-bold">/ {leetStats.totalHard}</span>
                          </span>
                        </div>
                        <div className="h-3 w-full bg-[#F2F0EB] border border-[#E6E2DA]/40 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(leetStats.hardSolved / leetStats.totalHard) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="h-full bg-rose-500 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Submissions */}
                  <div className="mt-4">
                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#C27B66] mb-2.5">Recent Solved</h5>
                    <div className="space-y-1.5">
                      {leetStats.recentSubmissions.map((sub, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-[#F2F0EB]/30 border border-[#E6E2DA]/40 rounded-2xl p-2.5 text-[11px] font-semibold tracking-wider text-[#2D3A31]">
                          <span className="truncate max-w-[150px] font-bold">{sub.title}</span>
                          <span className="text-[9px] bg-[#2D3A31] text-white px-2 py-0.5 rounded-full font-bold tracking-widest">
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
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <GlassCard hover={false} className="h-full flex flex-col">
                <div className="flex items-center justify-between border-b border-[#E6E2DA] pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#E6E2DA]/30 bg-[#5B4638]/10">
                      <img src="/icons/icons8-codechef-100.png" alt="CodeChef" className="h-6 w-6 object-contain" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-[#2D3A31]">CodeChef</h4>
                      <p className="text-[10px] font-semibold tracking-wider text-[#2D3A31]/50 mt-0.5">@nagayashwanth</p>
                    </div>
                  </div>
                  <a
                    href="https://www.codechef.com/users/nagayashwanth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#E6E2DA] p-2 text-[#2D3A31] hover:bg-[#8C9A84]/15 transition-colors cursor-pointer rounded-full"
                  >
                    <HiExternalLink className="text-sm" />
                  </a>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Rating Info */}
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#2D3A31]/60 block mb-1">Rating</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-[#2D3A31] font-sans">{loadingChef ? "..." : chefStats.rating}</span>
                          <span className="text-[9px] font-bold uppercase tracking-widest bg-[#C27B66] text-white px-2.5 py-0.5 rounded-full">
                            {chefStats.division}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#2D3A31]/60 block mb-1">Stars</span>
                        <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest border border-[#E6E2DA] bg-[#F2F0EB] px-2.5 py-0.5 rounded-full">
                          {chefStats.stars} <FaStar className="text-[9px] text-[#8C9A84]" />
                        </span>
                      </div>
                    </div>

                    {/* Rankings grid */}
                    <div className="grid grid-cols-2 gap-3 bg-[#F2F0EB]/30 border border-[#E6E2DA]/80 rounded-2xl p-4 mb-6">
                      <div>
                        <span className="text-[9px] text-[#2D3A31]/60 font-bold uppercase tracking-widest block">Global Rank</span>
                        <span className="text-sm font-bold text-[#2D3A31] font-sans">
                          {loadingChef ? "..." : parseInt(chefStats.globalRank.toString()).toLocaleString() || chefStats.globalRank}
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] text-[#2D3A31]/60 font-bold uppercase tracking-widest block">Country Rank</span>
                        <span className="text-sm font-bold text-[#2D3A31] font-sans">
                          {loadingChef ? "..." : parseInt(chefStats.countryRank.toString()).toLocaleString() || chefStats.countryRank}
                        </span>
                      </div>
                      <div className="col-span-2 pt-2 border-t border-[#E6E2DA]/40">
                        <span className="text-[9px] text-[#2D3A31]/60 font-bold uppercase tracking-widest block">Highest Rating</span>
                        <span className="text-sm font-bold text-[#2D3A31] font-sans">{chefStats.rating}</span>
                      </div>
                    </div>

                    {/* CodeChef Activity Heatmap */}
                    <div className="mt-4 pt-4 border-t border-[#E6E2DA]/40">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[#2D3A31]/60">Activity Heatmap</span>
                        <span className="text-[9px] font-bold tracking-wider text-[#2D3A31]/45">nagayashwanth</span>
                      </div>
                      <div className="flex items-end gap-1.5 justify-center">
                        <div className="grid grid-rows-7 grid-flow-col gap-[3px]">
                          {codeChefHeatmap.map((day, idx) => {
                            const colors = [
                              "bg-[#ffffff] border-[#E6E2DA]/60", // 0
                              "bg-[#8C9A84]/20 border-[#8C9A84]/10", // 1
                              "bg-[#8C9A84]/50 border-[#8C9A84]/30", // 2
                              "bg-[#8C9A84] border-[#8C9A84]/80", // 3
                            ];
                            return (
                              <div
                                key={idx}
                                className={`h-[8px] w-[8px] rounded-[2px] border-[0.5px] ${colors[day.level]} transition-colors duration-200`}
                                title={`${day.date.toDateString()}: ${day.level === 0 ? 'No submissions' : day.level + ' submissions'}`}
                              />
                            );
                          })}
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-2 px-1 text-[9px] font-bold uppercase tracking-widest text-[#2D3A31]/55">
                        <span>Last 15 weeks</span>
                        <div className="flex items-center gap-1">
                          <span>Less</span>
                          <div className="h-[8px] w-[8px] rounded-[2px] bg-[#ffffff] border border-[#E6E2DA]/60" />
                          <div className="h-[8px] w-[8px] rounded-[2px] bg-[#8C9A84]/20 border border-[#8C9A84]/10" />
                          <div className="h-[8px] w-[8px] rounded-[2px] bg-[#8C9A84]/50 border border-[#8C9A84]/30" />
                          <div className="h-[8px] w-[8px] rounded-[2px] bg-[#8C9A84] border border-[#8C9A84]/80" />
                          <span>More</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Division Badge Visualizer */}
                  <div className="text-center p-3 border border-[#E6E2DA] rounded-2xl bg-[#F2F0EB]/30 mt-6">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#2D3A31]/60 block mb-2">Division Rank Status</span>
                    <div className="flex justify-center items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-[#2D3A31]">
                      <span className="px-2 py-0.5 border border-[#E6E2DA]/30 bg-white text-[#2D3A31]/45 rounded-full">Div 1</span>
                      <span className="text-[#2D3A31]/30">➔</span>
                      <span className="px-2 py-0.5 border border-[#E6E2DA]/30 bg-white text-[#2D3A31]/45 rounded-full">Div 2</span>
                      <span className="text-[#2D3A31]/30">➔</span>
                      <span className="px-2 py-0.5 border border-[#E6E2DA]/30 bg-white text-[#2D3A31]/45 rounded-full">Div 3</span>
                      <span className="text-[#2D3A31]/30">➔</span>
                      <span className="px-2.5 py-0.5 border border-transparent bg-[#8C9A84] text-white font-bold rounded-full">Div 4</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* HackerRank Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <GlassCard hover={false} className="h-full flex flex-col">
                <div className="flex items-center justify-between border-b border-[#E6E2DA] pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#E6E2DA]/30 bg-[#2EC866]/10">
                      <img src="/icons/icons8-hackerrank-50.png" alt="HackerRank" className="h-6 w-6 object-contain" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-[#2D3A31]">HackerRank</h4>
                      <p className="text-[10px] font-semibold tracking-wider text-[#2D3A31]/55 mt-0.5">@KLU2300031794</p>
                    </div>
                  </div>
                  <a
                    href="https://www.hackerrank.com/profile/KLU2300031794"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#E6E2DA] p-2 text-[#2D3A31] hover:bg-[#8C9A84]/15 transition-colors cursor-pointer rounded-full"
                  >
                    <HiExternalLink className="text-sm" />
                  </a>
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <div className="space-y-2.5">
                    {hrBadges.map((badge) => (
                      <div
                        key={badge.key}
                        className="flex justify-between items-center text-xs bg-[#F2F0EB]/30 px-3.5 py-3 border border-[#E6E2DA]/80 hover:border-[#8C9A84] transition-all duration-300 rounded-2xl"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className="flex items-center justify-center rounded-lg border border-[#E6E2DA]/40"
                            style={{
                              width: '24px',
                              height: '24px',
                              background: '#F2B822',
                            }}
                          >
                            <img
                              src={badge.img}
                              alt={badge.name}
                              className="h-3.5 w-3.5 object-contain select-none brightness-0 invert"
                            />
                          </div>
                          <span className="font-bold uppercase tracking-wider text-[#2D3A31] text-[10px] truncate">{badge.name}</span>
                        </div>
                        <span className="flex text-accent gap-0.5 shrink-0">
                          {Array.from({ length: badge.stars }).map((_, i) => (
                            <FaStar key={i} className="text-[9px]" />
                          ))}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-28 h-32 w-full overflow-hidden border-t border-b border-[#E6E2DA] relative bg-white">
        <PerspectiveMarqueeScene />
      </div>
    </section>
  );
};

export default CodingProfiles;
