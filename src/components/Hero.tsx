"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Placeholder arrays for luxury brand logos
const brands = [
  { id: 1, src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200", speed: -0.1, top: "20%", left: "10%" },
  { id: 2, src: "https://images.unsplash.com/photo-1622839958043-4a6c9cfbc61d?q=80&w=200", speed: 0.15, top: "15%", left: "75%" },
  { id: 3, src: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=200", speed: -0.2, top: "60%", left: "15%" },
  { id: 4, src: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?q=80&w=200", speed: 0.1, top: "65%", left: "80%" },
  { id: 5, src: "https://images.unsplash.com/photo-1601158935942-52255782d322?q=80&w=200", speed: -0.15, top: "40%", left: "5%" },
  { id: 6, src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=200", speed: 0.2, top: "35%", left: "85%" },
];

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

    // Anti-gravity float for brands
    brands.forEach((brand) => {
      tl.to(`#brand-${brand.id}`, {
        y: () => window.innerHeight * brand.speed * 2,
        ease: "none",
      }, 0);
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-void pt-20"
    >
      {/* Anti-Gravity Floating Brands (Behind Text) */}
      {mounted && brands.map((brand) => (
        <div
          key={brand.id}
          id={`brand-${brand.id}`}
          className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 z-0"
          style={{ top: brand.top, left: brand.left }}
        >
          <Image
            src={brand.src}
            alt="Brand Logo"
            fill
            className="object-cover"
          />
        </div>
      ))}

      {/* Main Luxury Headline */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <h1 
          ref={textRef}
          className="text-7xl md:text-9xl lg:text-[120px] leading-[0.9] font-playfair text-offwhite max-w-[1200px] mx-auto tracking-normal uppercase"
        >
          THE WORLD'S MOST <br />
          <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.6)" }}>AMBITIOUS</span> BRANDS <br />
          CHOOSE US
        </h1>
        
        {/* Scroll Indicator */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs uppercase tracking-widest font-inter">Scroll</span>
          <div className="w-[1px] h-12 bg-white/30 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-down" />
          </div>
        </div>
      </div>
    </section>
  );
}
