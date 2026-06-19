import { motion } from "framer-motion";
import { Briefcase, FlaskConical } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const roles = [
  {
    icon: FlaskConical,
    title: "Graduate Lab Assistant",
    org: "University of Wisconsin–La Crosse",
    range: "Sep 2024 – May 2025",
    body: "Supported AI and machine learning lab environments by guiding students through Python-based data preprocessing, feature engineering, model training, evaluation, and debugging. Assisted faculty with lab setup and workflow validation while reinforcing reproducible experimentation, structured notebooks, documentation, and software engineering best practices for applied machine learning projects.",
  },
  {
    icon: Briefcase,
    title: "Software Engineer Intern",
    org: "7 Angle",
    range: "Apr 2024 – Jun 2024",
    body: "Developed data-driven applications and Power BI dashboards for product and business teams, using Node.js for data integration and real-time operational reporting. Worked across frontend, backend, and analytics workflows to integrate ML-driven insights, optimize data-heavy UI components, and improve dashboard performance by approximately 25%.",
  },
  {
    icon: Briefcase,
    title: "Machine Learning Engineer",
    org: "ICICI Bank",
    range: "Jul 2020 – Jan 2024",
    body: "Designed and implemented machine learning and analytics solutions for fraud detection, operational risk analysis, and business forecasting in a large-scale banking environment. Built anomaly detection pipelines processing 50K+ daily transactions, automated ETL workflows, and decision-support dashboards that improved fraud signal quality, reporting accuracy, and operational efficiency.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32 lg:pl-72">
      <div className="mx-auto max-w-5xl">
        <SectionLabel numeral="III" label="Professional Experience" />

        <h2 className="max-w-2xl font-display text-5xl leading-tight md:text-6xl">
          From production systems
          <span className="italic text-[var(--gold)]"> to intelligent AI.</span>
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
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}