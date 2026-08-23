import "./AmbientBackground.css";

/**
 * Fixed, decorative backdrop: a faint grid plus two slow-drifting
 * violet/magenta glows. Pure CSS animation — cheap on mobile.
 */
export default function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient-grid" />
      <div className="ambient-glow ambient-glow--a" />
      <div className="ambient-glow ambient-glow--b" />
      <div className="ambient-noise" />
    </div>
  );
}
