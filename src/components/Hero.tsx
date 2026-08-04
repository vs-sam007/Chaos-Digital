"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleMorph from "./ParticleMorph";
import { ArrowRight, TrendingUp, Sparkles, Activity, Zap, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import TiltCard from "./TiltCard";
import MagneticButton from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const keywords = [
  "AI-Powered",
  "High-Converting",
  "Ultra-Fast",
  "Revenue-Driven",
  "Next-Gen",
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const steps = 40;
    const increment = value / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return <>{count}{suffix}</>;
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: 400, y: 300 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex((prevIndex) => (prevIndex + 1) % keywords.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

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

    // Scroll animation: Crisp scroll first, then subtle depth exit near the end
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      },
    });

    // Stage 1: Stay 100% sharp & opaque for initial scroll
    tl.to(containerRef.current, {
      opacity: 1,
      y: -25,
      scale: 0.99,
      duration: 0.5,
      ease: "none",
    })
    // Stage 2: Smoothly float up & fade out during final exit
    .to(containerRef.current, {
      opacity: 0,
      y: -85,
      scale: 0.96,
      duration: 0.5,
      ease: "power2.in",
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden bg-[var(--color-hero-bg)] text-[var(--color-hero-text-primary)] pt-24 pb-12"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Interactive Mouse-Following Spotlight */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(600px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(108, 92, 231, 0.10), transparent 75%)`,
          }}
        />

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
          
          {/* Top Badge & Social Proof Avatar Stack */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-black/5 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#6C5CE7] animate-pulse" />
              <span className="text-xs font-semibold tracking-wide uppercase text-[var(--color-hero-text-secondary)]">
                Premium Creative Studio
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-black/5 backdrop-blur-md shadow-sm">
              <div className="flex -space-x-1.5">
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 text-white font-extrabold text-[9px] flex items-center justify-center border border-white">AY</div>
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#6C5CE7] to-pink-500 text-white font-extrabold text-[9px] flex items-center justify-center border border-white">SK</div>
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-blue-500 to-teal-400 text-white font-extrabold text-[9px] flex items-center justify-center border border-white">MK</div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-amber-400 text-[10px]">★★★★★</span>
                <span className="text-xs font-bold text-gray-900">4.9/5</span>
                <span className="text-[11px] text-gray-500 font-medium">(50+ Brands)</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.1] font-inter font-bold tracking-tight mb-6">
            We Build <br />
            <span className="inline-block relative min-h-[1.15em] overflow-hidden align-bottom py-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={keywords[keywordIndex]}
                  initial={{ opacity: 0, y: 35, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -35, filter: "blur(10px)" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#6C5CE7] via-[#9D4EDD] via-[#EC4899] to-[#6C5CE7] animate-text-shimmer"
                >
                  {keywords[keywordIndex]}
                </motion.span>
              </AnimatePresence>
            </span> <br />
            Growth Systems
          </h1>
          
          <p className="text-lg lg:text-xl text-[var(--color-hero-text-secondary)] max-w-lg mb-10 font-light leading-relaxed">
            From premium websites to AI automation, SEO and digital strategy, we build complete digital growth systems for ambitious businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-14">
            <MagneticButton className="w-full sm:w-auto">
              <Link href="/contact" className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#6C5CE7] via-[#8B5CF6] to-[#6C5CE7] text-white font-medium rounded-2xl overflow-hidden transition-all shadow-[0_8px_25px_rgba(108,92,231,0.35)] hover:shadow-[0_12px_35px_rgba(108,92,231,0.5)] text-center flex items-center justify-center gap-2">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Continuous Shimmer Light Beam */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              </Link>
            </MagneticButton>

            <Link href="/work" className="w-full sm:w-auto px-8 py-4 bg-white/50 backdrop-blur-md border border-black/5 text-[var(--color-hero-text-primary)] font-medium rounded-2xl transition-all hover:bg-white/90 hover:shadow-sm text-center">
              View Our Work
            </Link>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-black/5">
            <div>
              <p className="text-2xl lg:text-3xl font-extrabold text-[var(--color-hero-text-primary)] mb-1 font-inter">
                <AnimatedCounter value={27} suffix="+" />
              </p>
              <p className="text-xs text-[var(--color-hero-text-secondary)] uppercase tracking-wider font-medium">Projects Delivered</p>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-extrabold text-[var(--color-hero-text-primary)] mb-1 font-inter">
                <AnimatedCounter value={25} suffix="+" />
              </p>
              <p className="text-xs text-[var(--color-hero-text-secondary)] uppercase tracking-wider font-medium">Experts</p>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-extrabold text-[var(--color-hero-text-primary)] mb-1 font-inter">
                <AnimatedCounter value={98} suffix="%" />
              </p>
              <p className="text-xs text-[var(--color-hero-text-secondary)] uppercase tracking-wider font-medium">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-extrabold text-[var(--color-hero-text-primary)] mb-1 font-inter">
                <AnimatedCounter value={312} suffix="%" />
              </p>
              <p className="text-xs text-[var(--color-hero-text-secondary)] uppercase tracking-wider font-medium">Avg Growth</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Interactive Animation & Cards */}
        <div className="w-full lg:w-1/2 h-[600px] lg:h-[800px] relative mt-12 lg:mt-0">
          <ParticleMorph />
          
          {/* Floating Glass Cards */}
          <div ref={cardsRef} className="absolute inset-0 pointer-events-none">
            
            {/* Card 1: Leads Gen */}
            <div className="absolute top-[4%] left-[2%] lg:left-[-2%] pointer-events-auto">
              <TiltCard className="!p-3.5 bg-white/85 backdrop-blur-2xl border border-white/80 shadow-[0_10px_30px_rgba(108,92,231,0.12)] hover:shadow-[0_16px_40px_rgba(108,92,231,0.22)] hover:border-[#6C5CE7]/50 transition-all rounded-2xl flex flex-col gap-2 min-w-[175px] lg:min-w-[205px]">
                <div className="flex items-center justify-between gap-2 w-full">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-gray-700 tracking-tight">Leads Gen</span>
                  </div>
                  <div className="p-1 rounded-lg bg-emerald-50 text-emerald-600">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                </div>
                
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-2xl lg:text-3xl font-extrabold font-inter text-gray-900 tracking-tight">+247</span>
                  <span className="inline-flex items-center gap-0.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                    <ArrowUpRight className="w-2.5 h-2.5" /> +24.8%
                  </span>
                </div>
              </TiltCard>
            </div>
            
            {/* Card 2: SEO Score */}
            <div className="absolute top-[14%] right-[2%] lg:right-[-4%] pointer-events-auto">
              <TiltCard className="!p-3.5 bg-white/85 backdrop-blur-2xl border border-white/80 shadow-[0_10px_30px_rgba(139,92,246,0.12)] hover:shadow-[0_16px_40px_rgba(139,92,246,0.22)] hover:border-[#8B5CF6]/50 transition-all rounded-2xl flex flex-col gap-2 min-w-[175px] lg:min-w-[205px]">
                <div className="flex items-center justify-between gap-2 w-full">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-gray-700 tracking-tight">SEO Score</span>
                  </div>
                  <div className="p-1 rounded-lg bg-purple-50 text-purple-600">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>
                
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-2xl lg:text-3xl font-extrabold font-inter text-[#8B5CF6] tracking-tight">98/100</span>
                  <span className="inline-flex items-center gap-0.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
                    Top 1%
                  </span>
                </div>
              </TiltCard>
            </div>

            {/* Card 3: Growth */}
            <div className="absolute bottom-[20%] left-[2%] lg:left-[2%] pointer-events-auto">
              <TiltCard className="!p-3.5 bg-white/85 backdrop-blur-2xl border border-white/80 shadow-[0_10px_30px_rgba(108,92,231,0.12)] hover:shadow-[0_16px_40px_rgba(108,92,231,0.22)] hover:border-[#6C5CE7]/50 transition-all rounded-2xl flex flex-col gap-2 min-w-[175px] lg:min-w-[205px]">
                <div className="flex items-center justify-between gap-2 w-full">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-gray-700 tracking-tight">Growth</span>
                  </div>
                  <div className="p-1 rounded-lg bg-indigo-50 text-indigo-600">
                    <Activity className="w-3.5 h-3.5" />
                  </div>
                </div>
                
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-2xl lg:text-3xl font-extrabold font-inter text-[#6C5CE7] tracking-tight">+312%</span>
                  <span className="inline-flex items-center gap-0.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
                    4.2x ROI
                  </span>
                </div>
              </TiltCard>
            </div>
            
            {/* Card 4: Speed */}
            <div className="absolute bottom-[8%] right-[2%] lg:right-[2%] pointer-events-auto">
              <TiltCard className="!p-3.5 bg-white/85 backdrop-blur-2xl border border-white/80 shadow-[0_10px_30px_rgba(59,130,246,0.12)] hover:shadow-[0_16px_40px_rgba(59,130,246,0.22)] hover:border-blue-500/50 transition-all rounded-2xl flex flex-col gap-2 min-w-[175px] lg:min-w-[205px]">
                <div className="flex items-center justify-between gap-2 w-full">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-gray-700 tracking-tight">Speed</span>
                  </div>
                  <div className="p-1 rounded-lg bg-blue-50 text-blue-600">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                </div>
                
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-2xl lg:text-3xl font-extrabold font-inter text-gray-900 tracking-tight">99%</span>
                  <span className="inline-flex items-center gap-0.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                    ⚡ 0.4s Load
                  </span>
                </div>
              </TiltCard>
            </div>

          </div>
        </div>
        
      </div>
      
      {/* Soft transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[var(--color-hero-bg)] to-transparent pointer-events-none z-10" />
    </section>
  );
}
