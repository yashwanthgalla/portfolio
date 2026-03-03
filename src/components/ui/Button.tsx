import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  download?: boolean;
  disabled?: boolean;
}

const base =
  "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-medium transition-all duration-200 cursor-pointer text-sm";

const variants: Record<string, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-light",
  outline:
    "border border-border text-primary hover:border-primary hover:bg-surface-alt",
  ghost:
    "text-text-secondary hover:text-primary hover:bg-surface-alt",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  download = false,
  disabled = false,
}) => {
  const classes = `${base} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    return (
      <motion.a
        whileTap={{ scale: 0.97 }}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        download={download}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </motion.button>
  );
};

export default Button;
