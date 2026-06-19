import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const groups = [
  {
    title: "Programming Languages",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "SQL",
      "C++",
    ],
  },

  {
    title: "Generative AI & LLMs",
    items: [
      "Large Language Models (LLMs)",
      "RAG",
      "LangChain",
      "LangGraph",
      "Prompt Engineering",
      "Embedding Models",
      "Semantic Search",
      "AI Agents",
      "Context Retrieval",
      "Response Validation",
    ],
  },

  {
    title: "Machine Learning",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Predictive Modeling",
      "Model Evaluation",
      "Feature Engineering",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "XGBoost",
      "Hugging Face",
    ],
  },

  {
    title: "Computer Vision",
    items: [
      "YOLOv5",
      "YOLOv8",
      "OpenCV",
      "Object Detection",
      "Image Classification",
      "Medical Imaging",
      "Domain Shift Analysis",
    ],
  },

  {
    title: "AI Engineering",
    items: [
      "FastAPI",
      "REST APIs",
      "Microservices",
      "ETL Pipelines",
      "Workflow Orchestration",
      "Inference Pipelines",
      "API Optimization",
      "Docker",
      "CI/CD",
    ],
  },

  {
    title: "Data & Vector Databases",
    items: [
      "Qdrant",
      "FAISS",
      "Pinecone",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Data Validation",
      "Data Modeling",
    ],
  },

  {
    title: "Cloud & Infrastructure",
    items: [
      "AWS",
      "EC2",
      "S3",
      "SageMaker",
      "Linux",
      "Unix",
      "Git",
      "GitHub",
    ],
  },

  {
    title: "Responsible AI",
    items: [
      "AI Governance",
      "Trustworthy AI",
      "Model Calibration",
      "Uncertainty Quantification",
      "Healthcare AI Ethics",
      "Bias Assessment",
    ],
  },

  {
    title: "Software Engineering",
    items: [
      "React",
      "Node.js",
      "Express",
      "System Design",
      "JWT",
      "RBAC",
      "Agile Development",
      "Requirements Engineering",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32 lg:pl-72">
      <div className="mx-auto max-w-6xl">
        <SectionLabel numeral="VIII" label="Technical Skills" />

        <h2 className="max-w-2xl font-display text-5xl leading-tight md:text-6xl">
          Built for
          <span className="italic text-[var(--gold)]">
            {" "}intelligent systems.
          </span>
        </h2>

        <p className="mt-5 max-w-2xl text-sm text-muted-foreground">
          Technical expertise spanning AI engineering, generative AI,
          machine learning, computer vision, cloud infrastructure,
          and production software systems.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-[var(--gold)]/40"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/80">
                {g.title}
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-md border border-[var(--gold)]/20 bg-background/30 px-2 py-1 text-[11px] text-foreground/85"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
