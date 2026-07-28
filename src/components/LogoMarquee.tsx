"use client";

import { motion } from "framer-motion";

const items = [
  { text: "EverythingCreative", isPill: true },
  { text: "#ItsHowWeDo", isPill: false },
  { text: "ChaosDigital", isPill: true },
  { text: "#DefyGravity", isPill: false },
  { text: "DigitalAlchemy", isPill: true },
  { text: "#GrowthEngine", isPill: false },
  { text: "CreativeMinds", isPill: true },
  { text: "#BuiltToBeFound", isPill: false },
];

export default function LogoMarquee() {
  return (
    <div className="flex flex-col bg-transparent pt-12">
      <section className="relative w-full py-6 bg-[var(--color-amethyst)] overflow-hidden flex items-center">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...items, ...items, ...items, ...items, ...items].map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center mx-4"
            >
              {item.isPill ? (
                <span className="px-8 py-3 bg-[var(--color-ivory)] text-[var(--color-amethyst)] rounded-full font-inter font-medium text-2xl tracking-wide">
                  {item.text}
                </span>
              ) : (
                <span className="px-4 py-3 text-[var(--color-ivory)]/80 font-inter font-light text-3xl tracking-tight">
                  {item.text}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </section>

      <section className="py-40 bg-[var(--color-ivory)] flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Premium Mesh Gradient Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#8B5CF6]/15 to-transparent blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tl from-[#6C5CE7]/15 to-transparent blur-[100px]" />
          <div className="absolute top-[10%] right-[20%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-bl from-[#FFB86C]/10 to-transparent blur-[100px]" />
        </div>

        {/* Elegant Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" 
             style={{ backgroundImage: "linear-gradient(#2B135A 1px, transparent 1px), linear-gradient(90deg, #2B135A 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        {/* Animated noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.025] mix-blend-overlay z-0 pointer-events-none"
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
        />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-[var(--color-amethyst)]/10 shadow-sm backdrop-blur-md mb-8 transition-transform hover:scale-105 cursor-pointer">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-[var(--color-amethyst)]/70">The New Standard</span>
          </div>

          <h2 className="text-6xl md:text-8xl lg:text-[8rem] font-inter font-black text-[var(--color-amethyst)] flex flex-col items-center justify-center leading-[0.95] tracking-tighter uppercase w-full">
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 md:gap-x-6">
              <span>BUILD</span>
              <span>A</span>
              <span className="relative group cursor-pointer inline-flex items-center justify-center mx-2 my-2 md:my-0">
                <span className="absolute inset-0 bg-gradient-to-r from-[#6C5CE7] to-[#8B5CF6] rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></span>
                <span className="relative px-8 py-1 md:py-2 bg-white text-[var(--color-amethyst)] border border-[var(--color-amethyst)]/10 rounded-full group-hover:scale-[1.03] transition-transform duration-500 shadow-xl overflow-hidden flex items-center justify-center">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#6C5CE7] to-[#8B5CF6]">BRAND</span>
                </span>
              </span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 md:gap-x-6 mt-2 md:mt-4">
              <span>THAT</span>
              <span className="relative group">
                <span className="absolute -inset-2 bg-[#6C5CE7]/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-lg"></span>
                <span className="relative z-10 italic text-transparent pr-2" style={{ WebkitTextStroke: "2px var(--color-amethyst)" }}>DEFIES</span>
              </span>
              <span>GRAVITY</span>
            </div>
          </h2>
          
          <p className="mt-12 max-w-xl text-center text-[var(--color-amethyst)]/50 text-lg md:text-xl font-medium tracking-wide">
            Step into the future of digital experiences with uncompromising quality, striking aesthetics, and performance that scales.
          </p>
        </div>
      </section>
    </div>
  );
}
