import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiAcademicCap, HiExternalLink, HiX } from "react-icons/hi";
import { SectionHeading, ScrollReveal } from "../ui";

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
        file: "/AWS Certified Cloud Practitioner.pdf",
      },
    ],
  },
  {
    title: "Oracle Certified Professional",
    issuer: "Oracle",
    date: "October 2025",
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

  useEffect(() => {
    if (viewingDoc) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [viewingDoc]);

  return (
    <section id="certifications" className="bg-[#F9F8F4] py-32 border-t border-[#E6E2DA] swiss-dots">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="earned *credentials*"
          subtitle="Industry-recognized credentials and professional achievements."
          number="04"
        />

        <div className="grid gap-8 md:grid-cols-2 mt-12">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={i * 0.05}>
              <div className="flex flex-col justify-center border border-[#E6E2DA] bg-white p-8 rounded-3xl h-full hover:-translate-y-1.5 shadow-[0_10px_20px_rgba(45,58,49,0.02)] hover:shadow-[0_15px_30px_rgba(45,58,49,0.06)] transition-all duration-500 ease-out group">
                <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                  {/* Badge Image container */}
                  <div className="shrink-0 transition-transform duration-300">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#E6E2DA]/40 bg-[#F2F0EB]/30 p-2 group-hover:scale-105 duration-300">
                      {cert.badgeImage ? (
                        <img
                          src={cert.badgeImage}
                          alt={`${cert.title} Badge`}
                          className="h-full w-full object-contain transition-all duration-700"
                        />
                      ) : (
                        <HiAcademicCap className="text-4xl text-[#2D3A31]/50" />
                      )}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-serif font-bold text-lg text-[#2D3A31] mb-1.5 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#2D3A31]/60 mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#8C9A84] mb-4">
                      Issued: {cert.date}
                    </p>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                      {cert.documents.map((doc) => (
                        <button
                          key={doc.label}
                          onClick={() => setViewingDoc(doc)}
                          className="inline-flex cursor-pointer items-center border border-[#E6E2DA] bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#2D3A31] hover:bg-[#8C9A84]/15 hover:text-[#2D3A31] transition-colors duration-300 rounded-full shadow-sm"
                        >
                          {doc.label}
                        </button>
                      ))}
                      {cert.credlyUrl && (
                        <a
                          href={cert.credlyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 border border-[#E6E2DA] bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#2D3A31] hover:bg-[#C27B66] hover:border-[#C27B66] hover:text-white transition-colors duration-300 rounded-full shadow-sm cursor-pointer"
                        >
                          <HiExternalLink className="text-xs" />
                          <span>{cert.credlyUrl.includes("credly.com") ? "Credly" : "Verify"}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
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

              {/* Embed */}
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

export default Certifications;
