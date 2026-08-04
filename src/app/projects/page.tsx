import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectsHero from "@/components/projects/ProjectsHero";
import DeliveredProjectsGrid from "@/components/projects/DeliveredProjectsGrid";
import ClientSuccessHighlights from "@/components/projects/ClientSuccessHighlights";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

export const metadata = {
  title: "Delivered Client Projects | Chaos Digital",
  description: "Explore our archive of delivered client projects, custom mobile applications, web platforms, and enterprise software built for real-world growth.",
};

export default function DeliveredProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-ivory)] selection:bg-[var(--color-amethyst)] selection:text-[var(--color-ivory)]">
      <Navigation />
      <ProjectsHero />
      <DeliveredProjectsGrid />
      <ClientSuccessHighlights />
      <ProjectsCTA />
      <Footer />
    </main>
  );
}
