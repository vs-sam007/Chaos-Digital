import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WorkHero from "@/components/work/WorkHero";
import FeaturedProject from "@/components/work/FeaturedProject";
import CTOBanner from "@/components/work/CTOBanner";
import ProjectGrid from "@/components/work/ProjectGrid";
import BottomCTA from "@/components/work/BottomCTA";

export const metadata = {
  title: "Our Work | Chaos Digital",
  description: "Explore how we've helped ambitious businesses build premium digital experiences, improve performance and accelerate growth.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[var(--color-ivory)] selection:bg-[var(--color-amethyst)] selection:text-[var(--color-ivory)]">
      <Navigation />
      <WorkHero />
      <FeaturedProject />
      <CTOBanner />
      <ProjectGrid />
      <BottomCTA />
      <Footer />
    </main>
  );
}
