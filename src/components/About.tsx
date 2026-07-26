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
    <section id="about" className="relative py-32 bg-void overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-outfit font-black tracking-tighter text-offwhite leading-[1.1]">
              ARCHITECTS OF <br />
              <span className="text-lime">CHAOS.</span>
            </h2>
            <p className="text-xl md:text-2xl text-offwhite/70 font-light max-w-lg">
              We are a collective of engineers, designers, and strategists operating at the intersection of technology and art. We exist to build digital experiences that refuse to be ignored.
            </p>
            <div className="flex gap-4 mt-4">
              <div className="flex flex-col">
                <div className="flex text-3xl font-outfit font-black text-offwhite">
                  <AnimatedNumber value={experts} springOptions={{ duration: 2000, bounce: 0 }} />+
                </div>
                <span className="text-sm uppercase tracking-widest text-lime">Experts</span>
              </div>
              <div className="w-px h-12 bg-white/20 mx-4" />
              <div className="flex flex-col">
                <div className="text-3xl font-outfit font-black text-offwhite">
                  <AnimatedNumber value={awards} springOptions={{ duration: 2000, bounce: 0 }} />
                </div>
                <span className="text-sm uppercase tracking-widest text-lime">Awards</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group"
          >
            <Image
              src="/team.png"
              alt="Chaos Digital Team"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-void/20 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-6 left-6 bg-void/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-lime font-outfit font-bold uppercase tracking-wider text-sm">
                HQ - Bengaluru, India
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
