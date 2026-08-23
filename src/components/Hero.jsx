import { motion } from "framer-motion";
import { ArrowDown, Mail, FileDown } from "lucide-react";
import { GithubMark, LinkedinMark } from "./BrandIcons";
import { profile } from "../data/portfolio";
import StackVisual from "./StackVisual";
import profileImg from "../assets/profile.jpg";
import "./Hero.css";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            {profile.availability} · Based in Tenkasi, India
          </motion.p>

          <div className="hero-identity">
            <motion.div
              className="hero-avatar"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img src={profileImg} alt="Portrait of Yasar M" />
              <span className="hero-avatar-ring" aria-hidden="true" />
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              {profile.name}
              <span className="hero-role">{profile.role}</span>
            </motion.h1>
          </div>

          <motion.p
            className="hero-tagline"
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            {profile.summary}
          </motion.p>

          <motion.div
            className="hero-looking"
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <span className="hero-looking-label">Open to roles in</span>
            {profile.looking.map((role) => (
              <span key={role} className="tag">
                {role}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="hero-actions"
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <a href="#work" className="btn btn-primary">
              View projects <ArrowDown size={15} />
            </a>
            <a href="#resume" className="btn btn-ghost">
              <FileDown size={15} /> Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              <Mail size={15} /> Contact
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="hero-icon-link"
              aria-label="GitHub profile"
            >
              <GithubMark size={19} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hero-icon-link"
              aria-label="LinkedIn profile"
            >
              <LinkedinMark size={19} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <StackVisual />
        </motion.div>
      </div>
    </section>
  );
}
