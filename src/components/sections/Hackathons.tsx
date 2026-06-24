import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { SectionHeading } from "../ui";

const hackathons = [
  {
    title: "Guidewire DevTrails Hackathon",
    event: "Conducted by Guidewire DevTrails",
    date: "2026",
    documents: [
      {
        label: "Participation Certificate",
        file: "/GWDT698f091d907a8GWDT261770981661.pdf",
      },
    ],
  },
];

const Hackathons: React.FC = () => {
  const [viewingDoc, setViewingDoc] = useState<{ label: string; file: string } | null>(null);

  useEffect(() => {
    if (viewingDoc) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [viewingDoc]);

  return (
    <section id="hackathons" className="bg-white py-32 border-t border-[#E6E2DA] swiss-diagonal">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="recent *hackathons*"
          subtitle="Competitions, challenges, and coding events I've participated in."
          number="05"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {hackathons.map((hackathon, i) => (
            <motion.div
              key={hackathon.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
              className="group border border-[#E6E2DA] bg-white p-8 rounded-3xl hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(45,58,49,0.06)] shadow-[0_10px_20px_rgba(45,58,49,0.02)] transition-all duration-500 ease-out"
            >
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                {/* Logo Image Container */}
                <div className="shrink-0 transition-transform">
                  <div className="flex h-20 w-36 items-center justify-center rounded-2xl bg-white border border-[#E6E2DA]/50 p-2.5 group-hover:scale-102 transition-transform">
                    <img
                      src="/icons/guidewire.svg"
                      alt="Guidewire Logo"
                      className="h-full w-full object-contain transition-all duration-700"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-serif font-bold text-lg text-[#2D3A31] mb-1">
                    {hackathon.title}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#2D3A31]/60 mb-1">
                    {hackathon.event}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#8C9A84] mb-4">
                    Year: {hackathon.date}
                  </p>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                    {hackathon.documents.map((doc) => (
                      <button
                        key={doc.label}
                        onClick={() => setViewingDoc(doc)}
                        className="inline-flex cursor-pointer items-center border border-[#E6E2DA] bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#2D3A31] hover:bg-[#8C9A84]/15 hover:text-[#2D3A31] transition-colors duration-300 rounded-full shadow-sm"
                      >
                        {doc.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PDF Modal */}
      <AnimatePresence>
        {viewingDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2D3A31]/50 backdrop-blur-xs p-4"
            onClick={() => setViewingDoc(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl border border-[#E6E2DA] bg-white shadow-xl rounded-[32px] overflow-hidden"
              style={{ height: "85vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between border-b border-[#E6E2DA] px-6 py-4 bg-[#F2F0EB]/40">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#2D3A31]">
                  Viewing / {viewingDoc.label}
                </h3>
                <button
                  onClick={() => setViewingDoc(null)}
                  className="border border-[#E6E2DA] bg-white p-2 text-[#2D3A31] hover:bg-[#C27B66] hover:text-white transition-colors cursor-pointer rounded-full"
                >
                  <HiX className="text-sm" />
                </button>
              </div>

              <iframe
                src={viewingDoc.file}
                title={viewingDoc.label}
                className="h-full w-full border-0 bg-white"
                style={{ height: "calc(85vh - 76px)" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hackathons;
