import { motion } from "framer-motion";
import { useState } from "react";
import { Leaf } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { DetailModal, MetaRow, Section, TagList } from "./DetailModal";

type Paper = {
  id: string;
  title: string;
  status: string;
  area: string;
  description: string;
  keywords: string[];
  authors?: string;
  venue?: string;
  problem?: string;
  methodology?: string;
  datasets?: string;
  results?: string;
};

const papers: Paper[] = [
  {
    id: "r1",
    title:
      "Do Medical LLMs Know When They Do Not Know? Evaluating Uncertainty Disclosure and Overconfidence in Melanoma Risk Assessment",
    status: "In Preparation (2026)",
    area: "Medical AI · Trustworthy AI · LLMs",
    description:
      "Evaluates whether state-of-the-art medical large language models appropriately communicate uncertainty when assessing melanoma risk from clinical descriptions, with attention to overconfidence, calibration behavior, and implications for AI-assisted clinical decision making.",
    keywords: ["Medical AI", "LLMs", "Calibration", "Trustworthy AI", "Healthcare"],
    authors: "Kaaviyashri Saraboji",
    venue: "Manuscript in preparation",
    problem:
      "Medical LLMs are increasingly used for risk reasoning, yet they often present confident answers without disclosing epistemic uncertainty — a critical failure mode in clinical contexts.",
    methodology:
      "Structured prompting across multiple medical LLMs over melanoma case vignettes, scoring uncertainty disclosure, calibration, and behavior under ambiguous evidence.",
    datasets:
      "Curated melanoma clinical case descriptions derived from public dermatology resources.",
    results:
      "Ongoing analysis of overconfidence rates, calibration error, and uncertainty-disclosure patterns across model families.",
  },
  {
    id: "r2",
    title:
      "Wildlife Detection under Cross-Illumination Domain Shift: Evaluating Robustness Across Daylight, Dusk, and Infrared Conditions",
    status: "In Preparation",
    area: "Computer Vision · Wildlife Conservation",
    description:
      "Investigates how wildlife detection models trained under one illumination condition perform when deployed under different lighting environments, exploring domain shift, robustness degradation, and adaptation strategies for ecological monitoring.",
    keywords: ["Computer Vision", "YOLO", "Domain Adaptation", "Wildlife", "Robustness"],
    authors: "Kaaviyashri Saraboji",
    venue: "Manuscript in preparation",
    problem:
      "Wildlife monitoring cameras operate across daylight, dusk, and infrared regimes, but most detectors are trained on a single domain — leading to silent failures when deployed.",
    methodology:
      "YOLOv5 and YOLOv8 training across RGB and IR domains, mixed-domain training, and grayscale ablations to isolate spectral contributions.",
    datasets: "Camera-trap imagery across diurnal and nocturnal conditions.",
    results:
      "Quantified approximately 0.35 mAP degradation under cross-illumination deployment; mixed-domain training mitigates the drop.",
  },
  {
    id: "r3",
    title:
      "A Spatiotemporal Framework for Predicting Deer–Vehicle Collision Hotspots and Supporting Cost-Aware Transportation Interventions",
    status: "In Preparation",
    area: "Machine Learning · Transportation Safety",
    description:
      "Develops a predictive framework for forecasting deer-vehicle collision hotspots using spatial and temporal risk factors, integrating ML forecasting with cost-aware intervention planning for transportation agencies.",
    keywords: ["Forecasting", "GIS", "Transportation", "Public Safety", "Machine Learning"],
    authors: "Kaaviyashri Saraboji",
    venue: "Manuscript in preparation",
    problem:
      "DOTs need budget-aware decisions on where to deploy fencing, signage, and crossings to reduce wildlife-vehicle collisions.",
    methodology:
      "Spatiotemporal feature engineering, XGBoost forecasting, and a budget-constrained optimization layer over predicted hotspots.",
    datasets: "Multi-year Wisconsin deer–vehicle crash records with road and landscape covariates.",
    results: "XGBoost achieved MAE 0.706, R² 0.583; captured 10,497 crashes vs. 10,121 with traditional hotspots.",
  },
  {
    id: "r4",
    title:
      "Operationalizing Ethical Principles in Healthcare AI: A Practical Governance Framework for Responsible Deployment",
    status: "Research Project",
    area: "AI Governance · Responsible AI",
    description:
      "Transforms high-level ethical AI principles into actionable governance processes for healthcare organizations deploying AI systems across the model lifecycle.",
    keywords: ["AI Governance", "Healthcare", "Ethics", "Responsible AI"],
    authors: "Kaaviyashri Saraboji",
    venue: "Mayo Clinic AI Research Summit 2026 (abstract accepted); AI in Medicine (under review)",
    problem:
      "WHO and similar bodies publish ethical principles, but health systems lack concrete, lifecycle-aligned governance procedures to implement them.",
    methodology:
      "Maps WHO ethical principles to design, validation, deployment, monitoring, and retirement controls, with role-based ownership and audit checkpoints.",
    datasets: "Cross-case analysis of clinical AI deployment scenarios.",
    results:
      "A governance-by-design framework providing actionable controls and accountability across the AI lifecycle.",
  },
  {
    id: "r5",
    title:
      "Calibration and Uncertainty Quantification in Deep Learning-Based Melanoma Classification",
    status: "Research Project",
    area: "Medical Imaging · Deep Learning",
    description:
      "Studies calibration, confidence estimation, and uncertainty communication in melanoma image classification systems for clinical decision support.",
    keywords: ["Calibration", "Medical Imaging", "Computer Vision", "Trustworthy AI"],
    authors: "Kaaviyashri Saraboji",
    venue: "Manuscript in preparation",
    problem:
      "Discrimination-focused training improves AUC but can severely degrade calibration — a dangerous tradeoff for clinical screening.",
    methodology:
      "ResNet50 trained on ISIC 2019 with and without class weighting; ECE, reliability diagrams, and external validation on HAM10000; ensemble methods evaluated under dataset shift.",
    datasets: "ISIC 2019 (training), HAM10000 (external validation).",
    results:
      "AUC 0.9138 → 0.9187 while ECE worsened 0.0250 → 0.1093 under class weighting; ensembles improved robustness across datasets.",
  },
];

