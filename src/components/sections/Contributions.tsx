import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
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
    light: ["#f3f4f6", "#dbeafe", "#93c5fd", "#3b82f6", "#1d4ed8"],
    dark: ["#161b22", "#0d306b", "#0052cc", "#2684ff", "#4c9aff"],
  },
  classic: {
    light: ["#f3f4f6", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  },
  purple: {
    light: ["#f3f4f6", "#f3e8ff", "#d8b4fe", "#a855f7", "#7e22ce"],
    dark: ["#161b22", "#3b0764", "#6b21a8", "#a855f7", "#d8b4fe"],
  },
};

type ThemeName = keyof typeof THEMES;

const Contributions: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeName>("ocean");
  const [stats, setStats] = useState<GitHubStats>(DEFAULT_STATS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, []);

  return (
    <section id="contributions" className="bg-white py-24 border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Contributions"
          subtitle="My open-source activities and contribution history on GitHub."
        />

        {/* Stats Grid */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-3 mb-10">
          {/* Card 1: Repositories */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-2xs transition-all duration-200 hover:border-primary/30 hover:shadow-xs"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FiBookOpen className="text-xl" />
            </div>
            <div>
              <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">Repositories</p>
              <p className="text-2xl font-bold text-primary">{loading ? "..." : stats.public_repos}</p>
            </div>
          </motion.div>

          {/* Card 2: Followers */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-2xs transition-all duration-200 hover:border-primary/30 hover:shadow-xs"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <FiUsers className="text-xl" />
            </div>
            <div>
              <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">Followers</p>
              <p className="text-2xl font-bold text-primary">{loading ? "..." : stats.followers}</p>
            </div>
          </motion.div>

          {/* Card 3: Following */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-2xs transition-all duration-200 hover:border-primary/30 hover:shadow-xs"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <FiUsers className="text-xl" />
            </div>
            <div>
              <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">Following</p>
              <p className="text-2xl font-bold text-primary">{loading ? "..." : stats.following}</p>
            </div>
          </motion.div>
        </div>

        {/* Calendar Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <GlassCard hover={false}>
            {/* Header Area */}
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-border/60 pb-6 mb-6">
              {/* Profile details */}
              <div className="flex items-center gap-4">
                <img
                  src={stats.avatar_url}
                  alt={stats.name}
                  className="h-12 w-12 rounded-full border-2 border-primary/10 object-cover shadow-2xs"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-primary leading-none">{stats.name}</h4>
                    <a
                      href="https://github.com/yashwanthgalla"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted transition-colors hover:text-primary"
                      aria-label="GitHub profile link"
                    >
                      <FiGithub className="text-base" />
                    </a>
                  </div>
                  <p className="text-xs text-text-secondary mt-1">
                    {stats.bio || "Active GitHub Contributor"}
                  </p>
                </div>
              </div>

              {/* Theme Controls & External Link */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Theme Selector */}
                <div className="flex items-center gap-1 rounded-lg border border-border bg-surface-alt p-1 text-[11px] font-semibold">
                  {(Object.keys(THEMES) as ThemeName[]).map((themeName) => {
                    const isActive = selectedTheme === themeName;
                    const activeColorClass =
                      themeName === "ocean"
                        ? "bg-blue-600 text-white"
                        : themeName === "classic"
                        ? "bg-emerald-600 text-white"
                        : "bg-purple-600 text-white";

                    const dotColor =
                      themeName === "ocean"
                        ? "bg-blue-500"
                        : themeName === "classic"
                        ? "bg-emerald-500"
                        : "bg-purple-500";

                    return (
                      <button
                        key={themeName}
                        onClick={() => setSelectedTheme(themeName)}
                        className={`flex items-center gap-1 rounded px-2 py-1 transition-all cursor-pointer ${
                          isActive
                            ? `${activeColorClass} shadow-2xs`
                            : "text-text-secondary hover:bg-white hover:text-primary"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            isActive ? "bg-white" : dotColor
                          }`}
                        />
                        {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
                      </button>
                    );
                  })}
                </div>

                {/* GitHub link */}
                <a
                  href="https://github.com/yashwanthgalla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-1.5 text-xs font-semibold text-text-secondary transition-colors hover:bg-surface-alt hover:text-primary cursor-pointer"
                >
                  <span>GitHub Profile</span>
                  <FiExternalLink className="text-[10px]" />
                </a>
              </div>
            </div>

            {/* Calendar SVG Wrap */}
            <div className="w-full overflow-x-auto pb-2 scrollbar-thin">
              <div className="min-w-[800px] p-1">
                <GitHubCalendar
                  username="yashwanthgalla"
                  theme={THEMES[selectedTheme]}
                  blockSize={11}
                  blockMargin={4}
                  blockRadius={2}
                  fontSize={12}
                />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Contributions;
