"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    // Reveal text animation
    gsap.fromTo(textRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );

    // Parallax timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Fade and scale main text slightly on scroll
    tl.to(textRef.current, { opacity: 0.1, scale: 0.95, ease: "power1.inOut" }, 0);

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-transparent pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1]">
        <Image 
          src="/global-network-connectivity-modern-city-skyline-sunset.jpg"
          alt="Global Network Skyline"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ivory)] via-[var(--color-ivory)]/30 to-transparent" />
      </div>

      {/* Main Luxury Headline */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <h1 
          ref={textRef}
          className="text-7xl md:text-9xl lg:text-[120px] leading-[0.9] font-playfair text-[var(--color-amethyst)] max-w-[1200px] mx-auto tracking-normal uppercase"
        >
          THE WORLD'S MOST <br />
          <span className="text-transparent inline-block" style={{ WebkitTextStroke: "2px var(--color-amethyst)" }}>AMBITIOUS</span> BRANDS <br />
          CHOOSE US
        </h1>
        
        {/* Scroll Indicator */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-80">
          <span className="text-xs uppercase tracking-widest font-inter text-[var(--color-amethyst)]">Scroll</span>
          <div className="w-[1px] h-12 bg-[var(--color-amethyst)]/30 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[var(--color-amethyst)] animate-scroll-down" />
          </div>
        </div>
      </div>
    </section>
  );
}
