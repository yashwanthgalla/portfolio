import { motion } from "framer-motion";
import type { ReactNode } from "react";

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
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    whileHover={hover ? { y: -6 } : undefined}
    transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
    className={`h-full border border-[#E6E2DA] bg-white rounded-3xl transition-shadow duration-500 ease-out shadow-[0_10px_30px_-10px_rgba(45,58,49,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(45,58,49,0.12)] ${
      className.includes('p-0') ? '' : 'p-8 sm:p-10'
    } ${className}`}
  >
    {children}
  </motion.div>
);

export default GlassCard;
