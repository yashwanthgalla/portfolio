import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";
import {
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { SectionHeading, Button } from "../ui";
import { socialLinks } from "../../data";

const socialIconMap: Record<string, React.ReactNode> = {
  github: <img src="/icons/github.gif" alt="GitHub" className="h-5 w-5 object-contain" />,
  linkedin: <img src="/icons/icons8-linkedin (1).gif" alt="LinkedIn" className="h-5 w-5 object-contain" />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
};

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xkovlper");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const inputBase =
    "w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-primary outline-none transition-all placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent/30 border-border";

  return (
    <section id="contact" className="px-6 py-14">
      <div className="mx-auto max-w-lg">
        <SectionHeading
          title="Contact"
          subtitle="Have a project in mind? Let's talk."
        />

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="rounded-xl border border-border bg-white p-5 md:p-6"
        >
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-primary">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={inputBase}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-xs text-red-500" />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-primary">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={inputBase}
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-xs text-red-500" />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-primary">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="Tell me about your project…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className={`${inputBase} resize-none`}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-xs text-red-500" />
          </div>

          <Button type="submit" disabled={state.submitting} className="w-full justify-center">
            {state.submitting ? "Sending…" : "Send Message"}
          </Button>

          {/* Success toast */}
          <AnimatePresence>
            {state.succeeded && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700"
              >
                <HiCheckCircle className="shrink-0" />
                Message sent! I&apos;ll get back to you soon.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        {/* Social icons */}
        <div className="mt-5 flex justify-center gap-2">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="rounded-lg p-2.5 text-lg text-text-muted transition-colors duration-200 hover:bg-surface-alt hover:text-primary"
            >
              {socialIconMap[s.icon] ?? null}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
