import {
  Home,
  User,
  GraduationCap,
  Briefcase,
  FlaskConical,
  FolderGit2,
  Award,
  BadgeCheck,
  Cpu,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "research", label: "Research", icon: FlaskConical },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "awards", label: "Awards", icon: Award },
  { id: "certifications", label: "Certifications", icon: BadgeCheck },
  { id: "skills", label: "Skills", icon: Cpu },
  { id: "contact", label: "Contact", icon: Mail },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-60 flex-col justify-between border-r border-[var(--gold)]/10 bg-background/40 px-6 py-6 backdrop-blur-md lg:flex">
      <div className="min-h-0 flex-1 overflow-y-auto pr-1">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3">
            <TreeMark />
            <div className="font-display text-base leading-tight text-foreground">
              Kaaviyashri
              Saraboji
            </div>
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
          </p>
        </motion.div>

        <nav className="space-y-0.5">
          {links.map((l, i) => {
            const Icon = l.icon;
            return (
              <motion.a
                key={l.id}
                href={`#${l.id}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.03 * i }}
                className="group flex items-center gap-3 rounded-md px-3 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-[var(--gold)]/5 hover:text-foreground"
              >
                <Icon className="h-3.5 w-3.5 text-[var(--gold)]/70 transition group-hover:text-[var(--gold)]" />
                <span>{l.label}</span>
              </motion.a>
            );
          })}
        </nav>
      </div>

      <div className="mt-4 flex gap-2 text-muted-foreground">
        <a
          href="https://www.linkedin.com/in/kaaviyashri"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn"
          className="rounded-full border border-[var(--gold)]/20 p-2 transition hover:text-[var(--gold)]"
        >
          <Linkedin className="h-3.5 w-3.5" />
        </a>
        <a
          href="https://github.com/kaaviyashri"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub"
          className="rounded-full border border-[var(--gold)]/20 p-2 transition hover:text-[var(--gold)]"
        >
          <Github className="h-3.5 w-3.5" />
        </a>
        <a
          href="https://scholar.google.com/citations?user=eC28UwMAAAAJ&hl=en"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Google Scholar"
          className="rounded-full border border-[var(--gold)]/20 p-2 transition hover:text-[var(--gold)]"
        >
          <GraduationCap className="h-3.5 w-3.5" />
        </a>
        <a
          href="#contact"
          aria-label="Email"
          className="rounded-full border border-[var(--gold)]/20 p-2 transition hover:text-[var(--gold)]"
        >
          <Mail className="h-3.5 w-3.5" />
        </a>
      </div>
    </aside>
  );
}

function TreeMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      className="text-[var(--gold)]"
    >
      <path
        d="M16 2c-3 4-6 6-6 10a6 6 0 0 0 5 6v3h-3v2h8v-2h-3v-3a6 6 0 0 0 5-6c0-4-3-6-6-10Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <circle cx="12" cy="11" r="1" fill="currentColor" />
      <circle cx="20" cy="13" r="1" fill="currentColor" />
      <circle cx="16" cy="8" r="1" fill="currentColor" />
    </svg>
  );
}