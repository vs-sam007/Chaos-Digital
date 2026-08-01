"use client";

import { motion } from "framer-motion";
import { 
  Layers, 
  ShieldCheck, 
  UserCheck, 
  Zap, 
  BarChart3, 
  SlidersHorizontal 
} from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "True End-to-End Service",
    description: "no outsourcing, no juggling five different vendors. Strategy, design, execution, and reporting — all in-house.",
    highlight: "All In-House"
  },
  {
    icon: ShieldCheck,
    title: "Transparent, Affordable Pricing",
    description: "no hidden costs, no confusing contracts.",
    highlight: "Zero Hidden Fees"
  },
  {
    icon: UserCheck,
    title: "Dedicated Account Manager",
    description: "a real person who knows your business, always.",
    highlight: "Personal Touch"
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "most requests actioned within 24–72 hours.",
    highlight: "24–72 Hours"
  },
  {
    icon: BarChart3,
    title: "Data-Driven, Not Guesswork",
    description: "every decision backed by analytics and real performance data.",
    highlight: "Real Analytics"
  },
  {
    icon: SlidersHorizontal,
    title: "Custom, Flexible Plans",
    description: "built around your goals and budget, not a rigid template.",
    highlight: "Tailored For You"
  }
];

export default function AboutWhyUs() {
  return (
    <section className="relative py-24 md:py-32 bg-transparent overflow-hidden border-t border-[var(--color-amethyst)]/10">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-amethyst)]/20 bg-white/60 text-xs font-inter uppercase tracking-[0.2em] font-bold text-[var(--color-amethyst)] mb-4"
          >
            THE CHAOS DIGITAL DIFFERENCE
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-playfair font-medium uppercase tracking-tight text-[var(--color-amethyst)] leading-none mb-6"
          >
            WHY BUSINESSES CHOOSE US
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-[var(--color-amethyst)]/80 font-light max-w-2xl mx-auto"
          >
            Built from the ground up to solve the real-world frustrations of modern business growth.
          </motion.p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-[var(--color-amethyst)]/15 shadow-lg hover:shadow-2xl hover:border-[var(--color-amethyst)]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-[var(--color-amethyst)] flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-amethyst)] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-[var(--color-amethyst)]/5 text-[var(--color-amethyst)]">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-2xl font-playfair font-bold text-[var(--color-amethyst)] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-base text-[var(--color-amethyst)]/80 font-inter font-light leading-relaxed">
                    — {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--color-amethyst)]/10 text-xs font-semibold uppercase tracking-wider text-[var(--color-amethyst)]/50">
                  Feature Standard
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
