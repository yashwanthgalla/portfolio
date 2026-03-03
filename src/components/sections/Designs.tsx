import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { SectionHeading } from "../ui";
import CircularGallery from "../ui/CircularGallery";
import TiltedCard from "../ui/TiltedCard";
import { designItems } from "../../data";
import type { DesignItem } from "../../types";

const categoryLabels: Record<string, string> = {
  all: "All",
  poster: "Posters",
  graphic: "Graphics",
  cad: "CAD Models",
};

const Designs: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [selected, setSelected] = useState<DesignItem | null>(null);

  const posterItems = useMemo(
    () =>
      designItems
        .filter((d) => d.category === "poster")
        .map((d) => ({ image: d.image, text: d.title })),
    []
  );

  const gridItems =
    filter === "all"
      ? designItems.filter((d) => d.category !== "poster")
      : filter === "poster"
        ? []
        : designItems.filter((d) => d.category === filter);

  const showGallery = filter === "all" || filter === "poster";

  return (
    <section id="designs" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Design & CAD"
          subtitle="Creative work spanning posters, graphics, and CAD modeling."
        />

        {/* Filter buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                filter === key
                  ? "bg-primary text-white"
                  : "border border-border text-text-secondary hover:border-primary hover:text-primary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Circular Gallery for Posters — full bleed edge-to-edge */}
      {showGallery && (
        <div className="relative mb-12 h-[500px] w-full overflow-hidden">
          <CircularGallery
            items={posterItems}
            bend={1}
            textColor="#111827"
            borderRadius={0.05}
            font="bold 30px Inter"
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>
      )}

      <div className="mx-auto max-w-6xl px-6">
        {gridItems.length > 0 && (
          <motion.div
            layout
            className="grid gap-8 sm:grid-cols-2"
          >
            <AnimatePresence mode="popLayout">
              {gridItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center"
                >
                  <div onClick={() => setSelected(item)} className="cursor-pointer">
                    <TiltedCard
                      imageSrc={item.image}
                      altText={item.title}
                      captionText={item.title}
                      containerHeight="320px"
                      containerWidth="100%"
                      imageHeight="280px"
                      imageWidth="280px"
                      rotateAmplitude={12}
                      scaleOnHover={1.05}
                      showTooltip={true}
                      showMobileWarning={false}
                    />
                  </div>
                  <p className="mt-2 text-sm font-medium text-primary">{item.title}</p>
                  <p className="text-xs text-text-muted capitalize">{item.category}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-xl border border-border bg-white shadow-2xl"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-3 top-3 z-10 rounded-lg bg-white/90 p-1.5 text-lg text-text-secondary transition-colors hover:text-primary"
                  aria-label="Close modal"
                >
                  <HiX />
                </button>
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full object-contain"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-primary">
                    {selected.title}
                  </h3>
                  {selected.description && (
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {selected.description}
                    </p>
                  )}
                  <span className="mt-3 inline-block rounded border border-border px-2.5 py-0.5 text-xs font-medium uppercase text-text-muted">
                    {selected.category}
                  </span>
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
