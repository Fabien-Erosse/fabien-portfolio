import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import BinaryBackground from "./BinaryBackground";

const GREETING = "Bonjour, je suis Fabien";
const TAG = "DISPONIBLE POUR UN STAGE";
const LINE1 = "Développeur";
const LINE2 = "full-stack.";

function useIntroSequence() {
  const [stage, setStage] = useState(0); // 0 greeting, 1 tag, 2 headline, 3 done
  const [greeting, setGreeting] = useState("");
  const [tag, setTag] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");

  useEffect(() => {
    let cancelled = false;
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    const type = async (setter, text, speed) => {
      for (let i = 1; i <= text.length; i++) {
        if (cancelled) return;
        setter(text.slice(0, i));
        await wait(speed);
      }
    };
    (async () => {
      await type(setGreeting, GREETING, 30);
      await wait(200);
      if (cancelled) return;
      setStage(1);
      await type(setTag, TAG, 22);
      await wait(250);
      if (cancelled) return;
      setStage(2);
      await type(setLine1, LINE1, 55);
      await type(setLine2, LINE2, 55);
      await wait(200);
      if (cancelled) return;
      setStage(3);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return { stage, greeting, tag, line1, line2 };
}

function WaveLine({ text, startIndex }) {
  return (
    <>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="wave-letter"
          style={{ "--wave-delay": `${(startIndex + i) * 55}ms` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </>
  );
}

const chips = [
  { label: "Python & Flask", className: "-top-2 -right-2 md:-right-8" },
  { label: "Java Spring Boot", className: "top-1/3 -left-6 md:-left-14" },
  { label: "PHP & MySQL", className: "bottom-16 -left-4 md:-left-12" },
  { label: "C# / WinForms", className: "-bottom-2 -right-2 md:-right-10" },
];

const footerLinks = [
  "DÉVELOPPEMENT WEB",
  "APPLICATIONS DE BUREAU",
  "BASES DE DONNÉES",
  "DÉPLOIEMENT",
];

export default function Hero() {
  const { stage, greeting, tag, line1, line2 } = useIntroSequence();
  const done = stage === 3;

  return (
    <section id="accueil" className="relative bg-[var(--color-bg)] overflow-hidden">
      <BinaryBackground />

      <div className="relative px-6 md:px-10 pt-14 md:pt-20 pb-24 md:pb-28 grid md:grid-cols-5 gap-16 items-center max-w-6xl mx-auto">
        <div className="md:col-span-3">
          <p className="font-mono text-sm text-[var(--color-muted)] mb-4 min-h-[1.4em]">
            {greeting}
            {stage === 0 && (
              <span className="inline-block w-[7px] h-[1em] bg-[var(--color-teal)] ml-1 align-middle animate-pulse" />
            )}
          </p>

          <div className="inline-flex items-center gap-2 mb-5 min-h-[1.2em]">
            {stage >= 1 && <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-teal)]" />}
            <span className="font-mono text-[11px] tracking-[0.15em] text-[var(--color-muted)] uppercase">
              {tag}
              {stage === 1 && (
                <span className="inline-block w-[6px] h-[0.9em] bg-[var(--color-teal)] ml-1 align-middle animate-pulse" />
              )}
            </span>
          </div>

          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-[var(--color-text)] min-h-[2.2em]">
            {done ? (
              <>
                <WaveLine text={LINE1} startIndex={0} />
                <br />
                <WaveLine text={LINE2} startIndex={LINE1.length} />
              </>
            ) : (
              <>
                {line1}
                {stage === 2 && line2 === "" && (
                  <span className="inline-block w-[10px] h-[0.85em] bg-[var(--color-teal)] ml-1 align-middle animate-pulse" />
                )}
                <br />
                {line2}
                {stage === 2 && line1.length === LINE1.length && line2.length < LINE2.length && (
                  <span className="inline-block w-[10px] h-[0.85em] bg-[var(--color-teal)] ml-1 align-middle animate-pulse" />
                )}
              </>
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: done ? 1 : 0, y: done ? 0 : 10 }}
            transition={{ duration: 0.5 }}
            className="mt-5 max-w-md text-[var(--color-muted)] text-base leading-relaxed"
          >
            Je conçois et je construis des applications web et de bureau, du
            backend à l'interface — Python, Java, PHP, C# et C++, selon ce que
            le projet demande.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: done ? 1 : 0, y: done ? 0 : 10 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projets"
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-teal)] text-[#06211D] font-semibold px-6 py-3 text-sm transition-all hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(45,212,191,0.45)]"
            >
              Explorer mes projets <ArrowRight size={15} />
            </a>
            <a
              href="/CV Fabien.pdf"
              download
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm text-[var(--color-text)] transition-all hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] hover:shadow-[0_0_20px_rgba(45,212,191,0.2)]"
            >
              <Download size={15} /> Télécharger mon CV
            </a>
          </motion.div>
        </div>

        <div className="md:col-span-2 h-full flex flex-col items-center justify-center relative">
          <div className="relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
              <span className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-teal)] opacity-50" />
                <span className="relative inline-flex rounded-full h-5 w-5 border-2 border-[var(--color-teal)] bg-[var(--color-bg)]" />
              </span>
            </div>

            <PhotoCircle />

            {chips.map((c) => (
              <div
                key={c.label}
                className={`hidden sm:block absolute ${c.className} bg-[var(--color-panel)] shadow-lg shadow-black/40 rounded-full px-3.5 py-1.5 text-[11px] font-medium text-[var(--color-text)] border border-[var(--color-border)]`}
              >
                {c.label}
              </div>
            ))}

            <div className="hidden md:block absolute top-1/2 -right-14 -translate-y-1/2 rotate-90 font-mono text-[10px] tracking-[0.3em] text-[var(--color-muted)] uppercase whitespace-nowrap">
              Scroller pour explorer
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-[var(--color-panel-2)] border-t border-[var(--color-border)] px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-x-8 gap-y-3 py-4 font-mono text-[11px] tracking-wide text-[var(--color-teal)]/90">
          {footerLinks.map((l) => (
            <span key={l}>./ {l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhotoCircle() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-[var(--color-teal)]/25 shadow-2xl shadow-black/50 bg-[var(--color-panel)] flex items-center justify-center">
      {!failed ? (
        <img
          src="/fabien.jpeg"
          alt="Photo de Fabien"
          className="w-full h-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 text-[var(--color-muted)] px-4 text-center">
          <span className="font-mono text-5xl text-[var(--color-teal)]/70">{"</>"}</span>
          <p className="font-mono text-[11px]">public/photo.jpg</p>
        </div>
      )}
    </div>
  );
}
