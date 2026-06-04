import { motion } from "framer-motion";
import { Briefcase, FlaskConical } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const roles = [
  {
    icon: FlaskConical,
    title: "Graduate Researcher",
    org: "University of Wisconsin–La Crosse",
    range: "2024 – Present",
    body: "Conducting research on trustworthy AI, healthcare AI, wildlife analytics, computer vision, and applied machine learning. Author and first-author on peer-reviewed publications submitted to IEEE EIT, IEEE GHTC, Electronics, and AI in Medicine.",
    bullets: [
      "Trustworthy and calibrated medical AI",
      "Wildlife detection under cross-illumination domain shift",
      "Spatiotemporal modeling for wildlife-vehicle collisions",
      "Governance-by-design frameworks for clinical AI",
    ],
  },
  {
    icon: Briefcase,
    title: "Deputy Manager",
    org: "ICICI Bank",
    range: "2021 – 2024",
    body: "Worked in retail banking technology and analytics, supporting decision systems, reporting, and process automation across customer-facing operations. This experience grounded my interest in trustworthy decision-support systems and applied AI.",
    bullets: [
      "Data analysis and reporting for retail banking",
      "Banking operations technology",
      "Decision support and process automation",
      "Customer-centric technology solutions",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32 lg:pl-72">
      <div className="mx-auto max-w-5xl">
        <SectionLabel numeral="III" label="Professional Experience" />
        <h2 className="max-w-2xl font-display text-5xl leading-tight md:text-6xl">
          From production systems
          <span className="italic text-[var(--gold)]"> to research.</span>
        </h2>

        <div className="relative mt-16 border-l border-[var(--gold)]/25 pl-8">
          {roles.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                <span className="absolute -left-[42px] grid h-9 w-9 place-items-center rounded-full border border-[var(--gold)]/40 bg-background shadow-[0_0_25px_-5px_oklch(0.82_0.14_85/0.5)]">
                  <Icon className="h-4 w-4 text-[var(--gold)]" />
                </span>
                <div className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl text-foreground">
                      {r.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/80">
                      {r.range}
                    </span>
                  </div>
                  <div className="mt-1 text-sm italic text-[var(--gold)]">
                    {r.org}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                    {r.body}
                  </p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {r.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-2 text-xs text-muted-foreground"
                      >
                        <span className="mt-1 inline-block h-1 w-1 rounded-full bg-[var(--gold)]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
