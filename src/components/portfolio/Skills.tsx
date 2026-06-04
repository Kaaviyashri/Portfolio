import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const groups = [
  {
    title: "Languages",
    items: ["Python", "Java", "JavaScript / TypeScript", "C#", "SQL", "C / C++"],
  },
  {
    title: "AI / ML",
    items: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "XGBoost",
      "YOLO (v5 / v8)",
      "OpenCV",
      "Hugging Face",
    ],
  },
  {
    title: "Trustworthy AI",
    items: [
      "Calibration & ECE",
      "Uncertainty Quantification",
      "Domain Shift Analysis",
      "Model Evaluation",
      "AI Governance",
    ],
  },
  {
    title: "Software Engineering",
    items: [
      "React",
      "Node.js / Express",
      "MongoDB",
      "MySQL",
      "REST APIs",
      "JWT / OIDC",
      "Tailwind CSS",
    ],
  },
  {
    title: "Tools & Platforms",
    items: ["Git / GitHub", "Linux", "Docker", "Jupyter", "Figma", "VS Code"],
  },
  {
    title: "Methods",
    items: [
      "Spatiotemporal Modeling",
      "Computer Vision",
      "Formal Methods (VDM-SL)",
      "Software V&V",
      "Requirements Engineering",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32 lg:pl-72">
      <div className="mx-auto max-w-6xl">
        <SectionLabel numeral="X" label="Technical Skills" />
        <h2 className="max-w-2xl font-display text-5xl leading-tight md:text-6xl">
          The researcher&rsquo;s
          <span className="italic text-[var(--gold)]"> toolkit.</span>
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-6"
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
