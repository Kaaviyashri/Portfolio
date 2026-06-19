import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/portfolio/Sidebar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Research } from "@/components/portfolio/Research";
import { Projects } from "@/components/portfolio/Projects";
import { Awards } from "@/components/portfolio/Awards";
import { Certifications } from "@/components/portfolio/Certifications";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Kaaviyashri Saraboji — AI Engineer · Healthcare AI · Trustworthy AI",
      },
      {
        name: "description",
        content:
          "Portfolio of Kaaviyashri Saraboji — AI Engineer and researcher working across healthcare AI, trustworthy AI, computer vision, machine learning, and intelligent systems.",
      },
      {
        property: "og:title",
        content: "Kaaviyashri Saraboji — The Intelligent Forest",
      },
      {
        property: "og:description",
        content:
          "An AI Engineer portfolio across trustworthy AI, healthcare AI, computer vision, wildlife analytics, publications, and engineering projects.",
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
      <Projects />
      <Awards />
      <Certifications />
      <Skills />
      <Contact />
    </main>
  );
}