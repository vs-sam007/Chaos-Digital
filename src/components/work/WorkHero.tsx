"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function WorkHero() {
  // Grab the first 3 projects for the hero collage
  const heroProjects = projects.slice(0, 3);

  return (
    <section className="relative min-h-[85vh] flex items-center pb-24 pt-48 overflow-hidden mask-image-linear-gradient-bottom">
      {/* Background Mesh/Particles (Simulated via CSS) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] bg-[var(--color-amethyst)]/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[50vw] h-[50vw] bg-[var(--color-amethyst)]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Side: Typography */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 max-w-2xl"
        >
          <p className="font-inter text-sm md:text-base uppercase tracking-[0.2em] text-[var(--color-amethyst)]/60 mb-6">
            View Our Work
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-playfair font-medium text-[var(--color-amethyst)] leading-[0.9] tracking-tighter uppercase">
            Selected <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--color-amethyst)" }}>Projects</span>
          </h1>
          <p className="mt-8 font-inter text-lg md:text-xl text-[var(--color-amethyst)]/70 max-w-xl font-light leading-relaxed">
            Explore how we've helped ambitious businesses build premium digital experiences, improve performance and accelerate growth.
          </p>
        </motion.div>

        {/* Right Side: Floating Collage */}
        <div className="w-full lg:w-1/2 relative h-[400px] md:h-[600px] hidden md:block">
          
          {/* Main Large Image */}
          {heroProjects[0] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl z-20 border border-[var(--color-amethyst)]/10"
            >
              <Image 
                src={heroProjects[0].imageDesktop} 
                alt={heroProjects[0].title}
                fill
                className="object-cover"
              />
            </motion.div>
          )}

          {/* Top Right Floating Image */}
          {heroProjects[1] && (
            <motion.div
              initial={{ opacity: 0, x: 100, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-10 right-0 w-[45%] aspect-square rounded-[2rem] overflow-hidden shadow-xl z-10 border border-[var(--color-amethyst)]/10"
            >
              <Image 
                src={heroProjects[1].imageDesktop} 
                alt={heroProjects[1].title}
                fill
                className="object-cover"
              />
            </motion.div>
          )}

          {/* Bottom Left Floating Image */}
          {heroProjects[2] && (
            <motion.div
              initial={{ opacity: 0, x: -100, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-10 left-0 w-[50%] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl z-30 border border-[var(--color-amethyst)]/10"
            >
              <Image 
                src={heroProjects[2].imageDesktop} 
                alt={heroProjects[2].title}
                fill
                className="object-cover"
              />
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
