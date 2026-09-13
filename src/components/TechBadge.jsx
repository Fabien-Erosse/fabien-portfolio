const STYLES = {
  Python: { from: "#2B5B84", to: "#1B3A57", fg: "#7DD3E8", label: "Py" },
  PHP: { from: "#3B3F8C", to: "#262962", fg: "#B8BEE8", label: "PHP" },
  "C#": { from: "#5A2E8C", to: "#3B1D5C", fg: "#D9C2F0", label: "C#" },
  HTML: { from: "#7A3B1D", to: "#502712", fg: "#F2A96B", label: "HTML" },
  CSS: { from: "#1F4B8C", to: "#122E5C", fg: "#8FC1F2", label: "CSS" },
  Java: { from: "#7A2E1D", to: "#4F1D12", fg: "#F2B98F", label: "Java" },
  React: { from: "#0E4A57", to: "#0A2E38", fg: "#61DAFB", label: "React" },
};

export default function TechBadge({ name }) {
  const s = STYLES[name] || {
    from: "#22303F",
    to: "#151E29",
    fg: "var(--color-teal)",
    label: name.slice(0, 3),
  };
  return (
    <span
      title={name}
      data-cursor-hover
      className="inline-flex items-center justify-center h-10 w-10 rounded-xl font-mono text-[10px] font-bold shrink-0 border border-white/10 shadow-md shadow-black/30 transition-transform hover:scale-110 hover:-translate-y-0.5"
      style={{
        background: `linear-gradient(145deg, ${s.from}, ${s.to})`,
        color: s.fg,
      }}
    >
      {s.label}
    </span>
  );
}
