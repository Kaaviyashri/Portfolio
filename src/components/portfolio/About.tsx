import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import butterfly from "@/assets/butterfly.png";

const pillars = [
  "Trustworthy AI",
  "Healthcare AI",
  "Computer Vision",
  "Wildlife Analytics",
  "AI Governance",
  "Uncertainty Quantification",
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32 lg:pl-72">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div className="relative">
            <SectionLabel numeral="I" label="About" />
            <h2 className="font-display text-5xl leading-tight md:text-6xl">
              The curious
              <br />
              <span className="italic text-[var(--gold)]">researcher.</span>
            </h2>
            <motion.img
              src={butterfly}
              alt=""
              aria-hidden
              loading="lazy"
              className="mt-10 h-24 w-24 opacity-80"
              animate={{ y: [0, -6, 0], rotate: [0, 3, -2, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-5 text-[15px] leading-relaxed text-foreground/85"
          >
            <p>
              I am Kaaviyashri Saraboji — a Master&rsquo;s student in Software
              Engineering at the University of Wisconsin&ndash;La Crosse and a
              graduate researcher working at the intersection of trustworthy
              artificial intelligence, healthcare AI, computer vision, and
              responsible machine learning.
            </p>
            <p>
              My path into AI began through software engineering and three years
              in banking technology at ICICI Bank, where I built and analyzed
              decision-support systems for retail banking. That experience
              shaped my conviction that intelligent systems must be reliable,
              interpretable, and aligned with the people they serve.
            </p>
            <p>
              Today my research focuses on calibration and uncertainty in medical
              AI, robustness of wildlife detection under domain shift,
              spatiotemporal modeling for transportation safety, and governance
              frameworks for clinical AI deployment. I am preparing to pursue
              doctoral research advancing trustworthy, human-centered AI.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {pillars.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-[var(--gold)]/25 bg-background/30 px-3 py-1 text-xs text-foreground/80 backdrop-blur"
                >
                  {p}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
