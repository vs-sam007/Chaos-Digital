import Navigation from "@/components/Navigation";
import AboutPageHero from "@/components/about/AboutPageHero";
import AboutWhatWeDo from "@/components/about/AboutWhatWeDo";
import AboutMission from "@/components/about/AboutMission";
import AboutWhyUs from "@/components/about/AboutWhyUs";
import AboutPromiseCTA from "@/components/about/AboutPromiseCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Chaos Digital Solutions",
  description: "Learn about Chaos Digital Solutions — Full-service digital marketing agency based in Lucknow, Uttar Pradesh, serving clients across India.",
};

export default function AboutPage() {
  return (
    <main className="bg-[var(--color-ivory)] min-h-screen text-[var(--color-amethyst)] font-inter selection:bg-[var(--color-amethyst)] selection:text-[var(--color-ivory)] relative overflow-hidden">
      <Navigation />
      <AboutPageHero />
      <AboutWhatWeDo />
      <AboutMission />
      <AboutWhyUs />
      <AboutPromiseCTA />
      <Footer />
    </main>
  );
}
