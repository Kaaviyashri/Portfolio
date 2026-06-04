import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { GraduationCap, Building2, FlaskConical, Briefcase, Mountain } from "lucide-react";

const milestones = [
  { range: "2015 – 2018", title: "B.Sc. Computer Science", body: "Discovered programming, algorithms, and the joy of solving problems.", icon: GraduationCap },
  { range: "2018 – 2020", title: "M.Sc. Computer Science", body: "Explored machine learning, data science, and intelligent systems.", icon: GraduationCap },
  { range: "2020 – 2024", title: "Deputy Manager · ICICI Bank", body: "Worked on large-scale systems, analytics pipelines, and decision-support technologies.", icon: Building2 },
  { range: "2024 – Present", title: "M.S. Software Engineering · UWL", body: "Focused on trustworthy AI, computer vision, healthcare, and impactful research.", icon: Briefcase },
  { range: "Now", title: "AI Research", body: "Trustworthy ML, wildlife conservation analytics, healthcare AI governance.", icon: FlaskConical },
  { range: "Next", title: "Future PhD", body: "Doctoral research advancing reliable, human-centered AI systems.", icon: Mountain },
];

export function Journey() {
  return (
    <section id="journey" className="relative px-6 py-32 lg:pl-72">
      <div className="mx-auto max-w-6xl">
        <SectionLabel numeral="II" label="The Forest Trail" />
        <h2 className="max-w-2xl font-display text-5xl leading-tight md:text-6xl">
          A journey shaped by
          <span className="italic text-[var(--gold)]"> learning and curiosity.</span>
        </h2>

        <div className="relative mt-20">
          {/* Glowing path */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent md:block" />

          <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-6">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="relative"
                >
                  <div className="relative mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full border border-[var(--gold)]/40 bg-background shadow-[0_0_30px_-5px_oklch(0.82_0.14_85/0.5)]">
                    <Icon className="h-6 w-6 text-[var(--gold)]" />
                    <span className="absolute inset-0 -z-10 animate-pulse rounded-full bg-[var(--gold)]/10" />
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/80">{m.range}</div>
                    <div className="mt-2 font-display text-lg text-foreground">{m.title}</div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{m.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
