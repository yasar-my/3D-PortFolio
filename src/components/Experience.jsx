import { motion } from "framer-motion";
import { GraduationCap, BriefcaseBusiness } from "lucide-react";
import { experience, education } from "../data/portfolio";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container experience-grid">
        {/* Internship Experience */}
        <motion.div
          className="experience-list"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow">Career Journey</p>
          <h2 className="section-heading">Internship Experience</h2>

          {experience.map((item, index) => (
            <motion.article
              className="experience-item"
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.12,
              }}
            >
              <div className="experience-header">
                <div className="experience-icon">
                  <BriefcaseBusiness size={20} />
                </div>

                <div className="experience-heading-content">
                  <h3 className="experience-role">{item.role}</h3>

                  <p className="experience-meta">
                    {item.company} · {item.period}
                  </p>
                </div>
              </div>

              {item.project && (
                <p className="experience-project">{item.project}</p>
              )}

              <ul className="experience-points">
                {item.points.map((point, pointIndex) => (
                  <li key={`${item.company}-${pointIndex}`}>
                    {point}
                  </li>
                ))}
              </ul>

              {item.stack && (
                <div className="experience-stack">
                  {item.stack.map((technology) => (
                    <span
                      className="experience-tech"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>

        {/* Education */}
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