import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiCode, HiX } from "react-icons/hi";
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

  return (
    <section id="hackathons" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Hackathons"
          subtitle="Competitions, challenges, and coding events I've participated in."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {hackathons.map((hackathon, i) => (
            <motion.div
              key={hackathon.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group rounded-xl border border-border bg-white p-6 transition-all duration-200 hover:border-primary/20 hover:shadow-sm"
            >
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                {/* Icon */}
                <div className="shrink-0 transition-transform hover:scale-105">
                  <div className="flex h-24 w-40 items-center justify-center rounded-xl bg-white border border-black/5 drop-shadow-sm p-3">
                    <img src="/icons/guidewire.svg" alt="Guidewire Logo" className="h-full w-full object-contain" />
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="mb-1 flex items-center justify-center gap-2 sm:justify-start">
                    <h3 className="text-lg font-semibold text-primary">{hackathon.title}</h3>
                  </div>
                  <p className="mb-1 text-sm text-text-secondary">{hackathon.event}</p>
                  <p className="mb-4 text-xs text-text-muted">{hackathon.date}</p>

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                    {hackathon.documents.map((doc) => (
                      <button
                        key={doc.label}
                        onClick={() => setViewingDoc(doc)}
                        className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-black/10 bg-white/60 px-3.5 py-2 text-xs font-medium text-black backdrop-blur-sm transition-all hover:bg-white/80 hover:shadow-sm"
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

      {/* Full-screen PDF Viewer Modal */}
      <AnimatePresence>
        {viewingDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setViewingDoc(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl rounded-2xl bg-white shadow-2xl overflow-hidden"
              style={{ height: "85vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <h3 className="text-sm font-semibold text-primary">
                  {viewingDoc.label}
                </h3>
                <button
                  onClick={() => setViewingDoc(null)}
                  className="rounded-lg p-1.5 text-text-muted transition-colors hover:bg-surface-alt hover:text-primary cursor-pointer"
                >
                  <HiX className="text-lg" />
                </button>
              </div>

              <iframe
                src={viewingDoc.file}
                title={viewingDoc.label}
                className="h-full w-full border-0"
                style={{ height: "calc(85vh - 49px)" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hackathons;
