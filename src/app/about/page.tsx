import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-void min-h-screen text-offwhite font-inter selection:bg-white/20 selection:text-white pt-20">
      <Navigation />
      <About />
      <Process />
      <Footer />
    </main>
  );
}
