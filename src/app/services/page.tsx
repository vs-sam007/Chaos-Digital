import { servicesData } from "@/data/services";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceGrid from "@/components/services/ServiceGrid";
import ServicesProcess from "@/components/services/ServicesProcess";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata = {
  title: "Complete Digital Arsenal | Services | Chaos Digital",
  description: "End-to-End Digital Engineering, Software Development, E-Commerce, Paid Marketing, and AI Automations for MSMEs, Startups & Global Enterprises.",
};

export default function ServicesIndexPage() {
  return (
    <main className="min-h-screen bg-[var(--color-ivory)] selection:bg-[var(--color-amethyst)] selection:text-[var(--color-ivory)] font-inter text-[var(--color-amethyst)] relative overflow-hidden">
      <Navigation />
      
      {/* Services Hero Header */}
      <ServiceHero totalServices={servicesData.length} />

      {/* Interactive Services Grid with Category Filters */}
      <ServiceGrid services={servicesData} />

      {/* Strategic Engineering Process */}
      <ServicesProcess />

      {/* Bottom Conversion CTA */}
      <ServicesCTA />

      <Footer />
    </main>
  );
}
