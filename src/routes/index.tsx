import { createFileRoute } from "@tanstack/react-router";
import { Sidebar } from "@/components/portfolio/Sidebar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Journey } from "@/components/portfolio/Journey";
import { Research } from "@/components/portfolio/Research";
import { Projects } from "@/components/portfolio/Projects";
import { Publications } from "@/components/portfolio/Publications";
import { Awards } from "@/components/portfolio/Awards";
import { Vision } from "@/components/portfolio/Vision";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaaviyashri Saraboji — AI Engineer · AI Researcher · Future PhD" },
      {
        name: "description",
        content:
          "Portfolio of Kaaviyashri Saraboji — building trustworthy AI for healthcare, wildlife conservation, and public safety. Research, projects, publications, and vision.",
      },
      { property: "og:title", content: "Kaaviyashri Saraboji — The Intelligent Forest" },
      {
        property: "og:description",
        content:
          "An AI researcher's journey through trustworthy machine learning, healthcare AI, and wildlife conservation.",
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
      <Journey />
      <Research />
      <Projects />
      <Publications />
      <Awards />
      <Vision />
      <Contact />
    </main>
  );
}
