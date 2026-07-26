"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextShimmer } from "@/components/core/text-shimmer";

export default function Preloader() {
  const [show, setShow] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!show) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setShow(false);
      },
    });

    // Simulate progress counter
    const counter = { value: 0 };
    tl.to(counter, {
      value: 100,
      duration: 1.5,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.innerText = `${Math.round(counter.value)}%`;
        }
      },
    }, 0);

    // Animate bottom loading bar
    tl.to("#loading-bar", { scaleX: 1, duration: 1.5, ease: "power2.inOut" }, 0);

    // Reveal logo text
    tl.fromTo(
      textRef.current,
      { y: 50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );

    // Hold for a moment
    tl.to({}, { duration: 0.5 });

    // Fade out to reveal site
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, { scope: containerRef, dependencies: [show] });

  if (!show) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-void text-offwhite overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        {/* Dynamic Counter */}
        <div 
          ref={counterRef} 
          className="text-8xl md:text-[150px] font-outfit font-black tracking-tighter text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        >
          0%
        </div>
        
        {/* Brand Text */}
        <div ref={textRef} className="relative z-10 opacity-0">
          <TextShimmer duration={2} className="text-3xl md:text-5xl font-outfit font-black tracking-widest [--base-color:rgba(255,255,255,0.7)] [--base-gradient-color:rgba(204,255,0,1)] uppercase">
            Chaos Digital
          </TextShimmer>
        </div>
      </div>
      
      {/* Loading Bar at bottom */}
      <div className="absolute bottom-0 left-0 h-1 bg-lime w-full origin-left scale-x-0" id="loading-bar" />
    </div>
  );
}
