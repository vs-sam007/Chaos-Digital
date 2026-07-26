"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const solutions = [
  "We don't do templates. We do bespoke engineering.",
  "Data drives every decision. Not guesswork.",
  "Your brand won't just look good; it will convert.",
  "Speed is a feature. We optimize for zero friction.",
  "You get an agile team, not bureaucratic red tape.",
];

export default function WhyUs() {
  return (
    <section className="relative py-32 bg-void overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Problem Statement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-outfit font-black tracking-tighter text-offwhite leading-[1.1]">
              WEBSITE OPENS.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                INTEREST CLOSES?
              </span>
            </h2>
            <p className="mt-8 text-xl md:text-2xl text-offwhite/70 font-light max-w-lg">
              Most agencies build pretty brochures that float aimlessly in space. We engineer growth engines that pull customers into your orbit.
            </p>
          </motion.div>

          {/* Right Column: Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-lime/30 transition-colors group"
              >
                <CheckCircle2 className="w-8 h-8 text-lime flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-lg md:text-xl text-offwhite font-medium">
                  {solution}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
