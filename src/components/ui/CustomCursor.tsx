import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use motion values for better performance
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for smooth following
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on devices with a pointing device (mouse)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      // Offset by 12px right and 24px down so it sits below the native cursor
      cursorX.set(e.clientX + 12);
      cursorY.set(e.clientY + 24);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for specific data-cursor overrides first
      const cursorTarget = target.closest('[data-cursor]') as HTMLElement;
      
      if (cursorTarget) {
        setIsHovering(true);
        setCursorText(cursorTarget.getAttribute('data-cursor') || "");
        return;
      }

      // Default hover logic based on element type
      const clickable = target.closest('a, button, input, select, [role="button"], label');
      if (clickable) {
        setIsHovering(true);
        
        // External links
        if (target.closest('a[target="_blank"]')) {
          setCursorText("↗");
        } 
        // Contact links
        else if (target.closest('a[href^="mailto"], a[href^="tel"], #contact')) {
          setCursorText("@");
        } 
        // Submit buttons
        else if (target.closest('button[type="submit"], input[type="submit"]')) {
          setCursorText("✓");
        } 
        // Default interactive
        else {
          setCursorText(":)");
        }
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[10000] flex items-center justify-center rounded-full bg-black text-white shadow-md border border-white/10"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      initial={{ width: 16, height: 16, opacity: 0 }}
      animate={{
        width: isHovering ? 48 : 16,
        height: isHovering ? 48 : 16,
        opacity: 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: isHovering && cursorText ? 1 : 0, 
          scale: isHovering && cursorText ? 1 : 0.5 
        }}
        transition={{ duration: 0.15 }}
        className="text-xs font-medium leading-none whitespace-nowrap"
      >
        {cursorText}
      </motion.span>
    </motion.div>
  );
};

export default CustomCursor;
