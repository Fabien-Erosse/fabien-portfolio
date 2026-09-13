export default function StatusBar() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-panel-2)]">
      <div className="px-4 py-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-[var(--color-muted)]">
        <span className="text-[var(--color-teal)]">● main</span>
        <span>UTF-8</span>
        <span>Espaces: 2</span>
        <span className="ml-auto">Prêt à collaborer 🚀</span>
        <span>© {new Date().getFullYear()} Fabien</span>
      </div>
    </footer>
  );
}
