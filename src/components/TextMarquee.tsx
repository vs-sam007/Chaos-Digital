"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function TextMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Infinite continuous movement
    gsap.to(text1Ref.current, {
      xPercent: -50,
      ease: "none",
      duration: 25,
      repeat: -1,
    });

    gsap.fromTo(text2Ref.current,
      { xPercent: -50 },
      {
        xPercent: 0,
        ease: "none",
        duration: 25,
        repeat: -1,
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 bg-[var(--color-void)] overflow-hidden relative flex flex-col justify-center border-y border-white/10 min-h-[60vh]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-[var(--color-amethyst)]/30 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-screen opacity-70" />
      
      <div className="flex flex-col gap-2 md:gap-6 -rotate-3 scale-[1.15] origin-center relative z-10">
        {/* Top Row - Moving Left */}
        <div className="w-max -ml-[50vw] flex" ref={text1Ref}>
          <div className="flex whitespace-nowrap items-center">
            <MarqueeContent1 />
            <MarqueeContent1 />
            <MarqueeContent1 />
            <MarqueeContent1 />
            <MarqueeContent1 />
            <MarqueeContent1 />
          </div>
        </div>
        
        {/* Bottom Row - Moving Right */}
        <div className="w-max -ml-[100vw] flex" ref={text2Ref}>
          <div className="flex whitespace-nowrap items-center">
            <MarqueeContent2 />
            <MarqueeContent2 />
            <MarqueeContent2 />
            <MarqueeContent2 />
            <MarqueeContent2 />
            <MarqueeContent2 />
          </div>
        </div>
      </div>
    </section>
  );
}

const MarqueeContent1 = () => (
  <span className="text-[10vw] md:text-[6.5vw] font-playfair font-black uppercase tracking-tighter flex items-center hover:scale-[1.02] transition-transform duration-500">
    <span className="text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" style={{ WebkitTextStroke: "2px var(--color-ivory)" }}>WE DEFY</span>
    <span className="mx-8 text-[var(--color-amethyst)] text-[5vw] md:text-[3vw] animate-[spin_8s_linear_infinite] opacity-90 drop-shadow-[0_0_15px_var(--color-amethyst)]">✦</span>
    <span className="text-[var(--color-ivory)] italic font-medium pr-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">DIGITAL GRAVITY</span>
    <span className="mx-8 text-[var(--color-amethyst)] text-[5vw] md:text-[3vw] animate-[spin_8s_linear_infinite] opacity-90 drop-shadow-[0_0_15px_var(--color-amethyst)]">✦</span>
    <span className="text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" style={{ WebkitTextStroke: "2px var(--color-ivory)" }}>PRECISION ENGINEERING</span>
    <span className="mx-8 text-[var(--color-amethyst)] text-[5vw] md:text-[3vw] animate-[spin_8s_linear_infinite] opacity-90 drop-shadow-[0_0_15px_var(--color-amethyst)]">✦</span>
    <span className="text-[var(--color-ivory)] pr-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">UNMATCHED ROI</span>
    <span className="mx-8 text-[var(--color-amethyst)] text-[5vw] md:text-[3vw] animate-[spin_8s_linear_infinite] opacity-90 drop-shadow-[0_0_15px_var(--color-amethyst)]">✦</span>
  </span>
);

const MarqueeContent2 = () => (
  <span className="text-[10vw] md:text-[6.5vw] font-playfair font-black uppercase tracking-tighter flex items-center hover:scale-[1.02] transition-transform duration-500">
    <span className="text-[var(--color-ivory)] italic font-medium pr-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">DATA-DRIVEN STRATEGIES</span>
    <span className="mx-8 text-[var(--color-amethyst)] text-[5vw] md:text-[3vw] animate-[spin_8s_linear_infinite] opacity-90 drop-shadow-[0_0_15px_var(--color-amethyst)]">✦</span>
    <span className="text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" style={{ WebkitTextStroke: "2px var(--color-ivory)" }}>CONVERSION FOCUSED</span>
    <span className="mx-8 text-[var(--color-amethyst)] text-[5vw] md:text-[3vw] animate-[spin_8s_linear_infinite] opacity-90 drop-shadow-[0_0_15px_var(--color-amethyst)]">✦</span>
    <span className="text-[var(--color-ivory)] pr-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">FUTURE PROOF</span>
    <span className="mx-8 text-[var(--color-amethyst)] text-[5vw] md:text-[3vw] animate-[spin_8s_linear_infinite] opacity-90 drop-shadow-[0_0_15px_var(--color-amethyst)]">✦</span>
  </span>
);
