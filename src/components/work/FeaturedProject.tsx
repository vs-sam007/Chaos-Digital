"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, ChevronLeft, ChevronRight, Globe, Smartphone } from "lucide-react";
import { projects } from "@/data/projects";
import MagneticButton from "../MagneticButton";

export default function FeaturedProject() {
  const featured = projects.find((p) => p.isFeatured) || projects[0];
  const images = featured.galleryImages && featured.galleryImages.length > 0 
    ? featured.galleryImages 
    : [featured.imageDesktop, featured.imagePreview, featured.imageMobile];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative py-20 md:py-28 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Spotlight Shell */}
        <div className="relative rounded-[3rem] p-8 md:p-14 border border-[var(--color-amethyst)]/15 bg-gradient-to-br from-white/80 via-[var(--color-ivory)] to-purple-50/30 backdrop-blur-xl shadow-2xl overflow-hidden group">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-amethyst)]/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Top Header Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12 relative z-10 border-b border-[var(--color-amethyst)]/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-amethyst)]/20 bg-[var(--color-amethyst)]/10 backdrop-blur-md">
                <Award className="w-4 h-4 text-[var(--color-amethyst)]" />
                <span className="text-xs font-inter uppercase tracking-[0.2em] text-[var(--color-amethyst)] font-bold">
                  Featured Mobile App Spotlight
                </span>
              </div>
              <span className="hidden sm:inline text-xs font-inter uppercase tracking-widest text-[var(--color-amethyst)]/50">
                • {featured.industry}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-800 text-xs font-inter font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                <span>Under Active Production</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-amethyst)]/10 text-[var(--color-amethyst)] text-xs font-inter uppercase font-semibold">
                <Smartphone className="w-3.5 h-3.5" />
                <span>4 App Screens Showcase</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* Left: 4-Image Interactive Carousel */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="relative h-[380px] sm:h-[500px] md:h-[560px] rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-white/80 bg-slate-950 group/carousel">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImageIndex}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={images[activeImageIndex]}
                      alt={`${featured.title} Screen ${activeImageIndex + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-75 pointer-events-none" />

                {/* Left/Right Arrow Controls */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 border border-white/20 hover:scale-110 z-20"
                  title="Previous Screen"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 border border-white/20 hover:scale-110 z-20"
                  title="Next Screen"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image Counter & Caption */}
                <div className="absolute bottom-6 left-6 text-white z-10 max-w-sm">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-inter uppercase tracking-widest font-bold text-white mb-2 inline-block">
                    Screen {activeImageIndex + 1} of {images.length}
                  </span>
                  <h4 className="text-xl font-playfair font-medium text-white">{featured.title}</h4>
                </div>
              </div>

              {/* Carousel Thumbnail Bar */}
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      activeImageIndex === idx
                        ? "border-[var(--color-amethyst)] scale-105 shadow-md"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Detailed Content */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-[var(--color-amethyst)]/60 font-inter text-xs uppercase tracking-[0.2em] font-semibold mb-3">
                  {featured.clientInfo.clientName}
                </p>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-[var(--color-amethyst)] mb-6 leading-tight">
                  {featured.title}
                </h2>
                
                <p className="text-base md:text-lg font-inter font-light text-[var(--color-amethyst)]/85 leading-relaxed mb-8">
                  {featured.shortDescription}
                </p>

                {/* Services Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featured.services.map((service) => (
                    <span key={service} className="px-3.5 py-1.5 rounded-full border border-[var(--color-amethyst)]/20 bg-[var(--color-amethyst)]/5 text-xs font-inter uppercase tracking-wider text-[var(--color-amethyst)] font-semibold">
                      {service}
                    </span>
                  ))}
                </div>


                {/* Key Technologies */}
                <div className="flex items-center gap-2 flex-wrap mb-10">
                  <span className="text-xs font-inter uppercase tracking-wider text-[var(--color-amethyst)]/50 mr-2 font-medium">Stack:</span>
                  {featured.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-md bg-[var(--color-amethyst)]/10 text-[11px] font-inter text-[var(--color-amethyst)] font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Actions */}
                <div className="flex flex-wrap items-center gap-4">
                  <MagneticButton>
                    <Link href={`/work/${featured.slug}`} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--color-amethyst)] text-[var(--color-ivory)] font-inter uppercase tracking-widest text-xs font-bold hover:bg-purple-900 transition-colors shadow-lg hover:shadow-xl">
                      <span>View Case Study Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </MagneticButton>

                  {featured.liveUrl && (
                    <a
                      href={featured.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-800 font-inter uppercase tracking-widest text-xs font-bold hover:bg-emerald-500/20 transition-colors"
                    >
                      <span>Launch Live Site</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </motion.div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
