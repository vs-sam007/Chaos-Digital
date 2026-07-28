"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { Filter, Grid, Sparkles } from "lucide-react";

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Dynamically calculate services & counts from all projects
  const filterCategories = useMemo(() => {
    const serviceSet = new Set<string>();
    projects.forEach(p => p.services.forEach(s => serviceSet.add(s)));
    
    const categories = ["All", ...Array.from(serviceSet)];
    
    return categories.map(category => {
      const count = category === "All" 
        ? projects.length 
        : projects.filter(p => p.services.includes(category)).length;
      return { name: category, count };
    });
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter(p => p.services.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section className="relative py-20 md:py-28 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14 border-b border-[var(--color-amethyst)]/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-amethyst)]/20 bg-[var(--color-amethyst)]/5 mb-4">
              <Grid className="w-3.5 h-3.5 text-[var(--color-amethyst)]" />
              <span className="text-[11px] font-inter uppercase tracking-widest text-[var(--color-amethyst)] font-bold">
                Project Gallery
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-medium text-[var(--color-amethyst)] uppercase tracking-tight">
              Explore By <span className="italic text-[var(--color-amethyst)]/70 capitalize">Category</span>
            </h2>
          </div>

          <p className="font-inter text-sm text-[var(--color-amethyst)]/60 max-w-md font-light">
            Filter through our production builds across web development, custom UI/UX, enterprise software, and lead engines.
          </p>
        </div>

        {/* Dynamic Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-start gap-3 mb-14">
          {filterCategories.map(({ name, count }) => (
            <button
              key={name}
              onClick={() => setActiveFilter(name)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-inter tracking-wider uppercase font-bold transition-all duration-300 ${
                activeFilter === name 
                  ? "bg-[#2B135A] text-white shadow-lg shadow-purple-950/25 ring-2 ring-[#2B135A]/30 scale-105" 
                  : "bg-white/90 text-[#2B135A] hover:bg-[#2B135A]/10 border border-[#2B135A]/20 shadow-sm"
              }`}
            >
              <span className="flex items-center gap-2">
                <span>{name}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  activeFilter === name ? "bg-white/25 text-white" : "bg-[#2B135A]/10 text-[#2B135A]"
                }`}>
                  {count}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* 2-Column Responsive Project Tile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-28 text-[var(--color-amethyst)]/50 font-playfair text-2xl"
          >
            No projects found matching the selected category.
          </motion.div>
        )}

      </div>
    </section>
  );
}
