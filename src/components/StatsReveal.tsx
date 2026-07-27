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

const statsContent = [
  {
    num: "490+",
    outline: "COMPLETED",
    solid: "PROJECTS",
    desc: "We engineer luxury digital experiences for brands that refuse to compromise. From vision to execution, we deliver perfection."
  },
  {
    num: "$50M+",
    outline: "CLIENT",
    solid: "REVENUE",
    desc: "Our strategies aren't just beautiful; they are high-performance conversion engines designed to dominate markets."
  },
  {
    num: "98%",
    outline: "RETENTION",
    solid: "RATE",
    desc: "We don't just acquire clients. We build long-term partnerships and scale them to the absolute limit."
  },
  {
    num: "120+",
    outline: "GLOBAL",
    solid: "PARTNERS",
    desc: "From Mumbai to New York, ambitious brands trust us with their digital trajectory. We know no borders."
  }
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

    // Animate stats text fading in and out
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    const texts = gsap.utils.toArray<HTMLElement>(".stat-text");
    
    gsap.set(texts, { opacity: 0, y: 50 });
    gsap.set(texts[0], { opacity: 1, y: 0 });

    // 0 -> 1
    tl.to(texts[0], { opacity: 0, y: -50, duration: 1 }, 1);
    tl.to(texts[1], { opacity: 1, y: 0, duration: 1 }, 1.5);
    
    // 1 -> 2
    tl.to(texts[1], { opacity: 0, y: -50, duration: 1 }, 3);
    tl.to(texts[2], { opacity: 1, y: 0, duration: 1 }, 3.5);

    // 2 -> 3
    tl.to(texts[2], { opacity: 0, y: -50, duration: 1 }, 5);
    tl.to(texts[3], { opacity: 1, y: 0, duration: 1 }, 5.5);
    
    // Pad the end
    tl.to({}, { duration: 1 });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative bg-transparent py-32 h-[400vh]">
      <div className="container mx-auto px-6 h-full flex flex-col md:flex-row relative">
        
        {/* Left Side: Photos revealing on scroll */}
        <div ref={leftPanelRef} className="w-full md:w-1/2 relative h-full flex flex-col gap-[40vh] pt-[20vh] z-10 pointer-events-none">
          {photos.map((photo, i) => (
            <div 
              key={photo.id}
              className={`stat-photo relative w-full max-w-[700px] h-[400px] md:h-[700px] rounded-[2rem] overflow-hidden hype-card p-3 ${i % 2 === 0 ? 'self-start' : 'self-end'}`}
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
          <div ref={rightTextRef} className="w-full max-w-lg mx-auto relative h-[400px]">
            {statsContent.map((stat, i) => (
              <div key={i} className="stat-text absolute inset-0 flex flex-col justify-center">
                <h2 className="text-6xl md:text-8xl lg:text-[110px] font-playfair font-medium leading-[0.9] text-[var(--color-amethyst)] uppercase tracking-tight drop-shadow-sm">
                  {stat.num} <br />
                  <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--color-amethyst)" }}>{stat.outline}</span><br />
                  {stat.solid}
                </h2>
                <p className="mt-8 text-[var(--color-amethyst)]/80 font-inter text-lg max-w-sm font-light">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
