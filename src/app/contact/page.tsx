import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Digital Marketing Agency in Lucknow | Chaos Digital",
  description: "Get in touch with Chaos Digital, Lucknow's premium digital marketing and AI automation agency. Start your project today.",
  alternates: {
    canonical: "https://chaosdigital.in/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[var(--color-ivory)] min-h-screen text-void font-inter selection:bg-void/20 selection:text-[var(--color-ivory)] pt-20">
      <Navigation />
      <Contact />
      <Footer />
    </main>
  );
}
