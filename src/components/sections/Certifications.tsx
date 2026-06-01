import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiAcademicCap, HiExternalLink, HiX } from "react-icons/hi";
import { SectionHeading } from "../ui";

const certifications = [
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
    badgeImage: "/oraclebadge.jpg",
    documents: [
      {
        label: "Certificate",
        file: "/Oracle Certified Professional.pdf",
      },
    ],
  },
  {
    title: "Build Infrastructure with Terraform on Google Cloud",
    issuer: "Google Cloud",
    date: "September 2025",
    credlyUrl: "https://www.credly.com/badges/b0afcc5a-f76c-4a12-8b89-05dd5df1dff6/public_url",
    badgeImage: "https://images.credly.com/size/340x340/images/b18154fb-9bd3-47e5-a6f1-554be512947d/image.png",
    documents: [],
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "May 2026",
    credlyUrl: "https://www.credly.com/badges/5f5edf30-0194-407d-9d82-58dff7e41b73/public_url",
    badgeImage: "https://images.credly.com/size/340x340/images/68c0b94d-f6ac-40b1-a0e0-921439eb092e/image.png",
    documents: [],
  },
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "Amazon Web Services Academy",
    date: "January 2026",
    credlyUrl: "https://www.credly.com/badges/2ca9edb4-712c-45ca-b581-91d1fad717b5/public_url",
    badgeImage: "https://images.credly.com/images/e3541a0c-dd4a-4820-8052-5001006efc85/blob",
    documents: [],
  },
];

const Certifications: React.FC = () => {
  const [viewingDoc, setViewingDoc] = useState<{ label: string; file: string } | null>(null);
  const [activeTab, setActiveTab] = useState<"curated" | "embed">("curated");

  return (
    <section id="certifications" className="bg-white py-24 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Certifications"
          subtitle="Industry-recognized credentials and achievements."
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-1 rounded-lg border border-border bg-surface-alt p-1 text-xs font-semibold">
            <button
              onClick={() => setActiveTab("curated")}
              className={`rounded px-4 py-2 transition-all cursor-pointer ${
                activeTab === "curated"
                  ? "bg-primary text-white shadow-2xs"
                  : "text-text-secondary hover:bg-white hover:text-primary"
              }`}
            >
              Curated Credentials
            </button>
            <button
              onClick={() => setActiveTab("embed")}
              className={`rounded px-4 py-2 transition-all cursor-pointer ${
                activeTab === "embed"
                  ? "bg-primary text-white shadow-2xs"
                  : "text-text-secondary hover:bg-white hover:text-primary"
              }`}
            >
              Interactive Credly Board
            </button>
          </div>
        </div>

        {/* Content Tabs */}
        {activeTab === "curated" ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group flex flex-col justify-between rounded-xl border border-border bg-white p-5 transition-all duration-200 hover:border-primary/20 hover:shadow-xs"
              >
                <div>
                  {/* Badge Row */}
                  <div className="flex justify-center mb-5">
                    {cert.credlyUrl ? (
                      <a
                        href={cert.credlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 transition-transform hover:scale-105"
                      >
                        {cert.badgeImage ? (
                          <img
                            src={cert.badgeImage}
                            alt={`${cert.title} Badge`}
                            className="h-24 w-24 object-contain drop-shadow-xs"
                          />
                        ) : (
                          <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-black/5 drop-shadow-xs">
                            <HiAcademicCap className="text-3xl text-text-muted" />
                          </div>
                        )}
                      </a>
                    ) : (
                      <div className="shrink-0 transition-transform hover:scale-105">
                        {cert.badgeImage ? (
                          <img
                            src={cert.badgeImage}
                            alt={`${cert.title} Badge`}
                            className="h-24 w-24 object-contain drop-shadow-xs"
                          />
                        ) : (
                          <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-black/5 drop-shadow-xs">
                            <HiAcademicCap className="text-3xl text-text-muted" />
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="text-center mb-6">
                    <h3 className="text-base font-bold text-primary mb-1 line-clamp-2 min-h-[3rem]">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-text-secondary font-semibold mb-0.5">{cert.issuer}</p>
                    <p className="text-[10px] text-text-muted">{cert.date}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 pt-4 border-t border-border/40 mt-auto">
                  {cert.documents.map((doc) => (
                    <button
                      key={doc.label}
                      onClick={() => setViewingDoc(doc)}
                      className="inline-flex cursor-pointer items-center gap-1 rounded-md border border-border bg-white px-2.5 py-1.5 text-[11px] font-semibold text-text-secondary transition-all hover:bg-surface-alt hover:text-primary"
                    >
                      {doc.label}
                    </button>
                  ))}
                  {cert.credlyUrl && (
                    <a
                      href={cert.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-md border border-border bg-white px-2.5 py-1.5 text-[11px] font-semibold text-text-secondary transition-all hover:bg-surface-alt hover:text-primary cursor-pointer"
                    >
                      <HiExternalLink className="text-xs" />
                      {cert.credlyUrl.includes("credly.com") ? "Credly" : "Verify"}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-5xl mx-auto rounded-2xl border border-border overflow-hidden bg-white shadow-xs"
          >
            <iframe
              src="https://www.credly.com/users/naga-yashwanth-galla"
              width="100%"
              height="800"
              title="Credly Verified Credentials Board"
              style={{ border: "none" }}
              className="w-full"
            />
          </motion.div>
        )}
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

              {/* PDF embed */}
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
