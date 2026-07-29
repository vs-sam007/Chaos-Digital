"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: "Quantum Dynamics", category: "SaaS", src: "/6.jpeg" },
  { id: 2, title: "Velvet Fashion", category: "D2C Brand", src: "/5.jpeg" },
  { id: 3, title: "Elevate Real Estate", category: "Corporate", src: "/4.jpeg" },
  { id: 4, title: "Nexus Tech", category: "Web App", src: "/3.jpeg" },
  { id: 5, title: "Aura Aesthetics", category: "Branding", src: "/2.jpeg" },
  { id: 6, title: "Lumina Edge", category: "E-Commerce", src: "/1.jpeg" },
];

export default function CurvedCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Create a master timeline for the pinned scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%", // The user will scroll for 2x the window height while the section is pinned
        scrub: 1,
        pin: true,
      }
    });

    // Rotate the massive wheel
    tl.to(wheelRef.current,      {
        rotation: 140,
        ease: "none", }, 0);
    
    // Counter-rotate the individual cards so they stay upright
    tl.to(".carousel-card",      {
        rotation: -140,
        ease: "none", }, 0);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-[100vh] bg-transparent flex flex-col pt-16">
      
      <div className="flex-none text-center relative z-10 mb-8 md:mb-12">
        <h2 className="text-4xl md:text-6xl font-playfair font-medium text-[var(--color-amethyst)] mb-4 uppercase">
          Selected Archives
        </h2>
        <p className="text-[var(--color-amethyst)]/60 font-inter uppercase tracking-widest text-sm">
          A showcase of excellence
        </p>
      </div>

      <div className="flex-1 relative bg-[var(--color-amethyst)] overflow-hidden rounded-t-[2.5rem] md:rounded-t-[4rem]">
        {/* Massive Ferris Wheel Container */}
        <div className="absolute top-[110vh] md:top-[160vh] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300vw] h-[300vw] md:w-[140vw] md:h-[140vw] rounded-full border border-[var(--color-ivory)]/10" style={{ pointerEvents: 'none' }}>
        
        {/* Rotating Wrapper */}
        <div ref={wheelRef} className="absolute inset-0 origin-center">
          
          {projects.map((project, index) => {
            // Cards are tightly grouped on the top-left of the wheel at start
            const angle = -15 - (22 * index); 
            
            return (
              <div 
                key={project.id}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `rotate(${angle}deg)`,
                  transformOrigin: "0 0"
                }}
              >
                <div className="-translate-x-1/2 -translate-y-[150vw] md:-translate-y-[70vw]">
                  <div style={{ transform: `rotate(${-angle}deg)` }}>
                    {/* The Card itself (counter-rotates via GSAP) */}
                    <div className="carousel-card relative group w-[220px] h-[440px] sm:w-[260px] sm:h-[500px] md:w-[380px] md:h-[700px] pointer-events-auto cursor-pointer hype-card p-2">
                      <div className="w-full h-full rounded-[1.2rem] overflow-hidden relative transition-all duration-500 group-hover:scale-[1.02] group-hover:z-50 bg-black/5">
                        <Image
                          src={project.src}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
      </div>
    </section>
  );
}
