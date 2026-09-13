import { skills } from "../data/content";

export default function About() {
  return (
    <section id="apropos" className="px-6 md:px-10 py-16 md:py-20 border-t border-[var(--color-border)]">
      <p className="font-mono text-xs text-[var(--color-muted)] mb-1"># apropos.md</p>
      <h2 className="font-sans text-2xl md:text-3xl font-bold mb-8">À propos</h2>

      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3 space-y-4 text-[var(--color-muted)] leading-relaxed">
          <p>
            Je suis <span className="text-[var(--color-text)] font-medium">Fabien</span>,
            étudiant à Madagascar et développeur passionné par la résolution de
            problèmes concrets. Je travaille sur des projets académiques et
            personnels qui touchent au web, aux applications de bureau et à la
            gestion de données — de la conception de la base de données jusqu'à
            l'interface finale.
          </p>
          <p>
            Je suis à l'aise pour passer d'une pile technique à une autre selon
            le besoin du projet : Python/Flask pour des API rapides, Java
            Spring Boot pour des applications robustes, PHP/MySQL pour des
            systèmes de gestion, C# pour des logiciels de bureau, et
            Qt/C++ pour des outils natifs.
          </p>
          <p className="text-[var(--color-text)]">
            Je recherche actuellement un stage pour mettre ces compétences au
            service d'une équipe et continuer à apprendre.
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="font-mono text-xs text-[var(--color-muted)] mb-3">stack/</p>
          <div className="grid grid-cols-2 gap-2">
            {skills.map((s) => (
              <div
                key={s.file}
                className="rounded-md border border-[var(--color-border)] bg-[var(--color-panel)] px-3 py-2.5"
              >
                <p className="font-mono text-[11px] text-[var(--color-teal)] truncate">{s.file}</p>
                <p className="text-xs text-[var(--color-muted)] mt-0.5">{s.lang}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
