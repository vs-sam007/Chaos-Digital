"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ServiceData } from "@/data/services";
import * as Icons from "lucide-react";
import { ArrowUpRight, CheckCircle2, Grid, Layers, Sparkles } from "lucide-react";

interface ServiceGridProps {
  services: ServiceData[];
}

// Category mapping helper
function getServiceCategory(service: ServiceData): string {
  const slug = service.slug;
  if (
    slug.includes("website") || 
    slug.includes("software") || 
    slug.includes("ai") || 
    slug.includes("customised")
  ) {
    return "Web & Engineering";
  }
  if (
    slug.includes("shopify") || 
    slug.includes("e-commerce") || 
    slug.includes("chatbots")
  ) {
    return "E-Commerce & Storefronts";
  }
  if (
    slug.includes("paid") || 
    slug.includes("lead-generation") || 
    slug.includes("performance") || 
    slug.includes("sem") ||
    slug.includes("email")
  ) {
    return "Paid Growth & Leads";
  }
  return "Branding, Content & Creative";
}

export default function ServiceGrid({ services }: ServiceGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const counts: Record<string, number> = {
      All: services.length,
      "Web & Engineering": 0,
      "E-Commerce & Storefronts": 0,
      "Paid Growth & Leads": 0,
      "Branding, Content & Creative": 0,
    };

    services.forEach((s) => {
      const cat = getServiceCategory(s);
      counts[cat] = (counts[cat] || 0) + 1;
    });

    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, [services]);

  const filteredServices = useMemo(() => {
    if (activeCategory === "All") return services;
    return services.filter((s) => getServiceCategory(s) === activeCategory);
  }, [services, activeCategory]);

  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-6">
        
        {/* Section Title & Filter Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 border-b border-[var(--color-amethyst)]/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-amethyst)]/20 bg-[var(--color-amethyst)]/5 mb-4">
              <Grid className="w-3.5 h-3.5 text-[var(--color-amethyst)]" />
              <span className="text-[11px] font-inter uppercase tracking-widest text-[var(--color-amethyst)] font-bold">
                Capability Matrix
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-medium text-[var(--color-amethyst)] uppercase tracking-tight">
              Explore By <span className="italic text-[var(--color-amethyst)]/70 capitalize">Category</span>
            </h2>
          </div>

          <p className="font-inter text-sm text-[var(--color-amethyst)]/60 max-w-md font-light">
            Targeted digital solutions designed to scale your operations, build brand trust, and accelerate client acquisition.
          </p>
        </div>

        {/* Dynamic Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-start gap-3 mb-14">
          {categories.map(({ name, count }) => (
            <button
              key={name}
              onClick={() => setActiveCategory(name)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-inter tracking-wider uppercase font-bold transition-all duration-300 ${
                activeCategory === name 
                  ? "bg-[#2B135A] text-white shadow-lg shadow-purple-950/25 ring-2 ring-[#2B135A]/30 scale-105" 
                  : "bg-white/90 text-[#2B135A] hover:bg-[#2B135A]/10 border border-[#2B135A]/20 shadow-sm"
              }`}
            >
              <span className="flex items-center gap-2">
                <span>{name}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  activeCategory === name ? "bg-white/25 text-white" : "bg-[#2B135A]/10 text-[#2B135A]"
                }`}>
                  {count}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const IconComponent = (Icons as any)[service.iconName] || Icons.Code;
              const categoryLabel = getServiceCategory(service);

              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block h-full"
                  >
                    <div className="h-full rounded-[2.5rem] p-8 md:p-9 border border-[var(--color-amethyst)]/15 bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:border-[var(--color-amethyst)]/40 transition-all duration-500 flex flex-col justify-between relative overflow-hidden group-hover:-translate-y-2">
                      
                      {/* Top Glowing Ambient Orb */}
                      <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all pointer-events-none" />

                      <div>
                        {/* Header Badge & Icon */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-amethyst)] to-purple-950 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-purple-900 transition-transform duration-300">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>

                          <span className="text-[10px] font-inter uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--color-amethyst)]/5 border border-[var(--color-amethyst)]/10 text-[var(--color-amethyst)] font-bold">
                            {categoryLabel.split(" ")[0]}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="text-2xl font-playfair font-medium text-[var(--color-amethyst)] mb-3 group-hover:text-purple-950 transition-colors">
                          {service.title}
                        </h3>

                        <p className="font-inter text-xs text-[var(--color-amethyst)]/60 font-semibold mb-4 italic">
                          "{service.subtitle}"
                        </p>

                        <p className="font-inter text-sm font-light text-[var(--color-amethyst)]/80 leading-relaxed mb-6 line-clamp-3">
                          {service.description}
                        </p>
                      </div>

                      {/* Deliverables / Key Highlights Chips */}
                      <div>
                        <div className="pt-4 border-t border-[var(--color-amethyst)]/10 mb-6">
                          <div className="text-[10px] font-inter uppercase tracking-widest text-[var(--color-amethyst)]/50 font-bold mb-2">
                            Key Deliverables:
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {service.deliverables.slice(0, 3).map((item) => (
                              <span key={item} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[var(--color-amethyst)]/5 text-[11px] font-inter text-[var(--color-amethyst)] font-medium">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                <span>{item}</span>
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Card Footer Action */}
                        <div className="flex items-center justify-between pt-2">
                          <span className="text-xs font-inter font-bold uppercase tracking-wider text-[var(--color-amethyst)] group-hover:text-purple-900 transition-colors">
                            Explore Capabilities
                          </span>

                          <div className="w-9 h-9 rounded-full bg-[var(--color-amethyst)] text-white flex items-center justify-center group-hover:bg-purple-900 group-hover:scale-110 transition-all shadow-md">
                            <ArrowUpRight className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
