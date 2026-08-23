import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const LINKS = [
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Work" },
  { href: "#resume", label: "Resume" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav-inner container">
        <a href="#top" className="nav-brand" onClick={close}>
          <span className="nav-brand-mark" aria-hidden="true">YM</span>
          <span className="nav-brand-name">Yasar M</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary nav-cta">
          Let's talk
        </a>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="nav-mobile" role="dialog" aria-modal="true">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={close}>
            Let's talk
          </a>
        </div>
      )}
    </header>
  );
}
