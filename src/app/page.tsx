import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Showcase from "@/components/Showcase";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AndroidDock from "@/components/AndroidDock";
import ParallaxDivider from "@/components/ParallaxDivider";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <main className="bg-void min-h-screen text-offwhite overflow-x-hidden">
      <Navigation />
      <Hero />
      <LogoMarquee />
      <Services />
      <About />
      <WhyUs />
      <ParallaxDivider 
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2560" 
        height="70vh" 
        title="Push Boundaries"
      />
      <Showcase />
      <Portfolio />
      <LogoMarquee />
      <Process />
      <ParallaxDivider 
        src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2560" 
        height="70vh" 
        title="Defy Gravity"
      />
      <PricingSection />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <AndroidDock />
    </main>
  );
}
