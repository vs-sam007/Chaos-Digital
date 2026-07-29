"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { client: "D2C E-Commerce Scale", metric: "+340% Conversions in 60 days", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800" },
  { client: "Client Growth via Instagram", metric: "₹2.4Cr Generated from Paid Social", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
  { client: "Fintech Platform SEO", metric: "1M+ Organic Monthly Visitors", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800" },
  { client: "Health & Wellness Rebrand", metric: "Complete Rebrand & App Launch", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800" },
  { client: "FMCG Performance Push", metric: "Performance Marketing Scale", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800" },
  { client: "Premium Grooming Brand", metric: "Social Growth Strategy", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800" },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Only run on desktop/tablet to prevent weird mobile layouts
    let mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      let gridTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".portfolio-grid-section",
          scrub: 1,
          start: "top bottom",
          end: "bottom top",
        },
        defaults: {
          ease: "none"
        }
      });

      gridTl.add("start")
        .fromTo(".portfolio-col-1", { yPercent: 0 }, { yPercent: -15 }, "start")
        .fromTo(".portfolio-col-2", { yPercent: 15 }, { yPercent: -10 }, "start")
        .fromTo(".portfolio-col-3", { yPercent: 5 }, { yPercent: -25 }, "start");
    });
  }, { scope: containerRef });

  return (
    <section id="work" ref={containerRef} className="relative py-32 bg-offwhite portfolio-grid-section">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-playfair font-bold text-void uppercase tracking-tighter">
            SELECTED <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--color-void)" }}>ARCHIVES</span>
          </h2>
          <p className="mt-4 text-void/60 text-lg max-w-xl mx-auto uppercase tracking-widest font-semibold">
            A SHOWCASE OF EXCELLENCE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {/* Column 1 */}
          <div className="portfolio-col-1 flex flex-col gap-6 md:gap-8">
            {[projects[0], projects[3]].map((project) => (
              <ProjectCard key={project.client} project={project} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="portfolio-col-2 flex flex-col gap-6 md:gap-8 md:-mt-24">
            {[projects[1], projects[4]].map((project) => (
              <ProjectCard key={project.client} project={project} aspect="4/5" />
            ))}
          </div>

          {/* Column 3 */}
          <div className="portfolio-col-3 flex flex-col gap-6 md:gap-8 md:mt-12">
            {[projects[2], projects[5]].map((project) => (
              <ProjectCard key={project.client} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, aspect = "1/1" }: { project: any, aspect?: string }) {
  return (
    <div className="group cursor-pointer">
      <div 
        className="w-full rounded-2xl mb-6 overflow-hidden relative bg-void/5"
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={project.image}
          alt={project.client}
          fill
          className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-offwhite/30 group-hover:bg-transparent transition-colors duration-500" />
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="bg-offwhite/80 backdrop-blur-md px-6 py-3 rounded-full border border-void/10">
            <span className="text-lime font-outfit font-bold uppercase tracking-wider text-sm">
              View Case Study
            </span>
          </div>
          <div className="w-12 h-12 rounded-full bg-lime text-void flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500">
            <ArrowUpRight className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-outfit font-bold text-void mb-2">
          {project.client}
        </h3>
        <p className="text-xl text-void/60 font-light">
          {project.metric}
        </p>
      </div>
    </div>
  );
}
