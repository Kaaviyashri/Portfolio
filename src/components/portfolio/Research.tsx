import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import owl from "@/assets/owl.png";

const items = [
  {
    code: "R · 01",
    title: "Wildlife Detection under Cross-Illumination Domain Shift",
    summary:
      "Robust object detection across lighting domains using illumination-invariant features and domain adaptation.",
    tags: ["Computer Vision", "Robustness"],
  },
  {
    code: "R · 02",
    title: "Wildlife Road Mortality Classification",
    summary:
      "Multi-class roadkill recognition pipelines that surface taxonomic and ecological context for transportation planners.",
    tags: ["Spatiotemporal", "ML"],
  },
  {
    code: "R · 03",
    title: "Deer-Vehicle Collision Prediction",
    summary:
      "Spatiotemporal forecasting model identifying high-risk corridors to reduce wildlife-vehicle collisions.",
    tags: ["Forecasting", "Public Safety"],
  },
  {
    code: "R · 04",
    title: "Healthcare AI Governance",
    summary:
      "Readiness and lifecycle assessment frameworks for safe deployment of AI inside clinical environments.",
    tags: ["Ethics", "Governance"],
  },
  {
    code: "R · 05",
    title: "Melanoma Detection & Calibration",
    summary:
      "Uncertainty-aware classification of dermoscopic images with calibration analysis for clinical decision support.",
    tags: ["Medical AI", "Calibration"],
  },
];

export function Research() {
  return (
    <section id="research" className="relative px-6 py-32 lg:pl-72">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_3fr]">
          <div className="relative">
            <SectionLabel numeral="III" label="Research" />
            <h2 className="font-display text-5xl leading-tight md:text-6xl">
              Exploring intelligence
              <span className="italic text-[var(--gold)]"> for a better world.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground">
              My research focuses on trustworthy AI, healthcare systems, wildlife
              analytics, and responsible deployment.
            </p>
            <a href="#publications" className="mt-8 inline-flex items-center gap-2 rounded-md border border-[var(--gold)]/30 bg-background/30 px-4 py-2 text-sm text-foreground backdrop-blur transition hover:border-[var(--gold)]/60">
              View All Research <ArrowRight className="h-4 w-4" />
            </a>

            <img
              src={owl}
              alt=""
              aria-hidden
              loading="lazy"
              className="pointer-events-none mt-12 hidden h-56 w-auto opacity-90 drop-shadow-[0_0_40px_rgba(220,180,80,0.25)] lg:block"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {items.map((r, i) => (
              <motion.article
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="glass group relative flex flex-col overflow-hidden rounded-2xl p-5 transition hover:-translate-y-1 hover:border-[var(--gold)]/40"
              >
                <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/80">{r.code}</div>
                <h3 className="mt-3 font-display text-xl leading-snug text-foreground">{r.title}</h3>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground">{r.summary}</p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {r.tags.map((t) => (
                      <span key={t} className="rounded-md border border-[var(--gold)]/20 bg-[var(--moss)]/10 px-2 py-0.5 text-[10px] text-foreground/80">{t}</span>
                    ))}
                  </div>
                  <span className="grid h-7 w-7 place-items-center rounded-full border border-[var(--gold)]/30 text-[var(--gold)] transition group-hover:bg-[var(--gold)]/10">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
