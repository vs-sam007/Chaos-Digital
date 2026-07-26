import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="bg-void min-h-screen text-offwhite font-inter selection:bg-white/20 selection:text-white pt-20">
      <Navigation />
      <Contact />
      <Footer />
    </main>
  );
}
