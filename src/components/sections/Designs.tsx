import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { SectionHeading, ScrollReveal } from "../ui";
import { designItems } from "../../data";
import type { DesignItem } from "../../types";

const Designs: React.FC = () => {
  const [selected, setSelected] = useState<DesignItem | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [selected]);

  const posters = useMemo(
    () => designItems.filter((d) => d.category === "poster"),
    []
  );

  const modelItems = useMemo(
    () => designItems.filter((d) => d.category === "cad"),
    []
  );

  return (
    <section id="designs" className="py-32 bg-[#F9F8F4] border-t border-[#E6E2DA] swiss-diagonal">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="creative *designs*"
          subtitle="Creative work spanning posters, graphics, and CAD modeling."
          number="03"
        />
      </div>

      {/* Posters Masonry Arch Exhibition */}
      {posters.length > 0 && (
        <div className="mx-auto max-w-6xl px-6 mb-24">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h3 className="font-serif italic text-2xl text-[#2D3A31]">
                poster exhibition
              </h3>
            </div>
          </ScrollReveal>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 [column-fill:balance] space-y-8">
            {posters.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.05}>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="break-inside-avoid border border-[#E6E2DA] bg-white p-4 rounded-3xl cursor-pointer hover:-translate-y-1.5 transition-all duration-300 ease-out hover:shadow-[0_15px_30px_rgba(45,58,49,0.06)] shadow-[0_10px_20px_rgba(45,58,49,0.02)] group mb-8 flex flex-col"
                  onClick={() => setSelected(item)}
                >
                  <div className="relative overflow-hidden bg-[#F2F0EB] rounded-t-full rounded-b-2xl border border-[#E6E2DA]/40 p-2.5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full object-cover rounded-t-full rounded-b-xl transition-all duration-700 ease-out group-hover:scale-103"
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between px-1">
                    <h4 className="font-serif font-bold text-lg text-[#2D3A31]">
                      {item.title}
                    </h4>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#C27B66]">
                      Exhibition
                    </span>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      )}

      {/* CAD Models Masonry Section */}
      <div className="mx-auto max-w-6xl px-6">
        {modelItems.length > 0 && (
          <div className="mb-8">
            <ScrollReveal>
              <div className="mb-12 border-t border-[#E6E2DA]/60 pt-16 text-center">
                <h3 className="font-serif italic text-2xl text-[#2D3A31]">
                  CAD & 3D models
                </h3>
              </div>
            </ScrollReveal>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 [column-fill:balance] space-y-8">
              {modelItems.map((item, i) => (
                <ScrollReveal key={item.id} delay={i * 0.05}>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="break-inside-avoid border border-[#E6E2DA] bg-white p-4 rounded-3xl cursor-pointer hover:-translate-y-1.5 transition-all duration-300 ease-out hover:shadow-[0_15px_30px_rgba(45,58,49,0.06)] shadow-[0_10px_20px_rgba(45,58,49,0.02)] group mb-8 flex flex-col"
                    onClick={() => setSelected(item)}
                  >
                    <div className="relative overflow-hidden bg-[#F2F0EB] rounded-t-full rounded-b-2xl border border-[#E6E2DA]/40 p-2.5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full object-cover rounded-t-full rounded-b-xl transition-all duration-700 ease-out group-hover:scale-103"
                      />
                    </div>
                    <div className="mt-4 flex items-baseline justify-between px-1">
                      <h4 className="font-serif font-bold text-lg text-[#2D3A31]">
                        {item.title}
                      </h4>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-[#8C9A84] border border-[#8C9A84]/45 bg-[#8C9A84]/5 px-2.5 py-0.5 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* Botanical Detail Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2D3A31]/50 p-4 backdrop-blur-xs"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] w-full max-w-2xl overflow-auto no-scrollbar rounded-[32px] border border-[#E6E2DA] bg-white shadow-[0_25px_50px_-12px_rgba(45,58,49,0.15)]"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-5 top-5 z-10 border border-[#E6E2DA] bg-white p-2.5 text-lg text-[#2D3A31] transition-colors hover:bg-[#C27B66] hover:text-white rounded-full cursor-pointer shadow-sm"
                  aria-label="Close modal"
                >
                  <HiX />
                </button>
                <div className="border-b border-[#E6E2DA] bg-[#F2F0EB]/40 flex items-center justify-center p-6 rounded-t-[32px]">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="max-h-[55vh] object-contain rounded-2xl border border-[#E6E2DA]/30"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif font-bold text-3xl text-[#2D3A31] leading-none">
                    {selected.title}
                  </h3>
                  {selected.description && (
                    <p className="mt-4 text-sm font-semibold uppercase leading-relaxed text-[#2D3A31]/75">
                      {selected.description}
                    </p>
                  )}
                  <div className="mt-6">
                    <span className="inline-block border border-[#E6E2DA] bg-[#F2F0EB] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#2D3A31] rounded-full">
                      {selected.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Designs;
