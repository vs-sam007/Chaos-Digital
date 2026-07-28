"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Sparkles, ShieldCheck, Zap, Layers } from "lucide-react";

export default function WorkHero() {
  const heroProjects = projects.slice(0, 3);
  const totalProjects = projects.length;

  return (
    <section className="relative min-h-[90vh] flex items-center pb-24 pt-44 md:pt-48 overflow-hidden">
      {/* Ambient Glowing Background Layers */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-tr from-[var(--color-amethyst)]/15 via-purple-500/10 to-transparent rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-10 left-10 w-[35vw] h-[35vw] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-10 w-[30vw] h-[30vw] bg-[var(--color-amethyst)]/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
          
          {/* Left Side: Typography & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 max-w-2xl"
          >
            {/* Top Pill Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[var(--color-amethyst)]/20 bg-[var(--color-amethyst)]/5 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-[var(--color-amethyst)]" />
                <span className="text-xs font-inter uppercase tracking-[0.2em] text-[var(--color-amethyst)] font-bold">
                  Portfolio Showcase ({totalProjects} Builds)
                </span>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-amethyst)]/30 bg-[var(--color-amethyst)] text-[var(--color-ivory)] hover:bg-purple-900 transition-colors shadow-md text-xs font-inter uppercase tracking-wider font-bold"
              >
                <span>Inquire Services</span>
                <span className="text-amber-300">↗</span>
              </a>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-playfair font-medium text-[var(--color-amethyst)] leading-[0.92] tracking-tighter uppercase mb-8">
              Crafted <br />
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-amethyst)] via-purple-700 to-[var(--color-amethyst)]"
                style={{ WebkitTextStroke: "1px rgba(0,0,0,0.1)" }}
              >
                With Purpose
              </span>
            </h1>

            <p className="font-inter text-lg md:text-xl text-[var(--color-amethyst)]/80 font-light leading-relaxed mb-12 max-w-xl">
              Explore our curated archive of bespoke web platforms, custom applications, and digital products engineered for real-world impact and growth.
            </p>

            {/* Stats Ticker */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[var(--color-amethyst)]/15">
              <div>
                <div className="flex items-center gap-1.5 text-2xl md:text-3xl font-playfair font-semibold text-[var(--color-amethyst)]">
                  <ShieldCheck className="w-5 h-5 text-[var(--color-amethyst)]/60 shrink-0" />
                  <span>100%</span>
                </div>
                <div className="text-[11px] font-inter uppercase tracking-wider text-[var(--color-amethyst)]/60 mt-1">Verified Builds</div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-2xl md:text-3xl font-playfair font-semibold text-[var(--color-amethyst)]">
                  <Zap className="w-5 h-5 text-[var(--color-amethyst)]/60 shrink-0" />
                  <span>Sub-100ms</span>
                </div>
                <div className="text-[11px] font-inter uppercase tracking-wider text-[var(--color-amethyst)]/60 mt-1">Avg Speed</div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-2xl md:text-3xl font-playfair font-semibold text-[var(--color-amethyst)]">
                  <Layers className="w-5 h-5 text-[var(--color-amethyst)]/60 shrink-0" />
                  <span>{totalProjects}+</span>
                </div>
                <div className="text-[11px] font-inter uppercase tracking-wider text-[var(--color-amethyst)]/60 mt-1">Production Deploys</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Interactive 3D Stack Collage */}
          <div className="w-full lg:w-1/2 relative h-[420px] md:h-[580px] hidden md:block">
            
            {/* Main Center Image */}
            {heroProjects[0] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72%] aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl z-20 border-2 border-white/60 group bg-white/40 backdrop-blur-md"
              >
                <Image 
                  src={heroProjects[0].imageDesktop} 
                  alt={heroProjects[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] uppercase font-inter tracking-widest text-white/70">{heroProjects[0].industry}</span>
                    <h3 className="text-xl font-playfair font-medium text-white">{heroProjects[0].title}</h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-inter uppercase font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Live Site
                  </span>
                </div>
              </motion.div>
            )}

            {/* Top-Right Stack Card */}
            {heroProjects[1] && (
              <motion.div
                initial={{ opacity: 0, x: 60, y: -40, rotate: 6 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 4 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-4 right-2 w-[48%] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl z-10 border border-white/40 group bg-white"
              >
                <Image 
                  src={heroProjects[1].imageDesktop} 
                  alt={heroProjects[1].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-[10px] font-inter uppercase tracking-wider text-white/70">{heroProjects[1].industry}</p>
                  <p className="text-sm font-playfair font-semibold">{heroProjects[1].title}</p>
                </div>
              </motion.div>
            )}

            {/* Bottom-Left Stack Card */}
            {heroProjects[2] && (
              <motion.div
                initial={{ opacity: 0, x: -60, y: 40, rotate: -6 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: -3 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-4 left-2 w-[50%] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl z-30 border border-white/40 group bg-white"
              >
                <Image 
                  src={heroProjects[2].imageDesktop} 
                  alt={heroProjects[2].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-[10px] font-inter uppercase tracking-wider text-white/70">{heroProjects[2].industry}</p>
                  <p className="text-sm font-playfair font-semibold">{heroProjects[2].title}</p>
                </div>
              </motion.div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
