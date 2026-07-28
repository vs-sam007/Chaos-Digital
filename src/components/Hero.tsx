"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ParticleMorph from "./ParticleMorph";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Initial fade in for content
    gsap.fromTo(
      leftContentRef.current?.children ? Array.from(leftContentRef.current.children) : [],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
    );

    // Floating animation for cards
    if (cardsRef.current) {
      const cards = Array.from(cardsRef.current.children);
      cards.forEach((card, i) => {
        gsap.to(card, {
          y: "-=15",
          duration: 2 + i * 0.5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: i * 0.2
        });
      });
    }

    // Scroll animation: Fade out and move up when scrolling down
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.to(containerRef.current, {
      opacity: 0,
      y: -100,
      ease: "none"
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden bg-[var(--color-hero-bg)] text-[var(--color-hero-text-primary)] pt-24 pb-12"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft radial gradient */}
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-[#8B5CF6]/10 to-transparent blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#6C5CE7]/10 to-transparent blur-[120px]" />
        
        {/* Animated noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
        />
        
        {/* Very subtle grid/network lines */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center h-full min-h-[80vh]">
        
        {/* LEFT SIDE: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center pt-10 lg:pt-0" ref={leftContentRef}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-black/5 shadow-sm backdrop-blur-md w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-[#6C5CE7] animate-pulse" />
            <span className="text-xs font-semibold tracking-wide uppercase text-[var(--color-hero-text-secondary)]">Premium Creative Studio</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.1] font-inter font-bold tracking-tight mb-6">
            We Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5CE7] to-[#8B5CF6] animate-pulse">
              AI-Powered
            </span> <br />
            Growth Systems
          </h1>
          
          <p className="text-lg lg:text-xl text-[var(--color-hero-text-secondary)] max-w-lg mb-10 font-light leading-relaxed">
            From premium websites to AI automation, SEO and digital strategy, we build complete digital growth systems for ambitious businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <Link href="/contact" className="group relative px-8 py-4 bg-gradient-to-r from-[#6C5CE7] to-[#8B5CF6] text-white font-medium rounded-2xl overflow-hidden transition-all hover:shadow-[0_8px_25px_rgba(108,92,231,0.4)] hover:-translate-y-1 text-center">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </Link>
            <Link href="/work" className="px-8 py-4 bg-white/40 backdrop-blur-md border border-black/5 text-[var(--color-hero-text-primary)] font-medium rounded-2xl transition-all hover:bg-white/80 hover:shadow-sm hover:-translate-y-1 text-center">
              View Our Work
            </Link>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-black/5">
            <div>
              <p className="text-2xl font-bold text-[var(--color-hero-text-primary)] mb-1">120+</p>
              <p className="text-xs text-[var(--color-hero-text-secondary)] uppercase tracking-wider font-medium">Projects Delivered</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--color-hero-text-primary)] mb-1">35+</p>
              <p className="text-xs text-[var(--color-hero-text-secondary)] uppercase tracking-wider font-medium">Happy Clients</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--color-hero-text-primary)] mb-1">98%</p>
              <p className="text-xs text-[var(--color-hero-text-secondary)] uppercase tracking-wider font-medium">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--color-hero-text-primary)] mb-1">Fast</p>
              <p className="text-xs text-[var(--color-hero-text-secondary)] uppercase tracking-wider font-medium">Delivery</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Interactive Animation & Cards */}
        <div className="w-full lg:w-1/2 h-[600px] lg:h-[800px] relative mt-12 lg:mt-0">
          <ParticleMorph />
          
          {/* Floating Glass Cards */}
          <div ref={cardsRef} className="absolute inset-0 pointer-events-none">
            
            {/* Card 1: Leads */}
            <div className="absolute top-[5%] left-[-5%] lg:left-[0%] px-5 py-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col pointer-events-auto transition-transform hover:scale-105">
              <span className="text-sm font-semibold text-[#111]">Leads Gen</span>
              <span className="text-2xl font-bold text-[#6C5CE7]">+247</span>
            </div>
            
            {/* Card 2: SEO */}
            <div className="absolute top-[15%] right-[-10%] lg:right-[-5%] px-5 py-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col pointer-events-auto transition-transform hover:scale-105">
              <span className="text-sm font-semibold text-[#111]">SEO Score</span>
              <span className="text-2xl font-bold text-[#8B5CF6]">98/100</span>
            </div>

            {/* Card 3: Growth */}
            <div className="absolute bottom-[15%] left-[-5%] lg:left-[5%] px-5 py-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col pointer-events-auto transition-transform hover:scale-105">
              <span className="text-sm font-semibold text-[#111]">Growth</span>
              <span className="text-2xl font-bold text-[#6C5CE7]">+312%</span>
            </div>
            
            {/* Card 4: Performance */}
            <div className="absolute bottom-[5%] right-[-5%] lg:right-[5%] px-5 py-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col pointer-events-auto transition-transform hover:scale-105">
              <span className="text-sm font-semibold text-[#111]">Performance</span>
              <span className="text-2xl font-bold text-[#8B5CF6]">99%</span>
            </div>

          </div>
        </div>
        
      </div>
      
      {/* Soft transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
    </section>
  );
}
