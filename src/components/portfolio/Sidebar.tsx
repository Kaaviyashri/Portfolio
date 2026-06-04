import { Home, User, Compass, FlaskConical, FolderGit2, BookOpen, Award, Mountain, Mail, Github, Linkedin, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "journey", label: "Journey", icon: Compass },
  { id: "research", label: "Research", icon: FlaskConical },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "publications", label: "Publications", icon: BookOpen },
  { id: "awards", label: "Awards", icon: Award },
  { id: "vision", label: "Vision", icon: Mountain },
  { id: "contact", label: "Contact", icon: Mail },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-60 flex-col justify-between border-r border-[var(--gold)]/10 bg-background/40 px-6 py-8 backdrop-blur-md lg:flex">
      <div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3">
            <TreeMark />
            <div className="font-display text-lg leading-tight text-foreground">
              Kaaviyashri<br />Saraboji
            </div>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            AI Engineer · AI Researcher<br />Future PhD
          </p>
        </motion.div>

        <nav className="space-y-1">
          {links.map((l, i) => {
            const Icon = l.icon;
            return (
              <motion.a
                key={l.id}
                href={`#${l.id}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-[var(--gold)]/5 hover:text-foreground"
              >
                <Icon className="h-4 w-4 text-[var(--gold)]/70 transition group-hover:text-[var(--gold)]" />
                <span>{l.label}</span>
              </motion.a>
            );
          })}
        </nav>
      </div>

      <div className="flex gap-3 text-muted-foreground">
        <a href="#" aria-label="LinkedIn" className="rounded-full border border-[var(--gold)]/20 p-2 transition hover:text-[var(--gold)]"><Linkedin className="h-4 w-4" /></a>
        <a href="#" aria-label="GitHub" className="rounded-full border border-[var(--gold)]/20 p-2 transition hover:text-[var(--gold)]"><Github className="h-4 w-4" /></a>
        <a href="#" aria-label="Scholar" className="rounded-full border border-[var(--gold)]/20 p-2 transition hover:text-[var(--gold)]"><GraduationCap className="h-4 w-4" /></a>
        <a href="#contact" aria-label="Email" className="rounded-full border border-[var(--gold)]/20 p-2 transition hover:text-[var(--gold)]"><Mail className="h-4 w-4" /></a>
      </div>
    </aside>
  );
}

function TreeMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[var(--gold)]">
      <path d="M16 2c-3 4-6 6-6 10a6 6 0 0 0 5 6v3h-3v2h8v-2h-3v-3a6 6 0 0 0 5-6c0-4-3-6-6-10Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.12" />
      <circle cx="12" cy="11" r="1" fill="currentColor" />
      <circle cx="20" cy="13" r="1" fill="currentColor" />
      <circle cx="16" cy="8" r="1" fill="currentColor" />
    </svg>
  );
}
