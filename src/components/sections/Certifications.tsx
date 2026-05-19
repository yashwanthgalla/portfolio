import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiAcademicCap, HiExternalLink, HiX } from "react-icons/hi";
import { SectionHeading } from "../ui";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "May 2026",
    credlyUrl: "https://www.credly.com/badges/885d7db1-99ce-41d9-be4a-dc84cbcd14ea/public_url",
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
    credlyUrl: "https://www.credly.com/users/naga-yashwanth-galla",
    badgeImage: "/oraclebadge.jpg",
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
    <section id="certifications" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Certifications"
          subtitle="Industry-recognized credentials and achievements."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group rounded-xl border border-border bg-white p-6 transition-all duration-200 hover:border-primary/20 hover:shadow-sm"
            >
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                {/* Badge */}
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
                        className="h-28 w-28 object-contain drop-shadow-md"
                      />
                    ) : (
                      <div className="flex h-28 w-28 items-center justify-center rounded-xl bg-black/5 drop-shadow-md">
                        <HiAcademicCap className="text-4xl text-text-muted" />
                      </div>
                    )}
                  </a>
                ) : (
                  <div className="shrink-0 transition-transform hover:scale-105">
                    {cert.badgeImage ? (
                      <img
                        src={cert.badgeImage}
                        alt={`${cert.title} Badge`}
                        className="h-28 w-28 object-contain drop-shadow-md"
                      />
                    ) : (
                      <div className="flex h-28 w-28 items-center justify-center rounded-xl bg-black/5 drop-shadow-md">
                        <HiAcademicCap className="text-4xl text-text-muted" />
                      </div>
                    )}
                  </div>
                )}

                {/* Details */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="mb-1 flex items-center justify-center gap-2 sm:justify-start">
                    <HiAcademicCap className="text-lg text-accent" />
                    <h3 className="text-lg font-semibold text-primary">{cert.title}</h3>
                  </div>
                  <p className="mb-1 text-sm text-text-secondary">{cert.issuer}</p>
                  <p className="mb-4 text-xs text-text-muted">{cert.date}</p>

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                    {cert.documents.map((doc) => (
                      <button
                        key={doc.label}
                        onClick={() => setViewingDoc(doc)}
                        className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-black/10 bg-white/60 px-3.5 py-2 text-xs font-medium text-black backdrop-blur-sm transition-all hover:bg-white/80 hover:shadow-sm"
                      >
                        {doc.label}
                      </button>
                    ))}
                    {cert.credlyUrl && (
                      <a
                        href={cert.credlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white/60 px-3.5 py-2 text-xs font-medium text-black backdrop-blur-sm transition-all hover:bg-white/80 hover:shadow-sm"
                      >
                        <HiExternalLink className="text-sm" />
                        View on Credly
                      </a>
                    )}
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
