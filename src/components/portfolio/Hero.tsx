import { motion } from "framer-motion";
import { Compass, Leaf } from "lucide-react";
import heroForest from "@/assets/hero-forest.jpg";
import butterfly from "@/assets/butterfly.png";
import { Fireflies } from "./Fireflies";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroForest}
          alt="Forest landscape"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      {/* Atmosphere */}
      <div className="ray left-[28%]" />
      <div className="ray left-[44%] opacity-60" />
      <div className="ray left-[60%] opacity-40" />
      <div className="fog" />

      <Fireflies count={30} />

      {/* Butterfly */}
      <motion.img
        src={butterfly}
        alt=""
        aria-hidden
        width={160}
        height={160}
        className="pointer-events-none absolute right-[8%] top-[25%] h-28 w-28 drop-shadow-[0_0_25px_rgba(120,200,255,0.5)]"
        animate={{
          y: [0, -20, 0, -10, 0],
          x: [0, 15, 0, -12, 0],
          rotate: [0, 6, -4, 3, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-6 pl-6 lg:pl-72">
        <div className="max-w-4xl py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-background/30 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[var(--gold)] backdrop-blur"
          >
            <Leaf className="h-3 w-3" />
            Engineering for Impact
          </motion.div>

          <motion.h1
            className="font-display text-6xl leading-[0.95] sm:text-7xl md:text-8xl"
          >
            <span className="text-white">
              Kaaviyashri
            </span>{" "}
            <span className="bg-gradient-to-r from-[var(--gold)] via-[var(--copper)] to-[var(--gold)] bg-clip-text text-transparent">
              Saraboji
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg text-foreground/80"
          >
            AI Engineer · Machine Learning · Computer Vision · Healthcare AI
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground"
          >
            Building AI That Matters.
Bridging research, engineering, and real-world impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#research"
              className="group inline-flex items-center gap-2 rounded-md bg-gradient-to-b from-[var(--moss)] to-[var(--emerald-deep)] px-5 py-3 text-sm font-medium text-foreground shadow-[0_8px_30px_-10px_oklch(0.5_0.1_155/0.7)] ring-1 ring-[var(--gold)]/30 transition hover:from-[var(--emerald-deep)] hover:to-[var(--moss)]"
            >
              Explore Research
              <Leaf className="h-4 w-4 transition group-hover:rotate-12" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--gold)]/30 bg-background/30 px-5 py-3 text-sm text-foreground/90 backdrop-blur transition hover:border-[var(--gold)]/60 hover:bg-background/60"
            >
              View Projects
              <Compass className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          delay: 1.4,
          y: { duration: 2, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center text-[10px] uppercase tracking-[0.4em] text-[var(--gold)]/80"
      >
        <div className="mb-2">Step Deeper</div>
        <div className="mx-auto h-10 w-px bg-gradient-to-b from-[var(--gold)] to-transparent" />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 z-10 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}