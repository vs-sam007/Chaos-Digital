"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "../MagneticButton";
import { ArrowUpRight } from "lucide-react";

export default function BottomCTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-[var(--color-amethyst)]">
      {/* Background Particles/Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[var(--color-ivory)]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-ivory)]/20 text-xs font-inter uppercase tracking-widest text-[var(--color-ivory)] font-bold mb-8">
            Start Your Project
          </span>
          
          <h2 className="text-5xl md:text-7xl lg:text-[90px] font-playfair font-medium text-[var(--color-ivory)] leading-[1.1] mb-12 max-w-5xl">
            Let's Build Something <br className="hidden md:block" />
            <span className="italic text-[var(--color-ivory)]/80">Amazing</span> Together.
          </h2>

          <MagneticButton>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-[var(--color-ivory)] text-[var(--color-amethyst)] font-inter uppercase tracking-widest text-sm hover:scale-105 transition-transform duration-300 font-bold"
            >
              Book a Discovery Call
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
