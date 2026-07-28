import { servicesData } from "@/data/services";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import * as Icons from "lucide-react";

export const metadata = {
  title: "All Services | Chaos Digital",
  description: "End-to-End Digital Marketing Solutions for MSMEs, Startups & D2C Brands.",
};

export default function ServicesIndexPage() {
  return (
    <main className="bg-[var(--color-ivory)] min-h-screen text-void font-inter selection:bg-void/20 selection:text-[var(--color-ivory)]">
      <Navigation />
      
      <div className="pt-32 pb-16 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto">
          
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-5xl md:text-8xl font-playfair font-medium uppercase tracking-tighter mb-6 leading-none">
              Complete <br/><span className="italic text-void/40 capitalize">Arsenal</span>
            </h1>
            <p className="text-xl text-void/70 font-light leading-relaxed">
              End-to-End Digital Marketing Solutions for MSMEs, Startups & D2C Brands. We don't just execute tasks; we engineer revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
              const IconComponent = (Icons as any)[service.iconName] || Icons.Code;
              
              return (
                <Link 
                  key={service.id} 
                  href={`/services/${service.slug}`}
                  className="group block h-full"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="h-full bg-white/40 backdrop-blur-xl border border-[var(--color-amethyst)]/10 rounded-[2rem] p-10 relative overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(40,10,60,0.1)] hover:bg-white/80 hover:border-[var(--color-amethyst)]/30 group">
                    
                    {/* Premium Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-amethyst)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-16 h-16 bg-[var(--color-amethyst)]/5 border border-[var(--color-amethyst)]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[var(--color-amethyst)] group-hover:text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm">
                         <IconComponent className="w-7 h-7 text-[var(--color-amethyst)] group-hover:text-white transition-colors duration-500" />
                      </div>
                      
                      <h3 className="text-2xl font-playfair font-medium uppercase tracking-tighter mb-4 text-[var(--color-amethyst)]">
                        {service.title}
                      </h3>
                      
                      <p className="text-[var(--color-amethyst)]/60 font-light line-clamp-3 mb-8 font-inter leading-relaxed flex-grow">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center justify-between w-full mt-auto">
                        <div className="text-sm font-inter font-semibold uppercase tracking-widest text-[var(--color-amethyst)]/40 group-hover:text-[var(--color-amethyst)] transition-colors duration-300">
                          Explore
                        </div>
                        <div className="w-10 h-10 rounded-full border border-[var(--color-amethyst)]/20 flex items-center justify-center group-hover:bg-[var(--color-amethyst)] group-hover:border-transparent transition-all duration-500 overflow-hidden">
                          <ArrowUpRight className="w-5 h-5 text-[var(--color-amethyst)] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                        </div>
                      </div>
                    </div>

                  </div>
                </Link>
              );
            })}
          </div>
          
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
