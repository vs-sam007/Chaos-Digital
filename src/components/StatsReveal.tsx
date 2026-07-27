"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600", rotation: -5, yOffset: 0 },
  { id: 2, src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600", rotation: 5, yOffset: 50 },
  { id: 3, src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=600", rotation: -3, yOffset: 100 },
  { id: 4, src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600", rotation: 6, yOffset: 150 },
];

export default function StatsReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Pin the right text
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: rightTextRef.current,
    });

    // Reveal photos sequentially on scroll
    gsap.utils.toArray<HTMLElement>(".stat-photo").forEach((photo, i) => {
      gsap.fromTo(photo, 
        { opacity: 0, y: 100, rotation: 0 },
        {
          opacity: 1,
          y: photos[i].yOffset,
          rotation: photos[i].rotation,
          scrollTrigger: {
            trigger: photo,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          }
        }
      );
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative bg-transparent py-32 h-[300vh]">
      <div className="container mx-auto px-6 h-full flex flex-col md:flex-row relative">
        
        {/* Left Side: Photos revealing on scroll */}
        <div ref={leftPanelRef} className="w-full md:w-1/2 relative h-full flex flex-col gap-[30vh] pt-[20vh] z-10 pointer-events-none">
          {photos.map((photo, i) => (
            <div 
              key={photo.id}
              className={`stat-photo relative w-[80%] max-w-[400px] h-[300px] md:h-[500px] rounded-[1.5rem] overflow-hidden hype-card p-2 ${i % 2 === 0 ? 'self-start' : 'self-end'}`}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src={photo.src}
                  alt="Studio Photo"
                  fill
                  className="object-cover transition-all duration-700 pointer-events-auto"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Pinned Text */}
        <div className="w-full md:w-1/2 h-screen flex flex-col justify-center absolute md:relative right-0 pointer-events-none z-0 px-6">
          <div ref={rightTextRef} className="w-full max-w-lg mx-auto">
            <h2 className="text-6xl md:text-8xl lg:text-[110px] font-playfair font-medium leading-[0.9] text-[var(--color-amethyst)] uppercase tracking-tight">
              490+ <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--color-amethyst)" }}>COMPLETED</span><br />
              PROJECTS
            </h2>
            <p className="mt-8 text-[var(--color-amethyst)]/80 font-inter text-lg max-w-sm font-light">
              We engineer luxury digital experiences for brands that refuse to compromise. From vision to execution, we deliver perfection.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
