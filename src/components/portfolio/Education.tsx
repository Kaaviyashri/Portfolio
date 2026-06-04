import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, GraduationCap, MapPin, User } from "lucide-react";
import { useState } from "react";
import { SectionLabel } from "./SectionLabel";

type Degree = {
  degree: string;
  institution: string;
  location: string;
  range: string;
  advisor?: string;
  courses: string[];
};

const degrees: Degree[] = [
  {
    degree: "Master of Science — Software Engineering",
    institution: "University of Wisconsin–La Crosse",
    location: "La Crosse, Wisconsin, USA",
    range: "Aug 2024 – May 2026",
    advisor: "Dr. Dipankar Mitra",
    courses: [
      "CS 521 — Program Language Concepts",
      "CS 741 — Software Engineering Principles",
      "CS 743 — Software Verification & Validation",
      "CS 555 — Fundamentals of Information Security",
      "CS 744 — Software Project Management",
      "CS 746 — Software Modeling & Analysis",
      "CS 552 — Artificial Intelligence",
      "CS 798 — Software Development Project",
    ],
  },
  {
    degree: "Master of Science — Computer Science",
    institution: "Bharathidasan University",
    location: "Tiruchirappalli, India",
    range: "2021 – 2023",
    courses: [
      "Object-Oriented Analysis & Design",
      "Advanced Java Programming",
      "Compiler Design",
      "Microprocessors & Microcontrollers",
      "Open Source Technologies",
      "Network Security",
      "Data Mining & Data Warehousing",
      "C# and .NET Framework",
      "Web Technologies",
    ],
  },
  {
    degree: "Bachelor of Science — Computer Science",
    institution: "A.V.V.M. Sri Pushpam College",
    location: "Poondi, India",
    range: "2015 – 2018",
    courses: [
      "Programming",
      "Data Structures",
      "Operating Systems",
      "Database Systems",
      "Networks",
      "Computer Architecture",
      "Software Engineering",
      "Web Technologies",
    ],
  },
];

export function Education() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="education" className="relative px-6 py-32 lg:pl-72">
      <div className="mx-auto max-w-5xl">
        <SectionLabel numeral="II" label="Education" />
        <h2 className="max-w-2xl font-display text-5xl leading-tight md:text-6xl">
          Roots of
          <span className="italic text-[var(--gold)]"> formal learning.</span>
        </h2>

        <div className="mt-14 space-y-4">
          {degrees.map((d, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={d.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass overflow-hidden rounded-2xl"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-5 px-6 py-5 text-left transition hover:bg-[var(--gold)]/5"
                  aria-expanded={isOpen}
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--gold)]/30 bg-[var(--moss)]/15 text-[var(--gold)]">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-xl text-foreground">
                      {d.degree}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      {d.institution} · {d.range}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-[var(--gold)]"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[var(--gold)]/15 px-6 py-6">
                        <div className="grid gap-4 text-xs text-muted-foreground sm:grid-cols-2">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3.5 w-3.5 text-[var(--gold)]" />
                            {d.location}
                          </div>
                          {d.advisor && (
                            <div className="flex items-center gap-2">
                              <User className="h-3.5 w-3.5 text-[var(--gold)]" />
                              Advisor: {d.advisor}
                            </div>
                          )}
                        </div>
                        <div className="mt-5">
                          <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--gold)]/80">
                            Selected Coursework
                          </div>
                          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                            {d.courses.map((c) => (
                              <li
                                key={c}
                                className="flex gap-2 text-xs text-foreground/85"
                              >
                                <span className="mt-1 inline-block h-1 w-1 rounded-full bg-[var(--gold)]" />
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
