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
    // Scroll-triggered movement
    gsap.to(text1Ref.current, {
      xPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(text2Ref.current, {
      xPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 bg-[var(--color-void)] overflow-hidden relative flex flex-col justify-center border-y border-white/10 min-h-[60vh]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[var(--color-amethyst)]/20 rounded-full blur-[120px] pointer-events-none z-0" />
      
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
  <span className="text-[8vw] md:text-[5vw] font-playfair font-black uppercase tracking-tighter flex items-center">
    <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--color-ivory)" }}>WE DEFY</span>
    <span className="mx-6 text-[var(--color-amethyst)] text-[4vw] md:text-[2.5vw]">✦</span>
    <span className="text-[var(--color-ivory)] italic font-medium pr-3">DIGITAL GRAVITY</span>
    <span className="mx-6 text-[var(--color-amethyst)] text-[4vw] md:text-[2.5vw]">✦</span>
    <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--color-ivory)" }}>PRECISION ENGINEERING</span>
    <span className="mx-6 text-[var(--color-amethyst)] text-[4vw] md:text-[2.5vw]">✦</span>
    <span className="text-[var(--color-ivory)] pr-3">UNMATCHED ROI</span>
    <span className="mx-6 text-[var(--color-amethyst)] text-[4vw] md:text-[2.5vw]">✦</span>
  </span>
);

const MarqueeContent2 = () => (
  <span className="text-[8vw] md:text-[5vw] font-playfair font-black uppercase tracking-tighter flex items-center">
    <span className="text-[var(--color-ivory)] italic font-medium pr-3">DATA-DRIVEN STRATEGIES</span>
    <span className="mx-6 text-[var(--color-amethyst)] text-[4vw] md:text-[2.5vw]">✦</span>
    <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--color-ivory)" }}>CONVERSION FOCUSED</span>
    <span className="mx-6 text-[var(--color-amethyst)] text-[4vw] md:text-[2.5vw]">✦</span>
    <span className="text-[var(--color-ivory)] pr-3">FUTURE PROOF</span>
    <span className="mx-6 text-[var(--color-amethyst)] text-[4vw] md:text-[2.5vw]">✦</span>
  </span>
);
