"use client";

import { motion } from "framer-motion";
import { Search, Cpu, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & System Audit",
    description: "We analyze your business architecture, market bottlenecks, user flows, and conversion touchpoints to formulate a targeted engineering strategy."
  },
  {
    number: "02",
    icon: Cpu,
    title: "High-Performance Build",
    description: "Using Next.js, React, Node.js, and serverless edge databases, we engineer ultra-fast, scalable web and mobile software with sub-100ms response targets."
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Security & QA Testing",
    description: "Rigorous automated testing, security compliance audits, and performance tuning ensure your platform executes with 99.9% uptime."
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Scale, Optimize & Support",
    description: "Post-launch, we run multi-channel performance marketing, CRO audits, and AI automations to compound your user acquisition and revenue growth."
  }
];

export default function ServicesProcess() {
  return (
    <section className="py-20 md:py-28 bg-white/60 border-y border-[var(--color-amethyst)]/10">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-amethyst)]/20 bg-[var(--color-amethyst)]/5 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-amethyst)]" />
              <span className="text-[11px] font-inter uppercase tracking-widest text-[var(--color-amethyst)] font-bold">
                Proven Methodology
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-medium text-[var(--color-amethyst)] uppercase tracking-tight">
              Our Strategic <span className="italic text-[var(--color-amethyst)]/70 capitalize">Process</span>
            </h2>
          </div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="p-8 rounded-[2.5rem] bg-white border border-[var(--color-amethyst)]/15 shadow-lg flex items-start gap-6 hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-amethyst)] text-white flex items-center justify-center font-playfair font-bold text-xl shrink-0 shadow-md">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-xl font-playfair font-semibold text-[var(--color-amethyst)] mb-2 flex items-center gap-2">
                      <Icon className="w-4 h-4 text-purple-700" />
                      <span>{step.title}</span>
                    </h3>
                    <p className="font-inter text-sm font-light text-[var(--color-amethyst)]/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
