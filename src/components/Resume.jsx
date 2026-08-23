import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import { profile } from "../data/portfolio";
import resumePreview from "../assets/resume-preview.jpg";
import "./Resume.css";

export default function Resume() {
  return (
    <section id="resume" className="section resume">
      <div className="container resume-inner">
        <motion.div
          className="resume-copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow">One-pager</p>
          <h2 className="section-heading">My resume</h2>
          <p className="section-sub">
            Everything on this page, condensed to one page — skills,
            the CodeTikki internship, Feast &amp; Fete, and education.
            Grab a copy for your records.
          </p>

          <div className="resume-actions">
            <a
              href={profile.resume}
              download="Yasar_M_Resume.pdf"
              className="btn btn-primary resume-download"
            >
              <Download size={16} /> Download resume (PDF)
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              <Eye size={15} /> Open full size
            </a>
          </div>
        </motion.div>

        <motion.a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="resume-preview"
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          whileHover={{ rotate: 0, y: -6 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          aria-label="Open resume PDF in a new tab"
        >
          <img src={resumePreview} alt="Preview of Yasar M's resume" />
          <span className="resume-preview-badge">
            <Eye size={14} /> View full page
          </span>
        </motion.a>
      </div>
    </section>
  );
}
