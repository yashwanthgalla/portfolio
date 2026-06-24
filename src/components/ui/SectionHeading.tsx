import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  number?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, number }) => {
  // Parse *italicized* words dynamically
  const renderTitle = (text: string) => {
    return text.split(" ").map((word, idx) => {
      const isItalic = word.startsWith("*") && word.endsWith("*");
      if (isItalic) {
        return (
          <span key={idx} className="font-serif italic font-normal text-terracotta mr-2 md:mr-3 inline-block">
            {word.slice(1, -1)}
          </span>
        );
      }
      return (
        <span key={idx} className="mr-2 md:mr-3 inline-block">
          {word}
        </span>
      );
    });
  };

  return (
    <div className="mb-20 text-center flex flex-col items-center gap-3">
      {number && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-black uppercase tracking-[0.3em] text-accent select-none"
        >
          {number}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-serif font-bold text-4xl md:text-6xl text-primary leading-tight tracking-tight capitalize max-w-3xl"
      >
        {renderTitle(title)}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl text-sm md:text-base font-medium text-muted-foreground mt-1"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
