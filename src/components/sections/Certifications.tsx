import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiAcademicCap, HiExternalLink, HiX } from "react-icons/hi";
import { SectionHeading, GlassCard, ScrollReveal } from "../ui";

const certifications = [
  {
    title: "Certified Advanced Automation Professional",
    issuer: "Automation Anywhere",
    date: "June 2026",
    credlyUrl: "https://certificates.automationanywhere.com/185169191",
    badgeImage: "/automationanywherebadge.png",
    documents: [
      {
        label: "Certificate",
        file: "/Certified Advanced Automation Professional.png",
      },
    ],
  },
  {
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "May 2026",
    credlyUrl: "https://www.credly.com/badges/b84cf180-17ff-40d2-af8e-28034a618e27/public_url",
    badgeImage: "https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
    documents: [
      {
        label: "Certificate",
        file: "/AWS Certified Developer - Associate certificate.pdf",
      },
      {
        label: "Grade Sheet",
        file: "/AWS Certified Developer - Associate.pdf",
      },
    ],
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "May 2026",
    credlyUrl: "https://www.credly.com/badges/a4c42945-f015-4412-b129-71eced65426c/public_url",
    badgeImage: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    documents: [
      {
        label: "Certificate",
        file: "/AWS Certified Cloud Practitioner certificate.pdf",
      },
      {
        label: "Grade Sheet",
        file: "/AWS Certified Cloud Practitioner.pdf",
      },
    ],
  },
  {
    title: "Oracle Certified Professional",
    issuer: "Oracle",
    date: "May 2026",
    credlyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=67764CC0D385608AF4F11C1BD9AFC888F68D35382197D4571D9467F1858A9395",
    badgeImage: "/oraclebadge.png",
    documents: [
      {
        label: "Certificate",
        file: "/Oracle Certified Professional.pdf",
      },
    ],
  },
];

const Certifications: React.FC = () => {
  const [viewingDoc, setViewingDoc] = useState<{ label: string; file: string } | null>(null);

  return (
    <section id="certifications" className="bg-background py-24 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Certifications"
          subtitle="Industry-recognized credentials and professional achievements."
        />

        <div className="grid gap-6 md:grid-cols-2 mt-12">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={i * 0.1}>
              <GlassCard className="flex flex-col justify-center h-full !p-6" hover={true}>
                <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
                  {/* Badge Image container - transparent, large and clear */}
                  <div className="shrink-0 transition-transform duration-300 hover:scale-105">
                    <div className="flex h-24 w-24 items-center justify-center">
                      {cert.badgeImage ? (
                        <img
                          src={cert.badgeImage}
                          alt={`${cert.title} Badge`}
                          className="h-full w-full object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:drop-shadow-[0_2px_8px_rgba(255,255,255,0.06)]"
                        />
                      ) : (
                        <HiAcademicCap className="text-5xl text-text-muted" />
                      )}
                    </div>
                  </div>

                  {/* Details and text hierarchy - matching Hackathons details styling */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg font-semibold text-primary mb-1 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-text-secondary mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-text-muted mb-4">
                      Issued: {cert.date}
                    </p>

                    {/* Actions container - matching Hackathons button design */}
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                      {cert.documents.map((doc) => (
                        <button
                          key={doc.label}
                          onClick={() => setViewingDoc(doc)}
                          className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-black/10 bg-white/60 px-3.5 py-2 text-xs font-medium text-black backdrop-blur-sm transition-all hover:bg-white/80 hover:shadow-sm dark:bg-card dark:text-foreground dark:hover:bg-accent/15"
                        >
                          <span>{doc.label}</span>
                        </button>
                      ))}
                      {cert.credlyUrl && (
                        <a
                          href={cert.credlyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white/60 px-3.5 py-2 text-xs font-medium text-black backdrop-blur-sm transition-all hover:bg-white/80 hover:shadow-sm cursor-pointer dark:bg-card dark:text-foreground dark:hover:bg-accent/15"
                        >
                          <HiExternalLink className="text-sm" />
                          <span>{cert.credlyUrl.includes("credly.com") ? "Credly" : "Verify"}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Full-screen PDF/Image Viewer Modal */}
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
              className="relative w-full max-w-4xl rounded-2xl bg-background shadow-2xl overflow-hidden"
              style={{ height: "85vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
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

              {/* PDF/Image embed */}
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

export default Certifications;


