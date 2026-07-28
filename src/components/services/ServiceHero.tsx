"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal, ArrowUpRight, Zap, ShieldCheck, Cpu, Layers } from "lucide-react";
import MagneticButton from "../MagneticButton";
import Link from "next/link";

interface ServiceHeroProps {
  totalServices: number;
}

export default function ServiceHero({ totalServices }: ServiceHeroProps) {
  return (
    <section className="relative pt-36 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-transparent">
      
      {/* Ambient Lighting & Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-10 right-[-5%] w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '7s' }} />
        <div className="absolute bottom-0 left-[-5%] w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--color-amethyst)]/20 bg-[var(--color-amethyst)]/5 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[var(--color-amethyst)]" />
              <span className="text-xs font-inter uppercase tracking-[0.2em] text-[var(--color-amethyst)] font-bold">
                End-to-End Digital Engineering ({totalServices} Capabilities)
              </span>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-amethyst)]/30 bg-[var(--color-amethyst)] text-[var(--color-ivory)] hover:bg-purple-900 transition-colors shadow-md text-xs font-inter uppercase tracking-wider font-bold"
            >
              <span>Request Custom Proposal</span>
              <span className="text-amber-300">↗</span>
            </Link>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-playfair font-medium text-[var(--color-amethyst)] leading-[0.95] tracking-tighter uppercase mb-8"
          >
            COMPLETE DIGITAL <br />
            <span className="italic text-purple-900 font-light capitalize text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-amethyst)] via-purple-700 to-indigo-900">
              ARSENAL.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-inter text-lg sm:text-xl md:text-2xl text-[var(--color-amethyst)]/80 font-light leading-relaxed max-w-3xl mb-12"
          >
            We don't just execute tasks — we engineer revenue pipelines. From full-stack web applications to performance marketing and AI automations.
          </motion.p>

          {/* Quick Metrics Ticker */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full p-6 sm:p-8 rounded-[2rem] bg-white/70 border border-[var(--color-amethyst)]/15 backdrop-blur-xl shadow-xl"
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-playfair font-bold text-[var(--color-amethyst)] mb-1">18+</span>
              <span className="text-[11px] font-inter uppercase tracking-widest text-[var(--color-amethyst)]/60 font-semibold">Specializations</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-playfair font-bold text-[var(--color-amethyst)] mb-1">Sub-100ms</span>
              <span className="text-[11px] font-inter uppercase tracking-widest text-[var(--color-amethyst)]/60 font-semibold">Core Speed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-playfair font-bold text-[var(--color-amethyst)] mb-1">End-to-End</span>
              <span className="text-[11px] font-inter uppercase tracking-widest text-[var(--color-amethyst)]/60 font-semibold">Execution</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-playfair font-bold text-[var(--color-amethyst)] mb-1">100%</span>
              <span className="text-[11px] font-inter uppercase tracking-widest text-[var(--color-amethyst)]/60 font-semibold">Tailored Growth</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
