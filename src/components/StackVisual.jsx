import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { stackLayers } from "../data/portfolio";
import "./StackVisual.css";

/**
 * The site's signature element: the request path through a full-stack
 * app, rendered as four literal layers floating in 3D space — database
 * at the base, frontend on top, the order a request actually travels.
 * Mouse movement tilts the whole assembly; hovering a layer lifts it
 * and reveals its detail.
 */
export default function StackVisual() {
  const wrapRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(null);

  const handleMove = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -14, y: px * 18 });
  };

  const handleLeave = () => setTilt({ x: 0, y: 0 });

  const layersTopFirst = [...stackLayers].reverse();

  return (
    <div
      className="stack-visual"
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div
        className="stack-scene"
        style={{
          transform: `rotateX(${18 + tilt.x}deg) rotateZ(${tilt.y}deg)`,
        }}
      >
        {layersTopFirst.map((layer, i) => {
          const depth = stackLayers.length - 1 - i; // 0 = bottom (db)
          const isActive = active === layer.id;
          return (
            <motion.div
              key={layer.id}
              className={`stack-layer stack-layer--${layer.id} ${isActive ? "is-active" : ""}`}
              style={{ "--depth": depth }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              onMouseEnter={() => setActive(layer.id)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="stack-layer-face">
                <span className="stack-layer-index">{`0${depth + 1}`}</span>
                <span className="stack-layer-label">{layer.label}</span>
                <p className="stack-layer-detail">{layer.detail}</p>
                <div className="stack-layer-tags">
                  {layer.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}