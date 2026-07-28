import { servicesData } from "@/data/services";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";
import * as Icons from "lucide-react";
import { Spotlight } from "@/components/core/spotlight";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);
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

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);
  
  if (!service) {
    notFound();
  }

  // Dynamic icon mapping
  const IconComponent = (Icons as any)[service.iconName] || Icons.Code;

  return (
    <main className="bg-[var(--color-ivory)] min-h-screen text-void font-inter selection:bg-[var(--color-amethyst)] selection:text-[var(--color-ivory)] relative overflow-hidden">
      <Navigation />
      
      {/* Ambient Background Mesh */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <Spotlight className="from-accent1 via-accent2 to-accent3 blur-3xl opacity-20" size={500} />
        <div className="absolute top-[0%] right-[-5%] w-[60vw] h-[60vw] bg-accent2/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-[40%] left-[-10%] w-[50vw] h-[50vw] bg-accent1/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="pt-32 pb-24 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
          
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-3 text-[var(--color-amethyst)]/50 mb-16 text-xs font-semibold uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-[var(--color-amethyst)] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-[var(--color-amethyst)] transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[var(--color-amethyst)]">{service.title}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-20 items-start">
            {/* Main Content Area */}
            <div className="w-full lg:w-2/3">
              
              {/* Header */}
              <div className="mb-16">
                <div className="w-24 h-24 bg-gradient-to-br from-accent1/10 to-accent2/10 border border-[var(--color-amethyst)]/10 rounded-3xl flex items-center justify-center mb-10 shadow-sm relative group overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-tr from-accent1/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <IconComponent className="w-10 h-10 text-accent1 group-hover:scale-110 transition-transform duration-500 relative z-10" />
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-[80px] font-playfair font-medium uppercase tracking-tighter mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-[var(--color-amethyst)] to-[#E0FF5F] inline-block py-2 pr-6">{service.title}</span>
                </h1>
                
                <h2 className="text-2xl md:text-4xl font-playfair italic text-[var(--color-amethyst)]/60 mb-10 leading-tight">
                  {service.subtitle}
                </h2>
                
                <p className="text-xl md:text-2xl text-[var(--color-amethyst)]/80 font-light leading-relaxed max-w-3xl">
                  {service.description}
                </p>
              </div>

              {/* Lists Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
                
                {/* Includes */}
                <div className="bg-white/40 backdrop-blur-xl border border-[var(--color-amethyst)]/10 rounded-[2rem] p-10 shadow-[0_10px_40px_-20px_rgba(40,10,60,0.1)]">
                  <h3 className="text-2xl font-playfair font-medium uppercase tracking-tighter mb-8 border-b border-[var(--color-amethyst)]/10 pb-6 text-[var(--color-amethyst)]">
                    What's <span className="italic text-[var(--color-amethyst)]/50 capitalize">Included</span>
                  </h3>
                  <ul className="space-y-5">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 group">
                        <CheckCircle2 className="w-6 h-6 text-accent2 shrink-0 mt-0.5 group-hover:scale-110 group-hover:text-accent1 transition-all duration-300" />
                        <span className="text-lg text-[var(--color-amethyst)]/80 group-hover:text-[var(--color-amethyst)] transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="bg-white/40 backdrop-blur-xl border border-[var(--color-amethyst)]/10 rounded-[2rem] p-10 shadow-[0_10px_40px_-20px_rgba(40,10,60,0.1)]">
                  <h3 className="text-2xl font-playfair font-medium uppercase tracking-tighter mb-8 border-b border-[var(--color-amethyst)]/10 pb-6 text-[var(--color-amethyst)]">
                    The <span className="italic text-[var(--color-amethyst)]/50 capitalize">Deliverables</span>
                  </h3>
                  <ul className="space-y-5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 group">
                        <div className="w-6 h-6 rounded-full border border-[var(--color-amethyst)]/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[var(--color-amethyst)] transition-colors">
                          <div className="w-2 h-2 bg-[var(--color-amethyst)]/30 rounded-full group-hover:bg-[var(--color-amethyst)] transition-colors" />
                        </div>
                        <span className="text-lg text-[var(--color-amethyst)]/80 group-hover:text-[var(--color-amethyst)] transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* SEO Content Block */}
              <div className="pt-16 border-t border-[var(--color-amethyst)]/10">
                <h3 className="text-3xl md:text-5xl font-playfair font-medium uppercase tracking-tighter mb-10 text-[var(--color-amethyst)]">
                  Why Choose Chaos Digital for <br/><span className="italic text-[var(--color-amethyst)]/50">{service.title}</span>?
                </h3>
                <div className="prose prose-lg text-[var(--color-amethyst)]/70 font-light leading-relaxed max-w-none">
                  <p className="mb-6 text-xl">
                    In today’s hyper-competitive digital landscape, relying on mediocre strategies is a guaranteed way to lose market share. At Chaos Digital, our <strong className="text-[var(--color-amethyst)] font-medium">{service.title}</strong> services are specifically engineered to bypass the noise and deliver measurable, high-impact results. We don't just execute tasks; we build scalable digital systems that align with your overarching business objectives. By leveraging the latest industry trends, cutting-edge technologies, and data-driven insights, we ensure that your brand not only stands out but absolutely dominates your sector.
                  </p>
                  <p className="mb-6 text-xl">
                    What sets our <strong className="text-[var(--color-amethyst)] font-medium">{service.title}</strong> solutions apart is our commitment to absolute premium quality and ROI-focused execution. Whether you are a startup looking to make a massive initial impact or an established enterprise aiming to optimize your conversion funnels, our bespoke approach ensures maximum efficiency. Our team of experts takes the time to understand your unique challenges, crafting tailored {service.title.toLowerCase()} strategies that turn visitors into loyal customers, accelerate your growth, and elevate your brand's digital presence to award-winning standards.
                  </p>
                </div>
              </div>

            </div>
            
            {/* Sidebar CTA - Premium Card */}
            <div className="w-full lg:w-1/3 sticky top-32">
              <div className="bg-[var(--color-amethyst)] text-white rounded-[2rem] p-10 relative overflow-hidden shadow-[0_20px_50px_-15px_rgba(40,10,60,0.5)] group">
                
                {/* Background glow in the CTA */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent2 to-accent1 rounded-2xl flex items-center justify-center mb-8 shadow-lg relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                     <Icons.Rocket className="w-8 h-8 text-white relative z-10" />
                  </div>
                  
                  <h3 className="text-4xl font-playfair font-medium uppercase tracking-tighter mb-6 leading-tight text-white">
                    <span className="text-[#E0FF5F]">Ready to</span> <br/><span className="italic capitalize">Dominate?</span>
                  </h3>
                  
                  <p className="text-white/80 mb-10 font-light leading-relaxed text-lg">
                    Get a custom proposal, roadmap, and expert audit for your <span className="font-semibold text-white">{service.title}</span> strategy within 48 hours.
                  </p>
                  
                  <Link 
                    href="/contact" 
                    className="w-full py-5 bg-accent2 text-[var(--color-amethyst)] font-inter font-bold uppercase tracking-widest text-sm rounded-xl hover:shadow-[0_0_30px_rgba(var(--color-accent2-rgb),0.5)] hover:bg-white hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Book Discovery Call
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
