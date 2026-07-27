import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import About from "@/components/About";
import CurvedCarousel from "@/components/CurvedCarousel";
import Process from "@/components/Process";
import Services from "@/components/Services";
import StatsReveal from "@/components/StatsReveal";
import PricingSection from "@/components/PricingSection";
import TextMarquee from "@/components/TextMarquee";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-transparent min-h-screen text-[var(--color-amethyst)] font-inter">
      <Navigation />
      <Hero />
      <LogoMarquee />
      <About />
      <CurvedCarousel />
      <Process />
      <Services />
      <StatsReveal />
      <PricingSection />
      <TextMarquee />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
