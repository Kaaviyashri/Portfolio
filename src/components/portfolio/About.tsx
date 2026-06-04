import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import butterfly from "@/assets/butterfly.png";

const pillars = [
  "Healthcare AI",
  "Wildlife Conservation",
  "Transportation Safety",
  "AI Governance",
  "Trustworthy ML",
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
              <span className="italic text-[var(--gold)]">butterfly.</span>
            </h2>
            <motion.img
              src={butterfly}
              alt=""
              aria-hidden
              loading="lazy"
              className="mt-10 h-32 w-32 opacity-90"
              animate={{ y: [0, -10, 0], rotate: [0, 6, -4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
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
              I am a Master&apos;s student in Software Engineering at the University of
              Wisconsin–La Crosse and an aspiring AI researcher focused on
              trustworthy artificial intelligence, healthcare AI, computer vision,
              and machine learning systems.
            </p>
            <p>
              My journey into artificial intelligence began through software
              engineering and large-scale data systems. Before transitioning into
              research, I worked in banking technology where I gained firsthand
              experience building and analyzing systems that support critical
              decision-making at scale.
            </p>
            <p>
              Today, my research explores how intelligent systems can be deployed
              safely in environments where mistakes carry meaningful consequences.
              My long-term goal is to pursue doctoral research and contribute to AI
              systems that are transparent, reliable, and worthy of human trust.
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
