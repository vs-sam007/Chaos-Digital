"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Cpu, ArrowUpRight, CheckCircle2, Sparkles, Terminal } from "lucide-react";
import MagneticButton from "../MagneticButton";

export default function CTOBanner() {
  return (
    <section className="relative py-16 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Luxury Dark Glassmorphism Shell */}
        <div className="relative rounded-[2.5rem] p-8 md:p-12 border border-[var(--color-amethyst)]/20 bg-gradient-to-r from-slate-950 via-[var(--color-amethyst)] to-slate-900 text-[var(--color-ivory)] shadow-2xl overflow-hidden group">

          {/* Background Ambient Glow & Code Pattern */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-purple-500/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

            {/* Left Content */}
            <div className="lg:col-span-8 flex flex-col items-start">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                <Cpu className="w-4 h-4 text-purple-300" />
                <span className="text-xs font-inter uppercase tracking-[0.2em] text-white font-bold">
                  Executive Technical Leadership & Advisory
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-medium text-white mb-4 leading-tight">
                Architecting Complex Tech? <br className="hidden sm:block" />
                <span className="italic text-purple-200 font-light">Inquire Technical Architecture Guidance.</span>
              </h3>

              <p className="font-inter text-sm md:text-base text-purple-100/80 font-light leading-relaxed max-w-2xl mb-8">
                Get senior technical leadership without full-time overhead. We advise on system architecture, database scaling (PostgreSQL/Supabase), offline-first sync engines, and security compliance.
              </p>

              {/* Core Offerings List */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-inter text-purple-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>System Architecture</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-inter text-purple-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Local-Cloud Sync</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-inter text-purple-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Security & RLS</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-inter text-purple-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full-Stack Scaling</span>
                </div>
              </div>

            </div>

            {/* Right Action */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[var(--color-amethyst)] font-inter uppercase tracking-widest text-xs font-extrabold hover:bg-purple-50 transition-all duration-300 shadow-xl hover:scale-105"
                >
                  <Terminal className="w-4 h-4 text-[var(--color-amethyst)]" />
                  <span>Inquire Technical Advisory</span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--color-amethyst)]" />
                </Link>
              </MagneticButton>

              <span className="text-[11px] font-inter text-purple-300/60 uppercase tracking-wider mt-3 font-medium">
                • 30-Min Tech Audit Available
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
