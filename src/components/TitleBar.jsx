import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";

const TABS = [
  { id: "accueil", label: "Accueil" },
  { id: "apropos", label: "À Propos" },
  { id: "projets", label: "Projets" },
  { id: "contact", label: "Contact" },
];

export default function TitleBar() {
  const [active, setActive] = useState("accueil");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-panel-2)]/95 backdrop-blur border-b border-[var(--color-border)]">
      <div className="flex items-center px-5 md:px-8 py-4">
        <p className="font-mono text-lg font-bold text-[var(--color-text)] tracking-tight">
          {"</"}<span className="text-[var(--color-teal)]">fabien</span>{">"}
        </p>

        <nav className="hidden md:flex items-center gap-8 mx-auto">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => goTo(tab.id)}
              data-cursor-hover
              className={`text-sm font-medium transition-colors ${
                active === tab.id ? "text-[var(--color-teal)]" : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <a
          href="/cv-fabien.pdf"
          download
          data-cursor-hover
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-[var(--color-teal)] text-[#06211D] text-sm font-semibold px-5 py-2.5 hover:brightness-110 transition"
        >
          <Download size={14} /> Téléchargez mon CV
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ml-auto text-[var(--color-text)]"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className={`${open ? "flex" : "hidden"} md:hidden flex-col border-t border-[var(--color-border)]`}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => goTo(tab.id)}
            className={`text-sm font-medium px-5 py-3 text-left border-b border-[var(--color-border)] ${
              active === tab.id ? "text-[var(--color-teal)]" : "text-[var(--color-muted)]"
            }`}
          >
            {tab.label}
          </button>
        ))}
        <a
          href="/cv-fabien.pdf"
          download
          className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-[var(--color-teal)]"
        >
          <Download size={14} /> Télécharger mon CV
        </a>
      </nav>
    </header>
  );
}
