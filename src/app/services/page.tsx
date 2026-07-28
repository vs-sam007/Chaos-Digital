import { servicesData } from "@/data/services";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import * as Icons from "lucide-react";
import { Spotlight } from "@/components/core/spotlight";

export const metadata = {
  title: "All Services | Chaos Digital",
  description: "End-to-End Digital Marketing Solutions for MSMEs, Startups & D2C Brands.",
};

export default function ServicesIndexPage() {
  return (
    <main className="bg-[var(--color-ivory)] min-h-screen text-[var(--color-amethyst)] font-inter selection:bg-[var(--color-amethyst)]/20 selection:text-[var(--color-amethyst)] relative overflow-hidden">
      <Navigation />
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <Spotlight className="from-accent1 via-accent2 to-accent3 blur-3xl opacity-20" size={500} />
        <div className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] bg-accent2/15 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[20%] left-[-10%] w-[40vw] h-[40vw] bg-accent1/15 rounded-full blur-[100px] mix-blend-multiply" />
      </div>
      
      <div className="pt-32 pb-16 md:pt-48 md:pb-32 px-6 relative z-10">
        <div className="container mx-auto">
          
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-5xl md:text-8xl font-playfair font-medium uppercase tracking-tighter mb-6 leading-tight">
              Complete <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-amethyst)] to-[#E0FF5F] italic capitalize inline-block py-2 pr-6 drop-shadow-sm">Arsenal</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-amethyst)] font-light leading-relaxed max-w-3xl mx-auto">
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
                  <div className="h-full bg-[var(--color-amethyst)] backdrop-blur-xl border border-[var(--color-amethyst)]/20 rounded-[2rem] p-10 relative overflow-hidden transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_20px_50px_-15px_rgba(var(--color-accent1-rgb),0.3)] hover:bg-[var(--color-amethyst)]/95 hover:border-accent1/50 group text-white">
                    
                    {/* Premium Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent1/10 via-transparent to-accent2/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:from-accent1 group-hover:to-accent2 group-hover:border-transparent transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm">
                         <IconComponent className="w-7 h-7 text-white transition-colors duration-500" />
                      </div>
                      
                      <h3 className="text-2xl font-playfair font-medium uppercase tracking-tighter mb-4 text-white">
                        {service.title}
                      </h3>
                      
                      <p className="text-white/70 font-light line-clamp-3 mb-8 font-inter leading-relaxed flex-grow">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center justify-between w-full mt-auto">
                        <div className="text-sm font-inter font-semibold uppercase tracking-widest text-white/50 group-hover:text-accent2 transition-colors duration-300">
                          Explore
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent2 group-hover:border-transparent transition-all duration-500 overflow-hidden">
                          <ArrowUpRight className="w-5 h-5 text-white group-hover:text-[var(--color-amethyst)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
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
