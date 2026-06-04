import { motion } from "framer-motion";
import { useState } from "react";
import { Hexagon } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { DetailModal, MetaRow, Section, TagList } from "./DetailModal";

type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  tech: string[];
  contributions?: string[];
};

const projects: Project[] = [
  {
    id: "pj1",
    title: "Habitat for Humanity Housing & Volunteer Management Portal",
    category: "MSE Capstone · Full-Stack",
    summary:
      "End-to-end portal for housing applications and volunteer coordination with role-based access, application workflows, and admin reporting.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind CSS"],
    contributions: [
      "Designed application and volunteer workflows with role-based access",
      "Built secure authentication with JWT and protected admin views",
      "Implemented reporting dashboards for housing coordinators",
    ],
  },
  {
    id: "pj2",
    title: "AI-Driven Wildlife Collision Prevention System",
    category: "Computer Vision · Wildlife",
    summary:
      "Real-time wildlife detection pipeline using YOLO and OpenCV to inform roadside alerts and inform transportation safety interventions.",
    tech: ["Python", "YOLO", "OpenCV", "TensorFlow"],
    contributions: [
      "Trained YOLO detectors across RGB and IR conditions",
      "Built evaluation pipeline for cross-illumination domain shift",
      "Linked detections to spatiotemporal risk modeling",
    ],
  },
  {
    id: "pj3",
    title: "ARISTOTLE — Ethical Readiness Assessment Platform for Healthcare AI",
    category: "Responsible AI · Healthcare",
    summary:
      "Web platform that assesses healthcare AI systems against ethical readiness criteria across lifecycle stages.",
    tech: ["React", "Node.js", "AI Governance Frameworks"],
    contributions: [
      "Mapped WHO ethical principles to assessment instruments",
      "Designed lifecycle-aligned scoring and reporting",
      "Presented at WiSys Innovation On-Ramp 2025",
    ],
  },
  {
    id: "pj4",
    title: "AIOrch — Responsible AI Lifecycle Orchestration Platform",
    category: "Healthcare AI · MLOps",
    summary:
      "Orchestration platform managing hospital AI lifecycles from intake and validation through monitoring and retirement.",
    tech: ["MERN", "Healthcare AI", "MLOps"],
    contributions: [
      "Designed governance-by-design lifecycle workflows",
      "Built orchestration UI for clinical AI artifacts",
      "Presented at WiSys Big Idea Tournament 2026",
    ],
  },
  {
    id: "pj5",
    title: "Front Dash — Multi-Portal Food Delivery Management System",
    category: "Full-Stack",
    summary:
      "Multi-portal food delivery management system with customer, restaurant, and delivery roles built on a Node and MySQL stack.",
    tech: ["Node.js", "Express", "MySQL"],
  },
  {
    id: "pj6",
    title: "Deer-Vehicle Collision Prediction & Budget-Constrained Intervention Planning",
    category: "ML · Transportation Safety",
    summary:
      "Forecasting and optimization framework for predicting deer-vehicle collision hotspots and selecting interventions under budget constraints.",
    tech: ["Python", "XGBoost", "GIS", "Optimization"],
    contributions: [
      "Engineered spatiotemporal features over Wisconsin crash data",
      "Achieved MAE 0.706 and R² 0.583 with XGBoost",
      "Captured 10,497 crashes vs. 10,121 with traditional hotspot methods",
    ],
  },
  {
    id: "pj7",
    title: "Melanoma Detection and Calibration Study",
    category: "Medical AI",
    summary:
      "Empirical study of discrimination-calibration tradeoffs and external validation in dermoscopic melanoma classification.",
    tech: ["PyTorch", "ResNet50", "ISIC 2019", "HAM10000"],
    contributions: [
      "Trained ResNet50 baselines and class-weighted variants",
      "Quantified calibration drift via ECE and reliability diagrams",
      "Validated externally on HAM10000 and evaluated ensembles",
    ],
  },
  {
    id: "pj8",
    title: "Route Planning using BFS, DFS, and Dijkstra Algorithms",
    category: "AI · Algorithms",
    summary:
      "Comparative implementation and analysis of graph search algorithms for shortest-path route planning.",
    tech: ["Python", "Graph Search", "Algorithms"],
  },
  {
    id: "pj9",
    title: "Crossword Solver using Constraint Satisfaction and Backtracking",
    category: "AI · Search",
    summary:
      "Constraint-satisfaction crossword solver applying arc consistency and backtracking with heuristics.",
    tech: ["Python", "CSP", "AI Search"],
  },
  {
    id: "pj10",
    title: "Chemical Plant Alarm Management System (VDM-SL + JavaFX)",
    category: "Formal Methods · Safety-Critical",
    summary:
      "Safety-critical alarm management system specified in VDM-SL and implemented with JavaFX for operator interaction.",
    tech: ["Java", "JavaFX", "Formal Methods", "VDM-SL"],
  },
  {
    id: "pj11",
    title: "YMCA Program Registration System — Design & UX Engineering",
    category: "Requirements · UX",
    summary:
      "Requirements engineering, UML modeling, and Figma-based UX design for a YMCA program registration system.",
    tech: ["Figma", "UML", "Requirements Engineering"],
  },
  {
    id: "pj12",
    title: "Authentication & Cryptographic Protocol Implementation Suite",
    category: "Security",
    summary:
      "Implementation suite covering RSA, Diffie-Hellman, OIDC, and TLS as part of an information security course.",
    tech: ["RSA", "Diffie-Hellman", "OIDC", "TLS"],
  },
  {
    id: "pj13",
    title: "Secure Coding and Vulnerability Mitigation Framework",
    category: "Security",
    summary:
      "Framework documenting secure coding patterns and vulnerability mitigations across common web stacks.",
    tech: ["Secure Coding", "OWASP", "Threat Modeling"],
  },
];

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-6 py-32 lg:pl-72">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_3fr]">
          <div>
            <SectionLabel numeral="VII" label="Projects" />
            <h2 className="font-display text-5xl leading-tight md:text-6xl">
              Research stations
              <br />
              <span className="italic text-[var(--gold)]">along the trail.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground">
              Each project is a research station along the forest trail — from
              healthcare AI orchestration to safety-critical formal methods.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((p, i) => (
              <motion.button
                key={p.id}
                onClick={() => setActive(p)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass group flex flex-col rounded-2xl p-6 text-left transition hover:-translate-y-1 hover:border-[var(--gold)]/40"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--gold)]/30 bg-[var(--moss)]/15 text-[var(--gold)]">
                  <Hexagon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/80">
                  {p.category}
                </div>
                <h3 className="mt-2 font-display text-lg leading-snug text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {p.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-[var(--gold)]/20 bg-background/30 px-2 py-0.5 text-[10px] text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <DetailModal
        open={!!active}
        onClose={() => setActive(null)}
        eyebrow={active?.category}
        title={active?.title ?? ""}
      >
        {active && (
          <>
            <Section title="Overview">{active.summary}</Section>
            <Section title="Technologies">
              <TagList tags={active.tech} />
            </Section>
            {active.contributions && (
              <Section title="Key Contributions">
                <ul className="space-y-1.5">
                  {active.contributions.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1 w-1 rounded-full bg-[var(--gold)]" />
                      {c}
                    </li>
                  ))}
                </ul>
              </Section>
            )}
            <div>
              <MetaRow label="Category" value={active.category} />
            </div>
          </>
        )}
      </DetailModal>
    </section>
  );
}
