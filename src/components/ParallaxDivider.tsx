"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxDividerProps {
  src: string;
  alt?: string;
  height?: string;
  title?: string;
}

export default function ParallaxDivider({ src, alt = "Divider", height = "70vh", title }: ParallaxDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".parallax-image",
      {
        yPercent: -15,
      },
      {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    if (title) {
      gsap.fromTo(
        ".parallax-text",
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "center center",
            scrub: 1
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} style={{ height }} className="relative w-full overflow-hidden flex items-center justify-center">
      <div className="parallax-image absolute inset-0 -top-[20%] -bottom-[20%]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover opacity-60 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-void/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />
      </div>

      {title && (
        <h2 className="parallax-text relative z-10 text-5xl md:text-9xl font-outfit font-black text-offwhite uppercase tracking-tighter text-center">
          {title}
        </h2>
      )}
    </section>
  );
}
