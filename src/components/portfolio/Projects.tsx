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
  contributions: string[];
};

const projects: Project[] = [
  {
    id: "pj1",
    title: "Habitat for Humanity Housing & Volunteer Management Portal",
    category: "MSE Capstone · Full-Stack",
    summary:
      "Full-stack capstone portal supporting housing applications, volunteer coordination, document management, and administrative review workflows for Habitat for Humanity.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "RBAC"],
    contributions: [
      "Designed a 26-step housing application workflow with autosave, server-side validation, and modular routing",
      "Built JWT authentication and RBAC for applicant, reviewer, and administrator access",
      "Implemented audit trails, review status tracking, and decision workflows to improve process traceability",
      "Developed responsive dashboards supporting application review, volunteer coordination, and administrative oversight",
    ],
  },
  {
    id: "pj2",
    title: "Enterprise Knowledge Intelligence Platform",
    category: "Generative AI · RAG",
    summary:
      "Enterprise RAG platform for document ingestion, semantic search, citation-grounded question answering, and scalable knowledge retrieval.",
    tech: ["Python", "LangChain", "FastAPI", "Qdrant", "OpenAI APIs", "Docker"],
    contributions: [
      "Processed and indexed 10K+ document chunks for enterprise-scale knowledge retrieval",
      "Built vector search pipelines achieving sub-2-second semantic retrieval performance",
      "Implemented citation-aware response validation, reducing unsupported LLM outputs by approximately 35%",
      "Containerized deployment architecture with Docker, reducing environment setup time by approximately 60%",
    ],
  },
  {
    id: "pj3",
    title: "Multi-Agent Clinical Workflow Orchestration Platform",
    category: "Agentic AI · Healthcare",
    summary:
      "Agentic AI platform orchestrating retrieval, summarization, compliance validation, and reasoning workflows for healthcare-oriented use cases.",
    tech: ["Python", "LangGraph", "CrewAI", "LangChain", "Qdrant", "REST APIs"],
    contributions: [
      "Designed multi-agent workflows for retrieval, reasoning, validation, and summarization tasks",
      "Implemented RAG-based retrieval pipelines, improving contextual relevance by approximately 30%",
      "Reduced intermediate workflow failures by approximately 40% through agent coordination and validation mechanisms",
      "Integrated external APIs and knowledge systems for automated healthcare workflow execution",
    ],
  },
  {
    id: "pj4",
    title: "Meeting Intelligence & Knowledge Retrieval Platform",
    category: "LLM Application · Speech AI",
    summary:
      "Meeting intelligence platform that converts recordings into searchable transcripts, summaries, action items, and conversational knowledge.",
    tech: ["Python", "FastAPI", "Whisper", "LangChain", "Qdrant", "OpenAI APIs"],
    contributions: [
      "Built speech-to-text pipelines using Whisper for automated transcript generation",
      "Implemented semantic search and retrieval across meeting archives and discussion history",
      "Reduced manual meeting documentation effort by approximately 70% through automated summarization",
      "Developed RAG-powered conversational search for decisions, tasks, and discussion context",
    ],
  },
  {
    id: "pj5",
    title: "AI-Powered Fraud Intelligence & Risk Monitoring System",
    category: "Machine Learning · FinTech",
    summary:
      "Fraud intelligence platform combining anomaly detection, feature engineering, ETL automation, ML inference services, and analytics dashboards.",
    tech: ["Python", "XGBoost", "FastAPI", "PostgreSQL", "Power BI"],
    contributions: [
      "Processed 50K+ daily financial transactions for anomaly detection and fraud monitoring",
      "Reduced manual fraud review workload by approximately 30% using machine learning risk signals",
      "Built automated ETL workflows, reducing manual operational effort by approximately 40%",
      "Designed analytics dashboards supporting faster fraud investigations and operational decision-making",
    ],
  },
  {
    id: "pj6",
    title: "ARISTOTLE — Ethical Readiness Assessment Platform for Healthcare AI",
    category: "Responsible AI · Healthcare",
    summary:
      "WHO-aligned healthcare AI governance platform assessing ethical readiness, deployment preparedness, compliance alignment, and governance gaps.",
    tech: ["JavaScript", "HTML/CSS", "Scoring Engine", "PDF Reports"],
    contributions: [
      "Translated six WHO healthcare AI ethical principles into a structured assessment framework",
      "Developed a 60-question weighted scoring engine for ethical readiness evaluation",
      "Generated automated gap analyses and role-specific recommendations, reducing documentation time by approximately 70%",
      "Improved pilot completion rates by approximately 40% through validation-driven UX design",
    ],
  },
  {
    id: "pj7",
    title: "AIOrch — Responsible AI Lifecycle Orchestration Platform",
    category: "Healthcare AI · MLOps",
    summary:
      "Governance-by-design platform for managing healthcare AI systems across intake, validation, monitoring, deployment, and retirement stages.",
    tech: ["MERN", "Healthcare AI", "MLOps", "AI Governance"],
    contributions: [
      "Designed lifecycle governance workflows spanning validation, monitoring, deployment, and retirement stages",
      "Mapped clinical AI lifecycle activities to governance and compliance checkpoints",
      "Built orchestration interfaces for managing AI artifacts, validation evidence, and review workflows",
      "Earned 2nd Place at the WiSys Big Idea Tournament 2026 and received a $1,500 innovation award",
    ],
  },
  {
    id: "pj8",
    title: "Front Dash — Multi-Portal Food Delivery Management System",
    category: "Full-Stack",
    summary:
      "Multi-role food delivery platform supporting customers, restaurants, and delivery partners through a unified management system.",
    tech: ["Node.js", "Express", "MySQL"],
    contributions: [
      "Designed role-based workflows for customers, restaurants, and delivery personnel",
      "Developed backend services for order management, fulfillment tracking, and reporting",
      "Built relational database models supporting transactional food delivery operations",
    ],
  },
];

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-6 py-32 lg:pl-72">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_3fr]">
          <div>
            <SectionLabel numeral="V" label="Projects" />

            <h2 className="font-display text-5xl leading-tight md:text-6xl">
              Systems built
              <br />
              <span className="italic text-[var(--gold)]">
                beyond the papers.
              </span>
            </h2>

            <p className="mt-6 max-w-sm text-sm text-muted-foreground">
              AI engineering and software systems spanning generative AI, RAG,
              agentic workflows, healthcare AI, fraud intelligence, full-stack
              development, and intelligent decision-support tools.
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

            <div>
              <MetaRow label="Category" value={active.category} />
            </div>
          </>
        )}
      </DetailModal>
    </section>
  );
}