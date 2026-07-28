"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Calendar, Sparkles, Terminal } from "lucide-react";
import MagneticButton from "../MagneticButton";

export default function ServicesCTA() {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Luxury Dark Shell */}
        <div className="relative rounded-[3rem] p-10 md:p-16 border border-[var(--color-amethyst)]/20 bg-gradient-to-br from-slate-950 via-[var(--color-amethyst)] to-slate-900 text-[var(--color-ivory)] shadow-2xl overflow-hidden text-center group">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
              <Sparkles className="w-4 h-4 text-purple-300" />
              <span className="text-xs font-inter uppercase tracking-[0.2em] text-white font-bold">
                Tailored Solutions & Strategic Engineering
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-playfair font-medium text-white leading-[1.05] tracking-tight mb-8">
              Ready to Accelerate Your <br />
              <span className="italic font-light text-purple-200">Digital Capabilities?</span>
            </h2>

            <p className="font-inter text-base md:text-xl text-purple-100/80 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Whether you need a full-stack web platform, custom mobile application, high-converting ad strategy, or AI automations, we build tailored systems designed to win.
            </p>

            {/* CTA Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4.5 rounded-full bg-white text-[var(--color-amethyst)] font-inter uppercase tracking-widest text-xs font-extrabold hover:bg-purple-50 transition-all duration-300 shadow-2xl hover:scale-105"
                >
                  <Calendar className="w-4 h-4 text-[var(--color-amethyst)]" />
                  <span>Book Free Strategy Session</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/contact?service=custom"
                  className="inline-flex items-center gap-3 px-8 py-4.5 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-md text-white font-inter uppercase tracking-widest text-xs font-extrabold hover:bg-white/20 transition-all duration-300 shadow-xl hover:scale-105"
                >
                  <Terminal className="w-4 h-4 text-amber-300" />
                  <span>Request Custom Proposal</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-300" />
                </Link>
              </MagneticButton>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
