import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CurvedCarousel from "@/components/CurvedCarousel";
import Process from "@/components/Process";
import Services from "@/components/Services";
import StatsReveal from "@/components/StatsReveal";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-void min-h-screen text-offwhite font-inter selection:bg-white/20 selection:text-white">
      <Navigation />
      <Hero />
      <About />
      <CurvedCarousel />
      <Process />
      <Services />
      <StatsReveal />
      <PricingSection />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
