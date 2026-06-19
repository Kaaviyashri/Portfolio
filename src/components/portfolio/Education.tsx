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
      "Artificial Intelligence",
      "Data Science",
      "Software Development Project",
      "Software Design",
      "Software Verification & Validation",
      "Software Project Management",
      "Software Modeling & Analysis",
      "Fundamentals of Information Security",
      "Programming Language Concepts",
    ],
  },
  {
    degree: "Master of Science — Computer Science",
    institution: "Bharathidasan University",
    location: "India",
    range: "June 2021 – May 2023",
    courses: [
      "Object-Oriented Analysis & Design (OOAD) and UML",
      "Advanced Java Programming",
      "Compiler Design",
      "Microprocessors & Microcontrollers",
      "Open Source Technologies",
      "Network Security",
      "Data Mining & Data Warehousing",
      "C# and .NET Framework",
      "Web Technologies & Open Source Labs",
      "Major Software Project",
    ],
  },
  {
    degree: "Bachelor of Science — Computer Science",
    institution: "A.V.V.M. Sri Pushpam College",
    location: "India",
    range: "June 2015 – May 2018",
    courses: [
      "Problem Solving & Programming",
      "C, C++ and Java Programming",
      "Data Structures",
      "Operating Systems",
      "Database Management Systems",
      "Data Communication Networks",
      "Computer Architecture & Microprocessor",
      "Web Media I & II",
      "Software Engineering",
      "Computer Graphics",
      "Soft Skills Development",
    ],
  },
];

export function Education() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="education"
      className="relative overflow-hidden px-6 py-32 lg:pl-72"
    >
      {/* Floating Forest Particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-[var(--gold)]/30 blur-[1px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.15, 0.8, 0.15],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionLabel numeral="II" label="Education" />

        <h2 className="max-w-2xl font-display text-5xl leading-tight md:text-6xl">
          Roots of
          <span className="italic text-[var(--gold)]"> Discovery.</span>
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
                className={`glass overflow-hidden rounded-2xl transition-all duration-500 ${
                  isOpen
                    ? "border border-[var(--gold)]/20 shadow-[0_0_40px_rgba(212,175,55,0.12)]"
                    : ""
                }`}
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
                    transition={{ duration: 0.3 }}
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
                      transition={{
                        duration: 0.35,
                        ease: "easeOut",
                      }}
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