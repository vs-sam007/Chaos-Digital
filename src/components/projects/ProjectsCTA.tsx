"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";

export default function ProjectsCTA() {
  return (
    <section className="py-24 bg-[var(--color-ivory)] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[3rem] bg-gradient-to-r from-[var(--color-amethyst)] via-purple-950 to-[var(--color-amethyst)] text-[var(--color-ivory)] p-10 md:p-20 overflow-hidden shadow-2xl border border-[var(--color-amethyst)]/30 text-center flex flex-col items-center">
          
          {/* Ambient Glow background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[140px] pointer-events-none" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-inter uppercase tracking-widest font-semibold mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Ready for your next build?</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-playfair font-medium text-white tracking-tight leading-tight mb-8 max-w-3xl"
          >
            Let&apos;s Build Your Next Delivered Success Story
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 font-light text-base md:text-xl max-w-xl mb-12"
          >
            Have a custom web application, mobile app, or enterprise platform in mind? Partner with Chaos Digital for rapid, high-impact delivery.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-amber-300 text-[var(--color-amethyst)] hover:bg-amber-400 transition-all shadow-xl text-sm font-inter uppercase tracking-widest font-bold hover:scale-105"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="mailto:info.chaosdigital@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white transition-all text-sm font-inter uppercase tracking-widest font-bold"
            >
              <MessageSquare className="w-4 h-4 text-amber-300" />
              <span>Email Us Direct</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
