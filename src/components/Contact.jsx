import { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { contact } from "../data/content";
import { GithubIcon } from "./Icons";

const rows = [
  {
    icon: Mail,
    cmd: "contact --email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: MessageCircle,
    cmd: "contact --whatsapp",
    value: contact.whatsapp,
    href: `https://wa.me/${contact.whatsapp.replace(/[^\d]/g, "")}`,
  },
  {
    icon: GithubIcon,
    cmd: "contact --github",
    value: contact.github,
    href: contact.githubUrl,
  },
];

function MessageForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    try {
      const res = await fetch(contact.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] p-5">
      <p className="font-mono text-xs text-[var(--color-muted)] mb-1">// envoyer un message</p>
      <h3 className="font-sans font-semibold text-lg text-[var(--color-text)] mb-4">
        Une suggestion, une offre de stage ?
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="name" className="block text-xs text-[var(--color-muted)] mb-1">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Votre nom"
            className="w-full rounded-md bg-black/30 border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)]/60 outline-none focus:border-[var(--color-teal)] transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs text-[var(--color-muted)] mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="vous@exemple.com"
            className="w-full rounded-md bg-black/30 border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)]/60 outline-none focus:border-[var(--color-teal)] transition-colors"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-xs text-[var(--color-muted)] mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Votre message..."
            className="w-full rounded-md bg-black/30 border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)]/60 outline-none focus:border-[var(--color-teal)] transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          data-cursor-hover
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-md bg-[var(--color-teal)] text-[#06211D] font-semibold px-5 py-2.5 text-sm hover:brightness-110 transition disabled:opacity-60"
        >
          <Send size={14} />
          {status === "sending" ? "Envoi..." : "Envoyer le message"}
        </button>

        {status === "success" && (
          <p className="text-xs text-[var(--color-teal)]">Message envoyé, merci !</p>
        )}
        {status === "error" && (
          <p className="text-xs text-[#F5A94E]">
            Échec de l'envoi — vérifie que formEndpoint est bien configuré dans content.js.
          </p>
        )}
      </form>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-16 md:py-24 border-t border-[var(--color-border)]">
      <p className="font-mono text-xs text-[var(--color-muted)] mb-1"># contact.sh</p>
      <h2 className="font-sans text-2xl md:text-3xl font-bold mb-2">Parlons de votre projet</h2>
      <p className="text-[var(--color-muted)] mb-10 max-w-xl">
        Une opportunité de stage, une question, une idée à discuter ?
        Écrivez-moi, je réponds rapidement.
      </p>

      <div className="grid md:grid-cols-5 gap-8 md:gap-12 max-w-5xl">
        <div className="md:col-span-2 rounded-lg border border-[var(--color-border)] bg-black/40 overflow-hidden self-start">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[var(--color-border)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
            <span className="ml-2 font-mono text-[11px] text-[var(--color-muted)]">terminal</span>
          </div>
          <div className="p-5 font-mono text-sm space-y-3">
            {rows.map((r) => (
              <a
                key={r.cmd}
                href={r.href}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="flex items-center gap-3 group"
              >
                <span className="text-[var(--color-teal)]">$</span>
                <span className="text-[var(--color-muted)] group-hover:text-[var(--color-text)] transition-colors">
                  {r.cmd}
                </span>
                <span className="text-[var(--color-text)] ml-auto flex items-center gap-2">
                  {r.value}
                  <r.icon size={14} className="text-[var(--color-amber)]" />
                </span>
              </a>
            ))}
            <p className="text-[var(--color-muted)] pt-2 blink-cursor">$</p>
          </div>
        </div>

        <div className="md:col-span-3">
          <MessageForm />
        </div>
      </div>
    </section>
  );
}
