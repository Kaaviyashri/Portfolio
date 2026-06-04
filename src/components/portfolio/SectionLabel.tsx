export function SectionLabel({ numeral, label }: { numeral: string; label: string }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)]/80">
      <span>{numeral}</span>
      <span className="h-px w-6 bg-[var(--gold)]/40" />
      <span>{label}</span>
    </div>
  );
}
