import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const certs = [
  { title: "Certificate of Merit", body: "Issued in recognition of academic and research achievement." },
  { title: "Certificate of Proficiency", body: "Issued in recognition of demonstrated technical proficiency." },
  { title: "AI for Healthcare — Continuing Education", body: "Self-directed study covering trustworthy AI and clinical decision-support concepts." },
  { title: "Software Engineering Graduate Specialization", body: "Graduate coursework in software verification, project management, and modeling." },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-32 lg:pl-72">
      <div className="mx-auto max-w-6xl">
        <SectionLabel numeral="IX" label="Certifications" />
        <h2 className="max-w-2xl font-display text-5xl leading-tight md:text-6xl">
          Markers along
          <span className="italic text-[var(--gold)]"> the path.</span>
        </h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-5"
            >
              <BadgeCheck className="h-5 w-5 text-[var(--gold)]" />
              <div className="mt-3 font-display text-base text-foreground">
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
}
