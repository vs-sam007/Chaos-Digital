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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => {
              const IconComponent = (Icons as any)[service.iconName] || Icons.Code;
              
              return (
                <Link 
                  key={service.id} 
                  href={`/services/${service.slug}`}
                  className="group block"
                >
                  <div className="h-full bg-void/5 border border-void/10 rounded-3xl p-8 relative overflow-hidden transition-all duration-300 hover:border-void/30 hover:bg-void/10">
                    <div className="w-16 h-16 bg-void/5 border border-void/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                       <IconComponent className="w-8 h-8 text-void/70" />
                    </div>
                    
                    <h3 className="text-2xl font-playfair font-medium uppercase tracking-tighter mb-4 group-hover:text-[var(--color-amethyst)] transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-void/60 font-light line-clamp-3 mb-6 font-inter">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm font-inter font-bold uppercase tracking-wider text-void/80 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Explore Service
                      <ArrowUpRight className="w-4 h-4" />
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
