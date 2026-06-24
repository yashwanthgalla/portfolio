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
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ease-out cursor-pointer select-none border h-12";

const variants: Record<string, string> = {
  primary:
    "bg-[#2D3A31] text-white border-transparent hover:bg-[#C27B66] hover:text-white shadow-[0_4px_10px_rgba(45,58,49,0.08)] hover:shadow-[0_6px_15px_rgba(194,123,102,0.15)]",
  outline:
    "bg-transparent text-[#8C9A84] border-[#8C9A84] hover:bg-[#8C9A84]/10 hover:border-[#8c9a84]",
  ghost:
    "bg-transparent text-[#2D3A31] border-transparent hover:bg-[#DCCFC2]/20",
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
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        download={download}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;
