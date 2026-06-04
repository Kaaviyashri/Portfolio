import { motion } from "framer-motion";
import { useState } from "react";
import { Mic } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { DetailModal, MetaRow, Section } from "./DetailModal";

type Talk = {
  id: string;
  title: string;
  venue: string;
  year: string;
  type: string;
  summary: string;
};

const talks: Talk[] = [
  {
    id: "t1",
    title:
      "Quantifying Cross-Illumination Domain Shift in YOLO-Based Camera-Trap Wildlife Detection",
    venue: "IEEE EIT 2026",
    year: "2026",
    type: "Accepted Conference Paper",
    summary:
      "Empirical study of cross-domain robustness for YOLO detectors operating across daytime RGB and nighttime IR camera-trap imagery.",
  },
  {
    id: "t2",
    title:
      "Lightweight Spatiotemporal Machine Learning Framework for Multi-Class Wildlife Roadkill Classification",
    venue: "IEEE EIT 2026",
    year: "2026",
    type: "Accepted Conference Paper",
    summary:
      "Multi-class wildlife roadkill classification using spatial and temporal predictors derived from over 5,000 georeferenced records.",
  },
  {
    id: "t3",
    title:
      "Operationalizing WHO Ethical Principles for Healthcare AI: A Lifecycle-Aligned Governance-by-Design Framework",
    venue: "Mayo Clinic AI Research Summit 2026",
    year: "2026",
    type: "Research Poster",
    summary:
      "Lifecycle-aligned governance framework translating WHO ethical AI principles into actionable controls for clinical AI deployment.",
  },
  {
    id: "t4",
    title:
      "AI-Assisted Housing Application and Volunteer Management Portal",
    venue: "Graduate Research Symposium 2026",
    year: "2026",
    type: "Research Poster",
    summary:
      "Capstone software-engineering research project building an AI-assisted housing application and volunteer management portal for Habitat for Humanity.",
  },
  {
    id: "t5",
    title: "AIOrch — An Orchestration Tool for Hospital AI",
    venue: "WiSys Big Idea Tournament 2026",
    year: "2026",
    type: "Innovation Competition Presentation",
    summary:
      "Orchestration platform for managing the AI lifecycle inside hospital environments, presented at the WiSys statewide innovation competition.",
  },
  {
    id: "t6",
    title:
      "Operationalizing WHO's Ethical Principles for Healthcare AI: A Governance-by-Design Lifecycle Framework",
    venue: "IEEE Innovators Summit 2025",
    year: "2025",
    type: "Research Presentation",
    summary:
      "Presentation of the governance-by-design framework for responsible AI deployment in clinical environments.",
  },
  {
    id: "t7",
    title:
      "ARISTOTLE — Ethical Readiness Assessment Tool for Healthcare AI Systems",
    venue: "WiSys Innovation On-Ramp 2025",
    year: "2025",
    type: "Innovation Pitch",
    summary:
      "Ethical readiness assessment tool helping healthcare organizations evaluate AI systems against responsible-AI criteria before deployment.",
  },
  {
    id: "t8",
    title: "AI-Powered Animal-Vehicle Collision Prevention System",
    venue: "3-Minute Graduate Project Competition 2025",
    year: "2025",
    type: "Competition Presentation",
    summary:
      "Three-minute research presentation of an AI-powered wildlife-vehicle collision prevention system.",
  },
  {
    id: "t9",
    title:
      "A Spatiotemporal Machine Learning Framework for Deer-Vehicle Collision Prediction and Budget-Constrained Intervention Planning",
    venue: "WiSys Quick Pitch Competition 2026",
    year: "2026",
    type: "Research Pitch",
    summary:
      "Rapid research pitch on predictive modeling for deer-vehicle collisions combined with budget-aware DOT intervention planning.",
  },
  {
    id: "t10",
    title:
      "Bridging Preparedness and Response in the Bahay Toro Community: An Integrated Risk Assessment of Disaster Management",
    venue: "IEEE Global Humanitarian Technology Conference (GHTC) 2026",
    year: "2026",
    type: "Conference Presentation",
    summary:
      "Integrated risk-assessment study connecting disaster preparedness and response in the Bahay Toro community.",
  },
];

export function Presentations() {
  const [active, setActive] = useState<Talk | null>(null);

  return (
    <section id="presentations" className="relative overflow-hidden px-6 py-32 lg:pl-72">
      <div className="mx-auto max-w-6xl">
        <SectionLabel numeral="VI" label="Conference Presentations & Research Talks" />
        <h2 className="max-w-2xl font-display text-5xl leading-tight md:text-6xl">
          Lanterns along
          <span className="italic text-[var(--gold)]"> the branches.</span>
        </h2>
        <p className="mt-5 max-w-2xl text-sm text-muted-foreground">
          Talks, posters, and competition pitches across IEEE conferences,
          Mayo Clinic, and WiSys statewide innovation programs.
        </p>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {talks.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setActive(t)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="glass group relative flex flex-col rounded-2xl p-5 text-left transition hover:-translate-y-1 hover:border-[var(--gold)]/40"
            >
              {/* Lantern hanger */}
              <div className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 -translate-y-full bg-[var(--gold)]/40" />
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[18px] h-2 w-2 rounded-full bg-[var(--gold)] shadow-[0_0_12px_var(--gold)]" />

              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/80">
                <Mic className="h-3 w-3" /> {t.type}
              </div>
              <h3 className="mt-3 font-display text-base leading-snug text-foreground">
                {t.title}
              </h3>
              <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground">
                {t.venue} · {t.year}
              </p>
              <span className="mt-4 text-[10px] text-foreground/70 group-hover:underline">
                Open details →
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <DetailModal
        open={!!active}
        onClose={() => setActive(null)}
        eyebrow={active?.type}
        title={active?.title ?? ""}
      >
        {active && (
          <>
            <div>
              <MetaRow label="Venue" value={active.venue} />
              <MetaRow label="Year" value={active.year} />
              <MetaRow label="Type" value={active.type} />
            </div>
            <Section title="Summary">{active.summary}</Section>
          </>
        )}
      </DetailModal>
    </section>
  );
}
