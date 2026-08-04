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
    if (!containerRef.current || !wheelRef.current) return;

    // Animate the wheel naturally as the section scrolls through view (no pinning)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

    // Rotate the massive wheel smoothly during page scroll
    tl.fromTo(
      wheelRef.current,
      { rotation: -10 },
      { rotation: 110, ease: "none" },
      0
    );

    // Counter-rotate the individual cards so they stay upright
    tl.fromTo(
      ".carousel-card",
      { rotation: 10 },
      { rotation: -110, ease: "none" },
      0
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[90vh] md:h-[100vh] bg-transparent flex flex-col pt-16 overflow-hidden">
      
      <div className="flex-none text-center relative z-10 mb-8 md:mb-12">
        <h2 className="text-4xl md:text-6xl font-playfair font-medium text-[var(--color-amethyst)] mb-4 uppercase">
          Selected Works
        </h2>
        <p className="text-[var(--color-amethyst)]/60 font-inter uppercase tracking-widest text-sm">
          A showcase of excellence
        </p>
      </div>

      <div className="flex-1 relative bg-[var(--color-amethyst)] overflow-hidden rounded-t-[2.5rem] md:rounded-t-[4rem] [clip-path:inset(0_round_2.5rem_2.5rem_0_0)] md:[clip-path:inset(0_round_4rem_4rem_0_0)] isolate">
        {/* Massive Ferris Wheel Container */}
        <div className="absolute top-[110vh] md:top-[160vh] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300vw] h-[300vw] md:w-[140vw] md:h-[140vw] rounded-full border border-[var(--color-ivory)]/10" style={{ pointerEvents: 'none' }}>
        
        {/* Rotating Wrapper */}
        <div ref={wheelRef} className="absolute inset-0 origin-center will-change-transform">
          
          {projects.map((project, index) => {
            // Cards are spaced along the top-left of the wheel
            const angle = -15 - (20 * index); 
            
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
                    <div className="carousel-card relative group w-[200px] h-[400px] sm:w-[240px] sm:h-[480px] md:w-[300px] md:h-[560px] pointer-events-auto cursor-pointer hype-card p-2 will-change-transform">
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
