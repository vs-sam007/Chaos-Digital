"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "../MagneticButton";
import { ArrowUpRight, Sparkles, Calendar } from "lucide-react";

export default function BottomCTA() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-[var(--color-amethyst)] text-[var(--color-ivory)]">
      {/* Ambient Radial Lighting & Grain */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-400/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-amber-400/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-xs font-inter uppercase tracking-[0.2em] text-white font-bold">
              Ready to Elevate Your Digital Presence?
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-playfair font-medium text-white leading-[1.05] tracking-tight mb-8">
            Let's Build Your <br />
            <span className="italic font-light text-purple-200">Next Masterpiece</span> Together.
          </h2>

          <p className="font-inter text-base md:text-xl text-purple-100/80 font-light leading-relaxed max-w-2xl mb-12">
            Whether you need a high-converting web platform, custom software application, or full digital rebranding, we turn ambitious vision into production reality.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4.5 rounded-full bg-white text-[var(--color-amethyst)] font-inter uppercase tracking-widest text-xs font-extrabold hover:bg-purple-50 transition-all duration-300 shadow-2xl hover:scale-105"
              >
                <Calendar className="w-4 h-4 text-[var(--color-amethyst)]" />
                <span>Schedule Strategy Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4.5 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-md text-white font-inter uppercase tracking-widest text-xs font-extrabold hover:bg-white/20 transition-all duration-300 shadow-xl hover:scale-105"
              >
                <span>Inquire Technical Advisory</span>
                <ArrowUpRight className="w-4 h-4 text-amber-300" />
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
