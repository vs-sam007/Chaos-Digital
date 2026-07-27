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
    <section className="relative py-32 bg-transparent overflow-hidden">
      {/* Background glow removed for clean light theme */}

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-6xl md:text-8xl text-[var(--color-amethyst)] uppercase leading-[0.85] mb-8 font-playfair">
              READY TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-accent2">IGNITE?</span>
            </h2>
            <p className="text-lg text-[var(--color-amethyst)]/80 font-inter max-w-md mb-12">
              Drop your details below. We'll audit your current presence and show you exactly how to defy gravity.
            </p>
            
            <div className="hidden lg:block h-[200px]">
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-transparent/10 p-[1px]">
                <Spotlight className="from-accent1 via-accent2 to-accent3 blur-2xl" size={200} />
                <div className="relative h-full w-full rounded-xl bg-[var(--color-ivory)]/90 backdrop-blur-md flex items-center justify-center overflow-hidden">
                  <SpinningText radius={4} fontSize={1.2} className="font-outfit text-[var(--color-amethyst)] font-bold uppercase tracking-widest">
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 hype-card p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm text-[var(--color-amethyst)]/60 font-outfit tracking-wide">Name</label>
                  <input required type="text" id="name" className="bg-transparent border-b border-[var(--color-amethyst)]/20 pb-2 text-[var(--color-amethyst)] focus:border-[var(--color-amethyst)] outline-none transition-colors" placeholder="Vikram Singh" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm text-[var(--color-amethyst)]/60 font-outfit tracking-wide">Email</label>
                  <input required type="email" id="email" className="bg-transparent border-b border-[var(--color-amethyst)]/20 pb-2 text-[var(--color-amethyst)] focus:border-[var(--color-amethyst)] outline-none transition-colors" placeholder="vikram@example.in" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm text-[var(--color-amethyst)]/60 font-outfit tracking-wide">Phone</label>
                  <input type="tel" id="phone" className="bg-transparent border-b border-[var(--color-amethyst)]/20 pb-2 text-[var(--color-amethyst)] focus:border-[var(--color-amethyst)] outline-none transition-colors" placeholder="+91 98765 43210" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm text-[var(--color-amethyst)]/60 font-outfit tracking-wide">Company</label>
                  <input type="text" id="company" className="bg-transparent border-b border-[var(--color-amethyst)]/20 pb-2 text-[var(--color-amethyst)] focus:border-[var(--color-amethyst)] outline-none transition-colors" placeholder="Reliance Tech" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-[var(--color-amethyst)]/60 font-outfit tracking-wide">Message</label>
                <textarea required id="message" rows={4} className="bg-transparent border-b border-[var(--color-amethyst)]/20 pb-2 text-[var(--color-amethyst)] focus:border-[var(--color-amethyst)] outline-none transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <div className="mt-4">
                <Magnetic intensity={0.2} springOptions={{ bounce: 0.1 }} actionArea="global" range={200}>
                  <button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className="w-full relative inline-flex items-center justify-center font-outfit uppercase tracking-wider font-bold overflow-hidden group bg-[var(--color-amethyst)] text-[var(--color-ivory)] px-8 py-4 rounded-full text-lg hover:bg-[var(--color-amethyst)]/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
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
