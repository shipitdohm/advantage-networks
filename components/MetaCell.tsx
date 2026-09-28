// Shared "fact cell" used anywhere a small labelled value sits in a uniform
// grid — the Events meta row (Netzwerk/Hauptpartner/Location/Datum) and the
// Channels stat grids both use this, so the two pages read as one system.
export function MetaCell({
  label,
  children,
  className = "",
}: {
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col justify-between gap-5 bg-surface px-5 py-5 md:px-6 ${className}`}>
      <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-muted opacity-60">{label}</span>
      <div className="flex min-h-[44px] items-end">{children}</div>
    </div>
  );
}
