"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: "Lumina Edge", category: "E-Commerce", src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600" },
  { id: 2, title: "Aura Aesthetics", category: "Branding", src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600" },
  { id: 3, title: "Nexus Tech", category: "Web App", src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600" },
  { id: 4, title: "Elevate Real Estate", category: "Corporate", src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600" },
  { id: 5, title: "Velvet Fashion", category: "D2C Brand", src: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=600" },
  { id: 6, title: "Quantum Dynamics", category: "SaaS", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600" },
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
            const radius = 50; // percentage of wrapper
            
            return (
              <div 
                key={project.id}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `rotate(${angle}deg) translateY(-${radius}vw) rotate(${-angle}deg)`,
                  transformOrigin: "center center"
                }}
              >
                {/* The Card itself (counter-rotates via GSAP) */}
                <div className="carousel-card relative group w-[250px] h-[350px] md:w-[350px] md:h-[450px] pointer-events-auto cursor-pointer hype-card p-2">
                  <div className="w-full h-full rounded-[1.2rem] overflow-hidden relative transition-all duration-500 group-hover:scale-[1.02] group-hover:z-50">
                    <Image
                      src={project.src}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <p className="text-white/80 font-inter text-xs uppercase tracking-widest mb-1 font-bold">{project.category}</p>
                      <h3 className="text-2xl font-playfair text-white font-bold">{project.title}</h3>
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
