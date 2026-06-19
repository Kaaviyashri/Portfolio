import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import butterfly from "@/assets/butterfly.png";

const pillars = [
  "AI Engineering",
  "Machine Learning",
  "Computer Vision",
  "Healthcare AI",
  "Medical Imaging",
  "Trustworthy AI",
  "Software Engineering",
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32 lg:pl-72">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">

          <div className="relative">
            <SectionLabel numeral="I" label="About" />

            <h2 className="font-display text-5xl leading-tight md:text-6xl">
              The researcher
              <br />
              <span className="italic text-[var(--gold)]">& builder.</span>
            </h2>

            <motion.img
              src={butterfly}
              alt=""
              aria-hidden
              loading="lazy"
              className="mt-6 h-28 w-28 opacity-90 sm:h-36 sm:w-36 md:h-44 md:w-44 lg:mt-3 lg:h-50 lg:w-50"
              animate={{
                y: [0, -6, 0],
                rotate: [0, 3, -2, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
              I am Kaaviyashri Saraboji, an AI Engineer and researcher focused on building intelligent systems that create meaningful real-world impact. My work spans machine learning, computer vision, healthcare AI, generative AI, and AI governance, with a passion for turning complex ideas into practical solutions.
            </p>

            <p>
              I have authored and presented research at IEEE conferences and developed AI-driven solutions across healthcare, public safety, wildlife conservation, and transportation safety. These experiences have strengthened my interest in applying AI to challenging problems where technology can make a measurable difference.
            </p>

            <p>
              My interests include predictive modeling, computer vision, intelligent decision-support systems, generative AI, and agentic workflows. I enjoy combining research and engineering to build scalable, trustworthy, and human-centered AI systems that address real-world needs.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {pillars.map((pillar) => (
                <span
                  key={pillar}
                  className="rounded-full border border-[var(--gold)]/25 bg-background/30 px-3 py-1 text-xs text-foreground/80 backdrop-blur"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}