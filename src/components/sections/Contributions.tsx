import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ActivityCalendar } from "react-activity-calendar";
import { GlassCard, SectionHeading } from "../ui";
import { FiGithub, FiBookOpen, FiUsers, FiExternalLink } from "react-icons/fi";

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  name: string;
  bio: string | null;
}

const DEFAULT_STATS: GitHubStats = {
  public_repos: 32,
  followers: 1,
  following: 2,
  avatar_url: "https://avatars.githubusercontent.com/u/223609762?v=4",
  name: "GALLA NAGA YASHWANTH",
  bio: "Computer Science Student & Developer",
};

const THEMES = {
  ocean: {
    light: ["#f2f0eb", "#c3d3c4", "#a3bca4", "#8c9a84", "#2d3a31"],
    dark: ["#f2f0eb", "#c3d3c4", "#a3bca4", "#8c9a84", "#2d3a31"],
  },
  classic: {
    light: ["#f2f0eb", "#e4dcc4", "#d3c4a3", "#c27b66", "#2d3a31"],
    dark: ["#f2f0eb", "#e4dcc4", "#d3c4a3", "#c27b66", "#2d3a31"],
  },
  purple: {
    light: ["#f2f0eb", "#ebdbe3", "#cca3b8", "#a855f7", "#2d3a31"],
    dark: ["#f2f0eb", "#ebdbe3", "#cca3b8", "#a855f7", "#2d3a31"],
  },
};

type ThemeName = keyof typeof THEMES;

