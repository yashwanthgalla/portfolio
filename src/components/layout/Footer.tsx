import {
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { socialLinks } from "../../data";

const iconMap: Record<string, React.ReactNode> = {
  github: <img src="/icons/github.gif" alt="GitHub" className="h-5 w-5 object-contain" />,
  linkedin: <img src="/icons/icons8-linkedin (1).gif" alt="LinkedIn" className="h-5 w-5 object-contain" />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
};

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-4 md:flex-row md:justify-between">
        <p className="text-sm text-text-muted">
          &copy; {year} Naga Yashwanth Galla. All rights reserved.
        </p>

        <div className="flex gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="rounded-lg p-2 text-text-muted transition-colors duration-200 hover:bg-surface-alt hover:text-primary"
            >
              {iconMap[s.icon] ?? null}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
