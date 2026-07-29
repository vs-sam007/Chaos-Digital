"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedNumber } from "@/components/core/animated-number";

export default function About() {
  const [experts, setExperts] = useState(0);
  const [awards, setAwards] = useState(0);

  useEffect(() => {
    setExperts(40);
    setAwards(12);
  }, []);

  return (
    <section id="about" className="relative py-32 bg-transparent overflow-hidden border-t border-[var(--color-amethyst)]/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-medium tracking-tighter text-[var(--color-amethyst)] leading-[1.1] uppercase">
              ARCHITECTS OF <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--color-amethyst)" }}>Excellence</span>
            </h2>
            <p className="text-xl md:text-2xl text-[var(--color-amethyst)]/80 font-light max-w-lg font-inter">
              We are a collective of engineers, designers, and strategists operating at the intersection of technology and art. We exist to build digital experiences that refuse to be ignored.
            </p>
            <div className="flex gap-4 mt-4">
              <div className="flex flex-col">
                <div className="flex text-3xl font-playfair font-medium text-[var(--color-amethyst)]">
                  <AnimatedNumber value={experts} springOptions={{ duration: 2000, bounce: 0 }} />+
                </div>
                <span className="text-sm uppercase tracking-widest text-[var(--color-amethyst)]/60 font-inter">Experts</span>
              </div>
              <div className="w-px h-12 bg-[var(--color-amethyst)]/20 mx-4" />
              <div className="flex flex-col">
                <div className="text-3xl font-playfair font-medium text-[var(--color-amethyst)]">
                  <AnimatedNumber value={awards} springOptions={{ duration: 2000, bounce: 0 }} />
                </div>
                <span className="text-sm uppercase tracking-widest text-[var(--color-amethyst)]/60 font-inter">Awards</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full"
          >
            <Link href="/contact" className="block group">
              <div className="relative w-full rounded-[2.5rem] bg-[var(--color-amethyst)] p-8 sm:p-10 md:p-14 text-[var(--color-ivory)] shadow-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] border border-white/10 flex flex-col justify-between min-h-[440px]">
                
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                
                {/* Top-Right Circular Interactive Badge */}
                <div className="absolute top-8 right-8 w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-[var(--color-amethyst)] transition-all duration-500 shadow-lg">
                  <ArrowUpRight className="w-7 h-7 text-white group-hover:text-[var(--color-amethyst)] transition-colors duration-500" />
                </div>

                {/* Main Card Content */}
                <div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-medium uppercase tracking-tight leading-[1.05] mb-6 pr-16 text-white drop-shadow-md">
                    CLAIM YOUR <br />
                    FREE <br />
                    30-MIN <br />
                    STRATEGY CALL
                  </h3>

                  <p className="text-white/80 font-inter text-base sm:text-lg font-light leading-relaxed max-w-lg">
                    Connect with our experts today for a zero-pressure consultation. We'll audit your current setup, uncover hidden growth opportunities, and build a custom roadmap for your success.
                  </p>
                </div>

                {/* Bottom CTA bar */}
                <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between">
                  <span className="text-xs uppercase font-inter tracking-[0.2em] text-white/60 font-semibold">
                    100% Free • Zero Pressure
                  </span>
                  <span className="text-sm uppercase font-inter font-bold tracking-wider text-amber-300 group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
                    Book Call Now &rarr;
                  </span>
                </div>

              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