export function Research() {
  const [active, setActive] = useState<Paper | null>(null);

  return (
    <section id="research" className="relative px-6 py-32 lg:pl-72">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_3fr]">
          <div className="relative">
            <SectionLabel numeral="IV" label="Research" />
            <h2 className="font-display text-5xl leading-tight md:text-6xl">
              Leaves of the
              <span className="italic text-[var(--gold)]"> AI knowledge tree.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground">
              Each paper is a glowing leaf on the canopy — trustworthy AI for
              healthcare, wildlife, and public safety. Click any leaf to read
              the full research detail.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {papers.map((p, i) => (
              <motion.button
                key={p.id}
                onClick={() => setActive(p)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="glass group relative flex flex-col overflow-hidden rounded-2xl p-5 text-left transition hover:-translate-y-1 hover:border-[var(--gold)]/40"
              >
                <span className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--gold)]/10 blur-2xl transition group-hover:bg-[var(--gold)]/20" />
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/80">
                  <Leaf className="h-3 w-3" /> {p.area}
                </div>
                <h3 className="mt-3 font-display text-lg leading-snug text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full border border-[var(--gold)]/30 bg-background/40 px-2 py-0.5 text-[10px] text-[var(--gold)]">
                    {p.status}
                  </span>
                  <span className="text-[10px] text-foreground/70 underline-offset-4 group-hover:underline">
                    Read more →
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <DetailModal
        open={!!active}
        onClose={() => setActive(null)}
        eyebrow={active?.area}
        title={active?.title ?? ""}
      >
        {active && (
          <>
            <div>
              <MetaRow label="Status" value={active.status} />
              <MetaRow label="Authors" value={active.authors ?? "Kaaviyashri Saraboji"} />
              {active.venue && <MetaRow label="Venue" value={active.venue} />}
            </div>
            <Section title="Abstract">{active.description}</Section>
            {active.problem && (
              <Section title="Research Problem">{active.problem}</Section>
            )}
            {active.methodology && (
              <Section title="Methodology">{active.methodology}</Section>
            )}
            {active.datasets && <Section title="Datasets">{active.datasets}</Section>}
            {active.results && <Section title="Results">{active.results}</Section>}
            <Section title="Keywords">
              <TagList tags={active.keywords} />
            </Section>
          </>
        )}
      </DetailModal>
    </section>
  );
}
