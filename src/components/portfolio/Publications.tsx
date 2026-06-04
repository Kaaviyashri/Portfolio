import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const pubs = [
  { status: "Under Review", title: "Cross-Illumination Domain Shift for Wildlife Detection", venue: "IEEE Transactions on Image Processing", year: "2026" },
  { status: "Accepted", title: "Spatiotemporal Modeling of Deer–Vehicle Collisions", venue: "ACM Transactions on Spatial Algorithms and Systems", year: "2026" },
  { status: "In Preparation", title: "Calibration and Uncertainty in Dermoscopic Melanoma Classification", venue: "Medical Image Analysis", year: "2026" },
  { status: "Published", title: "Governance Frameworks for Clinical AI Adoption", venue: "AMIA Annual Symposium", year: "2025" },
];

const colorFor = (s: string) =>
  ({
    Published: "from-[var(--moss)] to-[var(--emerald-deep)]",
    Accepted: "from-[var(--gold)]/40 to-[var(--copper)]/30",
    "Under Review": "from-[var(--azure)]/30 to-[var(--bio)]/20",
    "In Preparation": "from-foreground/10 to-foreground/5",
  } as Record<string, string>)[s];

export function Publications() {
  return (
    <section id="publications" className="relative px-6 py-32 lg:pl-72">
      <div className="mx-auto max-w-6xl">
        <SectionLabel numeral="V" label="The Forest Library" />
        <h2 className="max-w-2xl font-display text-5xl leading-tight md:text-6xl">
          Knowledge written,
          <span className="italic text-[var(--gold)]"> shared, and growing.</span>
        </h2>

        <div className="mt-16 space-y-4">
          {pubs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass group grid grid-cols-[auto_1fr_auto] items-center gap-6 rounded-xl p-5 transition hover:border-[var(--gold)]/40"
            >
              <div className={`grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br ${colorFor(p.status)} ring-1 ring-[var(--gold)]/20`}>
                <BookOpen className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <div className="font-display text-lg leading-snug text-foreground">{p.title}</div>
                <div className="mt-1 text-xs italic text-muted-foreground">{p.venue} · {p.year}</div>
              </div>
              <span className="rounded-full border border-[var(--gold)]/30 bg-background/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]">
                {p.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
