import { motion } from "framer-motion";
import { Mail, Linkedin, Github, GraduationCap, Download } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import footerLake from "@/assets/footer-lake.jpg";
import owl from "@/assets/owl.png";
import { Fireflies } from "./Fireflies";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={footerLake}
          alt="Moonlit forest lake with lotus and fireflies"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
      </div>
      <Fireflies count={18} />

      {/* Subtle fish ripples on the lake */}
      <FishRipples />

      <div className="relative z-10 px-6 py-32 lg:pl-72">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionLabel numeral="XII" label="Let's Connect" />
              <h2 className="font-display text-5xl leading-tight md:text-6xl">
                Let&apos;s build something
                <br />
                <span className="italic text-[var(--gold)]">meaningful together.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                Open to research collaborations, PhD opportunities, AI research
                roles, and meaningful conversations on trustworthy AI.
              </p>

              <div className="mt-10 space-y-3 text-sm">
                <ContactRow
                  icon={Mail}
                  label="kaaviya.saraboji@uwlax.edu"
                  href="mailto:kaaviya.saraboji@uwlax.edu"
                />
                <ContactRow
                  icon={Linkedin}
                  label="linkedin.com/in/kaaviyashri-saraboji"
                  href="https://www.linkedin.com/in/kaaviyashri-saraboji"
                />
                <ContactRow
                  icon={Github}
                  label="github.com/kaaviyashri"
                  href="https://github.com/kaaviyashri"
                />
                <ContactRow
                  icon={GraduationCap}
                  label="Google Scholar — View profile"
                  href="https://scholar.google.com/"
                />
              </div>

              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 rounded-md border border-[var(--gold)]/40 bg-background/40 px-5 py-3 text-sm text-foreground backdrop-blur transition hover:bg-background/70"
              >
                Download Full CV <Download className="h-4 w-4" />
              </a>
            </div>

            <div className="relative hidden lg:block">
              <motion.img
                src={owl}
                alt=""
                aria-hidden
                loading="lazy"
                className="absolute right-0 top-0 h-72 w-auto drop-shadow-[0_0_50px_rgba(220,180,80,0.25)]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass mt-40 rounded-2xl p-8 font-display text-xl italic leading-snug text-foreground"
              >
                &ldquo;The next generation of AI will be defined not only by
                intelligence, but by trust, responsibility, and impact.&rdquo;
                <footer className="mt-4 text-sm not-italic text-[var(--gold)]">
                  — Kaaviyashri Saraboji
                </footer>
              </motion.blockquote>
            </div>
          </div>
        </div>

        <footer className="relative z-10 mt-24 border-t border-[var(--gold)]/15 pt-8 text-center text-xs text-muted-foreground">
          © 2026 Kaaviyashri Saraboji · The Intelligent Forest
        </footer>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  href,
}: {
  icon: typeof Mail;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
      className="group flex items-center gap-4 rounded-md border border-transparent px-2 py-1 transition hover:border-[var(--gold)]/20 hover:bg-background/30"
    >
      <span className="grid h-9 w-9 place-items-center rounded-md border border-[var(--gold)]/25 bg-background/40 text-[var(--gold)]">
        <Icon className="h-4 w-4" />
      </span>
      <span className="text-foreground/90 group-hover:text-foreground">{label}</span>
    </a>
  );
}

function FishRipples() {
  const ripples = [
    { left: "18%", top: "70%", delay: 0 },
    { left: "55%", top: "82%", delay: 2.5 },
    { left: "78%", top: "74%", delay: 5 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {ripples.map((r, i) => (
        <motion.span
          key={i}
          className="absolute block h-6 w-6 rounded-full border border-[var(--bio)]/40"
          style={{ left: r.left, top: r.top }}
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: [0.2, 1.8, 2.4], opacity: [0, 0.6, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeOut",
            delay: r.delay,
          }}
        />
      ))}
    </div>
  );
}
