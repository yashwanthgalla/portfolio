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
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    whileHover={hover ? { y: -4 } : undefined}
    transition={{ duration: 0.35 }}
    className={`card-surface rounded-xl p-6 ${className}`}
  >
    {children}
  </motion.div>
);

export default GlassCard;
