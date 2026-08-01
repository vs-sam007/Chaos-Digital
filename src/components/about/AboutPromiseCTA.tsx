"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, HeartHandshake, Sparkles, MapPin } from "lucide-react";

export default function AboutPromiseCTA() {
  return (
    <section className="relative py-24 md:py-36 bg-transparent overflow-hidden border-t border-[var(--color-amethyst)]/10">
      
      {/* Background Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[160px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          
          {/* Our Promise Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-white/90 backdrop-blur-2xl border border-[var(--color-amethyst)]/20 shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-amethyst)]/70 font-inter">
                OUR COMMITMENT TO YOU
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-medium uppercase tracking-tight text-[var(--color-amethyst)] mb-6">
              OUR PROMISE
            </h2>

            <p className="text-xl sm:text-2xl md:text-3xl font-inter font-light text-[var(--color-amethyst)]/90 leading-relaxed max-w-4xl">
              We&apos;re not here to send you a monthly PDF report and call it a day. We&apos;re here to be an extension of your team — invested in your growth, accountable for your results, and honest about what&apos;s working and what isn&apos;t.
            </p>
          </motion.div>

          {/* Grand Tagline & CTA Callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] bg-gradient-to-br from-[var(--color-amethyst)] via-purple-950 to-indigo-950 text-[var(--color-ivory)] p-10 sm:p-16 md:p-20 shadow-2xl overflow-hidden text-center flex flex-col items-center border border-white/10"
          >
            {/* Corner Decorative Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-300/30 bg-amber-300/10 mb-8">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span className="text-xs uppercase tracking-widest text-amber-300 font-bold font-inter">
                Clarity Over Chaos
              </span>
            </div>

            <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-medium tracking-tight text-white uppercase leading-[1.08] mb-8 max-w-4xl">
              Chaos Digital Solutions — <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 italic">
                where your digital marketing chaos becomes clarity.
              </span>
            </h3>

            <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-white/80 font-inter font-light mb-10">
              <MapPin className="w-4 h-4 text-amber-300 flex-shrink-0" />
              <span>Based in Lucknow, proudly serving businesses across India.</span>
            </div>

            {/* Interactive CTA Link */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-8 py-5 rounded-full bg-amber-300 text-[var(--color-amethyst)] font-inter font-bold text-lg uppercase tracking-wider hover:bg-amber-400 hover:scale-105 transition-all duration-300 shadow-2xl group"
            >
              <span>Ready to grow? Let&apos;s talk.</span>
              <div className="w-8 h-8 rounded-full bg-[var(--color-amethyst)] text-amber-300 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
