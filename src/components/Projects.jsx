import { Mail, MessageCircle } from "lucide-react";
import { projects, contact } from "../data/content";
import TechBadge from "./TechBadge";
import ScreenshotGrid from "./ScreenshotGrid";
import { GithubIcon } from "./Icons";

const toolStrip = ["Python", "PHP", "C#", "HTML", "CSS"];

export default function Projects() {
  return (
    <section id="projets" className="px-6 md:px-10 py-16 md:py-20 border-t border-[var(--color-border)]">
      <p className="font-mono text-xs text-[var(--color-muted)] mb-1"># projets.json</p>
      <h2 className="font-sans text-2xl md:text-3xl font-bold mb-2">Projets</h2>
      <p className="text-[var(--color-muted)] mb-6 max-w-xl">
        Un aperçu des applications que j'ai développées, seul ou dans le cadre
        de mes études — chacune avec sa propre pile technique.
      </p>

      <div className="flex flex-wrap items-center gap-2.5 mb-10">
        {toolStrip.map((t) => (
          <TechBadge key={t} name={t} />
        ))}
        <a
          href={contact.githubUrl}
          target="_blank"
          rel="noreferrer"
          data-cursor-hover
          title="Voir le code sur GitHub"
          className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 shadow-md shadow-black/30 text-white transition-transform hover:scale-110 hover:-translate-y-0.5"
          style={{ background: "linear-gradient(145deg, #2A2E36, #15171B)" }}
        >
          <GithubIcon size={18} />
        </a>
        <span className="h-8 w-px bg-[var(--color-border)] mx-1" />
        <a
          href={`mailto:${contact.email}`}
          data-cursor-hover
          className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-[var(--color-panel)] border border-[var(--color-border)] text-[var(--color-amber)] hover:border-[var(--color-amber)] transition-colors"
          title="E-mail"
        >
          <Mail size={14} />
        </a>
        <a
          href={`https://wa.me/${contact.whatsapp.replace(/[^\d]/g, "")}`}
          target="_blank"
          rel="noreferrer"
          data-cursor-hover
          className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-[var(--color-panel)] border border-[var(--color-border)] text-[#25D366] hover:border-[#25D366] transition-colors"
          title="WhatsApp"
        >
          <MessageCircle size={14} />
        </a>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((p) => (
          <article
            key={p.name}
            data-cursor-hover
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] p-5 flex flex-col transition-colors hover:border-[var(--color-teal)]/50"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-sans font-semibold text-lg text-[var(--color-text)]">{p.name}</h3>
              <span className="font-mono text-[11px] text-[var(--color-muted)] shrink-0 mt-1">{p.year}</span>
            </div>
            <p className="text-xs text-[var(--color-amber)] font-mono mb-3">{p.category}</p>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">{p.description}</p>
            <div className="mt-auto flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] rounded border border-[var(--color-border)] px-2 py-0.5 text-[var(--color-teal)]"
                >
                  {t}
                </span>
              ))}
            </div>
            <ScreenshotGrid slug={p.slug} />
          </article>
        ))}
      </div>
    </section>
  );
}
