"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/projects";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between rounded-[2.5rem] p-7 md:p-10 border border-[var(--color-amethyst)]/15 bg-gradient-to-b from-white/90 via-[var(--color-ivory)] to-purple-50/20 backdrop-blur-lg hover:shadow-2xl hover:border-[var(--color-amethyst)]/30 transition-all duration-700 h-full"
    >
      {/* Animated Subtle Glowing Backdrop Border */}
      <div 
        className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-amethyst)]/20 via-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
        style={{ margin: "-1px" }}
      />

      <div>
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[var(--color-amethyst)]/20 bg-[var(--color-amethyst)]/5 text-xs font-inter uppercase tracking-widest text-[var(--color-amethyst)] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[var(--color-amethyst)]" />
            {project.industry}
          </span>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 text-[11px] font-inter uppercase font-bold tracking-wider hover:bg-emerald-500/20 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Site ↗
            </a>
          ) : (
            <span className="text-[11px] font-inter uppercase tracking-wider text-[var(--color-amethyst)]/40 font-medium">
              Case Study
            </span>
          )}
        </div>

        {/* Title & Short Description */}
        <div className="mb-6">
          <h3 className="text-3xl md:text-4xl font-playfair font-medium text-[var(--color-amethyst)] group-hover:text-purple-900 transition-colors duration-300 mb-3 leading-tight">
            {project.title}
          </h3>
          <p className="text-sm md:text-base font-inter font-light text-[var(--color-amethyst)]/75 leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
        </div>

        {/* Main Image Tile Container */}
        <div className="relative w-full aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/60 shadow-lg bg-slate-950 mb-8 group/img">
          <Image
            src={project.imagePreview}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover/img:scale-105"
          />

          {/* Hover Overlay with Instant Launch Link */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
            <p className="text-white font-inter text-sm md:text-base font-light mb-4 transform translate-y-4 group-hover/img:translate-y-0 transition-transform duration-500">
              {project.shortDescription}
            </p>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white text-[var(--color-amethyst)] font-inter text-xs uppercase tracking-widest font-bold shadow-xl hover:bg-purple-50 transition-colors"
              >
                <span>Launch Live Site</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>


        {/* Technologies Badges */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-2.5 py-1 rounded-md bg-[var(--color-amethyst)]/5 border border-[var(--color-amethyst)]/10 text-[11px] font-inter text-[var(--color-amethyst)]/80 font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Action Bar */}
      <div className="pt-4 border-t border-[var(--color-amethyst)]/10 flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {project.services.slice(0, 2).map((service) => (
            <span key={service} className="text-[11px] font-inter text-[var(--color-amethyst)]/60 font-medium">
              • {service}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-800 font-inter text-xs uppercase tracking-wider font-bold hover:bg-emerald-500/20 transition-colors"
              title="Visit Live Site"
            >
              <span>Visit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}

          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--color-amethyst)] text-[var(--color-ivory)] font-inter text-xs uppercase tracking-wider font-bold hover:bg-purple-900 transition-colors shadow-md"
          >
            <span>Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
