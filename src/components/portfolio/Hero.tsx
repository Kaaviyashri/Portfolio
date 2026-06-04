import { motion } from "framer-motion";
import { ArrowRight, Compass, Download, Leaf } from "lucide-react";
import heroForest from "@/assets/hero-forest.jpg";
import butterfly from "@/assets/butterfly.png";
import { Fireflies } from "./Fireflies";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroForest}
          alt="Ancient intelligent forest at sunrise with glowing data panels and distant deer"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      {/* Light rays */}
      <div className="ray left-[28%]" />
      <div className="ray left-[44%] opacity-60" />
      <div className="ray left-[60%] opacity-40" />
      <div className="fog" />

      <Fireflies count={30} />

      {/* Floating butterfly */}
      <motion.img
        src={butterfly}
        alt=""
        aria-hidden
        width={120}
        height={120}
        className="pointer-events-none absolute left-[44%] top-[58%] h-20 w-20 drop-shadow-[0_0_20px_rgba(120,200,255,0.4)]"
        animate={{ y: [0, -18, 0, -8, 0], x: [0, 10, 0, -8, 0], rotate: [0, 4, -3, 2, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-6 pl-6 lg:pl-72">
        <div className="max-w-3xl py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-background/30 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[var(--gold)] backdrop-blur"
          >
            <Leaf className="h-3 w-3" /> The Intelligent Forest
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display text-6xl leading-[0.95] text-foreground sm:text-7xl md:text-8xl"
          >
            Kaaviyashri
            <br />
            <span className="bg-gradient-to-r from-[var(--gold)] via-[var(--copper)] to-[var(--gold)] bg-clip-text text-transparent">Saraboji</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg text-foreground/80"
          >
            AI Engineer &nbsp;·&nbsp; AI Researcher &nbsp;·&nbsp; Future PhD
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            Building trustworthy AI systems for healthcare, wildlife conservation,
            and public safety. My work combines machine learning, computer vision,
            software engineering, and ethical AI to solve real-world problems where
            reliability matters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a href="#research" className="group inline-flex items-center gap-2 rounded-md bg-gradient-to-b from-[var(--moss)] to-[var(--emerald-deep)] px-5 py-3 text-sm font-medium text-foreground shadow-[0_8px_30px_-10px_oklch(0.5_0.1_155/0.7)] ring-1 ring-[var(--gold)]/30 transition hover:from-[var(--emerald-deep)] hover:to-[var(--moss)]">
              Explore My Research <Leaf className="h-4 w-4 transition group-hover:rotate-12" />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md border border-[var(--gold)]/30 bg-background/30 px-5 py-3 text-sm text-foreground/90 backdrop-blur transition hover:border-[var(--gold)]/60 hover:bg-background/60">
              View Projects <Compass className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-[var(--gold)]/30 bg-background/30 px-5 py-3 text-sm text-foreground/90 backdrop-blur transition hover:border-[var(--gold)]/60 hover:bg-background/60">
              Download CV <Download className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.4, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]/80"
      >
        <div className="mb-2">Step deeper</div>
        <div className="mx-auto h-10 w-px bg-gradient-to-b from-[var(--gold)] to-transparent" />
      </motion.div>

      {/* Bottom mist transition */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
