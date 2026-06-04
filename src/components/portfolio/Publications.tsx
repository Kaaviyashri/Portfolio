import { motion } from "framer-motion";
import { useState } from "react";
import { BookOpen, ExternalLink } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { DetailModal, MetaRow, Section, TagList } from "./DetailModal";

type Pub = {
  id: string;
  title: string;
  status: string;
  venue: string;
  role: string;
  year: string;
  summary: string;
  findings?: string[];
  areas?: string[];
  doi?: string;
};

const pubs: Pub[] = [
  {
    id: "p1",
    title:
      "AI-Powered Animal-Vehicle Collision Prevention Systems: A Comprehensive Review",
    status: "Published",
    venue: "Electronics (MDPI)",
    role: "First Author",
    year: "2026",
    doi: "https://doi.org/10.3390/electronics15081767",
    summary:
      "Comprehensive review of AI-based wildlife collision prevention systems. Evaluates computer vision approaches, sensing technologies (RGB cameras, thermal imaging, LiDAR, radar), and real-time wildlife detection pipelines for transportation safety.",
    areas: ["Computer Vision", "Wildlife", "Transportation Safety", "Review"],
  },
  {
    id: "p2",
    title:
      "Quantifying Cross-Illumination Domain Shift in YOLO-Based Camera-Trap Wildlife Detection",
    status: "Accepted",
    venue: "IEEE International Conference on Electro/Information Technology (IEEE EIT 2026)",
    role: "First Author",
    year: "2026",
    summary:
      "Investigates how wildlife detection models perform when trained and deployed under different lighting conditions. Evaluates YOLOv5 and YOLOv8 across daytime RGB and nighttime IR imagery and quantifies robustness degradation caused by domain shift.",
    findings: [
      "≈ 0.35 mAP degradation under cross-illumination deployment",
      "Mixed-domain training meaningfully reduces the drop",
      "Grayscale ablations isolate spectral effects from luminance effects",
    ],
    areas: ["Computer Vision", "Domain Shift", "YOLO", "Wildlife"],
  },
  {
    id: "p3",
    title:
      "Lightweight Spatiotemporal Machine Learning Framework for Multi-Class Wildlife Roadkill Classification",
    status: "Accepted",
    venue: "IEEE International Conference on Electro/Information Technology (IEEE EIT 2026)",
    role: "First Author",
    year: "2026",
    summary:
      "Developed machine learning models for wildlife road mortality classification using spatial and temporal predictors derived from over 5,000 georeferenced wildlife records.",
    findings: [
      "Accuracy 89.9%",
      "Macro F1 0.852",
      "Random Forest and Gradient Boosting comparative evaluation",
    ],
    areas: ["Spatiotemporal ML", "Wildlife", "Classification"],
  },
  {
    id: "p4",
    title:
      "Operationalizing WHO Ethical Principles for Healthcare AI: A Lifecycle-Aligned Governance-by-Design Framework",
    status: "Accepted (Abstract) · Under Review (Manuscript)",
    venue: "Mayo Clinic AI Research Summit 2026 · AI in Medicine (manuscript)",
    role: "First Author",
    year: "2026",
    summary:
      "Transforms WHO ethical AI principles into actionable governance mechanisms spanning AI design, validation, deployment, monitoring, and retirement.",
    areas: ["Responsible AI", "AI Governance", "Healthcare AI", "Clinical Decision Support"],
  },
  {
    id: "p5",
    title:
      "A Spatiotemporal Machine Learning Framework for Deer-Vehicle Collision Prediction and Budget-Constrained Intervention Planning",
    status: "Submitted",
    venue: "IEEE Global Humanitarian Technology Conference (GHTC 2026)",
    role: "First Author",
    year: "2026",
    summary:
      "Predictive framework integrating deer-vehicle collision forecasting with cost-aware intervention planning using Wisconsin crash data.",
    findings: [
      "XGBoost MAE 0.706, R² 0.583",
      "Captured 10,497 crashes vs. 10,121 using traditional hotspot methods",
      "Budget-constrained optimization layer for DOT planning",
    ],
    areas: ["Forecasting", "Transportation Safety", "Optimization"],
  },
  {
    id: "p6",
    title:
      "Melanoma Detection and Calibration: Discrimination–Calibration Tradeoffs in Deep Learning",
    status: "Ongoing Research",
    venue: "Manuscript in preparation",
    role: "First Author",
    year: "2026",
    summary:
      "Investigates discrimination-calibration tradeoffs in melanoma classification using deep learning, with external validation and ensemble strategies under dataset shift.",
    findings: [
      "ResNet50 on ISIC 2019; AUC 0.9138 → 0.9187",
      "Calibration degraded from ECE 0.0250 → 0.1093 under class weighting",
      "External validation on HAM10000",
      "Ensembles improve robustness under dataset shift",
    ],
    areas: ["Medical AI", "Calibration", "Deep Learning"],
  },
];

