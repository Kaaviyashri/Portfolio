import { motion } from "framer-motion";
import { ArrowRight, Home, Scale, Hexagon, Compass, Sparkles } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import butterfly from "@/assets/butterfly.png";

const projects = [
  {
    icon: Home,
    title: "Habitat for Humanity AI Portal",
    body: "AI-assisted platform for housing applications and volunteer coordination.",
    tags: ["Community", "Automation"],
  },
  {
    icon: Scale,
    title: "ARISTOTLE",
    body: "Ethical readiness assessment platform for healthcare AI systems.",
    tags: ["Healthcare", "Ethics"],
  },
  {
    icon: Hexagon,
    title: "AIOrch",
    body: "Orchestration platform for hospital AI lifecycle management.",
    tags: ["Healthcare", "MLOps"],
  },
  {
    icon: Compass,
    title: "Deer Collision Prediction Framework",
    body: "Spatiotemporal forecasting system for wildlife-vehicle collision hotspots.",
    tags: ["Wildlife", "Forecasting"],
  },
  {
    icon: Sparkles,
    title: "Melanoma Calibration Research",
    body: "Studying calibration, uncertainty, and robustness in medical image classification.",
    tags: ["Medical AI", "CV"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32 lg:pl-72">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_3fr]">
          <div>
            <SectionLabel numeral="IV" label="Projects" />
            <h2 className="font-display text-5xl leading-tight md:text-6xl">
              Systems that
              <br />
              <span className="italic text-[var(--gold)]">make an impact.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground">
              Building practical solutions at the intersection of AI, engineering,
              and real-world needs.
            </p>
            <motion.img
              src={butterfly}
              alt=""
              aria-hidden
              loading="lazy"
              className="mt-8 h-20 w-20 opacity-80"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="glass group flex flex-col rounded-2xl p-6 transition hover:-translate-y-1"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-[var(--gold)]/30 bg-[var(--moss)]/15 text-[var(--gold)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl text-foreground">{p.title}</h3>
                  <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground">{p.body}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-md border border-[var(--gold)]/20 bg-background/30 px-2 py-0.5 text-[10px] text-foreground/80">{t}</span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
