import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../../data";

const sectionColorStyles: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  "#hero": {
    bg: "bg-[#DCCFC2]/20",
    border: "border-[#DCCFC2]/60",
    text: "text-[#2D3A31]",
    glow: "shadow-[0_0_12px_rgba(220,207,194,0.35)]"
  },
  "#about": {
    bg: "bg-[#8C9A84]/15",
    border: "border-[#8C9A84]/40",
    text: "text-[#2D3A31]",
    glow: "shadow-[0_0_12px_rgba(140,154,132,0.3)]"
  },
  "#projects": {
    bg: "bg-[#C27B66]/12",
    border: "border-[#C27B66]/35",
    text: "text-[#C27B66]",
    glow: "shadow-[0_0_12px_rgba(194,123,102,0.25)]"
  },
  "#designs": {
    bg: "bg-[#C27B66]/10",
    border: "border-[#C27B66]/30",
    text: "text-[#C27B66]",
    glow: "shadow-[0_0_12px_rgba(194,123,102,0.2)]"
  },
  "#certifications": {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-800",
    glow: "shadow-[0_0_12px_rgba(245,158,11,0.25)]"
  },
  "#profiles": {
    bg: "bg-sky-500/10",
    border: "border-sky-500/30",
    text: "text-sky-800",
    glow: "shadow-[0_0_12px_rgba(14,165,233,0.25)]"
  },
  "#contact": {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-800",
    glow: "shadow-[0_0_12px_rgba(16,185,129,0.25)]"
  }
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["hero", "about", "projects", "designs", "certifications", "hackathons", "profiles", "contributions", "contact"];
      const sectionToNavLinkMap: Record<string, string> = {
        "hero": "#hero",
        "about": "#about",
        "projects": "#projects",
        "designs": "#designs",
        "certifications": "#certifications",
        "hackathons": "#certifications",
        "profiles": "#profiles",
        "contributions": "#profiles",
        "contact": "#contact",
      };

      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        setActiveSection("#contact");
        return;
      }

      let currentSectionId = "hero";
      const triggerPoint = window.scrollY + 350; // trigger active state when section passes 350px from top of screen

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementAbsoluteTop = rect.top + window.scrollY;
          if (triggerPoint >= elementAbsoluteTop) {
            currentSectionId = id;
          }
        }
      }

      setActiveSection(sectionToNavLinkMap[currentSectionId] || "#hero");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    setActiveSection(href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed left-0 right-0 z-50 w-full px-6 transition-all duration-500 top-6"
    >
      <nav
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative mx-auto max-w-6xl flex w-full items-center justify-between px-6 py-3 rounded-full transition-all duration-500 overflow-hidden ${
          scrolled ? "glass-nav-scrolled" : "glass-nav"
        }`}
      >
        {/* Interactive spotlight glow overlay */}
        {isHovered && (
          <div
            className="pointer-events-none absolute -z-10 rounded-full transition-opacity duration-500"
            style={{
              width: "220px",
              height: "220px",
              background: "radial-gradient(circle, rgba(194, 123, 102, 0.12) 0%, rgba(140, 154, 132, 0.06) 40%, rgba(220, 207, 194, 0.02) 70%, transparent 100%)",
              left: mouseCoords.x - 110,
              top: mouseCoords.y - 110,
            }}
          />
        )}

        {/* Left: Brand/Logo Container */}
        <div className="w-36 flex-none">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#hero");
            }}
            className="group inline-flex items-center gap-2.5 text-base font-bold tracking-tight text-[#2D3A31]"
          >
            <img
              src="/posters/banner.png"
              alt="Portfolio logo"
              className="h-7 w-7 rounded-full object-cover border border-[#E6E2DA] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
            />
            <span className="font-serif italic text-base transition-colors duration-300 group-hover:text-[#C27B66]">yashwanth</span>
          </a>
        </div>

        {/* Center: Desktop pill-shaped Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1 gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            const style = sectionColorStyles[link.href] || {
              bg: "bg-white/40",
              border: "border-white/60",
              text: "text-[#2D3A31]",
              glow: "shadow-none"
            };
            return (
              <div key={link.href} className="relative py-1.5 px-4 z-10 flex items-center justify-center">
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isActive ? style.text : "text-[#2D3A31]/55 hover:text-[#2D3A31]"
                  }`}
                >
                  {link.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="activeNavBg"
                    className={`absolute inset-0 border rounded-full -z-10 transition-all duration-500 ${style.bg} ${style.border} ${style.glow} backdrop-blur-md`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Right: Pill status indicator */}
        <div className="hidden md:flex w-36 flex-none justify-end">
          <div className="flex items-center gap-2 border border-white/60 bg-white/20 backdrop-blur-xs px-3 py-1.5 rounded-full shadow-[0_2px_8px_rgba(45,58,49,0.02),inset_0_1px_1px_rgba(255,255,255,0.7)] select-none">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8C9A84] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#8C9A84]"></span>
            </span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#2D3A31]/75">
              {activeSection.replace("#", "") || "home"}
            </span>
          </div>
        </div>

        {/* Mobile: Toggle Menu Button */}
        <button
          className="text-xl text-[#2D3A31] md:hidden cursor-pointer p-2 border border-white/60 bg-white/30 backdrop-blur-md rounded-full shadow-[0_2px_8px_rgba(45,58,49,0.02),inset_0_1px_1px_rgba(255,255,255,0.7)] hover:bg-white/50 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile: Floating dropdown card */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -12 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-16 left-6 right-6 overflow-hidden rounded-3xl glass-mobile-drawer md:hidden p-4 mt-2"
          >
            <ul className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                const style = sectionColorStyles[link.href] || {
                  bg: "bg-white/40",
                  border: "border-white/60",
                  text: "text-[#2D3A31]",
                  glow: "shadow-none"
                };
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav(link.href);
                      }}
                      className={`block rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                        isActive
                          ? `${style.bg} ${style.text} border ${style.border} ${style.glow} backdrop-blur-md`
                          : "text-[#2D3A31]/70 hover:bg-white/40 hover:text-[#2D3A31]"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
