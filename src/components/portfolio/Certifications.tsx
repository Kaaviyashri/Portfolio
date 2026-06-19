import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const certs = [
  {
    title: "AWS Certified AI Practitioner",
    body: "Industry certification covering generative AI, machine learning fundamentals, responsible AI, prompt engineering, and AWS AI services.",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    body: "Foundational certification in cloud architecture, security, networking, cost optimization, and AWS cloud services.",
  },
  {
    title: "Ethics and Governance of Artificial Intelligence for Health",
    body: "World Health Organization certification focused on ethical deployment, governance, regulation, and responsible use of healthcare AI systems.",
  },
  {
    title: "HIPAA Compliance Training Program",
    body: "Training in healthcare privacy, patient data protection, security practices, and regulatory compliance for healthcare environments.",
  },
  {
    title: "Prompt Engineering & Programming with OpenAI",
    body: "Advanced coursework in prompt engineering, LLM application development, API integration, and generative AI workflows.",
  },
  {
    title: "Google AI Essentials",
    body: "Practical training in generative AI tools, AI-assisted productivity workflows, and responsible AI usage.",
  },
  {
    title: "Research Communication",
    body: "WiSys certification focused on communicating research outcomes and technical innovations to academic, industry, and public audiences.",
  },
  {
    title: "Innovative Thinking",
    body: "WiSys innovation program covering entrepreneurship, opportunity discovery, creative problem solving, and technology commercialization.",
  },
  {
    title: "Fundamentals of Agile Project Management",
    body: "Project Management Institute training covering Agile methodologies, planning, team collaboration, and iterative delivery.",
  },
  {
    title: "Fundamentals of Predictive Project Management",
    body: "Project Management Institute training in traditional project planning, scheduling, risk management, and project execution.",
  },
  {
    title: "Java Full Stack Developer",
    body: "Professional training in Java, Spring Boot, React, REST APIs, database integration, and full-stack application development.",
  },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative px-6 py-32 lg:pl-72"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel numeral="VII" label="Certifications" />

        <h2 className="max-w-2xl font-display text-5xl leading-tight md:text-6xl">
          Skills forged
          <span className="italic text-[var(--gold)]">
            {" "}along the journey.
          </span>
        </h2>

        <p className="mt-5 max-w-2xl text-sm text-muted-foreground">
          Professional certifications spanning artificial intelligence,
          cloud computing, healthcare compliance, project management,
          software engineering, innovation, and research communication.
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-5 transition hover:-translate-y-1"
            >
              <BadgeCheck className="h-5 w-5 text-[var(--gold)]" />

              <div className="mt-3 font-display text-base leading-snug text-foreground">
                {c.title}
              </div>

              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
