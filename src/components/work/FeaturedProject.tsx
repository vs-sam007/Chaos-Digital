"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Activity } from "lucide-react";
import { projects } from "@/data/projects";
import MagneticButton from "../MagneticButton";

export default function FeaturedProject() {
  const featured = projects.find((p) => p.isFeatured) || projects[0];

  return (
    <section className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-amethyst)]/20 bg-[var(--color-amethyst)]/5">
            <Activity className="w-4 h-4 text-[var(--color-amethyst)]" />
            <span className="text-xs font-inter uppercase tracking-widest text-[var(--color-amethyst)] font-bold">Featured Case Study</span>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-16 items-center">
          
          {/* Left: Images */}
          <div className="w-full xl:w-[60%] relative h-[50vh] md:h-[70vh] rounded-[2rem] overflow-hidden group">
            {/* Desktop Mockup (Main Background) */}
            <Image
              src={featured.imageDesktop}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ivory)] via-transparent to-transparent opacity-50" />
            
            {/* Floating Mobile Mockup */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -bottom-10 -right-10 md:bottom-10 md:right-10 w-[200px] md:w-[280px] aspect-[9/19] rounded-[2rem] overflow-hidden border-8 border-[var(--color-ivory)] shadow-2xl z-10"
            >
              <Image
                src={featured.imageMobile}
                alt={`${featured.title} Mobile`}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="w-full xl:w-[40%] flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[var(--color-amethyst)]/60 uppercase tracking-widest font-inter text-sm mb-4">
                {featured.industry}
              </p>
              
              <h2 className="text-5xl md:text-7xl font-playfair font-medium text-[var(--color-amethyst)] mb-6">
                {featured.title}
              </h2>
              
              <p className="text-lg md:text-xl font-inter font-light text-[var(--color-amethyst)]/80 leading-relaxed mb-8">
                {featured.shortDescription}
              </p>

              {/* Services Badges */}
              <div className="flex flex-wrap gap-2 mb-10">
                {featured.services.map((service) => (
                  <span key={service} className="px-4 py-2 rounded-full border border-[var(--color-amethyst)]/10 text-xs font-inter uppercase tracking-widest text-[var(--color-amethyst)]/70">
                    {service}
                  </span>
                ))}
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-6 mb-12">
                {featured.metrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-playfair font-medium text-[var(--color-amethyst)]">
                      {metric.value}
                    </span>
                    <span className="text-xs uppercase tracking-widest font-inter text-[var(--color-amethyst)]/50 mt-1">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              <MagneticButton>
                <Link href={`/work/${featured.slug}`} className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-[var(--color-amethyst)] text-[var(--color-ivory)] font-inter uppercase tracking-widest text-sm hover:bg-[var(--color-amethyst)]/90 transition-colors">
                  View Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
