import { motion } from "framer-motion";
import { Gem } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const awards = [
  { title: "Eagle Advocate Award", year: "2026", body: "Recognition for exceptional leadership and service to the UWL community." },
  { title: "International Student Academic Excellence & Internationalization Award", year: "2026", body: "University recognition for academic excellence and global contributions." },
  { title: "WiSys Big Idea Tournament — 2nd Place", year: "2026", body: "Statewide recognition for AIOrch, an orchestration tool for hospital AI." },
  { title: "Graduate Project Competition — 1st Place", year: "2025", body: "First place for the AI-Powered Animal-Vehicle Collision Prevention System." },
  { title: "UNI Research Conference Case Study — 1st Place", year: "2026", body: "First place at the UNI Research Conference case-study presentation." },
  { title: "WiSys Innovation On-Ramp — 1st Place", year: "2025", body: "First place for ARISTOTLE, the ethical readiness assessment tool for healthcare AI." },
  { title: "I-Engage Scholarship", year: "2025, 2026", body: "Awarded for engagement, leadership, and academic promise." },
  { title: "Merit-Based Tuition Grant", year: "2024, 2025", body: "Awarded for sustained academic excellence." },
  { title: "Chancellor's Volunteer Service Award", year: "2025", body: "Recognition for outstanding community service and volunteer leadership." },
  { title: "Featured Student Recognition", year: "—", body: "Profiled by the university for academic and research impact." },
  { title: "Certificate of Merit", year: "—", body: "Issued in recognition of academic and research achievement." },
  { title: "Certificate of Proficiency", year: "—", body: "Issued in recognition of demonstrated technical proficiency." },
];

export function Awards() {
  return (
    <section id="awards" className="relative px-6 py-32 lg:pl-72">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_3fr]">
          <div>
            <SectionLabel numeral="VIII" label="Awards & Recognition" />
            <h2 className="font-display text-5xl leading-tight md:text-6xl">
              A forest of
              <br />
              <span className="italic text-[var(--gold)]">glowing crystals.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground">
              University, statewide innovation, and academic recognitions across
              research, leadership, and service.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {awards.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass group relative overflow-hidden rounded-xl p-5 transition hover:-translate-y-1"
              >
                <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--gold)]/10 blur-2xl transition group-hover:bg-[var(--gold)]/25" />
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                <Gem className="h-5 w-5 text-[var(--gold)]" />
                <div className="mt-3 font-display text-base leading-snug text-foreground">
                  {a.title}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-[var(--gold)]/80">
                  {a.year}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {a.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
