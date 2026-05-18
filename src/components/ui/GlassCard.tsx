import { motion } from "framer-motion";
import type { ReactNode } from "react";
// @ts-expect-error - BorderGlow is JSX
import BorderGlow from "../../components/BorderGlow";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard: React.FC<CardProps> = ({
  children,
  className = "",
  hover = true,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    whileHover={hover ? { y: -4 } : undefined}
    transition={{ duration: 0.35 }}
    className="h-full"
  >
    <BorderGlow
      edgeSensitivity={30}
      glowColor="205 100 50"
      backgroundColor="#ffffff"
      borderRadius={12}
      glowRadius={40}
      glowIntensity={1}
      animated={false}
      className={`h-full ${className.includes('p-0') ? '' : 'p-6'} ${className}`}
      colors={['#c084fc', '#f472b6', '#38bdf8']}
    >
      {children}
    </BorderGlow>
  </motion.div>
);

export default GlassCard;
