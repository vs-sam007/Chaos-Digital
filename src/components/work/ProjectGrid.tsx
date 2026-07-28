"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ClientTestimonialInsert from "./ClientTestimonialInsert";

const allCategories = [
  "All",
  "Web Design",
  "Web Development",
  "Branding",
  "SEO",
  "Landing Pages",
  "AI",
  "Dashboards",
];

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const nonFeaturedProjects = projects.filter(p => !p.isFeatured);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return nonFeaturedProjects;
    return nonFeaturedProjects.filter(p => p.services.includes(activeFilter));
  }, [activeFilter, nonFeaturedProjects]);

  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          {allCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`relative px-6 py-3 rounded-full text-sm font-inter tracking-widest uppercase transition-colors duration-300 ${
                activeFilter === category 
                  ? "text-[var(--color-ivory)]" 
                  : "text-[var(--color-amethyst)] hover:bg-[var(--color-amethyst)]/5 border border-transparent"
              }`}
            >
              {activeFilter === category && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-[var(--color-amethyst)] rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="flex flex-col gap-12 md:gap-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32 text-[var(--color-amethyst)]/50 font-playfair text-2xl"
            >
              No projects found for this category.
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
