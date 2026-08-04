"use client";

import { motion } from "framer-motion";
import { Sparkles, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsHero() {
  const totalProjects = projects.length;

  return (
    <section className="relative min-h-[85vh] flex items-center pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-[var(--color-ivory)]">
      {/* Background Ambient Glow Effects */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] bg-gradient-to-tr from-[var(--color-amethyst)]/15 via-purple-600/10 to-amber-500/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-10 right-10 w-[40vw] h-[40vw] bg-[var(--color-mauve)]/10 rounded-full blur-[120px]" />
        <div className="absolute top-20 left-10 w-[35vw] h-[35vw] bg-amber-400/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[var(--color-amethyst)]/20 bg-white/70 backdrop-blur-md shadow-sm mb-8"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <Sparkles className="w-4 h-4 text-[var(--color-amethyst)]" />
            <span className="text-xs md:text-sm font-inter uppercase tracking-[0.2em] text-[var(--color-amethyst)] font-bold">
              Delivered Client Archive ({totalProjects} Proven Deploys)
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[85px] font-playfair font-medium text-[var(--color-amethyst)] leading-[0.95] tracking-tight uppercase mb-8"
          >
            Our Clients&apos;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-amethyst)] via-[var(--color-mauve)] to-[var(--color-amethyst)]">
              Delivered Projects
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-inter text-lg md:text-xl text-[var(--color-amethyst)]/80 font-light leading-relaxed mb-12 max-w-2xl"
          >
            Explore our portfolio of production-ready mobile apps, high-conversion web platforms, and custom enterprise software delivered to businesses across various industries.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#delivered-grid"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--color-amethyst)] text-[var(--color-ivory)] hover:bg-[var(--color-amethyst)]/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-sm font-inter uppercase tracking-widest font-bold"
            >
              <span>Browse Projects</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[var(--color-amethyst)]/30 bg-white/60 backdrop-blur-md text-[var(--color-amethyst)] hover:bg-white hover:border-[var(--color-amethyst)] transition-all text-sm font-inter uppercase tracking-widest font-bold"
            >
              <span>Build Your Project</span>
              <ExternalLink className="w-4 h-4 opacity-70" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
