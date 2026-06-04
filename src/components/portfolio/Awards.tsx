import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import owl from "@/assets/owl.png";

const awards = [
  { title: "Eagle Advocate Award", body: "For exceptional leadership and service to the UWL community." },
  { title: "International Student Academic Excellence Award", body: "Recognizing academic excellence and global contributions." },
  { title: "WiSys Big Idea Tournament Winner", body: "Innovative AI healthcare solution recognized at state level." },
  { title: "Graduate Project Competition Award", body: "Excellence in research innovation and project impact." },
  { title: "WiSys Innovation On-Ramp Winner", body: "Selected among top innovators with real-world applicability." },
  { title: "UNI Research Conference Winner", body: "Recognized for original undergraduate research contribution." },
  { title: "I-Engage Scholarship", body: "Awarded for engagement and academic promise." },
  { title: "Merit-Based Tuition Grant", body: "Granted for sustained academic excellence." },
  { title: "Chancellor's Volunteer Service Award", body: "Recognition for outstanding community service." },
  { title: "Featured Student Recognition", body: "Profiled by the university for academic and research impact." },
];

export function Awards() {
  return (
    <section id="awards" className="relative px-6 py-32 lg:pl-72">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_3fr]">
          <div>
            <SectionLabel numeral="VI" label="Awards" />
            <h2 className="font-display text-5xl leading-tight md:text-6xl">
              Milestones
              <br />
              <span className="italic text-[var(--gold)]">that inspire what&apos;s next.</span>
            </h2>
            <img
              src={owl}
              alt=""
              aria-hidden
              loading="lazy"
              className="pointer-events-none mt-10 hidden h-48 w-auto opacity-90 lg:block"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {awards.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass group relative rounded-xl p-5 transition hover:-translate-y-1"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[var(--gold)]/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                <Award className="h-5 w-5 text-[var(--gold)]" />
                <div className="mt-3 font-display text-base leading-snug text-foreground">{a.title}</div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{a.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
