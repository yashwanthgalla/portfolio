import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { SectionHeading, Button } from "../ui";
import { socialLinks } from "../../data";

const socialIconMap: Record<string, React.ReactNode> = {
  github: <img src="/icons/github.gif" alt="GitHub" className="h-5 w-5 object-contain" />,
  linkedin: <img src="/icons/icons8-linkedin (1).gif" alt="LinkedIn" className="h-5 w-5 object-contain" />,
  twitter: <FaTwitter className="text-base" />,
  instagram: <FaInstagram className="text-base" />,
};

const Contact: React.FC = () => {
  const [state, handleSubmit, reset] = useForm("xkovlper");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (state.succeeded) {
      setName("");
      setEmail("");
      setMessage("");

      const timer = setTimeout(() => {
        if (typeof reset === 'function') {
          reset();
        }
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded, reset]);

  const inputClass =
    "w-full rounded-none border-b border-[#E6E2DA] border-t-0 border-l-0 border-r-0 bg-transparent px-0 py-3 text-sm font-semibold text-[#2D3A31] outline-none transition-colors placeholder:text-[#2D3A31]/35 placeholder:font-bold placeholder:uppercase placeholder:tracking-widest focus:border-[#8C9A84] focus:ring-0 focus:outline-none";

  return (
    <section id="contact" className="px-6 py-32 bg-[#F9F8F4] border-t border-[#E6E2DA] swiss-dots">
      <div className="mx-auto max-w-lg">
        <SectionHeading
          title="let's *talk*"
          subtitle="Have a project in mind? Let's talk."
          number="08"
        />

        <motion.form
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="rounded-[32px] border border-[#E6E2DA] bg-white p-8 shadow-[0_10px_30px_rgba(45,58,49,0.03)]"
        >
          {/* Name */}
          <div className="mb-6">
            <label htmlFor="name" className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-[#2D3A31]/70">
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
              className={inputClass}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-2 text-xs font-bold uppercase text-[#C27B66]" />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-[#2D3A31]/70">
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
              className={inputClass}
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-2 text-xs font-bold uppercase text-[#C27B66]" />
          </div>

          {/* Message */}
          <div className="mb-8">
            <label htmlFor="message" className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-[#2D3A31]/70">
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
              className={`${inputClass} resize-none`}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-2 text-xs font-bold uppercase text-[#C27B66]" />
          </div>

          <Button type="submit" disabled={state.submitting} className="w-full">
            {state.submitting ? "Sending…" : "Send Message"}
          </Button>

          {/* Success toast */}
          <AnimatePresence>
            {state.succeeded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-6 flex items-center gap-3 border border-[#E6E2DA] bg-emerald-50/50 px-4 py-3.5 text-xs font-bold uppercase tracking-wide text-emerald-800 rounded-2xl"
              >
                <HiCheckCircle className="shrink-0 text-lg text-emerald-600" />
                <span>Thanks for reaching out! Will get back to you soon.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        {/* Social links */}
        <div className="mt-8 flex justify-center gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="flex h-10 w-10 items-center justify-center border border-[#E6E2DA] bg-white text-[#2D3A31] hover:bg-[#C27B66] hover:text-white hover:border-[#C27B66] transition-colors duration-300 rounded-full cursor-pointer shadow-xs"
            >
              {socialIconMap[s.icon] ?? <span className="text-xs font-bold uppercase tracking-wider">{s.name}</span>}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
