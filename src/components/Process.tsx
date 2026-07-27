"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "@/components/core/image-comparison";

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    num: "01",
    title: "Discovery",
    desc: "We dive deep into your universe. Understanding your brand, your enemies, and your goals.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Architecting the blueprint. We map out the user journey and conversion pathways.",
  },
  {
    num: "03",
    title: "Build",
    desc: "The heavy lifting. We write the code, design the interfaces, and construct the engine.",
  },
  {
    num: "04",
    title: "Launch & Grow",
    desc: "Ignition. We deploy, monitor, and aggressively scale your digital presence.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Horizontal scroll on desktop
    let mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      if (!containerRef.current || !scrollRef.current) return;
      
      let scrollWidth = scrollRef.current.scrollWidth;
      let windowWidth = window.innerWidth;
      
      gsap.to(scrollRef.current, {
        x: () => -(scrollWidth - windowWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          invalidateOnRefresh: true,
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section className="relative bg-transparent overflow-hidden" ref={containerRef}>
      {/* Horizontal Scroll Area */}
      <div className="md:h-screen w-full flex items-center py-32 md:py-0">
        <div 
          ref={scrollRef} 
          className="flex flex-col md:flex-row gap-16 md:gap-32 px-6 md:px-32 w-full md:w-[max-content]"
        >
          
          {/* Header Title locked at start */}
          <div className="w-full md:w-[40vw] flex-shrink-0 flex flex-col justify-center">
            <h2 className="text-5xl md:text-8xl font-playfair font-medium text-[var(--color-amethyst)] uppercase tracking-tighter mb-6">
              Our <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--color-amethyst)" }}>Methodology</span>
            </h2>
            <p className="text-xl text-[var(--color-amethyst)]/80 font-inter">
              A systematic approach to defying digital gravity. No guesswork. Just precision engineering.
            </p>
          </div>

          {/* Cards */}
          {stages.map((stage) => (
            <div key={stage.num} className="w-full md:w-[35vw] flex-shrink-0 flex items-center">
              <div className="w-full h-full hype-card p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
                <span className="absolute -top-10 -right-10 text-[140px] md:text-[180px] font-playfair font-medium text-[var(--color-amethyst)]/5 leading-none select-none pointer-events-none">
                  {stage.num}
                </span>
                <div className="relative z-10">
                  <span className="text-[var(--color-amethyst)]/50 font-inter font-bold text-xl md:text-2xl mb-4 block uppercase tracking-widest">Stage {stage.num}</span>
                  <h3 className="text-3xl md:text-4xl font-playfair font-medium text-[var(--color-amethyst)] mb-6">
                    {stage.title}
                  </h3>
                  <p className="text-lg md:text-xl text-[var(--color-amethyst)]/70 font-light leading-relaxed font-inter">
                    {stage.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Before & After section embedded at the end of the scroll */}
          <div className="w-full md:w-[60vw] flex-shrink-0 flex flex-col justify-center md:pl-16">
            <h3 className="text-3xl font-playfair font-medium text-[var(--color-amethyst)] uppercase tracking-tighter mb-8 text-center md:text-left">
              Before & After <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--color-amethyst)" }}>Excellence</span>
            </h3>
            <div className="w-full">
              <ImageComparison
                className="aspect-[16/10] w-full rounded-[1.5rem] border border-[var(--color-amethyst)]/10"
                enableHover
              >
                <ImageComparisonImage
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
                  alt="Before Chaos"
                  position="left"
                  className=""
                />
                <ImageComparisonImage
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800"
                  alt="After Chaos"
                  position="right"
                />
                <ImageComparisonSlider className="bg-[var(--color-amethyst)] text-[var(--color-ivory)] border-[var(--color-amethyst)]" />
              </ImageComparison>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
