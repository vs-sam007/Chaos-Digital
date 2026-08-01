"use client";

import { useRef } from "react";
import Image from "next/image";
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
    desc: "We learn about your business, target market, business goals, and main competitors.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "We map out your customer journey, lead generation channels, and growth strategy.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800",
  },
  {
    num: "03",
    title: "Build",
    desc: "We design the visuals, develop your website, and set up your marketing systems.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
  },
  {
    num: "04",
    title: "Launch & Scale",
    desc: "We launch your campaigns, track live performance, and scale your leads and sales.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
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
      
      gsap.to(scrollRef.current, {
        x: () => -(scrollRef.current!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 0.3,
          start: "top top",
          end: () => `+=${scrollRef.current!.scrollWidth * 0.55}`,
          invalidateOnRefresh: true,
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section className="relative bg-transparent overflow-hidden" ref={containerRef}>
      {/* Ambient Background Glows */}
      <div className="absolute top-[20%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-[var(--color-banana)]/10 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-[var(--color-mauve)]/10 blur-[100px] pointer-events-none z-0" />

      {/* Horizontal Scroll Area */}
      <div className="md:h-screen w-full flex items-center py-32 md:py-0 relative z-10">
        <div 
          ref={scrollRef} 
          className="flex flex-col md:flex-row gap-16 md:gap-32 px-6 md:px-32 w-full md:w-[max-content]"
        >
          
          {/* Header Title locked at start */}
          <div className="w-full md:w-[40vw] flex-shrink-0 flex flex-col justify-center">
            <h2 className="text-5xl md:text-8xl font-playfair font-medium text-[var(--color-amethyst)] uppercase tracking-tighter mb-6">
              Our <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--color-amethyst)" }}>Process</span>
            </h2>
            <p className="text-xl text-[var(--color-amethyst)]/80 font-inter">
              A clear, step-by-step approach to growing your business online. No guesswork, just real results.
            </p>
          </div>

          {/* Cards */}
          {stages.map((stage) => (
            <div key={stage.num} className="w-full md:w-[30vw] flex-shrink-0 flex items-center">
              <div className="w-full h-[500px] md:h-[600px] rounded-[2rem] relative overflow-hidden flex flex-col justify-end border border-[var(--color-amethyst)]/10 group shadow-2xl">
                {/* Background Image */}
                <Image 
                  src={stage.image}
                  alt={stage.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 z-0"
                />
                
                {/* Premium Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-void)] via-[var(--color-void)]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 z-10" />

                <span className="absolute -top-6 -right-6 text-[140px] md:text-[180px] font-playfair font-bold text-[var(--color-ivory)]/10 leading-none select-none pointer-events-none z-20">
                  {stage.num}
                </span>

                {/* Content Reveal */}
                <div className="relative z-20 p-8 md:p-12 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-[var(--color-banana)] font-inter font-bold text-sm md:text-base mb-3 block uppercase tracking-widest drop-shadow-md">
                    Stage {stage.num}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-playfair font-medium text-[var(--color-ivory)] mb-4 drop-shadow-md">
                    {stage.title}
                  </h3>
                  <p className="text-base md:text-lg text-[var(--color-ivory)]/90 font-light leading-relaxed font-inter opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-sm">
                    {stage.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Before & After section embedded at the end of the scroll */}
          <div className="w-full md:w-[60vw] flex-shrink-0 flex flex-col justify-center md:pl-16">
            <h3 className="text-3xl font-playfair font-medium text-[var(--color-amethyst)] uppercase tracking-tighter mb-8 text-center md:text-left">
              Before & After <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--color-amethyst)" }}>Results</span>
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
