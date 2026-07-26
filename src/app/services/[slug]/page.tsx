import { servicesData } from "@/data/services";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";
import * as Icons from "lucide-react";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };
  
  return {
    title: `${service.title} | Chaos Digital`,
    description: service.description,
  };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  
  if (!service) {
    notFound();
  }

  // Dynamic icon mapping
  const IconComponent = (Icons as any)[service.iconName] || Icons.Code;

  return (
    <main className="bg-void min-h-screen text-offwhite font-inter selection:bg-white/20 selection:text-white">
      <Navigation />
      
      <div className="pt-32 pb-16 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto max-w-6xl">
          
          <div className="flex flex-wrap items-center gap-2 text-offwhite/50 mb-12 text-sm font-semibold uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{service.title}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-2/3">
              <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-8">
                 <IconComponent className="w-12 h-12 text-white/70" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-playfair font-medium uppercase tracking-tighter mb-6 leading-none">
                {service.title}
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-playfair italic text-white/50 mb-8">
                {service.subtitle}
              </h2>
              
              <p className="text-xl text-offwhite/70 font-light leading-relaxed mb-16">
                {service.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-3xl font-playfair font-medium uppercase tracking-tighter mb-8 border-b border-white/10 pb-4">
                    What's <span className="italic text-white/40 capitalize">Included</span>
                  </h3>
                  <ul className="space-y-4">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-0.5" />
                        <span className="text-lg text-offwhite/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-3xl font-playfair font-medium uppercase tracking-tighter mb-8 border-b border-white/10 pb-4">
                    The <span className="italic text-white/40 capitalize">Deliverables</span>
                  </h3>
                  <ul className="space-y-4">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-offwhite/50 shrink-0 mt-0.5" />
                        <span className="text-lg text-offwhite/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
            </div>
            
            {/* Sidebar CTA */}
            <div className="w-full lg:w-1/3 sticky top-32">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center">
                <h3 className="text-3xl font-playfair font-medium uppercase tracking-tighter mb-4">
                  Ready to <span className="italic text-white/40 capitalize">Dominate?</span>
                </h3>
                <p className="text-offwhite/60 mb-8 font-inter">
                  Get a custom proposal and audit for your {service.title} strategy within 48 hours.
                </p>
                <Link 
                  href="/#contact" 
                  className="w-full py-4 border border-white text-white font-inter font-bold uppercase tracking-wider rounded-xl hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group"
                >
                  Book Discovery Call
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
