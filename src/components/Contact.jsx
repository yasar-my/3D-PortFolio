import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { GithubMark, LinkedinMark } from "./BrandIcons";
import { profile } from "../data/portfolio";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          className="contact-card card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-glow" aria-hidden="true" />
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-heading">Let's build something reliable.</h2>
          <p className="section-sub" style={{ marginBottom: 34 }}>
            {profile.availability} and open to Development, Testing, and
            DevOps roles. Reach out directly, or find me on GitHub and
            LinkedIn.
          </p>

          <div className="contact-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <Mail size={15} /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="btn btn-ghost">
              <Phone size={15} /> {profile.phone}
            </a>
          </div>

          <div className="contact-social">
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              <GithubMark size={17} /> GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              <LinkedinMark size={17} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
