"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Search, 
  Share2, 
  Target, 
  Mail, 
  Megaphone, 
  Bot, 
  Palette, 
  Sliders 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development & Shopify Store Setup",
    description: "fast, responsive, conversion-ready websites and e-commerce stores",
    tag: "Web & E-Com"
  },
  {
    icon: Search,
    title: "SEO & SEM",
    description: "long-term organic growth plus instant visibility on search",
    tag: "Search Growth"
  },
  {
    icon: Share2,
    title: "Social Media Marketing (SMM) & Content Writing",
    description: "content that builds trust and drives engagement",
    tag: "Content & Social"
  },
  {
    icon: Target,
    title: "Paid & Performance Marketing",
    description: "Google Ads, Meta Ads, and full-funnel campaigns built around ROI, not vanity metrics",
    tag: "High ROI Ads"
  },
  {
    icon: Mail,
    title: "Lead Generation & Email Marketing",
    description: "consistent, qualified leads delivered to your pipeline",
    tag: "Pipeline Leads"
  },
  {
    icon: Megaphone,
    title: "Influencer Marketing",
    description: "the right voices, reaching the right audience",
    tag: "Brand Reach"
  },
  {
    icon: Bot,
    title: "AI Chatbots & WhatsApp Automation",
    description: "24/7 customer engagement, powered by smart automation",
    tag: "24/7 Automation"
  },
  {
    icon: Palette,
    title: "Graphic Designing & Video Editing",
    description: "scroll-stopping creatives that make your brand impossible to ignore",
    tag: "Visual Design"
  },
  {
    icon: Sliders,
    title: "Custom Solutions",
    description: "because no two businesses grow the same way",
    tag: "Tailored Strategy"
  }
];

export default function AboutWhatWeDo() {
  return (
    <section className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-amethyst)]/20 bg-white/60 text-xs font-inter uppercase tracking-[0.2em] font-bold text-[var(--color-amethyst)] mb-4"
          >
            OUR CAPABILITIES
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-playfair font-medium uppercase tracking-tight text-[var(--color-amethyst)] leading-none mb-6"
          >
            WHAT WE DO
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-[var(--color-amethyst)]/80 font-light leading-relaxed max-w-3xl mx-auto"
          >
            We offer complete, <strong className="font-semibold text-[var(--color-amethyst)]">end-to-end digital marketing services</strong> designed to take your brand from invisible to unmissable:
          </motion.p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="hype-card p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-[var(--color-amethyst)]/15 shadow-lg flex flex-col justify-between group hover:border-[var(--color-amethyst)]/40 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent Corner Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-amethyst)] text-[var(--color-ivory)] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-purple-900 transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-[var(--color-amethyst)]/5 border border-[var(--color-amethyst)]/15 text-[var(--color-amethyst)]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-playfair font-bold text-[var(--color-amethyst)] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-base text-[var(--color-amethyst)]/75 font-inter font-light leading-relaxed">
                    — {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[var(--color-amethyst)]/10 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[var(--color-amethyst)]/50 group-hover:text-[var(--color-amethyst)] transition-colors">
                  <span>Service Details</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
