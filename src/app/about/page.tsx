import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[var(--color-ivory)] min-h-screen text-void font-inter selection:bg-void/20 selection:text-[var(--color-ivory)] pt-20">
      <Navigation />
      <About />
      <Process />
      <Footer />
    </main>
  );
}
