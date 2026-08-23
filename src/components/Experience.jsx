import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { experience, education } from "../data/portfolio";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container experience-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow">Internship</p>
          <h2 className="section-heading">{experience.role}</h2>
          <p className="experience-meta">
            {experience.company} · {experience.period}
          </p>
          <p className="experience-project">{experience.project}</p>

          <ul className="experience-points">
            {experience.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="education-card card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className="education-icon">
            <GraduationCap size={22} />
          </div>
          <p className="eyebrow" style={{ marginBottom: 10 }}>
            Education
          </p>
          <h3>{education.degree}</h3>
          <p className="education-school">{education.school}</p>
          <p className="education-detail">{education.location}</p>
          <p className="education-detail">{education.period}</p>
          <p className="education-cgpa">{education.detail}</p>
        </motion.div>
      </div>
    </section>
  );
}
