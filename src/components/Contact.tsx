"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import MagneticButton from "./MagneticButton";
import { Loader2 } from "lucide-react";
import { Magnetic } from "@/components/core/magnetic";
import { Spotlight } from "@/components/core/spotlight";
import { SpinningText } from "@/components/core/spinning-text";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="relative py-32 bg-void overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-6xl md:text-8xl text-offwhite uppercase leading-[0.85] mb-8 font-playfair">
              READY TO <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.6)" }}>IGNITE?</span>
            </h2>
            <p className="text-lg text-offwhite/70 font-inter max-w-md mb-12">
              Drop your details below. We'll audit your current presence and show you exactly how to defy gravity.
            </p>
            
            <div className="hidden lg:block h-[200px]">
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-white/10 p-[1px]">
                <Spotlight className="from-lime via-green-400 to-lime blur-2xl" size={200} />
                <div className="relative h-full w-full rounded-xl bg-void/90 backdrop-blur-md flex items-center justify-center overflow-hidden">
                  <SpinningText radius={4} fontSize={1.2} className="font-outfit text-lime font-bold uppercase tracking-widest">
                    {`NO B.S. • JUST RESULTS • `}
                  </SpinningText>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm text-offwhite/60 font-outfit tracking-wide">Name</label>
                  <input required type="text" id="name" className="bg-transparent border-b border-white/20 pb-2 text-offwhite focus:border-lime outline-none transition-colors" placeholder="Vikram Singh" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm text-offwhite/60 font-outfit tracking-wide">Email</label>
                  <input required type="email" id="email" className="bg-transparent border-b border-white/20 pb-2 text-offwhite focus:border-lime outline-none transition-colors" placeholder="vikram@example.in" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm text-offwhite/60 font-outfit tracking-wide">Phone</label>
                  <input type="tel" id="phone" className="bg-transparent border-b border-white/20 pb-2 text-offwhite focus:border-lime outline-none transition-colors" placeholder="+91 98765 43210" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm text-offwhite/60 font-outfit tracking-wide">Company</label>
                  <input type="text" id="company" className="bg-transparent border-b border-white/20 pb-2 text-offwhite focus:border-lime outline-none transition-colors" placeholder="Reliance Tech" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-offwhite/60 font-outfit tracking-wide">Message</label>
                <textarea required id="message" rows={4} className="bg-transparent border-b border-white/20 pb-2 text-offwhite focus:border-lime outline-none transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <div className="mt-4">
                <Magnetic intensity={0.2} springOptions={{ bounce: 0.1 }} actionArea="global" range={200}>
                  <button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className="w-full relative inline-flex items-center justify-center font-outfit uppercase tracking-wider font-bold overflow-hidden group bg-lime text-void px-8 py-4 rounded-full text-lg hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <Magnetic intensity={0.1} springOptions={{ bounce: 0.1 }} actionArea="global" range={200}>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            PROCESSING...
                          </>
                        ) : submitted ? (
                          "TRANSMISSION SENT"
                        ) : (
                          "INITIATE SEQUENCE"
                        )}
                      </span>
                    </Magnetic>
                    {!isSubmitting && !submitted && (
                      <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    )}
                  </button>
                </Magnetic>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
