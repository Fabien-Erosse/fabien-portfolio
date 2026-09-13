import { useEffect, useRef, useState } from "react";

const TRAIL_LENGTH = 6;

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState([]);
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const frame = useRef(0);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    const move = (e) => {
      const point = { x: e.clientX, y: e.clientY };
      setPos(point);

      frame.current += 1;
      if (frame.current % 3 === 0) {
        setTrail((prev) => [point, ...prev].slice(0, TRAIL_LENGTH));
      }

      const target = e.target.closest?.("[data-cursor-hover]");
      setHover(Boolean(target));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;

  return (
    <>
      {trail.map((p, i) => {
        const ratio = 1 - i / TRAIL_LENGTH;
        return (
          <div
            key={i}
            className="pointer-events-none fixed top-0 left-0 z-[998] rounded-full bg-[var(--color-teal)]"
            style={{
              width: 5 * ratio,
              height: 5 * ratio,
              opacity: 0.35 * ratio,
              transform: `translate(${p.x}px, ${p.y}px) translate(-50%, -50%)`,
            }}
          />
        );
      })}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[999] rounded-full border-2 border-[var(--color-teal)] transition-[width,height,background-color] duration-150 ease-out"
        style={{
          width: hover ? 44 : 14,
          height: hover ? 44 : 14,
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
          backgroundColor: hover ? "rgba(45, 212, 191, 0.12)" : "var(--color-teal)",
        }}
      />
    </>
  );
}
