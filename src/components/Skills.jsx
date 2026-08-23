import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="stack" className="section skills">
      <div className="container">
        <p className="eyebrow">Toolbox</p>
        <h2 className="section-heading">What I build with</h2>
        <p className="section-sub">
          The layers on the previous screen, broken down into the actual
          languages, frameworks, and tools behind each one.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              className="skills-card card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
