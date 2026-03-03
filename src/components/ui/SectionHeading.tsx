import { motion } from "framer-motion";
// @ts-expect-error — ScrollFloat is a plain JSX component without type declarations
import ScrollFloat from "../ScrollFloat";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => (
  <div className="mb-16 text-center">
    <ScrollFloat
      containerClassName="!my-0"
      textClassName="!text-3xl md:!text-4xl font-semibold tracking-tight text-primary !leading-tight"
      animationDuration={0.8}
      ease="back.inOut(1.5)"
      scrollStart="top bottom"
      scrollEnd="center center"
      stagger={0.03}
    >
      {title}
    </ScrollFloat>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mt-3 max-w-xl text-text-secondary"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mx-auto mt-6 h-px w-12 bg-accent"
    />
  </div>
);

export default SectionHeading;
