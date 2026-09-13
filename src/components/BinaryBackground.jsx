import { useMemo } from "react";

export default function BinaryBackground({ className = "" }) {
  const rows = useMemo(() => {
    const out = [];
    for (let r = 0; r < 40; r++) {
      let row = "";
      for (let c = 0; c < 130; c++) {
        row += Math.round(Math.sin(r * 12.9898 + c * 78.233) * 43758.5453) % 2 === 0 ? "0" : "1";
        row += " ";
      }
      out.push(row);
    }
    return out;
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute inset-0 overflow-hidden font-mono text-[13px] leading-6 text-[var(--color-teal)]/[0.09] whitespace-pre ${className}`}
    >
      {rows.map((row, i) => (
        <div key={i}>{row}</div>
      ))}
    </div>
  );
}
