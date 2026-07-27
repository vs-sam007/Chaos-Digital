"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Preloader() {
  const [show, setShow] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const textFillRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!show) return;
    
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setShow(false);
      },
    });

    const counter = { value: 0 };
    tl.to(counter, {
      value: 100,
      duration: 2.5,
      ease: "power3.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.innerText = `${Math.round(counter.value).toString().padStart(3, '0')}%`;
        }
        if (textFillRef.current) {
          // Fill from bottom to top using clip-path
          textFillRef.current.style.clipPath = `inset(${100 - counter.value}% 0 0 0)`;
        }
      },
    }, 0);

    // Expand the word slightly while it fills to add cinematic tension
    tl.fromTo(".preload-text", 
      { scale: 0.95, letterSpacing: "0.05em" },
      { scale: 1, letterSpacing: "0.1em", duration: 2.5, ease: "power3.inOut" },
      0
    );

    // Hold for a moment at 100%
    tl.to({}, { duration: 0.6 });

    // Fade out gracefully (do not shutter up)
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 1.2,
      ease: "power2.inOut",
    });

  }, { scope: containerRef, dependencies: [show] });

  if (!show) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[var(--color-ivory)] text-[var(--color-amethyst)] overflow-hidden"
    >
      <div className="relative flex flex-col items-center justify-center w-full">
        {/* Base text (dimmed outline/gray) */}
        <div className="preload-text text-5xl md:text-8xl lg:text-[120px] font-playfair font-medium uppercase text-[var(--color-amethyst)]/20 text-center leading-none">
          Chaos <br />
          <span className="italic capitalize font-light opacity-50">Digital</span>
        </div>
        
        {/* Fill text (solid void, revealed via clip-path) */}
        <div 
          ref={textFillRef} 
          className="preload-text absolute top-0 left-0 text-5xl md:text-8xl lg:text-[120px] font-playfair font-medium uppercase text-[var(--color-amethyst)] text-center leading-none pointer-events-none w-full h-full flex flex-col items-center justify-center"
          style={{ clipPath: "inset(100% 0 0 0)" }}
        >
          <div>
            Chaos <br />
            <span className="italic capitalize font-light">Digital</span>
          </div>
        </div>
      </div>
      
      {/* Ultra-luxurious minimal counter */}
      <div className="absolute bottom-12 right-12 flex items-center gap-4">
        <div className="w-16 h-[1px] bg-[var(--color-amethyst)]/30" />
        <div 
          ref={counterRef} 
          className="text-lg md:text-2xl font-inter font-light tracking-widest text-[var(--color-amethyst)] w-[60px] text-right"
        >
          000%
        </div>
      </div>
    </div>
  );
}
