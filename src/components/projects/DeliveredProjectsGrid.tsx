"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowUpRight, CheckCircle2, Clock, Users, Code2, Sparkles, Filter } from "lucide-react";
import { projects, Project } from "@/data/projects";

function InstagramIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

const categories = [
  { id: "all", label: "All Delivered Projects" },
  { id: "social", label: "Instagram & Social Growth" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "web", label: "Web Platforms" },
  { id: "saas", label: "SaaS & Enterprise" },
  { id: "edtech", label: "EdTech & Healthcare" },
];

export default function DeliveredProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "all") return true;
    const servicesStr = project.services.join(" ").toLowerCase();
    const indStr = project.industry.toLowerCase();
    
    if (activeCategory === "social") return Boolean(project.instagramUrl) || servicesStr.includes("instagram") || servicesStr.includes("social");
    if (activeCategory === "mobile") return servicesStr.includes("mobile") || indStr.includes("mobile");
    if (activeCategory === "web") return servicesStr.includes("web") || indStr.includes("estate") || indStr.includes("food");
    if (activeCategory === "saas") return servicesStr.includes("software") || indStr.includes("saas") || indStr.includes("gaming");
    if (activeCategory === "edtech") return indStr.includes("edtech") || indStr.includes("education") || indStr.includes("healthcare");
    return true;
  });

  return (
    <section id="delivered-grid" className="py-24 bg-gradient-to-b from-[var(--color-ivory)] via-white to-[var(--color-ivory)] border-t border-[var(--color-amethyst)]/10">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-amethyst)]/5 border border-[var(--color-amethyst)]/15 text-[var(--color-amethyst)] text-xs font-inter uppercase tracking-widest font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Client Deployments</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-[var(--color-amethyst)] tracking-tight">
              Delivered Work &amp; Case Studies
            </h2>
          </div>
          <p className="text-[var(--color-amethyst)]/70 max-w-md font-light text-base md:text-lg">
            Every project delivered by Chaos Digital is built to scale, optimized for speed, and designed to generate measurable business impact.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-14 no-scrollbar">
          <div className="flex items-center gap-2 text-[var(--color-amethyst)]/50 text-xs uppercase tracking-wider font-semibold mr-2 shrink-0">
            <Filter className="w-4 h-4" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-inter uppercase tracking-wider font-semibold transition-all shrink-0 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[var(--color-amethyst)] text-[var(--color-ivory)] shadow-md scale-105"
                  : "bg-white border border-[var(--color-amethyst)]/15 text-[var(--color-amethyst)]/70 hover:border-[var(--color-amethyst)]/40 hover:text-[var(--color-amethyst)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white rounded-[2.5rem] border border-[var(--color-amethyst)]/10 shadow-lg hover:shadow-2xl hover:border-[var(--color-amethyst)]/30 transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900">
                  <Image
                    src={project.imageDesktop || project.imagePreview}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Status & Industry Badges */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/40 text-[var(--color-amethyst)] text-xs font-inter font-bold uppercase tracking-wider shadow-sm">
                      {project.industry}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.instagramUrl && (
                        <a
                          href={project.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white text-[11px] font-inter font-bold uppercase tracking-wider shadow-md hover:opacity-90 transition-opacity"
                        >
                          <InstagramIcon className="w-3 h-3" />
                          Insta Page ↗
                        </a>
                      )}
                      {project.isUnderProduction ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/90 text-slate-950 text-[11px] font-inter font-bold uppercase tracking-wider shadow-md backdrop-blur-md">
                          <Clock className="w-3 h-3 text-slate-950" />
                          In Production
                        </span>
                      ) : project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/90 text-white text-[11px] font-inter font-bold uppercase tracking-wider shadow-md hover:bg-emerald-600 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                          Live Site ↗
                        </a>
                      ) : !project.instagramUrl ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-900/80 text-purple-200 text-[11px] font-inter font-bold uppercase tracking-wider backdrop-blur-md">
                          <CheckCircle2 className="w-3 h-3 text-purple-300" />
                          Deployed
                        </span>
                      ) : null}
                    </div>
                  </div>

                  {/* Title Overlay on Image Bottom */}
                  <div className="absolute bottom-5 left-6 right-6 text-white z-10">
                    <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-white leading-tight drop-shadow-md">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body Content */}
                <div className="p-7 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Client Quick Info */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-inter text-[var(--color-amethyst)]/60 font-semibold mb-5 pb-4 border-b border-[var(--color-amethyst)]/10">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[var(--color-amethyst)]/80" />
                        <span>Client: <strong className="text-[var(--color-amethyst)] font-bold">{project.clientInfo.clientName}</strong></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[var(--color-amethyst)]/80" />
                        <span>Delivery: <strong className="text-[var(--color-amethyst)] font-bold">{project.clientInfo.duration}</strong></span>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="font-inter text-sm md:text-base text-[var(--color-amethyst)]/80 font-light leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>

                    {/* Key Metrics Pills */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="p-2.5 rounded-2xl bg-[var(--color-amethyst)]/[0.03] border border-[var(--color-amethyst)]/10 text-center">
                          <div className="text-xs sm:text-sm font-playfair font-bold text-[var(--color-amethyst)]">{m.value}</div>
                          <div className="text-[10px] font-inter uppercase tracking-wider text-[var(--color-amethyst)]/60 font-medium truncate">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap items-center gap-2 mb-8">
                      <Code2 className="w-3.5 h-3.5 text-[var(--color-amethyst)]/50 shrink-0 mr-1" />
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-inter font-medium tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="pt-5 border-t border-[var(--color-amethyst)]/10 flex flex-wrap items-center justify-between gap-3">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 text-xs md:text-sm font-inter uppercase font-bold text-[var(--color-amethyst)] hover:text-[var(--color-mauve)] transition-colors group/link"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>

                    <div className="flex items-center gap-2">
                      {project.instagramUrl && (
                        <a
                          href={project.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-inter uppercase font-bold tracking-wider hover:opacity-90 transition-all shadow-md"
                        >
                          <InstagramIcon className="w-3.5 h-3.5" />
                          <span>Instagram ↗</span>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[var(--color-amethyst)] text-[var(--color-ivory)] text-xs font-inter uppercase font-bold tracking-wider hover:bg-[var(--color-amethyst)]/90 transition-all shadow-md"
                        >
                          <span>Live Site ↗</span>
                          <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
