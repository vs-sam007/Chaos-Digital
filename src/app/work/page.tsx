import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WorkHero from "@/components/work/WorkHero";
import FeaturedProject from "@/components/work/FeaturedProject";
import CTOBanner from "@/components/work/CTOBanner";
import ProjectGrid from "@/components/work/ProjectGrid";
import BottomCTA from "@/components/work/BottomCTA";

export const metadata: Metadata = {
  title: "Our Work | Digital Marketing Portfolio | Chaos Digital",
  description: "Explore how Chaos Digital has helped ambitious businesses in Lucknow and beyond build premium digital experiences and accelerate growth.",
  alternates: {
    canonical: "https://chaosdigital.in/work",
  },
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
