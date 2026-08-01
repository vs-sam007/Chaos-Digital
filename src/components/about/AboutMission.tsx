"use client";

import { motion } from "framer-motion";
import { Compass, Sparkles, Quote } from "lucide-react";

export default function AboutMission() {
  return (
    <section className="relative py-20 md:py-28 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] bg-[var(--color-amethyst)] text-[var(--color-ivory)] p-10 sm:p-14 md:p-20 shadow-2xl overflow-hidden border border-white/10"
          >
            {/* Background Ambient Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">
              
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8">
                <Compass className="w-4 h-4 text-amber-300" />
                <span className="text-xs uppercase tracking-[0.25em] text-white font-bold font-inter">
                  CORE DRIVING FORCE
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-playfair font-medium uppercase tracking-tight text-white mb-8">
                OUR MISSION
              </h2>

              {/* Quote Graphic Icon */}
              <Quote className="w-12 h-12 text-amber-300/40 mb-6" />

              {/* Mission Statement Paragraph */}
              <p className="text-2xl sm:text-3xl md:text-4xl font-playfair font-light text-white/95 leading-relaxed max-w-4xl tracking-tight mb-8">
                To make enterprise-grade digital marketing{" "}
                <span className="font-semibold text-amber-300 underline decoration-amber-300/40 underline-offset-8">
                  accessible, affordable, and result-driven
                </span>{" "}
                for every business — big or small. We don&apos;t believe growth should be reserved for brands with the biggest budgets.
              </p>

              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
