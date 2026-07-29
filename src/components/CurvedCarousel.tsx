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
    // Rotate the massive wheel on scroll from 0 to 180 degrees
    gsap.fromTo(wheelRef.current, 
      { rotation: 0 },
      {
        rotation: 180,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    // Counter-rotate the individual cards so they stay upright
    gsap.fromTo(".carousel-card", 
      { rotation: 0 },
      {
        rotation: -180,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-[var(--color-amethyst)] overflow-hidden flex flex-col items-center">
      
      <div className="pt-32 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-playfair font-medium text-[var(--color-ivory)] mb-4 uppercase">
          Selected Archives
        </h2>
        <p className="text-[var(--color-ivory)]/60 font-inter uppercase tracking-widest text-sm">
          A showcase of excellence
        </p>
      </div>

      {/* Massive Ferris Wheel Container */}
      <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 w-[300vw] h-[300vw] md:w-[150vw] md:h-[150vw] rounded-full border border-[var(--color-ivory)]/10" style={{ pointerEvents: 'none' }}>
        
        {/* Rotating Wrapper */}
        <div ref={wheelRef} className="absolute inset-0 origin-center">
          
          {projects.map((project, index) => {
            // Cards are positioned like a train coming from the left
            // Item 0 is at -50deg (visible on left), subsequent items are further negative (hidden below horizon)
            const angle = -50 - (25 * index); 
            
            return (
              <div 
                key={project.id}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `rotate(${angle}deg)`,
                  transformOrigin: "0 0"
                }}
              >
                <div className="-translate-x-1/2 -translate-y-[120vw] md:-translate-y-[60vw]">
                  {/* The Card itself (counter-rotates via GSAP) */}
                  <div 
                    className="carousel-card relative group w-[260px] h-[500px] md:w-[380px] md:h-[700px] pointer-events-auto cursor-pointer hype-card p-2"
                    style={{ transform: `rotate(${-angle}deg)` }}
                  >
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
            );
          })}

        </div>
      </div>
    </section>
  );
}
