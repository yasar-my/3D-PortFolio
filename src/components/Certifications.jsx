import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { certifications } from "../data/portfolio";
import "./Certifications.css";

export default function Certifications() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <p className="eyebrow">Credentials</p>
        <h2 className="section-heading">Certifications</h2>
        <p className="section-sub">
          Focused, applied courses completed alongside coursework and
          project work. Tap any certificate to view it full size.
        </p>

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <motion.button
              key={cert.name}
              type="button"
              className="cert-card card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              onClick={() => setActive(cert)}
            >
              <div className="cert-thumb">
                <img src={cert.image} alt={`${cert.name} certificate`} loading="lazy" />
                <span className="cert-zoom">
                  <ZoomIn size={16} />
                </span>
              </div>
              <div className="cert-info">
                <p className="cert-name">{cert.name}</p>
                <p className="cert-issuer">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="cert-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.name} certificate, full size`}
          >
            <motion.figure
              className="cert-lightbox-inner"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={active.image} alt={`${active.name} certificate`} />
              <figcaption>
                {active.name} — {active.issuer}
              </figcaption>
              <button
                type="button"
                className="cert-lightbox-close"
                aria-label="Close"
                onClick={() => setActive(null)}
              >
                <X size={20} />
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
