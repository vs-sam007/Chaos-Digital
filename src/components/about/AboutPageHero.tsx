"use client";

import { motion } from "framer-motion";
import { Sparkles, MapPin, Building2, Rocket, Layers } from "lucide-react";

export default function AboutPageHero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 bg-transparent overflow-hidden border-b border-[var(--color-amethyst)]/10">
      {/* Background Ambient Glow Effects */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div 
          className="absolute top-10 right-[-10%] w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[150px] animate-pulse" 
          style={{ animationDuration: '8s' }} 
        />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[130px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[var(--color-amethyst)]/20 bg-white/60 backdrop-blur-md shadow-sm mb-8"
          >
            <MapPin className="w-4 h-4 text-purple-600" />
            <span className="text-xs md:text-sm font-inter uppercase tracking-[0.2em] text-[var(--color-amethyst)] font-bold">
              Lucknow, Uttar Pradesh • Serving Clients Across India
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair font-medium text-[var(--color-amethyst)] leading-[1.02] tracking-tighter uppercase mb-10"
          >
            ABOUT <br />
            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-amethyst)] via-purple-700 to-indigo-900">
              CHAOS DIGITAL
            </span> <br />
            SOLUTIONS
          </motion.h1>

          {/* Intro Story Blocks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-left md:text-center text-lg sm:text-xl md:text-2xl text-[var(--color-amethyst)]/90 font-light leading-relaxed max-w-3xl"
          >
            <p className="bg-white/40 p-6 sm:p-8 rounded-3xl border border-[var(--color-amethyst)]/10 backdrop-blur-sm shadow-sm">
              At Chaos Digital Solutions, we believe every business — whether it&apos;s a local shop, a growing startup, or a D2C brand — deserves marketing that actually works, not just marketing that looks good on paper.
            </p>
            
            <p className="p-6 sm:p-8 rounded-3xl bg-[var(--color-amethyst)] text-[var(--color-ivory)] shadow-xl border border-white/10 leading-relaxed font-normal">
              We&apos;re a full-service <strong className="font-semibold text-amber-300">digital marketing agency based in Lucknow, Uttar Pradesh, serving clients across India</strong>. Born out of a simple frustration — that quality digital marketing was either too expensive, too fragmented, or too slow for growing businesses — we built Chaos Digital Solutions to be different: one team, one dashboard, and end-to-end execution under a single roof.
            </p>
          </motion.div>

          {/* Highlights Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-12 p-6 rounded-2xl bg-white/70 border border-[var(--color-amethyst)]/15 backdrop-blur-xl shadow-lg"
          >
            <div className="flex flex-col items-center text-center p-3">
              <Building2 className="w-6 h-6 text-purple-600 mb-2" />
              <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-amethyst)]">Lucknow Based</span>
              <span className="text-[11px] text-[var(--color-amethyst)]/60 font-medium mt-0.5">Uttar Pradesh HQ</span>
            </div>
            <div className="flex flex-col items-center text-center p-3">
              <Rocket className="w-6 h-6 text-amber-500 mb-2" />
              <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-amethyst)]">Pan-India Reach</span>
              <span className="text-[11px] text-[var(--color-amethyst)]/60 font-medium mt-0.5">Serving Nationally</span>
            </div>
            <div className="flex flex-col items-center text-center p-3">
              <Layers className="w-6 h-6 text-indigo-600 mb-2" />
              <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-amethyst)]">End-to-End</span>
              <span className="text-[11px] text-[var(--color-amethyst)]/60 font-medium mt-0.5">Single Roof Team</span>
            </div>
            <div className="flex flex-col items-center text-center p-3">
              <Sparkles className="w-6 h-6 text-purple-600 mb-2" />
              <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-amethyst)]">Real ROI</span>
              <span className="text-[11px] text-[var(--color-amethyst)]/60 font-medium mt-0.5">Growth Engine</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
