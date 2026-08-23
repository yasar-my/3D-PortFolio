import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubMark } from "./BrandIcons";
import { projects } from "../data/portfolio";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="work" className="section projects">
      <div className="container">
        <p className="eyebrow">Selected work</p>
        <h2 className="section-heading">Projects that shipped</h2>
        <p className="section-sub">
          Two builds, one backend-heavy and one frontend-heavy — each taken
          from architecture through deployment.
        </p>

        <div className="projects-list">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              className="project-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <div className="project-head">
                <div>
                  <span className="project-index">{`0${i + 1}`}</span>
                  <h3>{p.name}</h3>
                  <p className="project-tag">
                    {p.tag} — {p.period}
                  </p>
                </div>
                <div className="project-links">
                  <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                    Live demo <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hero-icon-link"
                    aria-label={`${p.name} GitHub repository`}
                  >
                    <GithubMark size={18} />
                  </a>
                </div>
              </div>

              <p className="project-desc">{p.description}</p>

              <ul className="project-highlights">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="project-stack">
                {p.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
