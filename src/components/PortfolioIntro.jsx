import { useEffect } from "react";
import { motion } from "framer-motion";
import "./PortfolioIntro.css";

const letters = "PORTFOLIO".split("");

const particles = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  left: `${(index * 29 + 13) % 100}%`,
  top: `${(index * 47 + 19) % 100}%`,
  delay: index * 0.025,
  size: 2 + (index % 3),
}));

const sweepStyle = {
  position: "absolute",
  inset: "-20% -35%",
  pointerEvents: "none",
  background:
    "linear-gradient(115deg, transparent 35%, rgba(255,255,255,.025) 43%, rgba(167,139,250,.22) 49%, rgba(255,255,255,.08) 51%, transparent 58%)",
  transform: "translateX(-120%)",
  zIndex: 0,
};

export default function PortfolioIntro({ onComplete }) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      onComplete?.();
    }, 4800);

    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="portfolio-intro"
      role="status"
      aria-label="Introducing Yasar's portfolio"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: "#03040a" }}
    >
      <div className="intro-grain" aria-hidden="true" />

      <motion.div
        aria-hidden="true"
        style={sweepStyle}
        initial={{ x: "-35%" }}
        animate={{ x: "135%" }}
        transition={{
          duration: 1.55,
          delay: 0.15,
          ease: [0.7, 0, 0.3, 1],
        }}
      />

      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "min(68vw, 620px)",
          aspectRatio: "1",
          borderRadius: "50%",
          border: "1px solid rgba(167,139,250,.35)",
          boxShadow:
            "0 0 80px rgba(124,58,237,.12), inset 0 0 80px rgba(124,58,237,.08)",
        }}
        initial={{ opacity: 0, scale: 1.7, rotate: -35 }}
        animate={{
          opacity: [0, 0.75, 0.32],
          scale: [1.7, 1, 0.94],
          rotate: 0,
        }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
      />

      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "min(84vw, 780px)",
          aspectRatio: "1",
          borderRadius: "50%",
          border: "1px solid rgba(192,132,252,.16)",
        }}
        initial={{ opacity: 0, scale: 0.55 }}
        animate={{
          opacity: [0, 0.55, 0.15],
          scale: [0.55, 1.08, 1.16],
        }}
        transition={{ duration: 2.6, delay: 0.2, ease: "easeOut" }}
      />

      <div className="intro-content" style={{ zIndex: 2 }}>
        <motion.p
          className="intro-kicker"
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          DEVELOPER · CREATOR · BUILDER
        </motion.p>

        <div
          className="intro-title"
          aria-label="Portfolio"
          style={{ perspective: 1000 }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              initial={{
                opacity: 0,
                y: 90,
                rotateY: index % 2 ? 80 : -80,
                scale: 0.6,
                filter: "blur(14px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotateY: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: 0.38 + index * 0.075,
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ textShadow: "0 0 28px rgba(167,139,250,.3)" }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="intro-line"
          initial={{ scaleX: 0, opacity: 0, filter: "blur(5px)" }}
          animate={{
            scaleX: [0, 1.12, 1],
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 1.1,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        />

        <motion.div
          className="intro-portrait-wrap"
          initial={{
            clipPath: "circle(0% at 50% 50%)",
            scale: 0.8,
            rotate: -8,
          }}
          animate={{
            clipPath: "circle(75% at 50% 50%)",
            scale: 1,
            rotate: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 1.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.div
            className="intro-portrait-glow"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{
              opacity: [0, 0.95, 0.45],
              scale: [0.4, 1.25, 1],
            }}
            transition={{ delay: 1.25, duration: 1.7, ease: "easeOut" }}
          />

          <motion.img
            className="intro-portrait"
            src="/portfolio-portrait.jpeg"
            alt="Portrait of Yasar M"
            initial={{
              opacity: 0,
              scale: 1.18,
              filter: "grayscale(1) brightness(.45) blur(16px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "grayscale(0) brightness(1) blur(0px)",
            }}
            transition={{
              delay: 1.3,
              duration: 1.35,
              ease: [0.16, 1, 0.3, 1],
            }}
          />

          {particles.map((particle) => (
            <motion.i
              key={particle.id}
              className="intro-particle"
              aria-hidden="true"
              style={{
                left: particle.left,
                top: particle.top,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                background:
                  particle.id % 3 === 0 ? "#f5d0fe" : "#c4b5fd",
              }}
              initial={{ opacity: 0, scale: 0, x: 0, y: 12 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0],
                x: [0, (particle.id % 2 ? 1 : -1) * 18],
                y: [12, -18, -48],
              }}
              transition={{
                delay: 1.15 + particle.delay,
                duration: 1.55,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>

        <motion.p
          className="intro-name"
          initial={{ opacity: 0, y: 18, letterSpacing: "0.35em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.14em" }}
          transition={{ delay: 2.15, duration: 0.7, ease: "easeOut" }}
        >
          YASAR M <span>— FULL STACK DEVELOPER</span>
        </motion.p>
      </div>

      <motion.div
        className="intro-progress"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 4.55, ease: "linear" }}
      />

      <motion.button
        className="intro-skip"
        onClick={onComplete}
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.35 }}
      >
        SKIP INTRO <span aria-hidden="true">↗</span>
      </motion.button>
    </motion.div>
  );
}
