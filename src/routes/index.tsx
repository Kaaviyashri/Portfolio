import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/portfolio/Sidebar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Research } from "@/components/portfolio/Research";
import { Publications } from "@/components/portfolio/Publications";
import { Presentations } from "@/components/portfolio/Presentations";
import { Projects } from "@/components/portfolio/Projects";
import { Awards } from "@/components/portfolio/Awards";
import { Certifications } from "@/components/portfolio/Certifications";
import { Skills } from "@/components/portfolio/Skills";
import { Vision } from "@/components/portfolio/Vision";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Kaaviyashri Saraboji — AI Researcher · Trustworthy AI · Future PhD",
      },
      {
        name: "description",
        content:
          "Portfolio of Kaaviyashri Saraboji — graduate researcher in trustworthy AI, healthcare AI, computer vision, and wildlife analytics. Publications, research, projects, presentations, and academic profile.",
      },
      {
        property: "og:title",
        content: "Kaaviyashri Saraboji — The Intelligent Forest",
      },
      {
        property: "og:description",
        content:
          "An AI researcher's portfolio across trustworthy machine learning, healthcare AI, wildlife conservation, and academic research.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <Sidebar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Research />
      <Publications />
      <Presentations />
      <Projects />
      <Awards />
      <Certifications />
      <Skills />
      <Vision />
      <Contact />
    </main>
  );
}
