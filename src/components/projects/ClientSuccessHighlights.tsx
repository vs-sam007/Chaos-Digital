"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, TrendingUp, Zap, Star } from "lucide-react";

const successPillars = [
  {
    icon: TrendingUp,
    title: "Proven ROI & Growth",
    description: "Every delivered system is designed with conversion funnels, rapid loading speed, and scalable architectures that directly grow client revenue.",
    badge: "Business Growth"
  },
  {
    icon: Zap,
    title: "Sub-100ms Performance",
    description: "We optimize database queries, client-side rendering, and global CDN edge routing to guarantee lightning-fast response times globally.",
    badge: "Speed Engineered"
  },
  {
    icon: ShieldCheck,
    title: "Production Stability",
    description: "Built with enterprise zero-downtime practices, automated offline buffers, and role-based data security for total reliability.",
    badge: "99.9% Uptime"
  },
  {
    icon: Award,
    title: "Tailored Architecture",
    description: "No generic templates. We build bespoke mobile apps, web applications, and custom SaaS platforms tailored precisely to client requirements.",
    badge: "100% Custom"
  }
];

const testimonials = [
  {
    quote: "Chaos Digital transformed our academy management overnight. Their offline-first desktop app keeps our 3 branches running smoothly even during local internet outages.",
    author: "Path Finder Defence Academy",
    role: "Leadership Team",
    project: "PFDA Management System"
  },
  {
    quote: "The Pandit Ji mobile app interface and real-time consultation engine exceeded our expectations. Onboarding 500+ verified pandits was seamless.",
    author: "Pandit Ji Services",
    role: "Founding Team",
    project: "Pandit Ji Mobile App"
  },
  {
    quote: "Sub-100ms property search speed and high-res listing galleries boosted our high-ticket real estate lead conversion significantly.",
    author: "Real Estate Premium",
    role: "Client Director",
    project: "Real Estate Premium"
  }
];

export default function ClientSuccessHighlights() {
  return (
    <section className="py-24 bg-[var(--color-amethyst)] text-[var(--color-ivory)] relative overflow-hidden">
      {/* Ambient Radial Backgrounds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-inter uppercase tracking-widest font-semibold mb-6">
            <Star className="w-3.5 h-3.5 fill-amber-300" />
            <span>Why Clients Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-white tracking-tight mb-6">
            Delivering Engineering Excellence
          </h2>
          <p className="text-white/80 font-light text-base md:text-lg">
            Our commitment to quality, speed, and real-world performance is why leading businesses trust Chaos Digital with their critical software products.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {successPillars.map((pillar, i) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-amber-400/20 text-amber-300 border border-amber-400/30">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-inter uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/10 text-white/70 font-semibold">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-light text-white/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials Carousel / Grid */}
        <div className="border-t border-white/10 pt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-playfair font-medium text-white mb-2">
              What Our Clients Say
            </h3>
            <p className="text-white/60 text-sm font-light uppercase tracking-wider">
              Feedback from recent project deliveries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between relative"
              >
                <div className="flex gap-1 text-amber-300 mb-4">
                  {[...Array(5)].map((_, starI) => (
                    <Star key={starI} className="w-4 h-4 fill-amber-300" />
                  ))}
                </div>
                <p className="text-white/90 font-light italic text-sm md:text-base leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white font-inter">{t.author}</h4>
                    <span className="text-[11px] text-white/60">{t.role}</span>
                  </div>
                  <span className="text-[10px] font-inter uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 font-semibold">
                    {t.project}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
