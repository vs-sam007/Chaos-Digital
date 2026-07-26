"use client";

import { motion } from "framer-motion";

const logos = [
  "Acme Corp",
  "GlobalNet",
  "Stark Industries",
  "Cyberdyne",
  "Wayne Ent",
  "Umbrella",
  "Oscorp",
  "Massive Dynamic",
];

export default function LogoMarquee() {
  return (
    <section className="relative w-full py-12 bg-void border-y border-white/5 overflow-hidden flex items-center">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-void to-transparent z-10" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-void to-transparent z-10" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="inline-flex items-center justify-center min-w-[200px] text-xl font-outfit font-bold text-offwhite/30 hover:text-offwhite transition-colors uppercase tracking-wider"
          >
            {logo}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
