import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const visions = [
  "Trustworthy AI",
  "Healthcare AI",
  "Human-Centered AI",
  "AI Governance",
  "Robust Computer Vision",
  "Uncertainty Quantification",
  "Doctoral Research (PhD)",
];

export function Vision() {
  return (
    <section id="vision" className="relative overflow-hidden px-6 py-32 lg:pl-72">
      <svg
        className="pointer-events-none absolute bottom-0 left-0 right-0 -z-0 h-64 w-full opacity-40"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="mg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.30 0.06 158)" />
            <stop offset="100%" stopColor="oklch(0.16 0.03 160)" />
          </linearGradient>
        </defs>
        <path
          fill="url(#mg)"
          d="M0,200 L160,90 L320,170 L480,60 L640,150 L800,80 L960,180 L1120,100 L1280,170 L1440,120 L1440,320 L0,320 Z"
        />
      </svg>

      <div className="relative mx-auto max-w-5xl">
        <SectionLabel numeral="XI" label="Research Vision" />
        <h2 className="max-w-3xl font-display text-5xl leading-tight md:text-6xl">
          Above the canopy,
          <span className="italic text-[var(--gold)]"> the next horizon.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          My research vision is to advance AI systems that are accurate,
          calibrated, and accountable — particularly in domains where errors
          carry human consequences. I am preparing to pursue doctoral research
          on trustworthy AI for healthcare and conservation, focused on
          uncertainty-aware models, robust computer vision under domain shift,
          and governance-by-design across the AI lifecycle.
        </p>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {visions.map((v, i) => (
            <motion.div
              key={v}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-lg px-4 py-3 text-sm text-foreground/90"
            >
              {v}
            </motion.div>
          ))}
        </div>

        <motion.figure
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 border-l-2 border-[var(--gold)]/60 pl-6"
        >
          <blockquote className="font-display text-2xl italic leading-snug text-foreground md:text-3xl">
            &ldquo;The next generation of AI will be defined not only by
            intelligence, but by trust, responsibility, and impact.&rdquo;
          </blockquote>
          <figcaption className="mt-4 text-sm text-[var(--gold)]">
            — Kaaviyashri Saraboji
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
