"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative flex flex-col gap-8 rounded-[2.5rem] p-6 md:p-10 border border-[var(--color-amethyst)]/10 bg-[var(--color-ivory)] hover:shadow-2xl transition-all duration-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Gradient Border on Hover */}
      <div 
        className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-amethyst)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
        style={{ margin: "-1px" }}
      />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-amethyst)]/20 text-xs font-inter uppercase tracking-widest text-[var(--color-amethyst)] font-bold mb-4">
            {project.industry}
          </span>
          <h3 className="text-4xl md:text-5xl font-playfair font-medium text-[var(--color-amethyst)]">
            {project.title}
          </h3>
        </div>
        <Link 
          href={`/work/${project.slug}`}
          className="w-16 h-16 rounded-full bg-[var(--color-amethyst)]/5 flex items-center justify-center group-hover:bg-[var(--color-amethyst)] group-hover:text-[var(--color-ivory)] transition-colors duration-500 text-[var(--color-amethyst)] shrink-0"
        >
          <ArrowUpRight className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
        </Link>
      </div>

      {/* Main Image Preview */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-[2rem] overflow-hidden">
        <Image
          src={project.imagePreview}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        
        {/* Hover Reveal Description */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12">
          <p className="text-white font-inter text-lg md:text-2xl font-light transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
            {project.shortDescription}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
        {/* Left Side: Services & Tech */}
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="text-sm font-inter uppercase tracking-widest text-[var(--color-amethyst)]/50 mb-4">Services</h4>
            <div className="flex flex-wrap gap-2">
              {project.services.map(service => (
                <span key={service} className="px-3 py-1.5 rounded-full border border-[var(--color-amethyst)]/10 text-xs font-inter text-[var(--color-amethyst)]/80">
                  {service}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-inter uppercase tracking-widest text-[var(--color-amethyst)]/50 mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1.5 rounded-full bg-[var(--color-amethyst)]/5 text-xs font-inter text-[var(--color-amethyst)]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Metrics & Case Study Preview */}
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="text-sm font-inter uppercase tracking-widest text-[var(--color-amethyst)]/50 mb-4">Outcomes</h4>
            <div className="grid grid-cols-2 gap-4">
              {project.metrics.map(metric => (
                <div key={metric.label}>
                  <div className="text-2xl font-playfair font-medium text-[var(--color-amethyst)]">{metric.value}</div>
                  <div className="text-[10px] uppercase tracking-widest font-inter text-[var(--color-amethyst)]/50">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-inter uppercase tracking-widest text-[var(--color-amethyst)]/50 mb-4">Process</h4>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide mask-image-linear-gradient-right">
              {project.caseStudy.map((step, idx) => (
                <div key={step.step} className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-inter text-[var(--color-amethyst)]/80">{step.step}</span>
                  {idx < project.caseStudy.length - 1 && (
                    <span className="w-4 h-[1px] bg-[var(--color-amethyst)]/20 block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  );
}
