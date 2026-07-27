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

      <section className="py-32 bg-transparent flex flex-col items-center justify-center text-center border-b border-[var(--color-amethyst)]/10 relative overflow-hidden">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-amethyst) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-medium text-[var(--color-amethyst)] flex flex-col md:flex-row items-center gap-4 md:gap-6 flex-wrap justify-center leading-tight relative z-10 uppercase">
          <span>Build A</span>
          <span className="relative inline-flex group mx-2 my-4 md:my-0 cursor-pointer">
            {/* Clean Bold Badge */}
            <span className="absolute inset-0 bg-[var(--color-amethyst)] rounded-xl translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></span>
            <span className="relative px-8 py-2 md:py-4 bg-[var(--color-ivory)] text-[var(--color-amethyst)] border-2 border-[var(--color-amethyst)] rounded-xl -rotate-2 group-hover:rotate-2 transition-all duration-300 font-inter font-black tracking-tighter">
              BRAND
            </span>
          </span>
          <span>That</span>
          <span className="text-transparent italic" style={{ WebkitTextStroke: "2px var(--color-amethyst)" }}>Defies</span>
          <span>Gravity</span>
        </h2>
      </section>
    </div>
  );
}
