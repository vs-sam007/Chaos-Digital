"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import MagneticButton from "./MagneticButton";
import { ArrowRight } from "lucide-react";
import { TextShimmer } from "@/components/core/text-shimmer";
import { TextRoll } from "@/components/core/text-roll";
import { GlowEffect } from "@/components/core/glow-effect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Massive background parallax & scale
    tl.to(bgRef.current, { yPercent: 40, scale: 1.2, opacity: 0.2, ease: "none" }, 0);
    
    // Content parallax and fade
    tl.to(contentRef.current, { yPercent: 60, opacity: 0, ease: "power1.inOut" }, 0);
    
    // Title expansion
    tl.to(titleRef.current, { scale: 1.2, filter: "blur(4px)", ease: "power1.inOut" }, 0);

    // Scatter particles intensely on scroll
    tl.to(".hero-particle", {
      y: () => -300 - Math.random() * 300,
      x: () => (Math.random() - 0.5) * 400,
      scale: () => 1 + Math.random() * 2,
      opacity: 0,
      ease: "power2.out"
    }, 0);
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[110vh] flex flex-col items-center justify-center overflow-hidden bg-void"
    >
      {/* Animated Background Elements */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none transform-gpu origin-center">
        <Image
          src="/hero-bg.png"
          alt="Abstract Anti-Gravity Background"
          fill
          className="object-cover opacity-60 mix-blend-screen"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/50 to-void" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="inline-block py-1 px-3 rounded-full bg-lime/10 font-outfit text-sm font-semibold tracking-widest mb-6 border border-lime/20">
            <TextShimmer duration={1.5} className="[--base-color:rgba(204,255,0,0.7)] [--base-gradient-color:rgba(255,255,255,1)]">
              CHAOS DIGITAL
            </TextShimmer>
          </div>
        </motion.div>
        
        <motion.div
          ref={titleRef as any}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-[120px] leading-[0.9] font-outfit font-black tracking-tighter mb-8 text-offwhite origin-center"
        >
          WEBSITES THAT <br />
          <TextRoll className="text-transparent bg-clip-text bg-gradient-to-r from-lime to-green-400">
            DEFY GRAVITY.
          </TextRoll>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-2xl text-offwhite/70 max-w-2xl mb-12 font-light"
        >
          We don't build brochures. We engineer weightless, high-converting digital experiences that pull your audience in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="relative">
            <GlowEffect colors={['#ccff00', '#00ff66', '#aaff00', '#ffffff']} mode="colorShift" blur="medium" duration={3} scale={0.9} />
            <MagneticButton className="relative z-10 bg-lime text-void px-8 py-4 rounded-full text-lg hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] transition-shadow">
              Book a Free Consultation
            </MagneticButton>
          </div>
          
          <a href="#work" className="group flex items-center gap-2 text-offwhite/80 hover:text-lime transition-colors font-outfit uppercase tracking-wider text-sm font-bold">
            See Our Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Floating Particles */}
      {mounted && [...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="hero-particle absolute w-1 h-1 bg-lime/50 rounded-full blur-[1px]"
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
          }}
          animate={{
            y: [null, `${Math.random() * -100}vh`],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </section>
  );
}
