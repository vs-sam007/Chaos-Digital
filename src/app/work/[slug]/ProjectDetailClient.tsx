"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Globe, ExternalLink, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const images = project.galleryImages && project.galleryImages.length > 0 
    ? project.galleryImages 
    : [project.imageDesktop, project.imagePreview, project.imageMobile];

  const [activeIdx, setActiveIdx] = useState(0);

  const nextImage = () => {
    setActiveIdx((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-12 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          
          {/* Main Display Box */}
          <div className="relative h-[400px] sm:h-[550px] md:h-[650px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-950 group">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={images[activeIdx]}
                  alt={`${project.title} Preview ${activeIdx + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none opacity-80" />

            {/* Left & Right Arrow Buttons (if multiple images) */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/20 hover:scale-110 z-20"
                  title="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/20 hover:scale-110 z-20"
                  title="Next Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Bottom Info Bar & Live Link */}
            <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 z-20 text-white">
              <div>
                <div className="flex items-center gap-2 text-xs font-inter uppercase tracking-widest text-emerald-400 font-bold mb-2">
                  <Globe className="w-4 h-4" /> Screen {activeIdx + 1} of {images.length}
                </div>
                <h3 className="text-2xl sm:text-3xl font-playfair font-medium text-white">{project.title}</h3>
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[var(--color-amethyst)] font-inter text-xs uppercase tracking-wider font-extrabold shadow-xl hover:bg-purple-50 transition-all shrink-0"
                >
                  <span>Launch Live Site</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>

          </div>

          {/* Thumbnails Row */}
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto w-full">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`relative aspect-[16/10] rounded-2xl overflow-hidden border-2 transition-all ${
                    activeIdx === idx 
                      ? "border-[var(--color-amethyst)] scale-105 shadow-xl ring-2 ring-purple-900/30" 
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
          )}

        </div>
      </div>
    </section>
  );
}