const Contributions: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeName>("ocean");
  const [stats, setStats] = useState<GitHubStats>(DEFAULT_STATS);
  const [loading, setLoading] = useState(true);
  const [contributionData, setContributionData] = useState<any[]>([]);
  const [loadingCalendar, setLoadingCalendar] = useState(true);
  const [calendarError, setCalendarError] = useState<string | null>(null);

  useEffect(() => {
    // 1. Fetch user stats
    fetch("https://api.github.com/users/yashwanthgalla")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setStats({
          public_repos: data.public_repos ?? DEFAULT_STATS.public_repos,
          followers: data.followers ?? DEFAULT_STATS.followers,
          following: data.following ?? DEFAULT_STATS.following,
          avatar_url: data.avatar_url ?? DEFAULT_STATS.avatar_url,
          name: data.name ?? DEFAULT_STATS.name,
          bio: data.bio ?? DEFAULT_STATS.bio,
        });
      })
      .catch((err) => {
        console.warn("GitHub API error, using fallback statistics:", err);
      })
      .finally(() => {
        setLoading(false);
      });

    // 2. Fetch contribution calendar data
    const fetchContributions = async () => {
      setLoadingCalendar(true);
      setCalendarError(null);
      const urls = [
        "https://github-contributions-api.jogruber.de/v4/yashwanthgalla?y=last",
        "https://api.codetabs.com/v1/proxy/?quest=https://github-contributions-api.jogruber.de/v4/yashwanthgalla?y=last",
        "https://github-contributions-api.deno.dev/yashwanthgalla.json"
      ];

      for (let i = 0; i < urls.length; i++) {
        try {
          const res = await fetch(urls[i]);
          if (!res.ok) throw new Error(`HTTP status ${res.status}`);
          const data = await res.json();
          
          if (data && Array.isArray(data.contributions)) {
            let parsedContributions: any[] = [];
            
            if (Array.isArray(data.contributions[0])) {
              parsedContributions = data.contributions.flat().map((day: any) => ({
                date: day.date,
                count: day.contributionCount ?? day.count ?? 0,
                level: day.contributionLevel === "NONE" ? 0 
                     : day.contributionLevel === "FIRST_QUARTILE" ? 1 
                     : day.contributionLevel === "SECOND_QUARTILE" ? 2 
                     : day.contributionLevel === "THIRD_QUARTILE" ? 3 
                     : day.contributionLevel === "FOURTH_QUARTILE" ? 4 
                     : (day.level ?? 0)
              }));
            } else {
              parsedContributions = data.contributions.map((day: any) => ({
                date: day.date,
                count: day.count ?? 0,
                level: day.level ?? 0
              }));
            }

            const sortedContributions = parsedContributions.sort(
              (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
            );

            setContributionData(sortedContributions);
            setLoadingCalendar(false);
            return;
          }
        } catch (err) {
          console.warn(`Failed to fetch from ${urls[i]}:`, err);
        }
      }
      setCalendarError("Failed to fetch contribution data. Please try again later.");
      setLoadingCalendar(false);
    };

    fetchContributions();
  }, []);

  return (
    <section id="contributions" className="bg-white py-32 border-t border-[#E6E2DA] swiss-grid-pattern">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="github *contributions*"
          subtitle="My open-source activities and contribution history on GitHub."
          number="07"
        />

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-3 mb-10">
          {/* Card 1: Repositories */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 border border-[#E6E2DA] bg-white p-6 rounded-3xl hover:-translate-y-1.5 transition-all duration-300 ease-out shadow-[0_10px_20px_rgba(45,58,49,0.02)]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8C9A84]/15 text-[#2D3A31]">
              <FiBookOpen className="text-lg" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#2D3A31]/65">Repositories</p>
              <p className="text-2xl font-bold text-[#2D3A31] font-sans mt-0.5">{loading ? "..." : stats.public_repos}</p>
            </div>
          </motion.div>

          {/* Card 2: Followers */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 border border-[#E6E2DA] bg-white p-6 rounded-3xl hover:-translate-y-1.5 transition-all duration-300 ease-out shadow-[0_10px_20px_rgba(45,58,49,0.02)]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8C9A84]/15 text-[#2D3A31]">
              <FiUsers className="text-lg" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#2D3A31]/65">Followers</p>
              <p className="text-2xl font-bold text-[#2D3A31] font-sans mt-0.5">{loading ? "..." : stats.followers}</p>
            </div>
          </motion.div>

          {/* Card 3: Following */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 border border-[#E6E2DA] bg-white p-6 rounded-3xl hover:-translate-y-1.5 transition-all duration-300 ease-out shadow-[0_10px_20px_rgba(45,58,49,0.02)]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8C9A84]/15 text-[#2D3A31]">
              <FiUsers className="text-lg" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#2D3A31]/65">Following</p>
              <p className="text-2xl font-bold text-[#2D3A31] font-sans mt-0.5">{loading ? "..." : stats.following}</p>
            </div>
          </motion.div>
        </div>

        {/* Calendar Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <GlassCard hover={false}>
            {/* Header Area */}
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-[#E6E2DA] pb-6 mb-6">
              {/* Profile details */}
              <div className="flex items-center gap-4">
                <img
                  src={stats.avatar_url}
                  alt={stats.name}
                  className="h-12 w-12 border border-[#E6E2DA] object-cover rounded-full transition-all duration-500 shadow-sm"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-[#2D3A31] leading-none">{stats.name}</h4>
                    <a
                      href="https://github.com/yashwanthgalla"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2D3A31]/50 transition-colors hover:text-[#C27B66]"
                      aria-label="GitHub profile link"
                    >
                      <FiGithub className="text-base" />
                    </a>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#2D3A31]/60 mt-1.5">
                    {stats.bio || "Active GitHub Contributor"}
                  </p>
                </div>
              </div>

              {/* Theme Controls & External Link */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Theme Selector - pill shape */}
                <div className="flex items-center border border-[#E6E2DA] bg-white p-1 text-[9px] font-bold uppercase tracking-widest rounded-full">
                  {(Object.keys(THEMES) as ThemeName[]).map((themeName) => {
                    const isActive = selectedTheme === themeName;
                    const activeColorClass = "bg-[#2D3A31] text-white";

                    return (
                      <button
                        key={themeName}
                        onClick={() => setSelectedTheme(themeName)}
                        className={`rounded-full px-3 py-1 transition-all cursor-pointer font-bold ${
                          isActive
                            ? activeColorClass
                            : "text-[#2D3A31]/60 hover:bg-[#F2F0EB] hover:text-[#2D3A31]"
                        }`}
                      >
                        {themeName}
                      </button>
                    );
                  })}
                </div>

                {/* GitHub link */}
                <a
                  href="https://github.com/yashwanthgalla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-[#E6E2DA] bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#2D3A31] hover:bg-[#2D3A31] hover:text-white transition-colors duration-300 rounded-full cursor-pointer shadow-sm"
                >
                  <span>GitHub Profile</span>
                  <FiExternalLink className="text-[10px]" />
                </a>
              </div>
            </div>

            {/* Calendar SVG Wrap */}
            <div className="w-full overflow-x-auto pb-2 scrollbar-thin">
              <div className="min-w-[1020px] p-1 flex justify-center items-center min-h-[180px]">
                {loadingCalendar ? (
                  <div className="flex flex-col items-center justify-center gap-2 py-8 w-full">
                    <div className="h-6 w-6 animate-spin border-2 border-[#2D3A31] border-t-transparent rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2D3A31]/60">Loading contributions...</span>
                  </div>
                ) : calendarError ? (
                  <div className="flex items-center justify-center text-xs font-bold uppercase tracking-wider text-rose-500 border border-rose-500 bg-rose-50/50 py-6 px-4 w-full rounded-3xl">
                    {calendarError}
                  </div>
                ) : (
                  <ActivityCalendar
                    data={contributionData}
                    theme={THEMES[selectedTheme]}
                    blockSize={15}
                    blockMargin={4}
                    blockRadius={3} // Soft curved contribution squares (3px)
                    fontSize={12}
                  />
                )}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Contributions;
