import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, type ReactNode } from "react";

export function DetailModal({
  open,
  onClose,
  eyebrow,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-background/85 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 240, damping: 28 }}
            className="glass relative z-10 max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl p-8"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-[var(--gold)]/30 bg-background/40 text-[var(--gold)] transition hover:bg-[var(--gold)]/10"
            >
              <X className="h-4 w-4" />
            </button>
            {eyebrow && (
              <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/80">
                {eyebrow}
              </div>
            )}
            <h3 className="mt-2 max-w-[90%] font-display text-3xl leading-tight text-foreground md:text-4xl">
              {title}
            </h3>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-foreground/85">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function MetaRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-3 border-b border-[var(--gold)]/10 py-2 text-xs">
      <span className="uppercase tracking-[0.2em] text-[var(--gold)]/80">{label}</span>
      <span className="text-foreground/90">{value}</span>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="mb-2 font-display text-lg text-[var(--gold)]">{title}</h4>
      <div className="text-sm leading-relaxed text-foreground/85">{children}</div>
    </div>
  );
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <span
          key={t}
          className="rounded-md border border-[var(--gold)]/25 bg-background/30 px-2 py-0.5 text-[11px] text-foreground/80"
        >
          {t}
        </span>
      ))}
    </div>
  );
}
