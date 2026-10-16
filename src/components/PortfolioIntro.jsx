import { useEffect } from "react";
import { motion } from "framer-motion";
import "./PortfolioIntro.css";

const letters = "PORTFOLIO".split("");
const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 37 + 11) % 100}%`,
  top: `${(index * 53 + 7) % 100}%`,
  delay: `${(index % 12) * 0.075}s`,
  size: `${2 + (index % 3)}px`,
}));

export default function PortfolioIntro({ onComplete }) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, 4600);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="portfolio-intro"
      role="status"
      aria-label="Introducing Yasar's portfolio"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="intro-grain" aria-hidden="true" />
      <div className="intro-orbit intro-orbit-one" aria-hidden="true" />
      <div className="intro-orbit intro-orbit-two" aria-hidden="true" />

      <div className="intro-content">
        <motion.p
          className="intro-kicker"
          initial={{ opacity: 0, letterSpacing: "0.6em", y: 10 }}
          animate={{ opacity: 1, letterSpacing: "0.28em", y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          DEVELOPER · CREATOR · BUILDER
        </motion.p>

        <div className="intro-title" aria-label="Portfolio">
          {letters.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              initial={{ opacity: 0, y: 70, rotateX: -90, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
              transition={{
                delay: 0.35 + index * 0.085,
                duration: 0.72,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="intro-line"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.8, ease: "easeOut" }}
        />

        <div className="intro-portrait-wrap">
          <motion.div
            className="intro-portrait-glow"
            initial={{ opacity: 0, scale: 0.65 }}
            animate={{ opacity: [0, 0.8, 0.45], scale: [0.65, 1.12, 1] }}
            transition={{ delay: 1.15, duration: 1.5, ease: "easeOut" }}
          />
          <motion.img
            className="intro-portrait"
            src="/portfolio-portrait.jpeg"
            alt="Portrait of Yasar M"
            initial={{ opacity: 0, scale: 0.82, y: 22, filter: "grayscale(1) blur(12px)" }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "grayscale(0) blur(0px)",
            }}
            transition={{ delay: 1.2, duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
          />
          {particles.map((particle) => (
            <motion.i
              key={particle.id}
              className="intro-particle"
              aria-hidden="true"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                animationDelay: particle.delay,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], y: [0, -24, -55] }}
              transition={{ delay: 1.1 + particle.id * 0.025, duration: 1.6, ease: "easeOut" }}
            />
          ))}
        </div>

        <motion.p
          className="intro-name"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.05, duration: 0.65 }}
        >
          YASAR M <span>— FULL STACK DEVELOPER</span>
        </motion.p>
      </div>

      <motion.div
        className="intro-progress"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 4.35, ease: "linear" }}
      />

      <button className="intro-skip" onClick={onComplete} type="button">
        SKIP INTRO <span aria-hidden="true">↗</span>
      </button>
    </motion.div>
  );
}
