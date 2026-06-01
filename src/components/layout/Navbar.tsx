import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../../data";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section on scroll dynamically using viewport bounding client rects (immune to transform offsets)
  useEffect(() => {
    const handleScroll = () => {
      const elements = navLinks
        .map((link) => {
          const id = link.href.replace("#", "");
          return {
            href: link.href,
            element: document.getElementById(id),
          };
        })
        .filter((item) => item.element !== null) as Array<{ href: string; element: HTMLElement }>;

      if (elements.length === 0) return;

      // 1. Bottom of the page override (highlight the last section when scrolled to very bottom)
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        setActiveSection(elements[elements.length - 1].href);
        return;
      }

      // 2. Maximum visible height logic (find which section occupies the largest portion of the viewport)
      let maxVisibleHeight = -1;
      let activeHref = elements[0].href;
      const viewportHeight = window.innerHeight;

      for (let i = 0; i < elements.length; i++) {
        const { href, element } = elements[i];
        const rect = element.getBoundingClientRect();

        // Calculate the visible height of the section in the viewport
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          activeHref = href;
        }
      }

      setActiveSection(activeHref);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    setActiveSection(href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 z-50 w-full px-6 py-4 transition-all duration-300 bg-transparent border-none"
    >
      <nav className="mx-auto max-w-7xl flex w-full items-center justify-between">
        {/* Left: Brand/Logo Container */}
        <div className="w-32 flex-none">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
            className="inline-flex items-center gap-2.5 text-lg font-bold tracking-tight text-primary hover:opacity-80 transition-opacity"
          >
            <img
              src="/posters/banner.png"
              alt="Portfolio logo"
              className="h-7 w-7 rounded object-cover shadow-2xs"
            />
            <span className="font-bold text-primary">Portfolio</span>
          </a>
        </div>

        {/* Center: Desktop Pill Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center gap-8 rounded-full border border-white/20 bg-white/70 backdrop-blur-md px-8 py-2.5 shadow-[0_2.5px_14px_rgba(0,0,0,0.05)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <div key={link.href} className="relative flex flex-col items-center">
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className={`text-[13.5px] font-bold tracking-wide transition-colors duration-200 py-1 px-1 cursor-pointer ${
                      isActive ? "text-primary font-extrabold" : "text-text-secondary hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavDot"
                      className="absolute -bottom-1 h-1.5 w-1.5 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Empty spacer to perfectly center the pill navigation */}
        <div className="hidden md:block w-32 flex-none" />

        {/* Mobile: Toggle Menu Button */}
        <button
          className="text-xl text-primary md:hidden cursor-pointer p-1.5 rounded-lg hover:bg-surface-alt transition-colors"
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
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-6 right-6 overflow-hidden rounded-2xl border border-white/20 bg-white/90 backdrop-blur-md shadow-lg md:hidden p-3"
          >
            <ul className="flex flex-col gap-0.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                      className={`block rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                        isActive
                          ? "bg-primary text-white"
                          : "text-text-secondary hover:bg-surface-alt hover:text-primary"
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
    </motion.header>
  );
};

export default Navbar;
