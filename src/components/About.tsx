"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
            className="relative w-full aspect-[4/3] overflow-hidden group p-2 hype-card"
          >
            <div className="relative w-full h-full rounded-[1rem] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800"
                alt="Chaos Digital Team"
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[var(--color-amethyst)]/5 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 bg-[var(--color-ivory)] px-6 py-3 rounded-full shadow-lg translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[var(--color-amethyst)] font-inter font-bold uppercase tracking-wider text-sm">
                  HQ - Lucknow, Uttar Pradesh
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