const statusColor = (s: string) => {
  if (s.startsWith("Published")) return "from-[var(--moss)] to-[var(--emerald-deep)]";
  if (s.startsWith("Accepted")) return "from-[var(--gold)]/40 to-[var(--copper)]/30";
  if (s.startsWith("Submitted") || s.startsWith("Under"))
    return "from-[var(--azure)]/30 to-[var(--bio)]/20";
  return "from-foreground/10 to-foreground/5";
};

export function Publications() {
  const [active, setActive] = useState<Pub | null>(null);

  return (
    <section id="publications" className="relative px-6 py-32 lg:pl-72">
      <div className="mx-auto max-w-6xl">
        <SectionLabel numeral="V" label="The Forest Library" />
        <h2 className="max-w-2xl font-display text-5xl leading-tight md:text-6xl">
          Books on the
          <span className="italic text-[var(--gold)]"> forest bookshelf.</span>
        </h2>
        <p className="mt-5 max-w-2xl text-sm text-muted-foreground">
          Peer-reviewed publications and submissions across trustworthy AI,
          medical imaging, wildlife conservation, and transportation safety.
        </p>

        <div className="mt-14 space-y-4">
          {pubs.map((p, i) => (
            <motion.button
              key={p.id}
              onClick={() => setActive(p)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass group grid w-full grid-cols-[auto_1fr_auto] items-center gap-6 rounded-xl p-5 text-left transition hover:border-[var(--gold)]/40"
            >
              <div
                className={`grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br ${statusColor(p.status)} ring-1 ring-[var(--gold)]/20`}
              >
                <BookOpen className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <div className="font-display text-lg leading-snug text-foreground">
                  {p.title}
                </div>
                <div className="mt-1 text-xs italic text-muted-foreground">
                  {p.venue} · {p.year} · {p.role}
                </div>
              </div>
              <span className="hidden rounded-full border border-[var(--gold)]/30 bg-background/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--gold)] sm:inline">
                {p.status}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <DetailModal
        open={!!active}
        onClose={() => setActive(null)}
        eyebrow="Publication"
        title={active?.title ?? ""}
      >
        {active && (
          <>
            <div>
              <MetaRow label="Status" value={active.status} />
              <MetaRow label="Venue" value={active.venue} />
              <MetaRow label="Role" value={active.role} />
              <MetaRow label="Year" value={active.year} />
              {active.doi && (
                <MetaRow
                  label="DOI"
                  value={
                    <a
                      href={active.doi}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1 text-[var(--gold)] hover:underline"
                    >
                      {active.doi.replace("https://doi.org/", "")}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  }
                />
              )}
            </div>
            <Section title="Summary">{active.summary}</Section>
            {active.findings && (
              <Section title="Key Findings">
                <ul className="space-y-1.5">
                  {active.findings.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1 w-1 rounded-full bg-[var(--gold)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Section>
            )}
            {active.areas && (
              <Section title="Research Areas">
                <TagList tags={active.areas} />
              </Section>
            )}
          </>
        )}
      </DetailModal>
    </section>
  );
}
